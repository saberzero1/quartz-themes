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
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.08) !important;
  --background-modifier-border-focus: #4c4c4c !important;
  --background-modifier-border-hover: #414141 !important;
  --background-modifier-error: #e03035 !important;
  --background-modifier-error-hover: #e03035 !important;
  --background-modifier-error-rgb: 224, 48, 53 !important;
  --background-modifier-form-field: #1e1e1e !important;
  --background-modifier-form-field-hover: #1e1e1e !important;
  --background-modifier-hover: hsla(258, 88%, 66%, 0.08) !important;
  --background-modifier-success: #32ce2d !important;
  --background-modifier-success-rgb: 47, 206, 42 !important;
  --background-primary: #191919 !important;
  --background-primary-alt: #222222 !important;
  --background-secondary: #1e1e1e !important;
  --background-secondary-alt: #1e1e1e !important;
  --bases-cards-background: #191919 !important;
  --bases-cards-cover-background: #222222 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #414141 !important;
  --bases-table-cell-background-active: #191919 !important;
  --bases-table-cell-background-disabled: #222222 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4c4c4c !important;
  --bases-table-group-background: #222222 !important;
  --bases-table-header-background: #191919 !important;
  --bases-table-header-background-hover: hsla(258, 88%, 66%, 0.08) !important;
  --bases-table-row-background-hover: #1e1e1e !important;
  --bases-table-summary-background: #191919 !important;
  --bases-table-summary-background-hover: hsla(258, 88%, 66%, 0.08) !important;
  --blockquote-background-color: hsla(258, 88%, 66%, 0.05) !important;
  --blockquote-border-color: hsla(258, 88%, 66%, 0.5) !important;
  --blockquote-color: #b3b3b3 !important;
  --blur-background: color-mix(in srgb, #414141 65%, transparent) linear-gradient(#414141, color-mix(in srgb, #414141 65%, transparent)) !important;
  --bold-color: #2dcec9 !important;
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
  --canvas-background: #191919 !important;
  --canvas-color-1: 224, 48, 53 !important;
  --canvas-color-2: 224, 131, 48 !important;
  --canvas-color-3: 206, 201, 42 !important;
  --canvas-color-4: 47, 206, 42 !important;
  --canvas-color-5: 42, 206, 201 !important;
  --canvas-color-6: 131, 48, 224 !important;
  --canvas-dot-pattern: #414141 !important;
  --checkbox-marker-color: #191919 !important;
  --code-background: #222222 !important;
  --code-bracket-background: hsla(258, 88%, 66%, 0.08) !important;
  --code-function: #cec92a !important;
  --code-important: #e08330 !important;
  --code-keyword: #e0308d !important;
  --code-operator: #e03035 !important;
  --code-property: #2dcec9 !important;
  --code-radius: 8px !important;
  --code-string: #32ce2d !important;
  --code-tag: #e03035 !important;
  --code-value: #9149e4 !important;
  --collapse-icon-color-collapsed: #666666 !important;
  --color-base-00: #191919 !important;
  --color-base-05: #1e1e1e !important;
  --color-base-10: #222222 !important;
  --color-base-20: #313131 !important;
  --color-base-25: #363636 !important;
  --color-base-30: #414141 !important;
  --color-base-35: #4c4c4c !important;
  --color-blue: #2471d4 !important;
  --color-blue-rgb: 36, 113, 212 !important;
  --color-cyan: #2dcec9 !important;
  --color-cyan-rgb: 42, 206, 201 !important;
  --color-green: #32ce2d !important;
  --color-green-rgb: 47, 206, 42 !important;
  --color-orange: #e08330 !important;
  --color-orange-rgb: 224, 131, 48 !important;
  --color-pink: #e0308d !important;
  --color-pink-rgb: 224, 48, 141 !important;
  --color-purple: #9149e4 !important;
  --color-purple-rgb: 131, 48, 224 !important;
  --color-red: #e03035 !important;
  --color-red-rgb: 224, 48, 53 !important;
  --color-yellow: #cec92a !important;
  --color-yellow-rgb: 206, 201, 42 !important;
  --dataview-table-even-bg-color: #222222 !important;
  --dataview-table-odd-bg-color: #1e1e1e !important;
  --dataview-table-row-hover: 258, 88%, 66% !important;
  --dataview-table-tbody-size: 13.12px !important;
  --dataview-table-thead-size: 14.08px !important;
  --divider-color-hover: hsla(258, 88%, 66%, 0.5) !important;
  --dropdown-background: #414141 !important;
  --dropdown-background-hover: #4c4c4c !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsla(258, 88%, 66%, 0.5) !important;
  --embed-max-height: 750px !important;
  --file-header-background: #191919 !important;
  --file-header-background-focused: #191919 !important;
  --file-header-font-weight: 700 !important;
  --flair-background: #414141 !important;
  --font-editor-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif !important;
  --footnote-input-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --graph-line: #4c4c4c !important;
  --graph-node-attachment: #cec92a !important;
  --graph-node-focused: #8a5cf5 !important;
  --graph-node-tag: #32ce2d !important;
  --h-hover-transparency: 20% !important;
  --h-transparency: 7% !important;
  --h1-color: #2471d4 !important;
  --h1-size: 1.802em !important;
  --h2-color: #9149e4 !important;
  --h2-size: 1.602em !important;
  --h2-weight: 700 !important;
  --h3-color: #e0308d !important;
  --h3-size: 1.424em !important;
  --h3-weight: 700 !important;
  --h4-color: #e03035 !important;
  --h4-size: 1.266em !important;
  --h4-weight: 700 !important;
  --h5-color: #e08330 !important;
  --h5-size: 1.125em !important;
  --h5-weight: 700 !important;
  --h6-color: #cec92a !important;
  --h6-weight: 700 !important;
  --highlight: rgba(236, 235, 0, 0.4) !important;
  --icon-color-active: hsl(258, 88%, 66%) !important;
  --icon-color-focused: hsl(258, 88%, 66%) !important;
  --icon-color-hover: hsl(258, 88%, 66%) !important;
  --icon-opacity: 0.8 !important;
  --inline-title-color: #dadada !important;
  --inline-title-size: 1.92em !important;
  --interactive-hover: #4c4c4c !important;
  --interactive-normal: #414141 !important;
  --italic-color: #32ce2d !important;
  --light: #191919 !important;
  --lightgray: #1e1e1e !important;
  --link-color: #8a5cf5 !important;
  --link-color-hover: rgba(138, 92, 245, 0.825) !important;
  --link-external-color: #0071e3 !important;
  --link-external-color-hover: #0764c1 !important;
  --link-unresolved-color: #8a5cf5 !important;
  --link-unresolved-filter: grayscale(25%) !important;
  --list-indent: 2em !important;
  --list-marker-color-collapsed: #666666 !important;
  --live-heading-bg-bottom: 0.4375rem !important;
  --live-heading-bg-top: 0.5625rem !important;
  --live-heading-padding: 0.84375rem !important;
  --menu-background: #1e1e1e !important;
  --menu-border-color: #414141 !important;
  --metadata-background: #222222 !important;
  --metadata-border-radius: 8px !important;
  --metadata-input-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --metadata-label-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --metadata-property-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4c4c4c !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #414141 !important;
  --metadata-property-radius: 4px !important;
  --metadata-property-radius-focus: 4px !important;
  --metadata-property-radius-hover: 4px !important;
  --modal-background: #191919 !important;
  --nav-item-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --nav-item-background-hover: hsla(258, 88%, 66%, 0.08) !important;
  --nav-item-color-active: hsla(258, 88%, 66%, 0.95) !important;
  --nav-item-color-highlighted: #8a5cf5 !important;
  --nav-item-color-hover: hsla(258, 88%, 66%, 0.775) !important;
  --nav-item-color-selected: hsla(258, 88%, 66%, 0.95) !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-hover: 500 !important;
  --p-spacing-empty: 0.1rem !important;
  --pdf-background: #191919 !important;
  --pdf-page-background: #191919 !important;
  --pdf-sidebar-background: #191919 !important;
  --pill-border-color-hover: #414141 !important;
  --pill-color-remove-hover: #8a5cf5 !important;
  --prompt-background: #191919 !important;
  --raised-background: color-mix(in srgb, #414141 65%, transparent) linear-gradient(#414141, color-mix(in srgb, #414141 65%, transparent)) !important;
  --ribbon-background: #1e1e1e !important;
  --ribbon-background-collapsed: #191919 !important;
  --scrollbar-active-thumb-bg: hsla(258, 88%, 66%, 0.5) !important;
  --search-result-background: #191919 !important;
  --secondary: #8a5cf5 !important;
  --setting-items-background: #222222 !important;
  --shiki-code-background: #222222 !important;
  --shiki-code-block-border-radius: 8px !important;
  --shiki-code-function: #32ce2d !important;
  --shiki-code-important: #e08330 !important;
  --shiki-code-keyword: #e0308d !important;
  --shiki-code-property: #2dcec9 !important;
  --shiki-code-string: #cec92a !important;
  --shiki-code-value: #9149e4 !important;
  --shiki-highlight-green: rgba(47, 206, 42, 0.5) !important;
  --shiki-highlight-green-background: rgba(47, 206, 42, 0.1) !important;
  --shiki-highlight-red: rgba(224, 48, 53, 0.5) !important;
  --shiki-highlight-red-background: rgba(224, 48, 53, 0.1) !important;
  --slider-thumb-border-color: hsla(258, 88%, 66%, 0.75) !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: hsla(258, 88%, 66%, 0.5) !important;
  --status-bar-background: #1e1e1e !important;
  --suggestion-background: #191919 !important;
  --sync-avatar-color-1: #e03035 !important;
  --sync-avatar-color-2: #e08330 !important;
  --sync-avatar-color-3: #cec92a !important;
  --sync-avatar-color-4: #32ce2d !important;
  --sync-avatar-color-5: #2dcec9 !important;
  --sync-avatar-color-6: #2471d4 !important;
  --sync-avatar-color-7: #9149e4 !important;
  --sync-avatar-color-8: #e0308d !important;
  --tab-background-active: #191919 !important;
  --tab-container-background: #1e1e1e !important;
  --tab-divider-color: #414141 !important;
  --tab-font-weight: 700 !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-switcher-background: #1e1e1e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e1e1e, transparent) !important;
  --tab-text-color-focused-active-current: hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: #8a5cf5 !important;
  --table-background: #1e1e1e !important;
  --table-column-alt-background: #1e1e1e !important;
  --table-header-background: #1e1e1e !important;
  --table-row-alt-background: #1e1e1e !important;
  --table-row-alt-background-hover: #1e1e1e !important;
  --table-row-background-hover: #1e1e1e !important;
  --tag-background: hsla(258, 88%, 66%, 0.075) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.05) !important;
  --tag-color: hsla(258, 88%, 66%, 0.925) !important;
  --tag-color-hover: hsla(258, 88%, 66%, 0.95) !important;
  --tag-padding-x: 0.7em !important;
  --tag-padding-y: 0.3em !important;
  --tag-radius: 1em !important;
  --tertiary: rgba(138, 92, 245, 0.825) !important;
  --text-accent: #8a5cf5 !important;
  --text-accent-hover: rgba(138, 92, 245, 0.825) !important;
  --text-error: #e03035 !important;
  --text-highlight-bg: rgba(236, 235, 0, 0.4) !important;
  --text-highlight-bg-rgb: 236, 235, 0 !important;
  --text-success: #32ce2d !important;
  --text-warning: #e08330 !important;
  --textHighlight: rgba(236, 235, 0, 0.4) !important;
  --titlebar-background: #1e1e1e !important;
  --titlebar-background-focused: #1e1e1e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(45, 206, 201);
  outline: rgb(45, 206, 201) none 0px;
  text-decoration-color: rgb(45, 206, 201);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(50, 206, 45);
  outline: rgb(50, 206, 45) none 0px;
  text-decoration-color: rgb(50, 206, 45);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(50, 206, 45);
  outline: rgb(50, 206, 45) none 0px;
  text-decoration-color: rgb(50, 206, 45);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(45, 206, 201);
  outline: rgb(45, 206, 201) none 0px;
  text-decoration-color: rgb(45, 206, 201);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(236, 235, 0, 0.4);
}

