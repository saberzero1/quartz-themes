import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "kurokula",
    modes: ["dark"],
    variations: [],
    fonts: ["atkinson-hyperlegible", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 260.488;
  --accent-l: 55.8824%;
  --accent-s: 18.2222%;
  --background-modifier-active-hover: rgba(136, 123, 163, 0.1);
  --background-primary: #141515;
  --background-secondary: #212121;
  --bases-cards-background: #141515;
  --bases-cards-border-width: 2px;
  --bases-group-heading-property-color: rgba(255, 255, 255, 0.8);
  --bases-group-heading-property-size: 14px;
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-cell-background-active: #141515;
  --bases-table-cell-background-selected: rgba(136, 123, 163, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(136, 123, 163);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-header-background: #141515;
  --bases-table-header-color: rgba(255, 255, 255, 0.8);
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: #141515;
  --blockquote-border-color: #515151;
  --blockquote-border-thickness: 8px;
  --blockquote-color: #FFC663;
  --blockquote-font-style: italic;
  --bold-color: #FFFFFF;
  --bold-weight: 800;
  --border-width: 2px;
  --button-radius: 8px;
  --callout-border-opacity: 0.45;
  --callout-border-width: 1px;
  --callout-bug: 158, 96, 236;
  --callout-default: 104, 144, 215;
  --callout-error: 210, 62, 8;
  --callout-example: 204, 131, 189;
  --callout-fail: 182, 96, 86;
  --callout-important: 30, 249, 245;
  --callout-info: 42, 185, 255;
  --callout-padding: 16px;
  --callout-question: 171, 123, 78;
  --callout-quote: 157, 89, 24;
  --callout-radius: 8px;
  --callout-success: 84, 202, 116;
  --callout-summary: 169, 148, 255;
  --callout-tip: 96, 190, 190;
  --callout-todo: 161, 217, 255;
  --callout-warning: 229, 150, 5;
  --canvas-background: #141515;
  --canvas-card-label-color: rgba(255, 255, 255, 0.6);
  --caret-color: rgb(255, 255, 255);
  --checkbox-border-color: #94959B;
  --checkbox-border-color-hover: #FFFFFF;
  --checkbox-color: #515151;
  --checkbox-color-hover: #85B1A9;
  --checkbox-marker-color: #94959B;
  --checkbox-size: 24px;
  --checklist-done-color: #94959B;
  --code-background: #141515;
  --code-comment: #FCFFB8;
  --code-function: #DBBB43;
  --code-important: #1EF9F5;
  --code-inline: #DBBB43;
  --code-keyword: #6890D7;
  --code-normal: #FFFFFF;
  --code-operator: #94959B;
  --code-property: #CC83BD;
  --code-punctuation: #94959B;
  --code-radius: 12px;
  --code-string: #85B1A9;
  --code-tag: #2AB9FF;
  --code-value: #9D5918;
  --collapse-icon-color: #DDD0C4;
  --collapse-icon-color-collapsed: #94959B;
  --color-accent: rgb(136, 123, 163);
  --color-accent-1: rgb(156, 146, 181);
  --color-accent-2: rgb(177, 170, 197);
  --color-accent-hsl: 260.488, 18.2222%, 55.8824%;
  --divider-color: #515151;
  --divider-color-hover: #FFFFFF;
  --divider-width-hover: 2px;
  --embed-block-shadow-hover: 0 0 0 1px #363636,
		inset 0 0 0 1px #363636;
  --embed-border-left: 2px solid rgb(136, 123, 163);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(136, 123, 163);
  --file-header-background: #141515;
  --file-header-background-focused: #141515;
  --file-header-border: 2px solid transparent;
  --file-header-font-size: 12px;
  --file-header-justify: left;
  --flair-color: rgb(255, 255, 255);
  --font-mermaid: '??', "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Atkinson Hyperlegible", "serif", 'Arial';
  --font-text: '??', "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Atkinson Hyperlegible", "serif";
  --font-ui-medium: 18px;
  --font-ui-small: 16px;
  --font-ui-smaller: 14px;
  --footnote-divider-width: 2px;
  --footnote-id-color: rgba(255, 255, 255, 0.8);
  --footnote-id-color-no-occurrences: rgba(255, 255, 255, 0.6);
  --graph-node: rgba(255, 255, 255, 0.8);
  --graph-node-focused: rgb(156, 146, 181);
  --graph-node-unresolved: rgba(255, 255, 255, 0.6);
  --graph-text: rgb(255, 255, 255);
  --h-font-style: oblique 10deg;
  --h-font-variant: proportional-nums;
  --h-weight: 900;
  --h1-color: #94959B;
  --h1-style: oblique 10deg;
  --h1-variant: proportional-nums;
  --h1-weight: 900;
  --h2-color: #60BEBE;
  --h2-style: oblique 10deg;
  --h2-variant: proportional-nums;
  --h2-weight: 900;
  --h3-color: #CC83BD;
  --h3-style: oblique 10deg;
  --h3-variant: proportional-nums;
  --h3-weight: 900;
  --h4-color: #DBBB43;
  --h4-style: oblique 10deg;
  --h4-variant: proportional-nums;
  --h4-weight: 900;
  --h5-color: #B66056;
  --h5-style: oblique 10deg;
  --h5-variant: proportional-nums;
  --h5-weight: 900;
  --h6-color: #6890D7;
  --h6-style: oblique 10deg;
  --h6-variant: proportional-nums;
  --h6-weight: 900;
  --heading-formatting: #FFFFFF;
  --hr-color: rgba(148, 149, 155, 0.3);
  --hr-thickness: 4px;
  --icon-color: #DDD0C4;
  --icon-color-active: #A994FF;
  --icon-color-focused: #9E60EC;
  --icon-color-hover: #DBBB43;
  --icon-opacity: 0.75;
  --icon-opacity-hover: 0.9;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: #94959B;
  --inline-title-size: 28px;
  --inline-title-style: oblique 10deg;
  --inline-title-variant: proportional-nums;
  --inline-title-weight: 600;
  --input-date-separator: rgba(255, 255, 255, 0.6);
  --input-placeholder-color: rgba(255, 255, 255, 0.6);
  --input-radius: 4px;
  --interactive-accent: rgb(136, 123, 163);
  --interactive-accent-hover: rgb(156, 146, 181);
  --interactive-accent-hsl: 260.488, 18.2222%, 55.8824%;
  --italic-color: #FFFFFF;
  --italic-weight: 300;
  --kuro-black-dark: #141515;
  --kuro-black-dark-rgb: 20, 21, 21;
  --kuro-black-light: #515151;
  --kuro-black-light-rgb: 81, 81, 81;
  --kuro-black-normal: #333333;
  --kuro-black-normal-rgb: 51, 51, 51;
  --kuro-blue-dark: #6890D7;
  --kuro-blue-dark-rgb: 104, 144, 215;
  --kuro-blue-light: #A1D9FF;
  --kuro-blue-light-rgb: 161, 217, 255;
  --kuro-blue-normal: #2AB9FF;
  --kuro-blue-normal-rgb: 42, 185, 255;
  --kuro-brown-dark: #837369;
  --kuro-brown-dark-rgb: 131, 115, 105;
  --kuro-brown-light: #F9CFB9;
  --kuro-brown-light-rgb: 249, 207, 185;
  --kuro-brown-normal: #9D5918;
  --kuro-brown-normal-rgb: 157, 89, 24;
  --kuro-code-attribute: #FFF700;
  --kuro-code-bg: #141515;
  --kuro-code-comment: #FCFFB8;
  --kuro-code-constant: #2AB9FF;
  --kuro-code-constant-builtin: #2AB9FF;
  --kuro-code-constant-builtin-bg: #6890D7;
  --kuro-code-constant-character-escape: #F9CFB9;
  --kuro-code-constant-numeric: #60BEBE;
  --kuro-code-constructor: #1EF9F5;
  --kuro-code-fg: #FFFFFF;
  --kuro-code-function: #DBBB43;
  --kuro-code-function-macro: #A994FF;
  --kuro-code-keyword: #6890D7;
  --kuro-code-label: #FCFFB8;
  --kuro-code-namespace: #1EF9F5;
  --kuro-code-operator: #94959B;
  --kuro-code-punctuation: #94959B;
  --kuro-code-special: #C1FFAE;
  --kuro-code-string: #85B1A9;
  --kuro-code-type: #E59605;
  --kuro-code-type-builtin: #A1D9FF;
  --kuro-code-type-enum-variant: #FCFFB8;
  --kuro-code-variable: #CC83BD;
  --kuro-code-variable-other: #9D5918;
  --kuro-code-variable-other-member: #AB7B4E;
  --kuro-cyan-dark: #60BEBE;
  --kuro-cyan-dark-rgb: 96, 190, 190;
  --kuro-cyan-light: #8EFFF3;
  --kuro-cyan-light-rgb: 142, 255, 243;
  --kuro-cyan-normal: #1EF9F5;
  --kuro-cyan-normal-rgb: 30, 249, 245;
  --kuro-green-dark: #85B1A9;
  --kuro-green-dark-rgb: 133, 177, 169;
  --kuro-green-light: #C1FFAE;
  --kuro-green-light-rgb: 193, 255, 174;
  --kuro-green-normal: #54CA74;
  --kuro-green-normal-rgb: 84, 202, 116;
  --kuro-magenta-dark: #CC83BD;
  --kuro-magenta-dark-rgb: 204, 131, 189;
  --kuro-magenta-light: #FFA2ED;
  --kuro-magenta-light-rgb: 255, 162, 237;
  --kuro-magenta-normal: #FF50DA;
  --kuro-magenta-normal-rgb: 255, 80, 218;
  --kuro-monospace-default: "JetBrainsMono Nerd Font", ui-monospace, SFMono-Regular, "Cascadia Code", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --kuro-orange-dark: #AB7B4E;
  --kuro-orange-dark-rgb: 171, 123, 78;
  --kuro-orange-light: #FFC663;
  --kuro-orange-light-rgb: 255, 198, 99;
  --kuro-orange-normal: #E59605;
  --kuro-orange-normal-rgb: 229, 150, 5;
  --kuro-purple-dark: #887AA3;
  --kuro-purple-dark-rgb: 136, 122, 163;
  --kuro-purple-light: #A994FF;
  --kuro-purple-light-rgb: 169, 148, 255;
  --kuro-purple-normal: #9E60EC;
  --kuro-purple-normal-rgb: 158, 96, 236;
  --kuro-red-dark: #B66056;
  --kuro-red-dark-rgb: 182, 96, 86;
  --kuro-red-light: #FFB7B7;
  --kuro-red-light-rgb: 255, 183, 183;
  --kuro-red-normal: #D23E08;
  --kuro-red-normal-rgb: 210, 62, 8;
  --kuro-white-dark: #94959B;
  --kuro-white-dark-rgb: 148, 149, 155;
  --kuro-white-light: #FFFFFF;
  --kuro-white-light-rgb: 255, 255, 255;
  --kuro-white-normal: #DDD0C4;
  --kuro-white-normal-rgb: 221, 208, 196;
  --kuro-yellow-dark: #DBBB43;
  --kuro-yellow-dark-rgb: 219, 187, 67;
  --kuro-yellow-light: #FCFFB8;
  --kuro-yellow-light-rgb: 252, 255, 184;
  --kuro-yellow-normal: #FFF700;
  --kuro-yellow-normal-rgb: 255, 247, 0;
  --link-color: #2AB9FF;
  --link-color-hover: #A1D9FF;
  --link-external-color: #54CA74;
  --link-external-color-hover: #C1FFAE;
  --link-unresolved-color: rgb(156, 146, 181);
  --link-unresolved-decoration-color: rgba(136, 123, 163, 0.3);
  --list-bullet-size: 0.4em;
  --list-marker-color: #94959B;
  --list-marker-color-collapsed: rgb(156, 146, 181);
  --list-marker-color-hover: rgba(255, 255, 255, 0.8);
  --menu-background: #212121;
  --menu-border-width: 2px;
  --metadata-input-text-color: rgb(255, 255, 255);
  --metadata-label-text-color: rgba(255, 255, 255, 0.8);
  --metadata-label-text-color-hover: rgba(255, 255, 255, 0.8);
  --metadata-property-box-shadow-hover: 0 0 0 2px #3f3f3f;
  --metadata-sidebar-input-font-size: 16px;
  --metadata-sidebar-label-font-size: 16px;
  --modal-background: #141515;
  --modal-border-width: 2px;
  --modal-radius: 16px;
  --nav-collapse-icon-color: #DDD0C4;
  --nav-collapse-icon-color-collapsed: rgba(255, 255, 255, 0.6);
  --nav-heading-color: rgb(255, 255, 255);
  --nav-heading-color-collapsed: rgba(255, 255, 255, 0.6);
  --nav-heading-color-collapsed-hover: rgba(255, 255, 255, 0.8);
  --nav-heading-color-hover: rgb(255, 255, 255);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-selected: rgba(136, 123, 163, 0.15);
  --nav-item-color: rgba(255, 255, 255, 0.8);
  --nav-item-color-active: rgb(255, 255, 255);
  --nav-item-color-highlighted: rgb(177, 170, 197);
  --nav-item-color-hover: rgb(255, 255, 255);
  --nav-item-color-selected: rgb(255, 255, 255);
  --nav-item-size: 16px;
  --nav-tag-color: rgba(255, 255, 255, 0.6);
  --nav-tag-color-active: rgba(255, 255, 255, 0.8);
  --nav-tag-color-hover: rgba(255, 255, 255, 0.8);
  --pdf-background: #141515;
  --pdf-page-background: #141515;
  --pdf-sidebar-background: #141515;
  --pill-border-width: 2px;
  --pill-color: rgba(255, 255, 255, 0.8);
  --pill-color-hover: rgb(255, 255, 255);
  --pill-color-remove: rgba(255, 255, 255, 0.6);
  --pill-color-remove-hover: rgb(156, 146, 181);
  --prompt-background: #141515;
  --prompt-border-color: #887AA3;
  --prompt-border-width: 2px;
  --prompt-input-height: 48px;
  --prompt-width: 720px;
  --radius-l: 16px;
  --ribbon-background: #212121;
  --ribbon-background-collapsed: #141515;
  --scrollbar-radius: 16px;
  --search-clear-button-color: #B66056;
  --search-icon-color: #887AA3;
  --search-result-background: #141515;
  --setting-group-heading-color: rgb(255, 255, 255);
  --setting-group-heading-size: 18px;
  --setting-items-radius: 16px;
  --slider-thumb-border-width: 2px;
  --slider-thumb-radius: 50%;
  --slider-track-background: #94959B;
  --status-bar-background: #141515;
  --status-bar-border-color: #515151;
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-font-size: 14px;
  --status-bar-text-color: #887AA3;
  --suggestion-background: #141515;
  --tab-background-active: #141515;
  --tab-container-background: #212121;
  --tab-font-size: 12px;
  --tab-outline-color: #515151;
  --tab-radius-active: 0px;
  --tab-stacked-font-size: 16px;
  --tab-switcher-background: #212121;
  --tab-switcher-menubar-background: linear-gradient(to top, #212121, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(136, 123, 163);
  --tab-text-color: rgba(255, 255, 255, 0.6);
  --tab-text-color-active: rgba(255, 255, 255, 0.8);
  --tab-text-color-focused: rgba(255, 255, 255, 0.8);
  --tab-text-color-focused-active: rgba(255, 255, 255, 0.8);
  --tab-text-color-focused-active-current: rgb(255, 255, 255);
  --tab-text-color-focused-highlighted: rgb(156, 146, 181);
  --table-drag-handle-background-active: rgb(136, 123, 163);
  --table-drag-handle-color: rgba(255, 255, 255, 0.6);
  --table-drag-handle-color-active: rgb(255, 255, 255);
  --table-header-color: rgb(255, 255, 255);
  --table-header-weight: 800;
  --table-selection: rgba(136, 123, 163, 0.1);
  --table-selection-border-color: rgb(136, 123, 163);
  --tag-background: rgba(136, 122, 163, 0.5);
  --tag-background-hover: rgba(136, 122, 163, 0.8);
  --tag-border-color: rgba(136, 123, 163, 0.15);
  --tag-border-color-hover: rgba(136, 123, 163, 0.15);
  --tag-color: #DDD0C4;
  --tag-color-hover: #FFFFFF;
  --tag-weight: 100;
  --text-accent: rgb(156, 146, 181);
  --text-accent-hover: rgb(177, 170, 197);
  --text-error: #FFB7B7;
  --text-faint: rgba(255, 255, 255, 0.6);
  --text-muted: rgba(255, 255, 255, 0.8);
  --text-normal: rgb(255, 255, 255);
  --text-on-accent: rgb(255, 255, 255);
  --text-on-accent-inverted: #141515;
  --text-selection: rgba(136, 123, 163, 0.33);
  --text-success: #54CA74;
  --text-warning: #E59605;
  --titlebar-background: #212121;
  --titlebar-text-color: rgba(255, 255, 255, 0.8);
  --titlebar-text-color-focused: rgb(255, 255, 255);
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-name-color: rgb(255, 255, 255);
  --vault-name-font-size: 16px;
  --vault-name-font-weight: 500;
  --vault-profile-color: rgb(255, 255, 255);
  --vault-profile-color-hover: rgb(255, 255, 255);
  --vault-profile-font-size: 16px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 33, 33);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(20, 21, 21);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 33, 33);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(81, 81, 81);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 33, 33);
  border-left-color: rgb(81, 81, 81);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(20, 21, 21);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgb(219, 187, 67);
  color: rgb(20, 21, 21);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(20, 21, 21) none 0px;
  text-decoration: rgb(20, 21, 21);
  text-decoration-color: rgb(20, 21, 21);
}

