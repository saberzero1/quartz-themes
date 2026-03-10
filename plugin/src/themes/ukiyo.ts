import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ukiyo",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cmu-typewriter-text", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --activeline: #51454140;
  --background-modifier-border: #504431;
  --background-modifier-border-focus: #504431;
  --background-modifier-border-hover: #645743;
  --background-modifier-form-field: #2b2723;
  --background-modifier-form-field-hover: #2b2723;
  --background-modifier-message: #281f1b;
  --background-primary: #372d29;
  --background-primary-alt: #2b2723;
  --background-secondary: #413632;
  --background-secondary-alt: #504431;
  --bases-cards-background: #372d29;
  --bases-cards-cover-background: #2b2723;
  --bases-cards-shadow: 0 0 0 1px #504431;
  --bases-cards-shadow-hover: 0 0 0 1px #645743;
  --bases-embed-border-color: #504431;
  --bases-group-heading-property-color: #b2a699;
  --bases-group-heading-property-size: 13px;
  --bases-table-border-color: #504431;
  --bases-table-cell-background-active: #372d29;
  --bases-table-cell-background-disabled: #2b2723;
  --bases-table-cell-shadow-active: 0 0 0 2px #504431;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ba945f;
  --bases-table-group-background: #2b2723;
  --bases-table-header-background: #372d29;
  --bases-table-header-color: #b2a699;
  --bases-table-summary-background: #372d29;
  --blockquote-border-color: #ba945f;
  --blur-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent));
  --bodyFont: var(--font-text);
  --canvas-background: #372d29;
  --canvas-card-label-color: #868074;
  --canvas-dot-pattern: #504431;
  --caret-color: #ccc2b7;
  --checkbox-border-color: #868074;
  --checkbox-border-color-hover: #b2a699;
  --checkbox-color: #ba945f;
  --checkbox-color-hover: #ba945f;
  --checkbox-marker-color: #372d29;
  --checklist-done-color: #b2a699;
  --clickable-icon-radius: 0px;
  --code-background: #2b2723;
  --code-border-color: #504431;
  --code-comment: #868074;
  --code-normal: #ccc2b7;
  --code-punctuation: #b2a699;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #868074;
  --collapse-icon-color-collapsed: #ba945f;
  --color-accent: #ba945f;
  --color-accent-1: #ba945f;
  --color-accent-2: #e0ba86;
  --color-base-00: #372d29;
  --color-base-05: #413632;
  --color-base-10: #2b2723;
  --color-base-100: #ccc2b7;
  --color-base-20: #413632;
  --color-base-25: #2b2723;
  --color-base-30: #504431;
  --color-base-35: #645743;
  --color-base-40: #504431;
  --color-base-50: #868074;
  --color-base-70: #b2a699;
  --color-bold: #ba945f;
  --color-italic: #e77a59;
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --divider-color: #504431;
  --divider-color-hover: #ba945f;
  --dropdown-background: #504431;
  --dropdown-background-hover: #645743;
  --embed-block-shadow-hover: 0 0 0 1px #504431, inset 0 0 0 1px #504431;
  --embed-border-start: 2px solid #ba945f;
  --file-header-background: #372d29;
  --file-header-background-focused: #372d29;
  --file-header-font: '??', '??', '??', "CMU Typewriter Text";
  --file-header-font-size: 14px;
  --file-line-width: 900px;
  --flair-background: #504431;
  --flair-color: #ccc2b7;
  --font-default: "CMU Typewriter Text";
  --font-interface: '??', '??', '??', "CMU Typewriter Text";
  --font-mermaid: '??', '??', "CMU Typewriter Text";
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-monospace-default: "JetBrains Mono";
  --font-text: '??', '??', "CMU Typewriter Text";
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: #504431;
  --footnote-id-color: #b2a699;
  --footnote-id-color-no-occurrences: #868074;
  --graph-line: #645743;
  --graph-node: #b2a699;
  --graph-node-focused: #ba945f;
  --graph-node-unresolved: #868074;
  --graph-text: #ccc2b7;
  --gray: var(--text-muted);
  --header-height: 30px;
  --headerFont: var(--font-text);
  --heading-formatting: #868074;
  --heading-formatting-color: #c72626;
  --highlight: var(--text-highlight-bg);
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --hr-color: #504431;
  --icon-color: #b2a699;
  --icon-color-active: #ba945f;
  --icon-color-focused: #ccc2b7;
  --icon-color-hover: #b2a699;
  --in-between-background: #2e2420;
  --input-date-separator: #868074;
  --input-placeholder-color: #868074;
  --interactive-accent: #ba945f;
  --interactive-accent-hover: #ba945f;
  --interactive-hover: #645743;
  --interactive-normal: #504431;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #ba945f;
  --link-color-hover: #e0ba86;
  --link-external-color: #ba945f;
  --link-external-color-hover: #e0ba86;
  --link-unresolved-color: #ba945f;
  --list-indent: 1.4em;
  --list-marker-color: #868074;
  --list-marker-color-collapsed: #ba945f;
  --list-marker-color-hover: #b2a699;
  --menu-background: #413632;
  --menu-border-color: #645743;
  --metadata-border-color: #504431;
  --metadata-divider-color: #504431;
  --metadata-input-font: '??', '??', '??', "CMU Typewriter Text";
  --metadata-input-text-color: #ccc2b7;
  --metadata-label-font: '??', '??', '??', "CMU Typewriter Text";
  --metadata-label-text-color: #b2a699;
  --metadata-label-text-color-hover: #b2a699;
  --metadata-property-box-shadow-focus: 0 0 0 2px #504431;
  --metadata-property-box-shadow-hover: 0 0 0 1px #645743;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #372d29;
  --modal-border-color: #504431;
  --nav-collapse-icon-color: #868074;
  --nav-collapse-icon-color-collapsed: #868074;
  --nav-heading-color: #ccc2b7;
  --nav-heading-color-collapsed: #868074;
  --nav-heading-color-collapsed-hover: #b2a699;
  --nav-heading-color-hover: #ccc2b7;
  --nav-item-color: #b2a699;
  --nav-item-color-active: #ccc2b7;
  --nav-item-color-highlighted: #ba945f;
  --nav-item-color-hover: #ccc2b7;
  --nav-item-color-selected: #ccc2b7;
  --nav-item-size: 14px;
  --nav-tag-color: #868074;
  --nav-tag-color-active: #b2a699;
  --nav-tag-color-hover: #b2a699;
  --pdf-background: #372d29;
  --pdf-page-background: #372d29;
  --pdf-shadow: 0 0 0 1px #504431;
  --pdf-sidebar-background: #372d29;
  --pdf-thumbnail-shadow: 0 0 0 1px #504431;
  --pill-border-color: #504431;
  --pill-border-color-hover: #645743;
  --pill-color: #b2a699;
  --pill-color-hover: #ccc2b7;
  --pill-color-remove: #868074;
  --pill-color-remove-hover: #ba945f;
  --pop-callout-slide-out-duration: 700ms;
  --pop-callout-width: 20px;
  --prompt-background: #372d29;
  --prompt-border-color: #504431;
  --raised-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent));
  --ribbon-background: #413632;
  --ribbon-background-collapsed: #372d29;
  --ribbon-padding: 0px;
  --ribbon-width: 40px;
  --search-clear-button-color: #b2a699;
  --search-icon-color: #b2a699;
  --search-result-background: #372d29;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #ccc2b7;
  --setting-group-heading-size: 16px;
  --setting-items-background: #2b2723;
  --setting-items-border-color: #504431;
  --slider-thumb-border-color: #645743;
  --slider-track-background: #504431;
  --status-bar-background: #413632;
  --status-bar-border-color: #504431;
  --status-bar-font-size: 13px;
  --status-bar-text-color: #b2a699;
  --suggestion-background: #372d29;
  --tab-background-active: #372d29;
  --tab-container-background: #413632;
  --tab-divider-color: #645743;
  --tab-font-size: 14px;
  --tab-outline-color: #504431;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #413632;
  --tab-switcher-menubar-background: linear-gradient(to top, #413632, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #ba945f;
  --tab-text-color: #868074;
  --tab-text-color-active: #b2a699;
  --tab-text-color-focused: #b2a699;
  --tab-text-color-focused-active: #b2a699;
  --tab-text-color-focused-active-current: #ccc2b7;
  --tab-text-color-focused-highlighted: #ba945f;
  --table-add-button-border-color: #504431;
  --table-border-color: #504431;
  --table-drag-handle-background-active: #ba945f;
  --table-drag-handle-color: #868074;
  --table-header-border-color: #504431;
  --table-header-color: #ccc2b7;
  --table-selection-border-color: #ba945f;
  --tag-color: #ba945f;
  --tag-color-hover: #ba945f;
  --tag-radius: 4px;
  --tertiary: var(--text-accent-hover);
  --text-accent: #ba945f;
  --text-accent-hover: #e0ba86;
  --text-faint: #868074;
  --text-highlight-bg: #926b22e6;
  --text-muted: #b2a699;
  --text-normal: #ccc2b7;
  --text-selection: #6154508f;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #413632;
  --titlebar-background-focused: #413632;
  --titlebar-border-color: #504431;
  --titlebar-text-color: #b2a699;
  --titlebar-text-color-focused: #ccc2b7;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  --vault-profile-color: #ccc2b7;
  --vault-profile-color-hover: #ccc2b7;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(55, 45, 41);
  color: rgb(204, 194, 183);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(80, 68, 49);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(65, 54, 50);
  border-left-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}

