import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wilcoxone",
    modes: ["dark"],
    variations: [],
    fonts: ["lato", "fira-code"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: hsl(231, 49%, 39%) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: hsl(227, 66%, 9%) !important;
  --background-primary-alt: hsl(227, 66%, 11%) !important;
  --background-secondary: hsl(227, 56%, 13%) !important;
  --background-secondary-alt: hsl(227, 56%, 16%) !important;
  --bases-cards-background: hsl(227, 66%, 9%) !important;
  --bases-cards-cover-background: hsl(227, 66%, 11%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(231, 49%, 39%) !important;
  --bases-embed-border-color: hsl(231, 49%, 39%) !important;
  --bases-group-heading-property-color: #999 !important;
  --bases-table-border-color: hsl(231, 49%, 39%) !important;
  --bases-table-cell-background-active: hsl(227, 66%, 9%) !important;
  --bases-table-cell-background-disabled: hsl(227, 66%, 11%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #483699 !important;
  --bases-table-group-background: hsl(227, 66%, 11%) !important;
  --bases-table-header-background: hsl(227, 66%, 9%) !important;
  --bases-table-header-color: #999 !important;
  --bases-table-summary-background: hsl(227, 66%, 9%) !important;
  --blockquote-border-color: #483699 !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: hsl(227, 66%, 9%) !important;
  --canvas-card-label-color: #999 !important;
  --caret-color: hsl(109, 19%, 92%) !important;
  --checkbox-border-color: #999 !important;
  --checkbox-border-color-hover: #999 !important;
  --checkbox-color: #483699 !important;
  --checkbox-color-hover: #4d3ca6 !important;
  --checkbox-marker-color: hsl(227, 66%, 9%) !important;
  --checklist-done-color: #999 !important;
  --code-background: hsl(227, 66%, 11%) !important;
  --code-border-color: hsl(231, 49%, 39%) !important;
  --code-comment: #999 !important;
  --code-normal: hsl(109, 19%, 92%) !important;
  --code-punctuation: #999 !important;
  --codeFont: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #999 !important;
  --collapse-icon-color-collapsed: hsl(176, 16%, 64%) !important;
  --color-1-1: hsl(227, 66%, 9%) !important;
  --color-1-1-alt: hsl(227, 66%, 11%) !important;
  --color-1-2: hsl(227, 56%, 13%) !important;
  --color-1-2-alt: hsl(227, 56%, 16%) !important;
  --color-2: hsl(231, 49%, 39%) !important;
  --color-3: hsl(109, 9%, 39%) !important;
  --color-3-alt: hsl(109, 9%, 19%) !important;
  --color-4: hsl(109, 19%, 92%) !important;
  --color-4-alt: hsl(109, 9%, 82%) !important;
  --color-5: hsl(176, 16%, 64%) !important;
  --color-5-alt: hsl(176, 16%, 70%) !important;
  --dark: hsl(109, 19%, 92%) !important;
  --darkgray: hsl(109, 19%, 92%) !important;
  --default-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif !important;
  --divider-color: hsl(231, 49%, 39%) !important;
  --divider-color-hover: #483699 !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(231, 49%, 39%), inset 0 0 0 1px hsl(231, 49%, 39%) !important;
  --embed-border-start: 2px solid #483699 !important;
  --fast: 0.1s !important;
  --file-header-background: hsl(227, 66%, 9%) !important;
  --file-header-background-focused: hsl(227, 66%, 9%) !important;
  --file-header-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #2a2a2a !important;
  --flair-color: hsl(109, 19%, 92%) !important;
  --font-interface: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: hsl(231, 49%, 39%) !important;
  --footnote-id-color: #999 !important;
  --footnote-id-color-no-occurrences: #999 !important;
  --graph-node: #999 !important;
  --graph-node-focused: hsl(176, 16%, 64%) !important;
  --graph-node-unresolved: #999 !important;
  --graph-text: hsl(109, 19%, 92%) !important;
  --gray: #999 !important;
  --headerFont: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #999 !important;
  --highlight: hsl(231, 49%, 39%) !important;
  --hr-color: hsl(231, 49%, 39%) !important;
  --icon-color: #999 !important;
  --icon-color-active: hsl(176, 16%, 64%) !important;
  --icon-color-focused: hsl(109, 19%, 92%) !important;
  --icon-color-hover: #999 !important;
  --input-date-separator: #999 !important;
  --input-placeholder-color: #999 !important;
  --interactive-accent: #483699 !important;
  --interactive-accent-hover: #4d3ca6 !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --interactive-success: #197300 !important;
  --light: hsl(227, 66%, 9%) !important;
  --lightgray: hsl(227, 56%, 13%) !important;
  --link-color: hsl(176, 16%, 64%) !important;
  --link-color-hover: hsl(176, 16%, 70%) !important;
  --link-external-color: hsl(176, 16%, 64%) !important;
  --link-external-color-hover: hsl(176, 16%, 70%) !important;
  --link-unresolved-color: hsl(176, 16%, 64%) !important;
  --list-marker-color: #999 !important;
  --list-marker-color-collapsed: hsl(176, 16%, 64%) !important;
  --list-marker-color-hover: #999 !important;
  --medium: 0.2s !important;
  --menu-background: hsl(227, 56%, 13%) !important;
  --mermaid-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif !important;
  --metadata-border-color: hsl(231, 49%, 39%) !important;
  --metadata-divider-color: hsl(231, 49%, 39%) !important;
  --metadata-input-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(109, 19%, 92%) !important;
  --metadata-label-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #999 !important;
  --metadata-label-text-color-hover: #999 !important;
  --modal-background: hsl(227, 66%, 9%) !important;
  --nav-collapse-icon-color: #999 !important;
  --nav-collapse-icon-color-collapsed: #999 !important;
  --nav-heading-color: hsl(109, 19%, 92%) !important;
  --nav-heading-color-collapsed: #999 !important;
  --nav-heading-color-collapsed-hover: #999 !important;
  --nav-heading-color-hover: hsl(109, 19%, 92%) !important;
  --nav-item-color: #999 !important;
  --nav-item-color-active: hsl(109, 19%, 92%) !important;
  --nav-item-color-highlighted: hsl(176, 16%, 64%) !important;
  --nav-item-color-hover: hsl(109, 19%, 92%) !important;
  --nav-item-color-selected: hsl(109, 19%, 92%) !important;
  --nav-tag-color: #999 !important;
  --nav-tag-color-active: #999 !important;
  --nav-tag-color-hover: #999 !important;
  --pdf-background: hsl(227, 66%, 9%) !important;
  --pdf-page-background: hsl(227, 66%, 9%) !important;
  --pdf-shadow: 0 0 0 1px hsl(231, 49%, 39%) !important;
  --pdf-sidebar-background: hsl(227, 66%, 9%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(231, 49%, 39%) !important;
  --pill-border-color: hsl(231, 49%, 39%) !important;
  --pill-color: #999 !important;
  --pill-color-hover: hsl(109, 19%, 92%) !important;
  --pill-color-remove: #999 !important;
  --pill-color-remove-hover: hsl(176, 16%, 64%) !important;
  --prompt-background: hsl(227, 66%, 9%) !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --reveal-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif !important;
  --ribbon-background: hsl(227, 56%, 13%) !important;
  --ribbon-background-collapsed: hsl(227, 66%, 9%) !important;
  --search-clear-button-color: #999 !important;
  --search-icon-color: #999 !important;
  --search-result-background: hsl(227, 66%, 9%) !important;
  --secondary: hsl(176, 16%, 64%) !important;
  --setting-group-heading-color: hsl(109, 19%, 92%) !important;
  --setting-items-background: hsl(227, 66%, 11%) !important;
  --setting-items-border-color: hsl(231, 49%, 39%) !important;
  --slider-track-background: hsl(231, 49%, 39%) !important;
  --slow: 0.5s !important;
  --status-bar-background: hsl(227, 56%, 13%) !important;
  --status-bar-border-color: hsl(231, 49%, 39%) !important;
  --status-bar-text-color: #999 !important;
  --suggestion-background: hsl(227, 66%, 9%) !important;
  --tab-background-active: hsl(227, 66%, 9%) !important;
  --tab-container-background: hsl(227, 56%, 13%) !important;
  --tab-outline-color: hsl(231, 49%, 39%) !important;
  --tab-switcher-background: hsl(227, 56%, 13%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(227, 56%, 13%), transparent) !important;
  --tab-text-color: #999 !important;
  --tab-text-color-active: #999 !important;
  --tab-text-color-focused: #999 !important;
  --tab-text-color-focused-active: #999 !important;
  --tab-text-color-focused-active-current: hsl(109, 19%, 92%) !important;
  --tab-text-color-focused-highlighted: hsl(176, 16%, 64%) !important;
  --table-add-button-border-color: hsl(231, 49%, 39%) !important;
  --table-border-color: hsl(231, 49%, 39%) !important;
  --table-drag-handle-background-active: #483699 !important;
  --table-drag-handle-color: #999 !important;
  --table-drag-handle-color-active: hsl(109, 19%, 92%) !important;
  --table-header-border-color: hsl(231, 49%, 39%) !important;
  --table-header-color: hsl(109, 19%, 92%) !important;
  --table-selection-border-color: #483699 !important;
  --tag-color: hsl(176, 16%, 64%) !important;
  --tag-color-hover: hsl(176, 16%, 64%) !important;
  --tertiary: hsl(176, 16%, 70%) !important;
  --text-accent: hsl(176, 16%, 64%) !important;
  --text-accent-hover: hsl(176, 16%, 70%) !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #999 !important;
  --text-highlight-bg: hsl(231, 49%, 39%) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #999 !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: hsl(109, 19%, 92%) !important;
  --text-on-accent: hsl(109, 19%, 92%) !important;
  --text-selection: rgba(23, 48, 77, 0.99) !important;
  --textHighlight: hsl(231, 49%, 39%) !important;
  --titleFont: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(227, 56%, 13%) !important;
  --titlebar-background-focused: hsl(227, 56%, 16%) !important;
  --titlebar-border-color: hsl(231, 49%, 39%) !important;
  --titlebar-text-color: #999 !important;
  --titlebar-text-color-focused: hsl(109, 19%, 92%) !important;
  --vault-profile-color: hsl(109, 19%, 92%) !important;
  --vault-profile-color-hover: hsl(109, 19%, 92%) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 23, 52);
  color: rgb(232, 238, 231);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(8, 14, 38);
  color: rgb(232, 238, 231);
}

html body .bases-table thead th {
  border-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
  font-weight: 700;
}

html body .canvas-node {
  border-color: rgb(232, 238, 231);
}

html body .canvas-node-content {
  color: rgb(232, 238, 231);
}

html body .canvas-node-file {
  color: rgb(232, 238, 231);
}

html body .canvas-node-group {
  border-color: rgb(232, 238, 231);
}

html body .canvas-sidebar {
  background-color: rgb(15, 23, 52);
  border-color: rgb(232, 238, 231);
}

html body .note-properties {
  border-color: rgb(51, 65, 148);
}

html body .note-properties-key {
  color: rgb(153, 153, 153);
  font-weight: 300;
}

html body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html body .note-properties-tags {
  color: rgb(149, 178, 176);
}

html body .note-properties-value {
  color: rgb(153, 153, 153);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 23, 52);
  color: rgb(232, 238, 231);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 65, 148);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 23, 52);
  border-left-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
}

