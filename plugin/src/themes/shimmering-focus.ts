import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "shimmering-focus",
    modes: ["dark", "light"],
    variations: [],
    fonts: [
      "ia-writer-quattro-s",
      "eb-garamond",
      "optima",
      "recursive",
      "icons/material-icons",
    ],
    fontFiles: [
      {
        family: "iA Writer Quattro S",
        style: "normal",
        weight: "700",
        file: "ia-writer-quattro-s.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Quattro S",
        style: "italic",
        weight: "700",
        file: "ia-writer-quattro-s-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Quattro S",
        style: "italic",
        weight: "400",
        file: "ia-writer-quattro-s-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Quattro S",
        style: "normal",
        weight: "400",
        file: "ia-writer-quattro-s-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Recursive S",
        style: "normal",
        weight: "600 900",
        file: "recursive-s.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Recursive S",
        style: "normal",
        weight: "300 500",
        file: "recursive-s-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Material Icons (Filled)",
        style: "normal",
        weight: "400",
        file: "material-icons-filled.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "shimmering-focus",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --a-row: #0003;
  --active-line-color: #18c1cd;
  --alt-heading-color: #8c96d9;
  --b-row: #00000059;
  --background-modifier-active-hover: hsla(184,79%,45%, 0.1);
  --background-modifier-border: hsl(230/**/15%22%);
  --background-modifier-border-focus: hsl(230/**/15%33%);
  --background-modifier-border-hover: hsl(230/**/15%25%);
  --background-modifier-form-field: hsl(230/**/15%18%);
  --background-modifier-form-field-hover: hsl(230/**/15%18%);
  --background-primary: hsl(230/**/15%12%);
  --background-primary-alt: hsl(230/**/15%14%);
  --background-secondary: hsl(230/**/15%16%);
  --background-secondary-alt: hsl(230/**/15%22%);
  --bases-cards-background: hsl(230/**/15%12%);
  --bases-cards-cover-background: hsl(230/**/15%14%);
  --bases-cards-shadow: 0 0 0 1px hsl(230/**/15%22%);
  --bases-cards-shadow-hover: 0 0 0 1px hsl(230/**/15%25%);
  --bases-embed-border-color: hsl(230/**/15%22%);
  --bases-group-heading-property-color: hsl(230/**/15%73%);
  --bases-table-border-color: hsl(230/**/15%40%);
  --bases-table-cell-background-active: hsl(230/**/15%12%);
  --bases-table-cell-background-disabled: hsl(230/**/15%14%);
  --bases-table-cell-background-selected: hsla(184,79%,45%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(230/**/15%33%);
  --bases-table-cell-shadow-focus: 0 0 0 2px #108189;
  --bases-table-group-background: hsl(230/**/15%14%);
  --bases-table-header-background: hsl(230/**/15%18%);
  --bases-table-header-color: hsl(230/**/15%73%);
  --bases-table-header-weight: 600;
  --bases-table-summary-background: hsl(230/**/15%12%);
  --basic-border: 2px solid hsl(230/**/15%40%);
  --basic-border-color: hsl(230/**/15%40%);
  --bg-hue: 230;
  --bg-hue-dark: 230;
  --bg-hue-light: 230;
  --bg-sat: 15%;
  --bg1: hsl(230/**/15%12%);
  --bg2: hsl(230/**/15%14%);
  --bg3: hsl(230/**/15%16%);
  --bg4: hsl(230/**/15%18%);
  --bg5: hsl(230/**/15%22%);
  --bg6: hsl(230/**/15%25%);
  --blockquote-background-color: hsl(230/**/15%16%);
  --blockquote-border-color: hsl(230/**/15%22%);
  --blockquote-border-thickness: 8px;
  --blur-background: color-mix(in srgb, hsl(230/**/15%12%) 65%, transparent) linear-gradient(hsl(230/**/15%12%), color-mix(in srgb, hsl(230/**/15%12%) 65%, transparent));
  --bodyFont: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: #ed5aa8;
  --callout-padding: 8px;
  --callout-title-size: 110%;
  --canvas-background: hsl(230/**/15%12%);
  --canvas-card-label-color: hsl(230/**/15%40%);
  --canvas-dot-pattern: hsl(230/**/15%22%);
  --caret-color: hsl(230/**/30%82%);
  --checkbox-border-color: hsl(230/**/15%60%);
  --checkbox-border-color-hover: #ed5aa8;
  --checkbox-color: #da975d;
  --checkbox-color-hover: #ed5aa8;
  --checkbox-marker-color: hsl(230/**/15%12%);
  --checkbox-radius: 8px;
  --checkbox-size: 17px;
  --checklist-done-color: hsl(230/**/15%40%);
  --code-background: hsl(230/**/15%16%);
  --code-border-color: hsl(230/**/15%22%);
  --code-comment: hsl(230/**/15%40%);
  --code-normal: hsl(230/**/30%82%);
  --code-punctuation: hsl(230/**/15%73%);
  --codeFont: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: hsl(230/**/15%40%);
  --collapse-icon-color-collapsed: #18c1cd;
  --color-accent: #18c1cd;
  --color-accent-hsl: 184,79%,45%;
  --color-base-00: hsl(230/**/15%12%);
  --color-base-10: hsl(230/**/15%14%);
  --color-base-100: hsl(230/**/15%85%);
  --color-base-20: hsl(230/**/15%16%);
  --color-base-25: hsl(230/**/15%18%);
  --color-base-30: hsl(230/**/15%22%);
  --color-base-35: hsl(230/**/15%25%);
  --color-base-40: hsl(230/**/15%33%);
  --color-base-50: hsl(230/**/15%40%);
  --color-base-60: hsl(230/**/15%60%);
  --color-base-70: hsl(230/**/15%73%);
  --color-base-85s: hsl(230/**/30%82%);
  --dark: var(--text-normal, hsl(230/**/30%82%));
  --darkgray: var(--text-normal, hsl(230/**/30%82%));
  --divider-color: hsl(230/**/15%22%);
  --divider-color-hover: #ed5aa8;
  --divider-width: 2px;
  --dropdown-background: hsl(230/**/15%12%);
  --dropdown-background-hover: hsl(230/**/15%16%);
  --embed-block-shadow-hover: 0 0 0 1px hsl(230/**/15%22%), inset 0 0 0 1px hsl(230/**/15%22%);
  --embed-border: 4px double hsl(230/**/15%40%);
  --embed-border-bottom: 4px double hsl(230/**/15%40%);
  --embed-border-end: 4px double hsl(230/**/15%40%);
  --embed-border-start: 4px double hsl(230/**/15%40%);
  --embed-border-top: 4px double hsl(230/**/15%40%);
  --embed-padding: 4px 8px;
  --file-header-background: hsl(230/**/15%12%);
  --file-header-background-focused: hsl(230/**/15%12%);
  --file-header-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: hsl(230/**/15%12%);
  --flair-color: hsl(230/**/30%82%);
  --font-heading-theme: "Optima","Recursive S";
  --font-interface: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Recursive S";
  --font-mermaid: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: "iA Writer Quattro S", Arial';
  --font-text: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "iA Writer Quattro S";
  --footnote-divider-color: hsl(230/**/15%22%);
  --footnote-id-color: hsl(230/**/15%73%);
  --footnote-id-color-no-occurrences: hsl(230/**/15%40%);
  --graph-line: hsl(230/**/15%25%);
  --graph-node: hsl(230/**/15%73%);
  --graph-node-focused: #18c1cd;
  --graph-node-unresolved: hsl(230/**/15%40%);
  --graph-text: hsl(230/**/30%82%);
  --gray: var(--text-muted, hsl(230/**/15%73%));
  --h1-font: "Optima","Recursive S";
  --h1-size: 1.7em;
  --h2-font: "Optima","Recursive S";
  --h2-size: 1.5em;
  --h3-font: "Optima","Recursive S";
  --h3-size: 1.35em;
  --h4-font: "Optima","Recursive S";
  --h4-size: 1.2em;
  --h5-font: "Optima","Recursive S";
  --h5-size: 1.1em;
  --h6-font: "Optima","Recursive S";
  --h6-size: 1em;
  --headerFont: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: hsl(230/**/15%40%);
  --heading-letter-spacing: 1.5px;
  --heading-scaling: 1;
  --highlight: var(--background-modifier-active-hover, hsla(184,79%,45%, 0.1));
  --highlight-hue-1: 50;
  --highlight-sla-values: 85% 40%/40%;
  --hotkey-color: #da975d;
  --hover-accent: #ed5aa8;
  --hr-color: hsl(230/**/15%40%);
  --icon-color: hsl(230/**/15%73%);
  --icon-color-active: #18c1cd;
  --icon-color-focused: hsl(230/**/30%82%);
  --icon-color-hover: #ed5aa8;
  --icon-font: "Material Icons (Filled)";
  --icon-stroke: 2px;
  --image-size: 50;
  --inactive-pane-opacity: 75%;
  --indentation-guide-color: hsl(230/**/15%40%);
  --indentation-guide-color-active: hsl(230/**/15%40%);
  --indentation-guide-width: 1.5px;
  --indentation-guide-width-active: 1.5px;
  --inline-code-color: #da975d;
  --inline-title-color: hsl(230/**/15%60%);
  --inline-title-font: "Optima","Recursive S";
  --inline-title-margin-bottom: .75em;
  --inline-title-size: 1.7em;
  --input-date-separator: hsl(230/**/15%40%);
  --input-placeholder-color: hsl(230/**/15%40%);
  --interactive-accent: #108189;
  --interactive-accent-hover: #ed5aa8;
  --interactive-accent-hsl: 184,79%,45%;
  --interactive-hover: hsl(230/**/15%16%);
  --interactive-normal: hsl(230/**/15%12%);
  --italic-color: #ed5aa8;
  --light: var(--background-primary, hsl(230/**/15%12%));
  --lightgray: var(--background-secondary, hsl(230/**/15%16%));
  --line-height-tight: 1.2;
  --link-color: #18c1cd;
  --link-color-hover: #ed5aa8;
  --link-decoration-thickness: 1.2px;
  --link-external-color: #18c1cd;
  --link-external-color-hover: #ed5aa8;
  --link-unresolved-color: #6fb74e;
  --link-unresolved-decoration-color: hsla(184,79%,45%, 0.3);
  --link-unresolved-opacity: .8;
  --list-indent: 1.6em;
  --list-marker-color: hsl(230/**/15%40%);
  --list-marker-color-collapsed: #18c1cd;
  --list-marker-color-hover: hsl(230/**/15%73%);
  --longform-base-line-height: 1;
  --longform-font-size: 1.3rem;
  --longform-font-text-theme: "Garamond","Times New Roman",serif;
  --longform-letter-spacing: 0px;
  --menu-background: hsl(230/**/15%16%);
  --menu-border-color: hsl(230/**/15%25%);
  --metadata-border-color: hsl(230/**/15%22%);
  --metadata-divider-color: hsl(230/**/15%22%);
  --metadata-gap: 1px;
  --metadata-input-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.8em;
  --metadata-input-text-color: hsl(230/**/30%82%);
  --metadata-label-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: hsl(230/**/15%73%);
  --metadata-label-text-color-hover: hsl(230/**/15%73%);
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(230/**/15%33%);
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(230/**/15%25%);
  --modal-background: hsl(230/**/15%12%);
  --modal-border-color: hsl(230/**/15%33%);
  --modal-height: 92vh;
  --muted-border: 2px solid hsl(230/**/15%22%);
  --muted-border-color: hsl(230/**/15%22%);
  --nav-collapse-icon-color: hsl(230/**/15%40%);
  --nav-collapse-icon-color-collapsed: hsl(230/**/15%40%);
  --nav-heading-color: hsl(230/**/30%82%);
  --nav-heading-color-collapsed: hsl(230/**/15%40%);
  --nav-heading-color-collapsed-hover: hsl(230/**/15%73%);
  --nav-heading-color-hover: hsl(230/**/30%82%);
  --nav-indentation-guide-color: hsl(230/**/15%40%);
  --nav-indentation-guide-width: 1.5px;
  --nav-item-background-selected: hsla(184,79%,45%, 0.15);
  --nav-item-color: hsl(230/**/15%73%);
  --nav-item-color-active: #18c1cd;
  --nav-item-color-highlighted: #ed5aa8;
  --nav-item-color-hover: #ed5aa8;
  --nav-item-color-selected: hsl(230/**/30%82%);
  --nav-item-size: 15px;
  --nav-tag-color: hsl(230/**/15%40%);
  --nav-tag-color-active: hsl(230/**/15%73%);
  --nav-tag-color-hover: hsl(230/**/15%73%);
  --pdf-background: hsl(230/**/15%12%);
  --pdf-page-background: hsl(230/**/15%12%);
  --pdf-shadow: 0 0 0 1px hsl(230/**/15%22%);
  --pdf-sidebar-background: hsl(230/**/15%12%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(230/**/15%22%);
  --pill-border-color: hsl(230/**/15%22%);
  --pill-border-color-hover: hsl(230/**/15%25%);
  --pill-color: hsl(230/**/15%73%);
  --pill-color-hover: hsl(230/**/30%82%);
  --pill-color-remove: hsl(230/**/15%40%);
  --pill-color-remove-hover: #18c1cd;
  --prompt-background: hsl(230/**/15%12%);
  --prompt-border-color: hsl(230/**/15%33%);
  --radius-xs: 2px;
  --raised-background: color-mix(in srgb, hsl(230/**/15%12%) 65%, transparent) linear-gradient(hsl(230/**/15%12%), color-mix(in srgb, hsl(230/**/15%12%) 65%, transparent));
  --readability-text-shadow-dark: 1px 1px 0px #000;
  --ribbon-background: hsl(230/**/15%16%);
  --ribbon-background-collapsed: hsl(230/**/15%12%);
  --search-clear-button-color: hsl(230/**/15%73%);
  --search-icon-color: hsl(230/**/15%73%);
  --search-match-color: #e0de71;
  --search-result-background: hsl(230/**/15%12%);
  --secondary: var(--text-accent, #18c1cd);
  --secondary-accent: #da975d;
  --setting-group-heading-color: hsl(230/**/30%82%);
  --setting-items-background: hsl(230/**/15%14%);
  --setting-items-border-color: hsl(230/**/15%22%);
  --shiki-active-tab-border-color: hsl(230/**/15%73%);
  --shiki-code-background: hsl(230/**/15%16%);
  --shiki-code-comment: hsl(230/**/15%40%);
  --shiki-code-normal: hsl(230/**/15%73%);
  --shiki-code-punctuation: hsl(230/**/15%73%);
  --shiki-gutter-border-color: hsl(230/**/15%22%);
  --shiki-gutter-text-color: hsl(230/**/15%40%);
  --shiki-gutter-text-color-highlight: hsl(230/**/15%73%);
  --shiki-highlight-neutral: hsl(230/**/15%73%);
  --shiki-terminal-dots-color: hsl(230/**/15%40%);
  --signature: "⟡";
  --slider-thumb-border-color: hsl(230/**/15%25%);
  --slider-track-background: hsl(230/**/15%22%);
  --status-bar-background: hsl(230/**/15%16%);
  --status-bar-border-color: hsl(230/**/15%22%);
  --status-bar-font-size: 13px;
  --status-bar-text-color: hsl(230/**/15%73%);
  --suggestion-background: hsl(230/**/15%12%);
  --tab-background-active: hsl(230/**/15%16%);
  --tab-container-background: hsl(230/**/15%16%);
  --tab-divider-color: hsl(230/**/15%25%);
  --tab-outline-color: hsl(230/**/15%22%);
  --tab-stacked-header-width: 28px;
  --tab-switcher-background: hsl(230/**/15%16%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230/**/15%16%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #18c1cd;
  --tab-text-color: hsl(230/**/15%40%);
  --tab-text-color-active: hsl(230/**/15%73%);
  --tab-text-color-focused: hsl(230/**/15%73%);
  --tab-text-color-focused-active: hsl(230/**/15%73%);
  --tab-text-color-focused-active-current: hsl(230/**/30%82%);
  --tab-text-color-focused-highlighted: #18c1cd;
  --table-add-button-border-color: hsl(230/**/15%22%);
  --table-border-color: hsl(230/**/15%40%);
  --table-drag-handle-background-active: #108189;
  --table-drag-handle-color: hsl(230/**/15%40%);
  --table-drag-handle-color-active: #fff;
  --table-header-background: hsl(230/**/15%22%);
  --table-header-background-hover: hsl(230/**/15%22%);
  --table-header-border-color: hsl(230/**/15%40%);
  --table-header-color: hsl(230/**/30%82%);
  --table-header-size: 14.4px;
  --table-header-weight: 600;
  --table-row-alt-background: #00000059;
  --table-selection: hsla(184,79%,45%, 0.1);
  --table-selection-border-color: #108189;
  --table-text-size: 14.4px;
  --table-white-space: normal;
  --tag-background: none;
  --tag-background-hover: none;
  --tag-border-color: hsla(184,79%,45%, 0.15);
  --tag-border-color-hover: hsla(184,79%,45%, 0.15);
  --tag-border-width: 0;
  --tag-color: #da975d;
  --tag-color-hover: #ed5aa8;
  --tag-decoration-hover: underline;
  --tag-padding-x: 0;
  --tag-padding-y: 0;
  --tag-size: 1em;
  --tertiary: var(--text-accent-hover, #ed5aa8);
  --text-accent: #18c1cd;
  --text-accent-hover: #ed5aa8;
  --text-faint: hsl(230/**/15%40%);
  --text-gray: hsl(230/**/15%60%);
  --text-muted: hsl(230/**/15%73%);
  --text-normal: hsl(230/**/30%82%);
  --text-on-accent: #fff;
  --text-selection: hsl(184,79%,45%,20%);
  --textHighlight: var(--background-modifier-active-hover, hsla(184,79%,45%, 0.1));
  --thin-border: 1px solid hsl(230/**/15%40%);
  --thin-muted-border: 1px solid hsl(230/**/15%22%);
  --titleFont: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: hsl(230/**/15%25%);
  --titlebar-background-focused: hsl(230/**/15%22%);
  --titlebar-border-color: hsl(230/**/15%22%);
  --titlebar-text-color: hsl(230/**/15%73%);
  --titlebar-text-color-focused: hsl(230/**/30%82%);
  --transition-delay-passing-over-protection: .2s;
  --vault-profile-color: hsl(230/**/30%82%);
  --vault-profile-color-hover: hsl(230/**/30%82%);
  --vim-cursor-bg: #000;
  --vim-cursor-blink-rate: 1.2s;
  --vim-cursor-color: #b3b3b3;
  --vim-cursor-outline: #e6e6e6;
  --vim-cursor-outline-width: 1px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 37, 47);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 28, 35);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 37, 47);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 50, 65);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 37, 47);
  border-left-color: rgb(48, 50, 65);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body html {
  --vim-cursor-blink-rate: 1.2s;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration-color: rgb(237, 90, 168);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration-color: rgb(237, 90, 168);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration-color: rgb(237, 90, 168);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration-color: rgb(237, 90, 168);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(189, 160, 15, 0.4);
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(195, 200, 223) none 0px;
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body del {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(195, 200, 223) none 0px;
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 143, 168);
  border-radius: 8px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(218, 151, 93);
  border-color: rgb(138, 143, 168);
}

html[saved-theme="dark"] body p {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 179, 196) none 0px;
  text-decoration-color: rgb(176, 179, 196);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(24, 193, 205);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(24, 193, 205) none 0px;
  text-decoration: underline 1.2px;
  text-decoration-color: rgb(24, 193, 205);
  text-decoration-thickness: 1.2px;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(24, 193, 205);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(24, 193, 205) none 0px;
  text-decoration: underline 1.2px double;
  text-decoration-color: rgb(24, 193, 205);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(111, 183, 78);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(111, 183, 78) none 0px;
  text-decoration: underline 1.2px double rgba(24, 193, 205, 0.3);
  text-decoration-color: rgba(24, 193, 205, 0.3);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body dt {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(138, 143, 168);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(35, 37, 47);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body table {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 192.594px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.35);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(87, 92, 117);
  border-left-color: rgb(87, 92, 117);
  border-right-color: rgb(87, 92, 117);
  border-top-color: rgb(87, 92, 117);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(87, 92, 117);
  border-left-color: rgb(87, 92, 117);
  border-right-color: rgb(87, 92, 117);
  border-top-color: rgb(87, 92, 117);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(48, 50, 65);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(30, 32, 41);
  border-bottom-color: rgb(48, 50, 65);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(218, 151, 93);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(30, 32, 41);
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(87, 92, 117);
  border-bottom-style: double;
  border-bottom-width: 4px;
  border-left-color: rgb(87, 92, 117);
  border-left-style: double;
  border-left-width: 4px;
  border-right-color: rgb(87, 92, 117);
  border-right-style: double;
  border-right-width: 4px;
  border-top-color: rgb(87, 92, 117);
  border-top-style: double;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(195, 200, 223);
  border-bottom-style: double;
  border-left-color: rgb(195, 200, 223);
  border-left-style: double;
  border-right-color: rgb(195, 200, 223);
  border-right-style: double;
  border-top-color: rgb(195, 200, 223);
  border-top-style: double;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 143, 168);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(138, 143, 168);
  border-right-color: rgb(138, 143, 168);
  border-top-color: rgb(138, 143, 168);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: -25.5px;
  width: 17px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(87, 92, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(87, 92, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 28, 35);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 28, 35);
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
  background-color: rgb(87, 92, 117);
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
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background: rgba(83, 223, 221, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 223, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background: rgba(251, 70, 76, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(251, 70, 76, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background: rgba(251, 70, 76, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(251, 70, 76, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background: rgba(168, 130, 255, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(168, 130, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background: rgba(251, 70, 76, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(251, 70, 76, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background: rgba(233, 151, 63, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 151, 63, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(158, 158, 158, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(158, 158, 158, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background: rgba(68, 207, 110, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 207, 110, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background: rgba(83, 223, 221, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 223, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgba(233, 151, 63, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 151, 63, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.15);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(195, 200, 223);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
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
  background-color: rgb(39, 41, 53);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 28, 35);
  border-bottom-color: rgb(87, 92, 117);
  border-bottom-width: 2px;
  border-left-color: rgb(87, 92, 117);
  border-left-width: 2px;
  border-right-color: rgb(87, 92, 117);
  border-right-width: 2px;
  border-top-color: rgb(87, 92, 117);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(195, 200, 223) none 0px;
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(24, 193, 205);
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(87, 92, 117);
  border-bottom-width: 2px;
  border-left-color: rgb(87, 92, 117);
  border-left-width: 2px;
  border-right-color: rgb(87, 92, 117);
  border-right-width: 2px;
  border-top-color: rgb(87, 92, 117);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(48, 50, 65);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: ridge;
  border-left-color: rgb(48, 50, 65);
  border-left-style: ridge;
  border-left-width: 1px;
  border-right-color: rgb(48, 50, 65);
  border-right-style: ridge;
  border-right-width: 1px;
  border-top-color: rgb(48, 50, 65);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: ridge;
  border-top-width: 1px;
  box-shadow: rgba(255, 255, 255, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(24, 193, 205);
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(24, 193, 205, 0.15);
  border-bottom-left-radius: 25.6px;
  border-bottom-right-radius: 25.6px;
  border-left-color: rgba(24, 193, 205, 0.15);
  border-right-color: rgba(24, 193, 205, 0.15);
  border-top-color: rgba(24, 193, 205, 0.15);
  border-top-left-radius: 25.6px;
  border-top-right-radius: 25.6px;
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(218, 151, 93);
}

html[saved-theme="dark"] body h1 {
  color: rgb(140, 150, 217);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(138, 143, 168);
  font-size: 27.2px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(195, 200, 223);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(138, 143, 168);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h3 {
  color: rgb(140, 150, 217);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h4 {
  color: rgb(195, 200, 223);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h5 {
  color: rgb(140, 150, 217);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h6 {
  color: rgb(195, 200, 223);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(87, 92, 117);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(195, 200, 223);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(35, 37, 47);
  border-left-style: groove;
  border-left-width: 2px;
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(35, 37, 47);
  border-top-style: groove;
  border-top-width: 2px;
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(176, 179, 196);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(176, 179, 196);
  stroke: rgb(176, 179, 196);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(87, 92, 117);
  border-left-color: rgb(87, 92, 117);
  border-right-color: rgb(87, 92, 117);
  border-top-color: rgb(87, 92, 117);
  color: rgb(87, 92, 117);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(87, 92, 117);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(35, 37, 47);
  border-color: rgb(195, 200, 223);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.35);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(87, 92, 117);
  color: rgb(195, 200, 223);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: rgb(30, 32, 41);
  border-bottom-color: rgb(87, 92, 117);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(87, 92, 117);
  border-left-width: 1px;
  border-right-color: rgb(87, 92, 117);
  border-right-width: 1px;
  border-top-color: rgb(87, 92, 117);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 12px;
  margin-left: 4px;
  margin-right: -4px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(30, 32, 41);
  border-color: rgb(87, 92, 117);
  border-radius: 4px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25.6px;
  color: rgb(218, 151, 93);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 28, 35);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(35, 37, 47);
  border-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(48, 50, 65);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(195, 200, 223);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(48, 50, 65);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(24, 193, 205);
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
  color: rgb(24, 193, 205);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(195, 200, 223);
  border-bottom-style: solid;
  border-left-color: rgb(195, 200, 223);
  border-left-style: solid;
  border-right-color: rgb(195, 200, 223);
  border-right-style: solid;
  border-top-color: rgb(195, 200, 223);
  border-top-style: solid;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body sub {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body summary {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body sup {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(24, 193, 205, 0.15);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-left-color: rgba(24, 193, 205, 0.15);
  border-right-color: rgba(24, 193, 205, 0.15);
  border-top-color: rgba(24, 193, 205, 0.15);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: rgb(218, 151, 93);
}`,
  },
  light: {
    base: `:root:root {
  --a-row: #00000008;
  --active-line-color: #1396a0;
  --alt-heading-color: #5460ab;
  --b-row: #00000014;
  --background-modifier-active-hover: hsla(184,79%,35%, 0.1);
  --background-modifier-border: hsl(230/**/25%88%);
  --background-modifier-border-focus: hsl(230/**/25%74%);
  --background-modifier-border-hover: hsl(230/**/25%83%);
  --background-modifier-form-field: hsl(230/**/37.5%99%);
  --background-modifier-form-field-hover: hsl(230/**/37.5%99%);
  --background-primary: hsl(230/**/37.5%99%);
  --background-primary-alt: hsl(230/**/25%97%);
  --background-secondary: hsl(230/**/25%95%);
  --bases-cards-background: hsl(230/**/37.5%99%);
  --bases-cards-cover-background: hsl(230/**/25%97%);
  --bases-cards-shadow: 0 0 0 1px hsl(230/**/25%88%);
  --bases-cards-shadow-hover: 0 0 0 1px hsl(230/**/25%83%);
  --bases-embed-border-color: hsl(230/**/25%88%);
  --bases-group-heading-property-color: hsl(230/**/25%35%);
  --bases-table-border-color: hsl(230/**/25%67%);
  --bases-table-cell-background-active: hsl(230/**/37.5%99%);
  --bases-table-cell-background-disabled: hsl(230/**/25%97%);
  --bases-table-cell-background-selected: hsla(184,79%,35%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(230/**/25%74%);
  --bases-table-cell-shadow-focus: 0 0 0 2px #108189;
  --bases-table-group-background: hsl(230/**/25%97%);
  --bases-table-header-background: hsl(230/**/25%92%);
  --bases-table-header-color: hsl(230/**/25%35%);
  --bases-table-header-weight: 600;
  --bases-table-summary-background: hsl(230/**/37.5%99%);
  --basic-border: 2px solid hsl(230/**/25%67%);
  --basic-border-color: hsl(230/**/25%67%);
  --bg-hue: 230;
  --bg-hue-dark: 230;
  --bg-hue-light: 230;
  --bg-sat: 25%;
  --bg1: hsl(230/**/37.5%99%);
  --bg2: hsl(230/**/25%97%);
  --bg3: hsl(230/**/25%95%);
  --bg4: hsl(230/**/25%92%);
  --bg5: hsl(230/**/25%88%);
  --bg6: hsl(230/**/25%83%);
  --blockquote-background-color: hsl(230/**/25%95%);
  --blockquote-border-color: hsl(230/**/25%88%);
  --blockquote-border-thickness: 8px;
  --blur-background: color-mix(in srgb, hsl(230/**/37.5%99%) 65%, transparent) linear-gradient(hsl(230/**/37.5%99%), color-mix(in srgb, hsl(230/**/37.5%99%) 65%, transparent));
  --bodyFont: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: #dc388f;
  --callout-padding: 8px;
  --callout-title-size: 110%;
  --canvas-background: hsl(230/**/37.5%99%);
  --canvas-card-label-color: hsl(230/**/25%67%);
  --canvas-dot-pattern: hsl(230/**/25%88%);
  --caret-color: hsl(230/**/50%24%);
  --checkbox-border-color: hsl(230/**/25%44%);
  --checkbox-border-color-hover: #dc388f;
  --checkbox-color: #c67e3f;
  --checkbox-color-hover: #dc388f;
  --checkbox-marker-color: hsl(230/**/37.5%99%);
  --checkbox-radius: 8px;
  --checkbox-size: 17px;
  --checklist-done-color: hsl(230/**/25%67%);
  --code-background: hsl(230/**/25%95%);
  --code-border-color: hsl(230/**/25%88%);
  --code-comment: hsl(230/**/25%67%);
  --code-normal: hsl(230/**/50%24%);
  --code-property: #279b99;
  --code-punctuation: hsl(230/**/25%35%);
  --codeFont: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: hsl(230/**/25%67%);
  --collapse-icon-color-collapsed: #1396a0;
  --color-accent: #1396a0;
  --color-accent-hsl: 184,79%,35%;
  --color-base-00: hsl(230/**/37.5%99%);
  --color-base-10: hsl(230/**/25%97%);
  --color-base-100: hsl(230/**/25%13%);
  --color-base-20: hsl(230/**/25%95%);
  --color-base-25: hsl(230/**/25%92%);
  --color-base-30: hsl(230/**/25%88%);
  --color-base-35: hsl(230/**/25%83%);
  --color-base-40: hsl(230/**/25%74%);
  --color-base-50: hsl(230/**/25%67%);
  --color-base-60: hsl(230/**/25%44%);
  --color-base-70: hsl(230/**/25%35%);
  --color-base-85s: hsl(230/**/50%24%);
  --color-cyan: #279b99;
  --dark: var(--text-normal, hsl(230/**/50%24%));
  --darkgray: var(--text-normal, hsl(230/**/50%24%));
  --divider-color: hsl(230/**/25%92%);
  --divider-color-hover: #dc388f;
  --divider-width: 2px;
  --dropdown-background: hsl(230/**/37.5%99%);
  --dropdown-background-hover: hsl(230/**/25%95%);
  --embed-block-shadow-hover: 0 0 0 1px hsl(230/**/25%88%), inset 0 0 0 1px hsl(230/**/25%88%);
  --embed-border: 4px double hsl(230/**/25%67%);
  --embed-border-bottom: 4px double hsl(230/**/25%67%);
  --embed-border-end: 4px double hsl(230/**/25%67%);
  --embed-border-start: 4px double hsl(230/**/25%67%);
  --embed-border-top: 4px double hsl(230/**/25%67%);
  --embed-padding: 4px 8px;
  --file-header-background: hsl(230/**/37.5%99%);
  --file-header-background-focused: hsl(230/**/37.5%99%);
  --file-header-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: hsl(230/**/37.5%99%);
  --flair-color: hsl(230/**/50%24%);
  --font-heading-theme: "Optima","Recursive S";
  --font-interface: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Recursive S";
  --font-mermaid: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: "iA Writer Quattro S", Arial';
  --font-text: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "iA Writer Quattro S";
  --footnote-divider-color: hsl(230/**/25%88%);
  --footnote-id-color: hsl(230/**/25%35%);
  --footnote-id-color-no-occurrences: hsl(230/**/25%67%);
  --graph-line: hsl(230/**/25%83%);
  --graph-node: hsl(230/**/25%35%);
  --graph-node-focused: #1396a0;
  --graph-node-unresolved: hsl(230/**/25%67%);
  --graph-text: hsl(230/**/50%24%);
  --gray: var(--text-muted, hsl(230/**/25%35%));
  --h1-font: "Optima","Recursive S";
  --h1-size: 1.7em;
  --h2-font: "Optima","Recursive S";
  --h2-size: 1.5em;
  --h3-font: "Optima","Recursive S";
  --h3-size: 1.35em;
  --h4-font: "Optima","Recursive S";
  --h4-size: 1.2em;
  --h5-font: "Optima","Recursive S";
  --h5-size: 1.1em;
  --h6-font: "Optima","Recursive S";
  --h6-size: 1em;
  --headerFont: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: hsl(230/**/25%67%);
  --heading-letter-spacing: 1.5px;
  --heading-scaling: 1;
  --highlight: var(--background-modifier-active-hover, hsla(184,79%,35%, 0.1));
  --highlight-hue-1: 50;
  --highlight-sla-values: 85% 70%/40%;
  --hotkey-color: #c67e3f;
  --hover-accent: #dc388f;
  --hr-color: hsl(230/**/25%67%);
  --icon-color: hsl(230/**/25%35%);
  --icon-color-active: #1396a0;
  --icon-color-focused: hsl(230/**/50%24%);
  --icon-color-hover: #dc388f;
  --icon-font: "Material Icons (Filled)";
  --icon-stroke: 2px;
  --image-size: 50;
  --inactive-pane-opacity: 75%;
  --indentation-guide-color: hsl(230/**/25%67%);
  --indentation-guide-color-active: hsl(230/**/25%67%);
  --indentation-guide-width: 1.5px;
  --indentation-guide-width-active: 1.5px;
  --inline-code-color: #c67e3f;
  --inline-title-color: hsl(230/**/25%44%);
  --inline-title-font: "Optima","Recursive S";
  --inline-title-margin-bottom: .75em;
  --inline-title-size: 1.7em;
  --input-date-separator: hsl(230/**/25%67%);
  --input-placeholder-color: hsl(230/**/25%67%);
  --interactive-accent: #108189;
  --interactive-accent-hover: #dc388f;
  --interactive-accent-hsl: 184,79%,35%;
  --interactive-hover: hsl(230/**/25%95%);
  --interactive-normal: hsl(230/**/37.5%99%);
  --italic-color: #dc388f;
  --light: var(--background-primary, hsl(230/**/37.5%99%));
  --lightgray: var(--background-secondary, hsl(230/**/25%95%));
  --line-height-tight: 1.2;
  --link-color: #1396a0;
  --link-color-hover: #dc388f;
  --link-decoration-thickness: 1.2px;
  --link-external-color: #1396a0;
  --link-external-color-hover: #dc388f;
  --link-unresolved-color: #6fb74e;
  --link-unresolved-decoration-color: hsla(184,79%,35%, 0.3);
  --link-unresolved-opacity: .8;
  --list-indent: 1.6em;
  --list-marker-color: hsl(230/**/25%67%);
  --list-marker-color-collapsed: #1396a0;
  --list-marker-color-hover: hsl(230/**/25%35%);
  --longform-base-line-height: 1;
  --longform-font-size: 1.3rem;
  --longform-font-text-theme: "Garamond","Times New Roman",serif;
  --longform-letter-spacing: 0px;
  --menu-background: hsl(230/**/25%95%);
  --menu-border-color: hsl(230/**/25%83%);
  --metadata-border-color: hsl(230/**/25%88%);
  --metadata-divider-color: hsl(230/**/25%88%);
  --metadata-gap: 1px;
  --metadata-input-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.8em;
  --metadata-input-text-color: hsl(230/**/50%24%);
  --metadata-label-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: hsl(230/**/25%35%);
  --metadata-label-text-color-hover: hsl(230/**/25%35%);
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(230/**/25%74%);
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(230/**/25%83%);
  --modal-background: hsl(230/**/37.5%99%);
  --modal-border-color: hsl(230/**/25%74%);
  --modal-height: 92vh;
  --muted-border: 2px solid hsl(230/**/25%88%);
  --muted-border-color: hsl(230/**/25%88%);
  --nav-collapse-icon-color: hsl(230/**/25%67%);
  --nav-collapse-icon-color-collapsed: hsl(230/**/25%67%);
  --nav-heading-color: hsl(230/**/50%24%);
  --nav-heading-color-collapsed: hsl(230/**/25%67%);
  --nav-heading-color-collapsed-hover: hsl(230/**/25%35%);
  --nav-heading-color-hover: hsl(230/**/50%24%);
  --nav-indentation-guide-color: hsl(230/**/25%67%);
  --nav-indentation-guide-width: 1.5px;
  --nav-item-background-selected: hsla(184,79%,35%, 0.15);
  --nav-item-color: hsl(230/**/25%35%);
  --nav-item-color-active: #1396a0;
  --nav-item-color-highlighted: #dc388f;
  --nav-item-color-hover: #dc388f;
  --nav-item-color-selected: hsl(230/**/50%24%);
  --nav-item-size: 15px;
  --nav-tag-color: hsl(230/**/25%67%);
  --nav-tag-color-active: hsl(230/**/25%35%);
  --nav-tag-color-hover: hsl(230/**/25%35%);
  --pdf-background: hsl(230/**/37.5%99%);
  --pdf-page-background: hsl(230/**/37.5%99%);
  --pdf-sidebar-background: hsl(230/**/37.5%99%);
  --pill-border-color: hsl(230/**/25%88%);
  --pill-border-color-hover: hsl(230/**/25%83%);
  --pill-color: hsl(230/**/25%35%);
  --pill-color-hover: hsl(230/**/50%24%);
  --pill-color-remove: hsl(230/**/25%67%);
  --pill-color-remove-hover: #1396a0;
  --prompt-background: hsl(230/**/37.5%99%);
  --prompt-border-color: hsl(230/**/25%74%);
  --radius-xs: 2px;
  --raised-background: color-mix(in srgb, hsl(230/**/37.5%99%) 65%, transparent) linear-gradient(hsl(230/**/37.5%99%), color-mix(in srgb, hsl(230/**/37.5%99%) 65%, transparent));
  --readability-text-shadow-dark: 1px 1px 0px #000;
  --ribbon-background: hsl(230/**/25%95%);
  --ribbon-background-collapsed: hsl(230/**/37.5%99%);
  --search-clear-button-color: hsl(230/**/25%35%);
  --search-icon-color: hsl(230/**/25%35%);
  --search-match-color: #ec7500;
  --search-result-background: hsl(230/**/37.5%99%);
  --secondary: var(--text-accent, #1396a0);
  --secondary-accent: #c67e3f;
  --setting-group-heading-color: hsl(230/**/50%24%);
  --setting-items-background: hsl(230/**/25%97%);
  --setting-items-border-color: hsl(230/**/25%88%);
  --shiki-active-tab-border-color: hsl(230/**/25%35%);
  --shiki-code-background: hsl(230/**/25%95%);
  --shiki-code-comment: hsl(230/**/25%67%);
  --shiki-code-normal: hsl(230/**/25%35%);
  --shiki-code-property: #279b99;
  --shiki-code-punctuation: hsl(230/**/25%35%);
  --shiki-gutter-border-color: hsl(230/**/25%88%);
  --shiki-gutter-text-color: hsl(230/**/25%67%);
  --shiki-gutter-text-color-highlight: hsl(230/**/25%35%);
  --shiki-highlight-neutral: hsl(230/**/25%35%);
  --shiki-terminal-dots-color: hsl(230/**/25%67%);
  --signature: "⟡";
  --slider-thumb-border-color: hsl(230/**/25%83%);
  --slider-track-background: hsl(230/**/25%88%);
  --status-bar-background: hsl(230/**/25%95%);
  --status-bar-border-color: hsl(230/**/25%92%);
  --status-bar-font-size: 13px;
  --status-bar-text-color: hsl(230/**/25%35%);
  --suggestion-background: hsl(230/**/37.5%99%);
  --sync-avatar-color-5: #279b99;
  --tab-background-active: hsl(230/**/25%95%);
  --tab-container-background: hsl(230/**/25%95%);
  --tab-divider-color: hsl(230/**/25%83%);
  --tab-outline-color: hsl(230/**/25%92%);
  --tab-stacked-header-width: 28px;
  --tab-switcher-background: hsl(230/**/25%95%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230/**/25%95%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #1396a0;
  --tab-text-color: hsl(230/**/25%67%);
  --tab-text-color-active: hsl(230/**/25%35%);
  --tab-text-color-focused: hsl(230/**/25%35%);
  --tab-text-color-focused-active: hsl(230/**/25%35%);
  --tab-text-color-focused-active-current: hsl(230/**/50%24%);
  --tab-text-color-focused-highlighted: #1396a0;
  --table-add-button-border-color: hsl(230/**/25%88%);
  --table-border-color: hsl(230/**/25%67%);
  --table-drag-handle-background-active: #108189;
  --table-drag-handle-color: hsl(230/**/25%67%);
  --table-drag-handle-color-active: #fff;
  --table-header-background: hsl(230/**/25%88%);
  --table-header-background-hover: hsl(230/**/25%88%);
  --table-header-border-color: hsl(230/**/25%67%);
  --table-header-color: hsl(230/**/50%24%);
  --table-header-size: 14.4px;
  --table-header-weight: 600;
  --table-row-alt-background: #00000014;
  --table-selection: hsla(184,79%,35%, 0.1);
  --table-selection-border-color: #108189;
  --table-text-size: 14.4px;
  --table-white-space: normal;
  --tag-background: none;
  --tag-background-hover: none;
  --tag-border-color: hsla(184,79%,35%, 0.15);
  --tag-border-color-hover: hsla(184,79%,35%, 0.15);
  --tag-border-width: 0;
  --tag-color: #c67e3f;
  --tag-color-hover: #dc388f;
  --tag-decoration-hover: underline;
  --tag-padding-x: 0;
  --tag-padding-y: 0;
  --tag-size: 1em;
  --tertiary: var(--text-accent-hover, #dc388f);
  --text-accent: #1396a0;
  --text-accent-hover: #dc388f;
  --text-faint: hsl(230/**/25%67%);
  --text-gray: hsl(230/**/25%44%);
  --text-muted: hsl(230/**/25%35%);
  --text-normal: hsl(230/**/50%24%);
  --text-on-accent: #fff;
  --text-selection: hsl(184,79%,35%,20%);
  --textHighlight: var(--background-modifier-active-hover, hsla(184,79%,35%, 0.1));
  --thin-border: 1px solid hsl(230/**/25%67%);
  --thin-muted-border: 1px solid hsl(230/**/25%88%);
  --titleFont: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: hsl(230/**/25%88%);
  --titlebar-background-focused: hsl(230/**/25%92%);
  --titlebar-border-color: hsl(230/**/25%88%);
  --titlebar-text-color: hsl(230/**/25%35%);
  --titlebar-text-color-focused: hsl(230/**/50%24%);
  --transition-delay-passing-over-protection: .2s;
  --vault-profile-color: hsl(230/**/50%24%);
  --vault-profile-color-hover: hsl(230/**/50%24%);
  --vim-cursor-bg: #404040;
  --vim-cursor-blink-rate: 1.2s;
  --vim-cursor-color: #e6e6e6;
  --vim-cursor-outline: #b0b5bf;
  --vim-cursor-outline-width: 1.3px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 240, 245);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(251, 252, 253);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 240, 245);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 231, 240);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 240, 245);
  border-left-color: rgb(230, 231, 240);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body html {
  --vim-cursor-blink-rate: 1.2s;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration-color: rgb(220, 56, 143);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration-color: rgb(220, 56, 143);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration-color: rgb(220, 56, 143);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration-color: rgb(220, 56, 143);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(244, 222, 113, 0.4);
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 41, 92) none 0px;
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body del {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 41, 92) none 0px;
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(84, 94, 140);
  border-radius: 8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(198, 126, 63);
  border-color: rgb(84, 94, 140);
}

html[saved-theme="light"] body p {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(67, 74, 112) none 0px;
  text-decoration-color: rgb(67, 74, 112);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(19, 150, 160);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(19, 150, 160) none 0px;
  text-decoration: underline 1.2px;
  text-decoration-color: rgb(19, 150, 160);
  text-decoration-thickness: 1.2px;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(19, 150, 160);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(19, 150, 160) none 0px;
  text-decoration: underline 1.2px double;
  text-decoration-color: rgb(19, 150, 160);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(111, 183, 78);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(111, 183, 78) none 0px;
  text-decoration: underline 1.2px double rgba(19, 150, 160, 0.3);
  text-decoration-color: rgba(19, 150, 160, 0.3);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body dt {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ol > li {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ul > li {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(84, 94, 140);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(239, 240, 245);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body table {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 192.594px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.08);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(150, 157, 192);
  border-left-color: rgb(150, 157, 192);
  border-right-color: rgb(150, 157, 192);
  border-top-color: rgb(150, 157, 192);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(150, 157, 192);
  border-left-color: rgb(150, 157, 192);
  border-right-color: rgb(150, 157, 192);
  border-top-color: rgb(150, 157, 192);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body tr {
  background-color: rgb(217, 219, 232);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(245, 246, 249);
  border-bottom-color: rgb(217, 219, 232);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(198, 126, 63);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body figcaption {
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 246, 249);
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(150, 157, 192);
  border-bottom-style: double;
  border-bottom-width: 4px;
  border-left-color: rgb(150, 157, 192);
  border-left-style: double;
  border-left-width: 4px;
  border-right-color: rgb(150, 157, 192);
  border-right-style: double;
  border-right-width: 4px;
  border-top-color: rgb(150, 157, 192);
  border-top-style: double;
  border-top-width: 4px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(31, 41, 92);
  border-bottom-style: double;
  border-left-color: rgb(31, 41, 92);
  border-left-style: double;
  border-right-color: rgb(31, 41, 92);
  border-right-style: double;
  border-top-color: rgb(31, 41, 92);
  border-top-style: double;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(84, 94, 140);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(84, 94, 140);
  border-right-color: rgb(84, 94, 140);
  border-top-color: rgb(84, 94, 140);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: -25.5px;
  width: 17px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(150, 157, 192);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(150, 157, 192);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 252, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 252, 253);
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
  background-color: rgb(150, 157, 192);
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
  background-color: rgb(39, 155, 153);
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
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 191, 188, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 191, 188, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background: rgba(233, 49, 71, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 49, 71, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background: rgba(233, 49, 71, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 49, 71, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgba(120, 82, 238, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(120, 82, 238, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background: rgba(233, 49, 71, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 49, 71, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background: rgba(236, 117, 0, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(236, 117, 0, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(158, 158, 158, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(158, 158, 158, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background: rgba(8, 185, 78, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 185, 78, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 191, 188, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 191, 188, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgba(236, 117, 0, 0.11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(236, 117, 0, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.15);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(31, 41, 92);
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
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
  background-color: rgb(251, 252, 253);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(251, 252, 253);
  border-bottom-color: rgb(150, 157, 192);
  border-bottom-width: 2px;
  border-left-color: rgb(150, 157, 192);
  border-left-width: 2px;
  border-right-color: rgb(150, 157, 192);
  border-right-width: 2px;
  border-top-color: rgb(150, 157, 192);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 41, 92) none 0px;
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(19, 150, 160);
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(150, 157, 192);
  border-bottom-width: 2px;
  border-left-color: rgb(150, 157, 192);
  border-left-width: 2px;
  border-right-color: rgb(150, 157, 192);
  border-right-width: 2px;
  border-top-color: rgb(150, 157, 192);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(217, 219, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: ridge;
  border-left-color: rgb(217, 219, 232);
  border-left-style: ridge;
  border-left-width: 1px;
  border-right-color: rgb(217, 219, 232);
  border-right-style: ridge;
  border-right-width: 1px;
  border-top-color: rgb(217, 219, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: ridge;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.05) 0px 2px 3px 0px, rgba(0, 0, 0, 0.03) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(19, 150, 160);
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(19, 150, 160, 0.15);
  border-bottom-left-radius: 25.6px;
  border-bottom-right-radius: 25.6px;
  border-left-color: rgba(19, 150, 160, 0.15);
  border-right-color: rgba(19, 150, 160, 0.15);
  border-top-color: rgba(19, 150, 160, 0.15);
  border-top-left-radius: 25.6px;
  border-top-right-radius: 25.6px;
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(198, 126, 63);
}

html[saved-theme="light"] body h1 {
  color: rgb(84, 96, 171);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(84, 94, 140);
  font-size: 27.2px;
}

html[saved-theme="light"] body h2 {
  color: rgb(31, 41, 92);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(84, 94, 140);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h3 {
  color: rgb(84, 96, 171);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h4 {
  color: rgb(31, 41, 92);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h5 {
  color: rgb(84, 96, 171);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h6 {
  color: rgb(31, 41, 92);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(230, 231, 240);
  border-left-color: rgb(230, 231, 240);
  border-right-color: rgb(230, 231, 240);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(150, 157, 192);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(31, 41, 92);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(217, 219, 232);
  border-bottom-color: rgb(230, 231, 240);
  border-left-color: rgb(239, 240, 245);
  border-left-style: groove;
  border-left-width: 2px;
  border-right-color: rgb(230, 231, 240);
  border-top-color: rgb(239, 240, 245);
  border-top-style: groove;
  border-top-width: 2px;
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(67, 74, 112);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(67, 74, 112);
  stroke: rgb(67, 74, 112);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(150, 157, 192);
  border-left-color: rgb(150, 157, 192);
  border-right-color: rgb(150, 157, 192);
  border-top-color: rgb(150, 157, 192);
  color: rgb(150, 157, 192);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(150, 157, 192);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(251, 252, 253);
  border-color: rgb(31, 41, 92);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.08);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(150, 157, 192);
  color: rgb(31, 41, 92);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: rgb(245, 246, 249);
  border-bottom-color: rgb(150, 157, 192);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(150, 157, 192);
  border-left-width: 1px;
  border-right-color: rgb(150, 157, 192);
  border-right-width: 1px;
  border-top-color: rgb(150, 157, 192);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 12px;
  margin-left: 4px;
  margin-right: -4px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(245, 246, 249);
  border-color: rgb(150, 157, 192);
  border-radius: 4px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25.6px;
  color: rgb(198, 126, 63);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(251, 252, 253);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(239, 240, 245);
  border-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(230, 231, 240);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(31, 41, 92);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(217, 219, 232);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(19, 150, 160);
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
  color: rgb(19, 150, 160);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(31, 41, 92);
  border-bottom-style: solid;
  border-left-color: rgb(31, 41, 92);
  border-left-style: solid;
  border-right-color: rgb(31, 41, 92);
  border-right-style: solid;
  border-top-color: rgb(31, 41, 92);
  border-top-style: solid;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body sub {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body summary {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body sup {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(19, 150, 160, 0.15);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-left-color: rgba(19, 150, 160, 0.15);
  border-right-color: rgba(19, 150, 160, 0.15);
  border-top-color: rgba(19, 150, 160, 0.15);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: rgb(198, 126, 63);
}`,
  },
  classSettings: {
    "hide-inline-title-when-more-than-one-tab": `body:not(.is-mobile).hide-inline-title-when-more-than-one-tab .mod-root .workspace-tab-header-container:has(.workspace-tab-header+.workspace-tab-header)+.workspace-tab-container .inline-title {
display:none;
}`,
    "hide-vault-switcher-and-settings": `body.hide-vault-switcher-and-settings:not(.is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
display:none;
}`,
    "hide-properties-in-statusbar": `.hide-properties-in-statusbar .status-bar-item.plugin-properties {
display:none;
}`,
    "hide-backlinks-status-bar": `.hide-backlinks-status-bar .status-bar-item.plugin-backlink {
display:none;
}`,
    "hide-pane-relief-focus-lock-status-bar": `.hide-pane-relief-focus-lock-status-bar .status-bar-item.plugin-pane-relief {
display:none;
}`,
    "hide-languagetool-status-bar": `.hide-languagetool-status-bar .status-bar-item.plugin-obsidian-languagetool-plugin {
display:none;
}`,
    "hide-pandoc-reference-list-status-bar": `.hide-pandoc-reference-list-status-bar .status-bar-item.plugin-obsidian-pandoc-reference-list {
display:none;
}`,
    "hide-harper-status-bar": `.hide-harper-status-bar .status-bar-item.plugin-harper {
display:none;
}`,
    "normal-header-bar": `.normal-header-bar .view-header {
background:var(--bg3);
}`,
    "overlaying-right-sidebar": `.overlaying-right-sidebar .mod-right-split {
position:absolute;
right:0;
}`,
    "hidden-sidebars-hidden-statusbar": `.hidden-sidebars-hidden-statusbar:not(.is-mobile) .horizontal-main-container:has(.mod-left-split.is-sidedock-collapsed):has(.mod-right-split.is-sidedock-collapsed)+.status-bar {
display:none;
}`,
    "notices-at-bottom-right": `.notices-at-bottom-right .notice-container {
bottom:calc(var(--status-bar-font-size) + var(--notice-spacing));
top:unset;
flex-direction:column-reverse;
display:flex;
}`,
    "colorscheme-macos-native": `.theme-light, .theme-dark {
--bg-hue:0;
--bg-sat:0%;
}
.theme-light, .theme-dark {
--bg-hue:0;
--bg-sat:0%;
}`,
    "colorscheme-coffee": `.theme-dark {
--bg-hue:29;
--bg-sat:15%;
--color-accent-hsl:50,70%,60%;
--color-accent:#e0c952;
--interactive-accent:#0a7046;
--alt-heading-color:#ff675c;
--secondary-accent:#0a7046;
--hover-accent:#4ba6ce;
--link-unresolved-color:#bc94cc;
}
.theme-light {
--bg-hue:36;
--bg-sat:35%;
--color-accent-hsl:43,100%,42%;
--color-accent:#d69a00;
--interactive-accent:#309167;
--alt-heading-color:#bf3f36;
--secondary-accent:#309167;
--hover-accent:#2c7da0;
--link-unresolved-color:#b183c3;
}`,
    "colorscheme-everforest": `.theme-dark {
--bg-hue:204;
--bg-sat:14%;
--bg-val:21%;
--color-accent-hsl:83,34%,63%;
--color-accent:#a8c181;
--interactive-accent:#80bcb4;
--alt-heading-color:#e77e80;
--secondary-accent:#d699b7;
--hover-accent:#e69975;
--link-unresolved-color:#dbbd80;
}

.theme-dark ::selection {
color:#fff;
background-color:#a8c181;
}
.theme-light {
--bg-hue:43;
--bg-sat:57%;
--bg-val:89%;
--color-accent-hsl:68,99%,32%;
--color-accent:#8da201;
--interactive-accent:#3995c6;
--alt-heading-color:#f85654;
--secondary-accent:#e69975;
--hover-accent:#f57b24;
--link-unresolved-color:#e0a100;
}

.theme-light ::selection {
color:#fff;
background-color:#8da201;
}`,
    "colorscheme-grubox": `.theme-dark {
--color-red:#f84935;
--color-green:#b8ba26;
--color-yellow:#fabd2e;
--color-blue:#83a598;
--color-purple:#d4879c;
--color-cyan:#8ec07c;
--color-orange:#fe811b;
--color-pink:var(--color-purple);
--color-pink-rgb:211,134,155;
--color-red-rgb:248,73,52;
--color-green-rgb:184,187,38;
--color-yellow-rgb:250,189,47;
--color-blue-rgb:131,165,152;
--color-purple-rgb:211,134,155;
--color-cyan-rgb:142,192,124;
--color-orange-rgb:254,128,25;
--color-base-00:#1f1f1f;
--color-base-05:#292929;
--color-base-10:#32302f;
--color-base-20:#3b3735;
--color-base-25:#4f4945;
--color-base-30:#655b53;
--color-base-35:#7d6f64;
--color-base-40:#918273;
--color-base-50:#a89985;
--color-base-60:#bdaf93;
--color-base-75:#b1a38b;
--color-base-85:#c9ba9c;
--color-base-90:#ebdbb2;
--color-base-95:#f2e5bb;
--color-base-100:#fbf0c6;
--bg1:var(--color-base-05);
--bg2:var(--color-base-10);
--bg3:var(--color-base-05);
--bg4:var(--color-base-10);
--bg5:var(--color-base-10);
--bg6:var(--color-base-05);
--background-primary:var(--color-base-05);
--background-primary-alt:var(--color-base-10);
--background-secondary:var(--color-base-05);
--background-secondary-alt:var(--color-base-25);
--background-modifier-hover:var(--color-base-10);
--background-modifier-active-hover:var(--color-base-20);
--background-modifier-border:var(--color-base-25);
--background-modifier-border-hover:var(--color-base-30);
--background-modifier-border-focus:var(--color-base-20);
--background-modifier-error-rgb:248,73,52;
--background-modifier-error:var(--color-red);
--background-modifier-error-hover:var(--color-red-rgb);
--background-modifier-success-rgb:184,187,38;
--background-modifier-success:var(--color-green);
--background-modifier-message:var(--color-base-10);
--background-modifier-form-field:var(--color-base-20);
--h1-color:var(--color-orange);
--h2-color:var(--color-green);
--h3-color:var(--color-yellow);
--h4-color:var(--color-red);
--h5-color:var(--color-cyan);
--h6-color:var(--color-blue);
--alt-heading-color:var(--color-green);
--text-normal:var(--color-base-90);
--icon-color:var(--color-red);
--color-accent:var(--color-red);
--color-accent-hsl:358 100% 31%;
--interactive-accent:var(--color-orange);
--secondary-accent:var(--color-green);
--hover-accent:#d85f0e;
--link-unresolved-color:var(--color-cyan);
}

.theme-dark ::selection {
background-color:var(--color-base-20);
color:var(--color-base-100);
}

.theme-dark :is(.nav-file-title,.nav-folder-title) {
color:var(--color-base-85);
}
.theme-light {
--color-red:#9e0005;
--color-green:#77710e;
--color-yellow:#b37614;
--color-blue:#076678;
--color-purple:#8e3e6f;
--color-cyan:#427b58;
--color-orange:#b03a03;
--color-red-rgb:157,0,6;
--color-green-rgb:121,116,14;
--color-yellow-rgb:181,118,20;
--color-blue-rgb:7,2,120;
--color-purple-rgb:143,63,113;
--color-cyan-rgb:66,123,88;
--color-orange-rgb:175,58,3;
--color-pink:var(--color-purple);
--color-pink-rgb:var(--color-purple-rgb);
--color-base-00:#fbf0c6;
--color-base-05:#f2e5bb;
--color-base-10:#ebdbb2;
--color-base-20:#d4c3a0;
--color-base-25:#c9ba9c;
--color-base-30:#bdaf93;
--color-base-35:#b1a38b;
--color-base-40:#a89985;
--color-base-50:#918273;
--color-base-60:#7d6f64;
--color-base-70:#655b53;
--color-base-80:#4f4945;
--color-base-85:#46403e;
--color-base-90:#3b3735;
--color-base-95:#32302f;
--color-base-100:#292929;
--bg-hue:39;
--bg-sat:0%;
--bg2:var(--color-base-05);
--bg3:var(--color-base-10);
--bg4:var(--color-base-20);
--bg5:var(--color-base-25);
--bg6:var(--color-base-30);
--color-accent:var(--color-red);
--color-accent-hsl:358 100% 31%;
--interactive-accent:var(--color-orange);
--secondary-accent:var(--color-blue);
--hover-accent:#d85f0e;
--link-unresolved-color:var(--color-cyan);
}

.theme-light ::selection {
background-color:var(--color-base-40);
color:var(--color-base-100);
}`,
    "angular-shapes": `.angular-shapes {
--radius-xs:0;
--radius-s:0;
--radius-m:0;
--radius-l:0;
--radius-xl:0;
--input-radius:0;
--tab-radius-active:0;
}

body.angular-shapes .checkbox-container {
border-radius:0;
width:20px;
height:20px;
}`,
    "uncolored-bold": `.uncolored-bold :is(strong,.cm-strong) {
--bold-color:var(--text-normal);
}`,
    "uncolored-italic": `.uncolored-italic :is(em,.cm-em) {
--italic-color:var(--text-normal);
}`,
    "active-line-background": `.active-line-background .cm-active.cm-line:not(.HyperMD-quote,.HyperMD-codeblock) {
border-radius:var(--radius-s);
padding-left:4px;
}
.active-line-background .cm-active.cm-line:not(.HyperMD-quote,.HyperMD-codeblock) {
background-color:var(--bg4);
}
.active-line-background .cm-active.cm-line:not(.HyperMD-quote,.HyperMD-codeblock) {
background-color:var(--bg3);
}`,
    "readable-line-length-toggle": `.readable-line-length-toggle {
--file-line-width:100%;
}`,
    "unrestricted-line-length-tables": `.unrestricted-line-length-tables:not(.is-mobile) :is(.markdown-source-view,.markdown-preview-view):has(table,.HyperMD-table-2) {
--file-line-width:100%;
}`,
    "use-relative-line-numbers": `.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-gutterElement:not(.cm-active) {
font-size:0;
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active, .use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :before {
font-size:.85rem;
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :has(+.cm-active):before {
content:"1";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :has(+*+.cm-active):before {
content:"2";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :has(+*+*+.cm-active):before {
content:"3";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :has(+*+*+*+.cm-active):before {
content:"4";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :has(+*+*+*+*+.cm-active):before {
content:"5";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :has(+*+*+*+*+*+.cm-active):before {
content:"6";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :has(+*+*+*+*+*+*+.cm-active):before {
content:"7";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :has(+*+*+*+*+*+*+*+.cm-active):before {
content:"8";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers :has(+*+*+*+*+*+*+*+*+.cm-active):before {
content:"9";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active+:before {
content:"1";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active+*+:before {
content:"2";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active+*+*+:before {
content:"3";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active+*+*+*+:before {
content:"4";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active+*+*+*+*+:before {
content:"5";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active+*+*+*+*+*+:before {
content:"6";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active+*+*+*+*+*+*+:before {
content:"7";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active+*+*+*+*+*+*+*+:before {
content:"8";
}

.use-relative-line-numbers:not(.is-mobile) .cm-lineNumbers .cm-active+*+*+*+*+*+*+*+*+:before {
content:"9";
}`,
    "vim-active-visual-line": `.vim-active-visual-line .cm-sizer:not(:has(.cm-table-widget.has-focus))+.cm-vimCursorLayer .cm-fat-cursor.cm-cursor-primary {
--cursorline-bg:hsl(var(--color-accent-hsl),12.5%);
border-image:conic-gradient(var(--cursorline-bg)0 0)fill 0/0/0 100vw;
mix-blend-mode:hard-light;
}

.vim-active-visual-line .cm-sizer:not(:has(.cm-table-widget.has-focus))+.cm-vimCursorLayer {
animation:none!important;
}`,
    "no-mouse-hovers": `.no-mouse-hovers .is-live-preview .cm-embed-block:not(.cm-table-widget):hover {
box-shadow:none;
}

.no-mouse-hovers .tooltip:not(.mod-error), .no-mouse-hovers .is-live-preview .cm-embed-block:not(.cm-table-widget):hover .edit-block-button {
display:none;
}

.no-mouse-hovers .modal-container+.tooltip, .no-mouse-hovers .app-container:has(.mod-active .workspace-leaf-content[data-type=".no-mouse-hovers "])~.tooltip {
display:unset;
}`,
    "wordcount-only-when-writing": `.wordcount-only-when-writing:not(.is-mobile) .horizontal-main-container:not(:has(:is(.writing,.longform-leaf)))+.status-bar :is(.plugin-word-count,.plugin-better-word-count) {
display:none;
}`,
    "hide-longform-status-bar": `.hide-longform-status-bar .status-bar-item.plugin-longform {
display:none;
}`,
    "longform-tasks-different": `body.longform-tasks-different :is(.writing,.longform-leaf) :is(.HyperMD-task-line,.HyperMD-task-line>*,ul.contains-task-list) {
color:var(--text-faint);
}`,
    "longform-text-indent": `.longform-text-indent div:has(>p)+div>p {
text-indent:1.5em;
margin-top:0;
}

.longform-text-indent div:has(+div>p)>p {
margin-bottom:0;
}`,
    "hide-attachment-folders": `.hide-attachment-folders .nav-folder-title:is([data-path$=\\/attachments i],[data-path=attachments i]) {
display:none;
}`,
    "show-outline-buttons": `.show-outline-buttons .workspace-leaf-content[data-type=outline] .nav-header {
flex-direction:row-reverse;
justify-content:space-between;
display:flex;
}

.show-outline-buttons .workspace-leaf-content[data-type=outline] .nav-buttons-container>:first-child {
display:none;
}

.show-outline-buttons .workspace-leaf-content[data-type=outline] .search-input-container {
flex-grow:1;
margin:4px 0;
display:block!important;
}`,
    "bases-hide-column-header-icons": `body.bases-hide-column-header-icons .bases-table-header-icon {
display:none;
}`,
    "show-various-complements-icon": `.show-various-complements-icon .various-complements__suggestion-item {
padding-left:25px!important;
}

.show-various-complements-icon .various-complements__suggestion-item:before {
margin-top:0;
}`,
  },
};
