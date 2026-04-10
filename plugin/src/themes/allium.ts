import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "allium",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --AccentA1: #a32d7f !important;
  --AccentA2: #D560B1 !important;
  --Axt: #A32D7F36 !important;
  --Axt2: #50125A94 !important;
  --Bgcl: #A32D7F52 !important;
  --Bgnd: #2C1C27 !important;
  --EBgnd: #211F23 !important;
  --background-modifier-accent: #D560B1 !important;
  --background-modifier-active-hover: #A32D7F52 !important;
  --background-modifier-border: #A32D7F36 !important;
  --background-modifier-border-focus: #a32d7f !important;
  --background-modifier-border-hover: #50125A94 !important;
  --background-modifier-form-field: #211F23 !important;
  --background-modifier-form-field-highlighted: #211F23 !important;
  --background-modifier-form-field-hover: #211F23 !important;
  --background-modifier-hover: #A32D7F52 !important;
  --background-primary: #211F23 !important;
  --background-primary-alt: #211F23 !important;
  --background-secondary: #2C1C27 !important;
  --background-secondary-alt: #A32D7F36 !important;
  --background-table-rows: #2C1C27 !important;
  --bases-cards-background: #211F23 !important;
  --bases-cards-cover-background: #211F23 !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #A32D7F36 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #50125A94 !important;
  --bases-embed-border-color: #A32D7F36 !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: #e499e4a2 !important;
  --bases-table-border-color: #A32D7F36 !important;
  --bases-table-cell-background-active: #211F23 !important;
  --bases-table-cell-background-disabled: #211F23 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #a32d7f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a32d7f !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-group-background: #211F23 !important;
  --bases-table-header-background: #211F23 !important;
  --bases-table-header-background-hover: #A32D7F52 !important;
  --bases-table-header-color: #e499e4a2 !important;
  --bases-table-summary-background: #211F23 !important;
  --bases-table-summary-background-hover: #A32D7F52 !important;
  --blockquote-border-color: #a32d7f !important;
  --blur-background: color-mix(in srgb, #A32D7F36 65%, transparent) linear-gradient(#A32D7F36, color-mix(in srgb, #A32D7F36 65%, transparent)) !important;
  --bold-color: #9c4296 !important;
  --callout-radius: 5px;
  --canvas-background: #211F23 !important;
  --canvas-card-label-color: #e499e4a2 !important;
  --canvas-controls-radius: 5px !important;
  --canvas-dot-pattern: #A32D7F36 !important;
  --caret-color: #d8bcd8 !important;
  --chbx-B: 216, 188, 216 !important;
  --chbx-C: 241, 99, 125 !important;
  --chbx-I: 243, 150, 122 !important;
  --chbx-N: 216, 188, 216 !important;
  --chbx-P: 200, 216, 155 !important;
  --chbx-R: 200, 216, 155 !important;
  --chbx-a: 241, 99, 125 !important;
  --chbx-b: 243, 150, 122 !important;
  --chbx-c: 163, 45, 127 !important;
  --chbx-d: 163, 45, 127 !important;
  --chbx-h: 216, 188, 216 !important;
  --chbx-i: 241, 99, 125 !important;
  --chbx-id: 243, 150, 122 !important;
  --chbx-q: 243, 150, 122 !important;
  --chbx-r: 243, 150, 122 !important;
  --checkbox-border-color: #e499e4a2 !important;
  --checkbox-border-color-hover: #e499e4a2 !important;
  --checkbox-color: #a32d7f !important;
  --checkbox-color-hover: #D560B1 !important;
  --checkbox-marker-color: #211F23 !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: #e499e4a2 !important;
  --clickable-icon-radius: 5px !important;
  --code-background: #211F23 !important;
  --code-border-color: #A32D7F36 !important;
  --code-bracket-background: #A32D7F52 !important;
  --code-comment: #e499e4a2 !important;
  --code-normal: #e499e4a2 !important;
  --code-punctuation: #e499e4a2 !important;
  --code-radius: 5px !important;
  --collapse-icon-color: #e499e4a2 !important;
  --collapse-icon-color-collapsed: #D560B1 !important;
  --color-base-00: #211F23 !important;
  --color-base-05: #211F23 !important;
  --color-base-10: #211F23 !important;
  --color-base-100: #d8bcd8 !important;
  --color-base-20: #2C1C27 !important;
  --color-base-25: #252429 !important;
  --color-base-30: #A32D7F36 !important;
  --color-base-35: #a540a55f !important;
  --color-base-40: #A32D7F36 !important;
  --color-base-50: #e499e4a2 !important;
  --color-base-60: #d8bcd8 !important;
  --color-base-70: #d8bcd8 !important;
  --color-scheme: dark !important;
  --dark: #d8bcd8 !important;
  --darkgray: #d8bcd8 !important;
  --divider-color: #A32D7F36 !important;
  --divider-color-hover: #a32d7f !important;
  --dropdown-background: #2C1C27 !important;
  --dropdown-background-hover: #2C1C27 !important;
  --dropdown-background-normal: #2C1C27 !important;
  --embed-block-shadow-hover: 0 0 0 1px #A32D7F36, inset 0 0 0 1px #A32D7F36 !important;
  --embed-border-start: 2px solid #a32d7f !important;
  --file-header-background: #211F23 !important;
  --file-header-background-focused: #211F23 !important;
  --flair-background: #A32D7F36 !important;
  --flair-color: #d8bcd8 !important;
  --footnote-divider-color: #A32D7F36 !important;
  --footnote-id-color: #e499e4a2 !important;
  --footnote-id-color-no-occurrences: #e499e4a2 !important;
  --footnote-input-background-active: #A32D7F52 !important;
  --footnote-radius: 5px !important;
  --frame-divider-color: #A32D7F36 !important;
  --graph-line: #a540a55f !important;
  --graph-node: #d8bcd8 !important;
  --graph-node-attachment: #d6d89b !important;
  --graph-node-focused: #D560B1 !important;
  --graph-node-tag: #C8D89BDB !important;
  --graph-node-unresolved: #e499e4a2 !important;
  --graph-text: #d8bcd8 !important;
  --gray: #e499e4a2 !important;
  --h1-color: #d8bcd8 !important;
  --h2-color: #c4a5c4 !important;
  --h3-color: #ac81ac !important;
  --h4-color: #946a94 !important;
  --h5-color: #835783 !important;
  --h6-color: #805380 !important;
  --heading-formatting: #e499e4a2 !important;
  --highlight: #A32D7F52 !important;
  --hr-color: #A32D7F36 !important;
  --icon-color: #d8bcd8 !important;
  --icon-color-active: #d8bcd8 !important;
  --icon-color-focused: #d8bcd8 !important;
  --icon-color-hover: #e499e4a2 !important;
  --inline-title-color: #d8bcd8 !important;
  --input-date-separator: #e499e4a2 !important;
  --input-placeholder-color: #e499e4a2 !important;
  --interactive-accent: #a32d7f !important;
  --interactive-accent-hover: #D560B1 !important;
  --interactive-hover: #A32D7F36 !important;
  --interactive-normal: #A32D7F36 !important;
  --italic-color: #f3967a !important;
  --its: "its" !important;
  --light: #211F23 !important;
  --lightgray: #2C1C27 !important;
  --link-color: #D560B1 !important;
  --link-color-hover: #D560B1 !important;
  --link-external-color: #D560B1 !important;
  --link-external-color-hover: #D560B1 !important;
  --link-unresolved-color: #D560B1 !important;
  --list-marker-color: #e499e4a2 !important;
  --list-marker-color-collapsed: #D560B1 !important;
  --list-marker-color-hover: #e499e4a2 !important;
  --menu-background: #2C1C27 !important;
  --menu-border-color: #50125A94 !important;
  --menu-radius: 5px !important;
  --metadata-border-color: #A32D7F36 !important;
  --metadata-divider-color: #A32D7F36 !important;
  --metadata-input-background-active: #A32D7F52 !important;
  --metadata-input-text-color: #d8bcd8 !important;
  --metadata-label-background-active: #A32D7F52 !important;
  --metadata-label-text-color: #e499e4a2 !important;
  --metadata-label-text-color-hover: #e499e4a2 !important;
  --metadata-property-background-active: #A32D7F52 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a32d7f !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #50125A94 !important;
  --modal-background: #211F23 !important;
  --modal-border-color: #A32D7F36 !important;
  --modal-radius: 5px !important;
  --nav-collapse-icon-color: #e499e4a2 !important;
  --nav-collapse-icon-color-collapsed: #e499e4a2 !important;
  --nav-heading-color: #d8bcd8 !important;
  --nav-heading-color-collapsed: #e499e4a2 !important;
  --nav-heading-color-collapsed-hover: #e499e4a2 !important;
  --nav-heading-color-hover: #d8bcd8 !important;
  --nav-indentation-guide-color: #A32D7F36 !important;
  --nav-item-background-active: #A32D7F52 !important;
  --nav-item-background-hover: #A32D7F52 !important;
  --nav-item-background-selected: #A32D7F36 !important;
  --nav-item-color: #d8bcd8 !important;
  --nav-item-color-active: #d8bcd8 !important;
  --nav-item-color-highlighted: #D560B1 !important;
  --nav-item-color-hover: #d8bcd8 !important;
  --nav-item-color-selected: #d8bcd8 !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: #e499e4a2 !important;
  --nav-tag-color-active: #e499e4a2 !important;
  --nav-tag-color-hover: #e499e4a2 !important;
  --nav-tag-radius: 5px !important;
  --pdf-background: #211F23 !important;
  --pdf-page-background: #211F23 !important;
  --pdf-shadow: 0 0 0 1px #A32D7F36 !important;
  --pdf-sidebar-background: #211F23 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #A32D7F36 !important;
  --pill-border-color: #A32D7F36 !important;
  --pill-border-color-hover: #50125A94 !important;
  --pill-color: #e499e4a2 !important;
  --pill-color-hover: #d8bcd8 !important;
  --pill-color-remove: #e499e4a2 !important;
  --pill-color-remove-hover: #D560B1 !important;
  --prompt-background: #211F23 !important;
  --prompt-border-color: #a32d7f !important;
  --quote-opening-modifier: #50125A94 !important;
  --radius-l: 5px !important;
  --radius-m: 5px !important;
  --radius-s: 5px !important;
  --raised-background: color-mix(in srgb, #A32D7F36 65%, transparent) linear-gradient(#A32D7F36, color-mix(in srgb, #A32D7F36 65%, transparent)) !important;
  --ribbon-background: #2C1C27 !important;
  --ribbon-background-collapsed: #211F23 !important;
  --scrollbar-active-thumb-bg: #a32d7f !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-radius: 5px !important;
  --scrollbar-thumb-bg: #A32D7F36 !important;
  --search-clear-button-color: #e499e4a2 !important;
  --search-icon-color: #e499e4a2 !important;
  --search-result-background: #211F23 !important;
  --secondary: #D560B1 !important;
  --setting-group-heading-color: #d8bcd8 !important;
  --setting-items-background: #211F23 !important;
  --setting-items-border-color: #A32D7F36 !important;
  --setting-items-radius: 5px !important;
  --slider-thumb-border-color: #50125A94 !important;
  --slider-thumb-radius: 2px !important;
  --slider-track-background: #A32D7F36 !important;
  --status-bar-background: #2C1C27 !important;
  --status-bar-border-color: #A32D7F36 !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: #e499e4a2 !important;
  --suggestion-background: #211F23 !important;
  --tab-background-active: #211F23 !important;
  --tab-container-background: #2C1C27 !important;
  --tab-divider-color: #50125A94 !important;
  --tab-outline-color: #A32D7F36 !important;
  --tab-radius: 5px !important;
  --tab-radius-active: 1px !important;
  --tab-switcher-background: #2C1C27 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2C1C27, transparent) !important;
  --tab-text-color: #e499e4a2 !important;
  --tab-text-color-active: #e499e4a2 !important;
  --tab-text-color-focused: #e499e4a2 !important;
  --tab-text-color-focused-active: #d8bcd8 !important;
  --tab-text-color-focused-active-current: #d8bcd8 !important;
  --tab-text-color-focused-highlighted: #D560B1 !important;
  --table-add-button-border-color: #A32D7F36 !important;
  --table-border-color: #A32D7F36 !important;
  --table-drag-handle-background-active: #a32d7f !important;
  --table-drag-handle-color: #e499e4a2 !important;
  --table-header-border-color: #A32D7F36 !important;
  --table-header-color: #d8bcd8 !important;
  --table-selection-border-color: #a32d7f !important;
  --tag-color: #D560B1 !important;
  --tag-color-hover: #D560B1 !important;
  --tertiary: #D560B1 !important;
  --text-accent: #D560B1 !important;
  --text-accent-hover: #D560B1 !important;
  --text-blockquote: #e499e4a2 !important;
  --text-bold: #d8bcd8 !important;
  --text-code: #e499e4a2 !important;
  --text-error: #f1637d !important;
  --text-faint: #e499e4a2 !important;
  --text-formatting: #9c4296 !important;
  --text-highlight-bg: #A32D7F52 !important;
  --text-italic: #d8bcd8 !important;
  --text-muted: #e499e4a2 !important;
  --text-normal: #d8bcd8 !important;
  --text-selection: #e499e4a2 !important;
  --textHighlight: #A32D7F52 !important;
  --titlebar-background: #2C1C27 !important;
  --titlebar-background-focused: #2C1C27 !important;
  --titlebar-border-color: #2C1C27 !important;
  --titlebar-text-color: #d8bcd8 !important;
  --titlebar-text-color-focused: #d8bcd8 !important;
  --toggle-radius: 2px !important;
  --toggle-thumb-radius: 2px !important;
  --txi: #e499e4a2 !important;
  --txt: #d8bcd8 !important;
  --vault-profile-color: #d8bcd8 !important;
  --vault-profile-color-hover: #d8bcd8 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(44, 28, 39);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(33, 31, 35);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(44, 28, 39);
  border-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(213, 96, 177);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(44, 28, 39);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(44, 28, 39);
  border-left-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(33, 31, 35);
  color: rgb(216, 188, 216);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(156, 66, 150);
  outline: rgb(156, 66, 150) none 0px;
  text-decoration-color: rgb(156, 66, 150);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(243, 150, 122);
  outline: rgb(243, 150, 122) none 0px;
  text-decoration-color: rgb(243, 150, 122);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(243, 150, 122);
  outline: rgb(243, 150, 122) none 0px;
  text-decoration-color: rgb(243, 150, 122);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(156, 66, 150);
  outline: rgb(156, 66, 150) none 0px;
  text-decoration-color: rgb(156, 66, 150);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(163, 45, 127, 0.32);
  color: rgb(216, 188, 216);
  outline: rgb(216, 188, 216) none 0px;
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body del {
  color: rgb(216, 188, 216);
  outline: rgb(216, 188, 216) none 0px;
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(228, 153, 228, 0.635);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgba(228, 153, 228, 0.635);
  outline: rgba(228, 153, 228, 0.635) none 0px;
  text-decoration-color: rgba(228, 153, 228, 0.635);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
  text-decoration-color: rgb(213, 96, 177);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
  text-decoration-color: rgb(213, 96, 177);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body dt {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(228, 153, 228, 0.635);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body table {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(216, 188, 216);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec02";
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec08";
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec05";
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\e900";
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec17";
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec32";
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec06";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgba(228, 153, 228, 0.635);
  content: "\\ec03";
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec03";
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec33";
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec20";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec15";
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec10";
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec29";
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec12";
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec25";
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec04";
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec18";
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\e81e";
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec28";
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec30";
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec09";
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec16";
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec21";
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec14";
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec24";
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(138, 92, 245);
  content: "\\e805";
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec19";
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec11";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec13";
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec22";
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec07";
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec31";
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec27";
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec26";
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\e813";
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(213, 96, 177);
  content: "\\ec01";
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(216, 188, 216);
  outline: rgb(216, 188, 216) none 0px;
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(163, 45, 127, 0.32);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(44, 28, 39);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(213, 96, 177);
}

html[saved-theme="dark"] body h1 {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body h2 {
  color: rgb(196, 165, 196);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body h3 {
  color: rgb(172, 129, 172);
}

html[saved-theme="dark"] body h4 {
  color: rgb(148, 106, 148);
}

html[saved-theme="dark"] body h5 {
  color: rgb(131, 87, 131);
}

html[saved-theme="dark"] body h6 {
  color: rgb(128, 83, 128);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(163, 45, 127, 0.21);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(216, 188, 216);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(44, 28, 39);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(228, 153, 228, 0.635);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(216, 188, 216);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(216, 188, 216);
  stroke: rgb(216, 188, 216);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(228, 153, 228, 0.635);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(44, 28, 39);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body abbr {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body sub {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body summary {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body sup {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(213, 96, 177);
}`,
  },
  light: {
    base: `:root:root {
  --AccentA1: #a32d7f !important;
  --AccentA2: #D560B1 !important;
  --Axt: #A32D7F36 !important;
  --Axt2: #d5acdc94 !important;
  --Bgcl: #A32D7F52 !important;
  --Bgnd: hsla(300, 30%, 92%, 1) !important;
  --EBgnd: hsla(89, 58%, 95%, 1) !important;
  --background-modifier-accent: #D560B1 !important;
  --background-modifier-active-hover: #A32D7F52 !important;
  --background-modifier-border: #A32D7F36 !important;
  --background-modifier-border-focus: #a32d7f !important;
  --background-modifier-border-hover: #d5acdc94 !important;
  --background-modifier-form-field: hsla(89, 58%, 95%, 1) !important;
  --background-modifier-form-field-highlighted: hsla(89, 58%, 95%, 1) !important;
  --background-modifier-form-field-hover: hsla(89, 58%, 95%, 1) !important;
  --background-modifier-hover: #A32D7F52 !important;
  --background-primary: hsla(89, 58%, 95%, 1) !important;
  --background-primary-alt: hsla(89, 58%, 95%, 1) !important;
  --background-secondary: hsla(300, 30%, 92%, 1) !important;
  --background-secondary-alt: hsla(89, 58%, 95%, 1) !important;
  --background-table-rows: hsla(300, 30%, 92%, 1) !important;
  --bases-cards-background: hsla(89, 58%, 95%, 1) !important;
  --bases-cards-cover-background: hsla(89, 58%, 95%, 1) !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #A32D7F36 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #d5acdc94 !important;
  --bases-embed-border-color: #A32D7F36 !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: #412438cd !important;
  --bases-table-border-color: #A32D7F36 !important;
  --bases-table-cell-background-active: hsla(89, 58%, 95%, 1) !important;
  --bases-table-cell-background-disabled: hsla(89, 58%, 95%, 1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #a32d7f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a32d7f !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-group-background: hsla(89, 58%, 95%, 1) !important;
  --bases-table-header-background: hsla(89, 58%, 95%, 1) !important;
  --bases-table-header-background-hover: #A32D7F52 !important;
  --bases-table-header-color: #412438cd !important;
  --bases-table-summary-background: hsla(89, 58%, 95%, 1) !important;
  --bases-table-summary-background-hover: #A32D7F52 !important;
  --blockquote-border-color: #a32d7f !important;
  --blur-background: color-mix(in srgb, hsla(89, 58%, 95%, 1) 65%, transparent) linear-gradient(hsla(89, 58%, 95%, 1), color-mix(in srgb, hsla(89, 58%, 95%, 1) 65%, transparent)) !important;
  --bold-color: #24262a !important;
  --callout-radius: 5px;
  --canvas-background: hsla(89, 58%, 95%, 1) !important;
  --canvas-card-label-color: #412438cd !important;
  --canvas-controls-radius: 5px !important;
  --canvas-dot-pattern: #A32D7F36 !important;
  --caret-color: #30222b !important;
  --chbx-B: 216, 188, 216 !important;
  --chbx-C: 241, 99, 125 !important;
  --chbx-I: 243, 150, 122 !important;
  --chbx-N: 216, 188, 216 !important;
  --chbx-P: 200, 216, 155 !important;
  --chbx-R: 200, 216, 155 !important;
  --chbx-a: 241, 99, 125 !important;
  --chbx-b: 243, 150, 122 !important;
  --chbx-c: 163, 45, 127 !important;
  --chbx-d: 163, 45, 127 !important;
  --chbx-h: 216, 188, 216 !important;
  --chbx-i: 241, 99, 125 !important;
  --chbx-id: 243, 150, 122 !important;
  --chbx-q: 243, 150, 122 !important;
  --chbx-r: 243, 150, 122 !important;
  --checkbox-border-color: #412438cd !important;
  --checkbox-border-color-hover: #412438cd !important;
  --checkbox-color: #a32d7f !important;
  --checkbox-color-hover: #D560B1 !important;
  --checkbox-marker-color: hsla(89, 58%, 95%, 1) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: #412438cd !important;
  --clickable-icon-radius: 5px !important;
  --code-background: hsla(89, 58%, 95%, 1) !important;
  --code-border-color: #A32D7F36 !important;
  --code-bracket-background: #A32D7F52 !important;
  --code-comment: #412438cd !important;
  --code-normal: #412438cd !important;
  --code-punctuation: #412438cd !important;
  --code-radius: 5px !important;
  --collapse-icon-color: #412438cd !important;
  --collapse-icon-color-collapsed: #D560B1 !important;
  --color-base-00: hsla(89, 58%, 95%, 1) !important;
  --color-base-05: hsla(89, 58%, 95%, 1) !important;
  --color-base-10: hsla(89, 58%, 95%, 1) !important;
  --color-base-100: #412438 !important;
  --color-base-20: hsla(300, 30%, 92%, 1) !important;
  --color-base-25: #412438 !important;
  --color-base-30: #A32D7F36 !important;
  --color-base-35: #c8a2c85f !important;
  --color-base-40: #A32D7F36 !important;
  --color-base-50: #412438cd !important;
  --color-base-60: #412438 !important;
  --color-base-70: #412438 !important;
  --color-scheme: light !important;
  --dark: #30222b !important;
  --darkgray: #30222b !important;
  --divider-color: #A32D7F36 !important;
  --divider-color-hover: #a32d7f !important;
  --dropdown-background: hsla(300, 30%, 92%, 1) !important;
  --dropdown-background-hover: hsla(300, 30%, 92%, 1) !important;
  --dropdown-background-normal: hsla(300, 30%, 92%, 1) !important;
  --embed-block-shadow-hover: 0 0 0 1px #A32D7F36, inset 0 0 0 1px #A32D7F36 !important;
  --embed-border-start: 2px solid #a32d7f !important;
  --file-header-background: hsla(89, 58%, 95%, 1) !important;
  --file-header-background-focused: hsla(89, 58%, 95%, 1) !important;
  --flair-background: hsla(89, 58%, 95%, 1) !important;
  --flair-color: #30222b !important;
  --footnote-divider-color: #A32D7F36 !important;
  --footnote-id-color: #412438cd !important;
  --footnote-id-color-no-occurrences: #412438cd !important;
  --footnote-input-background-active: #A32D7F52 !important;
  --footnote-radius: 5px !important;
  --frame-divider-color: #A32D7F36 !important;
  --graph-line: #c8a2c85f !important;
  --graph-node: #C8A2C8 !important;
  --graph-node-attachment: #412438 !important;
  --graph-node-focused: #D560B1 !important;
  --graph-node-tag: #C8D89BDB !important;
  --graph-node-unresolved: #412438cd !important;
  --graph-text: #30222b !important;
  --gray: #412438cd !important;
  --heading-formatting: #412438cd !important;
  --highlight: #A32D7F52 !important;
  --hr-color: #A32D7F36 !important;
  --icon-color: #24262a !important;
  --icon-color-active: #30222b !important;
  --icon-color-focused: #30222b !important;
  --icon-color-hover: #412438cd !important;
  --input-date-separator: #412438cd !important;
  --input-placeholder-color: #412438cd !important;
  --interactive-accent: #a32d7f !important;
  --interactive-accent-hover: #D560B1 !important;
  --interactive-hover: #A32D7F36 !important;
  --interactive-normal: hsla(89, 58%, 95%, 1) !important;
  --italic-color: #FCA287 !important;
  --its: "its" !important;
  --light: hsla(89, 58%, 95%, 1) !important;
  --lightgray: hsla(300, 30%, 92%, 1) !important;
  --link-color: #D560B1 !important;
  --link-color-hover: #D560B1 !important;
  --link-external-color: #D560B1 !important;
  --link-external-color-hover: #D560B1 !important;
  --link-unresolved-color: #D560B1 !important;
  --list-marker-color: #412438cd !important;
  --list-marker-color-collapsed: #D560B1 !important;
  --list-marker-color-hover: #412438cd !important;
  --menu-background: hsla(300, 30%, 92%, 1) !important;
  --menu-border-color: #d5acdc94 !important;
  --menu-radius: 5px !important;
  --metadata-border-color: #A32D7F36 !important;
  --metadata-divider-color: #A32D7F36 !important;
  --metadata-input-background-active: #A32D7F52 !important;
  --metadata-input-text-color: #30222b !important;
  --metadata-label-background-active: #A32D7F52 !important;
  --metadata-label-text-color: #412438cd !important;
  --metadata-label-text-color-hover: #412438cd !important;
  --metadata-property-background-active: #A32D7F52 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a32d7f !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d5acdc94 !important;
  --modal-background: hsla(89, 58%, 95%, 1) !important;
  --modal-border-color: #A32D7F36 !important;
  --modal-radius: 5px !important;
  --nav-collapse-icon-color: #412438cd !important;
  --nav-collapse-icon-color-collapsed: #412438cd !important;
  --nav-heading-color: #30222b !important;
  --nav-heading-color-collapsed: #412438cd !important;
  --nav-heading-color-collapsed-hover: #412438cd !important;
  --nav-heading-color-hover: #30222b !important;
  --nav-indentation-guide-color: #A32D7F36 !important;
  --nav-item-background-active: #A32D7F52 !important;
  --nav-item-background-hover: #A32D7F52 !important;
  --nav-item-background-selected: #A32D7F36 !important;
  --nav-item-color: #30222b !important;
  --nav-item-color-active: #30222b !important;
  --nav-item-color-highlighted: #D560B1 !important;
  --nav-item-color-hover: #30222b !important;
  --nav-item-color-selected: #30222b !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: #412438cd !important;
  --nav-tag-color-active: #412438cd !important;
  --nav-tag-color-hover: #412438cd !important;
  --nav-tag-radius: 5px !important;
  --pdf-background: hsla(89, 58%, 95%, 1) !important;
  --pdf-page-background: hsla(89, 58%, 95%, 1) !important;
  --pdf-sidebar-background: hsla(89, 58%, 95%, 1) !important;
  --pill-border-color: #A32D7F36 !important;
  --pill-border-color-hover: #d5acdc94 !important;
  --pill-color: #412438cd !important;
  --pill-color-hover: #30222b !important;
  --pill-color-remove: #412438cd !important;
  --pill-color-remove-hover: #D560B1 !important;
  --prompt-background: hsla(89, 58%, 95%, 1) !important;
  --prompt-border-color: #a32d7f !important;
  --quote-opening-modifier: #d5acdc94 !important;
  --radius-l: 5px !important;
  --radius-m: 5px !important;
  --radius-s: 5px !important;
  --raised-background: color-mix(in srgb, hsla(89, 58%, 95%, 1) 65%, transparent) linear-gradient(hsla(89, 58%, 95%, 1), color-mix(in srgb, hsla(89, 58%, 95%, 1) 65%, transparent)) !important;
  --ribbon-background: hsla(300, 30%, 92%, 1) !important;
  --ribbon-background-collapsed: hsla(89, 58%, 95%, 1) !important;
  --scrollbar-active-thumb-bg: #a32d7f !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-radius: 5px !important;
  --scrollbar-thumb-bg: #A32D7F36 !important;
  --search-clear-button-color: #412438cd !important;
  --search-icon-color: #412438cd !important;
  --search-result-background: hsla(89, 58%, 95%, 1) !important;
  --secondary: #D560B1 !important;
  --setting-group-heading-color: #30222b !important;
  --setting-items-background: hsla(89, 58%, 95%, 1) !important;
  --setting-items-border-color: #A32D7F36 !important;
  --setting-items-radius: 5px !important;
  --slider-thumb-border-color: #d5acdc94 !important;
  --slider-thumb-radius: 2px !important;
  --slider-track-background: #A32D7F36 !important;
  --status-bar-background: hsla(300, 30%, 92%, 1) !important;
  --status-bar-border-color: #A32D7F36 !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: #412438cd !important;
  --suggestion-background: hsla(89, 58%, 95%, 1) !important;
  --tab-background-active: hsla(89, 58%, 95%, 1) !important;
  --tab-container-background: hsla(300, 30%, 92%, 1) !important;
  --tab-divider-color: #d5acdc94 !important;
  --tab-outline-color: #A32D7F36 !important;
  --tab-radius: 5px !important;
  --tab-radius-active: 1px !important;
  --tab-switcher-background: hsla(300, 30%, 92%, 1) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(300, 30%, 92%, 1), transparent) !important;
  --tab-text-color: #412438cd !important;
  --tab-text-color-active: #412438cd !important;
  --tab-text-color-focused: #412438cd !important;
  --tab-text-color-focused-active: #30222b !important;
  --tab-text-color-focused-active-current: #30222b !important;
  --tab-text-color-focused-highlighted: #D560B1 !important;
  --table-add-button-border-color: #A32D7F36 !important;
  --table-border-color: #A32D7F36 !important;
  --table-drag-handle-background-active: #a32d7f !important;
  --table-drag-handle-color: #412438cd !important;
  --table-header-border-color: #A32D7F36 !important;
  --table-header-color: #30222b !important;
  --table-selection-border-color: #a32d7f !important;
  --tag-color: #D560B1 !important;
  --tag-color-hover: #D560B1 !important;
  --tertiary: #D560B1 !important;
  --text-accent: #D560B1 !important;
  --text-accent-hover: #D560B1 !important;
  --text-blockquote: #412438cd !important;
  --text-bold: #30222b !important;
  --text-code: #412438cd !important;
  --text-error: #f1637d !important;
  --text-faint: #412438cd !important;
  --text-formatting: #635e6a !important;
  --text-highlight-bg: #A32D7F52 !important;
  --text-italic: #30222b !important;
  --text-muted: #412438cd !important;
  --text-normal: #30222b !important;
  --text-selection: #a32d8053 !important;
  --textHighlight: #A32D7F52 !important;
  --titlebar-background: hsla(300, 30%, 92%, 1) !important;
  --titlebar-background-focused: hsla(300, 30%, 92%, 1) !important;
  --titlebar-border-color: hsla(300, 30%, 92%, 1) !important;
  --titlebar-text-color: #30222b !important;
  --titlebar-text-color-focused: #30222b !important;
  --toggle-radius: 2px !important;
  --toggle-thumb-radius: 2px !important;
  --txi: #412438cd !important;
  --txt: #30222b !important;
  --vault-profile-color: #30222b !important;
  --vault-profile-color-hover: #30222b !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(241, 228, 241);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(242, 250, 235);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(242, 250, 235);
  border-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(213, 96, 177);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(241, 228, 241);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(241, 228, 241);
  border-left-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(242, 250, 235);
  color: rgb(48, 34, 43);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(36, 38, 42);
  outline: rgb(36, 38, 42) none 0px;
  text-decoration-color: rgb(36, 38, 42);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(252, 162, 135);
  outline: rgb(252, 162, 135) none 0px;
  text-decoration-color: rgb(252, 162, 135);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(252, 162, 135);
  outline: rgb(252, 162, 135) none 0px;
  text-decoration-color: rgb(252, 162, 135);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(36, 38, 42);
  outline: rgb(36, 38, 42) none 0px;
  text-decoration-color: rgb(36, 38, 42);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(163, 45, 127, 0.32);
  color: rgb(48, 34, 43);
  outline: rgb(48, 34, 43) none 0px;
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body del {
  color: rgb(48, 34, 43);
  outline: rgb(48, 34, 43) none 0px;
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(65, 36, 56, 0.804);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgba(65, 36, 56, 0.804);
  outline: rgba(65, 36, 56, 0.804) none 0px;
  text-decoration-color: rgba(65, 36, 56, 0.804);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
  text-decoration-color: rgb(213, 96, 177);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
  text-decoration-color: rgb(213, 96, 177);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body dt {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ol > li {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ul > li {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(65, 36, 56, 0.804);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body table {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body figcaption {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(48, 34, 43);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec02";
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec08";
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec05";
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\e900";
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec17";
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec32";
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec06";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgba(65, 36, 56, 0.804);
  content: "\\ec03";
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(48, 34, 43);
  content: "\\ec03";
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec33";
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec20";
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec15";
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec10";
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec29";
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec12";
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec25";
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec04";
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec18";
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\e81e";
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec28";
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec30";
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec09";
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec16";
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec21";
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec14";
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec24";
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(138, 92, 245);
  content: "\\e805";
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec19";
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec11";
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec13";
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec22";
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec07";
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec31";
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec27";
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec26";
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\e813";
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(213, 96, 177);
  content: "\\ec01";
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(48, 34, 43);
  outline: rgb(48, 34, 43) none 0px;
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 34, 43);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(163, 45, 127, 0.32);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(241, 228, 241);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-color: rgb(48, 34, 43);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(213, 96, 177);
}

html[saved-theme="light"] body h1 {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body h2 {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body h3 {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body h4 {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body h5 {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body h6 {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(163, 45, 127, 0.21);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(48, 34, 43);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(36, 38, 42);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(36, 38, 42);
  border-right-color: rgb(36, 38, 42);
  border-top-color: rgb(36, 38, 42);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(36, 38, 42);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(241, 228, 241);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(65, 36, 56, 0.804);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(48, 34, 43);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(36, 38, 42);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(36, 38, 42);
  border-right-color: rgb(36, 38, 42);
  border-top-color: rgb(36, 38, 42);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(36, 38, 42);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(36, 38, 42);
  stroke: rgb(36, 38, 42);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(65, 36, 56, 0.804);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(241, 228, 241);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body abbr {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body sub {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body summary {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body sup {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(213, 96, 177);
}`,
  },
};
