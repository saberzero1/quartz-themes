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
  --activeline: #51454140 !important;
  --background-modifier-border: #504431 !important;
  --background-modifier-border-focus: #504431 !important;
  --background-modifier-border-hover: #645743 !important;
  --background-modifier-form-field: #2b2723 !important;
  --background-modifier-form-field-hover: #2b2723 !important;
  --background-modifier-message: #281f1b !important;
  --background-primary: #372d29 !important;
  --background-primary-alt: #2b2723 !important;
  --background-secondary: #413632 !important;
  --background-secondary-alt: #504431 !important;
  --bases-cards-background: #372d29 !important;
  --bases-cards-cover-background: #2b2723 !important;
  --bases-cards-shadow: 0 0 0 1px #504431 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #645743 !important;
  --bases-embed-border-color: #504431 !important;
  --bases-group-heading-property-color: #b2a699 !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: #504431 !important;
  --bases-table-cell-background-active: #372d29 !important;
  --bases-table-cell-background-disabled: #2b2723 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #504431 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ba945f !important;
  --bases-table-group-background: #2b2723 !important;
  --bases-table-header-background: #372d29 !important;
  --bases-table-header-color: #b2a699 !important;
  --bases-table-summary-background: #372d29 !important;
  --blockquote-border-color: #ba945f !important;
  --blur-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent)) !important;
  --bodyFont: "CMU Typewriter Text" !important;
  --canvas-background: #372d29 !important;
  --canvas-card-label-color: #868074 !important;
  --canvas-dot-pattern: #504431 !important;
  --caret-color: #ccc2b7 !important;
  --checkbox-border-color: #868074 !important;
  --checkbox-border-color-hover: #b2a699 !important;
  --checkbox-color: #ba945f !important;
  --checkbox-color-hover: #ba945f !important;
  --checkbox-marker-color: #372d29 !important;
  --checklist-done-color: #b2a699 !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #2b2723 !important;
  --code-border-color: #504431 !important;
  --code-comment: #868074 !important;
  --code-normal: #ccc2b7 !important;
  --code-punctuation: #b2a699 !important;
  --codeFont: "JetBrains Mono" !important;
  --collapse-icon-color: #868074 !important;
  --collapse-icon-color-collapsed: #ba945f !important;
  --color-accent: #ba945f !important;
  --color-accent-1: #ba945f !important;
  --color-accent-2: #e0ba86 !important;
  --color-base-00: #372d29 !important;
  --color-base-05: #413632 !important;
  --color-base-10: #2b2723 !important;
  --color-base-100: #ccc2b7 !important;
  --color-base-20: #413632 !important;
  --color-base-25: #2b2723 !important;
  --color-base-30: #504431 !important;
  --color-base-35: #645743 !important;
  --color-base-40: #504431 !important;
  --color-base-50: #868074 !important;
  --color-base-70: #b2a699 !important;
  --color-bold: #ba945f !important;
  --color-italic: #e77a59 !important;
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1) !important;
  --dark: #ccc2b7 !important;
  --darkgray: #ccc2b7 !important;
  --default-animation-duration: 150ms !important;
  --default-border-radius: 4px !important;
  --divider-color: #504431 !important;
  --divider-color-hover: #ba945f !important;
  --dropdown-background: #504431 !important;
  --dropdown-background-hover: #645743 !important;
  --embed-block-shadow-hover: 0 0 0 1px #504431, inset 0 0 0 1px #504431 !important;
  --embed-border-start: 2px solid #ba945f !important;
  --file-header-background: #372d29 !important;
  --file-header-background-focused: #372d29 !important;
  --file-header-font: "CMU Typewriter Text" !important;
  --file-header-font-size: 14px !important;
  --file-line-width: 900px !important;
  --flair-background: #504431 !important;
  --flair-color: #ccc2b7 !important;
  --font-default: "CMU Typewriter Text" !important;
  --font-interface: "CMU Typewriter Text" !important;
  --font-mermaid: "CMU Typewriter Text" !important;
  --font-monospace: "JetBrains Mono" !important;
  --font-monospace-default: "JetBrains Mono" !important;
  --font-text: "CMU Typewriter Text" !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: #504431 !important;
  --footnote-id-color: #b2a699 !important;
  --footnote-id-color-no-occurrences: #868074 !important;
  --graph-line: #645743 !important;
  --graph-node: #b2a699 !important;
  --graph-node-focused: #ba945f !important;
  --graph-node-unresolved: #868074 !important;
  --graph-text: #ccc2b7 !important;
  --gray: #b2a699 !important;
  --header-height: 30px !important;
  --headerFont: "CMU Typewriter Text" !important;
  --heading-formatting: #868074 !important;
  --heading-formatting-color: #c72626 !important;
  --highlight: #926b22e6 !important;
  --hover-animation-duration: 100ms !important;
  --hover-faster-animation-duration: 75ms !important;
  --hr-color: #504431 !important;
  --icon-color: #b2a699 !important;
  --icon-color-active: #ba945f !important;
  --icon-color-focused: #ccc2b7 !important;
  --icon-color-hover: #b2a699 !important;
  --in-between-background: #2e2420 !important;
  --input-date-separator: #868074 !important;
  --input-placeholder-color: #868074 !important;
  --interactive-accent: #ba945f !important;
  --interactive-accent-hover: #ba945f !important;
  --interactive-hover: #645743 !important;
  --interactive-normal: #504431 !important;
  --light: #372d29 !important;
  --lightgray: #413632 !important;
  --link-color: #ba945f !important;
  --link-color-hover: #e0ba86 !important;
  --link-external-color: #ba945f !important;
  --link-external-color-hover: #e0ba86 !important;
  --link-unresolved-color: #ba945f !important;
  --list-indent: 1.4em !important;
  --list-marker-color: #868074 !important;
  --list-marker-color-collapsed: #ba945f !important;
  --list-marker-color-hover: #b2a699 !important;
  --menu-background: #413632 !important;
  --menu-border-color: #645743 !important;
  --metadata-border-color: #504431 !important;
  --metadata-divider-color: #504431 !important;
  --metadata-input-font: "CMU Typewriter Text" !important;
  --metadata-input-text-color: #ccc2b7 !important;
  --metadata-label-font: "CMU Typewriter Text" !important;
  --metadata-label-text-color: #b2a699 !important;
  --metadata-label-text-color-hover: #b2a699 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #504431 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #645743 !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #372d29 !important;
  --modal-border-color: #504431 !important;
  --nav-collapse-icon-color: #868074 !important;
  --nav-collapse-icon-color-collapsed: #868074 !important;
  --nav-heading-color: #ccc2b7 !important;
  --nav-heading-color-collapsed: #868074 !important;
  --nav-heading-color-collapsed-hover: #b2a699 !important;
  --nav-heading-color-hover: #ccc2b7 !important;
  --nav-item-color: #b2a699 !important;
  --nav-item-color-active: #ccc2b7 !important;
  --nav-item-color-highlighted: #ba945f !important;
  --nav-item-color-hover: #ccc2b7 !important;
  --nav-item-color-selected: #ccc2b7 !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #868074 !important;
  --nav-tag-color-active: #b2a699 !important;
  --nav-tag-color-hover: #b2a699 !important;
  --pdf-background: #372d29 !important;
  --pdf-page-background: #372d29 !important;
  --pdf-shadow: 0 0 0 1px #504431 !important;
  --pdf-sidebar-background: #372d29 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #504431 !important;
  --pill-border-color: #504431 !important;
  --pill-border-color-hover: #645743 !important;
  --pill-color: #b2a699 !important;
  --pill-color-hover: #ccc2b7 !important;
  --pill-color-remove: #868074 !important;
  --pill-color-remove-hover: #ba945f !important;
  --pop-callout-slide-out-duration: 700ms !important;
  --pop-callout-width: 20px !important;
  --prompt-background: #372d29 !important;
  --prompt-border-color: #504431 !important;
  --raised-background: color-mix(in srgb, #504431 65%, transparent) linear-gradient(#504431, color-mix(in srgb, #504431 65%, transparent)) !important;
  --ribbon-background: #413632 !important;
  --ribbon-background-collapsed: #372d29 !important;
  --ribbon-padding: 0px !important;
  --ribbon-width: 40px !important;
  --search-clear-button-color: #b2a699 !important;
  --search-icon-color: #b2a699 !important;
  --search-result-background: #372d29 !important;
  --secondary: #ba945f !important;
  --setting-group-heading-color: #ccc2b7 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #2b2723 !important;
  --setting-items-border-color: #504431 !important;
  --slider-thumb-border-color: #645743 !important;
  --slider-track-background: #504431 !important;
  --status-bar-background: #413632 !important;
  --status-bar-border-color: #504431 !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: #b2a699 !important;
  --suggestion-background: #372d29 !important;
  --tab-background-active: #372d29 !important;
  --tab-container-background: #413632 !important;
  --tab-divider-color: #645743 !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: #504431 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-stacked-header-width: 30px !important;
  --tab-switcher-background: #413632 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #413632, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #ba945f !important;
  --tab-text-color: #868074 !important;
  --tab-text-color-active: #b2a699 !important;
  --tab-text-color-focused: #b2a699 !important;
  --tab-text-color-focused-active: #b2a699 !important;
  --tab-text-color-focused-active-current: #ccc2b7 !important;
  --tab-text-color-focused-highlighted: #ba945f !important;
  --table-add-button-border-color: #504431 !important;
  --table-border-color: #504431 !important;
  --table-drag-handle-background-active: #ba945f !important;
  --table-drag-handle-color: #868074 !important;
  --table-header-border-color: #504431 !important;
  --table-header-color: #ccc2b7 !important;
  --table-selection-border-color: #ba945f !important;
  --tag-color: #ba945f !important;
  --tag-color-hover: #ba945f !important;
  --tag-radius: 4px !important;
  --tertiary: #e0ba86 !important;
  --text-accent: #ba945f !important;
  --text-accent-hover: #e0ba86 !important;
  --text-faint: #868074 !important;
  --text-highlight-bg: #926b22e6 !important;
  --text-muted: #b2a699 !important;
  --text-normal: #ccc2b7 !important;
  --text-selection: #6154508f !important;
  --textHighlight: #926b22e6 !important;
  --titleFont: "CMU Typewriter Text" !important;
  --titlebar-background: #413632 !important;
  --titlebar-background-focused: #413632 !important;
  --titlebar-border-color: #504431 !important;
  --titlebar-text-color: #b2a699 !important;
  --titlebar-text-color-focused: #ccc2b7 !important;
  --traffic-lights-offset-x: 30px !important;
  --traffic-lights-offset-y: 30px !important;
  --vault-profile-color: #ccc2b7 !important;
  --vault-profile-color-hover: #ccc2b7 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(55, 45, 41);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(65, 54, 50);
  border-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(80, 68, 49);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 4px;
  color: rgb(186, 148, 95);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(80, 68, 49);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(65, 54, 50);
  border-left-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(55, 45, 41);
  color: rgb(204, 194, 183);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(231, 122, 89);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(231, 122, 89) none 0px;
  text-decoration-color: rgb(231, 122, 89);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(231, 122, 89);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(231, 122, 89) none 0px;
  text-decoration-color: rgb(231, 122, 89);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(146, 107, 34, 0.9);
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(204, 194, 183) none 0px;
  text-decoration-color: rgb(204, 194, 183);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body del {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(204, 194, 183) none 0px;
  text-decoration-color: rgb(204, 194, 183);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body footer {
  opacity: 0.5;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 194, 183);
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(134, 128, 116);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(186, 148, 95);
  border-color: rgb(186, 148, 95);
}

html[saved-theme="dark"] body p {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(178, 166, 153) none 0px;
  text-decoration-color: rgb(178, 166, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: filter 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  transition: color 0.1s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(134, 128, 116);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(65, 54, 50);
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: 334.703px;
  margin-right: 334.719px;
  width: 194.578px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body thead {
  background-color: rgb(65, 54, 50);
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(80, 68, 49);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-left-width: 0px;
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(134, 128, 116);
  border-left-color: rgb(134, 128, 116);
  border-right-color: rgb(134, 128, 116);
  border-top-color: rgb(134, 128, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 194, 183);
  text-decoration-color: rgb(204, 194, 183);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgb(65, 54, 50);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="col"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cont"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="container"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
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

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(204, 194, 183) none 0px;
  text-decoration-color: rgb(204, 194, 183);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 68, 49);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(65, 54, 50);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(186, 148, 95);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h2 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h3 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h4 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h5 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h6 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(55, 45, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 45, 41);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 194, 183);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(178, 166, 153);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(178, 166, 153);
  stroke: rgb(178, 166, 153);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(134, 128, 116);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  color: rgb(178, 166, 153);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(65, 54, 50);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(178, 166, 153);
  border-left-color: rgb(178, 166, 153);
  border-right-color: rgb(178, 166, 153);
  border-top-color: rgb(178, 166, 153);
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 194, 183);
  vertical-align: baseline;
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(186, 148, 95);
}`,
  },
  light: {
    base: `:root:root {
  --activeline: #d4b4946a !important;
  --background-modifier-border: #c6a57f !important;
  --background-modifier-border-focus: #b4916a !important;
  --background-modifier-border-hover: #a8865f !important;
  --background-modifier-error: #cf1e33 !important;
  --background-modifier-error-hover: #cf1e33 !important;
  --background-modifier-error-rgb: 207, 30, 51 !important;
  --background-modifier-form-field: #e1c4a6 !important;
  --background-modifier-form-field-hover: #e1c4a6 !important;
  --background-modifier-message: #d7b38d !important;
  --background-modifier-success: #01903b !important;
  --background-modifier-success-rgb: 1, 144, 59 !important;
  --background-primary: #e1c4a6 !important;
  --background-primary-alt: #daba97 !important;
  --background-secondary: #dabb9a !important;
  --background-secondary-alt: #cbaa87 !important;
  --bases-cards-background: #e1c4a6 !important;
  --bases-cards-cover-background: #daba97 !important;
  --bases-cards-shadow: 0 0 0 1px #c6a57f !important;
  --bases-cards-shadow-hover: 0 0 0 1px #a8865f !important;
  --bases-embed-border-color: #c6a57f !important;
  --bases-group-heading-property-color: #5b4f4a !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: #c6a57f !important;
  --bases-table-cell-background-active: #e1c4a6 !important;
  --bases-table-cell-background-disabled: #daba97 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #b4916a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #800000 !important;
  --bases-table-group-background: #daba97 !important;
  --bases-table-header-background: #e1c4a6 !important;
  --bases-table-header-color: #5b4f4a !important;
  --bases-table-summary-background: #e1c4a6 !important;
  --blockquote-border-color: #800000 !important;
  --blur-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent)) !important;
  --bodyFont: "CMU Typewriter Text" !important;
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
  --canvas-background: #e1c4a6 !important;
  --canvas-card-label-color: #7a6d68 !important;
  --canvas-color-1: 207, 30, 51 !important;
  --canvas-color-2: 193, 109, 24 !important;
  --canvas-color-3: 151, 116, 0 !important;
  --canvas-color-4: 1, 144, 59 !important;
  --canvas-color-5: 0, 158, 155 !important;
  --canvas-color-6: 95, 56, 214 !important;
  --canvas-dot-pattern: #c6a57f !important;
  --caret-color: #5f4f49 !important;
  --checkbox-border-color: #7a6d68 !important;
  --checkbox-border-color-hover: #5b4f4a !important;
  --checkbox-color: #800000 !important;
  --checkbox-color-hover: #a00000 !important;
  --checkbox-marker-color: #e1c4a6 !important;
  --checklist-done-color: #5b4f4a !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #cbaa87 !important;
  --code-border-color: #c6a57f !important;
  --code-comment: #7a6d68 !important;
  --code-function: #977400 !important;
  --code-important: #c16d18 !important;
  --code-keyword: #bf206d !important;
  --code-normal: #5f4f49 !important;
  --code-operator: #cf1e33 !important;
  --code-property: #009e9b !important;
  --code-punctuation: #5b4f4a !important;
  --code-string: #01903b !important;
  --code-tag: #cf1e33 !important;
  --code-value: #5f38d6 !important;
  --codeFont: "JetBrains Mono" !important;
  --collapse-icon-color: #7a6d68 !important;
  --collapse-icon-color-collapsed: #800000 !important;
  --color-accent: #800000 !important;
  --color-accent-1: #800000 !important;
  --color-accent-2: #a00000 !important;
  --color-base-00: #e1c4a6 !important;
  --color-base-05: #cbaa87 !important;
  --color-base-10: #daba97 !important;
  --color-base-100: #5f4f49 !important;
  --color-base-20: #dabb9a !important;
  --color-base-25: #4c4743 !important;
  --color-base-30: #c6a57f !important;
  --color-base-35: #a8865f !important;
  --color-base-40: #b4916a !important;
  --color-base-50: #7a6d68 !important;
  --color-base-70: #5b4f4a !important;
  --color-blue: #025fc8 !important;
  --color-blue-rgb: 2, 95, 200 !important;
  --color-bold: #bd5757 !important;
  --color-cyan: #009e9b !important;
  --color-cyan-rgb: 0, 158, 155 !important;
  --color-green: #01903b !important;
  --color-green-rgb: 1, 144, 59 !important;
  --color-italic: #ae612b !important;
  --color-orange: #c16d18 !important;
  --color-orange-rgb: 193, 109, 24 !important;
  --color-pink: #bf206d !important;
  --color-pink-rgb: 191, 32, 109 !important;
  --color-purple: #5f38d6 !important;
  --color-purple-rgb: 95, 56, 214 !important;
  --color-red: #cf1e33 !important;
  --color-red-rgb: 207, 30, 51 !important;
  --color-yellow: #977400 !important;
  --color-yellow-rgb: 151, 116, 0 !important;
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1) !important;
  --dark: #5f4f49 !important;
  --darkgray: #5f4f49 !important;
  --default-animation-duration: 150ms !important;
  --default-border-radius: 4px !important;
  --divider-color: #c6a57f !important;
  --divider-color-hover: #800000 !important;
  --dropdown-background: #e1c4a6 !important;
  --dropdown-background-hover: #daba97 !important;
  --embed-block-shadow-hover: 0 0 0 1px #c6a57f, inset 0 0 0 1px #c6a57f !important;
  --embed-border-start: 2px solid #800000 !important;
  --file-header-background: #e1c4a6 !important;
  --file-header-background-focused: #e1c4a6 !important;
  --file-header-font: "CMU Typewriter Text" !important;
  --file-header-font-size: 14px !important;
  --file-line-width: 900px !important;
  --flair-background: #e1c4a6 !important;
  --flair-color: #5f4f49 !important;
  --font-default: "CMU Typewriter Text" !important;
  --font-interface: "CMU Typewriter Text" !important;
  --font-mermaid: "CMU Typewriter Text" !important;
  --font-monospace: "JetBrains Mono" !important;
  --font-monospace-default: "JetBrains Mono" !important;
  --font-text: "CMU Typewriter Text" !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: #c6a57f !important;
  --footnote-id-color: #5b4f4a !important;
  --footnote-id-color-no-occurrences: #7a6d68 !important;
  --graph-line: #a8865f !important;
  --graph-node: #5b4f4a !important;
  --graph-node-attachment: #977400 !important;
  --graph-node-focused: #800000 !important;
  --graph-node-tag: #01903b !important;
  --graph-node-unresolved: #7a6d68 !important;
  --graph-text: #5f4f49 !important;
  --gray: #5b4f4a !important;
  --header-height: 30px !important;
  --headerFont: "CMU Typewriter Text" !important;
  --heading-formatting: #7a6d68 !important;
  --heading-formatting-color: #d34747 !important;
  --highlight: #eac357 !important;
  --hover-animation-duration: 100ms !important;
  --hover-faster-animation-duration: 75ms !important;
  --hr-color: #c6a57f !important;
  --icon-color: #5b4f4a !important;
  --icon-color-active: #800000 !important;
  --icon-color-focused: #5f4f49 !important;
  --icon-color-hover: #5b4f4a !important;
  --in-between-background: #d4af88 !important;
  --input-date-separator: #7a6d68 !important;
  --input-placeholder-color: #7a6d68 !important;
  --interactive-accent: #800000 !important;
  --interactive-accent-hover: #a00000 !important;
  --interactive-hover: #daba97 !important;
  --interactive-normal: #e1c4a6 !important;
  --light: #e1c4a6 !important;
  --lightgray: #dabb9a !important;
  --link-color: #800000 !important;
  --link-color-hover: #a00000 !important;
  --link-external-color: #800000 !important;
  --link-external-color-hover: #a00000 !important;
  --link-unresolved-color: #800000 !important;
  --list-indent: 1.4em !important;
  --list-marker-color: #7a6d68 !important;
  --list-marker-color-collapsed: #800000 !important;
  --list-marker-color-hover: #5b4f4a !important;
  --menu-background: #dabb9a !important;
  --menu-border-color: #a8865f !important;
  --metadata-border-color: #c6a57f !important;
  --metadata-divider-color: #c6a57f !important;
  --metadata-input-font: "CMU Typewriter Text" !important;
  --metadata-input-text-color: #5f4f49 !important;
  --metadata-label-font: "CMU Typewriter Text" !important;
  --metadata-label-text-color: #5b4f4a !important;
  --metadata-label-text-color-hover: #5b4f4a !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b4916a !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #a8865f !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #e1c4a6 !important;
  --modal-border-color: #b4916a !important;
  --nav-collapse-icon-color: #7a6d68 !important;
  --nav-collapse-icon-color-collapsed: #7a6d68 !important;
  --nav-heading-color: #5f4f49 !important;
  --nav-heading-color-collapsed: #7a6d68 !important;
  --nav-heading-color-collapsed-hover: #5b4f4a !important;
  --nav-heading-color-hover: #5f4f49 !important;
  --nav-item-color: #5b4f4a !important;
  --nav-item-color-active: #5f4f49 !important;
  --nav-item-color-highlighted: #800000 !important;
  --nav-item-color-hover: #5f4f49 !important;
  --nav-item-color-selected: #5f4f49 !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #7a6d68 !important;
  --nav-tag-color-active: #5b4f4a !important;
  --nav-tag-color-hover: #5b4f4a !important;
  --pdf-background: #e1c4a6 !important;
  --pdf-page-background: #e1c4a6 !important;
  --pdf-sidebar-background: #e1c4a6 !important;
  --pill-border-color: #c6a57f !important;
  --pill-border-color-hover: #a8865f !important;
  --pill-color: #5b4f4a !important;
  --pill-color-hover: #5f4f49 !important;
  --pill-color-remove: #7a6d68 !important;
  --pill-color-remove-hover: #800000 !important;
  --pop-callout-slide-out-duration: 700ms !important;
  --pop-callout-width: 20px !important;
  --prompt-background: #e1c4a6 !important;
  --prompt-border-color: #b4916a !important;
  --raised-background: color-mix(in srgb, #e1c4a6 65%, transparent) linear-gradient(#e1c4a6, color-mix(in srgb, #e1c4a6 65%, transparent)) !important;
  --ribbon-background: #dabb9a !important;
  --ribbon-background-collapsed: #e1c4a6 !important;
  --ribbon-padding: 0px !important;
  --ribbon-width: 40px !important;
  --search-clear-button-color: #5b4f4a !important;
  --search-icon-color: #5b4f4a !important;
  --search-result-background: #e1c4a6 !important;
  --secondary: #800000 !important;
  --setting-group-heading-color: #5f4f49 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #daba97 !important;
  --setting-items-border-color: #c6a57f !important;
  --slider-thumb-border-color: #a8865f !important;
  --slider-track-background: #c6a57f !important;
  --status-bar-background: #dabb9a !important;
  --status-bar-border-color: #c6a57f !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: #5b4f4a !important;
  --suggestion-background: #e1c4a6 !important;
  --sync-avatar-color-1: #cf1e33 !important;
  --sync-avatar-color-2: #c16d18 !important;
  --sync-avatar-color-3: #977400 !important;
  --sync-avatar-color-4: #01903b !important;
  --sync-avatar-color-5: #009e9b !important;
  --sync-avatar-color-6: #025fc8 !important;
  --sync-avatar-color-7: #5f38d6 !important;
  --sync-avatar-color-8: #bf206d !important;
  --tab-background-active: #e1c4a6 !important;
  --tab-container-background: #dabb9a !important;
  --tab-divider-color: #a8865f !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: #c6a57f !important;
  --tab-stacked-font-size: 14px !important;
  --tab-stacked-header-width: 30px !important;
  --tab-switcher-background: #dabb9a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #dabb9a, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #800000 !important;
  --tab-text-color: #7a6d68 !important;
  --tab-text-color-active: #5b4f4a !important;
  --tab-text-color-focused: #5b4f4a !important;
  --tab-text-color-focused-active: #5b4f4a !important;
  --tab-text-color-focused-active-current: #5f4f49 !important;
  --tab-text-color-focused-highlighted: #800000 !important;
  --table-add-button-border-color: #c6a57f !important;
  --table-border-color: #c6a57f !important;
  --table-drag-handle-background-active: #800000 !important;
  --table-drag-handle-color: #7a6d68 !important;
  --table-header-border-color: #c6a57f !important;
  --table-header-color: #5f4f49 !important;
  --table-selection-border-color: #800000 !important;
  --tag-color: #800000 !important;
  --tag-color-hover: #800000 !important;
  --tag-radius: 4px !important;
  --tertiary: #a00000 !important;
  --text-accent: #800000 !important;
  --text-accent-hover: #a00000 !important;
  --text-error: #cf1e33 !important;
  --text-faint: #7a6d68 !important;
  --text-highlight-bg: #eac357 !important;
  --text-muted: #5b4f4a !important;
  --text-normal: #5f4f49 !important;
  --text-selection: #c7a78683 !important;
  --text-success: #01903b !important;
  --text-warning: #c16d18 !important;
  --textHighlight: #eac357 !important;
  --titleFont: "CMU Typewriter Text" !important;
  --titlebar-background: #dabb9a !important;
  --titlebar-background-focused: #dabb9a !important;
  --titlebar-border-color: #c6a57f !important;
  --titlebar-text-color: #5b4f4a !important;
  --titlebar-text-color-focused: #5f4f49 !important;
  --traffic-lights-offset-x: 30px !important;
  --traffic-lights-offset-y: 30px !important;
  --vault-profile-color: #5f4f49 !important;
  --vault-profile-color-hover: #5f4f49 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(225, 196, 166);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(225, 196, 166);
  border-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(198, 165, 127);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(91, 79, 74);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 4px;
  color: rgb(128, 0, 0);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(198, 165, 127);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(218, 187, 154);
  border-left-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(225, 196, 166);
  color: rgb(95, 79, 73);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(189, 87, 87);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(189, 87, 87) none 0px;
  text-decoration-color: rgb(189, 87, 87);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(174, 97, 43);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(174, 97, 43) none 0px;
  text-decoration-color: rgb(174, 97, 43);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(174, 97, 43);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(174, 97, 43) none 0px;
  text-decoration-color: rgb(174, 97, 43);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(189, 87, 87);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(189, 87, 87) none 0px;
  text-decoration-color: rgb(189, 87, 87);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(234, 195, 87);
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(95, 79, 73) none 0px;
  text-decoration-color: rgb(95, 79, 73);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body del {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(95, 79, 73) none 0px;
  text-decoration-color: rgb(95, 79, 73);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body footer {
  opacity: 0.5;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(95, 79, 73);
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(122, 109, 104);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(128, 0, 0);
  border-color: rgb(128, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(91, 79, 74) none 0px;
  text-decoration-color: rgb(91, 79, 74);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(128, 0, 0);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
  text-decoration-color: rgb(128, 0, 0);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 0, 0);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
  text-decoration-color: rgb(128, 0, 0);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(128, 0, 0);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body dt {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body ol > li {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body ul > li {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(122, 109, 104);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(218, 187, 154);
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body table {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: 334.703px;
  margin-right: 334.719px;
  width: 194.578px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body thead {
  background-color: rgb(218, 187, 154);
  border-bottom-color: rgb(180, 145, 106);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(180, 145, 106);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(151, 116, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(151, 116, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(151, 116, 0);
  border-left-color: rgb(151, 116, 0);
  border-right-color: rgb(151, 116, 0);
  border-top-color: rgb(151, 116, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body figcaption {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(218, 186, 151);
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-left-width: 0px;
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(122, 109, 104);
  border-left-color: rgb(122, 109, 104);
  border-right-color: rgb(122, 109, 104);
  border-top-color: rgb(122, 109, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(95, 79, 73);
  text-decoration-color: rgb(95, 79, 73);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(2, 95, 200);
  border-left-color: rgb(2, 95, 200);
  border-right-color: rgb(2, 95, 200);
  border-top-color: rgb(2, 95, 200);
  color: rgb(2, 95, 200);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgb(218, 187, 154);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
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

html[saved-theme="light"] body .callout[data-callout="example"] {
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
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

html[saved-theme="light"] body .callout[data-callout="info"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
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

html[saved-theme="light"] body .callout[data-callout="question"] {
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 3px;
  border-top-left-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="col"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cont"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="container"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
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

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(95, 79, 73) none 0px;
  text-decoration-color: rgb(95, 79, 73);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(180, 145, 106);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(180, 145, 106);
  border-right-color: rgb(180, 145, 106);
  border-top-color: rgb(180, 145, 106);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(218, 187, 154);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(128, 0, 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h2 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h3 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h4 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h5 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h6 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
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

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(225, 196, 166) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(225, 196, 166);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(95, 79, 73);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: rgb(91, 79, 74);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
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

html[saved-theme="light"] body .darkmode svg {
  color: rgb(91, 79, 74);
  stroke: rgb(91, 79, 74);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(122, 109, 104);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  color: rgb(91, 79, 74);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(218, 187, 154);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body abbr {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(91, 79, 74);
  border-left-color: rgb(91, 79, 74);
  border-right-color: rgb(91, 79, 74);
  border-top-color: rgb(91, 79, 74);
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body sub {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body summary {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body sup {
  color: rgb(95, 79, 73);
  vertical-align: baseline;
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(128, 0, 0);
}`,
  },
};
