import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "everforest",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["hack"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #525c62;
  --background-primary: #2f383e;
  --background-primary-alt: #2f383e;
  --background-secondary: #2f383e;
  --background-secondary-alt: #2f383e;
  --bases-cards-background: #2f383e;
  --bases-cards-cover-background: #2f383e;
  --bases-cards-shadow: 0 0 0 1px #525c62;
  --bases-embed-border-color: #525c62;
  --bases-table-border-color: #525c62;
  --bases-table-cell-background-active: #2f383e;
  --bases-table-cell-background-disabled: #2f383e;
  --bases-table-cell-shadow-focus: 0 0 0 2px #569d79;
  --bases-table-group-background: #2f383e;
  --bases-table-header-background: #2f383e;
  --bases-table-summary-background: #2f383e;
  --bg-dark: #2f383e;
  --bg-light: #fdf6e3;
  --bg0-dark: #22282c;
  --bg0-light: #f0edd8;
  --bg1-dark: #272f34;
  --bg1-light: #f6f1dd;
  --bg2-dark: #374247;
  --bg2-light: #f3efda;
  --bg3-dark: #404c51;
  --bg3-light: #edead5;
  --bg4-dark: #4a555b;
  --bg4-light: #e4e1cd;
  --bg5-dark: #525c62;
  --bg5-light: #dfdbc8;
  --bg_blue: #394f5a;
  --bg_blue_light: #e9f0e9;
  --bg_green: #404d44;
  --bg_green_light: #f0f1d2;
  --bg_red: #4e3e43;
  --bg_red_light: #fbe3da;
  --bg_visual: #503946;
  --bg_visual_light: #eaedc8;
  --bg_yellow: #4a4940;
  --bg_yellow_light: #faedcd;
  --blockquote-border-color: #569d79;
  --canvas-background: #2f383e;
  --canvas-card-label-color: #859289;
  --caret-color: #d3c6aa;
  --checkbox-border-color: #859289;
  --checkbox-color: #569d79;
  --checkbox-marker-color: #2f383e;
  --code-background: #2f383e;
  --code-block: #d3c6aa;
  --code-border-color: #525c62;
  --code-comment: #859289;
  --code-normal: #d3c6aa;
  --codeFont: var(--font-monospace, "Hack Nerd Font", "Source Code Pro", monospace);
  --collapse-icon-color: #859289;
  --collapse-icon-color-collapsed: #5a93a2;
  --dark: var(--text-normal, #d3c6aa);
  --darkgray: var(--text-normal, #d3c6aa);
  --dim-aqua: #569d79;
  --dim-blue: #5a93a2;
  --dim-green: #899c40;
  --dim-orange: #d77f48;
  --dim-purple: #b87b9d;
  --dim-red: #da6362;
  --dim-yellow: #bf983d;
  --divider-color: #525c62;
  --divider-color-hover: #569d79;
  --embed-block-shadow-hover: 0 0 0 1px #525c62, inset 0 0 0 1px #525c62;
  --embed-border-start: 2px solid #569d79;
  --faded-aqua: #83c092;
  --faded-blue: #7fbbb3;
  --faded-green: #a7c080;
  --faded-orange: #e69875;
  --faded-purple: #d699b6;
  --faded-red: #e67e80;
  --faded-yellow: #dbbc7f;
  --fg-dark: #d3c6aa;
  --fg-light: #5c6a72;
  --file-header-background: #2f383e;
  --file-header-background-focused: #2f383e;
  --flair-color: #d3c6aa;
  --font-monospace: "Hack Nerd Font", "Source Code Pro", monospace;
  --footnote-divider-color: #525c62;
  --footnote-id-color-no-occurrences: #859289;
  --graph-node-focused: #5a93a2;
  --graph-node-unresolved: #859289;
  --graph-text: #d3c6aa;
  --gray: var(--text-faint, #859289);
  --grey0-dark: #7f897d;
  --grey0-light: #a4ad9e;
  --grey1-dark: #859289;
  --grey1-light: #939f91;
  --grey2-dark: #9aa79d;
  --grey2-light: #879686;
  --h1-color: #da6362;
  --h2-color: #d77f48;
  --h3-color: #bf983d;
  --h4-color: #899c40;
  --h5-color: #569d79;
  --h6-color: #b87b9d;
  --heading-formatting: #859289;
  --highlight: var(--text-highlight-bg, #404d44);
  --hr-color: #525c62;
  --icon-color-active: #5a93a2;
  --icon-color-focused: #d3c6aa;
  --inline-code: #5a93a2;
  --inline-title-color: #da6362;
  --input-date-separator: #859289;
  --input-placeholder-color: #859289;
  --interactive-accent: #569d79;
  --interactive-accent-rgb: #5a93a2;
  --interactive-before: #525c62;
  --light: var(--background-primary, #2f383e);
  --light-aqua: #569d79;
  --light-blue: #5a93a2;
  --light-dim-aqua: #6ec398;
  --light-dim-blue: #6cb3c6;
  --light-dim-green: #a4bb4a;
  --light-dim-orange: #f39459;
  --light-dim-purple: #e092be;
  --light-dim-red: #f1706f;
  --light-dim-yellow: #e4b649;
  --light-green: #899c40;
  --light-orange: #f57d26;
  --light-purple: #b87b9d;
  --light-red: #f85552;
  --light-yellow: #bf983d;
  --lightgray: var(--background-secondary, #2f383e);
  --link-color: #5a93a2;
  --link-external-color: #5a93a2;
  --link-unresolved-color: #5a93a2;
  --list-marker-color: #859289;
  --list-marker-color-collapsed: #5a93a2;
  --menu-background: #2f383e;
  --metadata-border-color: #525c62;
  --metadata-divider-color: #525c62;
  --metadata-input-text-color: #d3c6aa;
  --modal-background: #2f383e;
  --nav-collapse-icon-color: #859289;
  --nav-collapse-icon-color-collapsed: #859289;
  --nav-heading-color: #d3c6aa;
  --nav-heading-color-collapsed: #859289;
  --nav-heading-color-hover: #d3c6aa;
  --nav-item-color-active: #d3c6aa;
  --nav-item-color-highlighted: #5a93a2;
  --nav-item-color-hover: #d3c6aa;
  --nav-item-color-selected: #d3c6aa;
  --nav-tag-color: #859289;
  --pdf-background: #2f383e;
  --pdf-page-background: #2f383e;
  --pdf-shadow: 0 0 0 1px #525c62;
  --pdf-sidebar-background: #2f383e;
  --pdf-thumbnail-shadow: 0 0 0 1px #525c62;
  --pill-border-color: #525c62;
  --pill-color-hover: #d3c6aa;
  --pill-color-remove: #859289;
  --pill-color-remove-hover: #5a93a2;
  --pre-code: #272f34;
  --prompt-background: #2f383e;
  --ribbon-background: #2f383e;
  --ribbon-background-collapsed: #2f383e;
  --search-result-background: #2f383e;
  --secondary: var(--text-accent, #5a93a2);
  --setting-group-heading-color: #d3c6aa;
  --setting-items-background: #2f383e;
  --setting-items-border-color: #525c62;
  --shadow: #00000070;
  --shadow-light: #3c474d20;
  --shiki-code-background: #2f383e;
  --shiki-code-comment: #859289;
  --shiki-gutter-border-color: #525c62;
  --shiki-gutter-text-color: #859289;
  --shiki-terminal-dots-color: #859289;
  --slider-track-background: #525c62;
  --status-bar-background: #2f383e;
  --status-bar-border-color: #525c62;
  --suggestion-background: #2f383e;
  --tab-background-active: #2f383e;
  --tab-container-background: #2f383e;
  --tab-outline-color: #525c62;
  --tab-switcher-background: #2f383e;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f383e, transparent);
  --tab-text-color: #859289;
  --tab-text-color-focused-active-current: #d3c6aa;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #525c62;
  --table-border-color: #525c62;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #859289;
  --table-header-border-color: #525c62;
  --table-header-color: #d3c6aa;
  --table-selection-border-color: #569d79;
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tertiary: var(--text-accent, #5a93a2);
  --text-a: #569d79;
  --text-a-hover: #83c092;
  --text-accent: #5a93a2;
  --text-faint: #859289;
  --text-highlight-bg: #404d44;
  --text-link: #7fbbb3;
  --text-mark: rgba(215, 153, 33, 0.4);
  --text-normal: #d3c6aa;
  --text-selection: #525c62;
  --text-title-h1: #da6362;
  --text-title-h2: #d77f48;
  --text-title-h3: #bf983d;
  --text-title-h4: #899c40;
  --text-title-h5: #569d79;
  --text-title-h6: #b87b9d;
  --textHighlight: var(--text-highlight-bg, #404d44);
  --titlebar-background: #2f383e;
  --titlebar-background-focused: #2f383e;
  --titlebar-border-color: #525c62;
  --titlebar-text-color-focused: #d3c6aa;
  --vault-profile-color: #d3c6aa;
  --vault-profile-color-hover: #d3c6aa;
  --vim-cursor: #7fbbb3;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 56, 62);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(47, 56, 62);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(47, 56, 62);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 56, 62);
  border-left-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body html {
  --bg-dark: #2f383e;
  --bg-light: #fdf6e3;
  --bg0-dark: #22282c;
  --bg0-light: #f0edd8;
  --bg1-dark: #272f34;
  --bg1-light: #f6f1dd;
  --bg2-dark: #374247;
  --bg2-light: #f3efda;
  --bg3-dark: #404c51;
  --bg3-light: #edead5;
  --bg4-dark: #4a555b;
  --bg4-light: #e4e1cd;
  --bg5-dark: #525c62;
  --bg5-light: #dfdbc8;
  --bg_blue: #394f5a;
  --bg_blue_light: #e9f0e9;
  --bg_green: #404d44;
  --bg_green_light: #f0f1d2;
  --bg_red: #4e3e43;
  --bg_red_light: #fbe3da;
  --bg_visual: #503946;
  --bg_visual_light: #eaedc8;
  --bg_yellow: #4a4940;
  --bg_yellow_light: #faedcd;
  --dim-aqua: #569d79;
  --dim-blue: #5a93a2;
  --dim-green: #899c40;
  --dim-orange: #d77f48;
  --dim-purple: #b87b9d;
  --dim-red: #da6362;
  --dim-yellow: #bf983d;
  --faded-aqua: #83c092;
  --faded-blue: #7fbbb3;
  --faded-green: #a7c080;
  --faded-orange: #e69875;
  --faded-purple: #d699b6;
  --faded-red: #e67e80;
  --faded-yellow: #dbbc7f;
  --fg-dark: #d3c6aa;
  --fg-light: #5c6a72;
  --grey0-dark: #7f897d;
  --grey0-light: #a4ad9e;
  --grey1-dark: #859289;
  --grey1-light: #939f91;
  --grey2-dark: #9aa79d;
  --grey2-light: #879686;
  --light-aqua: #569d79;
  --light-blue: #5a93a2;
  --light-dim-aqua: #6ec398;
  --light-dim-blue: #6cb3c6;
  --light-dim-green: #a4bb4a;
  --light-dim-orange: #f39459;
  --light-dim-purple: #e092be;
  --light-dim-red: #f1706f;
  --light-dim-yellow: #e4b649;
  --light-green: #899c40;
  --light-orange: #f57d26;
  --light-purple: #b87b9d;
  --light-red: #f85552;
  --light-yellow: #bf983d;
  --shadow: #00000070;
  --shadow-light: #3c474d20;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(64, 77, 68);
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body del {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(211, 198, 170);
  font-weight: 700;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(133, 146, 137);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(127, 187, 179);
  border-color: rgb(86, 157, 121);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration-color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration-color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body dt {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(133, 146, 137);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body table {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(82, 92, 98);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(82, 92, 98);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(90, 147, 162);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(218, 99, 98);
  border-left-color: rgb(218, 99, 98);
  border-right-color: rgb(218, 99, 98);
  border-top-color: rgb(218, 99, 98);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  margin-left: 10px;
  margin-right: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(127, 187, 179);
  border-left-color: rgb(127, 187, 179);
  border-right-color: rgb(127, 187, 179);
  border-top-color: rgb(127, 187, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(47, 56, 62);
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
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(211, 198, 170);
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
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 56, 62);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(82, 92, 98);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body h1 {
  color: rgb(218, 99, 98);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(218, 99, 98);
}

html[saved-theme="dark"] body h2 {
  color: rgb(215, 127, 72);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(218, 99, 98);
}

html[saved-theme="dark"] body h3 {
  color: rgb(191, 152, 61);
}

html[saved-theme="dark"] body h4 {
  color: rgb(137, 156, 64);
}

html[saved-theme="dark"] body h5 {
  color: rgb(86, 157, 121);
}

html[saved-theme="dark"] body h6 {
  color: rgb(184, 123, 157);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(211, 198, 170);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(133, 146, 137);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(47, 56, 62);
  border-color: rgb(211, 198, 170);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(47, 56, 62);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(47, 56, 62);
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(211, 198, 170);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body abbr {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body sub {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body summary {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body sup {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(90, 147, 162);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #dfdbc8;
  --background-primary: #fdf6e3;
  --background-primary-alt: #fdf6e3;
  --background-secondary: #fdf6e3;
  --background-secondary-alt: #fdf6e3;
  --bases-cards-background: #fdf6e3;
  --bases-cards-cover-background: #fdf6e3;
  --bases-cards-shadow: 0 0 0 1px #dfdbc8;
  --bases-embed-border-color: #dfdbc8;
  --bases-table-border-color: #dfdbc8;
  --bases-table-cell-background-active: #fdf6e3;
  --bases-table-cell-background-disabled: #fdf6e3;
  --bases-table-cell-shadow-focus: 0 0 0 2px #dfdbc8;
  --bases-table-group-background: #fdf6e3;
  --bases-table-header-background: #fdf6e3;
  --bases-table-summary-background: #fdf6e3;
  --bg-dark: #2f383e;
  --bg-light: #fdf6e3;
  --bg0-dark: #22282c;
  --bg0-light: #f0edd8;
  --bg1-dark: #272f34;
  --bg1-light: #f6f1dd;
  --bg2-dark: #374247;
  --bg2-light: #f3efda;
  --bg3-dark: #404c51;
  --bg3-light: #edead5;
  --bg4-dark: #4a555b;
  --bg4-light: #e4e1cd;
  --bg5-dark: #525c62;
  --bg5-light: #dfdbc8;
  --bg_blue: #394f5a;
  --bg_blue_light: #e9f0e9;
  --bg_green: #404d44;
  --bg_green_light: #f0f1d2;
  --bg_red: #4e3e43;
  --bg_red_light: #fbe3da;
  --bg_visual: #503946;
  --bg_visual_light: #eaedc8;
  --bg_yellow: #4a4940;
  --bg_yellow_light: #faedcd;
  --blockquote-border-color: #dfdbc8;
  --blur-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent));
  --canvas-background: #fdf6e3;
  --canvas-card-label-color: #939f91;
  --caret-color: #5c6a72;
  --checkbox-border-color: #939f91;
  --checkbox-color: #dfdbc8;
  --checkbox-marker-color: #fdf6e3;
  --code-background: #fdf6e3;
  --code-block: #5c6a72;
  --code-border-color: #dfdbc8;
  --code-comment: #939f91;
  --code-normal: #5c6a72;
  --codeFont: var(--font-monospace, "Hack Nerd Font", "Source Code Pro", monospace);
  --collapse-icon-color: #939f91;
  --collapse-icon-color-collapsed: #a4bb4a;
  --dark: var(--text-normal, #5c6a72);
  --darkgray: var(--text-normal, #5c6a72);
  --dim-aqua: #569d79;
  --dim-blue: #5a93a2;
  --dim-green: #899c40;
  --dim-orange: #d77f48;
  --dim-purple: #b87b9d;
  --dim-red: #da6362;
  --dim-yellow: #bf983d;
  --divider-color: #dfdbc8;
  --divider-color-hover: #dfdbc8;
  --embed-block-shadow-hover: 0 0 0 1px #dfdbc8, inset 0 0 0 1px #dfdbc8;
  --embed-border-start: 2px solid #dfdbc8;
  --faded-aqua: #83c092;
  --faded-blue: #7fbbb3;
  --faded-green: #a7c080;
  --faded-orange: #e69875;
  --faded-purple: #d699b6;
  --faded-red: #e67e80;
  --faded-yellow: #dbbc7f;
  --fg-dark: #d3c6aa;
  --fg-light: #5c6a72;
  --file-header-background: #fdf6e3;
  --file-header-background-focused: #fdf6e3;
  --flair-color: #5c6a72;
  --font-monospace: "Hack Nerd Font", "Source Code Pro", monospace;
  --footnote-divider-color: #dfdbc8;
  --footnote-id-color-no-occurrences: #939f91;
  --graph-node-focused: #a4bb4a;
  --graph-node-unresolved: #939f91;
  --graph-text: #5c6a72;
  --gray: var(--text-faint, #939f91);
  --grey0-dark: #7f897d;
  --grey0-light: #a4ad9e;
  --grey1-dark: #859289;
  --grey1-light: #939f91;
  --grey2-dark: #9aa79d;
  --grey2-light: #879686;
  --h1-color: #f85552;
  --h2-color: #f57d26;
  --h3-color: #bf983d;
  --h4-color: #899c40;
  --h5-color: #569d79;
  --h6-color: #b87b9d;
  --heading-formatting: #939f91;
  --highlight: var(--text-highlight-bg, #a4bb4a);
  --hr-color: #dfdbc8;
  --icon-color-active: #a4bb4a;
  --icon-color-focused: #5c6a72;
  --inline-code: #5a93a2;
  --inline-title-color: #f85552;
  --input-date-separator: #939f91;
  --input-placeholder-color: #939f91;
  --interactive-accent: #dfdbc8;
  --interactive-accent-rgb: #a4bb4a;
  --interactive-before: #dfdbc8;
  --light: var(--background-primary, #fdf6e3);
  --light-aqua: #569d79;
  --light-blue: #5a93a2;
  --light-dim-aqua: #6ec398;
  --light-dim-blue: #6cb3c6;
  --light-dim-green: #a4bb4a;
  --light-dim-orange: #f39459;
  --light-dim-purple: #e092be;
  --light-dim-red: #f1706f;
  --light-dim-yellow: #e4b649;
  --light-green: #899c40;
  --light-orange: #f57d26;
  --light-purple: #b87b9d;
  --light-red: #f85552;
  --light-yellow: #bf983d;
  --lightgray: var(--background-secondary, #fdf6e3);
  --link-color: #a4bb4a;
  --link-external-color: #a4bb4a;
  --link-unresolved-color: #a4bb4a;
  --list-marker-color: #939f91;
  --list-marker-color-collapsed: #a4bb4a;
  --menu-background: #fdf6e3;
  --metadata-border-color: #dfdbc8;
  --metadata-divider-color: #dfdbc8;
  --metadata-input-text-color: #5c6a72;
  --modal-background: #fdf6e3;
  --nav-collapse-icon-color: #939f91;
  --nav-collapse-icon-color-collapsed: #939f91;
  --nav-heading-color: #5c6a72;
  --nav-heading-color-collapsed: #939f91;
  --nav-heading-color-hover: #5c6a72;
  --nav-item-color-active: #5c6a72;
  --nav-item-color-highlighted: #a4bb4a;
  --nav-item-color-hover: #5c6a72;
  --nav-item-color-selected: #5c6a72;
  --nav-tag-color: #939f91;
  --pdf-background: #fdf6e3;
  --pdf-page-background: #fdf6e3;
  --pdf-sidebar-background: #fdf6e3;
  --pill-border-color: #dfdbc8;
  --pill-color-hover: #5c6a72;
  --pill-color-remove: #939f91;
  --pill-color-remove-hover: #a4bb4a;
  --pre-code: #f6f1dd;
  --prompt-background: #fdf6e3;
  --raised-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent));
  --ribbon-background: #fdf6e3;
  --ribbon-background-collapsed: #fdf6e3;
  --search-result-background: #fdf6e3;
  --secondary: var(--text-accent, #a4bb4a);
  --setting-group-heading-color: #5c6a72;
  --setting-items-background: #fdf6e3;
  --setting-items-border-color: #dfdbc8;
  --shadow: #00000070;
  --shadow-light: #3c474d20;
  --shiki-code-background: #fdf6e3;
  --shiki-code-comment: #939f91;
  --shiki-gutter-border-color: #dfdbc8;
  --shiki-gutter-text-color: #939f91;
  --shiki-terminal-dots-color: #939f91;
  --slider-track-background: #dfdbc8;
  --status-bar-background: #fdf6e3;
  --status-bar-border-color: #dfdbc8;
  --suggestion-background: #fdf6e3;
  --tab-background-active: #fdf6e3;
  --tab-container-background: #fdf6e3;
  --tab-outline-color: #dfdbc8;
  --tab-switcher-background: #fdf6e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf6e3, transparent);
  --tab-text-color: #939f91;
  --tab-text-color-focused-active-current: #5c6a72;
  --tab-text-color-focused-highlighted: #a4bb4a;
  --table-add-button-border-color: #dfdbc8;
  --table-border-color: #dfdbc8;
  --table-drag-handle-background-active: #dfdbc8;
  --table-drag-handle-color: #939f91;
  --table-header-border-color: #dfdbc8;
  --table-header-color: #5c6a72;
  --table-selection-border-color: #dfdbc8;
  --tag-color: #a4bb4a;
  --tag-color-hover: #a4bb4a;
  --tertiary: var(--text-accent, #a4bb4a);
  --text-a: #6cb3c6;
  --text-a-hover: #5a93a2;
  --text-accent: #a4bb4a;
  --text-faint: #939f91;
  --text-highlight-bg: #a4bb4a;
  --text-link: #5a93a2;
  --text-mark: rgba(215, 153, 33, 0.4);
  --text-normal: #5c6a72;
  --text-selection: rgba(189, 174, 147, 0.5);
  --text-title-h1: #f85552;
  --text-title-h2: #f57d26;
  --text-title-h3: #bf983d;
  --text-title-h4: #899c40;
  --text-title-h5: #569d79;
  --text-title-h6: #b87b9d;
  --textHighlight: var(--text-highlight-bg, #a4bb4a);
  --titlebar-background: #fdf6e3;
  --titlebar-background-focused: #fdf6e3;
  --titlebar-border-color: #dfdbc8;
  --titlebar-text-color-focused: #5c6a72;
  --vault-profile-color: #5c6a72;
  --vault-profile-color-hover: #5c6a72;
  --vim-cursor: #5a93a2;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 246, 227);
  border-left-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body html {
  --bg-dark: #2f383e;
  --bg-light: #fdf6e3;
  --bg0-dark: #22282c;
  --bg0-light: #f0edd8;
  --bg1-dark: #272f34;
  --bg1-light: #f6f1dd;
  --bg2-dark: #374247;
  --bg2-light: #f3efda;
  --bg3-dark: #404c51;
  --bg3-light: #edead5;
  --bg4-dark: #4a555b;
  --bg4-light: #e4e1cd;
  --bg5-dark: #525c62;
  --bg5-light: #dfdbc8;
  --bg_blue: #394f5a;
  --bg_blue_light: #e9f0e9;
  --bg_green: #404d44;
  --bg_green_light: #f0f1d2;
  --bg_red: #4e3e43;
  --bg_red_light: #fbe3da;
  --bg_visual: #503946;
  --bg_visual_light: #eaedc8;
  --bg_yellow: #4a4940;
  --bg_yellow_light: #faedcd;
  --dim-aqua: #569d79;
  --dim-blue: #5a93a2;
  --dim-green: #899c40;
  --dim-orange: #d77f48;
  --dim-purple: #b87b9d;
  --dim-red: #da6362;
  --dim-yellow: #bf983d;
  --faded-aqua: #83c092;
  --faded-blue: #7fbbb3;
  --faded-green: #a7c080;
  --faded-orange: #e69875;
  --faded-purple: #d699b6;
  --faded-red: #e67e80;
  --faded-yellow: #dbbc7f;
  --fg-dark: #d3c6aa;
  --fg-light: #5c6a72;
  --grey0-dark: #7f897d;
  --grey0-light: #a4ad9e;
  --grey1-dark: #859289;
  --grey1-light: #939f91;
  --grey2-dark: #9aa79d;
  --grey2-light: #879686;
  --light-aqua: #569d79;
  --light-blue: #5a93a2;
  --light-dim-aqua: #6ec398;
  --light-dim-blue: #6cb3c6;
  --light-dim-green: #a4bb4a;
  --light-dim-orange: #f39459;
  --light-dim-purple: #e092be;
  --light-dim-red: #f1706f;
  --light-dim-yellow: #e4b649;
  --light-green: #899c40;
  --light-orange: #f57d26;
  --light-purple: #b87b9d;
  --light-red: #f85552;
  --light-yellow: #bf983d;
  --shadow: #00000070;
  --shadow-light: #3c474d20;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(164, 187, 74);
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body del {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(92, 106, 114);
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(147, 159, 145);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(127, 187, 179);
  border-color: rgb(223, 219, 200);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(164, 187, 74);
  outline: rgb(164, 187, 74) none 0px;
  text-decoration-color: rgb(164, 187, 74);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(164, 187, 74);
  outline: rgb(164, 187, 74) none 0px;
  text-decoration-color: rgb(164, 187, 74);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(164, 187, 74);
  outline: rgb(164, 187, 74) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body dt {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ol > li {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul > li {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(147, 159, 145);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body table {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(223, 219, 200);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(223, 219, 200);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(90, 147, 162);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body figcaption {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(248, 85, 82);
  border-left-color: rgb(248, 85, 82);
  border-right-color: rgb(248, 85, 82);
  border-top-color: rgb(248, 85, 82);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  margin-left: 10px;
  margin-right: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(127, 187, 179);
  border-left-color: rgb(127, 187, 179);
  border-right-color: rgb(127, 187, 179);
  border-top-color: rgb(127, 187, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 246, 227);
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

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(92, 106, 114);
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
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(189, 174, 147, 0.5);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 246, 227);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(189, 174, 147, 0.5);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(189, 174, 147, 0.5);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(164, 187, 74);
}

html[saved-theme="light"] body h1 {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h2 {
  color: rgb(245, 125, 38);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h3 {
  color: rgb(191, 152, 61);
}

html[saved-theme="light"] body h4 {
  color: rgb(137, 156, 64);
}

html[saved-theme="light"] body h5 {
  color: rgb(86, 157, 121);
}

html[saved-theme="light"] body h6 {
  color: rgb(184, 123, 157);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(92, 106, 114);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(147, 159, 145);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(253, 246, 227);
  border-color: rgb(92, 106, 114);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(164, 187, 74);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(253, 246, 227);
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(92, 106, 114);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body abbr {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body sub {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body summary {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body sup {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(164, 187, 74);
}`,
  },
};
