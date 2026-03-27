import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "orange", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 30 !important;
  --accent-l: 50% !important;
  --accent-s: 61% !important;
  --background-modifier-active-hover: hsla(30, 61%, 50%, 0.1) !important;
  --background-primary: #0F0F0F !important;
  --background-primary-alt: #141414 !important;
  --background-secondary: #141414 !important;
  --background-secondary-alt: #0F0F0F !important;
  --bases-cards-background: #0F0F0F !important;
  --bases-cards-cover-background: #141414 !important;
  --bases-table-cell-background-active: #0F0F0F !important;
  --bases-table-cell-background-disabled: #141414 !important;
  --bases-table-cell-background-selected: hsla(30, 61%, 50%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(30, 61%, 50%) !important;
  --bases-table-group-background: #141414 !important;
  --bases-table-header-background: #0F0F0F !important;
  --bases-table-row-background-hover: #141414 !important;
  --bases-table-summary-background: #0F0F0F !important;
  --blockquote-border-color: hsl(30, 61%, 50%) !important;
  --canvas-background: #0F0F0F !important;
  --caret-color: #CD7F32 !important;
  --checkbox-color: hsl(30, 61%, 50%) !important;
  --checkbox-color-hover: hsl(27, 62.22%, 57.5%) !important;
  --checkbox-marker-color: #0F0F0F !important;
  --code-background: #0A0A0A !important;
  --code-normal: #50C878 !important;
  --collapse-icon-color-collapsed: hsl(27, 62.22%, 57.5%) !important;
  --color-accent: hsl(30, 61%, 50%) !important;
  --color-accent-1: hsl(27, 62.22%, 57.5%) !important;
  --color-accent-2: hsl(25, 64.05%, 64.5%) !important;
  --color-accent-hsl: 30, 61%, 50% !important;
  --dark: #cccccc !important;
  --darkgray: #cccccc !important;
  --divider-color-hover: hsl(30, 61%, 50%) !important;
  --embed-border-start: 2px solid hsl(30, 61%, 50%) !important;
  --file-header-background: #0F0F0F !important;
  --file-header-background-focused: #0F0F0F !important;
  --flair-color: #cccccc !important;
  --graph-node-focused: hsl(27, 62.22%, 57.5%) !important;
  --graph-text: #cccccc !important;
  --gray: #cccccc !important;
  --h1-color: #CD7F32 !important;
  --h1-size: 35px !important;
  --h2-color: #CD7F32 !important;
  --h2-size: 30px !important;
  --h3-color: #CD7F32 !important;
  --h3-size: 24px !important;
  --h4-color: #CD7F32 !important;
  --h4-size: 20px !important;
  --h5-color: #CD7F32 !important;
  --h5-size: 18px !important;
  --h6-color: #CD7F32 !important;
  --h6-size: 16px !important;
  --highlight: hsla(30, 61%, 50%, 0.1) !important;
  --icon-color-active: hsl(27, 62.22%, 57.5%) !important;
  --icon-color-focused: #cccccc !important;
  --inline-title-color: #CD7F32 !important;
  --inline-title-size: 35px !important;
  --interactive-accent: hsl(30, 61%, 50%) !important;
  --interactive-accent-hover: hsl(27, 62.22%, 57.5%) !important;
  --interactive-accent-hsl: 30, 61%, 50% !important;
  --light: #0F0F0F !important;
  --lightgray: #141414 !important;
  --link-color: #0067A5 !important;
  --link-color-hover: hsl(25, 64.05%, 64.5%) !important;
  --link-external-color: #0067A5 !important;
  --link-external-color-hover: hsl(25, 64.05%, 64.5%) !important;
  --link-unresolved-color: #0067A5 !important;
  --link-unresolved-decoration-color: hsla(30, 61%, 50%, 0.3) !important;
  --list-marker-color: #CD7F32 !important;
  --list-marker-color-collapsed: #CD7F32 !important;
  --menu-background: #141414 !important;
  --metadata-input-text-color: #cccccc !important;
  --modal-background: #0F0F0F !important;
  --nav-collapse-icon-color: #CD7F32 !important;
  --nav-heading-color: #CD7F32 !important;
  --nav-heading-color-hover: #cccccc !important;
  --nav-item-background-active: #333333 !important;
  --nav-item-background-selected: hsla(30, 61%, 50%, 0.15) !important;
  --nav-item-color: #CD7F32 !important;
  --nav-item-color-active: #CD7F32 !important;
  --nav-item-color-highlighted: hsl(27, 62.22%, 57.5%) !important;
  --nav-item-color-hover: #cccccc !important;
  --nav-item-color-selected: #cccccc !important;
  --nav-item-size: 14px !important;
  --pdf-background: #0F0F0F !important;
  --pdf-page-background: #0F0F0F !important;
  --pdf-sidebar-background: #0F0F0F !important;
  --pill-color-hover: #cccccc !important;
  --pill-color-remove-hover: hsl(27, 62.22%, 57.5%) !important;
  --prompt-background: #0F0F0F !important;
  --ribbon-background: #141414 !important;
  --ribbon-background-collapsed: #0F0F0F !important;
  --search-result-background: #0F0F0F !important;
  --secondary: hsl(27, 62.22%, 57.5%) !important;
  --setting-group-heading-color: #cccccc !important;
  --setting-items-background: #141414 !important;
  --status-bar-background: #141414 !important;
  --suggestion-background: #0F0F0F !important;
  --tab-background-active: #0F0F0F !important;
  --tab-container-background: #141414 !important;
  --tab-switcher-background: #141414 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(30, 61%, 50%) !important;
  --tab-text-color-focused-active-current: #cccccc !important;
  --tab-text-color-focused-highlighted: hsl(27, 62.22%, 57.5%) !important;
  --table-add-button-color: hsl(30, 61%, 50%) !important;
  --table-background: #141414 !important;
  --table-column-alt-background: #141414 !important;
  --table-drag-handle-background-active: hsl(30, 61%, 50%) !important;
  --table-drag-handle-color: hsl(30, 61%, 50%) !important;
  --table-drag-handle-color-active: #CD7F32 !important;
  --table-header-background: #141414 !important;
  --table-header-color: hsl(30, 61%, 50%) !important;
  --table-header-size: 24px !important;
  --table-header-weight: bold !important;
  --table-row-alt-background: #141414 !important;
  --table-row-alt-background-hover: #141414 !important;
  --table-row-background-hover: #141414 !important;
  --table-selection: hsla(30, 61%, 50%, 0.1) !important;
  --table-selection-border-color: hsl(30, 61%, 50%) !important;
  --table-text-size: 18px !important;
  --tag-background: hsla(30, 61%, 50%, 0.1) !important;
  --tag-background-hover: hsla(30, 61%, 50%, 0.2) !important;
  --tag-border-color: hsla(30, 61%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(30, 61%, 50%, 0.15) !important;
  --tag-color: hsl(27, 62.22%, 57.5%) !important;
  --tag-color-hover: hsl(27, 62.22%, 57.5%) !important;
  --tertiary: hsl(25, 64.05%, 64.5%) !important;
  --text-accent: hsl(27, 62.22%, 57.5%) !important;
  --text-accent-hover: hsl(25, 64.05%, 64.5%) !important;
  --text-normal: #cccccc !important;
  --text-selection: hsla(30, 61%, 50%, 0.33) !important;
  --textHighlight: hsla(30, 61%, 50%, 0.1) !important;
  --titlebar-background: #141414 !important;
  --titlebar-background-focused: #0F0F0F !important;
  --titlebar-text-color-focused: #cccccc !important;
  --vault-profile-color: #cccccc !important;
  --vault-profile-color-hover: #cccccc !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(15, 15, 15);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(15, 15, 15);
  color: rgb(204, 204, 204);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body del {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 103, 165);
  outline: rgb(0, 103, 165) none 0px;
  text-decoration: underline rgb(0, 103, 165);
  text-decoration-color: rgb(0, 103, 165);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 103, 165);
  outline: rgb(0, 103, 165) none 0px;
  text-decoration: underline rgb(0, 103, 165);
  text-decoration-color: rgb(0, 103, 165);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(0, 103, 165);
  outline: rgb(0, 103, 165) none 0px;
  text-decoration: underline rgba(205, 128, 50, 0.3);
  text-decoration-color: rgba(205, 128, 50, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 204, 204);
  width: 320.312px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body td {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body th {
  color: rgb(205, 128, 50);
  font-weight: 700;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(20, 20, 20);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(80, 200, 120);
  border-left-color: rgb(80, 200, 120);
  border-right-color: rgb(80, 200, 120);
  border-top-color: rgb(80, 200, 120);
  color: rgb(80, 200, 120);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(10, 10, 10);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(10, 10, 10);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(205, 128, 50);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(205, 128, 50);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(15, 15, 15);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(205, 128, 50, 0.1);
  border-bottom-color: rgba(205, 128, 50, 0.15);
  border-left-color: rgba(205, 128, 50, 0.15);
  border-right-color: rgba(205, 128, 50, 0.15);
  border-top-color: rgba(205, 128, 50, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(214, 140, 79);
}

html[saved-theme="dark"] body h1 {
  color: rgb(205, 127, 50);
}

html[saved-theme="dark"] body h2 {
  color: rgb(205, 127, 50);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(205, 127, 50);
}

html[saved-theme="dark"] body h3 {
  color: rgb(205, 127, 50);
}

html[saved-theme="dark"] body h4 {
  color: rgb(205, 127, 50);
}

html[saved-theme="dark"] body h5 {
  color: rgb(205, 127, 50);
}

html[saved-theme="dark"] body h6 {
  color: rgb(205, 127, 50);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(20, 20, 20);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(205, 127, 50);
  text-decoration: rgb(205, 127, 50);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(205, 127, 50);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(205, 127, 50);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(205, 127, 50);
  text-decoration: rgb(205, 127, 50);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(80, 200, 120);
  border-left-color: rgb(80, 200, 120);
  border-right-color: rgb(80, 200, 120);
  border-top-color: rgb(80, 200, 120);
  color: rgb(80, 200, 120);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247) !important;
  --blockquote-border-color: rgb(153, 115, 247) !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color: rgb(153, 115, 247) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --divider-color-hover: rgb(153, 115, 247) !important;
  --embed-border-start: 2px solid rgb(153, 115, 247) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(138, 92, 245, 0.1) !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --interactive-accent: rgb(153, 115, 247) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(166, 139, 249) !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(166, 139, 249) !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --metadata-input-height: 28px !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --secondary: rgb(138, 92, 245) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-drag-handle-background-active: rgb(153, 115, 247) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(153, 115, 247) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(138, 92, 245) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --textHighlight: rgba(138, 92, 245, 0.1) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: none solid rgb(92, 92, 92);
}`,
  },
};
