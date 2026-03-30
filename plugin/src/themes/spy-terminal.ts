import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "spy-terminal",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-mono", "roboto-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #1a1a1a !important;
  --background-secondary: #222222 !important;
  --background-tertiary: #111111 !important;
  --bases-cards-background: #1a1a1a !important;
  --bases-group-heading-property-color: #008800 !important;
  --bases-table-cell-background-active: #1a1a1a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00aa00 !important;
  --bases-table-header-background: #1a1a1a !important;
  --bases-table-header-color: #008800 !important;
  --bases-table-summary-background: #1a1a1a !important;
  --blockquote-border-color: #00aa00 !important;
  --canvas-background: #1a1a1a !important;
  --caret-color: #00ff00 !important;
  --checkbox-border-color-hover: #008800 !important;
  --checkbox-color: #00aa00 !important;
  --checkbox-color-hover: #00cc00 !important;
  --checkbox-marker-color: #1a1a1a !important;
  --checklist-done-color: #008800 !important;
  --code-normal: #00ff00 !important;
  --code-punctuation: #008800 !important;
  --dark: #00ff00 !important;
  --darkgray: #00ff00 !important;
  --divider-color-hover: #00aa00 !important;
  --embed-border-start: 2px solid #00aa00 !important;
  --file-header-background: #1a1a1a !important;
  --file-header-background-focused: #1a1a1a !important;
  --flair-color: #00ff00 !important;
  --footnote-id-color: #008800 !important;
  --graph-node: #008800 !important;
  --graph-text: #00ff00 !important;
  --gray: #008800 !important;
  --highlight: rgba(0, 255, 0, 0.2) !important;
  --highlight-text: #00ff00 !important;
  --icon-color: #008800 !important;
  --icon-color-focused: #00ff00 !important;
  --icon-color-hover: #008800 !important;
  --interactive-accent: #00aa00 !important;
  --interactive-accent-hover: #00cc00 !important;
  --light: #1a1a1a !important;
  --lightgray: #222222 !important;
  --link-color: #00ccff !important;
  --list-marker-color-hover: #008800 !important;
  --menu-background: #222222 !important;
  --metadata-input-text-color: #00ff00 !important;
  --metadata-label-text-color: #008800 !important;
  --metadata-label-text-color-hover: #008800 !important;
  --modal-background: #1a1a1a !important;
  --nav-heading-color: #00ff00 !important;
  --nav-heading-color-collapsed-hover: #008800 !important;
  --nav-heading-color-hover: #00ff00 !important;
  --nav-item-color: #008800 !important;
  --nav-item-color-active: #00ff00 !important;
  --nav-item-color-hover: #00ff00 !important;
  --nav-item-color-selected: #00ff00 !important;
  --nav-tag-color-active: #008800 !important;
  --nav-tag-color-hover: #008800 !important;
  --pdf-background: #1a1a1a !important;
  --pdf-page-background: #1a1a1a !important;
  --pdf-sidebar-background: #1a1a1a !important;
  --pill-color: #008800 !important;
  --pill-color-hover: #00ff00 !important;
  --prompt-background: #1a1a1a !important;
  --ribbon-background: #222222 !important;
  --ribbon-background-collapsed: #1a1a1a !important;
  --search-clear-button-color: #008800 !important;
  --search-icon-color: #008800 !important;
  --search-result-background: #1a1a1a !important;
  --secondary: #00aa00 !important;
  --setting-group-heading-color: #00ff00 !important;
  --status-bar-background: #222222 !important;
  --status-bar-text-color: #008800 !important;
  --suggestion-background: #1a1a1a !important;
  --tab-background-active: #1a1a1a !important;
  --tab-container-background: #222222 !important;
  --tab-switcher-background: #222222 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #222222, transparent) !important;
  --tab-text-color-active: #008800 !important;
  --tab-text-color-focused: #008800 !important;
  --tab-text-color-focused-active: #008800 !important;
  --tab-text-color-focused-active-current: #00ff00 !important;
  --table-drag-handle-background-active: #00aa00 !important;
  --table-header-color: #00ff00 !important;
  --table-selection-border-color: #00aa00 !important;
  --tertiary: #00cc00 !important;
  --text-error: #ff0000 !important;
  --text-highlight-bg: rgba(0, 255, 0, 0.2) !important;
  --text-muted: #008800 !important;
  --text-normal: #00ff00 !important;
  --text-selection: rgba(0, 255, 0, 0.3) !important;
  --textHighlight: rgba(0, 255, 0, 0.2) !important;
  --titlebar-background: #222222 !important;
  --titlebar-text-color: #008800 !important;
  --titlebar-text-color-focused: #00ff00 !important;
  --vault-profile-color: #00ff00 !important;
  --vault-profile-color-hover: #00ff00 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(0, 255, 0);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 255, 0, 0.2);
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body del {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(0, 136, 0);
  outline: rgb(0, 136, 0) none 0px;
  text-decoration-color: rgb(0, 136, 0);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 204, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 255) none 0px;
  text-decoration-color: rgb(0, 204, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body dt {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body table {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body td {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body th {
  color: rgb(0, 255, 0);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(0, 255, 0);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 170, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 170, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 136, 0);
  text-decoration-color: rgb(0, 136, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body h1 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 136, 0);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 136, 0);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 136, 0);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(0, 136, 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 136, 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 136, 0);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(0, 136, 0);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 136, 0);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(0, 136, 0);
  stroke: rgb(0, 136, 0);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(0, 136, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(34, 34, 34);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body abbr {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body sub {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body summary {
  color: rgb(0, 255, 0);
}

html[saved-theme="dark"] body sup {
  color: rgb(0, 255, 0);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #1a1a1a !important;
  --background-secondary: #222222 !important;
  --background-tertiary: #111111 !important;
  --bases-cards-background: #1a1a1a !important;
  --bases-group-heading-property-color: #008800 !important;
  --bases-table-cell-background-active: #1a1a1a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00aa00 !important;
  --bases-table-header-background: #1a1a1a !important;
  --bases-table-header-color: #008800 !important;
  --bases-table-summary-background: #1a1a1a !important;
  --blockquote-border-color: #00aa00 !important;
  --blur-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent)) !important;
  --canvas-background: #1a1a1a !important;
  --caret-color: #00ff00 !important;
  --checkbox-border-color-hover: #008800 !important;
  --checkbox-color: #00aa00 !important;
  --checkbox-color-hover: #00cc00 !important;
  --checkbox-marker-color: #1a1a1a !important;
  --checklist-done-color: #008800 !important;
  --code-normal: #00ff00 !important;
  --code-punctuation: #008800 !important;
  --dark: #00ff00 !important;
  --darkgray: #00ff00 !important;
  --divider-color-hover: #00aa00 !important;
  --embed-border-start: 2px solid #00aa00 !important;
  --file-header-background: #1a1a1a !important;
  --file-header-background-focused: #1a1a1a !important;
  --flair-color: #00ff00 !important;
  --footnote-id-color: #008800 !important;
  --graph-node: #008800 !important;
  --graph-text: #00ff00 !important;
  --gray: #008800 !important;
  --highlight: rgba(0, 255, 0, 0.2) !important;
  --highlight-text: #00ff00 !important;
  --icon-color: #008800 !important;
  --icon-color-focused: #00ff00 !important;
  --icon-color-hover: #008800 !important;
  --interactive-accent: #00aa00 !important;
  --interactive-accent-hover: #00cc00 !important;
  --light: #1a1a1a !important;
  --lightgray: #222222 !important;
  --link-color: #00ccff !important;
  --list-marker-color-hover: #008800 !important;
  --menu-background: #222222 !important;
  --metadata-input-text-color: #00ff00 !important;
  --metadata-label-text-color: #008800 !important;
  --metadata-label-text-color-hover: #008800 !important;
  --modal-background: #1a1a1a !important;
  --nav-heading-color: #00ff00 !important;
  --nav-heading-color-collapsed-hover: #008800 !important;
  --nav-heading-color-hover: #00ff00 !important;
  --nav-item-color: #008800 !important;
  --nav-item-color-active: #00ff00 !important;
  --nav-item-color-hover: #00ff00 !important;
  --nav-item-color-selected: #00ff00 !important;
  --nav-tag-color-active: #008800 !important;
  --nav-tag-color-hover: #008800 !important;
  --pdf-background: #1a1a1a !important;
  --pdf-page-background: #1a1a1a !important;
  --pdf-sidebar-background: #1a1a1a !important;
  --pill-color: #008800 !important;
  --pill-color-hover: #00ff00 !important;
  --prompt-background: #1a1a1a !important;
  --raised-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent)) !important;
  --ribbon-background: #222222 !important;
  --ribbon-background-collapsed: #1a1a1a !important;
  --search-clear-button-color: #008800 !important;
  --search-icon-color: #008800 !important;
  --search-result-background: #1a1a1a !important;
  --secondary: #00aa00 !important;
  --setting-group-heading-color: #00ff00 !important;
  --status-bar-background: #222222 !important;
  --status-bar-text-color: #008800 !important;
  --suggestion-background: #1a1a1a !important;
  --tab-background-active: #1a1a1a !important;
  --tab-container-background: #222222 !important;
  --tab-switcher-background: #222222 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #222222, transparent) !important;
  --tab-text-color-active: #008800 !important;
  --tab-text-color-focused: #008800 !important;
  --tab-text-color-focused-active: #008800 !important;
  --tab-text-color-focused-active-current: #00ff00 !important;
  --table-drag-handle-background-active: #00aa00 !important;
  --table-header-color: #00ff00 !important;
  --table-selection-border-color: #00aa00 !important;
  --tertiary: #00cc00 !important;
  --text-error: #ff0000 !important;
  --text-highlight-bg: rgba(0, 255, 0, 0.2) !important;
  --text-muted: #008800 !important;
  --text-normal: #00ff00 !important;
  --text-selection: rgba(0, 255, 0, 0.3) !important;
  --textHighlight: rgba(0, 255, 0, 0.2) !important;
  --titlebar-background: #222222 !important;
  --titlebar-text-color: #008800 !important;
  --titlebar-text-color-focused: #00ff00 !important;
  --vault-profile-color: #00ff00 !important;
  --vault-profile-color-hover: #00ff00 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(0, 255, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 255, 0, 0.2);
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body p {
  color: rgb(0, 136, 0);
  outline: rgb(0, 136, 0) none 0px;
  text-decoration-color: rgb(0, 136, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 204, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 255) none 0px;
  text-decoration-color: rgb(0, 204, 255);
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body td {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body th {
  color: rgb(0, 255, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(0, 255, 0);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 170, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 170, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 136, 0);
  text-decoration-color: rgb(0, 136, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(26, 26, 26);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 136, 0);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 136, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 136, 0);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 136, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 136, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 136, 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 136, 0);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 136, 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(0, 136, 0);
  stroke: rgb(0, 136, 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body .metadata {
  color: rgb(0, 136, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 255, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 255, 0);
}`,
  },
};
