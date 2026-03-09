import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ethereon",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 174;
  --accent-l: 48%;
  --accent-s: 20%;
  --background-modifier-active-hover: rgba(98, 147, 142, 0.1);
  --background-modifier-border: #444648;
  --background-modifier-border-focus: #6c6c6e;
  --background-modifier-border-hover: #626365;
  --background-modifier-error: #B65E67;
  --background-modifier-error-hover: #B65E67;
  --background-modifier-form-field: #4e4f51;
  --background-modifier-form-field-hover: #4e4f51;
  --background-modifier-hover: rgba(29, 31, 33, 0.5);
  --background-modifier-success: #88BC7D;
  --background-modifier-success-rgb: 136, 188, 125;
  --background-primary: #1d1f21;
  --background-primary-alt: #27292b;
  --background-secondary: #313234;
  --background-secondary-alt: #444648;
  --bases-cards-background: #1d1f21;
  --bases-cards-cover-background: #27292b;
  --bases-cards-shadow: 0 0 0 1px #444648;
  --bases-cards-shadow-hover: 0 0 0 1px #626365;
  --bases-embed-border-color: #444648;
  --bases-group-heading-property-color: #a7a6a8;
  --bases-table-border-color: #444648;
  --bases-table-cell-background-active: #1d1f21;
  --bases-table-cell-background-disabled: #27292b;
  --bases-table-cell-background-selected: rgba(98, 147, 142, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #6c6c6e;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(98, 147, 142);
  --bases-table-group-background: #27292b;
  --bases-table-header-background: #1d1f21;
  --bases-table-header-background-hover: rgba(29, 31, 33, 0.5);
  --bases-table-header-color: #a7a6a8;
  --bases-table-summary-background: #1d1f21;
  --bases-table-summary-background-hover: rgba(29, 31, 33, 0.5);
  --blockquote-border-color: rgb(98, 147, 142);
  --blockquote-border-thickness: 4px;
  --blur-background: color-mix(in srgb, #58595b 65%, transparent) linear-gradient(#58595b, color-mix(in srgb, #58595b 65%, transparent));
  --callout-example: 156, 151, 183;
  --callout-important: 94, 141, 135;
  --callout-success: 136, 188, 125;
  --callout-summary: 94, 141, 135;
  --callout-tip: 94, 141, 135;
  --canvas-background: #1d1f21;
  --canvas-card-label-color: #808082;
  --canvas-color-3: 188, 156, 98;
  --canvas-color-4: 136, 188, 125;
  --canvas-color-5: 94, 141, 135;
  --canvas-color-6: 156, 151, 183;
  --canvas-dot-pattern: #58595b;
  --caret-color: #e2e0d2;
  --checkbox-border-color: #808082;
  --checkbox-border-color-hover: rgb(98, 147, 142);
  --checkbox-border-color-unchecked: #808082;
  --checkbox-color: rgb(98, 147, 142);
  --checkbox-color-hover: rgb(117, 163, 156);
  --checkbox-marker-color: #1d1f21;
  --checkbox-radius: 10px;
  --checklist-done-color: #a7a6a8;
  --code-background: #27292b;
  --code-border-color: #444648;
  --code-bracket-background: rgba(29, 31, 33, 0.5);
  --code-comment: #808082;
  --code-function: #BCAB62;
  --code-important: #BC8762;
  --code-keyword: #AE7499;
  --code-normal: #e2e0d2;
  --code-operator: #B65E67;
  --code-property: #5E8D87;
  --code-punctuation: #a7a6a8;
  --code-size: --font-normal;
  --code-string: #88BC7D;
  --code-tag: #B65E67;
  --code-value: #9C97B7;
  --collapse-icon-color: #808082;
  --collapse-icon-color-collapsed: rgb(117, 163, 156);
  --color-accent: rgb(98, 147, 142);
  --color-accent-1: rgb(117, 163, 156);
  --color-accent-2: rgb(138, 178, 171);
  --color-accent-hsl: 174, 20%, 48%;
  --color-base-00: #1d1f21;
  --color-base-05: #27292b;
  --color-base-10: #313234;
  --color-base-100: #e2e0d2;
  --color-base-20: #444648;
  --color-base-25: #4e4f51;
  --color-base-30: #58595b;
  --color-base-35: #626365;
  --color-base-40: #6c6c6e;
  --color-base-50: #808082;
  --color-base-60: #939395;
  --color-base-70: #a7a6a8;
  --color-blue: #C4CAD6;
  --color-blue_rgb: 196, 202, 214;
  --color-cyan: #5E8D87;
  --color-cyan-rgb: 94, 141, 135;
  --color-green: #88BC7D;
  --color-green-rgb: 136, 188, 125;
  --color-orange: #BC8762;
  --color-orange_rgb: 188, 135, 98;
  --color-pink: #AE7499;
  --color-pink-rgb: 174, 116, 153;
  --color-purple: #9C97B7;
  --color-purple-rgb: 156, 151, 183;
  --color-red: #B65E67;
  --color-red_rgb: 182, 94, 103;
  --color-teal: #5E8D87;
  --color-teal-rgb: 94, 141, 135;
  --color-yellow: #BCAB62;
  --color-yellow-rgb: 188, 156, 98;
  --divider-color: #444648;
  --divider-color-hover: rgb(98, 147, 142);
  --dropdown-background: #58595b;
  --dropdown-background-hover: #626365;
  --embed-block-shadow-hover: 0 0 0 1px #444648, inset 0 0 0 1px #444648;
  --embed-border-start: 2px solid rgb(98, 147, 142);
  --file-header-background: #1d1f21;
  --file-header-background-focused: #1d1f21;
  --flair-background: #58595b;
  --flair-color: #e2e0d2;
  --font-mermaid: "Inter", sans-serif;
  --font-monospace: "Courier New", monospace;
  --font-text: "Inter", sans-serif;
  --footnote-divider-color: #444648;
  --footnote-id-color: #a7a6a8;
  --footnote-id-color-no-occurrences: #808082;
  --footnote-input-background-active: rgba(29, 31, 33, 0.5);
  --graph-line: #626365;
  --graph-node: #a7a6a8;
  --graph-node-attachment: #BCAB62;
  --graph-node-focused: rgb(117, 163, 156);
  --graph-node-tag: #88BC7D;
  --graph-node-unresolved: #808082;
  --graph-text: #e2e0d2;
  --h1-color: #B65E67;
  --h1-weight: 300;
  --h2-color: #BC8762;
  --h2-weight: 300;
  --h3-color: #BCAB62;
  --h3-weight: 300;
  --h4-color: #88BC7D;
  --h4-weight: 300;
  --h5-color: #C4CAD6;
  --h5-weight: 300;
  --h6-color: #9C97B7;
  --h6-weight: 300;
  --heading-formatting: #808082;
  --heading-spacing: 1.5rem;
  --hr-color: #444648;
  --hr-thickness: 1px;
  --icon-color: #a7a6a8;
  --icon-color-active: rgb(117, 163, 156);
  --icon-color-focused: #e2e0d2;
  --icon-color-hover: #a7a6a8;
  --indentation-guide-color: rgba(226, 224, 226, 0.12);
  --indentation-guide-color-active: rgba(226, 224, 226, 0.3);
  --indentation-guide-width: 2px;
  --inline-title-color: #808082;
  --inline-title-size: 1.318em;
  --inline-title-style: italic;
  --inline-title-weight: 50;
  --input-date-separator: #808082;
  --input-placeholder-color: #808082;
  --interactive-accent: rgb(98, 147, 142);
  --interactive-accent-hover: rgb(117, 163, 156);
  --interactive-accent-hsl: 174, 20%, 48%;
  --interactive-hover: #626365;
  --interactive-normal: #58595b;
  --link-color: rgb(117, 163, 156);
  --link-color-hover: rgb(138, 178, 171);
  --link-external-color: rgb(117, 163, 156);
  --link-external-color-hover: rgb(138, 178, 171);
  --link-unresolved-color: rgb(117, 163, 156);
  --link-unresolved-decoration-color: rgba(98, 147, 142, 0.3);
  --list-bullet-radius: 40%;
  --list-bullet-size: 0.4em;
  --list-marker-color: #808082;
  --list-marker-color-collapsed: rgb(117, 163, 156);
  --list-marker-color-hover: #a7a6a8;
  --menu-background: #313234;
  --menu-border-color: #626365;
  --metadata-border-color: #444648;
  --metadata-divider-color: #444648;
  --metadata-input-background-active: rgba(29, 31, 33, 0.5);
  --metadata-input-text-color: #e2e0d2;
  --metadata-label-background-active: rgba(29, 31, 33, 0.5);
  --metadata-label-text-color: #a7a6a8;
  --metadata-label-text-color-hover: #a7a6a8;
  --metadata-property-background-active: rgba(29, 31, 33, 0.5);
  --metadata-property-box-shadow-focus: 0 0 0 2px #6c6c6e;
  --metadata-property-box-shadow-hover: 0 0 0 1px #626365;
  --modal-background: #1d1f21;
  --modal-border-color: #58595b;
  --mono-rgb-0: 29, 31, 33;
  --mono-rgb-100: 226, 224, 226;
  --nav-collapse-icon-color: #808082;
  --nav-collapse-icon-color-collapsed: #808082;
  --nav-heading-color: #e2e0d2;
  --nav-heading-color-collapsed: #808082;
  --nav-heading-color-collapsed-hover: #a7a6a8;
  --nav-heading-color-hover: #e2e0d2;
  --nav-indentation-guide-color: rgba(226, 224, 226, 0.12);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgba(29, 31, 33, 0.5);
  --nav-item-background-hover: rgba(29, 31, 33, 0.5);
  --nav-item-background-selected: rgba(98, 147, 142, 0.15);
  --nav-item-color: #a7a6a8;
  --nav-item-color-active: #e2e0d2;
  --nav-item-color-highlighted: rgb(117, 163, 156);
  --nav-item-color-hover: #e2e0d2;
  --nav-item-color-selected: #e2e0d2;
  --nav-tag-color: #808082;
  --nav-tag-color-active: #a7a6a8;
  --nav-tag-color-hover: #a7a6a8;
  --pdf-background: #1d1f21;
  --pdf-page-background: #1d1f21;
  --pdf-shadow: 0 0 0 1px #444648;
  --pdf-sidebar-background: #1d1f21;
  --pdf-thumbnail-shadow: 0 0 0 1px #444648;
  --pill-border-color: #444648;
  --pill-border-color-hover: #626365;
  --pill-color: #a7a6a8;
  --pill-color-hover: #e2e0d2;
  --pill-color-remove: #808082;
  --pill-color-remove-hover: rgb(117, 163, 156);
  --prompt-background: #1d1f21;
  --prompt-border-color: #6c6c6e;
  --raised-background: color-mix(in srgb, #58595b 65%, transparent) linear-gradient(#58595b, color-mix(in srgb, #58595b 65%, transparent));
  --ribbon-background: #313234;
  --ribbon-background-collapsed: #1d1f21;
  --scrollbar-active-thumb-bg: rgba(226, 224, 226, 0.2);
  --scrollbar-bg: rgba(226, 224, 226, 0.05);
  --scrollbar-thumb-bg: rgba(226, 224, 226, 0.1);
  --search-clear-button-color: #a7a6a8;
  --search-icon-color: #a7a6a8;
  --search-result-background: #1d1f21;
  --setting-group-heading-color: #e2e0d2;
  --setting-items-background: #27292b;
  --setting-items-border-color: #444648;
  --slider-thumb-border-color: #626365;
  --slider-track-background: #444648;
  --status-bar-background: #313234;
  --status-bar-border-color: #444648;
  --status-bar-border-width: 0;
  --status-bar-text-color: #a7a6a8;
  --suggestion-background: #1d1f21;
  --swatch-shadow: inset 0 0 0 1px rgba(226, 224, 226, 0.15);
  --sync-avatar-color-1: #B65E67;
  --sync-avatar-color-2: #BC8762;
  --sync-avatar-color-3: #BCAB62;
  --sync-avatar-color-4: #88BC7D;
  --sync-avatar-color-5: #5E8D87;
  --sync-avatar-color-6: #C4CAD6;
  --sync-avatar-color-7: #9C97B7;
  --sync-avatar-color-8: #AE7499;
  --tab-background-active: #1d1f21;
  --tab-container-background: #313234;
  --tab-divider-color: #626365;
  --tab-outline-color: #444648;
  --tab-switcher-background: #313234;
  --tab-switcher-menubar-background: linear-gradient(to top, #313234, transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(226, 224, 226, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(98, 147, 142);
  --tab-text-color: #808082;
  --tab-text-color-active: #a7a6a8;
  --tab-text-color-focused: #a7a6a8;
  --tab-text-color-focused-active: #a7a6a8;
  --tab-text-color-focused-active-current: #e2e0d2;
  --tab-text-color-focused-highlighted: rgb(117, 163, 156);
  --table-add-button-border-color: #444648;
  --table-border-color: #444648;
  --table-drag-handle-background-active: rgb(98, 147, 142);
  --table-drag-handle-color: #808082;
  --table-header-border-color: #444648;
  --table-header-color: #e2e0d2;
  --table-selection: rgba(98, 147, 142, 0.1);
  --table-selection-border-color: rgb(98, 147, 142);
  --tag-background: rgba(98, 147, 142, 0.1);
  --tag-background-hover: rgba(98, 147, 142, 0.2);
  --tag-border-color: rgba(98, 147, 142, 0.15);
  --tag-border-color-hover: rgba(98, 147, 142, 0.15);
  --tag-color: rgb(117, 163, 156);
  --tag-color-hover: rgb(117, 163, 156);
  --text-accent: rgb(117, 163, 156);
  --text-accent-hover: rgb(138, 178, 171);
  --text-error: #B65E67;
  --text-faint: #808082;
  --text-highlight-bg: rgba(188, 156, 98, 0.4);
  --text-highlight-bg-rgb: 188, 156, 98;
  --text-muted: #a7a6a8;
  --text-normal: #e2e0d2;
  --text-selection: rgba(98, 147, 142, 0.33);
  --text-success: #88BC7D;
  --text-warning: #BC8762;
  --titlebar-background: #313234;
  --titlebar-background-focused: #444648;
  --titlebar-border-color: #444648;
  --titlebar-text-color: #a7a6a8;
  --titlebar-text-color-focused: #e2e0d2;
  --vault-profile-color: #e2e0d2;
  --vault-profile-color-hover: #e2e0d2;
  --workspace-background-translucent: rgba(29, 31, 33, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 50, 52);
  color: rgb(226, 224, 210);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 31, 33);
  color: rgb(226, 224, 210);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(49, 50, 52);
  color: rgb(226, 224, 210);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(68, 70, 72);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 50, 52);
  border-left-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
}

body div#quartz-root {
  background-color: rgb(29, 31, 33);
  color: rgb(226, 224, 210);
}`,
    typography: `body .page article p > b, b {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body .page article p > em, em {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body .page article p > i, i {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body .page article p > strong, strong {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body .text-highlight {
  background-color: rgba(188, 156, 98, 0.4);
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body del {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration: line-through rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body p {
  color: rgb(167, 166, 168);
  outline: rgb(167, 166, 168) none 0px;
  text-decoration: rgb(167, 166, 168);
  text-decoration-color: rgb(167, 166, 168);
}`,
    links: `body a.external, footer a {
  color: rgb(117, 164, 157);
  font-family: Inter, sans-serif;
  outline: rgb(117, 164, 157) none 0px;
  text-decoration: underline rgb(117, 164, 157);
  text-decoration-color: rgb(117, 164, 157);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(117, 164, 157);
  font-family: Inter, sans-serif;
  outline: rgb(117, 164, 157) none 0px;
  text-decoration: underline rgb(117, 164, 157);
  text-decoration-color: rgb(117, 164, 157);
}

body a.internal.broken {
  color: rgb(117, 164, 157);
  font-family: Inter, sans-serif;
  outline: rgb(117, 164, 157) none 0px;
  text-decoration: underline rgba(98, 147, 142, 0.3);
  text-decoration-color: rgba(98, 147, 142, 0.3);
}`,
    lists: `body dd {
  color: rgb(226, 224, 210);
}

body dt {
  color: rgb(226, 224, 210);
}

body ol > li {
  color: rgb(226, 224, 210);
}

body ol.overflow {
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body ul > li {
  color: rgb(226, 224, 210);
}

body ul.overflow {
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(128, 128, 130);
  text-decoration: rgb(128, 128, 130);
}

body blockquote {
  font-family: Inter, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body table {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
  font-family: "Courier New", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
}

body pre > code > [data-line] {
  border-left-color: rgb(188, 171, 98);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(188, 171, 98);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(188, 171, 98);
  border-left-color: rgb(188, 171, 98);
  border-right-color: rgb(188, 171, 98);
  border-top-color: rgb(188, 171, 98);
}

body pre > code, pre:has(> code) {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
}

body pre:has(> code) {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
}`,
    images: `body audio {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body figcaption {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
}

body figure {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body img {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body video {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    embeds: `body .file-embed {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
}

body .footnotes {
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

body .transclude {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(98, 147, 142);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body .transclude-inner {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(98, 147, 142);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Inter, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Inter, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(167, 166, 168);
  text-decoration: line-through rgb(167, 166, 168);
  text-decoration-color: rgb(167, 166, 168);
}

body input[type=checkbox] {
  border-bottom-color: rgb(128, 128, 130);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(128, 128, 130);
  border-right-color: rgb(128, 128, 130);
  border-top-color: rgb(128, 128, 130);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='*'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='-'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='/'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='>'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='?'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='I'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='S'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='b'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='c'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='d'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='f'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='i'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='k'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='l'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='p'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='u'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body li.task-list-item[data-task='w'] {
  color: rgb(226, 224, 210);
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  --callout-color: 94, 141, 135;
  background-color: rgba(94, 141, 135, 0.1);
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 156, 151, 183;
  background-color: rgba(156, 151, 183, 0.1);
  border-bottom-color: rgba(156, 151, 183, 0.25);
  border-left-color: rgba(156, 151, 183, 0.25);
  border-right-color: rgba(156, 151, 183, 0.25);
  border-top-color: rgba(156, 151, 183, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 136, 188, 125;
  background-color: rgba(136, 188, 125, 0.1);
  border-bottom-color: rgba(136, 188, 125, 0.25);
  border-left-color: rgba(136, 188, 125, 0.25);
  border-right-color: rgba(136, 188, 125, 0.25);
  border-top-color: rgba(136, 188, 125, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 94, 141, 135;
  background-color: rgba(94, 141, 135, 0.1);
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(78, 79, 81);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
}

body .search > .search-container > .search-space {
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(108, 108, 110);
  border-left-color: rgb(108, 108, 110);
  border-right-color: rgb(108, 108, 110);
  border-top-color: rgb(108, 108, 110);
}

body .search > .search-container > .search-space > * {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(226, 224, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(226, 224, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(98, 147, 142, 0.33);
  color: rgb(226, 224, 210);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(108, 108, 110);
  border-left-color: rgb(108, 108, 110);
  border-right-color: rgb(108, 108, 110);
  border-top-color: rgb(108, 108, 110);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 50, 52);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(98, 147, 142, 0.33);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(98, 147, 142, 0.33);
  color: rgb(226, 224, 210);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(98, 147, 142, 0.1);
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(117, 164, 157);
}

body h1 {
  color: rgb(182, 94, 103);
  font-family: Inter, sans-serif;
}

body h2 {
  color: rgb(188, 135, 98);
  font-family: Inter, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(128, 128, 130);
  font-family: Inter, sans-serif;
}

body h3 {
  color: rgb(188, 171, 98);
  font-family: Inter, sans-serif;
}

body h4 {
  color: rgb(136, 188, 125);
  font-family: Inter, sans-serif;
}

body h5 {
  color: rgb(196, 202, 214);
  font-family: Inter, sans-serif;
}

body h6 {
  color: rgb(156, 151, 183);
  font-family: Inter, sans-serif;
}

body hr {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(167, 166, 168);
  text-decoration: rgb(167, 166, 168);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(167, 166, 168);
  text-decoration: rgb(167, 166, 168);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(167, 166, 168);
  text-decoration: rgb(167, 166, 168);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(29, 31, 33, 0.5);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
}`,
    footer: `body footer {
  background-color: rgb(49, 50, 52);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-left-width: 0px;
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  border-top-width: 0px;
  color: rgb(167, 166, 168);
}

body footer ul li a {
  color: rgb(167, 166, 168);
  text-decoration: rgb(167, 166, 168);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(226, 224, 210);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(167, 166, 168);
  text-decoration: rgb(167, 166, 168);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(167, 166, 168);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body li.section-li > .section .meta {
  color: rgb(167, 166, 168);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(167, 166, 168);
  text-decoration: rgb(167, 166, 168);
}

body ul.section-ul {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
}

body .darkmode svg {
  color: rgb(167, 166, 168);
  stroke: rgb(167, 166, 168);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
}

body .breadcrumb-element p {
  color: rgb(128, 128, 130);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

body .metadata {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(167, 166, 168);
  font-family: Inter, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
  font-family: Inter, sans-serif;
}

body .navigation-progress {
  background-color: rgb(49, 50, 52);
}

body .page-header h2.page-title {
  color: rgb(226, 224, 210);
}

body abbr {
  color: rgb(226, 224, 210);
  text-decoration: underline dotted rgb(226, 224, 210);
}

body details {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body input[type=text] {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
}

body kbd {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
  font-family: "Courier New", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

body sub {
  color: rgb(226, 224, 210);
}

body summary {
  color: rgb(226, 224, 210);
}

body sup {
  color: rgb(226, 224, 210);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 174;
  --accent-l: 48%;
  --accent-s: 20%;
  --background-modifier-active-hover: rgba(98, 147, 142, 0.1);
  --background-modifier-border: #b1b0b2;
  --background-modifier-border-focus: #89898b;
  --background-modifier-border-hover: #939395;
  --background-modifier-error: #933942;
  --background-modifier-error-hover: #933942;
  --background-modifier-form-field: #d8d6d8;
  --background-modifier-form-field-hover: #d8d6d8;
  --background-modifier-hover: rgba(226, 224, 226, 0.5);
  --background-modifier-success: #3F7F31;
  --background-modifier-success-rgb: 63, 127, 49;
  --background-primary: #d8d6d8;
  --background-primary-alt: #cecdcf;
  --background-secondary: #c4c3c5;
  --background-secondary-alt: #b1b0b2;
  --bases-cards-background: #d8d6d8;
  --bases-cards-cover-background: #cecdcf;
  --bases-cards-shadow: 0 0 0 1px #b1b0b2;
  --bases-cards-shadow-hover: 0 0 0 1px #939395;
  --bases-embed-border-color: #b1b0b2;
  --bases-group-heading-property-color: #4e4f51;
  --bases-table-border-color: #b1b0b2;
  --bases-table-cell-background-active: #d8d6d8;
  --bases-table-cell-background-disabled: #cecdcf;
  --bases-table-cell-background-selected: rgba(98, 147, 142, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #89898b;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(108, 157, 151);
  --bases-table-group-background: #cecdcf;
  --bases-table-header-background: #d8d6d8;
  --bases-table-header-background-hover: rgba(226, 224, 226, 0.5);
  --bases-table-header-color: #4e4f51;
  --bases-table-summary-background: #d8d6d8;
  --bases-table-summary-background-hover: rgba(226, 224, 226, 0.5);
  --blockquote-border-color: rgb(108, 157, 151);
  --blockquote-border-thickness: 4px;
  --blur-background: color-mix(in srgb, #d8d6d8 65%, transparent) linear-gradient(#d8d6d8, color-mix(in srgb, #d8d6d8 65%, transparent));
  --callout-example: 59, 49, 105;
  --callout-important: 94, 141, 135;
  --callout-success: 63, 127, 49;
  --callout-summary: 94, 141, 135;
  --callout-tip: 94, 141, 135;
  --canvas-background: #d8d6d8;
  --canvas-card-label-color: #767678;
  --canvas-color-3: 152, 119, 59;
  --canvas-color-4: 63, 127, 49;
  --canvas-color-5: 94, 141, 135;
  --canvas-color-6: 59, 49, 105;
  --canvas-dot-pattern: #9d9c9e;
  --caret-color: #1d1f21;
  --checkbox-border-color: #767678;
  --checkbox-border-color-hover: rgb(108, 157, 151);
  --checkbox-border-color-unchecked: #767678;
  --checkbox-color: rgb(108, 157, 151);
  --checkbox-color-hover: rgb(117, 163, 156);
  --checkbox-marker-color: #d8d6d8;
  --checkbox-radius: 10px;
  --checklist-done-color: #4e4f51;
  --code-background: #cecdcf;
  --code-border-color: #b1b0b2;
  --code-bracket-background: rgba(226, 224, 226, 0.5);
  --code-comment: #767678;
  --code-function: #98863B;
  --code-important: #98623B;
  --code-keyword: #752E5C;
  --code-normal: #1d1f21;
  --code-operator: #933942;
  --code-property: #5E8D87;
  --code-punctuation: #4e4f51;
  --code-size: --font-normal;
  --code-string: #3F7F31;
  --code-tag: #933942;
  --code-value: #3B3169;
  --collapse-icon-color: #767678;
  --collapse-icon-color-collapsed: rgb(98, 147, 142);
  --color-accent: rgb(98, 147, 142);
  --color-accent-1: rgb(108, 157, 151);
  --color-accent-2: rgb(117, 163, 156);
  --color-accent-hsl: 174, 20%, 48%;
  --color-base-00: #d8d6d8;
  --color-base-05: #cecdcf;
  --color-base-10: #c4c3c5;
  --color-base-100: #1d1f21;
  --color-base-20: #b1b0b2;
  --color-base-25: #a7a6a8;
  --color-base-30: #9d9c9e;
  --color-base-35: #939395;
  --color-base-40: #89898b;
  --color-base-50: #767678;
  --color-base-60: #626365;
  --color-base-70: #4e4f51;
  --color-blue: #687995;
  --color-blue_rgb: 104, 121, 149;
  --color-cyan: #5E8D87;
  --color-cyan-rgb: 94, 141, 135;
  --color-green: #3F7F31;
  --color-green-rgb: 63, 127, 49;
  --color-orange: #98623B;
  --color-orange_rgb: 152, 98, 59;
  --color-pink: #752E5C;
  --color-pink-rgb: 117, 46, 92;
  --color-purple: #3B3169;
  --color-purple-rgb: 59, 49, 105;
  --color-red: #933942;
  --color-red_rgb: 147, 57, 66;
  --color-teal: #5E8D87;
  --color-teal-rgb: 94, 141, 135;
  --color-yellow: #98863B;
  --color-yellow-rgb: 152, 119, 59;
  --divider-color: #b1b0b2;
  --divider-color-hover: rgb(108, 157, 151);
  --dropdown-background: #d8d6d8;
  --dropdown-background-hover: #c4c3c5;
  --embed-block-shadow-hover: 0 0 0 1px #b1b0b2, inset 0 0 0 1px #b1b0b2;
  --embed-border-start: 2px solid rgb(108, 157, 151);
  --file-header-background: #d8d6d8;
  --file-header-background-focused: #d8d6d8;
  --flair-background: #d8d6d8;
  --flair-color: #1d1f21;
  --font-mermaid: "Inter", sans-serif;
  --font-monospace: "Courier New", monospace;
  --font-text: "Inter", sans-serif;
  --footnote-divider-color: #b1b0b2;
  --footnote-id-color: #4e4f51;
  --footnote-id-color-no-occurrences: #767678;
  --footnote-input-background-active: rgba(226, 224, 226, 0.5);
  --graph-line: #939395;
  --graph-node: #4e4f51;
  --graph-node-attachment: #98863B;
  --graph-node-focused: rgb(98, 147, 142);
  --graph-node-tag: #3F7F31;
  --graph-node-unresolved: #767678;
  --graph-text: #1d1f21;
  --h1-color: #933942;
  --h1-weight: 500;
  --h2-color: #98623B;
  --h2-weight: 400;
  --h3-color: #98863B;
  --h3-weight: 400;
  --h4-color: #3F7F31;
  --h4-weight: 400;
  --h5-color: #687995;
  --h5-weight: 400;
  --h6-color: #3B3169;
  --h6-weight: 400;
  --heading-formatting: #767678;
  --heading-spacing: 1.5rem;
  --hr-color: #b1b0b2;
  --hr-thickness: 1px;
  --icon-color: #4e4f51;
  --icon-color-active: rgb(98, 147, 142);
  --icon-color-focused: #1d1f21;
  --icon-color-hover: #4e4f51;
  --indentation-guide-color: rgba(29, 31, 33, 0.12);
  --indentation-guide-color-active: rgba(29, 31, 33, 0.3);
  --indentation-guide-width: 2px;
  --inline-title-color: #767678;
  --inline-title-size: 1.318em;
  --inline-title-style: italic;
  --inline-title-weight: 50;
  --input-date-separator: #767678;
  --input-placeholder-color: #767678;
  --interactive-accent: rgb(108, 157, 151);
  --interactive-accent-hover: rgb(117, 163, 156);
  --interactive-accent-hsl: 174, 20%, 48%;
  --interactive-hover: #c4c3c5;
  --interactive-normal: #d8d6d8;
  --link-color: rgb(98, 147, 142);
  --link-color-hover: rgb(117, 163, 156);
  --link-external-color: rgb(98, 147, 142);
  --link-external-color-hover: rgb(117, 163, 156);
  --link-unresolved-color: rgb(98, 147, 142);
  --link-unresolved-decoration-color: rgba(98, 147, 142, 0.3);
  --list-bullet-radius: 40%;
  --list-bullet-size: 0.4em;
  --list-marker-color: #767678;
  --list-marker-color-collapsed: rgb(98, 147, 142);
  --list-marker-color-hover: #4e4f51;
  --menu-background: #c4c3c5;
  --menu-border-color: #939395;
  --metadata-border-color: #b1b0b2;
  --metadata-divider-color: #b1b0b2;
  --metadata-input-background-active: rgba(226, 224, 226, 0.5);
  --metadata-input-text-color: #1d1f21;
  --metadata-label-background-active: rgba(226, 224, 226, 0.5);
  --metadata-label-text-color: #4e4f51;
  --metadata-label-text-color-hover: #4e4f51;
  --metadata-property-background-active: rgba(226, 224, 226, 0.5);
  --metadata-property-box-shadow-focus: 0 0 0 2px #89898b;
  --metadata-property-box-shadow-hover: 0 0 0 1px #939395;
  --modal-background: #d8d6d8;
  --modal-border-color: #9d9c9e;
  --mono-rgb-0: 226, 224, 226;
  --mono-rgb-100: 29, 31, 33;
  --nav-collapse-icon-color: #767678;
  --nav-collapse-icon-color-collapsed: #767678;
  --nav-heading-color: #1d1f21;
  --nav-heading-color-collapsed: #767678;
  --nav-heading-color-collapsed-hover: #4e4f51;
  --nav-heading-color-hover: #1d1f21;
  --nav-indentation-guide-color: rgba(29, 31, 33, 0.12);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgba(226, 224, 226, 0.5);
  --nav-item-background-hover: rgba(226, 224, 226, 0.5);
  --nav-item-background-selected: rgba(98, 147, 142, 0.15);
  --nav-item-color: #4e4f51;
  --nav-item-color-active: #1d1f21;
  --nav-item-color-highlighted: rgb(98, 147, 142);
  --nav-item-color-hover: #1d1f21;
  --nav-item-color-selected: #1d1f21;
  --nav-tag-color: #767678;
  --nav-tag-color-active: #4e4f51;
  --nav-tag-color-hover: #4e4f51;
  --pdf-background: #d8d6d8;
  --pdf-page-background: #d8d6d8;
  --pdf-sidebar-background: #d8d6d8;
  --pill-border-color: #b1b0b2;
  --pill-border-color-hover: #939395;
  --pill-color: #4e4f51;
  --pill-color-hover: #1d1f21;
  --pill-color-remove: #767678;
  --pill-color-remove-hover: rgb(98, 147, 142);
  --prompt-background: #d8d6d8;
  --prompt-border-color: #89898b;
  --raised-background: color-mix(in srgb, #d8d6d8 65%, transparent) linear-gradient(#d8d6d8, color-mix(in srgb, #d8d6d8 65%, transparent));
  --ribbon-background: #c4c3c5;
  --ribbon-background-collapsed: #d8d6d8;
  --scrollbar-active-thumb-bg: rgba(29, 31, 33, 0.2);
  --scrollbar-bg: rgba(29, 31, 33, 0.05);
  --scrollbar-thumb-bg: rgba(29, 31, 33, 0.1);
  --search-clear-button-color: #4e4f51;
  --search-icon-color: #4e4f51;
  --search-result-background: #d8d6d8;
  --setting-group-heading-color: #1d1f21;
  --setting-items-background: #cecdcf;
  --setting-items-border-color: #b1b0b2;
  --slider-thumb-border-color: #939395;
  --slider-track-background: #b1b0b2;
  --status-bar-background: #c4c3c5;
  --status-bar-border-color: #b1b0b2;
  --status-bar-border-width: 0;
  --status-bar-text-color: #4e4f51;
  --suggestion-background: #d8d6d8;
  --swatch-shadow: inset 0 0 0 1px rgba(29, 31, 33, 0.15);
  --sync-avatar-color-1: #933942;
  --sync-avatar-color-2: #98623B;
  --sync-avatar-color-3: #98863B;
  --sync-avatar-color-4: #3F7F31;
  --sync-avatar-color-5: #5E8D87;
  --sync-avatar-color-6: #687995;
  --sync-avatar-color-7: #3B3169;
  --sync-avatar-color-8: #752E5C;
  --tab-background-active: #d8d6d8;
  --tab-container-background: #c4c3c5;
  --tab-divider-color: #939395;
  --tab-outline-color: #b1b0b2;
  --tab-switcher-background: #c4c3c5;
  --tab-switcher-menubar-background: linear-gradient(to top, #c4c3c5, transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(29, 31, 33, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(98, 147, 142);
  --tab-text-color: #767678;
  --tab-text-color-active: #4e4f51;
  --tab-text-color-focused: #4e4f51;
  --tab-text-color-focused-active: #4e4f51;
  --tab-text-color-focused-active-current: #1d1f21;
  --tab-text-color-focused-highlighted: rgb(98, 147, 142);
  --table-add-button-border-color: #b1b0b2;
  --table-border-color: #b1b0b2;
  --table-drag-handle-background-active: rgb(108, 157, 151);
  --table-drag-handle-color: #767678;
  --table-header-border-color: #b1b0b2;
  --table-header-color: #1d1f21;
  --table-selection: rgba(98, 147, 142, 0.1);
  --table-selection-border-color: rgb(108, 157, 151);
  --tag-background: rgba(98, 147, 142, 0.1);
  --tag-background-hover: rgba(98, 147, 142, 0.2);
  --tag-border-color: rgba(98, 147, 142, 0.15);
  --tag-border-color-hover: rgba(98, 147, 142, 0.15);
  --tag-color: rgb(98, 147, 142);
  --tag-color-hover: rgb(98, 147, 142);
  --text-accent: rgb(98, 147, 142);
  --text-accent-hover: rgb(117, 163, 156);
  --text-error: #933942;
  --text-faint: #767678;
  --text-highlight-bg: rgba(152, 119, 59, 0.4);
  --text-highlight-bg-rgb: 152, 119, 59;
  --text-muted: #4e4f51;
  --text-normal: #1d1f21;
  --text-selection: rgba(98, 147, 142, 0.2);
  --text-success: #3F7F31;
  --text-warning: #98623B;
  --titlebar-background: #c4c3c5;
  --titlebar-background-focused: #b1b0b2;
  --titlebar-border-color: #b1b0b2;
  --titlebar-text-color: #4e4f51;
  --titlebar-text-color-focused: #1d1f21;
  --vault-profile-color: #1d1f21;
  --vault-profile-color-hover: #1d1f21;
  --workspace-background-translucent: rgba(226, 224, 226, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(196, 195, 197);
  color: rgb(29, 31, 33);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(216, 214, 216);
  color: rgb(29, 31, 33);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(196, 195, 197);
  color: rgb(29, 31, 33);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(177, 176, 178);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(196, 195, 197);
  border-left-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
}

body div#quartz-root {
  background-color: rgb(216, 214, 216);
  color: rgb(29, 31, 33);
}`,
    typography: `body .page article p > b, b {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body .page article p > em, em {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body .page article p > i, i {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body .page article p > strong, strong {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body .text-highlight {
  background-color: rgba(152, 119, 59, 0.4);
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body del {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration: line-through rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body p {
  color: rgb(78, 79, 81);
  outline: rgb(78, 79, 81) none 0px;
  text-decoration: rgb(78, 79, 81);
  text-decoration-color: rgb(78, 79, 81);
}`,
    links: `body a.external, footer a {
  color: rgb(98, 147, 142);
  font-family: Inter, sans-serif;
  outline: rgb(98, 147, 142) none 0px;
  text-decoration: underline rgb(98, 147, 142);
  text-decoration-color: rgb(98, 147, 142);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(98, 147, 142);
  font-family: Inter, sans-serif;
  outline: rgb(98, 147, 142) none 0px;
  text-decoration: underline rgb(98, 147, 142);
  text-decoration-color: rgb(98, 147, 142);
}

body a.internal.broken {
  color: rgb(98, 147, 142);
  font-family: Inter, sans-serif;
  outline: rgb(98, 147, 142) none 0px;
  text-decoration: underline rgba(98, 147, 142, 0.3);
  text-decoration-color: rgba(98, 147, 142, 0.3);
}`,
    lists: `body dd {
  color: rgb(29, 31, 33);
}

body dt {
  color: rgb(29, 31, 33);
}

body ol > li {
  color: rgb(29, 31, 33);
}

body ol.overflow {
  background-color: rgb(216, 214, 216);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body ul > li {
  color: rgb(29, 31, 33);
}

body ul.overflow {
  background-color: rgb(216, 214, 216);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(118, 118, 120);
  text-decoration: rgb(118, 118, 120);
}

body blockquote {
  font-family: Inter, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body table {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
  font-family: "Courier New", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
}

body pre > code > [data-line] {
  border-left-color: rgb(152, 134, 59);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(152, 134, 59);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(152, 134, 59);
  border-left-color: rgb(152, 134, 59);
  border-right-color: rgb(152, 134, 59);
  border-top-color: rgb(152, 134, 59);
}

body pre > code, pre:has(> code) {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
}

body pre:has(> code) {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
}`,
    images: `body audio {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body figcaption {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
}

body figure {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body img {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body video {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    embeds: `body .file-embed {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
}

body .footnotes {
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

body .transclude {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(107, 157, 151);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body .transclude-inner {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(107, 157, 151);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Inter, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Inter, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(78, 79, 81);
  text-decoration: line-through rgb(78, 79, 81);
  text-decoration-color: rgb(78, 79, 81);
}

body input[type=checkbox] {
  border-bottom-color: rgb(118, 118, 120);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(118, 118, 120);
  border-right-color: rgb(118, 118, 120);
  border-top-color: rgb(118, 118, 120);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='*'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='-'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='/'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='>'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='?'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='I'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='S'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='b'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='c'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='d'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='f'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='i'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='k'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='l'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='p'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='u'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body li.task-list-item[data-task='w'] {
  color: rgb(29, 31, 33);
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  --callout-color: 94, 141, 135;
  background-color: rgba(94, 141, 135, 0.1);
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 59, 49, 105;
  background-color: rgba(59, 49, 105, 0.1);
  border-bottom-color: rgba(59, 49, 105, 0.25);
  border-left-color: rgba(59, 49, 105, 0.25);
  border-right-color: rgba(59, 49, 105, 0.25);
  border-top-color: rgba(59, 49, 105, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 63, 127, 49;
  background-color: rgba(63, 127, 49, 0.1);
  border-bottom-color: rgba(63, 127, 49, 0.25);
  border-left-color: rgba(63, 127, 49, 0.25);
  border-right-color: rgba(63, 127, 49, 0.25);
  border-top-color: rgba(63, 127, 49, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 94, 141, 135;
  background-color: rgba(94, 141, 135, 0.1);
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(216, 214, 216);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
}

body .search > .search-container > .search-space {
  background-color: rgb(216, 214, 216);
  border-bottom-color: rgb(137, 137, 139);
  border-left-color: rgb(137, 137, 139);
  border-right-color: rgb(137, 137, 139);
  border-top-color: rgb(137, 137, 139);
}

body .search > .search-container > .search-space > * {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(29, 31, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(29, 31, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(98, 147, 142, 0.2);
  color: rgb(29, 31, 33);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(137, 137, 139);
  border-left-color: rgb(137, 137, 139);
  border-right-color: rgb(137, 137, 139);
  border-top-color: rgb(137, 137, 139);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(196, 195, 197);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(98, 147, 142, 0.2);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(98, 147, 142, 0.2);
  color: rgb(29, 31, 33);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(98, 147, 142, 0.1);
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(98, 147, 142);
}

body h1 {
  color: rgb(147, 57, 66);
  font-family: Inter, sans-serif;
}

body h2 {
  color: rgb(152, 98, 59);
  font-family: Inter, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(118, 118, 120);
  font-family: Inter, sans-serif;
}

body h3 {
  color: rgb(152, 134, 59);
  font-family: Inter, sans-serif;
}

body h4 {
  color: rgb(63, 127, 49);
  font-family: Inter, sans-serif;
}

body h5 {
  color: rgb(104, 121, 149);
  font-family: Inter, sans-serif;
}

body h6 {
  color: rgb(59, 49, 105);
  font-family: Inter, sans-serif;
}

body hr {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}

body ::-webkit-scrollbar-corner {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}

body ::-webkit-scrollbar-track {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(78, 79, 81);
  text-decoration: rgb(78, 79, 81);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(78, 79, 81);
  text-decoration: rgb(78, 79, 81);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(78, 79, 81);
  text-decoration: rgb(78, 79, 81);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(226, 224, 226, 0.5);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
}`,
    footer: `body footer {
  background-color: rgb(196, 195, 197);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-left-width: 0px;
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  border-top-width: 0px;
  color: rgb(78, 79, 81);
}

body footer ul li a {
  color: rgb(78, 79, 81);
  text-decoration: rgb(78, 79, 81);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(29, 31, 33);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(78, 79, 81);
  text-decoration: rgb(78, 79, 81);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(78, 79, 81);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body li.section-li > .section .meta {
  color: rgb(78, 79, 81);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(78, 79, 81);
  text-decoration: rgb(78, 79, 81);
}

body ul.section-ul {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
}

body .darkmode svg {
  color: rgb(78, 79, 81);
  stroke: rgb(78, 79, 81);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
}

body .breadcrumb-element p {
  color: rgb(118, 118, 120);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

body .metadata {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(78, 79, 81);
  font-family: Inter, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
  font-family: Inter, sans-serif;
}

body .navigation-progress {
  background-color: rgb(196, 195, 197);
}

body .page-header h2.page-title {
  color: rgb(29, 31, 33);
}

body abbr {
  color: rgb(29, 31, 33);
  text-decoration: underline dotted rgb(29, 31, 33);
}

body details {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body input[type=text] {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
}

body kbd {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
  font-family: "Courier New", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

body sub {
  color: rgb(29, 31, 33);
}

body summary {
  color: rgb(29, 31, 33);
}

body sup {
  color: rgb(29, 31, 33);
}`,
  },
};
