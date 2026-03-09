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
  --background-modifier-border: rgba(14, 210, 247, 0.05);
  --background-primary: #100e17;
  --background-primary-alt: #0d0b12;
  --background-secondary: #191621;
  --background-secondary-alt: #0d0b12;
  --bases-cards-background: #100e17;
  --bases-cards-cover-background: #0d0b12;
  --bases-cards-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05);
  --bases-embed-border-color: rgba(14, 210, 247, 0.05);
  --bases-table-border-color: rgb(14, 210, 247, 0.15);
  --bases-table-cell-background-active: #100e17;
  --bases-table-cell-background-disabled: #0d0b12;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(14, 210, 247, 0.5);
  --bases-table-group-background: #0d0b12;
  --bases-table-header-background: #100e17;
  --bases-table-summary-background: #100e17;
  --bg-accent-25: rgba(14, 210, 247, 0.25);
  --bg-accent-55: rgba(14, 210, 247, 0.55);
  --bg-sub-accent-55: rgba(244, 86, 157, 0.55);
  --blockquote-border: #4aa8fb;
  --blockquote-border-color: rgba(14, 210, 247, 0.5);
  --body-font-weight: 450;
  --canvas-background: #100e17;
  --canvas-card-label-color: #7aa2f7;
  --caret-color: #bebebe;
  --checkbox-border-color: #7aa2f7;
  --checkbox-color: rgba(14, 210, 247, 0.5);
  --checkbox-color-hover: rgba(14, 210, 247, 0.8);
  --checkbox-marker-color: #100e17;
  --code-background: #191621;
  --code-border-color: rgba(14, 210, 247, 0.05);
  --code-comment: #7aa2f7;
  --code-mono-font: 'OperatorMonoSSmLig-Book';
  --code-normal: #bebebe;
  --collapse-icon-color: #7aa2f7;
  --collapse-icon-color-collapsed: #0fb6d6;
  --default-font: 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif;
  --default-font-size: 18px;
  --divider-color: rgba(14, 210, 247, 0.05);
  --divider-color-hover: rgba(14, 210, 247, 0.5);
  --editor-border-color: #101014;
  --embed-block-shadow-hover: 0 0 0 1px rgba(14, 210, 247, 0.05), inset 0 0 0 1px rgba(14, 210, 247, 0.05);
  --embed-border-start: 2px solid rgba(14, 210, 247, 0.5);
  --file-header-background: #100e17;
  --file-header-background-focused: #100e17;
  --file-header-font: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #bebebe;
  --font-family-editor: 'Rubik';
  --font-family-preview: 'Rubik';
  --font-interface: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgba(14, 210, 247, 0.05);
  --footnote-id-color-no-occurrences: #7aa2f7;
  --graph-node-focused: #0fb6d6;
  --graph-node-unresolved: #7aa2f7;
  --graph-text: #bebebe;
  --heading-formatting: #7aa2f7;
  --hr-color: rgba(14, 210, 247, 0.05);
  --icon-color-active: #0fb6d6;
  --icon-color-focused: #bebebe;
  --input-date-separator: #7aa2f7;
  --input-placeholder-color: #7aa2f7;
  --interactive-accent: rgba(14, 210, 247, 0.5);
  --interactive-accent-hover: rgba(14, 210, 247, 0.8);
  --interactive-accent-rgb: #3dd7fb;
  --interactive-before: #5e6565;
  --link-color: #0fb6d6;
  --link-external-color: #0fb6d6;
  --link-unresolved-color: #0fb6d6;
  --list-marker-color: #7aa2f7;
  --list-marker-color-collapsed: #0fb6d6;
  --menu-background: #191621;
  --metadata-border-color: rgba(14, 210, 247, 0.05);
  --metadata-divider-color: rgba(14, 210, 247, 0.05);
  --metadata-input-font: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #bebebe;
  --metadata-label-font: '??', '??', 'Rubik', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #100e17;
  --nav-collapse-icon-color: #7aa2f7;
  --nav-collapse-icon-color-collapsed: #7aa2f7;
  --nav-heading-color: #bebebe;
  --nav-heading-color-collapsed: #7aa2f7;
  --nav-heading-color-hover: #bebebe;
  --nav-item-color-active: #bebebe;
  --nav-item-color-highlighted: #0fb6d6;
  --nav-item-color-hover: #bebebe;
  --nav-item-color-selected: #bebebe;
  --nav-tag-color: #7aa2f7;
  --pdf-background: #100e17;
  --pdf-page-background: #100e17;
  --pdf-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05);
  --pdf-sidebar-background: #100e17;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05);
  --pill-border-color: rgba(14, 210, 247, 0.05);
  --pill-color-hover: #bebebe;
  --pill-color-remove: #7aa2f7;
  --pill-color-remove-hover: #0fb6d6;
  --prompt-background: #100e17;
  --ribbon-background: #191621;
  --ribbon-background-collapsed: #100e17;
  --search-result-background: #100e17;
  --setting-group-heading-color: #bebebe;
  --setting-items-background: #0d0b12;
  --setting-items-border-color: rgba(14, 210, 247, 0.05);
  --slider-track-background: rgba(14, 210, 247, 0.05);
  --status-bar-background: #191621;
  --status-bar-border-color: rgba(14, 210, 247, 0.05);
  --suggestion-background: #100e17;
  --tab-background-active: #100e17;
  --tab-container-background: #191621;
  --tab-outline-color: rgba(14, 210, 247, 0.05);
  --tab-switcher-background: #191621;
  --tab-switcher-menubar-background: linear-gradient(to top, #191621, transparent);
  --tab-text-color: #7aa2f7;
  --tab-text-color-focused-active-current: #bebebe;
  --tab-text-color-focused-highlighted: #0fb6d6;
  --table-add-button-border-color: rgba(14, 210, 247, 0.05);
  --table-border-color: rgb(14, 210, 247, 0.15);
  --table-drag-handle-background-active: rgba(14, 210, 247, 0.5);
  --table-drag-handle-color: #7aa2f7;
  --table-header-border-color: rgb(14, 210, 247, 0.15);
  --table-header-color: #bebebe;
  --table-selection-border-color: rgba(14, 210, 247, 0.5);
  --tag-background: rgba(14, 210, 247, 0.15);
  --tag-color: #0fb6d6;
  --tag-color-hover: #0fb6d6;
  --tag-font-family: 'OperatorMonoSSmLig-Book', 'Glow Sans SC', '华文细黑', 'STXihei', 'PingFang TC',
    '微软雅黑体', 'Microsoft YaHei New', '微软雅黑', 'Microsoft Yahei', '宋体', 'SimSun',
    'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  --test-color: rgb(122, 162, 247);
  --text-a: #6bcafb;
  --text-a-hover: #6bcafb;
  --text-accent: #0fb6d6;
  --text-dim: #45aaff;
  --text-faint: #7aa2f7;
  --text-highlight-bg: rgba(244, 86, 157, 0.25);
  --text-link: #b4b4b4;
  --text-mark: #263d92;
  --text-normal: #bebebe;
  --text-sub-accent: #f4569d;
  --text-title-h1: #0fb6d6;
  --text-title-h2: #cbdbe5;
  --text-title-h3: #cbdbe5;
  --text-title-h4: #cbdbe5;
  --text-title-h5: #cbdbe5;
  --titlebar-background: #191621;
  --titlebar-background-focused: #0d0b12;
  --titlebar-border-color: rgba(14, 210, 247, 0.05);
  --titlebar-text-color-focused: #bebebe;
  --vault-profile-color: #bebebe;
  --vault-profile-color-hover: #bebebe;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 22, 33);
  color: rgb(190, 190, 190);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(16, 14, 23);
  color: rgb(190, 190, 190);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 22, 33);
  color: rgb(190, 190, 190);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(14, 210, 247, 0.05);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 22, 33);
  border-left-color: rgba(14, 210, 247, 0.05);
  color: rgb(190, 190, 190);
}

