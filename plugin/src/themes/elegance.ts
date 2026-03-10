import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "elegance",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["monaco"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --animation: 200ms;
  --arrow1: rgba(99, 99, 99, 0.687);
  --background-accent: rgb(234, 117, 0);
  --background-modifier-border: rgb(102, 102, 102);
  --background-modifier-cover: rgba(0, 0, 0, 0.68);
  --background-modifier-error: rgba(255, 0, 0, 0.5);
  --background-modifier-error-hover: rgba(171, 0, 0, 0.306);
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-success: #50fa7b;
  --background-primary: rgb(53, 56, 67);
  --background-primary-alt: rgb(73, 76, 95);
  --background-secondary: rgb(39, 38, 47);
  --background-secondary-alt: rgb(40, 42, 54);
  --bases-cards-background: rgb(53, 56, 67);
  --bases-cards-cover-background: rgb(73, 76, 95);
  --bases-cards-shadow: 0 0 0 1px rgb(102, 102, 102);
  --bases-embed-border-color: rgb(102, 102, 102);
  --bases-group-heading-property-color: rgb(255, 255, 255);
  --bases-group-heading-property-size: 13.5px;
  --bases-table-border-color: rgb(102, 102, 102);
  --bases-table-cell-background-active: rgb(53, 56, 67);
  --bases-table-cell-background-disabled: rgb(73, 76, 95);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 184, 108);
  --bases-table-group-background: rgb(73, 76, 95);
  --bases-table-header-background: rgb(53, 56, 67);
  --bases-table-header-color: rgb(255, 255, 255);
  --bases-table-summary-background: rgb(53, 56, 67);
  --bg-blue: rgba(29, 174, 226, 0.4);
  --bg-blue2: rgb(29, 173, 226);
  --bg-green: rgba(32, 225, 180, 0.4);
  --bg-green2: rgb(32, 225, 180);
  --bg-magenta: rgba(231, 60, 126, 0.45);
  --bg-magenta2: rgb(249, 75, 142);
  --bg-orange: rgba(255, 132, 0, 0.43);
  --bg-orange2: rgb(255, 145, 18);
  --bg-purple: rgba(165, 26, 234, 0.4);
  --bg-purple2: rgb(180, 37, 252);
  --blockquote-border-color: rgb(255, 184, 108);
  --blur-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent));
  --callout-color: rgba(103, 161, 149, 0.459);
  --callout-gap: 1em;
  --callout-margin: 0px 5px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --canvas-background: rgb(53, 56, 67);
  --canvas-card-label-color: rgb(255, 62, 151);
  --caret-color: white;
  --checkbox-border-color: rgb(255, 62, 151);
  --checkbox-border-color-hover: rgb(255, 255, 255);
  --checkbox-color: rgb(255, 184, 108);
  --checkbox-color-hover: rgb(255, 85, 85);
  --checkbox-marker-color: rgb(53, 56, 67);
  --checklist-done-color: rgb(255, 255, 255);
  --code-background: rgb(73, 76, 95);
  --code-border-color: rgb(102, 102, 102);
  --code-comment: rgb(255, 62, 151);
  --code-normal: white;
  --code-punctuation: rgb(255, 255, 255);
  --col-rule-color: rgb(102, 102, 102);
  --col-rule-width: 1px;
  --collapse-icon-color: rgb(255, 62, 151);
  --collapse-icon-color-collapsed: rgb(248, 173, 93);
  --color-pink-list: rgb(255, 192, 227);
  --color-pink-list2: rgb(255, 137, 202);
  --color-pink-list3: rgb(255, 119, 194);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(102, 102, 102);
  --divider-color-hover: rgb(255, 184, 108);
  --dropdown-background: #ffb86c;
  --dropdown-background-hover: rgb(255, 85, 85);
  --embed-block-shadow-hover: 0 0 0 1px rgb(102, 102, 102), inset 0 0 0 1px rgb(102, 102, 102);
  --embed-border-radius: 10px;
  --embed-border-start: 2px solid rgb(255, 184, 108);
  --external-link: rgb(255, 219, 180);
  --fbold: rgb(255, 251, 200);
  --fcolor-header: white;
  --file-header-background: rgb(53, 56, 67);
  --file-header-background-focused: rgb(53, 56, 67);
  --file-header-font-size: 14px;
  --file-margins: 8px;
  --fitalic: rgb(255, 251, 200);
  --flair-background: #ffb86c;
  --flair-color: white;
  --float-callout-bottom-margin: 0em;
  --float-callout-snw-display: none;
  --float-callout-top-margin: 0em;
  --float-large-width: 600px;
  --float-left-callout-margin: 0 15px 0 0;
  --float-left-callout-margin-inline: 0 12px;
  --float-medium-width: 400px;
  --float-right-callout-margin: 0 0 0 15px;
  --float-right-callout-margin-inline: 12px 0;
  --float-small-width: 300px;
  --float-snw-display: none;
  --fluro-blue-rgb: 0, 255, 255;
  --fluro-pink-rgb: 255, 0, 255;
  --font-size-code: 15px;
  --font-size-h1: 23px;
  --font-size-h2: 22px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 16px;
  --font-size-side-dock: 15px;
  --font-size-side-dock-title: 16px;
  --font-size-status-bar: 13.75px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote-divider-color: rgb(102, 102, 102);
  --footnote-id-color: rgb(255, 255, 255);
  --footnote-id-color-no-occurrences: rgb(255, 62, 151);
  --graph-node: rgb(255, 255, 255);
  --graph-node-focused: rgb(248, 173, 93);
  --graph-node-unresolved: rgb(255, 62, 151);
  --graph-text: white;
  --gray: var(--text-muted);
  --heading-formatting: rgb(255, 62, 151);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(102, 102, 102);
  --icon-color: rgb(255, 255, 255);
  --icon-color-active: rgb(248, 173, 93);
  --icon-color-focused: white;
  --icon-color-hover: rgb(255, 255, 255);
  --input-date-separator: rgb(255, 62, 151);
  --input-placeholder-color: rgb(255, 62, 151);
  --interactive-accent: rgb(255, 184, 108);
  --interactive-accent-hover: rgb(255, 85, 85);
  --interactive-hover: rgb(255, 85, 85);
  --interactive-normal: #ffb86c;
  --interactive-success: rgb(25, 115, 0);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(248, 173, 93);
  --link-color-hover: rgb(139, 233, 253);
  --link-external-color: rgb(248, 173, 93);
  --link-external-color-hover: rgb(139, 233, 253);
  --link-unresolved-color: rgb(248, 173, 93);
  --list-grid-min-width: 250px;
  --list-grid-wide-min-width: 350px;
  --list-indent: 1.9em;
  --list-marker-color: rgb(255, 62, 151);
  --list-marker-color-collapsed: rgb(248, 173, 93);
  --list-marker-color-hover: rgb(255, 255, 255);
  --list-min-width: 200px;
  --mcc-img-snw-display: none;
  --mcl-card-bg-color: rgb(39, 38, 47);
  --mcl-card-border-color: rgb(102, 102, 102);
  --mcl-card-border-width: 1px;
  --mcl-card-gap: 0.2em;
  --mcl-card-header-border-width: 1px;
  --menu-background: rgb(39, 38, 47);
  --metadata-border-color: rgb(102, 102, 102);
  --metadata-divider-color: rgb(102, 102, 102);
  --metadata-input-text-color: white;
  --metadata-label-text-color: rgb(255, 255, 255);
  --metadata-label-text-color-hover: rgb(255, 255, 255);
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: rgb(53, 56, 67);
  --nav-collapse-icon-color: rgb(255, 62, 151);
  --nav-collapse-icon-color-collapsed: rgb(255, 62, 151);
  --nav-heading-color: white;
  --nav-heading-color-collapsed: rgb(255, 62, 151);
  --nav-heading-color-collapsed-hover: rgb(255, 255, 255);
  --nav-heading-color-hover: white;
  --nav-item-color: rgb(255, 255, 255);
  --nav-item-color-active: white;
  --nav-item-color-highlighted: rgb(248, 173, 93);
  --nav-item-color-hover: white;
  --nav-item-color-selected: white;
  --nav-item-size: 14px;
  --nav-tag-color: rgb(255, 62, 151);
  --nav-tag-color-active: rgb(255, 255, 255);
  --nav-tag-color-hover: rgb(255, 255, 255);
  --pdf-background: rgb(53, 56, 67);
  --pdf-page-background: rgb(53, 56, 67);
  --pdf-shadow: 0 0 0 1px rgb(102, 102, 102);
  --pdf-sidebar-background: rgb(53, 56, 67);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(102, 102, 102);
  --pill-border-color: rgb(102, 102, 102);
  --pill-color: rgb(255, 255, 255);
  --pill-color-hover: white;
  --pill-color-remove: rgb(255, 62, 151);
  --pill-color-remove-hover: rgb(248, 173, 93);
  --pre-code: rgba(255, 255, 255, 0.064);
  --prompt-background: rgb(53, 56, 67);
  --quote-bg: rgba(77, 74, 75, 0.7);
  --raised-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent));
  --ribbon-background: rgb(39, 38, 47);
  --ribbon-background-collapsed: rgb(53, 56, 67);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.5);
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.22);
  --search-clear-button-color: rgb(255, 255, 255);
  --search-icon-color: rgb(255, 255, 255);
  --search-result-background: rgb(53, 56, 67);
  --secondary: var(--text-accent);
  --setting-group-heading-color: white;
  --setting-items-background: rgb(73, 76, 95);
  --setting-items-border-color: rgb(102, 102, 102);
  --signature: "֎";
  --slider-track-background: rgb(102, 102, 102);
  --status-bar-background: rgb(39, 38, 47);
  --status-bar-border-color: rgb(102, 102, 102);
  --status-bar-font-size: 13.5px;
  --status-bar-text-color: rgb(255, 255, 255);
  --suggestion-background: rgb(53, 56, 67);
  --tab-background-active: rgb(53, 56, 67);
  --tab-container-background: rgb(39, 38, 47);
  --tab-font-size: 14px;
  --tab-outline-color: rgb(102, 102, 102);
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: rgb(39, 38, 47);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(39, 38, 47), transparent);
  --tab-text-color: rgb(255, 62, 151);
  --tab-text-color-active: rgb(255, 255, 255);
  --tab-text-color-focused: rgb(255, 255, 255);
  --tab-text-color-focused-active: rgb(255, 255, 255);
  --tab-text-color-focused-active-current: white;
  --tab-text-color-focused-highlighted: rgb(248, 173, 93);
  --tab-text-nofocus: rgba(255, 255, 255, 0.7);
  --table-add-button-border-color: rgb(102, 102, 102);
  --table-border-color: rgb(102, 102, 102);
  --table-border-radius: 5px;
  --table-drag-handle-background-active: rgb(255, 184, 108);
  --table-drag-handle-color: rgb(255, 62, 151);
  --table-drag-handle-color-active: rgb(0, 0, 0);
  --table-header-border-color: rgb(102, 102, 102);
  --table-header-color: white;
  --table-selection-border-color: rgb(255, 184, 108);
  --tag-color: rgb(248, 173, 93);
  --tag-color-hover: rgb(248, 173, 93);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(248, 173, 93);
  --text-accent-hover: rgb(139, 233, 253);
  --text-antinormal: black;
  --text-error: rgba(214, 0, 46, 0.925);
  --text-error-hover: rgba(255, 0, 0, 0.466);
  --text-faint: rgb(255, 62, 151);
  --text-highlight-bg: rgba(255, 255, 0, 0.699);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-highlight-rgb: 255, 212, 0;
  --text-muted: rgb(255, 255, 255);
  --text-muted2: rgb(255, 255, 255);
  --text-normal: white;
  --text-on-accent: rgb(0, 0, 0);
  --text-selection: rgb(78, 91, 154);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(39, 38, 47);
  --titlebar-background-focused: rgb(40, 42, 54);
  --titlebar-border-color: rgb(102, 102, 102);
  --titlebar-text-color: rgb(255, 255, 255);
  --titlebar-text-color-focused: white;
  --vault-profile-color: white;
  --vault-profile-color-hover: white;
  --vault-profile-font-size: 14px;
  --zotero-black-dark-rgb: 255, 255, 255;
  --zotero-black-light-rgb: 0, 0, 0;
  --zotero-blue-rgb: 46, 168, 229;
  --zotero-gray-rgb: 170, 170, 170;
  --zotero-green-rgb: 95, 178, 54;
  --zotero-magenta-rgb: 229, 110, 238;
  --zotero-orange-rgb: 241, 152, 55;
  --zotero-purple-rgb: 162, 138, 229;
  --zotero-red-rgb: 255, 102, 102;
  --zotero-yellow-rgb: 255, 212, 0;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(39, 38, 47);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(53, 56, 67);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(39, 38, 47);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(102, 102, 102);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(39, 38, 47);
  border-left-color: rgb(102, 102, 102);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(53, 56, 67);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 251, 200);
  font-weight: 650;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration: rgb(255, 251, 200);
  text-decoration-color: rgb(255, 251, 200);
}

