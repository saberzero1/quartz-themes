import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dark-clarity",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["noto-sans", "jetbrains-mono"],
    fontFiles: [
      {
        family: "Zhudou Sans Normal SS02",
        style: "normal",
        weight: "400",
        file: "zhudou-sans-normal-ss02.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "obsidian-theme-dark-clarity",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --altblue: #0087ff;
  --aqua: #078480;
  --aquadark: #0b4c5e;
  --background-accent: #000;
  --background-modifier-active-hover: hsl(224deg 23% 45% / 15%);
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
  --dark: var(--text-normal, #dedede);
  --darkgray: var(--text-normal, #dedede);
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
  --folder-color0: hsl( 214 21% 31% / 0.2);
  --folder-color1: hsl( 246 87% 69% / 0.2);
  --folder-color2: hsl( 245 75% 70% / 0.2);
  --folder-color3: hsl( 240 35% 73% / 0.2);
  --folder-color4: hsl( 13 84% 89%  / 0.2);
  --folder-color5: hsl( 17 51% 66%  / 0.2);
  --folder-color6: hsl( 11 59% 54%  / 0.2);
  --font-weight-title: 600;
  --footnote-divider-color: #424958;
  --footnote-id-color: #bbb;
  --graph-node: #bbb;
  --graph-node-focused: #51b385;
  --graph-text: #dedede;
  --gray: var(--text-muted, #bbb);
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #15df6b;
  --green-light: #42accd;
  --highlight: var(--text-highlight-bg, hsl(245,75%,63%,0.5));
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
  --light: var(--background-primary, #161b22);
  --light-orange: #ff693f;
  --lightgray: var(--background-secondary, #11161d);
  --lila: #c90481;
  --lime: #b2f711;
  --line-height-headers: 1;
  --link-color: #51b385;
  --link-color-hover: hsl(152, 69%, 61%);
  --link-external-color: #51b385;
  --link-external-color-hover: hsl(152, 69%, 61%);
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
  --secondary: var(--text-accent, #51b385);
  --setting-group-heading-color: #dedede;
  --setting-items-background: #13161b;
  --setting-items-border-color: #424958;
  --shiki-active-tab-border-color: #bbb;
  --shiki-code-background: #13161b;
  --shiki-code-normal: #bbb;
  --shiki-code-punctuation: #bbb;
  --shiki-gutter-border-color: #424958;
  --shiki-gutter-text-color-highlight: #bbb;
  --shiki-highlight-neutral: #bbb;
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
  --tertiary: var(--text-accent-hover, hsl(152, 69%, 61%));
  --text-accent: #51b385;
  --text-accent-hover: hsl(152, 69%, 61%);
  --text-accent1: #61d29d;
  --text-accent2: #00ddff;
  --text-error: #e16d76;
  --text-error-hover: #c9626a;
  --text-highlight-bg: hsl(245,75%,63%,0.5);
  --text-muted: #bbb;
  --text-normal: #dedede;
  --text-on-accent: #dcddde;
  --text-selection: rgba(0, 122, 255, 0.2);
  --text-title-h1: hsl(246 87% 69%);
  --text-title-h2: hsl(245 75% 70%);
  --text-title-h3: hsl(240 35% 73%);
  --text-title-h4: hsl(13 84% 89%);
  --text-title-h5: hsl(17 51% 66%);
  --text-title-h6: hsl(11 59% 54%);
  --textHighlight: var(--text-highlight-bg, hsl(245,75%,63%,0.5));
  --theme-color: hsl(245 75% 63%);
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

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 22, 29);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 22, 29);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(66, 73, 88);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 22, 29);
  border-left-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body html {
  --altblue: #0087ff;
  --aqua: #078480;
  --aquadark: #0b4c5e;
  --blue: #61afef;
  --cyan: #0fb3ff;
  --file-line-width: 1000px;
  --folder-alpha: 0.2;
  --folder-color0: hsl( 214 21% 31% / 0.2);
  --font-monospace: 'JetBrains Mono NL', 'JetBrains Mono',Consolas, Monaco,"等距更纱黑体 SC", monospace;
  --font-weight-title: 600;
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #15df6b;
  --green-light: #42accd;
  --light-orange: #ff693f;
  --lila: #c90481;
  --lime: #b2f711;
  --line-height-headers: 1;
  --magenta: #ff2857;
  --orange: #ffc83f;
  --peach: #ff5555;
  --purple: #8c44aa;
  --red: #ff0f44;
  --search-match-color: #ffff00;
  --search-other-match-color: #ff9632;
  --yellow: #fccd11;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  font-weight: 800;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  font-weight: 800;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(102, 90, 231, 0.5);
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(76, 120, 204);
  border-color: rgb(76, 120, 204);
}

html[saved-theme="dark"] body p {
  color: rgb(187, 187, 187);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(187, 187, 187) none 0px;
  text-decoration-color: rgb(187, 187, 187);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body table {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  width: 194.5px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(15, 179, 255);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body img {
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

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(76, 120, 204);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="folder"] {
  --callout-color: 2, 122, 255;
  --list-indent: 0em;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #161b22 50%);
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="folder"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 22, 29);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(88, 166, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(121, 107, 245);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h2 {
  color: rgb(131, 121, 236);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(162, 162, 210);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(251, 214, 203);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(213, 149, 124);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(207, 94, 68);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(222, 222, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(187, 187, 187);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(187, 187, 187);
  stroke: rgb(187, 187, 187);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(17, 22, 29);
  border-color: rgb(222, 222, 222);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(187, 187, 187);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(66, 73, 88);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(88, 166, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(17, 22, 29);
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(222, 222, 222);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(17, 22, 29);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(88, 166, 255);
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
  --folder-color0: hsl( 214 21% 31% / 0.2);
  --folder-color1: hsl( 246 87% 69%  / 0.2);
  --folder-color2: hsl( 245 89% 75%  / 0.2);
  --folder-color3: hsl( 240 99% 84%  / 0.2);
  --folder-color4: hsl( 14  99% 83%  / 0.2);
  --folder-color5: hsl( 17  91% 77%  / 0.2);
  --folder-color6: hsl( 11  89% 63%  / 0.2);
  --font-weight-title: 700;
  --graph-node-focused: #51b385;
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #15df6b;
  --green-light: #42accd;
  --highlight: var(--text-highlight-bg, hsl(245,100%,78%,0.52));
  --icon-color-active: #51b385;
  --light-orange: #ff693f;
  --lila: #c90481;
  --lime: #b2f711;
  --line-height-headers: 2;
  --link-color: #51b385;
  --link-color-hover: hsl(152, 69%, 61%);
  --link-external-color: #51b385;
  --link-external-color-hover: hsl(152, 69%, 61%);
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
  --secondary: var(--text-accent, #51b385);
  --tab-text-color-focused-highlighted: #51b385;
  --tag-color: #58a6ff;
  --tag-color-hover: #449bff;
  --tertiary: var(--text-accent-hover, hsl(152, 69%, 61%));
  --text-accent: #51b385;
  --text-accent-hover: hsl(152, 69%, 61%);
  --text-accent1: #61d29d;
  --text-accent2: #00ddff;
  --text-highlight-bg: hsl(245,100%,78%,0.52);
  --text-title-h1: hsl(246 87% 69%);
  --text-title-h2: hsl(245 89% 75%);
  --text-title-h3: hsl(240 99% 84%);
  --text-title-h4: hsl(14  99% 83%);
  --text-title-h5: hsl(17  91% 77%);
  --text-title-h6: hsl(11  89% 63%);
  --textHighlight: var(--text-highlight-bg, hsl(245,100%,78%,0.52));
  --theme-color: hsl(245 75% 63%);
  --yellow: #fccd11;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body html {
  --altblue: #0087ff;
  --aqua: #078480;
  --aquadark: #0b4c5e;
  --blue: #61afef;
  --cyan: #0fb3ff;
  --file-line-width: 1000px;
  --folder-alpha: 0.2;
  --folder-color0: hsl( 214 21% 31% / 0.2);
  --font-monospace: 'JetBrains Mono NL', 'JetBrains Mono',Consolas, Monaco,"等距更纱黑体 SC", monospace;
  --font-weight-title: 600;
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #15df6b;
  --green-light: #42accd;
  --light-orange: #ff693f;
  --lila: #c90481;
  --lime: #b2f711;
  --line-height-headers: 1;
  --magenta: #ff2857;
  --orange: #ffc83f;
  --peach: #ff5555;
  --purple: #8c44aa;
  --red: #ff0f44;
  --search-match-color: #ffff00;
  --search-other-match-color: #ff9632;
  --yellow: #fccd11;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(152, 143, 255, 0.52);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body p {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  width: 194.5px;
}`,
    code: `html[saved-theme="light"] body code {
  color: rgb(15, 179, 255);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}

html[saved-theme="light"] body pre:has(> code) {
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html[saved-theme="light"] body img {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: rgba(128, 128, 128, 0.3) 1px 1px 1px 0px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="folder"] {
  --callout-color: 8, 109, 221;
  --list-indent: 0em;
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, #ffffff 50%);
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="folder"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(88, 166, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(121, 107, 245);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(144, 135, 248);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(174, 174, 255);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(255, 189, 169);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(250, 173, 143);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(245, 107, 77);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    footer: `html[saved-theme="light"] body footer {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-width: 1px;
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-right-width: 1px;
  border-top-color: rgb(92, 92, 92);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    properties: `html[saved-theme="light"] body .metadata {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(88, 166, 255);
}`,
    misc: `html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(88, 166, 255);
}`,
  },
  classSettings: {
    "theme-genshin-sangonomiya-kokomi1": `body.theme-dark {
--theme-color: hsl(245 75% 63%);
--text-highlight-bg: hsl(245,75%,63%,0.5);
--text-title-h1: hsl(246 87% 69%);
--text-title-h2: hsl(245 75% 70%);
--text-title-h3: hsl(240 35% 73%);
--text-title-h4: hsl(13 84% 89%);
--text-title-h5: hsl(17 51% 66%);
--text-title-h6: hsl(11 59% 54%);
--folder-color1: hsl( 246 87% 69% / var(--folder-alpha));
--folder-color2: hsl( 245 75% 70% / var(--folder-alpha));
--folder-color3: hsl( 240 35% 73% / var(--folder-alpha));
--folder-color4: hsl( 13 84% 89%  / var(--folder-alpha));
--folder-color5: hsl( 17 51% 66%  / var(--folder-alpha));
--folder-color6: hsl( 11 59% 54%  / var(--folder-alpha));
}
body.theme-light {
--theme-color: hsl(245 75% 63%);
--text-highlight-bg: hsl(245,100%,78%,0.52);
--text-title-h1: hsl(246 87% 69%);
--text-title-h2: hsl(245 89% 75%);
--text-title-h3: hsl(240 99% 84%);
--text-title-h4: hsl(14  99% 83%);
--text-title-h5: hsl(17  91% 77%);
--text-title-h6: hsl(11  89% 63%);
--folder-color1: hsl( 246 87% 69%  / var(--folder-alpha));
--folder-color2: hsl( 245 89% 75%  / var(--folder-alpha));
--folder-color3: hsl( 240 99% 84%  / var(--folder-alpha));
--folder-color4: hsl( 14  99% 83%  / var(--folder-alpha));
--folder-color5: hsl( 17  91% 77%  / var(--folder-alpha));
--folder-color6: hsl( 11  89% 63%  / var(--folder-alpha));
}`,
    "theme-genshin-sangonomiya-kokomi2": `body.theme-dark, body.theme-light {
--theme-color: hsl(245 75% 63%);
--text-highlight-bg: hsl(245,75%,63%,0.5);
--text-title-h1: hsl(246 99% 63%);
--text-title-h2: hsl(245 75% 63%);
--text-title-h3: hsl(240 44% 65%);
--text-title-h4: hsl(14  91% 79%);
--text-title-h5: hsl(17  55% 60%);
--text-title-h6: hsl(11  59% 54%);
--folder-color1: hsl( 246 99% 63%  / var(--folder-alpha));
--folder-color2: hsl( 245 75% 63%  / var(--folder-alpha));
--folder-color3: hsl( 240 44% 65%  / var(--folder-alpha));
--folder-color4: hsl( 14  91% 79%  / var(--folder-alpha));
--folder-color5: hsl( 17  55% 60%  / var(--folder-alpha));
--folder-color6: hsl( 11  59% 54%  / var(--folder-alpha));
}
body.theme-dark, body.theme-light {
--theme-color: hsl(245 75% 63%);
--text-highlight-bg: hsl(245,75%,63%,0.5);
--text-title-h1: hsl(246 99% 63%);
--text-title-h2: hsl(245 75% 63%);
--text-title-h3: hsl(240 44% 65%);
--text-title-h4: hsl(14  91% 79%);
--text-title-h5: hsl(17  55% 60%);
--text-title-h6: hsl(11  59% 54%);
--folder-color1: hsl( 246 99% 63%  / var(--folder-alpha));
--folder-color2: hsl( 245 75% 63%  / var(--folder-alpha));
--folder-color3: hsl( 240 44% 65%  / var(--folder-alpha));
--folder-color4: hsl( 14  91% 79%  / var(--folder-alpha));
--folder-color5: hsl( 17  55% 60%  / var(--folder-alpha));
--folder-color6: hsl( 11  59% 54%  / var(--folder-alpha));
}`,
    "theme-genshin-nilou": `body.theme-dark {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsl(9 66% 53%);
--text-title-h1: hsl(213 62% 50%);
--text-title-h2: hsl(201 47% 60%);
--text-title-h3: hsl(199 42% 82%);
--text-title-h4: hsl(30 46%  95%);
--text-title-h5: hsl(9  51%  65%);
--text-title-h6: hsl(9  66%  53%);
--folder-color1: hsl( 213 62% 50%  / var(--folder-alpha));
--folder-color2: hsl( 201 47% 60%  / var(--folder-alpha));
--folder-color3: hsl( 199 42% 82%  / var(--folder-alpha));
--folder-color4: hsl( 30 46%  95%  / var(--folder-alpha));
--folder-color5: hsl( 9  51%  65%  / var(--folder-alpha));
--folder-color6: hsl( 9  66%  53%  / var(--folder-alpha));
}
body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsla(9,91%,64%,0.686);
--text-title-h1: hsl(213 74%  55%);
--text-title-h2: hsl(201 100% 69%);
--text-title-h3: hsl(199 100% 82%);
--text-title-h4: hsl(30  100% 85%);
--text-title-h5: hsl(14  100% 76%);
--text-title-h6: hsl(9   90%  61%);
--folder-color1: hsl( 213 74%  55%  / var(--folder-alpha));
--folder-color2: hsl( 201 100% 69%  / var(--folder-alpha));
--folder-color3: hsl( 199 100% 82%  / var(--folder-alpha));
--folder-color4: hsl( 30  100% 85%  / var(--folder-alpha));
--folder-color5: hsl( 14  100% 76%  / var(--folder-alpha));
--folder-color6: hsl( 9   90%  61%  / var(--folder-alpha));
}`,
    "theme-genshin-甘雨": `body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsl(245, 75%, 63%, 0.5);
--text-title-h1: hsl(231 30%  52%);
--text-title-h2: hsl(220 32%  54%);
--text-title-h3: hsl(214 64%  86%);
--text-title-h4: hsl(19  20%  82%);
--text-title-h5: hsl(357 34%  54%);
--text-title-h6: hsl(358 20%  48%);
--folder-color1: hsl( 231 30%  52%  / var(--folder-alpha));
--folder-color2: hsl( 220 32%  54%  / var(--folder-alpha));
--folder-color3: hsl( 214 64%  86%  / var(--folder-alpha));
--folder-color4: hsl( 19  20%  82%  / var(--folder-alpha));
--folder-color5: hsl( 357 34%  54%  / var(--folder-alpha));
--folder-color6: hsl( 358 20%  48%  / var(--folder-alpha));
}
body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsl(245, 75%, 63%, 0.5);
--text-title-h1: hsl(231 30%  52%);
--text-title-h2: hsl(220 32%  54%);
--text-title-h3: hsl(214 64%  86%);
--text-title-h4: hsl(19  20%  82%);
--text-title-h5: hsl(357 34%  54%);
--text-title-h6: hsl(358 20%  48%);
--folder-color1: hsl( 231 30%  52%  / var(--folder-alpha));
--folder-color2: hsl( 220 32%  54%  / var(--folder-alpha));
--folder-color3: hsl( 214 64%  86%  / var(--folder-alpha));
--folder-color4: hsl( 19  20%  82%  / var(--folder-alpha));
--folder-color5: hsl( 357 34%  54%  / var(--folder-alpha));
--folder-color6: hsl( 358 20%  48%  / var(--folder-alpha));
}`,
    "theme-genshin-神里绫华": `body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsla(245, 75%, 63%, 0.5);
--text-title-h1: hsl(228 43% 55%);
--text-title-h2: hsl(221 36% 57%);
--text-title-h3: hsl(217 37% 81%);
--text-title-h4: hsl(36  5%  82%);
--text-title-h5: hsl(340 29% 55%);
--text-title-h6: hsl(340 49% 34%);
--folder-color1: hsl( 228 43% 55%  / var(--folder-alpha));
--folder-color2: hsl( 221 36% 57%  / var(--folder-alpha));
--folder-color3: hsl( 217 37% 81%  / var(--folder-alpha));
--folder-color4: hsl( 36  5%  82%  / var(--folder-alpha));
--folder-color5: hsl( 340 29% 55%  / var(--folder-alpha));
--folder-color6: hsl( 340 49% 34%  / var(--folder-alpha));
}
body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsla(245, 75%, 63%, 0.5);
--text-title-h1: hsl(228 43% 55%);
--text-title-h2: hsl(221 36% 57%);
--text-title-h3: hsl(217 37% 81%);
--text-title-h4: hsl(36  5%  82%);
--text-title-h5: hsl(340 29% 55%);
--text-title-h6: hsl(340 49% 34%);
--folder-color1: hsl( 228 43% 55%  / var(--folder-alpha));
--folder-color2: hsl( 221 36% 57%  / var(--folder-alpha));
--folder-color3: hsl( 217 37% 81%  / var(--folder-alpha));
--folder-color4: hsl( 36  5%  82%  / var(--folder-alpha));
--folder-color5: hsl( 340 29% 55%  / var(--folder-alpha));
--folder-color6: hsl( 340 49% 34%  / var(--folder-alpha));
}`,
    "theme-genshin-可莉": `body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsl(9, 64%, 50%);
--text-title-h1: hsl(9  64% 50%);
--text-title-h2: hsl(9  54% 48%);
--text-title-h3: hsl(8  38% 49%);
--text-title-h4: hsl(16 50% 69%);
--text-title-h5: hsl(34 42% 79%);
--text-title-h6: hsl(14 35% 83%);
--folder-color1: hsl( 9  64% 50%  / var(--folder-alpha));
--folder-color2: hsl( 9  54% 48%  / var(--folder-alpha));
--folder-color3: hsl( 8  38% 49%  / var(--folder-alpha));
--folder-color4: hsl( 16 50% 69%  / var(--folder-alpha));
--folder-color5: hsl( 34 42% 79%  / var(--folder-alpha));
--folder-color6: hsl( 14 35% 83%  / var(--folder-alpha));
}
body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsl(9, 64%, 50%);
--text-title-h1: hsl(9  64% 50%);
--text-title-h2: hsl(9  54% 48%);
--text-title-h3: hsl(8  38% 49%);
--text-title-h4: hsl(16 50% 69%);
--text-title-h5: hsl(34 42% 79%);
--text-title-h6: hsl(14 35% 83%);
--folder-color1: hsl( 9  64% 50%  / var(--folder-alpha));
--folder-color2: hsl( 9  54% 48%  / var(--folder-alpha));
--folder-color3: hsl( 8  38% 49%  / var(--folder-alpha));
--folder-color4: hsl( 16 50% 69%  / var(--folder-alpha));
--folder-color5: hsl( 34 42% 79%  / var(--folder-alpha));
--folder-color6: hsl( 14 35% 83%  / var(--folder-alpha));
}`,
    "theme-genshin-希格雯": `body.theme-dark {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsl(229, 70%, 59%);
--text-title-h1: hsl(208 66% 69%);
--text-title-h2: hsl(208 85% 82%);
--text-title-h3: hsl(217 44% 96%);
--text-title-h4: hsl(347 71% 80%);
--text-title-h5: hsl(342 80% 76%);
--text-title-h6: hsl(344 61% 58%);
--folder-color1: hsl(  208 66% 69% / var(--folder-alpha));
--folder-color2: hsl(  208 85% 82% / var(--folder-alpha));
--folder-color3: hsl(  217 44% 96% / var(--folder-alpha));
--folder-color4: hsl(  347 71% 80% / var(--folder-alpha));
--folder-color5: hsl(  342 80% 76% / var(--folder-alpha));
--folder-color6: hsl(  344 61% 58% / var(--folder-alpha));
}
body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsl(229, 70%, 59%);
--text-title-h1: hsl(208 89% 75%);
--text-title-h2: hsl(208 85% 82%);
--text-title-h3: hsl(217 99% 89%);
--text-title-h4: hsl(347 71% 80%);
--text-title-h5: hsl(342 80% 76%);
--text-title-h6: hsl(344 83% 68%);
--folder-color1: hsl( 208 89% 75% / var(--folder-alpha));
--folder-color2: hsl( 208 85% 82% / var(--folder-alpha));
--folder-color3: hsl( 217 99% 89% / var(--folder-alpha));
--folder-color4: hsl( 347 71% 80% / var(--folder-alpha));
--folder-color5: hsl( 342 80% 76% / var(--folder-alpha));
--folder-color6: hsl( 344 83% 68% / var(--folder-alpha));
}`,
    "theme-genshin-砂糖": `body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsl(229, 70%, 59%);
--text-title-h1: hsl(229 70% 59%);
--text-title-h2: hsl(219 63% 74%);
--text-title-h3: hsl(0   0%  99%);
--text-title-h4: hsl(91  48% 87%);
--text-title-h5: hsl(146 17% 56%);
--text-title-h6: hsl(161 27% 39%);
--folder-color1: hsl( 229 70% 59% / var(--folder-alpha));
--folder-color2: hsl( 219 63% 74% / var(--folder-alpha));
--folder-color3: hsl( 0   0%  99% / var(--folder-alpha));
--folder-color4: hsl( 91  48% 87% / var(--folder-alpha));
--folder-color5: hsl( 146 17% 56% / var(--folder-alpha));
--folder-color6: hsl( 161 27% 39% / var(--folder-alpha));
}
body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:hsl(229, 70%, 59%);
--text-title-h1: hsl(229 70% 59%);
--text-title-h2: hsl(219 63% 74%);
--text-title-h3: hsl(0   0%  99%);
--text-title-h4: hsl(91  48% 87%);
--text-title-h5: hsl(146 17% 56%);
--text-title-h6: hsl(161 27% 39%);
--folder-color1: hsl( 229 70% 59% / var(--folder-alpha));
--folder-color2: hsl( 219 63% 74% / var(--folder-alpha));
--folder-color3: hsl( 0   0%  99% / var(--folder-alpha));
--folder-color4: hsl( 91  48% 87% / var(--folder-alpha));
--folder-color5: hsl( 146 17% 56% / var(--folder-alpha));
--folder-color6: hsl( 161 27% 39% / var(--folder-alpha));
}

body.theme-light {
--theme-color: hsl(245, 78%, 65%);
--text-highlight-bg:hsla(229, 87%, 69%, 0.549);
--text-title-h1: hsl(229 100% 74%);
--text-title-h2: hsl(219 100% 81%);
--text-title-h3: hsl(91  76%  84%);
--text-title-h4: hsl(91  69%  81%);
--text-title-h5: hsl(146 47%  76%);
--text-title-h6: hsl(161 38%  58%);
--folder-color1: hsl( 229 100% 74% / var(--folder-alpha));
--folder-color2: hsl( 219 100% 81% / var(--folder-alpha));
--folder-color3: hsl( 91  76%  84% / var(--folder-alpha));
--folder-color4: hsl( 91  69%  81% / var(--folder-alpha));
--folder-color5: hsl( 146 47%  76% / var(--folder-alpha));
--folder-color6: hsl( 161 38%  58% / var(--folder-alpha));
}`,
    "theme-suzume-no-tojimari": `body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg: hsl(214, 86%, 57%);
--text-title-h1: hsl(214 86% 57%);
--text-title-h2: hsl(220 67% 63%);
--text-title-h3: hsl(250 43% 71%);
--text-title-h4: hsl(309 39% 71%);
--text-title-h5: hsl(24  87% 71%);
--text-title-h6: hsl(46  96% 72%);
--folder-color1: hsl( 214 86% 57% / var(--folder-alpha));
--folder-color2: hsl( 220 67% 63% / var(--folder-alpha));
--folder-color3: hsl( 250 43% 71% / var(--folder-alpha));
--folder-color4: hsl( 309 39% 71% / var(--folder-alpha));
--folder-color5: hsl( 24  87% 71% / var(--folder-alpha));
--folder-color6: hsl( 46  96% 72% / var(--folder-alpha));
}
body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg: hsl(214, 86%, 57%);
--text-title-h1: hsl(214 86% 57%);
--text-title-h2: hsl(220 67% 63%);
--text-title-h3: hsl(250 43% 71%);
--text-title-h4: hsl(309 39% 71%);
--text-title-h5: hsl(24  87% 71%);
--text-title-h6: hsl(46  96% 72%);
--folder-color1: hsl( 214 86% 57% / var(--folder-alpha));
--folder-color2: hsl( 220 67% 63% / var(--folder-alpha));
--folder-color3: hsl( 250 43% 71% / var(--folder-alpha));
--folder-color4: hsl( 309 39% 71% / var(--folder-alpha));
--folder-color5: hsl( 24  87% 71% / var(--folder-alpha));
--folder-color6: hsl( 46  96% 72% / var(--folder-alpha));
}`,
    "theme-jay": `body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg: hsl(23, 54%, 45%);
--text-title-h1: hsl(180 42% 40%);
--text-title-h2: hsl(151 36% 43%);
--text-title-h3: hsl(39  94% 82%);
--text-title-h4: hsl(35  74% 65%);
--text-title-h5: hsl(23  56% 49%);
--text-title-h6: hsl(23  54% 45%);
--folder-color1: hsl( 180 42% 40% / var(--folder-alpha));
--folder-color2: hsl( 151 36% 43% / var(--folder-alpha));
--folder-color3: hsl( 39  94% 82% / var(--folder-alpha));
--folder-color4: hsl( 35  74% 65% / var(--folder-alpha));
--folder-color5: hsl( 23  56% 49% / var(--folder-alpha));
--folder-color6: hsl( 23  54% 45% / var(--folder-alpha));
}
body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg: hsl(23, 54%, 45%);
--text-title-h1: hsl(180 42% 40%);
--text-title-h2: hsl(151 36% 43%);
--text-title-h3: hsl(39  94% 82%);
--text-title-h4: hsl(35  74% 65%);
--text-title-h5: hsl(23  56% 49%);
--text-title-h6: hsl(23  54% 45%);
--folder-color1: hsl( 180 42% 40% / var(--folder-alpha));
--folder-color2: hsl( 151 36% 43% / var(--folder-alpha));
--folder-color3: hsl( 39  94% 82% / var(--folder-alpha));
--folder-color4: hsl( 35  74% 65% / var(--folder-alpha));
--folder-color5: hsl( 23  56% 49% / var(--folder-alpha));
--folder-color6: hsl( 23  54% 45% / var(--folder-alpha));
}

