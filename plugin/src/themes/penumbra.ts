import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "penumbra",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 33;
  --accent-l: 96%;
  --accent-s: 100%;
  --background-accent: #BEBEBE;
  --background-modifier-active-hover: rgba(255, 246, 235, 0.1);
  --background-modifier-border: #636363;
  --background-modifier-border-focus: #FFFDFB;
  --background-modifier-border-hover: #FFFDFB;
  --background-modifier-box-shadow: #636363;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error-rgb: #fb464c;
  --background-modifier-form-field: #F2E6D4;
  --background-modifier-form-field-highlighted: #636363;
  --background-modifier-form-field-hover: #F2E6D4;
  --background-modifier-hover: rgba(251, 245, 238, 0.06);
  --background-modifier-message: #24272B;
  --background-modifier-success-rgb: #44cf6e;
  --background-primary: #303338;
  --background-primary-alt: #303338;
  --background-secondary: #24272B;
  --background-secondary-alt: #24272B;
  --bases-cards-background: #303338;
  --bases-cards-cover-background: #303338;
  --bases-cards-shadow: 0 0 0 1px #636363;
  --bases-cards-shadow-hover: 0 0 0 1px #FFFDFB;
  --bases-embed-border-color: #636363;
  --bases-group-heading-property-color: #8F8F8F;
  --bases-table-border-color: #636363;
  --bases-table-cell-background-active: #303338;
  --bases-table-cell-background-disabled: #303338;
  --bases-table-cell-background-selected: rgba(255, 246, 235, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #FFFDFB;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3E4044;
  --bases-table-group-background: #303338;
  --bases-table-header-background: #303338;
  --bases-table-header-background-hover: rgba(251, 245, 238, 0.06);
  --bases-table-header-color: #8F8F8F;
  --bases-table-summary-background: #303338;
  --bases-table-summary-background-hover: rgba(251, 245, 238, 0.06);
  --blockquote-background-color: #24272B;
  --blockquote-border-color: #3EA57B;
  --blockquote-font-style: italic;
  --blue: #6E8DD5;
  --blur-background: color-mix(in srgb, #24272B 65%, transparent) linear-gradient(#24272B, color-mix(in srgb, #24272B 65%, transparent));
  --bold-color: #BEBEBE;
  --bold-weight: 600;
  --callout-title-weight: 600;
  --canvas-background: #303338;
  --canvas-card-label-color: #8F8F8F;
  --canvas-color-1: #CA7081;
  --canvas-color-2: #C27D40;
  --canvas-color-3: #92963A;
  --canvas-color-4: #3EA57B;
  --canvas-color-5: #00A0BA;
  --canvas-color-6: #AC78BD;
  --caret-color: #8F8F8F;
  --checkbox-border-color: #636363;
  --checkbox-border-color-hover: #8F8F8F;
  --checkbox-color: #00A0BA;
  --checkbox-color-hover: #00A0BA;
  --checkbox-marker-color: #303338;
  --checklist-done-color: #636363;
  --code-background: #24272B;
  --code-border-color: #636363;
  --code-bracket-background: rgba(251, 245, 238, 0.06);
  --code-comment: #636363;
  --code-function: #AC78BD;
  --code-important: #CA7081;
  --code-keyword: #AC78BD;
  --code-normal: #8F8F8F;
  --code-operator: #6E8DD5;
  --code-property: #CA7081;
  --code-punctuation: #3EA57B;
  --code-string: #3EA57B;
  --code-tag: #AC78BD;
  --code-value: #C27D40;
  --collapse-icon-color: #636363;
  --collapse-icon-color-collapsed: #00A0BA;
  --color-accent: rgb(255, 246, 235);
  --color-accent-1: hsl(30, 102%, 110.4%);
  --color-accent-2: hsl(28, 105%, 123.84%);
  --color-accent-hsl: 33, 100%, 96%;
  --cyan: #00A0BA;
  --divider-color: transparent;
  --divider-color-hover: #FFFDFB;
  --drag-ghost-background: #24272B;
  --drag-ghost-text-color: #CA7081;
  --dropdown-background: #24272B;
  --dropdown-background-hover: #FFFDFB;
  --embed-block-shadow-hover: 0 0 0 1px #636363, inset 0 0 0 1px #636363;
  --embed-border-start: 2px solid #3E4044;
  --embed-padding: 0 0 0 16px;
  --file-header-background: #303338;
  --file-header-background-focused: #303338;
  --flair-background: #24272B;
  --flair-color: #8F8F8F;
  --footnote-divider-color: #636363;
  --footnote-id-color: #8F8F8F;
  --footnote-id-color-no-occurrences: #636363;
  --footnote-input-background-active: rgba(251, 245, 238, 0.06);
  --graph-line: #636363;
  --graph-node: #CA7081;
  --graph-node-focused: #00A0BA;
  --graph-node-unresolved: #636363;
  --graph-text: #BEBEBE;
  --gray-1: #8F8F8F;
  --gray-2: #636363;
  --green: #3EA57B;
  --h1-color: #BEBEBE;
  --h2-color: #BEBEBE;
  --h3-color: #BEBEBE;
  --h4-color: #BEBEBE;
  --h5-color: #BEBEBE;
  --h6-color: #BEBEBE;
  --heading-formatting: #636363;
  --heading-spacing: 2.5rem;
  --hr-color: #636363;
  --icon-color: #8F8F8F;
  --icon-color-active: #00A0BA;
  --icon-color-focused: #BEBEBE;
  --icon-color-hover: #BEBEBE;
  --inline-title-color: #BEBEBE;
  --inline-title-weight: 600;
  --input-date-separator: #636363;
  --input-placeholder-color: #636363;
  --interactive-accent: #3E4044;
  --interactive-accent-hover: #FFFDFB;
  --interactive-accent-hsl: 33, 100%, 96%;
  --interactive-hover: #FFFDFB;
  --interactive-normal: #24272B;
  --link-color: #6E8DD5;
  --link-color-hover: #6E8DD5;
  --link-decoration: none;
  --link-external-color: #6E8DD5;
  --link-external-color-hover: #6E8DD5;
  --link-external-decoration: none;
  --link-unresolved-color: #00A0BA;
  --link-unresolved-decoration-color: rgba(255, 246, 235, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #8F8F8F;
  --list-marker-color-collapsed: #00A0BA;
  --list-marker-color-hover: #8F8F8F;
  --menu-background: #24272B;
  --menu-border-color: #FFFDFB;
  --metadata-border-color: #636363;
  --metadata-divider-color: #636363;
  --metadata-input-background-active: rgba(251, 245, 238, 0.06);
  --metadata-input-height: 28px;
  --metadata-input-text-color: #8F8F8F;
  --metadata-label-background-active: rgba(251, 245, 238, 0.06);
  --metadata-label-text-color: #8F8F8F;
  --metadata-label-text-color-hover: #8F8F8F;
  --metadata-property-background-active: #CA7081;
  --metadata-property-box-shadow-focus: 0 0 0 2px #FFFDFB;
  --metadata-property-box-shadow-hover: 0 0 0 1px #FFFDFB;
  --modal-background: #303338;
  --modal-border-color: #F2E6D4;
  --nav-collapse-icon-color: #BEBEBE;
  --nav-collapse-icon-color-collapsed: #636363;
  --nav-heading-color: #8F8F8F;
  --nav-heading-color-collapsed: #636363;
  --nav-heading-color-collapsed-hover: #8F8F8F;
  --nav-heading-color-hover: #8F8F8F;
  --nav-item-background-active: #3E4044;
  --nav-item-background-hover: rgba(251, 245, 238, 0.06);
  --nav-item-background-selected: rgba(255, 246, 235, 0.15);
  --nav-item-color: #8F8F8F;
  --nav-item-color-active: #FFFDFB;
  --nav-item-color-highlighted: #00A0BA;
  --nav-item-color-hover: #BEBEBE;
  --nav-item-color-selected: #8F8F8F;
  --nav-tag-color: #636363;
  --nav-tag-color-active: #8F8F8F;
  --nav-tag-color-hover: #8F8F8F;
  --orange: #C27D40;
  --panel-border-color: #F2E6D4;
  --pdf-background: #303338;
  --pdf-page-background: #303338;
  --pdf-shadow: 0 0 0 1px #636363;
  --pdf-sidebar-background: #303338;
  --pdf-thumbnail-shadow: 0 0 0 1px #636363;
  --pill-border-color: #636363;
  --pill-border-color-hover: #FFFDFB;
  --pill-color: #8F8F8F;
  --pill-color-hover: #8F8F8F;
  --pill-color-remove: #636363;
  --pill-color-remove-hover: #00A0BA;
  --prompt-background: #303338;
  --prompt-border-color: #F2E6D4;
  --purple: #AC78BD;
  --raised-background: color-mix(in srgb, #24272B 65%, transparent) linear-gradient(#24272B, color-mix(in srgb, #24272B 65%, transparent));
  --red: #CA7081;
  --ribbon-background: #303338;
  --ribbon-background-collapsed: #303338;
  --scrollbar-active-thumb-bg: #8F8F8F;
  --scrollbar-bg: #303338;
  --scrollbar-thumb-bg: #303338;
  --search-clear-button-color: #8F8F8F;
  --search-icon-color: #8F8F8F;
  --search-result-background: #303338;
  --setting-group-heading-color: #8F8F8F;
  --setting-items-background: #303338;
  --setting-items-border-color: #636363;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #FFFDFB;
  --slider-track-background: #636363;
  --status-bar-background: #24272B;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #8F8F8F;
  --suggestion-background: #303338;
  --tab-background-active: #303338;
  --tab-container-background: #24272B;
  --tab-divider-color: #FFFDFB;
  --tab-outline-color: transparent;
  --tab-switcher-background: #24272B;
  --tab-switcher-menubar-background: linear-gradient(to top, #24272B, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 246, 235);
  --tab-text-color: #636363;
  --tab-text-color-active: #8F8F8F;
  --tab-text-color-focused: #8F8F8F;
  --tab-text-color-focused-active: #8F8F8F;
  --tab-text-color-focused-active-current: #8F8F8F;
  --tab-text-color-focused-highlighted: #00A0BA;
  --table-add-button-border-color: #636363;
  --table-border-color: #636363;
  --table-drag-handle-background-active: #3E4044;
  --table-drag-handle-color: #636363;
  --table-drag-handle-color-active: #FFFDFB;
  --table-header-border-color: #636363;
  --table-header-color: #8F8F8F;
  --table-header-weight: 600;
  --table-selection: rgba(255, 246, 235, 0.1);
  --table-selection-border-color: #3E4044;
  --tag-background: #303338;
  --tag-background-hover: #303338;
  --tag-border-color: rgba(255, 246, 235, 0.15);
  --tag-border-color-hover: rgba(255, 246, 235, 0.15);
  --tag-color: #92963A;
  --tag-color-hover: #92963A;
  --tag-padding-x: 4px;
  --tag-padding-y: 2px;
  --tag-radius: 4px;
  --text-accent: #00A0BA;
  --text-accent-hover: #00A0BA;
  --text-error: #e16d76;
  --text-error-hover: #c9626a;
  --text-faint: #636363;
  --text-highlight-bg: #F2E6D4;
  --text-muted: #8F8F8F;
  --text-normal: #8F8F8F;
  --text-on-accent: #FFFDFB;
  --text-selection: #636363;
  --titlebar-background: #24272B;
  --titlebar-background-focused: #24272B;
  --titlebar-border-color: #636363;
  --titlebar-text-color: #8F8F8F;
  --titlebar-text-color-focused: #8F8F8F;
  --vault-profile-color: #8F8F8F;
  --vault-profile-color-hover: #8F8F8F;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --yellow: #92963A;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 39, 43);
  color: rgb(143, 143, 143);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(48, 51, 56);
  color: rgb(143, 143, 143);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 39, 43);
  color: rgb(143, 143, 143);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 39, 43);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(143, 143, 143);
}

body div#quartz-root {
  background-color: rgb(48, 51, 56);
  color: rgb(143, 143, 143);
}`,
    typography: `body .page article p > b, b {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body .page article p > em, em {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body .page article p > i, i {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body .page article p > strong, strong {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body .text-highlight {
  background-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body del {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: line-through rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body p {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}`,
    links: `body a.external, footer a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration: rgb(110, 141, 213);
  text-decoration-color: rgb(110, 141, 213);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration: rgb(110, 141, 213);
  text-decoration-color: rgb(110, 141, 213);
}

body a.internal.broken {
  color: rgb(0, 160, 186);
  outline: rgb(0, 160, 186) none 0px;
  text-decoration: rgba(255, 246, 235, 0.3);
  text-decoration-color: rgba(255, 246, 235, 0.3);
}`,
    lists: `body dd {
  color: rgb(143, 143, 143);
}

body dt {
  color: rgb(143, 143, 143);
}

body ol > li {
  color: rgb(143, 143, 143);
}

body ol.overflow {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body ul > li {
  color: rgb(143, 143, 143);
}

body ul.overflow {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(99, 99, 99);
  text-decoration: rgb(99, 99, 99);
}

body blockquote {
  background-color: rgb(36, 39, 43);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body table {
  color: rgb(143, 143, 143);
}

body td {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}

body th {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}`,
    code: `body code {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}

body pre > code > [data-line] {
  border-left-color: rgb(146, 150, 58);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(146, 150, 58);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(146, 150, 58);
  border-left-color: rgb(146, 150, 58);
  border-right-color: rgb(146, 150, 58);
  border-top-color: rgb(146, 150, 58);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body figcaption {
  color: rgb(143, 143, 143);
}

body figure {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body img {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body video {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    embeds: `body .file-embed {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body .footnotes {
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .transclude {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(62, 64, 68);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body .transclude-inner {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(62, 64, 68);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(99, 99, 99);
  text-decoration: line-through rgb(99, 99, 99);
  text-decoration-color: rgb(99, 99, 99);
}

body input[type=checkbox] {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
}

body li.task-list-item[data-task='!'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='*'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='-'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='/'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='>'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='?'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='I'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='S'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='b'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='c'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='d'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='f'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='i'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='k'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='l'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='p'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='u'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='w'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}`,
    search: `body .search > .search-button {
  background-color: rgb(242, 230, 212);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
}

body .search > .search-container > .search-space > * {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(251, 245, 238, 0.06);
  color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 39, 43);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(251, 245, 238, 0.06);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(251, 245, 238, 0.06);
  color: rgb(143, 143, 143);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgba(255, 246, 235, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(255, 246, 235, 0.15);
  border-right-color: rgba(255, 246, 235, 0.15);
  border-top-color: rgba(255, 246, 235, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(146, 150, 58);
}

body h1 {
  color: rgb(190, 190, 190);
}

body h2 {
  color: rgb(190, 190, 190);
}

body h2.page-title, h2.page-title a {
  color: rgb(190, 190, 190);
}

body h3 {
  color: rgb(190, 190, 190);
}

body h4 {
  color: rgb(190, 190, 190);
}

body h5 {
  color: rgb(190, 190, 190);
}

body h6 {
  color: rgb(190, 190, 190);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}

body ::-webkit-scrollbar-corner {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}

body ::-webkit-scrollbar-track {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(62, 64, 68);
  border-bottom-color: rgb(255, 253, 251);
  border-left-color: rgb(255, 253, 251);
  border-right-color: rgb(255, 253, 251);
  border-top-color: rgb(255, 253, 251);
  color: rgb(255, 253, 251);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}`,
    footer: `body footer {
  background-color: rgb(36, 39, 43);
  border-bottom-color: rgb(242, 230, 212);
  border-bottom-width: 1px;
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-right-width: 1px;
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

body footer ul li a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(143, 143, 143);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(143, 143, 143);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body li.section-li > .section .meta {
  color: rgb(143, 143, 143);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body ul.section-ul {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .darkmode svg {
  color: rgb(143, 143, 143);
  stroke: rgb(143, 143, 143);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .breadcrumb-element p {
  color: rgb(99, 99, 99);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .metadata {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}

body .metadata-properties {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .navigation-progress {
  background-color: rgb(36, 39, 43);
}

body .page-header h2.page-title {
  color: rgb(143, 143, 143);
}

body abbr {
  color: rgb(143, 143, 143);
  text-decoration: underline dotted rgb(143, 143, 143);
}

body details {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body input[type=text] {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body kbd {
  background-color: rgb(36, 39, 43);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body progress {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body sub {
  color: rgb(143, 143, 143);
}

body summary {
  color: rgb(143, 143, 143);
}

body sup {
  color: rgb(143, 143, 143);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 36;
  --accent-l: 89%;
  --accent-s: 53%;
  --background-accent: #636363;
  --background-modifier-active-hover: rgba(242, 230, 212, 0.1);
  --background-modifier-border: #F2E6D4;
  --background-modifier-border-focus: #24272B;
  --background-modifier-border-hover: #24272B;
  --background-modifier-box-shadow: #FFFDFB;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error-rgb: #e93147;
  --background-modifier-form-field: #FFFDFB;
  --background-modifier-form-field-highlighted: #FFFDFB;
  --background-modifier-form-field-hover: #FFFDFB;
  --background-modifier-message: #F2E6D4;
  --background-modifier-success-rgb: #08b94e;
  --background-primary: #FFF7ED;
  --background-primary-alt: #FFF7ED;
  --background-secondary: #F2E6D4;
  --background-secondary-alt: #F2E6D4;
  --bases-cards-background: #FFF7ED;
  --bases-cards-cover-background: #FFF7ED;
  --bases-cards-shadow: 0 0 0 1px #F2E6D4;
  --bases-cards-shadow-hover: 0 0 0 1px #24272B;
  --bases-embed-border-color: #F2E6D4;
  --bases-group-heading-property-color: #8F8F8F;
  --bases-table-border-color: #F2E6D4;
  --bases-table-cell-background-active: #FFF7ED;
  --bases-table-cell-background-disabled: #FFF7ED;
  --bases-table-cell-background-selected: rgba(242, 230, 212, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #24272B;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FFFDFB;
  --bases-table-group-background: #FFF7ED;
  --bases-table-header-background: #FFF7ED;
  --bases-table-header-color: #8F8F8F;
  --bases-table-summary-background: #FFF7ED;
  --blockquote-background-color: #F2E6D4;
  --blockquote-border-color: #3EA57B;
  --blockquote-font-style: italic;
  --blue: #6E8DD5;
  --blur-background: color-mix(in srgb, #FFF7ED 65%, transparent) linear-gradient(#FFF7ED, color-mix(in srgb, #FFF7ED 65%, transparent));
  --bold-color: #636363;
  --bold-weight: 600;
  --callout-title-weight: 600;
  --canvas-background: #FFF7ED;
  --canvas-card-label-color: #8F8F8F;
  --canvas-color-1: #CA7081;
  --canvas-color-2: #C27D40;
  --canvas-color-3: #92963A;
  --canvas-color-4: #3EA57B;
  --canvas-color-5: #00A0BA;
  --canvas-color-6: #AC78BD;
  --caret-color: #8F8F8F;
  --checkbox-border-color: #BEBEBE;
  --checkbox-border-color-hover: #8F8F8F;
  --checkbox-color: #00A0BA;
  --checkbox-color-hover: #00A0BA;
  --checkbox-marker-color: #FFF7ED;
  --checklist-done-color: #BEBEBE;
  --code-background: #F2E6D4;
  --code-border-color: #F2E6D4;
  --code-comment: #BEBEBE;
  --code-function: #AC78BD;
  --code-important: #CA7081;
  --code-keyword: #AC78BD;
  --code-normal: #8F8F8F;
  --code-operator: #6E8DD5;
  --code-property: #CA7081;
  --code-punctuation: #3EA57B;
  --code-string: #3EA57B;
  --code-tag: #AC78BD;
  --code-value: #C27D40;
  --collapse-icon-color: #BEBEBE;
  --collapse-icon-color-collapsed: #00A0BA;
  --color-accent: rgb(242, 230, 212);
  --color-accent-1: rgb(250, 246, 239);
  --color-accent-2: hsl(33, 54.06%, 102.35%);
  --color-accent-hsl: 36, 53%, 89%;
  --cyan: #00A0BA;
  --divider-color: transparent;
  --divider-color-hover: rgb(233, 220, 200);
  --drag-ghost-background: #F2E6D4;
  --drag-ghost-text-color: #CA7081;
  --dropdown-background: #F2E6D4;
  --dropdown-background-hover: #24272B;
  --embed-block-shadow-hover: 0 0 0 1px #F2E6D4, inset 0 0 0 1px #F2E6D4;
  --embed-border-start: 2px solid #FFFDFB;
  --embed-padding: 0 0 0 16px;
  --file-header-background: #FFF7ED;
  --file-header-background-focused: #FFF7ED;
  --flair-background: #F2E6D4;
  --flair-color: #8F8F8F;
  --footnote-divider-color: #F2E6D4;
  --footnote-id-color: #8F8F8F;
  --footnote-id-color-no-occurrences: #BEBEBE;
  --graph-line: #BEBEBE;
  --graph-node: #CA7081;
  --graph-node-focused: #00A0BA;
  --graph-node-unresolved: #BEBEBE;
  --graph-text: #636363;
  --gray-1: #8F8F8F;
  --gray-2: #636363;
  --green: #3EA57B;
  --h1-color: #636363;
  --h2-color: #636363;
  --h3-color: #636363;
  --h4-color: #636363;
  --h5-color: #636363;
  --h6-color: #636363;
  --heading-formatting: #BEBEBE;
  --heading-spacing: 2.5rem;
  --hr-color: #F2E6D4;
  --icon-color: #8F8F8F;
  --icon-color-active: #00A0BA;
  --icon-color-focused: #636363;
  --icon-color-hover: #636363;
  --inline-title-color: #636363;
  --inline-title-weight: 600;
  --input-date-separator: #BEBEBE;
  --input-placeholder-color: #BEBEBE;
  --interactive-accent: #FFFDFB;
  --interactive-accent-hover: rgb(233, 220, 200);
  --interactive-accent-hsl: 36, 53%, 89%;
  --interactive-hover: #24272B;
  --interactive-normal: #F2E6D4;
  --link-color: #6E8DD5;
  --link-color-hover: #6E8DD5;
  --link-decoration: none;
  --link-external-color: #6E8DD5;
  --link-external-color-hover: #6E8DD5;
  --link-external-decoration: none;
  --link-unresolved-color: #00A0BA;
  --link-unresolved-decoration-color: rgba(242, 230, 212, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #8F8F8F;
  --list-marker-color-collapsed: #00A0BA;
  --list-marker-color-hover: #8F8F8F;
  --menu-background: #F2E6D4;
  --menu-border-color: #24272B;
  --metadata-border-color: #F2E6D4;
  --metadata-divider-color: #F2E6D4;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #8F8F8F;
  --metadata-label-text-color: #8F8F8F;
  --metadata-label-text-color-hover: #8F8F8F;
  --metadata-property-background-active: #CA7081;
  --metadata-property-box-shadow-focus: 0 0 0 2px #24272B;
  --metadata-property-box-shadow-hover: 0 0 0 1px #24272B;
  --modal-background: #FFF7ED;
  --modal-border-color: #BEBEBE;
  --nav-collapse-icon-color: #636363;
  --nav-collapse-icon-color-collapsed: #BEBEBE;
  --nav-heading-color: #8F8F8F;
  --nav-heading-color-collapsed: #BEBEBE;
  --nav-heading-color-collapsed-hover: #8F8F8F;
  --nav-heading-color-hover: #8F8F8F;
  --nav-item-background-active: #FFFDFB;
  --nav-item-background-selected: rgba(242, 230, 212, 0.15);
  --nav-item-color: #8F8F8F;
  --nav-item-color-active: #24272B;
  --nav-item-color-highlighted: #00A0BA;
  --nav-item-color-hover: #636363;
  --nav-item-color-selected: #8F8F8F;
  --nav-tag-color: #BEBEBE;
  --nav-tag-color-active: #8F8F8F;
  --nav-tag-color-hover: #8F8F8F;
  --orange: #C27D40;
  --panel-border-color: #BEBEBE;
  --pdf-background: #FFF7ED;
  --pdf-page-background: #FFF7ED;
  --pdf-sidebar-background: #FFF7ED;
  --pill-border-color: #F2E6D4;
  --pill-border-color-hover: #24272B;
  --pill-color: #8F8F8F;
  --pill-color-hover: #8F8F8F;
  --pill-color-remove: #BEBEBE;
  --pill-color-remove-hover: #00A0BA;
  --prompt-background: #FFF7ED;
  --prompt-border-color: #BEBEBE;
  --purple: #AC78BD;
  --raised-background: color-mix(in srgb, #FFF7ED 65%, transparent) linear-gradient(#FFF7ED, color-mix(in srgb, #FFF7ED 65%, transparent));
  --red: #CA7081;
  --ribbon-background: #FFF7ED;
  --ribbon-background-collapsed: #FFF7ED;
  --scrollbar-active-thumb-bg: #F2E6D4;
  --scrollbar-bg: #F2E6D4;
  --scrollbar-thumb-bg: #F2E6D4;
  --search-clear-button-color: #8F8F8F;
  --search-icon-color: #8F8F8F;
  --search-result-background: #FFF7ED;
  --setting-group-heading-color: #8F8F8F;
  --setting-items-background: #FFF7ED;
  --setting-items-border-color: #F2E6D4;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #24272B;
  --slider-track-background: #F2E6D4;
  --status-bar-background: #F2E6D4;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #8F8F8F;
  --suggestion-background: #FFF7ED;
  --tab-background-active: #FFF7ED;
  --tab-container-background: #F2E6D4;
  --tab-divider-color: #24272B;
  --tab-outline-color: transparent;
  --tab-switcher-background: #F2E6D4;
  --tab-switcher-menubar-background: linear-gradient(to top, #F2E6D4, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(242, 230, 212);
  --tab-text-color: #BEBEBE;
  --tab-text-color-active: #8F8F8F;
  --tab-text-color-focused: #8F8F8F;
  --tab-text-color-focused-active: #8F8F8F;
  --tab-text-color-focused-active-current: #8F8F8F;
  --tab-text-color-focused-highlighted: #00A0BA;
  --table-add-button-border-color: #F2E6D4;
  --table-border-color: #F2E6D4;
  --table-drag-handle-background-active: #FFFDFB;
  --table-drag-handle-color: #BEBEBE;
  --table-drag-handle-color-active: #24272B;
  --table-header-border-color: #F2E6D4;
  --table-header-color: #8F8F8F;
  --table-header-weight: 600;
  --table-selection: rgba(242, 230, 212, 0.1);
  --table-selection-border-color: #FFFDFB;
  --tag-background: #FFF7ED;
  --tag-background-hover: #FFF7ED;
  --tag-border-color: rgba(242, 230, 212, 0.15);
  --tag-border-color-hover: rgba(242, 230, 212, 0.15);
  --tag-color: #92963A;
  --tag-color-hover: #92963A;
  --tag-padding-x: 4px;
  --tag-padding-y: 2px;
  --tag-radius: 4px;
  --text-accent: #00A0BA;
  --text-accent-hover: #00A0BA;
  --text-error: #e75545;
  --text-error-hover: #f86959;
  --text-faint: #BEBEBE;
  --text-highlight-bg: rgba(255, 255, 0, 0.4);
  --text-muted: #8F8F8F;
  --text-normal: #8F8F8F;
  --text-on-accent: #24272B;
  --text-selection: #FFFDFB;
  --titlebar-background: #F2E6D4;
  --titlebar-background-focused: #F2E6D4;
  --titlebar-border-color: #F2E6D4;
  --titlebar-text-color: #8F8F8F;
  --titlebar-text-color-focused: #8F8F8F;
  --vault-profile-color: #8F8F8F;
  --vault-profile-color-hover: #8F8F8F;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --yellow: #92963A;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 247, 237);
  color: rgb(143, 143, 143);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 230, 212);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(143, 143, 143);
}

body div#quartz-root {
  background-color: rgb(255, 247, 237);
  color: rgb(143, 143, 143);
}`,
    typography: `body .page article p > b, b {
  color: rgb(99, 99, 99);
  outline: rgb(99, 99, 99) none 0px;
  text-decoration: rgb(99, 99, 99);
  text-decoration-color: rgb(99, 99, 99);
}

body .page article p > em, em {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body .page article p > i, i {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body .page article p > strong, strong {
  color: rgb(99, 99, 99);
  outline: rgb(99, 99, 99) none 0px;
  text-decoration: rgb(99, 99, 99);
  text-decoration-color: rgb(99, 99, 99);
}

body .text-highlight {
  background-color: rgba(255, 255, 0, 0.4);
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body del {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: line-through rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body p {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}`,
    links: `body a.external, footer a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration: rgb(110, 141, 213);
  text-decoration-color: rgb(110, 141, 213);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration: rgb(110, 141, 213);
  text-decoration-color: rgb(110, 141, 213);
}

body a.internal.broken {
  color: rgb(0, 160, 186);
  outline: rgb(0, 160, 186) none 0px;
  text-decoration: rgba(242, 230, 212, 0.3);
  text-decoration-color: rgba(242, 230, 212, 0.3);
}`,
    lists: `body dd {
  color: rgb(143, 143, 143);
}

body dt {
  color: rgb(143, 143, 143);
}

body ol > li {
  color: rgb(143, 143, 143);
}

body ol.overflow {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body ul > li {
  color: rgb(143, 143, 143);
}

body ul.overflow {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
}

body blockquote {
  background-color: rgb(242, 230, 212);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body table {
  color: rgb(143, 143, 143);
}

body td {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

body th {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}`,
    code: `body code {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

body pre > code > [data-line] {
  border-left-color: rgb(146, 150, 58);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(146, 150, 58);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(146, 150, 58);
  border-left-color: rgb(146, 150, 58);
  border-right-color: rgb(146, 150, 58);
  border-top-color: rgb(146, 150, 58);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body figcaption {
  color: rgb(143, 143, 143);
}

body figure {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body img {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body video {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    embeds: `body .file-embed {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body .footnotes {
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .transclude {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(255, 253, 251);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body .transclude-inner {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(255, 253, 251);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(190, 190, 190);
  text-decoration: line-through rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body input[type=checkbox] {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='!'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='*'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='-'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='/'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='>'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='?'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='I'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='S'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='b'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='c'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='d'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='f'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='i'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='k'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='l'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='p'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='u'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body li.task-list-item[data-task='w'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}`,
    search: `body .search > .search-button {
  background-color: rgb(255, 253, 251);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > * {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(143, 143, 143);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(143, 143, 143);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgba(242, 230, 212, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(242, 230, 212, 0.15);
  border-right-color: rgba(242, 230, 212, 0.15);
  border-top-color: rgba(242, 230, 212, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(146, 150, 58);
}

body h1 {
  color: rgb(99, 99, 99);
}

body h2 {
  color: rgb(99, 99, 99);
}

body h2.page-title, h2.page-title a {
  color: rgb(99, 99, 99);
}

body h3 {
  color: rgb(99, 99, 99);
}

body h4 {
  color: rgb(99, 99, 99);
}

body h5 {
  color: rgb(99, 99, 99);
}

body h6 {
  color: rgb(99, 99, 99);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}

body ::-webkit-scrollbar-corner {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}

body ::-webkit-scrollbar-track {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(255, 253, 251);
  border-bottom-color: rgb(36, 39, 43);
  border-left-color: rgb(36, 39, 43);
  border-right-color: rgb(36, 39, 43);
  border-top-color: rgb(36, 39, 43);
  color: rgb(36, 39, 43);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}`,
    footer: `body footer {
  background-color: rgb(242, 230, 212);
  border-bottom-color: rgb(190, 190, 190);
  border-bottom-width: 1px;
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-right-width: 1px;
  border-top-color: rgb(190, 190, 190);
  color: rgb(143, 143, 143);
}

body footer ul li a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(143, 143, 143);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(143, 143, 143);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body li.section-li > .section .meta {
  color: rgb(143, 143, 143);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

body ul.section-ul {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .darkmode svg {
  color: rgb(143, 143, 143);
  stroke: rgb(143, 143, 143);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .breadcrumb-element p {
  color: rgb(190, 190, 190);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .metadata {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

body .metadata-properties {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body .navigation-progress {
  background-color: rgb(242, 230, 212);
}

body .page-header h2.page-title {
  color: rgb(143, 143, 143);
}

body abbr {
  color: rgb(143, 143, 143);
  text-decoration: underline dotted rgb(143, 143, 143);
}

body details {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body input[type=text] {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body kbd {
  background-color: rgb(242, 230, 212);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

body progress {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

body sub {
  color: rgb(143, 143, 143);
}

body summary {
  color: rgb(143, 143, 143);
}

body sup {
  color: rgb(143, 143, 143);
}`,
  },
};