body .page article p > em, em {
  color: rgb(255, 251, 200);
  font-weight: 450;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration: rgb(255, 251, 200);
  text-decoration-color: rgb(255, 251, 200);
}

body .page article p > i, i {
  color: rgb(255, 251, 200);
  font-weight: 450;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration: rgb(255, 251, 200);
  text-decoration-color: rgb(255, 251, 200);
}

body .page article p > strong, strong {
  color: rgb(255, 251, 200);
  font-weight: 650;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration: rgb(255, 251, 200);
  text-decoration-color: rgb(255, 251, 200);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  font-weight: 450;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  font-weight: 450;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 219, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(255, 219, 180) none 0px;
  text-decoration: rgb(255, 219, 180);
  text-decoration-color: rgb(255, 219, 180);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(248, 173, 93);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 173, 93) none 0px;
  text-decoration: rgb(248, 173, 93);
  text-decoration-color: rgb(248, 173, 93);
}

body a.internal.broken {
  color: rgb(248, 173, 93);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 173, 93) none 0px;
  text-decoration: rgb(248, 173, 93);
  text-decoration-color: rgb(248, 173, 93);
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
  background-color: rgb(53, 56, 67);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(53, 56, 67);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(248, 173, 93);
  text-decoration: rgb(248, 173, 93);
}

