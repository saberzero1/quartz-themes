import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pisum", modes: ["dark"], variations: [], fonts: ["monaco"] },
  dark: {
    base: `:root:root {
  --background-accent: #fff;
  --background-modifier-border: #f2e5bc;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-success: #197300;
  --background-primary: #364549;
  --background-primary-alt: #2C383A;
  --background-secondary: #415358;
  --background-secondary-alt: #2C383A;
  --bases-cards-background: #364549;
  --bases-cards-cover-background: #2C383A;
  --bases-cards-shadow: 0 0 0 1px #f2e5bc;
  --bases-embed-border-color: #f2e5bc;
  --bases-group-heading-property-color: #d5c4a1;
  --bases-table-border-color: #f2e5bc;
  --bases-table-cell-background-active: #364549;
  --bases-table-cell-background-disabled: #2C383A;
  --bases-table-cell-shadow-focus: 0 0 0 2px #b57614;
  --bases-table-group-background: #2C383A;
  --bases-table-header-background: #364549;
  --bases-table-header-color: #d5c4a1;
  --bases-table-summary-background: #364549;
  --blockquote-border: #b57614;
  --blockquote-border-color: #b57614;
  --blur-background: color-mix(in srgb, #b57614 65%, transparent) linear-gradient(#b57614, color-mix(in srgb, #b57614 65%, transparent));
  --border-color: #504945;
  --canvas-background: #364549;
  --canvas-card-label-color: #bdae93;
  --caret-color: #fbf1c7;
  --checkbox-border-color: #bdae93;
  --checkbox-border-color-hover: #d5c4a1;
  --checkbox-color: #b57614;
  --checkbox-color-hover: #fe8019;
  --checkbox-marker-color: #364549;
  --checklist-done-color: #d5c4a1;
  --code-background: #2C383A;
  --code-block: #b48ead;
  --code-border-color: #f2e5bc;
  --code-comment: #bdae93;
  --code-normal: #fbf1c7;
  --code-punctuation: #d5c4a1;
  --collapse-icon-color: #bdae93;
  --collapse-icon-color-collapsed: #fe8019;
  --divider-color: #f2e5bc;
  --divider-color-hover: #b57614;
  --dropdown-background: #b57614;
  --dropdown-background-hover: #fe8019;
  --embed-block-shadow-hover: 0 0 0 1px #f2e5bc, inset 0 0 0 1px #f2e5bc;
  --embed-border-start: 2px solid #b57614;
  --file-header-background: #364549;
  --file-header-background-focused: #364549;
  --flair-background: #b57614;
  --flair-color: #fbf1c7;
  --font-family-editor: Avenir, Avenir Next, sans-serif;
  --font-family-preview: Avenir, Avenir Next, sans-serif;
  --font-size-code: 13.5px;
  --font-size-h1: 23px;
  --font-size-h2: 22px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 15px;
  --font-size-side-dock: 13.5px;
  --font-size-side-dock-title: 15px;
  --font-size-status-bar: 12px;
  --footnote-divider-color: #f2e5bc;
  --footnote-id-color: #d5c4a1;
  --footnote-id-color-no-occurrences: #bdae93;
  --graph-node: #d5c4a1;
  --graph-node-focused: #fe8019;
  --graph-node-unresolved: #bdae93;
  --graph-text: #fbf1c7;
  --heading-formatting: #bdae93;
  --hover-bg: rgba(0, 0, 0, 0.5);
  --hr-color: #f2e5bc;
  --icon-color: #d5c4a1;
  --icon-color-active: #fe8019;
  --icon-color-focused: #fbf1c7;
  --icon-color-hover: #d5c4a1;
  --inline-code: #b48ead;
  --input-date-separator: #bdae93;
  --input-placeholder-color: #bdae93;
  --interactive-accent: #b57614;
  --interactive-accent-hover: #fe8019;
  --interactive-accent-rgb: 123, 108, 217;
  --interactive-hover: #fe8019;
  --interactive-normal: #b57614;
  --link-color: #fe8019;
  --link-color-hover: #83a598;
  --link-external-color: #fe8019;
  --link-external-color-hover: #83a598;
  --link-unresolved-color: #fe8019;
  --list-marker-color: #bdae93;
  --list-marker-color-collapsed: #fe8019;
  --list-marker-color-hover: #d5c4a1;
  --menu-background: #415358;
  --metadata-border-color: #f2e5bc;
  --metadata-divider-color: #f2e5bc;
  --metadata-input-text-color: #fbf1c7;
  --metadata-label-text-color: #d5c4a1;
  --metadata-label-text-color-hover: #d5c4a1;
  --modal-background: #364549;
  --nav-collapse-icon-color: #bdae93;
  --nav-collapse-icon-color-collapsed: #bdae93;
  --nav-heading-color: #fbf1c7;
  --nav-heading-color-collapsed: #bdae93;
  --nav-heading-color-collapsed-hover: #d5c4a1;
  --nav-heading-color-hover: #fbf1c7;
  --nav-item-color: #d5c4a1;
  --nav-item-color-active: #fbf1c7;
  --nav-item-color-highlighted: #fe8019;
  --nav-item-color-hover: #fbf1c7;
  --nav-item-color-selected: #fbf1c7;
  --nav-tag-color: #bdae93;
  --nav-tag-color-active: #d5c4a1;
  --nav-tag-color-hover: #d5c4a1;
  --pdf-background: #364549;
  --pdf-page-background: #364549;
  --pdf-shadow: 0 0 0 1px #f2e5bc;
  --pdf-sidebar-background: #364549;
  --pdf-thumbnail-shadow: 0 0 0 1px #f2e5bc;
  --pill-border-color: #f2e5bc;
  --pill-color: #d5c4a1;
  --pill-color-hover: #fbf1c7;
  --pill-color-remove: #bdae93;
  --pill-color-remove-hover: #fe8019;
  --pre-code-bg: rgba(0, 0, 0, 0.2);
  --prompt-background: #364549;
  --raised-background: color-mix(in srgb, #b57614 65%, transparent) linear-gradient(#b57614, color-mix(in srgb, #b57614 65%, transparent));
  --ribbon-background: #415358;
  --ribbon-background-collapsed: #364549;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.4);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.2);
  --search-clear-button-color: #d5c4a1;
  --search-icon-color: #d5c4a1;
  --search-result-background: #364549;
  --setting-group-heading-color: #fbf1c7;
  --setting-items-background: #2C383A;
  --setting-items-border-color: #f2e5bc;
  --slider-track-background: #f2e5bc;
  --status-bar-background: #415358;
  --status-bar-border-color: #f2e5bc;
  --status-bar-text-color: #d5c4a1;
  --suggestion-background: #364549;
  --tab-background-active: #364549;
  --tab-container-background: #415358;
  --tab-outline-color: #f2e5bc;
  --tab-switcher-background: #415358;
  --tab-switcher-menubar-background: linear-gradient(to top, #415358, transparent);
  --tab-text-color: #bdae93;
  --tab-text-color-active: #d5c4a1;
  --tab-text-color-focused: #d5c4a1;
  --tab-text-color-focused-active: #d5c4a1;
  --tab-text-color-focused-active-current: #fbf1c7;
  --tab-text-color-focused-highlighted: #fe8019;
  --table-add-button-border-color: #f2e5bc;
  --table-border-color: #f2e5bc;
  --table-drag-handle-background-active: #b57614;
  --table-drag-handle-color: #bdae93;
  --table-drag-handle-color-active: #fbf1c7;
  --table-header-border-color: #f2e5bc;
  --table-header-color: #fbf1c7;
  --table-selection-border-color: #b57614;
  --tag-color: #fe8019;
  --tag-color-hover: #fe8019;
  --text-accent: #fe8019;
  --text-accent-hover: #83a598;
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: #bdae93;
  --text-highlight-bg: rgba(181, 118, 20, 0.5);
  --text-muted: #d5c4a1;
  --text-normal: #fbf1c7;
  --text-on-accent: #fbf1c7;
  --text-selection: rgba(89, 75, 95, 0.99);
  --text-title-h1: #d65d0e;
  --text-title-h2: #d79921;
  --text-title-h3: #98971a;
  --text-title-h4: #689d6a;
  --text-title-h5: #458588;
  --text-title-h6: #b16286;
  --titlebar-background: #415358;
  --titlebar-background-focused: #2C383A;
  --titlebar-border-color: #f2e5bc;
  --titlebar-text-color: #d5c4a1;
  --titlebar-text-color-focused: #fbf1c7;
  --vault-profile-color: #fbf1c7;
  --vault-profile-color-hover: #fbf1c7;
  --vim-cursor: #d65d0e;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(65, 83, 88);
  color: rgb(251, 241, 199);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(54, 69, 73);
  color: rgb(251, 241, 199);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(65, 83, 88);
  color: rgb(251, 241, 199);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(242, 229, 188);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(65, 83, 88);
  border-left-color: rgb(242, 229, 188);
  color: rgb(251, 241, 199);
}

body div#quartz-root {
  background-color: rgb(54, 69, 73);
  color: rgb(251, 241, 199);
}`,
    typography: `body .page article p > b, b {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body .page article p > em, em {
  color: rgb(213, 196, 161);
  outline: rgb(213, 196, 161) none 0px;
  text-decoration: rgb(213, 196, 161);
  text-decoration-color: rgb(213, 196, 161);
}

body .page article p > i, i {
  color: rgb(213, 196, 161);
  outline: rgb(213, 196, 161) none 0px;
  text-decoration: rgb(213, 196, 161);
  text-decoration-color: rgb(213, 196, 161);
}

body .page article p > strong, strong {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body .text-highlight {
  background-color: rgba(181, 118, 20, 0.5);
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body del {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration: line-through rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body p {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(213, 196, 161) none 0px;
  text-decoration: rgb(213, 196, 161);
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `body a.external, footer a {
  color: rgb(254, 128, 25);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(254, 128, 25) none 0px;
  text-decoration: rgb(254, 128, 25);
  text-decoration-color: rgb(254, 128, 25);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(254, 128, 25);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(254, 128, 25) none 0px;
  text-decoration: rgb(254, 128, 25);
  text-decoration-color: rgb(254, 128, 25);
}

body a.internal.broken {
  color: rgb(254, 128, 25);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(254, 128, 25) none 0px;
  text-decoration: rgb(254, 128, 25);
  text-decoration-color: rgb(254, 128, 25);
}`,
    lists: `body dd {
  color: rgb(251, 241, 199);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(251, 241, 199);
}

body ol > li {
  color: rgb(251, 241, 199);
}

body ol.overflow {
  background-color: rgb(54, 69, 73);
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body ul > li {
  color: rgb(251, 241, 199);
}

body ul.overflow {
  background-color: rgb(54, 69, 73);
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(189, 174, 147);
  text-decoration: rgb(189, 174, 147);
}

body blockquote {
  background-color: rgba(0, 0, 0, 0.2);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body table {
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(251, 241, 199);
}

body th {
  background-color: rgb(65, 83, 88);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(251, 241, 199);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(242, 229, 188);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(242, 229, 188);
}`,
    code: `body code {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
  color: rgb(189, 174, 147);
  font-family: monaco;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(189, 174, 147);
}

body pre > code > [data-line] {
  border-left-color: rgb(221, 74, 104);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(221, 74, 104);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(221, 74, 104);
  border-left-color: rgb(221, 74, 104);
  border-right-color: rgb(221, 74, 104);
  border-top-color: rgb(221, 74, 104);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body figcaption {
  color: rgb(251, 241, 199);
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body video {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    embeds: `body .file-embed {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

body .footnotes {
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

body .transclude {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(181, 118, 20);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body .transclude-inner {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(181, 118, 20);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(213, 196, 161);
  text-decoration: line-through rgb(213, 196, 161);
  text-decoration-color: rgb(213, 196, 161);
}

body input[type=checkbox] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='*'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='-'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='/'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='>'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='?'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='I'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='S'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='b'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='c'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='d'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='f'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='i'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='k'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='l'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='p'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='u'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='w'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(54, 69, 73);
}

body .search > .search-container > .search-space > * {
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(251, 241, 199) none 0px;
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(65, 83, 88);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(251, 241, 199);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body a.internal.tag-link::before {
  color: rgb(254, 128, 25);
}

body h1 {
  color: rgb(214, 93, 14);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2 {
  color: rgb(215, 153, 33);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h3 {
  color: rgb(152, 151, 26);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h4 {
  color: rgb(104, 157, 106);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h5 {
  color: rgb(69, 133, 136);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h6 {
  color: rgb(177, 98, 134);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body hr {
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}

body ::-webkit-scrollbar-corner {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}

body ::-webkit-scrollbar-track {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(213, 196, 161);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(213, 196, 161);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(213, 196, 161);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(251, 241, 199);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(251, 241, 199);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}`,
    footer: `body footer {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(213, 196, 161);
  border-top-width: 0px;
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body footer ul li a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body ul.section-ul {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

body .darkmode svg {
  color: rgb(213, 196, 161);
  stroke: rgb(213, 196, 161);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

body .breadcrumb-element p {
  color: rgb(189, 174, 147);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

body .metadata {
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .navigation-progress {
  background-color: rgb(44, 56, 58);
}

body .page-header h2.page-title {
  color: rgb(251, 241, 199);
}

body abbr {
  color: rgb(251, 241, 199);
  text-decoration: underline dotted rgb(251, 241, 199);
}

body details {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body input[type=text] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

body kbd {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body sub {
  color: rgb(251, 241, 199);
  font-size: 12.5px;
}

body summary {
  color: rgb(251, 241, 199);
}

body sup {
  color: rgb(251, 241, 199);
  font-size: 12.5px;
}`,
  },
  light: {},
};
