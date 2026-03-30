import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "lavender-mist",
    modes: ["light"],
    variations: [],
    fonts: ["noto-serif-kr"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent: #96539d !important;
  --background-primary: #e7e9f3 !important;
  --bases-cards-background: #e7e9f3 !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-table-cell-background-active: #e7e9f3 !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-background: #e7e9f3 !important;
  --bases-table-summary-background: #e7e9f3 !important;
  --blur-background: color-mix(in srgb, #e7e9f3 65%, transparent) linear-gradient(#e7e9f3, color-mix(in srgb, #e7e9f3 65%, transparent)) !important;
  --bodyFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #96539d !important;
  --button-radius: 12px !important;
  --callout-radius: 8px;
  --canvas-background: #e7e9f3 !important;
  --canvas-controls-radius: 8px !important;
  --checkbox-marker-color: #e7e9f3 !important;
  --checkbox-radius: 12px !important;
  --clickable-icon-radius: 8px !important;
  --code-radius: 8px !important;
  --codeFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: #e7e9f3 !important;
  --file-header-background-focused: #e7e9f3 !important;
  --font-mermaid: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Noto Serif KR, serif, Arial' !important;
  --font-text: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Noto Serif KR', serif !important;
  --footnote-radius: 8px !important;
  --h1-color: #96539d !important;
  --h2-color: #96539d !important;
  --h3-color: #96539d !important;
  --h4-color: #96539d !important;
  --h5-color: #96539d !important;
  --h6-color: #96539d !important;
  --headerFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-hue: 30 !important;
  --inline-title-color: #96539d !important;
  --input-radius: 12px !important;
  --italic-color: #96539d !important;
  --light: #e7e9f3 !important;
  --menu-radius: 12px !important;
  --modal-background: #e7e9f3 !important;
  --modal-radius: 16px !important;
  --nav-item-radius: 8px !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #e7e9f3 !important;
  --pdf-page-background: #e7e9f3 !important;
  --pdf-sidebar-background: #e7e9f3 !important;
  --primary: #313a5e !important;
  --prompt-background: #e7e9f3 !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, #e7e9f3 65%, transparent) linear-gradient(#e7e9f3, color-mix(in srgb, #e7e9f3 65%, transparent)) !important;
  --ribbon-background-collapsed: #e7e9f3 !important;
  --scrollbar-radius: 16px !important;
  --search-result-background: #e7e9f3 !important;
  --secondary: #af8dc3 !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-radius: 12px !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --suggestion-background: #e7e9f3 !important;
  --tab-background-active: #e7e9f3 !important;
  --tab-radius: 8px !important;
  --text: #121421 !important;
  --titleFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --toggle-radius: 12px !important;
  --toggle-thumb-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(18, 20, 33);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(231, 233, 243);
  color: rgb(18, 20, 33);
}

html body .page > div#quartz-body div.sidebar {
  color: rgb(18, 20, 33);
}

html body .page > div#quartz-body div.sidebar.right {
  color: rgb(18, 20, 33);
}

html body div#quartz-root {
  background-color: rgb(231, 233, 243);
  color: rgb(18, 20, 33);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(150, 83, 157) none 0px;
  text-decoration-color: rgb(150, 83, 157);
}

html body .page article p > em, html em {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(150, 83, 157) none 0px;
  text-decoration-color: rgb(150, 83, 157);
}

html body .page article p > i, html i {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(150, 83, 157) none 0px;
  text-decoration-color: rgb(150, 83, 157);
}

html body .page article p > strong, html strong {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(150, 83, 157) none 0px;
  text-decoration-color: rgb(150, 83, 157);
}

html body .text-highlight {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body del {
  color: rgb(18, 20, 33);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(18, 20, 33) none 0px;
  text-decoration-color: rgb(18, 20, 33);
}

html body p {
  font-family: "Noto Serif KR", serif;
}`,
    links: `html body a.external, html footer a {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.broken {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html body ol.overflow {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

html body ul.overflow {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}`,
    blockquotes: `html body blockquote {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

html body table {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 202.984px;
}`,
    code: `html body code {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body pre > code, html pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

html body figcaption {
  color: rgb(18, 20, 33);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

html body img {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

html body video {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}`,
    embeds: `html body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .transclude {
  border-bottom-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

html body .transclude-inner {
  border-bottom-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(231, 233, 243);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `html body .search > .search-button {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-family: "Noto Serif KR", serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(231, 233, 243);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search > .search-container > .search-space > * {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body h1 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body ::-webkit-scrollbar {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}

html body ::-webkit-scrollbar-track {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "Noto Serif KR", serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "Noto Serif KR", serif;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html body footer {
  border-top-left-radius: 12px;
  font-family: "Noto Serif KR", serif;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(18, 20, 33);
  font-family: "Noto Serif KR", serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
  color: rgb(18, 20, 33);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "Noto Serif KR", serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

html body li.section-li > .section .meta {
  font-family: "Noto Serif KR", serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}`,
    darkmode: `html body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
  color: rgb(18, 20, 33);
}

html body .metadata {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body progress {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}`,
  },
};
