import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "comfort", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --aqua: #89bace !important;
  --background-modifier-border: rgba(0, 0, 0, 0) !important;
  --background-modifier-border-focus: #add4ad !important;
  --background-modifier-cover: #f6f9ec !important;
  --background-modifier-error: #f1d4d9 !important;
  --background-modifier-error-hover: #e5bec5 !important;
  --background-modifier-error-rgb: 197,
    65,
    40 !important;
  --background-modifier-hover: #a3d5aa !important;
  --background-primary: #fcfef3 !important;
  --background-secondary: #f8f6ea !important;
  --background-secondary-alt: #a3d5aa !important;
  --bases-cards-background: #fcfef3 !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;
  --bases-embed-border-color: rgba(0, 0, 0, 0) !important;
  --bases-group-heading-property-color: #8d9c8d !important;
  --bases-table-border-color: rgba(0, 0, 0, 0) !important;
  --bases-table-cell-background-active: #fcfef3 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #add4ad !important;
  --bases-table-header-background: #fcfef3 !important;
  --bases-table-header-background-hover: #a3d5aa !important;
  --bases-table-header-color: #8d9c8d !important;
  --bases-table-summary-background: #fcfef3 !important;
  --bases-table-summary-background-hover: #a3d5aa !important;
  --blue: #3d74f6 !important;
  --blur-background: color-mix(in srgb, #fcfef3 65%, transparent) linear-gradient(#fcfef3, color-mix(in srgb, #fcfef3 65%, transparent)) !important;
  --bodyFont: "宋体",SimSun !important;
  --button-radius: 4px !important;
  --callout-bug: 197,
    65,
    40;
  --callout-error: 197,
    65,
    40;
  --callout-fail: 197,
    65,
    40;
  --canvas-background: #fcfef3 !important;
  --canvas-color-1: 197,
    65,
    40 !important;
  --caret-color: #6f6e6a !important;
  --checkbox-border-color-hover: #8d9c8d !important;
  --checkbox-marker-color: #fcfef3 !important;
  --checklist-done-color: #8d9c8d !important;
  --code-border-color: rgba(0, 0, 0, 0) !important;
  --code-bracket-background: #a3d5aa !important;
  --code-normal: #6f6e6a !important;
  --code-punctuation: #8d9c8d !important;
  --codeFont: "宋体",SimSun !important;
  --color-red-rgb: 197,
    65,
    40 !important;
  --dark: #6f6e6a !important;
  --darkgray: #6f6e6a !important;
  --divider-color: rgba(0, 0, 0, 0) !important;
  --dropdown-background: #eff1df !important;
  --dropdown-background-hover: #e5e8c2 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(0, 0, 0, 0), inset 0 0 0 1px rgba(0, 0, 0, 0) !important;
  --embed-padding: 0 0 0 16px !important;
  --file-header-background: #fcfef3 !important;
  --file-header-background-focused: #fcfef3 !important;
  --flair-background: #eff1df !important;
  --flair-color: #6f6e6a !important;
  --font-mermaid: "宋体",SimSun !important;
  --font-text: "宋体",SimSun !important;
  --footnote-divider-color: rgba(0, 0, 0, 0) !important;
  --footnote-id-color: #8d9c8d !important;
  --footnote-input-background-active: #a3d5aa !important;
  --graph-node: #8d9c8d !important;
  --graph-text: #6f6e6a !important;
  --gray: #8d9c8d !important;
  --gray-1: #b0c0aa !important;
  --gray-2: #a0a5b8 !important;
  --green: #afe4ae !important;
  --headerFont: "宋体",SimSun !important;
  --highlight: #a3d5aa !important;
  --hr-color: rgba(0, 0, 0, 0) !important;
  --icon-color: #ffffff !important;
  --icon-color-active: #edf4f0 !important;
  --icon-color-focused: #edf4f0 !important;
  --icon-color-hover: #e6f1e9 !important;
  --input-radius: 4px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-hover: #e5e8c2 !important;
  --interactive-normal: #eff1df !important;
  --light: #fcfef3 !important;
  --lightgray: #f8f6ea !important;
  --link-external-color: #5273a5 !important;
  --link-external-color-hover: #1a4078 !important;
  --list-marker-color-hover: #8d9c8d !important;
  --menu-background: #f8f6ea !important;
  --menu-radius: 6px !important;
  --metadata-border-color: rgba(0, 0, 0, 0) !important;
  --metadata-divider-color: rgba(0, 0, 0, 0) !important;
  --metadata-input-background-active: #a3d5aa !important;
  --metadata-input-text-color: #6f6e6a !important;
  --metadata-label-background-active: #a3d5aa !important;
  --metadata-label-text-color: #8d9c8d !important;
  --metadata-label-text-color-hover: #8d9c8d !important;
  --metadata-property-background-active: #a3d5aa !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #add4ad !important;
  --modal-background: #fcfef3 !important;
  --modal-border-color: rgba(0, 0, 0, 0) !important;
  --modal-radius: 8px !important;
  --nav-heading-color: #6f6e6a !important;
  --nav-heading-color-collapsed-hover: #8d9c8d !important;
  --nav-heading-color-hover: #6f6e6a !important;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0) !important;
  --nav-item-background-active: #a3d5aa !important;
  --nav-item-background-hover: #a3d5aa !important;
  --nav-item-color: #626666 !important;
  --nav-item-color-active: #edf4f0 !important;
  --nav-item-color-hover: #edf4f0 !important;
  --nav-item-color-selected: #6f6e6a !important;
  --nav-tag-color-active: #8d9c8d !important;
  --nav-tag-color-hover: #8d9c8d !important;
  --orange: #c1a58c !important;
  --panel-border-color: rgba(0, 0, 0, 0) !important;
  --pdf-background: #fcfef3 !important;
  --pdf-page-background: #fcfef3 !important;
  --pdf-sidebar-background: #fcfef3 !important;
  --pill-border-color: rgba(0, 0, 0, 0) !important;
  --pill-color: #8d9c8d !important;
  --pill-color-hover: #6f6e6a !important;
  --prompt-background: #fcfef3 !important;
  --purple: #ce82cd !important;
  --radius-l: 8px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, #fcfef3 65%, transparent) linear-gradient(#fcfef3, color-mix(in srgb, #fcfef3 65%, transparent)) !important;
  --red: #cd8f88 !important;
  --ribbon-background-collapsed: #fcfef3 !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #8d9c8d !important;
  --search-icon-color: #8d9c8d !important;
  --search-result-background: #fcfef3 !important;
  --setting-group-heading-color: #6f6e6a !important;
  --setting-items-border-color: rgba(0, 0, 0, 0) !important;
  --setting-items-radius: 8px !important;
  --slider-track-background: #eff1e1 !important;
  --status-bar-background: #f8f6ea !important;
  --status-bar-border-color: rgba(0, 0, 0, 0) !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: #8d9c8d !important;
  --suggestion-background: #fcfef3 !important;
  --tab-background-active: #fcfef3 !important;
  --tab-container-background: #a3d5aa !important;
  --tab-divider-color: #b4d8b4 !important;
  --tab-outline-color: #f8f6ea !important;
  --tab-outline-width: 0 !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #f8f6ea !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8f6ea, transparent) !important;
  --tab-text-color: #e6f1e9 !important;
  --tab-text-color-active: #8d9c8d !important;
  --tab-text-color-focused: #e6f1e9 !important;
  --tab-text-color-focused-active: #8d9c8d !important;
  --tab-text-color-focused-active-current: #66876b !important;
  --table-add-button-border-color: rgba(0, 0, 0, 0) !important;
  --table-border-color: rgba(0, 0, 0, 0) !important;
  --table-header-border-color: rgba(0, 0, 0, 0) !important;
  --table-header-color: #6f6e6a !important;
  --tag-background: #d4e4f1 !important;
  --tag-color: #fcfdfe !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 4px !important;
  --text-muted: #8d9c8d !important;
  --text-normal: #6f6e6a !important;
  --textHighlight: #a3d5aa !important;
  --titleFont: "宋体",SimSun !important;
  --titlebar-background: #a3d5aa !important;
  --titlebar-background-focused: #a3d5aa !important;
  --titlebar-border-color: rgba(0, 0, 0, 0) !important;
  --titlebar-text-color: #8d9c8d !important;
  --titlebar-text-color-focused: #6f6e6a !important;
  --toggle-radius: 4px !important;
  --vault-name-color: #636867 !important;
  --vault-profile-color: #6f6e6a !important;
  --vault-profile-color-hover: #6f6e6a !important;
  --yellow: #e1d5ac !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(163, 213, 170);
  color: rgb(111, 110, 106);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(252, 254, 243);
  color: rgb(111, 110, 106);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 246, 234);
  color: rgb(111, 110, 106);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(163, 213, 170);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(111, 110, 106);
}

