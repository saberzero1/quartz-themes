import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "simply-colorful",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.08);
  --background-modifier-border-focus: #4c4c4c;
  --background-modifier-border-hover: #414141;
  --background-modifier-error: #e03035;
  --background-modifier-error-hover: #e03035;
  --background-modifier-error-rgb: 224, 48, 53;
  --background-modifier-form-field: #1e1e1e;
  --background-modifier-form-field-hover: #1e1e1e;
  --background-modifier-hover: rgba(138, 92, 245, 0.08);
  --background-modifier-success: #32ce2d;
  --background-modifier-success-rgb: 47, 206, 42;
  --background-primary: #191919;
  --background-primary-alt: #222222;
  --background-secondary: #1e1e1e;
  --background-secondary-alt: #1e1e1e;
  --bases-cards-background: #191919;
  --bases-cards-cover-background: #222222;
  --bases-cards-shadow-hover: 0 0 0 1px #414141;
  --bases-table-cell-background-active: #191919;
  --bases-table-cell-background-disabled: #222222;
  --bases-table-cell-shadow-active: 0 0 0 2px #4c4c4c;
  --bases-table-group-background: #222222;
  --bases-table-header-background: #191919;
  --bases-table-header-background-hover: rgba(138, 92, 245, 0.08);
  --bases-table-row-background-hover: #1e1e1e;
  --bases-table-summary-background: #191919;
  --bases-table-summary-background-hover: rgba(138, 92, 245, 0.08);
  --blockquote-background-color: rgba(138, 92, 245, 0.05);
  --blockquote-border-color: rgba(138, 92, 245, 0.5);
  --blockquote-color: #b3b3b3;
  --blur-background: color-mix(in srgb, #414141 65%, transparent) linear-gradient(#414141, color-mix(in srgb, #414141 65%, transparent));
  --bold-color: #2dcec9;
  --callout-border-width: 2px;
  --callout-bug: 224, 48, 53;
  --callout-default: 36, 113, 212;
  --callout-error: 224, 48, 53;
  --callout-example: 131, 48, 224;
  --callout-fail: 224, 48, 53;
  --callout-important: 42, 206, 201;
  --callout-info: 36, 113, 212;
  --callout-question: 224, 131, 48;
  --callout-radius: 8px;
  --callout-success: 47, 206, 42;
  --callout-summary: 42, 206, 201;
  --callout-tip: 42, 206, 201;
  --callout-todo: 36, 113, 212;
  --callout-warning: 224, 131, 48;
  --canvas-background: #191919;
  --canvas-color-1: 224, 48, 53;
  --canvas-color-2: 224, 131, 48;
  --canvas-color-3: 206, 201, 42;
  --canvas-color-4: 47, 206, 42;
  --canvas-color-5: 42, 206, 201;
  --canvas-color-6: 131, 48, 224;
  --canvas-dot-pattern: #414141;
  --checkbox-marker-color: #191919;
  --code-background: #222222;
  --code-bracket-background: rgba(138, 92, 245, 0.08);
  --code-function: #cec92a;
  --code-important: #e08330;
  --code-keyword: #e0308d;
  --code-operator: #e03035;
  --code-property: #2dcec9;
  --code-radius: 8px;
  --code-string: #32ce2d;
  --code-tag: #e03035;
  --code-value: #9149e4;
  --collapse-icon-color-collapsed: #666666;
  --color-base-00: #191919;
  --color-base-05: #1e1e1e;
  --color-base-10: #222222;
  --color-base-20: #313131;
  --color-base-25: #363636;
  --color-base-30: #414141;
  --color-base-35: #4c4c4c;
  --color-blue: #2471d4;
  --color-blue-rgb: 36, 113, 212;
  --color-cyan: #2dcec9;
  --color-cyan-rgb: 42, 206, 201;
  --color-green: #32ce2d;
  --color-green-rgb: 47, 206, 42;
  --color-orange: #e08330;
  --color-orange-rgb: 224, 131, 48;
  --color-pink: #e0308d;
  --color-pink-rgb: 224, 48, 141;
  --color-purple: #9149e4;
  --color-purple-rgb: 131, 48, 224;
  --color-red: #e03035;
  --color-red-rgb: 224, 48, 53;
  --color-yellow: #cec92a;
  --color-yellow-rgb: 206, 201, 42;
  --dataview-table-even-bg-color: #222222;
  --dataview-table-odd-bg-color: #1e1e1e;
  --dataview-table-row-hover: 258, 88%, 66%;
  --dataview-table-tbody-size: 13.12px;
  --dataview-table-thead-size: 14.08px;
  --divider-color-hover: rgba(138, 92, 245, 0.5);
  --dropdown-background: #414141;
  --dropdown-background-hover: #4c4c4c;
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgba(138, 92, 245, 0.5);
  --embed-max-height: 750px;
  --file-header-background: #191919;
  --file-header-background-focused: #191919;
  --file-header-font-weight: 700;
  --flair-background: #414141;
  --font-editor-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
  --footnote-input-background-active: rgba(138, 92, 245, 0.08);
  --graph-line: #4c4c4c;
  --graph-node-attachment: #cec92a;
  --graph-node-focused: #8a5cf5;
  --graph-node-tag: #32ce2d;
  --h-hover-transparency: 20%;
  --h-transparency: 7%;
  --h1-color: #2471d4;
  --h1-size: 1.802em;
  --h2-color: #9149e4;
  --h2-size: 1.602em;
  --h2-weight: 700;
  --h3-color: #e0308d;
  --h3-size: 1.424em;
  --h3-weight: 700;
  --h4-color: #e03035;
  --h4-size: 1.266em;
  --h4-weight: 700;
  --h5-color: #e08330;
  --h5-size: 1.125em;
  --h5-weight: 700;
  --h6-color: #cec92a;
  --h6-weight: 700;
  --highlight: var(--text-highlight-bg);
  --icon-color-active: rgb(138, 92, 245);
  --icon-color-focused: rgb(138, 92, 245);
  --icon-color-hover: rgb(138, 92, 245);
  --icon-opacity: 0.8;
  --inline-title-color: #dadada;
  --inline-title-size: 1.92em;
  --interactive-hover: #4c4c4c;
  --interactive-normal: #414141;
  --italic-color: #32ce2d;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #8a5cf5;
  --link-color-hover: rgba(138, 92, 245, 0.825);
  --link-external-color: #0071e3;
  --link-external-color-hover: #0764c1;
  --link-unresolved-color: #8a5cf5;
  --link-unresolved-filter: grayscale(25%);
  --list-indent: 2em;
  --list-marker-color-collapsed: #666666;
  --live-heading-bg-bottom: 0.4375rem;
  --live-heading-bg-top: 0.5625rem;
  --live-heading-padding: 0.84375rem;
  --menu-background: #1e1e1e;
  --menu-border-color: #414141;
  --metadata-background: #222222;
  --metadata-border-radius: 8px;
  --metadata-input-background-active: rgba(138, 92, 245, 0.08);
  --metadata-label-background-active: rgba(138, 92, 245, 0.08);
  --metadata-property-background-active: rgba(138, 92, 245, 0.08);
  --metadata-property-box-shadow-focus: 0 0 0 2px #4c4c4c;
  --metadata-property-box-shadow-hover: 0 0 0 1px #414141;
  --metadata-property-radius: 4px;
  --metadata-property-radius-focus: 4px;
  --metadata-property-radius-hover: 4px;
  --modal-background: #191919;
  --nav-item-background-active: rgba(138, 92, 245, 0.08);
  --nav-item-background-hover: rgba(138, 92, 245, 0.08);
  --nav-item-color-active: rgba(138, 92, 245, 0.95);
  --nav-item-color-highlighted: #8a5cf5;
  --nav-item-color-hover: rgba(138, 92, 245, 0.775);
  --nav-item-color-selected: rgba(138, 92, 245, 0.95);
  --nav-item-weight: 500;
  --nav-item-weight-hover: 500;
  --p-spacing-empty: 0.1rem;
  --pdf-background: #191919;
  --pdf-page-background: #191919;
  --pdf-sidebar-background: #191919;
  --pill-border-color-hover: #414141;
  --pill-color-remove-hover: #8a5cf5;
  --prompt-background: #191919;
  --raised-background: color-mix(in srgb, #414141 65%, transparent) linear-gradient(#414141, color-mix(in srgb, #414141 65%, transparent));
  --ribbon-background: #1e1e1e;
  --ribbon-background-collapsed: #191919;
  --scrollbar-active-thumb-bg: rgba(138, 92, 245, 0.5);
  --search-result-background: #191919;
  --secondary: var(--text-accent);
  --setting-items-background: #222222;
  --slider-thumb-border-color: rgba(138, 92, 245, 0.75);
  --slider-thumb-border-width: 2px;
  --slider-track-background: rgba(138, 92, 245, 0.5);
  --status-bar-background: #1e1e1e;
  --suggestion-background: #191919;
  --sync-avatar-color-1: #e03035;
  --sync-avatar-color-2: #e08330;
  --sync-avatar-color-3: #cec92a;
  --sync-avatar-color-4: #32ce2d;
  --sync-avatar-color-5: #2dcec9;
  --sync-avatar-color-6: #2471d4;
  --sync-avatar-color-7: #9149e4;
  --sync-avatar-color-8: #e0308d;
  --tab-background-active: #191919;
  --tab-container-background: #1e1e1e;
  --tab-divider-color: #414141;
  --tab-font-weight: 700;
  --tab-stacked-font-weight: 700;
  --tab-switcher-background: #1e1e1e;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e1e1e, transparent);
  --tab-text-color-focused-active-current: rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: #8a5cf5;
  --table-background: #1e1e1e;
  --table-column-alt-background: #1e1e1e;
  --table-header-background: #1e1e1e;
  --table-row-alt-background: #1e1e1e;
  --table-row-alt-background-hover: #1e1e1e;
  --table-row-background-hover: #1e1e1e;
  --tag-background: rgba(138, 92, 245, 0.075);
  --tag-background-hover: rgba(138, 92, 245, 0.05);
  --tag-color: rgba(138, 92, 245, 0.925);
  --tag-color-hover: rgba(138, 92, 245, 0.95);
  --tag-padding-x: 0.7em;
  --tag-padding-y: 0.3em;
  --tag-radius: 1em;
  --tertiary: var(--text-accent-hover);
  --text-accent: #8a5cf5;
  --text-accent-hover: rgba(138, 92, 245, 0.825);
  --text-error: #e03035;
  --text-highlight-bg: rgba(236, 235, 0, 0.4);
  --text-highlight-bg-rgb: 236, 235, 0;
  --text-success: #32ce2d;
  --text-warning: #e08330;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #1e1e1e;
  --titlebar-background-focused: #1e1e1e;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 25, 25);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 30, 30);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
}

body div#quartz-root {
  background-color: rgb(25, 25, 25);
}`,
    typography: `body .page article p > b, b {
  color: rgb(45, 206, 201);
  outline: rgb(45, 206, 201) none 0px;
  text-decoration: rgb(45, 206, 201);
  text-decoration-color: rgb(45, 206, 201);
}

