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
  --background-modifier-border: rgb(51, 65, 148) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: rgb(8, 14, 38) !important;
  --background-primary-alt: rgb(10, 18, 47) !important;
  --background-secondary: rgb(15, 23, 52) !important;
  --background-secondary-alt: rgb(18, 28, 64) !important;
  --bases-cards-background: rgb(8, 14, 38) !important;
  --bases-cards-cover-background: rgb(10, 18, 47) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(51, 65, 148) !important;
  --bases-embed-border-color: rgb(51, 65, 148) !important;
  --bases-group-heading-property-color: #999 !important;
  --bases-table-border-color: rgb(51, 65, 148) !important;
  --bases-table-cell-background-active: rgb(8, 14, 38) !important;
  --bases-table-cell-background-disabled: rgb(10, 18, 47) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #483699 !important;
  --bases-table-group-background: rgb(10, 18, 47) !important;
  --bases-table-header-background: rgb(8, 14, 38) !important;
  --bases-table-header-color: #999 !important;
  --bases-table-summary-background: rgb(8, 14, 38) !important;
  --blockquote-border-color: #483699 !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(8, 14, 38) !important;
  --canvas-card-label-color: #999 !important;
  --caret-color: rgb(232, 238, 231) !important;
  --checkbox-border-color: #999 !important;
  --checkbox-border-color-hover: #999 !important;
  --checkbox-color: #483699 !important;
  --checkbox-color-hover: #4d3ca6 !important;
  --checkbox-marker-color: rgb(8, 14, 38) !important;
  --checklist-done-color: #999 !important;
  --code-background: rgb(10, 18, 47) !important;
  --code-border-color: rgb(51, 65, 148) !important;
  --code-comment: #999 !important;
  --code-normal: rgb(232, 238, 231) !important;
  --code-punctuation: #999 !important;
  --codeFont: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #999 !important;
  --collapse-icon-color-collapsed: rgb(149, 178, 176) !important;
  --color-1-1: rgb(8, 14, 38) !important;
  --color-1-1-alt: rgb(10, 18, 47) !important;
  --color-1-2: rgb(15, 23, 52) !important;
  --color-1-2-alt: rgb(18, 28, 64) !important;
  --color-2: rgb(51, 65, 148) !important;
  --color-3: rgb(94, 108, 90) !important;
  --color-3-alt: rgb(46, 53, 44) !important;
  --color-4: rgb(232, 238, 231) !important;
  --color-4-alt: rgb(206, 213, 205) !important;
  --color-5: rgb(149, 178, 176) !important;
  --color-5-alt: rgb(166, 191, 189) !important;
  --dark: rgb(232, 238, 231) !important;
  --darkgray: rgb(232, 238, 231) !important;
  --default-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif !important;
  --divider-color: rgb(51, 65, 148) !important;
  --divider-color-hover: #483699 !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(51, 65, 148), inset 0 0 0 1px rgb(51, 65, 148) !important;
  --embed-border-start: 2px solid #483699 !important;
  --fast: 0.1s !important;
  --file-header-background: rgb(8, 14, 38) !important;
  --file-header-background-focused: rgb(8, 14, 38) !important;
  --file-header-font: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #2a2a2a !important;
  --flair-color: rgb(232, 238, 231) !important;
  --font-interface: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgb(51, 65, 148) !important;
  --footnote-id-color: #999 !important;
  --footnote-id-color-no-occurrences: #999 !important;
  --graph-node: #999 !important;
  --graph-node-focused: rgb(149, 178, 176) !important;
  --graph-node-unresolved: #999 !important;
  --graph-text: rgb(232, 238, 231) !important;
  --gray: #999 !important;
  --headerFont: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #999 !important;
  --highlight: rgb(51, 65, 148) !important;
  --hr-color: rgb(51, 65, 148) !important;
  --icon-color: #999 !important;
  --icon-color-active: rgb(149, 178, 176) !important;
  --icon-color-focused: rgb(232, 238, 231) !important;
  --icon-color-hover: #999 !important;
  --input-date-separator: #999 !important;
  --input-placeholder-color: #999 !important;
  --interactive-accent: #483699 !important;
  --interactive-accent-hover: #4d3ca6 !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --interactive-success: #197300 !important;
  --light: rgb(8, 14, 38) !important;
  --lightgray: rgb(15, 23, 52) !important;
  --link-color: rgb(149, 178, 176) !important;
  --link-color-hover: rgb(166, 191, 189) !important;
  --link-external-color: rgb(149, 178, 176) !important;
  --link-external-color-hover: rgb(166, 191, 189) !important;
  --link-unresolved-color: rgb(149, 178, 176) !important;
  --list-marker-color: #999 !important;
  --list-marker-color-collapsed: rgb(149, 178, 176) !important;
  --list-marker-color-hover: #999 !important;
  --medium: 0.2s !important;
  --menu-background: rgb(15, 23, 52) !important;
  --mermaid-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif !important;
  --metadata-border-color: rgb(51, 65, 148) !important;
  --metadata-divider-color: rgb(51, 65, 148) !important;
  --metadata-input-font: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(232, 238, 231) !important;
  --metadata-label-font: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #999 !important;
  --metadata-label-text-color-hover: #999 !important;
  --modal-background: rgb(8, 14, 38) !important;
  --nav-collapse-icon-color: #999 !important;
  --nav-collapse-icon-color-collapsed: #999 !important;
  --nav-heading-color: rgb(232, 238, 231) !important;
  --nav-heading-color-collapsed: #999 !important;
  --nav-heading-color-collapsed-hover: #999 !important;
  --nav-heading-color-hover: rgb(232, 238, 231) !important;
  --nav-item-color: #999 !important;
  --nav-item-color-active: rgb(232, 238, 231) !important;
  --nav-item-color-highlighted: rgb(149, 178, 176) !important;
  --nav-item-color-hover: rgb(232, 238, 231) !important;
  --nav-item-color-selected: rgb(232, 238, 231) !important;
  --nav-tag-color: #999 !important;
  --nav-tag-color-active: #999 !important;
  --nav-tag-color-hover: #999 !important;
  --pdf-background: rgb(8, 14, 38) !important;
  --pdf-page-background: rgb(8, 14, 38) !important;
  --pdf-shadow: 0 0 0 1px rgb(51, 65, 148) !important;
  --pdf-sidebar-background: rgb(8, 14, 38) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(51, 65, 148) !important;
  --pill-border-color: rgb(51, 65, 148) !important;
  --pill-color: #999 !important;
  --pill-color-hover: rgb(232, 238, 231) !important;
  --pill-color-remove: #999 !important;
  --pill-color-remove-hover: rgb(149, 178, 176) !important;
  --prompt-background: rgb(8, 14, 38) !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --reveal-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif !important;
  --ribbon-background: rgb(15, 23, 52) !important;
  --ribbon-background-collapsed: rgb(8, 14, 38) !important;
  --search-clear-button-color: #999 !important;
  --search-icon-color: #999 !important;
  --search-result-background: rgb(8, 14, 38) !important;
  --secondary: rgb(149, 178, 176) !important;
  --setting-group-heading-color: rgb(232, 238, 231) !important;
  --setting-items-background: rgb(10, 18, 47) !important;
  --setting-items-border-color: rgb(51, 65, 148) !important;
  --slider-track-background: rgb(51, 65, 148) !important;
  --slow: 0.5s !important;
  --status-bar-background: rgb(15, 23, 52) !important;
  --status-bar-border-color: rgb(51, 65, 148) !important;
  --status-bar-text-color: #999 !important;
  --suggestion-background: rgb(8, 14, 38) !important;
  --tab-background-active: rgb(8, 14, 38) !important;
  --tab-container-background: rgb(15, 23, 52) !important;
  --tab-outline-color: rgb(51, 65, 148) !important;
  --tab-switcher-background: rgb(15, 23, 52) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(15, 23, 52), transparent) !important;
  --tab-text-color: #999 !important;
  --tab-text-color-active: #999 !important;
  --tab-text-color-focused: #999 !important;
  --tab-text-color-focused-active: #999 !important;
  --tab-text-color-focused-active-current: rgb(232, 238, 231) !important;
  --tab-text-color-focused-highlighted: rgb(149, 178, 176) !important;
  --table-add-button-border-color: rgb(51, 65, 148) !important;
  --table-border-color: rgb(51, 65, 148) !important;
  --table-drag-handle-background-active: #483699 !important;
  --table-drag-handle-color: #999 !important;
  --table-drag-handle-color-active: rgb(232, 238, 231) !important;
  --table-header-border-color: rgb(51, 65, 148) !important;
  --table-header-color: rgb(232, 238, 231) !important;
  --table-selection-border-color: #483699 !important;
  --tag-color: rgb(149, 178, 176) !important;
  --tag-color-hover: rgb(149, 178, 176) !important;
  --tertiary: rgb(166, 191, 189) !important;
  --text-accent: rgb(149, 178, 176) !important;
  --text-accent-hover: rgb(166, 191, 189) !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #999 !important;
  --text-highlight-bg: rgb(51, 65, 148) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #999 !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: rgb(232, 238, 231) !important;
  --text-on-accent: rgb(232, 238, 231) !important;
  --text-selection: rgba(23, 48, 77, 0.99) !important;
  --textHighlight: rgb(51, 65, 148) !important;
  --titleFont: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(15, 23, 52) !important;
  --titlebar-background-focused: rgb(18, 28, 64) !important;
  --titlebar-border-color: rgb(51, 65, 148) !important;
  --titlebar-text-color: #999 !important;
  --titlebar-text-color-focused: rgb(232, 238, 231) !important;
  --vault-profile-color: rgb(232, 238, 231) !important;
  --vault-profile-color-hover: rgb(232, 238, 231) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 23, 52);
  color: rgb(232, 238, 231);
}

