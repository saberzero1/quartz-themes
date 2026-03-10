import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "tiniri", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0;
  --accent-l: 50;
  --accent-s: 77;
  --background-modifier-active-hover: hsla(0, 77, 50, 0.1);
  --background-modifier-border: #0003;
  --background-modifier-error: #AD514C;
  --background-modifier-error-hover: #AD514C;
  --background-modifier-error-rgb: 198, 107, 103;
  --background-modifier-success: #F5A571;
  --background-modifier-success-rgb: 173, 131, 1;
  --background-primary: #1F2122;
  --background-primary-alt: #1F2122;
  --background-secondary: #1B1D1E;
  --background-secondary-alt: #1B1D1E;
  --bases-cards-background: #1F2122;
  --bases-cards-cover-background: #1F2122;
  --bases-cards-shadow: 0 0 0 1px #0003;
  --bases-embed-border-color: #0003;
  --bases-group-heading-property-color: #938A80;
  --bases-table-border-color: #0003;
  --bases-table-cell-background-active: #1F2122;
  --bases-table-cell-background-disabled: #1F2122;
  --bases-table-cell-background-selected: hsla(0, 77, 50, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #314F52;
  --bases-table-group-background: #1F2122;
  --bases-table-header-background: #1F2122;
  --bases-table-header-color: #938A80;
  --bases-table-summary-background: #1F2122;
  --blockquote-border-color: #314F52;
  --blur-background: color-mix(in srgb, #353A42 65%, transparent) linear-gradient(#353A42, color-mix(in srgb, #353A42 65%, transparent));
  --callout-bug: 198, 107, 103;
  --callout-default: 104, 160, 160;
  --callout-error: 198, 107, 103;
  --callout-example: 168, 144, 128;
  --callout-fail: 198, 107, 103;
  --callout-important: 120, 113, 108;
  --callout-info: 104, 160, 160;
  --callout-question: 235, 147, 80;
  --callout-success: 173, 131, 1;
  --callout-summary: 120, 113, 108;
  --callout-tip: 120, 113, 108;
  --callout-todo: 104, 160, 160;
  --callout-warning: 235, 147, 80;
  --canvas-background: #1F2122;
  --canvas-card-label-color: #938A8099;
  --canvas-color-1: 198, 107, 103;
  --canvas-color-2: 235, 147, 80;
  --canvas-color-3: 235, 147, 80;
  --canvas-color-4: 173, 131, 1;
  --canvas-color-5: 120, 113, 108;
  --canvas-color-6: 168, 144, 128;
  --caret-color: #DBD3CA;
  --checkbox-border-color: #938A8099;
  --checkbox-border-color-hover: #938A80;
  --checkbox-color: #314F52;
  --checkbox-color-hover: #39595C;
  --checkbox-marker-color: #1F2122;
  --checklist-done-color: #938A80;
  --code-background: #1F2122;
  --code-border-color: #0003;
  --code-comment: #938A8099;
  --code-function: #F5A571;
  --code-important: #F5A571;
  --code-keyword: #D67C7F;
  --code-normal: #DBD3CA;
  --code-operator: #AD514C;
  --code-property: #938A80;
  --code-punctuation: #938A80;
  --code-string: #F5A571;
  --code-tag: #AD514C;
  --code-value: #D67C7F;
  --collapse-icon-color: #938A8099;
  --collapse-icon-color-collapsed: #AD514C;
  --color-accent: hsl(0, 77, 50);
  --color-accent-1: hsl(-3, 78.54, 57.5);
  --color-accent-2: hsl(-5, 80.85, 64.5);
  --color-accent-hsl: 0, 77, 50;
  --color-blue: #5BA9B9;
  --color-blue-rgb: 104, 160, 160;
  --color-cyan: #938A80;
  --color-cyan-rgb: 120, 113, 108;
  --color-green: #F5A571;
  --color-green-rgb: 173, 131, 1;
  --color-orange: #F5A571;
  --color-orange-rgb: 235, 147, 80;
  --color-pink: #D67C7F;
  --color-pink-rgb: 168, 144, 128;
  --color-purple: #D67C7F;
  --color-purple-rgb: 168, 144, 128;
  --color-red: #AD514C;
  --color-red-rgb: 198, 107, 103;
  --color-yellow: #F5A571;
  --color-yellow-rgb: 235, 147, 80;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #0003;
  --divider-color-hover: #314F52;
  --dropdown-background: #353A42;
  --dropdown-background-hover: #3F444D;
  --embed-block-shadow-hover: 0 0 0 1px #0003, inset 0 0 0 1px #0003;
  --embed-border-start: 2px solid #314F52;
  --file-header-background: #1F2122;
  --file-header-background-focused: #1F2122;
  --flair-background: #353A42;
  --flair-color: #DBD3CA;
  --footnote-divider-color: #0003;
  --footnote-id-color: #938A80;
  --footnote-id-color-no-occurrences: #938A8099;
  --graph-node: #938A80;
  --graph-node-attachment: #F5A571;
  --graph-node-focused: #AD514C;
  --graph-node-tag: #F5A571;
  --graph-node-unresolved: #938A8099;
  --graph-text: #DBD3CA;
  --gray: var(--text-muted);
  --heading-formatting: #938A8099;
  --highlight: var(--text-highlight-bg);
  --hr-color: #0003;
  --icon-color: #938A80;
  --icon-color-active: #AD514C;
  --icon-color-focused: #DBD3CA;
  --icon-color-hover: #938A80;
  --input-date-separator: #938A8099;
  --input-placeholder-color: #938A8099;
  --interactive-accent: #314F52;
  --interactive-accent-hover: #39595C;
  --interactive-accent-hsl: 0, 77, 50;
  --interactive-hover: #3F444D;
  --interactive-normal: #353A42;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #AD514C;
  --link-color-hover: #E07575;
  --link-external-color: #AD514C;
  --link-external-color-hover: #E07575;
  --link-unresolved-color: #AD514C;
  --link-unresolved-decoration-color: hsla(0, 77, 50, 0.3);
  --list-marker-color: #938A8099;
  --list-marker-color-collapsed: #AD514C;
  --list-marker-color-hover: #938A80;
  --menu-background: #1B1D1E;
  --metadata-border-color: #0003;
  --metadata-divider-color: #0003;
  --metadata-input-text-color: #DBD3CA;
  --metadata-label-text-color: #938A80;
  --metadata-label-text-color-hover: #938A80;
  --modal-background: #1F2122;
  --nav-collapse-icon-color: #938A8099;
  --nav-collapse-icon-color-collapsed: #938A8099;
  --nav-heading-color: #DBD3CA;
  --nav-heading-color-collapsed: #938A8099;
  --nav-heading-color-collapsed-hover: #938A80;
  --nav-heading-color-hover: #DBD3CA;
  --nav-item-background-selected: hsla(0, 77, 50, 0.15);
  --nav-item-color: #938A80;
  --nav-item-color-active: #DBD3CA;
  --nav-item-color-highlighted: #AD514C;
  --nav-item-color-hover: #DBD3CA;
  --nav-item-color-selected: #DBD3CA;
  --nav-tag-color: #938A8099;
  --nav-tag-color-active: #938A80;
  --nav-tag-color-hover: #938A80;
  --pdf-background: #1F2122;
  --pdf-page-background: #1F2122;
  --pdf-shadow: 0 0 0 1px #0003;
  --pdf-sidebar-background: #1F2122;
  --pdf-thumbnail-shadow: 0 0 0 1px #0003;
  --pill-border-color: #0003;
  --pill-color: #938A80;
  --pill-color-hover: #DBD3CA;
  --pill-color-remove: #938A8099;
  --pill-color-remove-hover: #AD514C;
  --prompt-background: #1F2122;
  --raised-background: color-mix(in srgb, #353A42 65%, transparent) linear-gradient(#353A42, color-mix(in srgb, #353A42 65%, transparent));
  --ribbon-background: #1B1D1E;
  --ribbon-background-collapsed: #1F2122;
  --search-clear-button-color: #938A80;
  --search-icon-color: #938A80;
  --search-result-background: #1F2122;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #DBD3CA;
  --setting-items-background: #1F2122;
  --setting-items-border-color: #0003;
  --slider-track-background: #0003;
  --status-bar-background: #1B1D1E;
  --status-bar-border-color: #0003;
  --status-bar-text-color: #938A80;
  --suggestion-background: #1F2122;
  --sync-avatar-color-1: #AD514C;
  --sync-avatar-color-2: #F5A571;
  --sync-avatar-color-3: #F5A571;
  --sync-avatar-color-4: #F5A571;
  --sync-avatar-color-5: #938A80;
  --sync-avatar-color-6: #5BA9B9;
  --sync-avatar-color-7: #D67C7F;
  --sync-avatar-color-8: #D67C7F;
  --tab-background-active: #1F2122;
  --tab-container-background: #1B1D1E;
  --tab-outline-color: #0003;
  --tab-switcher-background: #1B1D1E;
  --tab-switcher-menubar-background: linear-gradient(to top, #1B1D1E, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 77, 50);
  --tab-text-color: #938A8099;
  --tab-text-color-active: #938A80;
  --tab-text-color-focused: #938A80;
  --tab-text-color-focused-active: #938A80;
  --tab-text-color-focused-active-current: #DBD3CA;
  --tab-text-color-focused-highlighted: #AD514C;
  --table-add-button-border-color: #0003;
  --table-border-color: #0003;
  --table-drag-handle-background-active: #314F52;
  --table-drag-handle-color: #938A8099;
  --table-drag-handle-color-active: #DBD3CA;
  --table-header-border-color: #0003;
  --table-header-color: #DBD3CA;
  --table-selection: hsla(0, 77, 50, 0.1);
  --table-selection-border-color: #314F52;
  --tag-background: hsla(0, 77, 50, 0.1);
  --tag-background-hover: hsla(0, 77, 50, 0.2);
  --tag-border-color: hsla(0, 77, 50, 0.15);
  --tag-border-color-hover: hsla(0, 77, 50, 0.15);
  --tag-color: #AD514C;
  --tag-color-hover: #AD514C;
  --tertiary: var(--text-accent-hover);
  --text-accent: #AD514C;
  --text-accent-hover: #E07575;
  --text-error: #F5A571;
  --text-faint: #938A8099;
  --text-highlight-bg: #AD514C44;
  --text-muted: #938A80;
  --text-normal: #DBD3CA;
  --text-on-accent: #DBD3CA;
  --text-on-accent-inverted: #1F2122;
  --text-selection: #353A42;
  --text-success: #AAC2AE;
  --text-warning: #F5A571;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #1B1D1E;
  --titlebar-background-focused: #1B1D1E;
  --titlebar-border-color: #0003;
  --titlebar-text-color: #938A80;
  --titlebar-text-color-focused: #DBD3CA;
  --vault-profile-color: #DBD3CA;
  --vault-profile-color-hover: #DBD3CA;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 29, 30);
  color: rgb(219, 211, 202);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(31, 33, 34);
  color: rgb(219, 211, 202);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 29, 30);
  color: rgb(219, 211, 202);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.2);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 29, 30);
  border-left-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}

