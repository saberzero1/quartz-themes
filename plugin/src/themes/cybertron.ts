import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cybertron",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #595959;
  --background-modifier-error: #36393f;
  --background-modifier-form-field: #2f3136;
  --background-modifier-form-field-highlighted: #2f3136;
  --background-modifier-form-field-hover: #2f3136;
  --background-modifier-success: #36393f;
  --background-primary: #2f3136;
  --background-primary-alt: #36393f;
  --background-secondary: #141414;
  --background-secondary-alt: #222222;
  --bases-cards-background: #2f3136;
  --bases-cards-cover-background: #36393f;
  --bases-cards-shadow: 0 0 0 1px #595959;
  --bases-embed-border-color: #595959;
  --bases-group-heading-property-color: #aaaaaa;
  --bases-table-border-color: #595959;
  --bases-table-cell-background-active: #2f3136;
  --bases-table-cell-background-disabled: #36393f;
  --bases-table-cell-shadow-focus: 0 0 0 2px #fe8019;
  --bases-table-group-background: #36393f;
  --bases-table-header-background: #2f3136;
  --bases-table-header-color: #aaaaaa;
  --bases-table-row-background-hover: #222222;
  --bases-table-summary-background: #2f3136;
  --blockquote-border-color: rgb(130, 114, 208);
  --blockquote-color: rgb(93, 188, 210);
  --bold-color: rgb(158, 138, 255);
  --bold-weight: 700;
  --callout-background-alpha: 20%;
  --callout-padding: 4px;
  --callout-radius: 8px;
  --canvas-background: #2f3136;
  --canvas-card-label-color: #999999;
  --caret-color: #5dbcd2;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #aaaaaa;
  --checkbox-color: #fe8019;
  --checkbox-color-hover: #9e8aff;
  --checkbox-marker-color: #2f3136;
  --checklist-done-color: #aaaaaa;
  --code-background: rgb(54, 57, 63);
  --code-border-color: #595959;
  --code-comment: #999999;
  --code-normal: rgb(170, 170, 170);
  --code-punctuation: rgb(49, 156, 180);
  --code-size: 13.125px;
  --code-tag: rgb(49, 156, 180);
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #319cb4;
  --divider-color: #595959;
  --divider-color-hover: #fe8019;
  --dropdown-background-hover: #36393f;
  --embed-block-shadow-hover: 0 0 0 1px #595959, inset 0 0 0 1px #595959;
  --embed-border-start: 2px solid #fe8019;
  --file-header-background: #2f3136;
  --file-header-background-focused: #2f3136;
  --flair-color: #5dbcd2;
  --font-monospace: '??', "JetBrains Mono", Menlo, SFMono-Regular, Consolas,
    "Fira Coda", SFMono-Regular, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono", Menlo, SFMono-Regular, Consolas,
    "Fira Coda", SFMono-Regular, "Roboto Mono", "Source Code Pro", monospace;
  --footnote-divider-color: #595959;
  --footnote-id-color: #aaaaaa;
  --footnote-id-color-no-occurrences: #999999;
  --graph-line: rgb(38, 121, 140);
  --graph-node: rgb(252, 246, 1);
  --graph-node-attachment: rgb(214, 105, 188);
  --graph-node-focused: rgb(38, 121, 140);
  --graph-node-tag: rgb(93, 188, 210);
  --graph-node-unresolved: rgb(158, 138, 255);
  --graph-text: rgb(204, 204, 204);
  --h1-color: #c7c400;
  --h2-color: #b9adff;
  --h3-color: #52c1da;
  --h4-color: #67c073;
  --h5-color: #de87ca;
  --h6-color: #b4b4b4;
  --heading-formatting: #999999;
  --hr-color: #5dbcd2;
  --icon-color: #aaaaaa;
  --icon-color-active: #319cb4;
  --icon-color-focused: #5dbcd2;
  --icon-color-hover: #aaaaaa;
  --inline-title-color: rgb(93, 188, 210);
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: #fe8019;
  --interactive-accent-hover: #9e8aff;
  --interactive-accent-muted: rgba(252, 246, 1, 0.55);
  --interactive-before: #5e6565;
  --interactive-hover: #36393f;
  --italic-color: rgb(186, 192, 79);
  --link-color: rgb(214, 105, 188);
  --link-external-color: rgb(214, 105, 188);
  --link-external-color-hover: rgb(236, 154, 217);
  --link-unresolved-color: #319cb4;
  --list-marker-color: #999999;
  --list-marker-color-collapsed: #319cb4;
  --list-marker-color-hover: #aaaaaa;
  --menu-background: #141414;
  --metadata-border-color: #595959;
  --metadata-divider-color: #595959;
  --metadata-input-text-color: #5dbcd2;
  --metadata-label-text-color: #aaaaaa;
  --metadata-label-text-color-hover: #aaaaaa;
  --modal-background: #2f3136;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #5dbcd2;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: #aaaaaa;
  --nav-heading-color-hover: #5dbcd2;
  --nav-item-color: #aaaaaa;
  --nav-item-color-active: #5dbcd2;
  --nav-item-color-highlighted: #319cb4;
  --nav-item-color-hover: #5dbcd2;
  --nav-item-color-selected: #5dbcd2;
  --nav-tag-color: #999999;
  --nav-tag-color-active: #aaaaaa;
  --nav-tag-color-hover: #aaaaaa;
  --pdf-background: #2f3136;
  --pdf-page-background: #2f3136;
  --pdf-shadow: 0 0 0 1px #595959;
  --pdf-sidebar-background: #2f3136;
  --pdf-thumbnail-shadow: 0 0 0 1px #595959;
  --pill-border-color: #595959;
  --pill-color: #aaaaaa;
  --pill-color-hover: #5dbcd2;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #319cb4;
  --pre-code: rgb(64, 68, 77);
  --prompt-background: #2f3136;
  --ribbon-background: rgb(20, 20, 20);
  --ribbon-background-collapsed: rgb(20, 20, 20);
  --scrollbar-bg: rgba(20, 20, 20, 0);
  --scrollbar-thumb-bg: #595959;
  --search-clear-button-color: #aaaaaa;
  --search-icon-color: #aaaaaa;
  --search-result-background: #2f3136;
  --setting-group-heading-color: #5dbcd2;
  --setting-items-background: #36393f;
  --setting-items-border-color: #595959;
  --slider-track-background: #595959;
  --status-bar-background: #141414;
  --status-bar-border-color: #595959;
  --status-bar-text-color: #aaaaaa;
  --suggestion-background: #2f3136;
  --tab-background-active: #2f3136;
  --tab-container-background: #141414;
  --tab-outline-color: #595959;
  --tab-switcher-background: #141414;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent);
  --tab-text-color: #999999;
  --tab-text-color-active: #aaaaaa;
  --tab-text-color-focused: #aaaaaa;
  --tab-text-color-focused-active: #aaaaaa;
  --tab-text-color-focused-active-current: #5dbcd2;
  --tab-text-color-focused-highlighted: #319cb4;
  --table-add-button-border-color: #595959;
  --table-background: #222222;
  --table-border-color: #595959;
  --table-column-alt-background: #222222;
  --table-drag-handle-background-active: #fe8019;
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: #5dbcd2;
  --table-header-background: #222222;
  --table-header-border-color: #595959;
  --table-header-color: #5dbcd2;
  --table-header-weight: 800;
  --table-row-alt-background: #222222;
  --table-row-alt-background-hover: #222222;
  --table-row-background-hover: #222222;
  --table-selection-border-color: #fe8019;
  --tag-color: rgb(252, 246, 1);
  --tag-color-hover: #319cb4;
  --text-accent: #319cb4;
  --text-error: rgb(244, 105, 188);
  --text-faint: #999999;
  --text-highlight-bg: rgba(252, 246, 1, 0.4);
  --text-mark: transparent;
  --text-muted: #aaaaaa;
  --text-normal: #5dbcd2;
  --text-on-accent: #5dbcd2;
  --text-selection: #164f92;
  --titlebar-background: #141414;
  --titlebar-background-focused: #222222;
  --titlebar-border-color: #595959;
  --titlebar-text-color: #aaaaaa;
  --titlebar-text-color-focused: #5dbcd2;
  --vault-profile-color: #5dbcd2;
  --vault-profile-color-hover: #5dbcd2;
  --window-border: 1px solid #222222;
  --window-border-color: #222222;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(93, 188, 210);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 49, 54);
  color: rgb(93, 188, 210);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(93, 188, 210);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(89, 89, 89);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  border-left-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
}

