import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "creme-brulee",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["merriweather-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 9;
  --accent-l: 60%;
  --accent-s: 60%;
  --background-modifier-active-hover: rgba(214, 110, 92, 0.1);
  --background-modifier-border: rgb(95, 79, 58);
  --background-modifier-border-focus: rgb(104, 80, 49);
  --background-modifier-error: #c25757;
  --background-modifier-error-hover: #c25757;
  --background-modifier-error-rgb: 194, 87, 87;
  --background-modifier-form-field: rgb(52, 42, 35);
  --background-modifier-form-field-hover: rgb(52, 42, 35);
  --background-modifier-hover: rgb(52, 42, 35);
  --background-modifier-success: #8aac6c;
  --background-modifier-success-rgb: 138, 172, 108;
  --background-primary: rgb(31, 26, 20);
  --background-primary-alt: rgb(36, 30, 25);
  --background-secondary: rgb(36, 30, 25);
  --background-secondary-alt: rgb(52, 42, 35);
  --bases-cards-background: rgb(31, 26, 20);
  --bases-cards-cover-background: rgb(36, 30, 25);
  --bases-cards-shadow: 0 0 0 1px rgb(95, 79, 58);
  --bases-embed-border-color: rgb(95, 79, 58);
  --bases-group-heading-property-color: rgb(171, 145, 109);
  --bases-group-heading-value-weight: 700;
  --bases-table-border-color: rgb(95, 79, 58);
  --bases-table-cell-background-active: rgb(31, 26, 20);
  --bases-table-cell-background-disabled: rgb(36, 30, 25);
  --bases-table-cell-background-selected: rgba(214, 110, 92, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(104, 80, 49);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(214, 110, 92);
  --bases-table-group-background: rgb(36, 30, 25);
  --bases-table-header-background: rgb(31, 26, 20);
  --bases-table-header-background-hover: rgb(52, 42, 35);
  --bases-table-header-color: rgb(171, 145, 109);
  --bases-table-row-background-hover: rgb(36, 30, 25);
  --bases-table-summary-background: rgb(31, 26, 20);
  --bases-table-summary-background-hover: rgb(52, 42, 35);
  --blockquote-accent-color-rgb: 135, 125, 181;
  --blockquote-background-color: rgb(36, 30, 25);
  --blockquote-border-color: rgba(135, 125, 181, 0.3);
  --blockquote-border-radius: 7px;
  --blockquote-border-thickness: 7px;
  --blockquote-padding: 6px 8px 6px 16px;
  --blockquote-padding-bottom: 6px;
  --blockquote-padding-left: 16px;
  --blockquote-padding-right: 8px;
  --blockquote-padding-top: 6px;
  --bold-color: #cf864a;
  --bold-italic-color: #8aac6c;
  --button-background: rgb(31, 26, 20);
  --button-background-hover: rgb(36, 30, 25);
  --button-border: rgb(95, 79, 58);
  --button-size: 0.8em;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-bug: 194, 87, 87;
  --callout-content-padding: 0px 12px;
  --callout-default: 102, 140, 179;
  --callout-error: 194, 87, 87;
  --callout-example: 138, 172, 108;
  --callout-fail: 194, 87, 87;
  --callout-important: 194, 87, 87;
  --callout-info: 91, 168, 190;
  --callout-margin: 0 0 1em 0;
  --callout-opacity: 0.01;
  --callout-padding: 0;
  --callout-question: 225, 177, 81;
  --callout-quote: 135, 125, 181;
  --callout-success: 138, 172, 108;
  --callout-summary: 91, 168, 190;
  --callout-tip: 91, 168, 190;
  --callout-title-opacity: 0.1;
  --callout-title-padding: 6px 12px;
  --callout-todo: 102, 140, 179;
  --callout-warning: 207, 134, 74;
  --canvas-background: rgb(31, 26, 20);
  --canvas-card-label-color: rgb(95, 79, 58);
  --canvas-color-1: 194, 87, 87;
  --canvas-color-2: 207, 134, 74;
  --canvas-color-3: 225, 177, 81;
  --canvas-color-4: 138, 172, 108;
  --canvas-color-5: 91, 168, 190;
  --canvas-color-6: 135, 125, 181;
  --canvas-dot-pattern: transparent;
  --caret-color: rgb(217, 184, 140);
  --checkbox-border-color: rgb(95, 79, 58);
  --checkbox-border-color-hover: rgb(171, 145, 109);
  --checkbox-color: rgb(214, 110, 92);
  --checkbox-color-hover: rgb(224, 137, 128);
  --checkbox-marker-color: rgb(31, 26, 20);
  --checkbox-radius: 50%;
  --checklist-done-color: rgb(217, 184, 140);
  --checklist-done-decoration: none;
  --code-background: rgb(36, 30, 25);
  --code-border-color: rgb(95, 79, 58);
  --code-bracket-background: rgb(52, 42, 35);
  --code-comment: rgb(95, 79, 58);
  --code-function: #e1b151;
  --code-important: #cf864a;
  --code-keyword: #bb77af;
  --code-normal: rgb(217, 184, 140);
  --code-operator: #c25757;
  --code-property: #5ba8be;
  --code-punctuation: rgb(171, 145, 109);
  --code-string: #8aac6c;
  --code-tag: #c25757;
  --code-value: #877db5;
  --collapse-icon-color: rgb(95, 79, 58);
  --collapse-icon-color-collapsed: rgb(95, 79, 58);
  --color-accent: rgb(214, 110, 92);
  --color-accent-1: rgb(224, 137, 128);
  --color-accent-2: rgb(233, 164, 159);
  --color-accent-hsl: 9, 60%, 60%;
  --color-blue: #668cb3;
  --color-blue-rgb: 102, 140, 179;
  --color-creme-0: rgb(31, 26, 20);
  --color-creme-1: rgb(31, 26, 20);
  --color-creme-2: rgb(36, 30, 25);
  --color-creme-3: rgb(52, 42, 35);
  --color-creme-4: rgb(95, 79, 58);
  --color-creme-5: rgb(104, 80, 49);
  --color-creme-6: rgb(166, 129, 89);
  --color-creme-7: rgb(171, 145, 109);
  --color-creme-8: rgb(217, 184, 140);
  --color-creme-fade: rgba(178, 171, 164, 0.5);
  --color-creme-gray-1: rgb(40, 34, 27);
  --color-creme-gray-2: rgb(52, 45, 35);
  --color-cyan: #5ba8be;
  --color-cyan-rgb: 91, 168, 190;
  --color-green: #8aac6c;
  --color-green-rgb: 138, 172, 108;
  --color-orange: #cf864a;
  --color-orange-rgb: 207, 134, 74;
  --color-pink: #bb77af;
  --color-pink-rgb: 187, 119, 175;
  --color-purple: #877db5;
  --color-purple-rgb: 135, 125, 181;
  --color-red: #c25757;
  --color-red-rgb: 194, 87, 87;
  --color-shadow: rgba(24, 14, 1, 0.8);
  --color-yellow: #e1b151;
  --color-yellow-rgb: 225, 177, 81;
  --divider-color: rgb(95, 79, 58);
  --divider-color-hover: rgb(214, 110, 92);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(214, 110, 92);
  --embed-padding: 0 0 0 14px;
  --file-bottom-margin: 32px;
  --file-bottom-margin-mobile: 0;
  --file-header-background: rgb(31, 26, 20);
  --file-header-background-focused: rgb(31, 26, 20);
  --file-header-justify: left;
  --file-left-margin: 74px;
  --file-left-margin-mobile: 30px;
  --file-margins: 16px 64px 32px 74px;
  --file-right-margin: 64px;
  --file-right-margin-mobile: 30px;
  --file-top-margin: 16px;
  --file-top-margin-mobile: 0px;
  --flair-color: rgb(217, 184, 140);
  --font-semibold: 700;
  --footnote-divider-color: rgb(95, 79, 58);
  --footnote-id-color: rgb(171, 145, 109);
  --footnote-id-color-no-occurrences: rgb(95, 79, 58);
  --footnote-input-background-active: rgb(52, 42, 35);
  --graph-circle-color: rgb(166, 129, 89);
  --graph-node: rgb(171, 145, 109);
  --graph-node-attachment: #e1b151;
  --graph-node-focused: rgb(224, 137, 128);
  --graph-node-tag: #8aac6c;
  --graph-node-unresolved: rgb(95, 79, 58);
  --graph-tag-color: rgba(135, 125, 181, 0.7);
  --graph-text: rgb(217, 184, 140);
  --h1-font: Merriweather, Lucida Bright, Georgia, serif;
  --h1-size: 1.3em;
  --h2-font: Merriweather, Lucida Bright, Georgia, serif;
  --h2-size: 1.05em;
  --h2-weight: 700;
  --h3-font: Merriweather, Lucida Bright, Georgia, serif;
  --h3-size: 1em;
  --h3-weight: 700;
  --h4-size: 1em;
  --h4-weight: 700;
  --h5-size: 1em;
  --h5-style: italic;
  --h5-weight: 700;
  --h6-style: italic;
  --h6-weight: 400;
  --heading-formatting: rgb(95, 79, 58);
  --heading-line: rgb(95, 79, 58);
  --heading-line-spacing: 4px;
  --heading-spacing: 1rem;
  --highlight-bold-background: rgba(138, 172, 108, 0.2);
  --highlight-bold-italic-background: rgba(194, 87, 87, 0.2);
  --highlight-italic-background: rgba(135, 125, 181, 0.2);
  --hr-color: rgb(95, 79, 58);
  --hr-thickness: 1px;
  --icon-color: rgb(171, 145, 109);
  --icon-color-active: rgb(224, 137, 128);
  --icon-color-focused: rgb(217, 184, 140);
  --icon-color-hover: rgb(171, 145, 109);
  --inline-title-font: Merriweather, Lucida Bright, Georgia, serif;
  --inline-title-size: 1.3em;
  --input-date-separator: rgb(95, 79, 58);
  --input-placeholder-color: rgb(95, 79, 58);
  --interactive-accent: rgb(214, 110, 92);
  --interactive-accent-hover: rgb(224, 137, 128);
  --interactive-accent-hsl: 9, 60%, 60%;
  --italic-color: #5ba8be;
  --link-color: rgb(224, 137, 128);
  --link-color-hover: rgb(233, 164, 159);
  --link-decoration: none;
  --link-external-color: rgb(224, 137, 128);
  --link-external-color-hover: rgb(233, 164, 159);
  --link-external-decoration: none;
  --link-formatting-color: rgba(214, 110, 92, 0.5);
  --link-unresolved-color: rgb(224, 137, 128);
  --link-unresolved-decoration-color: rgba(214, 110, 92, 0.3);
  --list-indent: 1.5em;
  --list-marker-color: rgb(95, 79, 58);
  --list-marker-color-collapsed: rgb(224, 137, 128);
  --list-marker-color-hover: rgb(171, 145, 109);
  --media-max-width: 750px;
  --menu-background: rgb(36, 30, 25);
  --metadata-border-color: rgb(95, 79, 58);
  --metadata-divider-color: rgb(95, 79, 58);
  --metadata-gap: 0px;
  --metadata-input-background-active: rgb(52, 42, 35);
  --metadata-input-text-color: rgb(217, 184, 140);
  --metadata-label-background-active: rgb(52, 42, 35);
  --metadata-label-text-color: rgb(171, 145, 109);
  --metadata-label-text-color-hover: rgb(171, 145, 109);
  --metadata-padding: 0 0 8px 0;
  --metadata-property-background-active: rgb(52, 42, 35);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(104, 80, 49);
  --modal-background: rgb(31, 26, 20);
  --modal-border-color: rgb(95, 79, 58);
  --nav-collapse-icon-color: rgb(95, 79, 58);
  --nav-collapse-icon-color-collapsed: rgb(95, 79, 58);
  --nav-heading-color: rgb(217, 184, 140);
  --nav-heading-color-collapsed: rgb(95, 79, 58);
  --nav-heading-color-collapsed-hover: rgb(171, 145, 109);
  --nav-heading-color-hover: rgb(217, 184, 140);
  --nav-item-background-active: rgb(52, 42, 35);
  --nav-item-background-hover: rgb(52, 42, 35);
  --nav-item-background-selected: rgba(214, 110, 92, 0.15);
  --nav-item-color: rgb(171, 145, 109);
  --nav-item-color-active: rgb(217, 184, 140);
  --nav-item-color-highlighted: rgb(224, 137, 128);
  --nav-item-color-hover: rgb(217, 184, 140);
  --nav-item-color-selected: rgb(217, 184, 140);
  --nav-item-size: 14px;
  --nav-tag-color: rgb(95, 79, 58);
  --nav-tag-color-active: rgb(171, 145, 109);
  --nav-tag-color-hover: rgb(171, 145, 109);
  --nav-tag-weight: 700;
  --pdf-background: rgb(31, 26, 20);
  --pdf-page-background: rgb(31, 26, 20);
  --pdf-shadow: 0 0 0 1px rgb(95, 79, 58);
  --pdf-sidebar-background: rgb(31, 26, 20);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(95, 79, 58);
  --pill-border-color: rgb(95, 79, 58);
  --pill-color: rgb(171, 145, 109);
  --pill-color-hover: rgb(217, 184, 140);
  --pill-color-remove: rgb(95, 79, 58);
  --pill-color-remove-hover: rgb(224, 137, 128);
  --prompt-background: rgb(31, 26, 20);
  --ribbon-background: rgb(36, 30, 25);
  --ribbon-background-collapsed: rgb(31, 26, 20);
  --scrollbar-thumb-bg: rgb(36, 30, 25);
  --scrollbar-width: 10px;
  --search-clear-button-color: rgb(171, 145, 109);
  --search-icon-color: rgb(171, 145, 109);
  --search-result-background: rgb(31, 26, 20);
  --setting-group-heading-color: rgb(217, 184, 140);
  --setting-group-heading-weight: 700;
  --setting-items-background: rgb(36, 30, 25);
  --setting-items-border-color: rgb(95, 79, 58);
  --sidebar-markdown-font-size: 14px;
  --slider-track-background: rgb(95, 79, 58);
  --status-bar-background: rgb(36, 30, 25);
  --status-bar-border-color: rgb(95, 79, 58);
  --status-bar-text-color: rgb(171, 145, 109);
  --suggestion-background: rgb(31, 26, 20);
  --sync-avatar-color-1: #c25757;
  --sync-avatar-color-2: #cf864a;
  --sync-avatar-color-3: #e1b151;
  --sync-avatar-color-4: #8aac6c;
  --sync-avatar-color-5: #5ba8be;
  --sync-avatar-color-6: #668cb3;
  --sync-avatar-color-7: #877db5;
  --sync-avatar-color-8: #bb77af;
  --tab-background-active: rgb(31, 26, 20);
  --tab-container-background: rgb(36, 30, 25);
  --tab-outline-color: rgb(95, 79, 58);
  --tab-switcher-background: rgb(36, 30, 25);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(36, 30, 25), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(214, 110, 92);
  --tab-text-color: rgb(95, 79, 58);
  --tab-text-color-active: rgb(171, 145, 109);
  --tab-text-color-focused: rgb(171, 145, 109);
  --tab-text-color-focused-active: rgb(171, 145, 109);
  --tab-text-color-focused-active-current: rgb(217, 184, 140);
  --tab-text-color-focused-highlighted: rgb(224, 137, 128);
  --table-add-button-border-color: rgb(95, 79, 58);
  --table-border-color: rgb(95, 79, 58);
  --table-column-min-width: 2.5em;
  --table-drag-handle-background-active: rgb(214, 110, 92);
  --table-drag-handle-color: rgb(95, 79, 58);
  --table-header-border-color: rgb(95, 79, 58);
  --table-header-color: rgb(217, 184, 140);
  --table-header-size: 0.9em;
  --table-row-background-hover: rgb(36, 30, 25);
  --table-selection: rgba(214, 110, 92, 0.1);
  --table-selection-border-color: rgb(214, 110, 92);
  --table-text-size: 0.9em;
  --tag-background: rgba(214, 110, 92, 0.1);
  --tag-background-hover: rgba(214, 110, 92, 0.2);
  --tag-border-color: rgba(214, 110, 92, 0.15);
  --tag-border-color-hover: rgba(214, 110, 92, 0.15);
  --tag-color: rgb(224, 137, 128);
  --tag-color-hover: rgb(224, 137, 128);
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.15em;
  --text-accent: rgb(224, 137, 128);
  --text-accent-hover: rgb(233, 164, 159);
  --text-error: #c25757;
  --text-faint: rgb(95, 79, 58);
  --text-highlight-bg: rgba(207, 134, 74, 0.2);
  --text-muted: rgb(171, 145, 109);
  --text-normal: rgb(217, 184, 140);
  --text-selection: rgb(52, 42, 35);
  --text-success: #8aac6c;
  --text-warning: #cf864a;
  --titlebar-background: rgb(36, 30, 25);
  --titlebar-background-focused: rgb(36, 30, 25);
  --titlebar-border-color: rgb(95, 79, 58);
  --titlebar-text-color: rgb(171, 145, 109);
  --titlebar-text-color-focused: rgb(217, 184, 140);
  --vault-profile-color: rgb(171, 145, 109);
  --vault-profile-color-hover: rgb(171, 145, 109);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 30, 25);
  color: rgb(217, 184, 140);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(31, 26, 20);
  color: rgb(217, 184, 140);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 30, 25);
  color: rgb(217, 184, 140);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 30, 25);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(217, 184, 140);
}

