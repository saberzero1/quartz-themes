import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "aurora-twilight",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cabin", "quicksand"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: rgb(155, 182, 47) !important;
  --background-primary: rgb(2, 4, 34) !important;
  --background-secondary: rgb(0, 0, 0) !important;
  --bases-cards-background: rgb(2, 4, 34) !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-table-cell-background-active: rgb(2, 4, 34) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-background: rgb(2, 4, 34) !important;
  --bases-table-summary-background: rgb(2, 4, 34) !important;
  --bodyFont: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #d86679 !important;
  --button-radius: 12px !important;
  --callout-radius: 8px;
  --canvas-background: rgb(2, 4, 34) !important;
  --canvas-controls-radius: 8px !important;
  --checkbox-marker-color: rgb(2, 4, 34) !important;
  --checkbox-radius: 12px !important;
  --clickable-icon-radius: 8px !important;
  --code-radius: 8px !important;
  --codeFont: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: rgb(2, 4, 34) !important;
  --file-header-background-focused: rgb(2, 4, 34) !important;
  --font-mermaid: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Cabin, Quicksand, Arial' !important;
  --font-text: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Cabin, Quicksand !important;
  --footnote-radius: 8px !important;
  --h1-color: #ffc444 !important;
  --h2-color: #faa250 !important;
  --h3-color: #f88765 !important;
  --h4-color: #f88773 !important;
  --h5-color: #f88773 !important;
  --h6-color: #f88773 !important;
  --headerFont: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-hue: 30 !important;
  --inline-title-color: #ffc444 !important;
  --input-radius: 12px !important;
  --italic-color: #82c0e9 !important;
  --light: rgb(2, 4, 34) !important;
  --lightgray: rgb(0, 0, 0) !important;
  --menu-background: rgb(0, 0, 0) !important;
  --menu-radius: 12px !important;
  --modal-background: rgb(2, 4, 34) !important;
  --modal-radius: 16px !important;
  --nav-item-radius: 8px !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: rgb(2, 4, 34) !important;
  --pdf-page-background: rgb(2, 4, 34) !important;
  --pdf-sidebar-background: rgb(2, 4, 34) !important;
  --primary: rgb(119, 248, 194) !important;
  --prompt-background: rgb(2, 4, 34) !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --ribbon-background: rgb(0, 0, 0) !important;
  --ribbon-background-collapsed: rgb(2, 4, 34) !important;
  --scrollbar-radius: 16px !important;
  --search-result-background: rgb(2, 4, 34) !important;
  --secondary: rgb(7, 151, 57) !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-radius: 12px !important;
  --status-bar-background: rgb(0, 0, 0) !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --suggestion-background: rgb(2, 4, 34) !important;
  --tab-background-active: rgb(2, 4, 34) !important;
  --tab-container-background: rgb(0, 0, 0) !important;
  --tab-radius: 8px !important;
  --tab-switcher-background: rgb(0, 0, 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 0, 0), transparent) !important;
  --text: rgb(221, 221, 253) !important;
  --titleFont: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(0, 0, 0) !important;
  --toggle-radius: 12px !important;
  --toggle-thumb-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(216, 102, 121);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 102, 121) none 0px;
  text-decoration: rgb(216, 102, 121);
  text-decoration-color: rgb(216, 102, 121);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(130, 192, 233);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(130, 192, 233) none 0px;
  text-decoration: rgb(130, 192, 233);
  text-decoration-color: rgb(130, 192, 233);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(130, 192, 233);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(130, 192, 233) none 0px;
  text-decoration: rgb(130, 192, 233);
  text-decoration-color: rgb(130, 192, 233);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(216, 102, 121);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 102, 121) none 0px;
  text-decoration: rgb(216, 102, 121);
  text-decoration-color: rgb(216, 102, 121);
}