body .page article p > em, em {
  color: rgb(50, 206, 45);
  outline: rgb(50, 206, 45) none 0px;
  text-decoration: rgb(50, 206, 45);
  text-decoration-color: rgb(50, 206, 45);
}

body .page article p > i, i {
  color: rgb(50, 206, 45);
  outline: rgb(50, 206, 45) none 0px;
  text-decoration: rgb(50, 206, 45);
  text-decoration-color: rgb(50, 206, 45);
}

body .page article p > strong, strong {
  color: rgb(45, 206, 201);
  outline: rgb(45, 206, 201) none 0px;
  text-decoration: rgb(45, 206, 201);
  text-decoration-color: rgb(45, 206, 201);
}

body .text-highlight {
  background-color: rgba(236, 235, 0, 0.4);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 113, 227);
  outline: rgb(0, 113, 227) none 0px;
  text-decoration: underline rgb(0, 113, 227);
  text-decoration-color: rgb(0, 113, 227);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body a.internal.broken {
  color: rgb(138, 92, 245);
  filter: grayscale(0.25);
  outline: rgb(138, 92, 245) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(25, 25, 25);
}

body ul.overflow {
  background-color: rgb(25, 25, 25);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(138, 92, 245, 0.05);
  padding-bottom: 20px;
  padding-top: 12px;
}`,
    tables: `body tbody tr:nth-child(even) {
  background-color: rgb(30, 30, 30);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(30, 30, 30);
}

