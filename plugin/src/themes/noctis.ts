import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "noctis", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: #0e6671 !important;
  --background-modifier-border: #0f1415 !important;
  --background-modifier-cover: rgba(5, 37, 41, 0.8) !important;
  --background-modifier-error: #e34e1c !important;
  --background-modifier-error-hover: #e97749 !important;
  --background-modifier-form-field: #073940 !important;
  --background-modifier-form-field-highlighted: #0b515b !important;
  --background-modifier-form-field-hover: #073940 !important;
  --background-modifier-hover: #0b515b !important;
  --background-modifier-success: #16b673 !important;
  --background-primary: #052529 !important;
  --background-primary-alt: #041d20 !important;
  --background-secondary: #041d20 !important;
  --background-secondary-alt: #062e32 !important;
  --bases-cards-background: #052529 !important;
  --bases-cards-cover-background: #041d20 !important;
  --bases-cards-shadow: 0 0 0 1px #0f1415 !important;
  --bases-embed-border-color: #0f1415 !important;
  --bases-group-heading-property-color: #87a7ab !important;
  --bases-table-border-color: #0f1415 !important;
  --bases-table-cell-background-active: #052529 !important;
  --bases-table-cell-background-disabled: #041d20 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #099 !important;
  --bases-table-group-background: #041d20 !important;
  --bases-table-header-background: #052529 !important;
  --bases-table-header-background-hover: #0b515b !important;
  --bases-table-header-color: #87a7ab !important;
  --bases-table-row-background-hover: rgba(14, 102, 113, 0.2) !important;
  --bases-table-summary-background: #052529 !important;
  --bases-table-summary-background-hover: #0b515b !important;
  --blockquote-border: #16a3b6 !important;
  --blockquote-border-color: #099 !important;
  --blockquote-color: #87a7ab !important;
  --blur-background: color-mix(in srgb, #073940 65%, transparent) linear-gradient(#073940, color-mix(in srgb, #073940 65%, transparent)) !important;
  --canvas-background: #052529 !important;
  --canvas-card-label-color: #5b858b !important;
  --caret-color: #b2cacd !important;
  --checkbox-border-color: #40d4e7 !important;
  --checkbox-border-color-hover: #60dbeb !important;
  --checkbox-color: #40d4e7 !important;
  --checkbox-color-hover: #60dbeb !important;
  --checkbox-marker-color: #052529 !important;
  --checklist-done-color: #87a7ab !important;
  --code-background: #041d20 !important;
  --code-border-color: #0f1415 !important;
  --code-bracket-background: #0b515b !important;
  --code-comment: #5b858b !important;
  --code-function: #60dbeb !important;
  --code-important: #e66533 !important;
  --code-keyword: #df769b !important;
  --code-normal: #b2cacd !important;
  --code-operator: #b2cacd !important;
  --code-property: #e4b781 !important;
  --code-punctuation: #87a7ab !important;
  --code-string: #49e9a6 !important;
  --code-tag: #e66533 !important;
  --code-value: #7060eb !important;
  --collapse-icon-color: #5b858b !important;
  --collapse-icon-color-collapsed: #40d4e7 !important;
  --dark: #b2cacd !important;
  --darkgray: #b2cacd !important;
  --divider-color: #0f1415 !important;
  --divider-color-hover: #099 !important;
  --dropdown-background: #073940 !important;
  --dropdown-background-hover: #0b515b !important;
  --embed-block-shadow-hover: 0 0 0 1px #0f1415, inset 0 0 0 1px #0f1415 !important;
  --embed-border-start: 2px solid #099 !important;
  --file-header-background: #052529 !important;
  --file-header-background-focused: #052529 !important;
  --flair-background: #073940 !important;
  --flair-color: #b2cacd !important;
  --footnote-divider-color: #0f1415 !important;
  --footnote-id-color: #87a7ab !important;
  --footnote-id-color-no-occurrences: #5b858b !important;
  --footnote-input-background-active: #0b515b !important;
  --graph-node: #40d4e7 !important;
  --graph-node-attachment: #e4b781 !important;
  --graph-node-focused: #49e9a6 !important;
  --graph-node-tag: #df769b !important;
  --graph-node-unresolved: #e34e1c !important;
  --graph-text: #b2cacd !important;
  --gray: #87a7ab !important;
  --h1-color: #40d4e7 !important;
  --h2-color: #49e9a6 !important;
  --h3-color: #e4b781 !important;
  --h4-color: #49ace9 !important;
  --h5-color: #df769b !important;
  --h6-color: #49d6e9 !important;
  --heading-formatting: #5b858b !important;
  --highlight: rgba(64, 212, 231, 0.3) !important;
  --hr-color: #0f1415 !important;
  --icon-color: #87a7ab !important;
  --icon-color-active: #40d4e7 !important;
  --icon-color-focused: #b2cacd !important;
  --icon-color-hover: #87a7ab !important;
  --inline-title-color: #40d4e7 !important;
  --input-date-separator: #5b858b !important;
  --input-placeholder-color: #5b858b !important;
  --interactive-accent: #099 !important;
  --interactive-accent-hover: #0cc !important;
  --interactive-accent-rgb: 73, 214, 233 !important;
  --interactive-before: #87a7ab !important;
  --interactive-hover: #0b515b !important;
  --interactive-normal: #073940 !important;
  --interactive-success: #49e9a6 !important;
  --light: #052529 !important;
  --lightgray: #041d20 !important;
  --link-color: #40d4e7 !important;
  --link-color-hover: #60dbeb !important;
  --link-external-color: #49ace9 !important;
  --link-external-color-hover: #60b6eb !important;
  --link-unresolved-color: #40d4e7 !important;
  --list-marker-color: #5b858b !important;
  --list-marker-color-collapsed: #40d4e7 !important;
  --list-marker-color-hover: #87a7ab !important;
  --menu-background: #041d20 !important;
  --metadata-border-color: #0f1415 !important;
  --metadata-divider-color: #0f1415 !important;
  --metadata-input-background-active: #0b515b !important;
  --metadata-input-text-color: #b2cacd !important;
  --metadata-label-background-active: #0b515b !important;
  --metadata-label-text-color: #87a7ab !important;
  --metadata-label-text-color-hover: #87a7ab !important;
  --metadata-property-background-active: #0b515b !important;
  --modal-background: #052529 !important;
  --nav-collapse-icon-color: #5b858b !important;
  --nav-collapse-icon-color-collapsed: #5b858b !important;
  --nav-heading-color: #b2cacd !important;
  --nav-heading-color-collapsed: #5b858b !important;
  --nav-heading-color-collapsed-hover: #87a7ab !important;
  --nav-heading-color-hover: #b2cacd !important;
  --nav-item-background-active: #0e6671 !important;
  --nav-item-background-hover: #0b515b !important;
  --nav-item-color: #87a7ab !important;
  --nav-item-color-active: #49e9a6 !important;
  --nav-item-color-highlighted: #40d4e7 !important;
  --nav-item-color-hover: #40d4e7 !important;
  --nav-item-color-selected: #b2cacd !important;
  --nav-tag-color: #5b858b !important;
  --nav-tag-color-active: #87a7ab !important;
  --nav-tag-color-hover: #87a7ab !important;
  --noctis-accent: #40d4e7 !important;
  --noctis-accent-hover: #169fb1 !important;
  --noctis-bg: #052529 !important;
  --noctis-bg-active: #0e6671 !important;
  --noctis-bg-alt: #073940 !important;
  --noctis-bg-hover: #0b515b !important;
  --noctis-bg-line: #083d44ee !important;
  --noctis-bg-secondary: #041d20 !important;
  --noctis-bg-sidebar: #041d20 !important;
  --noctis-bg-tertiary: #062e32 !important;
  --noctis-blue: #49ace9 !important;
  --noctis-blue-bright: #60b6eb !important;
  --noctis-border: #0f1415 !important;
  --noctis-cursor: #85efff !important;
  --noctis-cyan: #49d6e9 !important;
  --noctis-cyan-bright: #60dbeb !important;
  --noctis-error: #e34e1c !important;
  --noctis-fg: #b2cacd !important;
  --noctis-fg-bright: #ebfdff !important;
  --noctis-fg-faint: #5b858b !important;
  --noctis-fg-muted: #87a7ab !important;
  --noctis-green: #49e9a6 !important;
  --noctis-green-bright: #60ebb1 !important;
  --noctis-info: #40d4e7 !important;
  --noctis-magenta: #7060eb !important;
  --noctis-orange: #d67e5c !important;
  --noctis-purple: #df769b !important;
  --noctis-purple-bright: #e798b3 !important;
  --noctis-red: #e66533 !important;
  --noctis-red-bright: #e97749 !important;
  --noctis-selection: #169fb144 !important;
  --noctis-success: #16b673 !important;
  --noctis-warning: #e69533 !important;
  --noctis-yellow: #e4b781 !important;
  --noctis-yellow-bright: #e69533 !important;
  --pdf-background: #052529 !important;
  --pdf-page-background: #052529 !important;
  --pdf-shadow: 0 0 0 1px #0f1415 !important;
  --pdf-sidebar-background: #052529 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #0f1415 !important;
  --pill-border-color: #0f1415 !important;
  --pill-color: #87a7ab !important;
  --pill-color-hover: #b2cacd !important;
  --pill-color-remove: #5b858b !important;
  --pill-color-remove-hover: #40d4e7 !important;
  --prompt-background: #052529 !important;
  --raised-background: color-mix(in srgb, #073940 65%, transparent) linear-gradient(#073940, color-mix(in srgb, #073940 65%, transparent)) !important;
  --ribbon-background: #052529 !important;
  --ribbon-background-collapsed: #052529 !important;
  --scrollbar-active-thumb-bg: #169fb1ad !important;
  --scrollbar-bg: #052529 !important;
  --scrollbar-thumb-bg: #6a90955b !important;
  --search-clear-button-color: #87a7ab !important;
  --search-icon-color: #87a7ab !important;
  --search-result-background: #052529 !important;
  --secondary: #40d4e7 !important;
  --setting-group-heading-color: #b2cacd !important;
  --setting-items-background: #041d20 !important;
  --setting-items-border-color: #0f1415 !important;
  --slider-track-background: #0f1415 !important;
  --status-bar-background: #041d20 !important;
  --status-bar-border-color: #0f1415 !important;
  --status-bar-text-color: #87a7ab !important;
  --suggestion-background: #052529 !important;
  --tab-background-active: #052529 !important;
  --tab-container-background: #041d20 !important;
  --tab-outline-color: #0f1415 !important;
  --tab-switcher-background: #041d20 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #041d20, transparent) !important;
  --tab-text-color: #5b858b !important;
  --tab-text-color-active: #87a7ab !important;
  --tab-text-color-focused: #87a7ab !important;
  --tab-text-color-focused-active: #87a7ab !important;
  --tab-text-color-focused-active-current: #b2cacd !important;
  --tab-text-color-focused-highlighted: #40d4e7 !important;
  --table-add-button-border-color: #0f1415 !important;
  --table-border-color: #0f1415 !important;
  --table-drag-handle-background-active: #099 !important;
  --table-drag-handle-color: #5b858b !important;
  --table-drag-handle-color-active: #0f1415 !important;
  --table-header-background: #041d20 !important;
  --table-header-border: #0f1415 !important;
  --table-header-border-color: #0f1415 !important;
  --table-header-color: #b2cacd !important;
  --table-row-background-hover: rgba(14, 102, 113, 0.2) !important;
  --table-selection-border-color: #099 !important;
  --tag-background: rgba(223, 118, 155, 0.15) !important;
  --tag-background-hover: rgba(223, 118, 155, 0.25) !important;
  --tag-color: #df769b !important;
  --tag-color-hover: #40d4e7 !important;
  --tertiary: #169fb1 !important;
  --text-accent: #40d4e7 !important;
  --text-accent-hover: #169fb1 !important;
  --text-error: #e34e1c !important;
  --text-error-hover: #e97749 !important;
  --text-faint: #5b858b !important;
  --text-highlight-bg: rgba(64, 212, 231, 0.3) !important;
  --text-highlight-bg-active: rgba(64, 212, 231, 0.5) !important;
  --text-muted: #87a7ab !important;
  --text-normal: #b2cacd !important;
  --text-on-accent: #0f1415 !important;
  --text-selection: #169fb144 !important;
  --textHighlight: rgba(64, 212, 231, 0.3) !important;
  --titlebar-background: #041d20 !important;
  --titlebar-background-focused: #041d20 !important;
  --titlebar-border-color: #0f1415 !important;
  --titlebar-text-color: #87a7ab !important;
  --titlebar-text-color-focused: #b2cacd !important;
  --vault-profile-color: #b2cacd !important;
  --vault-profile-color-hover: #b2cacd !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(4, 29, 32);
  color: rgb(178, 202, 205);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(5, 37, 41);
  color: rgb(178, 202, 205);
}

html body .bases-table thead th {
  background-color: rgb(4, 29, 32);
  border-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

html body .canvas-node {
  border-color: rgb(178, 202, 205);
}

html body .canvas-node-content {
  color: rgb(178, 202, 205);
}

html body .canvas-node-file {
  color: rgb(178, 202, 205);
}

html body .canvas-node-group {
  border-color: rgb(178, 202, 205);
}

html body .canvas-sidebar {
  background-color: rgb(4, 29, 32);
  border-color: rgb(178, 202, 205);
}

html body .note-properties {
  border-color: rgb(15, 20, 21);
}

html body .note-properties-key {
  color: rgb(135, 167, 171);
}

html body .note-properties-row {
  border-color: rgb(135, 167, 171);
}

html body .note-properties-tags {
  background-color: rgba(223, 118, 155, 0.15);
  color: rgb(223, 118, 155);
}

html body .note-properties-value {
  color: rgb(135, 167, 171);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(4, 29, 32);
  color: rgb(178, 202, 205);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(15, 20, 21);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(4, 29, 32);
  border-left-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

html body div#quartz-root {
  background-color: rgb(5, 37, 41);
  color: rgb(178, 202, 205);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(228, 183, 129);
  font-weight: 700;
  outline: rgb(228, 183, 129) none 0px;
  text-decoration-color: rgb(228, 183, 129);
}

html body .page article p > em, html em {
  color: rgb(214, 126, 92);
  outline: rgb(214, 126, 92) none 0px;
  text-decoration-color: rgb(214, 126, 92);
}

html body .page article p > i, html i {
  color: rgb(214, 126, 92);
  outline: rgb(214, 126, 92) none 0px;
  text-decoration-color: rgb(214, 126, 92);
}

html body .page article p > strong, html strong {
  color: rgb(228, 183, 129);
  font-weight: 700;
  outline: rgb(228, 183, 129) none 0px;
  text-decoration-color: rgb(228, 183, 129);
}

html body .text-highlight {
  background-color: rgba(64, 212, 231, 0.3);
  color: rgb(178, 202, 205);
  outline: rgb(178, 202, 205) none 0px;
  text-decoration-color: rgb(178, 202, 205);
}

html body del {
  color: rgb(178, 202, 205);
  outline: rgb(178, 202, 205) none 0px;
  text-decoration-color: rgb(178, 202, 205);
}

html body h1.article-title {
  color: rgb(178, 202, 205);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(64, 212, 231);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(64, 212, 231);
  border-color: rgb(64, 212, 231);
}

html body p {
  color: rgb(135, 167, 171);
  outline: rgb(135, 167, 171) none 0px;
  text-decoration-color: rgb(135, 167, 171);
}`,
    links: `html body a.external, html footer a {
  color: rgb(73, 172, 233);
  outline: rgb(73, 172, 233) none 0px;
  text-decoration-color: rgb(73, 172, 233);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(64, 212, 231);
  outline: rgb(64, 212, 231) none 0px;
  text-decoration-color: rgb(64, 212, 231);
}

html body a.internal.broken {
  color: rgb(64, 212, 231);
  outline: rgb(64, 212, 231) none 0px;
}`,
    lists: `html body dd {
  color: rgb(178, 202, 205);
}

html body dt {
  color: rgb(178, 202, 205);
}

html body ol > li {
  color: rgb(178, 202, 205);
}

html body ol.overflow {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body ul > li {
  color: rgb(178, 202, 205);
}

html body ul.overflow {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(91, 133, 139);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body table {
  color: rgb(178, 202, 205);
}

html body td {
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

html body th {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

html body tr {
  background-color: rgb(4, 29, 32);
}`,
    code: `html body code {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

html body pre > code > [data-line] {
  border-left-color: rgb(96, 219, 235);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(96, 219, 235);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(96, 219, 235);
  border-left-color: rgb(96, 219, 235);
  border-right-color: rgb(96, 219, 235);
  border-top-color: rgb(96, 219, 235);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
}

html body pre:has(> code) {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
}`,
    images: `html body audio {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body figcaption {
  color: rgb(178, 202, 205);
}

html body figure {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body img {
  border-bottom-color: rgb(64, 212, 231);
  border-left-color: rgb(64, 212, 231);
  border-right-color: rgb(64, 212, 231);
  border-top-color: rgb(64, 212, 231);
}

html body video {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
}

html body .footnotes {
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

html body .transclude {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(0, 153, 153);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body .transclude-inner {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(64, 212, 231);
  border-left-color: rgb(64, 212, 231);
  border-right-color: rgb(64, 212, 231);
  border-top-color: rgb(64, 212, 231);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(178, 202, 205);
  text-decoration-color: rgb(178, 202, 205);
}`,
    search: `html body .search > .search-button {
  background-color: rgb(7, 57, 64);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(178, 202, 205);
}

html body .search > .search-container > .search-space {
  background-color: rgb(7, 57, 64);
}

html body .search > .search-container > .search-space > * {
  color: rgb(178, 202, 205);
  outline: rgb(178, 202, 205) none 0px;
  text-decoration-color: rgb(178, 202, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 253, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 253, 255);
  border-left-color: rgb(235, 253, 255);
  border-right-color: rgb(235, 253, 255);
  border-top-color: rgb(235, 253, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(235, 253, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(14, 102, 113);
  color: rgb(235, 253, 255);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(4, 29, 32);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(14, 102, 113);
  border-bottom-color: rgb(235, 253, 255);
  border-left-color: rgb(235, 253, 255);
  border-right-color: rgb(235, 253, 255);
  border-top-color: rgb(235, 253, 255);
  color: rgb(235, 253, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(14, 102, 113);
  color: rgb(235, 253, 255);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(223, 118, 155, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(223, 118, 155);
}

html body h1 {
  color: rgb(64, 212, 231);
}

html body h2 {
  color: rgb(73, 233, 166);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(64, 212, 231);
}

html body h3 {
  color: rgb(228, 183, 129);
}

html body h4 {
  color: rgb(73, 172, 233);
}

html body h5 {
  color: rgb(223, 118, 155);
}

html body h6 {
  color: rgb(73, 214, 233);
}

html body hr {
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}

html body ::-webkit-scrollbar-track {
  background: rgb(5, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 37, 41);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(135, 167, 171);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(135, 167, 171);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(178, 202, 205);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}`,
    footer: `html body footer {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(22, 159, 177);
}

html body footer ul li a {
  color: rgb(22, 159, 177);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(178, 202, 205);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(135, 167, 171);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(135, 167, 171);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body li.section-li > .section .meta {
  color: rgb(135, 167, 171);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(135, 167, 171);
}

html body ul.section-ul {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}

html body .darkmode svg {
  color: rgb(135, 167, 171);
  stroke: rgb(135, 167, 171);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}

html body .breadcrumb-element p {
  color: rgb(91, 133, 139);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

html body .metadata {
  border-bottom-color: rgb(15, 20, 21);
  border-left-color: rgb(15, 20, 21);
  border-right-color: rgb(15, 20, 21);
  border-top-color: rgb(15, 20, 21);
  color: rgb(135, 167, 171);
}

html body .metadata-properties {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}

html body .navigation-progress {
  background-color: rgb(4, 29, 32);
}

html body .page-header h2.page-title {
  color: rgb(178, 202, 205);
}

html body abbr {
  color: rgb(178, 202, 205);
}

html body details {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body input[type=text] {
  border-bottom-color: rgb(135, 167, 171);
  border-left-color: rgb(135, 167, 171);
  border-right-color: rgb(135, 167, 171);
  border-top-color: rgb(135, 167, 171);
  color: rgb(135, 167, 171);
}

html body kbd {
  background-color: rgb(4, 29, 32);
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
  color: rgb(178, 202, 205);
}

html body progress {
  border-bottom-color: rgb(178, 202, 205);
  border-left-color: rgb(178, 202, 205);
  border-right-color: rgb(178, 202, 205);
  border-top-color: rgb(178, 202, 205);
}

html body sub {
  color: rgb(178, 202, 205);
}

html body summary {
  color: rgb(178, 202, 205);
}

html body sup {
  color: rgb(178, 202, 205);
}

html body ul.tags > li {
  background-color: rgba(223, 118, 155, 0.15);
  color: rgb(223, 118, 155);
}`,
  },
  light: {},
};
