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
  --background-accent: #f8f8f2;
  --background-dracula-border: #f8f8f2;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-hover: #ffffff13;
  --background-modifier-success: #50fa7b;
  --background-primary: #020517;
  --background-primary-alt: #44475a;
  --background-secondary: #020517;
  --background-secondary-alt: #282a36;
  --bases-cards-background: #020517;
  --bases-cards-cover-background: #44475a;
  --bases-group-heading-property-color: #f8f8f2;
  --bases-table-cell-background-active: #020517;
  --bases-table-cell-background-disabled: #44475a;
  --bases-table-group-background: #44475a;
  --bases-table-header-background: #020517;
  --bases-table-header-background-hover: #ffffff13;
  --bases-table-header-color: #f8f8f2;
  --bases-table-summary-background: #020517;
  --bases-table-summary-background-hover: #ffffff13;
  --blockquote-border: #ffb86c;
  --blur-background: color-mix(in srgb, #44475a 65%, transparent) linear-gradient(#44475a, color-mix(in srgb, #44475a 65%, transparent));
  --border-color: #2b2727;
  --border-modified-color: #f8f8f2;
  --canvas-background: #020517;
  --canvas-card-label-color: #bd93f9;
  --caret-color: #f8f8f2;
  --checkbox-border-color: #bd93f9;
  --checkbox-border-color-hover: #f8f8f2;
  --checkbox-color: #bd93f9;
  --checkbox-marker-color: #020517;
  --checklist-done-color: #f8f8f2;
  --close-folder-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3Cpath d='M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z'/%3E%3C/svg%3E") no-repeat;
  --code-background: #1d1c39;
  --code-block: #8be9fd;
  --code-bracket-background: #ffffff13;
  --code-comment: #bd93f9;
  --code-function: #e9e90c;
  --code-keyword: #ff22b1;
  --code-normal: #f8f8f2;
  --code-property: #00ffff;
  --code-punctuation: #f8f8f2;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #bd93f9;
  --collapse-icon-color-collapsed: #ffb86c;
  --color-cyan: #00ffff;
  --color-pink: #ff22b1;
  --color-user-request: #ffffff13;
  --color-yellow: #e9e90c;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: white;
  --dropdown-background: #44475a;
  --dropdown-background-hover: #ff5555;
  --empty-line-height: 1em;
  --file-header-background: #020517;
  --file-header-background-focused: #020517;
  --file-icons-list: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' fill-opacity='.1' stroke='black' d='M14 17.5H6A1.5 1.5 0 0 1 4.5 16V4A1.5 1.5 0 0 1 6 2.5h5.086a.5.5 0 0 1 .353.146l3.915 3.915a.5.5 0 0 1 .146.353V16a1.5 1.5 0 0 1-1.5 1.5Z'/%3e%3cpath stroke='black' d='M11.5 2.5v3a1 1 0 0 0 1 1h3'/%3e%3crect width='8' height='1' x='6' y='13' fill='black' rx='.5'/%3e%3crect width='8' height='1' x='6' y='15' fill='black' rx='.5'/%3e%3cpath fill='black' d='M6.952 12c.2 0 .28-.04.28-.176 0-.168-.28-.392-.28-.648l.44-.92h2.232l.44.92c0 .256-.28.48-.28.648 0 .136.072.176.28.176h1.608c.2 0 .28-.04.28-.176 0-.168-.304-.4-.416-.648 0 0-1.96-4.008-2.096-4.52 0 0-.096-.24-.432-.24-.336 0-.424.216-.424.216-.144.528-2.168 4.544-2.168 4.544-.12.248-.416.48-.416.648 0 .136.072.176.272.176h.68Zm2.456-2.2h-1.8l.896-1.912.904 1.912Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20v20H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  --flair-background: #44475a;
  --flair-color: #f8f8f2;
  --font-family-editor: Avenir, Avenir Next, sans-serif;
  --font-family-preview: Avenir, Avenir Next, sans-serif;
  --font-monospace: '??', "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular,
    Consolas, "Roboto Mono", monospace;
  --font-size-code: 16px;
  --font-size-h1: 30px;
  --font-size-h2: 23px;
  --font-size-h3: 22px;
  --font-size-h4: 21px;
  --font-size-h5: 20px;
  --font-size-h6: 19px;
  --font-size-normal: 19px;
  --font-size-side-dock: 16px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 16px;
  --footnote-id-color: #f8f8f2;
  --footnote-id-color-no-occurrences: #bd93f9;
  --footnote-input-background-active: #ffffff13;
  --graph-node: #f8f8f2;
  --graph-node-attachment: #e9e90c;
  --graph-node-focused: #ffb86c;
  --graph-node-unresolved: #bd93f9;
  --graph-text: #f8f8f2;
  --gray: var(--text-muted);
  --heading-formatting: #bd93f9;
  --highlight: var(--text-highlight-bg);
  --hr-color: white;
  --icon-color: #f8f8f2;
  --icon-color-active: #ffb86c;
  --icon-color-focused: #f8f8f2;
  --icon-color-hover: #f8f8f2;
  --image-iocns-badge: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cg fill='black' clip-path='url(%23a)'%3e%3cpath d='M16 4.5H4c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5V6c0-.83-.67-1.5-1.5-1.5ZM5.25 6A1.23 1.23 0 0 1 6.5 7.25 1.23 1.23 0 0 1 5.25 8.5 1.23 1.23 0 0 1 4 7.25 1.23 1.23 0 0 1 5.25 6ZM4 12.4 6 10l2 1.07L12 7l4 3.27V14H4v-1.6Z' opacity='.1'/%3e%3cpath d='M16 4H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm1 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8Z'/%3e%3cpath fill-opacity='.8' d='M16 10.27V14H4v-1.6L6 10l2 1.07L12 7l4 3.27ZM6.5 7.25A1.23 1.23 0 0 1 5.25 8.5 1.23 1.23 0 0 1 4 7.25 1.23 1.23 0 0 1 5.25 6 1.23 1.23 0 0 1 6.5 7.25Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20v20H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  --indentation-guide-color: #ffffff30;
  --inline-code: #e9e90c;
  --input-date-separator: #bd93f9;
  --input-placeholder-color: #bd93f9;
  --interactive-accent-rgb: 123, 108, 217;
  --interactive-hover: #ff5555;
  --interactive-normal: #44475a;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #ffb86c;
  --link-color-hover: #8be9fd;
  --link-external-color: #ffb86c;
  --link-external-color-hover: #8be9fd;
  --link-unresolved-color: #ffb86c;
  --list-marker-color: #bd93f9;
  --list-marker-color-collapsed: #ffb86c;
  --list-marker-color-hover: #f8f8f2;
  --menu-background: #020517;
  --metadata-input-background-active: #ffffff13;
  --metadata-input-text-color: #f8f8f2;
  --metadata-label-background-active: #ffffff13;
  --metadata-label-text-color: #f8f8f2;
  --metadata-label-text-color-hover: #f8f8f2;
  --metadata-property-background-active: #ffffff13;
  --modal-background: #020517;
  --nav-collapse-icon-color: #bd93f9;
  --nav-collapse-icon-color-collapsed: #bd93f9;
  --nav-heading-color: #f8f8f2;
  --nav-heading-color-collapsed: #bd93f9;
  --nav-heading-color-collapsed-hover: #f8f8f2;
  --nav-heading-color-hover: #f8f8f2;
  --nav-indentation-guide-color: #ffffff30;
  --nav-item-background-active: #ffffff13;
  --nav-item-background-hover: #ffffff13;
  --nav-item-color: #f8f8f2;
  --nav-item-color-active: #f8f8f2;
  --nav-item-color-highlighted: #ffb86c;
  --nav-item-color-hover: #f8f8f2;
  --nav-item-color-selected: #f8f8f2;
  --nav-tag-color: #bd93f9;
  --nav-tag-color-active: #f8f8f2;
  --nav-tag-color-hover: #f8f8f2;
  --open-folder-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3Cpath d='M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z'/%3E%3C/svg%3E") no-repeat;
  --pdf-background: #020517;
  --pdf-page-background: #020517;
  --pdf-sidebar-background: #020517;
  --pill-color: #f8f8f2;
  --pill-color-hover: #f8f8f2;
  --pill-color-remove: #bd93f9;
  --pill-color-remove-hover: #ffb86c;
  --pre-code: #1d1c39;
  --prompt-background: #020517;
  --raised-background: color-mix(in srgb, #44475a 65%, transparent) linear-gradient(#44475a, color-mix(in srgb, #44475a 65%, transparent));
  --ribbon-background: #020517;
  --ribbon-background-collapsed: #020517;
  --search-clear-button-color: #f8f8f2;
  --search-icon-color: #f8f8f2;
  --search-result-background: #020517;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #f8f8f2;
  --setting-items-background: #44475a;
  --status-bar-background: #020517;
  --status-bar-border-color: white;
  --status-bar-text-color: #f8f8f2;
  --suggestion-background: #020517;
  --sync-avatar-color-3: #e9e90c;
  --sync-avatar-color-5: #00ffff;
  --sync-avatar-color-8: #ff22b1;
  --tab-background-active: #020517;
  --tab-container-background: #020517;
  --tab-outline-color: white;
  --tab-switcher-background: #020517;
  --tab-switcher-menubar-background: linear-gradient(to top, #020517, transparent);
  --tab-text-color: #bd93f9;
  --tab-text-color-active: #f8f8f2;
  --tab-text-color-focused: #f8f8f2;
  --tab-text-color-focused-active: #f8f8f2;
  --tab-text-color-focused-active-current: #f8f8f2;
  --tab-text-color-focused-highlighted: #ffb86c;
  --table-drag-handle-color: #bd93f9;
  --table-header-color: #f8f8f2;
  --tag-color: #ffb86c;
  --tag-color-hover: #ffb86c;
  --tertiary: var(--text-accent-hover);
  --text-accent: #ffb86c;
  --text-accent-hover: #8be9fd;
  --text-error: #ff79c6;
  --text-error-hover: #ff79c6;
  --text-faint: #bd93f9;
  --text-highlight-bg: #ff5555ce;
  --text-muted: #f8f8f2;
  --text-normal: #f8f8f2;
  --text-selection: #6272a4;
  --text-title-h1: #ff79c6;
  --text-title-h2: #bd93f9;
  --text-title-h3: #ff5555;
  --text-title-h4: #ffb86c;
  --text-title-h5: #50fa7b;
  --text-title-h6: #8be9fd;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #020517;
  --titlebar-background-focused: #282a36;
  --titlebar-text-color: #f8f8f2;
  --titlebar-text-color-focused: #f8f8f2;
  --vault-profile-color: #f8f8f2;
  --vault-profile-color-hover: #f8f8f2;
  --vim-cursor: #ff5555;
  --vt-fsize: 28px;
  --vt-ml: 0px;
  --vtcolor1: rgb(130, 57, 226);
  --vtcolor2: rgb(82, 236, 247);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(2, 5, 23);
  border-left-color: rgb(255, 255, 255);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

body .page article p > em, em {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .page article p > i, i {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .page article p > strong, strong {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

body .text-highlight {
  background-color: rgba(255, 85, 85, 0.808);
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body p {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body a.internal.broken {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}`,
    lists: `body dd {
  color: rgb(248, 248, 242);
}

body dl {
  margin-bottom: 19px;
  margin-top: 19px;
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(248, 248, 242);
}

body ol.overflow {
  background-color: rgb(2, 5, 23);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgb(2, 5, 23);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(189, 147, 249);
  text-decoration: rgb(189, 147, 249);
}

body blockquote {
  background-color: rgb(29, 28, 57);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  color: rgb(248, 248, 242);
}

body td {
  color: rgb(248, 248, 242);
}

body th {
  background-color: rgb(2, 5, 23);
  color: rgb(248, 248, 242);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(248, 248, 242);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 28, 57);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 28, 57);
  color: rgb(248, 248, 242);
}

body pre > code > [data-line] {
  border-left-color: rgb(233, 233, 12);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(233, 233, 12);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(233, 233, 12);
  border-left-color: rgb(233, 233, 12);
  border-right-color: rgb(233, 233, 12);
  border-top-color: rgb(233, 233, 12);
}

body pre > code, pre:has(> code) {
  background-color: rgb(29, 28, 57);
  padding-bottom: 14.25px;
  padding-left: 19px;
  padding-right: 19px;
  padding-top: 14.25px;
}

body pre:has(> code) {
  background-color: rgb(29, 28, 57);
  padding-bottom: 14.25px;
  padding-left: 19px;
  padding-right: 19px;
  padding-top: 14.25px;
}`,
    images: `body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figcaption {
  color: rgb(248, 248, 242);
  font-size: 19px;
}

body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  margin-bottom: 19px;
  margin-top: 19px;
}

body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `body .file-embed {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(189, 147, 249);
  text-decoration: rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body input[type=checkbox] {
  border-bottom-color: rgb(189, 147, 249);
  border-left-color: rgb(189, 147, 249);
  border-right-color: rgb(189, 147, 249);
  border-top-color: rgb(189, 147, 249);
}

body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='-'] {
  color: rgb(189, 147, 249);
  text-decoration: line-through 1px rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(2, 5, 23);
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(2, 5, 23);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(248, 248, 242);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 33.25px;
  border-bottom-right-radius: 33.25px;
  border-top-left-radius: 33.25px;
  border-top-right-radius: 33.25px;
}

body a.internal.tag-link::before {
  color: rgb(255, 184, 108);
}

body h1 {
  color: rgb(255, 121, 198);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2 {
  color: rgb(189, 147, 249);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 248, 242);
}

body h3 {
  color: rgb(255, 85, 85);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h4 {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h5 {
  color: rgb(80, 250, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h6 {
  color: rgb(139, 233, 253);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body hr {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(2, 5, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 5, 23);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(248, 248, 242);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(248, 248, 242);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(248, 248, 242);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    footer: `body footer {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(248, 248, 242);
  border-top-width: 0px;
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body footer ul li a {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .darkmode svg {
  color: rgb(248, 248, 242);
  stroke: rgb(248, 248, 242);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .breadcrumb-element p {
  color: rgb(189, 147, 249);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .metadata {
  color: rgb(248, 248, 242);
}

body .metadata-properties {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .navigation-progress {
  background-color: rgb(40, 42, 54);
}

body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body input[type=text] {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body sub {
  color: rgb(248, 248, 242);
  font-size: 15.8333px;
}

body summary {
  color: rgb(248, 248, 242);
}

body sup {
  color: rgb(248, 248, 242);
  font-size: 15.8333px;
}`,
  },
  light: {},
};