html[saved-theme="dark"] body .text-highlight {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body del {
  color: rgb(221, 221, 253);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(221, 221, 253) none 0px;
  text-decoration: line-through rgb(221, 221, 253);
  text-decoration-color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body p {
  font-family: Cabin, sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body table {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.344px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(221, 221, 253);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-family: Cabin, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(2, 4, 34);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 196, 68);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(250, 162, 80);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 196, 68);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(248, 135, 101);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Cabin, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Cabin, sans-serif;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(0, 0, 0);
  border-top-left-radius: 12px;
  font-family: Cabin, sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(221, 221, 253);
  font-family: Cabin, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Cabin, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: Cabin, sans-serif;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
  color: rgb(221, 221, 253);
}

html[saved-theme="dark"] body .metadata {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body kbd {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}`,
  },
  light: {
    base: `:root:root {
  --accent: rgb(181, 208, 73) !important;
  --background-primary: rgb(221, 223, 253) !important;
  --background-secondary: rgb(255, 255, 255) !important;
  --bases-cards-background: rgb(221, 223, 253) !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-table-cell-background-active: rgb(221, 223, 253) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-background: rgb(221, 223, 253) !important;
  --bases-table-summary-background: rgb(221, 223, 253) !important;
  --blur-background: color-mix(in srgb, rgb(221, 223, 253) 65%, transparent) linear-gradient(rgb(221, 223, 253), color-mix(in srgb, rgb(221, 223, 253) 65%, transparent)) !important;
  --bodyFont: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #d86679 !important;
  --button-radius: 12px !important;
  --callout-radius: 8px;
  --canvas-background: rgb(221, 223, 253) !important;
  --canvas-controls-radius: 8px !important;
  --checkbox-marker-color: rgb(221, 223, 253) !important;
  --checkbox-radius: 12px !important;
  --clickable-icon-radius: 8px !important;
  --code-radius: 8px !important;
  --codeFont: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: rgb(221, 223, 253) !important;
  --file-header-background-focused: rgb(221, 223, 253) !important;
  --font-mermaid: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Cabin, Quicksand, Arial' !important;
  --font-text: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Cabin, Quicksand !important;
  --footnote-radius: 8px !important;
  --h1-color: #ffc444 !important;
  --h2-color: #faa250 !important;
  --h3-color: #f88765 !important;
  --h4-color: #f88773 !important;
  --h5-color: #f88773 !important;
  --h6-color: #f88773 !important;
  --headerFont: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-hue: 30 !important;
  --inline-title-color: #ffc444 !important;
  --input-radius: 12px !important;
  --italic-color: #82c0e9 !important;
  --light: rgb(221, 223, 253) !important;
  --lightgray: rgb(255, 255, 255) !important;
  --menu-background: rgb(255, 255, 255) !important;
  --menu-radius: 12px !important;
  --modal-background: rgb(221, 223, 253) !important;
  --modal-radius: 16px !important;
  --nav-item-radius: 8px !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: rgb(221, 223, 253) !important;
  --pdf-page-background: rgb(221, 223, 253) !important;
  --pdf-sidebar-background: rgb(221, 223, 253) !important;
  --primary: rgb(7, 136, 82) !important;
  --prompt-background: rgb(221, 223, 253) !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, rgb(221, 223, 253) 65%, transparent) linear-gradient(rgb(221, 223, 253), color-mix(in srgb, rgb(221, 223, 253) 65%, transparent)) !important;
  --ribbon-background: rgb(255, 255, 255) !important;
  --ribbon-background-collapsed: rgb(221, 223, 253) !important;
  --scrollbar-radius: 16px !important;
  --search-result-background: rgb(221, 223, 253) !important;
  --secondary: rgb(104, 248, 154) !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-radius: 12px !important;
  --status-bar-background: rgb(255, 255, 255) !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --suggestion-background: rgb(221, 223, 253) !important;
  --tab-background-active: rgb(221, 223, 253) !important;
  --tab-container-background: rgb(255, 255, 255) !important;
  --tab-radius: 8px !important;
  --tab-switcher-background: rgb(255, 255, 255) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 255, 255), transparent) !important;
  --text: rgb(2, 2, 34) !important;
  --titleFont: Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(255, 255, 255) !important;
  --toggle-radius: 12px !important;
  --toggle-thumb-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(216, 102, 121);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 102, 121) none 0px;
  text-decoration: rgb(216, 102, 121);
  text-decoration-color: rgb(216, 102, 121);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(130, 192, 233);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(130, 192, 233) none 0px;
  text-decoration: rgb(130, 192, 233);
  text-decoration-color: rgb(130, 192, 233);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(130, 192, 233);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(130, 192, 233) none 0px;
  text-decoration: rgb(130, 192, 233);
  text-decoration-color: rgb(130, 192, 233);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(216, 102, 121);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 102, 121) none 0px;
  text-decoration: rgb(216, 102, 121);
  text-decoration-color: rgb(216, 102, 121);
}

html[saved-theme="light"] body .text-highlight {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body del {
  color: rgb(2, 2, 34);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(2, 2, 34) none 0px;
  text-decoration: line-through rgb(2, 2, 34);
  text-decoration-color: rgb(2, 2, 34);
}

html[saved-theme="light"] body p {
  font-family: Cabin, sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

html[saved-theme="light"] body table {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.344px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

html[saved-theme="light"] body figcaption {
  color: rgb(2, 2, 34);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-family: Cabin, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(221, 223, 253);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body h1 {
  color: rgb(255, 196, 68);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(250, 162, 80);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(255, 196, 68);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(248, 135, 101);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Cabin, sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Cabin, sans-serif;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  font-family: Cabin, sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(2, 2, 34);
  font-family: Cabin, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Cabin, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: Cabin, sans-serif;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
  color: rgb(2, 2, 34);
}

html[saved-theme="light"] body .metadata {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body kbd {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}`,
  },
};
