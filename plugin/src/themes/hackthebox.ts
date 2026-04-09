import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "hackthebox",
    modes: ["dark"],
    variations: [],
    fonts: ["open-sans"],
  },
  dark: {
    base: `:root:root {
  --accent-a: 1 !important;
  --accent-h: 80 !important;
  --accent-l: 47% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(80, 100%, 47%, 0.1) !important;
  --background-modifier-border: #4a5466 !important;
  --background-modifier-border-focus: none !important;
  --background-modifier-border-hover: #4a5466 !important;
  --background-modifier-error: #ff8484 !important;
  --background-modifier-form-field: #1a2331 !important;
  --background-modifier-form-field-hover: #1a2331 !important;
  --background-modifier-message: #141d2b !important;
  --background-modifier-success: #c5f467 !important;
  --background-primary: #141d2b !important;
  --background-primary-alt: #1a2331 !important;
  --background-secondary: #1a2331 !important;
  --bases-cards-background: #141d2b !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: #1a2331 !important;
  --bases-cards-shadow: 0 0 0 1px #4a5466 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #4a5466 !important;
  --bases-embed-border-color: #4a5466 !important;
  --bases-group-heading-property-color: #a4b1cd !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: #4a5466 !important;
  --bases-table-cell-background-active: #141d2b !important;
  --bases-table-cell-background-disabled: #1a2331 !important;
  --bases-table-cell-background-selected: hsla(80, 100%, 47%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px none !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(80, 100%, 47%) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: #1a2331 !important;
  --bases-table-header-background: #141d2b !important;
  --bases-table-header-color: #a4b1cd !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: #141d2b !important;
  --blockquote-background-color: #0b121f !important;
  --blockquote-border-color: #9fef00 !important;
  --blockquote-border-radius: 5px !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-font-style: italic !important;
  --blockquote-padding: 10px !important;
  --blur-background: color-mix(in srgb, #4a5466 65%, transparent) linear-gradient(#4a5466, color-mix(in srgb, #4a5466 65%, transparent)) !important;
  --border-width: 2px !important;
  --button-radius: 4px !important;
  --canvas-background: #1a2331 !important;
  --canvas-card-label-color: #cad2e2 !important;
  --caret-color: #9fef00 !important;
  --checkbox-border-color: #cad2e2 !important;
  --checkbox-border-color-hover: #a4b1cd !important;
  --checkbox-color: hsl(80, 100%, 47%) !important;
  --checkbox-color-hover: hsl(77, 102%, 54.05%) !important;
  --checkbox-marker-color: #141d2b !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #a4b1cd !important;
  --code-attribute: #ff3e3e !important;
  --code-background: #1a2331 !important;
  --code-border-color: #4a5466 !important;
  --code-comment: #c5d1eb !important;
  --code-func-name: #2e6cff !important;
  --code-function: #ffcc5c !important;
  --code-important: #ffaf00 !important;
  --code-keyword: #cf8dfb !important;
  --code-normal: #a4b1cd !important;
  --code-operator: #ff8484 !important;
  --code-property: #a4b1cd !important;
  --code-punctuation: #a4b1cd !important;
  --code-string: #c5f467 !important;
  --code-tag: #ffaf00 !important;
  --code-value: #5cb2ff !important;
  --code-white-space: pre !important;
  --collapse-icon-color: #cad2e2 !important;
  --collapse-icon-color-collapsed: hsl(77, 102%, 54.05%) !important;
  --color-accent: hsl(80, 100%, 47%) !important;
  --color-accent-1: hsl(77, 102%, 54.05%) !important;
  --color-accent-2: hsl(75, 105%, 60.63%) !important;
  --color-accent-hsl: 80, 100%, 47% !important;
  --color-base-25: #1a2331 !important;
  --color-base-35: transparent !important;
  --color-base-40: transparent !important;
  --color-base-50: #cad2e2 !important;
  --dark: #a4b1cd !important;
  --darkgray: #a4b1cd !important;
  --divider-color: #4a5466 !important;
  --divider-color-hover: #9fef00 !important;
  --drag-ghost-background: #9fef00 !important;
  --drag-ghost-text-color: black !important;
  --dropdown-background: #4a5466 !important;
  --dropdown-background-hover: transparent !important;
  --embed-background: #1a2331 !important;
  --embed-block-shadow-hover: 0 0 0 1px #4a5466, inset 0 0 0 1px #4a5466 !important;
  --embed-border-start: 2px solid hsl(80, 100%, 47%) !important;
  --file-header-background: #141d2b !important;
  --file-header-background-focused: #141d2b !important;
  --file-header-border: 2px solid transparent !important;
  --flair-background: #4a5466 !important;
  --flair-color: #a4b1cd !important;
  --footnote-divider-color: #4a5466 !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: #a4b1cd !important;
  --footnote-id-color-no-occurrences: #cad2e2 !important;
  --footnote-input-background-active: #1a2331 !important;
  --graph-line: #4a5466 !important;
  --graph-node: #cad2e2 !important;
  --graph-node-focused: #9fef00 !important;
  --graph-node-unresolved: #a4b1cd !important;
  --graph-text: #a4b1cd !important;
  --gray: #a4b1cd !important;
  --h1-color: #cad2e2 !important;
  --h1-size: 2em !important;
  --h2-color: #cad2e2 !important;
  --h2-size: 1.6em !important;
  --h2-weight: 700 !important;
  --h3-color: #cad2e2 !important;
  --h3-size: 1.37em !important;
  --h3-weight: 700 !important;
  --h4-color: #cad2e2 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 700 !important;
  --h5-color: #cad2e2 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 700 !important;
  --h6-color: #cad2e2 !important;
  --h6-size: 1.12em !important;
  --h6-weight: 700 !important;
  --heading-formatting: #cad2e2 !important;
  --highlight: #9fef00 !important;
  --hr-color: #1a2332 !important;
  --htb-border: #4a5466 !important;
  --htb-divider-color: #1a2332 !important;
  --htb-heading: #cad2e2 !important;
  --htb-lime: #9fef00 !important;
  --htb-text-color: #a4b1cd !important;
  --icon-color: #a4b1cd !important;
  --icon-color-active: red !important;
  --icon-color-focused: #9fef00 !important;
  --icon-color-hover: #cad2e2 !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: #cad2e2 !important;
  --inline-title-size: 2em !important;
  --input-border-width: 2px !important;
  --input-date-separator: #cad2e2 !important;
  --input-placeholder-color: #cad2e2 !important;
  --interactive-accent: hsl(80, 100%, 47%) !important;
  --interactive-accent-hover: hsl(77, 102%, 54.05%) !important;
  --interactive-accent-hsl: 80, 100%, 47% !important;
  --interactive-hover: transparent !important;
  --interactive-normal: #4a5466 !important;
  --light: #141d2b !important;
  --lightgray: #1a2331 !important;
  --link-color: #9fef00 !important;
  --link-color-hover: #9fef00 !important;
  --link-decoration: normal !important;
  --link-external-color: #007bff !important;
  --link-external-color-hover: #007bff !important;
  --link-external-decoration: normal !important;
  --link-unresolved-color: #ff8484 !important;
  --link-unresolved-decoration-color: hsla(80, 100%, 47%, 0.3) !important;
  --list-bullet-size: 7px !important;
  --list-marker-color: #9fef00 !important;
  --list-marker-color-collapsed: #cad2e2 !important;
  --list-marker-color-hover: #a4b1cd !important;
  --list-spacing: 2px !important;
  --menu-background: #1a2331 !important;
  --menu-border-color: #4a5466 !important;
  --menu-border-width: 2px !important;
  --metadata-border-color: #4a5466 !important;
  --metadata-divider-color: #4a5466 !important;
  --metadata-input-background-active: #1a2331 !important;
  --metadata-input-text-color: #a4b1cd !important;
  --metadata-label-text-color: #cad2e2 !important;
  --metadata-label-text-color-hover: #a4b1cd !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px none !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px #4a5466 !important;
  --modal-background: #141d2b !important;
  --modal-border-color: transparent !important;
  --modal-border-width: 2px !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: #cad2e2 !important;
  --nav-collapse-icon-color-collapsed: #cad2e2 !important;
  --nav-heading-color: #a4b1cd !important;
  --nav-heading-color-collapsed: #cad2e2 !important;
  --nav-heading-color-collapsed-hover: #a4b1cd !important;
  --nav-heading-color-hover: #a4b1cd !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-selected: hsla(80, 100%, 47%, 0.15) !important;
  --nav-item-color: #a4b1cd !important;
  --nav-item-color-active: #a4b1cd !important;
  --nav-item-color-highlighted: hsl(77, 102%, 54.05%) !important;
  --nav-item-color-hover: #a4b1cd !important;
  --nav-item-color-selected: #a4b1cd !important;
  --nav-tag-color: #cad2e2 !important;
  --nav-tag-color-active: #a4b1cd !important;
  --nav-tag-color-hover: #a4b1cd !important;
  --pdf-background: #141d2b !important;
  --pdf-page-background: #141d2b !important;
  --pdf-shadow: 0 0 0 1px #4a5466 !important;
  --pdf-sidebar-background: #141d2b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #4a5466 !important;
  --pill-border-color: #4a5466 !important;
  --pill-border-color-hover: #4a5466 !important;
  --pill-border-width: 2px !important;
  --pill-color: #a4b1cd !important;
  --pill-color-hover: #a4b1cd !important;
  --pill-color-remove: #cad2e2 !important;
  --pill-color-remove-hover: hsl(77, 102%, 54.05%) !important;
  --prompt-background: #141d2b !important;
  --prompt-border-color: transparent !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, #4a5466 65%, transparent) linear-gradient(#4a5466, color-mix(in srgb, #4a5466 65%, transparent)) !important;
  --ribbon-background: #1a2331 !important;
  --ribbon-background-collapsed: #141d2b !important;
  --scrollbar-active-thumb-bg: #9fef00 !important;
  --search-clear-button-color: #a4b1cd !important;
  --search-icon-color: #a4b1cd !important;
  --search-result-background: #141d2b !important;
  --secondary: hsl(77, 102%, 54.05%) !important;
  --setting-group-heading-color: #a4b1cd !important;
  --setting-items-background: #1a2331 !important;
  --setting-items-border-color: #4a5466 !important;
  --slider-thumb-border-color: #4a5466 !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: #4a5466 !important;
  --status-bar-background: #1a2331 !important;
  --status-bar-border-color: #4a5466 !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-text-color: #a4b1cd !important;
  --suggestion-background: #141d2b !important;
  --tab-background-active: #141d2b !important;
  --tab-container-background: #1a2331 !important;
  --tab-divider-color: #4a5466 !important;
  --tab-outline-color: #4a5466 !important;
  --tab-radius-active: 5px 5px 0px 0px !important;
  --tab-switcher-background: #1a2331 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a2331, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(80, 100%, 47%) !important;
  --tab-text-color: #cad2e2 !important;
  --tab-text-color-active: #a4b1cd !important;
  --tab-text-color-focused: #4a5466 !important;
  --tab-text-color-focused-active: #a4b1cd !important;
  --tab-text-color-focused-active-current: #a4b1cd !important;
  --tab-text-color-focused-highlighted: hsl(77, 102%, 54.05%) !important;
  --table-add-button-border-color: #4a5466 !important;
  --table-add-button-border-width: 2px !important;
  --table-border-color: #4a5466 !important;
  --table-border-width: 2px !important;
  --table-column-first-border-width: 2px !important;
  --table-column-last-border-width: 2px !important;
  --table-drag-handle-background-active: hsl(80, 100%, 47%) !important;
  --table-drag-handle-color: #cad2e2 !important;
  --table-drag-handle-color-active: #141d2b !important;
  --table-header-border-color: #4a5466 !important;
  --table-header-border-width: 2px !important;
  --table-header-color: #cad2e2 !important;
  --table-row-alt-background: #1a2331 !important;
  --table-row-last-border-width: 2px !important;
  --table-selection: hsla(80, 100%, 47%, 0.1) !important;
  --table-selection-border-color: hsl(80, 100%, 47%) !important;
  --table-text-color: #a4b1cd !important;
  --tag-background: hsla(80, 100%, 47%, 0.1) !important;
  --tag-background-hover: hsla(80, 100%, 47%, 0.2) !important;
  --tag-border-color: hsla(80, 100%, 47%, 0.15) !important;
  --tag-border-color-hover: hsla(80, 100%, 47%, 0.15) !important;
  --tag-color: hsl(77, 102%, 54.05%) !important;
  --tag-color-hover: hsl(77, 102%, 54.05%) !important;
  --tertiary: hsl(75, 105%, 60.63%) !important;
  --text-accent: hsl(77, 102%, 54.05%) !important;
  --text-accent-hover: hsl(75, 105%, 60.63%) !important;
  --text-faint: #cad2e2 !important;
  --text-highlight-bg: #9fef00 !important;
  --text-muted: #a4b1cd !important;
  --text-normal: #a4b1cd !important;
  --text-on-accent: #141d2b !important;
  --text-selection: #9fef00 !important;
  --textHighlight: #9fef00 !important;
  --titlebar-background: #1a2331 !important;
  --titlebar-background-focused: #1a2331 !important;
  --titlebar-border-color: #4a5466 !important;
  --titlebar-text-color: #cad2e2 !important;
  --titlebar-text-color-focused: #cad2e2 !important;
  --toggle-radius: 999px !important;
  --toggle-thumb-radius: 999px !important;
  --vault-name-color: #9fef00 !important;
  --vault-profile-color: #a4b1cd !important;
  --vault-profile-color-hover: #a4b1cd !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 35, 49);
  color: rgb(164, 177, 205);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(20, 29, 43);
  color: rgb(164, 177, 205);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(26, 35, 49);
}

html body .bases-table thead th {
  border-color: rgb(74, 84, 102);
  color: rgb(202, 210, 226);
}

html body .canvas-node {
  border-color: rgb(164, 177, 205);
}

html body .canvas-node-content {
  color: rgb(164, 177, 205);
}

html body .canvas-node-file {
  color: rgb(164, 177, 205);
}

html body .canvas-node-group {
  border-color: rgb(164, 177, 205);
}

html body .canvas-sidebar {
  background-color: rgb(26, 35, 49);
  border-color: rgb(164, 177, 205);
}

html body .note-properties {
  border-color: rgb(74, 84, 102);
}

html body .note-properties-key {
  color: rgb(164, 177, 205);
}

html body .note-properties-row {
  border-color: rgb(164, 177, 205);
}

html body .note-properties-tags {
  background-color: rgba(160, 240, 0, 0.1);
  color: rgb(189, 255, 21);
}

html body .note-properties-value {
  color: rgb(164, 177, 205);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 35, 49);
  color: rgb(164, 177, 205);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(74, 84, 102);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 35, 49);
  border-left-color: rgb(74, 84, 102);
  color: rgb(164, 177, 205);
}

html body div#quartz-root {
  background-color: rgb(20, 29, 43);
  color: rgb(164, 177, 205);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration-color: rgb(164, 177, 205);
}

html body .page article p > em, html em {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration-color: rgb(164, 177, 205);
}

html body .page article p > i, html i {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration-color: rgb(164, 177, 205);
}

html body .page article p > strong, html strong {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration-color: rgb(164, 177, 205);
}

html body .text-highlight {
  background-color: rgb(159, 239, 0);
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration-color: rgb(164, 177, 205);
}

html body del {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration-color: rgb(164, 177, 205);
}

html body h1.article-title {
  color: rgb(164, 177, 205);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(202, 210, 226);
  border-radius: 3px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(160, 240, 0);
  border-color: rgb(160, 240, 0);
}

html body p {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
  outline: rgb(164, 177, 205) none 0px;
  text-decoration-color: rgb(164, 177, 205);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 123, 255);
  outline: rgb(0, 123, 255) none 0px;
  text-decoration-color: rgb(0, 123, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(159, 239, 0);
  outline: rgb(159, 239, 0) none 0px;
  text-decoration-color: rgb(159, 239, 0);
}

html body a.internal.broken {
  color: rgb(255, 132, 132);
  outline: rgb(255, 132, 132) none 0px;
  text-decoration: rgba(160, 240, 0, 0.3);
  text-decoration-color: rgba(160, 240, 0, 0.3);
}`,
    lists: `html body dd {
  color: rgb(164, 177, 205);
}

html body dt {
  color: rgb(164, 177, 205);
}

html body ol > li {
  color: rgb(164, 177, 205);
}

html body ol.overflow {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body ul > li {
  color: rgb(164, 177, 205);
}

html body ul.overflow {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(202, 210, 226);
}

html body blockquote {
  background-color: rgb(11, 18, 31);
  font-style: italic;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body table {
  color: rgb(164, 177, 205);
  width: 228.219px;
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(26, 35, 49);
}

html body td {
  border-bottom-color: rgb(74, 84, 102);
  border-bottom-width: 2px;
  border-left-color: rgb(74, 84, 102);
  border-left-width: 2px;
  border-right-color: rgb(74, 84, 102);
  border-right-width: 2px;
  border-top-color: rgb(74, 84, 102);
  border-top-width: 0px;
  color: rgb(164, 177, 205);
}

html body th {
  border-bottom-color: rgb(74, 84, 102);
  border-bottom-width: 2px;
  border-left-color: rgb(74, 84, 102);
  border-left-width: 2px;
  border-right-color: rgb(74, 84, 102);
  border-right-width: 2px;
  border-top-color: rgb(74, 84, 102);
  border-top-left-radius: 8px;
  border-top-width: 2px;
  color: rgb(202, 210, 226);
}`,
    code: `html body code {
  border-bottom-color: rgb(159, 239, 0);
  border-left-color: rgb(159, 239, 0);
  border-right-color: rgb(159, 239, 0);
  border-top-color: rgb(159, 239, 0);
  color: rgb(159, 239, 0);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
  color: rgb(164, 177, 205);
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 204, 92);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 204, 92);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 204, 92);
  border-left-color: rgb(255, 204, 92);
  border-right-color: rgb(255, 204, 92);
  border-top-color: rgb(255, 204, 92);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
}

html body pre:has(> code) {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
}`,
    images: `html body audio {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body figcaption {
  color: rgb(164, 177, 205);
}

html body figure {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body img {
  border-bottom-color: rgb(202, 210, 226);
  border-left-color: rgb(202, 210, 226);
  border-right-color: rgb(202, 210, 226);
  border-top-color: rgb(202, 210, 226);
}

html body video {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(255, 132, 132);
  border-left-color: rgb(255, 132, 132);
  border-right-color: rgb(255, 132, 132);
  border-top-color: rgb(255, 132, 132);
}

html body .footnotes {
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

html body .transclude {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(160, 240, 0);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body .transclude-inner {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(202, 210, 226);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(202, 210, 226);
  border-right-color: rgb(202, 210, 226);
  border-top-color: rgb(202, 210, 226);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-bottom-width: 2px;
  border-left-color: rgb(74, 84, 102);
  border-left-width: 2px;
  border-right-color: rgb(74, 84, 102);
  border-right-width: 2px;
  border-top-color: rgb(74, 84, 102);
  border-top-width: 2px;
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(20, 29, 43);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration-color: rgb(164, 177, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(164, 177, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(164, 177, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(164, 177, 205);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 35, 49);
  border-bottom-width: 2px;
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(164, 177, 205);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(160, 240, 0, 0.1);
  border-bottom-color: rgba(160, 240, 0, 0.15);
  border-left-color: rgba(160, 240, 0, 0.15);
  border-right-color: rgba(160, 240, 0, 0.15);
  border-top-color: rgba(160, 240, 0, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(189, 255, 21);
}

html body h1 {
  color: rgb(202, 210, 226);
}

html body h2 {
  color: rgb(202, 210, 226);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(202, 210, 226);
}

html body h3 {
  color: rgb(202, 210, 226);
}

html body h4 {
  color: rgb(202, 210, 226);
}

html body h5 {
  color: rgb(202, 210, 226);
}

html body h6 {
  color: rgb(202, 210, 226);
}

html body hr {
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}

html body ::-webkit-scrollbar-track {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

html body .explorer .folder-outer > ul {
  border-left-width: 2px;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(164, 177, 205);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}`,
    footer: `html body footer {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-left-width: 2px;
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
  border-top-width: 2px;
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

html body footer ul li a {
  color: rgb(164, 177, 205);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(164, 177, 205);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body li.section-li > .section .meta {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(164, 177, 205);
}

html body ul.section-ul {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

html body .darkmode svg {
  color: rgb(164, 177, 205);
  stroke: rgb(164, 177, 205);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

html body .breadcrumb-element p {
  color: rgb(202, 210, 226);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

html body .metadata {
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
  color: rgb(164, 177, 205);
}

html body .metadata-properties {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

html body .navigation-progress {
  background-color: rgb(26, 35, 49);
}

html body .page-header h2.page-title {
  color: rgb(164, 177, 205);
}

html body abbr {
  color: rgb(164, 177, 205);
}

html body details {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body input[type=text] {
  border-bottom-color: rgb(202, 210, 226);
  border-left-color: rgb(202, 210, 226);
  border-right-color: rgb(202, 210, 226);
  border-top-color: rgb(202, 210, 226);
  color: rgb(202, 210, 226);
}

html body kbd {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html body progress {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

html body sub {
  color: rgb(164, 177, 205);
}

html body summary {
  color: rgb(164, 177, 205);
}

html body sup {
  color: rgb(164, 177, 205);
}

html body ul.tags > li {
  background-color: rgba(160, 240, 0, 0.1);
  border-bottom-color: rgba(160, 240, 0, 0.15);
  border-left-color: rgba(160, 240, 0, 0.15);
  border-right-color: rgba(160, 240, 0, 0.15);
  border-top-color: rgba(160, 240, 0, 0.15);
  color: rgb(189, 255, 21);
}`,
  },
  light: {},
};
