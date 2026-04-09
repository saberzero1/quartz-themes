import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dracula-plus",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono", "monaco"],
  },
  dark: {
    base: `:root:root {
  --background-accent: #f8f8f2 !important;
  --background-dracula-border: #f8f8f2 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-hover: #ffffff13 !important;
  --background-modifier-success: #50fa7b !important;
  --background-primary: #020517 !important;
  --background-primary-alt: #44475a !important;
  --background-secondary: #020517 !important;
  --background-secondary-alt: #282a36 !important;
  --bases-cards-background: #020517 !important;
  --bases-cards-cover-background: #44475a !important;
  --bases-group-heading-property-color: #f8f8f2 !important;
  --bases-table-cell-background-active: #020517 !important;
  --bases-table-cell-background-disabled: #44475a !important;
  --bases-table-group-background: #44475a !important;
  --bases-table-header-background: #020517 !important;
  --bases-table-header-background-hover: #ffffff13 !important;
  --bases-table-header-color: #f8f8f2 !important;
  --bases-table-summary-background: #020517 !important;
  --bases-table-summary-background-hover: #ffffff13 !important;
  --blockquote-border: #ffb86c !important;
  --blur-background: color-mix(in srgb, #44475a 65%, transparent) linear-gradient(#44475a, color-mix(in srgb, #44475a 65%, transparent)) !important;
  --border-color: #2b2727 !important;
  --border-modified-color: #f8f8f2 !important;
  --canvas-background: #020517 !important;
  --canvas-card-label-color: #bd93f9 !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color: #bd93f9 !important;
  --checkbox-border-color-hover: #f8f8f2 !important;
  --checkbox-color: #bd93f9 !important;
  --checkbox-marker-color: #020517 !important;
  --checklist-done-color: #f8f8f2 !important;
  --close-folder-icon: url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3Cpath d='M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z'/%3E%3C/svg%3E%22) no-repeat !important;
  --code-background: #1d1c39 !important;
  --code-block: #8be9fd !important;
  --code-bracket-background: #ffffff13 !important;
  --code-comment: #bd93f9 !important;
  --code-function: #e9e90c !important;
  --code-keyword: #ff22b1 !important;
  --code-normal: #f8f8f2 !important;
  --code-property: #00ffff !important;
  --code-punctuation: #f8f8f2 !important;
  --codeFont: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #bd93f9 !important;
  --collapse-icon-color-collapsed: #ffb86c !important;
  --color-cyan: #00ffff !important;
  --color-pink: #ff22b1 !important;
  --color-user-request: #ffffff13 !important;
  --color-yellow: #e9e90c !important;
  --dark: #f8f8f2 !important;
  --darkgray: #f8f8f2 !important;
  --divider-color: white !important;
  --dropdown-background: #44475a !important;
  --dropdown-background-hover: #ff5555 !important;
  --empty-line-height: 1em !important;
  --file-header-background: #020517 !important;
  --file-header-background-focused: #020517 !important;
  --file-icons-list: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' fill-opacity='.1' stroke='black' d='M14 17.5H6A1.5 1.5 0 0 1 4.5 16V4A1.5 1.5 0 0 1 6 2.5h5.086a.5.5 0 0 1 .353.146l3.915 3.915a.5.5 0 0 1 .146.353V16a1.5 1.5 0 0 1-1.5 1.5Z'/%3e%3cpath stroke='black' d='M11.5 2.5v3a1 1 0 0 0 1 1h3'/%3e%3crect width='8' height='1' x='6' y='13' fill='black' rx='.5'/%3e%3crect width='8' height='1' x='6' y='15' fill='black' rx='.5'/%3e%3cpath fill='black' d='M6.952 12c.2 0 .28-.04.28-.176 0-.168-.28-.392-.28-.648l.44-.92h2.232l.44.92c0 .256-.28.48-.28.648 0 .136.072.176.28.176h1.608c.2 0 .28-.04.28-.176 0-.168-.304-.4-.416-.648 0 0-1.96-4.008-2.096-4.52 0 0-.096-.24-.432-.24-.336 0-.424.216-.424.216-.144.528-2.168 4.544-2.168 4.544-.12.248-.416.48-.416.648 0 .136.072.176.272.176h.68Zm2.456-2.2h-1.8l.896-1.912.904 1.912Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20v20H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e") !important;
  --flair-background: #44475a !important;
  --flair-color: #f8f8f2 !important;
  --font-family-editor: Avenir, Avenir Next, sans-serif !important;
  --font-family-preview: Avenir, Avenir Next, sans-serif !important;
  --font-monospace: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace !important;
  --font-size-code: 16px !important;
  --font-size-h1: 30px !important;
  --font-size-h2: 23px !important;
  --font-size-h3: 22px !important;
  --font-size-h4: 21px !important;
  --font-size-h5: 20px !important;
  --font-size-h6: 19px !important;
  --font-size-normal: 19px !important;
  --font-size-side-dock: 16px !important;
  --font-size-side-dock-title: 18px !important;
  --font-size-status-bar: 16px !important;
  --footnote-id-color: #f8f8f2 !important;
  --footnote-id-color-no-occurrences: #bd93f9 !important;
  --footnote-input-background-active: #ffffff13 !important;
  --graph-node: #f8f8f2 !important;
  --graph-node-attachment: #e9e90c !important;
  --graph-node-focused: #ffb86c !important;
  --graph-node-unresolved: #bd93f9 !important;
  --graph-text: #f8f8f2 !important;
  --gray: #f8f8f2 !important;
  --heading-formatting: #bd93f9 !important;
  --highlight: #ff5555ce !important;
  --hr-color: white !important;
  --icon-color: #f8f8f2 !important;
  --icon-color-active: #ffb86c !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: #f8f8f2 !important;
  --image-iocns-badge: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cg fill='black' clip-path='url(%23a)'%3e%3cpath d='M16 4.5H4c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5V6c0-.83-.67-1.5-1.5-1.5ZM5.25 6A1.23 1.23 0 0 1 6.5 7.25 1.23 1.23 0 0 1 5.25 8.5 1.23 1.23 0 0 1 4 7.25 1.23 1.23 0 0 1 5.25 6ZM4 12.4 6 10l2 1.07L12 7l4 3.27V14H4v-1.6Z' opacity='.1'/%3e%3cpath d='M16 4H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm1 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8Z'/%3e%3cpath fill-opacity='.8' d='M16 10.27V14H4v-1.6L6 10l2 1.07L12 7l4 3.27ZM6.5 7.25A1.23 1.23 0 0 1 5.25 8.5 1.23 1.23 0 0 1 4 7.25 1.23 1.23 0 0 1 5.25 6 1.23 1.23 0 0 1 6.5 7.25Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20v20H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e") !important;
  --indentation-guide-color: #ffffff30 !important;
  --inline-code: #e9e90c !important;
  --input-date-separator: #bd93f9 !important;
  --input-placeholder-color: #bd93f9 !important;
  --interactive-accent-rgb: 123, 108, 217 !important;
  --interactive-hover: #ff5555 !important;
  --interactive-normal: #44475a !important;
  --light: #020517 !important;
  --lightgray: #020517 !important;
  --link-color: #ffb86c !important;
  --link-color-hover: #8be9fd !important;
  --link-external-color: #ffb86c !important;
  --link-external-color-hover: #8be9fd !important;
  --link-unresolved-color: #ffb86c !important;
  --list-marker-color: #bd93f9 !important;
  --list-marker-color-collapsed: #ffb86c !important;
  --list-marker-color-hover: #f8f8f2 !important;
  --menu-background: #020517 !important;
  --metadata-input-background-active: #ffffff13 !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-background-active: #ffffff13 !important;
  --metadata-label-text-color: #f8f8f2 !important;
  --metadata-label-text-color-hover: #f8f8f2 !important;
  --metadata-property-background-active: #ffffff13 !important;
  --modal-background: #020517 !important;
  --nav-collapse-icon-color: #bd93f9 !important;
  --nav-collapse-icon-color-collapsed: #bd93f9 !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed: #bd93f9 !important;
  --nav-heading-color-collapsed-hover: #f8f8f2 !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-indentation-guide-color: #ffffff30 !important;
  --nav-item-background-active: #ffffff13 !important;
  --nav-item-background-hover: #ffffff13 !important;
  --nav-item-color: #f8f8f2 !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: #ffb86c !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-tag-color: #bd93f9 !important;
  --nav-tag-color-active: #f8f8f2 !important;
  --nav-tag-color-hover: #f8f8f2 !important;
  --open-folder-icon: url(%22data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3Cpath d='M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z'/%3E%3C/svg%3E%22) no-repeat !important;
  --pdf-background: #020517 !important;
  --pdf-page-background: #020517 !important;
  --pdf-sidebar-background: #020517 !important;
  --pill-color: #f8f8f2 !important;
  --pill-color-hover: #f8f8f2 !important;
  --pill-color-remove: #bd93f9 !important;
  --pill-color-remove-hover: #ffb86c !important;
  --pre-code: #1d1c39 !important;
  --prompt-background: #020517 !important;
  --raised-background: color-mix(in srgb, #44475a 65%, transparent) linear-gradient(#44475a, color-mix(in srgb, #44475a 65%, transparent)) !important;
  --ribbon-background: #020517 !important;
  --ribbon-background-collapsed: #020517 !important;
  --search-clear-button-color: #f8f8f2 !important;
  --search-icon-color: #f8f8f2 !important;
  --search-result-background: #020517 !important;
  --secondary: #ffb86c !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: #44475a !important;
  --status-bar-background: #020517 !important;
  --status-bar-border-color: white !important;
  --status-bar-text-color: #f8f8f2 !important;
  --suggestion-background: #020517 !important;
  --sync-avatar-color-3: #e9e90c !important;
  --sync-avatar-color-5: #00ffff !important;
  --sync-avatar-color-8: #ff22b1 !important;
  --tab-background-active: #020517 !important;
  --tab-container-background: #020517 !important;
  --tab-outline-color: white !important;
  --tab-switcher-background: #020517 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #020517, transparent) !important;
  --tab-text-color: #bd93f9 !important;
  --tab-text-color-active: #f8f8f2 !important;
  --tab-text-color-focused: #f8f8f2 !important;
  --tab-text-color-focused-active: #f8f8f2 !important;
  --tab-text-color-focused-active-current: #f8f8f2 !important;
  --tab-text-color-focused-highlighted: #ffb86c !important;
  --table-drag-handle-color: #bd93f9 !important;
  --table-header-color: #f8f8f2 !important;
  --tag-color: #ffb86c !important;
  --tag-color-hover: #ffb86c !important;
  --tertiary: #8be9fd !important;
  --text-accent: #ffb86c !important;
  --text-accent-hover: #8be9fd !important;
  --text-error: #ff79c6 !important;
  --text-error-hover: #ff79c6 !important;
  --text-faint: #bd93f9 !important;
  --text-highlight-bg: #ff5555ce !important;
  --text-muted: #f8f8f2 !important;
  --text-normal: #f8f8f2 !important;
  --text-selection: #6272a4 !important;
  --text-title-h1: #ff79c6 !important;
  --text-title-h2: #bd93f9 !important;
  --text-title-h3: #ff5555 !important;
  --text-title-h4: #ffb86c !important;
  --text-title-h5: #50fa7b !important;
  --text-title-h6: #8be9fd !important;
  --textHighlight: #ff5555ce !important;
  --titlebar-background: #020517 !important;
  --titlebar-background-focused: #282a36 !important;
  --titlebar-text-color: #f8f8f2 !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --vim-cursor: #ff5555 !important;
  --vt-fsize: 28px !important;
  --vt-ml: 0px !important;
  --vtcolor1: rgb(130, 57, 226) !important;
  --vtcolor2: rgb(82, 236, 247) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
}

html body .bases-table thead th {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
  font-weight: 800;
}

html body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html body .canvas-node-file {
  color: rgb(248, 248, 242);
}

html body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html body .canvas-sidebar {
  background-color: rgb(2, 5, 23);
  border-color: rgb(248, 248, 242);
}

html body .note-properties-key {
  color: rgb(248, 248, 242);
}

html body .note-properties-row {
  border-color: rgb(248, 248, 242);
}

html body .note-properties-tags {
  border-radius: 33.25px;
  color: rgb(255, 184, 108);
}

html body .note-properties-value {
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(2, 5, 23);
  border-left-color: rgb(255, 255, 255);
  color: rgb(248, 248, 242);
}

html body div#quartz-root {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration-color: rgb(80, 250, 123);
}

html body .page article p > em, html em {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .page article p > i, html i {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .page article p > strong, html strong {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration-color: rgb(80, 250, 123);
}

html body .text-highlight {
  background-color: rgba(255, 85, 85, 0.808);
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body h1.article-title {
  color: rgb(248, 248, 242);
  font-size: 20px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 147, 249);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(189, 147, 249);
  border-color: rgb(189, 147, 249);
}

html body p {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body a.internal.broken {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}`,
    lists: `html body dd {
  color: rgb(248, 248, 242);
}

html body dl {
  margin-bottom: 19px;
  margin-top: 19px;
}

html body dt {
  color: rgb(248, 248, 242);
}

html body ol > li {
  color: rgb(248, 248, 242);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ul > li {
  color: rgb(248, 248, 242);
}

html body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(189, 147, 249);
}

html body blockquote {
  background-color: rgb(29, 28, 57);
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body table {
  color: rgb(248, 248, 242);
}

html body td {
  color: rgb(248, 248, 242);
}

html body th {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html body tr {
  border-bottom-color: rgb(248, 248, 242);
}`,
    code: `html body code {
  background-color: rgb(29, 28, 57);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 28, 57);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 28, 57);
  color: rgb(248, 248, 242);
}

html body pre > code > [data-line] {
  border-left-color: rgb(233, 233, 12);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(233, 233, 12);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(233, 233, 12);
  border-left-color: rgb(233, 233, 12);
  border-right-color: rgb(233, 233, 12);
  border-top-color: rgb(233, 233, 12);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(29, 28, 57);
  padding-bottom: 14.25px;
  padding-left: 19px;
  padding-right: 19px;
  padding-top: 14.25px;
}

html body pre:has(> code) {
  background-color: rgb(29, 28, 57);
  padding-bottom: 14.25px;
  padding-left: 19px;
  padding-right: 19px;
  padding-top: 14.25px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body figcaption {
  color: rgb(248, 248, 242);
  font-size: 19px;
}

html body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  margin-bottom: 19px;
  margin-top: 19px;
}

html body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(189, 147, 249);
  border-left-color: rgb(189, 147, 249);
  border-right-color: rgb(189, 147, 249);
  border-top-color: rgb(189, 147, 249);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(189, 147, 249);
  text-decoration: line-through 1px rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(189, 147, 249);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22black\\%22 fill-opacity=\\%220.7\\%22 d=\\%22M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22black\\%22 fill-opacity=\\%220.7\\%22 d=\\%22M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(233, 233, 12);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(189, 147, 249);
  content: " ";
}

html body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(189, 147, 249);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(189, 147, 249);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="D"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' version='1.1' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Ccircle cy='12.5' cx='12.5' r='1.75'%3E%3C/circle%3E%3Ccircle cy='12.5' cx='3.5' r='1.75'%3E%3C/circle%3E%3Ccircle cy='3.5' cx='3.5' r='1.75'%3E%3C/circle%3E%3Cpath d='m7.75 2.75h.5m2.5 0h.5m1.5 2.5v-.5m0 3v.5m-9-2.5v4.5'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' version='1.1' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Ccircle cy='12.5' cx='12.5' r='1.75'%3E%3C/circle%3E%3Ccircle cy='12.5' cx='3.5' r='1.75'%3E%3C/circle%3E%3Ccircle cy='3.5' cx='3.5' r='1.75'%3E%3C/circle%3E%3Cpath d='m7.75 2.75h.5m2.5 0h.5m1.5 2.5v-.5m0 3v.5m-9-2.5v4.5'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(233, 233, 12);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(233, 233, 12);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'/%3E%3Ccircle cx='68' cy='68' r='28' opacity='0.2'/%3E%3Ccircle cx='68' cy='188' r='28' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3Ccircle cx='68' cy='68' r='28' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3Ccircle cx='188' cy='140' r='28' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3Cpath d='M160,144H130.5a47.8,47.8,0,0,1-36.9-17.3L68,96v64' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'/%3E%3Ccircle cx='68' cy='68' r='28' opacity='0.2'/%3E%3Ccircle cx='68' cy='188' r='28' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3Ccircle cx='68' cy='68' r='28' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3Ccircle cx='188' cy='140' r='28' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3Cpath d='M160,144H130.5a47.8,47.8,0,0,1-36.9-17.3L68,96v64' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M305.8 2.076C314.4 5.932 320 14.52 320 24V64H336C406.7 64 464 121.3 464 192V358.7C492.3 371 512 399.2 512 432C512 476.2 476.2 512 432 512C387.8 512 352 476.2 352 432C352 399.2 371.7 371 400 358.7V192C400 156.7 371.3 128 336 128H320V168C320 177.5 314.4 186.1 305.8 189.9C297.1 193.8 286.1 192.2 279.9 185.8L199.9 113.8C194.9 109.3 192 102.8 192 96C192 89.2 194.9 82.71 199.9 78.16L279.9 6.161C286.1-.1791 297.1-1.779 305.8 2.077V2.076zM432 456C445.3 456 456 445.3 456 432C456 418.7 445.3 408 432 408C418.7 408 408 418.7 408 432C408 445.3 418.7 456 432 456zM112 358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 .0004 80 .0004C124.2 .0004 160 35.82 160 80C160 112.8 140.3 140.1 112 153.3V358.7zM80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56zM80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M305.8 2.076C314.4 5.932 320 14.52 320 24V64H336C406.7 64 464 121.3 464 192V358.7C492.3 371 512 399.2 512 432C512 476.2 476.2 512 432 512C387.8 512 352 476.2 352 432C352 399.2 371.7 371 400 358.7V192C400 156.7 371.3 128 336 128H320V168C320 177.5 314.4 186.1 305.8 189.9C297.1 193.8 286.1 192.2 279.9 185.8L199.9 113.8C194.9 109.3 192 102.8 192 96C192 89.2 194.9 82.71 199.9 78.16L279.9 6.161C286.1-.1791 297.1-1.779 305.8 2.077V2.076zM432 456C445.3 456 456 445.3 456 432C456 418.7 445.3 408 432 408C418.7 408 408 418.7 408 432C408 445.3 418.7 456 432 456zM112 358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 .0004 80 .0004C124.2 .0004 160 35.82 160 80C160 112.8 140.3 140.1 112 153.3V358.7zM80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56zM80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(189, 147, 249);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(168, 130, 255);
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
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(2, 5, 23);
}

html body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(2, 5, 23);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(248, 248, 242);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 33.25px;
  border-bottom-right-radius: 33.25px;
  border-top-left-radius: 33.25px;
  border-top-right-radius: 33.25px;
}

html body a.internal.tag-link::before {
  color: rgb(255, 184, 108);
}

html body h1 {
  color: rgb(255, 121, 198);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2 {
  color: rgb(189, 147, 249);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(248, 248, 242);
}

html body h3 {
  color: rgb(255, 85, 85);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h4 {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h5 {
  color: rgb(80, 250, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h6 {
  color: rgb(139, 233, 253);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body hr {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}

html body ::-webkit-scrollbar-track {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .explorer .folder-outer > ul {
  border-left-color: rgba(255, 255, 255, 0.19);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(248, 248, 242);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    footer: `html body footer {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(248, 248, 242);
  border-top-width: 0px;
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body footer ul li a {
  color: rgb(248, 248, 242);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body li.section-li > .section .meta {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(248, 248, 242);
}

html body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .darkmode svg {
  color: rgb(248, 248, 242);
  stroke: rgb(248, 248, 242);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .breadcrumb-element p {
  color: rgb(189, 147, 249);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .metadata {
  color: rgb(248, 248, 242);
}

html body .metadata-properties {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .navigation-progress {
  background-color: rgb(40, 42, 54);
}

html body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

html body abbr {
  color: rgb(248, 248, 242);
}

html body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body input[type=text] {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body kbd {
  background-color: rgb(29, 28, 57);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16.625px;
  padding-bottom: 1.6625px;
  padding-left: 4.15625px;
  padding-right: 4.15625px;
  padding-top: 1.6625px;
}

html body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body sub {
  color: rgb(248, 248, 242);
  font-size: 15.8333px;
}

html body summary {
  color: rgb(248, 248, 242);
}

html body sup {
  color: rgb(248, 248, 242);
  font-size: 15.8333px;
}

html body ul.tags > li {
  border-bottom-left-radius: 29.0938px;
  border-bottom-right-radius: 29.0938px;
  border-top-left-radius: 29.0938px;
  border-top-right-radius: 29.0938px;
  color: rgb(139, 233, 253);
}`,
  },
  light: {},
};
