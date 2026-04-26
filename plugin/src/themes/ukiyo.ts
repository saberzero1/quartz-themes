import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ukiyo",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cmu-typewriter-text", "jetbrains-mono"],
    fontFiles: [
      {
        family: "CMU Typewriter Text",
        style: "normal",
        weight: "500",
        file: "cmu-typewriter-text.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "JetBrains Mono",
        style: "normal",
        weight: "400",
        file: "jetbrains-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
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
  --pop-callout-slide-out-duration: 0ms !important;
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
  --shiki-active-tab-border-color: #b2a699 !important;
  --shiki-code-background: #2b2723 !important;
  --shiki-code-comment: #868074 !important;
  --shiki-code-normal: #b2a699 !important;
  --shiki-code-punctuation: #b2a699 !important;
  --shiki-gutter-border-color: #504431 !important;
  --shiki-gutter-text-color: #868074 !important;
  --shiki-gutter-text-color-highlight: #b2a699 !important;
  --shiki-highlight-neutral: #b2a699 !important;
  --shiki-terminal-dots-color: #868074 !important;
  --shiki-tooltip-background: #281f1b !important;
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

html[saved-theme="dark"] body html {
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1);
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --pop-callout-slide-out-duration: 700ms;
  --pop-callout-width: 20px;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(231, 122, 89);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(231, 122, 89) none 0px;
  text-decoration-color: rgb(231, 122, 89);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(231, 122, 89);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(231, 122, 89) none 0px;
  text-decoration-color: rgb(231, 122, 89);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 148, 95);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(186, 148, 95) none 0px;
  text-decoration-color: rgb(186, 148, 95);
  transition: filter 0.1s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
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
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(43, 39, 35);
  border-bottom-color: rgb(80, 68, 49);
  border-left-color: rgb(80, 68, 49);
  border-right-color: rgb(80, 68, 49);
  border-top-color: rgb(80, 68, 49);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "??", "CMU Typewriter Text";
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(178, 166, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(204, 194, 183);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(55, 45, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(55, 45, 41);
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
  background-color: rgb(134, 128, 116);
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
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
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
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="col"] {
  --callout-color: 2, 122, 255;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #372d29 50%);
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px 0px;
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="cont"] {
  --callout-color: 2, 122, 255;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #372d29 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 194, 183);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(204, 194, 183);
  border-left-width: 0px;
  border-right-color: rgb(204, 194, 183);
  border-right-width: 0px;
  border-top-color: rgb(204, 194, 183);
  border-top-left-radius: 0px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="container"] {
  --callout-color: 2, 122, 255;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #372d29 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 194, 183);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(204, 194, 183);
  border-left-width: 0px;
  border-right-color: rgb(204, 194, 183);
  border-right-width: 0px;
  border-top-color: rgb(204, 194, 183);
  border-top-left-radius: 0px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(65, 54, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(65, 54, 50);
  color: rgb(204, 194, 183);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
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

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(186, 148, 95);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 194, 183);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 194, 183);
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(178, 166, 153);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html[saved-theme="dark"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(80, 68, 49);
  color: rgb(204, 194, 183);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(55, 45, 41);
  color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(65, 54, 50);
  border-color: rgb(204, 194, 183);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(65, 54, 50);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(204, 194, 183);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 194, 183);
  border-left-color: rgb(204, 194, 183);
  border-right-color: rgb(204, 194, 183);
  border-top-color: rgb(204, 194, 183);
  color: rgb(204, 194, 183);
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
  --pop-callout-slide-out-duration: 0ms !important;
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
  --shiki-active-tab-border-color: #5b4f4a !important;
  --shiki-code-background: #cbaa87 !important;
  --shiki-code-comment: #7a6d68 !important;
  --shiki-code-function: #01903b !important;
  --shiki-code-important: #c16d18 !important;
  --shiki-code-keyword: #bf206d !important;
  --shiki-code-normal: #5b4f4a !important;
  --shiki-code-property: #009e9b !important;
  --shiki-code-punctuation: #5b4f4a !important;
  --shiki-code-string: #977400 !important;
  --shiki-code-value: #5f38d6 !important;
  --shiki-gutter-border-color: #c6a57f !important;
  --shiki-gutter-text-color: #7a6d68 !important;
  --shiki-gutter-text-color-highlight: #5b4f4a !important;
  --shiki-highlight-green: rgba(1, 144, 59, 0.5) !important;
  --shiki-highlight-green-background: rgba(1, 144, 59, 0.1) !important;
  --shiki-highlight-neutral: #5b4f4a !important;
  --shiki-highlight-red: rgba(207, 30, 51, 0.5) !important;
  --shiki-highlight-red-background: rgba(207, 30, 51, 0.1) !important;
  --shiki-terminal-dots-color: #7a6d68 !important;
  --shiki-tooltip-background: #d7b38d !important;
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

html[saved-theme="light"] body html {
  --cubic-animation: cubic-bezier(0.175, 0.9, 0.3, 1.1);
  --default-animation-duration: 150ms;
  --default-border-radius: 4px;
  --hover-animation-duration: 100ms;
  --hover-faster-animation-duration: 75ms;
  --pop-callout-slide-out-duration: 700ms;
  --pop-callout-width: 20px;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(189, 87, 87);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(189, 87, 87) none 0px;
  text-decoration-color: rgb(189, 87, 87);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(174, 97, 43);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(174, 97, 43) none 0px;
  text-decoration-color: rgb(174, 97, 43);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(174, 97, 43);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(174, 97, 43) none 0px;
  text-decoration-color: rgb(174, 97, 43);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(128, 0, 0);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
  text-decoration-color: rgb(128, 0, 0);
  transition: background-color 0.1s ease-in-out;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 0, 0);
  font-family: "??", "??", "CMU Typewriter Text";
  outline: rgb(128, 0, 0) none 0px;
  text-decoration-color: rgb(128, 0, 0);
}

html[saved-theme="light"] body a.internal-link.broken {
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
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
  font-family: "??", "??", "JetBrains Mono";
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(203, 170, 135);
  border-bottom-color: rgb(198, 165, 127);
  border-left-color: rgb(198, 165, 127);
  border-right-color: rgb(198, 165, 127);
  border-top-color: rgb(198, 165, 127);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body figcaption {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "??", "CMU Typewriter Text";
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(91, 79, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(95, 79, 73);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 196, 166);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 196, 166);
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
  background-color: rgb(122, 109, 104);
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
  --callout-color: 2, 95, 200;
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
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 158, 155;
  background: rgba(0, 158, 155, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 158, 155, 0.1);
  border-bottom-color: rgba(0, 158, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(0, 158, 155);
  border-left-width: 3px;
  border-right-color: rgba(0, 158, 155, 0.25);
  border-top-color: rgba(0, 158, 155, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 207, 30, 51;
  background: rgba(207, 30, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(207, 30, 51, 0.1);
  border-bottom-color: rgba(207, 30, 51, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(207, 30, 51);
  border-left-width: 3px;
  border-right-color: rgba(207, 30, 51, 0.25);
  border-top-color: rgba(207, 30, 51, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="col"] {
  --callout-color: 2, 95, 200;
  --table-border-color: color-mix(in srgb, rgb(2, 95, 200) 25%, #e1c4a6 50%);
  background-color: rgba(2, 95, 200, 0.1);
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(2, 95, 200);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px 0px;
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="cont"] {
  --callout-color: 2, 95, 200;
  --table-border-color: color-mix(in srgb, rgb(2, 95, 200) 25%, #e1c4a6 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(95, 79, 73);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(95, 79, 73);
  border-left-width: 0px;
  border-right-color: rgb(95, 79, 73);
  border-right-width: 0px;
  border-top-color: rgb(95, 79, 73);
  border-top-left-radius: 0px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="container"] {
  --callout-color: 2, 95, 200;
  --table-border-color: color-mix(in srgb, rgb(2, 95, 200) 25%, #e1c4a6 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(95, 79, 73);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(95, 79, 73);
  border-left-width: 0px;
  border-right-color: rgb(95, 79, 73);
  border-right-width: 0px;
  border-top-color: rgb(95, 79, 73);
  border-top-left-radius: 0px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 207, 30, 51;
  background: rgba(207, 30, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(207, 30, 51, 0.1);
  border-bottom-color: rgba(207, 30, 51, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(207, 30, 51);
  border-left-width: 3px;
  border-right-color: rgba(207, 30, 51, 0.25);
  border-top-color: rgba(207, 30, 51, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 95, 56, 214;
  background: rgba(95, 56, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(95, 56, 214, 0.1);
  border-bottom-color: rgba(95, 56, 214, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(95, 56, 214);
  border-left-width: 3px;
  border-right-color: rgba(95, 56, 214, 0.25);
  border-top-color: rgba(95, 56, 214, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 207, 30, 51;
  background: rgba(207, 30, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(207, 30, 51, 0.1);
  border-bottom-color: rgba(207, 30, 51, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(207, 30, 51);
  border-left-width: 3px;
  border-right-color: rgba(207, 30, 51, 0.25);
  border-top-color: rgba(207, 30, 51, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 2, 95, 200;
  background: rgba(2, 95, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 95, 200, 0.1);
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 2, 95, 200;
  background: rgba(2, 95, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 95, 200, 0.1);
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 193, 109, 24;
  background: rgba(193, 109, 24, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(193, 109, 24, 0.1);
  border-bottom-color: rgba(193, 109, 24, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(193, 109, 24);
  border-left-width: 3px;
  border-right-color: rgba(193, 109, 24, 0.25);
  border-top-color: rgba(193, 109, 24, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 1, 144, 59;
  background: rgba(1, 144, 59, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(1, 144, 59, 0.1);
  border-bottom-color: rgba(1, 144, 59, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(1, 144, 59);
  border-left-width: 3px;
  border-right-color: rgba(1, 144, 59, 0.25);
  border-top-color: rgba(1, 144, 59, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 158, 155;
  background: rgba(0, 158, 155, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 158, 155, 0.1);
  border-bottom-color: rgba(0, 158, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(0, 158, 155);
  border-left-width: 3px;
  border-right-color: rgba(0, 158, 155, 0.25);
  border-top-color: rgba(0, 158, 155, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 2, 95, 200;
  background: rgba(2, 95, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 95, 200, 0.1);
  border-bottom-color: rgba(2, 95, 200, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(2, 95, 200);
  border-left-width: 3px;
  border-right-color: rgba(2, 95, 200, 0.25);
  border-top-color: rgba(2, 95, 200, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 193, 109, 24;
  background: rgba(193, 109, 24, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(193, 109, 24, 0.1);
  border-bottom-color: rgba(193, 109, 24, 0.25);
  border-bottom-left-radius: 0px;
  border-left-color: rgb(193, 109, 24);
  border-left-width: 3px;
  border-right-color: rgba(193, 109, 24, 0.25);
  border-top-color: rgba(193, 109, 24, 0.25);
  border-top-left-radius: 0px;
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 95, 200;
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

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(2, 95, 200);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(218, 187, 154) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(218, 187, 154);
  color: rgb(95, 79, 73);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
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

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(128, 0, 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(95, 79, 73);
  font-family: "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(95, 79, 73);
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(91, 79, 74);
  font-family: "??", "??", "??", "CMU Typewriter Text";
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html[saved-theme="light"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(198, 165, 127);
  color: rgb(95, 79, 73);
}`,
    properties: `html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(225, 196, 166);
  color: rgb(95, 79, 73);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(218, 187, 154);
  border-color: rgb(95, 79, 73);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(218, 187, 154);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(95, 79, 73);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(95, 79, 73);
  border-left-color: rgb(95, 79, 73);
  border-right-color: rgb(95, 79, 73);
  border-top-color: rgb(95, 79, 73);
  color: rgb(95, 79, 73);
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