body div#quartz-root {
  background-color: rgb(31, 26, 20);
  color: rgb(217, 184, 140);
}`,
    typography: `body .page article p > b, b {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration: rgb(207, 134, 74);
  text-decoration-color: rgb(207, 134, 74);
}

body .page article p > em, em {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration: rgb(91, 168, 190);
  text-decoration-color: rgb(91, 168, 190);
}

body .page article p > i, i {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration: rgb(91, 168, 190);
  text-decoration-color: rgb(91, 168, 190);
}

body .page article p > strong, strong {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration: rgb(207, 134, 74);
  text-decoration-color: rgb(207, 134, 74);
}

body .text-highlight {
  background-color: rgba(207, 134, 74, 0.2);
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body del {
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration: line-through rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body p {
  color: rgb(171, 145, 109);
  outline: rgb(171, 145, 109) none 0px;
  text-decoration: rgb(171, 145, 109);
  text-decoration-color: rgb(171, 145, 109);
}`,
    links: `body a.external, footer a {
  color: rgb(224, 137, 128);
  outline: rgb(224, 137, 128) none 0px;
  text-decoration: rgb(224, 137, 128);
  text-decoration-color: rgb(224, 137, 128);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(224, 137, 128);
  outline: rgb(224, 137, 128) none 0px;
  text-decoration: rgb(224, 137, 128);
  text-decoration-color: rgb(224, 137, 128);
}

body a.internal.broken {
  color: rgb(224, 137, 128);
  outline: rgb(224, 137, 128) none 0px;
  text-decoration: rgba(214, 110, 92, 0.3);
  text-decoration-color: rgba(214, 110, 92, 0.3);
}`,
    lists: `body dd {
  color: rgb(217, 184, 140);
}

body dt {
  color: rgb(217, 184, 140);
}

body ol > li {
  color: rgb(217, 184, 140);
}

body ol.overflow {
  background-color: rgb(31, 26, 20);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body ul > li {
  color: rgb(217, 184, 140);
}

body ul.overflow {
  background-color: rgb(31, 26, 20);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(95, 79, 58);
  text-decoration: rgb(95, 79, 58);
}

body blockquote {
  background-color: rgb(36, 30, 25);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body table {
  color: rgb(217, 184, 140);
  width: 206.078px;
}

body td {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

body th {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}`,
    code: `body code {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

body pre > code > [data-line] {
  border-left-color: rgb(225, 177, 81);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(225, 177, 81);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(225, 177, 81);
  border-left-color: rgb(225, 177, 81);
  border-right-color: rgb(225, 177, 81);
  border-top-color: rgb(225, 177, 81);
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}

body pre:has(> code) {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}`,
    images: `body audio {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body figcaption {
  color: rgb(217, 184, 140);
}

body figure {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body img {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body video {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    embeds: `body .file-embed {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
}

body .footnotes {
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body .transclude {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(214, 110, 92);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body .transclude-inner {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(214, 110, 92);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body input[type=checkbox] {
  border-bottom-color: rgb(95, 79, 58);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -20.6px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='*'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='-'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='/'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='>'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='?'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='I'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='S'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='b'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='c'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='d'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='f'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='i'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='k'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='l'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='p'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='u'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='w'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body .callout > .callout-content {
  padding-left: 12px;
  padding-right: 12px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 138, 172, 108;
  background-color: rgba(138, 172, 108, 0.01);
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 102, 140, 179;
  background-color: rgba(102, 140, 179, 0.01);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 225, 177, 81;
  background-color: rgba(225, 177, 81, 0.01);
  border-bottom-color: rgba(225, 177, 81, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(225, 177, 81, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(225, 177, 81, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(225, 177, 81, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 135, 125, 181;
  background-color: rgba(135, 125, 181, 0.01);
  border-bottom-color: rgba(135, 125, 181, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(135, 125, 181, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(135, 125, 181, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(135, 125, 181, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 138, 172, 108;
  background-color: rgba(138, 172, 108, 0.01);
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 102, 140, 179;
  background-color: rgba(102, 140, 179, 0.01);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 207, 134, 74;
  background-color: rgba(207, 134, 74, 0.01);
  border-bottom-color: rgba(207, 134, 74, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(207, 134, 74, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(207, 134, 74, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(207, 134, 74, 0.5);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(52, 42, 35);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space {
  background-color: rgb(31, 26, 20);
}

body .search > .search-container > .search-space > * {
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(52, 42, 35);
  color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 30, 25);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(52, 42, 35);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(52, 42, 35);
  color: rgb(217, 184, 140);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(214, 110, 92, 0.1);
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
}

body a.internal.tag-link::before {
  color: rgb(224, 137, 128);
}

body h1 {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h2 {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h3 {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h4 {
  color: rgb(217, 184, 140);
}

body h5 {
  color: rgb(217, 184, 140);
}

body h6 {
  color: rgb(217, 184, 140);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 102, 140, 179;
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

body ::-webkit-scrollbar-corner {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

body ::-webkit-scrollbar-track {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(52, 42, 35);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}`,
    footer: `body footer {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(171, 145, 109);
}

body footer ul li a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(217, 184, 140);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 145, 109);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body li.section-li > .section .meta {
  color: rgb(171, 145, 109);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body ul.section-ul {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

body .darkmode svg {
  color: rgb(171, 145, 109);
  stroke: rgb(171, 145, 109);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

body .breadcrumb-element p {
  color: rgb(95, 79, 58);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body .metadata {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(171, 145, 109);
  margin-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

body .navigation-progress {
  background-color: rgb(36, 30, 25);
}

body .page-header h2.page-title {
  color: rgb(217, 184, 140);
}

body abbr {
  color: rgb(217, 184, 140);
  text-decoration: underline dotted rgb(217, 184, 140);
}

body details {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body input[type=text] {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

body kbd {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body progress {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body sub {
  color: rgb(217, 184, 140);
}

body summary {
  color: rgb(217, 184, 140);
}

body sup {
  color: rgb(217, 184, 140);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 9;
  --accent-l: 60%;
  --accent-s: 60%;
  --background-modifier-active-hover: rgba(214, 110, 92, 0.1);
  --background-modifier-border: rgb(207, 182, 150);
  --background-modifier-border-focus: rgb(198, 181, 159);
  --background-modifier-error: #c25757;
  --background-modifier-error-hover: #c25757;
  --background-modifier-error-rgb: 194, 87, 87;
  --background-modifier-form-field: rgb(238, 231, 221);
  --background-modifier-form-field-hover: rgb(238, 231, 221);
  --background-modifier-hover: rgb(238, 231, 221);
  --background-modifier-success: #8aac6c;
  --background-modifier-success-rgb: 138, 172, 108;
  --background-primary: rgb(252, 250, 248);
  --background-primary-alt: rgb(247, 243, 238);
  --background-secondary: rgb(247, 243, 238);
  --background-secondary-alt: rgb(238, 231, 221);
  --bases-cards-background: rgb(252, 250, 248);
  --bases-cards-cover-background: rgb(247, 243, 238);
  --bases-cards-shadow: 0 0 0 1px rgb(207, 182, 150);
  --bases-embed-border-color: rgb(207, 182, 150);
  --bases-group-heading-property-color: rgb(138, 103, 66);
  --bases-group-heading-value-weight: 700;
  --bases-table-border-color: rgb(207, 182, 150);
  --bases-table-cell-background-active: rgb(252, 250, 248);
  --bases-table-cell-background-disabled: rgb(247, 243, 238);
  --bases-table-cell-background-selected: rgba(214, 110, 92, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(198, 181, 159);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(220, 126, 111);
  --bases-table-group-background: rgb(247, 243, 238);
  --bases-table-header-background: rgb(252, 250, 248);
  --bases-table-header-background-hover: rgb(238, 231, 221);
  --bases-table-header-color: rgb(138, 103, 66);
  --bases-table-row-background-hover: rgb(247, 243, 238);
  --bases-table-summary-background: rgb(252, 250, 248);
  --bases-table-summary-background-hover: rgb(238, 231, 221);
  --blockquote-accent-color-rgb: 135, 125, 181;
  --blockquote-background-color: rgb(247, 243, 238);
  --blockquote-border-color: rgba(135, 125, 181, 0.3);
  --blockquote-border-radius: 7px;
  --blockquote-border-thickness: 7px;
  --blockquote-padding: 6px 8px 6px 16px;
  --blockquote-padding-bottom: 6px;
  --blockquote-padding-left: 16px;
  --blockquote-padding-right: 8px;
  --blockquote-padding-top: 6px;
  --blur-background: color-mix(in srgb, rgb(252, 250, 248) 65%, transparent) linear-gradient(rgb(252, 250, 248), color-mix(in srgb, rgb(252, 250, 248) 65%, transparent));
  --bold-color: #cf864a;
  --bold-italic-color: #8aac6c;
  --button-background: white;
  --button-background-hover: rgb(247, 243, 238);
  --button-border: rgb(207, 182, 150);
  --button-size: 0.8em;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-bug: 194, 87, 87;
  --callout-content-padding: 0px 12px;
  --callout-default: 102, 140, 179;
  --callout-error: 194, 87, 87;
  --callout-example: 138, 172, 108;
  --callout-fail: 194, 87, 87;
  --callout-important: 194, 87, 87;
  --callout-info: 91, 168, 190;
  --callout-margin: 0 0 1em 0;
  --callout-opacity: 0.01;
  --callout-padding: 0;
  --callout-question: 225, 177, 81;
  --callout-quote: 135, 125, 181;
  --callout-success: 138, 172, 108;
  --callout-summary: 91, 168, 190;
  --callout-tip: 91, 168, 190;
  --callout-title-opacity: 0.1;
  --callout-title-padding: 6px 12px;
  --callout-todo: 102, 140, 179;
  --callout-warning: 207, 134, 74;
  --canvas-background: rgb(252, 250, 248);
  --canvas-card-label-color: rgb(207, 182, 150);
  --canvas-color-1: 194, 87, 87;
  --canvas-color-2: 207, 134, 74;
  --canvas-color-3: 225, 177, 81;
  --canvas-color-4: 138, 172, 108;
  --canvas-color-5: 91, 168, 190;
  --canvas-color-6: 135, 125, 181;
  --canvas-dot-pattern: transparent;
  --caret-color: rgb(74, 52, 28);
  --checkbox-border-color: rgb(207, 182, 150);
  --checkbox-border-color-hover: rgb(138, 103, 66);
  --checkbox-color: rgb(220, 126, 111);
  --checkbox-color-hover: rgb(224, 137, 128);
  --checkbox-marker-color: rgb(252, 250, 248);
  --checkbox-radius: 50%;
  --checklist-done-color: rgb(74, 52, 28);
  --checklist-done-decoration: none;
  --code-background: rgb(247, 243, 238);
  --code-border-color: rgb(207, 182, 150);
  --code-bracket-background: rgb(238, 231, 221);
  --code-comment: rgb(207, 182, 150);
  --code-function: #e1b151;
  --code-important: #cf864a;
  --code-keyword: #bb77af;
  --code-normal: rgb(74, 52, 28);
  --code-operator: #c25757;
  --code-property: #5ba8be;
  --code-punctuation: rgb(138, 103, 66);
  --code-string: #8aac6c;
  --code-tag: #c25757;
  --code-value: #877db5;
  --collapse-icon-color: rgb(207, 182, 150);
  --collapse-icon-color-collapsed: rgb(207, 182, 150);
  --color-accent: rgb(214, 110, 92);
  --color-accent-1: rgb(220, 126, 111);
  --color-accent-2: rgb(224, 137, 128);
  --color-accent-hsl: 9, 60%, 60%;
  --color-blue: #668cb3;
  --color-blue-rgb: 102, 140, 179;
  --color-creme-0: white;
  --color-creme-1: rgb(252, 250, 248);
  --color-creme-2: rgb(247, 243, 238);
  --color-creme-3: rgb(238, 231, 221);
  --color-creme-4: rgb(207, 182, 150);
  --color-creme-5: rgb(198, 181, 159);
  --color-creme-6: rgb(166, 129, 89);
  --color-creme-7: rgb(138, 103, 66);
  --color-creme-8: rgb(74, 52, 28);
  --color-creme-fade: rgba(178, 171, 164, 0.5);
  --color-creme-gray-1: rgb(243, 240, 237);
  --color-creme-gray-2: rgb(235, 230, 224);
  --color-cyan: #5ba8be;
  --color-cyan-rgb: 91, 168, 190;
  --color-green: #8aac6c;
  --color-green-rgb: 138, 172, 108;
  --color-orange: #cf864a;
  --color-orange-rgb: 207, 134, 74;
  --color-pink: #bb77af;
  --color-pink-rgb: 187, 119, 175;
  --color-purple: #877db5;
  --color-purple-rgb: 135, 125, 181;
  --color-red: #c25757;
  --color-red-rgb: 194, 87, 87;
  --color-shadow: rgba(0, 0, 0, 0.4);
  --color-yellow: #e1b151;
  --color-yellow-rgb: 225, 177, 81;
  --divider-color: rgb(207, 182, 150);
  --divider-color-hover: rgb(220, 126, 111);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(220, 126, 111);
  --embed-padding: 0 0 0 14px;
  --file-bottom-margin: 32px;
  --file-bottom-margin-mobile: 0;
  --file-header-background: rgb(252, 250, 248);
  --file-header-background-focused: rgb(252, 250, 248);
  --file-header-justify: left;
  --file-left-margin: 74px;
  --file-left-margin-mobile: 30px;
  --file-margins: 16px 64px 32px 74px;
  --file-right-margin: 64px;
  --file-right-margin-mobile: 30px;
  --file-top-margin: 16px;
  --file-top-margin-mobile: 0px;
  --flair-color: rgb(74, 52, 28);
  --font-semibold: 700;
  --footnote-divider-color: rgb(207, 182, 150);
  --footnote-id-color: rgb(138, 103, 66);
  --footnote-id-color-no-occurrences: rgb(207, 182, 150);
  --footnote-input-background-active: rgb(238, 231, 221);
  --graph-circle-color: rgb(166, 129, 89);
  --graph-node: rgb(138, 103, 66);
  --graph-node-attachment: #e1b151;
  --graph-node-focused: rgb(214, 110, 92);
  --graph-node-tag: #8aac6c;
  --graph-node-unresolved: rgb(207, 182, 150);
  --graph-tag-color: rgba(135, 125, 181, 0.7);
  --graph-text: rgb(74, 52, 28);
  --h1-font: Merriweather, Lucida Bright, Georgia, serif;
  --h1-size: 1.3em;
  --h2-font: Merriweather, Lucida Bright, Georgia, serif;
  --h2-size: 1.05em;
  --h2-weight: 700;
  --h3-font: Merriweather, Lucida Bright, Georgia, serif;
  --h3-size: 1em;
  --h3-weight: 700;
  --h4-size: 1em;
  --h4-weight: 700;
  --h5-size: 1em;
  --h5-style: italic;
  --h5-weight: 700;
  --h6-style: italic;
  --h6-weight: 400;
  --heading-formatting: rgb(207, 182, 150);
  --heading-line: rgb(207, 182, 150);
  --heading-line-spacing: 4px;
  --heading-spacing: 1rem;
  --highlight-bold-background: rgba(138, 172, 108, 0.2);
  --highlight-bold-italic-background: rgba(194, 87, 87, 0.2);
  --highlight-italic-background: rgba(135, 125, 181, 0.2);
  --hr-color: rgb(207, 182, 150);
  --hr-thickness: 1px;
  --icon-color: rgb(138, 103, 66);
  --icon-color-active: rgb(214, 110, 92);
  --icon-color-focused: rgb(74, 52, 28);
  --icon-color-hover: rgb(138, 103, 66);
  --inline-title-font: Merriweather, Lucida Bright, Georgia, serif;
  --inline-title-size: 1.3em;
  --input-date-separator: rgb(207, 182, 150);
  --input-placeholder-color: rgb(207, 182, 150);
  --interactive-accent: rgb(220, 126, 111);
  --interactive-accent-hover: rgb(224, 137, 128);
  --interactive-accent-hsl: 9, 60%, 60%;
  --italic-color: #5ba8be;
  --link-color: rgb(214, 110, 92);
  --link-color-hover: rgb(224, 137, 128);
  --link-decoration: none;
  --link-external-color: rgb(214, 110, 92);
  --link-external-color-hover: rgb(224, 137, 128);
  --link-external-decoration: none;
  --link-formatting-color: rgba(214, 110, 92, 0.5);
  --link-unresolved-color: rgb(214, 110, 92);
  --link-unresolved-decoration-color: rgba(214, 110, 92, 0.3);
  --list-indent: 1.5em;
  --list-marker-color: rgb(207, 182, 150);
  --list-marker-color-collapsed: rgb(214, 110, 92);
  --list-marker-color-hover: rgb(138, 103, 66);
  --media-max-width: 750px;
  --menu-background: rgb(247, 243, 238);
  --metadata-border-color: rgb(207, 182, 150);
  --metadata-divider-color: rgb(207, 182, 150);
  --metadata-gap: 0px;
  --metadata-input-background-active: rgb(238, 231, 221);
  --metadata-input-text-color: rgb(74, 52, 28);
  --metadata-label-background-active: rgb(238, 231, 221);
  --metadata-label-text-color: rgb(138, 103, 66);
  --metadata-label-text-color-hover: rgb(138, 103, 66);
  --metadata-padding: 0 0 8px 0;
  --metadata-property-background-active: rgb(238, 231, 221);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(198, 181, 159);
  --modal-background: rgb(252, 250, 248);
  --modal-border-color: rgb(207, 182, 150);
  --nav-collapse-icon-color: rgb(207, 182, 150);
  --nav-collapse-icon-color-collapsed: rgb(207, 182, 150);
  --nav-heading-color: rgb(74, 52, 28);
  --nav-heading-color-collapsed: rgb(207, 182, 150);
  --nav-heading-color-collapsed-hover: rgb(138, 103, 66);
  --nav-heading-color-hover: rgb(74, 52, 28);
  --nav-item-background-active: rgb(238, 231, 221);
  --nav-item-background-hover: rgb(238, 231, 221);
  --nav-item-background-selected: rgba(214, 110, 92, 0.15);
  --nav-item-color: rgb(138, 103, 66);
  --nav-item-color-active: rgb(74, 52, 28);
  --nav-item-color-highlighted: rgb(214, 110, 92);
  --nav-item-color-hover: rgb(74, 52, 28);
  --nav-item-color-selected: rgb(74, 52, 28);
  --nav-item-size: 14px;
  --nav-tag-color: rgb(207, 182, 150);
  --nav-tag-color-active: rgb(138, 103, 66);
  --nav-tag-color-hover: rgb(138, 103, 66);
  --nav-tag-weight: 700;
  --pdf-background: rgb(252, 250, 248);
  --pdf-page-background: rgb(252, 250, 248);
  --pdf-sidebar-background: rgb(252, 250, 248);
  --pill-border-color: rgb(207, 182, 150);
  --pill-color: rgb(138, 103, 66);
  --pill-color-hover: rgb(74, 52, 28);
  --pill-color-remove: rgb(207, 182, 150);
  --pill-color-remove-hover: rgb(214, 110, 92);
  --prompt-background: rgb(252, 250, 248);
  --raised-background: color-mix(in srgb, rgb(252, 250, 248) 65%, transparent) linear-gradient(rgb(252, 250, 248), color-mix(in srgb, rgb(252, 250, 248) 65%, transparent));
  --ribbon-background: rgb(247, 243, 238);
  --ribbon-background-collapsed: rgb(252, 250, 248);
  --scrollbar-thumb-bg: rgb(247, 243, 238);
  --scrollbar-width: 10px;
  --search-clear-button-color: rgb(138, 103, 66);
  --search-icon-color: rgb(138, 103, 66);
  --search-result-background: rgb(252, 250, 248);
  --setting-group-heading-color: rgb(74, 52, 28);
  --setting-group-heading-weight: 700;
  --setting-items-background: rgb(247, 243, 238);
  --setting-items-border-color: rgb(207, 182, 150);
  --sidebar-markdown-font-size: 14px;
  --slider-track-background: rgb(207, 182, 150);
  --status-bar-background: rgb(247, 243, 238);
  --status-bar-border-color: rgb(207, 182, 150);
  --status-bar-text-color: rgb(138, 103, 66);
  --suggestion-background: rgb(252, 250, 248);
  --sync-avatar-color-1: #c25757;
  --sync-avatar-color-2: #cf864a;
  --sync-avatar-color-3: #e1b151;
  --sync-avatar-color-4: #8aac6c;
  --sync-avatar-color-5: #5ba8be;
  --sync-avatar-color-6: #668cb3;
  --sync-avatar-color-7: #877db5;
  --sync-avatar-color-8: #bb77af;
  --tab-background-active: rgb(252, 250, 248);
  --tab-container-background: rgb(247, 243, 238);
  --tab-outline-color: rgb(207, 182, 150);
  --tab-switcher-background: rgb(247, 243, 238);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(247, 243, 238), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(214, 110, 92);
  --tab-text-color: rgb(207, 182, 150);
  --tab-text-color-active: rgb(138, 103, 66);
  --tab-text-color-focused: rgb(138, 103, 66);
  --tab-text-color-focused-active: rgb(138, 103, 66);
  --tab-text-color-focused-active-current: rgb(74, 52, 28);
  --tab-text-color-focused-highlighted: rgb(214, 110, 92);
  --table-add-button-border-color: rgb(207, 182, 150);
  --table-border-color: rgb(207, 182, 150);
  --table-column-min-width: 2.5em;
  --table-drag-handle-background-active: rgb(220, 126, 111);
  --table-drag-handle-color: rgb(207, 182, 150);
  --table-header-border-color: rgb(207, 182, 150);
  --table-header-color: rgb(74, 52, 28);
  --table-header-size: 0.9em;
  --table-row-background-hover: rgb(247, 243, 238);
  --table-selection: rgba(214, 110, 92, 0.1);
  --table-selection-border-color: rgb(220, 126, 111);
  --table-text-size: 0.9em;
  --tag-background: rgba(214, 110, 92, 0.1);
  --tag-background-hover: rgba(214, 110, 92, 0.2);
  --tag-border-color: rgba(214, 110, 92, 0.15);
  --tag-border-color-hover: rgba(214, 110, 92, 0.15);
  --tag-color: rgb(214, 110, 92);
  --tag-color-hover: rgb(214, 110, 92);
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.15em;
  --text-accent: rgb(214, 110, 92);
  --text-accent-hover: rgb(224, 137, 128);
  --text-error: #c25757;
  --text-faint: rgb(207, 182, 150);
  --text-highlight-bg: rgba(207, 134, 74, 0.2);
  --text-muted: rgb(138, 103, 66);
  --text-normal: rgb(74, 52, 28);
  --text-selection: rgb(238, 231, 221);
  --text-success: #8aac6c;
  --text-warning: #cf864a;
  --titlebar-background: rgb(247, 243, 238);
  --titlebar-background-focused: rgb(247, 243, 238);
  --titlebar-border-color: rgb(207, 182, 150);
  --titlebar-text-color: rgb(138, 103, 66);
  --titlebar-text-color-focused: rgb(74, 52, 28);
  --vault-profile-color: rgb(138, 103, 66);
  --vault-profile-color-hover: rgb(138, 103, 66);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(252, 250, 248);
  color: rgb(74, 52, 28);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 243, 238);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(74, 52, 28);
}

body div#quartz-root {
  background-color: rgb(252, 250, 248);
  color: rgb(74, 52, 28);
}`,
    typography: `body .page article p > b, b {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration: rgb(207, 134, 74);
  text-decoration-color: rgb(207, 134, 74);
}

body .page article p > em, em {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration: rgb(91, 168, 190);
  text-decoration-color: rgb(91, 168, 190);
}

body .page article p > i, i {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration: rgb(91, 168, 190);
  text-decoration-color: rgb(91, 168, 190);
}

body .page article p > strong, strong {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration: rgb(207, 134, 74);
  text-decoration-color: rgb(207, 134, 74);
}

body .text-highlight {
  background-color: rgba(207, 134, 74, 0.2);
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body del {
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: line-through rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body p {
  color: rgb(138, 103, 66);
  outline: rgb(138, 103, 66) none 0px;
  text-decoration: rgb(138, 103, 66);
  text-decoration-color: rgb(138, 103, 66);
}`,
    links: `body a.external, footer a {
  color: rgb(214, 110, 92);
  outline: rgb(214, 110, 92) none 0px;
  text-decoration: rgb(214, 110, 92);
  text-decoration-color: rgb(214, 110, 92);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 110, 92);
  outline: rgb(214, 110, 92) none 0px;
  text-decoration: rgb(214, 110, 92);
  text-decoration-color: rgb(214, 110, 92);
}

body a.internal.broken {
  color: rgb(214, 110, 92);
  outline: rgb(214, 110, 92) none 0px;
  text-decoration: rgba(214, 110, 92, 0.3);
  text-decoration-color: rgba(214, 110, 92, 0.3);
}`,
    lists: `body dd {
  color: rgb(74, 52, 28);
}

body dt {
  color: rgb(74, 52, 28);
}

body ol > li {
  color: rgb(74, 52, 28);
}

body ol.overflow {
  background-color: rgb(252, 250, 248);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body ul > li {
  color: rgb(74, 52, 28);
}

body ul.overflow {
  background-color: rgb(252, 250, 248);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(207, 182, 150);
  text-decoration: rgb(207, 182, 150);
}

body blockquote {
  background-color: rgb(247, 243, 238);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body table {
  color: rgb(74, 52, 28);
  width: 206.078px;
}

body td {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

body th {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}`,
    code: `body code {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

body pre > code > [data-line] {
  border-left-color: rgb(225, 177, 81);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(225, 177, 81);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(225, 177, 81);
  border-left-color: rgb(225, 177, 81);
  border-right-color: rgb(225, 177, 81);
  border-top-color: rgb(225, 177, 81);
}

body pre > code, pre:has(> code) {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}

body pre:has(> code) {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}`,
    images: `body audio {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body figcaption {
  color: rgb(74, 52, 28);
}

body figure {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body img {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body video {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    embeds: `body .file-embed {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
}

body .footnotes {
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .transclude {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(219, 124, 110);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body .transclude-inner {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(219, 124, 110);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body input[type=checkbox] {
  border-bottom-color: rgb(207, 182, 150);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -20.6px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='*'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='-'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='/'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='>'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='?'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='I'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='S'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='b'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='c'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='d'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='f'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='i'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='k'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='l'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='p'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='u'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='w'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body .callout > .callout-content {
  padding-left: 12px;
  padding-right: 12px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 138, 172, 108;
  background-color: rgba(138, 172, 108, 0.01);
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 102, 140, 179;
  background-color: rgba(102, 140, 179, 0.01);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 225, 177, 81;
  background-color: rgba(225, 177, 81, 0.01);
  border-bottom-color: rgba(225, 177, 81, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(225, 177, 81, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(225, 177, 81, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(225, 177, 81, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 135, 125, 181;
  background-color: rgba(135, 125, 181, 0.01);
  border-bottom-color: rgba(135, 125, 181, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(135, 125, 181, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(135, 125, 181, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(135, 125, 181, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 138, 172, 108;
  background-color: rgba(138, 172, 108, 0.01);
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 102, 140, 179;
  background-color: rgba(102, 140, 179, 0.01);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 207, 134, 74;
  background-color: rgba(207, 134, 74, 0.01);
  border-bottom-color: rgba(207, 134, 74, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(207, 134, 74, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(207, 134, 74, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(207, 134, 74, 0.5);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 250, 248);
}

body .search > .search-container > .search-space > * {
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 243, 238);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(214, 110, 92, 0.1);
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
}

body a.internal.tag-link::before {
  color: rgb(214, 110, 92);
}

body h1 {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h2 {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h3 {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h4 {
  color: rgb(74, 52, 28);
}

body h5 {
  color: rgb(74, 52, 28);
}

body h6 {
  color: rgb(74, 52, 28);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 102, 140, 179;
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

body ::-webkit-scrollbar-corner {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

body ::-webkit-scrollbar-track {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}`,
    footer: `body footer {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(138, 103, 66);
}

body footer ul li a {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(74, 52, 28);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(138, 103, 66);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body li.section-li > .section .meta {
  color: rgb(138, 103, 66);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body ul.section-ul {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

body .darkmode svg {
  color: rgb(138, 103, 66);
  stroke: rgb(138, 103, 66);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

body .breadcrumb-element p {
  color: rgb(207, 182, 150);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .metadata {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(138, 103, 66);
  margin-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

body .navigation-progress {
  background-color: rgb(247, 243, 238);
}

body .page-header h2.page-title {
  color: rgb(74, 52, 28);
}

body abbr {
  color: rgb(74, 52, 28);
  text-decoration: underline dotted rgb(74, 52, 28);
}

body details {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body input[type=text] {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

body kbd {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body progress {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body sub {
  color: rgb(74, 52, 28);
}

body summary {
  color: rgb(74, 52, 28);
}

body sup {
  color: rgb(74, 52, 28);
}`,
  },
};