body blockquote {
  background-color: rgba(77, 74, 75, 0.7);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 213.828px;
  margin-right: 213.844px;
  margin-top: 20px;
  width: 241.641px;
}

body td {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  font-weight: 450;
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-width: 0px;
  border-left-color: rgb(102, 102, 102);
  border-left-width: 0px;
  border-right-color: rgb(102, 102, 102);
  border-right-width: 0px;
  border-top-color: rgb(102, 102, 102);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}`,
    code: `body code {
  background-color: rgba(255, 255, 255, 0.063);
  border-bottom-color: rgb(255, 62, 151);
  border-left-color: rgb(255, 62, 151);
  border-right-color: rgb(255, 62, 151);
  border-top-color: rgb(255, 62, 151);
  color: rgb(255, 62, 151);
  font-family: monaco;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(255, 255, 255, 0.063);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(255, 255, 255, 0.063);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(255, 62, 151);
}

body pre > code, pre:has(> code) {
  background-color: rgba(255, 255, 255, 0.063);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgba(255, 255, 255, 0.063);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
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
  background-color: rgb(39, 38, 47);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  background-color: rgb(39, 38, 47);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  background-color: rgb(39, 38, 47);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 2px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(255, 255, 255);
  text-decoration: line-through 3px rgba(255, 255, 255, 0.7);
  text-decoration-color: rgba(255, 255, 255, 0.7);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  margin-left: -20px;
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
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-left: 15px;
  padding-right: 15px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.3);
}

