import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dark-moss", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --altblue: #0087ff;
  --aqua: #078480;
  --aquadark: #0b4c5e;
  --background-accent: #000;
  --background-modifier-active-hover: rgb(0, 0, 0);
  --background-modifier-border: #424958;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #ff0f44;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #15df6b;
  --background-primary: #161b22;
  --background-primary-alt: #13161b;
  --background-secondary: #11161d;
  --background-secondary-alt: #0d1117;
  --bases-cards-background: #161b22;
  --bases-cards-cover-background: #13161b;
  --bases-cards-shadow: 0 0 0 1px #424958;
  --bases-embed-border-color: #424958;
  --bases-group-heading-property-color: #bbb;
  --bases-table-border-color: #424958;
  --bases-table-cell-background-active: #161b22;
  --bases-table-cell-background-disabled: #13161b;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4c78cc;
  --bases-table-group-background: #13161b;
  --bases-table-header-background: #161b22;
  --bases-table-header-color: #bbb;
  --bases-table-summary-background: #161b22;
  --blockquote-border-color: #4c78cc;
  --blue: #61afef;
  --blur-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --bodyFont: var(--font-interface);
  --canvas-background: #161b22;
  --caret-color: #dedede;
  --checkbox-border-color-hover: #bbb;
  --checkbox-color: #4c78cc;
  --checkbox-color-hover: #5082df;
  --checkbox-marker-color: #161b22;
  --checklist-done-color: #bbb;
  --code-background: #13161b;
  --code-border-color: #424958;
  --code-normal: #dedede;
  --code-punctuation: #bbb;
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: rgb(81, 179, 133);
  --cyan: #0fb3ff;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif;
  --divider-color: #424958;
  --divider-color-hover: #4c78cc;
  --dropdown-background: #20242b;
  --dropdown-background-hover: #353b47;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958;
  --embed-border-start: 2px solid #4c78cc;
  --file-header-background: #161b22;
  --file-header-background-focused: #161b22;
  --file-header-font: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 1000px;
  --flair-background: #20242b;
  --flair-color: #dedede;
  --font-interface: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "Consolas", "Fira Code", "Source Code Pro", "Droid Sans Mono", "Monoid", "Arial", sans-serif;
  --font-weight-title: 600;
  --footnote-divider-color: #424958;
  --footnote-id-color: #bbb;
  --graph-node: #bbb;
  --graph-node-focused: rgb(81, 179, 133);
  --graph-text: #dedede;
  --gray: var(--text-muted);
  --gray-1: #5C6370;
  --green: #15df6b;
  --green-light: #42accd;
  --headerFont: var(--font-interface);
  --highlight: var(--text-highlight-bg);
  --hr-color: #424958;
  --icon-color: #bbb;
  --icon-color-active: rgb(81, 179, 133);
  --icon-color-focused: #dedede;
  --icon-color-hover: #bbb;
  --interactive-accent: #4c78cc;
  --interactive-accent-hover: #5082df;
  --interactive-accent-rgb: 76, 120, 204;
  --interactive-hover: #353b47;
  --interactive-normal: #20242b;
  --light: var(--background-primary);
  --light-orange: #ff693f;
  --lightgray: var(--background-secondary);
  --lila: #c90481;
  --lime: #b2f711;
  --line-height-headers: 1;
  --link-color: rgb(81, 179, 133);
  --link-color-hover: rgb(87, 224, 160);
  --link-external-color: rgb(81, 179, 133);
  --link-external-color-hover: rgb(87, 224, 160);
  --link-unresolved-color: rgb(81, 179, 133);
  --list-marker-color-collapsed: rgb(81, 179, 133);
  --list-marker-color-hover: #bbb;
  --magenta: #ff2857;
  --menu-background: #11161d;
  --metadata-border-color: #424958;
  --metadata-divider-color: #424958;
  --metadata-input-font: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #dedede;
  --metadata-label-font: '??', '??', "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #bbb;
  --metadata-label-text-color-hover: #bbb;
  --modal-background: #161b22;
  --nav-heading-color: #dedede;
  --nav-heading-color-collapsed-hover: #bbb;
  --nav-heading-color-hover: #dedede;
  --nav-item-color: #bbb;
  --nav-item-color-active: #dedede;
  --nav-item-color-highlighted: rgb(81, 179, 133);
  --nav-item-color-hover: #dedede;
  --nav-item-color-selected: #dedede;
  --nav-tag-color-active: #bbb;
  --nav-tag-color-hover: #bbb;
  --orange: #ffc83f;
  --panel-border-color: #18191e;
  --pdf-background: #161b22;
  --pdf-page-background: #161b22;
  --pdf-shadow: 0 0 0 1px #424958;
  --pdf-sidebar-background: #161b22;
  --pdf-thumbnail-shadow: 0 0 0 1px #424958;
  --peach: #ff5555;
  --pill-border-color: #424958;
  --pill-color: #bbb;
  --pill-color-hover: #dedede;
  --pill-color-remove-hover: rgb(81, 179, 133);
  --prompt-background: #161b22;
  --purple: #8c44aa;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --red: #ff0f44;
  --ribbon-background: #11161d;
  --ribbon-background-collapsed: #161b22;
  --search-clear-button-color: #bbb;
  --search-icon-color: #bbb;
  --search-match-color: #ffff00;
  --search-other-match-color: #ff9632;
  --search-result-background: #161b22;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #dedede;
  --setting-items-background: #13161b;
  --setting-items-border-color: #424958;
  --slider-track-background: #424958;
  --status-bar-background: #11161d;
  --status-bar-border-color: #424958;
  --status-bar-text-color: #bbb;
  --suggestion-background: #161b22;
  --tab-background-active: #161b22;
  --tab-container-background: #11161d;
  --tab-outline-color: #424958;
  --tab-switcher-background: #11161d;
  --tab-switcher-menubar-background: linear-gradient(to top, #11161d, transparent);
  --tab-text-color-active: #bbb;
  --tab-text-color-focused: #bbb;
  --tab-text-color-focused-active: #bbb;
  --tab-text-color-focused-active-current: #dedede;
  --tab-text-color-focused-highlighted: rgb(81, 179, 133);
  --table-add-button-border-color: #424958;
  --table-border-color: #424958;
  --table-drag-handle-background-active: #4c78cc;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #424958;
  --table-header-color: #dedede;
  --table-selection-border-color: #4c78cc;
  --tag-color: rgb(81, 179, 133);
  --tag-color-hover: rgb(81, 179, 133);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(81, 179, 133);
  --text-accent-hover: rgb(87, 224, 160);
  --text-accent1: #61d29d;
  --text-accent2: #00ddff;
  --text-error: #e16d76;
  --text-error-hover: #c9626a;
  --text-highlight-bg: rgba(190, 30, 150, 0.7);
  --text-muted: #bbb;
  --text-normal: #dedede;
  --text-on-accent: #dcddde;
  --text-selection: rgba(0, 122, 255, 0.2);
  --text-title-h1: #289aff;
  --text-title-h2: #00f56a;
  --text-title-h3: #0af7ff;
  --text-title-h4: #F9F871;
  --text-title-h5: #ff5757;
  --text-title-h6: #ff3cd5;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #11161d;
  --titlebar-background-focused: #0d1117;
  --titlebar-border-color: #424958;
  --titlebar-text-color: #bbb;
  --titlebar-text-color-focused: #dedede;
  --vault-profile-color: #dedede;
  --vault-profile-color-hover: #dedede;
  --yellow: #fccd11;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 22, 29);
  color: rgb(222, 222, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 22, 29);
  color: rgb(222, 222, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(66, 73, 88);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 22, 29);
  border-left-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

body div#quartz-root {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > i, i {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgba(190, 30, 150, 0.7);
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body del {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: line-through rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body p {
  color: rgb(187, 187, 187);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    links: `body a.external, footer a {
  color: rgb(81, 179, 133);
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: underline rgb(81, 179, 133);
  text-decoration-color: rgb(81, 179, 133);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 179, 133);
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgb(81, 179, 133);
  text-decoration-color: rgb(81, 179, 133);
}

body a.internal.broken {
  color: rgb(81, 179, 133);
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(222, 222, 222);
}

body dt {
  color: rgb(222, 222, 222);
}

body ol > li {
  color: rgb(222, 222, 222);
}

body ol.overflow {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body ul > li {
  color: rgb(222, 222, 222);
}

body ul.overflow {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    blockquotes: `body blockquote {
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body table {
  color: rgb(222, 222, 222);
}

body td {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

body th {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}`,
    code: `body code {
  border-bottom-color: rgb(15, 179, 255);
  border-left-color: rgb(15, 179, 255);
  border-right-color: rgb(15, 179, 255);
  border-top-color: rgb(15, 179, 255);
  color: rgb(15, 179, 255);
  font-family: Consolas, "Fira Code", "Source Code Pro", "Droid Sans Mono", Monoid, Arial, sans-serif;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

body pre > code, pre:has(> code) {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}

body pre:has(> code) {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body figcaption {
  color: rgb(222, 222, 222);
}

body figure {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body img {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body video {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    embeds: `body .file-embed {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body .footnotes {
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .transclude {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(76, 120, 204);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(76, 120, 204);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(187, 187, 187);
  text-decoration: line-through rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='!'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='*'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='-'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='/'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='>'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='?'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='I'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='S'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='b'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='c'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='d'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='f'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='i'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='k'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='l'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='p'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='u'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='w'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 27, 34);
}

body .search > .search-container > .search-space > * {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 22, 29);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(81, 179, 133);
}

body h1 {
  color: rgb(40, 154, 255);
}

body h2 {
  color: rgb(0, 245, 106);
}

body h2.page-title, h2.page-title a {
  color: rgb(222, 222, 222);
}

body h3 {
  color: rgb(10, 247, 255);
}

body h4 {
  color: rgb(249, 248, 113);
}

body h5 {
  color: rgb(255, 87, 87);
}

body h6 {
  color: rgb(255, 60, 213);
}

body hr {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(117, 126, 138);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(117, 126, 138);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(117, 126, 138);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    footer: `body footer {
  background-color: rgb(17, 22, 29);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  color: rgb(187, 187, 187);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(222, 222, 222);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
  text-decoration: rgb(117, 126, 138);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body li.section-li > .section .meta {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
  text-decoration: rgb(117, 126, 138);
}

body ul.section-ul {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .darkmode svg {
  color: rgb(187, 187, 187);
  stroke: rgb(187, 187, 187);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .breadcrumb-element p {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .metadata {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(187, 187, 187);
}

body .metadata-properties {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .navigation-progress {
  background-color: rgb(17, 22, 29);
}

body .page-header h2.page-title {
  color: rgb(222, 222, 222);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(222, 222, 222);
  text-decoration: underline dotted rgb(222, 222, 222);
}

body details {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body input[type=text] {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
  font-family: Consolas, "Fira Code", "Source Code Pro", "Droid Sans Mono", Monoid, Arial, sans-serif;
}

body progress {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body sub {
  color: rgb(222, 222, 222);
}

body summary {
  color: rgb(222, 222, 222);
}

body sup {
  color: rgb(222, 222, 222);
}`,
  },
  light: {},
};
