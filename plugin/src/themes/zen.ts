import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "zen", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --active-border-color: rgba(0, 157, 255, 0.8) !important;
  --app-model-bg-color: rgba(28, 28, 28, 0.8) !important;
  --background-modifier-border: rgba(245, 245, 245, 0.15) !important;
  --background-modifier-form-field: rgba(245, 245, 245, 0.04) !important;
  --background-modifier-form-field-hover: rgba(245, 245, 245, 0.04) !important;
  --background-modifier-hover: rgba(245, 245, 245, 0.1) !important;
  --background-secondary: rgb(42, 42, 42) !important;
  --background-secondary-alt: rgba(18, 18, 18, 0.1) !important;
  --background-setting: rgba(18, 18, 18) !important;
  --background-setting-item: #242424 !important;
  --base-d: 0% !important;
  --bases-cards-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15) !important;
  --bases-embed-border-color: rgba(245, 245, 245, 0.15) !important;
  --bases-table-border-color: rgba(245, 245, 245, 0.15) !important;
  --bases-table-header-background: rgba(245, 245, 245, 0.1) !important;
  --bases-table-header-background-hover: rgba(245, 245, 245, 0.1) !important;
  --bases-table-row-height: 40px !important;
  --bases-table-summary-background-hover: rgba(245, 245, 245, 0.1) !important;
  --block-border-color: rgba(245, 245, 245, 0.3) !important;
  --blockquote-border-color: rgba(245, 245, 245, 0.2) !important;
  --blockquote-border-thickness: 0.5px !important;
  --button-radius: 14px !important;
  --callout-content-padding: 4px;
  --code-background: rgba(245, 245, 245, 0.15) !important;
  --code-border-color: rgba(245, 245, 245, 0.15) !important;
  --code-bracket-background: rgba(245, 245, 245, 0.1) !important;
  --divider-color: rgba(255, 255, 255, 0.01) !important;
  --editor-bg-color: rgba(28, 28, 28, 0) !important;
  --editor-brightness: 1 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(245, 245, 245, 0.15), inset 0 0 0 1px rgba(245, 245, 245, 0.15) !important;
  --floating-toc-background-color: transparent !important;
  --footnote-divider-color: rgba(245, 245, 245, 0.15) !important;
  --footnote-input-background-active: rgba(245, 245, 245, 0.1) !important;
  --glass-bg-color: rgba(28, 28, 28, 0.7) !important;
  --h1-color: rgb(231, 77, 71) !important;
  --h2-color: rgb(215, 148, 64) !important;
  --h3-color: rgb(7, 170, 246) !important;
  --h4-color: rgb(163, 110, 251) !important;
  --h5-color: rgb(109, 215, 215) !important;
  --h6-color: rgb(175, 191, 5) !important;
  --highlight: rgba(245, 245, 245, 0.2) !important;
  --hr-color: rgba(245, 245, 245, 0.2) !important;
  --indentation-guide-color: rgba(245, 245, 245, 0.1) !important;
  --indentation-guide-color-active: rgba(245, 245, 245, 0.1) !important;
  --inline-title-color: rgb(231, 77, 71) !important;
  --input-radius: 14px !important;
  --italic-color: rgb(166, 139, 249) !important;
  --lightgray: rgb(42, 42, 42) !important;
  --list-bullet-end-padding: 1.4rem !important;
  --list-indent: 1.5em !important;
  --list-marker-color: rgba(245, 245, 245, 0.25) !important;
  --mac-window-opacity: 0 !important;
  --menu-background: rgb(42, 42, 42) !important;
  --metadata-border-color: rgba(245, 245, 245, 0.15) !important;
  --metadata-divider-color: rgba(245, 245, 245, 0.15) !important;
  --metadata-input-background-active: rgba(245, 245, 245, 0.1) !important;
  --metadata-label-background-active: rgba(245, 245, 245, 0.1) !important;
  --metadata-property-background-active: rgba(245, 245, 245, 0.1) !important;
  --model-bg-color: rgba(28, 28, 28, 0.1) !important;
  --nav-indentation-guide-color: rgba(245, 245, 245, 0.1) !important;
  --nav-item-background-active: rgba(245, 245, 245, 0.1) !important;
  --nav-item-background-hover: rgba(245, 245, 245, 0.1) !important;
  --nav-item-children-padding-start: 1px !important;
  --nav-item-color-active: rgb(166, 139, 249) !important;
  --pdf-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15) !important;
  --pill-border-color: rgba(245, 245, 245, 0.15) !important;
  --radius-xxl: 20px !important;
  --ribbon-background: rgb(42, 42, 42) !important;
  --scrollbar-thumb-color: rgba(255, 255, 255, 0.2) !important;
  --setting-items-border-color: rgba(245, 245, 245, 0.15) !important;
  --shadow-color: rgba(245, 245, 245, 0.08) !important;
  --side-split-bg-color: rgba(28, 28, 28, 0.3) !important;
  --slider-track-background: rgba(245, 245, 245, 0.15) !important;
  --status-bar-background: rgb(42, 42, 42) !important;
  --status-bar-border-color: rgba(255, 255, 255, 0.01) !important;
  --statusbar-bg-color: rgba(28, 28, 28, 0.7) !important;
  --suggestion-bg-color: rgba(28, 28, 28, 0.1) !important;
  --tab-container-background: rgb(42, 42, 42) !important;
  --tab-outline-color: rgba(255, 255, 255, 0.01) !important;
  --tab-switcher-background: rgb(42, 42, 42) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 42), transparent) !important;
  --table-add-button-border-color: rgba(245, 245, 245, 0.15) !important;
  --table-border-color: rgba(245, 245, 245, 0.15) !important;
  --table-header-background: rgba(245, 245, 245, 0.1) !important;
  --table-header-border-color: rgba(245, 245, 245, 0.15) !important;
  --text-color: rgb(240, 240, 240) !important;
  --text-highlight-bg: rgba(245, 245, 245, 0.2) !important;
  --text-line-height: 36px !important;
  --text-paragraph-gap: 3.4px !important;
  --text-shadow-color: white !important;
  --textHighlight: rgba(245, 245, 245, 0.2) !important;
  --titlebar-background: rgb(42, 42, 42) !important;
  --titlebar-background-focused: rgba(18, 18, 18, 0.1) !important;
  --titlebar-border-color: rgba(245, 245, 245, 0.15) !important;
  --tree-item-color: rgba(210, 210, 210, 0.8) !important;
  --win-bg-image-url: url('') !important;
  --win-blur: 20px !important;
  --win-editor-bg-color: #121212a6 !important;
  --win-window-brightness: 0.9 !important;
  --win-window-opacity: 0.2 !important;
  --window-brightness: 0.96 !important;
  --window-font-size: 15 !important;
  --workspace-background-translucent: rgba(0, 0, 0, 0.3) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.01);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(255, 255, 255, 0.01);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.650839 0.542678 0.975322 / 0.4);
}