body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.3);
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.3);
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.3);
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.3);
}

body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.3);
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.3);
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.3);
}

body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.3);
}

body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.3);
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.3);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(53, 56, 67);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 173, 93);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(248, 173, 93);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(248, 173, 93);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(248, 173, 93);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(39, 38, 47);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-color: rgb(248, 173, 93);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(248, 173, 93);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(248, 173, 93);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(248, 173, 93);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

body a.internal.tag-link::before {
  color: rgb(248, 173, 93);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

body hr {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
}`,
    scrollbars: `body .callout {
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

body ::-webkit-scrollbar-corner {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

body ::-webkit-scrollbar-track {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

body body {
  scrollbar-color: rgba(255, 255, 255, 0.22) rgba(255, 255, 255, 0.05);
  scrollbar-width: thin;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 650;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 650;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 650;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(255, 255, 255, 0.714);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.714);
  border-right-color: rgba(255, 255, 255, 0.714);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.714);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: rgb(255, 62, 151);
}

body footer ul li a {
  color: rgb(255, 62, 151);
  text-decoration: rgb(255, 62, 151);
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
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .breadcrumb-element p {
  color: rgb(255, 62, 151);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(40, 42, 54);
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
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body kbd {
  background-color: rgb(73, 76, 95);
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
  font-size: 12px;
  vertical-align: top;
}`,
  },
  light: {
    base: `:root:root {
  --animation: 200ms;
  --arrow1: rgba(211, 211, 211, 0.852);
  --background-accent: rgb(255, 128, 0);
  --background-modifier-border: rgb(67, 67, 67);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(0, 0, 0, 0.307);
  --background-modifier-error: rgba(255, 0, 0, 0.45);
  --background-modifier-error-hover: rgba(255, 0, 0, 0.616);
  --background-modifier-error-rgb: rgb(255, 0, 0);
  --background-modifier-form-field: rgba(255, 255, 255, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(255, 255, 255, 0.2);
  --background-modifier-success: rgb(80, 250, 123);
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(230, 229, 224);
  --background-secondary: rgb(247 245 244);
  --background-secondary-alt: rgb(242, 242, 242);
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-cover-background: rgb(230, 229, 224);
  --bases-cards-shadow: 0 0 0 1px rgb(67, 67, 67);
  --bases-embed-border-color: rgb(67, 67, 67);
  --bases-group-heading-property-color: rgb(0, 0, 0);
  --bases-group-heading-property-size: 13.5px;
  --bases-table-border-color: rgb(67, 67, 67);
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-disabled: rgb(230, 229, 224);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 184, 108);
  --bases-table-group-background: rgb(230, 229, 224);
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-color: rgb(0, 0, 0);
  --bases-table-summary-background: rgb(255, 255, 255);
  --bg-blue: rgba(9, 168, 225, 0.45);
  --bg-blue2: rgba(1, 149, 203, 0.847);
  --bg-green: rgba(1, 224, 172, 0.5);
  --bg-green2: rgba(0, 185, 142, 0.905);
  --bg-magenta: rgba(220, 10, 90, 0.45);
  --bg-magenta2: rgba(220, 10, 90, 0.85);
  --bg-orange: rgba(255, 132, 0, 0.5);
  --bg-orange2: rgba(255, 132, 0, 0.85);
  --bg-purple: rgba(150, 8, 220, 0.4);
  --bg-purple2: rgba(150, 8, 220, 0.8);
  --blockquote-border-color: rgb(255, 184, 108);
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --callout-color: rgba(103, 161, 149, 0.459);
  --callout-gap: 1em;
  --callout-margin: 0px 5px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: rgb(227, 0, 106);
  --caret-color: rgb(6, 6, 6);
  --checkbox-border-color: rgb(227, 0, 106);
  --checkbox-border-color-hover: rgb(0, 0, 0);
  --checkbox-color: rgb(255, 184, 108);
  --checkbox-color-hover: rgb(255, 85, 85);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checklist-done-color: rgb(0, 0, 0);
  --code-background: rgb(230, 229, 224);
  --code-border-color: rgb(67, 67, 67);
  --code-comment: rgb(227, 0, 106);
  --code-normal: rgb(6, 6, 6);
  --code-punctuation: rgb(0, 0, 0);
  --col-rule-color: rgb(67, 67, 67);
  --col-rule-width: 1px;
  --collapse-icon-color: rgb(227, 0, 106);
  --collapse-icon-color-collapsed: rgb(196 98 0);
  --color-pink-list: rgb(255, 192, 227);
  --color-pink-list2: rgb(255, 137, 202);
  --color-pink-list3: rgb(255, 119, 194);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(67, 67, 67);
  --divider-color-hover: rgb(255, 184, 108);
  --dropdown-background: rgb(240, 128, 0);
  --dropdown-background-hover: rgb(255, 85, 85);
  --embed-block-shadow-hover: 0 0 0 1px rgb(67, 67, 67), inset 0 0 0 1px rgb(67, 67, 67);
  --embed-border-radius: 10px;
  --embed-border-start: 2px solid rgb(255, 184, 108);
  --external-link: rgb(96, 123, 4);
  --fbold: rgb(55, 0, 0);
  --fcolor-header: rgb(0, 0, 0);
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --file-header-font-size: 14px;
  --file-margins: 4px;
  --fitalic: rgb(55, 0, 0);
  --flair-background: rgb(240, 128, 0);
  --flair-color: rgb(6, 6, 6);
  --float-callout-bottom-margin: 0em;
  --float-callout-snw-display: none;
  --float-callout-top-margin: 0em;
  --float-large-width: 600px;
  --float-left-callout-margin: 0 15px 0 0;
  --float-left-callout-margin-inline: 0 12px;
  --float-medium-width: 400px;
  --float-right-callout-margin: 0 0 0 15px;
  --float-right-callout-margin-inline: 12px 0;
  --float-small-width: 300px;
  --float-snw-display: none;
  --fluro-blue-rgb: 0, 255, 255;
  --fluro-pink-rgb: 255, 0, 255;
  --font-size-code: 15px;
  --font-size-h1: 23px;
  --font-size-h2: 22px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 16px;
  --font-size-side-dock: 15px;
  --font-size-side-dock-title: 16px;
  --font-size-status-bar: 13.75px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote-divider-color: rgb(67, 67, 67);
  --footnote-id-color: rgb(0, 0, 0);
  --footnote-id-color-no-occurrences: rgb(227, 0, 106);
  --graph-node: rgb(0, 0, 0);
  --graph-node-focused: rgb(196 98 0);
  --graph-node-unresolved: rgb(227, 0, 106);
  --graph-text: rgb(6, 6, 6);
  --gray: var(--text-muted);
  --heading-formatting: rgb(227, 0, 106);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(67, 67, 67);
  --icon-color: rgb(0, 0, 0);
  --icon-color-active: rgb(196 98 0);
  --icon-color-focused: rgb(6, 6, 6);
  --icon-color-hover: rgb(0, 0, 0);
  --input-date-separator: rgb(227, 0, 106);
  --input-placeholder-color: rgb(227, 0, 106);
  --interactive-accent: rgb(255, 184, 108);
  --interactive-accent-hover: rgb(255, 85, 85);
  --interactive-hover: rgb(255, 85, 85);
  --interactive-normal: rgb(240, 128, 0);
  --interactive-success: rgb(25, 115, 0);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(196 98 0);
  --link-color-hover: rgb(0, 184, 225);
  --link-external-color: rgb(196 98 0);
  --link-external-color-hover: rgb(0, 184, 225);
  --link-unresolved-color: rgb(196 98 0);
  --list-grid-min-width: 250px;
  --list-grid-wide-min-width: 350px;
  --list-indent: 1.9em;
  --list-marker-color: rgb(227, 0, 106);
  --list-marker-color-collapsed: rgb(196 98 0);
  --list-marker-color-hover: rgb(0, 0, 0);
  --list-min-width: 200px;
  --mcc-img-snw-display: none;
  --mcl-card-bg-color: rgb(247 245 244);
  --mcl-card-border-color: rgb(67, 67, 67);
  --mcl-card-border-width: 1px;
  --mcl-card-gap: 0.2em;
  --mcl-card-header-border-width: 1px;
  --menu-background: rgb(247 245 244);
  --metadata-border-color: rgb(67, 67, 67);
  --metadata-divider-color: rgb(67, 67, 67);
  --metadata-input-text-color: rgb(6, 6, 6);
  --metadata-label-text-color: rgb(0, 0, 0);
  --metadata-label-text-color-hover: rgb(0, 0, 0);
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: rgb(255, 255, 255);
  --nav-collapse-icon-color: rgb(227, 0, 106);
  --nav-collapse-icon-color-collapsed: rgb(227, 0, 106);
  --nav-heading-color: rgb(6, 6, 6);
  --nav-heading-color-collapsed: rgb(227, 0, 106);
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0);
  --nav-heading-color-hover: rgb(6, 6, 6);
  --nav-item-color: rgb(0, 0, 0);
  --nav-item-color-active: rgb(6, 6, 6);
  --nav-item-color-highlighted: rgb(196 98 0);
  --nav-item-color-hover: rgb(6, 6, 6);
  --nav-item-color-selected: rgb(6, 6, 6);
  --nav-item-size: 14px;
  --nav-tag-color: rgb(227, 0, 106);
  --nav-tag-color-active: rgb(0, 0, 0);
  --nav-tag-color-hover: rgb(0, 0, 0);
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-border-color: rgb(67, 67, 67);
  --pill-color: rgb(0, 0, 0);
  --pill-color-hover: rgb(6, 6, 6);
  --pill-color-remove: rgb(227, 0, 106);
  --pill-color-remove-hover: rgb(196 98 0);
  --pre-code: rgba(0, 0, 0, 0.044);
  --prompt-background: rgb(255, 255, 255);
  --quote-bg: rgba(164, 164, 160, 0.15);
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: rgb(247 245 244);
  --ribbon-background-collapsed: rgb(255, 255, 255);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.422);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.287);
  --search-clear-button-color: rgb(0, 0, 0);
  --search-icon-color: rgb(0, 0, 0);
  --search-result-background: rgb(255, 255, 255);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(6, 6, 6);
  --setting-items-background: rgb(230, 229, 224);
  --setting-items-border-color: rgb(67, 67, 67);
  --signature: "֎";
  --slider-track-background: rgb(67, 67, 67);
  --status-bar-background: rgb(247 245 244);
  --status-bar-border-color: rgb(67, 67, 67);
  --status-bar-font-size: 13.5px;
  --status-bar-text-color: rgb(0, 0, 0);
  --suggestion-background: rgb(255, 255, 255);
  --tab-background-active: rgb(255, 255, 255);
  --tab-container-background: rgb(247 245 244);
  --tab-font-size: 14px;
  --tab-outline-color: rgb(67, 67, 67);
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: rgb(247 245 244);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(247 245 244), transparent);
  --tab-text-color: rgb(227, 0, 106);
  --tab-text-color-active: rgb(0, 0, 0);
  --tab-text-color-focused: rgb(0, 0, 0);
  --tab-text-color-focused-active: rgb(0, 0, 0);
  --tab-text-color-focused-active-current: rgb(6, 6, 6);
  --tab-text-color-focused-highlighted: rgb(196 98 0);
  --tab-text-nofocus: rgba(0, 0, 0, 0.6);
  --table-add-button-border-color: rgb(67, 67, 67);
  --table-border-color: rgb(67, 67, 67);
  --table-border-radius: 5px;
  --table-drag-handle-background-active: rgb(255, 184, 108);
  --table-drag-handle-color: rgb(227, 0, 106);
  --table-drag-handle-color-active: rgb(255, 255, 255);
  --table-header-border-color: rgb(67, 67, 67);
  --table-header-color: rgb(6, 6, 6);
  --table-selection-border-color: rgb(255, 184, 108);
  --tag-color: rgb(196 98 0);
  --tag-color-hover: rgb(196 98 0);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(196 98 0);
  --text-accent-hover: rgb(0, 184, 225);
  --text-antinormal: white;
  --text-error: rgb(255, 0, 55);
  --text-error-hover: rgb(232, 0, 0);
  --text-faint: rgb(227, 0, 106);
  --text-highlight-bg: rgba(117, 0, 0, 0.293);
  --text-highlight-bg-active: rgba(255, 255, 50, 0.4);
  --text-highlight-rgb: 255, 212, 0;
  --text-muted: rgb(0, 0, 0);
  --text-muted2: rgb(123, 123, 123);
  --text-normal: rgb(6, 6, 6);
  --text-on-accent: rgb(255, 255, 255);
  --text-selection: rgba(44, 77, 188, 0.2);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(247 245 244);
  --titlebar-background-focused: rgb(242, 242, 242);
  --titlebar-border-color: rgb(67, 67, 67);
  --titlebar-text-color: rgb(0, 0, 0);
  --titlebar-text-color-focused: rgb(6, 6, 6);
  --vault-profile-color: rgb(6, 6, 6);
  --vault-profile-color-hover: rgb(6, 6, 6);
  --vault-profile-font-size: 14px;
  --zotero-black-dark-rgb: 255, 255, 255;
  --zotero-black-light-rgb: 0, 0, 0;
  --zotero-blue-rgb: 46, 168, 229;
  --zotero-gray-rgb: 170, 170, 170;
  --zotero-green-rgb: 95, 178, 54;
  --zotero-magenta-rgb: 229, 110, 238;
  --zotero-orange-rgb: 241, 152, 55;
  --zotero-purple-rgb: 162, 138, 229;
  --zotero-red-rgb: 255, 102, 102;
  --zotero-yellow-rgb: 255, 212, 0;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 245, 244);
  color: rgb(6, 6, 6);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(6, 6, 6);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 245, 244);
  color: rgb(6, 6, 6);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 67, 67);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 245, 244);
  border-left-color: rgb(67, 67, 67);
  color: rgb(6, 6, 6);
}

