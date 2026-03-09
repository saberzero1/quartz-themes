import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "celestial-night",
    modes: ["dark"],
    variations: [],
    fonts: ["bookerly", "hatolie", "merienda"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 41;
  --accent-l: 100%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(255, 255, 255, 0.1);
  --background-modifier-border: #3b3f56;
  --background-modifier-border-focus: #515b71;
  --background-modifier-border-hover: #3b445d;
  --background-modifier-error: #e46f7d;
  --background-modifier-error-hover: #e46f7d;
  --background-modifier-error-rgb: 228, 111, 125;
  --background-modifier-form-field: #313952;
  --background-modifier-form-field-hover: #313952;
  --background-modifier-success: #a5d18c;
  --background-modifier-success-rgb: 165, 209, 140;
  --background-primary: #2a3141;
  --background-primary-alt: #222a38;
  --background-secondary: #262b3b;
  --background-secondary-alt: #1d232f;
  --bases-cards-background: #2a3141;
  --bases-cards-cover-background: #222a38;
  --bases-cards-radius: 26px;
  --bases-cards-shadow: 0 0 0 1px #3b3f56;
  --bases-cards-shadow-hover: 0 0 0 1px #3b445d;
  --bases-embed-border-color: #3b3f56;
  --bases-embed-border-radius: 20px;
  --bases-group-heading-property-color: #8890a6;
  --bases-table-border-color: #3b3f56;
  --bases-table-cell-background-active: #2a3141;
  --bases-table-cell-background-disabled: #222a38;
  --bases-table-cell-background-selected: rgba(255, 255, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #515b71;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 255, 255);
  --bases-table-container-border-radius: 20px;
  --bases-table-group-background: #222a38;
  --bases-table-header-background: #2a3141;
  --bases-table-header-color: #8890a6;
  --bases-table-summary-background: #2a3141;
  --blockquote-background-color: #262b3b;
  --blockquote-border-color: #8890a6;
  --blockquote-color: white;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, #1d232f 65%, transparent) linear-gradient(#1d232f, color-mix(in srgb, #1d232f 65%, transparent));
  --callout-blend-mode: normal;
  --callout-bug: 228, 111, 125;
  --callout-default: 86, 174, 214;
  --callout-error: 228, 111, 125;
  --callout-example: 181, 132, 199;
  --callout-fail: 228, 111, 125;
  --callout-important: 111, 210, 194;
  --callout-info: 86, 174, 214;
  --callout-question: 251, 179, 108;
  --callout-radius: 2em;
  --callout-success: 165, 209, 140;
  --callout-summary: 111, 210, 194;
  --callout-tip: 111, 210, 194;
  --callout-title-color: white;
  --callout-todo: 86, 174, 214;
  --callout-warning: 251, 179, 108;
  --canvas-background: #2a3141;
  --canvas-card-label-color: #5f6980;
  --canvas-color-1: 228, 111, 125;
  --canvas-color-2: 251, 179, 108;
  --canvas-color-3: 255, 222, 115;
  --canvas-color-4: 165, 209, 140;
  --canvas-color-5: 111, 210, 194;
  --canvas-color-6: 181, 132, 199;
  --canvas-controls-radius: 20px;
  --canvas-dot-pattern: #1d232f;
  --caret-color: #cdd1df;
  --checkbox-border-color: #5f6980;
  --checkbox-border-color-hover: #8890a6;
  --checkbox-color: white;
  --checkbox-color-hover: #cdd1df;
  --checkbox-marker-color: transparent;
  --checkbox-radius: 20px;
  --checkbox-size: 20px;
  --checklist-done-color: white;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 20px;
  --code-background: #222a38;
  --code-border-color: #3b3f56;
  --code-comment: #5f6980;
  --code-function: #ffde73;
  --code-important: #fbb36c;
  --code-keyword: #ff94c8;
  --code-normal: #cdd1df;
  --code-operator: #e46f7d;
  --code-property: #6fd2c2;
  --code-punctuation: #8890a6;
  --code-radius: 20px;
  --code-string: #a5d18c;
  --code-tag: #e46f7d;
  --code-value: #b584c7;
  --collapse-icon-color: #5f6980;
  --collapse-icon-color-collapsed: hsl(38, 102%, 115%);
  --color-accent: rgb(255, 255, 255);
  --color-accent-1: hsl(38, 102%, 115%);
  --color-accent-2: hsl(36, 105%, 129%);
  --color-accent-hsl: 41, 100%, 100%;
  --color-base-00: #2a3141;
  --color-base-05: #252b3a;
  --color-base-10: #222a38;
  --color-base-100: #cdd1df;
  --color-base-20: #262b3b;
  --color-base-25: #313952;
  --color-base-30: #1d232f;
  --color-base-35: #3b445d;
  --color-base-40: #515b71;
  --color-base-50: #5f6980;
  --color-base-60: #080b17;
  --color-base-70: #8890a6;
  --color-blue: #56aed6;
  --color-blue-rgb: 86, 174, 214;
  --color-cyan: #6fd2c2;
  --color-cyan-rgb: 111, 210, 194;
  --color-green: #a5d18c;
  --color-green-rgb: 165, 209, 140;
  --color-orange: #fbb36c;
  --color-orange-rgb: 251, 179, 108;
  --color-pink: #ff94c8;
  --color-pink-rgb: 255, 148, 200;
  --color-purple: #b584c7;
  --color-purple-rgb: 181, 132, 199;
  --color-red: #e46f7d;
  --color-red-rgb: 228, 111, 125;
  --color-yellow: #ffde73;
  --color-yellow-rgb: 255, 222, 115;
  --divider-color: #3b3f56;
  --divider-color-hover: rgb(255, 255, 255);
  --dropdown-background: #1d232f;
  --dropdown-background-hover: #3b445d;
  --embed-block-shadow-hover: 0 0 0 1px #3b3f56, inset 0 0 0 1px #3b3f56;
  --embed-border-start: 2px solid rgb(255, 255, 255);
  --file-header-background: #2a3141;
  --file-header-background-focused: #2a3141;
  --file-header-font: '??', 'Avenir Next', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #1d232f;
  --flair-color: #cdd1df;
  --font-cursive: 'Merienda';
  --font-headings: 'Merienda';
  --font-interface: '??', 'Avenir Next', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'Avenir Next';
  --font-mermaid: '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', 'Arial';
  --font-sans: 'Avenir Next';
  --font-serif: 'Bookerly';
  --font-text: '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Bookerly', 'Source Han Serif', 'Noto Serif JP';
  --footnote-divider-color: #3b3f56;
  --footnote-id-color: #8890a6;
  --footnote-id-color-no-occurrences: #5f6980;
  --footnote-radius: 20px;
  --glow-color: white;
  --glow-effect-m: 0px 0px 30px rgb(255, 255, 255) , 0px 0px 10px rgba(93, 182, 255, 0.577);
  --glow-effect-s: 0px 0px 20px rgba(255, 255, 255, 0.535) , 0px 0px 5px rgba(93, 182, 255, 0.586);
  --graph-line: #3b445d;
  --graph-node: #8890a6;
  --graph-node-attachment: #ffde73;
  --graph-node-focused: hsl(38, 102%, 115%);
  --graph-node-tag: #a5d18c;
  --graph-node-unresolved: #5f6980;
  --graph-text: #cdd1df;
  --h1-font: 'Merienda';
  --h1-size: 2em;
  --h1-weight: 900;
  --h2-font: 'Merienda';
  --h2-weight: 800;
  --h3-font: 'Merienda';
  --h3-weight: 700;
  --h4-font: 'Merienda';
  --h4-weight: 600;
  --h5-font: 'Merienda';
  --h5-weight: 500;
  --h6-font: 'Merienda';
  --h6-weight: 400;
  --heading-font: 'Merienda';
  --heading-formatting: #5f6980;
  --hr-color: #3b3f56;
  --icon-color: #8890a6;
  --icon-color-active: hsl(38, 102%, 115%);
  --icon-color-focused: #cdd1df;
  --icon-color-hover: #8890a6;
  --inline-title-font: 'Hatolie', '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --inline-title-size: 4em;
  --inline-title-weight: normal;
  --input-date-separator: #5f6980;
  --input-placeholder-color: #5f6980;
  --interactive-accent: rgb(255, 255, 255);
  --interactive-accent-hover: hsl(38, 102%, 115%);
  --interactive-accent-hsl: 41, 100%, 100%;
  --interactive-hover: #3b445d;
  --interactive-normal: #1d232f;
  --link-color: hsl(38, 102%, 115%);
  --link-color-hover: hsl(36, 105%, 129%);
  --link-decoration-color-active: rgba(255, 255, 255, 0.5);
  --link-external-color: hsl(38, 102%, 115%);
  --link-external-color-hover: hsl(36, 105%, 129%);
  --link-unresolved-color: hsl(38, 102%, 115%);
  --link-unresolved-decoration-color: rgba(255, 255, 255, 0.3);
  --list-bullet-size: 0.25em;
  --list-marker-color: white;
  --list-marker-color-collapsed: hsl(38, 102%, 115%);
  --list-marker-color-hover: white;
  --menu-background: #262b3b;
  --menu-border-color: #3b445d;
  --menu-radius: 26px;
  --metadata-border-color: #3b3f56;
  --metadata-divider-color: #3b3f56;
  --metadata-input-font: '??', 'Avenir Next', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #cdd1df;
  --metadata-label-font: '??', 'Avenir Next', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #8890a6;
  --metadata-label-text-color-hover: #8890a6;
  --metadata-property-box-shadow-focus: 0 0 0 2px #515b71;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3b445d;
  --modal-background: #2a3141;
  --modal-border-color: #515b71;
  --modal-radius: 30px;
  --nav-collapse-icon-color: #5f6980;
  --nav-collapse-icon-color-collapsed: #5f6980;
  --nav-heading-color: #cdd1df;
  --nav-heading-color-collapsed: #5f6980;
  --nav-heading-color-collapsed-hover: #8890a6;
  --nav-heading-color-hover: #cdd1df;
  --nav-item-background-selected: rgba(255, 255, 255, 0.15);
  --nav-item-color: #8890a6;
  --nav-item-color-active: #cdd1df;
  --nav-item-color-highlighted: hsl(38, 102%, 115%);
  --nav-item-color-hover: #cdd1df;
  --nav-item-color-selected: #cdd1df;
  --nav-item-radius: 20px;
  --nav-tag-color: #5f6980;
  --nav-tag-color-active: #8890a6;
  --nav-tag-color-hover: #8890a6;
  --nav-tag-radius: 20px;
  --pdf-background: #2a3141;
  --pdf-page-background: #2a3141;
  --pdf-shadow: 0 0 0 1px #3b3f56;
  --pdf-sidebar-background: #2a3141;
  --pdf-thumbnail-shadow: 0 0 0 1px #3b3f56;
  --pill-border-color: #3b3f56;
  --pill-border-color-hover: #3b445d;
  --pill-color: #8890a6;
  --pill-color-hover: #cdd1df;
  --pill-color-remove: #5f6980;
  --pill-color-remove-hover: hsl(38, 102%, 115%);
  --prompt-background: #2a3141;
  --prompt-border-color: #515b71;
  --radius-l: 30px;
  --radius-m: 26px;
  --radius-s: 20px;
  --radius-xl: 45px;
  --raised-background: color-mix(in srgb, #1d232f 65%, transparent) linear-gradient(#1d232f, color-mix(in srgb, #1d232f 65%, transparent));
  --ribbon-background: #262b3b;
  --ribbon-background-collapsed: #2a3141;
  --scrollbar-radius: 30px;
  --search-clear-button-color: #8890a6;
  --search-icon-color: #8890a6;
  --search-result-background: #2a3141;
  --setting-group-heading-color: #cdd1df;
  --setting-items-background: #222a38;
  --setting-items-border-color: #3b3f56;
  --setting-items-radius: 30px;
  --slider-thumb-border-color: #3b445d;
  --slider-track-background: #3b3f56;
  --status-bar-background: #262b3b;
  --status-bar-border-color: #3b3f56;
  --status-bar-radius: 26px 0 0 0;
  --status-bar-text-color: #8890a6;
  --suggestion-background: #2a3141;
  --sync-avatar-color-1: #e46f7d;
  --sync-avatar-color-2: #fbb36c;
  --sync-avatar-color-3: #ffde73;
  --sync-avatar-color-4: #a5d18c;
  --sync-avatar-color-5: #6fd2c2;
  --sync-avatar-color-6: #56aed6;
  --sync-avatar-color-7: #b584c7;
  --sync-avatar-color-8: #ff94c8;
  --tab-background-active: #2a3141;
  --tab-container-background: #262b3b;
  --tab-divider-color: #3b445d;
  --tab-outline-color: #3b3f56;
  --tab-radius: 20px;
  --tab-switcher-background: #262b3b;
  --tab-switcher-menubar-background: linear-gradient(to top, #262b3b, transparent);
  --tab-switcher-preview-radius: 45px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 255, 255);
  --tab-text-color: #5f6980;
  --tab-text-color-active: #8890a6;
  --tab-text-color-focused: #8890a6;
  --tab-text-color-focused-active: #8890a6;
  --tab-text-color-focused-active-current: #cdd1df;
  --tab-text-color-focused-highlighted: hsl(38, 102%, 115%);
  --table-add-button-border-color: #3b3f56;
  --table-border-color: #3b3f56;
  --table-drag-handle-background-active: rgb(255, 255, 255);
  --table-drag-handle-color: #5f6980;
  --table-drag-handle-color-active: #2a3141;
  --table-header-border-color: #3b3f56;
  --table-header-color: #cdd1df;
  --table-selection: rgba(255, 255, 255, 0.1);
  --table-selection-border-color: rgb(255, 255, 255);
  --tag-background: #262b3b;
  --tag-background-hover: rgba(255, 255, 255, 0.2);
  --tag-border-color: rgba(255, 255, 255, 0.15);
  --tag-border-color-hover: rgba(255, 255, 255, 0.15);
  --tag-border-width: 1px;
  --tag-color: hsl(38, 102%, 115%);
  --tag-color-hover: hsl(38, 102%, 115%);
  --tag-radius: 1em;
  --tag-weight: 300;
  --text-accent: hsl(38, 102%, 115%);
  --text-accent-hover: hsl(36, 105%, 129%);
  --text-error: #e46f7d;
  --text-faint: #5f6980;
  --text-muted: #8890a6;
  --text-normal: #cdd1df;
  --text-on-accent: #2a3141;
  --text-selection: rgba(255, 255, 255, 0.33);
  --text-success: #a5d18c;
  --text-warning: #fbb36c;
  --titlebar-background: #262b3b;
  --titlebar-background-focused: #1d232f;
  --titlebar-border-color: #3b3f56;
  --titlebar-text-color: #8890a6;
  --titlebar-text-color-focused: #cdd1df;
  --vault-profile-color: #cdd1df;
  --vault-profile-color-hover: #cdd1df;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 43, 59);
  color: rgb(205, 209, 223);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(42, 49, 65);
  color: rgb(205, 209, 223);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 43, 59);
  color: rgb(205, 209, 223);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(59, 63, 86);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 43, 59);
  border-left-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}

