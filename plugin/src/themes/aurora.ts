import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "aurora", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --Code--blue: #61d0ff !important;
  --Code--comment: #6c6d72 !important;
  --Code--pink: rgb(235, 89, 224) !important;
  --Code--purple: #893cf5 !important;
  --Code--subs: #3f4144 !important;
  --background-modifier-border: #202020 !important;
  --background-primary: #202020 !important;
  --background-primary-alt: #161616 !important;
  --background-secondary: #1a1a1a !important;
  --background-secondary-alt: #161616 !important;
  --bases-cards-background: #202020 !important;
  --bases-cards-cover-background: #161616 !important;
  --bases-cards-shadow: 0 0 0 1px #202020 !important;
  --bases-embed-border-color: #202020 !important;
  --bases-table-border-color: #202020 !important;
  --bases-table-cell-background-active: #202020 !important;
  --bases-table-cell-background-disabled: #161616 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(137, 60, 245, 0.55) !important;
  --bases-table-group-background: #161616 !important;
  --bases-table-header-background: #202020 !important;
  --bases-table-summary-background: #202020 !important;
  --bg-accent-25: rgba(137, 60, 245, 0.25) !important;
  --bg-accent-55: rgba(137, 60, 245, 0.55) !important;
  --bg-accent-75: rgba(137, 60, 245, 0.75) !important;
  --bg-sub-accent-55: rgba(93, 180, 220, 0.75) !important;
  --blockquote-border: #893cf5 !important;
  --blockquote-border-color: rgba(137, 60, 245, 0.55) !important;
  --body-font-weight: normal !important;
  --bodyFont: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #202020 !important;
  --canvas-card-label-color: #893cf5d8 !important;
  --caret-color: #cccccc !important;
  --checkbox-border-color: #893cf5d8 !important;
  --checkbox-color: rgba(137, 60, 245, 0.55) !important;
  --checkbox-color-hover: rgba(137, 60, 245, 0.8) !important;
  --checkbox-marker-color: #202020 !important;
  --code-background: #161616 !important;
  --code-border-color: #202020 !important;
  --code-comment: #893cf5d8 !important;
  --code-mono-font: 'OperatorMonoSSmLig-Book' !important;
  --code-normal: #cccccc !important;
  --codeFont: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #893cf5d8 !important;
  --collapse-icon-color-collapsed: #893cf5 !important;
  --dark: #cccccc !important;
  --darkgray: #cccccc !important;
  --default-font: 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif !important;
  --default-font-size: 1.05rem !important;
  --divider-color: #202020 !important;
  --divider-color-hover: rgba(137, 60, 245, 0.55) !important;
  --editor-border-color: #101014 !important;
  --embed-block-shadow-hover: 0 0 0 1px #202020, inset 0 0 0 1px #202020 !important;
  --embed-border-start: 2px solid rgba(137, 60, 245, 0.55) !important;
  --file-header-background: #202020 !important;
  --file-header-background-focused: #202020 !important;
  --file-header-font: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #cccccc !important;
  --font-family-editor: 'Rubik' !important;
  --font-family-preview: 'Rubik' !important;
  --font-interface: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #202020 !important;
  --footnote-id-color-no-occurrences: #893cf5d8 !important;
  --graph-node-focused: #893cf5 !important;
  --graph-node-unresolved: #893cf5d8 !important;
  --graph-text: #cccccc !important;
  --gray: #893cf5d8 !important;
  --headerFont: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #893cf5d8 !important;
  --highlight: rgba(137, 60, 245, 0.55) !important;
  --hr-color: #202020 !important;
  --icon-color-active: #893cf5 !important;
  --icon-color-focused: #cccccc !important;
  --indentation-guide-color: rgba(137, 60, 245, 0.55) !important;
  --input-date-separator: #893cf5d8 !important;
  --input-placeholder-color: #893cf5d8 !important;
  --interactive-accent: rgba(137, 60, 245, 0.55) !important;
  --interactive-accent-hover: rgba(137, 60, 245, 0.8) !important;
  --interactive-accent-rgb: rgb(61, 215, 251) !important;
  --interactive-before: #5e6565 !important;
  --light: #202020 !important;
  --lightgray: #1a1a1a !important;
  --link-color: #893cf5 !important;
  --link-external-color: #893cf5 !important;
  --link-unresolved-color: #893cf5 !important;
  --list-marker-color: #893cf5d8 !important;
  --list-marker-color-collapsed: #893cf5 !important;
  --menu-background: #1a1a1a !important;
  --metadata-border-color: #202020 !important;
  --metadata-divider-color: #202020 !important;
  --metadata-input-font: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #cccccc !important;
  --metadata-label-font: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #202020 !important;
  --nav-collapse-icon-color: #893cf5d8 !important;
  --nav-collapse-icon-color-collapsed: #893cf5d8 !important;
  --nav-heading-color: #cccccc !important;
  --nav-heading-color-collapsed: #893cf5d8 !important;
  --nav-heading-color-hover: #cccccc !important;
  --nav-indentation-guide-color: rgba(137, 60, 245, 0.55) !important;
  --nav-item-color-active: #cccccc !important;
  --nav-item-color-highlighted: #893cf5 !important;
  --nav-item-color-hover: #cccccc !important;
  --nav-item-color-selected: #cccccc !important;
  --nav-tag-color: #893cf5d8 !important;
  --pdf-background: #202020 !important;
  --pdf-page-background: #202020 !important;
  --pdf-shadow: 0 0 0 1px #202020 !important;
  --pdf-sidebar-background: #202020 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #202020 !important;
  --pill-border-color: #202020 !important;
  --pill-color-hover: #cccccc !important;
  --pill-color-remove: #893cf5d8 !important;
  --pill-color-remove-hover: #893cf5 !important;
  --pre-code: #1a1a1a !important;
  --prompt-background: #202020 !important;
  --ribbon-background: #1a1a1a !important;
  --ribbon-background-collapsed: #202020 !important;
  --search-result-background: #202020 !important;
  --secondary: #893cf5 !important;
  --setting-group-heading-color: #cccccc !important;
  --setting-items-background: #161616 !important;
  --setting-items-border-color: #202020 !important;
  --slider-track-background: #202020 !important;
  --status-bar-background: #1a1a1a !important;
  --status-bar-border-color: #202020 !important;
  --suggestion-background: #202020 !important;
  --tab-background-active: #202020 !important;
  --tab-container-background: #1a1a1a !important;
  --tab-outline-color: #202020 !important;
  --tab-switcher-background: #1a1a1a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent) !important;
  --tab-text-color: #893cf5d8 !important;
  --tab-text-color-focused-active-current: #cccccc !important;
  --tab-text-color-focused-highlighted: #893cf5 !important;
  --table-add-button-border-color: #202020 !important;
  --table-border-color: #202020 !important;
  --table-drag-handle-background-active: rgba(137, 60, 245, 0.55) !important;
  --table-drag-handle-color: #893cf5d8 !important;
  --table-header-border-color: #202020 !important;
  --table-header-color: #cccccc !important;
  --table-selection-border-color: rgba(137, 60, 245, 0.55) !important;
  --tag-background: #a7b0b3 !important;
  --tag-color: #893cf5 !important;
  --tag-color-hover: #893cf5 !important;
  --tag-font-family: 'OperatorMonoSSmLig-Book', 'Glow Sans SC', '华文细黑', 'STXihei', 'PingFang TC',
    '微软雅黑体', 'Microsoft YaHei New', '微软雅黑', 'Microsoft Yahei', '宋体', 'SimSun',
    'Helvetica Neue', 'Helvetica', Arial, sans-serif !important;
  --tertiary: rgba(137, 60, 245, 0.8) !important;
  --test-color: rgb(122, 162, 247) !important;
  --text-a: #61d0ff !important;
  --text-a-hover: #61d0ff !important;
  --text-accent: #893cf5 !important;
  --text-dim: #eb59e0 !important;
  --text-faint: #893cf5d8 !important;
  --text-highlight-bg: rgba(137, 60, 245, 0.55) !important;
  --text-link: #6c6d72 !important;
  --text-mark: #263d92 !important;
  --text-normal: #cccccc !important;
  --text-selection: #59396359 !important;
  --text-sub-accent: #eb59e0 !important;
  --text-title-h1: #893cf5 !important;
  --text-title-h2: #cccccc !important;
  --text-title-h3: #cccccc !important;
  --text-title-h4: #cccccc !important;
  --text-title-h5: #cccccc !important;
  --textHighlight: rgba(137, 60, 245, 0.55) !important;
  --titleFont: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1a1a1a !important;
  --titlebar-background-focused: #161616 !important;
  --titlebar-border-color: #202020 !important;
  --titlebar-text-color-focused: #cccccc !important;
  --vault-profile-color: #cccccc !important;
  --vault-profile-color-hover: #cccccc !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
  color: rgb(204, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(32, 32, 32);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(32, 32, 32);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  border-left-color: rgb(32, 32, 32);
  color: rgb(204, 204, 204);
}

