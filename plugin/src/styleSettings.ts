import { readFileSync } from "node:fs";
import type { ClassSettingCSS } from "./types";

export interface ProcessedStyleSettings {
  css: string;
}

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
 */
function rewriteClassSelectors(css: string, className: string): string {
  const escapedClass = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const classRe = new RegExp(`\\.${escapedClass}(?=[.\\s:{]|$)`, "g");

  return css.replace(/^([^\n{]*)\{/gm, (match, selectorGroup: string) => {
    const rewritten = selectorGroup
      .split(",")
      .map((sel) => {
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
        // Collapse `:root :root` → `:root` and
        // `:root[...] :root` → `:root[...]` (descendant of itself is identity)
        s = s.replace(/(:root(?:\[[^\]]*\])?)\s+:root\b/g, "$1");
        return s.trim();
      })
      .join(", ");

    return rewritten + " {";
  });
}

export function processStyleSettings(
  settings: Record<string, string | number | boolean>,
  themeId: string | string[],
  classSettingsMap?: Record<string, ClassSettingCSS>,
): ProcessedStyleSettings {
  const themeIds = Array.isArray(themeId) ? themeId : [themeId];
  const lightVars: string[] = [];
  const darkVars: string[] = [];
  const classCSS: string[] = [];

  for (const [key, value] of Object.entries(settings)) {
    const matchedId = themeIds.find((id) => key.startsWith(`${id}@@`));
    if (!matchedId) continue;
    const settingId = key.slice(matchedId.length + 2);

    if (typeof value === "boolean") {
      if (value && classSettingsMap?.[settingId]) {
        emitClassSettingCSS(classSettingsMap[settingId], settingId, classCSS);
      }
      continue;
    }

    if (typeof value === "string" && !value) continue;

    if (typeof value === "string" && classSettingsMap) {
      const entry = classSettingsMap[value];
      if (entry !== undefined) {
        emitClassSettingCSS(entry, value, classCSS);
        continue;
      }
    }

    if (settingId.endsWith("@@dark")) {
      const varName = settingId.slice(0, -6);
      darkVars.push(`  --${varName}: ${value};`);
    } else if (settingId.endsWith("@@light")) {
      const varName = settingId.slice(0, -7);
      lightVars.push(`  --${varName}: ${value};`);
    } else {
      lightVars.push(`  --${settingId}: ${value};`);
      darkVars.push(`  --${settingId}: ${value};`);
    }
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
    out.push(rewriteClassSelectors(entry.general, className));
  }
  if (entry.dark) {
    const rewritten = rewriteClassSelectors(entry.dark, className);
    out.push(wrapInDarkScope(rewritten));
  }
  if (entry.light) {
    const rewritten = rewriteClassSelectors(entry.light, className);
    out.push(wrapInLightScope(rewritten));
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
