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
  --collapse-icon-color: rgba(255, 255, 255, 0.38);
  --collapse-icon-color-collapsed: #2edb6e;
  --dark0: #1e1e1e;
  --dark1: #232323;
  --dark2: #282828;
  --dark3: #2d2d2d;
  --dark4: #323232;
  --default-font: system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif;
  --divider-color: #323232;
  --divider-color-hover: #2edb6e;
  --embed-block-shadow-hover: 0 0 0 1px #323232, inset 0 0 0 1px #323232;
  --embed-border-start: 2px solid #2edb6e;
  --error: red-base;
  --error-hover: #ff6b64;
  --file-header-font: '??', '??', -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: rgba(255, 255, 255, 0.87);
  --font-interface: '??', '??', -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #323232;
  --footnote-id-color: rgba(255, 255, 255, 0.6);
  --footnote-id-color-no-occurrences: rgba(255, 255, 255, 0.38);
  --graph-node: rgba(255, 255, 255, 0.6);
  --graph-node-focused: #2edb6e;
  --graph-node-unresolved: rgba(255, 255, 255, 0.38);
  --graph-text: rgba(255, 255, 255, 0.87);
  --green: #2edb6e;
  --green-light: #44df7d;
  --heading-formatting: rgba(255, 255, 255, 0.38);
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
  --light0: rgba(255, 255, 255, 0.18);
  --light1: rgba(255, 255, 255, 0.38);
  --light2: rgba(255, 255, 255, 0.6);
  --light3: rgba(255, 255, 255, 0.87);
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
  --metadata-input-font: '??', '??', -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
    cantarell, Open Sans, Helvetica Neue, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgba(255, 255, 255, 0.87);
  --metadata-label-font: '??', '??', -apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu,
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
  --setting-group-heading-color: rgba(255, 255, 255, 0.87);
  --setting-items-background: #1e1e1e;
  --setting-items-border-color: #323232;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
  color: rgba(255, 255, 255, 0.87);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgba(255, 255, 255, 0.87);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 30, 30);
  color: rgba(255, 255, 255, 0.87);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(50, 50, 50);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
  border-left-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}

body div#quartz-root {
  color: rgba(255, 255, 255, 0.87);
}`,
    typography: `body .page article p > b, b {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body .page article p > em, em {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body .page article p > i, i {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body .page article p > strong, strong {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body .text-highlight {
  background-color: rgb(0, 159, 255);
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body del {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: line-through rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body p {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: rgba(255, 255, 255, 0.6) none 0px;
  text-decoration: rgba(255, 255, 255, 0.6);
  text-decoration-color: rgba(255, 255, 255, 0.6);
}`,
    links: `body a.external, footer a {
  color: rgb(46, 219, 110);
  outline: rgb(46, 219, 110) none 0px;
  text-decoration: underline rgb(46, 219, 110);
  text-decoration-color: rgb(46, 219, 110);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(46, 219, 110);
  outline: rgb(46, 219, 110) none 0px;
  text-decoration: underline rgb(46, 219, 110);
  text-decoration-color: rgb(46, 219, 110);
}

body a.internal.broken {
  color: rgb(46, 219, 110);
  outline: rgb(46, 219, 110) none 0px;
}`,
    lists: `body dd {
  color: rgba(255, 255, 255, 0.87);
}

body dt {
  color: rgba(255, 255, 255, 0.87);
}

body ol > li {
  color: rgba(255, 255, 255, 0.87);
}

body ol.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

body ul > li {
  color: rgba(255, 255, 255, 0.87);
}

body ul.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(255, 255, 255, 0.38);
  text-decoration: rgba(255, 255, 255, 0.38);
}`,
    tables: `body .spacer {
  background-color: rgb(30, 30, 30);
}

body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

body table {
  color: rgba(255, 255, 255, 0.87);
}

body td {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}

body th {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}`,
    code: `body code {
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
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.87);
}

body pre > code, pre:has(> code) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}

body pre:has(> code) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}`,
    images: `body audio {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

body figcaption {
  color: rgba(255, 255, 255, 0.87);
}

body figure {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

body img {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

body video {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    embeds: `body .file-embed {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
}

body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgb(46, 219, 110);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgb(46, 219, 110);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: line-through rgba(255, 255, 255, 0.6);
  text-decoration-color: rgba(255, 255, 255, 0.6);
}

body input[type=checkbox] {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2px;
  margin-right: 4px;
  width: 17.3281px;
}

body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.87);
  outline: rgba(255, 255, 255, 0.87) none 0px;
  text-decoration: rgba(255, 255, 255, 0.87);
  text-decoration-color: rgba(255, 255, 255, 0.87);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.87);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.87);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(40, 40, 40);
  color: rgba(255, 255, 255, 0.87);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(40, 40, 40);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(46, 219, 110);
}

body h1 {
  color: rgba(255, 255, 255, 0.87);
}

body h2 {
  color: rgba(255, 255, 255, 0.87);
}

body h2.page-title, h2.page-title a {
  color: rgba(255, 255, 255, 0.87);
}

body h3 {
  color: rgba(255, 255, 255, 0.87);
}

body h4 {
  color: rgba(255, 255, 255, 0.87);
}

body h5 {
  color: rgba(255, 255, 255, 0.87);
}

body h6 {
  color: rgba(255, 255, 255, 0.87);
}

body hr {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  margin-right: -3px;
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgba(255, 255, 255, 0.6);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgba(255, 255, 255, 0.6);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgba(255, 255, 255, 0.6);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(53, 53, 53, 0.38);
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgba(255, 255, 255, 0.87);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}`,
    footer: `body footer {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body footer ul li a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: rgba(255, 255, 255, 0.6);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.87);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: rgba(255, 255, 255, 0.6);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.6);
  font-family: system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: rgba(255, 255, 255, 0.6);
}

body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

body .darkmode svg {
  color: rgba(255, 255, 255, 0.6);
  stroke: rgba(255, 255, 255, 0.6);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

body .breadcrumb-element p {
  color: rgba(255, 255, 255, 0.38);
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

body .metadata {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(255, 255, 255, 0.6);
}

body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-left-color: rgba(255, 255, 255, 0.6);
  border-right-color: rgba(255, 255, 255, 0.6);
  border-top-color: rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
}

body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

body .page-header h2.page-title {
  color: rgba(255, 255, 255, 0.38);
  font-family: "??", "??", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: underline dotted rgba(255, 255, 255, 0.87);
}

body details {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

body input[type=text] {
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

body kbd {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
  color: rgba(255, 255, 255, 0.87);
}

body progress {
  border-bottom-color: rgba(255, 255, 255, 0.87);
  border-left-color: rgba(255, 255, 255, 0.87);
  border-right-color: rgba(255, 255, 255, 0.87);
  border-top-color: rgba(255, 255, 255, 0.87);
}

body sub {
  color: rgba(255, 255, 255, 0.87);
}

body summary {
  color: rgba(255, 255, 255, 0.87);
}

body sup {
  color: rgba(255, 255, 255, 0.87);
}`,
  },
  light: {},
};