body div#quartz-root {
  background-color: rgb(55, 45, 41);
  color: rgb(204, 194, 183);
}`,
    typography: `body .page article p > b, b {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration: rgb(186, 148, 95);
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

body .page article p > em, em {
  color: rgb(231, 122, 89);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(231, 122, 89) none 0px;
  text-decoration: rgb(231, 122, 89);
  text-decoration-color: rgb(231, 122, 89);
  transition: background-color 0.1s ease-in-out;
}

body .page article p > i, i {
  color: rgb(231, 122, 89);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(231, 122, 89) none 0px;
  text-decoration: rgb(231, 122, 89);
  text-decoration-color: rgb(231, 122, 89);
  transition: background-color 0.1s ease-in-out;
}

body .page article p > strong, strong {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration: rgb(186, 148, 95);
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

body .text-highlight {
  background-color: rgba(146, 107, 34, 0.9);
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(204, 194, 183) none 0px;
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
  transition: background-color 0.1s ease-in-out;
}

body del {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(204, 194, 183) none 0px;
  text-decoration: line-through rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
  transition: background-color 0.1s ease-in-out;
}

body p {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(178, 166, 153) none 0px;
  text-decoration: rgb(178, 166, 153);
  text-decoration-color: rgb(178, 166, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration: underline rgb(186, 148, 95);
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration: underline rgb(186, 148, 95);
  text-decoration-color: rgb(186, 148, 95);
  transition: filter 0.1s ease-in-out;
}

body a.internal.broken {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  transition: color 0.1s ease-in-out;
}`,
    lists: `body dd {
  color: rgb(204, 194, 183);
}

body dt {
  color: rgb(204, 194, 183);
}

body ol > li {
  color: rgb(204, 194, 183);
}

body ol.overflow {
  background-color: rgb(55, 45, 41);
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body ul > li {
  color: rgb(204, 194, 183);
}

body ul.overflow {
  background-color: rgb(55, 45, 41);
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(134, 128, 116);
  text-decoration: rgb(134, 128, 116);
}

body blockquote {
  background-color: rgb(65, 54, 50);
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body table {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: 334.703px;
  margin-right: 334.719px;
  width: 194.578px;
}

body td {
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}

body th {
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}

body thead {
  background-color: rgb(65, 54, 50);
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(80, 68, 49);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
  font-family: "??", "??", "JetBrains Mono";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}

body pre > code, pre:has(> code) {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 4px;
}

body pre:has(> code) {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 4px;
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body figcaption {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

body figure {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body img {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body video {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    embeds: `body .file-embed {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
}

body .footnotes {
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

body .transclude {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-left-width: 0px;
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-left-width: 0px;
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "CMU Typewriter Text";
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "CMU Typewriter Text";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(178, 166, 153);
  text-decoration: line-through rgb(178, 166, 153);
  text-decoration-color: rgb(178, 166, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(134, 128, 116);
  border-left-color: rgb(134, 128, 116);
  border-right-color: rgb(134, 128, 116);
  border-top-color: rgb(134, 128, 116);
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 194, 183);
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

body .callout > .callout-content {
  background-color: rgb(65, 54, 50);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(204, 194, 183);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body .search > .search-container > .search-space {
  background-color: rgb(55, 45, 41);
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(204, 194, 183) none 0px;
  text-decoration: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
  transition: background-color 0.1s ease-in-out;
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 194, 183);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 194, 183);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 194, 183);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(65, 54, 50);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 194, 183);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body a.internal.tag-link::before {
  color: rgb(186, 148, 95);
}

body h1 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h2 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h2.page-title, h2.page-title a {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h3 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h4 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h5 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h6 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

body hr {
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}

body ::-webkit-scrollbar-corner {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}

body ::-webkit-scrollbar-track {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  text-decoration: rgb(178, 166, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  text-decoration: rgb(178, 166, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  text-decoration: rgb(178, 166, 153);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(204, 194, 183);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 194, 183);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(178, 166, 153);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(178, 166, 153);
}`,
    footer: `body footer {
  background-color: rgb(65, 54, 50);
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body footer ul li a {
  color: rgb(178, 166, 153);
  text-decoration: rgb(178, 166, 153);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 166, 153);
  text-decoration: rgb(178, 166, 153);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body li.section-li > .section .meta {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 166, 153);
  text-decoration: rgb(178, 166, 153);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(178, 166, 153);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(178, 166, 153);
}

body .darkmode svg {
  color: rgb(178, 166, 153);
  stroke: rgb(178, 166, 153);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  color: rgb(178, 166, 153);
}

body .breadcrumb-element p {
  color: rgb(134, 128, 116);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

body .metadata {
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: rgb(178, 166, 153);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  color: rgb(178, 166, 153);
  font-family: "??", "??", "CMU Typewriter Text";
}

body .navigation-progress {
  background-color: rgb(65, 54, 50);
}

body .page-header h2.page-title {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body abbr {
  color: rgb(204, 194, 183);
  text-decoration: underline dotted rgb(204, 194, 183);
}

body details {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body input[type=text] {
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

body kbd {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
  font-family: "??", "??", "JetBrains Mono";
}

body progress {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

body sub {
  color: rgb(204, 194, 183);
}

body summary {
  color: rgb(204, 194, 183);
}

body sup {
  color: rgb(204, 194, 183);
}`,
  },
  light: {
    base: `:root:root {
  --activeline: #d4b4946a;
  --background-modifier-border: #c6a57f;
  --background-modifier-border-focus: #b4916a;
  --background-modifier-border-hover: #a8865f;
  --background-modifier-error: #cf1e33;
  --background-modifier-error-hover: #cf1e33;
  --background-modifier-error-rgb: 207, 30, 51;
  --background-modifier-form-field: #e1c4a6;
  --background-modifier-form-field-hover: #e1c4a6;
  --background-modifier-message: #d7b38d;
  --background-modifier-success: #01903b;
  --background-modifier-success-rgb: 1, 144, 59;
  --background-primary: #e1c4a6;
  --background-primary-alt: #daba97;
  --background-secondary: #dabb9a;
  --background-secondary-alt: #cbaa87;
  --bases-cards-background: #e1c4a6;
  --bases-cards-cover-background: #daba97;
  --bases-cards-shadow: 0 0 0 1px #c6a57f;
  --bases-cards-shadow-hover: 0 0 0 1px #a8865f;
  --bases-embed-border-color: #c6a57f;
  --bases-group-heading-property-color: #5b4f4a;
  --bases-group-heading-property-size: 13px;
  --bases-table-border-color: #c6a57f;
  --bases-table-cell-background-active: #e1c4a6;
  --bases-table-cell-background-disabled: #daba97;
  --bases-table-cell-shadow-active: 0 0 0 2px #b4916a;
  --bases-table-cell-shadow-focus: 0 0 0 2px #800000;
  --bases-table-group-background: #daba97;
  --bases-table-header-background: #e1c4a6;
  --bases-table-header-color: #5b4f4a;
  --bases-table-summary-background: #e1c4a6;
  --blockquote-border-color: #800000;
  --blur-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent));
  --bodyFont: var(--font-text);
  --callout-bug: 207, 30, 51;
  --callout-default: 2, 95, 200;
  --callout-error: 207, 30, 51;
  --callout-example: 95, 56, 214;
  --callout-fail: 207, 30, 51;
  --callout-important: 0, 158, 155;
  --callout-info: 2, 95, 200;
  --callout-question: 193, 109, 24;
  --callout-success: 1, 144, 59;
  --callout-summary: 0, 158, 155;
  --callout-tip: 0, 158, 155;
  --callout-todo: 2, 95, 200;
  --callout-warning: 193, 109, 24;
  --canvas-background: #e1c4a6;
  --canvas-card-label-color: #7a6d68;
  --canvas-color-1: 207, 30, 51;
  --canvas-color-2: 193, 109, 24;
  --canvas-color-3: 151, 116, 0;
  --canvas-color-4: 1, 144, 59;
  --canvas-color-5: 0, 158, 155;
  --canvas-color-6: 95, 56, 214;
  --canvas-dot-pattern: #c6a57f;
  --caret-color: #5f4f49;
  --checkbox-border-color: #7a6d68;
  --checkbox-border-color-hover: #5b4f4a;
  --checkbox-color: #800000;
  --checkbox-color-hover: #a00000;
  --checkbox-marker-color: #e1c4a6;
  --checklist-done-color: #5b4f4a;
  --clickable-icon-radius: 0px;
  --code-background: #cbaa87;
  --code-border-color: #c6a57f;
  --code-comment: #7a6d68;
  --code-function: #977400;
  --code-important: #c16d18;
  --code-keyword: #bf206d;
  --code-normal: #5f4f49;
  --code-operator: #cf1e33;
  --code-property: #009e9b;
  --code-punctuation: #5b4f4a;
  --code-string: #01903b;
  --code-tag: #cf1e33;
  --code-value: #5f38d6;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #7a6d68;
  --collapse-icon-color-collapsed: #800000;
  --color-accent: #800000;
  --color-accent-1: #800000;
  --color-accent-2: #a00000;
  --color-base-00: #e1c4a6;
  --color-base-05: #cbaa87;
  --color-base-10: #daba97;
  --color-base-100: #5f4f49;
  --color-base-20: #dabb9a;
  --color-base-25: #4c4743;
  --color-base-30: #c6a57f;
  --color-base-35: #a8865f;
  --color-base-40: #b4916a;
  --color-base-50: #7a6d68;
  --color-base-70: #5b4f4a;
  --color-blue: #025fc8;
  --color-blue-rgb: 2, 95, 200;
  --color-bold: #bd5757;
  --color-cyan: #009e9b;
  --color-cyan-rgb: 0, 158, 155;
  --color-green: #01903b;
  --color-green-rgb: 1, 144, 59;
  --color-italic: #ae612b;
  --color-orange: #c16d18;
  --color-orange-rgb: 193, 109, 24;
  --color-pink: #bf206d;
  --color-pink-rgb: 191, 32, 109;
  --color-purple: #5f38d6;
  --color-purple-rgb: 95, 56, 214;
  --color-red: #cf1e33;
  --color-red-rgb: 207, 30, 51;
  --color-yellow: #977400;
  --color-yellow-rgb: 151, 116, 0;
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --divider-color: #c6a57f;
  --divider-color-hover: #800000;
  --dropdown-background: #e1c4a6;
  --dropdown-background-hover: #daba97;
  --embed-block-shadow-hover: 0 0 0 1px #c6a57f, inset 0 0 0 1px #c6a57f;
  --embed-border-start: 2px solid #800000;
  --file-header-background: #e1c4a6;
  --file-header-background-focused: #e1c4a6;
  --file-header-font: '??', '??', '??', "CMU Typewriter Text";
  --file-header-font-size: 14px;
  --file-line-width: 900px;
  --flair-background: #e1c4a6;
  --flair-color: #5f4f49;
  --font-default: "CMU Typewriter Text";
  --font-interface: '??', '??', '??', "CMU Typewriter Text";
  --font-mermaid: '??', '??', "CMU Typewriter Text";
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-monospace-default: "JetBrains Mono";
  --font-text: '??', '??', "CMU Typewriter Text";
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: #c6a57f;
  --footnote-id-color: #5b4f4a;
  --footnote-id-color-no-occurrences: #7a6d68;
  --graph-line: #a8865f;
  --graph-node: #5b4f4a;
  --graph-node-attachment: #977400;
  --graph-node-focused: #800000;
  --graph-node-tag: #01903b;
  --graph-node-unresolved: #7a6d68;
  --graph-text: #5f4f49;
  --gray: var(--text-muted);
  --header-height: 30px;
  --headerFont: var(--font-text);
  --heading-formatting: #7a6d68;
  --heading-formatting-color: #d34747;
  --highlight: var(--text-highlight-bg);
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --hr-color: #c6a57f;
  --icon-color: #5b4f4a;
  --icon-color-active: #800000;
  --icon-color-focused: #5f4f49;
  --icon-color-hover: #5b4f4a;
  --in-between-background: #d4af88;
  --input-date-separator: #7a6d68;
  --input-placeholder-color: #7a6d68;
  --interactive-accent: #800000;
  --interactive-accent-hover: #a00000;
  --interactive-hover: #daba97;
  --interactive-normal: #e1c4a6;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #800000;
  --link-color-hover: #a00000;
  --link-external-color: #800000;
  --link-external-color-hover: #a00000;
  --link-unresolved-color: #800000;
  --list-indent: 1.4em;
  --list-marker-color: #7a6d68;
  --list-marker-color-collapsed: #800000;
  --list-marker-color-hover: #5b4f4a;
  --menu-background: #dabb9a;
  --menu-border-color: #a8865f;
  --metadata-border-color: #c6a57f;
  --metadata-divider-color: #c6a57f;
  --metadata-input-font: '??', '??', '??', "CMU Typewriter Text";
  --metadata-input-text-color: #5f4f49;
  --metadata-label-font: '??', '??', '??', "CMU Typewriter Text";
  --metadata-label-text-color: #5b4f4a;
  --metadata-label-text-color-hover: #5b4f4a;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b4916a;
  --metadata-property-box-shadow-hover: 0 0 0 1px #a8865f;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #e1c4a6;
  --modal-border-color: #b4916a;
  --nav-collapse-icon-color: #7a6d68;
  --nav-collapse-icon-color-collapsed: #7a6d68;
  --nav-heading-color: #5f4f49;
  --nav-heading-color-collapsed: #7a6d68;
  --nav-heading-color-collapsed-hover: #5b4f4a;
  --nav-heading-color-hover: #5f4f49;
  --nav-item-color: #5b4f4a;
  --nav-item-color-active: #5f4f49;
  --nav-item-color-highlighted: #800000;
  --nav-item-color-hover: #5f4f49;
  --nav-item-color-selected: #5f4f49;
  --nav-item-size: 14px;
  --nav-tag-color: #7a6d68;
  --nav-tag-color-active: #5b4f4a;
  --nav-tag-color-hover: #5b4f4a;
  --pdf-background: #e1c4a6;
  --pdf-page-background: #e1c4a6;
  --pdf-sidebar-background: #e1c4a6;
  --pill-border-color: #c6a57f;
  --pill-border-color-hover: #a8865f;
  --pill-color: #5b4f4a;
  --pill-color-hover: #5f4f49;
  --pill-color-remove: #7a6d68;
  --pill-color-remove-hover: #800000;
  --pop-callout-slide-out-duration: 700ms;
  --pop-callout-width: 20px;
  --prompt-background: #e1c4a6;
  --prompt-border-color: #b4916a;
  --raised-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent));
  --ribbon-background: #dabb9a;
  --ribbon-background-collapsed: #e1c4a6;
  --ribbon-padding: 0px;
  --ribbon-width: 40px;
  --search-clear-button-color: #5b4f4a;
  --search-icon-color: #5b4f4a;
  --search-result-background: #e1c4a6;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #5f4f49;
  --setting-group-heading-size: 16px;
  --setting-items-background: #daba97;
  --setting-items-border-color: #c6a57f;
  --slider-thumb-border-color: #a8865f;
  --slider-track-background: #c6a57f;
  --status-bar-background: #dabb9a;
  --status-bar-border-color: #c6a57f;
  --status-bar-font-size: 13px;
  --status-bar-text-color: #5b4f4a;
  --suggestion-background: #e1c4a6;
  --sync-avatar-color-1: #cf1e33;
  --sync-avatar-color-2: #c16d18;
  --sync-avatar-color-3: #977400;
  --sync-avatar-color-4: #01903b;
  --sync-avatar-color-5: #009e9b;
  --sync-avatar-color-6: #025fc8;
  --sync-avatar-color-7: #5f38d6;
  --sync-avatar-color-8: #bf206d;
  --tab-background-active: #e1c4a6;
  --tab-container-background: #dabb9a;
  --tab-divider-color: #a8865f;
  --tab-font-size: 14px;
  --tab-outline-color: #c6a57f;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 30px;
  --tab-switcher-background: #dabb9a;
  --tab-switcher-menubar-background: linear-gradient(to top, #dabb9a, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #800000;
  --tab-text-color: #7a6d68;
  --tab-text-color-active: #5b4f4a;
  --tab-text-color-focused: #5b4f4a;
  --tab-text-color-focused-active: #5b4f4a;
  --tab-text-color-focused-active-current: #5f4f49;
  --tab-text-color-focused-highlighted: #800000;
  --table-add-button-border-color: #c6a57f;
  --table-border-color: #c6a57f;
  --table-drag-handle-background-active: #800000;
  --table-drag-handle-color: #7a6d68;
  --table-header-border-color: #c6a57f;
  --table-header-color: #5f4f49;
  --table-selection-border-color: #800000;
  --tag-color: #800000;
  --tag-color-hover: #800000;
  --tag-radius: 4px;
  --tertiary: var(--text-accent-hover);
  --text-accent: #800000;
  --text-accent-hover: #a00000;
  --text-error: #cf1e33;
  --text-faint: #7a6d68;
  --text-highlight-bg: #eac357;
  --text-muted: #5b4f4a;
  --text-normal: #5f4f49;
  --text-selection: #c7a78683;
  --text-success: #01903b;
  --text-warning: #c16d18;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #dabb9a;
  --titlebar-background-focused: #dabb9a;
  --titlebar-border-color: #c6a57f;
  --titlebar-text-color: #5b4f4a;
  --titlebar-text-color-focused: #5f4f49;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  --vault-profile-color: #5f4f49;
  --vault-profile-color-hover: #5f4f49;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(225, 196, 166);
  color: rgb(95, 79, 73);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(198, 165, 127);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(218, 187, 154);
  border-left-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}

body div#quartz-root {
  background-color: rgb(225, 196, 166);
  color: rgb(95, 79, 73);
}`,
    typography: `body .page article p > b, b {
  color: rgb(189, 87, 87);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(189, 87, 87) none 0px;
  text-decoration: rgb(189, 87, 87);
  text-decoration-color: rgb(189, 87, 87);
  transition: background-color 0.1s ease-in-out;
}

body .page article p > em, em {
  color: rgb(174, 97, 43);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(174, 97, 43) none 0px;
  text-decoration: rgb(174, 97, 43);
  text-decoration-color: rgb(174, 97, 43);
  transition: background-color 0.1s ease-in-out;
}

body .page article p > i, i {
  color: rgb(174, 97, 43);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(174, 97, 43) none 0px;
  text-decoration: rgb(174, 97, 43);
  text-decoration-color: rgb(174, 97, 43);
  transition: background-color 0.1s ease-in-out;
}

body .page article p > strong, strong {
  color: rgb(189, 87, 87);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(189, 87, 87) none 0px;
  text-decoration: rgb(189, 87, 87);
  text-decoration-color: rgb(189, 87, 87);
  transition: background-color 0.1s ease-in-out;
}

body .text-highlight {
  background-color: rgb(234, 195, 87);
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(95, 79, 73) none 0px;
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
  transition: background-color 0.1s ease-in-out;
}

body del {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(95, 79, 73) none 0px;
  text-decoration: line-through rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
  transition: background-color 0.1s ease-in-out;
}

body p {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(91, 79, 74) none 0px;
  text-decoration: rgb(91, 79, 74);
  text-decoration-color: rgb(91, 79, 74);
}`,
    links: `body a.external, footer a {
  color: rgb(128, 0, 0);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
  text-decoration: underline rgb(128, 0, 0);
  text-decoration-color: rgb(128, 0, 0);
  transition: background-color 0.1s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 0, 0);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
  text-decoration: underline rgb(128, 0, 0);
  text-decoration-color: rgb(128, 0, 0);
}

body a.internal.broken {
  color: rgb(128, 0, 0);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
}`,
    lists: `body dd {
  color: rgb(95, 79, 73);
}

body dt {
  color: rgb(95, 79, 73);
}

body ol > li {
  color: rgb(95, 79, 73);
}

body ol.overflow {
  background-color: rgb(225, 196, 166);
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body ul > li {
  color: rgb(95, 79, 73);
}

body ul.overflow {
  background-color: rgb(225, 196, 166);
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(122, 109, 104);
  text-decoration: rgb(122, 109, 104);
}

body blockquote {
  background-color: rgb(218, 187, 154);
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body table {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: 334.703px;
  margin-right: 334.719px;
  width: 194.578px;
}

body td {
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}

body th {
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}

body thead {
  background-color: rgb(218, 187, 154);
  border-bottom-color: rgb(180, 145, 106);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(180, 145, 106);
}`,
    code: `body code {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
  font-family: "??", "??", "JetBrains Mono";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}

body pre > code > [data-line] {
  border-left-color: rgb(151, 116, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(151, 116, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(151, 116, 0);
  border-left-color: rgb(151, 116, 0);
  border-right-color: rgb(151, 116, 0);
  border-top-color: rgb(151, 116, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 4px;
}

body pre:has(> code) {
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 4px;
}`,
    images: `body audio {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body figcaption {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

body figure {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body img {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body video {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    embeds: `body .file-embed {
  background-color: rgb(218, 186, 151);
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
}

body .footnotes {
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

body .transclude {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-left-width: 0px;
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body .transclude-inner {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-left-width: 0px;
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "CMU Typewriter Text";
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "CMU Typewriter Text";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(91, 79, 74);
  text-decoration: line-through rgb(91, 79, 74);
  text-decoration-color: rgb(91, 79, 74);
}

body input[type=checkbox] {
  border-bottom-color: rgb(122, 109, 104);
  border-left-color: rgb(122, 109, 104);
  border-right-color: rgb(122, 109, 104);
  border-top-color: rgb(122, 109, 104);
}

body li.task-list-item[data-task='!'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='*'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='-'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='/'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='>'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='?'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='I'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='S'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='b'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='c'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='d'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='f'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='i'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='k'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='l'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='p'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='u'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

body li.task-list-item[data-task='w'] {
  color: rgb(95, 79, 73);
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

body .callout > .callout-content {
  background-color: rgb(218, 187, 154);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 158, 155;
  background-color: rgba(0, 158, 155, 0.1);
  border-bottom-color: rgba(0, 158, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(0, 158, 155);
  border-left-width: 3px;
  border-right-color: rgba(0, 158, 155, 0.25);
  border-top-color: rgba(0, 158, 155, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="bug"] {
  --callout-color: 207, 30, 51;
  background-color: rgba(207, 30, 51, 0.1);
  border-bottom-color: rgba(207, 30, 51, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(207, 30, 51);
  border-left-width: 3px;
  border-right-color: rgba(207, 30, 51, 0.25);
  border-top-color: rgba(207, 30, 51, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="danger"] {
  --callout-color: 207, 30, 51;
  background-color: rgba(207, 30, 51, 0.1);
  border-bottom-color: rgba(207, 30, 51, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(207, 30, 51);
  border-left-width: 3px;
  border-right-color: rgba(207, 30, 51, 0.25);
  border-top-color: rgba(207, 30, 51, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="example"] {
  --callout-color: 95, 56, 214;
  background-color: rgba(95, 56, 214, 0.1);
  border-bottom-color: rgba(95, 56, 214, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(95, 56, 214);
  border-left-width: 3px;
  border-right-color: rgba(95, 56, 214, 0.25);
  border-top-color: rgba(95, 56, 214, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="failure"] {
  --callout-color: 207, 30, 51;
  background-color: rgba(207, 30, 51, 0.1);
  border-bottom-color: rgba(207, 30, 51, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(207, 30, 51);
  border-left-width: 3px;
  border-right-color: rgba(207, 30, 51, 0.25);
  border-top-color: rgba(207, 30, 51, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="info"] {
  --callout-color: 2, 95, 200;
  background-color: rgba(2, 95, 200, 0.1);
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="note"] {
  --callout-color: 2, 95, 200;
  background-color: rgba(2, 95, 200, 0.1);
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="question"] {
  --callout-color: 193, 109, 24;
  background-color: rgba(193, 109, 24, 0.1);
  border-bottom-color: rgba(193, 109, 24, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(193, 109, 24);
  border-left-width: 3px;
  border-right-color: rgba(193, 109, 24, 0.25);
  border-top-color: rgba(193, 109, 24, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

body .callout[data-callout="success"] {
  --callout-color: 1, 144, 59;
  background-color: rgba(1, 144, 59, 0.1);
  border-bottom-color: rgba(1, 144, 59, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(1, 144, 59);
  border-left-width: 3px;
  border-right-color: rgba(1, 144, 59, 0.25);
  border-top-color: rgba(1, 144, 59, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 158, 155;
  background-color: rgba(0, 158, 155, 0.1);
  border-bottom-color: rgba(0, 158, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(0, 158, 155);
  border-left-width: 3px;
  border-right-color: rgba(0, 158, 155, 0.25);
  border-top-color: rgba(0, 158, 155, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="todo"] {
  --callout-color: 2, 95, 200;
  background-color: rgba(2, 95, 200, 0.1);
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
}

body .callout[data-callout="warning"] {
  --callout-color: 193, 109, 24;
  background-color: rgba(193, 109, 24, 0.1);
  border-bottom-color: rgba(193, 109, 24, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(193, 109, 24);
  border-left-width: 3px;
  border-right-color: rgba(193, 109, 24, 0.25);
  border-top-color: rgba(193, 109, 24, 0.25);
  border-top-left-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(225, 196, 166);
  border-bottom-color: rgb(198, 165, 127);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(95, 79, 73);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body .search > .search-container > .search-space {
  background-color: rgb(225, 196, 166);
  border-bottom-color: rgb(180, 145, 106);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(180, 145, 106);
  border-right-color: rgb(180, 145, 106);
  border-top-color: rgb(180, 145, 106);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search > .search-container > .search-space > * {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(95, 79, 73) none 0px;
  text-decoration: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
  transition: background-color 0.1s ease-in-out;
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(95, 79, 73);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(95, 79, 73);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(95, 79, 73);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(180, 145, 106);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(180, 145, 106);
  border-right-color: rgb(180, 145, 106);
  border-top-color: rgb(180, 145, 106);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(218, 187, 154);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(95, 79, 73);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body a.internal.tag-link::before {
  color: rgb(128, 0, 0);
}

body h1 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h2 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h2.page-title, h2.page-title a {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h3 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h4 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h5 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

body h6 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

body hr {
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
}`,
    scrollbars: `body .callout {
  --callout-color: 2, 95, 200;
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}

body ::-webkit-scrollbar-corner {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}

body ::-webkit-scrollbar-track {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  text-decoration: rgb(91, 79, 74);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  text-decoration: rgb(91, 79, 74);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  text-decoration: rgb(91, 79, 74);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(95, 79, 73);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(95, 79, 73);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(91, 79, 74);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(91, 79, 74);
}`,
    footer: `body footer {
  background-color: rgb(218, 187, 154);
  border-bottom-color: rgb(198, 165, 127);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body footer ul li a {
  color: rgb(91, 79, 74);
  text-decoration: rgb(91, 79, 74);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(91, 79, 74);
  text-decoration: rgb(91, 79, 74);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body li.section-li > .section .meta {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(91, 79, 74);
  text-decoration: rgb(91, 79, 74);
}

body ul.section-ul {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(91, 79, 74);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(91, 79, 74);
}

body .darkmode svg {
  color: rgb(91, 79, 74);
  stroke: rgb(91, 79, 74);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  color: rgb(91, 79, 74);
}

body .breadcrumb-element p {
  color: rgb(122, 109, 104);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

body .metadata {
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: rgb(91, 79, 74);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  color: rgb(91, 79, 74);
  font-family: "??", "??", "CMU Typewriter Text";
}

body .navigation-progress {
  background-color: rgb(218, 187, 154);
}

body .page-header h2.page-title {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

body abbr {
  color: rgb(95, 79, 73);
  text-decoration: underline dotted rgb(95, 79, 73);
}

body details {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body input[type=text] {
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

body kbd {
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
  font-family: "??", "??", "JetBrains Mono";
}

body progress {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

body sub {
  color: rgb(95, 79, 73);
}

body summary {
  color: rgb(95, 79, 73);
}

body sup {
  color: rgb(95, 79, 73);
}`,
  },
};
