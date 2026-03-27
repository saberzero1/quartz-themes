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
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body .page article p > em, html em {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body .page article p > i, html i {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body .page article p > strong, html strong {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body .text-highlight {
  background-color: rgba(3, 36, 62, 0.5);
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body del {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: line-through rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body p {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(199, 146, 234) none 0px;
  text-decoration: rgb(199, 146, 234);
  text-decoration-color: rgb(199, 146, 234);
}`,
    links: `html body a.external, html footer a {
  color: rgb(236, 196, 141);
  outline: rgb(236, 196, 141) none 0px;
  text-decoration: underline rgb(236, 196, 141);
  text-decoration-color: rgb(236, 196, 141);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(236, 196, 141);
  outline: rgb(236, 196, 141) none 0px;
  text-decoration: underline rgb(236, 196, 141);
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
  text-decoration: rgba(199, 146, 234, 0.592);
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
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body .katex-display > .katex > .katex-html {
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
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
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(1, 22, 39);
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
  text-decoration: rgb(171, 178, 191);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
  text-decoration: rgb(199, 146, 234);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  text-decoration: rgb(199, 146, 234);
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
  text-decoration: rgb(199, 146, 234);
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
  text-decoration: rgb(199, 146, 234);
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
  text-decoration: rgb(199, 146, 234);
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
  text-decoration: underline dotted rgb(171, 178, 191);
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
}`,
  },
  light: {},
};
