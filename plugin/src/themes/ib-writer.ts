import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ib-writer",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-quattro"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 196;
  --accent-l: 20.4%;
  --accent-s: 61.5%;
  --background-modifier-active-hover: rgba(19, 66, 83, 0.1);
  --background-primary: rgb(27, 26, 27);
  --background-primary-alt: rgb(38, 37, 38);
  --background-secondary: #141414;
  --bases-cards-background: rgb(27, 26, 27);
  --bases-cards-cover-background: rgb(38, 37, 38);
  --bases-table-cell-background-active: rgb(27, 26, 27);
  --bases-table-cell-background-disabled: rgb(38, 37, 38);
  --bases-table-cell-background-selected: rgba(19, 66, 83, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(20, 68, 84);
  --bases-table-group-background: rgb(38, 37, 38);
  --bases-table-header-background: rgb(27, 26, 27);
  --bases-table-summary-background: rgb(27, 26, 27);
  --blockquote-border-color: clear;
  --blockquote-font-style: italic;
  --bodyFont: var(--font-text);
  --canvas-background: rgb(27, 26, 27);
  --caret-color: rgb(204, 204, 204);
  --checkbox-border-color: rgb(204, 204, 204);
  --checkbox-color: clear;
  --checkbox-color-hover: rgb(22, 80, 96);
  --checkbox-marker-color: rgb(27, 26, 27);
  --checkbox-size: 1.125rem;
  --checklist-done-color: #7b7a78;
  --code-background: rgb(38, 37, 38);
  --code-block-background-color: rgb(240, 240, 240);
  --code-block-background-color-dark: rgb(38, 37, 38);
  --code-normal: rgb(204, 204, 204);
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: rgb(204, 204, 204);
  --color-accent: rgb(204, 204, 204);
  --color-accent-1: rgb(22, 80, 96);
  --color-accent-2: rgb(23, 94, 109);
  --color-accent-hsl: 196, 61.5%, 20.4%;
  --color-base-00: rgb(27, 26, 27);
  --color-base-10: rgb(38, 37, 38);
  --color-base-100: rgb(204, 204, 204);
  --color-base-20: #141414;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: rgb(20, 68, 84);
  --edit-view-background-color: rgb(247, 247, 247);
  --edit-view-background-color-dark: rgb(27, 26, 27);
  --embed-block-shadow-hover: clear;
  --embed-border-start: 2px solid rgb(20, 68, 84);
  --file-header-background: rgb(27, 26, 27);
  --file-header-background-focused: rgb(27, 26, 27);
  --file-header-font: "iA Writer Quattro V", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 750px;
  --flair-color: rgb(204, 204, 204);
  --font-interface: "iA Writer Quattro V", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-override: "iA Writer Quattro V";
  --font-mermaid: '??', "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "iA Writer Mono V";
  --font-print: '??', '??', "iA Writer Duo V", 'Arial';
  --font-text: '??', "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-size: 1.125rem;
  --font-text-theme: "iA Writer Duo V";
  --footnote-line-height: 1.6;
  --graph-node-focused: rgb(22, 80, 96);
  --graph-text: rgb(204, 204, 204);
  --gray: var(--text-normal);
  --h1-size: 1.4rem;
  --h2-size: 1.3rem;
  --h3-size: 1.2rem;
  --h4-size: 1.2rem;
  --h4-style: oblique;
  --h5-line-height: 1.6;
  --h5-size: 1.17rem;
  --h5-style: oblique;
  --h5-weight: normal;
  --h6-line-height: 1.6;
  --h6-size: 1.17rem;
  --hashtag-underline-color: #b4b3b0;
  --hashtag-underline-color-dark: #7a7a79;
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: rgb(22, 80, 96);
  --icon-color-focused: rgb(204, 204, 204);
  --indicator-color: #00bfff;
  --inline-title-size: 1.4rem;
  --interactive-accent: rgb(20, 68, 84);
  --interactive-accent-hover: rgb(22, 80, 96);
  --interactive-accent-hsl: 196, 61.5%, 20.4%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.6;
  --link-color: rgb(22, 80, 96);
  --link-color-hover: #0591cf;
  --link-external-color: rgb(22, 80, 96);
  --link-external-color-hover: #0591cf;
  --link-unresolved-color: rgb(22, 80, 96);
  --link-unresolved-decoration-color: rgba(19, 66, 83, 0.3);
  --list-done-color: #b4b3b0;
  --list-done-color-dark: #7b7a78;
  --list-marker-color-collapsed: rgb(204, 204, 204);
  --menu-background: #141414;
  --metadata-input-font: "iA Writer Quattro V", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-height: 1.96875rem;
  --metadata-input-text-color: rgb(204, 204, 204);
  --metadata-label-font: "iA Writer Quattro V", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: rgb(27, 26, 27);
  --my-accent-color: rgb(185, 233, 249);
  --my-accent-color-dark: rgb(20, 68, 84);
  --my-accent-color-dark-render: rgb(34, 60, 75);
  --my-accent-color-render: rgb(211, 237, 252);
  --nav-activer-color: rgb(228, 230, 231);
  --nav-activer-color-dark: rgb(64, 65, 68);
  --nav-background-color: #fdfdfd;
  --nav-background-color-dark: #141414;
  --nav-heading-color: rgb(204, 204, 204);
  --nav-heading-color-hover: rgb(204, 204, 204);
  --nav-item-background-active: rgb(64, 65, 68);
  --nav-item-background-selected: rgba(19, 66, 83, 0.15);
  --nav-item-color-active: rgb(204, 204, 204);
  --nav-item-color-highlighted: rgb(22, 80, 96);
  --nav-item-color-hover: rgb(204, 204, 204);
  --nav-item-color-selected: rgb(204, 204, 204);
  --nav-item-size: 0.875rem;
  --nav-separator-color: rgb(230, 230, 230);
  --nav-separator-color-dark: rgb(38, 38, 38);
  --pdf-background: rgb(27, 26, 27);
  --pdf-page-background: rgb(27, 26, 27);
  --pdf-sidebar-background: rgb(27, 26, 27);
  --pill-color-hover: rgb(204, 204, 204);
  --pill-color-remove-hover: rgb(22, 80, 96);
  --popover-font-size: 1.125rem;
  --prompt-background: rgb(27, 26, 27);
  --ribbon-background: #141414;
  --ribbon-background-collapsed: rgb(27, 26, 27);
  --search-result-background: rgb(27, 26, 27);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(204, 204, 204);
  --setting-items-background: rgb(38, 37, 38);
  --sidebar-markdown-font-size: 1.0125rem;
  --status-bar-background: #141414;
  --suggestion-background: rgb(27, 26, 27);
  --tab-background-active: rgb(27, 26, 27);
  --tab-container-background: #141414;
  --tab-switcher-background: #141414;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(204, 204, 204);
  --tab-text-color-focused-active-current: rgb(204, 204, 204);
  --tab-text-color-focused-highlighted: rgb(22, 80, 96);
  --table-add-button-border-width: 0px;
  --table-border-width: 0px;
  --table-column-first-border-width: 0px;
  --table-column-last-border-width: 0px;
  --table-drag-handle-background-active: rgb(20, 68, 84);
  --table-header-color: rgb(204, 204, 204);
  --table-header-size: 0.93rem;
  --table-selection: rgba(19, 66, 83, 0.1);
  --table-selection-border-color: rgb(20, 68, 84);
  --table-text-size: 0.93rem;
  --tag-background: clear;
  --tag-background-hover: rgba(19, 66, 83, 0.2);
  --tag-border-color: rgba(19, 66, 83, 0.15);
  --tag-border-color-hover: rgba(19, 66, 83, 0.15);
  --tag-color: rgb(204, 204, 204);
  --tag-color-hover: rgb(22, 80, 96);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(22, 80, 96);
  --text-accent-hover: #0591cf;
  --text-color: rgb(26, 26, 26);
  --text-color-dark: rgb(204, 204, 204);
  --text-normal: rgb(204, 204, 204);
  --text-selection: rgb(20, 68, 84);
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #141414;
  --titlebar-text-color-focused: rgb(204, 204, 204);
  --vault-profile-color: rgb(204, 204, 204);
  --vault-profile-color-hover: rgb(204, 204, 204);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(27, 26, 27);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body div#quartz-root {
  background-color: rgb(27, 26, 27);
  color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > em, em {
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > i, i {
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > strong, strong {
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .text-highlight {
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body del {
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body p {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: underline rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: underline rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body a.internal.broken {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(22, 81, 97);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(22, 81, 97) none 0px;
  text-decoration: underline rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    lists: `body dd {
  color: rgb(204, 204, 204);
}

body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

body dt {
  color: rgb(204, 204, 204);
}

body ol > li {
  color: rgb(204, 204, 204);
}

body ol.overflow {
  background-color: rgb(27, 26, 27);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul > li {
  color: rgb(204, 204, 204);
}

body ul.overflow {
  background-color: rgb(27, 26, 27);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `body blockquote {
  font-family: "iA Writer Quattro V", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body table {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  margin-top: 0px;
  width: 1780px;
}

body td {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  color: rgb(204, 204, 204);
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-left-color: rgb(204, 204, 204);
  border-left-width: 0px;
  border-right-color: rgb(204, 204, 204);
  border-right-width: 0px;
  color: rgb(204, 204, 204);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 37, 38);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 37, 38);
  color: rgb(204, 204, 204);
}

body pre > code, pre:has(> code) {
  background-color: rgb(38, 37, 38);
  padding-left: 25px;
  padding-right: 25px;
}

body pre:has(> code) {
  background-color: rgb(38, 37, 38);
  padding-left: 25px;
  padding-right: 25px;
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body figcaption {
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 18px;
}

body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  margin-bottom: 18px;
  margin-top: 18px;
}

body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `body .file-embed {
  background-color: rgb(38, 37, 38);
}

body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(20, 68, 84);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(20, 68, 84);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(123, 122, 120);
  text-decoration: line-through rgb(123, 122, 120);
  text-decoration-color: rgb(123, 122, 120);
}

body input[type=checkbox] {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  margin-left: -27px;
  width: 18px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    search: `body .search > .search-button {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(27, 26, 27);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(20, 67, 84, 0.15);
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-left-color: rgba(20, 67, 84, 0.15);
  border-right-color: rgba(20, 67, 84, 0.15);
  border-top-color: rgba(20, 67, 84, 0.15);
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(204, 204, 204);
}

body h1 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h2 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h3 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h4 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h5 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h6 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(27, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 26, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(64, 65, 68);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    footer: `body footer {
  background-color: rgb(20, 20, 20);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body li.section-li > .section .meta {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .metadata {
  font-family: "iA Writer Quattro V", sans-serif;
  margin-bottom: 0px;
}

body .metadata-properties {
  font-family: "iA Writer Quattro V", sans-serif;
}

body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

body .page-header h2.page-title {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body input[type=text] {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(38, 37, 38);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  font-family: "??", "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body sub {
  color: rgb(204, 204, 204);
  font-size: 15px;
}

body summary {
  color: rgb(204, 204, 204);
}

body sup {
  color: rgb(204, 204, 204);
  font-size: 15px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 201;
  --accent-s: 93%;
  --background-modifier-active-hover: rgba(88, 192, 249, 0.1);
  --background-modifier-form-field: rgb(247, 247, 247);
  --background-modifier-form-field-hover: rgb(247, 247, 247);
  --background-primary: rgb(247, 247, 247);
  --background-primary-alt: rgb(240, 240, 240);
  --background-secondary: #fdfdfd;
  --bases-cards-background: rgb(247, 247, 247);
  --bases-cards-cover-background: rgb(240, 240, 240);
  --bases-table-cell-background-active: rgb(247, 247, 247);
  --bases-table-cell-background-disabled: rgb(240, 240, 240);
  --bases-table-cell-background-selected: rgba(88, 192, 249, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #00bfff;
  --bases-table-group-background: rgb(240, 240, 240);
  --bases-table-header-background: rgb(247, 247, 247);
  --bases-table-summary-background: rgb(247, 247, 247);
  --blockquote-border-color: clear;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, rgb(247, 247, 247) 65%, transparent) linear-gradient(rgb(247, 247, 247), color-mix(in srgb, rgb(247, 247, 247) 65%, transparent));
  --bodyFont: var(--font-text);
  --canvas-background: rgb(247, 247, 247);
  --caret-color: rgb(26, 26, 26);
  --checkbox-border-color: rgb(26, 26, 26);
  --checkbox-color: clear;
  --checkbox-color-hover: rgb(136, 217, 252);
  --checkbox-marker-color: rgb(247, 247, 247);
  --checkbox-size: 1.125rem;
  --checklist-done-color: #b4b3b0;
  --code-background: rgb(240, 240, 240);
  --code-block-background-color: rgb(240, 240, 240);
  --code-block-background-color-dark: rgb(38, 37, 38);
  --code-normal: rgb(26, 26, 26);
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: rgb(26, 26, 26);
  --color-accent: rgb(26, 26, 26);
  --color-accent-1: rgb(112, 204, 251);
  --color-accent-2: rgb(136, 217, 252);
  --color-accent-hsl: 201, 93%, 66%;
  --color-base-00: rgb(247, 247, 247);
  --color-base-10: rgb(240, 240, 240);
  --color-base-100: rgb(26, 26, 26);
  --color-base-20: #fdfdfd;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: #00bfff;
  --dropdown-background: rgb(247, 247, 247);
  --dropdown-background-hover: rgb(240, 240, 240);
  --edit-view-background-color: rgb(247, 247, 247);
  --edit-view-background-color-dark: rgb(27, 26, 27);
  --embed-block-shadow-hover: clear;
  --embed-border-start: 2px solid #00bfff;
  --file-header-background: rgb(247, 247, 247);
  --file-header-background-focused: rgb(247, 247, 247);
  --file-header-font: "iA Writer Quattro V", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 750px;
  --flair-background: rgb(247, 247, 247);
  --flair-color: rgb(26, 26, 26);
  --font-interface: "iA Writer Quattro V", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-override: "iA Writer Quattro V";
  --font-mermaid: '??', "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "iA Writer Mono V";
  --font-print: '??', '??', "iA Writer Duo V", 'Arial';
  --font-text: '??', "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-size: 1.125rem;
  --font-text-theme: "iA Writer Duo V";
  --footnote-line-height: 1.6;
  --graph-node-focused: rgb(26, 26, 26);
  --graph-text: rgb(26, 26, 26);
  --gray: var(--text-normal);
  --h1-size: 1.4rem;
  --h2-size: 1.3rem;
  --h3-size: 1.2rem;
  --h4-size: 1.2rem;
  --h4-style: oblique;
  --h5-line-height: 1.6;
  --h5-size: 1.17rem;
  --h5-style: oblique;
  --h5-weight: normal;
  --h6-line-height: 1.6;
  --h6-size: 1.17rem;
  --hashtag-underline-color: #b4b3b0;
  --hashtag-underline-color-dark: #7a7a79;
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: rgb(26, 26, 26);
  --icon-color-focused: rgb(26, 26, 26);
  --indicator-color: #00bfff;
  --inline-title-size: 1.4rem;
  --interactive-accent: #00bfff;
  --interactive-accent-hover: rgb(136, 217, 252);
  --interactive-accent-hsl: 201, 93%, 66%;
  --interactive-hover: rgb(240, 240, 240);
  --interactive-normal: rgb(247, 247, 247);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.6;
  --link-color: rgb(26, 26, 26);
  --link-color-hover: #0591cf;
  --link-external-color: rgb(26, 26, 26);
  --link-external-color-hover: #0591cf;
  --link-unresolved-color: rgb(26, 26, 26);
  --link-unresolved-decoration-color: rgba(88, 192, 249, 0.3);
  --list-done-color: #b4b3b0;
  --list-done-color-dark: #7b7a78;
  --list-marker-color-collapsed: rgb(26, 26, 26);
  --menu-background: #fdfdfd;
  --metadata-input-font: "iA Writer Quattro V", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-height: 1.96875rem;
  --metadata-input-text-color: rgb(26, 26, 26);
  --metadata-label-font: "iA Writer Quattro V", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: rgb(247, 247, 247);
  --my-accent-color: rgb(185, 233, 249);
  --my-accent-color-dark: rgb(20, 68, 84);
  --my-accent-color-dark-render: rgb(34, 60, 75);
  --my-accent-color-render: rgb(211, 237, 252);
  --nav-activer-color: rgb(228, 230, 231);
  --nav-activer-color-dark: rgb(64, 65, 68);
  --nav-background-color: #fdfdfd;
  --nav-background-color-dark: #141414;
  --nav-heading-color: rgb(26, 26, 26);
  --nav-heading-color-hover: rgb(26, 26, 26);
  --nav-item-background-active: rgb(228, 230, 231);
  --nav-item-background-selected: rgba(88, 192, 249, 0.15);
  --nav-item-color-active: rgb(26, 26, 26);
  --nav-item-color-highlighted: rgb(26, 26, 26);
  --nav-item-color-hover: rgb(26, 26, 26);
  --nav-item-color-selected: rgb(26, 26, 26);
  --nav-item-size: 0.875rem;
  --nav-separator-color: rgb(230, 230, 230);
  --nav-separator-color-dark: rgb(38, 38, 38);
  --pdf-background: rgb(247, 247, 247);
  --pdf-page-background: rgb(247, 247, 247);
  --pdf-sidebar-background: rgb(247, 247, 247);
  --pill-color-hover: rgb(26, 26, 26);
  --pill-color-remove-hover: rgb(26, 26, 26);
  --popover-font-size: 1.125rem;
  --prompt-background: rgb(247, 247, 247);
  --raised-background: color-mix(in srgb, rgb(247, 247, 247) 65%, transparent) linear-gradient(rgb(247, 247, 247), color-mix(in srgb, rgb(247, 247, 247) 65%, transparent));
  --ribbon-background: #fdfdfd;
  --ribbon-background-collapsed: rgb(247, 247, 247);
  --search-result-background: rgb(247, 247, 247);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(26, 26, 26);
  --setting-items-background: rgb(240, 240, 240);
  --sidebar-markdown-font-size: 1.0125rem;
  --status-bar-background: #fdfdfd;
  --suggestion-background: rgb(247, 247, 247);
  --tab-background-active: rgb(247, 247, 247);
  --tab-container-background: #fdfdfd;
  --tab-switcher-background: #fdfdfd;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdfdfd, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(26, 26, 26);
  --tab-text-color-focused-active-current: rgb(26, 26, 26);
  --tab-text-color-focused-highlighted: rgb(26, 26, 26);
  --table-add-button-border-width: 0px;
  --table-border-width: 0px;
  --table-column-first-border-width: 0px;
  --table-column-last-border-width: 0px;
  --table-drag-handle-background-active: #00bfff;
  --table-header-color: rgb(26, 26, 26);
  --table-header-size: 0.93rem;
  --table-selection: rgba(88, 192, 249, 0.1);
  --table-selection-border-color: #00bfff;
  --table-text-size: 0.93rem;
  --tag-background: clear;
  --tag-background-hover: rgba(88, 192, 249, 0.2);
  --tag-border-color: rgba(88, 192, 249, 0.15);
  --tag-border-color-hover: rgba(88, 192, 249, 0.15);
  --tag-color: rgb(26, 26, 26);
  --tag-color-hover: rgb(26, 26, 26);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(26, 26, 26);
  --text-accent-hover: #0591cf;
  --text-color: rgb(26, 26, 26);
  --text-color-dark: rgb(204, 204, 204);
  --text-normal: rgb(26, 26, 26);
  --text-selection: rgb(185, 233, 249);
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #fdfdfd;
  --titlebar-text-color-focused: rgb(26, 26, 26);
  --vault-profile-color: rgb(26, 26, 26);
  --vault-profile-color-hover: rgb(26, 26, 26);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 253, 253);
  color: rgb(26, 26, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 253, 253);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 253, 253);
  color: rgb(26, 26, 26);
}

body div#quartz-root {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > em, em {
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > i, i {
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > strong, strong {
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .text-highlight {
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body del {
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: line-through rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body p {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: underline rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: underline rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body a.internal.broken {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: underline rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    lists: `body dd {
  color: rgb(26, 26, 26);
}

body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

body dt {
  color: rgb(26, 26, 26);
}

body ol > li {
  color: rgb(26, 26, 26);
}

body ol.overflow {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ul > li {
  color: rgb(26, 26, 26);
}

body ul.overflow {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `body blockquote {
  font-family: "iA Writer Quattro V", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body table {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  margin-top: 0px;
  width: 1780px;
}

body td {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  color: rgb(26, 26, 26);
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-left-color: rgb(26, 26, 26);
  border-left-width: 0px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 0px;
  color: rgb(26, 26, 26);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 240, 240);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 240, 240);
  color: rgb(26, 26, 26);
}

body pre > code, pre:has(> code) {
  background-color: rgb(240, 240, 240);
  padding-left: 25px;
  padding-right: 25px;
}

body pre:has(> code) {
  background-color: rgb(240, 240, 240);
  padding-left: 25px;
  padding-right: 25px;
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body figcaption {
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 18px;
}

body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  margin-bottom: 18px;
  margin-top: 18px;
}

body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `body .file-embed {
  background-color: rgb(240, 240, 240);
}

body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .transclude {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(0, 191, 255);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(0, 191, 255);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Duo V", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(180, 179, 176);
  text-decoration: line-through rgb(180, 179, 176);
  text-decoration-color: rgb(180, 179, 176);
}

body input[type=checkbox] {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  margin-left: -27px;
  width: 18px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    search: `body .search > .search-button {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(247, 247, 247);
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 253, 253);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(88, 192, 249, 0.15);
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-left-color: rgba(88, 192, 249, 0.15);
  border-right-color: rgba(88, 192, 249, 0.15);
  border-top-color: rgba(88, 192, 249, 0.15);
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(26, 26, 26);
}

body h1 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h2 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h3 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h4 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h5 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h6 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-corner {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-track {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(228, 230, 231);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    footer: `body footer {
  background-color: rgb(253, 253, 253);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body li.section-li > .section .meta {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .metadata {
  font-family: "iA Writer Quattro V", sans-serif;
  margin-bottom: 0px;
}

body .metadata-properties {
  font-family: "iA Writer Quattro V", sans-serif;
}

body .navigation-progress {
  background-color: rgb(253, 253, 253);
}

body .page-header h2.page-title {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(26, 26, 26);
  text-decoration: underline dotted rgb(26, 26, 26);
}

body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body input[type=text] {
  font-family: "iA Writer Quattro V", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
  font-family: "??", "iA Writer Mono V", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body sub {
  color: rgb(26, 26, 26);
  font-size: 15px;
}

body summary {
  color: rgb(26, 26, 26);
}

body sup {
  color: rgb(26, 26, 26);
  font-size: 15px;
}`,
  },
};