html[saved-theme="dark"] body h1.article-title {
  font-weight: 700;
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(0, 113, 227);
  outline: rgb(0, 113, 227) none 0px;
  text-decoration-color: rgb(0, 113, 227);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 92, 245);
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(138, 92, 245);
  filter: grayscale(0.25);
  outline: rgb(138, 92, 245) none 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(138, 92, 245, 0.05);
  padding-bottom: 20px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body td {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body th {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(30, 30, 30);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(34, 34, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body figure {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(34, 34, 34);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgba(138, 92, 245, 0.5);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 131, 48);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(206, 201, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(45, 206, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(206, 201, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(206, 201, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(145, 73, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(50, 206, 45);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(50, 206, 45);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(50, 206, 45);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 42, 206, 201;
  background: rgba(42, 206, 201, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 224, 48, 53;
  background: rgba(224, 48, 53, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 224, 48, 53;
  background: rgba(224, 48, 53, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 131, 48, 224;
  background: rgba(131, 48, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 224, 48, 53;
  background: rgba(224, 48, 53, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 36, 113, 212;
  background: rgba(36, 113, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 36, 113, 212;
  background: rgba(36, 113, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 224, 131, 48;
  background: rgba(224, 131, 48, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 47, 206, 42;
  background: rgba(47, 206, 42, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 42, 206, 201;
  background: rgba(42, 206, 201, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 36, 113, 212;
  background: rgba(36, 113, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 224, 131, 48;
  background: rgba(224, 131, 48, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
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
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.08);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(138, 92, 245, 0.08);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.08);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.075);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgba(138, 92, 245, 0.925);
}

html[saved-theme="dark"] body h1 {
  color: rgb(36, 113, 212);
}

html[saved-theme="dark"] body h1.article-title {
  font-size: 30.72px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(145, 73, 228);
}

html[saved-theme="dark"] body h3 {
  color: rgb(224, 48, 141);
}

html[saved-theme="dark"] body h4 {
  color: rgb(224, 48, 53);
}

html[saved-theme="dark"] body h5 {
  color: rgb(224, 131, 48);
}

html[saved-theme="dark"] body h6 {
  color: rgb(206, 201, 42);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-weight: 500;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-weight: 500;
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(30, 30, 30);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(30, 30, 30);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(30, 30, 30);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: rgb(34, 34, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(34, 34, 34);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(138, 92, 245, 0.075);
  border-radius: 14px;
  color: rgba(138, 92, 245, 0.925);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 25, 25);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(30, 30, 30);
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(34, 34, 34);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.075);
  border-bottom-left-radius: 12.25px;
  border-bottom-right-radius: 12.25px;
  border-top-left-radius: 12.25px;
  border-top-right-radius: 12.25px;
  color: rgba(138, 92, 245, 0.925);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.08) !important;
  --background-modifier-border: #dadada !important;
  --background-modifier-border-focus: #c7c7c7 !important;
  --background-modifier-error: #e03035 !important;
  --background-modifier-error-hover: #e03035 !important;
  --background-modifier-error-rgb: 224, 48, 53 !important;
  --background-modifier-form-field: #f0f0f0 !important;
  --background-modifier-form-field-hover: #f0f0f0 !important;
  --background-modifier-hover: hsla(258, 88%, 66%, 0.08) !important;
  --background-modifier-success: #0fa50a !important;
  --background-modifier-success-rgb: 47, 206, 42 !important;
  --background-primary: #f7f7f7 !important;
  --background-primary-alt: #e7e7e7 !important;
  --background-secondary: #f0f0f0 !important;
  --background-secondary-alt: #f0f0f0 !important;
  --bases-cards-background: #f7f7f7 !important;
  --bases-cards-cover-background: #e7e7e7 !important;
  --bases-cards-shadow: 0 0 0 1px #dadada !important;
  --bases-embed-border-color: #dadada !important;
  --bases-group-heading-property-color: #4f4f4f !important;
  --bases-table-border-color: #dadada !important;
  --bases-table-cell-background-active: #f7f7f7 !important;
  --bases-table-cell-background-disabled: #e7e7e7 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #c7c7c7 !important;
  --bases-table-group-background: #e7e7e7 !important;
  --bases-table-header-background: #f7f7f7 !important;
  --bases-table-header-background-hover: hsla(258, 88%, 66%, 0.08) !important;
  --bases-table-header-color: #4f4f4f !important;
  --bases-table-row-background-hover: #f0f0f0 !important;
  --bases-table-summary-background: #f7f7f7 !important;
  --bases-table-summary-background-hover: hsla(258, 88%, 66%, 0.08) !important;
  --blockquote-background-color: hsla(258, 88%, 66%, 0.05) !important;
  --blockquote-border-color: hsla(258, 88%, 66%, 0.5) !important;
  --blockquote-color: #4f4f4f !important;
  --blur-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent)) !important;
  --bold-color: #18ada8 !important;
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
  --canvas-background: #f7f7f7 !important;
  --canvas-card-label-color: #aaaaaa !important;
  --canvas-color-1: 224, 48, 53 !important;
  --canvas-color-2: 224, 131, 48 !important;
  --canvas-color-3: 206, 201, 42 !important;
  --canvas-color-4: 47, 206, 42 !important;
  --canvas-color-5: 42, 206, 201 !important;
  --canvas-color-6: 131, 48, 224 !important;
  --canvas-dot-pattern: #d4d4d4 !important;
  --checkbox-border-color: #aaaaaa !important;
  --checkbox-border-color-hover: #4f4f4f !important;
  --checkbox-marker-color: #f7f7f7 !important;
  --checklist-done-color: #4f4f4f !important;
  --code-background: #e7e7e7 !important;
  --code-border-color: #dadada !important;
  --code-bracket-background: hsla(258, 88%, 66%, 0.08) !important;
  --code-comment: #aaaaaa !important;
  --code-function: #b6b11c !important;
  --code-important: #d57929 !important;
  --code-keyword: #e0308d !important;
  --code-operator: #e03035 !important;
  --code-property: #18ada8 !important;
  --code-punctuation: #4f4f4f !important;
  --code-radius: 8px !important;
  --code-string: #0fa50a !important;
  --code-tag: #e03035 !important;
  --code-value: #8330e0 !important;
  --collapse-icon-color: #aaaaaa !important;
  --collapse-icon-color-collapsed: #aaaaaa !important;
  --color-base-00: #f7f7f7 !important;
  --color-base-05: #f0f0f0 !important;
  --color-base-10: #e7e7e7 !important;
  --color-base-20: #e0e0e0 !important;
  --color-base-25: #dadada !important;
  --color-base-30: #d4d4d4 !important;
  --color-base-35: #c7c7c7 !important;
  --color-base-50: #aaaaaa !important;
  --color-base-70: #4f4f4f !important;
  --color-blue: #2471d4 !important;
  --color-blue-rgb: 36, 113, 212 !important;
  --color-cyan: #18ada8 !important;
  --color-cyan-rgb: 42, 206, 201 !important;
  --color-green: #0fa50a !important;
  --color-green-rgb: 47, 206, 42 !important;
  --color-orange: #d57929 !important;
  --color-orange-rgb: 224, 131, 48 !important;
  --color-pink: #e0308d !important;
  --color-pink-rgb: 224, 48, 141 !important;
  --color-purple: #8330e0 !important;
  --color-purple-rgb: 131, 48, 224 !important;
  --color-red: #e03035 !important;
  --color-red-rgb: 224, 48, 53 !important;
  --color-yellow: #b6b11c !important;
  --color-yellow-rgb: 206, 201, 42 !important;
  --dark: #4f4f4f !important;
  --darkgray: #4f4f4f !important;
  --dataview-table-even-bg-color: #e7e7e7 !important;
  --dataview-table-odd-bg-color: #f0f0f0 !important;
  --dataview-table-row-hover: 258, 88%, 66% !important;
  --dataview-table-tbody-size: 13.12px !important;
  --dataview-table-thead-size: 14.08px !important;
  --divider-color: #dadada !important;
  --divider-color-hover: hsla(258, 88%, 66%, 0.5) !important;
  --dropdown-background: #f7f7f7 !important;
  --dropdown-background-hover: #e7e7e7 !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsla(258, 88%, 66%, 0.5) !important;
  --embed-max-height: 750px !important;
  --file-header-background: #f7f7f7 !important;
  --file-header-background-focused: #f7f7f7 !important;
  --file-header-font-weight: 700 !important;
  --flair-background: #f7f7f7 !important;
  --font-editor-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif !important;
  --footnote-divider-color: #dadada !important;
  --footnote-id-color: #4f4f4f !important;
  --footnote-id-color-no-occurrences: #aaaaaa !important;
  --footnote-input-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --graph-line: #c7c7c7 !important;
  --graph-node: #4f4f4f !important;
  --graph-node-attachment: #b6b11c !important;
  --graph-node-focused: #7e55dd !important;
  --graph-node-tag: #0fa50a !important;
  --graph-node-unresolved: #aaaaaa !important;
  --gray: #4f4f4f !important;
  --h-hover-transparency: 25% !important;
  --h-transparency: 12% !important;
  --h1-color: #2471d4 !important;
  --h1-size: 1.802em !important;
  --h2-color: #8330e0 !important;
  --h2-size: 1.602em !important;
  --h2-weight: 700 !important;
  --h3-color: #e0308d !important;
  --h3-size: 1.424em !important;
  --h3-weight: 700 !important;
  --h4-color: #e03035 !important;
  --h4-size: 1.266em !important;
  --h4-weight: 700 !important;
  --h5-color: #d57929 !important;
  --h5-size: 1.125em !important;
  --h5-weight: 700 !important;
  --h6-color: #b6b11c !important;
  --h6-weight: 700 !important;
  --heading-formatting: #aaaaaa !important;
  --highlight: rgba(236, 235, 0, 0.4) !important;
  --hr-color: #dadada !important;
  --icon-color: #4f4f4f !important;
  --icon-color-focused: hsl(258, 88%, 66%) !important;
  --icon-color-hover: hsl(258, 88%, 66%) !important;
  --icon-opacity: 0.8 !important;
  --inline-title-color: #222222 !important;
  --inline-title-size: 1.92em !important;
  --input-date-separator: #aaaaaa !important;
  --input-placeholder-color: #aaaaaa !important;
  --interactive-hover: #e7e7e7 !important;
  --interactive-normal: #f7f7f7 !important;
  --italic-color: #0fa50a !important;
  --light: #f7f7f7 !important;
  --lightgray: #f0f0f0 !important;
  --link-color: #7e55dd !important;
  --link-color-hover: rgba(126, 85, 221, 0.825) !important;
  --link-external-color: #0071e3 !important;
  --link-external-color-hover: #0764c1 !important;
  --link-unresolved-color: #7e55dd !important;
  --link-unresolved-filter: grayscale(25%) !important;
  --list-indent: 2em !important;
  --list-marker-color: #aaaaaa !important;
  --list-marker-color-collapsed: #aaaaaa !important;
  --list-marker-color-hover: #4f4f4f !important;
  --live-heading-bg-bottom: 0.4375rem !important;
  --live-heading-bg-top: 0.5625rem !important;
  --live-heading-padding: 0.84375rem !important;
  --menu-background: #f0f0f0 !important;
  --metadata-background: #e7e7e7 !important;
  --metadata-border-color: #dadada !important;
  --metadata-border-radius: 8px !important;
  --metadata-divider-color: #dadada !important;
  --metadata-input-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --metadata-label-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --metadata-label-text-color: #4f4f4f !important;
  --metadata-label-text-color-hover: #4f4f4f !important;
  --metadata-property-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c7c7c7 !important;
  --metadata-property-radius: 4px !important;
  --metadata-property-radius-focus: 4px !important;
  --metadata-property-radius-hover: 4px !important;
  --modal-background: #f7f7f7 !important;
  --nav-collapse-icon-color: #aaaaaa !important;
  --nav-collapse-icon-color-collapsed: #aaaaaa !important;
  --nav-heading-color-collapsed: #aaaaaa !important;
  --nav-heading-color-collapsed-hover: #4f4f4f !important;
  --nav-item-background-active: hsla(258, 88%, 66%, 0.08) !important;
  --nav-item-background-hover: hsla(258, 88%, 66%, 0.08) !important;
  --nav-item-color: #4f4f4f !important;
  --nav-item-color-active: hsla(258, 88%, 66%, 0.95) !important;
  --nav-item-color-highlighted: #7e55dd !important;
  --nav-item-color-hover: hsla(258, 88%, 66%, 0.775) !important;
  --nav-item-color-selected: hsla(258, 88%, 66%, 0.95) !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-hover: 500 !important;
  --nav-tag-color: #aaaaaa !important;
  --nav-tag-color-active: #4f4f4f !important;
  --nav-tag-color-hover: #4f4f4f !important;
  --p-spacing-empty: 0.1rem !important;
  --pdf-background: #f7f7f7 !important;
  --pdf-page-background: #f7f7f7 !important;
  --pdf-sidebar-background: #f7f7f7 !important;
  --pill-border-color: #dadada !important;
  --pill-color: #4f4f4f !important;
  --pill-color-remove: #aaaaaa !important;
  --pill-color-remove-hover: #7e55dd !important;
  --prompt-background: #f7f7f7 !important;
  --raised-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent)) !important;
  --ribbon-background: #f0f0f0 !important;
  --ribbon-background-collapsed: #f7f7f7 !important;
  --scrollbar-active-thumb-bg: hsla(258, 88%, 66%, 0.5) !important;
  --search-clear-button-color: #4f4f4f !important;
  --search-icon-color: #4f4f4f !important;
  --search-result-background: #f7f7f7 !important;
  --secondary: #7e55dd !important;
  --setting-items-background: #e7e7e7 !important;
  --setting-items-border-color: #dadada !important;
  --shiki-active-tab-border-color: #4f4f4f !important;
  --shiki-code-background: #e7e7e7 !important;
  --shiki-code-block-border-radius: 8px !important;
  --shiki-code-comment: #aaaaaa !important;
  --shiki-code-function: #0fa50a !important;
  --shiki-code-important: #d57929 !important;
  --shiki-code-keyword: #e0308d !important;
  --shiki-code-normal: #4f4f4f !important;
  --shiki-code-property: #18ada8 !important;
  --shiki-code-punctuation: #4f4f4f !important;
  --shiki-code-string: #b6b11c !important;
  --shiki-code-value: #8330e0 !important;
  --shiki-gutter-border-color: #dadada !important;
  --shiki-gutter-text-color: #aaaaaa !important;
  --shiki-gutter-text-color-highlight: #4f4f4f !important;
  --shiki-highlight-green: rgba(47, 206, 42, 0.5) !important;
  --shiki-highlight-green-background: rgba(47, 206, 42, 0.1) !important;
  --shiki-highlight-neutral: #4f4f4f !important;
  --shiki-highlight-red: rgba(224, 48, 53, 0.5) !important;
  --shiki-highlight-red-background: rgba(224, 48, 53, 0.1) !important;
  --shiki-terminal-dots-color: #aaaaaa !important;
  --slider-thumb-border-color: hsla(258, 88%, 66%, 0.75) !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: hsla(258, 88%, 66%, 0.5) !important;
  --status-bar-background: #f0f0f0 !important;
  --status-bar-border-color: #dadada !important;
  --status-bar-text-color: #4f4f4f !important;
  --suggestion-background: #f7f7f7 !important;
  --sync-avatar-color-1: #e03035 !important;
  --sync-avatar-color-2: #d57929 !important;
  --sync-avatar-color-3: #b6b11c !important;
  --sync-avatar-color-4: #0fa50a !important;
  --sync-avatar-color-5: #18ada8 !important;
  --sync-avatar-color-6: #2471d4 !important;
  --sync-avatar-color-7: #8330e0 !important;
  --sync-avatar-color-8: #e0308d !important;
  --tab-background-active: #f7f7f7 !important;
  --tab-container-background: #f0f0f0 !important;
  --tab-font-weight: 700 !important;
  --tab-outline-color: #dadada !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-switcher-background: #f0f0f0 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f0f0f0, transparent) !important;
  --tab-text-color: #aaaaaa !important;
  --tab-text-color-active: #4f4f4f !important;
  --tab-text-color-focused: #4f4f4f !important;
  --tab-text-color-focused-active: #4f4f4f !important;
  --tab-text-color-focused-active-current: hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: #7e55dd !important;
  --table-add-button-border-color: #dadada !important;
  --table-background: #f0f0f0 !important;
  --table-border-color: #dadada !important;
  --table-column-alt-background: #f0f0f0 !important;
  --table-drag-handle-color: #aaaaaa !important;
  --table-header-background: #f0f0f0 !important;
  --table-header-border-color: #dadada !important;
  --table-row-alt-background: #f0f0f0 !important;
  --table-row-alt-background-hover: #f0f0f0 !important;
  --table-row-background-hover: #f0f0f0 !important;
  --tag-background: hsla(258, 88%, 66%, 0.125) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.1) !important;
  --tag-color: hsla(258, 88%, 66%, 0.925) !important;
  --tag-color-hover: hsla(258, 88%, 66%, 0.95) !important;
  --tag-padding-x: 0.7em !important;
  --tag-padding-y: 0.3em !important;
  --tag-radius: 1em !important;
  --tertiary: rgba(126, 85, 221, 0.825) !important;
  --text-accent: #7e55dd !important;
  --text-accent-hover: rgba(126, 85, 221, 0.825) !important;
  --text-error: #e03035 !important;
  --text-faint: #aaaaaa !important;
  --text-highlight-bg: rgba(236, 235, 0, 0.4) !important;
  --text-highlight-bg-rgb: 236, 235, 0 !important;
  --text-muted: #4f4f4f !important;
  --text-success: #0fa50a !important;
  --text-warning: #d57929 !important;
  --textHighlight: rgba(236, 235, 0, 0.4) !important;
  --titlebar-background: #f0f0f0 !important;
  --titlebar-background-focused: #f0f0f0 !important;
  --titlebar-border-color: #dadada !important;
  --titlebar-text-color: #4f4f4f !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(218, 218, 218);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(240, 240, 240);
  border-left-color: rgb(218, 218, 218);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(24, 173, 168);
  outline: rgb(24, 173, 168) none 0px;
  text-decoration-color: rgb(24, 173, 168);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(15, 165, 10);
  outline: rgb(15, 165, 10) none 0px;
  text-decoration-color: rgb(15, 165, 10);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(15, 165, 10);
  outline: rgb(15, 165, 10) none 0px;
  text-decoration-color: rgb(15, 165, 10);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(24, 173, 168);
  outline: rgb(24, 173, 168) none 0px;
  text-decoration-color: rgb(24, 173, 168);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(236, 235, 0, 0.4);
}

html[saved-theme="light"] body h1.article-title {
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body p {
  color: rgb(79, 79, 79);
  outline: rgb(79, 79, 79) none 0px;
  text-decoration-color: rgb(79, 79, 79);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(0, 113, 227);
  outline: rgb(0, 113, 227) none 0px;
  text-decoration-color: rgb(0, 113, 227);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(126, 85, 221);
  outline: rgb(126, 85, 221) none 0px;
  text-decoration-color: rgb(126, 85, 221);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(126, 85, 221);
  filter: grayscale(0.25);
  outline: rgb(126, 85, 221) none 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(138, 92, 245, 0.05);
  padding-bottom: 20px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body td {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html[saved-theme="light"] body th {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html[saved-theme="light"] body tr {
  background-color: rgb(240, 240, 240);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body figure {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgba(138, 92, 245, 0.5);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 121, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 177, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(24, 173, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 113, 212);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 113, 212);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 177, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 177, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(131, 48, 224);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 48, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 165, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 165, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 165, 10);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 42, 206, 201;
  background: rgba(42, 206, 201, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 224, 48, 53;
  background: rgba(224, 48, 53, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 224, 48, 53;
  background: rgba(224, 48, 53, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 131, 48, 224;
  background: rgba(131, 48, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 224, 48, 53;
  background: rgba(224, 48, 53, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 36, 113, 212;
  background: rgba(36, 113, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 36, 113, 212;
  background: rgba(36, 113, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 224, 131, 48;
  background: rgba(224, 131, 48, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 8px;
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 47, 206, 42;
  background: rgba(47, 206, 42, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 42, 206, 201;
  background: rgba(42, 206, 201, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 36, 113, 212;
  background: rgba(36, 113, 212, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 224, 131, 48;
  background: rgba(224, 131, 48, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 36, 113, 212;
  border-bottom-color: rgb(36, 113, 212);
  border-left-color: rgb(36, 113, 212);
  border-right-color: rgb(36, 113, 212);
  border-top-color: rgb(36, 113, 212);
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(36, 113, 212);
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
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.08);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(138, 92, 245, 0.08);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.08);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.125);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgba(138, 92, 245, 0.925);
}

html[saved-theme="light"] body h1 {
  color: rgb(36, 113, 212);
}

html[saved-theme="light"] body h1.article-title {
  font-size: 30.72px;
}

html[saved-theme="light"] body h2 {
  color: rgb(131, 48, 224);
}

html[saved-theme="light"] body h3 {
  color: rgb(224, 48, 141);
}

html[saved-theme="light"] body h4 {
  color: rgb(224, 48, 53);
}

html[saved-theme="light"] body h5 {
  color: rgb(213, 121, 41);
}

html[saved-theme="light"] body h6 {
  color: rgb(182, 177, 28);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(79, 79, 79);
  font-weight: 500;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(79, 79, 79);
  font-weight: 500;
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(79, 79, 79);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(79, 79, 79);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(79, 79, 79);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(79, 79, 79);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(79, 79, 79);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(79, 79, 79);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(79, 79, 79);
  stroke: rgb(79, 79, 79);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(170, 170, 170);
}`,
    canvas: `html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(247, 247, 247);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(240, 240, 240);
  border-color: rgb(218, 218, 218);
}`,
    properties: `html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(231, 231, 231);
  border-color: rgb(218, 218, 218);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(79, 79, 79);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(79, 79, 79);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(138, 92, 245, 0.125);
  border-radius: 14px;
  color: rgba(138, 92, 245, 0.925);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(79, 79, 79);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(247, 247, 247);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(240, 240, 240);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(79, 79, 79);
  border-left-color: rgb(79, 79, 79);
  border-right-color: rgb(79, 79, 79);
  border-top-color: rgb(79, 79, 79);
  color: rgb(79, 79, 79);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(231, 231, 231);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.125);
  border-bottom-left-radius: 12.25px;
  border-bottom-right-radius: 12.25px;
  border-top-left-radius: 12.25px;
  border-top-right-radius: 12.25px;
  color: rgba(138, 92, 245, 0.925);
}`,
  },
};