body del {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgba(255, 255, 255, 0.8);
  outline: rgba(255, 255, 255, 0.8) none 0px;
  text-decoration: rgba(255, 255, 255, 0.8);
  text-decoration-color: rgba(255, 255, 255, 0.8);
}`,
    links: `body a.external, footer a {
  color: rgb(84, 202, 116);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 202, 116) none 0px;
  text-decoration: underline rgb(84, 202, 116);
  text-decoration-color: rgb(84, 202, 116);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(42, 185, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 185, 255) none 0px;
  text-decoration: underline rgb(42, 185, 255);
  text-decoration-color: rgb(42, 185, 255);
}

body a.internal.broken {
  color: rgb(157, 147, 181);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(157, 147, 181) none 0px;
  text-decoration: underline rgba(136, 122, 163, 0.3);
  text-decoration-color: rgba(136, 122, 163, 0.3);
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: rgba(255, 255, 255, 0.6);
}

body blockquote {
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 224.656px;
}

body td {
  color: rgb(255, 255, 255);
}

body th {
  color: rgb(255, 255, 255);
  font-weight: 800;
}`,
    code: `body code {
  border-bottom-color: rgb(219, 187, 67);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 187, 67);
  border-right-color: rgb(219, 187, 67);
  border-top-color: rgb(219, 187, 67);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(219, 187, 67);
  font-family: "JetBrainsMono Nerd Font", ui-monospace, SFMono-Regular, "Cascadia Code", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(51, 51, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(51, 51, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(255, 255, 255);
}

body pre > code > [data-line] {
  border-left-color: rgb(219, 187, 67);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(219, 187, 67);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(219, 187, 67);
  border-left-color: rgb(219, 187, 67);
  border-right-color: rgb(219, 187, 67);
  border-top-color: rgb(219, 187, 67);
}

body pre > code, pre:has(> code) {
  background-color: rgb(51, 51, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(51, 51, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(136, 122, 163);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(136, 122, 163);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(148, 149, 155);
  text-decoration: line-through rgb(148, 149, 155);
  text-decoration-color: rgb(148, 149, 155);
}

body input[type=checkbox] {
  border-bottom-color: rgb(148, 149, 155);
  border-left-color: rgb(148, 149, 155);
  border-right-color: rgb(148, 149, 155);
  border-top-color: rgb(148, 149, 155);
  margin-left: -36px;
  width: 24px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

body .callout[data-callout="abstract"] {
  --callout-color: 169, 148, 255;
  background-color: rgba(169, 148, 255, 0.1);
  border-bottom-color: rgba(169, 148, 255, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(169, 148, 255, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(169, 148, 255, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(169, 148, 255, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 158, 96, 236;
  background-color: rgba(158, 96, 236, 0.1);
  border-bottom-color: rgba(158, 96, 236, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 96, 236, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(158, 96, 236, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(158, 96, 236, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 210, 62, 8;
  background-color: rgba(210, 62, 8, 0.1);
  border-bottom-color: rgba(210, 62, 8, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(210, 62, 8, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(210, 62, 8, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(210, 62, 8, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 204, 131, 189;
  background-color: rgba(204, 131, 189, 0.1);
  border-bottom-color: rgba(204, 131, 189, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(204, 131, 189, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(204, 131, 189, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(204, 131, 189, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 182, 96, 86;
  background-color: rgba(182, 96, 86, 0.1);
  border-bottom-color: rgba(182, 96, 86, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(182, 96, 86, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(182, 96, 86, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(182, 96, 86, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 42, 185, 255;
  background-color: rgba(42, 185, 255, 0.1);
  border-bottom-color: rgba(42, 185, 255, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(42, 185, 255, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(42, 185, 255, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(42, 185, 255, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 104, 144, 215;
  background-color: rgba(104, 144, 215, 0.1);
  border-bottom-color: rgba(104, 144, 215, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(104, 144, 215, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(104, 144, 215, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(104, 144, 215, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 171, 123, 78;
  background-color: rgba(171, 123, 78, 0.1);
  border-bottom-color: rgba(171, 123, 78, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(171, 123, 78, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(171, 123, 78, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(171, 123, 78, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 157, 89, 24;
  background-color: rgba(157, 89, 24, 0.1);
  border-bottom-color: rgba(157, 89, 24, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(157, 89, 24, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(157, 89, 24, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(157, 89, 24, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 84, 202, 116;
  background-color: rgba(84, 202, 116, 0.1);
  border-bottom-color: rgba(84, 202, 116, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(84, 202, 116, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(84, 202, 116, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(84, 202, 116, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 96, 190, 190;
  background-color: rgba(96, 190, 190, 0.1);
  border-bottom-color: rgba(96, 190, 190, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(96, 190, 190, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(96, 190, 190, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(96, 190, 190, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 161, 217, 255;
  background-color: rgba(161, 217, 255, 0.1);
  border-bottom-color: rgba(161, 217, 255, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(161, 217, 255, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(161, 217, 255, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(161, 217, 255, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 229, 150, 5;
  background-color: rgba(229, 150, 5, 0.1);
  border-bottom-color: rgba(229, 150, 5, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(229, 150, 5, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(229, 150, 5, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(229, 150, 5, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(136, 122, 163);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 2px;
  border-left-color: rgb(136, 122, 163);
  border-left-width: 2px;
  border-right-color: rgb(136, 122, 163);
  border-right-width: 2px;
  border-top-color: rgb(136, 122, 163);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(136, 122, 163);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 2px;
  border-left-color: rgb(136, 122, 163);
  border-left-width: 2px;
  border-right-color: rgb(136, 122, 163);
  border-right-width: 2px;
  border-top-color: rgb(136, 122, 163);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(136, 122, 163, 0.5);
  border-bottom-color: rgba(136, 122, 163, 0.15);
  border-left-color: rgba(136, 122, 163, 0.15);
  border-right-color: rgba(136, 122, 163, 0.15);
  border-top-color: rgba(136, 122, 163, 0.15);
  font-weight: 100;
}

body a.internal.tag-link::before {
  color: rgb(221, 208, 196);
}

body h1 {
  color: rgb(148, 149, 155);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(96, 190, 190);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(148, 149, 155);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(204, 131, 189);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(219, 187, 67);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(182, 96, 86);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(104, 144, 215);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(81, 81, 81);
  border-left-color: rgb(81, 81, 81);
  border-right-color: rgb(81, 81, 81);
}`,
    scrollbars: `body .callout {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgba(104, 144, 215, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(104, 144, 215, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(104, 144, 215, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(104, 144, 215, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}

body ::-webkit-scrollbar-corner {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}

body ::-webkit-scrollbar-track {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: rgba(255, 255, 255, 0.8);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: rgba(255, 255, 255, 0.8);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: rgba(255, 255, 255, 0.8);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(221, 208, 196);
  border-left-color: rgb(221, 208, 196);
  border-right-color: rgb(221, 208, 196);
  border-top-color: rgb(221, 208, 196);
  color: rgb(221, 208, 196);
}`,
    footer: `body footer {
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(81, 81, 81);
  border-left-color: rgb(81, 81, 81);
  border-left-width: 2px;
  border-right-color: rgb(81, 81, 81);
  border-top-color: rgb(81, 81, 81);
  border-top-width: 2px;
  color: rgb(136, 122, 163);
}

body footer ul li a {
  color: rgb(136, 122, 163);
  text-decoration: rgb(136, 122, 163);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: rgba(255, 255, 255, 0.8);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.8);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.8);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: rgba(255, 255, 255, 0.8);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(221, 208, 196);
  border-left-color: rgb(221, 208, 196);
  border-right-color: rgb(221, 208, 196);
  border-top-color: rgb(221, 208, 196);
  color: rgb(221, 208, 196);
}

body .darkmode svg {
  color: rgb(221, 208, 196);
  stroke: rgb(221, 208, 196);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
}

body .breadcrumb-element p {
  color: rgba(255, 255, 255, 0.6);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  color: rgba(255, 255, 255, 0.8);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(20, 21, 21);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
}

body kbd {
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
