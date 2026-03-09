import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "onenice",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 75;
  --accent-l: 48%;
  --accent-s: 26%;
  --aqua: #48b0bd;
  --background-accent: #000;
  --background-modifier-active-hover: rgba(138, 154, 91, 0.1);
  --background-modifier-border: #7a818e;
  --background-modifier-border-focus: #e5556197;
  --background-modifier-border-hover: #e5556197;
  --background-modifier-box-shadow: #0000004d;
  --background-modifier-cover: #00000099;
  --background-modifier-error: #e55561;
  --background-modifier-error-hover: #e55561;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: #0000004d;
  --background-modifier-form-field-highlighted: #00000038;
  --background-modifier-form-field-hover: #0000004d;
  --background-modifier-hover: hsla(75, -9%, 48%, 0.06);
  --background-modifier-message: #a0a1a7;
  --background-modifier-success: #8ebd6b;
  --background-primary: #1f2329;
  --background-primary-alt: #181b20;
  --background-secondary: #181b20;
  --background-secondary-alt: #181b20;
  --bases-cards-background: #1f2329;
  --bases-cards-cover-background: #181b20;
  --bases-cards-shadow: 0 0 0 1px #7a818e;
  --bases-cards-shadow-hover: 0 0 0 1px #e5556197;
  --bases-embed-border-color: #7a818e;
  --bases-group-heading-property-color: #a9abac;
  --bases-table-border-color: #7a818e;
  --bases-table-cell-background-active: #1f2329;
  --bases-table-cell-background-disabled: #181b20;
  --bases-table-cell-background-selected: rgba(138, 154, 91, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #e5556197;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 154, 91);
  --bases-table-group-background: #181b20;
  --bases-table-header-background: #1f2329;
  --bases-table-header-background-hover: hsla(75, -9%, 48%, 0.06);
  --bases-table-header-color: #a9abac;
  --bases-table-summary-background: #1f2329;
  --bases-table-summary-background-hover: hsla(75, -9%, 48%, 0.06);
  --blockquote-border-color: rgb(138, 154, 91);
  --blue: #4fa6ed;
  --blur-background: color-mix(in srgb, #1f2329 65%, transparent) linear-gradient(#1f2329, color-mix(in srgb, #1f2329 65%, transparent));
  --canvas-background: #1f2329;
  --canvas-card-label-color: #535965;
  --caret-color: #dcddde;
  --checkbox-border-color: #535965;
  --checkbox-border-color-hover: #a9abac;
  --checkbox-color: #8ebd6b;
  --checkbox-color-hover: #bf68d9;
  --checkbox-marker-color: #1f2329;
  --checklist-done-color: #a9abac;
  --code-background: #181b20;
  --code-border-color: #7a818e;
  --code-bracket-background: hsla(75, -9%, 48%, 0.06);
  --code-comment: #535965;
  --code-normal: #dcddde;
  --code-punctuation: #a9abac;
  --collapse-icon-color: #535965;
  --collapse-icon-color-collapsed: #61afef;
  --color-accent: rgb(138, 154, 91);
  --color-accent-1: rgb(159, 171, 109);
  --color-accent-2: rgb(176, 184, 132);
  --color-accent-hsl: 75, 26%, 48%;
  --divider-color: transparent;
  --divider-color-hover: #4fa6ed;
  --drag-ghost-background: #181b20;
  --dropdown-background: #1f2329;
  --dropdown-background-hover: #e5556197;
  --embed-block-shadow-hover: 0 0 0 1px #7a818e, inset 0 0 0 1px #7a818e;
  --embed-border-start: 2px solid rgb(138, 154, 91);
  --embed-padding: 0 0 0 16px;
  --file-header-background: #1f2329;
  --file-header-background-focused: #1f2329;
  --flair-background: #1f2329;
  --flair-color: #dcddde;
  --footnote-divider-color: #7a818e;
  --footnote-id-color: #a9abac;
  --footnote-id-color-no-occurrences: #535965;
  --footnote-input-background-active: hsla(75, -9%, 48%, 0.06);
  --graph-node: #a9abac;
  --graph-node-focused: #61afef;
  --graph-node-unresolved: #535965;
  --graph-text: #dcddde;
  --gray-1: #7a818e;
  --gray-2: #7a818e;
  --green: #8ebd6b;
  --heading-formatting: #535965;
  --hr-color: #7a818e;
  --icon-color: #a9abac;
  --icon-color-active: #61afef;
  --icon-color-focused: #dcddde;
  --icon-color-hover: #a9abac;
  --inline-title-weight: 600;
  --input-date-separator: #535965;
  --input-placeholder-color: #535965;
  --interactive-accent: rgb(138, 154, 91);
  --interactive-accent-hover: rgb(112, 127, 67);
  --interactive-accent-hsl: 75, 26%, 48%;
  --interactive-hover: #e5556197;
  --interactive-normal: #1f2329;
  --link-color: #61afef;
  --link-color-hover: #e55561;
  --link-decoration: none;
  --link-external-color: #61afef;
  --link-external-color-hover: #e55561;
  --link-external-decoration: none;
  --link-unresolved-color: #61afef;
  --link-unresolved-decoration-color: rgba(138, 154, 91, 0.3);
  --list-marker-color: #535965;
  --list-marker-color-collapsed: #61afef;
  --list-marker-color-hover: #a9abac;
  --menu-background: #181b20;
  --menu-border-color: #e5556197;
  --metadata-border-color: #7a818e;
  --metadata-divider-color: #7a818e;
  --metadata-input-background-active: hsla(75, -9%, 48%, 0.06);
  --metadata-input-text-color: #dcddde;
  --metadata-label-background-active: hsla(75, -9%, 48%, 0.06);
  --metadata-label-text-color: #a9abac;
  --metadata-label-text-color-hover: #a9abac;
  --metadata-property-background-active: hsla(75, -9%, 48%, 0.06);
  --metadata-property-box-shadow-focus: 0 0 0 2px #e5556197;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e5556197;
  --modal-background: #1f2329;
  --modal-border-color: #8ebd6b;
  --nav-collapse-icon-color: #535965;
  --nav-collapse-icon-color-collapsed: #535965;
  --nav-heading-color: #dcddde;
  --nav-heading-color-collapsed: #535965;
  --nav-heading-color-collapsed-hover: #a9abac;
  --nav-heading-color-hover: #dcddde;
  --nav-item-background-active: #4fa6ed;
  --nav-item-background-hover: hsla(75, -9%, 48%, 0.06);
  --nav-item-background-selected: rgba(138, 154, 91, 0.15);
  --nav-item-color: #a9abac;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #61afef;
  --nav-item-color-hover: #dcddde;
  --nav-item-color-selected: #dcddde;
  --nav-tag-color: #535965;
  --nav-tag-color-active: #a9abac;
  --nav-tag-color-hover: #a9abac;
  --orange: #cc9057;
  --panel-border-color: #535965;
  --pdf-background: #1f2329;
  --pdf-page-background: #1f2329;
  --pdf-shadow: 0 0 0 1px #7a818e;
  --pdf-sidebar-background: #1f2329;
  --pdf-thumbnail-shadow: 0 0 0 1px #7a818e;
  --pill-border-color: #7a818e;
  --pill-border-color-hover: #e5556197;
  --pill-color: #a9abac;
  --pill-color-hover: #dcddde;
  --pill-color-remove: #535965;
  --pill-color-remove-hover: #61afef;
  --prompt-background: #1f2329;
  --prompt-border-color: #8ebd6b;
  --purple: #bf68d9;
  --raised-background: color-mix(in srgb, #1f2329 65%, transparent) linear-gradient(#1f2329, color-mix(in srgb, #1f2329 65%, transparent));
  --red: #e55561;
  --ribbon-background: #181b20;
  --ribbon-background-collapsed: #1f2329;
  --scrollbar-active-thumb-bg: #4fa6ed;
  --scrollbar-bg: #ffffff0d;
  --scrollbar-thumb-bg: #20242f;
  --search-clear-button-color: #a9abac;
  --search-icon-color: #a9abac;
  --search-result-background: #1f2329;
  --setting-group-heading-color: #dcddde;
  --setting-items-background: #181b20;
  --setting-items-border-color: #7a818e;
  --slider-thumb-border-color: #e5556197;
  --slider-track-background: #7a818e;
  --status-bar-background: #181b20;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #a9abac;
  --suggestion-background: #1f2329;
  --tab-background-active: #1f2329;
  --tab-container-background: #181b20;
  --tab-divider-color: #e5556197;
  --tab-outline-color: transparent;
  --tab-switcher-background: #181b20;
  --tab-switcher-menubar-background: linear-gradient(to top, #181b20, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 154, 91);
  --tab-text-color: #535965;
  --tab-text-color-active: #a9abac;
  --tab-text-color-focused: #a9abac;
  --tab-text-color-focused-active: #a9abac;
  --tab-text-color-focused-active-current: #dcddde;
  --tab-text-color-focused-highlighted: #61afef;
  --table-add-button-border-color: #7a818e;
  --table-border-color: #7a818e;
  --table-drag-handle-background-active: rgb(138, 154, 91);
  --table-drag-handle-color: #535965;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #7a818e;
  --table-header-color: #dcddde;
  --table-selection: rgba(138, 154, 91, 0.1);
  --table-selection-border-color: rgb(138, 154, 91);
  --tag-background: #181b20;
  --tag-background-hover: #8ebd6b;
  --tag-border-color: rgba(138, 154, 91, 0.15);
  --tag-border-color-hover: rgba(138, 154, 91, 0.15);
  --tag-color: #bf68d9;
  --tag-color-hover: #bf68d9;
  --tag-padding-x: 5px;
  --tag-padding-y: 5px;
  --tag-radius: 40px;
  --text-accent: #61afef;
  --text-accent-hover: #e55561;
  --text-error: #e16d76;
  --text-error-hover: #c9626a;
  --text-faint: #535965;
  --text-highlight-bg: #8a9a5b;
  --text-muted: #a9abac;
  --text-normal: #dcddde;
  --text-on-accent: #dcddde;
  --text-selection: #ffffff1a;
  --text-title-h1: #e55561;
  --text-title-h2: #8ebd6b;
  --text-title-h3: #cc9057;
  --text-title-h4: #48b0bd;
  --text-title-h5: #bf68d9;
  --text-title-h6: #7a818e;
  --titlebar-background: #181b20;
  --titlebar-background-focused: #181b20;
  --titlebar-border-color: #7a818e;
  --titlebar-text-color: #a9abac;
  --titlebar-text-color-focused: #dcddde;
  --vault-profile-color: #dcddde;
  --vault-profile-color-hover: #dcddde;
  --yellow: #e5c07b;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 27, 32);
  color: rgb(220, 221, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(31, 35, 41);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 27, 32);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 27, 32);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(220, 221, 222);
}

body div#quartz-root {
  background-color: rgb(31, 35, 41);
  color: rgb(220, 221, 222);
}`,
    typography: `body .page article p > b, b {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration: rgb(142, 189, 107);
  text-decoration-color: rgb(142, 189, 107);
}

body .page article p > em, em {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration: rgb(229, 85, 97);
  text-decoration-color: rgb(229, 85, 97);
}

body .page article p > i, i {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration: rgb(229, 85, 97);
  text-decoration-color: rgb(229, 85, 97);
}

body .page article p > strong, strong {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration: rgb(142, 189, 107);
  text-decoration-color: rgb(142, 189, 107);
}

body .text-highlight {
  background-color: rgb(138, 154, 91);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: line-through rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body p {
  color: rgb(169, 171, 172);
  outline: rgb(169, 171, 172) none 0px;
  text-decoration: rgb(169, 171, 172);
  text-decoration-color: rgb(169, 171, 172);
}`,
    links: `body a.external, footer a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

body a.internal.broken {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgba(138, 154, 91, 0.3);
  text-decoration-color: rgba(138, 154, 91, 0.3);
}`,
    lists: `body dd {
  color: rgb(220, 221, 222);
}

body dt {
  color: rgb(220, 221, 222);
}

body ol > li {
  color: rgb(220, 221, 222);
}

body ol.overflow {
  background-color: rgb(31, 35, 41);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ul > li {
  color: rgb(220, 221, 222);
}

body ul.overflow {
  background-color: rgb(31, 35, 41);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(83, 89, 101);
  text-decoration: rgb(83, 89, 101);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body table {
  color: rgb(220, 221, 222);
  margin-left: 222.391px;
  margin-right: 222.391px;
  margin-top: 0px;
}

body td {
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

body th {
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}`,
    code: `body code {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

body pre > code, pre:has(> code) {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body figcaption {
  color: rgb(220, 221, 222);
}

body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `body .file-embed {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
}

body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(138, 154, 91);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(138, 154, 91);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `body .katex-display > .katex {
  text-align: left;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(169, 171, 172);
  text-decoration: line-through rgb(169, 171, 172);
  text-decoration-color: rgb(169, 171, 172);
}

body input[type=checkbox] {
  border-bottom-color: rgb(83, 89, 101);
  border-left-color: rgb(83, 89, 101);
  border-right-color: rgb(83, 89, 101);
  border-top-color: rgb(83, 89, 101);
}

body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space {
  background-color: rgb(31, 35, 41);
  border-bottom-color: rgb(142, 189, 107);
  border-left-color: rgb(142, 189, 107);
  border-right-color: rgb(142, 189, 107);
  border-top-color: rgb(142, 189, 107);
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(122, 122, 122, 0.06);
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(142, 189, 107);
  border-left-color: rgb(142, 189, 107);
  border-right-color: rgb(142, 189, 107);
  border-top-color: rgb(142, 189, 107);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 27, 32);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(122, 122, 122, 0.06);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(122, 122, 122, 0.06);
  color: rgb(220, 221, 222);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

body a.internal.tag-link::before {
  color: rgb(191, 104, 217);
}

body h1 {
  color: rgb(229, 85, 97);
}

body h2 {
  color: rgb(142, 189, 107);
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 221, 222);
}

body h3 {
  color: rgb(204, 144, 87);
}

body h4 {
  color: rgb(72, 176, 189);
}

body h5 {
  color: rgb(191, 104, 217);
}

body h6 {
  color: rgb(122, 129, 142);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}

body ::-webkit-scrollbar-corner {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}

body ::-webkit-scrollbar-track {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 171, 172);
  text-decoration: rgb(169, 171, 172);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 171, 172);
  text-decoration: rgb(169, 171, 172);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(169, 171, 172);
  text-decoration: rgb(169, 171, 172);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(79, 166, 237);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}`,
    footer: `body footer {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(83, 89, 101);
  border-bottom-width: 1px;
  border-left-color: rgb(83, 89, 101);
  border-right-color: rgb(83, 89, 101);
  border-right-width: 1px;
  border-top-color: rgb(83, 89, 101);
  color: rgb(169, 171, 172);
}

body footer ul li a {
  color: rgb(169, 171, 172);
  text-decoration: rgb(169, 171, 172);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 221, 222);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 171, 172);
  text-decoration: rgb(169, 171, 172);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 171, 172);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body li.section-li > .section .meta {
  color: rgb(169, 171, 172);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 171, 172);
  text-decoration: rgb(169, 171, 172);
}

body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

body .darkmode svg {
  color: rgb(169, 171, 172);
  stroke: rgb(169, 171, 172);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

body .breadcrumb-element p {
  color: rgb(83, 89, 101);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .metadata {
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(169, 171, 172);
}

body .metadata-properties {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

body .navigation-progress {
  background-color: rgb(24, 27, 32);
}

body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

body abbr {
  color: rgb(220, 221, 222);
  text-decoration: underline dotted rgb(220, 221, 222);
}

body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body input[type=text] {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

body kbd {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body sub {
  color: rgb(220, 221, 222);
}

body summary {
  color: rgb(220, 221, 222);
}

body sup {
  color: rgb(220, 221, 222);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 75;
  --accent-l: 48%;
  --accent-s: 26%;
  --aqua: #0184bc;
  --background-accent: #fff;
  --background-modifier-active-hover: rgba(138, 154, 91, 0.1);
  --background-modifier-border: #a0a1a7;
  --background-modifier-border-focus: #e5556197;
  --background-modifier-border-hover: #e5556197;
  --background-modifier-box-shadow: #0000001a;
  --background-modifier-cover: #000000cc;
  --background-modifier-error: #e45649;
  --background-modifier-error-hover: #e45649;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #a0a1a7;
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: #a0a1a7;
  --background-modifier-message: #a0a1a7;
  --background-modifier-success: #50a14f;
  --background-primary: #e6e6e6;
  --background-primary-alt: #e1e1e1;
  --background-secondary: #dcdcdc;
  --background-secondary-alt: #dcdcdc;
  --bases-cards-background: #e6e6e6;
  --bases-cards-cover-background: #e1e1e1;
  --bases-cards-shadow: 0 0 0 1px #a0a1a7;
  --bases-cards-shadow-hover: 0 0 0 1px #e5556197;
  --bases-embed-border-color: #a0a1a7;
  --bases-group-heading-property-color: #2d2f30;
  --bases-table-border-color: #a0a1a7;
  --bases-table-cell-background-active: #e6e6e6;
  --bases-table-cell-background-disabled: #e1e1e1;
  --bases-table-cell-background-selected: rgba(138, 154, 91, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #e5556197;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(150, 164, 101);
  --bases-table-group-background: #e1e1e1;
  --bases-table-header-background: #e6e6e6;
  --bases-table-header-color: #2d2f30;
  --bases-table-summary-background: #e6e6e6;
  --blockquote-border-color: rgb(150, 164, 101);
  --blue: #4078f2;
  --blur-background: color-mix(in srgb, #e6e6e6 65%, transparent) linear-gradient(#e6e6e6, color-mix(in srgb, #e6e6e6 65%, transparent));
  --canvas-background: #e6e6e6;
  --canvas-card-label-color: #101012;
  --caret-color: #383a42;
  --checkbox-border-color: #101012;
  --checkbox-border-color-hover: #2d2f30;
  --checkbox-color: #50a14f;
  --checkbox-color-hover: #a626a4;
  --checkbox-marker-color: #e6e6e6;
  --checklist-done-color: #2d2f30;
  --code-background: #e1e1e1;
  --code-border-color: #a0a1a7;
  --code-comment: #101012;
  --code-normal: #383a42;
  --code-punctuation: #2d2f30;
  --collapse-icon-color: #101012;
  --collapse-icon-color-collapsed: #4078f2;
  --color-accent: rgb(138, 154, 91);
  --color-accent-1: rgb(150, 164, 101);
  --color-accent-2: rgb(159, 171, 109);
  --color-accent-hsl: 75, 26%, 48%;
  --divider-color: transparent;
  --divider-color-hover: #4fa6ed;
  --drag-ghost-background: #dcdcdc;
  --dropdown-background: #fafafa;
  --dropdown-background-hover: #e5556197;
  --embed-block-shadow-hover: 0 0 0 1px #a0a1a7, inset 0 0 0 1px #a0a1a7;
  --embed-border-start: 2px solid rgb(150, 164, 101);
  --embed-padding: 0 0 0 16px;
  --file-header-background: #e6e6e6;
  --file-header-background-focused: #e6e6e6;
  --flair-background: #fafafa;
  --flair-color: #383a42;
  --footnote-divider-color: #a0a1a7;
  --footnote-id-color: #2d2f30;
  --footnote-id-color-no-occurrences: #101012;
  --graph-node: #2d2f30;
  --graph-node-focused: #4078f2;
  --graph-node-unresolved: #101012;
  --graph-text: #383a42;
  --gray-1: #a0a1a7;
  --gray-2: #a0a1a7;
  --green: #50a14f;
  --heading-formatting: #101012;
  --hr-color: #a0a1a7;
  --icon-color: #2d2f30;
  --icon-color-active: #4078f2;
  --icon-color-focused: #383a42;
  --icon-color-hover: #2d2f30;
  --inline-title-weight: 600;
  --input-date-separator: #101012;
  --input-placeholder-color: #101012;
  --interactive-accent: rgb(150, 164, 101);
  --interactive-accent-hover: rgb(121, 130, 94);
  --interactive-accent-hsl: 75, 26%, 48%;
  --interactive-accent-rgb: 21, 146, 255;
  --interactive-hover: #e5556197;
  --interactive-normal: #fafafa;
  --link-color: #4078f2;
  --link-color-hover: #e45649;
  --link-decoration: none;
  --link-external-color: #4078f2;
  --link-external-color-hover: #e45649;
  --link-external-decoration: none;
  --link-unresolved-color: #4078f2;
  --link-unresolved-decoration-color: rgba(138, 154, 91, 0.3);
  --list-marker-color: #101012;
  --list-marker-color-collapsed: #4078f2;
  --list-marker-color-hover: #2d2f30;
  --menu-background: #dcdcdc;
  --menu-border-color: #e5556197;
  --metadata-border-color: #a0a1a7;
  --metadata-divider-color: #a0a1a7;
  --metadata-input-text-color: #383a42;
  --metadata-label-text-color: #2d2f30;
  --metadata-label-text-color-hover: #2d2f30;
  --metadata-property-box-shadow-focus: 0 0 0 2px #e5556197;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e5556197;
  --modal-background: #e6e6e6;
  --modal-border-color: #50a14f;
  --nav-collapse-icon-color: #101012;
  --nav-collapse-icon-color-collapsed: #101012;
  --nav-heading-color: #383a42;
  --nav-heading-color-collapsed: #101012;
  --nav-heading-color-collapsed-hover: #2d2f30;
  --nav-heading-color-hover: #383a42;
  --nav-item-background-active: #4fa6ed;
  --nav-item-background-selected: rgba(138, 154, 91, 0.15);
  --nav-item-color: #2d2f30;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #4078f2;
  --nav-item-color-hover: #383a42;
  --nav-item-color-selected: #383a42;
  --nav-tag-color: #101012;
  --nav-tag-color-active: #2d2f30;
  --nav-tag-color-hover: #2d2f30;
  --orange: #c18401;
  --panel-border-color: #383a42;
  --pdf-background: #e6e6e6;
  --pdf-page-background: #e6e6e6;
  --pdf-sidebar-background: #e6e6e6;
  --pill-border-color: #a0a1a7;
  --pill-border-color-hover: #e5556197;
  --pill-color: #2d2f30;
  --pill-color-hover: #383a42;
  --pill-color-remove: #101012;
  --pill-color-remove-hover: #4078f2;
  --prompt-background: #e6e6e6;
  --prompt-border-color: #50a14f;
  --purple: #a626a4;
  --raised-background: color-mix(in srgb, #e6e6e6 65%, transparent) linear-gradient(#e6e6e6, color-mix(in srgb, #e6e6e6 65%, transparent));
  --red: #e45649;
  --ribbon-background: #dcdcdc;
  --ribbon-background-collapsed: #e6e6e6;
  --scrollbar-active-thumb-bg: #4fa6ed;
  --scrollbar-thumb-bg: #686868;
  --search-clear-button-color: #2d2f30;
  --search-icon-color: #2d2f30;
  --search-result-background: #e6e6e6;
  --setting-group-heading-color: #383a42;
  --setting-items-background: #e1e1e1;
  --setting-items-border-color: #a0a1a7;
  --slider-thumb-border-color: #e5556197;
  --slider-track-background: #a0a1a7;
  --status-bar-background: #dcdcdc;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #2d2f30;
  --suggestion-background: #e6e6e6;
  --tab-background-active: #e6e6e6;
  --tab-container-background: #dcdcdc;
  --tab-divider-color: #e5556197;
  --tab-outline-color: transparent;
  --tab-switcher-background: #dcdcdc;
  --tab-switcher-menubar-background: linear-gradient(to top, #dcdcdc, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 154, 91);
  --tab-text-color: #101012;
  --tab-text-color-active: #2d2f30;
  --tab-text-color-focused: #2d2f30;
  --tab-text-color-focused-active: #2d2f30;
  --tab-text-color-focused-active-current: #383a42;
  --tab-text-color-focused-highlighted: #4078f2;
  --table-add-button-border-color: #a0a1a7;
  --table-border-color: #a0a1a7;
  --table-drag-handle-background-active: rgb(150, 164, 101);
  --table-drag-handle-color: #101012;
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: #a0a1a7;
  --table-header-color: #383a42;
  --table-selection: rgba(138, 154, 91, 0.1);
  --table-selection-border-color: rgb(150, 164, 101);
  --tag-background: #e1e1e1;
  --tag-background-hover: #8ebd6b;
  --tag-border-color: rgba(138, 154, 91, 0.15);
  --tag-border-color-hover: rgba(138, 154, 91, 0.15);
  --tag-color: #a626a4;
  --tag-color-hover: #a626a4;
  --tag-padding-x: 5px;
  --tag-padding-y: 5px;
  --tag-radius: 40px;
  --text-accent: #4078f2;
  --text-accent-hover: #e45649;
  --text-error: #e75545;
  --text-error-hover: #f86959;
  --text-faint: #101012;
  --text-highlight-bg: #8a9a5b;
  --text-muted: #2d2f30;
  --text-normal: #383a42;
  --text-on-accent: #f2f2f2;
  --text-selection: #00000050;
  --text-title-h1: #e45649;
  --text-title-h2: #50a14f;
  --text-title-h3: #c18401;
  --text-title-h4: #0184bc;
  --text-title-h5: #a626a4;
  --text-title-h6: #818387;
  --titlebar-background: #dcdcdc;
  --titlebar-background-focused: #dcdcdc;
  --titlebar-border-color: #a0a1a7;
  --titlebar-text-color: #2d2f30;
  --titlebar-text-color-focused: #383a42;
  --vault-profile-color: #383a42;
  --vault-profile-color-hover: #383a42;
  --yellow: #986801;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(220, 220, 220);
  color: rgb(56, 58, 66);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(230, 230, 230);
  color: rgb(56, 58, 66);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(220, 220, 220);
  color: rgb(56, 58, 66);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(220, 220, 220);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(56, 58, 66);
}

body div#quartz-root {
  background-color: rgb(230, 230, 230);
  color: rgb(56, 58, 66);
}`,
    typography: `body .page article p > b, b {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration: rgb(142, 189, 107);
  text-decoration-color: rgb(142, 189, 107);
}

body .page article p > em, em {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration: rgb(229, 85, 97);
  text-decoration-color: rgb(229, 85, 97);
}

body .page article p > i, i {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration: rgb(229, 85, 97);
  text-decoration-color: rgb(229, 85, 97);
}

body .page article p > strong, strong {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration: rgb(142, 189, 107);
  text-decoration-color: rgb(142, 189, 107);
}

body .text-highlight {
  background-color: rgb(138, 154, 91);
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body del {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: line-through rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body p {
  color: rgb(45, 47, 48);
  outline: rgb(45, 47, 48) none 0px;
  text-decoration: rgb(45, 47, 48);
  text-decoration-color: rgb(45, 47, 48);
}`,
    links: `body a.external, footer a {
  color: rgb(64, 120, 242);
  outline: rgb(64, 120, 242) none 0px;
  text-decoration: rgb(64, 120, 242);
  text-decoration-color: rgb(64, 120, 242);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(64, 120, 242);
  outline: rgb(64, 120, 242) none 0px;
  text-decoration: rgb(64, 120, 242);
  text-decoration-color: rgb(64, 120, 242);
}

body a.internal.broken {
  color: rgb(64, 120, 242);
  outline: rgb(64, 120, 242) none 0px;
  text-decoration: rgba(138, 154, 91, 0.3);
  text-decoration-color: rgba(138, 154, 91, 0.3);
}`,
    lists: `body dd {
  color: rgb(56, 58, 66);
}

body dt {
  color: rgb(56, 58, 66);
}

body ol > li {
  color: rgb(56, 58, 66);
}

body ol.overflow {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body ul > li {
  color: rgb(56, 58, 66);
}

body ul.overflow {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(16, 16, 18);
  text-decoration: rgb(16, 16, 18);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body table {
  color: rgb(56, 58, 66);
  margin-left: 222.391px;
  margin-right: 222.391px;
  margin-top: 0px;
}

body td {
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}

body th {
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}`,
    code: `body code {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(160, 161, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(160, 161, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(56, 58, 66);
}

body pre > code > [data-line] {
  border-left-color: rgb(152, 104, 1);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(152, 104, 1);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(152, 104, 1);
  border-left-color: rgb(152, 104, 1);
  border-right-color: rgb(152, 104, 1);
  border-top-color: rgb(152, 104, 1);
}

body pre > code, pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(160, 161, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(160, 161, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body figcaption {
  color: rgb(56, 58, 66);
}

body figure {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body img {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body video {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    embeds: `body .file-embed {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
}

body .footnotes {
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body .transclude {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(149, 164, 99);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body .transclude-inner {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(149, 164, 99);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    checkboxes: `body .katex-display > .katex {
  text-align: left;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(45, 47, 48);
  text-decoration: line-through rgb(45, 47, 48);
  text-decoration-color: rgb(45, 47, 48);
}

body input[type=checkbox] {
  border-bottom-color: rgb(16, 16, 18);
  border-left-color: rgb(16, 16, 18);
  border-right-color: rgb(16, 16, 18);
  border-top-color: rgb(16, 16, 18);
}

body li.task-list-item[data-task='!'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='*'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='-'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='/'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='>'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='?'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='I'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='S'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='b'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='c'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='d'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='f'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='i'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='k'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='l'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='p'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='u'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='w'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}`,
    search: `body .search > .search-button {
  background-color: rgb(160, 161, 167);
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(80, 161, 79);
  border-left-color: rgb(80, 161, 79);
  border-right-color: rgb(80, 161, 79);
  border-top-color: rgb(80, 161, 79);
}

body .search > .search-container > .search-space > * {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 161, 79);
  border-left-color: rgb(80, 161, 79);
  border-right-color: rgb(80, 161, 79);
  border-top-color: rgb(80, 161, 79);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

body a.internal.tag-link::before {
  color: rgb(166, 38, 164);
}

body h1 {
  color: rgb(228, 86, 73);
}

body h2 {
  color: rgb(80, 161, 79);
}

body h2.page-title, h2.page-title a {
  color: rgb(56, 58, 66);
}

body h3 {
  color: rgb(193, 132, 1);
}

body h4 {
  color: rgb(1, 132, 188);
}

body h5 {
  color: rgb(166, 38, 164);
}

body h6 {
  color: rgb(129, 131, 135);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

body ::-webkit-scrollbar-corner {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

body ::-webkit-scrollbar-track {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(45, 47, 48);
  text-decoration: rgb(45, 47, 48);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(45, 47, 48);
  text-decoration: rgb(45, 47, 48);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(45, 47, 48);
  text-decoration: rgb(45, 47, 48);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(79, 166, 237);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}`,
    footer: `body footer {
  background-color: rgb(220, 220, 220);
  border-bottom-color: rgb(56, 58, 66);
  border-bottom-width: 1px;
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 58, 66);
  color: rgb(45, 47, 48);
}

body footer ul li a {
  color: rgb(45, 47, 48);
  text-decoration: rgb(45, 47, 48);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(56, 58, 66);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(45, 47, 48);
  text-decoration: rgb(45, 47, 48);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(45, 47, 48);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body li.section-li > .section .meta {
  color: rgb(45, 47, 48);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(45, 47, 48);
  text-decoration: rgb(45, 47, 48);
}

body ul.section-ul {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

body .darkmode svg {
  color: rgb(45, 47, 48);
  stroke: rgb(45, 47, 48);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

body .breadcrumb-element p {
  color: rgb(16, 16, 18);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body .metadata {
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(45, 47, 48);
}

body .metadata-properties {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

body .navigation-progress {
  background-color: rgb(220, 220, 220);
}

body .page-header h2.page-title {
  color: rgb(56, 58, 66);
}

body abbr {
  color: rgb(56, 58, 66);
  text-decoration: underline dotted rgb(56, 58, 66);
}

body details {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body input[type=text] {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

body kbd {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body progress {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body sub {
  color: rgb(56, 58, 66);
}

body summary {
  color: rgb(56, 58, 66);
}

body sup {
  color: rgb(56, 58, 66);
}`,
  },
};
