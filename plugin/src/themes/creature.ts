import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "creature",
    modes: ["dark"],
    variations: [],
    fonts: ["sf-mono"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #323232;
  --background-modifier-error: red-base;
  --background-modifier-error-hover: #ff6b64;
  --background-modifier-form-field: #282828;
  --background-modifier-form-field-highlighted: #2d2d2d;
  --background-modifier-form-field-hover: #282828;
  --background-modifier-success: #2edb6e;
  --background-modifier-success-hover: #44df7d;
  --background-primary-alt: #1e1e1e;
  --background-secondary: #1e1e1e;
  --background-secondary-alt: #1e1e1e;
  --bases-cards-cover-background: #1e1e1e;
  --bases-cards-shadow: 0 0 0 1px #323232;
  --bases-embed-border-color: #323232;
  --bases-group-heading-property-color: rgba(255, 255, 255, 0.6);
  --bases-table-border-color: #323232;
  --bases-table-cell-background-disabled: #1e1e1e;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2edb6e;
  --bases-table-group-background: #1e1e1e;
  --bases-table-header-color: rgba(255, 255, 255, 0.6);
  --black: rgb(0, 0, 0);
  --blockquote-border-color: #2edb6e;
  --blue: #009fff;
  --blue-light: #1aa9ff;
  --bodyFont: var(--font-interface, -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --border: #323232;
  --canvas-card-label-color: rgba(255, 255, 255, 0.38);
  --caret-color: rgba(255, 255, 255, 0.87);
  --checkbox-border-color: rgba(255, 255, 255, 0.38);
  --checkbox-border-color-hover: rgba(255, 255, 255, 0.6);
  --checkbox-color: #2edb6e;
  --checkbox-color-hover: #44df7d;
  --checklist-done-color: rgba(255, 255, 255, 0.6);
  --code-background: #1e1e1e;
  --code-block: rgba(255, 255, 255, 0.87);
  --code-border-color: #323232;
  --code-comment: rgba(255, 255, 255, 0.38);
  --code-normal: rgba(255, 255, 255, 0.87);
  --code-punctuation: rgba(255, 255, 255, 0.6);
  --codeFont: var(--font-interface, -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: rgba(255, 255, 255, 0.38);
  --collapse-icon-color-collapsed: #2edb6e;
  --dark: var(--text-normal, rgba(255, 255, 255, 0.87));
  --dark0: #1e1e1e;
  --dark1: #232323;
  --dark2: #282828;
  --dark3: #2d2d2d;
  --dark4: #323232;
  --darkgray: var(--text-normal, rgba(255, 255, 255, 0.87));
  --default-font: system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif;
  --divider-color: #323232;
  --divider-color-hover: #2edb6e;
  --embed-block-shadow-hover: 0 0 0 1px #323232, inset 0 0 0 1px #323232;
  --embed-border-start: 2px solid #2edb6e;
  --error: red-base;
  --error-hover: #ff6b64;
  --file-header-font: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: rgba(255, 255, 255, 0.87);
  --font-interface: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #323232;
  --footnote-id-color: rgba(255, 255, 255, 0.6);
  --footnote-id-color-no-occurrences: rgba(255, 255, 255, 0.38);
  --graph-node: rgba(255, 255, 255, 0.6);
  --graph-node-focused: #2edb6e;
  --graph-node-unresolved: rgba(255, 255, 255, 0.38);
  --graph-text: rgba(255, 255, 255, 0.87);
  --gray: var(--text-muted, rgba(255, 255, 255, 0.6));
  --green: #2edb6e;
  --green-light: #44df7d;
  --headerFont: var(--font-interface, -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: rgba(255, 255, 255, 0.38);
  --highlight: var(--text-highlight-bg, #009fff);
  --hr-color: #323232;
  --icon-color: rgba(255, 255, 255, 0.6);
  --icon-color-active: #2edb6e;
  --icon-color-focused: rgba(255, 255, 255, 0.87);
  --icon-color-hover: rgba(255, 255, 255, 0.6);
  --info: #009fff;
  --info-hover: #1aa9ff;
  --inline-code: rgba(255, 255, 255, 0.87);
  --input-date-separator: rgba(255, 255, 255, 0.38);
  --input-placeholder-color: rgba(255, 255, 255, 0.38);
  --interactive-accent: #2edb6e;
  --interactive-accent-hover: #44df7d;
  --interactive-success: #2edb6e;
  --light: var(--background-primary-alt, #1e1e1e);
  --light0: rgba(255, 255, 255, 0.18);
  --light1: rgba(255, 255, 255, 0.38);
  --light2: rgba(255, 255, 255, 0.6);
  --light3: rgba(255, 255, 255, 0.87);
  --lightgray: var(--background-secondary, #1e1e1e);
  --link-color: #2edb6e;
  --link-color-hover: #44df7d;
  --link-external-color: #2edb6e;
  --link-external-color-hover: #44df7d;
  --link-unresolved-color: #2edb6e;
  --list-marker-color: rgba(255, 255, 255, 0.38);
  --list-marker-color-collapsed: #2edb6e;
  --list-marker-color-hover: rgba(255, 255, 255, 0.6);
  --menu-background: #1e1e1e;
  --metadata-border-color: #323232;
  --metadata-divider-color: #323232;
  --metadata-input-font: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgba(255, 255, 255, 0.87);
  --metadata-label-font: -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgba(255, 255, 255, 0.6);
  --metadata-label-text-color-hover: rgba(255, 255, 255, 0.6);
  --nav-collapse-icon-color: rgba(255, 255, 255, 0.38);
  --nav-collapse-icon-color-collapsed: rgba(255, 255, 255, 0.38);
  --nav-heading-color: rgba(255, 255, 255, 0.87);
  --nav-heading-color-collapsed: rgba(255, 255, 255, 0.38);
  --nav-heading-color-collapsed-hover: rgba(255, 255, 255, 0.6);
  --nav-heading-color-hover: rgba(255, 255, 255, 0.87);
  --nav-item-color: rgba(255, 255, 255, 0.6);
  --nav-item-color-active: rgba(255, 255, 255, 0.87);
  --nav-item-color-highlighted: #2edb6e;
  --nav-item-color-hover: rgba(255, 255, 255, 0.87);
  --nav-item-color-selected: rgba(255, 255, 255, 0.87);
  --nav-tag-color: rgba(255, 255, 255, 0.38);
  --nav-tag-color-active: rgba(255, 255, 255, 0.6);
  --nav-tag-color-hover: rgba(255, 255, 255, 0.6);
  --pdf-shadow: 0 0 0 1px #323232;
  --pdf-thumbnail-shadow: 0 0 0 1px #323232;
  --pill-border-color: #323232;
  --pill-color: rgba(255, 255, 255, 0.6);
  --pill-color-hover: rgba(255, 255, 255, 0.87);
  --pill-color-remove: rgba(255, 255, 255, 0.38);
  --pill-color-remove-hover: #2edb6e;
  --pre-code: #282828;
  --primary: #2edb6e;
  --primary-hover: #44df7d;
  --red: red-base;
  --red-light: #ff6b64;
  --ribbon-background: #1e1e1e;
  --search-clear-button-color: rgba(255, 255, 255, 0.6);
  --search-icon-color: rgba(255, 255, 255, 0.6);
  --secondary: var(--text-accent, #2edb6e);
  --setting-group-heading-color: rgba(255, 255, 255, 0.87);
  --setting-items-background: #1e1e1e;
  --setting-items-border-color: #323232;
  --shiki-active-tab-border-color: rgba(255, 255, 255, 0.6);
  --shiki-code-background: #1e1e1e;
  --shiki-code-comment: rgba(255, 255, 255, 0.38);
  --shiki-code-normal: rgba(255, 255, 255, 0.6);
  --shiki-code-punctuation: rgba(255, 255, 255, 0.6);
  --shiki-gutter-border-color: #323232;
  --shiki-gutter-text-color: rgba(255, 255, 255, 0.38);
  --shiki-gutter-text-color-highlight: rgba(255, 255, 255, 0.6);
  --shiki-highlight-neutral: rgba(255, 255, 255, 0.6);
  --shiki-terminal-dots-color: rgba(255, 255, 255, 0.38);
  --slider-track-background: #323232;
  --status-bar-background: #1e1e1e;
  --status-bar-border-color: #323232;
  --status-bar-text-color: rgba(255, 255, 255, 0.6);
  --success: #2edb6e;
  --success-hover: #44df7d;
  --tab-container-background: #1e1e1e;
  --tab-outline-color: #323232;
  --tab-switcher-background: #1e1e1e;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e1e1e, transparent);
  --tab-text-color: rgba(255, 255, 255, 0.38);
  --tab-text-color-active: rgba(255, 255, 255, 0.6);
  --tab-text-color-focused: rgba(255, 255, 255, 0.6);
  --tab-text-color-focused-active: rgba(255, 255, 255, 0.6);
  --tab-text-color-focused-active-current: rgba(255, 255, 255, 0.87);
  --tab-text-color-focused-highlighted: #2edb6e;
  --table-add-button-border-color: #323232;
  --table-border-color: #323232;
  --table-drag-handle-background-active: #2edb6e;
  --table-drag-handle-color: rgba(255, 255, 255, 0.38);
  --table-drag-handle-color-active: rgb(255, 255, 255);
  --table-header-border-color: #323232;
  --table-header-color: rgba(255, 255, 255, 0.87);
  --table-selection-border-color: #2edb6e;
  --tag-color: #2edb6e;
  --tag-color-hover: #2edb6e;
  --tertiary: var(--text-accent-hover, #44df7d);
  --text-accent: #2edb6e;
  --text-accent-hover: #44df7d;
  --text-error: red-base;
  --text-error-hover: #ff6b64;
  --text-faint: rgba(255, 255, 255, 0.38);
  --text-highlight-bg: #009fff;
  --text-muted: rgba(255, 255, 255, 0.6);
  --text-normal: rgba(255, 255, 255, 0.87);
  --text-on-accent: rgb(255, 255, 255);
  --text-selection: #323232;
  --textHighlight: var(--text-highlight-bg, #009fff);
  --titleFont: var(--font-interface, -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: #1e1e1e;
  --titlebar-background-focused: #1e1e1e;
  --titlebar-border-color: #323232;
  --titlebar-text-color: rgba(255, 255, 255, 0.6);
  --titlebar-text-color-focused: rgba(255, 255, 255, 0.87);
  --todoList-checkboxBorder: 2px solid $gray-lighter;
  --todoList-listItemBackground: $gray-base;
  --todoList-listItemBorderRadius: $border-radius-softer;
  --vault-profile-color: rgba(255, 255, 255, 0.87);
  --vault-profile-color-hover: rgba(255, 255, 255, 0.87);
  --white: rgb(255, 255, 255);
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
  color: rgba(255, 255, 255, 0.87);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  color: rgba(255, 255, 255, 0.87);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 30, 30);
  color: rgba(255, 255, 255, 0.87);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(50, 50, 50);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
  border-left-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}

html body html {
  --black: rgb(0, 0, 0);
  --blue: #009fff;
  --blue-light: #1aa9ff;
  --border: #323232;
  --dark0: #1e1e1e;
  --dark1: #232323;
  --dark2: #282828;
  --dark3: #2d2d2d;
  --dark4: #323232;
  --default-font: system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif;
  --error: red-base;
  --error-hover: #ff6b64;
  --font-monospace: "SF Mono", SFMono-Regular, consolas, Liberation Mono, menlo, courier,
    monospace;
  --green: #2edb6e;
  --green-light: #44df7d;
  --info: #009fff;
  --info-hover: #1aa9ff;
  --light0: rgba(255, 255, 255, 0.18);
  --light1: rgba(255, 255, 255, 0.38);
  --light2: rgba(255, 255, 255, 0.6);
  --light3: rgba(255, 255, 255, 0.87);
  --primary: #2edb6e;
  --primary-hover: #44df7d;
  --red: red-base;
  --red-light: #ff6b64;
  --success: #2edb6e;
  --success-hover: #44df7d;
  --white: rgb(255, 255, 255);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .markdown-rendered p > em, html em {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .markdown-rendered p > i, html i {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .markdown-rendered p > strong, html strong {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .text-highlight {
  background-color: rgb(0, 159, 255);
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body del {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body h1.article-title {
  color: rgba(255, 255, 255, 0.38);
  font-size: 10.4px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgba(255, 255, 255, 0.38);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(46, 219, 110);
  border-color: rgb(46, 219, 110);
}

html body p {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgba(255, 255, 255, 0.6) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.6);
}`,
    links: `html body a.external-link, html footer a {
  color: rgb(46, 219, 110);
  outline: rgb(46, 219, 110) none 0px;
  text-decoration-color: rgb(46, 219, 110);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(46, 219, 110);
  outline: rgb(46, 219, 110) none 0px;
  text-decoration-color: rgb(46, 219, 110);
}

html body a.internal-link.broken {
  color: rgb(46, 219, 110);
  outline: rgb(46, 219, 110) none 0px;
}`,
    lists: `html body dd {
  color: rgba(255, 255, 255, 0.87);
}

html body dt {
  color: rgba(255, 255, 255, 0.87);
}

html body ol > li {
  color: rgba(255, 255, 255, 0.87);
}

html body ul > li {
  color: rgba(255, 255, 255, 0.87);
}

html body ul.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(255, 255, 255, 0.38);
}`,
    tables: `html body .spacer {
  background-color: rgb(30, 30, 30);
}

html body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body table {
  color: rgba(255, 255, 255, 0.87);
}

html body td {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}

html body th {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}`,
    code: `html body code {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html body pre:has(> code) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}`,
    images: `html body audio {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body figcaption {
  color: rgba(255, 255, 255, 0.87);
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body img {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body video {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
}

html body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

html body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgb(46, 219, 110);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2px;
  margin-right: 4px;
  width: 17.3281px;
}

html body li.task-list-item[data-task="#"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="$"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="%"] {
  color: rgba(255, 255, 255, 0.87);
}

html li.task-list-item[data-task="body"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="'"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="+"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task=", html "] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="."] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="0"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="1"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="2"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="3"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="4"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="5"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="6"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="7"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="8"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="9"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task=":"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task=";"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="<"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="="] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="@"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="A"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="B"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="C"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="D"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="E"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="F"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="G"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="H"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="J"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="K"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="L"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="M"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="N"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="O"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="P"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="Q"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="R"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="T"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="U"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="V"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="W"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="X"] {
  color: rgba(255, 255, 255, 0.6);
}

html body li.task-list-item[data-task="Y"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="Z"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="_"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="\`"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="a"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="e"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="g"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="h"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="j"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="m"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="n"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="o"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="q"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="r"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="s"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="t"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="v"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="x"] {
  color: rgba(255, 255, 255, 0.6);
}

html body li.task-list-item[data-task="y"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="z"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="|"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="~"] {
  color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgba(255, 255, 255, 0.87);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgba(255, 255, 255, 0.87);
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
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 50, 50);
  border-left-width: 2px;
  border-right-color: rgb(50, 50, 50);
  border-right-width: 2px;
  border-top-color: rgb(50, 50, 50);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgba(255, 255, 255, 0.87);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px 0px, rgba(0, 0, 0, 0.11) 0px 2px 2px 0px, rgba(0, 0, 0, 0.11) 0px 4px 4px 0px, rgba(0, 0, 0, 0.11) 0px 8px 8px 0px, rgba(0, 0, 0, 0.11) 0px 16px 16px 0px, rgba(0, 0, 0, 0.11) 0px 32px 32px 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.87);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.87);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(40, 40, 40);
  color: rgba(255, 255, 255, 0.87);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 50, 50);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(50, 50, 50);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(50, 50, 50);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 2px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(40, 40, 40);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(46, 219, 110);
}

html body h1 {
  color: rgba(255, 255, 255, 0.87);
}

html body h1.article-title {
  color: rgba(255, 255, 255, 0.87);
}

html body h2 {
  color: rgba(255, 255, 255, 0.87);
}

html body h2.page-title, html h2.page-title a {
  color: rgba(255, 255, 255, 0.87);
}

html body h3 {
  color: rgba(255, 255, 255, 0.87);
}

html body h4 {
  color: rgba(255, 255, 255, 0.87);
}

html body h5 {
  color: rgba(255, 255, 255, 0.87);
}

html body h6 {
  color: rgba(255, 255, 255, 0.87);
}

html body hr {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  margin-right: -3px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgba(255, 255, 255, 0.87);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}`,
    footer: `html body footer {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html body footer ul li a {
  color: rgba(255, 255, 255, 0.6);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.87);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.6);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.6);
}

html body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

html body .darkmode svg {
  color: rgba(255, 255, 255, 0.6);
  stroke: rgba(255, 255, 255, 0.6);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

html body .breadcrumb-element p {
  color: rgba(255, 255, 255, 0.38);
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgba(255, 255, 255, 0.87);
}

html body .canvas-node-content {
  color: rgba(255, 255, 255, 0.87);
}

html body .canvas-node-file {
  color: rgba(255, 255, 255, 0.87);
}

html body .canvas-node-group {
  border-color: rgba(255, 255, 255, 0.87);
}

html body .canvas-sidebar {
  background-color: rgb(30, 30, 30);
  border-color: rgba(255, 255, 255, 0.87);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.6);
}

html body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

html body .note-properties {
  border-color: rgb(50, 50, 50);
}

html body .note-properties-key {
  color: rgba(255, 255, 255, 0.6);
}

html body .note-properties-row {
  border-color: rgba(255, 255, 255, 0.6);
}

html body .note-properties-tags {
  color: rgb(46, 219, 110);
}

html body .note-properties-value {
  color: rgba(255, 255, 255, 0.6);
}

html body div#quartz-root {
  color: rgba(255, 255, 255, 0.87);
}

html body ol.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    stacked: `html body .stacked-page {
  background-color: rgb(30, 30, 30);
  border-color: rgba(255, 255, 255, 0.87);
}

html body .stacked-page-header {
  background-color: rgb(30, 30, 30);
}

html body .stacked-page.active {
  border-color: rgba(255, 255, 255, 0.87);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

html body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

html body .page-header h2.page-title {
  color: rgba(255, 255, 255, 0.38);
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgba(255, 255, 255, 0.87);
}

html body details {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body input[type=text] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 50, 50);
  border-left-width: 2px;
  border-right-color: rgb(50, 50, 50);
  border-right-width: 2px;
  border-top-color: rgb(50, 50, 50);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgba(255, 255, 255, 0.87);
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}

html body kbd {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

html body progress {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

html body sub {
  color: rgba(255, 255, 255, 0.87);
}

html body summary {
  color: rgba(255, 255, 255, 0.87);
}

html body sup {
  color: rgba(255, 255, 255, 0.87);
}

html body ul.tags > li {
  background-color: rgb(45, 45, 45);
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  color: rgba(255, 255, 255, 0.6);
}`,
  },
  light: {},
};