html[saved-theme="dark"] body del {
  color: rgb(240, 240, 240);
  outline: rgb(240, 240, 240) none 0px;
  text-decoration: line-through rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body dt {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body table {
  color: rgb(240, 240, 240);
  width: 1794px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
  color: rgb(240, 240, 240);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body tr {
  background-color: rgba(245, 245, 245, 0.1);
}`,
    code: `html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(245, 245, 245, 0.15);
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(245, 245, 245, 0.15);
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(245, 245, 245, 0.15);
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(245, 245, 245, 0.15);
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-left-color: rgba(245, 245, 245, 0.2);
  border-left-style: solid;
  border-left-width: 1px;
  margin-left: 3px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgba(245, 245, 245, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  margin-left: 3px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgba(245, 245, 245, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  margin-left: 3px;
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}`,
    callouts: `html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 6px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(240, 240, 240);
  outline: rgb(240, 240, 240) none 0px;
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(245, 245, 245, 0.1);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 5px 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(245, 245, 245, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(245, 245, 245, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 27.6px;
  border-bottom-right-radius: 27.6px;
  border-top-left-radius: 27.6px;
  border-top-right-radius: 27.6px;
}

html[saved-theme="dark"] body h1 {
  color: rgb(231, 77, 71);
}

html[saved-theme="dark"] body h2 {
  color: rgb(215, 148, 64);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body h3 {
  color: rgb(7, 170, 246);
}

html[saved-theme="dark"] body h4 {
  color: rgb(163, 110, 251);
}

html[saved-theme="dark"] body h5 {
  color: rgb(109, 215, 215);
}

html[saved-theme="dark"] body h6 {
  color: rgb(175, 191, 5);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(255, 255, 255, 0.01);
  border-left-color: rgba(255, 255, 255, 0.01);
  border-right-color: rgba(255, 255, 255, 0.01);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  padding-left: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(210, 210, 210, 0.8);
  text-decoration: rgba(210, 210, 210, 0.8);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(210, 210, 210, 0.8);
  text-decoration: rgba(210, 210, 210, 0.8);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(166, 138, 249);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 138, 249);
  border-right-color: rgb(166, 138, 249);
  border-top-color: rgb(166, 138, 249);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 138, 249);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(28, 28, 28, 0.7);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(210, 210, 210, 0.8);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(210, 210, 210, 0.8);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(28, 28, 28, 0.7);
}

html[saved-theme="dark"] body abbr {
  color: rgb(240, 240, 240);
  text-decoration: underline dotted rgb(240, 240, 240);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(245, 245, 245, 0.15);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body sub {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body summary {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body sup {
  color: rgb(240, 240, 240);
}`,
  },
  light: {
    base: `:root:root {
  --active-border-color: rgb(0, 121, 172) !important;
  --app-model-bg-color: rgba(248, 248, 248, 0.8) !important;
  --background-modifier-border: rgba(28, 28, 28, 0.09) !important;
  --background-modifier-form-field: rgba(230, 230, 230, 0.5) !important;
  --background-modifier-form-field-hover: rgba(230, 230, 230, 0.5) !important;
  --background-modifier-hover: rgba(28, 28, 28, 0.1) !important;
  --background-secondary: rgb(249, 249, 249) !important;
  --background-secondary-alt: rgba(240, 240, 240, 0.1) !important;
  --background-setting: rgba(255, 255, 255) !important;
  --background-setting-item: rgba(255, 255, 255, 0.6) !important;
  --base-d: 0% !important;
  --bases-cards-shadow: 0 0 0 1px rgba(28, 28, 28, 0.09) !important;
  --bases-embed-border-color: rgba(28, 28, 28, 0.09) !important;
  --bases-table-border-color: rgba(28, 28, 28, 0.09) !important;
  --bases-table-header-background: rgba(28, 28, 28, 0.1) !important;
  --bases-table-header-background-hover: rgba(28, 28, 28, 0.1) !important;
  --bases-table-row-height: 40px !important;
  --bases-table-summary-background-hover: rgba(28, 28, 28, 0.1) !important;
  --block-border-color: rgba(28, 28, 28, 0.25) !important;
  --blockquote-border-color: rgba(28, 28, 28, 0.2) !important;
  --blockquote-border-thickness: 0.5px !important;
  --button-radius: 14px !important;
  --callout-content-padding: 4px;
  --code-background: rgba(28, 28, 28, 0.1) !important;
  --code-border-color: rgba(28, 28, 28, 0.09) !important;
  --code-bracket-background: rgba(28, 28, 28, 0.1) !important;
  --divider-color: rgba(0, 0, 0, 0.01) !important;
  --editor-bg-color: rgba(255, 255, 255, 0) !important;
  --editor-brightness: 1 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(28, 28, 28, 0.09), inset 0 0 0 1px rgba(28, 28, 28, 0.09) !important;
  --floating-toc-background-color: transparent !important;
  --footnote-divider-color: rgba(28, 28, 28, 0.09) !important;
  --footnote-input-background-active: rgba(28, 28, 28, 0.1) !important;
  --glass-bg-color: rgba(248, 248, 248, 0.6) !important;
  --h1-color: rgb(231, 77, 71) !important;
  --h2-color: rgb(215, 148, 64) !important;
  --h3-color: rgb(7, 170, 246) !important;
  --h4-color: rgb(163, 110, 251) !important;
  --h5-color: rgb(109, 215, 215) !important;
  --h6-color: rgb(175, 191, 5) !important;
  --highlight: rgba(28, 28, 28, 0.2) !important;
  --hr-color: rgba(28, 28, 28, 0.09) !important;
  --indentation-guide-color: rgba(28, 28, 28, 0.05) !important;
  --indentation-guide-color-active: rgba(28, 28, 28, 0.05) !important;
  --inline-title-color: rgb(231, 77, 71) !important;
  --input-radius: 14px !important;
  --italic-color: rgb(138, 92, 245) !important;
  --lightgray: rgb(249, 249, 249) !important;
  --list-bullet-end-padding: 1.4rem !important;
  --list-indent: 1.5em !important;
  --mac-window-opacity: 0 !important;
  --menu-background: rgb(249, 249, 249) !important;
  --metadata-border-color: rgba(28, 28, 28, 0.09) !important;
  --metadata-divider-color: rgba(28, 28, 28, 0.09) !important;
  --metadata-input-background-active: rgba(28, 28, 28, 0.1) !important;
  --metadata-label-background-active: rgba(28, 28, 28, 0.1) !important;
  --metadata-property-background-active: rgba(28, 28, 28, 0.1) !important;
  --model-bg-color: rgba(248, 248, 248, 0.1) !important;
  --nav-indentation-guide-color: rgba(28, 28, 28, 0.05) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.1) !important;
  --nav-item-background-hover: rgba(28, 28, 28, 0.1) !important;
  --nav-item-children-padding-start: 1px !important;
  --nav-item-color-active: rgb(138, 92, 245) !important;
  --pill-border-color: rgba(28, 28, 28, 0.09) !important;
  --radius-xxl: 20px !important;
  --ribbon-background: rgb(249, 249, 249) !important;
  --scrollbar-thumb-color: rgba(0, 0, 0, 0.2) !important;
  --setting-items-border-color: rgba(28, 28, 28, 0.09) !important;
  --shadow-color: rgba(0, 0, 0, 0.06) !important;
  --side-split-bg-color: rgba(248, 248, 248, 0.3) !important;
  --slider-track-background: rgba(28, 28, 28, 0.09) !important;
  --status-bar-background: rgb(249, 249, 249) !important;
  --status-bar-border-color: rgba(0, 0, 0, 0.01) !important;
  --statusbar-bg-color: rgba(248, 248, 248, 0.7) !important;
  --suggestion-bg-color: rgba(248, 248, 248, 0.1) !important;
  --tab-container-background: rgb(249, 249, 249) !important;
  --tab-outline-color: rgba(0, 0, 0, 0.01) !important;
  --tab-switcher-background: rgb(249, 249, 249) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(249, 249, 249), transparent) !important;
  --table-add-button-border-color: rgba(28, 28, 28, 0.09) !important;
  --table-border-color: rgba(28, 28, 28, 0.09) !important;
  --table-header-background: rgba(28, 28, 28, 0.1) !important;
  --table-header-border-color: rgba(28, 28, 28, 0.09) !important;
  --text-color: rgb(8, 8, 8) !important;
  --text-highlight-bg: rgba(28, 28, 28, 0.2) !important;
  --text-line-height: 36px !important;
  --text-paragraph-gap: 3.4px !important;
  --text-shadow-color: black !important;
  --textHighlight: rgba(28, 28, 28, 0.2) !important;
  --titlebar-background: rgb(248, 248, 248) !important;
  --titlebar-background-focused: rgba(240, 240, 240, 0.1) !important;
  --titlebar-border-color: rgba(28, 28, 28, 0.09) !important;
  --tree-item-color: rgb(20, 20, 20, 0.8) !important;
  --win-bg-image-url: url('') !important;
  --win-blur: 15px !important;
  --win-editor-bg-color: #f0f0f0a6 !important;
  --win-window-brightness: 0.9 !important;
  --win-window-opacity: 0.15 !important;
  --window-brightness: 0.96 !important;
  --window-font-size: 15 !important;
  --workspace-background-translucent: rgba(255, 255, 255, 0.05) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.01);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0.01);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.4);
}

html[saved-theme="light"] body del {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: line-through rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body dt {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ol > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body table {
  color: rgb(8, 8, 8);
  width: 1794px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
  color: rgb(8, 8, 8);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body tr {
  background-color: rgba(28, 28, 28, 0.1);
}`,
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figcaption {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-left-color: rgba(28, 28, 28, 0.2);
  border-left-style: solid;
  border-left-width: 1px;
  margin-left: 3px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgba(28, 28, 28, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  margin-left: 3px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgba(28, 28, 28, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  margin-left: 3px;
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}`,
    callouts: `html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgba(255, 255, 255, 0.25);
  border-left-color: rgba(255, 255, 255, 0.25);
  border-right-color: rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.25);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px, rgba(255, 255, 255, 0.6) 0px 1px 2px 0px inset;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(28, 28, 28, 0.1);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.25);
  border-left-color: rgba(255, 255, 255, 0.25);
  border-right-color: rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.25);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 5px 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 27.6px;
  border-bottom-right-radius: 27.6px;
  border-top-left-radius: 27.6px;
  border-top-right-radius: 27.6px;
}

html[saved-theme="light"] body h1 {
  color: rgb(231, 77, 71);
}

html[saved-theme="light"] body h2 {
  color: rgb(215, 148, 64);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body h3 {
  color: rgb(7, 170, 246);
}

html[saved-theme="light"] body h4 {
  color: rgb(163, 110, 251);
}

html[saved-theme="light"] body h5 {
  color: rgb(109, 215, 215);
}

html[saved-theme="light"] body h6 {
  color: rgb(175, 191, 5);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0.01);
  border-left-color: rgba(0, 0, 0, 0.01);
  border-right-color: rgba(0, 0, 0, 0.01);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  padding-left: 8px;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(20, 20, 20, 0.8);
  text-decoration: rgba(20, 20, 20, 0.8);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(20, 20, 20, 0.8);
  text-decoration: rgba(20, 20, 20, 0.8);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(138, 92, 245);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(248, 248, 248, 0.6);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(20, 20, 20, 0.8);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(20, 20, 20, 0.8);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(248, 248, 248, 0.6);
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 8, 8);
  text-decoration: underline dotted rgb(8, 8, 8);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body kbd {
  background-color: rgba(28, 28, 28, 0.1);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sub {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body summary {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sup {
  color: rgb(8, 8, 8);
}`,
  },
};