body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg:#6a83f58c;
}`,
    "theme-Nord-Aurora": `body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg: hsla(210, 40%, 59%, 0.816);
--text-title-h1: hsl(354 42% 56%);
--text-title-h2: hsl(14  51% 63%);
--text-title-h3: hsl(40  71% 73%);
--text-title-h4: hsl(92  28% 65%);
--text-title-h5: hsl(311 20% 63%);
--text-title-h6: hsl(222 10% 75%);
--folder-color1: hsl( 354 42% 56% / var(--folder-alpha));
--folder-color2: hsl( 14  51% 63% / var(--folder-alpha));
--folder-color3: hsl( 40  71% 73% / var(--folder-alpha));
--folder-color4: hsl( 92  28% 65% / var(--folder-alpha));
--folder-color5: hsl( 311 20% 63% / var(--folder-alpha));
--folder-color6: hsl( 222 10% 75% / var(--folder-alpha));
}
body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg: hsla(210, 40%, 59%, 0.816);
--text-title-h1: hsl(354 42% 56%);
--text-title-h2: hsl(14  51% 63%);
--text-title-h3: hsl(40  71% 73%);
--text-title-h4: hsl(92  28% 65%);
--text-title-h5: hsl(311 20% 63%);
--text-title-h6: hsl(222 10% 75%);
--folder-color1: hsl( 354 42% 56% / var(--folder-alpha));
--folder-color2: hsl( 14  51% 63% / var(--folder-alpha));
--folder-color3: hsl( 40  71% 73% / var(--folder-alpha));
--folder-color4: hsl( 92  28% 65% / var(--folder-alpha));
--folder-color5: hsl( 311 20% 63% / var(--folder-alpha));
--folder-color6: hsl( 222 10% 75% / var(--folder-alpha));
}