body div#quartz-root {
  background-color: rgb(42, 49, 65);
  color: rgb(205, 209, 223);
}`,
    typography: `body .page article p > b, b {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body .page article p > em, em {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body .page article p > i, i {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body .page article p > strong, strong {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body .text-highlight {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body del {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: line-through rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body p {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(136, 144, 166) none 0px;
  text-decoration: rgb(136, 144, 166);
  text-decoration-color: rgb(136, 144, 166);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 255, 255);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.5);
  transition: 0.25s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.5);
}

body a.internal.broken {
  color: rgb(255, 255, 255);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.5);
}`,
    lists: `body dd {
  color: rgb(205, 209, 223);
}

body dt {
  color: rgb(205, 209, 223);
}

body ol > li {
  color: rgb(136, 144, 166);
}

body ol.overflow {
  background-color: rgb(42, 49, 65);
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body ul > li {
  color: rgb(136, 144, 166);
}

body ul.overflow {
  background-color: rgb(42, 49, 65);
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(95, 105, 128);
  text-decoration: rgb(95, 105, 128);
}

body blockquote {
  background-color: rgb(38, 43, 59);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body table {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 201.891px;
}

body td {
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}

body th {
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}`,
    code: `body code {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 222, 115);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 222, 115);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 222, 115);
  border-left-color: rgb(255, 222, 115);
  border-right-color: rgb(255, 222, 115);
  border-top-color: rgb(255, 222, 115);
}

body pre > code, pre:has(> code) {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body pre:has(> code) {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `body audio {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body figcaption {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body img {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-radius: 20px;
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  filter: brightness(0.9);
}

body video {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    embeds: `body .file-embed {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body .footnotes {
  border-top-color: rgb(205, 209, 223);
  color: rgb(205, 209, 223);
}

body .transclude {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body .transclude-inner {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  margin-left: -30px;
  width: 20px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='*'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='-'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='/'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='>'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='?'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='I'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='S'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='b'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='c'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='d'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='f'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='i'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='k'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='l'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='p'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body li.task-list-item[data-task='w'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
}

body .callout[data-callout="abstract"] {
  --callout-color: 111, 210, 194;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 228, 111, 125;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 228, 111, 125;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 181, 132, 199;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 228, 111, 125;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 86, 174, 214;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 86, 174, 214;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 251, 179, 108;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 165, 209, 140;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 111, 210, 194;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 86, 174, 214;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 251, 179, 108;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(49, 57, 82);
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(42, 49, 65);
  border-bottom-color: rgb(81, 91, 113);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

body .search > .search-container > .search-space > * {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 209, 223);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(205, 209, 223);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(205, 209, 223);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(81, 91, 113);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 43, 59);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Hatolie, "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

body hr {
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
}`,
    scrollbars: `body .callout {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  padding-left: 25px;
}

body ::-webkit-scrollbar {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}

body ::-webkit-scrollbar-corner {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}

body ::-webkit-scrollbar-track {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(136, 144, 166);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(136, 144, 166);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(136, 144, 166);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
}`,
    footer: `body footer {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 26px;
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(136, 144, 166);
  text-decoration: rgb(136, 144, 166);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  color: rgb(205, 209, 223);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 144, 166);
  text-decoration: rgb(136, 144, 166);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body li.section-li > .section .meta {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 144, 166);
  text-decoration: rgb(136, 144, 166);
}

body ul.section-ul {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
}

body .darkmode svg {
  color: rgb(136, 144, 166);
  stroke: rgb(136, 144, 166);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
}

body .breadcrumb-element p {
  color: rgb(95, 105, 128);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  color: rgb(205, 209, 223);
}

body .metadata {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 8px;
  padding-right: 8px;
}

body .metadata-properties {
  border-bottom-color: rgb(136, 144, 166);
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  color: rgb(136, 144, 166);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(38, 43, 59);
}

body .page-header h2.page-title {
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(205, 209, 223);
  text-decoration: underline dotted rgb(205, 209, 223);
}

body details {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body input[type=text] {
  border-bottom-color: rgb(136, 144, 166);
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

body progress {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

body sub {
  color: rgb(205, 209, 223);
}

body summary {
  color: rgb(205, 209, 223);
}

body sup {
  color: rgb(205, 209, 223);
}`,
  },
  light: {},
};
