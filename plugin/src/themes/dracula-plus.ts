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
  --close-folder-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3Cpath d='M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z'/%3E%3C/svg%3E") no-repeat !important;
  --code-background: #1d1c39 !important;
  --code-block: #8be9fd !important;
  --code-bracket-background: #ffffff13 !important;
  --code-comment: #bd93f9 !important;
  --code-function: #e9e90c !important;
  --code-keyword: #ff22b1 !important;
  --code-normal: #f8f8f2 !important;
  --code-property: #00ffff !important;
  --code-punctuation: #f8f8f2 !important;
  --codeFont: '??', "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
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
  --font-monospace: '??', "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
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
  --open-folder-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3Cpath d='M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z'/%3E%3C/svg%3E") no-repeat !important;
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
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

html body .page article p > em, html em {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

html body .page article p > i, html i {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

html body .page article p > strong, html strong {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

html body .text-highlight {
  background-color: rgba(255, 85, 85, 0.808);
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body p {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

html body a.internal.broken {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
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
  text-decoration: rgb(189, 147, 249);
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
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(189, 147, 249);
  text-decoration: rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(189, 147, 249);
  border-left-color: rgb(189, 147, 249);
  border-right-color: rgb(189, 147, 249);
  border-top-color: rgb(189, 147, 249);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(189, 147, 249);
  text-decoration: line-through 1px rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
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
  text-decoration: rgb(248, 248, 242);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
  text-decoration: rgb(248, 248, 242);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(248, 248, 242);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(248, 248, 242);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(138, 92, 245);
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
  text-decoration: rgb(248, 248, 242);
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
  text-decoration: rgb(248, 248, 242);
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
  text-decoration: rgb(248, 248, 242);
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
  text-decoration: underline dotted rgb(248, 248, 242);
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
}`,
  },
  light: {},
};