body div#quartz-root {
  background-color: rgb(252, 254, 243);
  color: rgb(111, 110, 106);
}`,
    typography: `body .page article p > b, b {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body .page article p > em, em {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body .page article p > i, i {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body .page article p > strong, strong {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body .text-highlight {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body del {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration: line-through rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body p {
  color: rgb(141, 156, 141);
  font-family: "Times New Roman";
  outline: rgb(141, 156, 141) none 0px;
  text-decoration: rgb(141, 156, 141);
  text-decoration-color: rgb(141, 156, 141);
}`,
    links: `body a.external, footer a {
  color: rgb(82, 115, 165);
  font-family: 宋体, SimSun;
  outline: rgb(82, 115, 165) none 0px;
  text-decoration: underline rgb(82, 115, 165);
  text-decoration-color: rgb(82, 115, 165);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: 宋体, SimSun;
}

body a.internal.broken {
  font-family: 宋体, SimSun;
}`,
    lists: `body dd {
  color: rgb(111, 110, 106);
}

body dt {
  color: rgb(111, 110, 106);
}

body ol > li {
  color: rgb(111, 110, 106);
}

body ol.overflow {
  background-color: rgb(252, 254, 243);
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body ul > li {
  color: rgb(111, 110, 106);
}

body ul.overflow {
  background-color: rgb(252, 254, 243);
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}`,
    blockquotes: `body blockquote {
  font-family: 宋体, SimSun;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body table {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  width: 180.766px;
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(111, 110, 106);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(111, 110, 106);
}`,
    code: `body code {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 247, 228);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 247, 228);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(111, 110, 106);
}

body pre > code, pre:has(> code) {
  background-color: rgb(243, 247, 228);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body pre:has(> code) {
  background-color: rgb(243, 247, 228);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body figcaption {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

body figure {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body img {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body video {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(141, 156, 141);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(141, 156, 141);
  border-right-color: rgb(141, 156, 141);
  border-top-color: rgb(141, 156, 141);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .footnotes {
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

body .transclude {
  border-bottom-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body .transclude-inner {
  border-bottom-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: 宋体, SimSun;
}

body .katex-display > .katex > .katex-html {
  font-family: 宋体, SimSun;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 156, 141);
  text-decoration: line-through rgb(141, 156, 141);
  text-decoration-color: rgb(141, 156, 141);
}

body li.task-list-item[data-task='!'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='*'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='-'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='/'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='>'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='?'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='I'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='S'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='b'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='c'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='d'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='f'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='i'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='k'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='l'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='p'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='u'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body li.task-list-item[data-task='w'] {
  color: rgb(111, 110, 106);
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}`,
    callouts: `body .callout[data-callout="bug"] {
  --callout-color: 197,
    65,
    40;
  background-color: rgba(197, 65, 40, 0.1);
  border-bottom-color: rgba(197, 65, 40, 0.25);
  border-left-color: rgba(197, 65, 40, 0.25);
  border-right-color: rgba(197, 65, 40, 0.25);
  border-top-color: rgba(197, 65, 40, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 197,
    65,
    40;
  background-color: rgba(197, 65, 40, 0.1);
  border-bottom-color: rgba(197, 65, 40, 0.25);
  border-left-color: rgba(197, 65, 40, 0.25);
  border-right-color: rgba(197, 65, 40, 0.25);
  border-top-color: rgba(197, 65, 40, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 197,
    65,
    40;
  background-color: rgba(197, 65, 40, 0.1);
  border-bottom-color: rgba(197, 65, 40, 0.25);
  border-left-color: rgba(197, 65, 40, 0.25);
  border-right-color: rgba(197, 65, 40, 0.25);
  border-top-color: rgba(197, 65, 40, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(111, 110, 106);
  font-family: "Times New Roman";
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 254, 243);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(111, 110, 106);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(111, 110, 106);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(163, 213, 170);
  color: rgb(111, 110, 106);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 246, 234);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(163, 213, 170);
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(163, 213, 170);
  color: rgb(111, 110, 106);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(212, 228, 241);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(252, 253, 254);
}

body h1 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

body h2 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

body h2.page-title, h2.page-title a {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

body h3 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

body h4 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

body h5 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

body h6 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

body ::-webkit-scrollbar-corner {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

body ::-webkit-scrollbar-track {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(98, 102, 102);
  font-family: "Times New Roman";
  text-decoration: rgb(98, 102, 102);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(98, 102, 102);
  font-family: "Times New Roman";
  text-decoration: rgb(98, 102, 102);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(98, 102, 102);
  font-family: "Times New Roman";
  text-decoration: rgb(98, 102, 102);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(163, 213, 170);
  border-bottom-color: rgb(237, 244, 240);
  border-left-color: rgb(237, 244, 240);
  border-right-color: rgb(237, 244, 240);
  border-top-color: rgb(237, 244, 240);
  color: rgb(237, 244, 240);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(163, 213, 170);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgb(248, 246, 234);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  color: rgb(141, 156, 141);
  font-family: "Times New Roman";
}

body footer ul li a {
  color: rgb(141, 156, 141);
  text-decoration: rgb(141, 156, 141);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(111, 110, 106);
  font-family: "Times New Roman";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(98, 102, 102);
  text-decoration: rgb(98, 102, 102);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(98, 102, 102);
  font-family: "Times New Roman";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body li.section-li > .section .meta {
  color: rgb(98, 102, 102);
  font-family: "Times New Roman";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(98, 102, 102);
  text-decoration: rgb(98, 102, 102);
}

body ul.section-ul {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}`,
    darkmode: `body .darkmode {
  background-color: rgb(163, 213, 170);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(141, 156, 141);
  border-left-color: rgb(141, 156, 141);
  border-right-color: rgb(141, 156, 141);
  border-top-color: rgb(141, 156, 141);
  color: rgb(141, 156, 141);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(141, 156, 141);
  font-family: 宋体, SimSun;
}

body .metadata-properties {
  border-bottom-color: rgb(141, 156, 141);
  border-left-color: rgb(141, 156, 141);
  border-right-color: rgb(141, 156, 141);
  border-top-color: rgb(141, 156, 141);
  color: rgb(141, 156, 141);
  font-family: 宋体, SimSun;
}

body .navigation-progress {
  background-color: rgb(248, 246, 234);
}

body .page-header h2.page-title {
  color: rgb(111, 110, 106);
}

body abbr {
  color: rgb(111, 110, 106);
  text-decoration: underline dotted rgb(111, 110, 106);
}

body details {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body input[type=text] {
  border-bottom-color: rgb(141, 156, 141);
  border-left-color: rgb(141, 156, 141);
  border-right-color: rgb(141, 156, 141);
  border-top-color: rgb(141, 156, 141);
  color: rgb(141, 156, 141);
}

body kbd {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

body progress {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

body sub {
  color: rgb(111, 110, 106);
}

body summary {
  color: rgb(111, 110, 106);
}

body sup {
  color: rgb(111, 110, 106);
}`,
  },
};