html body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(8, 14, 38);
  color: rgb(232, 238, 231);
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
    typography: `html body .page article p > b, b {
  color: rgb(232, 238, 231);
  font-weight: 400;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body .page article p > em, em {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body .page article p > i, i {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body .page article p > strong, strong {
  color: rgb(232, 238, 231);
  font-weight: 400;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body .text-highlight {
  background-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body del {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: line-through rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body p {
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
  font-weight: 300;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html body a.external, footer a {
  color: rgb(149, 178, 176);
  outline: rgb(149, 178, 176) none 0px;
  text-decoration: underline 1px rgb(72, 97, 66);
  text-decoration-color: rgb(72, 97, 66);
  text-decoration-thickness: 1px;
}

html body a.internal, .breadcrumb-container .breadcrumb-element > a {
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
  background-color: rgb(8, 14, 38);
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body ul > li {
  color: rgb(232, 238, 231);
}

html body ul.overflow {
  background-color: rgb(8, 14, 38);
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

html body pre > code, pre:has(> code) {
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
  border-left-color: rgb(15, 23, 52);
  border-left-width: 8px;
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
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
  text-decoration: rgb(232, 238, 231);
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

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(232, 238, 231);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(232, 238, 231);
  font-weight: 300;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 23, 52);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(232, 238, 231);
}

html body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html body h2.page-title, h2.page-title a {
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
    scrollbars: `html body ::-webkit-scrollbar {
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
  text-decoration: rgb(153, 153, 153);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
  font-weight: 300;
  text-decoration: rgb(153, 153, 153);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 255, 255);
  font-family: Lato, sans-serif;
  font-weight: 300;
  text-decoration: rgb(255, 255, 255);
}`,
    toc: `html body li.depth-0 {
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
  text-decoration: rgb(153, 153, 153);
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
  text-decoration: rgb(255, 255, 255);
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
  text-decoration: rgb(255, 255, 255);
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
  text-decoration: underline dotted rgb(232, 238, 231);
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
}`,
  },
  light: {},
};
