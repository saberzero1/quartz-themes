import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "purple-owl",
    modes: ["dark"],
    variations: [],
    fonts: ["monaspace-argon"],
  },
  dark: {
    base: `:root:root {
  --accent-d: 60% !important;
  --background-match-highlight: hsla(258, 40%, 62%, 0.2) !important;
  --background-modifier-accent: hsl(258,88%,50%) !important;
  --background-modifier-border: #03243e !important;
  --background-modifier-border-focus: #ecc48d !important;
  --background-modifier-border-hover: #c792ea !important;
  --background-modifier-cover: hsla(207, 95%, 8%, 0.678) !important;
  --background-primary: #011627 !important;
  --background-primary-alt: rgba(3, 36, 62, 0.5) !important;
  --background-secondary: #021D33 !important;
  --background-secondary-alt: rgba(5, 40, 70, 0.5) !important;
  --background-tertiary: #082632 !important;
  --background-translucent: hsla(276,68%,15%,0.85) !important;
  --background-transparent: hsla(276,68%,15%,0) !important;
  --base-d: 15% !important;
  --base-h: 276 !important;
  --base-l: 75% !important;
  --base-s: 68% !important;
  --bases-cards-background: #011627 !important;
  --bases-cards-cover-background: rgba(3, 36, 62, 0.5) !important;
  --bases-cards-shadow: 0 0 0 1px #03243e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #c792ea !important;
  --bases-embed-border-color: #03243e !important;
  --bases-group-heading-property-color: #c792ea !important;
  --bases-table-border-color: #03243e !important;
  --bases-table-cell-background-active: #011627 !important;
  --bases-table-cell-background-disabled: rgba(3, 36, 62, 0.5) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #ecc48d !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c792ea !important;
  --bases-table-group-background: rgba(3, 36, 62, 0.5) !important;
  --bases-table-header-background: #011627 !important;
  --bases-table-header-color: #c792ea !important;
  --bases-table-summary-background: #011627 !important;
  --blockquote-border-color: #c792ea !important;
  --border-width-alt: 1px !important;
  --canvas-background: #011627 !important;
  --canvas-card-label-color: rgba(199, 146, 234, 0.593) !important;
  --caret-color: #abb2bf !important;
  --checkbox-border-color: rgba(199, 146, 234, 0.593) !important;
  --checkbox-border-color-hover: #c792ea !important;
  --checkbox-color: #c792ea !important;
  --checkbox-color-hover: rgb(141, 67, 190) !important;
  --checkbox-marker-color: #011627 !important;
  --checklist-done-color: #c792ea !important;
  --code-background: rgba(3, 36, 62, 0.5) !important;
  --code-border-color: #03243e !important;
  --code-comment: rgba(199, 146, 234, 0.593) !important;
  --code-normal: #abb2bf !important;
  --code-punctuation: #c792ea !important;
  --collapse-icon-color: rgba(199, 146, 234, 0.593) !important;
  --collapse-icon-color-collapsed: #ecc48d !important;
  --dark: #abb2bf !important;
  --darkgray: #abb2bf !important;
  --divider-color: #03243e !important;
  --divider-color-hover: #c792ea !important;
  --embed-block-shadow-hover: 0 0 0 1px #03243e, inset 0 0 0 1px #03243e !important;
  --embed-border-start: 2px solid #c792ea !important;
  --file-header-background: #011627 !important;
  --file-header-background-focused: #011627 !important;
  --flair-color: #abb2bf !important;
  --font-adaptive-normal: 400 !important;
  --font-adaptive-small: 0.933em !important;
  --font-adaptive-smaller: 0.875em !important;
  --font-adaptive-smallest: 0.8em !important;
  --font-settings: 14px !important;
  --font-settings-small: 12px !important;
  --font-ui: "monolisa", menlo, SFMono-Regular, Consolas, monospace !important;
  --footnote-divider-color: #03243e !important;
  --footnote-id-color: #c792ea !important;
  --footnote-id-color-no-occurrences: rgba(199, 146, 234, 0.593) !important;
  --graph-node: #c792ea !important;
  --graph-node-focused: #ecc48d !important;
  --graph-node-unresolved: rgba(199, 146, 234, 0.593) !important;
  --graph-text: #abb2bf !important;
  --gray: #c792ea !important;
  --h1: 1.125em !important;
  --h1-weight: 600 !important;
  --h2: 1em !important;
  --h2-weight: 600 !important;
  --h3: 1em !important;
  --h3-weight: 500 !important;
  --h4: 0.90em !important;
  --h4-weight: 500 !important;
  --h5: 0.85em !important;
  --h5-weight: 500 !important;
  --h6: 0.85em !important;
  --h6-weight: 400 !important;
  --heading-formatting: rgba(199, 146, 234, 0.593) !important;
  --highlight: rgba(3, 36, 62, 0.5) !important;
  --hr-color: #03243e !important;
  --icon-color: #c792ea !important;
  --icon-color-active: #ecc48d !important;
  --icon-color-focused: #abb2bf !important;
  --icon-color-hover: #c792ea !important;
  --icon-hex: FFF !important;
  --icon-muted: 0.4 !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgba(199, 146, 234, 0.593) !important;
  --input-placeholder-color: rgba(199, 146, 234, 0.593) !important;
  --interactive-accent: #c792ea !important;
  --interactive-accent-hover: rgb(141, 67, 190) !important;
  --interactive-accent-rgb: 66, 66, 66 !important;
  --light: #011627 !important;
  --lightgray: #021D33 !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --line-width-adaptive: 40rem !important;
  --link-color: #ecc48d !important;
  --link-color-hover: #c792ea !important;
  --link-external-color: #ecc48d !important;
  --link-external-color-hover: #c792ea !important;
  --link-unresolved-color: #ecc48d !important;
  --list-marker-color: rgba(199, 146, 234, 0.593) !important;
  --list-marker-color-collapsed: #ecc48d !important;
  --list-marker-color-hover: #c792ea !important;
  --max-width: 88% !important;
  --menu-background: #021D33 !important;
  --menu-border-color: #c792ea !important;
  --metadata-border-color: #03243e !important;
  --metadata-divider-color: #03243e !important;
  --metadata-input-text-color: #abb2bf !important;
  --metadata-label-text-color: #c792ea !important;
  --metadata-label-text-color-hover: #c792ea !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #ecc48d !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #c792ea !important;
  --modal-background: #011627 !important;
  --nav-collapse-icon-color: rgba(199, 146, 234, 0.593) !important;
  --nav-collapse-icon-color-collapsed: rgba(199, 146, 234, 0.593) !important;
  --nav-heading-color: #abb2bf !important;
  --nav-heading-color-collapsed: rgba(199, 146, 234, 0.593) !important;
  --nav-heading-color-collapsed-hover: #c792ea !important;
  --nav-heading-color-hover: #abb2bf !important;
  --nav-item-color: #c792ea !important;
  --nav-item-color-active: #abb2bf !important;
  --nav-item-color-highlighted: #ecc48d !important;
  --nav-item-color-hover: #abb2bf !important;
  --nav-item-color-selected: #abb2bf !important;
  --nav-tag-color: rgba(199, 146, 234, 0.593) !important;
  --nav-tag-color-active: #c792ea !important;
  --nav-tag-color-hover: #c792ea !important;
  --nested-padding: 3.5% !important;
  --normal-weight: 400 !important;
  --pdf-background: #011627 !important;
  --pdf-page-background: #011627 !important;
  --pdf-shadow: 0 0 0 1px #03243e !important;
  --pdf-sidebar-background: #011627 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #03243e !important;
  --pill-border-color: #03243e !important;
  --pill-border-color-hover: #c792ea !important;
  --pill-color: #c792ea !important;
  --pill-color-hover: #abb2bf !important;
  --pill-color-remove: rgba(199, 146, 234, 0.593) !important;
  --pill-color-remove-hover: #ecc48d !important;
  --prompt-background: #011627 !important;
  --quote-opening-modifier: hsl(276,68%,25%) !important;
  --ribbon-background: #021D33 !important;
  --ribbon-background-collapsed: #011627 !important;
  --search-clear-button-color: #c792ea !important;
  --search-icon-color: #c792ea !important;
  --search-result-background: #011627 !important;
  --secondary: #ecc48d !important;
  --setting-group-heading-color: #abb2bf !important;
  --setting-items-background: rgba(3, 36, 62, 0.5) !important;
  --setting-items-border-color: #03243e !important;
  --slider-thumb-border-color: #c792ea !important;
  --slider-track-background: #03243e !important;
  --status-bar-background: #021D33 !important;
  --status-bar-border-color: #03243e !important;
  --status-bar-text-color: #c792ea !important;
  --suggestion-background: #011627 !important;
  --tab-background-active: #011627 !important;
  --tab-container-background: #021D33 !important;
  --tab-divider-color: #c792ea !important;
  --tab-outline-color: #03243e !important;
  --tab-switcher-background: #021D33 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #021D33, transparent) !important;
  --tab-text-color: rgba(199, 146, 234, 0.593) !important;
  --tab-text-color-active: #c792ea !important;
  --tab-text-color-focused: #c792ea !important;
  --tab-text-color-focused-active: #c792ea !important;
  --tab-text-color-focused-active-current: #abb2bf !important;
  --tab-text-color-focused-highlighted: #ecc48d !important;
  --table-add-button-border-color: #03243e !important;
  --table-border-color: #03243e !important;
  --table-drag-handle-background-active: #c792ea !important;
  --table-drag-handle-color: rgba(199, 146, 234, 0.593) !important;
  --table-header-border-color: #03243e !important;
  --table-header-color: #abb2bf !important;
  --table-selection-border-color: #c792ea !important;
  --tag-color: #ecc48d !important;
  --tag-color-hover: #ecc48d !important;
  --tertiary: #c792ea !important;
  --text: "monolisa", menlo, SFMono-Regular, Consolas, monospace !important;
  --text-accent: #ecc48d !important;
  --text-accent-hover: #c792ea !important;
  --text-code: #c792ea !important;
  --text-editor: "monolisa", menlo, SFMono-Regular, Consolas, monospace !important;
  --text-faint: rgba(199, 146, 234, 0.593) !important;
  --text-highlight-bg: rgba(3, 36, 62, 0.5) !important;
  --text-highlight-bg-active: rgba(3, 36, 62, 0.1) !important;
  --text-muted: #c792ea !important;
  --text-normal: #abb2bf !important;
  --text-selection: rgba(197, 146, 234, 0.651) !important;
  --textHighlight: rgba(3, 36, 62, 0.5) !important;
  --titlebar-background: #021D33 !important;
  --titlebar-background-focused: rgba(5, 40, 70, 0.5) !important;
  --titlebar-border-color: #03243e !important;
  --titlebar-text-color: #c792ea !important;
  --titlebar-text-color-focused: #abb2bf !important;
  --vault-profile-color: #abb2bf !important;
  --vault-profile-color-hover: #abb2bf !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(2, 29, 51);
  color: rgb(171, 178, 191);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(1, 22, 39);
  color: rgb(171, 178, 191);
}

html body .bases-table thead th {
  border-color: rgb(3, 36, 62) rgb(3, 36, 62) rgb(3, 36, 62) rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html body .canvas-node {
  border-color: rgb(171, 178, 191);
}

html body .canvas-node-content {
  color: rgb(171, 178, 191);
}

html body .canvas-node-file {
  color: rgb(171, 178, 191);
}

html body .canvas-node-group {
  border-color: rgb(171, 178, 191);
}

html body .canvas-sidebar {
  background-color: rgb(2, 29, 51);
  border-color: rgb(171, 178, 191);
}

html body .note-properties {
  border-color: rgb(3, 36, 62);
}

html body .note-properties-key {
  color: rgb(199, 146, 234);
}

html body .note-properties-row {
  border-color: rgb(199, 146, 234);
}

html body .note-properties-tags {
  color: rgb(236, 196, 141);
}

html body .note-properties-value {
  color: rgb(199, 146, 234);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(171, 178, 191);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(3, 36, 62);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(2, 29, 51);
  border-left-color: rgb(3, 36, 62);
  color: rgb(171, 178, 191);
}

html body div#quartz-root {
  background-color: rgb(1, 22, 39);
  color: rgb(171, 178, 191);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration-color: rgb(171, 178, 191);
}

html body .page article p > em, html em {
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration-color: rgb(171, 178, 191);
}

html body .page article p > i, html i {
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration-color: rgb(171, 178, 191);
}

html body .page article p > strong, html strong {
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration-color: rgb(171, 178, 191);
}

html body .text-highlight {
  background-color: rgba(3, 36, 62, 0.5);
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration-color: rgb(171, 178, 191);
}

html body del {
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration-color: rgb(171, 178, 191);
}

html body h1.article-title {
  color: rgb(171, 178, 191);
  font-size: 14.625px;
  font-weight: 600;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(199, 146, 234);
  border-radius: 50%;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(83, 15, 240);
  border-color: rgb(83, 15, 240);
}

html body p {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(199, 146, 234) none 0px;
  text-decoration-color: rgb(199, 146, 234);
}`,
    links: `html body a.external, html footer a {
  color: rgb(236, 196, 141);
  outline: rgb(236, 196, 141) none 0px;
  text-decoration-color: rgb(236, 196, 141);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(236, 196, 141);
  outline: rgb(236, 196, 141) none 0px;
  text-decoration-color: rgb(236, 196, 141);
}

html body a.internal.broken {
  color: rgb(236, 196, 141);
  outline: rgb(236, 196, 141) none 0px;
}`,
    lists: `html body dd {
  color: rgb(171, 178, 191);
}

html body dt {
  color: rgb(171, 178, 191);
}

html body ol > li {
  color: rgb(171, 178, 191);
}

html body ol.overflow {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body ul > li {
  color: rgb(171, 178, 191);
}

html body ul.overflow {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(199, 146, 234, 0.592);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body table {
  color: rgb(171, 178, 191);
  width: 215.219px;
}

html body td {
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(171, 178, 191);
  border-left-width: 0px;
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  color: rgb(171, 178, 191);
  padding-left: 0px;
}

html body th {
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(171, 178, 191);
  border-left-width: 0px;
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  border-top-width: 0px;
  color: rgb(171, 178, 191);
  padding-left: 0px;
  text-align: left;
}`,
    code: `html body code {
  border-bottom-color: rgba(199, 146, 234, 0.592);
  border-left-color: rgba(199, 146, 234, 0.592);
  border-right-color: rgba(199, 146, 234, 0.592);
  border-top-color: rgba(199, 146, 234, 0.592);
  color: rgba(199, 146, 234, 0.592);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  color: rgb(171, 178, 191);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(3, 36, 62);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body figcaption {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body figure {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body img {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body video {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}`,
    embeds: `html body .file-embed {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
}

html body .footnotes {
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html body .transclude {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body .transclude-inner {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body .katex-display > .katex > .katex-html {
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(199, 146, 234);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-right: 6px;
  width: 18px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(2, 29, 51);
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body .search > .search-container > .search-space {
  background-color: rgb(1, 22, 39);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 30px 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration-color: rgb(171, 178, 191);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(171, 178, 191);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(171, 178, 191);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(8, 38, 50);
  color: rgb(171, 178, 191);
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(171, 178, 191);
  border-bottom-width: 0px;
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(8, 38, 50);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(8, 38, 50);
  color: rgb(171, 178, 191);
}

html body a.internal.tag-link::before {
  color: rgb(236, 196, 141);
}

html body h1 {
  color: rgb(171, 178, 191);
}

html body h2 {
  color: rgb(171, 178, 191);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(171, 178, 191);
}

html body h3 {
  color: rgb(171, 178, 191);
}

html body h4 {
  color: rgb(171, 178, 191);
}

html body h5 {
  color: rgb(171, 178, 191);
}

html body h6 {
  color: rgb(199, 146, 234);
}

html body hr {
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

html body ::-webkit-scrollbar-track {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(171, 178, 191);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  color: rgb(199, 146, 234);
}`,
    footer: `html body footer {
  background-color: rgb(2, 29, 51);
  border-bottom-color: rgb(3, 36, 62);
  border-bottom-width: 1px;
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-right-width: 1px;
  border-top-color: rgb(3, 36, 62);
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body footer ul li a {
  color: rgb(199, 146, 234);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(199, 146, 234);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body li.section-li > .section .meta {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(199, 146, 234);
}

html body ul.section-ul {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  color: rgb(199, 146, 234);
}

html body .darkmode svg {
  color: rgb(199, 146, 234);
  stroke: rgb(199, 146, 234);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  color: rgb(199, 146, 234);
}

html body .breadcrumb-element p {
  color: rgba(199, 146, 234, 0.592);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html body .metadata {
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  color: rgb(199, 146, 234);
}

html body .metadata-properties {
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  color: rgb(199, 146, 234);
}

html body .navigation-progress {
  background-color: rgb(2, 29, 51);
}

html body .page-header h2.page-title {
  color: rgb(171, 178, 191);
}

html body abbr {
  color: rgb(171, 178, 191);
}

html body details {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body input[type=text] {
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html body kbd {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html body progress {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

html body sub {
  color: rgb(171, 178, 191);
}

html body summary {
  color: rgb(171, 178, 191);
}

html body sup {
  color: rgb(171, 178, 191);
}

html body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(3, 36, 62);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgb(3, 36, 62);
  border-left-width: 1px;
  border-right-color: rgb(3, 36, 62);
  border-right-width: 1px;
  border-top-color: rgb(3, 36, 62);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
  color: rgb(199, 146, 234);
}`,
  },
  light: {},
};
