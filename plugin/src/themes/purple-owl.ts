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
  --accent-d: 60%;
  --background-match-highlight: rgba(143, 119, 197, 0.2);
  --background-modifier-accent: rgb(83, 15, 240);
  --background-modifier-border: #03243e;
  --background-modifier-border-focus: #ecc48d;
  --background-modifier-border-hover: #c792ea;
  --background-modifier-cover: rgba(1, 22, 40, 0.678);
  --background-primary: #011627;
  --background-primary-alt: rgba(3, 36, 62, 0.5);
  --background-secondary: #021D33;
  --background-secondary-alt: rgba(5, 40, 70, 0.5);
  --background-tertiary: #082632;
  --background-translucent: rgba(43, 12, 64, 0.85);
  --background-transparent: rgba(43, 12, 64, 0);
  --base-d: 15%;
  --base-h: 276;
  --base-l: 75%;
  --base-s: 68%;
  --bases-cards-background: #011627;
  --bases-cards-cover-background: rgba(3, 36, 62, 0.5);
  --bases-cards-shadow: 0 0 0 1px #03243e;
  --bases-cards-shadow-hover: 0 0 0 1px #c792ea;
  --bases-embed-border-color: #03243e;
  --bases-group-heading-property-color: #c792ea;
  --bases-table-border-color: #03243e;
  --bases-table-cell-background-active: #011627;
  --bases-table-cell-background-disabled: rgba(3, 36, 62, 0.5);
  --bases-table-cell-shadow-active: 0 0 0 2px #ecc48d;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c792ea;
  --bases-table-group-background: rgba(3, 36, 62, 0.5);
  --bases-table-header-background: #011627;
  --bases-table-header-color: #c792ea;
  --bases-table-summary-background: #011627;
  --blockquote-border-color: #c792ea;
  --border-width-alt: 1px;
  --canvas-background: #011627;
  --canvas-card-label-color: rgba(199, 146, 234, 0.593);
  --caret-color: #abb2bf;
  --checkbox-border-color: rgba(199, 146, 234, 0.593);
  --checkbox-border-color-hover: #c792ea;
  --checkbox-color: #c792ea;
  --checkbox-color-hover: rgb(141, 67, 190);
  --checkbox-marker-color: #011627;
  --checklist-done-color: #c792ea;
  --code-background: rgba(3, 36, 62, 0.5);
  --code-border-color: #03243e;
  --code-comment: rgba(199, 146, 234, 0.593);
  --code-normal: #abb2bf;
  --code-punctuation: #c792ea;
  --collapse-icon-color: rgba(199, 146, 234, 0.593);
  --collapse-icon-color-collapsed: #ecc48d;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #03243e;
  --divider-color-hover: #c792ea;
  --embed-block-shadow-hover: 0 0 0 1px #03243e, inset 0 0 0 1px #03243e;
  --embed-border-start: 2px solid #c792ea;
  --file-header-background: #011627;
  --file-header-background-focused: #011627;
  --flair-color: #abb2bf;
  --font-adaptive-normal: 400;
  --font-adaptive-small: 0.933em;
  --font-adaptive-smaller: 0.875em;
  --font-adaptive-smallest: 0.8em;
  --font-settings: 14px;
  --font-settings-small: 12px;
  --font-ui: "monolisa", menlo, SFMono-Regular, Consolas, monospace;
  --footnote-divider-color: #03243e;
  --footnote-id-color: #c792ea;
  --footnote-id-color-no-occurrences: rgba(199, 146, 234, 0.593);
  --graph-node: #c792ea;
  --graph-node-focused: #ecc48d;
  --graph-node-unresolved: rgba(199, 146, 234, 0.593);
  --graph-text: #abb2bf;
  --gray: var(--text-muted);
  --h1: 1.125em;
  --h1-weight: 600;
  --h2: 1em;
  --h2-weight: 600;
  --h3: 1em;
  --h3-weight: 500;
  --h4: 0.90em;
  --h4-weight: 500;
  --h5: 0.85em;
  --h5-weight: 500;
  --h6: 0.85em;
  --h6-weight: 400;
  --heading-formatting: rgba(199, 146, 234, 0.593);
  --highlight: var(--text-highlight-bg);
  --hr-color: #03243e;
  --icon-color: #c792ea;
  --icon-color-active: #ecc48d;
  --icon-color-focused: #abb2bf;
  --icon-color-hover: #c792ea;
  --icon-hex: FFF;
  --icon-muted: 0.4;
  --inline-title-weight: 600;
  --input-date-separator: rgba(199, 146, 234, 0.593);
  --input-placeholder-color: rgba(199, 146, 234, 0.593);
  --interactive-accent: #c792ea;
  --interactive-accent-hover: rgb(141, 67, 190);
  --interactive-accent-rgb: 66, 66, 66;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-width: 40rem;
  --line-width-adaptive: 40rem;
  --link-color: #ecc48d;
  --link-color-hover: #c792ea;
  --link-external-color: #ecc48d;
  --link-external-color-hover: #c792ea;
  --link-unresolved-color: #ecc48d;
  --list-marker-color: rgba(199, 146, 234, 0.593);
  --list-marker-color-collapsed: #ecc48d;
  --list-marker-color-hover: #c792ea;
  --max-width: 88%;
  --menu-background: #021D33;
  --menu-border-color: #c792ea;
  --metadata-border-color: #03243e;
  --metadata-divider-color: #03243e;
  --metadata-input-text-color: #abb2bf;
  --metadata-label-text-color: #c792ea;
  --metadata-label-text-color-hover: #c792ea;
  --metadata-property-box-shadow-focus: 0 0 0 2px #ecc48d;
  --metadata-property-box-shadow-hover: 0 0 0 1px #c792ea;
  --modal-background: #011627;
  --nav-collapse-icon-color: rgba(199, 146, 234, 0.593);
  --nav-collapse-icon-color-collapsed: rgba(199, 146, 234, 0.593);
  --nav-heading-color: #abb2bf;
  --nav-heading-color-collapsed: rgba(199, 146, 234, 0.593);
  --nav-heading-color-collapsed-hover: #c792ea;
  --nav-heading-color-hover: #abb2bf;
  --nav-item-color: #c792ea;
  --nav-item-color-active: #abb2bf;
  --nav-item-color-highlighted: #ecc48d;
  --nav-item-color-hover: #abb2bf;
  --nav-item-color-selected: #abb2bf;
  --nav-tag-color: rgba(199, 146, 234, 0.593);
  --nav-tag-color-active: #c792ea;
  --nav-tag-color-hover: #c792ea;
  --nested-padding: 3.5%;
  --normal-weight: 400;
  --pdf-background: #011627;
  --pdf-page-background: #011627;
  --pdf-shadow: 0 0 0 1px #03243e;
  --pdf-sidebar-background: #011627;
  --pdf-thumbnail-shadow: 0 0 0 1px #03243e;
  --pill-border-color: #03243e;
  --pill-border-color-hover: #c792ea;
  --pill-color: #c792ea;
  --pill-color-hover: #abb2bf;
  --pill-color-remove: rgba(199, 146, 234, 0.593);
  --pill-color-remove-hover: #ecc48d;
  --prompt-background: #011627;
  --quote-opening-modifier: rgb(72, 20, 107);
  --ribbon-background: #021D33;
  --ribbon-background-collapsed: #011627;
  --search-clear-button-color: #c792ea;
  --search-icon-color: #c792ea;
  --search-result-background: #011627;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #abb2bf;
  --setting-items-background: rgba(3, 36, 62, 0.5);
  --setting-items-border-color: #03243e;
  --slider-thumb-border-color: #c792ea;
  --slider-track-background: #03243e;
  --status-bar-background: #021D33;
  --status-bar-border-color: #03243e;
  --status-bar-text-color: #c792ea;
  --suggestion-background: #011627;
  --tab-background-active: #011627;
  --tab-container-background: #021D33;
  --tab-divider-color: #c792ea;
  --tab-outline-color: #03243e;
  --tab-switcher-background: #021D33;
  --tab-switcher-menubar-background: linear-gradient(to top, #021D33, transparent);
  --tab-text-color: rgba(199, 146, 234, 0.593);
  --tab-text-color-active: #c792ea;
  --tab-text-color-focused: #c792ea;
  --tab-text-color-focused-active: #c792ea;
  --tab-text-color-focused-active-current: #abb2bf;
  --tab-text-color-focused-highlighted: #ecc48d;
  --table-add-button-border-color: #03243e;
  --table-border-color: #03243e;
  --table-drag-handle-background-active: #c792ea;
  --table-drag-handle-color: rgba(199, 146, 234, 0.593);
  --table-header-border-color: #03243e;
  --table-header-color: #abb2bf;
  --table-selection-border-color: #c792ea;
  --tag-color: #ecc48d;
  --tag-color-hover: #ecc48d;
  --tertiary: var(--text-accent-hover);
  --text: "monolisa", menlo, SFMono-Regular, Consolas, monospace;
  --text-accent: #ecc48d;
  --text-accent-hover: #c792ea;
  --text-code: #c792ea;
  --text-editor: "monolisa", menlo, SFMono-Regular, Consolas, monospace;
  --text-faint: rgba(199, 146, 234, 0.593);
  --text-highlight-bg: rgba(3, 36, 62, 0.5);
  --text-highlight-bg-active: rgba(3, 36, 62, 0.1);
  --text-muted: #c792ea;
  --text-normal: #abb2bf;
  --text-selection: rgba(197, 146, 234, 0.651);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #021D33;
  --titlebar-background-focused: rgba(5, 40, 70, 0.5);
  --titlebar-border-color: #03243e;
  --titlebar-text-color: #c792ea;
  --titlebar-text-color-focused: #abb2bf;
  --vault-profile-color: #abb2bf;
  --vault-profile-color-hover: #abb2bf;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(2, 29, 51);
  color: rgb(171, 178, 191);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(1, 22, 39);
  color: rgb(171, 178, 191);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(171, 178, 191);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(3, 36, 62);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(2, 29, 51);
  border-left-color: rgb(3, 36, 62);
  color: rgb(171, 178, 191);
}

