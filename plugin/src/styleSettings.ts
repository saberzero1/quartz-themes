import { readFileSync } from "node:fs";

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
 *   `.className`   → `body`
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
        s = s.replace(classRe, "body");
        s = s.replace(/\bbody\s+body\b/g, "body");
        return s.trim();
      })
      .join(", ");

    return rewritten + " {";
  });
}

export function processStyleSettings(
  settings: Record<string, string | number | boolean>,
  themeId: string | string[],
  classSettingsMap?: Record<string, string>,
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
      // class-toggle: extract pre-compiled CSS for this class
      if (value && classSettingsMap?.[settingId]) {
        classCSS.push(
          rewriteClassSelectors(classSettingsMap[settingId], settingId),
        );
      }
      continue;
    }

    if (typeof value === "string" && !value) continue;

    // class-select: value is the class name to activate
    if (typeof value === "string" && classSettingsMap) {
      const classCSSnippet = classSettingsMap[value];
      if (classCSSnippet !== undefined) {
        classCSS.push(rewriteClassSelectors(classCSSnippet, value));
        continue;
      }
    }

    // Themed color: keys end with @@dark or @@light
    if (settingId.endsWith("@@dark")) {
      const varName = settingId.slice(0, -6);
      darkVars.push(`  --${varName}: ${value};`);
    } else if (settingId.endsWith("@@light")) {
      const varName = settingId.slice(0, -7);
      lightVars.push(`  --${varName}: ${value};`);
    } else {
      // Non-themed variable — apply to both modes
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

export function loadStyleSettings(
  input: Record<string, string | number | boolean> | string,
): Record<string, string | number | boolean> {
  if (typeof input === "string") {
    return JSON.parse(readFileSync(input, "utf-8"));
  }
  return input;
}
