import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dark-clarity",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["noto-sans", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
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
  --canvas-background: #161b22;
  --caret-color: #dedede;
  --checkbox-border-color-hover: #bbb;
  --checkbox-color: #4c78cc;
  --checkbox-color-hover: #5082df;
  --checkbox-marker-color: #161b22;
  --checklist-done-color: #bbb;
  --code-background: #13161b;
  --code-border-color: #424958;
  --code-function: #BCBEC4;
  --code-keyword: #CF8E6D;
  --code-normal: #dedede;
  --code-property: #BCBEC4;
  --code-punctuation: #bbb;
  --code-string: #72b67b;
  --code-tag: #c5bf6a;
  --code-value: #4a88cf;
  --collapse-icon-color-collapsed: #51b385;
  --cyan: #0fb3ff;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #424958;
  --divider-color-hover: #4c78cc;
  --dropdown-background: #20242b;
  --dropdown-background-hover: #353b47;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958;
  --embed-border-start: 2px solid #4c78cc;
  --file-header-background: #161b22;
  --file-header-background-focused: #161b22;
  --flair-background: #20242b;
  --flair-color: #dedede;
  --folder-alpha: 0.2;
  --folder-color0: rgb(0, 0, 0);
  --folder-color1: rgb(0, 0, 0);
  --folder-color2: rgb(0, 0, 0);
  --folder-color3: rgb(0, 0, 0);
  --folder-color4: rgb(0, 0, 0);
  --folder-color5: rgb(0, 0, 0);
  --folder-color6: rgb(0, 0, 0);
  --font-weight-title: 600;
  --footnote-divider-color: #424958;
  --footnote-id-color: #bbb;
  --graph-node: #bbb;
  --graph-node-focused: #51b385;
  --graph-text: #dedede;
  --gray: var(--text-muted);
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #15df6b;
  --green-light: #42accd;
  --highlight: var(--text-highlight-bg);
  --hr-color: #424958;
  --icon-color: #bbb;
  --icon-color-active: #51b385;
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
  --link-color: #51b385;
  --link-color-hover: rgb(87, 224, 160);
  --link-external-color: #51b385;
  --link-external-color-hover: rgb(87, 224, 160);
  --link-unresolved-color: #51b385;
  --list-marker-color-collapsed: #51b385;
  --list-marker-color-hover: #bbb;
  --magenta: #ff2857;
  --menu-background: #11161d;
  --metadata-border-color: #424958;
  --metadata-divider-color: #424958;
  --metadata-input-text-color: #dedede;
  --metadata-label-text-color: #bbb;
  --metadata-label-text-color-hover: #bbb;
  --modal-background: #161b22;
  --nav-heading-color: #dedede;
  --nav-heading-color-collapsed-hover: #bbb;
  --nav-heading-color-hover: #dedede;
  --nav-item-color: #bbb;
  --nav-item-color-active: #dedede;
  --nav-item-color-highlighted: #51b385;
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
  --pill-color-remove-hover: #51b385;
  --prompt-background: #161b22;
  --purple: #8c44aa;
  --quote-color: rgb(61, 154, 216);
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
  --tab-text-color-focused-highlighted: #51b385;
  --table-add-button-border-color: #424958;
  --table-border-color: #424958;
  --table-drag-handle-background-active: #4c78cc;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #424958;
  --table-header-color: #dedede;
  --table-selection-border-color: #4c78cc;
  --tag-color: #58a6ff;
  --tag-color-hover: #449bff;
  --tertiary: var(--text-accent-hover);
  --text-accent: #51b385;
  --text-accent-hover: rgb(87, 224, 160);
  --text-accent1: #61d29d;
  --text-accent2: #00ddff;
  --text-error: #e16d76;
  --text-error-hover: #c9626a;
  --text-highlight-bg: rgb(102, 90, 231);
  --text-muted: #bbb;
  --text-normal: #dedede;
  --text-on-accent: #dcddde;
  --text-selection: rgba(0, 122, 255, 0.2);
  --text-title-h1: rgb(0, 0, 0);
  --text-title-h2: rgb(0, 0, 0);
  --text-title-h3: rgb(0, 0, 0);
  --text-title-h4: rgb(0, 0, 0);
  --text-title-h5: rgb(0, 0, 0);
  --text-title-h6: rgb(0, 0, 0);
  --textHighlight: var(--text-highlight-bg);
  --theme-color: rgb(0, 0, 0);
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  font-weight: 800;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > i, i {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  font-weight: 800;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgba(102, 90, 231, 0.5);
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body del {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: line-through rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body p {
  color: rgb(187, 187, 187);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    links: `body a.external, footer a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: underline rgb(81, 179, 133);
  text-decoration-color: rgb(81, 179, 133);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgb(81, 179, 133);
  text-decoration-color: rgb(81, 179, 133);
}

body a.internal.broken {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body table {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  width: 194.5px;
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
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body pre > code > [data-line] {
  border-left-color: rgb(222, 222, 222);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(222, 222, 222);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body figure {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body img {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(222, 222, 222);
  border-radius: 5px;
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: rgba(128, 128, 128, 0.3) 1px 1px 1px 0px;
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
    checkboxes: `body .katex-display > .katex {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 27, 34);
}

body .search > .search-container > .search-space > * {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(88, 166, 255);
}

body h1 {
  color: rgb(121, 107, 245);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h2 {
  color: rgb(131, 121, 236);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h3 {
  color: rgb(162, 162, 210);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h4 {
  color: rgb(251, 214, 203);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h5 {
  color: rgb(213, 149, 124);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h6 {
  color: rgb(207, 94, 68);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  text-decoration: rgb(117, 126, 138);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  text-decoration: rgb(117, 126, 138);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body footer ul li a {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body li.section-li > .section .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
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
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .navigation-progress {
  background-color: rgb(17, 22, 29);
}

body .page-header h2.page-title {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
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
}

body kbd {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
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
  light: {
    base: `:root:root {
  --altblue: #0087ff;
  --aqua: #078480;
  --aquadark: #0b4c5e;
  --blue: #61afef;
  --code-function: #000000;
  --code-keyword: #0033b3;
  --code-normal: #080808;
  --code-property: #871094;
  --code-string: #067d17;
  --code-tag: #0033b3;
  --code-value: #1750eb;
  --collapse-icon-color-collapsed: #51b385;
  --cyan: #0fb3ff;
  --folder-alpha: 0.2;
  --folder-color0: rgb(0, 0, 0);
  --folder-color1: rgb(0, 0, 0);
  --folder-color2: rgb(0, 0, 0);
  --folder-color3: rgb(0, 0, 0);
  --folder-color4: rgb(0, 0, 0);
  --folder-color5: rgb(0, 0, 0);
  --folder-color6: rgb(0, 0, 0);
  --font-weight-title: 700;
  --graph-node-focused: #51b385;
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #15df6b;
  --green-light: #42accd;
  --highlight: var(--text-highlight-bg);
  --icon-color-active: #51b385;
  --light-orange: #ff693f;
  --lila: #c90481;
  --lime: #b2f711;
  --line-height-headers: 2;
  --link-color: #51b385;
  --link-color-hover: rgb(87, 224, 160);
  --link-external-color: #51b385;
  --link-external-color-hover: rgb(87, 224, 160);
  --link-unresolved-color: #51b385;
  --list-marker-color-collapsed: #51b385;
  --magenta: #ff2857;
  --nav-item-color-highlighted: #51b385;
  --orange: #ffc83f;
  --peach: #ff5555;
  --pill-color-remove-hover: #51b385;
  --purple: #8c44aa;
  --quote-color: rgb(61, 154, 216);
  --red: #ff0f44;
  --search-match-color: #ffff00;
  --search-other-match-color: #ff9632;
  --secondary: var(--text-accent);
  --tab-text-color-focused-highlighted: #51b385;
  --tag-color: #58a6ff;
  --tag-color-hover: #449bff;
  --tertiary: var(--text-accent-hover);
  --text-accent: #51b385;
  --text-accent-hover: rgb(87, 224, 160);
  --text-accent1: #61d29d;
  --text-accent2: #00ddff;
  --text-highlight-bg: rgb(152, 143, 255);
  --text-title-h1: rgb(0, 0, 0);
  --text-title-h2: rgb(0, 0, 0);
  --text-title-h3: rgb(0, 0, 0);
  --text-title-h4: rgb(0, 0, 0);
  --text-title-h5: rgb(0, 0, 0);
  --text-title-h6: rgb(0, 0, 0);
  --textHighlight: var(--text-highlight-bg);
  --theme-color: rgb(0, 0, 0);
  --yellow: #fccd11;
  --quartz-icon-color: currentColor;
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .page article p > i, i {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgba(152, 143, 255, 0.52);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body del {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body p {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: underline rgb(81, 179, 133);
  text-decoration-color: rgb(81, 179, 133);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgb(81, 179, 133);
  text-decoration-color: rgb(81, 179, 133);
}

body a.internal.broken {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `body blockquote {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    tables: `body table {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  width: 194.5px;
}`,
    code: `body code {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body pre > code > [data-line] {
  border-left-color: rgb(8, 8, 8);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(8, 8, 8);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body pre > code, pre:has(> code) {
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}

body pre:has(> code) {
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `body figcaption {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body img {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: rgba(128, 128, 128, 0.3) 1px 1px 1px 0px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    search: `body .search > .search-button {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .search > .search-container > .search-space > * {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(88, 166, 255);
}

body h1 {
  color: rgb(121, 107, 245);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h2 {
  color: rgb(144, 135, 248);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h3 {
  color: rgb(174, 174, 255);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h4 {
  color: rgb(255, 189, 169);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h5 {
  color: rgb(250, 173, 143);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body h6 {
  color: rgb(245, 107, 77);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  text-decoration: rgb(117, 126, 138);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  text-decoration: rgb(117, 126, 138);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  text-decoration: rgb(117, 126, 138);
}`,
    footer: `body footer {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-width: 1px;
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-right-width: 1px;
  border-top-color: rgb(92, 92, 92);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
  text-decoration: rgb(117, 126, 138);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
  text-decoration: rgb(117, 126, 138);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    misc: `body .metadata {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .metadata-properties {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body .page-header h2.page-title {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

body kbd {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}`,
  },
};
