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
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --a-row: #0003;
  --active-line-color: #18c1cd;
  --alt-heading-color: #8c96d9;
  --b-row: #00000059;
  --background-modifier-active-hover: rgba(24, 193, 205, 0.1);
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
  --bases-table-cell-background-selected: rgba(24, 193, 205, 0.1);
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
  --bold-color: #ed5aa8;
  --bold-weight: 600;
  --callout-padding: 8px;
  --callout-title-size: 110%;
  --callout-title-weight: 600;
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
  --collapse-icon-color: hsl(230/**/15%40%);
  --collapse-icon-color-collapsed: #18c1cd;
  --color-accent: #18c1cd;
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
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
  --file-header-font: '??', "Recursive S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: hsl(230/**/15%12%);
  --flair-color: hsl(230/**/30%82%);
  --font-heading-theme: "Optima","Recursive S";
  --font-interface: '??', "Recursive S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Recursive S";
  --font-mermaid: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "iA Writer Quattro S", 'Arial';
  --font-text: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "iA Writer Quattro S";
  --footnote-divider-color: hsl(230/**/15%22%);
  --footnote-id-color: hsl(230/**/15%73%);
  --footnote-id-color-no-occurrences: hsl(230/**/15%40%);
  --graph-line: hsl(230/**/15%25%);
  --graph-node: hsl(230/**/15%73%);
  --graph-node-focused: #18c1cd;
  --graph-node-unresolved: hsl(230/**/15%40%);
  --graph-text: hsl(230/**/30%82%);
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
  --heading-formatting: hsl(230/**/15%40%);
  --heading-letter-spacing: 1.5px;
  --heading-scaling: 1;
  --heading-spacing: 2.5rem;
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
  --line-height-tight: 1.2;
  --link-color: #18c1cd;
  --link-color-hover: #ed5aa8;
  --link-decoration-thickness: 1.2px;
  --link-external-color: #18c1cd;
  --link-external-color-hover: #ed5aa8;
  --link-unresolved-color: #6fb74e;
  --link-unresolved-decoration-color: rgba(24, 193, 205, 0.3);
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
  --metadata-input-font: '??', "Recursive S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.8em;
  --metadata-input-height: 28px;
  --metadata-input-text-color: hsl(230/**/30%82%);
  --metadata-label-font: '??', "Recursive S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --nav-item-background-selected: rgba(24, 193, 205, 0.15);
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
  --secondary-accent: #da975d;
  --setting-group-heading-color: hsl(230/**/30%82%);
  --setting-items-background: hsl(230/**/15%14%);
  --setting-items-border-color: hsl(230/**/15%22%);
  --sidebar-markdown-font-size: 14.4px;
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
  --table-row-alt-background: #00000059;
  --table-selection: rgba(24, 193, 205, 0.1);
  --table-selection-border-color: #108189;
  --table-text-size: 14.4px;
  --table-white-space: normal;
  --tag-background: none;
  --tag-background-hover: none;
  --tag-border-color: rgba(24, 193, 205, 0.15);
  --tag-border-color-hover: rgba(24, 193, 205, 0.15);
  --tag-border-width: 0;
  --tag-color: #da975d;
  --tag-color-hover: #ed5aa8;
  --tag-decoration-hover: underline;
  --tag-padding-x: 0;
  --tag-padding-y: 0;
  --tag-size: 1em;
  --text-accent: #18c1cd;
  --text-accent-hover: #ed5aa8;
  --text-faint: hsl(230/**/15%40%);
  --text-gray: hsl(230/**/15%60%);
  --text-muted: hsl(230/**/15%73%);
  --text-normal: hsl(230/**/30%82%);
  --text-on-accent: #fff;
  --text-selection: rgb(24, 193, 205);
  --thin-border: 1px solid hsl(230/**/15%40%);
  --thin-muted-border: 1px solid hsl(230/**/15%22%);
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 37, 47);
  color: rgb(195, 200, 223);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 28, 35);
  color: rgb(195, 200, 223);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 37, 47);
  color: rgb(195, 200, 223);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 50, 65);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 37, 47);
  border-left-color: rgb(48, 50, 65);
  color: rgb(195, 200, 223);
}

