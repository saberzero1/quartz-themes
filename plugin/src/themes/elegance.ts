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
  --animation: 200ms !important;
  --arrow1: rgba(99, 99, 99, 0.687) !important;
  --background-accent: rgb(234, 117, 0) !important;
  --background-modifier-border: rgb(102, 102, 102) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.68) !important;
  --background-modifier-error: rgba(255, 0, 0, 0.5) !important;
  --background-modifier-error-hover: rgba(171, 0, 0, 0.306) !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-success: #50fa7b !important;
  --background-primary: rgb(53, 56, 67) !important;
  --background-primary-alt: rgb(73, 76, 95) !important;
  --background-secondary: rgb(39, 38, 47) !important;
  --background-secondary-alt: rgb(40, 42, 54) !important;
  --bases-cards-background: rgb(53, 56, 67) !important;
  --bases-cards-cover-background: rgb(73, 76, 95) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(102, 102, 102) !important;
  --bases-embed-border-color: rgb(102, 102, 102) !important;
  --bases-group-heading-property-color: rgb(255, 255, 255) !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-table-border-color: rgb(102, 102, 102) !important;
  --bases-table-cell-background-active: rgb(53, 56, 67) !important;
  --bases-table-cell-background-disabled: rgb(73, 76, 95) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 184, 108) !important;
  --bases-table-group-background: rgb(73, 76, 95) !important;
  --bases-table-header-background: rgb(53, 56, 67) !important;
  --bases-table-header-color: rgb(255, 255, 255) !important;
  --bases-table-summary-background: rgb(53, 56, 67) !important;
  --bg-blue: rgba(29, 174, 226, 0.4) !important;
  --bg-blue2: rgb(29, 173, 226) !important;
  --bg-green: rgba(32, 225, 180, 0.4) !important;
  --bg-green2: rgb(32, 225, 180) !important;
  --bg-magenta: rgba(231, 60, 126, 0.45) !important;
  --bg-magenta2: rgb(249, 75, 142) !important;
  --bg-orange: rgba(255, 132, 0, 0.43) !important;
  --bg-orange2: rgb(255, 145, 18) !important;
  --bg-purple: rgba(165, 26, 234, 0.4) !important;
  --bg-purple2: rgb(180, 37, 252) !important;
  --blockquote-border-color: rgb(255, 184, 108) !important;
  --blur-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent)) !important;
  --callout-color: rgba(103, 161, 149, 0.459);
  --callout-gap: 1em;
  --callout-margin: 0px 5px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --canvas-background: rgb(53, 56, 67) !important;
  --canvas-card-label-color: rgb(255, 62, 151) !important;
  --caret-color: white !important;
  --checkbox-border-color: rgb(255, 62, 151) !important;
  --checkbox-border-color-hover: rgb(255, 255, 255) !important;
  --checkbox-color: rgb(255, 184, 108) !important;
  --checkbox-color-hover: rgb(255, 85, 85) !important;
  --checkbox-marker-color: rgb(53, 56, 67) !important;
  --checklist-done-color: rgb(255, 255, 255) !important;
  --code-background: rgb(73, 76, 95) !important;
  --code-border-color: rgb(102, 102, 102) !important;
  --code-comment: rgb(255, 62, 151) !important;
  --code-normal: white !important;
  --code-punctuation: rgb(255, 255, 255) !important;
  --col-rule-color: rgb(102, 102, 102) !important;
  --col-rule-width: 1px !important;
  --collapse-icon-color: rgb(255, 62, 151) !important;
  --collapse-icon-color-collapsed: rgb(248, 173, 93) !important;
  --color-pink-list: rgb(255, 192, 227) !important;
  --color-pink-list2: rgb(255, 137, 202) !important;
  --color-pink-list3: rgb(255, 119, 194) !important;
  --dark: white !important;
  --darkgray: white !important;
  --divider-color: rgb(102, 102, 102) !important;
  --divider-color-hover: rgb(255, 184, 108) !important;
  --dropdown-background: #ffb86c !important;
  --dropdown-background-hover: rgb(255, 85, 85) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(102, 102, 102), inset 0 0 0 1px rgb(102, 102, 102) !important;
  --embed-border-radius: 10px !important;
  --embed-border-start: 2px solid rgb(255, 184, 108) !important;
  --external-link: rgb(255, 219, 180) !important;
  --fbold: rgb(255, 251, 200) !important;
  --fcolor-header: white !important;
  --file-header-background: rgb(53, 56, 67) !important;
  --file-header-background-focused: rgb(53, 56, 67) !important;
  --file-header-font-size: 14px !important;
  --file-margins: 8px !important;
  --fitalic: rgb(255, 251, 200) !important;
  --flair-background: #ffb86c !important;
  --flair-color: white !important;
  --float-callout-bottom-margin: 0em !important;
  --float-callout-snw-display: none !important;
  --float-callout-top-margin: 0em !important;
  --float-large-width: 600px !important;
  --float-left-callout-margin: 0 15px 0 0 !important;
  --float-left-callout-margin-inline: 0 12px !important;
  --float-medium-width: 400px !important;
  --float-right-callout-margin: 0 0 0 15px !important;
  --float-right-callout-margin-inline: 12px 0 !important;
  --float-small-width: 300px !important;
  --float-snw-display: none !important;
  --fluro-blue-rgb: 0, 255, 255 !important;
  --fluro-pink-rgb: 255, 0, 255 !important;
  --font-size-code: 15px !important;
  --font-size-h1: 23px !important;
  --font-size-h2: 22px !important;
  --font-size-h3: 21px !important;
  --font-size-h4: 20px !important;
  --font-size-h5: 19px !important;
  --font-size-h6: 18px !important;
  --font-size-normal: 16px !important;
  --font-size-side-dock: 15px !important;
  --font-size-side-dock-title: 16px !important;
  --font-size-status-bar: 13.75px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote-divider-color: rgb(102, 102, 102) !important;
  --footnote-id-color: rgb(255, 255, 255) !important;
  --footnote-id-color-no-occurrences: rgb(255, 62, 151) !important;
  --graph-node: rgb(255, 255, 255) !important;
  --graph-node-focused: rgb(248, 173, 93) !important;
  --graph-node-unresolved: rgb(255, 62, 151) !important;
  --graph-text: white !important;
  --gray: rgb(255, 255, 255) !important;
  --heading-formatting: rgb(255, 62, 151) !important;
  --highlight: rgba(255, 255, 0, 0.699) !important;
  --hr-color: rgb(102, 102, 102) !important;
  --icon-color: rgb(255, 255, 255) !important;
  --icon-color-active: rgb(248, 173, 93) !important;
  --icon-color-focused: white !important;
  --icon-color-hover: rgb(255, 255, 255) !important;
  --input-date-separator: rgb(255, 62, 151) !important;
  --input-placeholder-color: rgb(255, 62, 151) !important;
  --interactive-accent: rgb(255, 184, 108) !important;
  --interactive-accent-hover: rgb(255, 85, 85) !important;
  --interactive-hover: rgb(255, 85, 85) !important;
  --interactive-normal: #ffb86c !important;
  --interactive-success: rgb(25, 115, 0) !important;
  --light: rgb(53, 56, 67) !important;
  --lightgray: rgb(39, 38, 47) !important;
  --link-color: rgb(248, 173, 93) !important;
  --link-color-hover: rgb(139, 233, 253) !important;
  --link-external-color: rgb(248, 173, 93) !important;
  --link-external-color-hover: rgb(139, 233, 253) !important;
  --link-unresolved-color: rgb(248, 173, 93) !important;
  --list-grid-min-width: 250px !important;
  --list-grid-wide-min-width: 350px !important;
  --list-indent: 1.9em !important;
  --list-marker-color: rgb(255, 62, 151) !important;
  --list-marker-color-collapsed: rgb(248, 173, 93) !important;
  --list-marker-color-hover: rgb(255, 255, 255) !important;
  --list-min-width: 200px !important;
  --mcc-img-snw-display: none !important;
  --mcl-card-bg-color: rgb(39, 38, 47) !important;
  --mcl-card-border-color: rgb(102, 102, 102) !important;
  --mcl-card-border-width: 1px !important;
  --mcl-card-gap: 0.2em !important;
  --mcl-card-header-border-width: 1px !important;
  --menu-background: rgb(39, 38, 47) !important;
  --metadata-border-color: rgb(102, 102, 102) !important;
  --metadata-divider-color: rgb(102, 102, 102) !important;
  --metadata-input-text-color: white !important;
  --metadata-label-text-color: rgb(255, 255, 255) !important;
  --metadata-label-text-color-hover: rgb(255, 255, 255) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: rgb(53, 56, 67) !important;
  --nav-collapse-icon-color: rgb(255, 62, 151) !important;
  --nav-collapse-icon-color-collapsed: rgb(255, 62, 151) !important;
  --nav-heading-color: white !important;
  --nav-heading-color-collapsed: rgb(255, 62, 151) !important;
  --nav-heading-color-collapsed-hover: rgb(255, 255, 255) !important;
  --nav-heading-color-hover: white !important;
  --nav-item-color: rgb(255, 255, 255) !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: rgb(248, 173, 93) !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: white !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: rgb(255, 62, 151) !important;
  --nav-tag-color-active: rgb(255, 255, 255) !important;
  --nav-tag-color-hover: rgb(255, 255, 255) !important;
  --pdf-background: rgb(53, 56, 67) !important;
  --pdf-page-background: rgb(53, 56, 67) !important;
  --pdf-shadow: 0 0 0 1px rgb(102, 102, 102) !important;
  --pdf-sidebar-background: rgb(53, 56, 67) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(102, 102, 102) !important;
  --pill-border-color: rgb(102, 102, 102) !important;
  --pill-color: rgb(255, 255, 255) !important;
  --pill-color-hover: white !important;
  --pill-color-remove: rgb(255, 62, 151) !important;
  --pill-color-remove-hover: rgb(248, 173, 93) !important;
  --pre-code: rgba(255, 255, 255, 0.064) !important;
  --prompt-background: rgb(53, 56, 67) !important;
  --quote-bg: rgba(77, 74, 75, 0.7) !important;
  --raised-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent)) !important;
  --ribbon-background: rgb(39, 38, 47) !important;
  --ribbon-background-collapsed: rgb(53, 56, 67) !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.5) !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.22) !important;
  --search-clear-button-color: rgb(255, 255, 255) !important;
  --search-icon-color: rgb(255, 255, 255) !important;
  --search-result-background: rgb(53, 56, 67) !important;
  --secondary: rgb(248, 173, 93) !important;
  --setting-group-heading-color: white !important;
  --setting-items-background: rgb(73, 76, 95) !important;
  --setting-items-border-color: rgb(102, 102, 102) !important;
  --signature: "֎" !important;
  --slider-track-background: rgb(102, 102, 102) !important;
  --status-bar-background: rgb(39, 38, 47) !important;
  --status-bar-border-color: rgb(102, 102, 102) !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-text-color: rgb(255, 255, 255) !important;
  --suggestion-background: rgb(53, 56, 67) !important;
  --tab-background-active: rgb(53, 56, 67) !important;
  --tab-container-background: rgb(39, 38, 47) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: rgb(102, 102, 102) !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: rgb(39, 38, 47) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(39, 38, 47), transparent) !important;
  --tab-text-color: rgb(255, 62, 151) !important;
  --tab-text-color-active: rgb(255, 255, 255) !important;
  --tab-text-color-focused: rgb(255, 255, 255) !important;
  --tab-text-color-focused-active: rgb(255, 255, 255) !important;
  --tab-text-color-focused-active-current: white !important;
  --tab-text-color-focused-highlighted: rgb(248, 173, 93) !important;
  --tab-text-nofocus: rgba(255, 255, 255, 0.7) !important;
  --table-add-button-border-color: rgb(102, 102, 102) !important;
  --table-border-color: rgb(102, 102, 102) !important;
  --table-border-radius: 5px !important;
  --table-drag-handle-background-active: rgb(255, 184, 108) !important;
  --table-drag-handle-color: rgb(255, 62, 151) !important;
  --table-drag-handle-color-active: rgb(0, 0, 0) !important;
  --table-header-border-color: rgb(102, 102, 102) !important;
  --table-header-color: white !important;
  --table-selection-border-color: rgb(255, 184, 108) !important;
  --tag-color: rgb(248, 173, 93) !important;
  --tag-color-hover: rgb(248, 173, 93) !important;
  --tertiary: rgb(139, 233, 253) !important;
  --text-accent: rgb(248, 173, 93) !important;
  --text-accent-hover: rgb(139, 233, 253) !important;
  --text-antinormal: black !important;
  --text-error: rgba(214, 0, 46, 0.925) !important;
  --text-error-hover: rgba(255, 0, 0, 0.466) !important;
  --text-faint: rgb(255, 62, 151) !important;
  --text-highlight-bg: rgba(255, 255, 0, 0.699) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-highlight-rgb: 255, 212, 0 !important;
  --text-muted: rgb(255, 255, 255) !important;
  --text-muted2: rgb(255, 255, 255) !important;
  --text-normal: white !important;
  --text-on-accent: rgb(0, 0, 0) !important;
  --text-selection: rgb(78, 91, 154) !important;
  --textHighlight: rgba(255, 255, 0, 0.699) !important;
  --titlebar-background: rgb(39, 38, 47) !important;
  --titlebar-background-focused: rgb(40, 42, 54) !important;
  --titlebar-border-color: rgb(102, 102, 102) !important;
  --titlebar-text-color: rgb(255, 255, 255) !important;
  --titlebar-text-color-focused: white !important;
  --vault-profile-color: white !important;
  --vault-profile-color-hover: white !important;
  --vault-profile-font-size: 14px !important;
  --zotero-black-dark-rgb: 255, 255, 255 !important;
  --zotero-black-light-rgb: 0, 0, 0 !important;
  --zotero-blue-rgb: 46, 168, 229 !important;
  --zotero-gray-rgb: 170, 170, 170 !important;
  --zotero-green-rgb: 95, 178, 54 !important;
  --zotero-magenta-rgb: 229, 110, 238 !important;
  --zotero-orange-rgb: 241, 152, 55 !important;
  --zotero-purple-rgb: 162, 138, 229 !important;
  --zotero-red-rgb: 255, 102, 102 !important;
  --zotero-yellow-rgb: 255, 212, 0 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(39, 38, 47);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(53, 56, 67);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(0, 0, 0);
  border-color: rgb(102, 102, 102);
  color: rgb(255, 255, 255);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(39, 38, 47);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(248, 173, 93);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(39, 38, 47);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(39, 38, 47);
  border-left-color: rgb(102, 102, 102);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(53, 56, 67);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 251, 200);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration-color: rgb(255, 251, 200);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 251, 200);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration-color: rgb(255, 251, 200);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 251, 200);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration-color: rgb(255, 251, 200);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 251, 200);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration-color: rgb(255, 251, 200);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 62, 151);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 184, 108);
  border-color: rgb(255, 184, 108);
}

