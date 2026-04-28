import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-dracula",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #191A21;
  --background-modifier-border-focus: #282A36;
  --background-modifier-border-hover: #282A36;
  --background-modifier-form-field: #191A21;
  --background-modifier-form-field-hover: #191A21;
  --background-modifier-hover: rgba(127, 140, 187, 0.067);
  --background-primary: #191A21;
  --background-primary-alt: #191A21;
  --background-secondary: #191A21;
  --background-secondary-alt: #191A21;
  --bases-cards-background: #191A21;
  --bases-cards-cover-background: #191A21;
  --bases-cards-shadow: 0 0 0 1px #191A21;
  --bases-cards-shadow-hover: 0 0 0 1px #282A36;
  --bases-embed-border-color: #191A21;
  --bases-group-heading-property-color: #BABCC9;
  --bases-table-border-color: #191A21;
  --bases-table-cell-background-active: #191A21;
  --bases-table-cell-background-disabled: #191A21;
  --bases-table-cell-shadow-active: 0 0 0 2px #282A36;
  --bases-table-group-background: #191A21;
  --bases-table-header-background: #191A21;
  --bases-table-header-background-hover: rgba(127, 140, 187, 0.067);
  --bases-table-header-color: #BABCC9;
  --bases-table-summary-background: #191A21;
  --bases-table-summary-background-hover: rgba(127, 140, 187, 0.067);
  --blur-background: color-mix(in srgb, #191A21 65%, transparent) linear-gradient(#191A21, color-mix(in srgb, #191A21 65%, transparent));
  --bold-color: hsl(258, 88%, 66%);
  --callout-bug: 255,  85,  85;
  --callout-default: 98, 114, 164;
  --callout-error: 255,  85,  85;
  --callout-example: 255, 121, 198;
  --callout-fail: 255,  85,  85;
  --callout-important: 189, 147, 249;
  --callout-info: 98, 114, 164;
  --callout-question: 255, 184, 108;
  --callout-quote: 189, 147, 249;
  --callout-success: 55, 235,  98;
  --callout-summary: 114, 208, 228;
  --callout-tip: 114, 208, 228;
  --callout-todo: white;
  --callout-warning: 255, 184, 108;
  --canvas-background: #191A21;
  --canvas-card-label-color: #707487;
  --canvas-dot-pattern: #191A21;
  --caret-color: #F8F8F2;
  --checkbox-border-color: #707487;
  --checkbox-border-color-hover: #BABCC9;
  --checkbox-marker-color: #191A21;
  --checklist-done-color: #BABCC9;
  --checklist-done-decoration: none;
  --code-background: #191A21;
  --code-border-color: #191A21;
  --code-bracket-background: rgba(127, 140, 187, 0.067);
  --code-comment: #6270A4;
  --code-function: #50FA7B;
  --code-important: #FF5555;
  --code-keyword: #FF79C6;
  --code-normal: #BABCC9;
  --code-operator: #FF5555;
  --code-property: #FFB86C;
  --code-punctuation: #BABCC9;
  --code-string: #F1FA8C;
  --code-tag: #FF5555;
  --code-value: #BD93F9;
  --collapse-icon-color: #707487;
  --color-base-00: #191A21;
  --color-base-10: #191A21;
  --color-base-100: #F8F8F2;
  --color-base-20: #191A21;
  --color-base-25: #191A21;
  --color-base-30: #191A21;
  --color-base-35: #282A36;
  --color-base-40: #282A36;
  --color-base-50: #707487;
  --color-base-60: red;
  --color-base-70: #BABCC9;
  --dark: var(--text-normal, #F8F8F2);
  --darkgray: var(--text-normal, #F8F8F2);
  --divider-color: #191A21;
  --dropdown-background: #191A21;
  --dropdown-background-hover: #282A36;
  --drx-border-radius-inner: 10px;
  --drx-border-radius-outer: 16px;
  --drx-color-accent: hsl(258, 88%, 66%);
  --drx-color-base: #191A21;
  --drx-color-blue-1: #6DCCFF;
  --drx-color-blue-2: #54B3FF;
  --drx-color-blue-3: #3B9AE6;
  --drx-color-callout-blue: 84, 179, 255;
  --drx-color-callout-comment: 98, 114, 164;
  --drx-color-callout-cyan: 114, 208, 228;
  --drx-color-callout-green: 55, 235,  98;
  --drx-color-callout-orange: 255, 184, 108;
  --drx-color-callout-pink: 255, 121, 198;
  --drx-color-callout-purple: 189, 147, 249;
  --drx-color-callout-red: 255,  85,  85;
  --drx-color-callout-yellow: 241, 250, 140;
  --drx-color-comment: #6270A4;
  --drx-color-cyan-1: #A4FFFF;
  --drx-color-cyan-2: #8BE9FD;
  --drx-color-cyan-3: #72D0E4;
  --drx-color-deactivate: #707487;
  --drx-color-green-1: #69FF94;
  --drx-color-green-2: #50FA7B;
  --drx-color-green-3: #37EB62;
  --drx-color-highlight: #343746;
  --drx-color-important: hsl(258, 88%, 86%);
  --drx-color-orange-1: #FFD185;
  --drx-color-orange-2: #FFB86C;
  --drx-color-orange-3: #E69F53;
  --drx-color-overlay: #282A36;
  --drx-color-pink-1: #FF92DF;
  --drx-color-pink-2: #FF79C6;
  --drx-color-pink-3: #E660AD;
  --drx-color-purple-1: #D6ACFF;
  --drx-color-purple-2: #BD93F9;
  --drx-color-purple-3: #A47AE0;
  --drx-color-red-1: #FF6E6E;
  --drx-color-red-2: #FF5555;
  --drx-color-red-3: #E63C3C;
  --drx-color-subtext: #BABCC9;
  --drx-color-surface: #21222C;
  --drx-color-text: #F8F8F2;
  --drx-color-yellow-1: #FFFFA5;
  --drx-color-yellow-2: #F1FA8C;
  --drx-color-yellow-3: #D8E173;
  --embed-block-shadow-hover: 0 0 0 1px #191A21, inset 0 0 0 1px #191A21;
  --file-header-background: #191A21;
  --file-header-background-focused: #191A21;
  --flair-background: #191A21;
  --flair-color: #F8F8F2;
  --footnote-divider-color: #191A21;
  --footnote-id-color: #BABCC9;
  --footnote-id-color-no-occurrences: #707487;
  --footnote-input-background-active: rgba(127, 140, 187, 0.067);
  --graph-line: #282A36;
  --graph-node: #BABCC9;
  --graph-node-unresolved: #707487;
  --graph-text: #F8F8F2;
  --gray: var(--text-muted, #BABCC9);
  --h1-line-height: 1.25em;
  --h1-size: 1.60em;
  --h2-line-height: 1.25em;
  --h2-size: 1.40em;
  --h2-weight: 700;
  --h3-line-height: 1.30em;
  --h3-size: 1.25em;
  --h3-weight: 600;
  --h4-line-height: 1.30em;
  --h4-size: 1.15em;
  --h4-weight: 500;
  --h5-line-height: 1.30em;
  --h5-size: 1.10em;
  --h5-weight: 500;
  --h6-line-height: 1.30em;
  --h6-size: 1.05em;
  --h6-weight: 500;
  --heading-formatting: #707487;
  --highlight: var(--background-modifier-hover, rgba(127, 140, 187, 0.067));
  --hr-color: #707487;
  --icon-color: #BABCC9;
  --icon-color-focused: #F8F8F2;
  --icon-color-hover: #BABCC9;
  --indentation-guide-color: rgba(127, 140, 187, 0.12);
  --indentation-guide-color-active: rgba(127, 140, 187, 0.3);
  --inline-title-line-height: 1.25em;
  --inline-title-size: 1.60em;
  --input-date-separator: #707487;
  --input-placeholder-color: #707487;
  --interactive-hover: #282A36;
  --interactive-normal: #191A21;
  --light: var(--background-primary, #191A21);
  --lightgray: var(--background-secondary, #191A21);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(258, 88%, 86%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(258, 88%, 86%);
  --link-unresolved-color: #50FA7B;
  --link-unresolved-decoration-color: #FF5555;
  --link-unresolved-opacity: 0.5;
  --list-marker-color: #707487;
  --list-marker-color-hover: #BABCC9;
  --menu-background: #191A21;
  --menu-border-color: #282A36;
  --metadata-border-color: #191A21;
  --metadata-divider-color: #191A21;
  --metadata-input-background-active: rgba(127, 140, 187, 0.067);
  --metadata-input-text-color: #F8F8F2;
  --metadata-label-background-active: rgba(127, 140, 187, 0.067);
  --metadata-label-text-color: #BABCC9;
  --metadata-label-text-color-hover: #BABCC9;
  --metadata-property-background-active: rgba(127, 140, 187, 0.067);
  --metadata-property-box-shadow-focus: 0 0 0 2px #282A36;
  --metadata-property-box-shadow-hover: 0 0 0 1px #282A36;
  --modal-background: #191A21;
  --modal-border-color: #282A36;
  --mono-rgb-100: 127, 140, 187;
  --nav-collapse-icon-color: #707487;
  --nav-collapse-icon-color-collapsed: #707487;
  --nav-heading-color: #F8F8F2;
  --nav-heading-color-collapsed: #707487;
  --nav-heading-color-collapsed-hover: #BABCC9;
  --nav-heading-color-hover: #F8F8F2;
  --nav-indentation-guide-color: rgba(127, 140, 187, 0.12);
  --nav-item-active: #343746;
  --nav-item-background-active: rgba(127, 140, 187, 0.067);
  --nav-item-background-hover: rgba(127, 140, 187, 0.067);
  --nav-item-color: #BABCC9;
  --nav-item-color-active: #F8F8F2;
  --nav-item-color-hover: #F8F8F2;
  --nav-item-color-selected: #F8F8F2;
  --nav-tag-color: #707487;
  --nav-tag-color-active: #BABCC9;
  --nav-tag-color-hover: #BABCC9;
  --pdf-background: #191A21;
  --pdf-page-background: #191A21;
  --pdf-shadow: 0 0 0 1px #191A21;
  --pdf-sidebar-background: #191A21;
  --pdf-thumbnail-shadow: 0 0 0 1px #191A21;
  --pill-border-color: #191A21;
  --pill-border-color-hover: #282A36;
  --pill-color: #BABCC9;
  --pill-color-hover: #F8F8F2;
  --pill-color-remove: #707487;
  --prompt-background: #191A21;
  --prompt-border-color: #282A36;
  --raised-background: color-mix(in srgb, #191A21 65%, transparent) linear-gradient(#191A21, color-mix(in srgb, #191A21 65%, transparent));
  --ribbon-background: #21222C;
  --ribbon-background-collapsed: #191A21;
  --scrollbar-active-thumb-bg: rgba(127, 140, 187, 0.2);
  --scrollbar-bg: rgba(127, 140, 187, 0.05);
  --scrollbar-thumb-bg: rgba(127, 140, 187, 0.1);
  --search-clear-button-color: #BABCC9;
  --search-icon-color: #BABCC9;
  --search-result-background: #191A21;
  --setting-group-heading-color: #F8F8F2;
  --setting-items-background: #191A21;
  --setting-items-border-color: #191A21;
  --shiki-active-tab-border-color: #BABCC9;
  --shiki-code-background: #191A21;
  --shiki-code-comment: #707487;
  --shiki-code-normal: #BABCC9;
  --shiki-code-punctuation: #BABCC9;
  --shiki-gutter-border-color: #191A21;
  --shiki-gutter-text-color: #707487;
  --shiki-gutter-text-color-highlight: #BABCC9;
  --shiki-highlight-neutral: #BABCC9;
  --shiki-highlight-neutral-background: rgba(127, 140, 187, 0.05);
  --shiki-terminal-dots-color: #707487;
  --slider-thumb-border-color: #282A36;
  --slider-track-background: #191A21;
  --status-bar-background: #21222C;
  --status-bar-border-color: #191A21;
  --status-bar-text-color: #BABCC9;
  --suggestion-background: #191A21;
  --swatch-shadow: inset 0 0 0 1px rgba(127, 140, 187, 0.15);
  --tab-background-active: #191A21;
  --tab-container-background: #191A21;
  --tab-divider-color: #282A36;
  --tab-outline-color: #191A21;
  --tab-switcher-background: #191A21;
  --tab-switcher-menubar-background: linear-gradient(to top, #191A21, transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(127, 140, 187, 0.05);
  --tab-text-color: #707487;
  --tab-text-color-active: #BABCC9;
  --tab-text-color-focused: #BABCC9;
  --tab-text-color-focused-active: #BABCC9;
  --tab-text-color-focused-active-current: #F8F8F2;
  --table-add-button-border-color: #191A21;
  --table-border-color: #191A21;
  --table-drag-handle-color: #707487;
  --table-header-background: #282A36;
  --table-header-border-color: #191A21;
  --table-header-color: #F8F8F2;
  --table-width: 88cqw;
  --tag-color: hsl(258, 88%, 66%);
  --text-faint: #707487;
  --text-muted: #BABCC9;
  --text-normal: #F8F8F2;
  --text-selection: color-mix(in srgb, hsl(258, 88%, 66%), transparent 70%);
  --textHighlight: var(--background-modifier-hover, rgba(127, 140, 187, 0.067));
  --titlebar-background: #191A21;
  --titlebar-background-focused: #191A21;
  --titlebar-border-color: #191A21;
  --titlebar-text-color: #BABCC9;
  --titlebar-text-color-focused: #F8F8F2;
  --vault-profile-color: #F8F8F2;
  --vault-profile-color-hover: #F8F8F2;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(25, 26, 33);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body html {
  --drx-border-radius-inner: 10px;
  --drx-border-radius-outer: 16px;
  background-color: rgb(30, 31, 41);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(112, 116, 135);
}

html[saved-theme="dark"] body p {
  color: rgb(186, 188, 201);
  outline: rgb(186, 188, 201) none 0px;
  text-decoration-color: rgb(186, 188, 201);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(255, 85, 85);
  text-decoration-color: rgb(255, 85, 85);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body dt {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(33, 34, 44);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body table {
  color: rgb(248, 248, 242);
  width: 662px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(25, 26, 33);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(25, 26, 33);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(40, 42, 54);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(112, 116, 135);
  border-left-color: rgb(112, 116, 135);
  border-right-color: rgb(112, 116, 135);
  border-top-color: rgb(112, 116, 135);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(186, 188, 201);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(186, 188, 201);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(25, 26, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(25, 26, 33);
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
  background-color: rgb(112, 116, 135);
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
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 114, 208, 228;
  background: rgba(114, 208, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(114, 208, 228, 0.1);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255,  85,  85;
  background: rgba(255, 85, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 85, 85, 0.1);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255,  85,  85;
  background: rgba(255, 85, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 85, 85, 0.1);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 255, 121, 198;
  background: rgba(255, 121, 198, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 121, 198, 0.1);
  border-bottom-color: rgba(255, 121, 198, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 121, 198, 0.25);
  border-right-color: rgba(255, 121, 198, 0.25);
  border-top-color: rgba(255, 121, 198, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255,  85,  85;
  background: rgba(255, 85, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 85, 85, 0.1);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 98, 114, 164;
  background: rgba(98, 114, 164, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(98, 114, 164, 0.1);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 98, 114, 164;
  background: rgba(98, 114, 164, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(98, 114, 164, 0.1);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 255, 184, 108;
  background: rgba(255, 184, 108, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 184, 108, 0.1);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 189, 147, 249;
  background: rgba(189, 147, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(189, 147, 249, 0.1);
  border-bottom-color: rgba(189, 147, 249, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(189, 147, 249, 0.25);
  border-right-color: rgba(189, 147, 249, 0.25);
  border-top-color: rgba(189, 147, 249, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 55, 235,  98;
  background: rgba(55, 235, 98, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(55, 235, 98, 0.1);
  border-bottom-color: rgba(55, 235, 98, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(55, 235, 98, 0.25);
  border-right-color: rgba(55, 235, 98, 0.25);
  border-top-color: rgba(55, 235, 98, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 114, 208, 228;
  background: rgba(114, 208, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(114, 208, 228, 0.1);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: white;
  background: rgb(255, 85, 85) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 85, 85);
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 184, 108;
  background: rgba(255, 184, 108, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 184, 108, 0.1);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(248, 248, 242);
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
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(40, 42, 54);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(40, 42, 54);
  border-right-color: rgb(40, 42, 54);
  border-top-color: rgb(40, 42, 54);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(127, 140, 187, 0.067);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(40, 42, 54);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(40, 42, 54);
  border-right-color: rgb(40, 42, 54);
  border-top-color: rgb(40, 42, 54);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(127, 140, 187, 0.067);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(127, 140, 187, 0.067);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body h1 {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(248, 248, 242);
  font-size: 25.6px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body h3 {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body h4 {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body h5 {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body h6 {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(127, 140, 187, 0.12);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(186, 188, 201);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(248, 248, 242);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-left-width: 3px;
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(186, 188, 201);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 188, 201);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(186, 188, 201);
  stroke: rgb(186, 188, 201);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(112, 116, 135);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(25, 26, 33);
  border-color: rgb(248, 248, 242);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(25, 26, 33);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(25, 26, 33);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(25, 26, 33);
  border-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(25, 26, 33);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(248, 248, 242);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(25, 26, 33);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body abbr {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body sub {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body summary {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body sup {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(138, 92, 245);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #EDE9DA;
  --background-modifier-border-focus: #DEDBCC;
  --background-modifier-border-hover: #DEDBCC;
  --background-modifier-form-field: #EDE9DA;
  --background-modifier-form-field-hover: #EDE9DA;
  --background-primary: #EDE9DA;
  --background-primary-alt: #EDE9DA;
  --background-secondary: #EDE9DA;
  --bases-cards-background: #EDE9DA;
  --bases-cards-cover-background: #EDE9DA;
  --bases-cards-shadow: 0 0 0 1px #EDE9DA;
  --bases-cards-shadow-hover: 0 0 0 1px #DEDBCC;
  --bases-embed-border-color: #EDE9DA;
  --bases-group-heading-property-color: #6C664B;
  --bases-table-border-color: #EDE9DA;
  --bases-table-cell-background-active: #EDE9DA;
  --bases-table-cell-background-disabled: #EDE9DA;
  --bases-table-cell-shadow-active: 0 0 0 2px #DEDBCC;
  --bases-table-group-background: #EDE9DA;
  --bases-table-header-background: #EDE9DA;
  --bases-table-header-color: #6C664B;
  --bases-table-summary-background: #EDE9DA;
  --blur-background: color-mix(in srgb, #EDE9DA 65%, transparent) linear-gradient(#EDE9DA, color-mix(in srgb, #EDE9DA 65%, transparent));
  --bold-color: hsl(258, 88%, 66%);
  --callout-bug: 255,  85,  85;
  --callout-default: 98, 114, 164;
  --callout-error: 255,  85,  85;
  --callout-example: 255, 121, 198;
  --callout-fail: 255,  85,  85;
  --callout-important: 189, 147, 249;
  --callout-info: 98, 114, 164;
  --callout-question: 255, 184, 108;
  --callout-quote: 189, 147, 249;
  --callout-success: 55, 235,  98;
  --callout-summary: 114, 208, 228;
  --callout-tip: 114, 208, 228;
  --callout-todo: white;
  --callout-warning: 255, 184, 108;
  --canvas-background: #EDE9DA;
  --canvas-card-label-color: #BCBAB3;
  --canvas-dot-pattern: #EDE9DA;
  --caret-color: #1F1F1F;
  --checkbox-border-color: #BCBAB3;
  --checkbox-border-color-hover: #6C664B;
  --checkbox-marker-color: #EDE9DA;
  --checklist-done-color: #6C664B;
  --checklist-done-decoration: none;
  --code-background: #EDE9DA;
  --code-border-color: #EDE9DA;
  --code-comment: #6C664B;
  --code-function: #14710A;
  --code-important: #CB3A2A;
  --code-keyword: #A3144D;
  --code-normal: #6C664B;
  --code-operator: #CB3A2A;
  --code-property: #AF3A03;
  --code-punctuation: #6C664B;
  --code-string: #846E15;
  --code-tag: #CB3A2A;
  --code-value: #644AC9;
  --collapse-icon-color: #BCBAB3;
  --color-base-00: #EDE9DA;
  --color-base-10: #EDE9DA;
  --color-base-100: #1F1F1F;
  --color-base-20: #EDE9DA;
  --color-base-25: #EDE9DA;
  --color-base-30: #EDE9DA;
  --color-base-35: #DEDBCC;
  --color-base-40: #DEDBCC;
  --color-base-50: #BCBAB3;
  --color-base-60: red;
  --color-base-70: #6C664B;
  --dark: var(--text-normal, #1F1F1F);
  --darkgray: var(--text-normal, #1F1F1F);
  --divider-color: #EDE9DA;
  --dropdown-background: #EDE9DA;
  --dropdown-background-hover: #EDE9DA;
  --drx-border-radius-inner: 10px;
  --drx-border-radius-outer: 16px;
  --drx-color-accent: hsl(258, 88%, 66%);
  --drx-color-base: #EDE9DA;
  --drx-color-blue-1: #047FB4;
  --drx-color-blue-2: #036A96;
  --drx-color-blue-3: #025578;
  --drx-color-callout-blue: 84, 179, 255;
  --drx-color-callout-comment: 98, 114, 164;
  --drx-color-callout-cyan: 114, 208, 228;
  --drx-color-callout-green: 55, 235,  98;
  --drx-color-callout-orange: 255, 184, 108;
  --drx-color-callout-pink: 255, 121, 198;
  --drx-color-callout-purple: 189, 147, 249;
  --drx-color-callout-red: 255,  85,  85;
  --drx-color-callout-yellow: 241, 250, 140;
  --drx-color-comment: #6C664B;
  --drx-color-cyan-1: #2AA198;
  --drx-color-cyan-2: #179299;
  --drx-color-cyan-3: #12747A;
  --drx-color-deactivate: #BCBAB3;
  --drx-color-green-1: #198D0C;
  --drx-color-green-2: #14710A;
  --drx-color-green-3: #105908;
  --drx-color-highlight: #CECCC0;
  --drx-color-important: hsl(258, 88%, 46%);
  --drx-color-orange-1: #D16319;
  --drx-color-orange-2: #AF3A03;
  --drx-color-orange-3: #8C2E02;
  --drx-color-overlay: #DEDBCC;
  --drx-color-pink-1: #BF185A;
  --drx-color-pink-2: #A3144D;
  --drx-color-pink-3: #82103E;
  --drx-color-purple-1: #7862D0;
  --drx-color-purple-2: #644AC9;
  --drx-color-purple-3: #4F3AA1;
  --drx-color-red-1: #D74C3D;
  --drx-color-red-2: #CB3A2A;
  --drx-color-red-3: #9B2D21;
  --drx-color-subtext: #6C664B;
  --drx-color-surface: #FFFBEB;
  --drx-color-text: #1F1F1F;
  --drx-color-yellow-1: #9E841A;
  --drx-color-yellow-2: #846E15;
  --drx-color-yellow-3: #6A5811;
  --embed-block-shadow-hover: 0 0 0 1px #EDE9DA, inset 0 0 0 1px #EDE9DA;
  --file-header-background: #EDE9DA;
  --file-header-background-focused: #EDE9DA;
  --flair-background: #EDE9DA;
  --flair-color: #1F1F1F;
  --footnote-divider-color: #EDE9DA;
  --footnote-id-color: #6C664B;
  --footnote-id-color-no-occurrences: #BCBAB3;
  --graph-line: #DEDBCC;
  --graph-node: #6C664B;
  --graph-node-unresolved: #BCBAB3;
  --graph-text: #1F1F1F;
  --gray: var(--text-muted, #6C664B);
  --h1-line-height: 1.25em;
  --h1-size: 1.60em;
  --h2-line-height: 1.25em;
  --h2-size: 1.40em;
  --h2-weight: 700;
  --h3-line-height: 1.30em;
  --h3-size: 1.25em;
  --h3-weight: 600;
  --h4-line-height: 1.30em;
  --h4-size: 1.15em;
  --h4-weight: 500;
  --h5-line-height: 1.30em;
  --h5-size: 1.10em;
  --h5-weight: 500;
  --h6-line-height: 1.30em;
  --h6-size: 1.05em;
  --h6-weight: 500;
  --heading-formatting: #BCBAB3;
  --hr-color: #BCBAB3;
  --icon-color: #6C664B;
  --icon-color-focused: #1F1F1F;
  --icon-color-hover: #6C664B;
  --inline-title-line-height: 1.25em;
  --inline-title-size: 1.60em;
  --input-date-separator: #BCBAB3;
  --input-placeholder-color: #BCBAB3;
  --interactive-hover: #EDE9DA;
  --interactive-normal: #EDE9DA;
  --light: var(--background-primary, #EDE9DA);
  --lightgray: var(--background-secondary, #EDE9DA);
  --link-color-hover: hsl(258, 88%, 46%);
  --link-external-color-hover: hsl(258, 88%, 46%);
  --link-unresolved-color: #14710A;
  --link-unresolved-decoration-color: #CB3A2A;
  --link-unresolved-opacity: 0.5;
  --list-marker-color: #BCBAB3;
  --list-marker-color-hover: #6C664B;
  --menu-background: #EDE9DA;
  --menu-border-color: #DEDBCC;
  --metadata-border-color: #EDE9DA;
  --metadata-divider-color: #EDE9DA;
  --metadata-input-text-color: #1F1F1F;
  --metadata-label-text-color: #6C664B;
  --metadata-label-text-color-hover: #6C664B;
  --metadata-property-box-shadow-focus: 0 0 0 2px #DEDBCC;
  --metadata-property-box-shadow-hover: 0 0 0 1px #DEDBCC;
  --modal-background: #EDE9DA;
  --modal-border-color: #DEDBCC;
  --nav-collapse-icon-color: #BCBAB3;
  --nav-collapse-icon-color-collapsed: #BCBAB3;
  --nav-heading-color: #1F1F1F;
  --nav-heading-color-collapsed: #BCBAB3;
  --nav-heading-color-collapsed-hover: #6C664B;
  --nav-heading-color-hover: #1F1F1F;
  --nav-item-active: #CECCC0;
  --nav-item-color: #6C664B;
  --nav-item-color-active: #1F1F1F;
  --nav-item-color-hover: #1F1F1F;
  --nav-item-color-selected: #1F1F1F;
  --nav-tag-color: #BCBAB3;
  --nav-tag-color-active: #6C664B;
  --nav-tag-color-hover: #6C664B;
  --pdf-background: #EDE9DA;
  --pdf-page-background: #EDE9DA;
  --pdf-sidebar-background: #EDE9DA;
  --pill-border-color: #EDE9DA;
  --pill-border-color-hover: #DEDBCC;
  --pill-color: #6C664B;
  --pill-color-hover: #1F1F1F;
  --pill-color-remove: #BCBAB3;
  --prompt-background: #EDE9DA;
  --prompt-border-color: #DEDBCC;
  --raised-background: color-mix(in srgb, #EDE9DA 65%, transparent) linear-gradient(#EDE9DA, color-mix(in srgb, #EDE9DA 65%, transparent));
  --ribbon-background: #FFFBEB;
  --ribbon-background-collapsed: #EDE9DA;
  --search-clear-button-color: #6C664B;
  --search-icon-color: #6C664B;
  --search-result-background: #EDE9DA;
  --setting-group-heading-color: #1F1F1F;
  --setting-items-background: #EDE9DA;
  --setting-items-border-color: #EDE9DA;
  --shiki-active-tab-border-color: #6C664B;
  --shiki-code-background: #EDE9DA;
  --shiki-code-comment: #BCBAB3;
  --shiki-code-normal: #6C664B;
  --shiki-code-punctuation: #6C664B;
  --shiki-gutter-border-color: #EDE9DA;
  --shiki-gutter-text-color: #BCBAB3;
  --shiki-gutter-text-color-highlight: #6C664B;
  --shiki-highlight-neutral: #6C664B;
  --shiki-terminal-dots-color: #BCBAB3;
  --slider-thumb-border-color: #DEDBCC;
  --slider-track-background: #EDE9DA;
  --status-bar-background: #FFFBEB;
  --status-bar-border-color: #EDE9DA;
  --status-bar-text-color: #6C664B;
  --suggestion-background: #EDE9DA;
  --tab-background-active: #EDE9DA;
  --tab-container-background: #EDE9DA;
  --tab-divider-color: #DEDBCC;
  --tab-outline-color: #EDE9DA;
  --tab-switcher-background: #EDE9DA;
  --tab-switcher-menubar-background: linear-gradient(to top, #EDE9DA, transparent);
  --tab-text-color: #BCBAB3;
  --tab-text-color-active: #6C664B;
  --tab-text-color-focused: #6C664B;
  --tab-text-color-focused-active: #6C664B;
  --tab-text-color-focused-active-current: #1F1F1F;
  --table-add-button-border-color: #EDE9DA;
  --table-border-color: #EDE9DA;
  --table-drag-handle-color: #BCBAB3;
  --table-header-background: #DEDBCC;
  --table-header-border-color: #EDE9DA;
  --table-header-color: #1F1F1F;
  --table-width: 88cqw;
  --text-faint: #BCBAB3;
  --text-muted: #6C664B;
  --text-normal: #1F1F1F;
  --text-selection: color-mix(in srgb, hsl(258, 88%, 66%), transparent 70%);
  --titlebar-background: #EDE9DA;
  --titlebar-border-color: #EDE9DA;
  --titlebar-text-color: #6C664B;
  --titlebar-text-color-focused: #1F1F1F;
  --vault-profile-color: #1F1F1F;
  --vault-profile-color-hover: #1F1F1F;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(237, 233, 218);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body html {
  --drx-border-radius-inner: 10px;
  --drx-border-radius-outer: 16px;
  background-color: rgb(30, 31, 41);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body del {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(188, 186, 179);
}

html[saved-theme="light"] body p {
  color: rgb(108, 102, 75);
  outline: rgb(108, 102, 75) none 0px;
  text-decoration-color: rgb(108, 102, 75);
}`,
    links: `html[saved-theme="light"] body a.internal-link.broken {
  text-decoration: underline rgb(203, 58, 42);
  text-decoration-color: rgb(203, 58, 42);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body dt {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ol > li {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ul > li {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(255, 251, 235);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body table {
  color: rgb(31, 31, 31);
  width: 662px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body tr {
  background-color: rgb(255, 251, 235);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body figcaption {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(188, 186, 179);
  border-left-color: rgb(188, 186, 179);
  border-right-color: rgb(188, 186, 179);
  border-top-color: rgb(188, 186, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(108, 102, 75);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(108, 102, 75);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 233, 218);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 233, 218);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(188, 186, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 114, 208, 228;
  background: rgba(98, 114, 164, 0.247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 255,  85,  85;
  background: rgba(163, 20, 77, 0.31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(163, 20, 77, 0.31);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 255,  85,  85;
  background: rgba(98, 114, 164, 0.247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 255, 121, 198;
  background: rgba(163, 20, 77, 0.31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(163, 20, 77, 0.31);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 255,  85,  85;
  background: rgba(98, 114, 164, 0.247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 98, 114, 164;
  background: rgba(98, 114, 164, 0.247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 98, 114, 164;
  background: rgba(98, 114, 164, 0.247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 255, 184, 108;
  background: rgba(175, 58, 3, 0.31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(175, 58, 3, 0.31);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 189, 147, 249;
  background: rgba(100, 74, 201, 0.31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(100, 74, 201, 0.31);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 55, 235,  98;
  background: rgba(20, 113, 10, 0.31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(20, 113, 10, 0.31);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 114, 208, 228;
  background: rgba(3, 106, 150, 0.31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(3, 106, 150, 0.31);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: white;
  background: rgb(203, 58, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(203, 58, 42);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 184, 108;
  background: rgba(175, 58, 3, 0.31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(175, 58, 3, 0.31);
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(98, 114, 164);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
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
  background-color: rgb(222, 219, 204);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(222, 219, 204);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(222, 219, 204);
  border-right-color: rgb(222, 219, 204);
  border-top-color: rgb(222, 219, 204);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(222, 219, 204);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(222, 219, 204);
  border-right-color: rgb(222, 219, 204);
  border-top-color: rgb(222, 219, 204);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(222, 219, 204);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body h1 {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(31, 31, 31);
  font-size: 25.6px;
}

html[saved-theme="light"] body h2 {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body h3 {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body h4 {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body h5 {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body h6 {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgb(206, 204, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 204, 192);
  border-left-width: 1px;
  border-right-color: rgb(206, 204, 192);
  border-right-width: 1px;
  border-top-color: rgb(206, 204, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(108, 102, 75);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(31, 31, 31);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-left-width: 3px;
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(108, 102, 75);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(108, 102, 75);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(108, 102, 75);
  stroke: rgb(108, 102, 75);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(188, 186, 179);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(237, 233, 218);
  border-color: rgb(31, 31, 31);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(237, 233, 218);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(108, 102, 75);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(237, 233, 218);
  border-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(237, 233, 218);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(31, 31, 31);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(237, 233, 218);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body abbr {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(222, 219, 204);
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body sub {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body summary {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body sup {
  color: rgb(31, 31, 31);
}`,
  },
};