body div#quartz-root {
  background-color: rgb(1, 22, 39);
  color: rgb(171, 178, 191);
}`,
    typography: `body .page article p > b, b {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body .page article p > em, em {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body .page article p > i, i {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body .page article p > strong, strong {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body .text-highlight {
  background-color: rgba(3, 36, 62, 0.5);
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body del {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: line-through rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body p {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  outline: rgb(199, 146, 234) none 0px;
  text-decoration: rgb(199, 146, 234);
  text-decoration-color: rgb(199, 146, 234);
}`,
    links: `body a.external, footer a {
  color: rgb(236, 196, 141);
  outline: rgb(236, 196, 141) none 0px;
  text-decoration: underline rgb(236, 196, 141);
  text-decoration-color: rgb(236, 196, 141);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(236, 196, 141);
  outline: rgb(236, 196, 141) none 0px;
  text-decoration: underline rgb(236, 196, 141);
  text-decoration-color: rgb(236, 196, 141);
}

body a.internal.broken {
  color: rgb(236, 196, 141);
  outline: rgb(236, 196, 141) none 0px;
}`,
    lists: `body dd {
  color: rgb(171, 178, 191);
}

body dt {
  color: rgb(171, 178, 191);
}

body ol > li {
  color: rgb(171, 178, 191);
}

body ol.overflow {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body ul > li {
  color: rgb(171, 178, 191);
}

body ul.overflow {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(199, 146, 234, 0.592);
  text-decoration: rgba(199, 146, 234, 0.592);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body table {
  color: rgb(171, 178, 191);
  width: 215.219px;
}

body td {
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(171, 178, 191);
  border-left-width: 0px;
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  color: rgb(171, 178, 191);
  padding-left: 0px;
}

body th {
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
    code: `body code {
  border-bottom-color: rgba(199, 146, 234, 0.592);
  border-left-color: rgba(199, 146, 234, 0.592);
  border-right-color: rgba(199, 146, 234, 0.592);
  border-top-color: rgba(199, 146, 234, 0.592);
  color: rgba(199, 146, 234, 0.592);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  color: rgb(171, 178, 191);
}

body pre > code, pre:has(> code) {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
}

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body figcaption {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

body figure {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body img {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body video {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}`,
    embeds: `body .file-embed {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
}

body .footnotes {
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

body .transclude {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body .transclude-inner {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='*'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='-'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='/'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='>'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='?'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='I'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='S'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='b'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='c'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='d'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='f'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='i'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='k'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='l'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='p'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='u'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body li.task-list-item[data-task='w'] {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}`,
    search: `body .search > .search-button {
  background-color: rgb(2, 29, 51);
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(1, 22, 39);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 30px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(171, 178, 191);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(171, 178, 191);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(8, 38, 50);
  color: rgb(171, 178, 191);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(171, 178, 191);
  border-bottom-width: 0px;
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(8, 38, 50);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(8, 38, 50);
  color: rgb(171, 178, 191);
}

body a.internal.tag-link::before {
  color: rgb(236, 196, 141);
}

body h1 {
  color: rgb(171, 178, 191);
}

body h2 {
  color: rgb(171, 178, 191);
}

body h2.page-title, h2.page-title a {
  color: rgb(171, 178, 191);
}

body h3 {
  color: rgb(171, 178, 191);
}

body h4 {
  color: rgb(171, 178, 191);
}

body h5 {
  color: rgb(171, 178, 191);
}

body h6 {
  color: rgb(199, 146, 234);
}

body hr {
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

body ::-webkit-scrollbar-corner {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

body ::-webkit-scrollbar-track {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  text-decoration: rgb(199, 146, 234);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  text-decoration: rgb(199, 146, 234);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
  text-decoration: rgb(199, 146, 234);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(8, 38, 50);
  border-bottom-color: rgb(2, 29, 51);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(2, 29, 51);
  border-right-color: rgb(2, 29, 51);
  border-top-color: rgb(2, 29, 51);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(171, 178, 191);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  color: rgb(199, 146, 234);
}`,
    footer: `body footer {
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

body footer ul li a {
  color: rgb(199, 146, 234);
  text-decoration: rgb(199, 146, 234);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(171, 178, 191);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(199, 146, 234);
  text-decoration: rgb(199, 146, 234);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body li.section-li > .section .meta {
  color: rgb(199, 146, 234);
  font-family: monolisa, menlo, SFMono-Regular, Consolas, monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(199, 146, 234);
  text-decoration: rgb(199, 146, 234);
}

body ul.section-ul {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  color: rgb(199, 146, 234);
}

body .darkmode svg {
  color: rgb(199, 146, 234);
  stroke: rgb(199, 146, 234);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  color: rgb(199, 146, 234);
}

body .breadcrumb-element p {
  color: rgba(199, 146, 234, 0.592);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

body .metadata {
  border-bottom-color: rgb(3, 36, 62);
  border-left-color: rgb(3, 36, 62);
  border-right-color: rgb(3, 36, 62);
  border-top-color: rgb(3, 36, 62);
  color: rgb(199, 146, 234);
}

body .metadata-properties {
  border-bottom-color: rgb(199, 146, 234);
  border-left-color: rgb(199, 146, 234);
  border-right-color: rgb(199, 146, 234);
  border-top-color: rgb(199, 146, 234);
  color: rgb(199, 146, 234);
}

body .navigation-progress {
  background-color: rgb(2, 29, 51);
}

body .page-header h2.page-title {
  color: rgb(171, 178, 191);
}

body abbr {
  color: rgb(171, 178, 191);
  text-decoration: underline dotted rgb(171, 178, 191);
}

body details {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body input[type=text] {
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

body kbd {
  background-color: rgba(3, 36, 62, 0.5);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

body progress {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
}

body sub {
  color: rgb(171, 178, 191);
}

body summary {
  color: rgb(171, 178, 191);
}

body sup {
  color: rgb(171, 178, 191);
}`,
  },
  light: {},
};
