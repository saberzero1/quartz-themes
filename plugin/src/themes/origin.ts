import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "origin", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-cover: rgba(0, 0, 0, 0.78) !important;
  --background-modifier-error: rgb(255, 23, 68) !important;
  --background-modifier-error-hover: rgb(255, 23, 68) !important;
  --background-modifier-error-rgb: 255, 23, 68 !important;
  --background-modifier-hover: #161616 !important;
  --background-modifier-success: rgb(100, 221, 23) !important;
  --background-modifier-success-rgb: 100, 221, 23 !important;
  --background-primary: #202020 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #161616 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #202020 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-cards-radius: 5px !important;
  --bases-embed-border-radius: 3px !important;
  --bases-table-cell-background-active: #202020 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(250, 93%, 70%) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #202020 !important;
  --bases-table-header-background-hover: #161616 !important;
  --bases-table-summary-background: #202020 !important;
  --bases-table-summary-background-hover: #161616 !important;
  --blockquote-border-color: #363636 !important;
  --blockquote-border-thickness: 4px !important;
  --blur-background: color-mix(in srgb, #0c0c0c 65%, transparent) linear-gradient(#0c0c0c, color-mix(in srgb, #0c0c0c 65%, transparent)) !important;
  --bodyFont: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --button-radius: 3px !important;
  --callout-blend-mode: normal;
  --callout-bug: 245, 0, 87;
  --callout-content-background: #161616;
  --callout-content-padding: 0.25em 1.2em;
  --callout-default: 68, 138, 255;
  --callout-error: 255, 23, 68;
  --callout-example: 124, 77, 255;
  --callout-fail: 255, 82, 82;
  --callout-important: 0, 191, 165;
  --callout-info: 0, 184, 212;
  --callout-padding: 0;
  --callout-question: 100, 221, 23;
  --callout-radius: 3px;
  --callout-success: 0, 191, 165;
  --callout-summary: 0, 176, 255;
  --callout-tip: 0, 191, 165;
  --callout-title-color: #dadada;
  --callout-title-padding: 0.7em 0.5em 0.7em 0.7em;
  --callout-title-size: 1em;
  --callout-todo: 0, 184, 212;
  --callout-warning: 255, 145, 0;
  --canvas-background: #202020 !important;
  --canvas-color-1: 255, 23, 68 !important;
  --canvas-color-2: 255, 145, 0 !important;
  --canvas-color-4: 100, 221, 23 !important;
  --canvas-color-5: 0, 184, 212 !important;
  --canvas-color-6: 124, 77, 255 !important;
  --canvas-controls-radius: 3px !important;
  --checkbox-color: hsl(250, 93%, 70%) !important;
  --checkbox-color-hover: hsl(253, 58%, 39%) !important;
  --checkbox-marker-color: #202020 !important;
  --checkbox-radius: 3px !important;
  --clickable-icon-radius: 3px !important;
  --code-background: #161616 !important;
  --code-bracket-background: #161616 !important;
  --code-important: rgb(255, 145, 0) !important;
  --code-keyword: rgb(245, 0, 87) !important;
  --code-operator: rgb(255, 23, 68) !important;
  --code-property: rgb(0, 191, 165) !important;
  --code-radius: 3px !important;
  --code-string: rgb(0, 191, 165) !important;
  --code-tag: rgb(255, 82, 82) !important;
  --code-value: rgb(124, 77, 255) !important;
  --codeFont: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --collapse-icon-color-collapsed: #b3b3b3 !important;
  --color-accent: hsl(250, 93%, 70%) !important;
  --color-accent-1: hsl(253, 58%, 39%) !important;
  --color-accent-2: hsl(250, 95%, 74%) !important;
  --color-base-00: #202020 !important;
  --color-base-05: #1a1a1a !important;
  --color-base-10: #000000 !important;
  --color-base-20: #161616 !important;
  --color-blue: rgb(68, 138, 255) !important;
  --color-blue-rgb: 68, 138, 255 !important;
  --color-cyan: rgb(0, 184, 212) !important;
  --color-cyan-rgb: 0, 184, 212 !important;
  --color-dark-green: rgb(0, 191, 165) !important;
  --color-dark-green-rgb: 0, 191, 165 !important;
  --color-green: rgb(100, 221, 23) !important;
  --color-green-rgb: 100, 221, 23 !important;
  --color-light-blue: rgb(0, 176, 255) !important;
  --color-light-blue-rgb: 0, 176, 255 !important;
  --color-orange: rgb(255, 145, 0) !important;
  --color-orange-red: rgb(255, 82, 82) !important;
  --color-orange-red-rgb: 255, 82, 82 !important;
  --color-orange-rgb: 255, 145, 0 !important;
  --color-pink: rgb(245, 0, 87) !important;
  --color-pink-rgb: 245, 0, 87 !important;
  --color-purple: rgb(124, 77, 255) !important;
  --color-purple-rgb: 124, 77, 255 !important;
  --color-red: rgb(255, 23, 68) !important;
  --color-red-rgb: 255, 23, 68 !important;
  --color-teal: rgb(0, 191, 165) !important;
  --color-teal-rgb: 0, 191, 165 !important;
  --divider-color-hover: hsl(250, 93%, 70%) !important;
  --dropdown-background: #0c0c0c !important;
  --embed-border-start: 2px solid hsl(250, 93%, 70%) !important;
  --file-header-background: #202020 !important;
  --file-header-background-focused: #202020 !important;
  --file-header-font: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --file-header-justify: left !important;
  --flair-background: #0c0c0c !important;
  --font-default: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif !important;
  --font-interface: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --font-mermaid: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --font-text: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --footnote-input-background-active: #161616 !important;
  --footnote-padding-block: 10px !important;
  --footnote-padding-inline: 10px !important;
  --footnote-radius: 3px !important;
  --graph-node-focused: hsl(253, 58%, 39%) !important;
  --graph-node-tag: rgb(100, 221, 23) !important;
  --header-height: 30px !important;
  --headerFont: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --highlight: #161616 !important;
  --icon-color-active: hsl(253, 58%, 39%) !important;
  --input-shadow: #363636 0 0 0px 1px !important;
  --interactive-accent: hsl(250, 93%, 70%) !important;
  --interactive-accent-hover: hsl(253, 58%, 39%) !important;
  --interactive-normal: #0c0c0c !important;
  --light: #202020 !important;
  --lightgray: #161616 !important;
  --link-color: hsl(253, 58%, 39%) !important;
  --link-color-hover: hsl(250, 95%, 74%) !important;
  --link-external-color: hsl(253, 58%, 39%) !important;
  --link-external-color-hover: hsl(250, 95%, 74%) !important;
  --link-unresolved-color: hsl(253, 58%, 39%) !important;
  --list-marker-color-collapsed: hsl(253, 58%, 39%) !important;
  --menu-background: #161616 !important;
  --menu-padding: 10px !important;
  --menu-radius: 5px !important;
  --metadata-input-background-active: #161616 !important;
  --metadata-input-font: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-background-active: #161616 !important;
  --metadata-label-font: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --metadata-property-background-active: #161616 !important;
  --modal-background: #202020 !important;
  --modal-border-color: #363636 !important;
  --modal-border-width: 0px !important;
  --modal-height: 650px !important;
  --modal-max-width: 80vw !important;
  --modal-radius: 6px !important;
  --modal-width: 80vw !important;
  --nav-collapse-icon-color: #b3b3b3 !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-active: #000000 !important;
  --nav-item-background-hover: #000000 !important;
  --nav-item-background-selected: transparent !important;
  --nav-item-children-padding-start: 10px !important;
  --nav-item-color-highlighted: hsl(253, 58%, 39%) !important;
  --nav-item-margin-bottom: 6px !important;
  --nav-item-radius: 3px !important;
  --nav-tag-radius: 3px !important;
  --pdf-background: #202020 !important;
  --pdf-page-background: #202020 !important;
  --pdf-sidebar-background: #202020 !important;
  --pill-color-remove-hover: hsl(253, 58%, 39%) !important;
  --prompt-background: #202020 !important;
  --radius-l: 6px !important;
  --radius-m: 5px !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, #0c0c0c 65%, transparent) linear-gradient(#0c0c0c, color-mix(in srgb, #0c0c0c 65%, transparent)) !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --ribbon-padding: 0px !important;
  --ribbon-width: 30px !important;
  --scrollbar-radius: 6px !important;
  --search-result-background: #202020 !important;
  --secondary: hsl(253, 58%, 39%) !important;
  --setting-items-background: #000000 !important;
  --setting-items-radius: 6px !important;
  --shiki-code-background: #161616 !important;
  --shiki-code-block-border-radius: 3px !important;
  --shiki-code-function: rgb(100, 221, 23) !important;
  --shiki-code-important: rgb(255, 145, 0) !important;
  --shiki-code-keyword: rgb(245, 0, 87) !important;
  --shiki-code-property: rgb(0, 184, 212) !important;
  --shiki-code-value: rgb(124, 77, 255) !important;
  --shiki-highlight-green: rgba(100, 221, 23, 0.5) !important;
  --shiki-highlight-green-background: rgba(100, 221, 23, 0.1) !important;
  --shiki-highlight-red: rgba(255, 23, 68, 0.5) !important;
  --shiki-highlight-red-background: rgba(255, 23, 68, 0.1) !important;
  --size-2-1: 6px !important;
  --size-2-2: 10px !important;
  --size-2-3: 10px !important;
  --status-bar-background: #161616 !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --suggestion-background: #202020 !important;
  --sync-avatar-color-1: rgb(255, 23, 68) !important;
  --sync-avatar-color-2: rgb(255, 145, 0) !important;
  --sync-avatar-color-4: rgb(100, 221, 23) !important;
  --sync-avatar-color-5: rgb(0, 184, 212) !important;
  --sync-avatar-color-6: rgb(68, 138, 255) !important;
  --sync-avatar-color-7: rgb(124, 77, 255) !important;
  --sync-avatar-color-8: rgb(245, 0, 87) !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #161616 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 3px !important;
  --tab-radius-active: 3px !important;
  --tab-stacked-header-width: 30px !important;
  --tab-switcher-background: #161616 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #161616, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(250, 93%, 70%) !important;
  --tab-text-color-focused-highlighted: hsl(253, 58%, 39%) !important;
  --table-drag-handle-background-active: hsl(250, 93%, 70%) !important;
  --table-header-weight: bold !important;
  --table-selection-border-color: hsl(250, 93%, 70%) !important;
  --tag-color: hsl(253, 58%, 39%) !important;
  --tag-color-hover: hsl(253, 58%, 39%) !important;
  --tertiary: hsl(250, 95%, 74%) !important;
  --text-accent: hsl(253, 58%, 39%) !important;
  --text-accent-hover: hsl(250, 95%, 74%) !important;
  --text-error: rgb(255, 23, 68) !important;
  --text-success: rgb(100, 221, 23) !important;
  --text-warning: rgb(255, 145, 0) !important;
  --textHighlight: #161616 !important;
  --titleFont: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-height: 25px !important;
  --traffic-lights-offset-x: 30px !important;
  --traffic-lights-offset-y: 30px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 22);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .text-highlight {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body del {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(131, 107, 250);
  border-color: rgb(131, 107, 250);
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(67, 42, 157);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
  text-decoration-color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(67, 42, 157);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
  text-decoration-color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(67, 42, 157);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `html[saved-theme="dark"] body table {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="dark"] body td {
  padding-bottom: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body th {
  font-weight: 700;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(202, 57, 86);
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(131, 107, 250);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 145, 0);
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
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 184, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 138, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 138, 255);
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
  background-color: rgb(124, 77, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 176, 255;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 176, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 245, 0, 87;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(245, 0, 87);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255, 23, 68;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 23, 68);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 124, 77, 255;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(124, 77, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 82, 82;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 82, 82);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 68, 138, 255;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 100, 221, 23;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(100, 221, 23);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 0, 191, 165;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 165;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 145, 0;
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 145, 0);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(218, 218, 218);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
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
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(32, 32, 32);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body h1 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h3 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h4 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h5 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h6 {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(22, 22, 22);
  border-top-left-radius: 5px;
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 22, 22);
  box-shadow: rgb(54, 54, 54) 0px 0px 0px 1px;
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  font-weight: 700;
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(32, 32, 32);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(22, 22, 22);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgba(138, 92, 245, 0.45);
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(67, 42, 157);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #ddd !important;
  --background-modifier-border-hover: rgb(250, 250, 250) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.78) !important;
  --background-modifier-error: rgb(255, 23, 68) !important;
  --background-modifier-error-hover: rgb(255, 23, 68) !important;
  --background-modifier-error-rgb: 255, 23, 68 !important;
  --background-modifier-hover: #f2f3f5 !important;
  --background-modifier-success: rgb(100, 221, 23) !important;
  --background-modifier-success-rgb: 100, 221, 23 !important;
  --background-primary-alt: #f5f6f8 !important;
  --background-secondary: #f2f3f5 !important;
  --background-secondary-alt: #e3e5e8 !important;
  --bases-cards-cover-background: #f5f6f8 !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #ddd !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(250, 250, 250) !important;
  --bases-embed-border-color: #ddd !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: #888888 !important;
  --bases-table-border-color: #ddd !important;
  --bases-table-cell-background-disabled: #f5f6f8 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(253, 61%, 60%) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: #f5f6f8 !important;
  --bases-table-header-background-hover: #f2f3f5 !important;
  --bases-table-header-color: #888888 !important;
  --bases-table-summary-background-hover: #f2f3f5 !important;
  --blockquote-border-color: #ddd !important;
  --blockquote-border-thickness: 4px !important;
  --bodyFont: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --button-radius: 3px !important;
  --callout-blend-mode: normal;
  --callout-bug: 245, 0, 87;
  --callout-content-background: #f2f3f5;
  --callout-content-padding: 0.25em 1.2em;
  --callout-default: 68, 138, 255;
  --callout-error: 255, 23, 68;
  --callout-example: 124, 77, 255;
  --callout-fail: 255, 82, 82;
  --callout-important: 0, 191, 165;
  --callout-info: 0, 184, 212;
  --callout-padding: 0;
  --callout-question: 100, 221, 23;
  --callout-radius: 3px;
  --callout-success: 0, 191, 165;
  --callout-summary: 0, 176, 255;
  --callout-tip: 0, 191, 165;
  --callout-title-color: #2e3338;
  --callout-title-padding: 0.7em 0.5em 0.7em 0.7em;
  --callout-title-size: 1em;
  --callout-todo: 0, 184, 212;
  --callout-warning: 255, 145, 0;
  --canvas-card-label-color: #999999 !important;
  --canvas-color-1: 255, 23, 68 !important;
  --canvas-color-2: 255, 145, 0 !important;
  --canvas-color-4: 100, 221, 23 !important;
  --canvas-color-5: 0, 184, 212 !important;
  --canvas-color-6: 124, 77, 255 !important;
  --canvas-controls-radius: 3px !important;
  --canvas-dot-pattern: #ddd !important;
  --caret-color: #2e3338 !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #888888 !important;
  --checkbox-color: hsl(253, 61%, 60%) !important;
  --checkbox-color-hover: hsl(258, 58%, 58%) !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #888888 !important;
  --clickable-icon-radius: 3px !important;
  --code-background: #f2f3f5 !important;
  --code-border-color: #ddd !important;
  --code-bracket-background: #f2f3f5 !important;
  --code-comment: #999999 !important;
  --code-important: rgb(255, 145, 0) !important;
  --code-keyword: rgb(245, 0, 87) !important;
  --code-normal: #2e3338 !important;
  --code-operator: rgb(255, 23, 68) !important;
  --code-property: rgb(0, 191, 165) !important;
  --code-punctuation: #888888 !important;
  --code-radius: 3px !important;
  --code-string: rgb(0, 191, 165) !important;
  --code-tag: rgb(255, 82, 82) !important;
  --code-value: rgb(124, 77, 255) !important;
  --codeFont: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #888888 !important;
  --color-accent: hsl(253, 63%, 62%) !important;
  --color-accent-1: hsl(253, 61%, 60%) !important;
  --color-accent-2: hsl(258, 58%, 58%) !important;
  --color-base-05: #e3e5e8 !important;
  --color-base-10: #f5f6f8 !important;
  --color-base-100: #2e3338 !important;
  --color-base-20: #f2f3f5 !important;
  --color-base-25: rgb(242, 242, 242) !important;
  --color-base-30: #ddd !important;
  --color-base-35: rgb(250, 250, 250) !important;
  --color-base-50: #999999 !important;
  --color-base-60: #919191 !important;
  --color-base-70: #888888 !important;
  --color-blue: rgb(68, 138, 255) !important;
  --color-blue-rgb: 68, 138, 255 !important;
  --color-cyan: rgb(0, 184, 212) !important;
  --color-cyan-rgb: 0, 184, 212 !important;
  --color-dark-green: rgb(0, 191, 165) !important;
  --color-dark-green-rgb: 0, 191, 165 !important;
  --color-green: rgb(100, 221, 23) !important;
  --color-green-rgb: 100, 221, 23 !important;
  --color-light-blue: rgb(0, 176, 255) !important;
  --color-light-blue-rgb: 0, 176, 255 !important;
  --color-orange: rgb(255, 145, 0) !important;
  --color-orange-red: rgb(255, 82, 82) !important;
  --color-orange-red-rgb: 255, 82, 82 !important;
  --color-orange-rgb: 255, 145, 0 !important;
  --color-pink: rgb(245, 0, 87) !important;
  --color-pink-rgb: 245, 0, 87 !important;
  --color-purple: rgb(124, 77, 255) !important;
  --color-purple-rgb: 124, 77, 255 !important;
  --color-red: rgb(255, 23, 68) !important;
  --color-red-rgb: 255, 23, 68 !important;
  --color-teal: rgb(0, 191, 165) !important;
  --color-teal-rgb: 0, 191, 165 !important;
  --dark: #2e3338 !important;
  --darkgray: #2e3338 !important;
  --divider-color: #ddd !important;
  --divider-color-hover: hsl(253, 61%, 60%) !important;
  --dropdown-background-hover: #f5f6f8 !important;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd !important;
  --embed-border-start: 2px solid hsl(253, 61%, 60%) !important;
  --file-header-font: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --file-header-justify: left !important;
  --flair-color: #2e3338 !important;
  --font-default: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", 'Yu Gothic', "Microsoft YaHei Light", sans-serif !important;
  --font-interface: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --font-mermaid: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --font-text: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --footnote-divider-color: #ddd !important;
  --footnote-id-color: #888888 !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --footnote-input-background-active: #f2f3f5 !important;
  --footnote-padding-block: 10px !important;
  --footnote-padding-inline: 10px !important;
  --footnote-radius: 3px !important;
  --graph-line: rgb(250, 250, 250) !important;
  --graph-node: #888888 !important;
  --graph-node-focused: hsl(253, 63%, 62%) !important;
  --graph-node-tag: rgb(100, 221, 23) !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #2e3338 !important;
  --gray: #888888 !important;
  --header-height: 30px !important;
  --headerFont: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --heading-formatting: #999999 !important;
  --highlight: #f2f3f5 !important;
  --hr-color: #ddd !important;
  --icon-color: #888888 !important;
  --icon-color-active: hsl(253, 63%, 62%) !important;
  --icon-color-focused: #2e3338 !important;
  --icon-color-hover: #888888 !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: hsl(253, 61%, 60%) !important;
  --interactive-accent-hover: hsl(258, 58%, 58%) !important;
  --interactive-hover: #f5f6f8 !important;
  --light: #f5f6f8 !important;
  --lightgray: #f2f3f5 !important;
  --link-color: hsl(253, 63%, 62%) !important;
  --link-color-hover: hsl(258, 58%, 58%) !important;
  --link-external-color: hsl(253, 63%, 62%) !important;
  --link-external-color-hover: hsl(258, 58%, 58%) !important;
  --link-unresolved-color: hsl(253, 63%, 62%) !important;
  --list-marker-color: #999999 !important;
  --list-marker-color-collapsed: hsl(253, 63%, 62%) !important;
  --list-marker-color-hover: #888888 !important;
  --menu-background: #f2f3f5 !important;
  --menu-border-color: rgb(250, 250, 250) !important;
  --menu-padding: 10px !important;
  --menu-radius: 5px !important;
  --metadata-border-color: #ddd !important;
  --metadata-divider-color: #ddd !important;
  --metadata-input-background-active: #f2f3f5 !important;
  --metadata-input-font: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-text-color: #2e3338 !important;
  --metadata-label-background-active: #f2f3f5 !important;
  --metadata-label-font: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-text-color: #888888 !important;
  --metadata-label-text-color-hover: #888888 !important;
  --metadata-property-background-active: #f2f3f5 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(250, 250, 250) !important;
  --modal-border-color: #ddd !important;
  --modal-border-width: 0px !important;
  --modal-height: 650px !important;
  --modal-max-width: 80vw !important;
  --modal-radius: 6px !important;
  --modal-width: 80vw !important;
  --nav-collapse-icon-color: #888888 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #2e3338 !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: #888888 !important;
  --nav-heading-color-hover: #2e3338 !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-active: #e3e5e8 !important;
  --nav-item-background-hover: #e3e5e8 !important;
  --nav-item-background-selected: transparent !important;
  --nav-item-children-padding-start: 10px !important;
  --nav-item-color: #888888 !important;
  --nav-item-color-active: #2e3338 !important;
  --nav-item-color-highlighted: hsl(253, 63%, 62%) !important;
  --nav-item-color-hover: #2e3338 !important;
  --nav-item-color-selected: #2e3338 !important;
  --nav-item-margin-bottom: 6px !important;
  --nav-item-radius: 3px !important;
  --nav-tag-color: #999999 !important;
  --nav-tag-color-active: #888888 !important;
  --nav-tag-color-hover: #888888 !important;
  --nav-tag-radius: 3px !important;
  --pill-border-color: #ddd !important;
  --pill-border-color-hover: rgb(250, 250, 250) !important;
  --pill-color: #888888 !important;
  --pill-color-hover: #2e3338 !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: hsl(253, 63%, 62%) !important;
  --radius-l: 6px !important;
  --radius-m: 5px !important;
  --radius-s: 3px !important;
  --ribbon-background: #e3e5e8 !important;
  --ribbon-background-collapsed: #e3e5e8 !important;
  --ribbon-padding: 0px !important;
  --ribbon-width: 30px !important;
  --scrollbar-radius: 6px !important;
  --search-clear-button-color: #888888 !important;
  --search-icon-color: #888888 !important;
  --secondary: hsl(253, 63%, 62%) !important;
  --setting-group-heading-color: #2e3338 !important;
  --setting-items-background: #f5f6f8 !important;
  --setting-items-border-color: #ddd !important;
  --setting-items-radius: 6px !important;
  --shiki-active-tab-border-color: #888888 !important;
  --shiki-code-background: #f2f3f5 !important;
  --shiki-code-block-border-radius: 3px !important;
  --shiki-code-comment: #999999 !important;
  --shiki-code-function: rgb(100, 221, 23) !important;
  --shiki-code-important: rgb(255, 145, 0) !important;
  --shiki-code-keyword: rgb(245, 0, 87) !important;
  --shiki-code-normal: #888888 !important;
  --shiki-code-property: rgb(0, 184, 212) !important;
  --shiki-code-punctuation: #888888 !important;
  --shiki-code-value: rgb(124, 77, 255) !important;
  --shiki-gutter-border-color: #ddd !important;
  --shiki-gutter-text-color: #999999 !important;
  --shiki-gutter-text-color-highlight: #888888 !important;
  --shiki-highlight-green: rgba(100, 221, 23, 0.5) !important;
  --shiki-highlight-green-background: rgba(100, 221, 23, 0.1) !important;
  --shiki-highlight-neutral: #888888 !important;
  --shiki-highlight-red: rgba(255, 23, 68, 0.5) !important;
  --shiki-highlight-red-background: rgba(255, 23, 68, 0.1) !important;
  --shiki-terminal-dots-color: #999999 !important;
  --size-2-1: 6px !important;
  --size-2-2: 10px !important;
  --size-2-3: 10px !important;
  --slider-thumb-border-color: rgb(250, 250, 250) !important;
  --slider-track-background: #ddd !important;
  --status-bar-background: #f2f3f5 !important;
  --status-bar-border-color: #ddd !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: #888888 !important;
  --sync-avatar-color-1: rgb(255, 23, 68) !important;
  --sync-avatar-color-2: rgb(255, 145, 0) !important;
  --sync-avatar-color-4: rgb(100, 221, 23) !important;
  --sync-avatar-color-5: rgb(0, 184, 212) !important;
  --sync-avatar-color-6: rgb(68, 138, 255) !important;
  --sync-avatar-color-7: rgb(124, 77, 255) !important;
  --sync-avatar-color-8: rgb(245, 0, 87) !important;
  --tab-background-active: #f5f6f8 !important;
  --tab-container-background: #f2f3f5 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 3px !important;
  --tab-radius-active: 3px !important;
  --tab-stacked-header-width: 30px !important;
  --tab-switcher-background: #f2f3f5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f3f5, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(253, 63%, 62%) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-active: #888888 !important;
  --tab-text-color-focused: #888888 !important;
  --tab-text-color-focused-active: #888888 !important;
  --tab-text-color-focused-active-current: #2e3338 !important;
  --tab-text-color-focused-highlighted: hsl(253, 63%, 62%) !important;
  --table-add-button-border-color: #ddd !important;
  --table-border-color: #ddd !important;
  --table-drag-handle-background-active: hsl(253, 61%, 60%) !important;
  --table-drag-handle-color: #999999 !important;
  --table-header-border-color: #ddd !important;
  --table-header-color: #2e3338 !important;
  --table-header-weight: bold !important;
  --table-selection-border-color: hsl(253, 61%, 60%) !important;
  --tag-color: hsl(253, 63%, 62%) !important;
  --tag-color-hover: hsl(253, 63%, 62%) !important;
  --tertiary: hsl(258, 58%, 58%) !important;
  --text-accent: hsl(253, 63%, 62%) !important;
  --text-accent-hover: hsl(258, 58%, 58%) !important;
  --text-error: rgb(255, 23, 68) !important;
  --text-faint: #999999 !important;
  --text-muted: #888888 !important;
  --text-normal: #2e3338 !important;
  --text-success: rgb(100, 221, 23) !important;
  --text-warning: rgb(255, 145, 0) !important;
  --textHighlight: #f2f3f5 !important;
  --titleFont: Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", Yu Gothic, "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #e3e5e8 !important;
  --titlebar-background-focused: #e3e5e8 !important;
  --titlebar-border-color: #ddd !important;
  --titlebar-height: 25px !important;
  --titlebar-text-color: #888888 !important;
  --titlebar-text-color-focused: #2e3338 !important;
  --traffic-lights-offset-x: 30px !important;
  --traffic-lights-offset-y: 30px !important;
  --vault-profile-color: #2e3338 !important;
  --vault-profile-color-hover: #2e3338 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 245);
  border-left-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body del {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(46, 51, 56);
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(118, 91, 215);
  border-color: rgb(118, 91, 215);
}

html[saved-theme="light"] body p {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(124, 97, 219);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
  text-decoration-color: rgb(124, 97, 219);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(124, 97, 219);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
  text-decoration-color: rgb(124, 97, 219);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(124, 97, 219);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body dt {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ol > li {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul > li {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(153, 153, 153);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body table {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  padding-bottom: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-weight: 700;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(202, 57, 86);
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body figcaption {
  color: rgb(46, 51, 56);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(118, 91, 215);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
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
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 145, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 153, 153);
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
  background-color: rgb(0, 184, 212);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 138, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 138, 255);
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
  background-color: rgb(124, 77, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(100, 221, 23);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 176, 255;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 176, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 245, 0, 87;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(245, 0, 87);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 255, 23, 68;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 23, 68);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 124, 77, 255;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(124, 77, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 255, 82, 82;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 82, 82);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 68, 138, 255;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 100, 221, 23;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(100, 221, 23);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 0, 191, 165;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 165;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 145, 0;
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 145, 0);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 68, 138, 255;
  background: rgba(68, 138, 255, 0.14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(68, 138, 255, 0.14);
  border-bottom-color: rgb(68, 138, 255);
  border-left-color: rgb(68, 138, 255);
  border-right-color: rgb(68, 138, 255);
  border-top-color: rgb(68, 138, 255);
  color: rgb(68, 138, 255);
  padding-bottom: 11.2px;
  padding-left: 11.2px;
  padding-right: 8px;
  padding-top: 11.2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(242, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
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
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 245);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(242, 243, 245);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(124, 97, 219);
}

html[saved-theme="light"] body h1 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h2 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 68, 138, 255;
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 138, 255);
  border-left-width: 4px;
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(46, 51, 56);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(136, 136, 136);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 5px;
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(136, 136, 136);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(46, 51, 56);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-weight: 700;
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(124, 97, 219);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(242, 243, 245);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(227, 229, 232);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgba(138, 92, 245, 0.45);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 243, 245);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(46, 51, 56);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sub {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body summary {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sup {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(124, 97, 219);
}`,
  },
};
