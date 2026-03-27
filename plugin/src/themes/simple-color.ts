import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "simple-color", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: black !important;
  --background-secondary: black !important;
  --bases-cards-background: black !important;
  --bases-table-cell-background-active: black !important;
  --bases-table-header-background: black !important;
  --bases-table-summary-background: black !important;
  --bodyFont: Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: black !important;
  --checkbox-marker-color: black !important;
  --codeFont: Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: black !important;
  --file-header-background-focused: black !important;
  --font-mermaid: Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Georgia, serif, Arial' !important;
  --font-text: Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Georgia, serif !important;
  --h1-color: #bf616a !important;
  --h2-color: #d08770 !important;
  --h3-color: #ebcb8b !important;
  --h4-color: #a3be8c !important;
  --h5-color: #b48ead !important;
  --h6-color: #8fbcbb !important;
  --headerFont: Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-color: #bf616a !important;
  --light: black !important;
  --lightgray: black !important;
  --menu-background: black !important;
  --modal-background: black !important;
  --pdf-background: black !important;
  --pdf-page-background: black !important;
  --pdf-sidebar-background: black !important;
  --prompt-background: black !important;
  --ribbon-background: black !important;
  --ribbon-background-collapsed: black !important;
  --search-result-background: black !important;
  --status-bar-background: black !important;
  --suggestion-background: black !important;
  --tab-background-active: black !important;
  --tab-container-background: black !important;
  --tab-switcher-background: black !important;
  --tab-switcher-menubar-background: linear-gradient(to top, black, transparent) !important;
  --text-color: #81a1c1 !important;
  --titleFont: Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: black !important;
  --titlebar-background-focused: black !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    typography: `html body .page article p > b, html b {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article p > em, html em {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article p > i, html i {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article p > strong, html strong {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .text-highlight {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body del {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external, html footer a {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.broken {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    blockquotes: `html body blockquote {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body table {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 180.766px;
}`,
    images: `html body figcaption {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    search: `html body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > * {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
}

html body h1 {
  color: rgb(191, 97, 106);
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(208, 135, 112);
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(191, 97, 106);
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(235, 203, 139);
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(163, 190, 140);
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(180, 142, 173);
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(143, 188, 187);
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    footer: `html body footer {
  background-color: rgb(0, 0, 0);
}`,
    misc: `html body .metadata {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  font-family: "??", Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(0, 0, 0);
}`,
  },
  light: {},
};
