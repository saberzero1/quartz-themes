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
  --shiki-active-tab-border-color: #e8d7b9 !important;
  --shiki-code-background: #1f1f1f !important;
  --shiki-code-comment: #f8f5ed !important;
  --shiki-code-normal: #e8d7b9 !important;
  --shiki-code-punctuation: #e8d7b9 !important;
  --shiki-gutter-border-color: #dca3a3 !important;
  --shiki-gutter-text-color: #f8f5ed !important;
  --shiki-gutter-text-color-highlight: #e8d7b9 !important;
  --shiki-highlight-neutral: #e8d7b9 !important;
  --shiki-terminal-dots-color: #f8f5ed !important;
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

html body html {
  --bg: #3f3f3f;
  --bg-dark: #1f1f1f;
  --bg-darker: #0f0f0f;
  --bg-darkest: #000000;
  --bg-light: #484848;
  --bg-lighter: #4f4f4f;
  --black: #3f3f3f;
  --black-bright: #7f7f7f;
  --black-dim: #333333;
  --blue: #c6eaff;
  --blue-bright: #6996bf;
  --blue-dim: #6699cc;
  --blue-light: #8cb0d3;
  --blue-purple: #c0bed1;
  --cyan: #8cd0d3;
  --cyan-bright: #9ad6d9;
  --cyan-dim: #66cccc;
  --green: #7f9f7f;
  --green-bright: #9ece9e;
  --green-dim: #709080;
  --magenta: #bc8cbc;
  --magenta-bright: #dcbecd;
  --magenta-dim: #cc99cc;
  --orange: #ffcfaf;
  --orange-brown: #cfbfaf;
  --orange-dim: #dfaf8f;
  --orange-light: #ffd7a7;
  --orange-tan: #efdcbc;
  --red: #dca3a3;
  --red-bright: #ecbcbc;
  --red-dark: #cc9393;
  --red-dim: #bca3a3;
  --red-error: #e37170;
  --red-visual: #f18c96;
  --white: #dfe4cf;
  --white-bright: #f8f5ed;
  --white-dim: #dddddd;
  --yellow: #e8d7b9;
  --yellow-bright: #efef8f;
  --yellow-brighter: #f8f893;
  --yellow-dim: #ffcc66;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body .markdown-rendered p > em, html em {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body .markdown-rendered p > i, html i {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration-color: rgb(248, 245, 237);
}

html body .markdown-rendered p > strong, html strong {
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
    links: `html body a.external-link, html footer a {
  color: rgb(255, 207, 175);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 207, 175) none 0px;
  text-decoration-color: rgb(255, 207, 175);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(204, 147, 147);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 147, 147) none 0px;
  text-decoration-color: rgb(204, 147, 147);
}

html body a.internal-link.broken {
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
  border-bottom-color: rgb(220, 163, 163);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(127, 159, 127);
  font-family: "??", Inconsolata, "Source Code Pro", ui-monospace, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html body pre:has(> code) {
  background-color: rgb(31, 31, 31);
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

html body li.task-list-item[data-task="#"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(248, 245, 237);
}

html li.task-list-item[data-task="body"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="."] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="="] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(127, 127, 127);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(127, 127, 127);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(248, 245, 237);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(248, 245, 237);
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
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(248, 245, 237);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(248, 245, 237);
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

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(79, 79, 79);
  border-bottom-left-radius: 7.7px;
  border-bottom-right-radius: 7.7px;
  border-top-left-radius: 7.7px;
  border-top-right-radius: 7.7px;
}

html body a.internal-link.tag-link::before {
  color: rgb(241, 140, 150);
}

html body h1 {
  color: rgb(220, 190, 205);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h1.article-title {
  color: rgb(220, 190, 205);
  font-size: 32px;
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
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(232, 215, 185);
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html body .canvas-node {
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
}`,
    bases: `html body .bases-table {
  border-color: rgb(79, 79, 79);
}

html body .bases-table thead th {
  background-color: rgb(51, 51, 51);
  border-color: rgb(248, 245, 237) rgb(248, 245, 237) rgb(220, 163, 163);
  color: rgb(248, 245, 237);
  font-weight: 700;
}`,
    properties: `html body .metadata {
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

html body div#quartz-root {
  background-color: rgb(63, 63, 63);
  color: rgb(248, 245, 237);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}`,
    stacked: `html body .stacked-page {
  background-color: rgb(79, 79, 79);
  border-color: rgb(248, 245, 237);
}

html body .stacked-page-header {
  background-color: rgb(15, 15, 15);
}

html body .stacked-page.active {
  border-color: rgb(248, 245, 237);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
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
