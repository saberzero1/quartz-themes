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
  --background-modifier-border: #dca3a3;
  --background-modifier-error: #e37170;
  --background-modifier-form-field: #4f4f4f;
  --background-modifier-form-field-hover: #4f4f4f;
  --background-primary: #3f3f3f;
  --background-primary-alt: #1f1f1f;
  --background-secondary: #4f4f4f;
  --background-secondary-alt: #0f0f0f;
  --bases-cards-background: #3f3f3f;
  --bases-cards-cover-background: #1f1f1f;
  --bases-cards-shadow: 0 0 0 1px #dca3a3;
  --bases-embed-border-color: #dca3a3;
  --bases-group-heading-property-color: #e8d7b9;
  --bases-table-border-color: #dca3a3;
  --bases-table-cell-background-active: #3f3f3f;
  --bases-table-cell-background-disabled: #1f1f1f;
  --bases-table-cell-shadow-focus: 0 0 0 2px #e8d7b9;
  --bases-table-group-background: #1f1f1f;
  --bases-table-header-background: #3f3f3f;
  --bases-table-header-color: #e8d7b9;
  --bases-table-summary-background: #3f3f3f;
  --bg: #3f3f3f;
  --bg-dark: #1f1f1f;
  --bg-darker: #0f0f0f;
  --bg-darkest: #000000;
  --bg-light: #484848;
  --bg-lighter: #4f4f4f;
  --black: #3f3f3f;
  --black-bright: #7f7f7f;
  --black-dim: #333333;
  --blockquote-background-color: #484848;
  --blockquote-border-color: #ffcc66;
  --blockquote-border-thickness: 0.2em;
  --blue: #c6eaff;
  --blue-bright: #6996bf;
  --blue-dim: #6699cc;
  --blue-light: #8cb0d3;
  --blue-purple: #c0bed1;
  --blur-background: color-mix(in srgb, #484848 65%, transparent) linear-gradient(#484848, color-mix(in srgb, #484848 65%, transparent));
  --bodyFont: var(--font-text);
  --canvas-background: #3f3f3f;
  --canvas-card-label-color: #f8f5ed;
  --caret-color: #f8f5ed;
  --checkbox-border-color: #f8f5ed;
  --checkbox-border-color-hover: #e8d7b9;
  --checkbox-color: #e8d7b9;
  --checkbox-marker-color: #3f3f3f;
  --checklist-done-color: #7f7f7f;
  --code-background: #1f1f1f;
  --code-block: #7f9f7f;
  --code-border-color: #dca3a3;
  --code-comment: #f8f5ed;
  --code-normal: #f8f5ed;
  --code-punctuation: #e8d7b9;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #f8f5ed;
  --collapse-icon-color-collapsed: #bca3a3;
  --color-text-weeknum: #bca3a3;
  --cyan: #8cd0d3;
  --cyan-bright: #9ad6d9;
  --cyan-dim: #66cccc;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #dca3a3;
  --divider-color-hover: #e8d7b9;
  --dropdown-background: #484848;
  --dropdown-background-hover: #4f4f4f;
  --embed-block-shadow-hover: 0 0 0 1px #dca3a3, inset 0 0 0 1px #dca3a3;
  --embed-border-start: 2px solid #e8d7b9;
  --file-header-background: #3f3f3f;
  --file-header-background-focused: #3f3f3f;
  --flair-background: #484848;
  --flair-color: #f8f5ed;
  --font-header-text-theme: "Inter Medium", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
  --font-mermaid: '??', "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Inconsolata", "Source Code Pro", ui-monospace, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Inconsolata", "Source Code Pro", ui-monospace, monospace;
  --font-print: '??', '??', "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif, 'Arial';
  --font-text: '??', "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
  --footnote-divider-color: #dca3a3;
  --footnote-id-color: #e8d7b9;
  --footnote-id-color-no-occurrences: #f8f5ed;
  --graph-node: #e8d7b9;
  --graph-node-focused: #bca3a3;
  --graph-node-unresolved: #f8f5ed;
  --graph-text: #f8f5ed;
  --gray: var(--text-muted);
  --green: #7f9f7f;
  --green-bright: #9ece9e;
  --green-dim: #709080;
  --h1-color: #dcbecd;
  --h1-size: 2em;
  --h2-color: #efdcbc;
  --h2-size: 1.6em;
  --h2-weight: 700;
  --h3-color: #efdcbc;
  --h3-size: 1.37em;
  --h3-weight: 700;
  --h4-color: #dcbecd;
  --h4-size: 1.25em;
  --h4-weight: 400;
  --h5-color: #f8f5ed;
  --h5-size: 1.12em;
  --h5-weight: 400;
  --h6-color: #f8f5ed;
  --h6-size: 1.12em;
  --h6-weight: 400;
  --headerFont: var(--font-text);
  --heading-formatting: #f8f5ed;
  --highlight: var(--text-highlight-bg);
  --hr-color: #4f4f4f;
  --icon-color: #e8d7b9;
  --icon-color-active: #bca3a3;
  --icon-color-focused: #f8f5ed;
  --icon-color-hover: #e8d7b9;
  --inline-code: #7f9f7f;
  --inline-title-color: #dcbecd;
  --inline-title-size: 2em;
  --input-date-separator: #f8f5ed;
  --input-placeholder-color: #f8f5ed;
  --interactive-accent: #e8d7b9;
  --interactive-accent-rgb: #8cd0d3;
  --interactive-before: #efef8f;
  --interactive-hover: #4f4f4f;
  --interactive-normal: #484848;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #cc9393;
  --link-color-hover: #ecbcbc;
  --link-external-color: #ffcfaf;
  --link-external-color-hover: #ffd7a7;
  --link-unresolved-color: #bca3a3;
  --list-indent: 1.25em;
  --list-marker-color: #f8f5ed;
  --list-marker-color-collapsed: #bca3a3;
  --list-marker-color-hover: #e8d7b9;
  --magenta: #bc8cbc;
  --magenta-bright: #dcbecd;
  --magenta-dim: #cc99cc;
  --menu-background: #4f4f4f;
  --metadata-border-color: #dca3a3;
  --metadata-divider-color: #dca3a3;
  --metadata-input-text-color: #f8f5ed;
  --metadata-label-text-color: #e8d7b9;
  --metadata-label-text-color-hover: #e8d7b9;
  --modal-background: #3f3f3f;
  --nav-collapse-icon-color: #f8f5ed;
  --nav-collapse-icon-color-collapsed: #f8f5ed;
  --nav-heading-color: #f8f5ed;
  --nav-heading-color-collapsed: #f8f5ed;
  --nav-heading-color-collapsed-hover: #e8d7b9;
  --nav-heading-color-hover: #f8f5ed;
  --nav-item-color: #e8d7b9;
  --nav-item-color-active: #f8f5ed;
  --nav-item-color-highlighted: #bca3a3;
  --nav-item-color-hover: #f8f5ed;
  --nav-item-color-selected: #f8f5ed;
  --nav-tag-color: #f8f5ed;
  --nav-tag-color-active: #e8d7b9;
  --nav-tag-color-hover: #e8d7b9;
  --orange: #ffcfaf;
  --orange-brown: #cfbfaf;
  --orange-dim: #dfaf8f;
  --orange-light: #ffd7a7;
  --orange-tan: #efdcbc;
  --pdf-background: #3f3f3f;
  --pdf-page-background: #3f3f3f;
  --pdf-shadow: 0 0 0 1px #dca3a3;
  --pdf-sidebar-background: #3f3f3f;
  --pdf-thumbnail-shadow: 0 0 0 1px #dca3a3;
  --pill-border-color: #dca3a3;
  --pill-color: #e8d7b9;
  --pill-color-hover: #f8f5ed;
  --pill-color-remove: #f8f5ed;
  --pill-color-remove-hover: #bca3a3;
  --pre-code: #484848;
  --prompt-background: #3f3f3f;
  --raised-background: color-mix(in srgb, #484848 65%, transparent) linear-gradient(#484848, color-mix(in srgb, #484848 65%, transparent));
  --red: #dca3a3;
  --red-bright: #ecbcbc;
  --red-dark: #cc9393;
  --red-dim: #bca3a3;
  --red-error: #e37170;
  --red-visual: #f18c96;
  --ribbon-background: #4f4f4f;
  --ribbon-background-collapsed: #3f3f3f;
  --search-clear-button-color: #e8d7b9;
  --search-icon-color: #e8d7b9;
  --search-result-background: #3f3f3f;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #f8f5ed;
  --setting-items-background: #1f1f1f;
  --setting-items-border-color: #dca3a3;
  --slider-track-background: #dca3a3;
  --status-bar-background: #4f4f4f;
  --status-bar-border-color: #dca3a3;
  --status-bar-text-color: #e8d7b9;
  --suggestion-background: #3f3f3f;
  --tab-background-active: #3f3f3f;
  --tab-container-background: #4f4f4f;
  --tab-outline-color: #dca3a3;
  --tab-switcher-background: #4f4f4f;
  --tab-switcher-menubar-background: linear-gradient(to top, #4f4f4f, transparent);
  --tab-text-color: #f8f5ed;
  --tab-text-color-active: #e8d7b9;
  --tab-text-color-focused: #e8d7b9;
  --tab-text-color-focused-active: #e8d7b9;
  --tab-text-color-focused-active-current: #f8f5ed;
  --tab-text-color-focused-highlighted: #bca3a3;
  --table-add-button-border-color: #dca3a3;
  --table-border-color: #dca3a3;
  --table-drag-handle-background-active: #e8d7b9;
  --table-drag-handle-color: #f8f5ed;
  --table-drag-handle-color-active: #333333;
  --table-header: #333333;
  --table-header-border-color: #dca3a3;
  --table-header-color: #f8f5ed;
  --table-hover: #7f7f7f;
  --table-row-even: #3f3f3f;
  --table-row-odd: #333333;
  --table-selection-border-color: #e8d7b9;
  --tag-background: #4f4f4f;
  --tag-background-hover: #dcbecd;
  --tag-color: #f18c96;
  --tag-color-hover: #4f4f4f;
  --tag-decoration-hover: underline;
  --tag-padding-x: 0.5rem;
  --tag-padding-y: 0.25rem;
  --tag-radius: 0.55em;
  --task-checkbox: #dca3a3;
  --tertiary: var(--text-accent-hover);
  --text-a: #cc9393;
  --text-a-hover: #cc9393;
  --text-accent: #bca3a3;
  --text-accent-hover: #dca3a3;
  --text-error: #e37170;
  --text-faint: #f8f5ed;
  --text-highlight-bg: #6699cc;
  --text-highlight-bg-active: #6699cc;
  --text-link: #cc9393;
  --text-mark: rgba(136, 192, 208, 0.3);
  --text-muted: #e8d7b9;
  --text-normal: #f8f5ed;
  --text-on-accent: #333333;
  --text-selection: #6699cc;
  --text-tag: #f18c96;
  --text-title-h1: #dcbecd;
  --text-title-h2: #efdcbc;
  --text-title-h3: #efdcbc;
  --text-title-h4: #dcbecd;
  --text-title-h5: #f8f5ed;
  --text-title-h6: #f8f5ed;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #4f4f4f;
  --titlebar-background-focused: #0f0f0f;
  --titlebar-border-color: #dca3a3;
  --titlebar-text-color: #e8d7b9;
  --titlebar-text-color-focused: #f8f5ed;
  --vault-profile-color: #f8f5ed;
  --vault-profile-color-hover: #f8f5ed;
  --vim-cursor: #8cd0d3;
  --white: #dfe4cf;
  --white-bright: #f8f5ed;
  --white-dim: #dddddd;
  --yellow: #e8d7b9;
  --yellow-bright: #efef8f;
  --yellow-brighter: #f8f893;
  --yellow-dim: #ffcc66;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(79, 79, 79);
  color: rgb(248, 245, 237);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(63, 63, 63);
  color: rgb(248, 245, 237);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(79, 79, 79);
  color: rgb(248, 245, 237);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(220, 163, 163);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(79, 79, 79);
  border-left-color: rgb(220, 163, 163);
  color: rgb(248, 245, 237);
}

body div#quartz-root {
  background-color: rgb(63, 63, 63);
  color: rgb(248, 245, 237);
}`,
    typography: `body .page article p > b, b {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body .page article p > em, em {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body .page article p > i, i {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body .page article p > strong, strong {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body .text-highlight {
  background-color: rgb(102, 153, 204);
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body del {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration: line-through rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body p {
  color: rgb(232, 215, 185);
  outline: rgb(232, 215, 185) none 0px;
  text-decoration: rgb(232, 215, 185);
  text-decoration-color: rgb(232, 215, 185);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 207, 175);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 207, 175) none 0px;
  text-decoration: underline rgb(255, 207, 175);
  text-decoration-color: rgb(255, 207, 175);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(204, 147, 147);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 147, 147) none 0px;
  text-decoration: underline rgb(204, 147, 147);
  text-decoration-color: rgb(204, 147, 147);
}

body a.internal.broken {
  color: rgb(188, 163, 163);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 163, 163) none 0px;
}`,
    lists: `body dd {
  color: rgb(248, 245, 237);
}

body dt {
  color: rgb(248, 245, 237);
}

body ol > li {
  color: rgb(248, 245, 237);
}

body ol.overflow {
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body ul > li {
  color: rgb(248, 245, 237);
}

body ul.overflow {
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
}

body blockquote {
  background-color: rgb(72, 72, 72);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body table {
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

body td {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(248, 245, 237);
  border-left-width: 0px;
  border-right-color: rgb(248, 245, 237);
  border-right-width: 0px;
  border-top-color: rgb(220, 163, 163);
  color: rgb(248, 245, 237);
}

body th {
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

body thead {
  border-bottom-color: rgb(220, 163, 163);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
}

body tr {
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(72, 72, 72);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(72, 72, 72);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  color: rgb(248, 245, 237);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body figcaption {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body img {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body video {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}`,
    embeds: `body .file-embed {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
}

body .footnotes {
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
}

body .transclude {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(127, 127, 127);
  text-decoration: line-through rgb(127, 127, 127);
  text-decoration-color: rgb(127, 127, 127);
}

body input[type=checkbox] {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='!'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='*'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='-'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='/'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='>'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='?'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='I'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='S'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='b'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='c'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='d'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='f'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='i'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='k'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='l'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='p'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='u'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body li.task-list-item[data-task='w'] {
  color: rgb(248, 245, 237);
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}`,
    search: `body .search > .search-button {
  background-color: rgb(79, 79, 79);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  color: rgb(248, 245, 237);
}

body .search > .search-container > .search-space {
  background-color: rgb(63, 63, 63);
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 245, 237) none 0px;
  text-decoration: rgb(248, 245, 237);
  text-decoration-color: rgb(248, 245, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 245, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 245, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(79, 79, 79);
  color: rgb(248, 245, 237);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(79, 79, 79);
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(79, 79, 79);
  color: rgb(248, 245, 237);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(79, 79, 79);
  border-bottom-left-radius: 7.7px;
  border-bottom-right-radius: 7.7px;
  border-top-left-radius: 7.7px;
  border-top-right-radius: 7.7px;
}

body a.internal.tag-link::before {
  color: rgb(241, 140, 150);
}

body h1 {
  color: rgb(220, 190, 205);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(239, 220, 188);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 190, 205);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(239, 220, 188);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(220, 190, 205);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(248, 245, 237);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}

body ::-webkit-scrollbar-corner {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}

body ::-webkit-scrollbar-track {
  background: rgb(63, 63, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(63, 63, 63);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(232, 215, 185);
  text-decoration: rgb(232, 215, 185);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 215, 185);
  text-decoration: rgb(232, 215, 185);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(232, 215, 185);
  text-decoration: rgb(232, 215, 185);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(248, 245, 237);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(248, 245, 237);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
}`,
    footer: `body footer {
  background-color: rgb(79, 79, 79);
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  color: rgb(232, 215, 185);
}

body footer ul li a {
  color: rgb(232, 215, 185);
  text-decoration: rgb(232, 215, 185);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 245, 237);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(232, 215, 185);
  text-decoration: rgb(232, 215, 185);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 215, 185);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body li.section-li > .section .meta {
  color: rgb(232, 215, 185);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(232, 215, 185);
  text-decoration: rgb(232, 215, 185);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
}

body .darkmode svg {
  color: rgb(232, 215, 185);
  stroke: rgb(232, 215, 185);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
}

body .breadcrumb-element p {
  color: rgb(248, 245, 237);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
}

body .metadata {
  border-bottom-color: rgb(220, 163, 163);
  border-left-color: rgb(220, 163, 163);
  border-right-color: rgb(220, 163, 163);
  border-top-color: rgb(220, 163, 163);
  color: rgb(232, 215, 185);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
  font-family: "??", "Inter Light", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(79, 79, 79);
}

body .page-header h2.page-title {
  color: rgb(248, 245, 237);
}

body abbr {
  color: rgb(248, 245, 237);
  text-decoration: underline dotted rgb(248, 245, 237);
}

body details {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body input[type=text] {
  border-bottom-color: rgb(232, 215, 185);
  border-left-color: rgb(232, 215, 185);
  border-right-color: rgb(232, 215, 185);
  border-top-color: rgb(232, 215, 185);
  color: rgb(232, 215, 185);
}

body kbd {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
  color: rgb(248, 245, 237);
  font-family: "??", Inconsolata, "Source Code Pro", ui-monospace, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(248, 245, 237);
  border-left-color: rgb(248, 245, 237);
  border-right-color: rgb(248, 245, 237);
  border-top-color: rgb(248, 245, 237);
}

body sub {
  color: rgb(248, 245, 237);
}

body summary {
  color: rgb(248, 245, 237);
}

body sup {
  color: rgb(248, 245, 237);
}`,
  },
  light: {},
};