html[saved-theme="dark"] body p {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 219, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(255, 219, 180) none 0px;
  text-decoration-color: rgb(255, 219, 180);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(248, 173, 93);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 173, 93) none 0px;
  text-decoration-color: rgb(248, 173, 93);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(248, 173, 93);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 173, 93) none 0px;
  text-decoration-color: rgb(248, 173, 93);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(248, 173, 93);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(77, 74, 75, 0.7);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 213.828px;
  margin-right: 213.844px;
  margin-top: 20px;
  width: 241.641px;
}

html[saved-theme="dark"] body td {
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

html[saved-theme="dark"] body th {
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
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(255, 255, 255, 0.063);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(255, 255, 255, 0.063);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(255, 62, 151);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(39, 38, 47);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-right-style: solid;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  margin-bottom: 15px;
  margin-top: 15px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  margin-left: -20px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(168, 130, 255, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.3);
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

html[saved-theme="dark"] body .callout[data-callout="imagen"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(53, 56, 67);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(39, 38, 47);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(248, 173, 93);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 255, 255);
  font-family: Inter;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(53, 56, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 56, 67);
}

html[saved-theme="dark"] body body {
  scrollbar-color: rgba(255, 255, 255, 0.22) rgba(255, 255, 255, 0.05);
  scrollbar-width: thin;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 650;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 650;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 650;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 62, 151);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(255, 62, 151);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(40, 42, 54);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(73, 76, 95);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
  font-size: 12px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(39, 38, 47);
  border-bottom-left-radius: 27.16px;
  border-bottom-right-radius: 27.16px;
  border-top-left-radius: 27.16px;
  border-top-right-radius: 27.16px;
  color: rgb(139, 233, 253);
}`,
  },
  light: {
    base: `:root:root {
  --animation: 200ms !important;
  --arrow1: rgba(211, 211, 211, 0.852) !important;
  --background-accent: rgb(255, 128, 0) !important;
  --background-modifier-border: rgb(67, 67, 67) !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.307) !important;
  --background-modifier-error: rgba(255, 0, 0, 0.45) !important;
  --background-modifier-error-hover: rgba(255, 0, 0, 0.616) !important;
  --background-modifier-error-rgb: rgb(255, 0, 0) !important;
  --background-modifier-form-field: rgba(255, 255, 255, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(255, 255, 255, 0.2) !important;
  --background-modifier-success: rgb(80, 250, 123) !important;
  --background-primary: rgb(255, 255, 255) !important;
  --background-primary-alt: rgb(230, 229, 224) !important;
  --background-secondary: rgb(247 245 244) !important;
  --background-secondary-alt: rgb(242, 242, 242) !important;
  --bases-cards-background: rgb(255, 255, 255) !important;
  --bases-cards-cover-background: rgb(230, 229, 224) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(67, 67, 67) !important;
  --bases-embed-border-color: rgb(67, 67, 67) !important;
  --bases-group-heading-property-color: rgb(0, 0, 0) !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-table-border-color: rgb(67, 67, 67) !important;
  --bases-table-cell-background-active: rgb(255, 255, 255) !important;
  --bases-table-cell-background-disabled: rgb(230, 229, 224) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 184, 108) !important;
  --bases-table-group-background: rgb(230, 229, 224) !important;
  --bases-table-header-background: rgb(255, 255, 255) !important;
  --bases-table-header-color: rgb(0, 0, 0) !important;
  --bases-table-summary-background: rgb(255, 255, 255) !important;
  --bg-blue: rgba(9, 168, 225, 0.45) !important;
  --bg-blue2: rgba(1, 149, 203, 0.847) !important;
  --bg-green: rgba(1, 224, 172, 0.5) !important;
  --bg-green2: rgba(0, 185, 142, 0.905) !important;
  --bg-magenta: rgba(220, 10, 90, 0.45) !important;
  --bg-magenta2: rgba(220, 10, 90, 0.85) !important;
  --bg-orange: rgba(255, 132, 0, 0.5) !important;
  --bg-orange2: rgba(255, 132, 0, 0.85) !important;
  --bg-purple: rgba(150, 8, 220, 0.4) !important;
  --bg-purple2: rgba(150, 8, 220, 0.8) !important;
  --blockquote-border-color: rgb(255, 184, 108) !important;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --callout-color: rgba(103, 161, 149, 0.459);
  --callout-gap: 1em;
  --callout-margin: 0px 5px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --canvas-background: rgb(255, 255, 255) !important;
  --canvas-card-label-color: rgb(227, 0, 106) !important;
  --caret-color: rgb(6, 6, 6) !important;
  --checkbox-border-color: rgb(227, 0, 106) !important;
  --checkbox-border-color-hover: rgb(0, 0, 0) !important;
  --checkbox-color: rgb(255, 184, 108) !important;
  --checkbox-color-hover: rgb(255, 85, 85) !important;
  --checkbox-marker-color: rgb(255, 255, 255) !important;
  --checklist-done-color: rgb(0, 0, 0) !important;
  --code-background: rgb(230, 229, 224) !important;
  --code-border-color: rgb(67, 67, 67) !important;
  --code-comment: rgb(227, 0, 106) !important;
  --code-normal: rgb(6, 6, 6) !important;
  --code-punctuation: rgb(0, 0, 0) !important;
  --col-rule-color: rgb(67, 67, 67) !important;
  --col-rule-width: 1px !important;
  --collapse-icon-color: rgb(227, 0, 106) !important;
  --collapse-icon-color-collapsed: rgb(196 98 0) !important;
  --color-pink-list: rgb(255, 192, 227) !important;
  --color-pink-list2: rgb(255, 137, 202) !important;
  --color-pink-list3: rgb(255, 119, 194) !important;
  --dark: rgb(6, 6, 6) !important;
  --darkgray: rgb(6, 6, 6) !important;
  --divider-color: rgb(67, 67, 67) !important;
  --divider-color-hover: rgb(255, 184, 108) !important;
  --dropdown-background: rgb(240, 128, 0) !important;
  --dropdown-background-hover: rgb(255, 85, 85) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(67, 67, 67), inset 0 0 0 1px rgb(67, 67, 67) !important;
  --embed-border-radius: 10px !important;
  --embed-border-start: 2px solid rgb(255, 184, 108) !important;
  --external-link: rgb(96, 123, 4) !important;
  --fbold: rgb(55, 0, 0) !important;
  --fcolor-header: rgb(0, 0, 0) !important;
  --file-header-background: rgb(255, 255, 255) !important;
  --file-header-background-focused: rgb(255, 255, 255) !important;
  --file-header-font-size: 14px !important;
  --file-margins: 4px !important;
  --fitalic: rgb(55, 0, 0) !important;
  --flair-background: rgb(240, 128, 0) !important;
  --flair-color: rgb(6, 6, 6) !important;
  --float-callout-bottom-margin: 0em !important;
  --float-callout-snw-display: none !important;
  --float-callout-top-margin: 0em !important;
  --float-large-width: 600px !important;
  --float-left-callout-margin: 0 15px 0 0 !important;
  --float-left-callout-margin-inline: 0 12px !important;
  --float-medium-width: 400px !important;
  --float-right-callout-margin: 0 0 0 15px !important;
  --float-right-callout-margin-inline: 12px 0 !important;
  --float-small-width: 300px !important;
  --float-snw-display: none !important;
  --fluro-blue-rgb: 0, 255, 255 !important;
  --fluro-pink-rgb: 255, 0, 255 !important;
  --font-size-code: 15px !important;
  --font-size-h1: 23px !important;
  --font-size-h2: 22px !important;
  --font-size-h3: 21px !important;
  --font-size-h4: 20px !important;
  --font-size-h5: 19px !important;
  --font-size-h6: 18px !important;
  --font-size-normal: 16px !important;
  --font-size-side-dock: 15px !important;
  --font-size-side-dock-title: 16px !important;
  --font-size-status-bar: 13.75px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote-divider-color: rgb(67, 67, 67) !important;
  --footnote-id-color: rgb(0, 0, 0) !important;
  --footnote-id-color-no-occurrences: rgb(227, 0, 106) !important;
  --graph-node: rgb(0, 0, 0) !important;
  --graph-node-focused: rgb(196 98 0) !important;
  --graph-node-unresolved: rgb(227, 0, 106) !important;
  --graph-text: rgb(6, 6, 6) !important;
  --gray: rgb(0, 0, 0) !important;
  --heading-formatting: rgb(227, 0, 106) !important;
  --highlight: rgba(117, 0, 0, 0.293) !important;
  --hr-color: rgb(67, 67, 67) !important;
  --icon-color: rgb(0, 0, 0) !important;
  --icon-color-active: rgb(196 98 0) !important;
  --icon-color-focused: rgb(6, 6, 6) !important;
  --icon-color-hover: rgb(0, 0, 0) !important;
  --input-date-separator: rgb(227, 0, 106) !important;
  --input-placeholder-color: rgb(227, 0, 106) !important;
  --interactive-accent: rgb(255, 184, 108) !important;
  --interactive-accent-hover: rgb(255, 85, 85) !important;
  --interactive-hover: rgb(255, 85, 85) !important;
  --interactive-normal: rgb(240, 128, 0) !important;
  --interactive-success: rgb(25, 115, 0) !important;
  --light: rgb(255, 255, 255) !important;
  --lightgray: rgb(247 245 244) !important;
  --link-color: rgb(196 98 0) !important;
  --link-color-hover: rgb(0, 184, 225) !important;
  --link-external-color: rgb(196 98 0) !important;
  --link-external-color-hover: rgb(0, 184, 225) !important;
  --link-unresolved-color: rgb(196 98 0) !important;
  --list-grid-min-width: 250px !important;
  --list-grid-wide-min-width: 350px !important;
  --list-indent: 1.9em !important;
  --list-marker-color: rgb(227, 0, 106) !important;
  --list-marker-color-collapsed: rgb(196 98 0) !important;
  --list-marker-color-hover: rgb(0, 0, 0) !important;
  --list-min-width: 200px !important;
  --mcc-img-snw-display: none !important;
  --mcl-card-bg-color: rgb(247 245 244) !important;
  --mcl-card-border-color: rgb(67, 67, 67) !important;
  --mcl-card-border-width: 1px !important;
  --mcl-card-gap: 0.2em !important;
  --mcl-card-header-border-width: 1px !important;
  --menu-background: rgb(247 245 244) !important;
  --metadata-border-color: rgb(67, 67, 67) !important;
  --metadata-divider-color: rgb(67, 67, 67) !important;
  --metadata-input-text-color: rgb(6, 6, 6) !important;
  --metadata-label-text-color: rgb(0, 0, 0) !important;
  --metadata-label-text-color-hover: rgb(0, 0, 0) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: rgb(255, 255, 255) !important;
  --nav-collapse-icon-color: rgb(227, 0, 106) !important;
  --nav-collapse-icon-color-collapsed: rgb(227, 0, 106) !important;
  --nav-heading-color: rgb(6, 6, 6) !important;
  --nav-heading-color-collapsed: rgb(227, 0, 106) !important;
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0) !important;
  --nav-heading-color-hover: rgb(6, 6, 6) !important;
  --nav-item-color: rgb(0, 0, 0) !important;
  --nav-item-color-active: rgb(6, 6, 6) !important;
  --nav-item-color-highlighted: rgb(196 98 0) !important;
  --nav-item-color-hover: rgb(6, 6, 6) !important;
  --nav-item-color-selected: rgb(6, 6, 6) !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: rgb(227, 0, 106) !important;
  --nav-tag-color-active: rgb(0, 0, 0) !important;
  --nav-tag-color-hover: rgb(0, 0, 0) !important;
  --pdf-background: rgb(255, 255, 255) !important;
  --pdf-page-background: rgb(255, 255, 255) !important;
  --pdf-sidebar-background: rgb(255, 255, 255) !important;
  --pill-border-color: rgb(67, 67, 67) !important;
  --pill-color: rgb(0, 0, 0) !important;
  --pill-color-hover: rgb(6, 6, 6) !important;
  --pill-color-remove: rgb(227, 0, 106) !important;
  --pill-color-remove-hover: rgb(196 98 0) !important;
  --pre-code: rgba(0, 0, 0, 0.044) !important;
  --prompt-background: rgb(255, 255, 255) !important;
  --quote-bg: rgba(164, 164, 160, 0.15) !important;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --ribbon-background: rgb(247 245 244) !important;
  --ribbon-background-collapsed: rgb(255, 255, 255) !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.422) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.287) !important;
  --search-clear-button-color: rgb(0, 0, 0) !important;
  --search-icon-color: rgb(0, 0, 0) !important;
  --search-result-background: rgb(255, 255, 255) !important;
  --secondary: rgb(196 98 0) !important;
  --setting-group-heading-color: rgb(6, 6, 6) !important;
  --setting-items-background: rgb(230, 229, 224) !important;
  --setting-items-border-color: rgb(67, 67, 67) !important;
  --signature: "֎" !important;
  --slider-track-background: rgb(67, 67, 67) !important;
  --status-bar-background: rgb(247 245 244) !important;
  --status-bar-border-color: rgb(67, 67, 67) !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-text-color: rgb(0, 0, 0) !important;
  --suggestion-background: rgb(255, 255, 255) !important;
  --tab-background-active: rgb(255, 255, 255) !important;
  --tab-container-background: rgb(247 245 244) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: rgb(67, 67, 67) !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: rgb(247 245 244) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(247 245 244), transparent) !important;
  --tab-text-color: rgb(227, 0, 106) !important;
  --tab-text-color-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active-current: rgb(6, 6, 6) !important;
  --tab-text-color-focused-highlighted: rgb(196 98 0) !important;
  --tab-text-nofocus: rgba(0, 0, 0, 0.6) !important;
  --table-add-button-border-color: rgb(67, 67, 67) !important;
  --table-border-color: rgb(67, 67, 67) !important;
  --table-border-radius: 5px !important;
  --table-drag-handle-background-active: rgb(255, 184, 108) !important;
  --table-drag-handle-color: rgb(227, 0, 106) !important;
  --table-drag-handle-color-active: rgb(255, 255, 255) !important;
  --table-header-border-color: rgb(67, 67, 67) !important;
  --table-header-color: rgb(6, 6, 6) !important;
  --table-selection-border-color: rgb(255, 184, 108) !important;
  --tag-color: rgb(196 98 0) !important;
  --tag-color-hover: rgb(196 98 0) !important;
  --tertiary: rgb(0, 184, 225) !important;
  --text-accent: rgb(196 98 0) !important;
  --text-accent-hover: rgb(0, 184, 225) !important;
  --text-antinormal: white !important;
  --text-error: rgb(255, 0, 55) !important;
  --text-error-hover: rgb(232, 0, 0) !important;
  --text-faint: rgb(227, 0, 106) !important;
  --text-highlight-bg: rgba(117, 0, 0, 0.293) !important;
  --text-highlight-bg-active: rgba(255, 255, 50, 0.4) !important;
  --text-highlight-rgb: 255, 212, 0 !important;
  --text-muted: rgb(0, 0, 0) !important;
  --text-muted2: rgb(123, 123, 123) !important;
  --text-normal: rgb(6, 6, 6) !important;
  --text-on-accent: rgb(255, 255, 255) !important;
  --text-selection: rgba(44, 77, 188, 0.2) !important;
  --textHighlight: rgba(117, 0, 0, 0.293) !important;
  --titlebar-background: rgb(247 245 244) !important;
  --titlebar-background-focused: rgb(242, 242, 242) !important;
  --titlebar-border-color: rgb(67, 67, 67) !important;
  --titlebar-text-color: rgb(0, 0, 0) !important;
  --titlebar-text-color-focused: rgb(6, 6, 6) !important;
  --vault-profile-color: rgb(6, 6, 6) !important;
  --vault-profile-color-hover: rgb(6, 6, 6) !important;
  --vault-profile-font-size: 14px !important;
  --zotero-black-dark-rgb: 255, 255, 255 !important;
  --zotero-black-light-rgb: 0, 0, 0 !important;
  --zotero-blue-rgb: 46, 168, 229 !important;
  --zotero-gray-rgb: 170, 170, 170 !important;
  --zotero-green-rgb: 95, 178, 54 !important;
  --zotero-magenta-rgb: 229, 110, 238 !important;
  --zotero-orange-rgb: 241, 152, 55 !important;
  --zotero-purple-rgb: 162, 138, 229 !important;
  --zotero-red-rgb: 255, 102, 102 !important;
  --zotero-yellow-rgb: 255, 212, 0 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 245, 244);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(0, 0, 0);
  border-color: rgb(67, 67, 67);
  color: rgb(255, 255, 255);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(196, 98, 0);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 245, 244);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 245, 244);
  border-left-color: rgb(67, 67, 67);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(6, 6, 6);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(55, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration-color: rgb(55, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(55, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration-color: rgb(55, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(55, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration-color: rgb(55, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(55, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration-color: rgb(55, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(6, 6, 6) none 0px;
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body del {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(6, 6, 6) none 0px;
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(6, 6, 6);
  font-size: 14px;
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(227, 0, 106);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 184, 108);
  border-color: rgb(255, 184, 108);
}

html[saved-theme="light"] body p {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(96, 123, 4);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(96, 123, 4) none 0px;
  text-decoration-color: rgb(96, 123, 4);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(196, 98, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(196, 98, 0) none 0px;
  text-decoration-color: rgb(196, 98, 0);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(196, 98, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(196, 98, 0) none 0px;
  text-decoration-color: rgb(196, 98, 0);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body dt {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body ol > li {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body ul > li {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(196, 98, 0);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(164, 164, 160, 0.15);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body table {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 213.828px;
  margin-right: 213.844px;
  margin-top: 20px;
  width: 241.641px;
}

html[saved-theme="light"] body td {
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

html[saved-theme="light"] body th {
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
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.043);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.043);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(227, 0, 106);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body figcaption {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(247, 245, 244);
  border-bottom-color: rgb(6, 6, 6);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-right-style: solid;
  border-top-color: rgb(6, 6, 6);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  margin-bottom: 15px;
  margin-top: 15px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  margin-left: -20px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(120, 82, 238, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(8, 185, 78, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background-color: rgba(0, 184, 212, 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.3);
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

html[saved-theme="light"] body .callout[data-callout="imagen"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(6, 6, 6) none 0px;
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(247, 245, 244);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(196, 98, 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 0, 0);
  font-family: Inter;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body body {
  scrollbar-color: rgba(0, 0, 0, 0.286) rgba(0, 0, 0, 0.05);
  scrollbar-width: thin;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 650;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 650;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 650;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: rgb(227, 0, 106);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(0, 0, 0);
  stroke: rgb(0, 0, 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(227, 0, 106);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body abbr {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 229, 224);
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body sub {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body summary {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body sup {
  color: rgb(6, 6, 6);
  font-size: 12px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(247, 245, 244);
  border-bottom-left-radius: 27.16px;
  border-bottom-right-radius: 27.16px;
  border-top-left-radius: 27.16px;
  border-top-right-radius: 27.16px;
  color: rgb(0, 184, 225);
}`,
  },
  extras: `@keyframes cambiarOpacidad {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@keyframes example11 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.55;
  }
  100% {
    opacity: 1;
  }
}

.inline-title {
  animation-name: example11;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
}

.theme-dark .empty-state {
  animation-name: title_dark;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
}

.theme-light .empty-state {
  animation-name: title_light;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
}

@keyframes title_dark {
  0% {
    color: rgb(255 255 255 / 100%);
  }
  50% {
    color: rgb(255 255 255 / 70%);
  }
  100% {
    color: rgb(255 255 255 / 100%);
  }
}

@keyframes title_light {
  0% {
    color: rgb(50 50 50 / 100%);
  }
  50% {
    color: rgb(50 50 50 / 60%);
  }
  100% {
    color: rgb(50 50 50 / 100%);
  }
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes active_line_dark {
  0% {
    background-color: rgba(255, 255, 255, 0.09);
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
  }
}

@keyframes active_line_light {
  0% {
    background-color: rgba(0, 0, 0, 0.09);
  }
  100% {
    background-color: rgba(0, 0, 0, 0);
  }
}
`,
};
