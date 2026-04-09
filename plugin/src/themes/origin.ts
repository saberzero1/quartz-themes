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

html[saved-theme="dark"] body .bases-table thead th {
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 22, 22);
  box-shadow: rgb(54, 54, 54) 0px 0px 0px 1px;
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(32, 32, 32);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(67, 42, 157);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
  text-decoration-color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(67, 42, 157);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(67, 42, 157) none 0px;
  text-decoration-color: rgb(67, 42, 157);
}

html[saved-theme="dark"] body a.internal.broken {
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
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(22, 22, 22);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
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
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
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
  background-color: rgb(22, 22, 22);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 176, 255;
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 245, 0, 87;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255, 23, 68;
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 124, 77, 255;
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 82, 82;
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 68, 138, 255;
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 100, 221, 23;
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 0, 191, 165;
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 165;
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 145, 0;
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

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
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
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-width: 0px;
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
    misc: `html[saved-theme="dark"] body .metadata {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
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

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
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
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(46, 51, 56);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(124, 97, 219);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
  text-decoration-color: rgb(124, 97, 219);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(124, 97, 219);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
  outline: rgb(124, 97, 219) none 0px;
  text-decoration-color: rgb(124, 97, 219);
}

html[saved-theme="light"] body a.internal.broken {
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

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
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
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
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
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
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
  background-color: rgb(242, 243, 245);
  padding-bottom: 4px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 176, 255;
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
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 245, 0, 87;
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
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 255, 23, 68;
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
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 124, 77, 255;
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
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 255, 82, 82;
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
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 184, 212;
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
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 68, 138, 255;
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
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 100, 221, 23;
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
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 0, 191, 165;
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
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 165;
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
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 184, 212;
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
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 145, 0;
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

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(124, 97, 219);
}

html[saved-theme="light"] body h1 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
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
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "??", Inter, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "Yu Gothic", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-width: 0px;
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
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .metadata {
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
