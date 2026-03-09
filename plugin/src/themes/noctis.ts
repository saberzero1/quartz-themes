import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "noctis", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: #0e6671;
  --background-modifier-border: #0f1415;
  --background-modifier-cover: rgba(5, 37, 41, 0.8);
  --background-modifier-error: #e34e1c;
  --background-modifier-error-hover: #e97749;
  --background-modifier-form-field: #073940;
  --background-modifier-form-field-highlighted: #0b515b;
  --background-modifier-form-field-hover: #073940;
  --background-modifier-hover: #0b515b;
  --background-modifier-success: #16b673;
  --background-primary: #052529;
  --background-primary-alt: #041d20;
  --background-secondary: #041d20;
  --background-secondary-alt: #062e32;
  --bases-cards-background: #052529;
  --bases-cards-cover-background: #041d20;
  --bases-cards-shadow: 0 0 0 1px #0f1415;
  --bases-embed-border-color: #0f1415;
  --bases-group-heading-property-color: #87a7ab;
  --bases-table-border-color: #0f1415;
  --bases-table-cell-background-active: #052529;
  --bases-table-cell-background-disabled: #041d20;
  --bases-table-cell-shadow-focus: 0 0 0 2px #099;
  --bases-table-group-background: #041d20;
  --bases-table-header-background: #052529;
  --bases-table-header-background-hover: #0b515b;
  --bases-table-header-color: #87a7ab;
  --bases-table-row-background-hover: rgba(14, 102, 113, 0.2);
  --bases-table-summary-background: #052529;
  --bases-table-summary-background-hover: #0b515b;
  --blockquote-border: #16a3b6;
  --blockquote-border-color: #099;
  --blockquote-color: #87a7ab;
  --blur-background: color-mix(in srgb, #073940 65%, transparent) linear-gradient(#073940, color-mix(in srgb, #073940 65%, transparent));
  --canvas-background: #052529;
  --canvas-card-label-color: #5b858b;
  --caret-color: #b2cacd;
  --checkbox-border-color: #40d4e7;
  --checkbox-border-color-hover: #60dbeb;
  --checkbox-color: #40d4e7;
  --checkbox-color-hover: #60dbeb;
  --checkbox-marker-color: #052529;
  --checklist-done-color: #87a7ab;
  --code-background: #041d20;
  --code-border-color: #0f1415;
  --code-bracket-background: #0b515b;
  --code-comment: #5b858b;
  --code-function: #60dbeb;
  --code-important: #e66533;
  --code-keyword: #df769b;
  --code-normal: #b2cacd;
  --code-operator: #b2cacd;
  --code-property: #e4b781;
  --code-punctuation: #87a7ab;
  --code-string: #49e9a6;
  --code-tag: #e66533;
  --code-value: #7060eb;
  --collapse-icon-color: #5b858b;
  --collapse-icon-color-collapsed: #40d4e7;
  --divider-color: #0f1415;
  --divider-color-hover: #099;
  --dropdown-background: #073940;
  --dropdown-background-hover: #0b515b;
  --embed-block-shadow-hover: 0 0 0 1px #0f1415, inset 0 0 0 1px #0f1415;
  --embed-border-start: 2px solid #099;
  --file-header-background: #052529;
  --file-header-background-focused: #052529;
  --flair-background: #073940;
  --flair-color: #b2cacd;
  --footnote-divider-color: #0f1415;
  --footnote-id-color: #87a7ab;
  --footnote-id-color-no-occurrences: #5b858b;
  --footnote-input-background-active: #0b515b;
  --graph-node: #40d4e7;
  --graph-node-attachment: #e4b781;
  --graph-node-focused: #49e9a6;
  --graph-node-tag: #df769b;
  --graph-node-unresolved: #e34e1c;
  --graph-text: #b2cacd;
  --h1-color: #40d4e7;
  --h2-color: #49e9a6;
  --h3-color: #e4b781;
  --h4-color: #49ace9;
  --h5-color: #df769b;
  --h6-color: #49d6e9;
  --heading-formatting: #5b858b;
  --hr-color: #0f1415;
  --icon-color: #87a7ab;
  --icon-color-active: #40d4e7;
  --icon-color-focused: #b2cacd;
  --icon-color-hover: #87a7ab;
  --inline-title-color: #40d4e7;
  --input-date-separator: #5b858b;
  --input-placeholder-color: #5b858b;
  --interactive-accent: #099;
  --interactive-accent-hover: #0cc;
  --interactive-accent-rgb: 73, 214, 233;
  --interactive-before: #87a7ab;
  --interactive-hover: #0b515b;
  --interactive-normal: #073940;
  --interactive-success: #49e9a6;
  --link-color: #40d4e7;
  --link-color-hover: #60dbeb;
  --link-external-color: #49ace9;
  --link-external-color-hover: #60b6eb;
  --link-unresolved-color: #40d4e7;
  --list-marker-color: #5b858b;
  --list-marker-color-collapsed: #40d4e7;
  --list-marker-color-hover: #87a7ab;
  --menu-background: #041d20;
  --metadata-border-color: #0f1415;
  --metadata-divider-color: #0f1415;
  --metadata-input-background-active: #0b515b;
  --metadata-input-text-color: #b2cacd;
  --metadata-label-background-active: #0b515b;
  --metadata-label-text-color: #87a7ab;
  --metadata-label-text-color-hover: #87a7ab;
  --metadata-property-background-active: #0b515b;
  --modal-background: #052529;
  --nav-collapse-icon-color: #5b858b;
  --nav-collapse-icon-color-collapsed: #5b858b;
  --nav-heading-color: #b2cacd;
  --nav-heading-color-collapsed: #5b858b;
  --nav-heading-color-collapsed-hover: #87a7ab;
  --nav-heading-color-hover: #b2cacd;
  --nav-item-background-active: #0e6671;
  --nav-item-background-hover: #0b515b;
  --nav-item-color: #87a7ab;
  --nav-item-color-active: #49e9a6;
  --nav-item-color-highlighted: #40d4e7;
  --nav-item-color-hover: #40d4e7;
  --nav-item-color-selected: #b2cacd;
  --nav-tag-color: #5b858b;
  --nav-tag-color-active: #87a7ab;
  --nav-tag-color-hover: #87a7ab;
  --noctis-accent: #40d4e7;
  --noctis-accent-hover: #169fb1;
  --noctis-bg: #052529;
  --noctis-bg-active: #0e6671;
  --noctis-bg-alt: #073940;
  --noctis-bg-hover: #0b515b;
  --noctis-bg-line: #083d44ee;
  --noctis-bg-secondary: #041d20;
  --noctis-bg-sidebar: #041d20;
  --noctis-bg-tertiary: #062e32;
  --noctis-blue: #49ace9;
  --noctis-blue-bright: #60b6eb;
  --noctis-border: #0f1415;
  --noctis-cursor: #85efff;
  --noctis-cyan: #49d6e9;
  --noctis-cyan-bright: #60dbeb;
  --noctis-error: #e34e1c;
  --noctis-fg: #b2cacd;
  --noctis-fg-bright: #ebfdff;
  --noctis-fg-faint: #5b858b;
  --noctis-fg-muted: #87a7ab;
  --noctis-green: #49e9a6;
  --noctis-green-bright: #60ebb1;
  --noctis-info: #40d4e7;
  --noctis-magenta: #7060eb;
  --noctis-orange: #d67e5c;
  --noctis-purple: #df769b;
  --noctis-purple-bright: #e798b3;
  --noctis-red: #e66533;
  --noctis-red-bright: #e97749;
  --noctis-selection: #169fb144;
  --noctis-success: #16b673;
  --noctis-warning: #e69533;
  --noctis-yellow: #e4b781;
  --noctis-yellow-bright: #e69533;
  --pdf-background: #052529;
  --pdf-page-background: #052529;
  --pdf-shadow: 0 0 0 1px #0f1415;
  --pdf-sidebar-background: #052529;
  --pdf-thumbnail-shadow: 0 0 0 1px #0f1415;
  --pill-border-color: #0f1415;
  --pill-color: #87a7ab;
  --pill-color-hover: #b2cacd;
  --pill-color-remove: #5b858b;
  --pill-color-remove-hover: #40d4e7;
  --prompt-background: #052529;
  --raised-background: color-mix(in srgb, #073940 65%, transparent) linear-gradient(#073940, color-mix(in srgb, #073940 65%, transparent));
  --ribbon-background: #052529;
  --ribbon-background-collapsed: #052529;
  --scrollbar-active-thumb-bg: #169fb1ad;
  --scrollbar-bg: #052529;
  --scrollbar-thumb-bg: #6a90955b;
  --search-clear-button-color: #87a7ab;
  --search-icon-color: #87a7ab;
  --search-result-background: #052529;
  --setting-group-heading-color: #b2cacd;
  --setting-items-background: #041d20;
  --setting-items-border-color: #0f1415;
  --slider-track-background: #0f1415;
  --status-bar-background: #041d20;
  --status-bar-border-color: #0f1415;
  --status-bar-text-color: #87a7ab;
  --suggestion-background: #052529;
  --tab-background-active: #052529;
  --tab-container-background: #041d20;
  --tab-outline-color: #0f1415;
  --tab-switcher-background: #041d20;
  --tab-switcher-menubar-background: linear-gradient(to top, #041d20, transparent);
  --tab-text-color: #5b858b;
  --tab-text-color-active: #87a7ab;
  --tab-text-color-focused: #87a7ab;
  --tab-text-color-focused-active: #87a7ab;
  --tab-text-color-focused-active-current: #b2cacd;
  --tab-text-color-focused-highlighted: #40d4e7;
  --table-add-button-border-color: #0f1415;
  --table-border-color: #0f1415;
  --table-drag-handle-background-active: #099;
  --table-drag-handle-color: #5b858b;
  --table-drag-handle-color-active: #0f1415;
  --table-header-background: #041d20;
  --table-header-border: #0f1415;
  --table-header-border-color: #0f1415;
  --table-header-color: #b2cacd;
  --table-row-background-hover: rgba(14, 102, 113, 0.2);
  --table-selection-border-color: #099;
  --tag-background: rgba(223, 118, 155, 0.15);
  --tag-background-hover: rgba(223, 118, 155, 0.25);
  --tag-color: #df769b;
  --tag-color-hover: #40d4e7;
  --text-accent: #40d4e7;
  --text-accent-hover: #169fb1;
  --text-error: #e34e1c;
  --text-error-hover: #e97749;
  --text-faint: #5b858b;
  --text-highlight-bg: rgba(64, 212, 231, 0.3);
  --text-highlight-bg-active: rgba(64, 212, 231, 0.5);
  --text-muted: #87a7ab;
  --text-normal: #b2cacd;
  --text-on-accent: #0f1415;
  --text-selection: #169fb144;
  --titlebar-background: #041d20;
  --titlebar-background-focused: #041d20;
  --titlebar-border-color: #0f1415;
  --titlebar-text-color: #87a7ab;
  --titlebar-text-color-focused: #b2cacd;
  --vault-profile-color: #b2cacd;
  --vault-profile-color-hover: #b2cacd;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(4, 29, 32);
  color: rgb(178, 202, 205);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(5, 37, 41);
  color: rgb(178, 202, 205);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(4, 29, 32);
  color: rgb(178, 202, 205);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(15, 20, 21);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(4, 29, 32);
  border-left-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

body div#quartz-root {
  background-color: rgb(5, 37, 41);
  color: rgb(178, 202, 205);
}`,
    typography: `body .page article p > b, b {
  color: rgb(228, 183, 129);
  font-weight: 700;
  outline: rgb(228, 183, 129) none 0px;
  text-decoration: rgb(228, 183, 129);
  text-decoration-color: rgb(228, 183, 129);
}

body .page article p > em, em {
  color: rgb(214, 126, 92);
  outline: rgb(214, 126, 92) none 0px;
  text-decoration: rgb(214, 126, 92);
  text-decoration-color: rgb(214, 126, 92);
}

body .page article p > i, i {
  color: rgb(214, 126, 92);
  outline: rgb(214, 126, 92) none 0px;
  text-decoration: rgb(214, 126, 92);
  text-decoration-color: rgb(214, 126, 92);
}

body .page article p > strong, strong {
  color: rgb(228, 183, 129);
  font-weight: 700;
  outline: rgb(228, 183, 129) none 0px;
  text-decoration: rgb(228, 183, 129);
  text-decoration-color: rgb(228, 183, 129);
}

body .text-highlight {
  background-color: rgba(64, 212, 231, 0.3);
  color: rgb(178, 202, 205);
  outline: rgb(178, 202, 205) none 0px;
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body del {
  color: rgb(178, 202, 205);
  outline: rgb(178, 202, 205) none 0px;
  text-decoration: line-through rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body p {
  color: rgb(135, 167, 171);
  outline: rgb(135, 167, 171) none 0px;
  text-decoration: rgb(135, 167, 171);
  text-decoration-color: rgb(135, 167, 171);
}`,
    links: `body a.external, footer a {
  color: rgb(73, 172, 233);
  outline: rgb(73, 172, 233) none 0px;
  text-decoration: underline rgb(73, 172, 233);
  text-decoration-color: rgb(73, 172, 233);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(64, 212, 231);
  outline: rgb(64, 212, 231) none 0px;
  text-decoration: underline rgb(64, 212, 231);
  text-decoration-color: rgb(64, 212, 231);
}

body a.internal.broken {
  color: rgb(64, 212, 231);
  outline: rgb(64, 212, 231) none 0px;
}`,
    lists: `body dd {
  color: rgb(178, 202, 205);
}

body dt {
  color: rgb(178, 202, 205);
}

body ol > li {
  color: rgb(178, 202, 205);
}

body ol.overflow {
  background-color: rgb(5, 37, 41);
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body ul > li {
  color: rgb(178, 202, 205);
}

body ul.overflow {
  background-color: rgb(5, 37, 41);
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(91, 133, 139);
  text-decoration: rgb(91, 133, 139);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body table {
  color: rgb(178, 202, 205);
}

body td {
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

body th {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

body tr {
  background-color: rgb(4, 29, 32);
}`,
    code: `body code {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

body pre > code > [data-line] {
  border-left-color: rgb(96, 219, 235);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(96, 219, 235);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(96, 219, 235);
  border-left-color: rgb(96, 219, 235);
  border-right-color: rgb(96, 219, 235);
  border-top-color: rgb(96, 219, 235);
}

body pre > code, pre:has(> code) {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
}

body pre:has(> code) {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
}`,
    images: `body audio {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body figcaption {
  color: rgb(178, 202, 205);
}

body figure {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body img {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body video {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}`,
    embeds: `body .file-embed {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
}

body .footnotes {
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

body .transclude {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(0, 153, 153);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body .transclude-inner {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(0, 153, 153);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(135, 167, 171);
  text-decoration: line-through rgb(135, 167, 171);
  text-decoration-color: rgb(135, 167, 171);
}

body input[type=checkbox] {
  border-bottom-color: rgb(64, 212, 231);
  border-left-color: rgb(64, 212, 231);
  border-right-color: rgb(64, 212, 231);
  border-top-color: rgb(64, 212, 231);
}

body li.task-list-item[data-task='!'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='*'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='-'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='/'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='>'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='?'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='I'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='S'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='b'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='c'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='d'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='f'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='i'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='k'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='l'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='p'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='u'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body li.task-list-item[data-task='w'] {
  color: rgb(178, 202, 205);
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}`,
    search: `body .search > .search-button {
  background-color: rgb(7, 57, 64);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

body .search > .search-container > .search-space {
  background-color: rgb(7, 57, 64);
}

body .search > .search-container > .search-space > * {
  color: rgb(178, 202, 205);
  outline: rgb(178, 202, 205) none 0px;
  text-decoration: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 253, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 253, 255);
  border-left-color: rgb(235, 253, 255);
  border-right-color: rgb(235, 253, 255);
  border-top-color: rgb(235, 253, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(235, 253, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(14, 102, 113);
  color: rgb(235, 253, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(4, 29, 32);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(14, 102, 113);
  border-bottom-color: rgb(235, 253, 255);
  border-left-color: rgb(235, 253, 255);
  border-right-color: rgb(235, 253, 255);
  border-top-color: rgb(235, 253, 255);
  color: rgb(235, 253, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(14, 102, 113);
  color: rgb(235, 253, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(223, 118, 155, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(223, 118, 155);
}

body h1 {
  color: rgb(64, 212, 231);
}

body h2 {
  color: rgb(73, 233, 166);
}

body h2.page-title, h2.page-title a {
  color: rgb(64, 212, 231);
}

body h3 {
  color: rgb(228, 183, 129);
}

body h4 {
  color: rgb(73, 172, 233);
}

body h5 {
  color: rgb(223, 118, 155);
}

body h6 {
  color: rgb(73, 214, 233);
}

body hr {
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}

body ::-webkit-scrollbar-corner {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}

body ::-webkit-scrollbar-track {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(135, 167, 171);
  text-decoration: rgb(135, 167, 171);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(135, 167, 171);
  text-decoration: rgb(135, 167, 171);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(135, 167, 171);
  text-decoration: rgb(135, 167, 171);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(14, 102, 113);
  border-bottom-color: rgb(73, 233, 166);
  border-left-color: rgb(73, 233, 166);
  border-right-color: rgb(73, 233, 166);
  border-top-color: rgb(73, 233, 166);
  color: rgb(73, 233, 166);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}`,
    footer: `body footer {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(22, 159, 177);
}

body footer ul li a {
  color: rgb(22, 159, 177);
  text-decoration: rgb(22, 159, 177);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(178, 202, 205);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(135, 167, 171);
  text-decoration: rgb(135, 167, 171);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(135, 167, 171);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body li.section-li > .section .meta {
  color: rgb(135, 167, 171);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(135, 167, 171);
  text-decoration: rgb(135, 167, 171);
}

body ul.section-ul {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}

body .darkmode svg {
  color: rgb(135, 167, 171);
  stroke: rgb(135, 167, 171);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}

body .breadcrumb-element p {
  color: rgb(91, 133, 139);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

body .metadata {
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(135, 167, 171);
}

body .metadata-properties {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}

body .navigation-progress {
  background-color: rgb(4, 29, 32);
}

body .page-header h2.page-title {
  color: rgb(178, 202, 205);
}

body abbr {
  color: rgb(178, 202, 205);
  text-decoration: underline dotted rgb(178, 202, 205);
}

body details {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body input[type=text] {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}

body kbd {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

body progress {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

body sub {
  color: rgb(178, 202, 205);
}

body summary {
  color: rgb(178, 202, 205);
}

body sup {
  color: rgb(178, 202, 205);
}`,
  },
  light: {},
};
