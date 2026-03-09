import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "pine-forest-berry",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["inconsolata"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --active-header-border: #759e93;
  --active-header-buttons: #f2f2f2;
  --background-accent: #f8f8f2;
  --background-code: #292c33;
  --background-header-one: #2e3440;
  --background-header-two: #4a6860;
  --background-modal: rgba(0, 0, 0, 0.6);
  --background-modifier-border: #759e93;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-nav: #2e3440;
  --background-nav-alt: #2a2c32;
  --background-primary: #2e3440;
  --background-primary-alt: #2a2c32;
  --background-secondary: #3b4252;
  --background-secondary-alt: #292c33;
  --bases-cards-background: #2e3440;
  --bases-cards-cover-background: #2a2c32;
  --bases-cards-shadow: 0 0 0 1px #759e93;
  --bases-embed-border-color: #759e93;
  --bases-group-heading-property-color: #f8f8f2;
  --bases-table-border-color: #759e93;
  --bases-table-cell-background-active: #2e3440;
  --bases-table-cell-background-disabled: #2a2c32;
  --bases-table-cell-shadow-focus: 0 0 0 2px #548a7b;
  --bases-table-group-background: #2a2c32;
  --bases-table-header-background: #2e3440;
  --bases-table-header-color: #f8f8f2;
  --bases-table-summary-background: #2e3440;
  --berry-red-faded: #ab687e;
  --berry-red-light: #ad3266;
  --berry-red-strong: #c72e6e;
  --blockquote-border: #ffb86c;
  --blockquote-border-color: #548a7b;
  --blue-gray: #546285;
  --blue-gray-dark: #3b4252;
  --blue-gray-darkest: #15181e;
  --blue-gray-light: #7a859f;
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --border-color: #2b2727;
  --calendar-days: #cccccc;
  --calendar-days-hover: #f2f2f2;
  --canvas-background: #2e3440;
  --canvas-card-label-color: #759e93;
  --caret-color: #f8f8f2;
  --checkbox-border-color: #759e93;
  --checkbox-border-color-hover: #f8f8f2;
  --checkbox-color: #548a7b;
  --checkbox-color-hover: #d47d7d;
  --checkbox-left: 0px;
  --checkbox-margin: 0px 6px 0px -2em;
  --checkbox-marker-color: #2e3440;
  --checkbox-radius: 50%;
  --checkbox-top: 2px;
  --checklist-done-color: #f8f8f2;
  --checklist-done-decoration: none;
  --code-background: #2a2c32;
  --code-block: #759e93;
  --code-border-color: #759e93;
  --code-comment: #759e93;
  --code-normal: #f8f8f2;
  --code-punctuation: #f8f8f2;
  --collapse-icon-color: #759e93;
  --collapse-icon-color-collapsed: #f2bd77;
  --divider-color: #759e93;
  --divider-color-hover: #548a7b;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #d47d7d;
  --embed-block-shadow-hover: 0 0 0 1px #759e93, inset 0 0 0 1px #759e93;
  --embed-border-start: 2px solid #548a7b;
  --file-header-background: #2e3440;
  --file-header-background-focused: #2e3440;
  --flair-background: #ffffff;
  --flair-color: #f8f8f2;
  --font-family-editor: Inconsolata, Monaco, Consolas, 'Courier New', Courier;
  --font-family-preview: Avenir, Avenir Next, sans-serif;
  --footnote-divider-color: #759e93;
  --footnote-id-color: #f8f8f2;
  --footnote-id-color-no-occurrences: #759e93;
  --forest-green-dark: #4a6860;
  --forest-green-faded: #c3d5d0;
  --forest-green-half: rgb(117, 158, 147, 0.4);
  --forest-green-light: #759e93;
  --graph-background: #2a2c32;
  --graph-dots: #f2f2f2;
  --graph-links: rgba(157, 212, 207, 0.75);
  --graph-node: #f8f8f2;
  --graph-node-focused: #f2bd77;
  --graph-node-unresolved: #759e93;
  --graph-text: #f8f8f2;
  --heading-formatting: #759e93;
  --horizontal-line: #759e93;
  --horizontal-line-element: #9fd4d6;
  --hr-color: #759e93;
  --icon-color: #f8f8f2;
  --icon-color-active: #f2bd77;
  --icon-color-focused: #f8f8f2;
  --icon-color-hover: #f8f8f2;
  --inline-code: #759e93;
  --input-date-separator: #759e93;
  --input-placeholder-color: #759e93;
  --interactive-accent: #548a7b;
  --interactive-accent-hover: #d47d7d;
  --interactive-accent-rgb: 123, 108, 217;
  --interactive-hover: #d47d7d;
  --interactive-normal: #ffffff;
  --link-color: #f2bd77;
  --link-color-hover: #c72e6e;
  --link-external-color: #f2bd77;
  --link-external-color-hover: #c72e6e;
  --link-unresolved-color: #f2bd77;
  --list-marker-color: #759e93;
  --list-marker-color-collapsed: #f2bd77;
  --list-marker-color-hover: #f8f8f2;
  --menu-background: #3b4252;
  --menu-item-hover: #2e3440;
  --metadata-border-color: #759e93;
  --metadata-divider-color: #759e93;
  --metadata-input-text-color: #f8f8f2;
  --metadata-label-text-color: #f8f8f2;
  --metadata-label-text-color-hover: #f8f8f2;
  --mint-green: #9dd4cf;
  --modal-background: #2e3440;
  --nav-collapse-icon-color: #759e93;
  --nav-collapse-icon-color-collapsed: #759e93;
  --nav-heading-color: #f8f8f2;
  --nav-heading-color-collapsed: #759e93;
  --nav-heading-color-collapsed-hover: #f8f8f2;
  --nav-heading-color-hover: #f8f8f2;
  --nav-item-color: #f8f8f2;
  --nav-item-color-active: #f8f8f2;
  --nav-item-color-highlighted: #f2bd77;
  --nav-item-color-hover: #f8f8f2;
  --nav-item-color-selected: #f8f8f2;
  --nav-tag-color: #759e93;
  --nav-tag-color-active: #f8f8f2;
  --nav-tag-color-hover: #f8f8f2;
  --off-white: #f2f2f2;
  --off-white-alt: #e6e6e6;
  --off-white-dark: #cccccc;
  --off-white-darker: #8c8c8c;
  --off-white-faded: rgb(242, 242, 242, 0.8);
  --orange-yellow: #f2bd77;
  --orange-yellow-dark: #eea444;
  --pdf-background: #2e3440;
  --pdf-page-background: #2e3440;
  --pdf-shadow: 0 0 0 1px #759e93;
  --pdf-sidebar-background: #2e3440;
  --pdf-thumbnail-shadow: 0 0 0 1px #759e93;
  --pill-border-color: #759e93;
  --pill-color: #f8f8f2;
  --pill-color-hover: #f8f8f2;
  --pill-color-remove: #759e93;
  --pill-color-remove-hover: #f2bd77;
  --pre-code: #2e3440;
  --prompt-background: #2e3440;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --ribbon-background: #3b4252;
  --ribbon-background-collapsed: #2e3440;
  --search-clear-button-color: #f8f8f2;
  --search-icon-color: #f8f8f2;
  --search-result-background: #2e3440;
  --selected-item: #759e93;
  --setting-group-heading-color: #f8f8f2;
  --setting-items-background: #2a2c32;
  --setting-items-border-color: #759e93;
  --slider-track-background: #759e93;
  --status-bar-background: #3b4252;
  --status-bar-border-color: #759e93;
  --status-bar-text-color: #f8f8f2;
  --suggestion-background: #2e3440;
  --tab-background-active: #2e3440;
  --tab-container-background: #3b4252;
  --tab-outline-color: #759e93;
  --tab-switcher-background: #3b4252;
  --tab-switcher-menubar-background: linear-gradient(to top, #3b4252, transparent);
  --tab-text-color: #759e93;
  --tab-text-color-active: #f8f8f2;
  --tab-text-color-focused: #f8f8f2;
  --tab-text-color-focused-active: #f8f8f2;
  --tab-text-color-focused-active-current: #f8f8f2;
  --tab-text-color-focused-highlighted: #f2bd77;
  --table-add-button-border-color: #759e93;
  --table-border-color: #759e93;
  --table-drag-handle-background-active: #548a7b;
  --table-drag-handle-color: #759e93;
  --table-drag-handle-color-active: #eddee3;
  --table-header-border-color: #759e93;
  --table-header-color: #f8f8f2;
  --table-selection-border-color: #548a7b;
  --tag-color: #f2bd77;
  --tag-color-hover: #f2bd77;
  --text-accent: #f2bd77;
  --text-accent-hover: #c72e6e;
  --text-error: #ab687e;
  --text-error-hover: #ff79c6;
  --text-faint: #759e93;
  --text-highlight: #ad3266;
  --text-highlight-bg: #d5548a60;
  --text-muted: #f8f8f2;
  --text-muted-real: #f8f8f2;
  --text-nav: #c3d5d0;
  --text-normal: #f8f8f2;
  --text-on-accent: #eddee3;
  --text-selection: rgba(157, 212, 207, 0.75);
  --text-status-bar: #cccccc;
  --text-title-h1: #c72e6e;
  --text-title-h2: #ffffff;
  --text-title-h3: #95bab0;
  --text-title-h4: #759e93;
  --text-title-h5: #548a7b;
  --text-title-h6: #377362;
  --titlebar-background: #3b4252;
  --titlebar-background-focused: #292c33;
  --titlebar-border-color: #759e93;
  --titlebar-text-color: #f8f8f2;
  --titlebar-text-color-focused: #f8f8f2;
  --vault-profile-color: #f8f8f2;
  --vault-profile-color-hover: #f8f8f2;
  --vim-cursor: #ff5555;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 82);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(42, 44, 50);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 82);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(46, 52, 64);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(199, 46, 110);
  outline: rgb(199, 46, 110) none 0px;
  text-decoration: rgb(199, 46, 110);
  text-decoration-color: rgb(199, 46, 110);
}

body .page article p > em, em {
  color: rgb(117, 158, 147);
  outline: rgb(117, 158, 147) none 0px;
  text-decoration: rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

body .page article p > i, i {
  color: rgb(117, 158, 147);
  outline: rgb(117, 158, 147) none 0px;
  text-decoration: rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

body .page article p > strong, strong {
  color: rgb(199, 46, 110);
  outline: rgb(199, 46, 110) none 0px;
  text-decoration: rgb(199, 46, 110);
  text-decoration-color: rgb(199, 46, 110);
}

body .text-highlight {
  background-color: rgba(213, 84, 138, 0.376);
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body p {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    links: `body a.external, footer a {
  color: rgb(242, 189, 119);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(242, 189, 119) none 0px;
  text-decoration: rgb(242, 189, 119);
  text-decoration-color: rgb(242, 189, 119);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(242, 189, 119);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(242, 189, 119) none 0px;
  text-decoration: rgb(242, 189, 119);
  text-decoration-color: rgb(242, 189, 119);
}

body a.internal.broken {
  color: rgb(242, 189, 119);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(242, 189, 119) none 0px;
  text-decoration: rgb(242, 189, 119);
  text-decoration-color: rgb(242, 189, 119);
}`,
    lists: `body dd {
  color: rgb(248, 248, 242);
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(248, 248, 242);
}

body ol.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(117, 158, 147);
  text-decoration: rgb(117, 158, 147);
}

body blockquote {
  background-color: rgb(46, 52, 64);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `body .spacer {
  background-color: rgb(46, 52, 64);
}

body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
}

body th {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
}`,
    code: `body code {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(117, 158, 147);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
}

body pre > code, pre:has(> code) {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

body pre:has(> code) {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}`,
    images: `body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figcaption {
  color: rgb(248, 248, 242);
}

body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `body .file-embed {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(84, 138, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(84, 138, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body input[type=checkbox] {
  border-bottom-color: rgb(117, 158, 147);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='-'] {
  color: rgb(117, 158, 147);
  text-decoration: line-through 1px rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 44, 51);
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(41, 44, 51);
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(84, 138, 123);
  border-right-color: rgb(84, 138, 123);
  border-top-color: rgb(84, 138, 123);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(41, 44, 51);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 44, 51);
  color: rgb(248, 248, 242);
}

body a.internal.tag-link::before {
  color: rgb(242, 189, 119);
}

body h1 {
  color: rgb(199, 46, 110);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h3 {
  color: rgb(149, 186, 176);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h4 {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h5 {
  color: rgb(84, 138, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h6 {
  color: rgb(55, 115, 98);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(195, 213, 208);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(195, 213, 208);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(195, 213, 208);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(248, 248, 242);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    footer: `body footer {
  background-color: rgb(41, 44, 51);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(204, 204, 204);
  border-top-width: 0px;
  color: rgb(204, 204, 204);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body footer ul li a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(195, 213, 208);
  text-decoration: rgb(195, 213, 208);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(195, 213, 208);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(195, 213, 208);
  text-decoration: rgb(195, 213, 208);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .darkmode svg {
  color: rgb(248, 248, 242);
  stroke: rgb(248, 248, 242);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .breadcrumb-element p {
  color: rgb(117, 158, 147);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .metadata {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .navigation-progress {
  background-color: rgb(41, 44, 51);
}

body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body input[type=text] {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body kbd {
  background-color: rgb(42, 44, 50);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body sub {
  color: rgb(248, 248, 242);
}

body summary {
  color: rgb(248, 248, 242);
}

body sup {
  color: rgb(248, 248, 242);
}`,
  },
  light: {
    base: `:root:root {
  --active-header-border: #f2bd77;
  --active-header-buttons: #4a6860;
  --background-accent: #4a6860;
  --background-code: #e6e6e6;
  --background-dark: #3b4252;
  --background-header-one: #f2f2f2;
  --background-header-two: #c3d5d0;
  --background-modal: rgba(0, 0, 0, 0.3);
  --background-modifier-border: #759e93;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-nav: #f2f2f2;
  --background-nav-alt: #e6e6e6;
  --background-primary: #f2f2f2;
  --background-primary-alt: #e6e6e6;
  --background-primary-faded: rgb(242, 242, 242, 0.8);
  --background-secondary: #f2f2f2;
  --background-secondary-alt: #c3d5d0;
  --background-secondary-real: #cccccc;
  --bases-cards-background: #f2f2f2;
  --bases-cards-cover-background: #e6e6e6;
  --bases-cards-shadow: 0 0 0 1px #759e93;
  --bases-embed-border-color: #759e93;
  --bases-group-heading-property-color: #8c8c8c;
  --bases-table-border-color: #759e93;
  --bases-table-cell-background-active: #f2f2f2;
  --bases-table-cell-background-disabled: #e6e6e6;
  --bases-table-cell-shadow-focus: 0 0 0 2px #759e93;
  --bases-table-group-background: #e6e6e6;
  --bases-table-header-background: #f2f2f2;
  --bases-table-header-color: #8c8c8c;
  --bases-table-summary-background: #f2f2f2;
  --berry-red-faded: #ab687e;
  --berry-red-light: #ad3266;
  --berry-red-strong: #c72e6e;
  --blockquote-border: #4a6860;
  --blockquote-border-color: #759e93;
  --blue-gray: #546285;
  --blue-gray-dark: #3b4252;
  --blue-gray-darkest: #15181e;
  --blue-gray-light: #7a859f;
  --blur-background: color-mix(in srgb, #f2f2f2 65%, transparent) linear-gradient(#f2f2f2, color-mix(in srgb, #f2f2f2 65%, transparent));
  --border-color: #4a6860;
  --calendar-days: #4a6860;
  --calendar-days-hover: #15181e;
  --canvas-background: #f2f2f2;
  --canvas-card-label-color: #759e93;
  --caret-color: #15181e;
  --checkbox-border-color: #759e93;
  --checkbox-border-color-hover: #8c8c8c;
  --checkbox-color: #759e93;
  --checkbox-color-hover: #eea444;
  --checkbox-left: 0px;
  --checkbox-margin: 0px 6px 0px -2em;
  --checkbox-marker-color: #3b4252;
  --checkbox-radius: 50%;
  --checkbox-top: 2px;
  --checklist-done-color: #15181e;
  --checklist-done-decoration: none;
  --code-background: #e6e6e6;
  --code-block: #c72e6e;
  --code-border-color: #759e93;
  --code-comment: #759e93;
  --code-normal: #15181e;
  --code-punctuation: #8c8c8c;
  --collapse-icon-color: #759e93;
  --collapse-icon-color-collapsed: #eea444;
  --divider-color: #759e93;
  --divider-color-hover: #759e93;
  --dropdown-background: #759e93;
  --dropdown-background-hover: #eea444;
  --embed-block-shadow-hover: 0 0 0 1px #759e93, inset 0 0 0 1px #759e93;
  --embed-border-start: 2px solid #759e93;
  --file-header-background: #f2f2f2;
  --file-header-background-focused: #f2f2f2;
  --flair-background: #759e93;
  --flair-color: #15181e;
  --font-family-editor: Inconsolata, Monaco, Consolas, 'Courier New', Courier;
  --font-family-preview: Avenir, Avenir Next, sans-serif;
  --footnote-divider-color: #759e93;
  --footnote-id-color: #8c8c8c;
  --footnote-id-color-no-occurrences: #759e93;
  --forest-green-dark: #4a6860;
  --forest-green-faded: #c3d5d0;
  --forest-green-half: rgb(117, 158, 147, 0.4);
  --forest-green-light: #759e93;
  --graph-background: #f2f2f2;
  --graph-dots: #4a6860;
  --graph-links: rgba(117, 158, 147, 0.7);
  --graph-node: #8c8c8c;
  --graph-node-focused: #eea444;
  --graph-node-unresolved: #759e93;
  --graph-text: #15181e;
  --heading-formatting: #759e93;
  --horizontal-line: #c3d5d0;
  --horizontal-line-element: #4a6860;
  --hr-color: #759e93;
  --icon-color: #8c8c8c;
  --icon-color-active: #eea444;
  --icon-color-focused: #15181e;
  --icon-color-hover: #8c8c8c;
  --inline-code: #c72e6e;
  --input-date-separator: #759e93;
  --input-placeholder-color: #759e93;
  --interactive-accent: #759e93;
  --interactive-accent-hover: #eea444;
  --interactive-accent-rgb: rgba(117, 158, 147);
  --interactive-hover: #eea444;
  --interactive-normal: #759e93;
  --link-color: #eea444;
  --link-color-hover: #c72e6e;
  --link-external-color: #eea444;
  --link-external-color-hover: #c72e6e;
  --link-unresolved-color: #eea444;
  --list-marker-color: #759e93;
  --list-marker-color-collapsed: #eea444;
  --list-marker-color-hover: #8c8c8c;
  --menu-background: #f2f2f2;
  --menu-item-hover: #f2f2f2;
  --metadata-border-color: #759e93;
  --metadata-divider-color: #759e93;
  --metadata-input-text-color: #15181e;
  --metadata-label-text-color: #8c8c8c;
  --metadata-label-text-color-hover: #8c8c8c;
  --mint-green: #9dd4cf;
  --modal-background: #f2f2f2;
  --nav-collapse-icon-color: #759e93;
  --nav-collapse-icon-color-collapsed: #759e93;
  --nav-heading-color: #15181e;
  --nav-heading-color-collapsed: #759e93;
  --nav-heading-color-collapsed-hover: #8c8c8c;
  --nav-heading-color-hover: #15181e;
  --nav-item-color: #8c8c8c;
  --nav-item-color-active: #15181e;
  --nav-item-color-highlighted: #eea444;
  --nav-item-color-hover: #15181e;
  --nav-item-color-selected: #15181e;
  --nav-tag-color: #759e93;
  --nav-tag-color-active: #8c8c8c;
  --nav-tag-color-hover: #8c8c8c;
  --off-white: #f2f2f2;
  --off-white-alt: #e6e6e6;
  --off-white-dark: #cccccc;
  --off-white-darker: #8c8c8c;
  --off-white-faded: rgb(242, 242, 242, 0.8);
  --orange-yellow: #f2bd77;
  --orange-yellow-dark: #eea444;
  --pdf-background: #f2f2f2;
  --pdf-page-background: #f2f2f2;
  --pdf-sidebar-background: #f2f2f2;
  --pill-border-color: #759e93;
  --pill-color: #8c8c8c;
  --pill-color-hover: #15181e;
  --pill-color-remove: #759e93;
  --pill-color-remove-hover: #eea444;
  --pre-code: #c3d5d0;
  --prompt-background: #f2f2f2;
  --raised-background: color-mix(in srgb, #f2f2f2 65%, transparent) linear-gradient(#f2f2f2, color-mix(in srgb, #f2f2f2 65%, transparent));
  --ribbon-background: #f2f2f2;
  --ribbon-background-collapsed: #f2f2f2;
  --scrollbar-active-thumb-bg: rgba(194, 208, 204, 0.2);
  --scrollbar-bg: rgba(194, 208, 204, 0.05);
  --scrollbar-thumb-bg: rgba(126, 147, 157, 0.1);
  --search-clear-button-color: #8c8c8c;
  --search-icon-color: #8c8c8c;
  --search-result-background: #f2f2f2;
  --selected-item: #759e93;
  --setting-group-heading-color: #15181e;
  --setting-items-background: #e6e6e6;
  --setting-items-border-color: #759e93;
  --slider-track-background: #759e93;
  --status-bar-background: #f2f2f2;
  --status-bar-border-color: #759e93;
  --status-bar-text-color: #8c8c8c;
  --suggestion-background: #f2f2f2;
  --tab-background-active: #f2f2f2;
  --tab-container-background: #f2f2f2;
  --tab-outline-color: #759e93;
  --tab-switcher-background: #f2f2f2;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f2f2, transparent);
  --tab-text-color: #759e93;
  --tab-text-color-active: #8c8c8c;
  --tab-text-color-focused: #8c8c8c;
  --tab-text-color-focused-active: #8c8c8c;
  --tab-text-color-focused-active-current: #15181e;
  --tab-text-color-focused-highlighted: #eea444;
  --table-add-button-border-color: #759e93;
  --table-border-color: #759e93;
  --table-drag-handle-background-active: #759e93;
  --table-drag-handle-color: #759e93;
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: #759e93;
  --table-header-color: #15181e;
  --table-selection-border-color: #759e93;
  --tag-color: #eea444;
  --tag-color-hover: #eea444;
  --text-accent: #eea444;
  --text-accent-hover: #c72e6e;
  --text-error: #ab687e;
  --text-error-hover: #ab687e;
  --text-faint: #759e93;
  --text-highlight: #ad3266;
  --text-highlight-bg: #f2bd7746;
  --text-muted: #8c8c8c;
  --text-muted-real: #cccccc;
  --text-nav: #759e93;
  --text-normal: #15181e;
  --text-normal-alt: #3b4252;
  --text-on-accent: #f2f2f2;
  --text-selection: rgba(157, 212, 207, 0.5);
  --text-status-bar: #4a6860;
  --text-title-h1: #c72e6e;
  --text-title-h2: #548a7b;
  --text-title-h3: #95bab0;
  --text-title-h4: #759e93;
  --text-title-h5: #548a7b;
  --text-title-h6: #377362;
  --titlebar-background: #f2f2f2;
  --titlebar-background-focused: #c3d5d0;
  --titlebar-border-color: #759e93;
  --titlebar-text-color: #8c8c8c;
  --titlebar-text-color-focused: #15181e;
  --vault-profile-color: #15181e;
  --vault-profile-color-hover: #15181e;
  --vim-cursor: #4a6860;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 242, 242);
  color: rgb(21, 24, 30);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(242, 242, 242);
  color: rgb(21, 24, 30);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 230, 230);
  color: rgb(21, 24, 30);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 242, 242);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(21, 24, 30);
}

body div#quartz-root {
  background-color: rgb(242, 242, 242);
  color: rgb(21, 24, 30);
}`,
    typography: `body .page article p > b, b {
  color: rgb(199, 46, 110);
  outline: rgb(199, 46, 110) none 0px;
  text-decoration: rgb(199, 46, 110);
  text-decoration-color: rgb(199, 46, 110);
}

body .page article p > em, em {
  color: rgb(117, 158, 147);
  outline: rgb(117, 158, 147) none 0px;
  text-decoration: rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

body .page article p > i, i {
  color: rgb(117, 158, 147);
  outline: rgb(117, 158, 147) none 0px;
  text-decoration: rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

body .page article p > strong, strong {
  color: rgb(199, 46, 110);
  outline: rgb(199, 46, 110) none 0px;
  text-decoration: rgb(199, 46, 110);
  text-decoration-color: rgb(199, 46, 110);
}

body .text-highlight {
  background-color: rgba(242, 189, 119, 0.275);
  color: rgb(21, 24, 30);
  outline: rgb(21, 24, 30) none 0px;
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body del {
  color: rgb(21, 24, 30);
  outline: rgb(21, 24, 30) none 0px;
  text-decoration: line-through rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body p {
  color: rgb(140, 140, 140);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(140, 140, 140) none 0px;
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    links: `body a.external, footer a {
  color: rgb(238, 164, 68);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(238, 164, 68) none 0px;
  text-decoration: rgb(238, 164, 68);
  text-decoration-color: rgb(238, 164, 68);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(238, 164, 68);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(238, 164, 68) none 0px;
  text-decoration: rgb(238, 164, 68);
  text-decoration-color: rgb(238, 164, 68);
}

body a.internal.broken {
  color: rgb(238, 164, 68);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(238, 164, 68) none 0px;
  text-decoration: rgb(238, 164, 68);
  text-decoration-color: rgb(238, 164, 68);
}`,
    lists: `body dd {
  color: rgb(21, 24, 30);
}

body dt {
  color: rgb(21, 24, 30);
}

body ol > li {
  color: rgb(21, 24, 30);
}

body ol.overflow {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body ul > li {
  color: rgb(21, 24, 30);
}

body ul.overflow {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(117, 158, 147);
  text-decoration: rgb(117, 158, 147);
}

body blockquote {
  background-color: rgb(242, 242, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `body .spacer {
  background-color: rgb(242, 242, 242);
}

body .table-container {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body table {
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(21, 24, 30);
}

body th {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(21, 24, 30);
}`,
    code: `body code {
  border-bottom-color: rgb(199, 46, 110);
  border-left-color: rgb(199, 46, 110);
  border-right-color: rgb(199, 46, 110);
  border-top-color: rgb(199, 46, 110);
  color: rgb(199, 46, 110);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(21, 24, 30);
}

body pre > code, pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

body pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}`,
    images: `body audio {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body figcaption {
  color: rgb(21, 24, 30);
}

body figure {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body img {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body video {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}`,
    embeds: `body .file-embed {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
}

body .footnotes {
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

body .transclude {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body .transclude-inner {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body input[type=checkbox] {
  border-bottom-color: rgb(117, 158, 147);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='*'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='-'] {
  color: rgb(117, 158, 147);
  text-decoration: line-through 1px rgb(117, 158, 147);
  text-decoration-color: rgb(117, 158, 147);
}

body li.task-list-item[data-task='/'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='>'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='?'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='I'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='S'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='b'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='c'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='d'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='f'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='i'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='k'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='l'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='p'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='u'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body li.task-list-item[data-task='w'] {
  color: rgb(21, 24, 30);
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(242, 242, 242);
}

body .search > .search-container > .search-space > * {
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(21, 24, 30) none 0px;
  text-decoration: rgb(21, 24, 30);
  text-decoration-color: rgb(21, 24, 30);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(21, 24, 30);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(21, 24, 30);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(195, 213, 208);
  color: rgb(21, 24, 30);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(195, 213, 208);
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(195, 213, 208);
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(195, 213, 208);
  color: rgb(21, 24, 30);
}

body a.internal.tag-link::before {
  color: rgb(238, 164, 68);
}

body h1 {
  color: rgb(199, 46, 110);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2 {
  color: rgb(84, 138, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h3 {
  color: rgb(149, 186, 176);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h4 {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h5 {
  color: rgb(84, 138, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h6 {
  color: rgb(55, 115, 98);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

body ::-webkit-scrollbar-corner {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

body ::-webkit-scrollbar-track {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(117, 158, 147);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(117, 158, 147);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(117, 158, 147);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(21, 24, 30);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(21, 24, 30);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}`,
    footer: `body footer {
  background-color: rgb(195, 213, 208);
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(74, 104, 96);
  border-top-width: 0px;
  color: rgb(74, 104, 96);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body footer ul li a {
  color: rgb(74, 104, 96);
  text-decoration: rgb(74, 104, 96);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(21, 24, 30);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 158, 147);
  text-decoration: rgb(117, 158, 147);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body li.section-li > .section .meta {
  color: rgb(117, 158, 147);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 158, 147);
  text-decoration: rgb(117, 158, 147);
}

body ul.section-ul {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

body .darkmode svg {
  color: rgb(140, 140, 140);
  stroke: rgb(140, 140, 140);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

body .breadcrumb-element p {
  color: rgb(117, 158, 147);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

body .metadata {
  border-bottom-color: rgb(117, 158, 147);
  border-left-color: rgb(117, 158, 147);
  border-right-color: rgb(117, 158, 147);
  border-top-color: rgb(117, 158, 147);
  color: rgb(140, 140, 140);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .navigation-progress {
  background-color: rgb(195, 213, 208);
}

body .page-header h2.page-title {
  color: rgb(21, 24, 30);
}

body abbr {
  color: rgb(21, 24, 30);
  text-decoration: underline dotted rgb(21, 24, 30);
}

body details {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body input[type=text] {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

body kbd {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
  color: rgb(21, 24, 30);
}

body progress {
  border-bottom-color: rgb(21, 24, 30);
  border-left-color: rgb(21, 24, 30);
  border-right-color: rgb(21, 24, 30);
  border-top-color: rgb(21, 24, 30);
}

body sub {
  color: rgb(21, 24, 30);
}

body summary {
  color: rgb(21, 24, 30);
}

body sup {
  color: rgb(21, 24, 30);
}`,
  },
};
