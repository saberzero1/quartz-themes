import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ukiyo.golden-coffee",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cmu-typewriter-text", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --activeline: #5b3d2895 !important;
  --background-modifier-border: #5f4630 !important;
  --background-modifier-border-focus: #644a33 !important;
  --background-modifier-border-hover: #5f4630 !important;
  --background-modifier-form-field: #583f2e !important;
  --background-modifier-form-field-hover: #583f2e !important;
  --background-modifier-message: #2c1e14 !important;
  --background-primary: #402e22 !important;
  --background-primary-alt: #4f3626 !important;
  --background-secondary: #473224 !important;
  --background-secondary-alt: #5f4630 !important;
  --bases-cards-background: #402e22 !important;
  --bases-cards-cover-background: #4f3626 !important;
  --bases-cards-shadow: 0 0 0 1px #5f4630 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #5f4630 !important;
  --bases-embed-border-color: #5f4630 !important;
  --bases-group-heading-property-color: #b9987c !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: #5f4630 !important;
  --bases-table-cell-background-active: #402e22 !important;
  --bases-table-cell-background-disabled: #4f3626 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #644a33 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #e6bb57 !important;
  --bases-table-group-background: #4f3626 !important;
  --bases-table-header-background: #402e22 !important;
  --bases-table-header-color: #b9987c !important;
  --bases-table-summary-background: #402e22 !important;
  --blockquote-border-color: #e6bb57 !important;
  --blur-background: color-mix(in srgb, #5f4630 65%, transparent) linear-gradient(#5f4630, color-mix(in srgb, #5f4630 65%, transparent)) !important;
  --bodyFont: "CMU Typewriter Text" !important;
  --canvas-background: #402e22 !important;
  --canvas-card-label-color: #ac8b6e !important;
  --canvas-dot-pattern: #5f4630 !important;
  --caret-color: #dfc2a0 !important;
  --checkbox-border-color: #ac8b6e !important;
  --checkbox-border-color-hover: #b9987c !important;
  --checkbox-color: #e6bb57 !important;
  --checkbox-color-hover: #e6bb57 !important;
  --checkbox-marker-color: #402e22 !important;
  --checklist-done-color: #b9987c !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #4f3626 !important;
  --code-border-color: #5f4630 !important;
  --code-comment: #ac8b6e !important;
  --code-normal: #dfc2a0 !important;
  --code-punctuation: #b9987c !important;
  --codeFont: "JetBrains Mono" !important;
  --collapse-icon-color: #ac8b6e !important;
  --collapse-icon-color-collapsed: #e6bb57 !important;
  --color-accent: #e6bb57 !important;
  --color-accent-1: #e6bb57 !important;
  --color-accent-2: #f5ca6c !important;
  --color-base-00: #402e22 !important;
  --color-base-05: #5f4c45 !important;
  --color-base-10: #4f3626 !important;
  --color-base-100: #dfc2a0 !important;
  --color-base-20: #473224 !important;
  --color-base-25: #583f2e !important;
  --color-base-30: #5f4630 !important;
  --color-base-35: #5f4630 !important;
  --color-base-40: #644a33 !important;
  --color-base-50: #ac8b6e !important;
  --color-base-70: #b9987c !important;
  --color-bold: #ce631c !important;
  --color-italic: #da9517 !important;
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1) !important;
  --dark: #dfc2a0 !important;
  --darkgray: #dfc2a0 !important;
  --default-animation-duration: 150ms !important;
  --default-border-radius: 4px !important;
  --divider-color: #5f4630 !important;
  --divider-color-hover: #e6bb57 !important;
  --dropdown-background: #5f4630 !important;
  --dropdown-background-hover: #5f4630 !important;
  --embed-block-shadow-hover: 0 0 0 1px #5f4630, inset 0 0 0 1px #5f4630 !important;
  --embed-border-start: 2px solid #e6bb57 !important;
  --file-header-background: #402e22 !important;
  --file-header-background-focused: #402e22 !important;
  --file-header-font: "CMU Typewriter Text" !important;
  --file-header-font-size: 14px !important;
  --file-line-width: 900px !important;
  --flair-background: #5f4630 !important;
  --flair-color: #dfc2a0 !important;
  --font-default: "CMU Typewriter Text" !important;
  --font-interface: "CMU Typewriter Text" !important;
  --font-mermaid: "CMU Typewriter Text" !important;
  --font-monospace: "JetBrains Mono" !important;
  --font-monospace-default: "JetBrains Mono" !important;
  --font-text: "CMU Typewriter Text" !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: #5f4630 !important;
  --footnote-id-color: #b9987c !important;
  --footnote-id-color-no-occurrences: #ac8b6e !important;
  --graph-line: #5f4630 !important;
  --graph-node: #b9987c !important;
  --graph-node-focused: #e6bb57 !important;
  --graph-node-unresolved: #ac8b6e !important;
  --graph-text: #dfc2a0 !important;
  --gray: #b9987c !important;
  --header-height: 30px !important;
  --headerFont: "CMU Typewriter Text" !important;
  --heading-formatting: #ac8b6e !important;
  --heading-formatting-color: #e04242 !important;
  --highlight: #a0632666 !important;
  --hover-animation-duration: 100ms !important;
  --hover-faster-animation-duration: 75ms !important;
  --hr-color: #5f4630 !important;
  --icon-color: #b9987c !important;
  --icon-color-active: #e6bb57 !important;
  --icon-color-focused: #dfc2a0 !important;
  --icon-color-hover: #b9987c !important;
  --in-between-background: #36261b !important;
  --input-date-separator: #ac8b6e !important;
  --input-placeholder-color: #ac8b6e !important;
  --interactive-accent: #e6bb57 !important;
  --interactive-accent-hover: #e6bb57 !important;
  --interactive-hover: #5f4630 !important;
  --interactive-normal: #5f4630 !important;
  --light: #402e22 !important;
  --lightgray: #473224 !important;
  --link-color: #e6bb57 !important;
  --link-color-hover: #f5ca6c !important;
  --link-external-color: #e6bb57 !important;
  --link-external-color-hover: #f5ca6c !important;
  --link-unresolved-color: #e6bb57 !important;
  --list-indent: 1.4em !important;
  --list-marker-color: #ac8b6e !important;
  --list-marker-color-collapsed: #e6bb57 !important;
  --list-marker-color-hover: #b9987c !important;
  --menu-background: #473224 !important;
  --menu-border-color: #5f4630 !important;
  --metadata-border-color: #5f4630 !important;
  --metadata-divider-color: #5f4630 !important;
  --metadata-input-font: "CMU Typewriter Text" !important;
  --metadata-input-text-color: #dfc2a0 !important;
  --metadata-label-font: "CMU Typewriter Text" !important;
  --metadata-label-text-color: #b9987c !important;
  --metadata-label-text-color-hover: #b9987c !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #644a33 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #5f4630 !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #402e22 !important;
  --modal-border-color: #644a33 !important;
  --nav-collapse-icon-color: #ac8b6e !important;
  --nav-collapse-icon-color-collapsed: #ac8b6e !important;
  --nav-heading-color: #dfc2a0 !important;
  --nav-heading-color-collapsed: #ac8b6e !important;
  --nav-heading-color-collapsed-hover: #b9987c !important;
  --nav-heading-color-hover: #dfc2a0 !important;
  --nav-item-color: #b9987c !important;
  --nav-item-color-active: #dfc2a0 !important;
  --nav-item-color-highlighted: #e6bb57 !important;
  --nav-item-color-hover: #dfc2a0 !important;
  --nav-item-color-selected: #dfc2a0 !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #ac8b6e !important;
  --nav-tag-color-active: #b9987c !important;
  --nav-tag-color-hover: #b9987c !important;
  --pdf-background: #402e22 !important;
  --pdf-page-background: #402e22 !important;
  --pdf-shadow: 0 0 0 1px #5f4630 !important;
  --pdf-sidebar-background: #402e22 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #5f4630 !important;
  --pill-border-color: #5f4630 !important;
  --pill-border-color-hover: #5f4630 !important;
  --pill-color: #b9987c !important;
  --pill-color-hover: #dfc2a0 !important;
  --pill-color-remove: #ac8b6e !important;
  --pill-color-remove-hover: #e6bb57 !important;
  --pop-callout-slide-out-duration: 0ms !important;
  --pop-callout-width: 20px !important;
  --prompt-background: #402e22 !important;
  --prompt-border-color: #644a33 !important;
  --raised-background: color-mix(in srgb, #5f4630 65%, transparent) linear-gradient(#5f4630, color-mix(in srgb, #5f4630 65%, transparent)) !important;
  --ribbon-background: #473224 !important;
  --ribbon-background-collapsed: #402e22 !important;
  --ribbon-padding: 0px !important;
  --ribbon-width: 40px !important;
  --search-clear-button-color: #b9987c !important;
  --search-icon-color: #b9987c !important;
  --search-result-background: #402e22 !important;
  --secondary: #e6bb57 !important;
  --setting-group-heading-color: #dfc2a0 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #4f3626 !important;
  --setting-items-border-color: #5f4630 !important;
  --slider-thumb-border-color: #5f4630 !important;
  --slider-track-background: #5f4630 !important;
  --status-bar-background: #473224 !important;
  --status-bar-border-color: #5f4630 !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: #b9987c !important;
  --suggestion-background: #402e22 !important;
  --tab-background-active: #402e22 !important;
  --tab-container-background: #473224 !important;
  --tab-divider-color: #5f4630 !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: #5f4630 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-stacked-header-width: 30px !important;
  --tab-switcher-background: #473224 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #473224, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #e6bb57 !important;
  --tab-text-color: #ac8b6e !important;
  --tab-text-color-active: #b9987c !important;
  --tab-text-color-focused: #b9987c !important;
  --tab-text-color-focused-active: #b9987c !important;
  --tab-text-color-focused-active-current: #dfc2a0 !important;
  --tab-text-color-focused-highlighted: #e6bb57 !important;
  --table-add-button-border-color: #5f4630 !important;
  --table-border-color: #5f4630 !important;
  --table-drag-handle-background-active: #e6bb57 !important;
  --table-drag-handle-color: #ac8b6e !important;
  --table-header-border-color: #5f4630 !important;
  --table-header-color: #dfc2a0 !important;
  --table-selection-border-color: #e6bb57 !important;
  --tag-color: #e6bb57 !important;
  --tag-color-hover: #e6bb57 !important;
  --tag-radius: 4px !important;
  --tertiary: #f5ca6c !important;
  --text-accent: #e6bb57 !important;
  --text-accent-hover: #f5ca6c !important;
  --text-faint: #ac8b6e !important;
  --text-highlight-bg: #a0632666 !important;
  --text-highlight-bg-active: #a0632666 !important;
  --text-muted: #b9987c !important;
  --text-normal: #dfc2a0 !important;
  --text-selection: #825f4795 !important;
  --textHighlight: #a0632666 !important;
  --titleFont: "CMU Typewriter Text" !important;
  --titlebar-background: #473224 !important;
  --titlebar-background-focused: #473224 !important;
  --titlebar-border-color: #5f4630 !important;
  --titlebar-text-color: #b9987c !important;
  --titlebar-text-color-focused: #dfc2a0 !important;
  --traffic-lights-offset-x: 30px !important;
  --traffic-lights-offset-y: 30px !important;
  --vault-profile-color: #dfc2a0 !important;
  --vault-profile-color-hover: #dfc2a0 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(71, 50, 36);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(64, 46, 34);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(95, 70, 48);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(71, 50, 36);
  border-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(95, 70, 48);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(185, 152, 124);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(185, 152, 124);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 4px;
  color: rgb(230, 187, 87);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(185, 152, 124);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(71, 50, 36);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(95, 70, 48);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(71, 50, 36);
  border-left-color: rgb(95, 70, 48);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(64, 46, 34);
  color: rgb(223, 194, 160);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(206, 99, 28);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(206, 99, 28) none 0px;
  text-decoration-color: rgb(206, 99, 28);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(218, 149, 23);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(218, 149, 23) none 0px;
  text-decoration-color: rgb(218, 149, 23);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(218, 149, 23);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(218, 149, 23) none 0px;
  text-decoration-color: rgb(218, 149, 23);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(206, 99, 28);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(206, 99, 28) none 0px;
  text-decoration-color: rgb(206, 99, 28);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(160, 99, 38, 0.4);
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(223, 194, 160) none 0px;
  text-decoration-color: rgb(223, 194, 160);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body del {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(223, 194, 160) none 0px;
  text-decoration-color: rgb(223, 194, 160);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body footer {
  opacity: 0.5;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(223, 194, 160);
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(172, 139, 110);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(230, 187, 87);
  border-color: rgb(230, 187, 87);
}

html[saved-theme="dark"] body p {
  color: rgb(185, 152, 124);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(185, 152, 124) none 0px;
  text-decoration-color: rgb(185, 152, 124);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(230, 187, 87);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(230, 187, 87) none 0px;
  text-decoration-color: rgb(230, 187, 87);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(230, 187, 87);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(230, 187, 87) none 0px;
  text-decoration-color: rgb(230, 187, 87);
  transition: filter 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(230, 187, 87);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(230, 187, 87) none 0px;
  transition: color 0.1s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body dt {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(172, 139, 110);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(71, 50, 36);
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body table {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: 334.703px;
  margin-right: 334.719px;
  width: 194.578px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(95, 70, 48);
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
  border-top-color: rgb(95, 70, 48);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(95, 70, 48);
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
  border-top-color: rgb(95, 70, 48);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body thead {
  background-color: rgb(71, 50, 36);
  border-bottom-color: rgb(100, 74, 51);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(100, 74, 51);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
  color: rgb(223, 194, 160);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(79, 54, 38);
  border-bottom-color: rgb(95, 70, 48);
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
  border-top-color: rgb(95, 70, 48);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(79, 54, 38);
  border-bottom-color: rgb(95, 70, 48);
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
  border-top-color: rgb(95, 70, 48);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(79, 54, 38);
  border-bottom-color: rgb(95, 70, 48);
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
  border-top-color: rgb(95, 70, 48);
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 4px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(79, 54, 38);
  border-bottom-color: rgb(95, 70, 48);
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
  border-top-color: rgb(95, 70, 48);
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 4px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(79, 54, 38);
  border-bottom-color: rgb(185, 152, 124);
  border-left-color: rgb(185, 152, 124);
  border-right-color: rgb(185, 152, 124);
  border-top-color: rgb(185, 152, 124);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(223, 194, 160);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-left-width: 0px;
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(172, 139, 110);
  border-left-color: rgb(172, 139, 110);
  border-right-color: rgb(172, 139, 110);
  border-top-color: rgb(172, 139, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(223, 194, 160);
  text-decoration-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 46, 34);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 46, 34);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(172, 139, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgb(71, 50, 36);
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
  background-color: rgb(88, 63, 46);
  border-bottom-color: rgb(95, 70, 48);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
  border-top-color: rgb(95, 70, 48);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(223, 194, 160);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(64, 46, 34);
  border-bottom-color: rgb(100, 74, 51);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(100, 74, 51);
  border-right-color: rgb(100, 74, 51);
  border-top-color: rgb(100, 74, 51);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(223, 194, 160) none 0px;
  text-decoration-color: rgb(223, 194, 160);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(100, 74, 51);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(100, 74, 51);
  border-right-color: rgb(100, 74, 51);
  border-top-color: rgb(100, 74, 51);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(71, 50, 36);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(230, 187, 87);
}

html[saved-theme="dark"] body h1 {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h2 {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h3 {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h4 {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h5 {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h6 {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(95, 70, 48);
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
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
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(185, 152, 124);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(185, 152, 124);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(223, 194, 160);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(185, 152, 124);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(185, 152, 124);
  border-right-color: rgb(185, 152, 124);
  border-top-color: rgb(185, 152, 124);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(185, 152, 124);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(71, 50, 36);
  border-bottom-color: rgb(95, 70, 48);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
  border-top-color: rgb(95, 70, 48);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(185, 152, 124);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(185, 152, 124);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(185, 152, 124);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(185, 152, 124);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(185, 152, 124);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(185, 152, 124);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(185, 152, 124);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(185, 152, 124);
  border-right-color: rgb(185, 152, 124);
  border-top-color: rgb(185, 152, 124);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(185, 152, 124);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(185, 152, 124);
  stroke: rgb(185, 152, 124);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(185, 152, 124);
  border-left-color: rgb(185, 152, 124);
  border-right-color: rgb(185, 152, 124);
  border-top-color: rgb(185, 152, 124);
  color: rgb(185, 152, 124);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(172, 139, 110);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(95, 70, 48);
  border-left-color: rgb(95, 70, 48);
  border-right-color: rgb(95, 70, 48);
  border-top-color: rgb(95, 70, 48);
  color: rgb(185, 152, 124);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(185, 152, 124);
  border-left-color: rgb(185, 152, 124);
  border-right-color: rgb(185, 152, 124);
  border-top-color: rgb(185, 152, 124);
  color: rgb(185, 152, 124);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(71, 50, 36);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(223, 194, 160);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body abbr {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(185, 152, 124);
  border-left-color: rgb(185, 152, 124);
  border-right-color: rgb(185, 152, 124);
  border-top-color: rgb(185, 152, 124);
  color: rgb(185, 152, 124);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(79, 54, 38);
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
  color: rgb(223, 194, 160);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(223, 194, 160);
  border-left-color: rgb(223, 194, 160);
  border-right-color: rgb(223, 194, 160);
  border-top-color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body sub {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body summary {
  color: rgb(223, 194, 160);
}

html[saved-theme="dark"] body sup {
  color: rgb(223, 194, 160);
  vertical-align: baseline;
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(230, 187, 87);
}`,
  },
  light: {
    base: `:root:root {
  --activeline: #ffe2c4d1 !important;
  --background-modifier-border: #e0c1a0 !important;
  --background-modifier-border-focus: #d6b086 !important;
  --background-modifier-border-hover: #e0c1a0 !important;
  --background-modifier-error: #cf1e33 !important;
  --background-modifier-error-hover: #cf1e33 !important;
  --background-modifier-error-rgb: 207, 30, 51 !important;
  --background-modifier-form-field: #f3dbc1 !important;
  --background-modifier-form-field-hover: #f3dbc1 !important;
  --background-modifier-message: #2c1e14 !important;
  --background-modifier-success: #01903b !important;
  --background-modifier-success-rgb: 1, 144, 59 !important;
  --background-primary: #fff3e7 !important;
  --background-primary-alt: #fcebd9 !important;
  --background-secondary: #fae7d2 !important;
  --background-secondary-alt: #f5dcc3 !important;
  --bases-cards-background: #fff3e7 !important;
  --bases-cards-cover-background: #fcebd9 !important;
  --bases-cards-shadow: 0 0 0 1px #e0c1a0 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #e0c1a0 !important;
  --bases-embed-border-color: #e0c1a0 !important;
  --bases-group-heading-property-color: #cf8a3a !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: #e0c1a0 !important;
  --bases-table-cell-background-active: #fff3e7 !important;
  --bases-table-cell-background-disabled: #fcebd9 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #d6b086 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #d83939 !important;
  --bases-table-group-background: #fcebd9 !important;
  --bases-table-header-background: #fff3e7 !important;
  --bases-table-header-color: #cf8a3a !important;
  --bases-table-summary-background: #fff3e7 !important;
  --blockquote-border-color: #d83939 !important;
  --blur-background: color-mix(in srgb, #fff3e7 65%, transparent) linear-gradient(#fff3e7, color-mix(in srgb, #fff3e7 65%, transparent)) !important;
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
  --canvas-background: #fff3e7 !important;
  --canvas-card-label-color: #c37e30 !important;
  --canvas-color-1: 207, 30, 51 !important;
  --canvas-color-2: 193, 109, 24 !important;
  --canvas-color-3: 151, 116, 0 !important;
  --canvas-color-4: 1, 144, 59 !important;
  --canvas-color-5: 0, 158, 155 !important;
  --canvas-color-6: 95, 56, 214 !important;
  --canvas-dot-pattern: #e0c1a0 !important;
  --caret-color: #97653c !important;
  --checkbox-border-color: #c37e30 !important;
  --checkbox-border-color-hover: #cf8a3a !important;
  --checkbox-color: #d83939 !important;
  --checkbox-color-hover: #ec5555 !important;
  --checkbox-marker-color: #fff3e7 !important;
  --checklist-done-color: #cf8a3a !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #f5dcc3 !important;
  --code-border-color: #e0c1a0 !important;
  --code-comment: #c37e30 !important;
  --code-function: #977400 !important;
  --code-important: #c16d18 !important;
  --code-keyword: #bf206d !important;
  --code-normal: #97653c !important;
  --code-operator: #cf1e33 !important;
  --code-property: #009e9b !important;
  --code-punctuation: #cf8a3a !important;
  --code-string: #01903b !important;
  --code-tag: #cf1e33 !important;
  --code-value: #5f38d6 !important;
  --codeFont: "JetBrains Mono" !important;
  --collapse-icon-color: #c37e30 !important;
  --collapse-icon-color-collapsed: #d83939 !important;
  --color-accent: #d83939 !important;
  --color-accent-1: #d83939 !important;
  --color-accent-2: #ec5555 !important;
  --color-base-00: #fff3e7 !important;
  --color-base-05: #f5dcc3 !important;
  --color-base-10: #fcebd9 !important;
  --color-base-100: #97653c !important;
  --color-base-20: #fae7d2 !important;
  --color-base-25: #f3dbc1 !important;
  --color-base-30: #e0c1a0 !important;
  --color-base-35: #e0c1a0 !important;
  --color-base-40: #d6b086 !important;
  --color-base-50: #c37e30 !important;
  --color-base-70: #cf8a3a !important;
  --color-blue: #025fc8 !important;
  --color-blue-rgb: 2, 95, 200 !important;
  --color-bold: #b36b29 !important;
  --color-cyan: #009e9b !important;
  --color-cyan-rgb: 0, 158, 155 !important;
  --color-green: #01903b !important;
  --color-green-rgb: 1, 144, 59 !important;
  --color-italic: #d88405 !important;
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
  --dark: #97653c !important;
  --darkgray: #97653c !important;
  --default-animation-duration: 150ms !important;
  --default-border-radius: 4px !important;
  --divider-color: #e0c1a0 !important;
  --divider-color-hover: #d83939 !important;
  --dropdown-background: #e0c1a0 !important;
  --dropdown-background-hover: #e0c1a0 !important;
  --embed-block-shadow-hover: 0 0 0 1px #e0c1a0, inset 0 0 0 1px #e0c1a0 !important;
  --embed-border-start: 2px solid #d83939 !important;
  --file-header-background: #fff3e7 !important;
  --file-header-background-focused: #fff3e7 !important;
  --file-header-font: "CMU Typewriter Text" !important;
  --file-header-font-size: 14px !important;
  --file-line-width: 900px !important;
  --flair-background: #e0c1a0 !important;
  --flair-color: #97653c !important;
  --font-default: "CMU Typewriter Text" !important;
  --font-interface: "CMU Typewriter Text" !important;
  --font-mermaid: "CMU Typewriter Text" !important;
  --font-monospace: "JetBrains Mono" !important;
  --font-monospace-default: "JetBrains Mono" !important;
  --font-text: "CMU Typewriter Text" !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: #e0c1a0 !important;
  --footnote-id-color: #cf8a3a !important;
  --footnote-id-color-no-occurrences: #c37e30 !important;
  --graph-line: #e0c1a0 !important;
  --graph-node: #cf8a3a !important;
  --graph-node-attachment: #977400 !important;
  --graph-node-focused: #d83939 !important;
  --graph-node-tag: #01903b !important;
  --graph-node-unresolved: #c37e30 !important;
  --graph-text: #97653c !important;
  --gray: #cf8a3a !important;
  --header-height: 30px !important;
  --headerFont: "CMU Typewriter Text" !important;
  --heading-formatting: #c37e30 !important;
  --heading-formatting-color: #da7b64 !important;
  --highlight: #ffd3a4cb !important;
  --hover-animation-duration: 100ms !important;
  --hover-faster-animation-duration: 75ms !important;
  --hr-color: #e0c1a0 !important;
  --icon-color: #cf8a3a !important;
  --icon-color-active: #d83939 !important;
  --icon-color-focused: #97653c !important;
  --icon-color-hover: #cf8a3a !important;
  --in-between-background: #efdac3 !important;
  --input-date-separator: #c37e30 !important;
  --input-placeholder-color: #c37e30 !important;
  --interactive-accent: #d83939 !important;
  --interactive-accent-hover: #ec5555 !important;
  --interactive-hover: #e0c1a0 !important;
  --interactive-normal: #e0c1a0 !important;
  --light: #fff3e7 !important;
  --lightgray: #fae7d2 !important;
  --link-color: #d83939 !important;
  --link-color-hover: #ec5555 !important;
  --link-external-color: #d83939 !important;
  --link-external-color-hover: #ec5555 !important;
  --link-unresolved-color: #d83939 !important;
  --list-indent: 1.4em !important;
  --list-marker-color: #c37e30 !important;
  --list-marker-color-collapsed: #d83939 !important;
  --list-marker-color-hover: #cf8a3a !important;
  --menu-background: #fae7d2 !important;
  --menu-border-color: #e0c1a0 !important;
  --metadata-border-color: #e0c1a0 !important;
  --metadata-divider-color: #e0c1a0 !important;
  --metadata-input-font: "CMU Typewriter Text" !important;
  --metadata-input-text-color: #97653c !important;
  --metadata-label-font: "CMU Typewriter Text" !important;
  --metadata-label-text-color: #cf8a3a !important;
  --metadata-label-text-color-hover: #cf8a3a !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #d6b086 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e0c1a0 !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #fff3e7 !important;
  --modal-border-color: #d6b086 !important;
  --nav-collapse-icon-color: #c37e30 !important;
  --nav-collapse-icon-color-collapsed: #c37e30 !important;
  --nav-heading-color: #97653c !important;
  --nav-heading-color-collapsed: #c37e30 !important;
  --nav-heading-color-collapsed-hover: #cf8a3a !important;
  --nav-heading-color-hover: #97653c !important;
  --nav-item-color: #cf8a3a !important;
  --nav-item-color-active: #97653c !important;
  --nav-item-color-highlighted: #d83939 !important;
  --nav-item-color-hover: #97653c !important;
  --nav-item-color-selected: #97653c !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #c37e30 !important;
  --nav-tag-color-active: #cf8a3a !important;
  --nav-tag-color-hover: #cf8a3a !important;
  --pdf-background: #fff3e7 !important;
  --pdf-page-background: #fff3e7 !important;
  --pdf-sidebar-background: #fff3e7 !important;
  --pill-border-color: #e0c1a0 !important;
  --pill-border-color-hover: #e0c1a0 !important;
  --pill-color: #cf8a3a !important;
  --pill-color-hover: #97653c !important;
  --pill-color-remove: #c37e30 !important;
  --pill-color-remove-hover: #d83939 !important;
  --pop-callout-slide-out-duration: 0ms !important;
  --pop-callout-width: 20px !important;
  --prompt-background: #fff3e7 !important;
  --prompt-border-color: #d6b086 !important;
  --raised-background: color-mix(in srgb, #fff3e7 65%, transparent) linear-gradient(#fff3e7, color-mix(in srgb, #fff3e7 65%, transparent)) !important;
  --ribbon-background: #fae7d2 !important;
  --ribbon-background-collapsed: #fff3e7 !important;
  --ribbon-padding: 0px !important;
  --ribbon-width: 40px !important;
  --search-clear-button-color: #cf8a3a !important;
  --search-icon-color: #cf8a3a !important;
  --search-result-background: #fff3e7 !important;
  --secondary: #d83939 !important;
  --setting-group-heading-color: #97653c !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #fcebd9 !important;
  --setting-items-border-color: #e0c1a0 !important;
  --slider-thumb-border-color: #e0c1a0 !important;
  --slider-track-background: #e0c1a0 !important;
  --status-bar-background: #fae7d2 !important;
  --status-bar-border-color: #e0c1a0 !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: #cf8a3a !important;
  --suggestion-background: #fff3e7 !important;
  --sync-avatar-color-1: #cf1e33 !important;
  --sync-avatar-color-2: #c16d18 !important;
  --sync-avatar-color-3: #977400 !important;
  --sync-avatar-color-4: #01903b !important;
  --sync-avatar-color-5: #009e9b !important;
  --sync-avatar-color-6: #025fc8 !important;
  --sync-avatar-color-7: #5f38d6 !important;
  --sync-avatar-color-8: #bf206d !important;
  --tab-background-active: #fff3e7 !important;
  --tab-container-background: #fae7d2 !important;
  --tab-divider-color: #e0c1a0 !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: #e0c1a0 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-stacked-header-width: 30px !important;
  --tab-switcher-background: #fae7d2 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fae7d2, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d83939 !important;
  --tab-text-color: #c37e30 !important;
  --tab-text-color-active: #cf8a3a !important;
  --tab-text-color-focused: #cf8a3a !important;
  --tab-text-color-focused-active: #cf8a3a !important;
  --tab-text-color-focused-active-current: #97653c !important;
  --tab-text-color-focused-highlighted: #d83939 !important;
  --table-add-button-border-color: #e0c1a0 !important;
  --table-border-color: #e0c1a0 !important;
  --table-drag-handle-background-active: #d83939 !important;
  --table-drag-handle-color: #c37e30 !important;
  --table-header-border-color: #e0c1a0 !important;
  --table-header-color: #97653c !important;
  --table-selection-border-color: #d83939 !important;
  --tag-color: #d83939 !important;
  --tag-color-hover: #d83939 !important;
  --tag-radius: 4px !important;
  --tertiary: #ec5555 !important;
  --text-accent: #d83939 !important;
  --text-accent-hover: #ec5555 !important;
  --text-error: #cf1e33 !important;
  --text-faint: #c37e30 !important;
  --text-highlight-bg: #ffd3a4cb !important;
  --text-highlight-bg-active: #ffd3a4cb !important;
  --text-muted: #cf8a3a !important;
  --text-normal: #97653c !important;
  --text-selection: #efddcacb !important;
  --text-success: #01903b !important;
  --text-warning: #c16d18 !important;
  --textHighlight: #ffd3a4cb !important;
  --titleFont: "CMU Typewriter Text" !important;
  --titlebar-background: #fae7d2 !important;
  --titlebar-background-focused: #fae7d2 !important;
  --titlebar-border-color: #e0c1a0 !important;
  --titlebar-text-color: #cf8a3a !important;
  --titlebar-text-color-focused: #97653c !important;
  --traffic-lights-offset-x: 30px !important;
  --traffic-lights-offset-y: 30px !important;
  --vault-profile-color: #97653c !important;
  --vault-profile-color-hover: #97653c !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 231, 210);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 243, 231);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(224, 193, 160);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 243, 231);
  border-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(224, 193, 160);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(207, 138, 58);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(207, 138, 58);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 4px;
  color: rgb(216, 57, 57);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(207, 138, 58);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 231, 210);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 193, 160);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 231, 210);
  border-left-color: rgb(224, 193, 160);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 243, 231);
  color: rgb(151, 101, 60);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(179, 107, 41);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(179, 107, 41) none 0px;
  text-decoration-color: rgb(179, 107, 41);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(216, 132, 5);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(216, 132, 5) none 0px;
  text-decoration-color: rgb(216, 132, 5);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(216, 132, 5);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(216, 132, 5) none 0px;
  text-decoration-color: rgb(216, 132, 5);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(179, 107, 41);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(179, 107, 41) none 0px;
  text-decoration-color: rgb(179, 107, 41);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 211, 164, 0.796);
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(151, 101, 60) none 0px;
  text-decoration-color: rgb(151, 101, 60);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body del {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(151, 101, 60) none 0px;
  text-decoration-color: rgb(151, 101, 60);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body footer {
  opacity: 0.5;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(151, 101, 60);
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(195, 126, 48);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(216, 57, 57);
  border-color: rgb(216, 57, 57);
}

html[saved-theme="light"] body p {
  color: rgb(207, 138, 58);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  outline: rgb(207, 138, 58) none 0px;
  text-decoration-color: rgb(207, 138, 58);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(216, 57, 57);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(216, 57, 57) none 0px;
  text-decoration-color: rgb(216, 57, 57);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(216, 57, 57);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(216, 57, 57) none 0px;
  text-decoration-color: rgb(216, 57, 57);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(216, 57, 57);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(216, 57, 57) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body dt {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body ol > li {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body ul > li {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(195, 126, 48);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(250, 231, 210);
  font-family: "??", "??", "CMU Typewriter Text";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body table {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-left: 334.703px;
  margin-right: 334.719px;
  width: 194.578px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(224, 193, 160);
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
  border-top-color: rgb(224, 193, 160);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(224, 193, 160);
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
  border-top-color: rgb(224, 193, 160);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body thead {
  background-color: rgb(250, 231, 210);
  border-bottom-color: rgb(214, 176, 134);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(214, 176, 134);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
  color: rgb(151, 101, 60);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 220, 195);
  border-bottom-color: rgb(224, 193, 160);
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
  border-top-color: rgb(224, 193, 160);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 220, 195);
  border-bottom-color: rgb(224, 193, 160);
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
  border-top-color: rgb(224, 193, 160);
  color: rgb(151, 101, 60);
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
  background-color: rgb(245, 220, 195);
  border-bottom-color: rgb(224, 193, 160);
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
  border-top-color: rgb(224, 193, 160);
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 4px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(245, 220, 195);
  border-bottom-color: rgb(224, 193, 160);
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
  border-top-color: rgb(224, 193, 160);
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 4px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body figcaption {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(252, 235, 217);
  border-bottom-color: rgb(207, 138, 58);
  border-left-color: rgb(207, 138, 58);
  border-right-color: rgb(207, 138, 58);
  border-top-color: rgb(207, 138, 58);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(151, 101, 60);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-left-width: 0px;
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(195, 126, 48);
  border-left-color: rgb(195, 126, 48);
  border-right-color: rgb(195, 126, 48);
  border-top-color: rgb(195, 126, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(151, 101, 60);
  text-decoration-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 243, 231);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 243, 231);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(193, 109, 24);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 126, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(151, 116, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 158, 155);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 95, 200);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 95, 200);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(151, 116, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(151, 116, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(95, 56, 214);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 30, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(1, 144, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(1, 144, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(1, 144, 59);
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
  background-color: rgb(250, 231, 210);
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
  background-color: rgb(243, 219, 193);
  border-bottom-color: rgb(224, 193, 160);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
  border-top-color: rgb(224, 193, 160);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(151, 101, 60);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 243, 231);
  border-bottom-color: rgb(214, 176, 134);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(214, 176, 134);
  border-right-color: rgb(214, 176, 134);
  border-top-color: rgb(214, 176, 134);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(151, 101, 60) none 0px;
  text-decoration-color: rgb(151, 101, 60);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(214, 176, 134);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(214, 176, 134);
  border-right-color: rgb(214, 176, 134);
  border-top-color: rgb(214, 176, 134);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 231, 210);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(216, 57, 57);
}

html[saved-theme="light"] body h1 {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h2 {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h3 {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h4 {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h5 {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h6 {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(224, 193, 160);
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
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
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(207, 138, 58);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(207, 138, 58);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(151, 101, 60);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(207, 138, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 138, 58);
  border-right-color: rgb(207, 138, 58);
  border-top-color: rgb(207, 138, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(207, 138, 58);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 231, 210);
  border-bottom-color: rgb(224, 193, 160);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
  border-top-color: rgb(224, 193, 160);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(207, 138, 58);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(207, 138, 58);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(207, 138, 58);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(207, 138, 58);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(207, 138, 58);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(207, 138, 58);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(207, 138, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 138, 58);
  border-right-color: rgb(207, 138, 58);
  border-top-color: rgb(207, 138, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(207, 138, 58);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(207, 138, 58);
  stroke: rgb(207, 138, 58);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(207, 138, 58);
  border-left-color: rgb(207, 138, 58);
  border-right-color: rgb(207, 138, 58);
  border-top-color: rgb(207, 138, 58);
  color: rgb(207, 138, 58);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(195, 126, 48);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(224, 193, 160);
  border-left-color: rgb(224, 193, 160);
  border-right-color: rgb(224, 193, 160);
  border-top-color: rgb(224, 193, 160);
  color: rgb(207, 138, 58);
  font-family: "??", "??", "CMU Typewriter Text";
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(207, 138, 58);
  border-left-color: rgb(207, 138, 58);
  border-right-color: rgb(207, 138, 58);
  border-top-color: rgb(207, 138, 58);
  color: rgb(207, 138, 58);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 231, 210);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(151, 101, 60);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body abbr {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(207, 138, 58);
  border-left-color: rgb(207, 138, 58);
  border-right-color: rgb(207, 138, 58);
  border-top-color: rgb(207, 138, 58);
  color: rgb(207, 138, 58);
  font-family: "??", "??", "??", "CMU Typewriter Text";
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(245, 220, 195);
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
  color: rgb(151, 101, 60);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(151, 101, 60);
  border-left-color: rgb(151, 101, 60);
  border-right-color: rgb(151, 101, 60);
  border-top-color: rgb(151, 101, 60);
}

html[saved-theme="light"] body sub {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body summary {
  color: rgb(151, 101, 60);
}

html[saved-theme="light"] body sup {
  color: rgb(151, 101, 60);
  vertical-align: baseline;
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(216, 57, 57);
}`,
  },
};
