import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "improved-potato",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "things-style",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-d: 61%;
  --accent-h: 206;
  --accent-l: 60%;
  --accent-s: 92%;
  --background-modifier-active-hover: hsla(206, 92%, 60%, 0.1);
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
  --bases-table-cell-background-selected: hsla(206, 92%, 60%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #647590;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(206, 92%, 60%);
  --bases-table-group-background: #262c36;
  --bases-table-header-background: #171b21;
  --bases-table-header-color: #aeb7c7;
  --bases-table-summary-background: #171b21;
  --blockquote-border-color: hsl(206, 92%, 60%);
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
  --checkbox-color: hsl(206, 92%, 60%);
  --checkbox-color-hover: hsl(203, 93.84%, 69%);
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
  --collapse-icon-color-collapsed: hsl(203, 93.84%, 69%);
  --color-accent: hsl(206, 92%, 60%);
  --color-accent-1: hsl(203, 93.84%, 69%);
  --color-accent-2: hsl(201, 96.6%, 77.4%);
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
  --dark: var(--text-normal, #ccd2db);
  --darkgray: var(--text-normal, #ccd2db);
  --divider-color: #455063;
  --divider-color-hover: hsl(206, 92%, 60%);
  --dropdown-background: #455063;
  --dropdown-background-hover: #546178;
  --em-color: #d34fae;
  --embed-block-shadow-hover: 0 0 0 1px #455063, inset 0 0 0 1px #455063;
  --embed-border-start: 2px solid hsl(206, 92%, 60%);
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
  --graph-node-focused: hsl(203, 93.84%, 69%);
  --graph-node-tag: #33a555;
  --graph-node-unresolved: #7b89a3;
  --graph-text: #ccd2db;
  --gray: var(--text-muted, #aeb7c7);
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
  --highlight: var(--background-modifier-active-hover, hsla(206, 92%, 60%, 0.1));
  --hr-color: #455063;
  --icon-color: #aeb7c7;
  --icon-color-active: hsl(203, 93.84%, 69%);
  --icon-color-focused: #ccd2db;
  --icon-color-hover: #aeb7c7;
  --inline-title-color: #ccd2db;
  --inline-title-size: 1.7rem;
  --input-date-separator: #7b89a3;
  --input-placeholder-color: #7b89a3;
  --interactive-accent: hsl(206, 92%, 60%);
  --interactive-accent-hover: hsl(203, 93.84%, 69%);
  --interactive-accent-hsl: 206, 92%, 60%;
  --interactive-hover: #546178;
  --interactive-normal: #455063;
  --light: var(--background-primary, #171b21);
  --light-blue: #54b1db;
  --light-purple: #c053d8;
  --lightgray: var(--background-secondary, #262c36);
  --line-number-color: #7b89a3;
  --link-color: hsl(203, 93.84%, 69%);
  --link-color-hover: hsl(201, 96.6%, 77.4%);
  --link-external-color: hsl(203, 93.84%, 69%);
  --link-external-color-hover: hsl(201, 96.6%, 77.4%);
  --link-unresolved-color: hsl(203, 93.84%, 69%);
  --link-unresolved-decoration-color: hsla(206, 92%, 60%, 0.3);
  --list-marker-color: #7b89a3;
  --list-marker-color-collapsed: hsl(203, 93.84%, 69%);
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
  --nav-item-background-selected: hsla(206, 92%, 60%, 0.15);
  --nav-item-color: #aeb7c7;
  --nav-item-color-active: #ccd2db;
  --nav-item-color-highlighted: hsl(203, 93.84%, 69%);
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
  --pill-color-remove-hover: hsl(203, 93.84%, 69%);
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
  --secondary: var(--text-accent, hsl(203, 93.84%, 69%));
  --setting-group-heading-color: #ccd2db;
  --setting-items-background: #262c36;
  --setting-items-border-color: #455063;
  --shiki-active-tab-border-color: #aeb7c7;
  --shiki-code-background: #262c36;
  --shiki-code-comment: #7b89a3;
  --shiki-code-function: #33a555;
  --shiki-code-important: #a86f32;
  --shiki-code-keyword: #af608a;
  --shiki-code-normal: #aeb7c7;
  --shiki-code-property: rgb(51, 150, 148);
  --shiki-code-punctuation: #aeb7c7;
  --shiki-code-string: #8d8b1d;
  --shiki-code-value: #876ec4;
  --shiki-gutter-border-color: #455063;
  --shiki-gutter-text-color: #7b89a3;
  --shiki-gutter-text-color-highlight: #aeb7c7;
  --shiki-highlight-green: rgba(51, 165, 85, 0.5);
  --shiki-highlight-green-background: rgba(51, 165, 85, 0.1);
  --shiki-highlight-neutral: #aeb7c7;
  --shiki-highlight-red: rgba(192, 60, 64, 0.5);
  --shiki-highlight-red-background: rgba(192, 60, 64, 0.1);
  --shiki-terminal-dots-color: #7b89a3;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(206, 92%, 60%);
  --tab-text-color: #7b89a3;
  --tab-text-color-active: #aeb7c7;
  --tab-text-color-focused: #aeb7c7;
  --tab-text-color-focused-active: #aeb7c7;
  --tab-text-color-focused-active-current: #ccd2db;
  --tab-text-color-focused-highlighted: hsl(203, 93.84%, 69%);
  --table-add-button-border-color: #455063;
  --table-border-color: #455063;
  --table-drag-handle-background-active: hsl(206, 92%, 60%);
  --table-drag-handle-color: #7b89a3;
  --table-header-border-color: #455063;
  --table-header-color: #ccd2db;
  --table-selection: hsla(206, 92%, 60%, 0.1);
  --table-selection-border-color: hsl(206, 92%, 60%);
  --tag-background: hsla(206, 92%, 60%, 0.1);
  --tag-background-hover: hsla(206, 92%, 60%, 0.2);
  --tag-border-color: hsla(206, 92%, 60%, 0.15);
  --tag-border-color-hover: hsla(206, 92%, 60%, 0.15);
  --tag-color: hsl(203, 93.84%, 69%);
  --tag-color-hover: hsl(203, 93.84%, 69%);
  --tertiary: var(--text-accent-hover, hsl(201, 96.6%, 77.4%));
  --text-accent: hsl(203, 93.84%, 69%);
  --text-accent-hover: hsl(201, 96.6%, 77.4%);
  --text-error: #c03c40;
  --text-faint: #7b89a3;
  --text-muted: #aeb7c7;
  --text-normal: #ccd2db;
  --text-selection: hsla(206, 92%, 60%, 0.33);
  --text-success: #33a555;
  --text-warning: #a86f32;
  --textHighlight: var(--background-modifier-active-hover, hsla(206, 92%, 60%, 0.1));
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

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 44, 54);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(23, 27, 33);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 44, 54);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(69, 80, 99);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 44, 54);
  border-left-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(204, 210, 219);
  outline: rgb(204, 210, 219) none 0px;
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body del {
  color: rgb(204, 210, 219);
  outline: rgb(204, 210, 219) none 0px;
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(59, 166, 247);
  border-color: rgb(59, 166, 247);
}

html[saved-theme="dark"] body p {
  color: rgb(174, 183, 199);
  outline: rgb(174, 183, 199) none 0px;
  text-decoration-color: rgb(174, 183, 199);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(102, 193, 250);
  outline: rgb(102, 193, 250) none 0px;
  text-decoration-color: rgb(102, 193, 250);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(102, 193, 250);
  outline: rgb(102, 193, 250) none 0px;
  text-decoration-color: rgb(102, 193, 250);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(102, 193, 250);
  outline: rgb(102, 193, 250) none 0px;
  text-decoration: underline rgba(59, 166, 247, 0.3);
  text-decoration-color: rgba(59, 166, 247, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body blockquote {
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(204, 210, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(59, 166, 247);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(123, 137, 163);
  border-left-color: rgb(123, 137, 163);
  border-right-color: rgb(123, 137, 163);
  border-top-color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(123, 137, 163);
  text-decoration: line-through 1px rgb(123, 137, 163);
  text-decoration-color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(168, 111, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 111, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(141, 139, 29);
  color: rgb(141, 139, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(59, 166, 247);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 150, 148);
  color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 60, 64);
  color: rgb(168, 111, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 60, 64);
  color: rgb(168, 111, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 60, 64);
  color: rgb(192, 60, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 60, 64);
  color: rgb(192, 60, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  background-color: rgb(141, 139, 29);
  color: rgb(141, 139, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(141, 139, 29);
  color: rgb(141, 139, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 110, 196);
  color: rgb(192, 60, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(135, 110, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 60, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 165, 85);
  color: rgb(51, 165, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(51, 165, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 165, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 165, 85);
  color: rgb(51, 165, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(135, 110, 196);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 51, 150, 148;
  background: rgba(51, 150, 148, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(51, 150, 148, 0.1);
  border-bottom-color: rgba(51, 150, 148, 0.25);
  border-left-color: rgba(51, 150, 148, 0.25);
  border-right-color: rgba(51, 150, 148, 0.25);
  border-top-color: rgba(51, 150, 148, 0.25);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 192, 60, 64;
  background: rgba(192, 60, 64, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(192, 60, 64, 0.1);
  border-bottom-color: rgba(192, 60, 64, 0.25);
  border-left-color: rgba(192, 60, 64, 0.25);
  border-right-color: rgba(192, 60, 64, 0.25);
  border-top-color: rgba(192, 60, 64, 0.25);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="c1-blue"] {
  --callout-color: 173, 204, 255;
  --table-border-color: color-mix(in srgb, rgb(173, 204, 255) 25%, #171b21 50%);
  background-color: rgba(173, 204, 255, 0.1);
  border-bottom-color: rgba(173, 204, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(173, 204, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(173, 204, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(173, 204, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-cyan"] {
  --callout-color: 171, 247, 247;
  --table-border-color: color-mix(in srgb, rgb(171, 247, 247) 25%, #171b21 50%);
  background-color: rgba(171, 247, 247, 0.1);
  border-bottom-color: rgba(171, 247, 247, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(171, 247, 247, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(171, 247, 247, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(171, 247, 247, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-green"] {
  --callout-color: 187, 250, 187;
  --table-border-color: color-mix(in srgb, rgb(187, 250, 187) 25%, #171b21 50%);
  background-color: rgba(187, 250, 187, 0.1);
  border-bottom-color: rgba(187, 250, 187, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(187, 250, 187, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(187, 250, 187, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(187, 250, 187, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-grey"] {
  --callout-color: 158, 158, 158;
  --table-border-color: color-mix(in srgb, rgb(158, 158, 158) 25%, #171b21 50%);
  background-color: rgba(158, 158, 158, 0.1);
  border-bottom-color: rgba(158, 158, 158, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(158, 158, 158, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(158, 158, 158, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(158, 158, 158, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-light-blue"] {
  --callout-color: 172, 226, 251;
  --table-border-color: color-mix(in srgb, rgb(172, 226, 251) 25%, #171b21 50%);
  background-color: rgba(172, 226, 251, 0.1);
  border-bottom-color: rgba(172, 226, 251, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(172, 226, 251, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(172, 226, 251, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(172, 226, 251, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-light-purple"] {
  --callout-color: 233, 182, 245;
  --table-border-color: color-mix(in srgb, rgb(233, 182, 245) 25%, #171b21 50%);
  background-color: rgba(233, 182, 245, 0.1);
  border-bottom-color: rgba(233, 182, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 182, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 182, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 182, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-orange"] {
  --callout-color: 255, 206, 153;
  --table-border-color: color-mix(in srgb, rgb(255, 206, 153) 25%, #171b21 50%);
  background-color: rgba(255, 206, 153, 0.1);
  border-bottom-color: rgba(255, 206, 153, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 206, 153, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 206, 153, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 206, 153, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-pink"] {
  --callout-color: 255, 184, 235;
  --table-border-color: color-mix(in srgb, rgb(255, 184, 235) 25%, #171b21 50%);
  background-color: rgba(255, 184, 235, 0.1);
  border-bottom-color: rgba(255, 184, 235, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 184, 235, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 184, 235, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 184, 235, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-purple"] {
  --callout-color: 210, 179, 255;
  --table-border-color: color-mix(in srgb, rgb(210, 179, 255) 25%, #171b21 50%);
  background-color: rgba(210, 179, 255, 0.1);
  border-bottom-color: rgba(210, 179, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(210, 179, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(210, 179, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(210, 179, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-red"] {
  --callout-color: 255, 143, 143;
  --table-border-color: color-mix(in srgb, rgb(255, 143, 143) 25%, #171b21 50%);
  background-color: rgba(255, 143, 143, 0.1);
  border-bottom-color: rgba(255, 143, 143, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 143, 143, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 143, 143, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 143, 143, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c1-yellow"] {
  --callout-color: 255, 243, 163;
  --table-border-color: color-mix(in srgb, rgb(255, 243, 163) 25%, #171b21 50%);
  background-color: rgba(255, 243, 163, 0.1);
  border-bottom-color: rgba(255, 243, 163, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 243, 163, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 243, 163, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 243, 163, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-blue"] {
  --callout-color: 173, 204, 255;
  --table-border-color: color-mix(in srgb, rgb(173, 204, 255) 25%, #171b21 50%);
  background-color: rgba(173, 204, 255, 0.1);
  border-bottom-color: rgba(173, 204, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(173, 204, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(173, 204, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(173, 204, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-cyan"] {
  --callout-color: 171, 247, 247;
  --table-border-color: color-mix(in srgb, rgb(171, 247, 247) 25%, #171b21 50%);
  background-color: rgba(171, 247, 247, 0.1);
  border-bottom-color: rgba(171, 247, 247, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(171, 247, 247, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(171, 247, 247, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(171, 247, 247, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-green"] {
  --callout-color: 187, 250, 187;
  --table-border-color: color-mix(in srgb, rgb(187, 250, 187) 25%, #171b21 50%);
  background-color: rgba(187, 250, 187, 0.1);
  border-bottom-color: rgba(187, 250, 187, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(187, 250, 187, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(187, 250, 187, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(187, 250, 187, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-grey"] {
  --callout-color: 158, 158, 158;
  --table-border-color: color-mix(in srgb, rgb(158, 158, 158) 25%, #171b21 50%);
  background-color: rgba(158, 158, 158, 0.1);
  border-bottom-color: rgba(158, 158, 158, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(158, 158, 158, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(158, 158, 158, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(158, 158, 158, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-light-blue"] {
  --callout-color: 172, 226, 251;
  --table-border-color: color-mix(in srgb, rgb(172, 226, 251) 25%, #171b21 50%);
  background-color: rgba(172, 226, 251, 0.1);
  border-bottom-color: rgba(172, 226, 251, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(172, 226, 251, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(172, 226, 251, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(172, 226, 251, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-light-purple"] {
  --callout-color: 233, 182, 245;
  --table-border-color: color-mix(in srgb, rgb(233, 182, 245) 25%, #171b21 50%);
  background-color: rgba(233, 182, 245, 0.1);
  border-bottom-color: rgba(233, 182, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 182, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 182, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 182, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-orange"] {
  --callout-color: 255, 206, 153;
  --table-border-color: color-mix(in srgb, rgb(255, 206, 153) 25%, #171b21 50%);
  background-color: rgba(255, 206, 153, 0.1);
  border-bottom-color: rgba(255, 206, 153, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 206, 153, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 206, 153, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 206, 153, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-pink"] {
  --callout-color: 255, 184, 235;
  --table-border-color: color-mix(in srgb, rgb(255, 184, 235) 25%, #171b21 50%);
  background-color: rgba(255, 184, 235, 0.1);
  border-bottom-color: rgba(255, 184, 235, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 184, 235, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 184, 235, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 184, 235, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-purple"] {
  --callout-color: 210, 179, 255;
  --table-border-color: color-mix(in srgb, rgb(210, 179, 255) 25%, #171b21 50%);
  background-color: rgba(210, 179, 255, 0.1);
  border-bottom-color: rgba(210, 179, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(210, 179, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(210, 179, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(210, 179, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-red"] {
  --callout-color: 255, 143, 143;
  --table-border-color: color-mix(in srgb, rgb(255, 143, 143) 25%, #171b21 50%);
  background-color: rgba(255, 143, 143, 0.1);
  border-bottom-color: rgba(255, 143, 143, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 143, 143, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 143, 143, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 143, 143, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c2-yellow"] {
  --callout-color: 255, 243, 163;
  --table-border-color: color-mix(in srgb, rgb(255, 243, 163) 25%, #171b21 50%);
  background-color: rgba(255, 243, 163, 0.1);
  border-bottom-color: rgba(255, 243, 163, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 243, 163, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 243, 163, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 243, 163, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="c3-blue"] {
  --callout-color: 173, 204, 255;
  --table-border-color: color-mix(in srgb, rgb(173, 204, 255) 25%, #171b21 50%);
  background-color: rgba(173, 204, 255, 0.1);
  border-bottom-color: rgba(173, 204, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(173, 204, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(173, 204, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(173, 204, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(204, 210, 219);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 192, 60, 64;
  background: rgba(192, 60, 64, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(192, 60, 64, 0.1);
  border-bottom-color: rgba(192, 60, 64, 0.25);
  border-left-color: rgba(192, 60, 64, 0.25);
  border-right-color: rgba(192, 60, 64, 0.25);
  border-top-color: rgba(192, 60, 64, 0.25);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 16135, 110, 196;
  background: rgba(255, 110, 196, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 110, 196, 0.1);
  border-bottom-color: rgba(255, 110, 196, 0.25);
  border-left-color: rgba(255, 110, 196, 0.25);
  border-right-color: rgba(255, 110, 196, 0.25);
  border-top-color: rgba(255, 110, 196, 0.25);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 192, 60, 64;
  background: rgba(192, 60, 64, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(192, 60, 64, 0.1);
  border-bottom-color: rgba(192, 60, 64, 0.25);
  border-left-color: rgba(192, 60, 64, 0.25);
  border-right-color: rgba(192, 60, 64, 0.25);
  border-top-color: rgba(192, 60, 64, 0.25);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 168, 111, 50;
  background: rgba(168, 111, 50, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(168, 111, 50, 0.1);
  border-bottom-color: rgba(168, 111, 50, 0.25);
  border-left-color: rgba(168, 111, 50, 0.25);
  border-right-color: rgba(168, 111, 50, 0.25);
  border-top-color: rgba(168, 111, 50, 0.25);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 51, 165, 85;
  background: rgba(51, 165, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(51, 165, 85, 0.1);
  border-bottom-color: rgba(51, 165, 85, 0.25);
  border-left-color: rgba(51, 165, 85, 0.25);
  border-right-color: rgba(51, 165, 85, 0.25);
  border-top-color: rgba(51, 165, 85, 0.25);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 51, 150, 148;
  background: rgba(51, 150, 148, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(51, 150, 148, 0.1);
  border-bottom-color: rgba(51, 150, 148, 0.25);
  border-left-color: rgba(51, 150, 148, 0.25);
  border-right-color: rgba(51, 150, 148, 0.25);
  border-top-color: rgba(51, 150, 148, 0.25);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 168, 111, 50;
  background: rgba(168, 111, 50, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(168, 111, 50, 0.1);
  border-bottom-color: rgba(168, 111, 50, 0.25);
  border-left-color: rgba(168, 111, 50, 0.25);
  border-right-color: rgba(168, 111, 50, 0.25);
  border-top-color: rgba(168, 111, 50, 0.25);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(204, 210, 219);
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

html[saved-theme="dark"] body .callout[data-callout="c1-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-cyan"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-green"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-grey"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-light-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-light-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-orange"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-pink"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-red"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c1-yellow"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-cyan"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-green"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-grey"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-light-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-light-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-orange"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-pink"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-red"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c2-yellow"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="c3-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
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
  background-color: rgb(48, 56, 69);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(23, 27, 33);
  border-bottom-color: rgb(100, 117, 144);
  border-left-color: rgb(100, 117, 144);
  border-right-color: rgb(100, 117, 144);
  border-top-color: rgb(100, 117, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 210, 219);
  outline: rgb(204, 210, 219) none 0px;
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(100, 117, 144);
  border-left-color: rgb(100, 117, 144);
  border-right-color: rgb(100, 117, 144);
  border-top-color: rgb(100, 117, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 44, 54);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(59, 166, 247, 0.1);
  border-bottom-color: rgba(59, 166, 247, 0.15);
  border-left-color: rgba(59, 166, 247, 0.15);
  border-right-color: rgba(59, 166, 247, 0.15);
  border-top-color: rgba(59, 166, 247, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(102, 193, 250);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 210, 219);
  font-size: 27.2px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body h3 {
  color: rgb(87, 136, 216);
}

html[saved-theme="dark"] body h4 {
  color: rgb(218, 199, 82);
}

html[saved-theme="dark"] body h5 {
  color: rgb(216, 87, 87);
}

html[saved-theme="dark"] body h6 {
  color: rgb(137, 86, 214);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(174, 183, 199);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 210, 219);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(174, 183, 199);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(174, 183, 199);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(174, 183, 199);
  stroke: rgb(174, 183, 199);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(123, 137, 163);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(38, 44, 54);
  border-color: rgb(204, 210, 219);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(69, 80, 99);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(59, 166, 247, 0.1);
  color: rgb(102, 193, 250);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(23, 27, 33);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(38, 44, 54);
  border-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(69, 80, 99);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(204, 210, 219);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(38, 44, 54);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(174, 183, 199);
  border-left-color: rgb(174, 183, 199);
  border-right-color: rgb(174, 183, 199);
  border-top-color: rgb(174, 183, 199);
  color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(59, 166, 247, 0.1);
  border-bottom-color: rgba(59, 166, 247, 0.15);
  border-left-color: rgba(59, 166, 247, 0.15);
  border-right-color: rgba(59, 166, 247, 0.15);
  border-top-color: rgba(59, 166, 247, 0.15);
  color: rgb(102, 193, 250);
}`,
  },
  light: {
    base: `:root:root {
  --accent-d: 61%;
  --accent-h: 206;
  --accent-l: 60%;
  --accent-s: 92%;
  --background-modifier-active-hover: hsla(206, 92%, 60%, 0.1);
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
  --bases-table-cell-background-selected: hsla(206, 92%, 60%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #8d9ab0;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(205, 92.92%, 64.5%);
  --bases-table-group-background: #e1e4ea;
  --bases-table-header-background: #f6f7f9;
  --bases-table-header-color: #56647b;
  --bases-table-summary-background: #f6f7f9;
  --blockquote-border-color: hsl(205, 92.92%, 64.5%);
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
  --checkbox-color: hsl(205, 92.92%, 64.5%);
  --checkbox-color-hover: hsl(203, 93.84%, 69%);
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
  --collapse-icon-color-collapsed: hsl(206, 92%, 60%);
  --color-accent: hsl(206, 92%, 60%);
  --color-accent-1: hsl(205, 92.92%, 64.5%);
  --color-accent-2: hsl(203, 93.84%, 69%);
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
  --dark: var(--text-normal, #485465);
  --darkgray: var(--text-normal, #485465);
  --divider-color: #b7bfcd;
  --divider-color-hover: hsl(205, 92.92%, 64.5%);
  --dropdown-background: #f6f7f9;
  --dropdown-background-hover: #e1e4ea;
  --em-color: #d34fae;
  --embed-block-shadow-hover: 0 0 0 1px #b7bfcd, inset 0 0 0 1px #b7bfcd;
  --embed-border-start: 2px solid hsl(205, 92.92%, 64.5%);
  --file-header-background: #f6f7f9;
  --file-header-background-focused: #f6f7f9;
  --flair-background: #f6f7f9;
  --flair-color: #485465;
  --footnote-divider-color: #b7bfcd;
  --footnote-id-color: #56647b;
  --footnote-id-color-no-occurrences: #7886a1;
  --graph-line: #a2acbe;
  --graph-node: #56647b;
  --graph-node-focused: hsl(206, 92%, 60%);
  --graph-node-unresolved: #7886a1;
  --graph-text: #485465;
  --gray: var(--text-muted, #56647b);
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
  --highlight: var(--background-modifier-active-hover, hsla(206, 92%, 60%, 0.1));
  --hr-color: #b7bfcd;
  --icon-color: #56647b;
  --icon-color-active: hsl(206, 92%, 60%);
  --icon-color-focused: #485465;
  --icon-color-hover: #56647b;
  --inline-title-color: #485465;
  --inline-title-size: 1.7rem;
  --input-date-separator: #7886a1;
  --input-placeholder-color: #7886a1;
  --interactive-accent: hsl(205, 92.92%, 64.5%);
  --interactive-accent-hover: hsl(203, 93.84%, 69%);
  --interactive-accent-hsl: 206, 92%, 60%;
  --interactive-hover: #e1e4ea;
  --interactive-normal: #f6f7f9;
  --light: var(--background-primary, #f6f7f9);
  --light-blue: #54b1db;
  --light-purple: #c053d8;
  --lightgray: var(--background-secondary, #e1e4ea);
  --line-number-color: #7886a1;
  --link-color: hsl(206, 92%, 60%);
  --link-color-hover: hsl(203, 93.84%, 69%);
  --link-external-color: hsl(206, 92%, 60%);
  --link-external-color-hover: hsl(203, 93.84%, 69%);
  --link-unresolved-color: hsl(206, 92%, 60%);
  --link-unresolved-decoration-color: hsla(206, 92%, 60%, 0.3);
  --list-marker-color: #7886a1;
  --list-marker-color-collapsed: hsl(206, 92%, 60%);
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
  --nav-item-background-selected: hsla(206, 92%, 60%, 0.15);
  --nav-item-color: #56647b;
  --nav-item-color-active: #485465;
  --nav-item-color-highlighted: hsl(206, 92%, 60%);
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
  --pill-color-remove-hover: hsl(206, 92%, 60%);
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
  --secondary: var(--text-accent, hsl(206, 92%, 60%));
  --setting-group-heading-color: #485465;
  --setting-items-background: #e1e4ea;
  --setting-items-border-color: #b7bfcd;
  --shiki-active-tab-border-color: #56647b;
  --shiki-code-background: #e1e4ea;
  --shiki-code-comment: #7886a1;
  --shiki-code-normal: #56647b;
  --shiki-code-punctuation: #56647b;
  --shiki-gutter-border-color: #b7bfcd;
  --shiki-gutter-text-color: #7886a1;
  --shiki-gutter-text-color-highlight: #56647b;
  --shiki-highlight-neutral: #56647b;
  --shiki-terminal-dots-color: #7886a1;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(206, 92%, 60%);
  --tab-text-color: #7886a1;
  --tab-text-color-active: #56647b;
  --tab-text-color-focused: #56647b;
  --tab-text-color-focused-active: #56647b;
  --tab-text-color-focused-active-current: #485465;
  --tab-text-color-focused-highlighted: hsl(206, 92%, 60%);
  --table-add-button-border-color: #b7bfcd;
  --table-border-color: #b7bfcd;
  --table-drag-handle-background-active: hsl(205, 92.92%, 64.5%);
  --table-drag-handle-color: #7886a1;
  --table-header-border-color: #b7bfcd;
  --table-header-color: #485465;
  --table-selection: hsla(206, 92%, 60%, 0.1);
  --table-selection-border-color: hsl(205, 92.92%, 64.5%);
  --tag-background: hsla(206, 92%, 60%, 0.1);
  --tag-background-hover: hsla(206, 92%, 60%, 0.2);
  --tag-border-color: hsla(206, 92%, 60%, 0.15);
  --tag-border-color-hover: hsla(206, 92%, 60%, 0.15);
  --tag-color: hsl(206, 92%, 60%);
  --tag-color-hover: hsl(206, 92%, 60%);
  --tertiary: var(--text-accent-hover, hsl(203, 93.84%, 69%));
  --text-accent: hsl(206, 92%, 60%);
  --text-accent-hover: hsl(203, 93.84%, 69%);
  --text-faint: #7886a1;
  --text-muted: #56647b;
  --text-normal: #485465;
  --text-selection: hsla(206, 92%, 60%, 0.2);
  --textHighlight: var(--background-modifier-active-hover, hsla(206, 92%, 60%, 0.1));
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

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(225, 228, 234);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(246, 247, 249);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(225, 228, 234);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(183, 191, 205);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(225, 228, 234);
  border-left-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(72, 84, 101);
  outline: rgb(72, 84, 101) none 0px;
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body del {
  color: rgb(72, 84, 101);
  outline: rgb(72, 84, 101) none 0px;
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(120, 134, 161);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(80, 178, 249);
  border-color: rgb(80, 178, 249);
}

html[saved-theme="light"] body p {
  color: rgb(86, 100, 123);
  outline: rgb(86, 100, 123) none 0px;
  text-decoration-color: rgb(86, 100, 123);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(59, 166, 247);
  outline: rgb(59, 166, 247) none 0px;
  text-decoration-color: rgb(59, 166, 247);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(59, 166, 247);
  outline: rgb(59, 166, 247) none 0px;
  text-decoration-color: rgb(59, 166, 247);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(59, 166, 247);
  outline: rgb(59, 166, 247) none 0px;
  text-decoration: underline rgba(59, 166, 247, 0.3);
  text-decoration-color: rgba(59, 166, 247, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body dt {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body ol > li {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body ul > li {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(120, 134, 161);
}

html[saved-theme="light"] body blockquote {
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body table {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(72, 84, 101);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body figcaption {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(80, 178, 249);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(120, 134, 161);
  border-left-color: rgb(120, 134, 161);
  border-right-color: rgb(120, 134, 161);
  border-top-color: rgb(120, 134, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(120, 134, 161);
  text-decoration: line-through 1px rgb(120, 134, 161);
  text-decoration-color: rgb(120, 134, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(120, 134, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(236, 117, 0);
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
  background-color: rgb(120, 134, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(59, 166, 247);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
  color: rgb(120, 134, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(120, 134, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(120, 134, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
  color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(120, 82, 238);
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

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(8, 185, 78);
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

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(120, 82, 238);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="c1-blue"] {
  --callout-color: 173, 204, 255;
  --table-border-color: color-mix(in srgb, rgb(173, 204, 255) 25%, #f6f7f9 50%);
  background-color: rgba(173, 204, 255, 0.1);
  border-bottom-color: rgba(173, 204, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(173, 204, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(173, 204, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(173, 204, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-cyan"] {
  --callout-color: 171, 247, 247;
  --table-border-color: color-mix(in srgb, rgb(171, 247, 247) 25%, #f6f7f9 50%);
  background-color: rgba(171, 247, 247, 0.1);
  border-bottom-color: rgba(171, 247, 247, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(171, 247, 247, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(171, 247, 247, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(171, 247, 247, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-green"] {
  --callout-color: 187, 250, 187;
  --table-border-color: color-mix(in srgb, rgb(187, 250, 187) 25%, #f6f7f9 50%);
  background-color: rgba(187, 250, 187, 0.1);
  border-bottom-color: rgba(187, 250, 187, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(187, 250, 187, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(187, 250, 187, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(187, 250, 187, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-grey"] {
  --callout-color: 158, 158, 158;
  --table-border-color: color-mix(in srgb, rgb(158, 158, 158) 25%, #f6f7f9 50%);
  background-color: rgba(158, 158, 158, 0.1);
  border-bottom-color: rgba(158, 158, 158, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(158, 158, 158, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(158, 158, 158, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(158, 158, 158, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-light-blue"] {
  --callout-color: 172, 226, 251;
  --table-border-color: color-mix(in srgb, rgb(172, 226, 251) 25%, #f6f7f9 50%);
  background-color: rgba(172, 226, 251, 0.1);
  border-bottom-color: rgba(172, 226, 251, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(172, 226, 251, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(172, 226, 251, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(172, 226, 251, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-light-purple"] {
  --callout-color: 233, 182, 245;
  --table-border-color: color-mix(in srgb, rgb(233, 182, 245) 25%, #f6f7f9 50%);
  background-color: rgba(233, 182, 245, 0.1);
  border-bottom-color: rgba(233, 182, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 182, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 182, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 182, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-orange"] {
  --callout-color: 255, 206, 153;
  --table-border-color: color-mix(in srgb, rgb(255, 206, 153) 25%, #f6f7f9 50%);
  background-color: rgba(255, 206, 153, 0.1);
  border-bottom-color: rgba(255, 206, 153, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 206, 153, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 206, 153, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 206, 153, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-pink"] {
  --callout-color: 255, 184, 235;
  --table-border-color: color-mix(in srgb, rgb(255, 184, 235) 25%, #f6f7f9 50%);
  background-color: rgba(255, 184, 235, 0.1);
  border-bottom-color: rgba(255, 184, 235, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 184, 235, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 184, 235, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 184, 235, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-purple"] {
  --callout-color: 210, 179, 255;
  --table-border-color: color-mix(in srgb, rgb(210, 179, 255) 25%, #f6f7f9 50%);
  background-color: rgba(210, 179, 255, 0.1);
  border-bottom-color: rgba(210, 179, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(210, 179, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(210, 179, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(210, 179, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-red"] {
  --callout-color: 255, 143, 143;
  --table-border-color: color-mix(in srgb, rgb(255, 143, 143) 25%, #f6f7f9 50%);
  background-color: rgba(255, 143, 143, 0.1);
  border-bottom-color: rgba(255, 143, 143, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 143, 143, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 143, 143, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 143, 143, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c1-yellow"] {
  --callout-color: 255, 243, 163;
  --table-border-color: color-mix(in srgb, rgb(255, 243, 163) 25%, #f6f7f9 50%);
  background-color: rgba(255, 243, 163, 0.1);
  border-bottom-color: rgba(255, 243, 163, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 243, 163, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 243, 163, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 243, 163, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-blue"] {
  --callout-color: 173, 204, 255;
  --table-border-color: color-mix(in srgb, rgb(173, 204, 255) 25%, #f6f7f9 50%);
  background-color: rgba(173, 204, 255, 0.1);
  border-bottom-color: rgba(173, 204, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(173, 204, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(173, 204, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(173, 204, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-cyan"] {
  --callout-color: 171, 247, 247;
  --table-border-color: color-mix(in srgb, rgb(171, 247, 247) 25%, #f6f7f9 50%);
  background-color: rgba(171, 247, 247, 0.1);
  border-bottom-color: rgba(171, 247, 247, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(171, 247, 247, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(171, 247, 247, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(171, 247, 247, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-green"] {
  --callout-color: 187, 250, 187;
  --table-border-color: color-mix(in srgb, rgb(187, 250, 187) 25%, #f6f7f9 50%);
  background-color: rgba(187, 250, 187, 0.1);
  border-bottom-color: rgba(187, 250, 187, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(187, 250, 187, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(187, 250, 187, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(187, 250, 187, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-grey"] {
  --callout-color: 158, 158, 158;
  --table-border-color: color-mix(in srgb, rgb(158, 158, 158) 25%, #f6f7f9 50%);
  background-color: rgba(158, 158, 158, 0.1);
  border-bottom-color: rgba(158, 158, 158, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(158, 158, 158, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(158, 158, 158, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(158, 158, 158, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-light-blue"] {
  --callout-color: 172, 226, 251;
  --table-border-color: color-mix(in srgb, rgb(172, 226, 251) 25%, #f6f7f9 50%);
  background-color: rgba(172, 226, 251, 0.1);
  border-bottom-color: rgba(172, 226, 251, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(172, 226, 251, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(172, 226, 251, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(172, 226, 251, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-light-purple"] {
  --callout-color: 233, 182, 245;
  --table-border-color: color-mix(in srgb, rgb(233, 182, 245) 25%, #f6f7f9 50%);
  background-color: rgba(233, 182, 245, 0.1);
  border-bottom-color: rgba(233, 182, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 182, 245, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 182, 245, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 182, 245, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-orange"] {
  --callout-color: 255, 206, 153;
  --table-border-color: color-mix(in srgb, rgb(255, 206, 153) 25%, #f6f7f9 50%);
  background-color: rgba(255, 206, 153, 0.1);
  border-bottom-color: rgba(255, 206, 153, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 206, 153, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 206, 153, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 206, 153, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-pink"] {
  --callout-color: 255, 184, 235;
  --table-border-color: color-mix(in srgb, rgb(255, 184, 235) 25%, #f6f7f9 50%);
  background-color: rgba(255, 184, 235, 0.1);
  border-bottom-color: rgba(255, 184, 235, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 184, 235, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 184, 235, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 184, 235, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-purple"] {
  --callout-color: 210, 179, 255;
  --table-border-color: color-mix(in srgb, rgb(210, 179, 255) 25%, #f6f7f9 50%);
  background-color: rgba(210, 179, 255, 0.1);
  border-bottom-color: rgba(210, 179, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(210, 179, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(210, 179, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(210, 179, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-red"] {
  --callout-color: 255, 143, 143;
  --table-border-color: color-mix(in srgb, rgb(255, 143, 143) 25%, #f6f7f9 50%);
  background-color: rgba(255, 143, 143, 0.1);
  border-bottom-color: rgba(255, 143, 143, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 143, 143, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 143, 143, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 143, 143, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c2-yellow"] {
  --callout-color: 255, 243, 163;
  --table-border-color: color-mix(in srgb, rgb(255, 243, 163) 25%, #f6f7f9 50%);
  background-color: rgba(255, 243, 163, 0.1);
  border-bottom-color: rgba(255, 243, 163, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 243, 163, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 243, 163, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 243, 163, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="c3-blue"] {
  --callout-color: 173, 204, 255;
  --table-border-color: color-mix(in srgb, rgb(173, 204, 255) 25%, #f6f7f9 50%);
  background-color: rgba(173, 204, 255, 0.1);
  border-bottom-color: rgba(173, 204, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(173, 204, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(173, 204, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(173, 204, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 84, 101);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 173, 204, 255;
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(173, 204, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(72, 84, 101);
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

html[saved-theme="light"] body .callout[data-callout="c1-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-cyan"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-green"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-grey"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-light-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-light-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-orange"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-pink"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-red"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c1-yellow"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-cyan"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-green"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-grey"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-light-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-light-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-orange"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-pink"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-red"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c2-yellow"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="c3-blue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M17 3h2a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M21 17v2a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3C/svg%3E");
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
  background-color: rgb(246, 247, 249);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(246, 247, 249);
  border-bottom-color: rgb(141, 154, 176);
  border-left-color: rgb(141, 154, 176);
  border-right-color: rgb(141, 154, 176);
  border-top-color: rgb(141, 154, 176);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(72, 84, 101);
  outline: rgb(72, 84, 101) none 0px;
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(141, 154, 176);
  border-left-color: rgb(141, 154, 176);
  border-right-color: rgb(141, 154, 176);
  border-top-color: rgb(141, 154, 176);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(225, 228, 234);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(59, 166, 247, 0.1);
  border-bottom-color: rgba(59, 166, 247, 0.15);
  border-left-color: rgba(59, 166, 247, 0.15);
  border-right-color: rgba(59, 166, 247, 0.15);
  border-top-color: rgba(59, 166, 247, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(59, 166, 247);
}

html[saved-theme="light"] body h1 {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(72, 84, 101);
  font-size: 27.2px;
}

html[saved-theme="light"] body h2 {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body h3 {
  color: rgb(87, 136, 216);
}

html[saved-theme="light"] body h4 {
  color: rgb(218, 199, 82);
}

html[saved-theme="light"] body h5 {
  color: rgb(216, 87, 87);
}

html[saved-theme="light"] body h6 {
  color: rgb(137, 86, 214);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(86, 100, 123);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(72, 84, 101);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(86, 100, 123);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(86, 100, 123);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(86, 100, 123);
  stroke: rgb(86, 100, 123);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(120, 134, 161);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(246, 247, 249);
  border-color: rgb(72, 84, 101);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(183, 191, 205);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(86, 100, 123);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(59, 166, 247, 0.1);
  color: rgb(59, 166, 247);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 247, 249);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(225, 228, 234);
  border-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(204, 210, 219);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(72, 84, 101);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(225, 228, 234);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body abbr {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(86, 100, 123);
  border-left-color: rgb(86, 100, 123);
  border-right-color: rgb(86, 100, 123);
  border-top-color: rgb(86, 100, 123);
  color: rgb(86, 100, 123);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body sub {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body summary {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body sup {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(59, 166, 247, 0.1);
  border-bottom-color: rgba(59, 166, 247, 0.15);
  border-left-color: rgba(59, 166, 247, 0.15);
  border-right-color: rgba(59, 166, 247, 0.15);
  border-top-color: rgba(59, 166, 247, 0.15);
  color: rgb(59, 166, 247);
}`,
  },
};
