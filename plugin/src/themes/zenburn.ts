import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "zenburn",
    modes: ["dark"],
    variations: [],
    fonts: ["inconsolata"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #dca3a3 !important;
  --background-modifier-error: #e37170 !important;
  --background-modifier-form-field: #4f4f4f !important;
  --background-modifier-form-field-hover: #4f4f4f !important;
  --background-primary: #3f3f3f !important;
  --background-primary-alt: #1f1f1f !important;
  --background-secondary: #4f4f4f !important;
  --background-secondary-alt: #0f0f0f !important;
  --bases-cards-background: #3f3f3f !important;
  --bases-cards-cover-background: #1f1f1f !important;
  --bases-cards-shadow: 0 0 0 1px #dca3a3 !important;
  --bases-embed-border-color: #dca3a3 !important;
  --bases-group-heading-property-color: #e8d7b9 !important;
  --bases-table-border-color: #dca3a3 !important;
  --bases-table-cell-background-active: #3f3f3f !important;
  --bases-table-cell-background-disabled: #1f1f1f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #e8d7b9 !important;
  --bases-table-group-background: #1f1f1f !important;
  --bases-table-header-background: #3f3f3f !important;
  --bases-table-header-color: #e8d7b9 !important;
  --bases-table-summary-background: #3f3f3f !important;
  --bg: #3f3f3f !important;
  --bg-dark: #1f1f1f !important;
  --bg-darker: #0f0f0f !important;
  --bg-darkest: #000000 !important;
  --bg-light: #484848 !important;
  --bg-lighter: #4f4f4f !important;
  --black: #3f3f3f !important;
  --black-bright: #7f7f7f !important;
  --black-dim: #333333 !important;
  --blockquote-background-color: #484848 !important;
  --blockquote-border-color: #ffcc66 !important;
  --blockquote-border-thickness: 0.2em !important;
  --blue: #c6eaff !important;
  --blue-bright: #6996bf !important;
  --blue-dim: #6699cc !important;
  --blue-light: #8cb0d3 !important;
  --blue-purple: #c0bed1 !important;
  --blur-background: color-mix(in srgb, #484848 65%, transparent) linear-gradient(#484848, color-mix(in srgb, #484848 65%, transparent)) !important;
  --bodyFont: "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #3f3f3f !important;
  --canvas-card-label-color: #f8f5ed !important;
  --caret-color: #f8f5ed !important;
  --checkbox-border-color: #f8f5ed !important;
  --checkbox-border-color-hover: #e8d7b9 !important;
  --checkbox-color: #e8d7b9 !important;
  --checkbox-marker-color: #3f3f3f !important;
  --checklist-done-color: #7f7f7f !important;
  --code-background: #1f1f1f !important;
  --code-block: #7f9f7f !important;
  --code-border-color: #dca3a3 !important;
  --code-comment: #f8f5ed !important;
  --code-normal: #f8f5ed !important;
  --code-punctuation: #e8d7b9 !important;
  --codeFont: "Inconsolata", "Source Code Pro", ui-monospace, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #f8f5ed !important;
  --collapse-icon-color-collapsed: #bca3a3 !important;
  --color-text-weeknum: #bca3a3 !important;
  --cyan: #8cd0d3 !important;
  --cyan-bright: #9ad6d9 !important;
  --cyan-dim: #66cccc !important;
  --dark: #f8f5ed !important;
  --darkgray: #f8f5ed !important;
  --divider-color: #dca3a3 !important;
  --divider-color-hover: #e8d7b9 !important;
  --dropdown-background: #484848 !important;
  --dropdown-background-hover: #4f4f4f !important;
  --embed-block-shadow-hover: 0 0 0 1px #dca3a3, inset 0 0 0 1px #dca3a3 !important;
  --embed-border-start: 2px solid #e8d7b9 !important;
  --file-header-background: #3f3f3f !important;
  --file-header-background-focused: #3f3f3f !important;
  --flair-background: #484848 !important;
  --flair-color: #f8f5ed !important;
  --font-header-text-theme: "Inter Medium", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif !important;
  --font-mermaid: "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Inconsolata", "Source Code Pro", ui-monospace, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Inconsolata", "Source Code Pro", ui-monospace, monospace !important;
  --font-print: "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif, Arial' !important;
  --font-text: "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif !important;
  --footnote-divider-color: #dca3a3 !important;
  --footnote-id-color: #e8d7b9 !important;
  --footnote-id-color-no-occurrences: #f8f5ed !important;
  --graph-node: #e8d7b9 !important;
  --graph-node-focused: #bca3a3 !important;
  --graph-node-unresolved: #f8f5ed !important;
  --graph-text: #f8f5ed !important;
  --gray: #e8d7b9 !important;
  --green: #7f9f7f !important;
  --green-bright: #9ece9e !important;
  --green-dim: #709080 !important;
  --h1-color: #dcbecd !important;
  --h1-size: 2em !important;
  --h2-color: #efdcbc !important;
  --h2-size: 1.6em !important;
  --h2-weight: 700 !important;
  --h3-color: #efdcbc !important;
  --h3-size: 1.37em !important;
  --h3-weight: 700 !important;
  --h4-color: #dcbecd !important;
  --h4-size: 1.25em !important;
  --h4-weight: 400 !important;
  --h5-color: #f8f5ed !important;
  --h5-size: 1.12em !important;
  --h5-weight: 400 !important;
  --h6-color: #f8f5ed !important;
  --h6-size: 1.12em !important;
  --h6-weight: 400 !important;
  --headerFont: "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #f8f5ed !important;
  --highlight: #6699cc !important;
  --hr-color: #4f4f4f !important;
  --icon-color: #e8d7b9 !important;
  --icon-color-active: #bca3a3 !important;
  --icon-color-focused: #f8f5ed !important;
  --icon-color-hover: #e8d7b9 !important;
  --inline-code: #7f9f7f !important;
  --inline-title-color: #dcbecd !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #f8f5ed !important;
  --input-placeholder-color: #f8f5ed !important;
  --interactive-accent: #e8d7b9 !important;
  --interactive-accent-rgb: #8cd0d3 !important;
  --interactive-before: #efef8f !important;
  --interactive-hover: #4f4f4f !important;
  --interactive-normal: #484848 !important;
  --light: #3f3f3f !important;
  --lightgray: #4f4f4f !important;
  --link-color: #cc9393 !important;
  --link-color-hover: #ecbcbc !important;
  --link-external-color: #ffcfaf !important;
  --link-external-color-hover: #ffd7a7 !important;
  --link-unresolved-color: #bca3a3 !important;
  --list-indent: 1.25em !important;
  --list-marker-color: #f8f5ed !important;
  --list-marker-color-collapsed: #bca3a3 !important;
  --list-marker-color-hover: #e8d7b9 !important;
  --magenta: #bc8cbc !important;
  --magenta-bright: #dcbecd !important;
  --magenta-dim: #cc99cc !important;
  --menu-background: #4f4f4f !important;
  --metadata-border-color: #dca3a3 !important;
  --metadata-divider-color: #dca3a3 !important;
  --metadata-input-text-color: #f8f5ed !important;
  --metadata-label-text-color: #e8d7b9 !important;
  --metadata-label-text-color-hover: #e8d7b9 !important;
  --modal-background: #3f3f3f !important;
  --nav-collapse-icon-color: #f8f5ed !important;
  --nav-collapse-icon-color-collapsed: #f8f5ed !important;
  --nav-heading-color: #f8f5ed !important;
  --nav-heading-color-collapsed: #f8f5ed !important;
  --nav-heading-color-collapsed-hover: #e8d7b9 !important;
  --nav-heading-color-hover: #f8f5ed !important;
  --nav-item-color: #e8d7b9 !important;
  --nav-item-color-active: #f8f5ed !important;
  --nav-item-color-highlighted: #bca3a3 !important;
  --nav-item-color-hover: #f8f5ed !important;
  --nav-item-color-selected: #f8f5ed !important;
  --nav-tag-color: #f8f5ed !important;
  --nav-tag-color-active: #e8d7b9 !important;
  --nav-tag-color-hover: #e8d7b9 !important;
  --orange: #ffcfaf !important;
  --orange-brown: #cfbfaf !important;
  --orange-dim: #dfaf8f !important;
  --orange-light: #ffd7a7 !important;
  --orange-tan: #efdcbc !important;
  --pdf-background: #3f3f3f !important;
  --pdf-page-background: #3f3f3f !important;
  --pdf-shadow: 0 0 0 1px #dca3a3 !important;
  --pdf-sidebar-background: #3f3f3f !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #dca3a3 !important;
  --pill-border-color: #dca3a3 !important;
  --pill-color: #e8d7b9 !important;
  --pill-color-hover: #f8f5ed !important;
  --pill-color-remove: #f8f5ed !important;
  --pill-color-remove-hover: #bca3a3 !important;
  --pre-code: #484848 !important;
  --prompt-background: #3f3f3f !important;
  --raised-background: color-mix(in srgb, #484848 65%, transparent) linear-gradient(#484848, color-mix(in srgb, #484848 65%, transparent)) !important;
  --red: #dca3a3 !important;
  --red-bright: #ecbcbc !important;
  --red-dark: #cc9393 !important;
  --red-dim: #bca3a3 !important;
  --red-error: #e37170 !important;
  --red-visual: #f18c96 !important;
  --ribbon-background: #4f4f4f !important;
  --ribbon-background-collapsed: #3f3f3f !important;
  --search-clear-button-color: #e8d7b9 !important;
  --search-icon-color: #e8d7b9 !important;
  --search-result-background: #3f3f3f !important;
  --secondary: #bca3a3 !important;
  --setting-group-heading-color: #f8f5ed !important;
  --setting-items-background: #1f1f1f !important;
  --setting-items-border-color: #dca3a3 !important;
  --slider-track-background: #dca3a3 !important;
  --status-bar-background: #4f4f4f !important;
  --status-bar-border-color: #dca3a3 !important;
  --status-bar-text-color: #e8d7b9 !important;
  --suggestion-background: #3f3f3f !important;
  --tab-background-active: #3f3f3f !important;
  --tab-container-background: #4f4f4f !important;
  --tab-outline-color: #dca3a3 !important;
  --tab-switcher-background: #4f4f4f !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #4f4f4f, transparent) !important;
  --tab-text-color: #f8f5ed !important;
  --tab-text-color-active: #e8d7b9 !important;
  --tab-text-color-focused: #e8d7b9 !important;
  --tab-text-color-focused-active: #e8d7b9 !important;
  --tab-text-color-focused-active-current: #f8f5ed !important;
  --tab-text-color-focused-highlighted: #bca3a3 !important;
  --table-add-button-border-color: #dca3a3 !important;
  --table-border-color: #dca3a3 !important;
  --table-drag-handle-background-active: #e8d7b9 !important;
  --table-drag-handle-color: #f8f5ed !important;
  --table-drag-handle-color-active: #333333 !important;
  --table-header: #333333 !important;
  --table-header-border-color: #dca3a3 !important;
  --table-header-color: #f8f5ed !important;
  --table-hover: #7f7f7f !important;
  --table-row-even: #3f3f3f !important;
  --table-row-odd: #333333 !important;
  --table-selection-border-color: #e8d7b9 !important;
  --tag-background: #4f4f4f !important;
  --tag-background-hover: #dcbecd !important;
  --tag-color: #f18c96 !important;
  --tag-color-hover: #4f4f4f !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: 0.5rem !important;
  --tag-padding-y: 0.25rem !important;
  --tag-radius: 0.55em !important;
  --task-checkbox: #dca3a3 !important;
  --tertiary: #dca3a3 !important;
  --text-a: #cc9393 !important;
  --text-a-hover: #cc9393 !important;
  --text-accent: #bca3a3 !important;
  --text-accent-hover: #dca3a3 !important;
  --text-error: #e37170 !important;
  --text-faint: #f8f5ed !important;
  --text-highlight-bg: #6699cc !important;
  --text-highlight-bg-active: #6699cc !important;
  --text-link: #cc9393 !important;
  --text-mark: rgba(136, 192, 208, 0.3) !important;
  --text-muted: #e8d7b9 !important;
  --text-normal: #f8f5ed !important;
  --text-on-accent: #333333 !important;
  --text-selection: #6699cc !important;
  --text-tag: #f18c96 !important;
  --text-title-h1: #dcbecd !important;
  --text-title-h2: #efdcbc !important;
  --text-title-h3: #efdcbc !important;
  --text-title-h4: #dcbecd !important;
  --text-title-h5: #f8f5ed !important;
  --text-title-h6: #f8f5ed !important;
  --textHighlight: #6699cc !important;
  --titleFont: "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #4f4f4f !important;
  --titlebar-background-focused: #0f0f0f !important;
  --titlebar-border-color: #dca3a3 !important;
  --titlebar-text-color: #e8d7b9 !important;
  --titlebar-text-color-focused: #f8f5ed !important;
  --vault-profile-color: #f8f5ed !important;
  --vault-profile-color-hover: #f8f5ed !important;
  --vim-cursor: #8cd0d3 !important;
  --white: #dfe4cf !important;
  --white-bright: #f8f5ed !important;
  --white-dim: #dddddd !important;
  --yellow: #e8d7b9 !important;
  --yellow-bright: #efef8f !important;
  --yellow-brighter: #f8f893 !important;
  --yellow-dim: #ffcc66 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(79, 79, 79);
  color: rgb(248, 245, 237);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(63, 63, 63);
  color: rgb(248, 245, 237);
}

html body .bases-table {
  border-color: rgb(79, 79, 79);
}

html body .bases-table thead th {
  background-color: rgb(51, 51, 51);
  border-color: rgb(248, 245, 237) rgb(248, 245, 237) rgb(220, 163, 163);
  color: rgb(248, 245, 237);
  font-weight: 700;
}

html body .canvas-node {
  border-color: rgb(248, 245, 237);
}

html body .canvas-node-content {
  color: rgb(248, 245, 237);
}

html body .canvas-node-file {
  color: rgb(248, 245, 237);
}

html body .canvas-node-group {
  border-color: rgb(248, 245, 237);
}

html body .canvas-sidebar {
  background-color: rgb(79, 79, 79);
  border-color: rgb(248, 245, 237);
}

html body .note-properties {
  border-color: rgb(220, 163, 163);
}

html body .note-properties-key {
  color: rgb(232, 215, 185);
}

html body .note-properties-row {
  border-color: rgb(232, 215, 185);
}

html body .note-properties-tags {
  background-color: rgb(79, 79, 79);
  border-radius: 7.7px;
  color: rgb(241, 140, 150);
}

html body .note-properties-value {
  color: rgb(232, 215, 185);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(79, 79, 79);
  color: rgb(248, 245, 237);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(220, 163, 163);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(79, 79, 79);
  border-left-color: rgb(220, 163, 163);
  color: rgb(248, 245, 237);
}

html body div#quartz-root {
  background-color: rgb(63, 63, 63);
  color: rgb(248, 245, 237);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body .page article p > em, html em {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body .page article p > i, html i {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body .page article p > strong, html strong {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body .text-highlight {
  background-color: rgb(102, 153, 204);
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body del {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body h1.article-title {
  color: rgb(248, 245, 237);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(248, 245, 237);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(232, 215, 185);
  border-color: rgb(232, 215, 185);
}

html body p {
  color: rgb(232, 215, 185);
  outline: rgb(232, 215, 185) none 0px;
  text-decoration-color: rgb(232, 215, 185);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 207, 175);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 207, 175) none 0px;
  text-decoration-color: rgb(255, 207, 175);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(204, 147, 147);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 147, 147) none 0px;
  text-decoration-color: rgb(204, 147, 147);
}

html body a.internal.broken {
  color: rgb(188, 163, 163);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 163, 163) none 0px;
}`,
    lists: `html body dd {
  color: rgb(248, 245, 237);
}

html body dt {
  color: rgb(248, 245, 237);
}

html body ol > li {
  color: rgb(248, 245, 237);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body ul > li {
  color: rgb(248, 245, 237);
}

html body ul.overflow {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(248, 245, 237);
}

html body blockquote {
  background-color: rgb(72, 72, 72);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body table {
  border-bottom-color: rgb(79, 79, 79);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(79, 79, 79);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(79, 79, 79);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(79, 79, 79);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

html body td {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(248, 245, 237);
  border-left-width: 0px;
  border-right-color: rgb(248, 245, 237);
  border-right-width: 0px;
  border-top-color: rgb(220, 163, 163);
  color: rgb(248, 245, 237);
}

html body th {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(220, 163, 163);
  border-bottom-width: 2px;
  border-left-color: rgb(248, 245, 237);
  border-left-width: 0px;
  border-right-color: rgb(248, 245, 237);
  border-right-width: 0px;
  border-top-color: rgb(248, 245, 237);
  border-top-width: 0px;
  color: rgb(248, 245, 237);
  font-weight: 700;
}

html body thead {
  border-bottom-color: rgb(220, 163, 163);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
}

html body tr {
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
}`,
    code: `html body code {
  background-color: rgb(72, 72, 72);
  border-bottom-color: rgb(127, 159, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(127, 159, 127);
  border-right-color: rgb(127, 159, 127);
  border-top-color: rgb(127, 159, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(127, 159, 127);
  font-family: "??", Inconsolata, "Source Code Pro", ui-monospace, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(72, 72, 72);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(72, 72, 72);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  color: rgb(248, 245, 237);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(72, 72, 72);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgb(72, 72, 72);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body figcaption {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body img {
  border-bottom-color: rgb(220, 190, 205);
  border-left-color: rgb(220, 190, 205);
  border-right-color: rgb(220, 190, 205);
  border-top-color: rgb(220, 190, 205);
}

html body video {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
}

html body .footnotes {
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
}

html body .transclude {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  padding-left: 10px;
  padding-right: 10px;
}

html body .transclude-inner {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
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
  background-color: rgb(79, 79, 79);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  color: rgb(248, 245, 237);
}

html body .search > .search-container > .search-space {
  background-color: rgb(63, 63, 63);
}

html body .search > .search-container > .search-space > * {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 245, 237);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(248, 245, 237);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(79, 79, 79);
  color: rgb(248, 245, 237);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(79, 79, 79);
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(79, 79, 79);
  color: rgb(248, 245, 237);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(79, 79, 79);
  border-bottom-left-radius: 7.7px;
  border-bottom-right-radius: 7.7px;
  border-top-left-radius: 7.7px;
  border-top-right-radius: 7.7px;
}

html body a.internal.tag-link::before {
  color: rgb(241, 140, 150);
}

html body h1 {
  color: rgb(220, 190, 205);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(239, 220, 188);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(220, 190, 205);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(239, 220, 188);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(220, 190, 205);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}

html body ::-webkit-scrollbar-track {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(232, 215, 185);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 215, 185);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(248, 245, 237);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
}`,
    footer: `html body footer {
  background-color: rgb(79, 79, 79);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  color: rgb(232, 215, 185);
}

html body footer ul li a {
  color: rgb(232, 215, 185);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(248, 245, 237);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(232, 215, 185);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 215, 185);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body li.section-li > .section .meta {
  color: rgb(232, 215, 185);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(232, 215, 185);
}

html body ul.section-ul {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
}

html body .darkmode svg {
  color: rgb(232, 215, 185);
  stroke: rgb(232, 215, 185);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
}

html body .breadcrumb-element p {
  color: rgb(248, 245, 237);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
}

html body .metadata {
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  color: rgb(232, 215, 185);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(79, 79, 79);
}

html body .page-header h2.page-title {
  color: rgb(248, 245, 237);
}

html body abbr {
  color: rgb(248, 245, 237);
}

html body details {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body input[type=text] {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
}

html body kbd {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
  font-family: "??", Inconsolata, "Source Code Pro", ui-monospace, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

html body sub {
  color: rgb(248, 245, 237);
}

html body summary {
  color: rgb(248, 245, 237);
}

html body sup {
  color: rgb(248, 245, 237);
}

html body ul.tags > li {
  background-color: rgb(79, 79, 79);
  border-bottom-left-radius: 6.7375px;
  border-bottom-right-radius: 6.7375px;
  border-top-left-radius: 6.7375px;
  border-top-right-radius: 6.7375px;
  color: rgb(241, 140, 150);
}`,
  },
  light: {},
};
