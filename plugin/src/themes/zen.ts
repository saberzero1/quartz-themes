import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "zen", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --active-border-color: rgba(0, 157, 255, 0.8);
  --app-model-bg-color: rgba(28, 28, 28, 0.8);
  --background-modifier-border: rgba(245, 245, 245, 0.15);
  --background-modifier-form-field: rgba(245, 245, 245, 0.04);
  --background-modifier-form-field-hover: rgba(245, 245, 245, 0.04);
  --background-modifier-hover: rgba(245, 245, 245, 0.1);
  --background-secondary: rgb(42, 42, 42);
  --background-secondary-alt: rgba(18, 18, 18, 0.1);
  --background-setting: rgba(18, 18, 18);
  --background-setting-item: #242424;
  --base-d: 0%;
  --bases-cards-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --bases-embed-border-color: rgba(245, 245, 245, 0.15);
  --bases-table-border-color: rgba(245, 245, 245, 0.15);
  --bases-table-header-background: rgba(245, 245, 245, 0.1);
  --bases-table-header-background-hover: rgba(245, 245, 245, 0.1);
  --bases-table-row-height: 40px;
  --bases-table-summary-background-hover: rgba(245, 245, 245, 0.1);
  --block-border-color: rgba(245, 245, 245, 0.3);
  --blockquote-border-color: rgba(245, 245, 245, 0.2);
  --blockquote-border-thickness: 0.5px;
  --button-radius: 14px;
  --callout-content-padding: 4px;
  --code-background: rgba(245, 245, 245, 0.15);
  --code-border-color: rgba(245, 245, 245, 0.15);
  --code-bracket-background: rgba(245, 245, 245, 0.1);
  --divider-color: rgba(255, 255, 255, 0.01);
  --editor-bg-color: rgba(28, 28, 28, 0);
  --editor-brightness: 1;
  --embed-block-shadow-hover: 0 0 0 1px rgba(245, 245, 245, 0.15), inset 0 0 0 1px rgba(245, 245, 245, 0.15);
  --floating-toc-background-color: transparent;
  --footnote-divider-color: rgba(245, 245, 245, 0.15);
  --footnote-input-background-active: rgba(245, 245, 245, 0.1);
  --glass-bg-color: rgba(28, 28, 28, 0.7);
  --h1-color: rgb(231, 77, 71);
  --h2-color: rgb(215, 148, 64);
  --h3-color: rgb(7, 170, 246);
  --h4-color: rgb(163, 110, 251);
  --h5-color: rgb(109, 215, 215);
  --h6-color: rgb(175, 191, 5);
  --hr-color: rgba(245, 245, 245, 0.2);
  --indentation-guide-color: rgba(245, 245, 245, 0.1);
  --indentation-guide-color-active: rgba(245, 245, 245, 0.1);
  --inline-title-color: rgb(231, 77, 71);
  --input-radius: 14px;
  --italic-color: rgb(166, 139, 249);
  --list-bullet-end-padding: 1.4rem;
  --list-indent: 1.5em;
  --list-marker-color: rgba(245, 245, 245, 0.25);
  --mac-window-opacity: 0;
  --menu-background: rgb(42, 42, 42);
  --metadata-border-color: rgba(245, 245, 245, 0.15);
  --metadata-divider-color: rgba(245, 245, 245, 0.15);
  --metadata-input-background-active: rgba(245, 245, 245, 0.1);
  --metadata-label-background-active: rgba(245, 245, 245, 0.1);
  --metadata-property-background-active: rgba(245, 245, 245, 0.1);
  --model-bg-color: rgba(28, 28, 28, 0.1);
  --nav-indentation-guide-color: rgba(245, 245, 245, 0.1);
  --nav-item-background-active: rgba(245, 245, 245, 0.1);
  --nav-item-background-hover: rgba(245, 245, 245, 0.1);
  --nav-item-children-padding-start: 1px;
  --nav-item-color-active: rgb(166, 139, 249);
  --pdf-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --pill-border-color: rgba(245, 245, 245, 0.15);
  --radius-xxl: 20px;
  --ribbon-background: rgb(42, 42, 42);
  --scrollbar-thumb-color: rgba(255, 255, 255, 0.2);
  --setting-items-border-color: rgba(245, 245, 245, 0.15);
  --shadow-color: rgba(245, 245, 245, 0.08);
  --side-split-bg-color: rgba(28, 28, 28, 0.3);
  --slider-track-background: rgba(245, 245, 245, 0.15);
  --status-bar-background: rgb(42, 42, 42);
  --status-bar-border-color: rgba(255, 255, 255, 0.01);
  --statusbar-bg-color: rgba(28, 28, 28, 0.7);
  --suggestion-bg-color: rgba(28, 28, 28, 0.1);
  --tab-container-background: rgb(42, 42, 42);
  --tab-outline-color: rgba(255, 255, 255, 0.01);
  --tab-switcher-background: rgb(42, 42, 42);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 42), transparent);
  --table-add-button-border-color: rgba(245, 245, 245, 0.15);
  --table-border-color: rgba(245, 245, 245, 0.15);
  --table-header-background: rgba(245, 245, 245, 0.1);
  --table-header-border-color: rgba(245, 245, 245, 0.15);
  --text-color: rgb(240, 240, 240);
  --text-highlight-bg: rgba(245, 245, 245, 0.2);
  --text-line-height: 36px;
  --text-paragraph-gap: 3.4px;
  --text-shadow-color: white;
  --titlebar-background: rgb(42, 42, 42);
  --titlebar-background-focused: rgba(18, 18, 18, 0.1);
  --titlebar-border-color: rgba(245, 245, 245, 0.15);
  --tree-item-color: rgba(210, 210, 210, 0.8);
  --win-bg-image-url: url('');
  --win-blur: 20px;
  --win-editor-bg-color: #121212a6;
  --win-window-brightness: 0.9;
  --win-window-opacity: 0.2;
  --window-brightness: 0.96;
  --window-font-size: 15;
  --workspace-background-translucent: rgba(0, 0, 0, 0.3);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.01);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(255, 255, 255, 0.01);
}`,
    typography: `body .page article p > b, b {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

body .page article p > em, em {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

body .page article p > i, i {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

body .page article p > strong, strong {
  color: rgb(166, 138, 249);
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}

body .text-highlight {
  background-color: color(srgb 0.650839 0.542678 0.975322 / 0.4);
}

body del {
  color: rgb(240, 240, 240);
  outline: rgb(240, 240, 240) none 0px;
  text-decoration: line-through rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}`,
    lists: `body dd {
  color: rgb(240, 240, 240);
}

body dt {
  color: rgb(240, 240, 240);
}

body ol > li {
  color: rgb(240, 240, 240);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body ul > li {
  color: rgb(240, 240, 240);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body table {
  color: rgb(240, 240, 240);
  width: 1794px;
}

body td {
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

body th {
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

body tr {
  background-color: rgba(245, 245, 245, 0.1);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(245, 245, 245, 0.15);
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(245, 245, 245, 0.15);
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
  color: rgb(240, 240, 240);
}

body pre > code, pre:has(> code) {
  background-color: rgba(245, 245, 245, 0.15);
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}

body pre:has(> code) {
  background-color: rgba(245, 245, 245, 0.15);
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}`,
    images: `body audio {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body figcaption {
  color: rgb(240, 240, 240);
}

body figure {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body img {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body video {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    embeds: `body .file-embed {
  border-left-color: rgba(245, 245, 245, 0.2);
  border-left-style: solid;
  border-left-width: 1px;
  margin-left: 3px;
}

body .footnotes {
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

body .transclude {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgba(245, 245, 245, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  margin-left: 3px;
}

body .transclude-inner {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgba(245, 245, 245, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  margin-left: 3px;
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='*'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='-'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='/'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='>'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='?'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='I'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='S'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='b'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='c'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='d'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='f'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='i'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='k'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='l'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='p'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='u'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='w'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}`,
    callouts: `body .callout > .callout-content {
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 6px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(240, 240, 240);
  outline: rgb(240, 240, 240) none 0px;
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 240, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
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

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(240, 240, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(245, 245, 245, 0.1);
  color: rgb(240, 240, 240);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(245, 245, 245, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(240, 240, 240);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 27.6px;
  border-bottom-right-radius: 27.6px;
  border-top-left-radius: 27.6px;
  border-top-right-radius: 27.6px;
}

body h1 {
  color: rgb(231, 77, 71);
}

body h2 {
  color: rgb(215, 148, 64);
}

body h2.page-title, h2.page-title a {
  color: rgb(240, 240, 240);
}

body h3 {
  color: rgb(7, 170, 246);
}

body h4 {
  color: rgb(163, 110, 251);
}

body h5 {
  color: rgb(109, 215, 215);
}

body h6 {
  color: rgb(175, 191, 5);
}

body hr {
  border-bottom-color: rgba(255, 255, 255, 0.01);
  border-left-color: rgba(255, 255, 255, 0.01);
  border-right-color: rgba(255, 255, 255, 0.01);
}`,
    scrollbars: `body .callout {
  padding-left: 8px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(210, 210, 210, 0.8);
  text-decoration: rgba(210, 210, 210, 0.8);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(210, 210, 210, 0.8);
  text-decoration: rgba(210, 210, 210, 0.8);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    footer: `body footer {
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

body footer ul li a {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(210, 210, 210, 0.8);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgba(210, 210, 210, 0.8);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

body .metadata {
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}

body .navigation-progress {
  background-color: rgba(28, 28, 28, 0.7);
}

body abbr {
  color: rgb(240, 240, 240);
  text-decoration: underline dotted rgb(240, 240, 240);
}

body details {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body input[type=text] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body kbd {
  background-color: rgba(245, 245, 245, 0.15);
}

body progress {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body sub {
  color: rgb(240, 240, 240);
}

body summary {
  color: rgb(240, 240, 240);
}

body sup {
  color: rgb(240, 240, 240);
}`,
  },
  light: {
    base: `:root:root {
  --active-border-color: rgb(0, 121, 172);
  --app-model-bg-color: rgba(248, 248, 248, 0.8);
  --background-modifier-border: rgba(28, 28, 28, 0.09);
  --background-modifier-form-field: rgba(230, 230, 230, 0.5);
  --background-modifier-form-field-hover: rgba(230, 230, 230, 0.5);
  --background-modifier-hover: rgba(28, 28, 28, 0.1);
  --background-secondary: rgb(249, 249, 249);
  --background-secondary-alt: rgba(240, 240, 240, 0.1);
  --background-setting: rgba(255, 255, 255);
  --background-setting-item: rgba(255, 255, 255, 0.6);
  --base-d: 0%;
  --bases-cards-shadow: 0 0 0 1px rgba(28, 28, 28, 0.09);
  --bases-embed-border-color: rgba(28, 28, 28, 0.09);
  --bases-table-border-color: rgba(28, 28, 28, 0.09);
  --bases-table-header-background: rgba(28, 28, 28, 0.1);
  --bases-table-header-background-hover: rgba(28, 28, 28, 0.1);
  --bases-table-row-height: 40px;
  --bases-table-summary-background-hover: rgba(28, 28, 28, 0.1);
  --block-border-color: rgba(28, 28, 28, 0.25);
  --blockquote-border-color: rgba(28, 28, 28, 0.2);
  --blockquote-border-thickness: 0.5px;
  --button-radius: 14px;
  --callout-content-padding: 4px;
  --code-background: rgba(28, 28, 28, 0.1);
  --code-border-color: rgba(28, 28, 28, 0.09);
  --code-bracket-background: rgba(28, 28, 28, 0.1);
  --divider-color: rgba(0, 0, 0, 0.01);
  --editor-bg-color: rgba(255, 255, 255, 0);
  --editor-brightness: 1;
  --embed-block-shadow-hover: 0 0 0 1px rgba(28, 28, 28, 0.09), inset 0 0 0 1px rgba(28, 28, 28, 0.09);
  --floating-toc-background-color: transparent;
  --footnote-divider-color: rgba(28, 28, 28, 0.09);
  --footnote-input-background-active: rgba(28, 28, 28, 0.1);
  --glass-bg-color: rgba(248, 248, 248, 0.6);
  --h1-color: rgb(231, 77, 71);
  --h2-color: rgb(215, 148, 64);
  --h3-color: rgb(7, 170, 246);
  --h4-color: rgb(163, 110, 251);
  --h5-color: rgb(109, 215, 215);
  --h6-color: rgb(175, 191, 5);
  --hr-color: rgba(28, 28, 28, 0.09);
  --indentation-guide-color: rgba(28, 28, 28, 0.05);
  --indentation-guide-color-active: rgba(28, 28, 28, 0.05);
  --inline-title-color: rgb(231, 77, 71);
  --input-radius: 14px;
  --italic-color: rgb(138, 92, 245);
  --list-bullet-end-padding: 1.4rem;
  --list-indent: 1.5em;
  --mac-window-opacity: 0;
  --menu-background: rgb(249, 249, 249);
  --metadata-border-color: rgba(28, 28, 28, 0.09);
  --metadata-divider-color: rgba(28, 28, 28, 0.09);
  --metadata-input-background-active: rgba(28, 28, 28, 0.1);
  --metadata-label-background-active: rgba(28, 28, 28, 0.1);
  --metadata-property-background-active: rgba(28, 28, 28, 0.1);
  --model-bg-color: rgba(248, 248, 248, 0.1);
  --nav-indentation-guide-color: rgba(28, 28, 28, 0.05);
  --nav-item-background-active: rgba(0, 0, 0, 0.1);
  --nav-item-background-hover: rgba(28, 28, 28, 0.1);
  --nav-item-children-padding-start: 1px;
  --nav-item-color-active: rgb(138, 92, 245);
  --pill-border-color: rgba(28, 28, 28, 0.09);
  --radius-xxl: 20px;
  --ribbon-background: rgb(249, 249, 249);
  --scrollbar-thumb-color: rgba(0, 0, 0, 0.2);
  --setting-items-border-color: rgba(28, 28, 28, 0.09);
  --shadow-color: rgba(0, 0, 0, 0.06);
  --side-split-bg-color: rgba(248, 248, 248, 0.3);
  --slider-track-background: rgba(28, 28, 28, 0.09);
  --status-bar-background: rgb(249, 249, 249);
  --status-bar-border-color: rgba(0, 0, 0, 0.01);
  --statusbar-bg-color: rgba(248, 248, 248, 0.7);
  --suggestion-bg-color: rgba(248, 248, 248, 0.1);
  --tab-container-background: rgb(249, 249, 249);
  --tab-outline-color: rgba(0, 0, 0, 0.01);
  --tab-switcher-background: rgb(249, 249, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(249, 249, 249), transparent);
  --table-add-button-border-color: rgba(28, 28, 28, 0.09);
  --table-border-color: rgba(28, 28, 28, 0.09);
  --table-header-background: rgba(28, 28, 28, 0.1);
  --table-header-border-color: rgba(28, 28, 28, 0.09);
  --text-color: rgb(8, 8, 8);
  --text-highlight-bg: rgba(28, 28, 28, 0.2);
  --text-line-height: 36px;
  --text-paragraph-gap: 3.4px;
  --text-shadow-color: black;
  --titlebar-background: rgb(248, 248, 248);
  --titlebar-background-focused: rgba(240, 240, 240, 0.1);
  --titlebar-border-color: rgba(28, 28, 28, 0.09);
  --tree-item-color: rgb(20, 20, 20, 0.8);
  --win-bg-image-url: url('');
  --win-blur: 15px;
  --win-editor-bg-color: #f0f0f0a6;
  --win-window-brightness: 0.9;
  --win-window-opacity: 0.15;
  --window-brightness: 0.96;
  --window-font-size: 15;
  --workspace-background-translucent: rgba(255, 255, 255, 0.05);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.01);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0.01);
}`,
    typography: `body .page article p > b, b {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body .page article p > em, em {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body .page article p > i, i {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body .page article p > strong, strong {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.4);
}

body del {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: line-through rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}`,
    lists: `body dd {
  color: rgb(8, 8, 8);
}

body dt {
  color: rgb(8, 8, 8);
}

body ol > li {
  color: rgb(8, 8, 8);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body ul > li {
  color: rgb(8, 8, 8);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body table {
  color: rgb(8, 8, 8);
  width: 1794px;
}

body td {
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

body th {
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

body tr {
  background-color: rgba(28, 28, 28, 0.1);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
  color: rgb(8, 8, 8);
}

body pre > code, pre:has(> code) {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}

body pre:has(> code) {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}`,
    images: `body audio {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body figcaption {
  color: rgb(8, 8, 8);
}

body figure {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body img {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body video {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    embeds: `body .file-embed {
  border-left-color: rgba(28, 28, 28, 0.2);
  border-left-style: solid;
  border-left-width: 1px;
  margin-left: 3px;
}

body .footnotes {
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body .transclude {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgba(28, 28, 28, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  margin-left: 3px;
}

body .transclude-inner {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgba(28, 28, 28, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  margin-left: 3px;
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='*'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='-'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='/'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='>'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='?'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='I'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='S'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='b'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='c'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='d'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='f'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='i'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='k'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='l'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='p'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='u'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='w'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}`,
    callouts: `body .callout > .callout-content {
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  border-bottom-color: rgba(255, 255, 255, 0.25);
  border-left-color: rgba(255, 255, 255, 0.25);
  border-right-color: rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.25);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px, rgba(255, 255, 255, 0.6) 0px 1px 2px 0px inset;
}

body .search > .search-container > .search-space > * {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
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

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(28, 28, 28, 0.1);
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.25);
  border-left-color: rgba(255, 255, 255, 0.25);
  border-right-color: rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.25);
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(28, 28, 28, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(8, 8, 8);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 27.6px;
  border-bottom-right-radius: 27.6px;
  border-top-left-radius: 27.6px;
  border-top-right-radius: 27.6px;
}

body h1 {
  color: rgb(231, 77, 71);
}

body h2 {
  color: rgb(215, 148, 64);
}

body h2.page-title, h2.page-title a {
  color: rgb(8, 8, 8);
}

body h3 {
  color: rgb(7, 170, 246);
}

body h4 {
  color: rgb(163, 110, 251);
}

body h5 {
  color: rgb(109, 215, 215);
}

body h6 {
  color: rgb(175, 191, 5);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0.01);
  border-left-color: rgba(0, 0, 0, 0.01);
  border-right-color: rgba(0, 0, 0, 0.01);
}`,
    scrollbars: `body .callout {
  padding-left: 8px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(20, 20, 20, 0.8);
  text-decoration: rgba(20, 20, 20, 0.8);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(20, 20, 20, 0.8);
  text-decoration: rgba(20, 20, 20, 0.8);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    footer: `body footer {
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

body footer ul li a {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(20, 20, 20, 0.8);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgba(20, 20, 20, 0.8);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body .metadata {
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}

body .navigation-progress {
  background-color: rgba(248, 248, 248, 0.6);
}

body abbr {
  color: rgb(8, 8, 8);
  text-decoration: underline dotted rgb(8, 8, 8);
}

body details {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body input[type=text] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body kbd {
  background-color: rgba(28, 28, 28, 0.1);
}

body progress {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body sub {
  color: rgb(8, 8, 8);
}

body summary {
  color: rgb(8, 8, 8);
}

body sup {
  color: rgb(8, 8, 8);
}`,
  },
};