html body div#quartz-root {
  background-color: rgb(8, 14, 38);
  color: rgb(232, 238, 231);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(232, 238, 231);
  font-weight: 400;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration-color: rgb(232, 238, 231);
}

html body .page article p > em, html em {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration-color: rgb(232, 238, 231);
}

html body .page article p > i, html i {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration-color: rgb(232, 238, 231);
}

html body .page article p > strong, html strong {
  color: rgb(232, 238, 231);
  font-weight: 400;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration-color: rgb(232, 238, 231);
}

html body .text-highlight {
  background-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration-color: rgb(232, 238, 231);
}

html body del {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration-color: rgb(232, 238, 231);
}

html body h1.article-title {
  color: rgb(232, 238, 231);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(72, 54, 153);
  border-color: rgb(72, 54, 153);
}

html body p {
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
  font-weight: 300;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html body a.external, html footer a {
  color: rgb(149, 178, 176);
  outline: rgb(149, 178, 176) none 0px;
  text-decoration: underline 1px rgb(72, 97, 66);
  text-decoration-color: rgb(72, 97, 66);
  text-decoration-thickness: 1px;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(149, 178, 176);
  outline: rgb(149, 178, 176) none 0px;
  text-decoration: underline 1px rgb(72, 97, 66);
  text-decoration-color: rgb(72, 97, 66);
  text-decoration-thickness: 1px;
}

html body a.internal.broken {
  color: rgb(149, 178, 176);
  outline: rgb(149, 178, 176) none 0px;
  text-decoration: underline 1px dashed rgba(138, 92, 245, 0.3);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `html body dd {
  color: rgb(232, 238, 231);
}

html body dt {
  color: rgb(232, 238, 231);
  font-weight: 300;
}

html body ol > li {
  color: rgb(232, 238, 231);
}

html body ol.overflow {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body ul > li {
  color: rgb(232, 238, 231);
}

html body ul.overflow {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: 1px rgb(72, 97, 66);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body table {
  color: rgb(232, 238, 231);
  width: 182.609px;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(10, 18, 47);
}

html body td {
  border-bottom-color: rgb(232, 238, 231);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 238, 231);
  border-left-width: 0px;
  border-right-color: rgb(232, 238, 231);
  border-right-width: 0px;
  border-top-color: rgb(232, 238, 231);
  border-top-width: 0px;
  color: rgb(232, 238, 231);
  font-weight: 300;
  padding-left: 0px;
  padding-right: 0px;
}

html body th {
  border-bottom-color: rgb(51, 65, 148);
  border-bottom-width: 0px;
  border-left-color: rgb(51, 65, 148);
  border-left-width: 0px;
  border-right-color: rgb(51, 65, 148);
  border-right-width: 0px;
  border-top-color: rgb(51, 65, 148);
  border-top-width: 0px;
  color: rgb(232, 238, 231);
  font-weight: 700;
  padding-bottom: 3px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 3px;
}`,
    code: `html body code {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(232, 238, 231);
  border-bottom-left-radius: 3.5px;
  border-bottom-right-radius: 3.5px;
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  border-top-left-radius: 3.5px;
  border-top-right-radius: 3.5px;
  color: rgb(232, 238, 231);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  padding-bottom: 16px;
  padding-top: 48px;
}

html body pre:has(> code) {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  padding-bottom: 16px;
  padding-top: 48px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body figcaption {
  color: rgb(232, 238, 231);
}

html body figure {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body img {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body video {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(15, 23, 52);
  border-left-style: solid;
  border-left-width: 8px;
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body .footnotes {
  background-color: rgb(10, 18, 47);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

html body .transclude {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(15, 23, 52);
  border-left-width: 8px;
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body .transclude-inner {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
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
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
  font-family: Lato, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(8, 14, 38);
}

html body .search > .search-container > .search-space > * {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration-color: rgb(232, 238, 231);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(232, 238, 231);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(232, 238, 231);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(232, 238, 231);
  font-weight: 300;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 23, 52);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(232, 238, 231);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

html body a.internal.tag-link::before {
  color: rgb(149, 178, 176);
}

html body h1 {
  color: rgb(232, 238, 231);
}

html body h2 {
  color: rgb(232, 238, 231);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(232, 238, 231);
}

html body h3 {
  color: rgb(232, 238, 231);
}

html body h4 {
  color: rgb(232, 238, 231);
}

html body h5 {
  color: rgb(232, 238, 231);
}

html body h6 {
  color: rgb(232, 238, 231);
}

html body hr {
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}

html body ::-webkit-scrollbar-track {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
  font-weight: 300;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
  font-weight: 300;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(232, 238, 231);
}

html body li.depth-0 {
  font-weight: 300;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `html body footer {
  background-color: rgb(15, 23, 52);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
}

html body footer ul li a {
  color: rgb(153, 153, 153);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(232, 238, 231);
  font-family: Lato, sans-serif;
  font-weight: 300;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
  font-family: Lato, sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
  font-family: Lato, sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html body ul.section-ul {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

html body .metadata {
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  color: rgb(153, 153, 153);
}

html body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html body .navigation-progress {
  background-color: rgb(15, 23, 52);
}

html body .page-header h2.page-title {
  color: rgb(232, 238, 231);
  font-family: "??", "??", Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(232, 238, 231);
}

html body details {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", "??", Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

html body progress {
  accent-color: rgb(149, 178, 176);
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body sub {
  color: rgb(232, 238, 231);
}

html body summary {
  color: rgb(232, 238, 231);
  font-weight: 300;
}

html body sup {
  color: rgb(232, 238, 231);
}

html body ul.tags > li {
  border-bottom-left-radius: 3.0625px;
  border-bottom-right-radius: 3.0625px;
  border-top-left-radius: 3.0625px;
  border-top-right-radius: 3.0625px;
  color: rgb(149, 178, 176);
}`,
  },
  light: {},
};