body div#quartz-root {
  background-color: rgb(32, 32, 32);
  color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  background-color: rgb(135, 235, 253);
  color: rgb(135, 235, 253);
  outline: rgb(135, 235, 253) none 0px;
  text-decoration: rgb(135, 235, 253);
  text-decoration-color: rgb(135, 235, 253);
}

body .page article p > em, em {
  color: rgb(187, 154, 247);
  font-family: OperatorMonoSSmLig-Book, Rubik;
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

body .page article p > i, i {
  color: rgb(187, 154, 247);
  font-family: OperatorMonoSSmLig-Book, Rubik;
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

body .page article p > strong, strong {
  background-color: rgb(135, 235, 253);
  color: rgb(135, 235, 253);
  outline: rgb(135, 235, 253) none 0px;
  text-decoration: rgb(135, 235, 253);
  text-decoration-color: rgb(135, 235, 253);
}

body .text-highlight {
  background-color: rgba(137, 60, 245, 0.55);
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body del {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body p {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
  transition: background 0.35s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(137, 60, 245);
  outline: rgb(137, 60, 245) none 0px;
  text-decoration: rgb(137, 60, 245);
  text-decoration-color: rgb(137, 60, 245);
}

body a.internal.broken {
  color: rgb(137, 60, 245);
  outline: rgb(137, 60, 245) none 0px;
  text-decoration: rgb(137, 60, 245);
  text-decoration-color: rgb(137, 60, 245);
}`,
    lists: `body dd {
  color: rgb(204, 204, 204);
}

body dt {
  color: rgb(204, 204, 204);
}

body ol > li {
  color: rgb(204, 204, 204);
}

body ol.overflow {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul > li {
  color: rgb(204, 204, 204);
}

body ul.overflow {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(137, 60, 245, 0.847);
  text-decoration: rgba(137, 60, 245, 0.847);
}

body blockquote {
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body table {
  color: rgb(204, 204, 204);
}

body td {
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
  border-top-color: rgb(32, 32, 32);
  color: rgb(204, 204, 204);
}

body th {
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
  border-top-color: rgb(32, 32, 32);
  color: rgb(204, 204, 204);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  color: rgb(204, 204, 204);
  font-family: OperatorMonoSSmLig-Book, "PT Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
  border-top-color: rgb(32, 32, 32);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
  border-top-color: rgb(32, 32, 32);
  color: rgb(204, 204, 204);
  font-family: OperatorMonoSSmLig-Book, "PT Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

body pre > code > [data-line] {
  border-left-color: rgb(137, 60, 245);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(137, 60, 245);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(137, 60, 245);
  border-left-color: rgb(137, 60, 245);
  border-right-color: rgb(137, 60, 245);
  border-top-color: rgb(137, 60, 245);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
  border-top-color: rgb(32, 32, 32);
}

body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
  border-top-color: rgb(32, 32, 32);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body figcaption {
  color: rgb(204, 204, 204);
}

body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `body .file-embed {
  background-color: rgb(22, 22, 22);
}

body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgba(137, 60, 245, 0.55);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgba(137, 60, 245, 0.55);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body input[type=checkbox] {
  border-bottom-color: rgba(137, 60, 245, 0.847);
  border-left-color: rgba(137, 60, 245, 0.847);
  border-right-color: rgba(137, 60, 245, 0.847);
  border-top-color: rgba(137, 60, 245, 0.847);
  margin-left: 0px;
  margin-right: 0px;
  position: absolute;
  width: 20px;
}

body input[type=checkbox]:checked:after {
  background-color: rgba(0, 0, 0, 0);
  content: "";
  display: block;
  position: absolute;
  width: 4px;
}

body li.task-list-item[data-task='!'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='*'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='-'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='/'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='>'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='?'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='I'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='S'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='b'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='c'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='d'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='f'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='i'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='k'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='l'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='p'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='u'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}

body li.task-list-item[data-task='w'] {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: line-through rgba(137, 60, 245, 0.55);
  text-decoration-color: rgba(137, 60, 245, 0.55);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
  border-top-color: rgb(32, 32, 32);
  color: rgb(204, 204, 204);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(32, 32, 32);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(167, 176, 179);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(137, 60, 245);
}

body h1 {
  color: rgb(137, 60, 245);
}

body h2 {
  color: rgb(204, 204, 204);
}

body h2.page-title, h2.page-title a {
  color: rgb(204, 204, 204);
}

body h3 {
  color: rgb(204, 204, 204);
}

body h4 {
  color: rgb(204, 204, 204);
}

body h5 {
  color: rgb(204, 204, 204);
}

body h6 {
  color: rgb(204, 204, 204);
}

body hr {
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgba(137, 60, 245, 0.55);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(137, 60, 245, 0.55);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(137, 60, 245, 0.55);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(137, 60, 245, 0.55);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(137, 60, 245);
}`,
    footer: `body footer {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(16, 16, 20);
  border-left-color: rgb(16, 16, 20);
  border-right-color: rgb(16, 16, 20);
  border-top-color: rgb(16, 16, 20);
  color: rgba(137, 60, 245, 0.55);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgba(137, 60, 245, 0.55);
  text-decoration: rgba(137, 60, 245, 0.55);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 204, 204);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body li.section-li > .section .meta {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgba(137, 60, 245, 0.847);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .metadata {
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
  border-top-color: rgb(32, 32, 32);
}

body .navigation-progress {
  background-color: rgb(22, 22, 22);
}

body .page-header h2.page-title {
  color: rgb(204, 204, 204);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body input[type=text] {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body sub {
  color: rgb(204, 204, 204);
}

body summary {
  color: rgb(204, 204, 204);
}

body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {},
};