body div#quartz-root {
  background-color: rgb(26, 28, 35);
  color: rgb(195, 200, 223);
}`,
    typography: `body .page article p > b, b {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration: rgb(237, 90, 168);
  text-decoration-color: rgb(237, 90, 168);
}

body .page article p > em, em {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration: rgb(237, 90, 168);
  text-decoration-color: rgb(237, 90, 168);
}

body .page article p > i, i {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration: rgb(237, 90, 168);
  text-decoration-color: rgb(237, 90, 168);
}

body .page article p > strong, strong {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration: rgb(237, 90, 168);
  text-decoration-color: rgb(237, 90, 168);
}

body .text-highlight {
  background-color: rgba(189, 160, 15, 0.4);
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(195, 200, 223) none 0px;
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body del {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(195, 200, 223) none 0px;
  text-decoration: line-through rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body p {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 179, 196) none 0px;
  text-decoration: rgb(176, 179, 196);
  text-decoration-color: rgb(176, 179, 196);
}`,
    links: `body a.external, footer a {
  color: rgb(24, 193, 205);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(24, 193, 205) none 0px;
  text-decoration: underline 1.2px rgb(24, 193, 205);
  text-decoration-color: rgb(24, 193, 205);
  text-decoration-thickness: 1.2px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(24, 193, 205);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(24, 193, 205) none 0px;
  text-decoration: underline 1.2px double rgb(24, 193, 205);
  text-decoration-color: rgb(24, 193, 205);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}

body a.internal.broken {
  color: rgb(111, 183, 78);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(111, 183, 78) none 0px;
  text-decoration: underline 1.2px double rgba(24, 193, 205, 0.3);
  text-decoration-color: rgba(24, 193, 205, 0.3);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}`,
    lists: `body dd {
  color: rgb(195, 200, 223);
}

body dt {
  color: rgb(195, 200, 223);
}

body ol > li {
  color: rgb(195, 200, 223);
}

body ol.overflow {
  background-color: rgb(26, 28, 35);
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

body ul > li {
  color: rgb(195, 200, 223);
}

body ul.overflow {
  background-color: rgb(26, 28, 35);
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 143, 168);
  text-decoration: rgb(138, 143, 168);
}

body blockquote {
  background-color: rgb(35, 37, 47);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

body table {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 192.594px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.35);
}

body td {
  border-bottom-color: rgb(87, 92, 117);
  border-left-color: rgb(87, 92, 117);
  border-right-color: rgb(87, 92, 117);
  border-top-color: rgb(87, 92, 117);
  color: rgb(195, 200, 223);
}

body th {
  border-bottom-color: rgb(87, 92, 117);
  border-left-color: rgb(87, 92, 117);
  border-right-color: rgb(87, 92, 117);
  border-top-color: rgb(87, 92, 117);
  color: rgb(195, 200, 223);
}

body tr {
  background-color: rgb(48, 50, 65);
}`,
    code: `body code {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
  color: rgb(195, 200, 223);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
}

body pre:has(> code) {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
}`,
    images: `body audio {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

body figcaption {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

body img {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

body video {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    embeds: `body .file-embed {
  background-color: rgb(30, 32, 41);
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
}

body .footnotes {
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

body .transclude {
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

body .transclude-inner {
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
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(87, 92, 117);
  text-decoration: line-through rgb(87, 92, 117);
  text-decoration-color: rgb(87, 92, 117);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='*'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='-'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='/'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='>'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='?'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='I'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='S'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='b'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='c'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='d'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='f'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='i'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='k'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='l'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='p'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body li.task-list-item[data-task='w'] {
  color: rgb(195, 200, 223);
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(39, 41, 53);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(195, 200, 223) none 0px;
  text-decoration: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(24, 193, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(24, 193, 205);
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(24, 193, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(24, 193, 205);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(87, 92, 117);
  border-bottom-width: 2px;
  border-left-color: rgb(87, 92, 117);
  border-left-width: 2px;
  border-right-color: rgb(87, 92, 117);
  border-right-width: 2px;
  border-top-color: rgb(87, 92, 117);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(24, 193, 205);
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
  color: rgb(24, 193, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(24, 193, 205);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(218, 151, 93);
}

body h1 {
  color: rgb(140, 150, 217);
  font-family: Optima, "Recursive S";
}

body h2 {
  color: rgb(195, 200, 223);
  font-family: Optima, "Recursive S";
}

body h2.page-title, h2.page-title a {
  color: rgb(138, 143, 168);
  font-family: Optima, "Recursive S";
}

body h3 {
  color: rgb(140, 150, 217);
  font-family: Optima, "Recursive S";
}

body h4 {
  color: rgb(195, 200, 223);
  font-family: Optima, "Recursive S";
}

body h5 {
  color: rgb(140, 150, 217);
  font-family: Optima, "Recursive S";
}

body h6 {
  color: rgb(195, 200, 223);
  font-family: Optima, "Recursive S";
}

body hr {
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(176, 179, 196);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(176, 179, 196);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(176, 179, 196);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(24, 193, 205);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(24, 193, 205);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
}`,
    footer: `body footer {
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

body footer ul li a {
  color: rgb(176, 179, 196);
  text-decoration: rgb(176, 179, 196);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(176, 179, 196);
  text-decoration: rgb(176, 179, 196);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

body li.section-li > .section .meta {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(176, 179, 196);
  text-decoration: rgb(176, 179, 196);
}

body ul.section-ul {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
}

body .darkmode svg {
  color: rgb(176, 179, 196);
  stroke: rgb(176, 179, 196);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(87, 92, 117);
  border-left-color: rgb(87, 92, 117);
  border-right-color: rgb(87, 92, 117);
  border-top-color: rgb(87, 92, 117);
  color: rgb(87, 92, 117);
}

body .breadcrumb-element p {
  color: rgb(87, 92, 117);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

body .metadata {
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
  margin-left: 4px;
  margin-right: -4px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(48, 50, 65);
}

body .page-header h2.page-title {
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(195, 200, 223);
  text-decoration: underline dotted rgb(195, 200, 223);
}

body details {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

body input[type=text] {
  border-bottom-color: rgb(24, 193, 205);
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
  color: rgb(24, 193, 205);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

body sub {
  color: rgb(195, 200, 223);
}

body summary {
  color: rgb(195, 200, 223);
}

body sup {
  color: rgb(195, 200, 223);
}`,
  },
  light: {
    base: `:root:root {
  --a-row: #00000008;
  --active-line-color: #1396a0;
  --alt-heading-color: #5460ab;
  --b-row: #00000014;
  --background-modifier-active-hover: rgba(19, 150, 160, 0.1);
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
  --bases-table-cell-background-selected: rgba(19, 150, 160, 0.1);
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
  --bold-color: #dc388f;
  --bold-weight: 600;
  --callout-padding: 8px;
  --callout-title-size: 110%;
  --callout-title-weight: 600;
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
  --collapse-icon-color: hsl(230/**/25%67%);
  --collapse-icon-color-collapsed: #1396a0;
  --color-accent: #1396a0;
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
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
  --file-header-font: '??', "Recursive S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: hsl(230/**/37.5%99%);
  --flair-color: hsl(230/**/50%24%);
  --font-heading-theme: "Optima","Recursive S";
  --font-interface: '??', "Recursive S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Recursive S";
  --font-mermaid: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "iA Writer Quattro S", 'Arial';
  --font-text: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "iA Writer Quattro S";
  --footnote-divider-color: hsl(230/**/25%88%);
  --footnote-id-color: hsl(230/**/25%35%);
  --footnote-id-color-no-occurrences: hsl(230/**/25%67%);
  --graph-line: hsl(230/**/25%83%);
  --graph-node: hsl(230/**/25%35%);
  --graph-node-focused: #1396a0;
  --graph-node-unresolved: hsl(230/**/25%67%);
  --graph-text: hsl(230/**/50%24%);
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
  --heading-formatting: hsl(230/**/25%67%);
  --heading-letter-spacing: 1.5px;
  --heading-scaling: 1;
  --heading-spacing: 2.5rem;
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
  --line-height-tight: 1.2;
  --link-color: #1396a0;
  --link-color-hover: #dc388f;
  --link-decoration-thickness: 1.2px;
  --link-external-color: #1396a0;
  --link-external-color-hover: #dc388f;
  --link-unresolved-color: #6fb74e;
  --link-unresolved-decoration-color: rgba(19, 150, 160, 0.3);
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
  --metadata-input-font: '??', "Recursive S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.8em;
  --metadata-input-height: 28px;
  --metadata-input-text-color: hsl(230/**/50%24%);
  --metadata-label-font: '??', "Recursive S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --nav-item-background-selected: rgba(19, 150, 160, 0.15);
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
  --secondary-accent: #c67e3f;
  --setting-group-heading-color: hsl(230/**/50%24%);
  --setting-items-background: hsl(230/**/25%97%);
  --setting-items-border-color: hsl(230/**/25%88%);
  --sidebar-markdown-font-size: 14.4px;
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
  --table-row-alt-background: #00000014;
  --table-selection: rgba(19, 150, 160, 0.1);
  --table-selection-border-color: #108189;
  --table-text-size: 14.4px;
  --table-white-space: normal;
  --tag-background: none;
  --tag-background-hover: none;
  --tag-border-color: rgba(19, 150, 160, 0.15);
  --tag-border-color-hover: rgba(19, 150, 160, 0.15);
  --tag-border-width: 0;
  --tag-color: #c67e3f;
  --tag-color-hover: #dc388f;
  --tag-decoration-hover: underline;
  --tag-padding-x: 0;
  --tag-padding-y: 0;
  --tag-size: 1em;
  --text-accent: #1396a0;
  --text-accent-hover: #dc388f;
  --text-faint: hsl(230/**/25%67%);
  --text-gray: hsl(230/**/25%44%);
  --text-muted: hsl(230/**/25%35%);
  --text-normal: hsl(230/**/50%24%);
  --text-on-accent: #fff;
  --text-selection: rgb(19, 150, 160);
  --thin-border: 1px solid hsl(230/**/25%67%);
  --thin-muted-border: 1px solid hsl(230/**/25%88%);
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 240, 245);
  color: rgb(31, 41, 92);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(251, 252, 253);
  color: rgb(31, 41, 92);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 240, 245);
  color: rgb(31, 41, 92);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 231, 240);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 240, 245);
  border-left-color: rgb(230, 231, 240);
  color: rgb(31, 41, 92);
}

body div#quartz-root {
  background-color: rgb(251, 252, 253);
  color: rgb(31, 41, 92);
}`,
    typography: `body .page article p > b, b {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration: rgb(220, 56, 143);
  text-decoration-color: rgb(220, 56, 143);
}

body .page article p > em, em {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration: rgb(220, 56, 143);
  text-decoration-color: rgb(220, 56, 143);
}

body .page article p > i, i {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration: rgb(220, 56, 143);
  text-decoration-color: rgb(220, 56, 143);
}

body .page article p > strong, strong {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration: rgb(220, 56, 143);
  text-decoration-color: rgb(220, 56, 143);
}

body .text-highlight {
  background-color: rgba(244, 222, 113, 0.4);
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 41, 92) none 0px;
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body del {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 41, 92) none 0px;
  text-decoration: line-through rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body p {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(67, 74, 112) none 0px;
  text-decoration: rgb(67, 74, 112);
  text-decoration-color: rgb(67, 74, 112);
}`,
    links: `body a.external, footer a {
  color: rgb(19, 150, 160);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(19, 150, 160) none 0px;
  text-decoration: underline 1.2px rgb(19, 150, 160);
  text-decoration-color: rgb(19, 150, 160);
  text-decoration-thickness: 1.2px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(19, 150, 160);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(19, 150, 160) none 0px;
  text-decoration: underline 1.2px double rgb(19, 150, 160);
  text-decoration-color: rgb(19, 150, 160);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}

body a.internal.broken {
  color: rgb(111, 183, 78);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(111, 183, 78) none 0px;
  text-decoration: underline 1.2px double rgba(19, 150, 160, 0.3);
  text-decoration-color: rgba(19, 150, 160, 0.3);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}`,
    lists: `body dd {
  color: rgb(31, 41, 92);
}

body dt {
  color: rgb(31, 41, 92);
}

body ol > li {
  color: rgb(31, 41, 92);
}

body ol.overflow {
  background-color: rgb(251, 252, 253);
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

body ul > li {
  color: rgb(31, 41, 92);
}

body ul.overflow {
  background-color: rgb(251, 252, 253);
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(84, 94, 140);
  text-decoration: rgb(84, 94, 140);
}

body blockquote {
  background-color: rgb(239, 240, 245);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

body table {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 192.594px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.08);
}

body td {
  border-bottom-color: rgb(150, 157, 192);
  border-left-color: rgb(150, 157, 192);
  border-right-color: rgb(150, 157, 192);
  border-top-color: rgb(150, 157, 192);
  color: rgb(31, 41, 92);
}

body th {
  border-bottom-color: rgb(150, 157, 192);
  border-left-color: rgb(150, 157, 192);
  border-right-color: rgb(150, 157, 192);
  border-top-color: rgb(150, 157, 192);
  color: rgb(31, 41, 92);
}

body tr {
  background-color: rgb(217, 219, 232);
}`,
    code: `body code {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
  color: rgb(31, 41, 92);
}

body pre > code, pre:has(> code) {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
}

body pre:has(> code) {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
}`,
    images: `body audio {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

body figcaption {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

body img {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

body video {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 246, 249);
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
}

body .footnotes {
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

body .transclude {
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

body .transclude-inner {
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
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(150, 157, 192);
  text-decoration: line-through rgb(150, 157, 192);
  text-decoration-color: rgb(150, 157, 192);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='*'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='-'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='/'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='>'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='?'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='I'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='S'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='b'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='c'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='d'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='f'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='i'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='k'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='l'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='p'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='u'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body li.task-list-item[data-task='w'] {
  color: rgb(31, 41, 92);
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(251, 252, 253);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 41, 92) none 0px;
  text-decoration: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(19, 150, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(19, 150, 160);
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(19, 150, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(19, 150, 160);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(150, 157, 192);
  border-bottom-width: 2px;
  border-left-color: rgb(150, 157, 192);
  border-left-width: 2px;
  border-right-color: rgb(150, 157, 192);
  border-right-width: 2px;
  border-top-color: rgb(150, 157, 192);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(19, 150, 160);
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
  color: rgb(19, 150, 160);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(19, 150, 160);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(198, 126, 63);
}

body h1 {
  color: rgb(84, 96, 171);
  font-family: Optima, "Recursive S";
}

body h2 {
  color: rgb(31, 41, 92);
  font-family: Optima, "Recursive S";
}

body h2.page-title, h2.page-title a {
  color: rgb(84, 94, 140);
  font-family: Optima, "Recursive S";
}

body h3 {
  color: rgb(84, 96, 171);
  font-family: Optima, "Recursive S";
}

body h4 {
  color: rgb(31, 41, 92);
  font-family: Optima, "Recursive S";
}

body h5 {
  color: rgb(84, 96, 171);
  font-family: Optima, "Recursive S";
}

body h6 {
  color: rgb(31, 41, 92);
  font-family: Optima, "Recursive S";
}

body hr {
  border-bottom-color: rgb(230, 231, 240);
  border-left-color: rgb(230, 231, 240);
  border-right-color: rgb(230, 231, 240);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}

body ::-webkit-scrollbar-corner {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}

body ::-webkit-scrollbar-track {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(67, 74, 112);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(67, 74, 112);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(67, 74, 112);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(19, 150, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(19, 150, 160);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
}`,
    footer: `body footer {
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

body footer ul li a {
  color: rgb(67, 74, 112);
  text-decoration: rgb(67, 74, 112);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(67, 74, 112);
  text-decoration: rgb(67, 74, 112);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

body li.section-li > .section .meta {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(67, 74, 112);
  text-decoration: rgb(67, 74, 112);
}

body ul.section-ul {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
}

body .darkmode svg {
  color: rgb(67, 74, 112);
  stroke: rgb(67, 74, 112);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(150, 157, 192);
  border-left-color: rgb(150, 157, 192);
  border-right-color: rgb(150, 157, 192);
  border-top-color: rgb(150, 157, 192);
  color: rgb(150, 157, 192);
}

body .breadcrumb-element p {
  color: rgb(150, 157, 192);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

body .metadata {
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
  margin-left: 4px;
  margin-right: -4px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(217, 219, 232);
}

body .page-header h2.page-title {
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(31, 41, 92);
  text-decoration: underline dotted rgb(31, 41, 92);
}

body details {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

body input[type=text] {
  border-bottom-color: rgb(19, 150, 160);
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
  color: rgb(19, 150, 160);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

body sub {
  color: rgb(31, 41, 92);
}

body summary {
  color: rgb(31, 41, 92);
}

body sup {
  color: rgb(31, 41, 92);
}`,
  },
};
