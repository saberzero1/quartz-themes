import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sandover",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["special-elite"],
    fontFiles: [
      {
        family: "TT2020 Base",
        style: "italic",
        weight: "normal",
        file: "tt2020-base.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "TT2020 Base",
        style: "normal",
        weight: "normal",
        file: "tt2020-base-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "TT2020 Base",
        style: "bold",
        weight: "700",
        file: "tt2020-base-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "TT2020 Base",
        style: "italic",
        weight: "bold",
        file: "tt2020-base-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "sandover-theme-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 9;
  --accent-s: 89%;
  --background-modifier-active-hover: var(--color-salmon, #ff8671);
  --background-modifier-border-focus: var(--interactive-accent, hsl(9, 89%, 66%));
  --background-primary: var(--color-dark1-rgb, #282828);
  --background-secondary: var(--color-dark1-rgb, #282828);
  --bases-cards-background: var(--background-primary, #282828);
  --bases-cards-radius: var(--radius-m, 0px);
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --bases-table-cell-background-active: var(--background-primary, #282828);
  --bases-table-cell-background-selected: var(--table-selection, hsla(9, 89%, 66%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-header-background: var(--background-primary, #282828);
  --bases-table-header-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --bases-table-summary-background: var(--background-primary, #282828);
  --blockquote-border-color: var(--interactive-accent, none);
  --blockquote-color: var(--color-cyan, #53dfdd);
  --bodyFont: var(--font-text-theme, var(--font-general), var(--font-text-override));
  --border-width-alt: 1px;
  --button-radius: var(--input-radius, 0px);
  --callout-border-opacity: 0.4;
  --callout-border-width: 1px;
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--color-purple-rgb, 197, 133, 204);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-important: var(--color-cyan-rgb, 197, 133, 204);
  --callout-info: var(--color-blue-rgb, 224, 222, 113);
  --callout-note: 2, 122, 255;
  --callout-question: var(--color-orange-rgb, 250, 153, 205);
  --callout-quote: 68, 207, 110;
  --callout-radius: var(--radius-s, 0px);
  --callout-success: var(--color-green-rgb, 251, 70, 76);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--color-cyan-rgb, 255, 169, 154);
  --callout-todo: var(--color-blue-rgb, 68, 207, 110);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, #282828);
  --canvas-card-label-color: var(--text-faint, rgba(#fffcf4, 0.5));
  --canvas-color-1: var(--sandover-purple-rgb, 197, 133, 204);
  --canvas-color-3: var(--color-blue-rgb, 2, 122, 255);
  --canvas-color-4: var(--color-red-rgb, 251, 70, 76);
  --canvas-color-5: var(--color-yellow-rgb, 224, 222, 113);
  --canvas-color-6: var(--color-green-rgb, 68, 207, 110);
  --canvas-controls-radius: var(--radius-s, 0px);
  --canvas-dot-pattern: var(--color-salmon-lighter, #ffa99a);
  --caret-color: var(--text-normal, #fffcf4);
  --checkbox-border-color: var(--text-faint, rgba(#fffcf4, 0.5));
  --checkbox-border-color-hover: var(--text-muted, rgba(#fffcf4, 0.8));
  --checkbox-color: var(--interactive-accent, hsl(9, 89%, 66%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(6, 90.78%, 75.9%));
  --checkbox-marker-color: var(--background-primary, #282828);
  --checkbox-radius: var(--radius-s, 0);
  --checklist-done-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-comment: var(--sandover-purple, #c585cc);
  --code-function: var(--color-cyan, #53dfdd);
  --code-keyword: var(--color-green, #44cf6e);
  --code-normal: var(--text-normal, #fffcf4);
  --code-operator: var(--code-normal, #fffcf4);
  --code-property: var(--code-normal, #fffcf4);
  --code-punctuation: var(--code-normal, #fffcf4);
  --code-radius: var(--radius-s, 0px);
  --code-string: var(--color-cyan, #53dfdd);
  --code-value: var(--color-blue, #027aff);
  --collapse-icon-color: var(--text-faint, rgba(#fffcf4, 0.5));
  --collapse-icon-color-collapsed: var(--text-accent, #ff8671);
  --color-dark1: #282828;
  --color-dark1-rgb: var(--color-dark1, #282828);
  --color-darker-purple: 153, 119, 181;
  --color-gray-rgb: 240, 240, 240;
  --color-light1: #fffcf4;
  --color-light1-rgb: var(--color-light1, #fffcf4);
  --color-salmon: #ff8671;
  --color-salmon-lighter: #ffa99a;
  --color-salmon-lighter-rgb: 255, 169, 154;
  --color-salmon-rgb: 255, 134, 113;
  --color-yellow-light: #ffe5a7;
  --color-yellow-light-rgb: 255, 229, 167;
  --dark: var(--text-normal, var(--color-light1, #fffcf4));
  --darkgray: var(--text-normal, var(--color-light1, #fffcf4));
  --divider-color-hover: var(--interactive-accent, hsl(9, 89%, 66%));
  --file-header-background: var(--background-primary, #282828);
  --file-header-background-focused: var(--background-primary, #282828);
  --file-header-font: var(--font-interface, "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-color: var(--text-normal, #fffcf4);
  --font-general: "TT2020 Base";
  --font-interface-theme: var(--font-general, "TT2020 Base");
  --font-mermaid: var(--font-text, "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "TT2020 Base";
  --font-text-theme: var(--font-general), var(--font-text-override);
  --footnote-id-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(#fffcf4, 0.5));
  --footnote-radius: var(--radius-s, 0px);
  --graph-node: var(--text-muted, rgba(#fffcf4, 0.8));
  --graph-node-focused: var(--text-accent, #ff8671);
  --graph-node-unresolved: var(--text-faint, rgba(#fffcf4, 0.5));
  --graph-text: var(--text-normal, #fffcf4);
  --gray: var(--text-muted, rgba(var(--color-light1-rgb), 0.8));
  --h1-color: var(--sandover-purple, #c585cc);
  --h1-size: 1.5em;
  --h1-style: bold;
  --h1-weight: 600;
  --h2-size: 1.4em;
  --h2-weight: 600;
  --h3-size: 1.3em;
  --h3-weight: 500;
  --h4-size: 1.1em;
  --h4-weight: 500;
  --h5-size: 1em;
  --h5-weight: 500;
  --h6-size: 0.85em;
  --h6-weight: 400;
  --headerFont: var(--font-text-theme, var(--font-general), var(--font-text-override));
  --heading-formatting: var(--text-faint, rgba(#fffcf4, 0.5));
  --highlight: var(--text-highlight-bg, rgba(var(--color-yellow-light-rgb), 0.3));
  --icon-color: var(--text-muted, #fffcf4);
  --icon-color-active: var(--text-accent, #c585cc);
  --icon-color-focused: var(--text-normal, #fffcf4);
  --icon-color-focused-active: 197, 133, 204;
  --icon-color-hover: var(--text-muted, #fffcf4);
  --icon-muted: 0.5;
  --indentation-guide-color: var(--color-base-25, #2a2a2a);
  --indentation-guide-color-active: var(--sandover-purple, #c585cc);
  --inline-title-color: var(--h1-color, #c585cc);
  --inline-title-size: var(--h1-size, 1.5em);
  --inline-title-style: var(--h1-style, bold);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, rgba(#fffcf4, 0.5));
  --input-placeholder-color: var(--text-faint, rgba(#fffcf4, 0.5));
  --input-radius: 0px;
  --interactive-accent: var(--color-accent, hsl(9, 89%, 66%));
  --interactive-accent-hover: var(--color-accent-1, hsl(6, 90.78%, 75.9%));
  --interactive-accent-hsl: var(--color-accent-hsl, 9, 89%, 66%);
  --light: var(--background-primary, var(--color-dark1-rgb, #282828));
  --lightgray: var(--background-secondary, var(--color-dark1-rgb, #282828));
  --line-height: 1.5;
  --line-height-normal: var(--line-height, 1.5);
  --line-width: 40rem;
  --link-color: var(--color-salmon, #ff8671);
  --link-color-hover: var(--text-accent-hover, hsl(4, 93.45%, 85.14%));
  --link-decoration: none;
  --link-external-color: var(--text-accent, #ff8671);
  --link-external-color-hover: var(--text-accent-hover, hsl(4, 93.45%, 85.14%));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, #ff8671);
  --list-marker-color: var(--color-light1, #fffcf4);
  --list-marker-color-collapsed: var(--text-accent, #ff8671);
  --list-marker-color-hover: var(--text-muted, rgba(#fffcf4, 0.8));
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: var(--background-secondary, #282828);
  --menu-radius: var(--radius-m, 0px);
  --metadata-input-font: var(--font-interface, "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #fffcf4);
  --metadata-label-font: var(--font-interface, "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --metadata-label-text-color-hover: var(--text-muted, rgba(#fffcf4, 0.8));
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --modal-background: var(--background-primary, #282828);
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgba(#fffcf4, 0.5));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(#fffcf4, 0.5));
  --nav-heading-color: var(--text-normal, #fffcf4);
  --nav-heading-color-collapsed: var(--text-faint, rgba(#fffcf4, 0.5));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(#fffcf4, 0.8));
  --nav-heading-color-hover: var(--text-normal, #fffcf4);
  --nav-indentation-guide-color: var(--indentation-guide-color, #2a2a2a);
  --nav-item-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --nav-item-color-active: var(--text-normal, #fffcf4);
  --nav-item-color-highlighted: var(--text-accent, #ff8671);
  --nav-item-color-hover: var(--text-normal, #ff8671);
  --nav-item-color-selected: var(--text-normal, #fffcf4);
  --nav-item-radius: var(--radius-s, 0px);
  --nav-tag-color: var(--text-faint, rgba(#fffcf4, 0.5));
  --nav-tag-color-active: var(--text-muted, rgba(#fffcf4, 0.8));
  --nav-tag-color-hover: var(--text-muted, rgba(#fffcf4, 0.8));
  --nav-tag-radius: var(--radius-s, 0px);
  --normal-weight: 500;
  --pdf-background: var(--background-primary, #282828);
  --pdf-page-background: var(--background-primary, #282828);
  --pdf-sidebar-background: var(--background-primary, #282828);
  --pill-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --pill-color-hover: var(--text-normal, #fffcf4);
  --pill-color-remove: var(--text-faint, rgba(#fffcf4, 0.5));
  --pill-color-remove-hover: var(--text-accent, #ff8671);
  --prompt-background: var(--background-primary, #282828);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --ribbon-background: rgba(var(--color-dark1-rgb), 0.5);
  --ribbon-background-collapsed: rgba(var(--color-dark1-rgb), 0.5);
  --sandover-purple: #c585cc;
  --sandover-purple-rgb: 197, 133, 204;
  --scrollbar-radius: var(--radius-l, 0px);
  --search-clear-button-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --search-icon-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --search-result-background: var(--background-primary, #282828);
  --secondary: var(--text-accent, var(--color-salmon, #ff8671));
  --setting-group-heading-color: var(--text-normal, #fffcf4);
  --setting-items-radius: var(--radius-l, 0px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(#fffcf4, 0.8));
  --shiki-code-block-border-radius: var(--code-radius, 0px);
  --shiki-code-comment: var(--text-faint, rgba(#fffcf4, 0.5));
  --shiki-code-normal: var(--text-muted, rgba(#fffcf4, 0.8));
  --shiki-code-punctuation: var(--text-muted, rgba(#fffcf4, 0.8));
  --shiki-gutter-text-color: var(--text-faint, rgba(#fffcf4, 0.5));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(#fffcf4, 0.8));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(#fffcf4, 0.8));
  --shiki-terminal-dots-color: var(--text-faint, rgba(#fffcf4, 0.5));
  --slider-thumb-radius: var(--slider-thumb-height, 0px);
  --status-bar-background: var(--background-secondary, #282828);
  --status-bar-border-color: var(--divider-color, #141300);
  --status-bar-radius: var(--radius-m, 0px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, rgba(#fffcf4, 0.8));
  --suggestion-background: var(--background-primary, #282828);
  --tab-background-active: var(--background-primary, #282828);
  --tab-container-background: var(--background-secondary, #282828);
  --tab-font-weight: 500;
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-switcher-background: var(--background-secondary, #282828);
  --tab-text-color: var(--text-faint, rgba(#fffcf4, 0.5));
  --tab-text-color-active: var(--text-muted, rgba(#fffcf4, 0.8));
  --tab-text-color-focused: var(--text-muted, rgba(#fffcf4, 0.8));
  --tab-text-color-focused-active: var(--text-muted, #fffcf4);
  --tab-text-color-focused-active-current: var(--text-normal, #fffcf4);
  --tab-text-color-focused-highlighted: var(--text-accent, #ff8671);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(9, 89%, 66%));
  --table-drag-handle-color: var(--text-faint, rgba(#fffcf4, 0.5));
  --table-header-weight: var(--font-bold, 700);
  --table-selection-border-color: var(--interactive-accent, hsl(9, 89%, 66%));
  --tag-color: var(--color-salmon, #ff8671);
  --tag-color-hover: var(--text-accent, #ff8671);
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .3em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(4, 93.45%, 85.14%)));
  --text-accent: var(--color-salmon, #ff8671);
  --text-accent-hover: var(--color-accent-2, hsl(4, 93.45%, 85.14%));
  --text-faint: rgba(var(--color-light1-rgb), 0.5);
  --text-highlight-bg: rgba(var(--color-yellow-light-rgb), 0.3);
  --text-muted: rgba(var(--color-light1-rgb), 0.8);
  --text-normal: var(--color-light1, #fffcf4);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-yellow-light-rgb), 0.3));
  --titleFont: var(--font-text-theme, var(--font-general), var(--font-text-override));
  --titlebar-background: var(--color-salmon, #ff8671);
  --titlebar-background-focused: var(--color-salmon, #ff8671);
  --titlebar-text-color: var(--text-muted, #000000);
  --titlebar-text-color-focused: var(--color-light1, #fffcf4);
  --titlebar-text-weight: var(--font-bold, 300);
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --top-left-padding-y: 0px;
  --vault-name-font-weight: 700;
  --vault-profile-color: var(--text-normal, #fffcf4);
  --vault-profile-color-hover: var(--vault-profile-color, #fffcf4);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #282828);
  background-color: var(--tab-container-background, rgb(40, 40, 40));
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(40, 40, 40));
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(40, 40, 40));
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #282828);
  background-color: var(--tab-container-background, rgb(40, 40, 40));
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body html {
  --color-blue: #537791;
  --color-blue-rgb: 83, 119, 145;
  --color-cyan: #a6e6e3;
  --color-cyan-rgb: 166, 230, 227;
  --color-dark1: #282828;
  --color-dark1-rgb: 40, 40, 40;
  --color-darker-purple: 153, 119, 181;
  --color-gray-rgb: 240, 240, 240;
  --color-green: #ace099;
  --color-green-rgb: 172, 224, 153;
  --color-light1: #fffcf4;
  --color-light1-rgb: 255, 252, 244;
  --color-orange: #ff5400;
  --color-orange-rgb: 255, 84, 0;
  --color-pink: #fc62a2;
  --color-red: #ff394d;
  --color-red-rgb: 255, 57, 77;
  --color-salmon: #ff8671;
  --color-salmon-lighter: #ffa99a;
  --color-salmon-lighter-rgb: 255, 169, 154;
  --color-salmon-rgb: 255, 134, 113;
  --color-yellow: #ffd77d;
  --color-yellow-light: #ffe5a7;
  --color-yellow-light-rgb: 255, 229, 167;
  --color-yellow-rgb: 255, 215, 125;
  --sandover-purple: #c585cc;
  --sandover-purple-rgb: 197, 133, 204;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(255, 252, 244));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(255, 252, 244));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(255, 252, 244));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(255, 252, 244));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(255, 252, 244));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 229, 167, 0.3));
  color: var(--text-normal, rgb(255, 252, 244));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-radius: 0px;
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(245, 114, 91));
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(255, 252, 244));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(255, 134, 113));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration-color: rgb(255, 134, 113);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(255, 134, 113));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration-color: rgb(255, 134, 113);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(255, 134, 113));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgba(245, 114, 91, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(245, 114, 91, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 252, 244);
  margin-bottom: 0px;
  margin-left: 26.256px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 252, 244);
  margin-bottom: 0px;
  margin-left: 26.256px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(255, 252, 244));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgb(83, 223, 221));
  font-family: "TT2020 Base", "??";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body td {
  color: var(--table-text-color, rgb(255, 252, 244));
}

html[saved-theme="dark"] body th {
  color: var(--table-header-color, rgb(255, 252, 244));
  font-weight: var(--table-header-weight, 700);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(255, 252, 244));
  font-family: var(--font-monospace, "??", "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(197, 133, 204);
  border-bottom-width: 0px;
  border-left-color: rgb(197, 133, 204);
  border-left-width: 0px;
  border-right-color: rgb(197, 133, 204);
  border-right-width: 0px;
  border-top-color: rgb(197, 133, 204);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-muted, rgb(255, 252, 244));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(245, 114, 91);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: rgb(255, 252, 244);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 4px;
  margin-top: 0px;
  width: var(--checkbox-size, 12px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-color: rgba(83, 223, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 197, 133, 204);
  background: rgba(197, 133, 204, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(197, 133, 204, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(197, 133, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(197, 133, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(197, 133, 204, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 224, 222, 113);
  background: rgba(224, 222, 113, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(224, 222, 113, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 222, 113, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(224, 222, 113, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(224, 222, 113, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 250, 153, 205);
  background: rgba(250, 153, 205, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 153, 205, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 153, 205, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(250, 153, 205, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(250, 153, 205, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 68, 207, 110);
  background: rgba(68, 207, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(68, 207, 110, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 251, 70, 76);
  background: rgba(251, 70, 76, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 255, 169, 154);
  background: rgba(255, 169, 154, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 169, 154, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 154, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 154, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 154, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 68, 207, 110);
  background: rgba(68, 207, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(68, 207, 110, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-color: rgba(233, 151, 63, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(255, 252, 244));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(40, 40, 40));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(9, 89%, 66%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(9, 89%, 66%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(9, 89%, 66%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(9, 89%, 66%, 0.15));
  --pill-color: var(--tag-color, #ff8671);
  --pill-color-hover: var(--tag-color-hover, #ff8671);
  --pill-color-remove: var(--tag-color, #ff8671);
  --pill-color-remove-hover: var(--tag-color-hover, #ff8671);
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, .5em);
  --pill-padding-y: var(--tag-padding-y, .2em);
  --pill-radius: var(--tag-radius, .3em);
  background-color: var(--pill-background, rgba(245, 114, 91, 0.1));
  border-bottom-color: rgba(245, 114, 91, 0.15);
  border-bottom-left-radius: 4.2px;
  border-bottom-right-radius: 4.2px;
  border-bottom-width: 0px;
  border-left-color: rgba(245, 114, 91, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(245, 114, 91, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(245, 114, 91, 0.15);
  border-top-left-radius: 4.2px;
  border-top-right-radius: 4.2px;
  border-top-width: 0px;
  color: var(--pill-color, rgb(255, 134, 113));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(255, 134, 113);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 600);
  border-bottom-color: rgb(197, 133, 204);
  border-bottom-width: 0px;
  border-left-color: rgb(197, 133, 204);
  border-left-width: 0px;
  border-right-color: rgb(197, 133, 204);
  border-right-width: 0px;
  border-top-color: rgb(197, 133, 204);
  border-top-width: 0px;
  color: var(--h1-color, rgb(197, 133, 204));
  font-family: var(--h1-font, "TT2020 Base", "??");
  font-size: var(--h1-size, 24px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h1-letter-spacing, -0.36px);
  line-height: var(--h1-line-height, 28.8px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(197, 133, 204));
  font-size: var(--inline-title-size, 24px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: var(--h2-color, rgb(255, 252, 244));
  font-family: var(--h2-font, "TT2020 Base", "??");
  font-size: var(--h2-size, 22.4px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.2464px);
  line-height: var(--h2-line-height, 26.88px);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(197, 133, 204);
  border-bottom-width: 0px;
  border-left-color: rgb(197, 133, 204);
  border-left-width: 0px;
  border-right-color: rgb(197, 133, 204);
  border-right-width: 0px;
  border-top-color: rgb(197, 133, 204);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(197, 133, 204));
  font-family: var(--inline-title-font, "TT2020 Base", "??");
  font-size: var(--inline-title-size, 24px);
  font-weight: var(--inline-title-weight, 600);
  letter-spacing: -0.36px;
  line-height: var(--inline-title-line-height, 28.8px);
  margin-bottom: 12px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 500);
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: var(--h3-color, rgb(255, 252, 244));
  font-family: var(--h3-font, "TT2020 Base", "??");
  font-size: var(--h3-size, 20.8px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h3-letter-spacing, -0.1664px);
  line-height: var(--h3-line-height, 27.04px);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 500);
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: var(--h4-color, rgb(255, 252, 244));
  font-family: var(--h4-font, "TT2020 Base", "??");
  font-size: var(--h4-size, 17.6px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h4-letter-spacing, -0.088px);
  line-height: var(--h4-line-height, 24.64px);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 500);
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: var(--h5-color, rgb(255, 252, 244));
  font-family: var(--h5-font, "TT2020 Base", "??");
  font-size: var(--h5-size, 16px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h5-letter-spacing, -0.032px);
  line-height: var(--h5-line-height, 24px);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 400);
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: var(--h6-color, rgb(255, 252, 244));
  font-family: var(--h6-font, "TT2020 Base", "??");
  font-size: var(--h6-size, 13.6px);
  font-weight: var(--font-weight, 400);
  line-height: var(--h6-line-height, 20.4px);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(42, 42, 42);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(255, 252, 244));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(255, 252, 244));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 252, 244);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(255, 252, 244));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(40, 40, 40));
  border-bottom-color: rgb(20, 19, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(20, 19, 0);
  border-left-width: 0px;
  border-right-color: rgb(20, 19, 0);
  border-right-width: 0px;
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(255, 252, 244));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 252, 244);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(255, 252, 244));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(255, 252, 244));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(255, 252, 244));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(255, 252, 244);
  stroke: rgb(255, 252, 244);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(255, 252, 244));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(255, 252, 244));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(40, 40, 40));
  border-color: rgb(255, 252, 244);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  color: var(--table-header-color, rgb(255, 252, 244));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  color: var(--text-muted, rgb(255, 252, 244));
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(255, 252, 244);
  font-family: var(--metadata-label-font, "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(255, 252, 244);
  font-family: var(--metadata-input-font, "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(9, 89%, 66%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(9, 89%, 66%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(9, 89%, 66%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(9, 89%, 66%, 0.15));
  --pill-color: var(--tag-color, #ff8671);
  --pill-color-hover: var(--tag-color-hover, #ff8671);
  --pill-color-remove: var(--tag-color, #ff8671);
  --pill-color-remove-hover: var(--tag-color-hover, #ff8671);
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, .5em);
  --pill-padding-y: var(--tag-padding-y, .2em);
  --pill-radius: var(--tag-radius, .3em);
  background-color: var(--pill-background, rgba(245, 114, 91, 0.1));
  border-radius: 4.2px;
  color: var(--pill-color, rgb(255, 134, 113));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(40, 40, 40));
  color: var(--text-normal, rgb(255, 252, 244));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(40, 40, 40));
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(255, 134, 113));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(255, 252, 244);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(40, 40, 40));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: var(--text-normal, rgb(255, 252, 244));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
  color: var(--text-normal, rgb(255, 252, 244));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(255, 252, 244));
  font-family: var(--font-monospace, "??", "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 252, 244);
  border-left-width: 0px;
  border-right-color: rgb(255, 252, 244);
  border-right-width: 0px;
  border-top-color: rgb(255, 252, 244);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(245, 114, 91, 0.1));
  border-bottom-color: rgba(245, 114, 91, 0.15);
  border-bottom-left-radius: 3.675px;
  border-bottom-right-radius: 3.675px;
  border-bottom-width: 0px;
  border-left-color: rgba(245, 114, 91, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(245, 114, 91, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(245, 114, 91, 0.15);
  border-top-left-radius: 3.675px;
  border-top-right-radius: 3.675px;
  border-top-width: 0px;
  color: var(--tag-color, rgb(255, 134, 113));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 9;
  --accent-s: 89%;
  --background-modifier-active-hover: var(--color-salmon-lighter, #ffa99a);
  --background-modifier-border-focus: var(--interactive-accent, hsl(9, 89%, 66%));
  --background-modifier-border-hover: var(--color-base-35, #fffcf4);
  --background-primary: var(--color-light1, #fffcf4);
  --background-primary-alt: var(--color-light1, #fffcf4);
  --background-secondary: var(--color-light1, #fffcf4);
  --bases-cards-background: var(--background-primary, #fffcf4);
  --bases-cards-cover-background: var(--background-primary-alt, #fffcf4);
  --bases-cards-radius: var(--radius-m, 0px);
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, #000000);
  --bases-table-cell-background-active: var(--background-primary, #fffcf4);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #fffcf4);
  --bases-table-cell-background-selected: var(--table-selection, hsla(9, 89%, 66%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-group-background: var(--background-primary-alt, #fffcf4);
  --bases-table-header-background: var(--background-primary, #fffcf4);
  --bases-table-header-color: var(--text-muted, #000000);
  --bases-table-summary-background: var(--background-primary, #fffcf4);
  --blockquote-border-color: var(--interactive-accent, none);
  --blockquote-color: var(--color-blue, #086ddd);
  --bodyFont: var(--font-text-theme, var(--font-general), var(--font-text-override));
  --border-width-alt: 1px;
  --button-radius: var(--input-radius, 0px);
  --callout-border-opacity: 0.4;
  --callout-border-width: 1px;
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--color-purple-rgb, 197, 133, 204);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-important: var(--color-cyan-rgb, 197, 133, 204);
  --callout-info: var(--color-blue-rgb, 224, 172, 0);
  --callout-note: 8, 109, 221;
  --callout-question: var(--color-orange-rgb, 213, 57, 132);
  --callout-quote: 8, 185, 78;
  --callout-radius: var(--radius-s, 0px);
  --callout-success: var(--color-green-rgb, 233, 49, 71);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--color-cyan-rgb, 255, 169, 154);
  --callout-todo: var(--color-blue-rgb, 8, 185, 78);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --canvas-background: var(--background-primary, #fffcf4);
  --canvas-card-label-color: var(--text-faint, #000000);
  --canvas-color-1: var(--sandover-purple-rgb, 197, 133, 204);
  --canvas-color-3: var(--color-blue-rgb, 8, 109, 221);
  --canvas-color-4: var(--color-red-rgb, 233, 49, 71);
  --canvas-color-5: var(--color-yellow-rgb, 224, 172, 0);
  --canvas-color-6: var(--color-green-rgb, 8, 185, 78);
  --canvas-controls-radius: var(--radius-s, 0px);
  --canvas-dot-pattern: var(--color-salmon-lighter, #ffa99a);
  --caret-color: var(--text-normal, #000000);
  --checkbox-border-color: var(--text-faint, #000000);
  --checkbox-border-color-hover: var(--text-muted, #000000);
  --checkbox-color: var(--interactive-accent, hsl(9, 89%, 66%));
  --checkbox-color-hover: var(--interactive-accent-hover, #ff8671);
  --checkbox-marker-color: var(--background-primary, #fffcf4);
  --checkbox-radius: var(--radius-s, 0);
  --checklist-done-color: var(--text-muted, #000000);
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--background-primary-alt, #fffcf4);
  --code-comment: var(--sandover-purple, #c585cc);
  --code-function: var(--color-cyan, #00bfbc);
  --code-keyword: var(--color-green, #08b94e);
  --code-normal: var(--text-normal, #000000);
  --code-operator: var(--code-normal, #000000);
  --code-property: var(--code-normal, #000000);
  --code-punctuation: var(--code-normal, #000000);
  --code-radius: var(--radius-s, 0px);
  --code-string: var(--color-cyan, #00bfbc);
  --code-value: var(--color-blue, #086ddd);
  --collapse-icon-color: var(--text-faint, #000000);
  --collapse-icon-color-collapsed: var(--text-accent, #ff8671);
  --color-base-35: #fffcf4;
  --color-dark1: #282828;
  --color-dark1-rgb: 40, 40, 40;
  --color-darker-purple: 153, 119, 181;
  --color-gray-rgb: 240, 240, 240;
  --color-light1: #fffcf4;
  --color-light1-rgb: 255, 252, 244;
  --color-salmon: #ff8671;
  --color-salmon-lighter: #ffa99a;
  --color-salmon-lighter-rgb: 255, 169, 154;
  --color-salmon-rgb: 255, 134, 113;
  --color-yellow-light: #ffe5a7;
  --color-yellow-light-rgb: 255, 229, 167;
  --dark: var(--text-normal, var(--color-base-100, #000000));
  --darkgray: var(--text-normal, var(--color-base-100, #000000));
  --divider-color-hover: var(--interactive-accent, hsl(9, 89%, 66%));
  --dropdown-background-hover: var(--interactive-hover, rgba(#ff8671, 0.5));
  --file-header-background: var(--background-primary, #fffcf4);
  --file-header-background-focused: var(--background-primary, #fffcf4);
  --file-header-font: var(--font-interface, "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-color: var(--text-normal, #000000);
  --font-general: "TT2020 Base";
  --font-interface-theme: var(--font-general, "TT2020 Base");
  --font-mermaid: var(--font-text, "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "TT2020 Base";
  --font-text-theme: var(--font-general), var(--font-text-override);
  --footnote-id-color: var(--text-muted, #000000);
  --footnote-id-color-no-occurrences: var(--text-faint, #000000);
  --footnote-radius: var(--radius-s, 0px);
  --graph-node: var(--text-muted, #000000);
  --graph-node-focused: var(--text-accent, #ff8671);
  --graph-node-unresolved: var(--text-faint, #000000);
  --graph-text: var(--text-normal, #000000);
  --gray: var(--text-muted, var(--color-base-70, #000000));
  --h1-color: var(--sandover-purple, #c585cc);
  --h1-size: 1.5em;
  --h1-style: bold;
  --h1-weight: 600;
  --h2-size: 1.4em;
  --h2-weight: 600;
  --h3-size: 1.3em;
  --h3-weight: 500;
  --h4-size: 1.1em;
  --h4-weight: 500;
  --h5-size: 1em;
  --h5-weight: 500;
  --h6-size: 0.85em;
  --h6-weight: 400;
  --headerFont: var(--font-text-theme, var(--font-general), var(--font-text-override));
  --heading-formatting: var(--text-faint, #000000);
  --highlight: var(--text-highlight-bg, var(--color-yellow-light, #ffe5a7));
  --icon-color: var(--text-muted, #141300);
  --icon-color-active: var(--text-accent, #fffcf4);
  --icon-color-focused: var(--text-normal, #fffcf4);
  --icon-color-focused-active: #fffcf4;
  --icon-color-hover: var(--text-muted, #fffcf4);
  --icon-muted: 0.5;
  --indentation-guide-color: var(--color-base-25, #e3e3e3);
  --indentation-guide-color-active: var(--sandover-purple, #c585cc);
  --inline-title-color: var(--h1-color, #c585cc);
  --inline-title-size: var(--h1-size, 1.5em);
  --inline-title-style: var(--h1-style, bold);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, #000000);
  --input-placeholder-color: var(--text-faint, #000000);
  --input-radius: 0px;
  --interactive-accent: var(--color-accent, hsl(9, 89%, 66%));
  --interactive-accent-hover: var(--color-salmon, #ff8671);
  --interactive-accent-hsl: var(--color-accent-hsl, 9, 89%, 66%);
  --interactive-hover: rgba(var(--color-salmon), 0.5);
  --light: var(--background-primary, var(--color-light1, #fffcf4));
  --lightgray: var(--background-secondary, var(--color-light1, #fffcf4));
  --line-height: 1.5;
  --line-height-normal: var(--line-height, 1.5);
  --line-width: 40rem;
  --link-color: var(--color-salmon, #ff8671);
  --link-color-hover: var(--text-accent-hover, hsl(6, 90.78%, 75.9%));
  --link-decoration: none;
  --link-external-color: var(--text-accent, #ff8671);
  --link-external-color-hover: var(--text-accent-hover, hsl(6, 90.78%, 75.9%));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, #ff8671);
  --list-marker-color: var(--text-faint, #000000);
  --list-marker-color-collapsed: var(--text-accent, #ff8671);
  --list-marker-color-hover: var(--text-muted, #000000);
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: var(--background-secondary, #fffcf4);
  --menu-border-color: var(--background-modifier-border-hover, #fffcf4);
  --menu-radius: var(--radius-m, 0px);
  --metadata-input-font: var(--font-interface, "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #000000);
  --metadata-label-font: var(--font-interface, "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #000000);
  --metadata-label-text-color-hover: var(--text-muted, #000000);
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --modal-background: var(--background-primary, #fffcf4);
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #000000);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #000000);
  --nav-heading-color: var(--text-normal, #000000);
  --nav-heading-color-collapsed: var(--text-faint, #000000);
  --nav-heading-color-collapsed-hover: var(--text-muted, #000000);
  --nav-heading-color-hover: var(--text-normal, #000000);
  --nav-indentation-guide-color: var(--indentation-guide-color, #e3e3e3);
  --nav-item-color: var(--text-muted, #000000);
  --nav-item-color-active: var(--text-normal, #000000);
  --nav-item-color-highlighted: var(--text-accent, #ff8671);
  --nav-item-color-hover: var(--text-normal, #000000);
  --nav-item-color-selected: var(--text-normal, #000000);
  --nav-item-radius: var(--radius-s, 0px);
  --nav-tag-color: var(--text-faint, #000000);
  --nav-tag-color-active: var(--text-muted, #000000);
  --nav-tag-color-hover: var(--text-muted, #000000);
  --nav-tag-radius: var(--radius-s, 0px);
  --normal-weight: 500;
  --pdf-background: var(--background-primary, #fffcf4);
  --pdf-page-background: var(--background-primary, #fffcf4);
  --pdf-sidebar-background: var(--background-primary, #fffcf4);
  --pill-border-color-hover: var(--background-modifier-border-hover, #fffcf4);
  --pill-color: var(--text-muted, #000000);
  --pill-color-hover: var(--text-normal, #000000);
  --pill-color-remove: var(--text-faint, #000000);
  --pill-color-remove-hover: var(--text-accent, #ff8671);
  --prompt-background: var(--background-primary, #fffcf4);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: var(--blur-background, color-mix(in srgb, #fffcf4 65%, transparent) linear-gradient(#fffcf4, color-mix(in srgb, #fffcf4 65%, transparent)));
  --ribbon-background: var(--color-light1, #fffcf4);
  --ribbon-background-collapsed: var(--color-light1, #fffcf4);
  --sandover-purple: #c585cc;
  --sandover-purple-rgb: 197, 133, 204;
  --scrollbar-radius: var(--radius-l, 0px);
  --search-clear-button-color: var(--text-muted, #000000);
  --search-icon-color: var(--text-muted, #000000);
  --search-result-background: var(--background-primary, #fffcf4);
  --secondary: var(--text-accent, var(--color-salmon, #ff8671));
  --setting-group-heading-color: var(--text-normal, #000000);
  --setting-items-background: var(--background-primary-alt, #fffcf4);
  --setting-items-radius: var(--radius-l, 0px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #000000);
  --shiki-code-background: var(--code-background, #fffcf4);
  --shiki-code-block-border-radius: var(--code-radius, 0px);
  --shiki-code-comment: var(--text-faint, #000000);
  --shiki-code-normal: var(--text-muted, #000000);
  --shiki-code-punctuation: var(--text-muted, #000000);
  --shiki-gutter-text-color: var(--text-faint, #000000);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #000000);
  --shiki-highlight-neutral: var(--shiki-code-normal, #000000);
  --shiki-terminal-dots-color: var(--text-faint, #000000);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #fffcf4);
  --slider-thumb-radius: var(--slider-thumb-height, 0px);
  --status-bar-background: var(--background-secondary, #fffcf4);
  --status-bar-border-color: var(--divider-color, #141300);
  --status-bar-radius: var(--radius-m, 0px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #000000);
  --suggestion-background: var(--background-primary, #fffcf4);
  --tab-background-active: var(--background-primary, #fffcf4);
  --tab-container-background: var(--background-secondary, #fffcf4);
  --tab-divider-color: var(--background-modifier-border-hover, #fffcf4);
  --tab-font-weight: 500;
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-switcher-background: var(--background-secondary, #fffcf4);
  --tab-text-color: var(--text-faint, #000000);
  --tab-text-color-active: var(--text-muted, #000000);
  --tab-text-color-focused: var(--text-muted, #000000);
  --tab-text-color-focused-active: var(--text-muted, #000000);
  --tab-text-color-focused-active-current: var(--text-normal, #000000);
  --tab-text-color-focused-highlighted: var(--text-accent, #ff8671);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(9, 89%, 66%));
  --table-drag-handle-color: var(--text-faint, #000000);
  --table-header-weight: var(--font-bold, 700);
  --table-selection-border-color: var(--interactive-accent, hsl(9, 89%, 66%));
  --tag-color: var(--color-salmon, #ff8671);
  --tag-color-hover: var(--text-accent, #ff8671);
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .3em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(6, 90.78%, 75.9%)));
  --text-accent: var(--color-salmon, #ff8671);
  --text-accent-hover: var(--color-accent-2, hsl(6, 90.78%, 75.9%));
  --text-faint: var(--color-base-50, #000000);
  --text-highlight-bg: var(--color-yellow-light, #ffe5a7);
  --text-muted: var(--color-base-70, #000000);
  --text-normal: var(--color-base-100, #000000);
  --textHighlight: var(--text-highlight-bg, var(--color-yellow-light, #ffe5a7));
  --titleFont: var(--font-text-theme, var(--font-general), var(--font-text-override));
  --titlebar-background: var(--color-salmon-lighter, #ffa99a);
  --titlebar-background-focused: var(--color-salmon-lighter, #ffa99a);
  --titlebar-text-color: var(--text-muted, #fffcf4);
  --titlebar-text-color-focused: var(--text-normal, #000000);
  --titlebar-text-weight: var(--font-bold, 300);
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --top-left-padding-y: 0px;
  --vault-name-font-weight: 700;
  --vault-profile-color: var(--text-normal, #000000);
  --vault-profile-color-hover: var(--vault-profile-color, #000000);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #fffcf4);
  background-color: var(--tab-container-background, rgb(255, 252, 244));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(255, 252, 244));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(255, 252, 244));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #fffcf4);
  background-color: var(--tab-container-background, rgb(255, 252, 244));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body html {
  --color-blue: #537791;
  --color-blue-rgb: 83, 119, 145;
  --color-cyan: #a6e6e3;
  --color-cyan-rgb: 166, 230, 227;
  --color-dark1: #282828;
  --color-dark1-rgb: 40, 40, 40;
  --color-darker-purple: 153, 119, 181;
  --color-gray-rgb: 240, 240, 240;
  --color-green: #ace099;
  --color-green-rgb: 172, 224, 153;
  --color-light1: #fffcf4;
  --color-light1-rgb: 255, 252, 244;
  --color-orange: #ff5400;
  --color-orange-rgb: 255, 84, 0;
  --color-pink: #fc62a2;
  --color-red: #ff394d;
  --color-red-rgb: 255, 57, 77;
  --color-salmon: #ff8671;
  --color-salmon-lighter: #ffa99a;
  --color-salmon-lighter-rgb: 255, 169, 154;
  --color-salmon-rgb: 255, 134, 113;
  --color-yellow: #ffd77d;
  --color-yellow-light: #ffe5a7;
  --color-yellow-light-rgb: 255, 229, 167;
  --color-yellow-rgb: 255, 215, 125;
  --sandover-purple: #c585cc;
  --sandover-purple-rgb: 197, 133, 204;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(0, 0, 0));
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(0, 0, 0));
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(0, 0, 0));
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(0, 0, 0));
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(0, 0, 0));
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(255, 229, 167));
  color: var(--text-normal, rgb(0, 0, 0));
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(245, 114, 91));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(0, 0, 0));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(255, 134, 113));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration-color: rgb(255, 134, 113);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(255, 134, 113));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration-color: rgb(255, 134, 113);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(255, 134, 113));
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgba(245, 114, 91, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(245, 114, 91, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
  margin-bottom: 0px;
  margin-left: 26.256px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
  margin-bottom: 0px;
  margin-left: 26.256px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(0, 0, 0));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, rgb(8, 109, 221));
  font-family: "TT2020 Base", "??";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body td {
  color: var(--table-text-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body th {
  color: var(--table-header-color, rgb(0, 0, 0));
  font-weight: var(--table-header-weight, 700);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(255, 252, 244));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(0, 0, 0));
  font-family: var(--font-monospace, "??", "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(255, 252, 244));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #fffcf4);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(197, 133, 204);
  border-bottom-width: 0px;
  border-left-color: rgb(197, 133, 204);
  border-left-width: 0px;
  border-right-color: rgb(197, 133, 204);
  border-right-width: 0px;
  border-top-color: rgb(197, 133, 204);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(255, 252, 244));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-muted, rgb(0, 0, 0));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(245, 114, 91);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 4px;
  margin-top: 0px;
  width: var(--checkbox-size, 12px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 252, 244);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 252, 244);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-color: rgba(0, 191, 188, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 197, 133, 204);
  background: rgba(197, 133, 204, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(197, 133, 204, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(197, 133, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(197, 133, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(197, 133, 204, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 224, 172, 0);
  background: rgba(224, 172, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(224, 172, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 172, 0, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(224, 172, 0, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(224, 172, 0, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 213, 57, 132);
  background: rgba(213, 57, 132, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(213, 57, 132, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(213, 57, 132, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(213, 57, 132, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(213, 57, 132, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 8, 185, 78);
  background: rgba(8, 185, 78, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(8, 185, 78, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 233, 49, 71);
  background: rgba(233, 49, 71, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 255, 169, 154);
  background: rgba(255, 169, 154, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 169, 154, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 154, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 154, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 154, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 185, 78);
  background: rgba(8, 185, 78, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(8, 185, 78, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-color: rgba(236, 117, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(0, 0, 0));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(255, 252, 244));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(9, 89%, 66%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(9, 89%, 66%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(9, 89%, 66%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(9, 89%, 66%, 0.15));
  --pill-color: var(--tag-color, #ff8671);
  --pill-color-hover: var(--tag-color-hover, #ff8671);
  --pill-color-remove: var(--tag-color, #ff8671);
  --pill-color-remove-hover: var(--tag-color-hover, #ff8671);
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, .5em);
  --pill-padding-y: var(--tag-padding-y, .2em);
  --pill-radius: var(--tag-radius, .3em);
  background-color: var(--pill-background, rgba(245, 114, 91, 0.1));
  border-bottom-color: rgba(245, 114, 91, 0.15);
  border-bottom-left-radius: 4.2px;
  border-bottom-right-radius: 4.2px;
  border-bottom-width: 0px;
  border-left-color: rgba(245, 114, 91, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(245, 114, 91, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(245, 114, 91, 0.15);
  border-top-left-radius: 4.2px;
  border-top-right-radius: 4.2px;
  border-top-width: 0px;
  color: var(--pill-color, rgb(255, 134, 113));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(255, 134, 113);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 600);
  border-bottom-color: rgb(197, 133, 204);
  border-bottom-width: 0px;
  border-left-color: rgb(197, 133, 204);
  border-left-width: 0px;
  border-right-color: rgb(197, 133, 204);
  border-right-width: 0px;
  border-top-color: rgb(197, 133, 204);
  border-top-width: 0px;
  color: var(--h1-color, rgb(197, 133, 204));
  font-family: var(--h1-font, "TT2020 Base", "??");
  font-size: var(--h1-size, 24px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h1-letter-spacing, -0.36px);
  line-height: var(--h1-line-height, 28.8px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(197, 133, 204));
  font-size: var(--inline-title-size, 24px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: var(--h2-color, rgb(0, 0, 0));
  font-family: var(--h2-font, "TT2020 Base", "??");
  font-size: var(--h2-size, 22.4px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.2464px);
  line-height: var(--h2-line-height, 26.88px);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(197, 133, 204);
  border-bottom-width: 0px;
  border-left-color: rgb(197, 133, 204);
  border-left-width: 0px;
  border-right-color: rgb(197, 133, 204);
  border-right-width: 0px;
  border-top-color: rgb(197, 133, 204);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(197, 133, 204));
  font-family: var(--inline-title-font, "TT2020 Base", "??");
  font-size: var(--inline-title-size, 24px);
  font-weight: var(--inline-title-weight, 600);
  letter-spacing: -0.36px;
  line-height: var(--inline-title-line-height, 28.8px);
  margin-bottom: 12px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 500);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: var(--h3-color, rgb(0, 0, 0));
  font-family: var(--h3-font, "TT2020 Base", "??");
  font-size: var(--h3-size, 20.8px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h3-letter-spacing, -0.1664px);
  line-height: var(--h3-line-height, 27.04px);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 500);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: var(--h4-color, rgb(0, 0, 0));
  font-family: var(--h4-font, "TT2020 Base", "??");
  font-size: var(--h4-size, 17.6px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h4-letter-spacing, -0.088px);
  line-height: var(--h4-line-height, 24.64px);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 500);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: var(--h5-color, rgb(0, 0, 0));
  font-family: var(--h5-font, "TT2020 Base", "??");
  font-size: var(--h5-size, 16px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h5-letter-spacing, -0.032px);
  line-height: var(--h5-line-height, 24px);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 400);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: var(--h6-color, rgb(0, 0, 0));
  font-family: var(--h6-font, "TT2020 Base", "??");
  font-size: var(--h6-size, 13.6px);
  font-weight: var(--font-weight, 400);
  line-height: var(--h6-line-height, 20.4px);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(227, 227, 227);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(0, 0, 0));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(0, 0, 0));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="light"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(20, 19, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(20, 19, 0);
  border-left-width: 0px;
  border-right-color: rgb(20, 19, 0);
  border-right-width: 0px;
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(20, 19, 0));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(255, 252, 244));
  border-bottom-color: rgb(20, 19, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(20, 19, 0);
  border-left-width: 0px;
  border-right-color: rgb(20, 19, 0);
  border-right-width: 0px;
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(0, 0, 0));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(20, 19, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(20, 19, 0);
  border-left-width: 0px;
  border-right-color: rgb(20, 19, 0);
  border-right-width: 0px;
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(20, 19, 0));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(20, 19, 0);
  stroke: rgb(20, 19, 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(0, 0, 0));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(255, 252, 244));
  border-color: rgb(0, 0, 0);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  color: var(--table-header-color, rgb(0, 0, 0));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  color: var(--text-muted, rgb(0, 0, 0));
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(0, 0, 0);
  font-family: var(--metadata-label-font, "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(0, 0, 0);
  font-family: var(--metadata-input-font, "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(9, 89%, 66%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(9, 89%, 66%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(9, 89%, 66%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(9, 89%, 66%, 0.15));
  --pill-color: var(--tag-color, #ff8671);
  --pill-color-hover: var(--tag-color-hover, #ff8671);
  --pill-color-remove: var(--tag-color, #ff8671);
  --pill-color-remove-hover: var(--tag-color-hover, #ff8671);
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, .5em);
  --pill-padding-y: var(--tag-padding-y, .2em);
  --pill-radius: var(--tag-radius, .3em);
  background-color: var(--pill-background, rgba(245, 114, 91, 0.1));
  border-radius: 4.2px;
  color: var(--pill-color, rgb(255, 134, 113));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(255, 252, 244));
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(255, 252, 244));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(255, 169, 154));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(0, 0, 0);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(255, 252, 244));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: var(--text-normal, rgb(0, 0, 0));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: var(--text-normal, rgb(0, 0, 0));
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(255, 252, 244));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(0, 0, 0));
  font-family: var(--font-monospace, "??", "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(245, 114, 91, 0.1));
  border-bottom-color: rgba(245, 114, 91, 0.15);
  border-bottom-left-radius: 3.675px;
  border-bottom-right-radius: 3.675px;
  border-bottom-width: 0px;
  border-left-color: rgba(245, 114, 91, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(245, 114, 91, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(245, 114, 91, 0.15);
  border-top-left-radius: 3.675px;
  border-top-right-radius: 3.675px;
  border-top-width: 0px;
  color: var(--tag-color, rgb(255, 134, 113));
}`,
  },
};