body div#quartz-root {
  color: rgb(6, 6, 6);
}`,
    typography: `body .page article p > b, b {
  color: rgb(55, 0, 0);
  font-weight: 650;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration: rgb(55, 0, 0);
  text-decoration-color: rgb(55, 0, 0);
}

body .page article p > em, em {
  color: rgb(55, 0, 0);
  font-weight: 450;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration: rgb(55, 0, 0);
  text-decoration-color: rgb(55, 0, 0);
}

body .page article p > i, i {
  color: rgb(55, 0, 0);
  font-weight: 450;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration: rgb(55, 0, 0);
  text-decoration-color: rgb(55, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(55, 0, 0);
  font-weight: 650;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration: rgb(55, 0, 0);
  text-decoration-color: rgb(55, 0, 0);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(6, 6, 6);
  font-weight: 450;
  outline: rgb(6, 6, 6) none 0px;
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body del {
  color: rgb(6, 6, 6);
  font-weight: 450;
  outline: rgb(6, 6, 6) none 0px;
  text-decoration: line-through rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body p {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `body a.external, footer a {
  color: rgb(96, 123, 4);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(96, 123, 4) none 0px;
  text-decoration: rgb(96, 123, 4);
  text-decoration-color: rgb(96, 123, 4);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(196, 98, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(196, 98, 0) none 0px;
  text-decoration: rgb(196, 98, 0);
  text-decoration-color: rgb(196, 98, 0);
}

body a.internal.broken {
  color: rgb(196, 98, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(196, 98, 0) none 0px;
  text-decoration: rgb(196, 98, 0);
  text-decoration-color: rgb(196, 98, 0);
}`,
    lists: `body dd {
  color: rgb(6, 6, 6);
}

body dt {
  color: rgb(6, 6, 6);
}

body ol > li {
  color: rgb(6, 6, 6);
}

body ol.overflow {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body ul > li {
  color: rgb(6, 6, 6);
}

body ul.overflow {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(196, 98, 0);
  text-decoration: rgb(196, 98, 0);
}

body blockquote {
  background-color: rgba(164, 164, 160, 0.15);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body table {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 213.828px;
  margin-right: 213.844px;
  margin-top: 20px;
  width: 241.641px;
}

body td {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(6, 6, 6);
  border-bottom-width: 0px;
  border-left-color: rgb(6, 6, 6);
  border-left-width: 0px;
  border-right-color: rgb(6, 6, 6);
  border-right-width: 0px;
  border-top-color: rgb(6, 6, 6);
  border-top-width: 0px;
  color: rgb(6, 6, 6);
  font-weight: 450;
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(67, 67, 67);
  border-bottom-width: 0px;
  border-left-color: rgb(67, 67, 67);
  border-left-width: 0px;
  border-right-color: rgb(67, 67, 67);
  border-right-width: 0px;
  border-top-color: rgb(67, 67, 67);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}`,
    code: `body code {
  background-color: rgba(0, 0, 0, 0.043);
  border-bottom-color: rgb(227, 0, 106);
  border-left-color: rgb(227, 0, 106);
  border-right-color: rgb(227, 0, 106);
  border-top-color: rgb(227, 0, 106);
  color: rgb(227, 0, 106);
  font-family: monaco;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.043);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.043);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(227, 0, 106);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.043);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.043);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body figcaption {
  color: rgb(6, 6, 6);
}

body figure {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body img {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body video {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    embeds: `body .file-embed {
  background-color: rgb(247, 245, 244);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .footnotes {
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

body .transclude {
  background-color: rgb(247, 245, 244);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  background-color: rgb(247, 245, 244);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 2px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 0, 0);
  text-decoration: line-through 3px rgba(255, 255, 255, 0.7);
  text-decoration-color: rgba(255, 255, 255, 0.7);
}

body input[type=checkbox] {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  margin-left: -20px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='*'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='-'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='/'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='>'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='?'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='I'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='S'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='b'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='c'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='d'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='f'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='i'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='k'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='l'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='p'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='u'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body li.task-list-item[data-task='w'] {
  color: rgb(6, 6, 6);
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-left: 15px;
  padding-right: 15px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.3);
}

body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.3);
}

body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.3);
}

body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.3);
}

