import { readFileSync } from "node:fs";
import type { ClassSettingCSS } from "./types";

export interface ProcessedStyleSettings {
  css: string;
}

/**
 * Obsidian selector fragments → Quartz equivalents.
 * Applied after toggle-class rewriting so descendant selectors
 * target the correct Quartz DOM structure.
 *
 * `null` means the selector targets Obsidian-only UI with no
 * Quartz counterpart — rules containing these are dropped.
 */
const OBSIDIAN_TO_QUARTZ: [RegExp, string | null][] = [
  // Explorer / file tree (specific before general)
  [/\.nav-folder:not\(\.is-collapsed\)/g, "li:has(> .folder-outer.open)"],
  [/\.nav-folder\.is-collapsed/g, "li:has(> .folder-outer:not(.open))"],
  [
    /\.nav-folder-title-content::before/g,
    ".explorer .folder-container::before",
  ],
  [/\.nav-folder-title-content/g, ".explorer .folder-container > div"],
  [
    /\.nav-file-title-content::before/g,
    ".explorer ul.explorer-ul li > a::before",
  ],
  [/\.nav-file-title-content/g, ".explorer .nav-files-container a"],
  [
    /\.nav-folder-title:not\(:hover\)/g,
    ".explorer .nav-folder-title:not(:hover)",
  ],
  [/\.nav-folder-title(?=[\s,:{]|$)/g, ".explorer .nav-folder-title"],
  [/\.nav-file-title(?=[\s,:{]|$)/g, ".explorer .nav-file-title"],
  [/\.nav-folder-children/g, ".explorer .tree-item-children"],
  [/\.nav-files-container/g, ".explorer .nav-files-container"],
  [/\.nav-folder\.mod-root/g, ".explorer"],
  [/\.nav-folder(?=[\s,:{]|$)/g, ".explorer li"],
  [/\.nav-file(?=[\s,:{]|$)/g, ".explorer li"],
  [/\.is-collapsed(?=[\s,:{]|$)/g, "li:has(> .folder-outer:not(.open))"],
  [/\.collapse-icon/g, ".explorer .collapse-icon"],

  // Metadata / properties
  [/\.metadata-container/g, ".note-properties"],
  [/\.metadata-property-key/g, ".note-properties-key"],
  [/\.metadata-property-value/g, ".note-properties-value"],

  // Reading view → Quartz rendered content
  [/\.markdown-preview-view/g, "body"],
  [/\.markdown-reading-view/g, "body"],

  // Inline title → article title
  [/\.inline-title/g, "h1.article-title"],

  // Status bar → footer
  [/\.status-bar/g, "footer"],

  // Canvas (Quartz has canvas support)
  [/\.canvas-node-container/g, ".canvas-node-content"],
  [/\.canvas-node(?=[\s,:{]|$)/g, ".canvas-node"],

  // Generic element translations
  [/\.svg-icon/g, "svg"],

  // Obsidian-only UI — drop rules containing these
  [/\.markdown-source-view/g, null],
  [/\.cm-editor/g, null],
  [/\.cm-s-obsidian/g, null],
  [/\.cm-hmd-/g, null],
  [/\.cm-contentContainer/g, null],
  [/\.cm-scroller/g, null],
  [/\.cm-formatting-/g, null],
  [/\.cm-line/g, null],
  [/\.cm-active/g, null],
  [/\.workspace-tab-header/g, null],
  [/\.workspace-tabs/g, null],
  [/\.workspace-tab-container/g, null],
  [/\.workspace-leaf/g, null],
  [/\.workspace-split/g, null],
  [/\.workspace-ribbon/g, null],
  [/\.workspace(?=[\s,:{]|$)/g, null],
  [/\.mod-left-split/g, null],
  [/\.mod-right-split/g, null],
  [/\.mod-root\)/g, null],
  [/\.mod-root(?=[\s,:{]|$)/g, null],
  [/\.mod-cm6/g, null],
  [/\.mod-top/g, null],
  [/\.mod-vertical/g, null],
  [/\.mod-horizontal/g, null],
  [/\.mod-left(?=[\s,:{]|$)/g, null],
  [/\.mod-right(?=[\s,:{]|$)/g, null],
  [/\.mod-sidedock/g, null],
  [/\.mod-active/g, null],
  [/\.mod-settings/g, null],
  [/\.mod-linux/g, null],
  [/\.mod-macos/g, null],
  [/\.mod-windows/g, null],
  [/\.mod-ios/g, null],
  [/\.view-header/g, null],
  [/\.view-content/g, null],
  [/\.pdfViewer/g, null],
  [/\.pdf-thumbnail-view/g, null],
  [/\.horizontal-tab-nav-item/g, null],
  [/\.vertical-tab-nav-item/g, null],
  [/\.HyperMD-/g, null],
  [/\.mk-sidebar-/g, null],
  [/\.file-explorer-flat/g, null],
  [/\.is-live-preview/g, null],
  [/\.is-mobile/g, null],
  [/\.is-tablet/g, null],
  [/\.is-focused/g, null],
  [/\.is-popout-window/g, null],
  [/\.app-container/g, null],
  [/\.sidebar-toggle-button/g, null],
  [/\.titlebar-button-container/g, null],
  [/\.style-settings-container/g, null],
  [/\.css-settings-manager/g, null],
  [/\.setting-item/g, null],
  [/\.markdown-preview-sizer/g, null],
  [/\.print(?=[\s,:{]|$)/g, null],
  [/\.is-checked/g, null],
  [/\.is-phone/g, null],
  [/\.clickable-icon/g, null],
  [/\.modal-container/g, null],
  [/\.modal-bg/g, null],
  [/\.modal(?=[\s,:{]|$)/g, null],
  [/\.dataview/g, null],
  [/\.cm-header/g, null],
];

/**
 * Rewrite class-gated CSS so selectors apply unconditionally in Quartz.
 *
 * Obsidian's Style Settings plugin toggles classes on `<body>` at runtime.
 * The build-time `extractClassToggleCss` strips the `body` element but
 * keeps the class (`.dnd`, `.theme-dark .dnd`, `.dnd .child`, etc.).
 * Since Quartz has no runtime class toggling, we rewrite:
 *
 *   `.className`   → `:root`
 *   `.theme-dark`  → `:root[saved-theme="dark"]`
 *   `.theme-light` → `:root[saved-theme="light"]`
 *
 * Then translates known Obsidian element selectors to Quartz equivalents,
 * dropping rules that target Obsidian-only UI.
 */
function rewriteClassSelectors(css: string, className: string): string {
  const escapedClass = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const classRe = new RegExp(`\\.${escapedClass}(?=[.\\s:{]|$)`, "g");

  return css
    .replace(
      /([^\n{}]+)\{([^}]*)\}/g,
      (_block, selectorGroup: string, body: string) => {
        const rewritten = selectorGroup
          .split(",")
          .map((sel: string) => {
            let s = sel.trim();
            s = s.replace(
              /\.theme-dark(?=[.\s,:{]|$)/g,
              ':root[saved-theme="dark"]',
            );
            s = s.replace(
              /\.theme-light(?=[.\s,:{]|$)/g,
              ':root[saved-theme="light"]',
            );
            s = s.replace(classRe, ":root");
            // Fix `body:root` → `:root` (body can never be the root element)
            s = s.replace(/\bbody:root\b/g, ":root");
            s = s.replace(/(:root(?:\[[^\]]*\])?)\s+:root\b/g, "$1");
            return s.trim();
          })
          .filter((sel: string) => {
            for (const [pattern, replacement] of OBSIDIAN_TO_QUARTZ) {
              if (replacement === null && pattern.test(sel)) {
                pattern.lastIndex = 0;
                return false;
              }
              pattern.lastIndex = 0;
            }
            return true;
          })
          .map((sel: string) => {
            let s = sel;
            for (const [pattern, replacement] of OBSIDIAN_TO_QUARTZ) {
              if (replacement !== null) {
                s = s.replace(pattern, replacement);
              }
            }
            return s;
          })
          .join(", ");

        if (!rewritten) return "";
        return `${rewritten} {${body}}`;
      },
    )
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function processStyleSettings(
  settings: Record<string, string | number | boolean>,
  themeId: string | string[],
  classSettingsMap?: Record<string, ClassSettingCSS>,
  brokenVarLinks?: Record<string, string[]>,
): ProcessedStyleSettings {
  const themeIds = Array.isArray(themeId) ? themeId : [themeId];
  const lightVars: string[] = [];
  const darkVars: string[] = [];
  const classCSS: string[] = [];
  const overriddenVarNames = new Set<string>();

  // Collect variables that are exclusively consumed by disabled boolean
  // toggles. These should not be emitted or bridged because they have no
  // effect without the toggle being active.
  const suppressedVarNames = new Set<string>();
  if (classSettingsMap) {
    for (const [key, value] of Object.entries(settings)) {
      const matchedId = themeIds.find((id) => key.startsWith(`${id}@@`));
      if (!matchedId) continue;
      const settingId = key.slice(matchedId.length + 2);
      if (typeof value === "boolean" && !value) {
        const entry = classSettingsMap[settingId];
        if (entry) {
          // Extract variable names referenced in this class setting's CSS
          const allCSS = [entry.general, entry.dark, entry.light]
            .filter(Boolean)
            .join(" ");
          const varRefs = allCSS.matchAll(/var\(--([a-zA-Z0-9_-]+)/g);
          for (const match of varRefs) {
            suppressedVarNames.add(`--${match[1]}`);
          }
        }
      }
    }
    // Un-suppress variables that are also consumed by ACTIVE class settings
    // or referenced elsewhere
    for (const [key, value] of Object.entries(settings)) {
      const matchedId = themeIds.find((id) => key.startsWith(`${id}@@`));
      if (!matchedId) continue;
      const settingId = key.slice(matchedId.length + 2);
      // Active boolean toggle
      if (typeof value === "boolean" && value) {
        const entry = classSettingsMap[settingId];
        if (entry) {
          const allCSS = [entry.general, entry.dark, entry.light]
            .filter(Boolean)
            .join(" ");
          const varRefs = allCSS.matchAll(/var\(--([a-zA-Z0-9_-]+)/g);
          for (const match of varRefs) {
            suppressedVarNames.delete(`--${match[1]}`);
          }
        }
      }
      // Active string class setting
      if (typeof value === "string" && value) {
        const entry = classSettingsMap[value];
        if (entry) {
          const allCSS = [entry.general, entry.dark, entry.light]
            .filter(Boolean)
            .join(" ");
          const varRefs = allCSS.matchAll(/var\(--([a-zA-Z0-9_-]+)/g);
          for (const match of varRefs) {
            suppressedVarNames.delete(`--${match[1]}`);
          }
        }
      }
    }
  }

  const settingIdToValue = new Map<string, string | number | boolean>();
  const classSelectValues = new Set<string>();

  for (const [key, value] of Object.entries(settings)) {
    const matchedId = themeIds.find((id) => key.startsWith(`${id}@@`));
    if (!matchedId) continue;
    const settingId = key.slice(matchedId.length + 2);
    settingIdToValue.set(settingId, value);

    if (typeof value === "boolean") continue;
    if (typeof value === "string" && !value) continue;

    if (typeof value === "string" && classSettingsMap) {
      const entry = classSettingsMap[value];
      if (entry !== undefined) {
        classSelectValues.add(value);
        continue;
      }
    }

    if (settingId.endsWith("@@dark")) {
      const varName = settingId.slice(0, -6);
      if (suppressedVarNames.has(`--${varName}`)) continue;
      darkVars.push(`  --${varName}: ${value};`);
      overriddenVarNames.add(`--${varName}`);
    } else if (settingId.endsWith("@@light")) {
      const varName = settingId.slice(0, -7);
      if (suppressedVarNames.has(`--${varName}`)) continue;
      lightVars.push(`  --${varName}: ${value};`);
      overriddenVarNames.add(`--${varName}`);
    } else {
      if (suppressedVarNames.has(`--${settingId}`)) continue;
      lightVars.push(`  --${settingId}: ${value};`);
      darkVars.push(`  --${settingId}: ${value};`);
      overriddenVarNames.add(`--${settingId}`);
    }
  }

  // Emit class-toggle CSS first, then class-select CSS, both in declaration
  // order. Class-select options are refinements of broader class-toggle
  // settings (e.g. "tables-no-alt-background" overrides variables set by
  // "drwn"), so they must appear later in the cascade to win.
  if (classSettingsMap) {
    for (const [classId, entry] of Object.entries(classSettingsMap)) {
      if (settingIdToValue.get(classId) === true) {
        emitClassSettingCSS(entry, classId, classCSS);
      }
    }
    for (const [classId, entry] of Object.entries(classSettingsMap)) {
      if (classSelectValues.has(classId)) {
        emitClassSettingCSS(entry, classId, classCSS);
      }
    }
  }

  if (brokenVarLinks) {
    const bridgeLight: string[] = [];
    const bridgeDark: string[] = [];
    for (const targetVar of overriddenVarNames) {
      const dependents = brokenVarLinks[targetVar];
      if (!dependents) continue;
      for (const dep of dependents) {
        if (overriddenVarNames.has(dep)) continue;
        const bridge = `  ${dep}: var(${targetVar});`;
        bridgeLight.push(bridge);
        bridgeDark.push(bridge);
      }
    }
    lightVars.push(...bridgeLight);
    darkVars.push(...bridgeDark);
  }

  const cssParts: string[] = [];

  if (lightVars.length) {
    cssParts.push(`:root {\n${lightVars.join("\n")}\n}`);
  }
  if (darkVars.length) {
    cssParts.push(`:root[saved-theme="dark"] {\n${darkVars.join("\n")}\n}`);
  }
  if (classCSS.length) {
    cssParts.push(...classCSS);
  }

  return { css: cssParts.join("\n") };
}

function emitClassSettingCSS(
  entry: ClassSettingCSS,
  className: string,
  out: string[],
): void {
  if (entry.general) {
    const result = rewriteClassSelectors(entry.general, className);
    if (result) out.push(result);
  }
  if (entry.dark) {
    const rewritten = rewriteClassSelectors(entry.dark, className);
    if (rewritten) out.push(wrapInDarkScope(rewritten));
  }
  if (entry.light) {
    const rewritten = rewriteClassSelectors(entry.light, className);
    if (rewritten) out.push(wrapInLightScope(rewritten));
  }
}

function wrapInDarkScope(css: string): string {
  return css.replace(/^([^\n{]*)\{/gm, (match, selectorGroup: string) => {
    const scoped = selectorGroup
      .split(",")
      .map((sel) => {
        const s = sel.trim();
        if (s.includes("[saved-theme=")) return s;
        if (s === ":root" || s.startsWith(":root ")) {
          return s.replace(":root", ':root[saved-theme="dark"]');
        }
        return `:root[saved-theme="dark"] ${s}`;
      })
      .join(", ");
    return scoped + " {";
  });
}

function wrapInLightScope(css: string): string {
  return css.replace(/^([^\n{]*)\{/gm, (match, selectorGroup: string) => {
    const scoped = selectorGroup
      .split(",")
      .map((sel) => {
        const s = sel.trim();
        if (s.includes("[saved-theme=")) return s;
        if (s === ":root" || s.startsWith(":root ")) {
          return s.replace(":root", ':root[saved-theme="light"]');
        }
        return `:root[saved-theme="light"] ${s}`;
      })
      .join(", ");
    return scoped + " {";
  });
}

export function loadStyleSettings(
  input: Record<string, string | number | boolean> | string,
): Record<string, string | number | boolean> {
  if (typeof input === "string") {
    return JSON.parse(readFileSync(input, "utf-8"));
  }
  return input;
}