body td {
  background-color: rgb(30, 30, 30);
}

body th {
  background-color: rgb(30, 30, 30);
}

body tr {
  background-color: rgb(30, 30, 30);
}`,
    code: `body code {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(34, 34, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(34, 34, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre > code > [data-line] {
  border-left-color: rgb(206, 201, 42);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(206, 201, 42);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(206, 201, 42);
  border-left-color: rgb(206, 201, 42);
  border-right-color: rgb(206, 201, 42);
  border-top-color: rgb(206, 201, 42);
}

body pre > code, pre:has(> code) {
  background-color: rgb(34, 34, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: rgb(34, 34, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(34, 34, 34);
}

body .transclude {
  border-left-color: rgba(138, 92, 245, 0.5);
}

body .transclude-inner {
  border-left-color: rgba(138, 92, 245, 0.5);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
}

body .callout[data-callout="abstract"] {
  --callout-color: 42, 206, 201;
  background-color: rgba(42, 206, 201, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(42, 206, 201, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 224, 48, 53;
  background-color: rgba(224, 48, 53, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 48, 53, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  --callout-color: 224, 48, 53;
  background-color: rgba(224, 48, 53, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 48, 53, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  --callout-color: 131, 48, 224;
  background-color: rgba(131, 48, 224, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(131, 48, 224, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  --callout-color: 224, 48, 53;
  background-color: rgba(224, 48, 53, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 48, 53, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  --callout-color: 36, 113, 212;
  background-color: rgba(36, 113, 212, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(36, 113, 212, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  --callout-color: 36, 113, 212;
  background-color: rgba(36, 113, 212, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(36, 113, 212, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 131, 48;
  background-color: rgba(224, 131, 48, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 131, 48, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  --callout-color: 47, 206, 42;
  background-color: rgba(47, 206, 42, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(47, 206, 42, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  --callout-color: 42, 206, 201;
  background-color: rgba(42, 206, 201, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(42, 206, 201, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  --callout-color: 36, 113, 212;
  background-color: rgba(36, 113, 212, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(36, 113, 212, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  --callout-color: 224, 131, 48;
  background-color: rgba(224, 131, 48, 0.1);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 131, 48, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(30, 30, 30);
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 25, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.08);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 30, 30);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(138, 92, 245, 0.08);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.08);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.075);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

body a.internal.tag-link::before {
  color: rgba(138, 92, 245, 0.925);
}

body h1 {
  color: rgb(36, 113, 212);
}

body h2 {
  color: rgb(145, 73, 228);
}

body h3 {
  color: rgb(224, 48, 141);
}

body h4 {
  color: rgb(224, 48, 53);
}

body h5 {
  color: rgb(224, 131, 48);
}

body h6 {
  color: rgb(206, 201, 42);
}`,
    scrollbars: `body .callout {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(36, 113, 212, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-weight: 500;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-weight: 500;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(138, 92, 245, 0.08);
  border-bottom-color: rgba(138, 92, 245, 0.95);
  border-left-color: rgba(138, 92, 245, 0.95);
  border-right-color: rgba(138, 92, 245, 0.95);
  border-top-color: rgba(138, 92, 245, 0.95);
  color: rgba(138, 92, 245, 0.95);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    footer: `body footer {
  background-color: rgb(30, 30, 30);
}`,
    misc: `body .metadata {
  background-color: rgb(34, 34, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

body kbd {
  background-color: rgb(34, 34, 34);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.08);
  --background-modifier-border: #dadada;
  --background-modifier-border-focus: #c7c7c7;
  --background-modifier-error: #e03035;
  --background-modifier-error-hover: #e03035;
  --background-modifier-error-rgb: 224, 48, 53;
  --background-modifier-form-field: #f0f0f0;
  --background-modifier-form-field-hover: #f0f0f0;
  --background-modifier-hover: rgba(138, 92, 245, 0.08);
  --background-modifier-success: #0fa50a;
  --background-modifier-success-rgb: 47, 206, 42;
  --background-primary: #f7f7f7;
  --background-primary-alt: #e7e7e7;
  --background-secondary: #f0f0f0;
  --background-secondary-alt: #f0f0f0;
  --bases-cards-background: #f7f7f7;
  --bases-cards-cover-background: #e7e7e7;
  --bases-cards-shadow: 0 0 0 1px #dadada;
  --bases-embed-border-color: #dadada;
  --bases-group-heading-property-color: #4f4f4f;
  --bases-table-border-color: #dadada;
  --bases-table-cell-background-active: #f7f7f7;
  --bases-table-cell-background-disabled: #e7e7e7;
  --bases-table-cell-shadow-active: 0 0 0 2px #c7c7c7;
  --bases-table-group-background: #e7e7e7;
  --bases-table-header-background: #f7f7f7;
  --bases-table-header-background-hover: rgba(138, 92, 245, 0.08);
  --bases-table-header-color: #4f4f4f;
  --bases-table-row-background-hover: #f0f0f0;
  --bases-table-summary-background: #f7f7f7;
  --bases-table-summary-background-hover: rgba(138, 92, 245, 0.08);
  --blockquote-background-color: rgba(138, 92, 245, 0.05);
  --blockquote-border-color: rgba(138, 92, 245, 0.5);
  --blockquote-color: #4f4f4f;
  --blur-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent));
  --bold-color: #18ada8;
  --callout-border-width: 2px;
  --callout-bug: 224, 48, 53;
  --callout-default: 36, 113, 212;
  --callout-error: 224, 48, 53;
  --callout-example: 131, 48, 224;
  --callout-fail: 224, 48, 53;
  --callout-important: 42, 206, 201;
  --callout-info: 36, 113, 212;
  --callout-question: 224, 131, 48;
  --callout-radius: 8px;
  --callout-success: 47, 206, 42;
  --callout-summary: 42, 206, 201;
  --callout-tip: 42, 206, 201;
  --callout-todo: 36, 113, 212;
  --callout-warning: 224, 131, 48;
  --canvas-background: #f7f7f7;
  --canvas-card-label-color: #aaaaaa;
  --canvas-color-1: 224, 48, 53;
  --canvas-color-2: 224, 131, 48;
  --canvas-color-3: 206, 201, 42;
  --canvas-color-4: 47, 206, 42;
  --canvas-color-5: 42, 206, 201;
  --canvas-color-6: 131, 48, 224;
  --canvas-dot-pattern: #d4d4d4;
  --checkbox-border-color: #aaaaaa;
  --checkbox-border-color-hover: #4f4f4f;
  --checkbox-marker-color: #f7f7f7;
  --checklist-done-color: #4f4f4f;
  --code-background: #e7e7e7;
  --code-border-color: #dadada;
  --code-bracket-background: rgba(138, 92, 245, 0.08);
  --code-comment: #aaaaaa;
  --code-function: #b6b11c;
  --code-important: #d57929;
  --code-keyword: #e0308d;
  --code-operator: #e03035;
  --code-property: #18ada8;
  --code-punctuation: #4f4f4f;
  --code-radius: 8px;
  --code-string: #0fa50a;
  --code-tag: #e03035;
  --code-value: #8330e0;
  --collapse-icon-color: #aaaaaa;
  --collapse-icon-color-collapsed: #aaaaaa;
  --color-base-00: #f7f7f7;
  --color-base-05: #f0f0f0;
  --color-base-10: #e7e7e7;
  --color-base-20: #e0e0e0;
  --color-base-25: #dadada;
  --color-base-30: #d4d4d4;
  --color-base-35: #c7c7c7;
  --color-base-50: #aaaaaa;
  --color-base-70: #4f4f4f;
  --color-blue: #2471d4;
  --color-blue-rgb: 36, 113, 212;
  --color-cyan: #18ada8;
  --color-cyan-rgb: 42, 206, 201;
  --color-green: #0fa50a;
  --color-green-rgb: 47, 206, 42;
  --color-orange: #d57929;
  --color-orange-rgb: 224, 131, 48;
  --color-pink: #e0308d;
  --color-pink-rgb: 224, 48, 141;
  --color-purple: #8330e0;
  --color-purple-rgb: 131, 48, 224;
  --color-red: #e03035;
  --color-red-rgb: 224, 48, 53;
  --color-yellow: #b6b11c;
  --color-yellow-rgb: 206, 201, 42;
  --dark: var(--text-muted);
  --darkgray: var(--text-muted);
  --dataview-table-even-bg-color: #e7e7e7;
  --dataview-table-odd-bg-color: #f0f0f0;
  --dataview-table-row-hover: 258, 88%, 66%;
  --dataview-table-tbody-size: 13.12px;
  --dataview-table-thead-size: 14.08px;
  --divider-color: #dadada;
  --divider-color-hover: rgba(138, 92, 245, 0.5);
  --dropdown-background: #f7f7f7;
  --dropdown-background-hover: #e7e7e7;
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgba(138, 92, 245, 0.5);
  --embed-max-height: 750px;
  --file-header-background: #f7f7f7;
  --file-header-background-focused: #f7f7f7;
  --file-header-font-weight: 700;
  --flair-background: #f7f7f7;
  --font-editor-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
  --footnote-divider-color: #dadada;
  --footnote-id-color: #4f4f4f;
  --footnote-id-color-no-occurrences: #aaaaaa;
  --footnote-input-background-active: rgba(138, 92, 245, 0.08);
  --graph-line: #c7c7c7;
  --graph-node: #4f4f4f;
  --graph-node-attachment: #b6b11c;
  --graph-node-focused: #7e55dd;
  --graph-node-tag: #0fa50a;
  --graph-node-unresolved: #aaaaaa;
  --gray: var(--text-muted);
  --h-hover-transparency: 25%;
  --h-transparency: 12%;
  --h1-color: #2471d4;
  --h1-size: 1.802em;
  --h2-color: #8330e0;
  --h2-size: 1.602em;
  --h2-weight: 700;
  --h3-color: #e0308d;
  --h3-size: 1.424em;
  --h3-weight: 700;
  --h4-color: #e03035;
  --h4-size: 1.266em;
  --h4-weight: 700;
  --h5-color: #d57929;
  --h5-size: 1.125em;
  --h5-weight: 700;
  --h6-color: #b6b11c;
  --h6-weight: 700;
  --heading-formatting: #aaaaaa;
  --highlight: var(--text-highlight-bg);
  --hr-color: #dadada;
  --icon-color: #4f4f4f;
  --icon-color-focused: rgb(138, 92, 245);
  --icon-color-hover: rgb(138, 92, 245);
  --icon-opacity: 0.8;
  --inline-title-color: #222222;
  --inline-title-size: 1.92em;
  --input-date-separator: #aaaaaa;
  --input-placeholder-color: #aaaaaa;
  --interactive-hover: #e7e7e7;
  --interactive-normal: #f7f7f7;
  --italic-color: #0fa50a;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #7e55dd;
  --link-color-hover: rgba(126, 85, 221, 0.825);
  --link-external-color: #0071e3;
  --link-external-color-hover: #0764c1;
  --link-unresolved-color: #7e55dd;
  --link-unresolved-filter: grayscale(25%);
  --list-indent: 2em;
  --list-marker-color: #aaaaaa;
  --list-marker-color-collapsed: #aaaaaa;
  --list-marker-color-hover: #4f4f4f;
  --live-heading-bg-bottom: 0.4375rem;
  --live-heading-bg-top: 0.5625rem;
  --live-heading-padding: 0.84375rem;
  --menu-background: #f0f0f0;
  --metadata-background: #e7e7e7;
  --metadata-border-color: #dadada;
  --metadata-border-radius: 8px;
  --metadata-divider-color: #dadada;
  --metadata-input-background-active: rgba(138, 92, 245, 0.08);
  --metadata-label-background-active: rgba(138, 92, 245, 0.08);
  --metadata-label-text-color: #4f4f4f;
  --metadata-label-text-color-hover: #4f4f4f;
  --metadata-property-background-active: rgba(138, 92, 245, 0.08);
  --metadata-property-box-shadow-focus: 0 0 0 2px #c7c7c7;
  --metadata-property-radius: 4px;
  --metadata-property-radius-focus: 4px;
  --metadata-property-radius-hover: 4px;
  --modal-background: #f7f7f7;
  --nav-collapse-icon-color: #aaaaaa;
  --nav-collapse-icon-color-collapsed: #aaaaaa;
  --nav-heading-color-collapsed: #aaaaaa;
  --nav-heading-color-collapsed-hover: #4f4f4f;
  --nav-item-background-active: rgba(138, 92, 245, 0.08);
  --nav-item-background-hover: rgba(138, 92, 245, 0.08);
  --nav-item-color: #4f4f4f;
  --nav-item-color-active: rgba(138, 92, 245, 0.95);
  --nav-item-color-highlighted: #7e55dd;
  --nav-item-color-hover: rgba(138, 92, 245, 0.775);
  --nav-item-color-selected: rgba(138, 92, 245, 0.95);
  --nav-item-weight: 500;
  --nav-item-weight-hover: 500;
  --nav-tag-color: #aaaaaa;
  --nav-tag-color-active: #4f4f4f;
  --nav-tag-color-hover: #4f4f4f;
  --p-spacing-empty: 0.1rem;
  --pdf-background: #f7f7f7;
  --pdf-page-background: #f7f7f7;
  --pdf-sidebar-background: #f7f7f7;
  --pill-border-color: #dadada;
  --pill-color: #4f4f4f;
  --pill-color-remove: #aaaaaa;
  --pill-color-remove-hover: #7e55dd;
  --prompt-background: #f7f7f7;
  --raised-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent));
  --ribbon-background: #f0f0f0;
  --ribbon-background-collapsed: #f7f7f7;
  --scrollbar-active-thumb-bg: rgba(138, 92, 245, 0.5);
  --search-clear-button-color: #4f4f4f;
  --search-icon-color: #4f4f4f;
  --search-result-background: #f7f7f7;
  --secondary: var(--text-accent);
  --setting-items-background: #e7e7e7;
  --setting-items-border-color: #dadada;
  --slider-thumb-border-color: rgba(138, 92, 245, 0.75);
  --slider-thumb-border-width: 2px;
  --slider-track-background: rgba(138, 92, 245, 0.5);
  --status-bar-background: #f0f0f0;
  --status-bar-border-color: #dadada;
  --status-bar-text-color: #4f4f4f;
  --suggestion-background: #f7f7f7;
  --sync-avatar-color-1: #e03035;
  --sync-avatar-color-2: #d57929;
  --sync-avatar-color-3: #b6b11c;
  --sync-avatar-color-4: #0fa50a;
  --sync-avatar-color-5: #18ada8;
  --sync-avatar-color-6: #2471d4;
  --sync-avatar-color-7: #8330e0;
  --sync-avatar-color-8: #e0308d;
  --tab-background-active: #f7f7f7;
  --tab-container-background: #f0f0f0;
  --tab-font-weight: 700;
  --tab-outline-color: #dadada;
  --tab-stacked-font-weight: 700;
  --tab-switcher-background: #f0f0f0;
  --tab-switcher-menubar-background: linear-gradient(to top, #f0f0f0, transparent);
  --tab-text-color: #aaaaaa;
  --tab-text-color-active: #4f4f4f;
  --tab-text-color-focused: #4f4f4f;
  --tab-text-color-focused-active: #4f4f4f;
  --tab-text-color-focused-active-current: rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: #7e55dd;
  --table-add-button-border-color: #dadada;
  --table-background: #f0f0f0;
  --table-border-color: #dadada;
  --table-column-alt-background: #f0f0f0;
  --table-drag-handle-color: #aaaaaa;
  --table-header-background: #f0f0f0;
  --table-header-border-color: #dadada;
  --table-row-alt-background: #f0f0f0;
  --table-row-alt-background-hover: #f0f0f0;
  --table-row-background-hover: #f0f0f0;
  --tag-background: rgba(138, 92, 245, 0.125);
  --tag-background-hover: rgba(138, 92, 245, 0.1);
  --tag-color: rgba(138, 92, 245, 0.925);
  --tag-color-hover: rgba(138, 92, 245, 0.95);
  --tag-padding-x: 0.7em;
  --tag-padding-y: 0.3em;
  --tag-radius: 1em;
  --tertiary: var(--text-accent-hover);
  --text-accent: #7e55dd;
  --text-accent-hover: rgba(126, 85, 221, 0.825);
  --text-error: #e03035;
  --text-faint: #aaaaaa;
  --text-highlight-bg: rgba(236, 235, 0, 0.4);
  --text-highlight-bg-rgb: 236, 235, 0;
  --text-muted: #4f4f4f;
  --text-success: #0fa50a;
  --text-warning: #d57929;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #f0f0f0;
  --titlebar-background-focused: #f0f0f0;
  --titlebar-border-color: #dadada;
  --titlebar-text-color: #4f4f4f;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(240, 240, 240);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(247, 247, 247);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 240, 240);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(218, 218, 218);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(240, 240, 240);
  border-left-color: rgb(218, 218, 218);
}

body div#quartz-root {
  background-color: rgb(247, 247, 247);
}`,
    typography: `body .page article p > b, b {
  color: rgb(24, 173, 168);
  outline: rgb(24, 173, 168) none 0px;
  text-decoration: rgb(24, 173, 168);
  text-decoration-color: rgb(24, 173, 168);
}

body .page article p > em, em {
  color: rgb(15, 165, 10);
  outline: rgb(15, 165, 10) none 0px;
  text-decoration: rgb(15, 165, 10);
  text-decoration-color: rgb(15, 165, 10);
}

body .page article p > i, i {
  color: rgb(15, 165, 10);
  outline: rgb(15, 165, 10) none 0px;
  text-decoration: rgb(15, 165, 10);
  text-decoration-color: rgb(15, 165, 10);
}

body .page article p > strong, strong {
  color: rgb(24, 173, 168);
  outline: rgb(24, 173, 168) none 0px;
  text-decoration: rgb(24, 173, 168);
  text-decoration-color: rgb(24, 173, 168);
}

body .text-highlight {
  background-color: rgba(236, 235, 0, 0.4);
}

body p {
  color: rgb(79, 79, 79);
  outline: rgb(79, 79, 79) none 0px;
  text-decoration: rgb(79, 79, 79);
  text-decoration-color: rgb(79, 79, 79);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 113, 227);
  outline: rgb(0, 113, 227) none 0px;
  text-decoration: underline rgb(0, 113, 227);
  text-decoration-color: rgb(0, 113, 227);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(126, 85, 221);
  outline: rgb(126, 85, 221) none 0px;
  text-decoration: underline rgb(126, 85, 221);
  text-decoration-color: rgb(126, 85, 221);
}

body a.internal.broken {
  color: rgb(126, 85, 221);
  filter: grayscale(0.25);
  outline: rgb(126, 85, 221) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(247, 247, 247);
}

body ul.overflow {
  background-color: rgb(247, 247, 247);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body blockquote {
  background-color: rgba(138, 92, 245, 0.05);
  padding-bottom: 20px;
  padding-top: 12px;
}`,
    tables: `body tbody tr:nth-child(even) {
  background-color: rgb(240, 240, 240);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(240, 240, 240);
}

body td {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

body th {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

body tr {
  background-color: rgb(240, 240, 240);
}`,
    code: `body code {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre > code > [data-line] {
  border-left-color: rgb(182, 177, 28);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(182, 177, 28);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(182, 177, 28);
  border-left-color: rgb(182, 177, 28);
  border-right-color: rgb(182, 177, 28);
  border-top-color: rgb(182, 177, 28);
}

body pre > code, pre:has(> code) {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
}

body .transclude {
  border-left-color: rgba(138, 92, 245, 0.5);
}

body .transclude-inner {
  border-left-color: rgba(138, 92, 245, 0.5);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(79, 79, 79);
  text-decoration: line-through rgb(79, 79, 79);
  text-decoration-color: rgb(79, 79, 79);
}

body input[type=checkbox] {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
}

body .callout[data-callout="abstract"] {
  --callout-color: 42, 206, 201;
  background-color: rgba(42, 206, 201, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(42, 206, 201, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 224, 48, 53;
  background-color: rgba(224, 48, 53, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 48, 53, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  --callout-color: 224, 48, 53;
  background-color: rgba(224, 48, 53, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 48, 53, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  --callout-color: 131, 48, 224;
  background-color: rgba(131, 48, 224, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(131, 48, 224, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  --callout-color: 224, 48, 53;
  background-color: rgba(224, 48, 53, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 48, 53, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  --callout-color: 36, 113, 212;
  background-color: rgba(36, 113, 212, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(36, 113, 212, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  --callout-color: 36, 113, 212;
  background-color: rgba(36, 113, 212, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(36, 113, 212, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 131, 48;
  background-color: rgba(224, 131, 48, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 131, 48, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  --callout-color: 47, 206, 42;
  background-color: rgba(47, 206, 42, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(47, 206, 42, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  --callout-color: 42, 206, 201;
  background-color: rgba(42, 206, 201, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(42, 206, 201, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  --callout-color: 36, 113, 212;
  background-color: rgba(36, 113, 212, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(36, 113, 212, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  --callout-color: 224, 131, 48;
  background-color: rgba(224, 131, 48, 0.1);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(224, 131, 48, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

body .search > .search-container > .search-space {
  background-color: rgb(247, 247, 247);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.08);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(240, 240, 240);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(138, 92, 245, 0.08);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.08);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.125);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

body a.internal.tag-link::before {
  color: rgba(138, 92, 245, 0.925);
}

body h1 {
  color: rgb(36, 113, 212);
}

body h2 {
  color: rgb(131, 48, 224);
}

body h3 {
  color: rgb(224, 48, 141);
}

body h4 {
  color: rgb(224, 48, 53);
}

body h5 {
  color: rgb(213, 121, 41);
}

body h6 {
  color: rgb(182, 177, 28);
}

body hr {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
}`,
    scrollbars: `body .callout {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(36, 113, 212, 0.25);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-corner {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-track {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(79, 79, 79);
  font-weight: 500;
  text-decoration: rgb(79, 79, 79);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(79, 79, 79);
  font-weight: 500;
  text-decoration: rgb(79, 79, 79);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(79, 79, 79);
  text-decoration: rgb(79, 79, 79);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(138, 92, 245, 0.08);
  border-bottom-color: rgba(138, 92, 245, 0.95);
  border-left-color: rgba(138, 92, 245, 0.95);
  border-right-color: rgba(138, 92, 245, 0.95);
  border-top-color: rgba(138, 92, 245, 0.95);
  color: rgba(138, 92, 245, 0.95);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}`,
    footer: `body footer {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(79, 79, 79);
}

body footer ul li a {
  color: rgb(79, 79, 79);
  text-decoration: rgb(79, 79, 79);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(79, 79, 79);
  text-decoration: rgb(79, 79, 79);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(79, 79, 79);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(79, 79, 79);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(79, 79, 79);
  text-decoration: rgb(79, 79, 79);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}

body .darkmode svg {
  color: rgb(79, 79, 79);
  stroke: rgb(79, 79, 79);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}

body .breadcrumb-element p {
  color: rgb(170, 170, 170);
}`,
    misc: `body .metadata {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(79, 79, 79);
}

body .metadata-properties {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}

body .navigation-progress {
  background-color: rgb(240, 240, 240);
}

body input[type=text] {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}

body kbd {
  background-color: rgb(231, 231, 231);
}`,
  },
};
