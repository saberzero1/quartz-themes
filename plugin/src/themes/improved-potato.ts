import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "improved-potato",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-d: 61%;
  --accent-h: 206;
  --accent-l: 60%;
  --accent-s: 92%;
  --background-modifier-active-hover: rgba(59, 166, 247, 0.1);
  --background-modifier-border: #455063;
  --background-modifier-border-focus: #647590;
  --background-modifier-border-hover: #546178;
  --background-modifier-error: #c03c40;
  --background-modifier-error-hover: #c03c40;
  --background-modifier-error-rgb: 192, 60, 64;
  --background-modifier-form-field: #303845;
  --background-modifier-form-field-hover: #303845;
  --background-modifier-success: #33a555;
  --background-modifier-success-rgb: 51, 165, 85;
  --background-primary: #171b21;
  --background-primary-alt: #262c36;
  --background-secondary: #262c36;
  --background-secondary-alt: #455063;
  --base-d: 11%;
  --base-h: 218;
  --base-l: 97%;
  --base-s: 18%;
  --bases-cards-background: #171b21;
  --bases-cards-cover-background: #262c36;
  --bases-cards-shadow: 0 0 0 1px #455063;
  --bases-cards-shadow-hover: 0 0 0 1px #546178;
  --bases-embed-border-color: #455063;
  --bases-group-heading-property-color: #aeb7c7;
  --bases-table-border-color: #455063;
  --bases-table-cell-background-active: #171b21;
  --bases-table-cell-background-disabled: #262c36;
  --bases-table-cell-background-selected: rgba(59, 166, 247, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #647590;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(59, 166, 247);
  --bases-table-group-background: #262c36;
  --bases-table-header-background: #171b21;
  --bases-table-header-color: #aeb7c7;
  --bases-table-summary-background: #171b21;
  --blockquote-border-color: rgb(59, 166, 247);
  --blue: #5788d8;
  --blur-background: color-mix(in srgb, #455063 65%, transparent) linear-gradient(#455063, color-mix(in srgb, #455063 65%, transparent));
  --callout-bug: 192, 60, 64;
  --callout-color-blue: 173, 204, 255;
  --callout-color-cyan: 171, 247, 247;
  --callout-color-green: 187, 250, 187;
  --callout-color-grey: 158, 158, 158;
  --callout-color-light-blue: 172, 226, 251;
  --callout-color-light-purple: 233, 182, 245;
  --callout-color-orange: 255, 206, 153;
  --callout-color-pink: 255, 184, 235;
  --callout-color-purple: 210, 179, 255;
  --callout-color-red: 255, 143, 143;
  --callout-color-yellow: 255, 243, 163;
  --callout-error: 192, 60, 64;
  --callout-example: 16135, 110, 196;
  --callout-fail: 192, 60, 64;
  --callout-icon-c1: lucide-scan;
  --callout-icon-c2: lucide-scan;
  --callout-icon-c3: lucide-scan;
  --callout-icon-c4: lucide-scan;
  --callout-important: 51, 150, 148;
  --callout-question: 168, 111, 50;
  --callout-success: 51, 165, 85;
  --callout-summary: 51, 150, 148;
  --callout-tip: 51, 150, 148;
  --callout-warning: 168, 111, 50;
  --canvas-background: #171b21;
  --canvas-card-label-color: #7b89a3;
  --canvas-color-1: 192, 60, 64;
  --canvas-color-2: 168, 111, 50;
  --canvas-color-3: 141, 139, 29;
  --canvas-color-4: 51, 165, 85;
  --canvas-color-5: 51, 150, 148;
  --canvas-color-6: 16135, 110, 196;
  --canvas-dot-pattern: #455063;
  --caret-color: #ccd2db;
  --checkbox-border-color: #7b89a3;
  --checkbox-border-color-hover: #aeb7c7;
  --checkbox-color: rgb(59, 166, 247);
  --checkbox-color-hover: rgb(102, 193, 250);
  --checkbox-marker-color: #171b21;
  --checklist-done-color: #aeb7c7;
  --code-background: #262c36;
  --code-border-color: #455063;
  --code-comment: #7b89a3;
  --code-function: #c053d8;
  --code-important: #d85757;
  --code-keyword: #54b1db;
  --code-normal: #ccd2db;
  --code-operator: #d34fae;
  --code-property: #58ca58;
  --code-punctuation: #aeb7c7;
  --code-string: #d49755;
  --code-tag: #5788d8;
  --code-value: #52d8d8;
  --collapse-icon-color: #7b89a3;
  --collapse-icon-color-collapsed: rgb(102, 193, 250);
  --color-accent: rgb(59, 166, 247);
  --color-accent-1: rgb(102, 193, 250);
  --color-accent-2: rgb(139, 213, 253);
  --color-accent-hsl: 206, 92%, 60%;
  --color-base-00: #171b21;
  --color-base-10: #262c36;
  --color-base-100: #ccd2db;
  --color-base-20: #262c36;
  --color-base-25: #303845;
  --color-base-30: #455063;
  --color-base-35: #546178;
  --color-base-40: #647590;
  --color-base-50: #7b89a3;
  --color-base-60: #939fb4;
  --color-base-70: #aeb7c7;
  --color-cyan: rgb(51, 150, 148);
  --color-cyan-rgb: 51, 150, 148;
  --color-green: #33a555;
  --color-green-rgb: 51, 165, 85;
  --color-orange: #a86f32;
  --color-orange-rgb: 168, 111, 50;
  --color-pink: #af608a;
  --color-pink-rgb: 175, 96, 138;
  --color-purple: #876ec4;
  --color-purple-rgb: 16135, 110, 196;
  --color-red: #c03c40;
  --color-red-rgb: 192, 60, 64;
  --color-yellow: #8d8b1d;
  --color-yellow-rgb: 141, 139, 29;
  --current-line-number-color: #dac752;
  --cyan: #52d8d8;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #455063;
  --divider-color-hover: rgb(59, 166, 247);
  --dropdown-background: #455063;
  --dropdown-background-hover: #546178;
  --em-color: #d34fae;
  --embed-block-shadow-hover: 0 0 0 1px #455063, inset 0 0 0 1px #455063;
  --embed-border-start: 2px solid rgb(59, 166, 247);
  --file-header-background: #171b21;
  --file-header-background-focused: #171b21;
  --flair-background: #455063;
  --flair-color: #ccd2db;
  --footnote-divider-color: #455063;
  --footnote-id-color: #aeb7c7;
  --footnote-id-color-no-occurrences: #7b89a3;
  --graph-line: #546178;
  --graph-node: #aeb7c7;
  --graph-node-attachment: #8d8b1d;
  --graph-node-focused: rgb(102, 193, 250);
  --graph-node-tag: #33a555;
  --graph-node-unresolved: #7b89a3;
  --graph-text: #ccd2db;
  --gray: var(--text-muted);
  --green: #58ca58;
  --h1-color: #ccd2db;
  --h1-size: 1.7rem;
  --h2-color: #ccd2db;
  --h2-size: 1.5rem;
  --h3-color: #5788d8;
  --h3-size: 1.2rem;
  --h4-color: #dac752;
  --h4-size: 1.1rem;
  --h5-color: #d85757;
  --h5-size: 1rem;
  --h6-color: #8956d6;
  --h6-size: 0.9rem;
  --heading-formatting: #7b89a3;
  --highlight: var(--background-modifier-active-hover);
  --hr-color: #455063;
  --icon-color: #aeb7c7;
  --icon-color-active: rgb(102, 193, 250);
  --icon-color-focused: #ccd2db;
  --icon-color-hover: #aeb7c7;
  --inline-title-color: #ccd2db;
  --inline-title-size: 1.7rem;
  --input-date-separator: #7b89a3;
  --input-placeholder-color: #7b89a3;
  --interactive-accent: rgb(59, 166, 247);
  --interactive-accent-hover: rgb(102, 193, 250);
  --interactive-accent-hsl: 206, 92%, 60%;
  --interactive-hover: #546178;
  --interactive-normal: #455063;
  --light: var(--background-primary);
  --light-blue: #54b1db;
  --light-purple: #c053d8;
  --lightgray: var(--background-secondary);
  --line-number-color: #7b89a3;
  --link-color: rgb(102, 193, 250);
  --link-color-hover: rgb(139, 213, 253);
  --link-external-color: rgb(102, 193, 250);
  --link-external-color-hover: rgb(139, 213, 253);
  --link-unresolved-color: rgb(102, 193, 250);
  --link-unresolved-decoration-color: rgba(59, 166, 247, 0.3);
  --list-marker-color: #7b89a3;
  --list-marker-color-collapsed: rgb(102, 193, 250);
  --list-marker-color-hover: #aeb7c7;
  --menu-background: #262c36;
  --menu-border-color: #546178;
  --metadata-border-color: #455063;
  --metadata-divider-color: #455063;
  --metadata-input-text-color: #ccd2db;
  --metadata-label-text-color: #aeb7c7;
  --metadata-label-text-color-hover: #aeb7c7;
  --metadata-property-box-shadow-focus: 0 0 0 2px #647590;
  --metadata-property-box-shadow-hover: 0 0 0 1px #546178;
  --modal-background: #171b21;
  --modal-border-color: #647590;
  --nav-collapse-icon-color: #7b89a3;
  --nav-collapse-icon-color-collapsed: #7b89a3;
  --nav-heading-color: #ccd2db;
  --nav-heading-color-collapsed: #7b89a3;
  --nav-heading-color-collapsed-hover: #aeb7c7;
  --nav-heading-color-hover: #ccd2db;
  --nav-item-background-selected: rgba(59, 166, 247, 0.15);
  --nav-item-color: #aeb7c7;
  --nav-item-color-active: #ccd2db;
  --nav-item-color-highlighted: rgb(102, 193, 250);
  --nav-item-color-hover: #ccd2db;
  --nav-item-color-selected: #ccd2db;
  --nav-tag-color: #7b89a3;
  --nav-tag-color-active: #aeb7c7;
  --nav-tag-color-hover: #aeb7c7;
  --orange: #d49755;
  --pdf-background: #171b21;
  --pdf-page-background: #171b21;
  --pdf-shadow: 0 0 0 1px #455063;
  --pdf-sidebar-background: #171b21;
  --pdf-thumbnail-shadow: 0 0 0 1px #455063;
  --pill-border-color: #455063;
  --pill-border-color-hover: #546178;
  --pill-color: #aeb7c7;
  --pill-color-hover: #ccd2db;
  --pill-color-remove: #7b89a3;
  --pill-color-remove-hover: rgb(102, 193, 250);
  --pink: #d34fae;
  --prompt-background: #171b21;
  --prompt-border-color: #647590;
  --purple: #8956d6;
  --quote-color: #58ca58;
  --raised-background: color-mix(in srgb, #455063 65%, transparent) linear-gradient(#455063, color-mix(in srgb, #455063 65%, transparent));
  --red: #d85757;
  --ribbon-background: #262c36;
  --ribbon-background-collapsed: #171b21;
  --search-clear-button-color: #aeb7c7;
  --search-icon-color: #aeb7c7;
  --search-result-background: #171b21;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #ccd2db;
  --setting-items-background: #262c36;
  --setting-items-border-color: #455063;
  --slider-thumb-border-color: #546178;
  --slider-track-background: #455063;
  --status-bar-background: #262c36;
  --status-bar-border-color: #455063;
  --status-bar-text-color: #aeb7c7;
  --strong-color: #d34fae;
  --suggestion-background: #171b21;
  --sync-avatar-color-1: #c03c40;
  --sync-avatar-color-2: #a86f32;
  --sync-avatar-color-3: #8d8b1d;
  --sync-avatar-color-4: #33a555;
  --sync-avatar-color-5: rgb(51, 150, 148);
  --sync-avatar-color-7: #876ec4;
  --sync-avatar-color-8: #af608a;
  --tab-background-active: #171b21;
  --tab-container-background: #262c36;
  --tab-divider-color: #546178;
  --tab-outline-color: #455063;
  --tab-switcher-background: #262c36;
  --tab-switcher-menubar-background: linear-gradient(to top, #262c36, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(59, 166, 247);
  --tab-text-color: #7b89a3;
  --tab-text-color-active: #aeb7c7;
  --tab-text-color-focused: #aeb7c7;
  --tab-text-color-focused-active: #aeb7c7;
  --tab-text-color-focused-active-current: #ccd2db;
  --tab-text-color-focused-highlighted: rgb(102, 193, 250);
  --table-add-button-border-color: #455063;
  --table-border-color: #455063;
  --table-drag-handle-background-active: rgb(59, 166, 247);
  --table-drag-handle-color: #7b89a3;
  --table-header-border-color: #455063;
  --table-header-color: #ccd2db;
  --table-selection: rgba(59, 166, 247, 0.1);
  --table-selection-border-color: rgb(59, 166, 247);
  --tag-background: rgba(59, 166, 247, 0.1);
  --tag-background-hover: rgba(59, 166, 247, 0.2);
  --tag-border-color: rgba(59, 166, 247, 0.15);
  --tag-border-color-hover: rgba(59, 166, 247, 0.15);
  --tag-color: rgb(102, 193, 250);
  --tag-color-hover: rgb(102, 193, 250);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(102, 193, 250);
  --text-accent-hover: rgb(139, 213, 253);
  --text-error: #c03c40;
  --text-faint: #7b89a3;
  --text-muted: #aeb7c7;
  --text-normal: #ccd2db;
  --text-selection: rgba(59, 166, 247, 0.33);
  --text-success: #33a555;
  --text-warning: #a86f32;
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: #303845;
  --titlebar-background-focused: #455063;
  --titlebar-border-color: #455063;
  --titlebar-text-color: #aeb7c7;
  --titlebar-text-color-focused: #ccd2db;
  --vault-profile-color: #ccd2db;
  --vault-profile-color-hover: #ccd2db;
  --yellow: #dac752;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 44, 54);
  color: rgb(204, 210, 219);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(23, 27, 33);
  color: rgb(204, 210, 219);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 44, 54);
  color: rgb(204, 210, 219);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(69, 80, 99);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 44, 54);
  border-left-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}

body div#quartz-root {
  background-color: rgb(23, 27, 33);
  color: rgb(204, 210, 219);
}`,
    typography: `body .page article p > b, b {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

body .page article p > em, em {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

body .page article p > i, i {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

body .page article p > strong, strong {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

body .text-highlight {
  color: rgb(204, 210, 219);
  outline: rgb(204, 210, 219) none 0px;
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body del {
  color: rgb(204, 210, 219);
  outline: rgb(204, 210, 219) none 0px;
  text-decoration: line-through rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body p {
  color: rgb(174, 183, 199);
  outline: rgb(174, 183, 199) none 0px;
  text-decoration: rgb(174, 183, 199);
  text-decoration-color: rgb(174, 183, 199);
}`,
    links: `body a.external, footer a {
  color: rgb(102, 193, 250);
  outline: rgb(102, 193, 250) none 0px;
  text-decoration: underline rgb(102, 193, 250);
  text-decoration-color: rgb(102, 193, 250);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(102, 193, 250);
  outline: rgb(102, 193, 250) none 0px;
  text-decoration: underline rgb(102, 193, 250);
  text-decoration-color: rgb(102, 193, 250);
}

body a.internal.broken {
  color: rgb(102, 193, 250);
  outline: rgb(102, 193, 250) none 0px;
  text-decoration: underline rgba(59, 166, 247, 0.3);
  text-decoration-color: rgba(59, 166, 247, 0.3);
}`,
    lists: `body dd {
  color: rgb(204, 210, 219);
}

body dt {
  color: rgb(204, 210, 219);
}

body ol > li {
  color: rgb(204, 210, 219);
}

body ol.overflow {
  background-color: rgb(23, 27, 33);
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body ul > li {
  color: rgb(204, 210, 219);
}

body ul.overflow {
  background-color: rgb(23, 27, 33);
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(123, 137, 163);
  text-decoration: rgb(123, 137, 163);
}

body blockquote {
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body table {
  color: rgb(204, 210, 219);
}

body td {
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}

body th {
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}

body pre > code > [data-line] {
  border-left-color: rgb(192, 83, 216);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(192, 83, 216);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(192, 83, 216);
  border-left-color: rgb(192, 83, 216);
  border-right-color: rgb(192, 83, 216);
  border-top-color: rgb(192, 83, 216);
}

body pre > code, pre:has(> code) {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body figcaption {
  color: rgb(204, 210, 219);
}

body figure {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body img {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body video {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    embeds: `body .file-embed {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
}

body .footnotes {
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

body .transclude {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(59, 166, 247);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(59, 166, 247);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(174, 183, 199);
  text-decoration: line-through rgb(174, 183, 199);
  text-decoration-color: rgb(174, 183, 199);
}

body input[type=checkbox] {
  border-bottom-color: rgb(123, 137, 163);
  border-left-color: rgb(123, 137, 163);
  border-right-color: rgb(123, 137, 163);
  border-top-color: rgb(123, 137, 163);
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  --callout-color: 51, 150, 148;
  background-color: rgba(51, 150, 148, 0.1);
  border-bottom-color: rgba(51, 150, 148, 0.25);
  border-left-color: rgba(51, 150, 148, 0.25);
  border-right-color: rgba(51, 150, 148, 0.25);
  border-top-color: rgba(51, 150, 148, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 192, 60, 64;
  background-color: rgba(192, 60, 64, 0.1);
  border-bottom-color: rgba(192, 60, 64, 0.25);
  border-left-color: rgba(192, 60, 64, 0.25);
  border-right-color: rgba(192, 60, 64, 0.25);
  border-top-color: rgba(192, 60, 64, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 192, 60, 64;
  background-color: rgba(192, 60, 64, 0.1);
  border-bottom-color: rgba(192, 60, 64, 0.25);
  border-left-color: rgba(192, 60, 64, 0.25);
  border-right-color: rgba(192, 60, 64, 0.25);
  border-top-color: rgba(192, 60, 64, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 16135, 110, 196;
  background-color: rgba(255, 110, 196, 0.1);
  border-bottom-color: rgba(255, 110, 196, 0.25);
  border-left-color: rgba(255, 110, 196, 0.25);
  border-right-color: rgba(255, 110, 196, 0.25);
  border-top-color: rgba(255, 110, 196, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 192, 60, 64;
  background-color: rgba(192, 60, 64, 0.1);
  border-bottom-color: rgba(192, 60, 64, 0.25);
  border-left-color: rgba(192, 60, 64, 0.25);
  border-right-color: rgba(192, 60, 64, 0.25);
  border-top-color: rgba(192, 60, 64, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 168, 111, 50;
  background-color: rgba(168, 111, 50, 0.1);
  border-bottom-color: rgba(168, 111, 50, 0.25);
  border-left-color: rgba(168, 111, 50, 0.25);
  border-right-color: rgba(168, 111, 50, 0.25);
  border-top-color: rgba(168, 111, 50, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 51, 165, 85;
  background-color: rgba(51, 165, 85, 0.1);
  border-bottom-color: rgba(51, 165, 85, 0.25);
  border-left-color: rgba(51, 165, 85, 0.25);
  border-right-color: rgba(51, 165, 85, 0.25);
  border-top-color: rgba(51, 165, 85, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 51, 150, 148;
  background-color: rgba(51, 150, 148, 0.1);
  border-bottom-color: rgba(51, 150, 148, 0.25);
  border-left-color: rgba(51, 150, 148, 0.25);
  border-right-color: rgba(51, 150, 148, 0.25);
  border-top-color: rgba(51, 150, 148, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 168, 111, 50;
  background-color: rgba(168, 111, 50, 0.1);
  border-bottom-color: rgba(168, 111, 50, 0.25);
  border-left-color: rgba(168, 111, 50, 0.25);
  border-right-color: rgba(168, 111, 50, 0.25);
  border-top-color: rgba(168, 111, 50, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(48, 56, 69);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}

body .search > .search-container > .search-space {
  background-color: rgb(23, 27, 33);
  border-bottom-color: rgb(100, 117, 144);
  border-left-color: rgb(100, 117, 144);
  border-right-color: rgb(100, 117, 144);
  border-top-color: rgb(100, 117, 144);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 210, 219);
  outline: rgb(204, 210, 219) none 0px;
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 210, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 210, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 210, 219);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(100, 117, 144);
  border-left-color: rgb(100, 117, 144);
  border-right-color: rgb(100, 117, 144);
  border-top-color: rgb(100, 117, 144);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 44, 54);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 210, 219);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(59, 166, 247, 0.1);
  border-bottom-color: rgba(59, 166, 247, 0.15);
  border-left-color: rgba(59, 166, 247, 0.15);
  border-right-color: rgba(59, 166, 247, 0.15);
  border-top-color: rgba(59, 166, 247, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(102, 193, 250);
}

body h1 {
  color: rgb(204, 210, 219);
}

body h2 {
  color: rgb(204, 210, 219);
}

body h2.page-title, h2.page-title a {
  color: rgb(204, 210, 219);
}

body h3 {
  color: rgb(87, 136, 216);
}

body h4 {
  color: rgb(218, 199, 82);
}

body h5 {
  color: rgb(216, 87, 87);
}

body h6 {
  color: rgb(137, 86, 214);
}

body hr {
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(174, 183, 199);
  text-decoration: rgb(174, 183, 199);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(174, 183, 199);
  text-decoration: rgb(174, 183, 199);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(174, 183, 199);
  text-decoration: rgb(174, 183, 199);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}`,
    footer: `body footer {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(174, 183, 199);
}

body footer ul li a {
  color: rgb(174, 183, 199);
  text-decoration: rgb(174, 183, 199);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 210, 219);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(174, 183, 199);
  text-decoration: rgb(174, 183, 199);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(174, 183, 199);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body li.section-li > .section .meta {
  color: rgb(174, 183, 199);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(174, 183, 199);
  text-decoration: rgb(174, 183, 199);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}

body .darkmode svg {
  color: rgb(174, 183, 199);
  stroke: rgb(174, 183, 199);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}

body .breadcrumb-element p {
  color: rgb(123, 137, 163);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

body .metadata {
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(174, 183, 199);
}

body .metadata-properties {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}

body .navigation-progress {
  background-color: rgb(38, 44, 54);
}

body .page-header h2.page-title {
  color: rgb(204, 210, 219);
}

body abbr {
  color: rgb(204, 210, 219);
  text-decoration: underline dotted rgb(204, 210, 219);
}

body details {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body input[type=text] {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}

body kbd {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

body progress {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

body sub {
  color: rgb(204, 210, 219);
}

body summary {
  color: rgb(204, 210, 219);
}

body sup {
  color: rgb(204, 210, 219);
}`,
  },
  light: {
    base: `:root:root {
  --accent-d: 61%;
  --accent-h: 206;
  --accent-l: 60%;
  --accent-s: 92%;
  --background-modifier-active-hover: rgba(59, 166, 247, 0.1);
  --background-modifier-border: #b7bfcd;
  --background-modifier-border-focus: #8d9ab0;
  --background-modifier-border-hover: #a2acbe;
  --background-modifier-form-field: #f6f7f9;
  --background-modifier-form-field-hover: #f6f7f9;
  --background-primary: #f6f7f9;
  --background-primary-alt: #e1e4ea;
  --background-secondary: #e1e4ea;
  --base-d: 11%;
  --base-h: 218;
  --base-l: 97%;
  --base-s: 18%;
  --bases-cards-background: #f6f7f9;
  --bases-cards-cover-background: #e1e4ea;
  --bases-cards-shadow: 0 0 0 1px #b7bfcd;
  --bases-cards-shadow-hover: 0 0 0 1px #a2acbe;
  --bases-embed-border-color: #b7bfcd;
  --bases-group-heading-property-color: #56647b;
  --bases-table-border-color: #b7bfcd;
  --bases-table-cell-background-active: #f6f7f9;
  --bases-table-cell-background-disabled: #e1e4ea;
  --bases-table-cell-background-selected: rgba(59, 166, 247, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #8d9ab0;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(83, 180, 249);
  --bases-table-group-background: #e1e4ea;
  --bases-table-header-background: #f6f7f9;
  --bases-table-header-color: #56647b;
  --bases-table-summary-background: #f6f7f9;
  --blockquote-border-color: rgb(83, 180, 249);
  --blue: #5788d8;
  --blur-background: color-mix(in srgb, #f6f7f9 65%, transparent) linear-gradient(#f6f7f9, color-mix(in srgb, #f6f7f9 65%, transparent));
  --callout-color-blue: 173, 204, 255;
  --callout-color-cyan: 171, 247, 247;
  --callout-color-green: 187, 250, 187;
  --callout-color-grey: 158, 158, 158;
  --callout-color-light-blue: 172, 226, 251;
  --callout-color-light-purple: 233, 182, 245;
  --callout-color-orange: 255, 206, 153;
  --callout-color-pink: 255, 184, 235;
  --callout-color-purple: 210, 179, 255;
  --callout-color-red: 255, 143, 143;
  --callout-color-yellow: 255, 243, 163;
  --callout-icon-c1: lucide-scan;
  --callout-icon-c2: lucide-scan;
  --callout-icon-c3: lucide-scan;
  --callout-icon-c4: lucide-scan;
  --canvas-background: #f6f7f9;
  --canvas-card-label-color: #7886a1;
  --canvas-dot-pattern: #b7bfcd;
  --caret-color: #485465;
  --checkbox-border-color: #7886a1;
  --checkbox-border-color-hover: #56647b;
  --checkbox-color: rgb(83, 180, 249);
  --checkbox-color-hover: rgb(102, 193, 250);
  --checkbox-marker-color: #f6f7f9;
  --checklist-done-color: #56647b;
  --code-background: #e1e4ea;
  --code-border-color: #b7bfcd;
  --code-comment: #7886a1;
  --code-function: #c053d8;
  --code-important: #d85757;
  --code-keyword: #54b1db;
  --code-normal: #485465;
  --code-operator: #d34fae;
  --code-property: #58ca58;
  --code-punctuation: #56647b;
  --code-string: #d49755;
  --code-tag: #5788d8;
  --code-value: #52d8d8;
  --collapse-icon-color: #7886a1;
  --collapse-icon-color-collapsed: rgb(59, 166, 247);
  --color-accent: rgb(59, 166, 247);
  --color-accent-1: rgb(83, 180, 249);
  --color-accent-2: rgb(102, 193, 250);
  --color-accent-hsl: 206, 92%, 60%;
  --color-base-00: #f6f7f9;
  --color-base-10: #e1e4ea;
  --color-base-100: #485465;
  --color-base-20: #e1e4ea;
  --color-base-25: #ccd2db;
  --color-base-30: #b7bfcd;
  --color-base-35: #a2acbe;
  --color-base-40: #8d9ab0;
  --color-base-50: #7886a1;
  --color-base-60: #647590;
  --color-base-70: #56647b;
  --current-line-number-color: #dac752;
  --cyan: #52d8d8;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #b7bfcd;
  --divider-color-hover: rgb(83, 180, 249);
  --dropdown-background: #f6f7f9;
  --dropdown-background-hover: #e1e4ea;
  --em-color: #d34fae;
  --embed-block-shadow-hover: 0 0 0 1px #b7bfcd, inset 0 0 0 1px #b7bfcd;
  --embed-border-start: 2px solid rgb(83, 180, 249);
  --file-header-background: #f6f7f9;
  --file-header-background-focused: #f6f7f9;
  --flair-background: #f6f7f9;
  --flair-color: #485465;
  --footnote-divider-color: #b7bfcd;
  --footnote-id-color: #56647b;
  --footnote-id-color-no-occurrences: #7886a1;
  --graph-line: #a2acbe;
  --graph-node: #56647b;
  --graph-node-focused: rgb(59, 166, 247);
  --graph-node-unresolved: #7886a1;
  --graph-text: #485465;
  --gray: var(--text-muted);
  --green: #58ca58;
  --h1-color: #485465;
  --h1-size: 1.7rem;
  --h2-color: #485465;
  --h2-size: 1.5rem;
  --h3-color: #5788d8;
  --h3-size: 1.2rem;
  --h4-color: #dac752;
  --h4-size: 1.1rem;
  --h5-color: #d85757;
  --h5-size: 1rem;
  --h6-color: #8956d6;
  --h6-size: 0.9rem;
  --heading-formatting: #7886a1;
  --highlight: var(--background-modifier-active-hover);
  --hr-color: #b7bfcd;
  --icon-color: #56647b;
  --icon-color-active: rgb(59, 166, 247);
  --icon-color-focused: #485465;
  --icon-color-hover: #56647b;
  --inline-title-color: #485465;
  --inline-title-size: 1.7rem;
  --input-date-separator: #7886a1;
  --input-placeholder-color: #7886a1;
  --interactive-accent: rgb(83, 180, 249);
  --interactive-accent-hover: rgb(102, 193, 250);
  --interactive-accent-hsl: 206, 92%, 60%;
  --interactive-hover: #e1e4ea;
  --interactive-normal: #f6f7f9;
  --light: var(--background-primary);
  --light-blue: #54b1db;
  --light-purple: #c053d8;
  --lightgray: var(--background-secondary);
  --line-number-color: #7886a1;
  --link-color: rgb(59, 166, 247);
  --link-color-hover: rgb(102, 193, 250);
  --link-external-color: rgb(59, 166, 247);
  --link-external-color-hover: rgb(102, 193, 250);
  --link-unresolved-color: rgb(59, 166, 247);
  --link-unresolved-decoration-color: rgba(59, 166, 247, 0.3);
  --list-marker-color: #7886a1;
  --list-marker-color-collapsed: rgb(59, 166, 247);
  --list-marker-color-hover: #56647b;
  --menu-background: #e1e4ea;
  --menu-border-color: #a2acbe;
  --metadata-border-color: #b7bfcd;
  --metadata-divider-color: #b7bfcd;
  --metadata-input-text-color: #485465;
  --metadata-label-text-color: #56647b;
  --metadata-label-text-color-hover: #56647b;
  --metadata-property-box-shadow-focus: 0 0 0 2px #8d9ab0;
  --metadata-property-box-shadow-hover: 0 0 0 1px #a2acbe;
  --modal-background: #f6f7f9;
  --modal-border-color: #8d9ab0;
  --nav-collapse-icon-color: #7886a1;
  --nav-collapse-icon-color-collapsed: #7886a1;
  --nav-heading-color: #485465;
  --nav-heading-color-collapsed: #7886a1;
  --nav-heading-color-collapsed-hover: #56647b;
  --nav-heading-color-hover: #485465;
  --nav-item-background-selected: rgba(59, 166, 247, 0.15);
  --nav-item-color: #56647b;
  --nav-item-color-active: #485465;
  --nav-item-color-highlighted: rgb(59, 166, 247);
  --nav-item-color-hover: #485465;
  --nav-item-color-selected: #485465;
  --nav-tag-color: #7886a1;
  --nav-tag-color-active: #56647b;
  --nav-tag-color-hover: #56647b;
  --orange: #d49755;
  --pdf-background: #f6f7f9;
  --pdf-page-background: #f6f7f9;
  --pdf-sidebar-background: #f6f7f9;
  --pill-border-color: #b7bfcd;
  --pill-border-color-hover: #a2acbe;
  --pill-color: #56647b;
  --pill-color-hover: #485465;
  --pill-color-remove: #7886a1;
  --pill-color-remove-hover: rgb(59, 166, 247);
  --pink: #d34fae;
  --prompt-background: #f6f7f9;
  --prompt-border-color: #8d9ab0;
  --purple: #8956d6;
  --quote-color: #58ca58;
  --raised-background: color-mix(in srgb, #f6f7f9 65%, transparent) linear-gradient(#f6f7f9, color-mix(in srgb, #f6f7f9 65%, transparent));
  --red: #d85757;
  --ribbon-background: #e1e4ea;
  --ribbon-background-collapsed: #f6f7f9;
  --search-clear-button-color: #56647b;
  --search-icon-color: #56647b;
  --search-result-background: #f6f7f9;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #485465;
  --setting-items-background: #e1e4ea;
  --setting-items-border-color: #b7bfcd;
  --slider-thumb-border-color: #a2acbe;
  --slider-track-background: #b7bfcd;
  --status-bar-background: #e1e4ea;
  --status-bar-border-color: #b7bfcd;
  --status-bar-text-color: #56647b;
  --strong-color: #d34fae;
  --suggestion-background: #f6f7f9;
  --tab-background-active: #f6f7f9;
  --tab-container-background: #e1e4ea;
  --tab-divider-color: #a2acbe;
  --tab-outline-color: #b7bfcd;
  --tab-switcher-background: #e1e4ea;
  --tab-switcher-menubar-background: linear-gradient(to top, #e1e4ea, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(59, 166, 247);
  --tab-text-color: #7886a1;
  --tab-text-color-active: #56647b;
  --tab-text-color-focused: #56647b;
  --tab-text-color-focused-active: #56647b;
  --tab-text-color-focused-active-current: #485465;
  --tab-text-color-focused-highlighted: rgb(59, 166, 247);
  --table-add-button-border-color: #b7bfcd;
  --table-border-color: #b7bfcd;
  --table-drag-handle-background-active: rgb(83, 180, 249);
  --table-drag-handle-color: #7886a1;
  --table-header-border-color: #b7bfcd;
  --table-header-color: #485465;
  --table-selection: rgba(59, 166, 247, 0.1);
  --table-selection-border-color: rgb(83, 180, 249);
  --tag-background: rgba(59, 166, 247, 0.1);
  --tag-background-hover: rgba(59, 166, 247, 0.2);
  --tag-border-color: rgba(59, 166, 247, 0.15);
  --tag-border-color-hover: rgba(59, 166, 247, 0.15);
  --tag-color: rgb(59, 166, 247);
  --tag-color-hover: rgb(59, 166, 247);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(59, 166, 247);
  --text-accent-hover: rgb(102, 193, 250);
  --text-faint: #7886a1;
  --text-muted: #56647b;
  --text-normal: #485465;
  --text-selection: rgba(59, 166, 247, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: #e1e4ea;
  --titlebar-background-focused: #ccd2db;
  --titlebar-border-color: #b7bfcd;
  --titlebar-text-color: #56647b;
  --titlebar-text-color-focused: #485465;
  --vault-profile-color: #485465;
  --vault-profile-color-hover: #485465;
  --yellow: #dac752;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(225, 228, 234);
  color: rgb(72, 84, 101);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(246, 247, 249);
  color: rgb(72, 84, 101);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(225, 228, 234);
  color: rgb(72, 84, 101);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(183, 191, 205);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(225, 228, 234);
  border-left-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}

body div#quartz-root {
  background-color: rgb(246, 247, 249);
  color: rgb(72, 84, 101);
}`,
    typography: `body .page article p > b, b {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

body .page article p > em, em {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

body .page article p > i, i {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

body .page article p > strong, strong {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

body .text-highlight {
  color: rgb(72, 84, 101);
  outline: rgb(72, 84, 101) none 0px;
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body del {
  color: rgb(72, 84, 101);
  outline: rgb(72, 84, 101) none 0px;
  text-decoration: line-through rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body p {
  color: rgb(86, 100, 123);
  outline: rgb(86, 100, 123) none 0px;
  text-decoration: rgb(86, 100, 123);
  text-decoration-color: rgb(86, 100, 123);
}`,
    links: `body a.external, footer a {
  color: rgb(59, 166, 247);
  outline: rgb(59, 166, 247) none 0px;
  text-decoration: underline rgb(59, 166, 247);
  text-decoration-color: rgb(59, 166, 247);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(59, 166, 247);
  outline: rgb(59, 166, 247) none 0px;
  text-decoration: underline rgb(59, 166, 247);
  text-decoration-color: rgb(59, 166, 247);
}

body a.internal.broken {
  color: rgb(59, 166, 247);
  outline: rgb(59, 166, 247) none 0px;
  text-decoration: underline rgba(59, 166, 247, 0.3);
  text-decoration-color: rgba(59, 166, 247, 0.3);
}`,
    lists: `body dd {
  color: rgb(72, 84, 101);
}

body dt {
  color: rgb(72, 84, 101);
}

body ol > li {
  color: rgb(72, 84, 101);
}

body ol.overflow {
  background-color: rgb(246, 247, 249);
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body ul > li {
  color: rgb(72, 84, 101);
}

body ul.overflow {
  background-color: rgb(246, 247, 249);
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(120, 134, 161);
  text-decoration: rgb(120, 134, 161);
}

body blockquote {
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body table {
  color: rgb(72, 84, 101);
}

body td {
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}

body th {
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}`,
    code: `body code {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}

body pre > code > [data-line] {
  border-left-color: rgb(192, 83, 216);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(192, 83, 216);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(192, 83, 216);
  border-left-color: rgb(192, 83, 216);
  border-right-color: rgb(192, 83, 216);
  border-top-color: rgb(192, 83, 216);
}

body pre > code, pre:has(> code) {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body figcaption {
  color: rgb(72, 84, 101);
}

body figure {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body img {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body video {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    embeds: `body .file-embed {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
}

body .footnotes {
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

body .transclude {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(80, 178, 249);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body .transclude-inner {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(80, 178, 249);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(86, 100, 123);
  text-decoration: line-through rgb(86, 100, 123);
  text-decoration-color: rgb(86, 100, 123);
}

body input[type=checkbox] {
  border-bottom-color: rgb(120, 134, 161);
  border-left-color: rgb(120, 134, 161);
  border-right-color: rgb(120, 134, 161);
  border-top-color: rgb(120, 134, 161);
}

body li.task-list-item[data-task='!'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='*'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='-'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='/'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='>'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='?'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='I'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='S'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='b'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='c'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='d'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='f'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='i'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='k'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='l'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='p'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='u'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body li.task-list-item[data-task='w'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}`,
    search: `body .search > .search-button {
  background-color: rgb(246, 247, 249);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}

body .search > .search-container > .search-space {
  background-color: rgb(246, 247, 249);
  border-bottom-color: rgb(141, 154, 176);
  border-left-color: rgb(141, 154, 176);
  border-right-color: rgb(141, 154, 176);
  border-top-color: rgb(141, 154, 176);
}

body .search > .search-container > .search-space > * {
  color: rgb(72, 84, 101);
  outline: rgb(72, 84, 101) none 0px;
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(72, 84, 101);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(72, 84, 101);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(72, 84, 101);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(141, 154, 176);
  border-left-color: rgb(141, 154, 176);
  border-right-color: rgb(141, 154, 176);
  border-top-color: rgb(141, 154, 176);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(225, 228, 234);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(72, 84, 101);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(59, 166, 247, 0.1);
  border-bottom-color: rgba(59, 166, 247, 0.15);
  border-left-color: rgba(59, 166, 247, 0.15);
  border-right-color: rgba(59, 166, 247, 0.15);
  border-top-color: rgba(59, 166, 247, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(59, 166, 247);
}

body h1 {
  color: rgb(72, 84, 101);
}

body h2 {
  color: rgb(72, 84, 101);
}

body h2.page-title, h2.page-title a {
  color: rgb(72, 84, 101);
}

body h3 {
  color: rgb(87, 136, 216);
}

body h4 {
  color: rgb(218, 199, 82);
}

body h5 {
  color: rgb(216, 87, 87);
}

body h6 {
  color: rgb(137, 86, 214);
}

body hr {
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}

body ::-webkit-scrollbar-corner {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}

body ::-webkit-scrollbar-track {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(86, 100, 123);
  text-decoration: rgb(86, 100, 123);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(86, 100, 123);
  text-decoration: rgb(86, 100, 123);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(86, 100, 123);
  text-decoration: rgb(86, 100, 123);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}`,
    footer: `body footer {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(86, 100, 123);
}

body footer ul li a {
  color: rgb(86, 100, 123);
  text-decoration: rgb(86, 100, 123);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(72, 84, 101);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(86, 100, 123);
  text-decoration: rgb(86, 100, 123);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(86, 100, 123);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body li.section-li > .section .meta {
  color: rgb(86, 100, 123);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(86, 100, 123);
  text-decoration: rgb(86, 100, 123);
}

body ul.section-ul {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}

body .darkmode svg {
  color: rgb(86, 100, 123);
  stroke: rgb(86, 100, 123);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}

body .breadcrumb-element p {
  color: rgb(120, 134, 161);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

body .metadata {
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(86, 100, 123);
}

body .metadata-properties {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}

body .navigation-progress {
  background-color: rgb(225, 228, 234);
}

body .page-header h2.page-title {
  color: rgb(72, 84, 101);
}

body abbr {
  color: rgb(72, 84, 101);
  text-decoration: underline dotted rgb(72, 84, 101);
}

body details {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body input[type=text] {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}

body kbd {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

body progress {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

body sub {
  color: rgb(72, 84, 101);
}

body summary {
  color: rgb(72, 84, 101);
}

body sup {
  color: rgb(72, 84, 101);
}`,
  },
};