body div#quartz-root {
  background-color: rgb(47, 49, 54);
  color: rgb(93, 188, 210);
}`,
    typography: `body .page article p > b, b {
  color: rgb(158, 138, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(158, 138, 255) none 0px;
  text-decoration: rgb(158, 138, 255);
  text-decoration-color: rgb(158, 138, 255);
}

body .page article p > em, em {
  color: rgb(186, 192, 79);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 192, 79) none 0px;
  text-decoration: rgb(186, 192, 79);
  text-decoration-color: rgb(186, 192, 79);
}

body .page article p > i, i {
  color: rgb(186, 192, 79);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 192, 79) none 0px;
  text-decoration: rgb(186, 192, 79);
  text-decoration-color: rgb(186, 192, 79);
}

body .page article p > strong, strong {
  color: rgb(158, 138, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(158, 138, 255) none 0px;
  text-decoration: rgb(158, 138, 255);
  text-decoration-color: rgb(158, 138, 255);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 188, 210) none 0px;
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body del {
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 188, 210) none 0px;
  text-decoration: line-through rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body p {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}`,
    links: `body a.external, footer a {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration: underline rgb(214, 105, 188);
  text-decoration-color: rgb(214, 105, 188);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration: underline rgb(214, 105, 188);
  text-decoration-color: rgb(214, 105, 188);
}

body a.internal.broken {
  color: rgb(49, 156, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(49, 156, 180) none 0px;
}`,
    lists: `body dd {
  color: rgb(93, 188, 210);
}

body dt {
  color: rgb(93, 188, 210);
}

body ol > li {
  color: rgb(93, 188, 210);
}

body ol.overflow {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body ul > li {
  color: rgb(93, 188, 210);
}

body ul.overflow {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body table {
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body tbody tr:nth-child(even) {
  background-color: rgb(34, 34, 34);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(34, 34, 34);
}

body td {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
}

body th {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

body tr {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(89, 89, 89);
}`,
    code: `body code {
  background-color: rgb(64, 68, 77);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Fira Coda", SFMono-Regular, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
}

body pre > code, pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

body pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}`,
    images: `body audio {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body figcaption {
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body video {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}`,
    embeds: `body .file-embed {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body .footnotes {
  border-top-color: rgb(93, 188, 210);
  color: rgb(93, 188, 210);
}

body .transclude {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(254, 128, 25);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body .transclude-inner {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(254, 128, 25);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(170, 170, 170);
  text-decoration: line-through rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body input[type=checkbox] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  margin-right: 9.33333px;
  width: 13.3281px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='*'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='-'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='/'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='>'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='?'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='I'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='S'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='b'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='c'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='d'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='f'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='i'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='k'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='l'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='p'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='u'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body li.task-list-item[data-task='w'] {
  color: rgb(93, 188, 210);
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .callout > .callout-content {
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
}

body .search > .search-container > .search-space {
  background-color: rgb(47, 49, 54);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 188, 210) none 0px;
  text-decoration: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(93, 188, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(93, 188, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(93, 188, 210);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
  color: rgb(93, 188, 210);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(93, 188, 210);
}

body a.internal.tag-link::before {
  color: rgb(252, 246, 1);
}

body h1 {
  color: rgb(199, 196, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(185, 173, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(82, 193, 218);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(103, 192, 115);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(222, 135, 202);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(180, 180, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(214, 105, 188);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body ::-webkit-scrollbar {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-corner {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-track {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(170, 170, 170);
  font-weight: 500;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 170, 170);
  font-weight: 500;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(93, 188, 210);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(93, 188, 210);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}`,
    footer: `body footer {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(170, 170, 170);
}

body footer ul li a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(93, 188, 210);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
  color: rgb(93, 188, 210);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 170, 170);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body li.section-li > .section .meta {
  color: rgb(170, 170, 170);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body ul.section-ul {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body .darkmode svg {
  color: rgb(170, 170, 170);
  stroke: rgb(170, 170, 170);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
  color: rgb(93, 188, 210);
}

body .metadata {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(170, 170, 170);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

body .page-header h2.page-title {
  color: rgb(93, 188, 210);
}

body abbr {
  color: rgb(93, 188, 210);
  text-decoration: underline dotted rgb(93, 188, 210);
}

body details {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body input[type=text] {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body kbd {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Fira Coda", SFMono-Regular, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

body sub {
  color: rgb(93, 188, 210);
}

body summary {
  color: rgb(93, 188, 210);
}

body sup {
  color: rgb(93, 188, 210);
}`,
  },
  light: {},
};