body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.3);
}

body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.3);
}

body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.3);
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.3);
}

body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.3);
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.3);
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.3);
}`,
    search: `body .search > .search-button {
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(6, 6, 6);
}

body .search > .search-container > .search-space > * {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(6, 6, 6) none 0px;
  text-decoration: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(6, 6, 6);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(196, 98, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(196, 98, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(196, 98, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(196, 98, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(6, 6, 6);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgb(6, 6, 6);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(247, 245, 244);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-color: rgb(196, 98, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(196, 98, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(196, 98, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(196, 98, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(6, 6, 6);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(6, 6, 6);
}

body a.internal.tag-link::before {
  color: rgb(196, 98, 0);
}

body h1 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

body h2 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

body h4 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

body h5 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

body h6 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

body hr {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
}`,
    scrollbars: `body .callout {
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body body {
  scrollbar-color: rgba(0, 0, 0, 0.286) rgba(0, 0, 0, 0.05);
  scrollbar-width: thin;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 650;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 650;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}`,
    toc: `body li.depth-0 {
  font-weight: 650;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    footer: `body footer {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgba(255, 255, 255, 0.714);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.714);
  border-right-color: rgba(255, 255, 255, 0.714);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.714);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: rgb(227, 0, 106);
}

body footer ul li a {
  color: rgb(227, 0, 106);
  text-decoration: rgb(227, 0, 106);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(6, 6, 6);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .darkmode svg {
  color: rgb(0, 0, 0);
  stroke: rgb(0, 0, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .breadcrumb-element p {
  color: rgb(227, 0, 106);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

body .metadata {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(242, 242, 242);
}

body .page-header h2.page-title {
  color: rgb(6, 6, 6);
}

body abbr {
  color: rgb(6, 6, 6);
  text-decoration: underline dotted rgb(6, 6, 6);
}

body details {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body input[type=text] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body kbd {
  background-color: rgb(230, 229, 224);
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

body progress {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

body sub {
  color: rgb(6, 6, 6);
}

body summary {
  color: rgb(6, 6, 6);
}

body sup {
  color: rgb(6, 6, 6);
  font-size: 12px;
  vertical-align: top;
}`,
  },
};
