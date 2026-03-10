import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "obsidianite",
    modes: ["dark"],
    variations: [],
    fonts: ["rubik", "space-mono"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: rgba(14, 210, 247, 0.05) !important;
  --background-primary: #100e17 !important;
  --background-primary-alt: #0d0b12 !important;
  --background-secondary: #191621 !important;
  --background-secondary-alt: #0d0b12 !important;
  --bases-cards-background: #100e17 !important;
  --bases-cards-cover-background: #0d0b12 !important;
  --bases-cards-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05) !important;
  --bases-embed-border-color: rgba(14, 210, 247, 0.05) !important;
  --bases-table-border-color: rgb(14, 210, 247, 0.15) !important;
  --bases-table-cell-background-active: #100e17 !important;
  --bases-table-cell-background-disabled: #0d0b12 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(14, 210, 247, 0.5) !important;
  --bases-table-group-background: #0d0b12 !important;
  --bases-table-header-background: #100e17 !important;
  --bases-table-summary-background: #100e17 !important;
  --bg-accent-25: rgba(14, 210, 247, 0.25) !important;
  --bg-accent-55: rgba(14, 210, 247, 0.55) !important;
  --bg-sub-accent-55: rgba(244, 86, 157, 0.55) !important;
  --blockquote-border: #4aa8fb !important;
  --blockquote-border-color: rgba(14, 210, 247, 0.5) !important;
  --body-font-weight: 450 !important;
  --bodyFont: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #100e17 !important;
  --canvas-card-label-color: #7aa2f7 !important;
  --caret-color: #bebebe !important;
  --checkbox-border-color: #7aa2f7 !important;
  --checkbox-color: rgba(14, 210, 247, 0.5) !important;
  --checkbox-color-hover: rgba(14, 210, 247, 0.8) !important;
  --checkbox-marker-color: #100e17 !important;
  --code-background: #191621 !important;
  --code-border-color: rgba(14, 210, 247, 0.05) !important;
  --code-comment: #7aa2f7 !important;
  --code-mono-font: 'OperatorMonoSSmLig-Book' !important;
  --code-normal: #bebebe !important;
  --codeFont: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #7aa2f7 !important;
  --collapse-icon-color-collapsed: #0fb6d6 !important;
  --dark: #bebebe !important;
  --darkgray: #bebebe !important;
  --default-font: 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif !important;
  --default-font-size: 18px !important;
  --divider-color: rgba(14, 210, 247, 0.05) !important;
  --divider-color-hover: rgba(14, 210, 247, 0.5) !important;
  --editor-border-color: #101014 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(14, 210, 247, 0.05), inset 0 0 0 1px rgba(14, 210, 247, 0.05) !important;
  --embed-border-start: 2px solid rgba(14, 210, 247, 0.5) !important;
  --file-header-background: #100e17 !important;
  --file-header-background-focused: #100e17 !important;
  --file-header-font: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #bebebe !important;
  --font-family-editor: 'Rubik' !important;
  --font-family-preview: 'Rubik' !important;
  --font-interface: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgba(14, 210, 247, 0.05) !important;
  --footnote-id-color-no-occurrences: #7aa2f7 !important;
  --graph-node-focused: #0fb6d6 !important;
  --graph-node-unresolved: #7aa2f7 !important;
  --graph-text: #bebebe !important;
  --gray: #7aa2f7 !important;
  --headerFont: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #7aa2f7 !important;
  --highlight: rgba(244, 86, 157, 0.25) !important;
  --hr-color: rgba(14, 210, 247, 0.05) !important;
  --icon-color-active: #0fb6d6 !important;
  --icon-color-focused: #bebebe !important;
  --input-date-separator: #7aa2f7 !important;
  --input-placeholder-color: #7aa2f7 !important;
  --interactive-accent: rgba(14, 210, 247, 0.5) !important;
  --interactive-accent-hover: rgba(14, 210, 247, 0.8) !important;
  --interactive-accent-rgb: #3dd7fb !important;
  --interactive-before: #5e6565 !important;
  --light: #100e17 !important;
  --lightgray: #191621 !important;
  --link-color: #0fb6d6 !important;
  --link-external-color: #0fb6d6 !important;
  --link-unresolved-color: #0fb6d6 !important;
  --list-marker-color: #7aa2f7 !important;
  --list-marker-color-collapsed: #0fb6d6 !important;
  --menu-background: #191621 !important;
  --metadata-border-color: rgba(14, 210, 247, 0.05) !important;
  --metadata-divider-color: rgba(14, 210, 247, 0.05) !important;
  --metadata-input-font: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #bebebe !important;
  --metadata-label-font: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #100e17 !important;
  --nav-collapse-icon-color: #7aa2f7 !important;
  --nav-collapse-icon-color-collapsed: #7aa2f7 !important;
  --nav-heading-color: #bebebe !important;
  --nav-heading-color-collapsed: #7aa2f7 !important;
  --nav-heading-color-hover: #bebebe !important;
  --nav-item-color-active: #bebebe !important;
  --nav-item-color-highlighted: #0fb6d6 !important;
  --nav-item-color-hover: #bebebe !important;
  --nav-item-color-selected: #bebebe !important;
  --nav-tag-color: #7aa2f7 !important;
  --pdf-background: #100e17 !important;
  --pdf-page-background: #100e17 !important;
  --pdf-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05) !important;
  --pdf-sidebar-background: #100e17 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05) !important;
  --pill-border-color: rgba(14, 210, 247, 0.05) !important;
  --pill-color-hover: #bebebe !important;
  --pill-color-remove: #7aa2f7 !important;
  --pill-color-remove-hover: #0fb6d6 !important;
  --prompt-background: #100e17 !important;
  --ribbon-background: #191621 !important;
  --ribbon-background-collapsed: #100e17 !important;
  --search-result-background: #100e17 !important;
  --secondary: #0fb6d6 !important;
  --setting-group-heading-color: #bebebe !important;
  --setting-items-background: #0d0b12 !important;
  --setting-items-border-color: rgba(14, 210, 247, 0.05) !important;
  --slider-track-background: rgba(14, 210, 247, 0.05) !important;
  --status-bar-background: #191621 !important;
  --status-bar-border-color: rgba(14, 210, 247, 0.05) !important;
  --suggestion-background: #100e17 !important;
  --tab-background-active: #100e17 !important;
  --tab-container-background: #191621 !important;
  --tab-outline-color: rgba(14, 210, 247, 0.05) !important;
  --tab-switcher-background: #191621 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #191621, transparent) !important;
  --tab-text-color: #7aa2f7 !important;
  --tab-text-color-focused-active-current: #bebebe !important;
  --tab-text-color-focused-highlighted: #0fb6d6 !important;
  --table-add-button-border-color: rgba(14, 210, 247, 0.05) !important;
  --table-border-color: rgb(14, 210, 247, 0.15) !important;
  --table-drag-handle-background-active: rgba(14, 210, 247, 0.5) !important;
  --table-drag-handle-color: #7aa2f7 !important;
  --table-header-border-color: rgb(14, 210, 247, 0.15) !important;
  --table-header-color: #bebebe !important;
  --table-selection-border-color: rgba(14, 210, 247, 0.5) !important;
  --tag-background: rgba(14, 210, 247, 0.15) !important;
  --tag-color: #0fb6d6 !important;
  --tag-color-hover: #0fb6d6 !important;
  --tag-font-family: 'OperatorMonoSSmLig-Book', 'Glow Sans SC', '华文细黑', 'STXihei', 'PingFang TC',
    '微软雅黑体', 'Microsoft YaHei New', '微软雅黑', 'Microsoft Yahei', '宋体', 'SimSun',
    'Helvetica Neue', 'Helvetica', Arial, sans-serif !important;
  --tertiary: rgba(14, 210, 247, 0.8) !important;
  --test-color: rgb(122, 162, 247) !important;
  --text-a: #6bcafb !important;
  --text-a-hover: #6bcafb !important;
  --text-accent: #0fb6d6 !important;
  --text-dim: #45aaff !important;
  --text-faint: #7aa2f7 !important;
  --text-highlight-bg: rgba(244, 86, 157, 0.25) !important;
  --text-link: #b4b4b4 !important;
  --text-mark: #263d92 !important;
  --text-normal: #bebebe !important;
  --text-sub-accent: #f4569d !important;
  --text-title-h1: #0fb6d6 !important;
  --text-title-h2: #cbdbe5 !important;
  --text-title-h3: #cbdbe5 !important;
  --text-title-h4: #cbdbe5 !important;
  --text-title-h5: #cbdbe5 !important;
  --textHighlight: rgba(244, 86, 157, 0.25) !important;
  --titleFont: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #191621 !important;
  --titlebar-background-focused: #0d0b12 !important;
  --titlebar-border-color: rgba(14, 210, 247, 0.05) !important;
  --titlebar-text-color-focused: #bebebe !important;
  --vault-profile-color: #bebebe !important;
  --vault-profile-color-hover: #bebebe !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 22, 33);
  color: rgb(190, 190, 190);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(16, 14, 23);
  color: rgb(190, 190, 190);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 22, 33);
  color: rgb(190, 190, 190);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(14, 210, 247, 0.05);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 22, 33);
  border-left-color: rgba(14, 210, 247, 0.05);
  color: rgb(190, 190, 190);
}

