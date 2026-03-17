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
  --accent-d: 61% !important;
  --accent-h: 206 !important;
  --accent-l: 60% !important;
  --accent-s: 92% !important;
  --background-modifier-active-hover: hsla(206, 92%, 60%, 0.1) !important;
  --background-modifier-border: #455063 !important;
  --background-modifier-border-focus: #647590 !important;
  --background-modifier-border-hover: #546178 !important;
  --background-modifier-error: #c03c40 !important;
  --background-modifier-error-hover: #c03c40 !important;
  --background-modifier-error-rgb: 192, 60, 64 !important;
  --background-modifier-form-field: #303845 !important;
  --background-modifier-form-field-hover: #303845 !important;
  --background-modifier-success: #33a555 !important;
  --background-modifier-success-rgb: 51, 165, 85 !important;
  --background-primary: #171b21 !important;
  --background-primary-alt: #262c36 !important;
  --background-secondary: #262c36 !important;
  --background-secondary-alt: #455063 !important;
  --base-d: 11% !important;
  --base-h: 218 !important;
  --base-l: 97% !important;
  --base-s: 18% !important;
  --bases-cards-background: #171b21 !important;
  --bases-cards-cover-background: #262c36 !important;
  --bases-cards-shadow: 0 0 0 1px #455063 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #546178 !important;
  --bases-embed-border-color: #455063 !important;
  --bases-group-heading-property-color: #aeb7c7 !important;
  --bases-table-border-color: #455063 !important;
  --bases-table-cell-background-active: #171b21 !important;
  --bases-table-cell-background-disabled: #262c36 !important;
  --bases-table-cell-background-selected: hsla(206, 92%, 60%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #647590 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(206, 92%, 60%) !important;
  --bases-table-group-background: #262c36 !important;
  --bases-table-header-background: #171b21 !important;
  --bases-table-header-color: #aeb7c7 !important;
  --bases-table-summary-background: #171b21 !important;
  --blockquote-border-color: hsl(206, 92%, 60%) !important;
  --blue: #5788d8 !important;
  --blur-background: color-mix(in srgb, #455063 65%, transparent) linear-gradient(#455063, color-mix(in srgb, #455063 65%, transparent)) !important;
  --bold-weight: 600 !important;
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
  --callout-title-weight: 600;
  --callout-warning: 168, 111, 50;
  --canvas-background: #171b21 !important;
  --canvas-card-label-color: #7b89a3 !important;
  --canvas-color-1: 192, 60, 64 !important;
  --canvas-color-2: 168, 111, 50 !important;
  --canvas-color-3: 141, 139, 29 !important;
  --canvas-color-4: 51, 165, 85 !important;
  --canvas-color-5: 51, 150, 148 !important;
  --canvas-color-6: 16135, 110, 196 !important;
  --canvas-dot-pattern: #455063 !important;
  --caret-color: #ccd2db !important;
  --checkbox-border-color: #7b89a3 !important;
  --checkbox-border-color-hover: #aeb7c7 !important;
  --checkbox-color: hsl(206, 92%, 60%) !important;
  --checkbox-color-hover: hsl(203, 93.84%, 69%) !important;
  --checkbox-marker-color: #171b21 !important;
  --checklist-done-color: #aeb7c7 !important;
  --code-background: #262c36 !important;
  --code-border-color: #455063 !important;
  --code-comment: #7b89a3 !important;
  --code-function: #c053d8 !important;
  --code-important: #d85757 !important;
  --code-keyword: #54b1db !important;
  --code-normal: #ccd2db !important;
  --code-operator: #d34fae !important;
  --code-property: #58ca58 !important;
  --code-punctuation: #aeb7c7 !important;
  --code-string: #d49755 !important;
  --code-tag: #5788d8 !important;
  --code-value: #52d8d8 !important;
  --collapse-icon-color: #7b89a3 !important;
  --collapse-icon-color-collapsed: hsl(203, 93.84%, 69%) !important;
  --color-accent: hsl(206, 92%, 60%) !important;
  --color-accent-1: hsl(203, 93.84%, 69%) !important;
  --color-accent-2: hsl(201, 96.6%, 77.4%) !important;
  --color-accent-hsl: 206, 92%, 60% !important;
  --color-base-00: #171b21 !important;
  --color-base-10: #262c36 !important;
  --color-base-100: #ccd2db !important;
  --color-base-20: #262c36 !important;
  --color-base-25: #303845 !important;
  --color-base-30: #455063 !important;
  --color-base-35: #546178 !important;
  --color-base-40: #647590 !important;
  --color-base-50: #7b89a3 !important;
  --color-base-60: #939fb4 !important;
  --color-base-70: #aeb7c7 !important;
  --color-cyan: rgb(51, 150, 148) !important;
  --color-cyan-rgb: 51, 150, 148 !important;
  --color-green: #33a555 !important;
  --color-green-rgb: 51, 165, 85 !important;
  --color-orange: #a86f32 !important;
  --color-orange-rgb: 168, 111, 50 !important;
  --color-pink: #af608a !important;
  --color-pink-rgb: 175, 96, 138 !important;
  --color-purple: #876ec4 !important;
  --color-purple-rgb: 16135, 110, 196 !important;
  --color-red: #c03c40 !important;
  --color-red-rgb: 192, 60, 64 !important;
  --color-yellow: #8d8b1d !important;
  --color-yellow-rgb: 141, 139, 29 !important;
  --current-line-number-color: #dac752 !important;
  --cyan: #52d8d8 !important;
  --dark: #ccd2db !important;
  --darkgray: #ccd2db !important;
  --divider-color: #455063 !important;
  --divider-color-hover: hsl(206, 92%, 60%) !important;
  --dropdown-background: #455063 !important;
  --dropdown-background-hover: #546178 !important;
  --em-color: #d34fae !important;
  --embed-block-shadow-hover: 0 0 0 1px #455063, inset 0 0 0 1px #455063 !important;
  --embed-border-start: 2px solid hsl(206, 92%, 60%) !important;
  --file-header-background: #171b21 !important;
  --file-header-background-focused: #171b21 !important;
  --flair-background: #455063 !important;
  --flair-color: #ccd2db !important;
  --footnote-divider-color: #455063 !important;
  --footnote-id-color: #aeb7c7 !important;
  --footnote-id-color-no-occurrences: #7b89a3 !important;
  --graph-line: #546178 !important;
  --graph-node: #aeb7c7 !important;
  --graph-node-attachment: #8d8b1d !important;
  --graph-node-focused: hsl(203, 93.84%, 69%) !important;
  --graph-node-tag: #33a555 !important;
  --graph-node-unresolved: #7b89a3 !important;
  --graph-text: #ccd2db !important;
  --gray: #aeb7c7 !important;
  --green: #58ca58 !important;
  --h1-color: #ccd2db !important;
  --h1-size: 1.7rem !important;
  --h2-color: #ccd2db !important;
  --h2-size: 1.5rem !important;
  --h3-color: #5788d8 !important;
  --h3-size: 1.2rem !important;
  --h4-color: #dac752 !important;
  --h4-size: 1.1rem !important;
  --h5-color: #d85757 !important;
  --h5-size: 1rem !important;
  --h6-color: #8956d6 !important;
  --h6-size: 0.9rem !important;
  --heading-formatting: #7b89a3 !important;
  --heading-spacing: 2.5rem !important;
  --highlight: hsla(206, 92%, 60%, 0.1) !important;
  --hr-color: #455063 !important;
  --icon-color: #aeb7c7 !important;
  --icon-color-active: hsl(203, 93.84%, 69%) !important;
  --icon-color-focused: #ccd2db !important;
  --icon-color-hover: #aeb7c7 !important;
  --inline-title-color: #ccd2db !important;
  --inline-title-size: 1.7rem !important;
  --input-date-separator: #7b89a3 !important;
  --input-placeholder-color: #7b89a3 !important;
  --interactive-accent: hsl(206, 92%, 60%) !important;
  --interactive-accent-hover: hsl(203, 93.84%, 69%) !important;
  --interactive-accent-hsl: 206, 92%, 60% !important;
  --interactive-hover: #546178 !important;
  --interactive-normal: #455063 !important;
  --light: #171b21 !important;
  --light-blue: #54b1db !important;
  --light-purple: #c053d8 !important;
  --lightgray: #262c36 !important;
  --line-number-color: #7b89a3 !important;
  --link-color: hsl(203, 93.84%, 69%) !important;
  --link-color-hover: hsl(201, 96.6%, 77.4%) !important;
  --link-external-color: hsl(203, 93.84%, 69%) !important;
  --link-external-color-hover: hsl(201, 96.6%, 77.4%) !important;
  --link-unresolved-color: hsl(203, 93.84%, 69%) !important;
  --link-unresolved-decoration-color: hsla(206, 92%, 60%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #7b89a3 !important;
  --list-marker-color-collapsed: hsl(203, 93.84%, 69%) !important;
  --list-marker-color-hover: #aeb7c7 !important;
  --menu-background: #262c36 !important;
  --menu-border-color: #546178 !important;
  --metadata-border-color: #455063 !important;
  --metadata-divider-color: #455063 !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #ccd2db !important;
  --metadata-label-text-color: #aeb7c7 !important;
  --metadata-label-text-color-hover: #aeb7c7 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #647590 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #546178 !important;
  --modal-background: #171b21 !important;
  --modal-border-color: #647590 !important;
  --nav-collapse-icon-color: #7b89a3 !important;
  --nav-collapse-icon-color-collapsed: #7b89a3 !important;
  --nav-heading-color: #ccd2db !important;
  --nav-heading-color-collapsed: #7b89a3 !important;
  --nav-heading-color-collapsed-hover: #aeb7c7 !important;
  --nav-heading-color-hover: #ccd2db !important;
  --nav-item-background-selected: hsla(206, 92%, 60%, 0.15) !important;
  --nav-item-color: #aeb7c7 !important;
  --nav-item-color-active: #ccd2db !important;
  --nav-item-color-highlighted: hsl(203, 93.84%, 69%) !important;
  --nav-item-color-hover: #ccd2db !important;
  --nav-item-color-selected: #ccd2db !important;
  --nav-tag-color: #7b89a3 !important;
  --nav-tag-color-active: #aeb7c7 !important;
  --nav-tag-color-hover: #aeb7c7 !important;
  --orange: #d49755 !important;
  --pdf-background: #171b21 !important;
  --pdf-page-background: #171b21 !important;
  --pdf-shadow: 0 0 0 1px #455063 !important;
  --pdf-sidebar-background: #171b21 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #455063 !important;
  --pill-border-color: #455063 !important;
  --pill-border-color-hover: #546178 !important;
  --pill-color: #aeb7c7 !important;
  --pill-color-hover: #ccd2db !important;
  --pill-color-remove: #7b89a3 !important;
  --pill-color-remove-hover: hsl(203, 93.84%, 69%) !important;
  --pink: #d34fae !important;
  --prompt-background: #171b21 !important;
  --prompt-border-color: #647590 !important;
  --purple: #8956d6 !important;
  --quote-color: #58ca58 !important;
  --raised-background: color-mix(in srgb, #455063 65%, transparent) linear-gradient(#455063, color-mix(in srgb, #455063 65%, transparent)) !important;
  --red: #d85757 !important;
  --ribbon-background: #262c36 !important;
  --ribbon-background-collapsed: #171b21 !important;
  --search-clear-button-color: #aeb7c7 !important;
  --search-icon-color: #aeb7c7 !important;
  --search-result-background: #171b21 !important;
  --secondary: hsl(203, 93.84%, 69%) !important;
  --setting-group-heading-color: #ccd2db !important;
  --setting-items-background: #262c36 !important;
  --setting-items-border-color: #455063 !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #546178 !important;
  --slider-track-background: #455063 !important;
  --status-bar-background: #262c36 !important;
  --status-bar-border-color: #455063 !important;
  --status-bar-text-color: #aeb7c7 !important;
  --strong-color: #d34fae !important;
  --suggestion-background: #171b21 !important;
  --sync-avatar-color-1: #c03c40 !important;
  --sync-avatar-color-2: #a86f32 !important;
  --sync-avatar-color-3: #8d8b1d !important;
  --sync-avatar-color-4: #33a555 !important;
  --sync-avatar-color-5: rgb(51, 150, 148) !important;
  --sync-avatar-color-7: #876ec4 !important;
  --sync-avatar-color-8: #af608a !important;
  --tab-background-active: #171b21 !important;
  --tab-container-background: #262c36 !important;
  --tab-divider-color: #546178 !important;
  --tab-outline-color: #455063 !important;
  --tab-switcher-background: #262c36 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #262c36, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(206, 92%, 60%) !important;
  --tab-text-color: #7b89a3 !important;
  --tab-text-color-active: #aeb7c7 !important;
  --tab-text-color-focused: #aeb7c7 !important;
  --tab-text-color-focused-active: #aeb7c7 !important;
  --tab-text-color-focused-active-current: #ccd2db !important;
  --tab-text-color-focused-highlighted: hsl(203, 93.84%, 69%) !important;
  --table-add-button-border-color: #455063 !important;
  --table-border-color: #455063 !important;
  --table-drag-handle-background-active: hsl(206, 92%, 60%) !important;
  --table-drag-handle-color: #7b89a3 !important;
  --table-header-border-color: #455063 !important;
  --table-header-color: #ccd2db !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(206, 92%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(206, 92%, 60%) !important;
  --tag-background: hsla(206, 92%, 60%, 0.1) !important;
  --tag-background-hover: hsla(206, 92%, 60%, 0.2) !important;
  --tag-border-color: hsla(206, 92%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(206, 92%, 60%, 0.15) !important;
  --tag-color: hsl(203, 93.84%, 69%) !important;
  --tag-color-hover: hsl(203, 93.84%, 69%) !important;
  --tertiary: hsl(201, 96.6%, 77.4%) !important;
  --text-accent: hsl(203, 93.84%, 69%) !important;
  --text-accent-hover: hsl(201, 96.6%, 77.4%) !important;
  --text-error: #c03c40 !important;
  --text-faint: #7b89a3 !important;
  --text-muted: #aeb7c7 !important;
  --text-normal: #ccd2db !important;
  --text-selection: hsla(206, 92%, 60%, 0.33) !important;
  --text-success: #33a555 !important;
  --text-warning: #a86f32 !important;
  --textHighlight: hsla(206, 92%, 60%, 0.1) !important;
  --titlebar-background: #303845 !important;
  --titlebar-background-focused: #455063 !important;
  --titlebar-border-color: #455063 !important;
  --titlebar-text-color: #aeb7c7 !important;
  --titlebar-text-color-focused: #ccd2db !important;
  --vault-profile-color: #ccd2db !important;
  --vault-profile-color-hover: #ccd2db !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --yellow: #dac752 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(23, 27, 33);
  color: rgb(204, 210, 219);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(204, 210, 219);
  outline: rgb(204, 210, 219) none 0px;
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body del {
  color: rgb(204, 210, 219);
  outline: rgb(204, 210, 219) none 0px;
  text-decoration: line-through rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body p {
  color: rgb(174, 183, 199);
  outline: rgb(174, 183, 199) none 0px;
  text-decoration: rgb(174, 183, 199);
  text-decoration-color: rgb(174, 183, 199);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(102, 193, 250);
  outline: rgb(102, 193, 250) none 0px;
  text-decoration: underline rgb(102, 193, 250);
  text-decoration-color: rgb(102, 193, 250);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(102, 193, 250);
  outline: rgb(102, 193, 250) none 0px;
  text-decoration: underline rgb(102, 193, 250);
  text-decoration-color: rgb(102, 193, 250);
}

html[saved-theme="dark"] body a.internal.broken {
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

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
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
  text-decoration: rgb(123, 137, 163);
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 44, 54);
  border-bottom-color: rgb(69, 80, 99);
  border-left-color: rgb(69, 80, 99);
  border-right-color: rgb(69, 80, 99);
  border-top-color: rgb(69, 80, 99);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(192, 83, 216);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(192, 83, 216);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(192, 83, 216);
  border-left-color: rgb(192, 83, 216);
  border-right-color: rgb(192, 83, 216);
  border-top-color: rgb(192, 83, 216);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
  border-left-color: rgb(59, 166, 247);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(174, 183, 199);
  text-decoration: line-through rgb(174, 183, 199);
  text-decoration-color: rgb(174, 183, 199);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(123, 137, 163);
  border-left-color: rgb(123, 137, 163);
  border-right-color: rgb(123, 137, 163);
  border-top-color: rgb(123, 137, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 210, 219);
  text-decoration: rgb(204, 210, 219);
  text-decoration-color: rgb(204, 210, 219);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 51, 150, 148;
  background-color: rgba(51, 150, 148, 0.1);
  border-bottom-color: rgba(51, 150, 148, 0.25);
  border-left-color: rgba(51, 150, 148, 0.25);
  border-right-color: rgba(51, 150, 148, 0.25);
  border-top-color: rgba(51, 150, 148, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 192, 60, 64;
  background-color: rgba(192, 60, 64, 0.1);
  border-bottom-color: rgba(192, 60, 64, 0.25);
  border-left-color: rgba(192, 60, 64, 0.25);
  border-right-color: rgba(192, 60, 64, 0.25);
  border-top-color: rgba(192, 60, 64, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 192, 60, 64;
  background-color: rgba(192, 60, 64, 0.1);
  border-bottom-color: rgba(192, 60, 64, 0.25);
  border-left-color: rgba(192, 60, 64, 0.25);
  border-right-color: rgba(192, 60, 64, 0.25);
  border-top-color: rgba(192, 60, 64, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 16135, 110, 196;
  background-color: rgba(255, 110, 196, 0.1);
  border-bottom-color: rgba(255, 110, 196, 0.25);
  border-left-color: rgba(255, 110, 196, 0.25);
  border-right-color: rgba(255, 110, 196, 0.25);
  border-top-color: rgba(255, 110, 196, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 192, 60, 64;
  background-color: rgba(192, 60, 64, 0.1);
  border-bottom-color: rgba(192, 60, 64, 0.25);
  border-left-color: rgba(192, 60, 64, 0.25);
  border-right-color: rgba(192, 60, 64, 0.25);
  border-top-color: rgba(192, 60, 64, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 168, 111, 50;
  background-color: rgba(168, 111, 50, 0.1);
  border-bottom-color: rgba(168, 111, 50, 0.25);
  border-left-color: rgba(168, 111, 50, 0.25);
  border-right-color: rgba(168, 111, 50, 0.25);
  border-top-color: rgba(168, 111, 50, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 51, 165, 85;
  background-color: rgba(51, 165, 85, 0.1);
  border-bottom-color: rgba(51, 165, 85, 0.25);
  border-left-color: rgba(51, 165, 85, 0.25);
  border-right-color: rgba(51, 165, 85, 0.25);
  border-top-color: rgba(51, 165, 85, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 51, 150, 148;
  background-color: rgba(51, 150, 148, 0.1);
  border-bottom-color: rgba(51, 150, 148, 0.25);
  border-left-color: rgba(51, 150, 148, 0.25);
  border-right-color: rgba(51, 150, 148, 0.25);
  border-top-color: rgba(51, 150, 148, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 168, 111, 50;
  background-color: rgba(168, 111, 50, 0.1);
  border-bottom-color: rgba(168, 111, 50, 0.25);
  border-left-color: rgba(168, 111, 50, 0.25);
  border-right-color: rgba(168, 111, 50, 0.25);
  border-top-color: rgba(168, 111, 50, 0.25);
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
  text-decoration: rgb(204, 210, 219);
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

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(59, 166, 247, 0.1);
  border-bottom-color: rgba(59, 166, 247, 0.15);
  border-left-color: rgba(59, 166, 247, 0.15);
  border-right-color: rgba(59, 166, 247, 0.15);
  border-top-color: rgba(59, 166, 247, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(102, 193, 250);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 210, 219);
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
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(174, 183, 199);
  text-decoration: rgb(174, 183, 199);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(174, 183, 199);
  text-decoration: rgb(174, 183, 199);
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
  text-decoration: rgb(174, 183, 199);
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
  text-decoration: rgb(174, 183, 199);
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
  text-decoration: rgb(174, 183, 199);
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
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 210, 219);
  border-left-color: rgb(204, 210, 219);
  border-right-color: rgb(204, 210, 219);
  border-top-color: rgb(204, 210, 219);
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(38, 44, 54);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 210, 219);
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 210, 219);
  text-decoration: underline dotted rgb(204, 210, 219);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-d: 61% !important;
  --accent-h: 206 !important;
  --accent-l: 60% !important;
  --accent-s: 92% !important;
  --background-modifier-active-hover: hsla(206, 92%, 60%, 0.1) !important;
  --background-modifier-border: #b7bfcd !important;
  --background-modifier-border-focus: #8d9ab0 !important;
  --background-modifier-border-hover: #a2acbe !important;
  --background-modifier-form-field: #f6f7f9 !important;
  --background-modifier-form-field-hover: #f6f7f9 !important;
  --background-primary: #f6f7f9 !important;
  --background-primary-alt: #e1e4ea !important;
  --background-secondary: #e1e4ea !important;
  --base-d: 11% !important;
  --base-h: 218 !important;
  --base-l: 97% !important;
  --base-s: 18% !important;
  --bases-cards-background: #f6f7f9 !important;
  --bases-cards-cover-background: #e1e4ea !important;
  --bases-cards-shadow: 0 0 0 1px #b7bfcd !important;
  --bases-cards-shadow-hover: 0 0 0 1px #a2acbe !important;
  --bases-embed-border-color: #b7bfcd !important;
  --bases-group-heading-property-color: #56647b !important;
  --bases-table-border-color: #b7bfcd !important;
  --bases-table-cell-background-active: #f6f7f9 !important;
  --bases-table-cell-background-disabled: #e1e4ea !important;
  --bases-table-cell-background-selected: hsla(206, 92%, 60%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #8d9ab0 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(205, 92.92%, 64.5%) !important;
  --bases-table-group-background: #e1e4ea !important;
  --bases-table-header-background: #f6f7f9 !important;
  --bases-table-header-color: #56647b !important;
  --bases-table-summary-background: #f6f7f9 !important;
  --blockquote-border-color: hsl(205, 92.92%, 64.5%) !important;
  --blue: #5788d8 !important;
  --blur-background: color-mix(in srgb, #f6f7f9 65%, transparent) linear-gradient(#f6f7f9, color-mix(in srgb, #f6f7f9 65%, transparent)) !important;
  --bold-weight: 600 !important;
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
  --callout-title-weight: 600;
  --canvas-background: #f6f7f9 !important;
  --canvas-card-label-color: #7886a1 !important;
  --canvas-dot-pattern: #b7bfcd !important;
  --caret-color: #485465 !important;
  --checkbox-border-color: #7886a1 !important;
  --checkbox-border-color-hover: #56647b !important;
  --checkbox-color: hsl(205, 92.92%, 64.5%) !important;
  --checkbox-color-hover: hsl(203, 93.84%, 69%) !important;
  --checkbox-marker-color: #f6f7f9 !important;
  --checklist-done-color: #56647b !important;
  --code-background: #e1e4ea !important;
  --code-border-color: #b7bfcd !important;
  --code-comment: #7886a1 !important;
  --code-function: #c053d8 !important;
  --code-important: #d85757 !important;
  --code-keyword: #54b1db !important;
  --code-normal: #485465 !important;
  --code-operator: #d34fae !important;
  --code-property: #58ca58 !important;
  --code-punctuation: #56647b !important;
  --code-string: #d49755 !important;
  --code-tag: #5788d8 !important;
  --code-value: #52d8d8 !important;
  --collapse-icon-color: #7886a1 !important;
  --collapse-icon-color-collapsed: hsl(206, 92%, 60%) !important;
  --color-accent: hsl(206, 92%, 60%) !important;
  --color-accent-1: hsl(205, 92.92%, 64.5%) !important;
  --color-accent-2: hsl(203, 93.84%, 69%) !important;
  --color-accent-hsl: 206, 92%, 60% !important;
  --color-base-00: #f6f7f9 !important;
  --color-base-10: #e1e4ea !important;
  --color-base-100: #485465 !important;
  --color-base-20: #e1e4ea !important;
  --color-base-25: #ccd2db !important;
  --color-base-30: #b7bfcd !important;
  --color-base-35: #a2acbe !important;
  --color-base-40: #8d9ab0 !important;
  --color-base-50: #7886a1 !important;
  --color-base-60: #647590 !important;
  --color-base-70: #56647b !important;
  --current-line-number-color: #dac752 !important;
  --cyan: #52d8d8 !important;
  --dark: #485465 !important;
  --darkgray: #485465 !important;
  --divider-color: #b7bfcd !important;
  --divider-color-hover: hsl(205, 92.92%, 64.5%) !important;
  --dropdown-background: #f6f7f9 !important;
  --dropdown-background-hover: #e1e4ea !important;
  --em-color: #d34fae !important;
  --embed-block-shadow-hover: 0 0 0 1px #b7bfcd, inset 0 0 0 1px #b7bfcd !important;
  --embed-border-start: 2px solid hsl(205, 92.92%, 64.5%) !important;
  --file-header-background: #f6f7f9 !important;
  --file-header-background-focused: #f6f7f9 !important;
  --flair-background: #f6f7f9 !important;
  --flair-color: #485465 !important;
  --footnote-divider-color: #b7bfcd !important;
  --footnote-id-color: #56647b !important;
  --footnote-id-color-no-occurrences: #7886a1 !important;
  --graph-line: #a2acbe !important;
  --graph-node: #56647b !important;
  --graph-node-focused: hsl(206, 92%, 60%) !important;
  --graph-node-unresolved: #7886a1 !important;
  --graph-text: #485465 !important;
  --gray: #56647b !important;
  --green: #58ca58 !important;
  --h1-color: #485465 !important;
  --h1-size: 1.7rem !important;
  --h2-color: #485465 !important;
  --h2-size: 1.5rem !important;
  --h3-color: #5788d8 !important;
  --h3-size: 1.2rem !important;
  --h4-color: #dac752 !important;
  --h4-size: 1.1rem !important;
  --h5-color: #d85757 !important;
  --h5-size: 1rem !important;
  --h6-color: #8956d6 !important;
  --h6-size: 0.9rem !important;
  --heading-formatting: #7886a1 !important;
  --heading-spacing: 2.5rem !important;
  --highlight: hsla(206, 92%, 60%, 0.1) !important;
  --hr-color: #b7bfcd !important;
  --icon-color: #56647b !important;
  --icon-color-active: hsl(206, 92%, 60%) !important;
  --icon-color-focused: #485465 !important;
  --icon-color-hover: #56647b !important;
  --inline-title-color: #485465 !important;
  --inline-title-size: 1.7rem !important;
  --input-date-separator: #7886a1 !important;
  --input-placeholder-color: #7886a1 !important;
  --interactive-accent: hsl(205, 92.92%, 64.5%) !important;
  --interactive-accent-hover: hsl(203, 93.84%, 69%) !important;
  --interactive-accent-hsl: 206, 92%, 60% !important;
  --interactive-hover: #e1e4ea !important;
  --interactive-normal: #f6f7f9 !important;
  --light: #f6f7f9 !important;
  --light-blue: #54b1db !important;
  --light-purple: #c053d8 !important;
  --lightgray: #e1e4ea !important;
  --line-number-color: #7886a1 !important;
  --link-color: hsl(206, 92%, 60%) !important;
  --link-color-hover: hsl(203, 93.84%, 69%) !important;
  --link-external-color: hsl(206, 92%, 60%) !important;
  --link-external-color-hover: hsl(203, 93.84%, 69%) !important;
  --link-unresolved-color: hsl(206, 92%, 60%) !important;
  --link-unresolved-decoration-color: hsla(206, 92%, 60%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #7886a1 !important;
  --list-marker-color-collapsed: hsl(206, 92%, 60%) !important;
  --list-marker-color-hover: #56647b !important;
  --menu-background: #e1e4ea !important;
  --menu-border-color: #a2acbe !important;
  --metadata-border-color: #b7bfcd !important;
  --metadata-divider-color: #b7bfcd !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #485465 !important;
  --metadata-label-text-color: #56647b !important;
  --metadata-label-text-color-hover: #56647b !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #8d9ab0 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #a2acbe !important;
  --modal-background: #f6f7f9 !important;
  --modal-border-color: #8d9ab0 !important;
  --nav-collapse-icon-color: #7886a1 !important;
  --nav-collapse-icon-color-collapsed: #7886a1 !important;
  --nav-heading-color: #485465 !important;
  --nav-heading-color-collapsed: #7886a1 !important;
  --nav-heading-color-collapsed-hover: #56647b !important;
  --nav-heading-color-hover: #485465 !important;
  --nav-item-background-selected: hsla(206, 92%, 60%, 0.15) !important;
  --nav-item-color: #56647b !important;
  --nav-item-color-active: #485465 !important;
  --nav-item-color-highlighted: hsl(206, 92%, 60%) !important;
  --nav-item-color-hover: #485465 !important;
  --nav-item-color-selected: #485465 !important;
  --nav-tag-color: #7886a1 !important;
  --nav-tag-color-active: #56647b !important;
  --nav-tag-color-hover: #56647b !important;
  --orange: #d49755 !important;
  --pdf-background: #f6f7f9 !important;
  --pdf-page-background: #f6f7f9 !important;
  --pdf-sidebar-background: #f6f7f9 !important;
  --pill-border-color: #b7bfcd !important;
  --pill-border-color-hover: #a2acbe !important;
  --pill-color: #56647b !important;
  --pill-color-hover: #485465 !important;
  --pill-color-remove: #7886a1 !important;
  --pill-color-remove-hover: hsl(206, 92%, 60%) !important;
  --pink: #d34fae !important;
  --prompt-background: #f6f7f9 !important;
  --prompt-border-color: #8d9ab0 !important;
  --purple: #8956d6 !important;
  --quote-color: #58ca58 !important;
  --raised-background: color-mix(in srgb, #f6f7f9 65%, transparent) linear-gradient(#f6f7f9, color-mix(in srgb, #f6f7f9 65%, transparent)) !important;
  --red: #d85757 !important;
  --ribbon-background: #e1e4ea !important;
  --ribbon-background-collapsed: #f6f7f9 !important;
  --search-clear-button-color: #56647b !important;
  --search-icon-color: #56647b !important;
  --search-result-background: #f6f7f9 !important;
  --secondary: hsl(206, 92%, 60%) !important;
  --setting-group-heading-color: #485465 !important;
  --setting-items-background: #e1e4ea !important;
  --setting-items-border-color: #b7bfcd !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #a2acbe !important;
  --slider-track-background: #b7bfcd !important;
  --status-bar-background: #e1e4ea !important;
  --status-bar-border-color: #b7bfcd !important;
  --status-bar-text-color: #56647b !important;
  --strong-color: #d34fae !important;
  --suggestion-background: #f6f7f9 !important;
  --tab-background-active: #f6f7f9 !important;
  --tab-container-background: #e1e4ea !important;
  --tab-divider-color: #a2acbe !important;
  --tab-outline-color: #b7bfcd !important;
  --tab-switcher-background: #e1e4ea !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e1e4ea, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(206, 92%, 60%) !important;
  --tab-text-color: #7886a1 !important;
  --tab-text-color-active: #56647b !important;
  --tab-text-color-focused: #56647b !important;
  --tab-text-color-focused-active: #56647b !important;
  --tab-text-color-focused-active-current: #485465 !important;
  --tab-text-color-focused-highlighted: hsl(206, 92%, 60%) !important;
  --table-add-button-border-color: #b7bfcd !important;
  --table-border-color: #b7bfcd !important;
  --table-drag-handle-background-active: hsl(205, 92.92%, 64.5%) !important;
  --table-drag-handle-color: #7886a1 !important;
  --table-header-border-color: #b7bfcd !important;
  --table-header-color: #485465 !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(206, 92%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(205, 92.92%, 64.5%) !important;
  --tag-background: hsla(206, 92%, 60%, 0.1) !important;
  --tag-background-hover: hsla(206, 92%, 60%, 0.2) !important;
  --tag-border-color: hsla(206, 92%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(206, 92%, 60%, 0.15) !important;
  --tag-color: hsl(206, 92%, 60%) !important;
  --tag-color-hover: hsl(206, 92%, 60%) !important;
  --tertiary: hsl(203, 93.84%, 69%) !important;
  --text-accent: hsl(206, 92%, 60%) !important;
  --text-accent-hover: hsl(203, 93.84%, 69%) !important;
  --text-faint: #7886a1 !important;
  --text-muted: #56647b !important;
  --text-normal: #485465 !important;
  --text-selection: hsla(206, 92%, 60%, 0.2) !important;
  --textHighlight: hsla(206, 92%, 60%, 0.1) !important;
  --titlebar-background: #e1e4ea !important;
  --titlebar-background-focused: #ccd2db !important;
  --titlebar-border-color: #b7bfcd !important;
  --titlebar-text-color: #56647b !important;
  --titlebar-text-color-focused: #485465 !important;
  --vault-profile-color: #485465 !important;
  --vault-profile-color-hover: #485465 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --yellow: #dac752 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 247, 249);
  color: rgb(72, 84, 101);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(211, 79, 174);
  outline: rgb(211, 79, 174) none 0px;
  text-decoration: rgb(211, 79, 174);
  text-decoration-color: rgb(211, 79, 174);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(72, 84, 101);
  outline: rgb(72, 84, 101) none 0px;
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body del {
  color: rgb(72, 84, 101);
  outline: rgb(72, 84, 101) none 0px;
  text-decoration: line-through rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body p {
  color: rgb(86, 100, 123);
  outline: rgb(86, 100, 123) none 0px;
  text-decoration: rgb(86, 100, 123);
  text-decoration-color: rgb(86, 100, 123);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(59, 166, 247);
  outline: rgb(59, 166, 247) none 0px;
  text-decoration: underline rgb(59, 166, 247);
  text-decoration-color: rgb(59, 166, 247);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(59, 166, 247);
  outline: rgb(59, 166, 247) none 0px;
  text-decoration: underline rgb(59, 166, 247);
  text-decoration-color: rgb(59, 166, 247);
}

html[saved-theme="light"] body a.internal.broken {
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

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
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
  text-decoration: rgb(120, 134, 161);
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(225, 228, 234);
  border-bottom-color: rgb(183, 191, 205);
  border-left-color: rgb(183, 191, 205);
  border-right-color: rgb(183, 191, 205);
  border-top-color: rgb(183, 191, 205);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(192, 83, 216);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(192, 83, 216);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(192, 83, 216);
  border-left-color: rgb(192, 83, 216);
  border-right-color: rgb(192, 83, 216);
  border-top-color: rgb(192, 83, 216);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
  border-left-color: rgb(80, 178, 249);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(86, 100, 123);
  text-decoration: line-through rgb(86, 100, 123);
  text-decoration-color: rgb(86, 100, 123);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(120, 134, 161);
  border-left-color: rgb(120, 134, 161);
  border-right-color: rgb(120, 134, 161);
  border-top-color: rgb(120, 134, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(72, 84, 101);
  text-decoration: rgb(72, 84, 101);
  text-decoration-color: rgb(72, 84, 101);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(173, 204, 255);
  border-left-color: rgb(173, 204, 255);
  border-right-color: rgb(173, 204, 255);
  border-top-color: rgb(173, 204, 255);
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
  text-decoration: rgb(72, 84, 101);
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

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(59, 166, 247, 0.1);
  border-bottom-color: rgba(59, 166, 247, 0.15);
  border-left-color: rgba(59, 166, 247, 0.15);
  border-right-color: rgba(59, 166, 247, 0.15);
  border-top-color: rgba(59, 166, 247, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(59, 166, 247);
}

html[saved-theme="light"] body h1 {
  color: rgb(72, 84, 101);
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
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(246, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 247, 249);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(86, 100, 123);
  text-decoration: rgb(86, 100, 123);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(86, 100, 123);
  text-decoration: rgb(86, 100, 123);
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
  text-decoration: rgb(86, 100, 123);
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
  text-decoration: rgb(86, 100, 123);
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
  text-decoration: rgb(86, 100, 123);
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
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(72, 84, 101);
  border-left-color: rgb(72, 84, 101);
  border-right-color: rgb(72, 84, 101);
  border-top-color: rgb(72, 84, 101);
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(225, 228, 234);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(72, 84, 101);
}

html[saved-theme="light"] body abbr {
  color: rgb(72, 84, 101);
  text-decoration: underline dotted rgb(72, 84, 101);
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
}`,
  },
};