body.theme-light {
--text-title-h6: #989ba1;
}`,
    "theme-rainbow": `body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg: hsla(258, 100%, 51%, 0.781);
--text-title-h1: hsl(0   100% 50%);
--text-title-h2: hsl(40  100% 50%);
--text-title-h3: hsl(80  100% 50%);
--text-title-h4: hsl(120 100% 50%);
--text-title-h5: hsl(170 100% 50%);
--text-title-h6: hsl(200 100% 50%);
--text-title-h7: hsl(240 100% 50%);
--folder-color1: hsl( 0   100% 50% / var(--folder-alpha));
--folder-color2: hsl( 40  100% 50% / var(--folder-alpha));
--folder-color3: hsl( 80  100% 50% / var(--folder-alpha));
--folder-color4: hsl( 120 100% 50% / var(--folder-alpha));
--folder-color5: hsl( 170 100% 50% / var(--folder-alpha));
--folder-color6: hsl( 200 100% 50% / var(--folder-alpha));
}
body.theme-dark, body.theme-light {
--theme-color: hsl(245, 75%, 63%);
--text-highlight-bg: hsla(258, 100%, 51%, 0.781);
--text-title-h1: hsl(0   100% 50%);
--text-title-h2: hsl(40  100% 50%);
--text-title-h3: hsl(80  100% 50%);
--text-title-h4: hsl(120 100% 50%);
--text-title-h5: hsl(170 100% 50%);
--text-title-h6: hsl(200 100% 50%);
--text-title-h7: hsl(240 100% 50%);
--folder-color1: hsl( 0   100% 50% / var(--folder-alpha));
--folder-color2: hsl( 40  100% 50% / var(--folder-alpha));
--folder-color3: hsl( 80  100% 50% / var(--folder-alpha));
--folder-color4: hsl( 120 100% 50% / var(--folder-alpha));
--folder-color5: hsl( 170 100% 50% / var(--folder-alpha));
--folder-color6: hsl( 200 100% 50% / var(--folder-alpha));
}`,
    "theme-testing": `body.theme-dark, body.theme-light {

}
body.theme-dark, body.theme-light {

}`,
    "secondary-theme-green-blue": `body.theme-dark, body.theme-light {
/* 超链颜色，包含元标签，如果不设置默认为主题色 */
--text-accent: #51b385;
--text-accent1: #61d29d;
--text-accent2: #00ddff;
--text-accent-hover: hsl(152, 69%, 61%);
/* tag 颜色 */
--tag-color:#58a6ff ;
--tag-color-hover:#449bff ;
/* 引用颜色 */
--quote-color:  rgb(61, 154, 216);
}
body.theme-dark, body.theme-light {
/* 超链颜色，包含元标签，如果不设置默认为主题色 */
--text-accent: #51b385;
--text-accent1: #61d29d;
--text-accent2: #00ddff;
--text-accent-hover: hsl(152, 69%, 61%);
/* tag 颜色 */
--tag-color:#58a6ff ;
--tag-color-hover:#449bff ;
/* 引用颜色 */
--quote-color:  rgb(61, 154, 216);
}`,
    "secondary-theme-Nord": `body.theme-dark, body.theme-light {
/* 超链颜色，包含元标签，如果不设置默认为主题色 */
--text-accent: #81A1C1;
--text-accent1: #81A1C1;
--text-accent2: #88C0D0;
--text-accent-hover: #81A1C1;
/* tag 颜色 */
--tag-color:#88C0D0;
--tag-color-hover:#88C0D0;
/* 引用颜色 */
--quote-color:  #5E81AC;
}
body.theme-dark, body.theme-light {
/* 超链颜色，包含元标签，如果不设置默认为主题色 */
--text-accent: #81A1C1;
--text-accent1: #81A1C1;
--text-accent2: #88C0D0;
--text-accent-hover: #81A1C1;
/* tag 颜色 */
--tag-color:#88C0D0;
--tag-color-hover:#88C0D0;
/* 引用颜色 */
--quote-color:  #5E81AC;
}`,
    "secondary-theme-testing": `body.theme-dark, body.theme-light {

}
body.theme-dark, body.theme-light {

}`,
    "code-theme-jetbrains": `body.theme-dark {
--code-function: #BCBEC4;
--code-punctuation: var(--text-muted);
--code-keyword: #CF8E6D;
--code-property: #BCBEC4;
--code-string: #72b67b;
--code-tag: #c5bf6a;
--code-value: #4a88cf;
}
body.theme-light {
--code-function: #000000;
--code-punctuation: var(--text-muted);
--code-keyword: #0033b3;
--code-property: #871094;
--code-string: #067d17;
--code-tag: #0033b3;
--code-value: #1750eb;
--code-normal: #080808;
}`,
    "code-theme-BlueTopaz-default": `body.theme-dark {
--background-code: #1111118c;
--code-variable: #db7c84;
--code-normal: #ebdbb2;
--code-comment: #568060;
--code-function: #cac685;
--code-important: #478fee;
--code-keyword: #478fee;
--code-operator: #a89984;
--code-property: #a0c7e9;
--code-punctuation: #abb2bf;
--code-string: #abd58e;
--code-tag: #db7c84;
--code-value: #abd58e;
--code-string-2: #d6b87f;
--code-active-line-background-color: #111111eb;
--background-code-2: #4c4c4cb0;
--text-color-code: #d58000;
}
body.theme-light {
--code-keyword: #3bd4da;
--code-tag: #c74df7;
--code-function: #bf616a;
--code-important: #3bd4da;
--code-active-line-background-color: hsla(17, 44%, 32%,0.05);
--code-string-2: #cc7523;
--code-variable-2: #b74ff3;
--code-meta: #7f7f7f;
--background-code: #ebebeb71;
--background-code-2: #cccccc62;
--text-color-code: #e95d00;
}`,
    "code-theme-BlueTopaz-material-palenight": `body.theme-dark, body.theme-light {
/* material: palenight theme */
--code-keyword: #c792ea;
--code-atom: #f78c6c;
--code-number: #ff5370;
--code-type: #decb6b;
--code-def: #82aaff;
--code-property: #c792ea;
--code-variable: #f07178;
--code-variable-2: #eeffff;
--code-variable-3: #f07178;
--code-definition: #82aaff;
--code-callee: #89ddff;
--code-qualifier: #decb6b;
--code-operator: #89ddff;
--code-hr: #98e342;
--code-link: #696d70;
--code-error-bg: #ff5370;
--code-header: #da7dae;
--code-builtin: #ffcb6b;
--code-meta: #ffcb6b;
--code-matching-bracket: #ffffff;
--code-tag: #ff5370;
--code-tag-in-comment: #ff5370;
--code-string-2: #f07178;
--code-bracket: #ff5370;
--code-comment: #676e95;
--code-string: #c3e88d;
--code-attribute: #c792ea;
--code-attribute-in-comment: #c792ea;
--background-code: #292d3eba;
--code-active-line-background-color: #353a50;
--code-normal: #d4d4d4;
}
body.theme-dark, body.theme-light {
/* material: palenight theme */
--code-keyword: #c792ea;
--code-atom: #f78c6c;
--code-number: #ff5370;
--code-type: #decb6b;
--code-def: #82aaff;
--code-property: #c792ea;
--code-variable: #f07178;
--code-variable-2: #eeffff;
--code-variable-3: #f07178;
--code-definition: #82aaff;
--code-callee: #89ddff;
--code-qualifier: #decb6b;
--code-operator: #89ddff;
--code-hr: #98e342;
--code-link: #696d70;
--code-error-bg: #ff5370;
--code-header: #da7dae;
--code-builtin: #ffcb6b;
--code-meta: #ffcb6b;
--code-matching-bracket: #ffffff;
--code-tag: #ff5370;
--code-tag-in-comment: #ff5370;
--code-string-2: #f07178;
--code-bracket: #ff5370;
--code-comment: #676e95;
--code-string: #c3e88d;
--code-attribute: #c792ea;
--code-attribute-in-comment: #c792ea;
--background-code: #292d3eba;
--code-active-line-background-color: #353a50;
--code-normal: #d4d4d4;
}`,
    "code-theme-BlueTopaz-solarized": `body.theme-dark, body.theme-light {
/* solarized */
--code-keyword: #cb4b16;
--code-atom: #d33682;
--code-number: #d33682;
--code-type: #6c71c4;
--code-def: #2aa198;
--code-property: #2aa198;
--code-variable: #839496;
--code-variable-2: #b58900;
--code-variable-3: #6c71c4;
--code-function: #82aaff;
--code-definition: #82aaff;
--code-callee: #89ddff;
--code-qualifier: #b58900;
--code-operator: #6c71c4;
--code-hr: #98e342;
--code-link: #93a1a1;
--code-error-bg: #ff5370;
--code-header: #586e75;
--code-builtin: #d33682;
--code-meta: #859900;
--code-matching-bracket: #859900;
--code-tag: #93a1a1;
--code-tag-in-comment: #ff5370;
--code-string-2: #b58900;
--code-bracket: #cb4b16;
--code-comment: #586e75;
--code-string: #859900;
--code-attribute: #2aa198;
--code-attribute-in-comment: #c792ea;
--background-code: #fdf6e3e1;
--code-active-line-background-color: #fffcf4;
--code-normal: #657b83;
}
body.theme-dark, body.theme-light {
/* solarized */
--code-keyword: #cb4b16;
--code-atom: #d33682;
--code-number: #d33682;
--code-type: #6c71c4;
--code-def: #2aa198;
--code-property: #2aa198;
--code-variable: #839496;
--code-variable-2: #b58900;
--code-variable-3: #6c71c4;
--code-function: #82aaff;
--code-definition: #82aaff;
--code-callee: #89ddff;
--code-qualifier: #b58900;
--code-operator: #6c71c4;
--code-hr: #98e342;
--code-link: #93a1a1;
--code-error-bg: #ff5370;
--code-header: #586e75;
--code-builtin: #d33682;
--code-meta: #859900;
--code-matching-bracket: #859900;
--code-tag: #93a1a1;
--code-tag-in-comment: #ff5370;
--code-string-2: #b58900;
--code-bracket: #cb4b16;
--code-comment: #586e75;
--code-string: #859900;
--code-attribute: #2aa198;
--code-attribute-in-comment: #c792ea;
--background-code: #fdf6e3e1;
--code-active-line-background-color: #fffcf4;
--code-normal: #657b83;
}`,
    "code-theme-BlueTopaz-Gruvbox-dark": `body.theme-dark, body.theme-light {
--code-selection-color: #fbf1c7;
--code-selection-background: #7c6f6456;
--code-active-line-background-color: #533c3cee;
--background-code: #1d2021c6;
--code-variable: #a0c7e9;
--code-normal: #ebdbb2;
--code-comment: #a89984;
--code-function: #fabd2f;
--code-important: #fb4934;
--code-keyword: #fb4934;
--code-operator: #a89984;
--code-property: #fb4934;
--code-punctuation: #a89984;
--code-string: #b8bb26;
--code-tag: #fabd2f;
--code-value: #d3869b;
--code-meta: #568060;
}
body.theme-dark, body.theme-light {
--code-selection-color: #fbf1c7;
--code-selection-background: #7c6f6456;
--code-active-line-background-color: #533c3cee;
--background-code: #1d2021c6;
--code-variable: #a0c7e9;
--code-normal: #ebdbb2;
--code-comment: #a89984;
--code-function: #fabd2f;
--code-important: #fb4934;
--code-keyword: #fb4934;
--code-operator: #a89984;
--code-property: #fb4934;
--code-punctuation: #a89984;
--code-string: #b8bb26;
--code-tag: #fabd2f;
--code-value: #d3869b;
--code-meta: #568060;
}`,
    "code-theme-BlueTopaz-dracula": `body.theme-dark {
--background-code: #282a36c0;
--code-normal: #f8f8f2;
--code-comment: #6272a4;
--code-string: #f1fa8c;
--code-string-2: #ffb86c;
--code-number: #bd93f9;
--code-variable: #50fa7b;
--code-variable-2: #ffffff;
--code-def: #50fa7b;
--code-operator: #8be9fd;
--code-keyword: #ff79c6;
--code-atom: #bd93f9;
--code-meta: #f8f8f2;
--code-tag: #ff79c6;
--code-attribute: #50fa7b;
--code-qualifier: #50fa7b;
--code-property: #66d9ef;
--code-builtin: #50fa7b;
--code-variable-3: #dc8e3b;
--code-type: #ffb86c;
--code-active-line-background-color: #414458;
--code-matchingbracket: #ffffff;
}
body.theme-light {
--background-code: #e6e6e671;
--code-normal: var(--tex-normal);
--code-string: #d1945b;
--code-string-2: #da904b;
--code-variable: #3bd4da;
--code-variable-2: #b74ff3;
--code-meta: #797979;
--code-active-line-background-color: #dee1b9a5;
--code-comment: #6272a4;
--code-number: #bd93f9;
--code-def: #50fa7b;
--code-operator: #8be9fd;
--code-keyword: #ff79c6;
--code-atom: #bd93f9;
--code-tag: #ff79c6;
--code-attribute: #50fa7b;
--code-qualifier: #50fa7b;
--code-property: #66d9ef;
--code-builtin: #50fa7b;
--code-variable-3: #dc8e3b;
--code-type: #ffb86c;
--code-matchingbracket: #ffffff;
}`,
    "code-theme-BlueTopaz-monokai": `body.theme-dark {
--background-code: #272822d9;
--code-normal: #F8F8F2;
--code-keyword:#F92772;
--code-value: #AE81FF;
--code-string-2:#E6DB74;
--code-comment: #75715E;
--code-active-line-background-color: #17013f9f;
}
body.theme-light {
--background-code: #F8F8F2;
--code-normal: #272822d9;
--code-keyword:#F92772;
--code-value: #AE81FF;
--code-string-2:#E6DB74;
--code-comment: #aca47a;
--code-active-line-background-color: #17013f9f;
}`,
    "code-theme-BlueTopaz-sublime": `body.theme-dark, body.theme-light {
--code-operator: #9a6e3a;
--code-variable: #5180de;
--code-keyword: #EA5E66;
--code-string: #40bf31;
--code-function: #F9AE58;
--code-string-2: #F9AE58;
--code-type: #F9AE58;
--code-def: #F9AE58;
}
body.theme-dark, body.theme-light {
--code-operator: #9a6e3a;
--code-variable: #5180de;
--code-keyword: #EA5E66;
--code-string: #40bf31;
--code-function: #F9AE58;
--code-string-2: #F9AE58;
--code-type: #F9AE58;
--code-def: #F9AE58;
}`,
    "code-theme-testing": `body.theme-dark, body.theme-light {

}
body.theme-dark, body.theme-light {

}`,
    "left-highlight": `body.left-highlight .tree-item:not(.graph-control-section) .tree-item-self:has(+ .tree-item-children > .tree-item > .tree-item-self:not(.mod-collapsible).is-active) .tree-item-inner, body.left-highlight .tree-item:not(.graph-control-section) .tree-item-self:has(+ .tree-item-children > .tree-item.is-collapsed > .tree-item-self.mod-collapsible.is-active) .tree-item-inner {
color: var(--theme-color);
}