html body div#quartz-root {
  background-color: rgb(16, 14, 23);
  color: rgb(190, 190, 190);
}`,
    typography: `html body .page article p > b, html b {
  background-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration: rgb(122, 162, 247);
  text-decoration-color: rgb(122, 162, 247);
}

html body .page article p > em, html em {
  color: rgb(187, 154, 247);
  font-family: OperatorMonoSSmLig-Book, Rubik, Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

html body .page article p > i, html i {
  color: rgb(187, 154, 247);
  font-family: OperatorMonoSSmLig-Book, Rubik, Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

html body .page article p > strong, html strong {
  background-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration: rgb(122, 162, 247);
  text-decoration-color: rgb(122, 162, 247);
}

html body .text-highlight {
  background-color: rgba(244, 86, 157, 0.25);
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body del {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: line-through rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body p {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external, html footer a {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
  transition: background 0.35s ease-in-out;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(15, 182, 214);
  outline: rgb(15, 182, 214) none 0px;
  text-decoration: rgb(15, 182, 214);
  text-decoration-color: rgb(15, 182, 214);
}

html body a.internal.broken {
  color: rgb(15, 182, 214);
  outline: rgb(15, 182, 214) none 0px;
  text-decoration: rgb(15, 182, 214);
  text-decoration-color: rgb(15, 182, 214);
}`,
    lists: `html body dd {
  color: rgb(190, 190, 190);
}

html body dt {
  color: rgb(190, 190, 190);
}

html body ol > li {
  color: rgb(190, 190, 190);
}

html body ol.overflow {
  background-color: rgb(16, 14, 23);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body ul > li {
  color: rgb(190, 190, 190);
}

html body ul.overflow {
  background-color: rgb(16, 14, 23);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(122, 162, 247);
  text-decoration: rgb(122, 162, 247);
}

html body blockquote {
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body table {
  color: rgb(190, 190, 190);
}

html body td {
  border-bottom-color: rgba(14, 210, 247, 0.15);
  border-left-color: rgba(14, 210, 247, 0.15);
  border-right-color: rgba(14, 210, 247, 0.15);
  border-top-color: rgba(14, 210, 247, 0.15);
  color: rgb(190, 190, 190);
}

html body th {
  border-bottom-color: rgba(14, 210, 247, 0.15);
  border-left-color: rgba(14, 210, 247, 0.15);
  border-right-color: rgba(14, 210, 247, 0.15);
  border-top-color: rgba(14, 210, 247, 0.15);
  color: rgb(190, 190, 190);
}`,
    code: `html body code {
  border-bottom-color: rgba(14, 210, 247, 0.9);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgba(14, 210, 247, 0.9);
  border-right-color: rgba(14, 210, 247, 0.9);
  border-top-color: rgba(14, 210, 247, 0.9);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  color: rgba(14, 210, 247, 0.9);
  font-family: OperatorMonoSSmLig-Book, "PT Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(204, 204, 204);
  font-family: OperatorMonoSSmLig-Book, "PT Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 184, 108);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 184, 108);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 184, 108);
  border-left-color: rgb(255, 184, 108);
  border-right-color: rgb(255, 184, 108);
  border-top-color: rgb(255, 184, 108);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

html body pre:has(> code) {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}`,
    images: `html body audio {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body figcaption {
  color: rgb(190, 190, 190);
}

html body figure {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body img {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body video {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(13, 11, 18);
}

html body .footnotes {
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .transclude {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgba(14, 210, 247, 0.5);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body .transclude-inner {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgba(14, 210, 247, 0.5);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  margin-left: 0px;
  margin-right: 0px;
  width: 20px;
}

html body input[type=checkbox]:checked:after {
  background-color: rgba(0, 0, 0, 0);
  content: "";
  display: block;
  position: absolute;
  width: 4px;
}

html body li.task-list-item[data-task='!'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='*'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='/'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='>'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='?'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='I'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='S'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='b'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='c'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='d'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='f'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='i'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='k'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='l'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='p'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='u'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

html body li.task-list-item[data-task='w'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(190, 190, 190);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(16, 14, 23);
}

html body .search > .search-container > .search-space > * {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 22, 33);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(14, 210, 247, 0.15);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(15, 182, 214);
}

html body h1 {
  color: rgb(15, 182, 214);
}

html body h2 {
  color: rgb(203, 219, 229);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(190, 190, 190);
}

html body h3 {
  color: rgb(203, 219, 229);
}

html body h4 {
  color: rgb(203, 219, 229);
}

html body h5 {
  color: rgb(203, 219, 229);
}

html body h6 {
  color: rgb(203, 219, 229);
}

html body hr {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
}

html body ::-webkit-scrollbar-track {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgba(14, 210, 247, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(14, 210, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(14, 210, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(14, 210, 247, 0.25);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(15, 182, 214);
}`,
    footer: `html body footer {
  background-color: rgb(13, 11, 18);
  border-bottom-color: rgb(16, 16, 20);
  border-left-color: rgb(16, 16, 20);
  border-right-color: rgb(16, 16, 20);
  border-top-color: rgb(16, 16, 20);
  color: rgb(122, 162, 247);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(122, 162, 247);
  text-decoration: rgb(122, 162, 247);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(190, 190, 190);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body li.section-li > .section .meta {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(122, 162, 247);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .metadata {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

html body .navigation-progress {
  background-color: rgb(13, 11, 18);
}

html body .page-header h2.page-title {
  color: rgb(190, 190, 190);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(190, 190, 190);
  text-decoration: underline dotted rgb(190, 190, 190);
}

html body details {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body input[type=text] {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body progress {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body sub {
  color: rgb(190, 190, 190);
}

html body summary {
  color: rgb(190, 190, 190);
}

html body sup {
  color: rgb(190, 190, 190);
}`,
  },
  light: {},
};
