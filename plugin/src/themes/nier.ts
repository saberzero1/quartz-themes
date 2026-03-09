import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "nier", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 219;
  --accent-l: 55%;
  --accent-s: 56%;
  --aqua: #56b6c2;
  --background-accent: #000;
  --background-modifier-active-hover: rgba(76, 121, 205, 0.1);
  --background-modifier-border: #424958;
  --background-modifier-border-focus: #aea395;
  --background-modifier-border-hover: #aea395;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-hover: rgba(116, 133, 164, 0.06);
  --background-modifier-message: #ddd8c7;
  --background-modifier-success: #539126;
  --background-primary: #ddd8c7;
  --background-primary-alt: rgba(172, 167, 147, 255);
  --background-secondary: #afaa96;
  --background-secondary-alt: #4a473e;
  --bases-cards-background: #ddd8c7;
  --bases-cards-cover-background: rgba(172, 167, 147, 255);
  --bases-cards-shadow: 0 0 0 1px #424958;
  --bases-cards-shadow-hover: 0 0 0 1px #aea395;
  --bases-embed-border-color: #424958;
  --bases-group-heading-property-color: #696868;
  --bases-table-border-color: #424958;
  --bases-table-cell-background-active: #ddd8c7;
  --bases-table-cell-background-disabled: rgba(172, 167, 147, 255);
  --bases-table-cell-background-selected: rgba(76, 121, 205, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #aea395;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6e695b;
  --bases-table-group-background: rgba(172, 167, 147, 255);
  --bases-table-header-background: #ddd8c7;
  --bases-table-header-background-hover: rgba(116, 133, 164, 0.06);
  --bases-table-header-color: #696868;
  --bases-table-summary-background: #ddd8c7;
  --bases-table-summary-background-hover: rgba(116, 133, 164, 0.06);
  --blockquote-border-color: #6e695b;
  --blue: #4a473e;
  --blur-background: color-mix(in srgb, #a7957d 65%, transparent) linear-gradient(#a7957d, color-mix(in srgb, #a7957d 65%, transparent));
  --callout-blend-mode: normal;
  --canvas-background: #ddd8c7;
  --canvas-card-label-color: rgb(81, 86, 99);
  --caret-color: #49463d;
  --checkbox-border-color: rgb(81, 86, 99);
  --checkbox-border-color-hover: #696868;
  --checkbox-color: #4a473e;
  --checkbox-color-hover: rgb(93, 66, 173);
  --checkbox-marker-color: #ddd8c7;
  --checklist-done-color: #696868;
  --code-background: rgba(255, 255, 255, 0.352);
  --code-border-color: #424958;
  --code-bracket-background: rgba(116, 133, 164, 0.06);
  --code-comment: rgb(81, 86, 99);
  --code-keyword: rgb(188, 106, 124);
  --code-normal: #49463d;
  --code-property: rgb(51, 77, 190);
  --code-punctuation: #696868;
  --code-value: rgb(161, 83, 170);
  --collapse-icon-color: rgb(81, 86, 99);
  --collapse-icon-color-collapsed: #4a473e;
  --color-accent: rgb(76, 121, 205);
  --color-accent-1: rgb(107, 150, 214);
  --color-accent-2: rgb(137, 175, 225);
  --color-accent-hsl: 219, 56%, 55%;
  --divider-color: black;
  --divider-color-hover: #404754;
  --drag-ghost-background: #4a473e;
  --dropdown-background: #a7957d;
  --dropdown-background-hover: #aea395;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958;
  --embed-border-start: 2px solid #6e695b;
  --embed-padding: 0 0 0 16px;
  --file-header-background: #ddd8c7;
  --file-header-background-focused: #ddd8c7;
  --file-line-width: 1000px;
  --flair-background: #a7957d;
  --flair-color: #49463d;
  --footnote-divider-color: #424958;
  --footnote-id-color: #696868;
  --footnote-id-color-no-occurrences: rgb(81, 86, 99);
  --footnote-input-background-active: rgba(116, 133, 164, 0.06);
  --graph-node: #696868;
  --graph-node-focused: #4a473e;
  --graph-node-unresolved: rgb(81, 86, 99);
  --graph-text: #49463d;
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #98c379;
  --heading-formatting: rgb(81, 86, 99);
  --hr-color: #424958;
  --icon-color: black;
  --icon-color-active: #4a473e;
  --icon-color-focused: #ddd8c7;
  --icon-color-hover: #696868;
  --indentation-guide-color: #6e695b;
  --inline-title-weight: 600;
  --input-date-separator: rgb(81, 86, 99);
  --input-placeholder-color: rgb(81, 86, 99);
  --interactive-accent: #6e695b;
  --interactive-accent-hover: rgb(45, 94, 185);
  --interactive-accent-hsl: 219, 56%, 55%;
  --interactive-hover: #aea395;
  --interactive-normal: #a7957d;
  --link-color: rgb(148, 3, 3);
  --link-color-hover: rgb(93, 66, 173);
  --link-decoration: none;
  --link-external-color: rgb(46, 0, 184);
  --link-external-color-hover: red;
  --link-external-decoration: none;
  --link-unresolved-color: rgb(57, 0, 0);
  --link-unresolved-decoration-color: rgba(76, 121, 205, 0.3);
  --link-weight: 500;
  --list-marker-color: rgb(81, 86, 99);
  --list-marker-color-collapsed: #4a473e;
  --list-marker-color-hover: #696868;
  --menu-background: #afaa96;
  --menu-border-color: #aea395;
  --metadata-border-color: #424958;
  --metadata-divider-color: #424958;
  --metadata-input-background-active: rgba(116, 133, 164, 0.06);
  --metadata-input-text-color: #49463d;
  --metadata-label-background-active: rgba(116, 133, 164, 0.06);
  --metadata-label-text-color: #696868;
  --metadata-label-text-color-hover: #696868;
  --metadata-property-background-active: rgba(116, 133, 164, 0.06);
  --metadata-property-box-shadow-focus: 0 0 0 2px #aea395;
  --metadata-property-box-shadow-hover: 0 0 0 1px #aea395;
  --modal-background: #ddd8c7;
  --modal-border-color: #18191e;
  --nav-collapse-icon-color: rgb(81, 86, 99);
  --nav-collapse-icon-color-collapsed: rgb(81, 86, 99);
  --nav-heading-color: #49463d;
  --nav-heading-color-collapsed: rgb(81, 86, 99);
  --nav-heading-color-collapsed-hover: #696868;
  --nav-heading-color-hover: #49463d;
  --nav-indentation-guide-color: #6e695b;
  --nav-item-background-active: #6e695b;
  --nav-item-background-hover: rgba(116, 133, 164, 0.06);
  --nav-item-background-selected: rgba(76, 121, 205, 0.15);
  --nav-item-color: #696868;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #4a473e;
  --nav-item-color-hover: #49463d;
  --nav-item-color-selected: #49463d;
  --nav-tag-color: rgb(81, 86, 99);
  --nav-tag-color-active: #696868;
  --nav-tag-color-hover: #696868;
  --orange: #d19a66;
  --panel-border-color: #18191e;
  --pdf-background: #ddd8c7;
  --pdf-page-background: #ddd8c7;
  --pdf-shadow: 0 0 0 1px #424958;
  --pdf-sidebar-background: #ddd8c7;
  --pdf-thumbnail-shadow: 0 0 0 1px #424958;
  --pill-border-color: #424958;
  --pill-border-color-hover: #aea395;
  --pill-color: #696868;
  --pill-color-hover: #49463d;
  --pill-color-remove: rgb(81, 86, 99);
  --pill-color-remove-hover: #4a473e;
  --prompt-background: #ddd8c7;
  --prompt-border-color: #18191e;
  --purple: #c678dd;
  --raised-background: color-mix(in srgb, #a7957d 65%, transparent) linear-gradient(#a7957d, color-mix(in srgb, #a7957d 65%, transparent));
  --red: #e06c75;
  --ribbon-background: #ddd8c7;
  --ribbon-background-collapsed: #ddd8c7;
  --scrollbar-active-thumb-bg: rgba(75, 70, 64, 0.9);
  --scrollbar-thumb-bg: rgba(75, 70, 64, 0.7);
  --search-clear-button-color: #696868;
  --search-icon-color: #696868;
  --search-result-background: #ddd8c7;
  --setting-group-heading-color: #49463d;
  --setting-items-background: #f0ece0;
  --setting-items-border-color: #424958;
  --slider-thumb-border-color: #aea395;
  --slider-track-background: #424958;
  --status-bar-background: #afaa96;
  --status-bar-border-color: black;
  --status-bar-text-color: #696868;
  --suggestion-background: #ddd8c7;
  --tab-background-active: #ddd8c7;
  --tab-container-background: #afaa96;
  --tab-divider-color: #aea395;
  --tab-outline-color: black;
  --tab-switcher-background: #afaa96;
  --tab-switcher-menubar-background: linear-gradient(to top, #afaa96, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 121, 205);
  --tab-text-color: rgb(81, 86, 99);
  --tab-text-color-active: #696868;
  --tab-text-color-focused: #ddd8c7;
  --tab-text-color-focused-active: #696868;
  --tab-text-color-focused-active-current: #ddd8c7;
  --tab-text-color-focused-highlighted: #4a473e;
  --table-add-button-border-color: #424958;
  --table-border-color: #424958;
  --table-drag-handle-background-active: #6e695b;
  --table-drag-handle-color: rgb(81, 86, 99);
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #424958;
  --table-header-color: #49463d;
  --table-selection: rgba(76, 121, 205, 0.1);
  --table-selection-border-color: #6e695b;
  --tag-background: rgba(172, 167, 147, 255);
  --tag-background-hover: rgba(172, 167, 147, 255);
  --tag-border-color: rgba(76, 121, 205, 0.15);
  --tag-border-color-hover: rgba(76, 121, 205, 0.15);
  --tag-padding-x: 4px;
  --tag-padding-y: 2px;
  --tag-radius: 4px;
  --text-accent: #4a473e;
  --text-accent-hover: rgb(93, 66, 173);
  --text-error: #b11f2c;
  --text-error-hover: #c9626a;
  --text-faint: rgb(81, 86, 99);
  --text-highlight-bg: #f0ece0;
  --text-muted: #696868;
  --text-normal: #49463d;
  --text-on-accent: #dcddde;
  --text-selection: rgba(0, 122, 255, 0.2);
  --titlebar-background: #afaa96;
  --titlebar-background-focused: #4a473e;
  --titlebar-border-color: #424958;
  --titlebar-text-color: #696868;
  --titlebar-text-color-focused: #49463d;
  --vault-profile-color: #49463d;
  --vault-profile-color-hover: #49463d;
  --yellow: #e5c07b;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(175, 170, 150);
  color: rgb(73, 70, 61);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(221, 216, 199);
  color: rgb(73, 70, 61);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(175, 170, 150);
  color: rgb(73, 70, 61);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(175, 170, 150);
  border-left-color: rgb(0, 0, 0);
  color: rgb(73, 70, 61);
}

body div#quartz-root {
  background-color: rgb(221, 216, 199);
  color: rgb(73, 70, 61);
}`,
    typography: `body .page article p > b, b {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body .page article p > em, em {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body .page article p > i, i {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body .page article p > strong, strong {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body .text-highlight {
  background-color: rgb(240, 236, 224);
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body del {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration: line-through rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body p {
  color: rgb(105, 104, 104);
  outline: rgb(105, 104, 104) none 0px;
  text-decoration: rgb(105, 104, 104);
  text-decoration-color: rgb(105, 104, 104);
}`,
    links: `body a.external, footer a {
  color: rgb(46, 0, 184);
  font-weight: 500;
  outline: rgb(46, 0, 184) none 0px;
  text-decoration: rgb(46, 0, 184);
  text-decoration-color: rgb(46, 0, 184);
  transition: opacity 0.15s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(148, 3, 3);
  font-weight: 500;
  outline: rgb(148, 3, 3) none 0px;
  text-decoration: rgb(148, 3, 3);
  text-decoration-color: rgb(148, 3, 3);
}

body a.internal.broken {
  color: rgb(57, 0, 0);
  font-weight: 500;
  outline: rgb(57, 0, 0) none 0px;
  text-decoration: rgba(76, 121, 205, 0.3);
  text-decoration-color: rgba(76, 121, 205, 0.3);
}`,
    lists: `body dd {
  color: rgb(73, 70, 61);
}

body dt {
  color: rgb(73, 70, 61);
}

body ol > li {
  color: rgb(73, 70, 61);
}

body ol.overflow {
  background-color: rgb(221, 216, 199);
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body ul > li {
  color: rgb(73, 70, 61);
}

body ul.overflow {
  background-color: rgb(221, 216, 199);
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(81, 86, 99);
  text-decoration: rgb(81, 86, 99);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body table {
  color: rgb(73, 70, 61);
}

body td {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(73, 70, 61);
}

body th {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(73, 70, 61);
}`,
    code: `body code {
  border-bottom-color: rgb(221, 216, 199);
  border-left-color: rgb(221, 216, 199);
  border-right-color: rgb(221, 216, 199);
  border-top-color: rgb(221, 216, 199);
  color: rgb(221, 216, 199);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(221, 216, 199);
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
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body figcaption {
  color: rgb(73, 70, 61);
}

body figure {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body img {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body video {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}`,
    embeds: `body .file-embed {
  background-color: rgb(172, 167, 147);
  border-bottom-color: rgb(105, 104, 104);
  border-left-color: rgb(105, 104, 104);
  border-right-color: rgb(105, 104, 104);
  border-top-color: rgb(105, 104, 104);
}

body .footnotes {
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

body .transclude {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(110, 105, 91);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body .transclude-inner {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(110, 105, 91);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}`,
    checkboxes: `body .katex-display > .katex {
  text-align: left;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(105, 104, 104);
  text-decoration: line-through rgb(105, 104, 104);
  text-decoration-color: rgb(105, 104, 104);
}

body input[type=checkbox] {
  border-bottom-color: rgb(81, 86, 99);
  border-left-color: rgb(81, 86, 99);
  border-right-color: rgb(81, 86, 99);
  border-top-color: rgb(81, 86, 99);
}

body li.task-list-item[data-task='!'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='*'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='-'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='/'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='>'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='?'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='I'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='S'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='b'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='c'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='d'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='f'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='i'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='k'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='l'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='p'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='u'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body li.task-list-item[data-task='w'] {
  color: rgb(73, 70, 61);
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgba(90, 88, 85, 0.5);
}

body .callout[data-callout="example"] {
  background-color: rgba(95, 65, 80, 0.5);
}

body .callout[data-callout="info"] {
  background-color: rgba(158, 141, 123, 0.3);
}

body .callout[data-callout="question"] {
  background-color: rgba(218, 189, 155, 0.5);
}

body .callout[data-callout="success"] {
  background-color: rgba(38, 114, 54, 0.5);
}

body .callout[data-callout="tip"] {
  background-color: rgba(82, 155, 160, 0.5);
}

body .callout[data-callout="todo"] {
  background-color: rgba(82, 89, 146, 0.5);
}

body .callout[data-callout="warning"] {
  background-color: rgba(190, 55, 55, 0.5);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(73, 70, 61);
}

body .search > .search-container > .search-space {
  background-color: rgb(221, 216, 199);
  border-bottom-color: rgb(24, 25, 30);
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-top-color: rgb(24, 25, 30);
}

body .search > .search-container > .search-space > * {
  color: rgb(73, 70, 61);
  outline: rgb(73, 70, 61) none 0px;
  text-decoration: rgb(73, 70, 61);
  text-decoration-color: rgb(73, 70, 61);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(73, 70, 61);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(73, 70, 61);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(116, 133, 164, 0.06);
  color: rgb(73, 70, 61);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(24, 25, 30);
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-top-color: rgb(24, 25, 30);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(175, 170, 150);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(116, 133, 164, 0.06);
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(116, 133, 164, 0.06);
  color: rgb(73, 70, 61);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(172, 167, 147);
  border-bottom-color: rgba(76, 121, 205, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(76, 121, 205, 0.15);
  border-right-color: rgba(76, 121, 205, 0.15);
  border-top-color: rgba(76, 121, 205, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(73, 70, 61);
}

body h1 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 4.8px 4.8px 0px;
}

body h2 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 4px 4px 0px;
}

body h2.page-title, h2.page-title a {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 4.8px 4.8px 0px;
}

body h3 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 3.2px 3.2px 0px;
}

body h4 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 2.4px 2.4px 0px;
}

body h5 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 2.24px 2.24px 0px;
}

body h6 {
  color: rgb(73, 70, 61);
  text-shadow: rgba(77, 73, 62, 0.3) 1.76px 1.76px 0px;
}

body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}

body ::-webkit-scrollbar-corner {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}

body ::-webkit-scrollbar-track {
  background: rgb(221, 216, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 216, 199);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(67, 64, 55);
  text-decoration: rgb(67, 64, 55);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(67, 64, 55);
  text-decoration: rgb(67, 64, 55);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(67, 64, 55);
  text-decoration: rgb(67, 64, 55);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    footer: `body footer {
  background-color: rgb(175, 170, 150);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  color: rgb(105, 104, 104);
}

body footer ul li a {
  color: rgb(105, 104, 104);
  text-decoration: rgb(105, 104, 104);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(73, 70, 61);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(67, 64, 55);
  text-decoration: rgb(67, 64, 55);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(67, 64, 55);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body li.section-li > .section .meta {
  color: rgb(67, 64, 55);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(67, 64, 55);
  text-decoration: rgb(67, 64, 55);
}

body ul.section-ul {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .darkmode svg {
  color: rgb(0, 0, 0);
  stroke: rgb(0, 0, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(105, 104, 104);
  border-left-color: rgb(105, 104, 104);
  border-right-color: rgb(105, 104, 104);
  border-top-color: rgb(105, 104, 104);
  color: rgb(105, 104, 104);
}

body .breadcrumb-element p {
  color: rgb(81, 86, 99);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

body .metadata {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(105, 104, 104);
}

body .metadata-properties {
  border-bottom-color: rgb(105, 104, 104);
  border-left-color: rgb(105, 104, 104);
  border-right-color: rgb(105, 104, 104);
  border-top-color: rgb(105, 104, 104);
  color: rgb(105, 104, 104);
}

body .navigation-progress {
  background-color: rgb(175, 170, 150);
}

body .page-header h2.page-title {
  color: rgb(73, 70, 61);
}

body abbr {
  color: rgb(73, 70, 61);
  text-decoration: underline dotted rgb(73, 70, 61);
}

body details {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body input[type=text] {
  border-bottom-color: rgb(105, 104, 104);
  border-left-color: rgb(105, 104, 104);
  border-right-color: rgb(105, 104, 104);
  border-top-color: rgb(105, 104, 104);
  color: rgb(105, 104, 104);
}

body kbd {
  background-color: rgba(255, 255, 255, 0.353);
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
  color: rgb(73, 70, 61);
}

body progress {
  border-bottom-color: rgb(73, 70, 61);
  border-left-color: rgb(73, 70, 61);
  border-right-color: rgb(73, 70, 61);
  border-top-color: rgb(73, 70, 61);
}

body sub {
  color: rgb(73, 70, 61);
}

body summary {
  color: rgb(73, 70, 61);
}

body sup {
  color: rgb(73, 70, 61);
}`,
  },
  light: {},
};
