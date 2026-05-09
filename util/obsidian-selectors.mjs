/**
 * Obsidian → Quartz selector translation patterns.
 *
 * Used at two stages:
 *   1. Build time (generate.js): pre-filter classSettings CSS to strip
 *      blocks targeting Obsidian-only UI before writing theme JSON files.
 *   2. Plugin time (styleSettings.ts): rewrite remaining Obsidian element
 *      selectors to their Quartz equivalents when Style Settings are applied.
 *
 * Each entry is [pattern, replacement]:
 *   - string replacement: rewrite the selector fragment
 *   - null: drop any rule containing this selector (Obsidian-only UI)
 *
 * ORDER MATTERS: specific patterns must precede their more general variants
 * (e.g. .nav-folder-title-content::before before .nav-folder-title-content).
 */

// Obsidian selectors with Quartz equivalents (specific before general)
export const REWRITE_PATTERNS = [
  [".nav-folder:not(.is-collapsed)", "li:has(> .folder-outer.open)"],
  [".nav-folder.is-collapsed", "li:has(> .folder-outer:not(.open))"],
  [".nav-folder-title-content::before", ".explorer .folder-container::before"],
  [".nav-folder-title-content", ".explorer .folder-container > div"],
  [".nav-file-title-content::before", ".explorer ul.explorer-ul li > a::before"],
  [".nav-file-title-content", ".explorer .nav-files-container a"],
  [".nav-folder-title", ".explorer .nav-folder-title"],
  [".nav-file-title", ".explorer .nav-file-title"],
  [".nav-folder-children", ".explorer .tree-item-children"],
  [".nav-files-container", ".explorer .nav-files-container"],
  [".nav-folder.mod-root", ".explorer"],
  [".is-collapsed", "li:has(> .folder-outer:not(.open))"],
  [".collapse-icon", ".explorer .collapse-icon"],
  [".metadata-container", ".note-properties"],
  [".metadata-property-key", ".note-properties-key"],
  [".metadata-property-value", ".note-properties-value"],
  [".markdown-preview-view", "body"],
  [".markdown-reading-view", "body"],
  [".inline-title", "h1.article-title"],
  [".status-bar", "footer"],
  [".canvas-node-container", ".canvas-node-content"],
  [".svg-icon", "svg"],
];

// Obsidian-only selectors — rules containing these are dropped entirely.
// Sorted by frequency (most common first) for fast short-circuit matching.
export const DROP_PATTERNS = [
  ".markdown-source-view",
  ".cm-editor",
  ".cm-s-obsidian",
  ".cm-hmd-",
  ".cm-contentContainer",
  ".cm-scroller",
  ".cm-formatting-",
  ".cm-line",
  ".cm-active",
  ".cm-header",
  ".workspace-tab-header",
  ".workspace-tabs",
  ".workspace-tab-container",
  ".workspace-leaf",
  ".workspace-split",
  ".workspace-ribbon",
  ".mod-left-split",
  ".mod-right-split",
  ".mod-cm6",
  ".mod-top",
  ".mod-vertical",
  ".mod-horizontal",
  ".mod-sidedock",
  ".mod-active",
  ".mod-settings",
  ".mod-linux",
  ".mod-macos",
  ".mod-windows",
  ".mod-ios",
  ".view-header",
  ".view-content",
  ".pdfViewer",
  ".pdf-thumbnail-view",
  ".horizontal-tab-nav-item",
  ".vertical-tab-nav-item",
  ".HyperMD-",
  ".mk-sidebar-",
  ".file-explorer-flat",
  ".is-live-preview",
  ".is-mobile",
  ".is-tablet",
  ".is-focused",
  ".is-popout-window",
  ".is-checked",
  ".is-phone",
  ".app-container",
  ".sidebar-toggle-button",
  ".titlebar-button-container",
  ".style-settings-container",
  ".css-settings-manager",
  ".setting-item",
  ".markdown-preview-sizer",
  ".clickable-icon",
  ".modal-container",
  ".modal-bg",
  ".dataview",
  ".side-dock-actions",
  ".side-dock-settings",
  ".horizontal-main-container",
  ".mobile-navbar",
  ".nav-buttons-container",
  ".CodeMirror-",
];

// Boundary-sensitive drop patterns (need word-boundary check to avoid
// false positives like .mod-root matching .mod-rooter)
export const DROP_PATTERNS_BOUNDARY = [
  ".workspace",
  ".mod-root",
  ".mod-left",
  ".mod-right",
  ".modal",
  ".print",
];

/**
 * Test whether a CSS selector should be dropped (targets Obsidian-only UI).
 * @param {string} selector - A single CSS selector (not comma-separated)
 * @returns {boolean}
 */
export function shouldDropSelector(selector) {
  for (const pattern of DROP_PATTERNS) {
    if (selector.includes(pattern)) return true;
  }
  for (const pattern of DROP_PATTERNS_BOUNDARY) {
    const idx = selector.indexOf(pattern);
    if (idx === -1) continue;
    const afterEnd = idx + pattern.length;
    if (afterEnd >= selector.length) return true;
    const next = selector[afterEnd];
    if (/[\s,:{)\]]/.test(next) || next === undefined) return true;
  }
  return false;
}

/**
 * Rewrite known Obsidian element selectors in a single CSS selector string
 * to their Quartz equivalents.
 * @param {string} selector - A single CSS selector (not comma-separated)
 * @returns {string}
 */
export function rewriteSelector(selector) {
  let s = selector;
  for (const [from, to] of REWRITE_PATTERNS) {
    // Nav-folder/nav-file need word-boundary awareness
    if (from === ".nav-folder" || from === ".nav-file" || from === ".canvas-node"
        || from === ".is-collapsed" || from === ".workspace") {
      const idx = s.indexOf(from);
      if (idx === -1) continue;
      const afterEnd = idx + from.length;
      if (afterEnd < s.length && /[a-zA-Z0-9_-]/.test(s[afterEnd])) continue;
      s = s.slice(0, idx) + to + s.slice(afterEnd);
    } else {
      s = s.replaceAll(from, to);
    }
  }
  return s;
}

/**
 * Filter a CSS string by removing blocks whose selectors target Obsidian-only UI.
 * Blocks with mixed selectors (some Quartz-compatible, some Obsidian-only) have
 * the Obsidian-only selectors stripped from the comma list.
 *
 * @param {string} css - Raw CSS string (multiple rule blocks)
 * @returns {string} - Filtered CSS with Obsidian-only blocks removed
 */
export function filterObsidianCSS(css) {
  return css
    .replace(
      /([^\n{}]+)\{([^}]*)\}/g,
      (_block, selectorGroup, body) => {
        const selectors = selectorGroup.split(",").map((s) => s.trim());
        const kept = selectors.filter((sel) => !shouldDropSelector(sel));
        if (kept.length === 0) return "";
        return `${kept.join(", ")} {${body}}`;
      },
    )
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