body div#quartz-root {
  background-color: rgb(16, 14, 23);
  color: rgb(190, 190, 190);
}`,
    typography: `body .page article p > b, b {
  background-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration: rgb(122, 162, 247);
  text-decoration-color: rgb(122, 162, 247);
}

body .page article p > em, em {
  color: rgb(187, 154, 247);
  font-family: OperatorMonoSSmLig-Book, Rubik, Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

body .page article p > i, i {
  color: rgb(187, 154, 247);
  font-family: OperatorMonoSSmLig-Book, Rubik, Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

body .page article p > strong, strong {
  background-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration: rgb(122, 162, 247);
  text-decoration-color: rgb(122, 162, 247);
}

body .text-highlight {
  background-color: rgba(244, 86, 157, 0.25);
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body del {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: line-through rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body p {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
  transition: background 0.35s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(15, 182, 214);
  outline: rgb(15, 182, 214) none 0px;
  text-decoration: rgb(15, 182, 214);
  text-decoration-color: rgb(15, 182, 214);
}

body a.internal.broken {
  color: rgb(15, 182, 214);
  outline: rgb(15, 182, 214) none 0px;
  text-decoration: rgb(15, 182, 214);
  text-decoration-color: rgb(15, 182, 214);
}`,
    lists: `body dd {
  color: rgb(190, 190, 190);
}

body dt {
  color: rgb(190, 190, 190);
}

body ol > li {
  color: rgb(190, 190, 190);
}

body ol.overflow {
  background-color: rgb(16, 14, 23);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body ul > li {
  color: rgb(190, 190, 190);
}

body ul.overflow {
  background-color: rgb(16, 14, 23);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(122, 162, 247);
  text-decoration: rgb(122, 162, 247);
}

body blockquote {
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body table {
  color: rgb(190, 190, 190);
}

body td {
  border-bottom-color: rgba(14, 210, 247, 0.15);
  border-left-color: rgba(14, 210, 247, 0.15);
  border-right-color: rgba(14, 210, 247, 0.15);
  border-top-color: rgba(14, 210, 247, 0.15);
  color: rgb(190, 190, 190);
}

body th {
  border-bottom-color: rgba(14, 210, 247, 0.15);
  border-left-color: rgba(14, 210, 247, 0.15);
  border-right-color: rgba(14, 210, 247, 0.15);
  border-top-color: rgba(14, 210, 247, 0.15);
  color: rgb(190, 190, 190);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(204, 204, 204);
  font-family: OperatorMonoSSmLig-Book, "PT Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 184, 108);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 184, 108);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 184, 108);
  border-left-color: rgb(255, 184, 108);
  border-right-color: rgb(255, 184, 108);
  border-top-color: rgb(255, 184, 108);
}

body pre > code, pre:has(> code) {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

body pre:has(> code) {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}`,
    images: `body audio {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body figcaption {
  color: rgb(190, 190, 190);
}

body figure {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body img {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body video {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    embeds: `body .file-embed {
  background-color: rgb(13, 11, 18);
}

body .footnotes {
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body .transclude {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgba(14, 210, 247, 0.5);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body .transclude-inner {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgba(14, 210, 247, 0.5);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body input[type=checkbox] {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  margin-left: 0px;
  margin-right: 0px;
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
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='*'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='-'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='/'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='>'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='?'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='I'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='S'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='b'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='c'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='d'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='f'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='i'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='k'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='l'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='p'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='u'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}

body li.task-list-item[data-task='w'] {
  color: rgba(14, 210, 247, 0.5);
  text-decoration: line-through rgba(14, 210, 247, 0.5);
  text-decoration-color: rgba(14, 210, 247, 0.5);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(190, 190, 190);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(16, 14, 23);
}

body .search > .search-container > .search-space > * {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 22, 33);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(14, 210, 247, 0.15);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(15, 182, 214);
}

body h1 {
  color: rgb(15, 182, 214);
}

body h2 {
  color: rgb(203, 219, 229);
}

body h2.page-title, h2.page-title a {
  color: rgb(190, 190, 190);
}

body h3 {
  color: rgb(203, 219, 229);
}

body h4 {
  color: rgb(203, 219, 229);
}

body h5 {
  color: rgb(203, 219, 229);
}

body h6 {
  color: rgb(203, 219, 229);
}

body hr {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(16, 14, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 23);
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
    footer: `body footer {
  background-color: rgb(13, 11, 18);
  border-bottom-color: rgb(16, 16, 20);
  border-left-color: rgb(16, 16, 20);
  border-right-color: rgb(16, 16, 20);
  border-top-color: rgb(16, 16, 20);
  color: rgb(122, 162, 247);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(122, 162, 247);
  text-decoration: rgb(122, 162, 247);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(190, 190, 190);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body li.section-li > .section .meta {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(122, 162, 247);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body .metadata {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

body .navigation-progress {
  background-color: rgb(13, 11, 18);
}

body .page-header h2.page-title {
  color: rgb(190, 190, 190);
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(190, 190, 190);
  text-decoration: underline dotted rgb(190, 190, 190);
}

body details {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body input[type=text] {
  font-family: "??", "??", Rubik, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(25, 22, 33);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body progress {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body sub {
  color: rgb(190, 190, 190);
}

body summary {
  color: rgb(190, 190, 190);
}

body sup {
  color: rgb(190, 190, 190);
}`,
  },
  light: {},
};