body div#quartz-root {
  background-color: rgb(31, 33, 34);
  color: rgb(219, 211, 202);
}`,
    typography: `body .page article p > b, b {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body .page article p > em, em {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body .page article p > i, i {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body .page article p > strong, strong {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body .text-highlight {
  background-color: rgba(173, 81, 76, 0.267);
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body del {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration: line-through rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body p {
  color: rgb(147, 138, 128);
  outline: rgb(147, 138, 128) none 0px;
  text-decoration: rgb(147, 138, 128);
  text-decoration-color: rgb(147, 138, 128);
}`,
    links: `body a.external, footer a {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline rgb(173, 81, 76);
  text-decoration-color: rgb(173, 81, 76);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline rgb(173, 81, 76);
  text-decoration-color: rgb(173, 81, 76);
}

body a.internal.broken {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline rgb(173, 81, 76);
  text-decoration-color: rgb(173, 81, 76);
}`,
    lists: `body dd {
  color: rgb(219, 211, 202);
}

body dt {
  color: rgb(219, 211, 202);
}

body ol > li {
  color: rgb(219, 211, 202);
}

body ol.overflow {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body ul > li {
  color: rgb(219, 211, 202);
}

body ul.overflow {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(147, 138, 128, 0.6);
  text-decoration: rgba(147, 138, 128, 0.6);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body table {
  color: rgb(219, 211, 202);
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}`,
    code: `body code {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}

body pre > code > [data-line] {
  border-left-color: rgb(245, 165, 113);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(245, 165, 113);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(245, 165, 113);
  border-left-color: rgb(245, 165, 113);
  border-right-color: rgb(245, 165, 113);
  border-top-color: rgb(245, 165, 113);
}

body pre > code, pre:has(> code) {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
}

body pre:has(> code) {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
}`,
    images: `body audio {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body figcaption {
  color: rgb(219, 211, 202);
}

body figure {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body img {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body video {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    embeds: `body .file-embed {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
}

body .footnotes {
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

body .transclude {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(49, 79, 82);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body .transclude-inner {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(49, 79, 82);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(147, 138, 128);
  text-decoration: line-through rgb(147, 138, 128);
  text-decoration-color: rgb(147, 138, 128);
}

body input[type=checkbox] {
  border-bottom-color: rgba(147, 138, 128, 0.6);
  border-left-color: rgba(147, 138, 128, 0.6);
  border-right-color: rgba(147, 138, 128, 0.6);
  border-top-color: rgba(147, 138, 128, 0.6);
}

body li.task-list-item[data-task='!'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='*'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='-'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='/'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='>'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='?'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='I'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='S'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='b'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='c'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='d'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='f'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='i'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='k'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='l'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='p'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='u'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body li.task-list-item[data-task='w'] {
  color: rgb(219, 211, 202);
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

body .callout[data-callout="abstract"] {
  --callout-color: 120, 113, 108;
  background-color: rgba(120, 113, 108, 0.1);
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 198, 107, 103;
  background-color: rgba(198, 107, 103, 0.1);
  border-bottom-color: rgba(198, 107, 103, 0.25);
  border-left-color: rgba(198, 107, 103, 0.25);
  border-right-color: rgba(198, 107, 103, 0.25);
  border-top-color: rgba(198, 107, 103, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 198, 107, 103;
  background-color: rgba(198, 107, 103, 0.1);
  border-bottom-color: rgba(198, 107, 103, 0.25);
  border-left-color: rgba(198, 107, 103, 0.25);
  border-right-color: rgba(198, 107, 103, 0.25);
  border-top-color: rgba(198, 107, 103, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 168, 144, 128;
  background-color: rgba(168, 144, 128, 0.1);
  border-bottom-color: rgba(168, 144, 128, 0.25);
  border-left-color: rgba(168, 144, 128, 0.25);
  border-right-color: rgba(168, 144, 128, 0.25);
  border-top-color: rgba(168, 144, 128, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 198, 107, 103;
  background-color: rgba(198, 107, 103, 0.1);
  border-bottom-color: rgba(198, 107, 103, 0.25);
  border-left-color: rgba(198, 107, 103, 0.25);
  border-right-color: rgba(198, 107, 103, 0.25);
  border-top-color: rgba(198, 107, 103, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 104, 160, 160;
  background-color: rgba(104, 160, 160, 0.1);
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 104, 160, 160;
  background-color: rgba(104, 160, 160, 0.1);
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 235, 147, 80;
  background-color: rgba(235, 147, 80, 0.1);
  border-bottom-color: rgba(235, 147, 80, 0.25);
  border-left-color: rgba(235, 147, 80, 0.25);
  border-right-color: rgba(235, 147, 80, 0.25);
  border-top-color: rgba(235, 147, 80, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 173, 131, 1;
  background-color: rgba(173, 131, 1, 0.1);
  border-bottom-color: rgba(173, 131, 1, 0.25);
  border-left-color: rgba(173, 131, 1, 0.25);
  border-right-color: rgba(173, 131, 1, 0.25);
  border-top-color: rgba(173, 131, 1, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 120, 113, 108;
  background-color: rgba(120, 113, 108, 0.1);
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 104, 160, 160;
  background-color: rgba(104, 160, 160, 0.1);
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 235, 147, 80;
  background-color: rgba(235, 147, 80, 0.1);
  border-bottom-color: rgba(235, 147, 80, 0.25);
  border-left-color: rgba(235, 147, 80, 0.25);
  border-right-color: rgba(235, 147, 80, 0.25);
  border-top-color: rgba(235, 147, 80, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}

body .search > .search-container > .search-space {
  background-color: rgb(31, 33, 34);
}

body .search > .search-container > .search-space > * {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(219, 211, 202);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(219, 211, 202);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(219, 211, 202);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 29, 30);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(219, 211, 202);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
}

body a.internal.tag-link::before {
  color: rgb(173, 81, 76);
}

body h1 {
  color: rgb(219, 211, 202);
}

body h2 {
  color: rgb(219, 211, 202);
}

body h2.page-title, h2.page-title a {
  color: rgb(219, 211, 202);
}

body h3 {
  color: rgb(219, 211, 202);
}

body h4 {
  color: rgb(219, 211, 202);
}

body h5 {
  color: rgb(219, 211, 202);
}

body h6 {
  color: rgb(219, 211, 202);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
}`,
    scrollbars: `body .callout {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(147, 138, 128);
  text-decoration: rgb(147, 138, 128);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(147, 138, 128);
  text-decoration: rgb(147, 138, 128);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(147, 138, 128);
  text-decoration: rgb(147, 138, 128);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}`,
    footer: `body footer {
  background-color: rgb(27, 29, 30);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(147, 138, 128);
}

body footer ul li a {
  color: rgb(147, 138, 128);
  text-decoration: rgb(147, 138, 128);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(219, 211, 202);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(147, 138, 128);
  text-decoration: rgb(147, 138, 128);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(147, 138, 128);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body li.section-li > .section .meta {
  color: rgb(147, 138, 128);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(147, 138, 128);
  text-decoration: rgb(147, 138, 128);
}

body ul.section-ul {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

body .darkmode svg {
  color: rgb(147, 138, 128);
  stroke: rgb(147, 138, 128);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

body .breadcrumb-element p {
  color: rgba(147, 138, 128, 0.6);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(147, 138, 128);
}

body .metadata-properties {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

body .navigation-progress {
  background-color: rgb(27, 29, 30);
}

body .page-header h2.page-title {
  color: rgb(219, 211, 202);
}

body abbr {
  color: rgb(219, 211, 202);
  text-decoration: underline dotted rgb(219, 211, 202);
}

body details {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body input[type=text] {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

body kbd {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

body progress {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

body sub {
  color: rgb(219, 211, 202);
}

body summary {
  color: rgb(219, 211, 202);
}

body sup {
  color: rgb(219, 211, 202);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 3;
  --accent-l: 54;
  --accent-s: 70;
  --background-modifier-active-hover: hsla(3, 70, 54, 0.1);
  --background-modifier-border: #33323118;
  --background-modifier-error: #AD514C;
  --background-modifier-error-hover: #AD514C;
  --background-modifier-error-rgb: 173, 81, 76;
  --background-modifier-success: #538A8A;
  --background-modifier-success-rgb: 83, 138, 138;
  --background-primary: #FDFCFC;
  --background-primary-alt: #FDFCFC;
  --background-secondary: #F7F3F0;
  --background-secondary-alt: #F7F3F0;
  --bases-cards-background: #FDFCFC;
  --bases-cards-cover-background: #FDFCFC;
  --bases-cards-shadow: 0 0 0 1px #33323118;
  --bases-embed-border-color: #33323118;
  --bases-group-heading-property-color: #807974;
  --bases-table-border-color: #33323118;
  --bases-table-cell-background-active: #FDFCFC;
  --bases-table-cell-background-disabled: #FDFCFC;
  --bases-table-cell-background-selected: hsla(3, 70, 54, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #538a8a;
  --bases-table-group-background: #FDFCFC;
  --bases-table-header-background: #FDFCFC;
  --bases-table-header-color: #807974;
  --bases-table-summary-background: #FDFCFC;
  --blockquote-border-color: #538a8a;
  --blur-background: color-mix(in srgb, #FDFCFC 65%, transparent) linear-gradient(#FDFCFC, color-mix(in srgb, #FDFCFC 65%, transparent));
  --callout-bug: 173, 81, 76;
  --callout-default: 53, 107, 148;
  --callout-error: 173, 81, 76;
  --callout-example: 128, 76, 110;
  --callout-fail: 173, 81, 76;
  --callout-important: 120, 113, 108;
  --callout-info: 53, 107, 148;
  --callout-question: 210, 132, 80;
  --callout-success: 83, 138, 138;
  --callout-summary: 120, 113, 108;
  --callout-tip: 120, 113, 108;
  --callout-todo: 53, 107, 148;
  --callout-warning: 210, 132, 80;
  --canvas-background: #FDFCFC;
  --canvas-card-label-color: #80797499;
  --canvas-color-1: 173, 81, 76;
  --canvas-color-2: 210, 132, 80;
  --canvas-color-3: 120, 113, 108;
  --canvas-color-4: 83, 138, 138;
  --canvas-color-5: 120, 113, 108;
  --canvas-color-6: 128, 76, 110;
  --caret-color: #333231;
  --checkbox-border-color: #80797499;
  --checkbox-border-color-hover: #807974;
  --checkbox-color: #538a8a;
  --checkbox-color-hover: #5c9e9e;
  --checkbox-marker-color: #FDFCFC;
  --checklist-done-color: #807974;
  --code-background: #FDFCFC;
  --code-border-color: #33323118;
  --code-comment: #80797499;
  --code-function: #D28450;
  --code-important: #D28450;
  --code-keyword: #BD71A4;
  --code-normal: #333231;
  --code-operator: #AD514C;
  --code-property: #807974;
  --code-punctuation: #807974;
  --code-string: #538A8A;
  --code-tag: #AD514C;
  --code-value: #804C6E;
  --collapse-icon-color: #80797499;
  --collapse-icon-color-collapsed: #AD514C;
  --color-accent: hsl(3, 70, 54);
  --color-accent-1: hsl(2, 70.7, 58.05);
  --color-accent-2: hsl(0, 71.4, 62.1);
  --color-accent-hsl: 3, 70, 54;
  --color-blue: #356B94;
  --color-blue-rgb: 53, 107, 148;
  --color-cyan: #807974;
  --color-cyan-rgb: 120, 113, 108;
  --color-green: #538A8A;
  --color-green-rgb: 83, 138, 138;
  --color-orange: #D28450;
  --color-orange-rgb: 210, 132, 80;
  --color-pink: #BD71A4;
  --color-pink-rgb: 189, 113, 164;
  --color-purple: #804C6E;
  --color-purple-rgb: 128, 76, 110;
  --color-red: #AD514C;
  --color-red-rgb: 173, 81, 76;
  --color-yellow: #D28450;
  --color-yellow-rgb: 120, 113, 108;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #33323118;
  --divider-color-hover: #538a8a;
  --dropdown-background: #F7F3F0;
  --dropdown-background-hover: #ede9e1;
  --embed-block-shadow-hover: 0 0 0 1px #33323118, inset 0 0 0 1px #33323118;
  --embed-border-start: 2px solid #538a8a;
  --file-header-background: #FDFCFC;
  --file-header-background-focused: #FDFCFC;
  --flair-background: #F7F3F0;
  --flair-color: #333231;
  --footnote-divider-color: #33323118;
  --footnote-id-color: #807974;
  --footnote-id-color-no-occurrences: #80797499;
  --graph-node: #807974;
  --graph-node-attachment: #D28450;
  --graph-node-focused: #AD514C;
  --graph-node-tag: #538A8A;
  --graph-node-unresolved: #80797499;
  --graph-text: #333231;
  --gray: var(--text-muted);
  --heading-formatting: #80797499;
  --highlight: var(--text-highlight-bg);
  --hr-color: #33323118;
  --icon-color: #807974;
  --icon-color-active: #AD514C;
  --icon-color-focused: #333231;
  --icon-color-hover: #807974;
  --input-date-separator: #80797499;
  --input-placeholder-color: #80797499;
  --interactive-accent: #538a8a;
  --interactive-accent-hover: #5c9e9e;
  --interactive-accent-hsl: 3, 70, 54;
  --interactive-hover: #ede9e1;
  --interactive-normal: #F7F3F0;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #AD514C;
  --link-color-hover: #cc645e;
  --link-external-color: #AD514C;
  --link-external-color-hover: #cc645e;
  --link-unresolved-color: #AD514C;
  --link-unresolved-decoration-color: hsla(3, 70, 54, 0.3);
  --list-marker-color: #80797499;
  --list-marker-color-collapsed: #AD514C;
  --list-marker-color-hover: #807974;
  --menu-background: #F7F3F0;
  --metadata-border-color: #33323118;
  --metadata-divider-color: #33323118;
  --metadata-input-text-color: #333231;
  --metadata-label-text-color: #807974;
  --metadata-label-text-color-hover: #807974;
  --modal-background: #FDFCFC;
  --nav-collapse-icon-color: #80797499;
  --nav-collapse-icon-color-collapsed: #80797499;
  --nav-heading-color: #333231;
  --nav-heading-color-collapsed: #80797499;
  --nav-heading-color-collapsed-hover: #807974;
  --nav-heading-color-hover: #333231;
  --nav-item-background-selected: hsla(3, 70, 54, 0.15);
  --nav-item-color: #807974;
  --nav-item-color-active: #333231;
  --nav-item-color-highlighted: #AD514C;
  --nav-item-color-hover: #333231;
  --nav-item-color-selected: #333231;
  --nav-tag-color: #80797499;
  --nav-tag-color-active: #807974;
  --nav-tag-color-hover: #807974;
  --pdf-background: #FDFCFC;
  --pdf-page-background: #FDFCFC;
  --pdf-sidebar-background: #FDFCFC;
  --pill-border-color: #33323118;
  --pill-color: #807974;
  --pill-color-hover: #333231;
  --pill-color-remove: #80797499;
  --pill-color-remove-hover: #AD514C;
  --prompt-background: #FDFCFC;
  --raised-background: color-mix(in srgb, #FDFCFC 65%, transparent) linear-gradient(#FDFCFC, color-mix(in srgb, #FDFCFC 65%, transparent));
  --ribbon-background: #F7F3F0;
  --ribbon-background-collapsed: #FDFCFC;
  --search-clear-button-color: #807974;
  --search-icon-color: #807974;
  --search-result-background: #FDFCFC;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #333231;
  --setting-items-background: #FDFCFC;
  --setting-items-border-color: #33323118;
  --slider-track-background: #33323118;
  --status-bar-background: #F7F3F0;
  --status-bar-border-color: #33323118;
  --status-bar-text-color: #807974;
  --suggestion-background: #FDFCFC;
  --sync-avatar-color-1: #AD514C;
  --sync-avatar-color-2: #D28450;
  --sync-avatar-color-3: #D28450;
  --sync-avatar-color-4: #538A8A;
  --sync-avatar-color-5: #807974;
  --sync-avatar-color-6: #356B94;
  --sync-avatar-color-7: #804C6E;
  --sync-avatar-color-8: #BD71A4;
  --tab-background-active: #FDFCFC;
  --tab-container-background: #F7F3F0;
  --tab-outline-color: #33323118;
  --tab-switcher-background: #F7F3F0;
  --tab-switcher-menubar-background: linear-gradient(to top, #F7F3F0, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(3, 70, 54);
  --tab-text-color: #80797499;
  --tab-text-color-active: #807974;
  --tab-text-color-focused: #807974;
  --tab-text-color-focused-active: #807974;
  --tab-text-color-focused-active-current: #333231;
  --tab-text-color-focused-highlighted: #AD514C;
  --table-add-button-border-color: #33323118;
  --table-border-color: #33323118;
  --table-drag-handle-background-active: #538a8a;
  --table-drag-handle-color: #80797499;
  --table-drag-handle-color-active: #FDFCFC;
  --table-header-border-color: #33323118;
  --table-header-color: #333231;
  --table-selection: hsla(3, 70, 54, 0.1);
  --table-selection-border-color: #538a8a;
  --tag-background: hsla(3, 70, 54, 0.1);
  --tag-background-hover: hsla(3, 70, 54, 0.2);
  --tag-border-color: hsla(3, 70, 54, 0.15);
  --tag-border-color-hover: hsla(3, 70, 54, 0.15);
  --tag-color: #AD514C;
  --tag-color-hover: #AD514C;
  --tertiary: var(--text-accent-hover);
  --text-accent: #AD514C;
  --text-accent-hover: #cc645e;
  --text-error: #AD514C;
  --text-faint: #80797499;
  --text-highlight-bg: #fab48588;
  --text-muted: #807974;
  --text-normal: #333231;
  --text-on-accent: #FDFCFC;
  --text-on-accent-inverted: #333231;
  --text-selection: #dae5e2;
  --text-success: #538a8a;
  --text-warning: #AD514C;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #F7F3F0;
  --titlebar-background-focused: #F7F3F0;
  --titlebar-border-color: #33323118;
  --titlebar-text-color: #807974;
  --titlebar-text-color-focused: #333231;
  --vault-profile-color: #333231;
  --vault-profile-color-hover: #333231;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 243, 240);
  color: rgb(51, 50, 49);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 252, 252);
  color: rgb(51, 50, 49);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 243, 240);
  color: rgb(51, 50, 49);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(51, 50, 49, 0.094);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 243, 240);
  border-left-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}

body div#quartz-root {
  background-color: rgb(253, 252, 252);
  color: rgb(51, 50, 49);
}`,
    typography: `body .page article p > b, b {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body .page article p > em, em {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body .page article p > i, i {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body .page article p > strong, strong {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body .text-highlight {
  background-color: rgba(250, 180, 133, 0.533);
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body del {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration: line-through rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body p {
  color: rgb(128, 121, 116);
  outline: rgb(128, 121, 116) none 0px;
  text-decoration: rgb(128, 121, 116);
  text-decoration-color: rgb(128, 121, 116);
}`,
    links: `body a.external, footer a {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline rgb(173, 81, 76);
  text-decoration-color: rgb(173, 81, 76);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline rgb(173, 81, 76);
  text-decoration-color: rgb(173, 81, 76);
}

body a.internal.broken {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline rgb(173, 81, 76);
  text-decoration-color: rgb(173, 81, 76);
}`,
    lists: `body dd {
  color: rgb(51, 50, 49);
}

body dt {
  color: rgb(51, 50, 49);
}

body ol > li {
  color: rgb(51, 50, 49);
}

body ol.overflow {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body ul > li {
  color: rgb(51, 50, 49);
}

body ul.overflow {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(128, 121, 116, 0.6);
  text-decoration: rgba(128, 121, 116, 0.6);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body table {
  color: rgb(51, 50, 49);
}

body td {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}

body th {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}`,
    code: `body code {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}

body pre > code > [data-line] {
  border-left-color: rgb(210, 132, 80);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(210, 132, 80);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(210, 132, 80);
  border-left-color: rgb(210, 132, 80);
  border-right-color: rgb(210, 132, 80);
  border-top-color: rgb(210, 132, 80);
}

body pre > code, pre:has(> code) {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
}

body pre:has(> code) {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
}`,
    images: `body audio {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body figcaption {
  color: rgb(51, 50, 49);
}

body figure {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body img {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body video {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    embeds: `body .file-embed {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
}

body .footnotes {
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

body .transclude {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(83, 138, 138);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body .transclude-inner {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(83, 138, 138);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(128, 121, 116);
  text-decoration: line-through rgb(128, 121, 116);
  text-decoration-color: rgb(128, 121, 116);
}

body input[type=checkbox] {
  border-bottom-color: rgba(128, 121, 116, 0.6);
  border-left-color: rgba(128, 121, 116, 0.6);
  border-right-color: rgba(128, 121, 116, 0.6);
  border-top-color: rgba(128, 121, 116, 0.6);
}

body li.task-list-item[data-task='!'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='*'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='-'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='/'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='>'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='?'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='I'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='S'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='b'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='c'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='d'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='f'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='i'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='k'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='l'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='p'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='u'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body li.task-list-item[data-task='w'] {
  color: rgb(51, 50, 49);
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

body .callout[data-callout="abstract"] {
  --callout-color: 120, 113, 108;
  background-color: rgba(120, 113, 108, 0.1);
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 173, 81, 76;
  background-color: rgba(173, 81, 76, 0.1);
  border-bottom-color: rgba(173, 81, 76, 0.25);
  border-left-color: rgba(173, 81, 76, 0.25);
  border-right-color: rgba(173, 81, 76, 0.25);
  border-top-color: rgba(173, 81, 76, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 173, 81, 76;
  background-color: rgba(173, 81, 76, 0.1);
  border-bottom-color: rgba(173, 81, 76, 0.25);
  border-left-color: rgba(173, 81, 76, 0.25);
  border-right-color: rgba(173, 81, 76, 0.25);
  border-top-color: rgba(173, 81, 76, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 128, 76, 110;
  background-color: rgba(128, 76, 110, 0.1);
  border-bottom-color: rgba(128, 76, 110, 0.25);
  border-left-color: rgba(128, 76, 110, 0.25);
  border-right-color: rgba(128, 76, 110, 0.25);
  border-top-color: rgba(128, 76, 110, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 173, 81, 76;
  background-color: rgba(173, 81, 76, 0.1);
  border-bottom-color: rgba(173, 81, 76, 0.25);
  border-left-color: rgba(173, 81, 76, 0.25);
  border-right-color: rgba(173, 81, 76, 0.25);
  border-top-color: rgba(173, 81, 76, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 53, 107, 148;
  background-color: rgba(53, 107, 148, 0.1);
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 53, 107, 148;
  background-color: rgba(53, 107, 148, 0.1);
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 210, 132, 80;
  background-color: rgba(210, 132, 80, 0.1);
  border-bottom-color: rgba(210, 132, 80, 0.25);
  border-left-color: rgba(210, 132, 80, 0.25);
  border-right-color: rgba(210, 132, 80, 0.25);
  border-top-color: rgba(210, 132, 80, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 83, 138, 138;
  background-color: rgba(83, 138, 138, 0.1);
  border-bottom-color: rgba(83, 138, 138, 0.25);
  border-left-color: rgba(83, 138, 138, 0.25);
  border-right-color: rgba(83, 138, 138, 0.25);
  border-top-color: rgba(83, 138, 138, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 120, 113, 108;
  background-color: rgba(120, 113, 108, 0.1);
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 53, 107, 148;
  background-color: rgba(53, 107, 148, 0.1);
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 210, 132, 80;
  background-color: rgba(210, 132, 80, 0.1);
  border-bottom-color: rgba(210, 132, 80, 0.25);
  border-left-color: rgba(210, 132, 80, 0.25);
  border-right-color: rgba(210, 132, 80, 0.25);
  border-top-color: rgba(210, 132, 80, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}

body .search > .search-container > .search-space {
  background-color: rgb(253, 252, 252);
}

body .search > .search-container > .search-space > * {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 50, 49);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(51, 50, 49);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(51, 50, 49);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 243, 240);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(51, 50, 49);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
}

body a.internal.tag-link::before {
  color: rgb(173, 81, 76);
}

body h1 {
  color: rgb(51, 50, 49);
}

body h2 {
  color: rgb(51, 50, 49);
}

body h2.page-title, h2.page-title a {
  color: rgb(51, 50, 49);
}

body h3 {
  color: rgb(51, 50, 49);
}

body h4 {
  color: rgb(51, 50, 49);
}

body h5 {
  color: rgb(51, 50, 49);
}

body h6 {
  color: rgb(51, 50, 49);
}

body hr {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
}`,
    scrollbars: `body .callout {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(128, 121, 116);
  text-decoration: rgb(128, 121, 116);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(128, 121, 116);
  text-decoration: rgb(128, 121, 116);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(128, 121, 116);
  text-decoration: rgb(128, 121, 116);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}`,
    footer: `body footer {
  background-color: rgb(247, 243, 240);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(128, 121, 116);
}

body footer ul li a {
  color: rgb(128, 121, 116);
  text-decoration: rgb(128, 121, 116);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(51, 50, 49);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(128, 121, 116);
  text-decoration: rgb(128, 121, 116);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(128, 121, 116);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body li.section-li > .section .meta {
  color: rgb(128, 121, 116);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(128, 121, 116);
  text-decoration: rgb(128, 121, 116);
}

body ul.section-ul {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

body .darkmode svg {
  color: rgb(128, 121, 116);
  stroke: rgb(128, 121, 116);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

body .breadcrumb-element p {
  color: rgba(128, 121, 116, 0.6);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

body .metadata {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(128, 121, 116);
}

body .metadata-properties {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

body .navigation-progress {
  background-color: rgb(247, 243, 240);
}

body .page-header h2.page-title {
  color: rgb(51, 50, 49);
}

body abbr {
  color: rgb(51, 50, 49);
  text-decoration: underline dotted rgb(51, 50, 49);
}

body details {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body input[type=text] {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

body kbd {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

body progress {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

body sub {
  color: rgb(51, 50, 49);
}

body summary {
  color: rgb(51, 50, 49);
}

body sup {
  color: rgb(51, 50, 49);
}`,
  },
};