body.left-highlight .tree-item:not(.graph-control-section) .tree-item-self.is-active .tree-item-inner {
color: var(--theme-color);
}

body.left-highlight .tree-item:not(.graph-control-section) .tree-item-self:has(+ .tree-item-children > .tree-item > .tree-item-self:not(.mod-collapsible).is-active)+.tree-item-children, body.left-highlight .tree-item:not(.graph-control-section) .tree-item-self:has(+ .tree-item-children > .tree-item.is-collapsed > .tree-item-self.mod-collapsible.is-active)+.tree-item-children {
border-left: 1px solid;
color: var(--theme-color);
}

body.left-highlight .tree-item:not(.graph-control-section) .tree-item-self:has(+ .tree-item-children > .tree-item > .tree-item-self:not(.mod-collapsible).is-active) :is(.tree-item-icon, .file-tree-item-icon) svg, body.left-highlight .tree-item:not(.graph-control-section) .tree-item-self:has(+ .tree-item-children > .tree-item.is-collapsed > .tree-item-self.mod-collapsible.is-active) :is(.tree-item-icon, .file-tree-item-icon) svg {
color: var(--theme-color);
}

body.left-highlight .tree-item:not(.graph-control-section) .tree-item-self:has(+ .tree-item-children > .tree-item > .tree-item-self:not(.mod-collapsible).is-active) :is(.tree-item-icon, .file-tree-item-icon) {
color: var(--theme-color);
}

body.left-highlight .tree-item:not(.graph-control-section) .tree-item-self.is-active::before {
color: var(--theme-color);
}`,
    "left-roll": `body.left-roll .nav-files-container {
display: flex;
overflow-x: auto;
white-space: nowrap;
}

body.left-roll .nav-files-container > * {
min-width: var(--left-roll-min-width);
}`,
  },
};
