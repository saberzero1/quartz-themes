import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "cobalt-peacock", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 208 !important;
  --accent-l: 50% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: #011627 !important;
  --background-modifier-border-focus: #ffee80 !important;
  --background-modifier-border-hover: #ffee80 !important;
  --background-modifier-error: #ed9299 !important;
  --background-modifier-error-hover: #ed9299 !important;
  --background-modifier-error-rgb: 255, 98, 140 !important;
  --background-modifier-hover: #010e1a !important;
  --background-modifier-success: #3ad900 !important;
  --background-modifier-success-rgb: 158, 255, 128 !important;
  --background-primary: #002240 !important;
  --background-primary-alt: #011627 !important;
  --background-secondary: #011627 !important;
  --background-secondary-alt: #010e1a !important;
  --bases-cards-background: #002240 !important;
  --bases-cards-cover-background: #011627 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow-hover: 0 0 0 1px #ffee80 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #EEEEEE !important;
  --bases-table-border-color: #FFFFFF !important;
  --bases-table-cell-background-active: #002240 !important;
  --bases-table-cell-background-disabled: #011627 !important;
  --bases-table-cell-background-selected: rgba(0, 136, 255, 0.25) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #ffee80 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0088ff !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #011627 !important;
  --bases-table-header-background: #002240 !important;
  --bases-table-header-background-hover: #010e1a !important;
  --bases-table-header-color: #EEEEEE !important;
  --bases-table-row-background-hover: #1F4662 !important;
  --bases-table-summary-background: #002240 !important;
  --bases-table-summary-background-hover: #010e1a !important;
  --blockquote-border-color: #0088ff !important;
  --blockquote-color: #0088ff !important;
  --blur-background: color-mix(in srgb, #010e1a 65%, transparent) linear-gradient(#010e1a, color-mix(in srgb, #010e1a 65%, transparent)) !important;
  --button-radius: 0px !important;
  --callout-bug: 255, 98, 140;
  --callout-default: 0, 136, 255;
  --callout-error: 255, 98, 140;
  --callout-example: 209, 151, 217;
  --callout-fail: 255, 98, 140;
  --callout-important: 158, 255, 255;
  --callout-info: 0, 136, 255;
  --callout-question: 255, 157, 0;
  --callout-radius: 0px;
  --callout-success: 158, 255, 128;
  --callout-summary: 158, 255, 255;
  --callout-tip: 158, 255, 255;
  --callout-todo: 0, 136, 255;
  --callout-warning: 255, 157, 0;
  --canvas-background: #002240 !important;
  --canvas-color-1: 255, 98, 140 !important;
  --canvas-color-2: 255, 157, 0 !important;
  --canvas-color-3: 255, 238, 128 !important;
  --canvas-color-4: 158, 255, 128 !important;
  --canvas-color-5: 158, 255, 255 !important;
  --canvas-color-6: 209, 151, 217 !important;
  --canvas-controls-radius: 0px !important;
  --checkbox-border-color: #FFFFFF !important;
  --checkbox-border-color-hover: #1F4662 !important;
  --checkbox-color: #ffee80 !important;
  --checkbox-color-hover: #1F4662 !important;
  --checkbox-marker-color: #002240 !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: #0088ff !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #011627 !important;
  --code-bracket-background: #010e1a !important;
  --code-comment: #0088ff !important;
  --code-function: #bed6ff !important;
  --code-keyword: #ff9d00 !important;
  --code-normal: #FFFFFF !important;
  --code-operator: #FFFFFF !important;
  --code-property: #D197D9 !important;
  --code-punctuation: #FFFFFF !important;
  --code-radius: 0px !important;
  --code-string: #3ad900 !important;
  --code-tag: #9effff !important;
  --code-value: #ed9299 !important;
  --collapse-icon-color-collapsed: hsl(205, 102%, 57.5%) !important;
  --color-accent: hsl(208, 100%, 50%) !important;
  --color-accent-1: hsl(205, 102%, 57.5%) !important;
  --color-accent-2: hsl(203, 105%, 64.5%) !important;
  --color-accent-hsl: 208, 100%, 50% !important;
  --color-blue: #0088ff !important;
  --color-blue-rgb: 0, 136, 255 !important;
  --color-comment-blue: #0088ff !important;
  --color-comment-blue-rgb: 0, 136, 255 !important;
  --color-cyan: #9effff !important;
  --color-cyan-rgb: 158, 255, 255 !important;
  --color-dark-blue: #011627 !important;
  --color-deep-blue: #010e1a !important;
  --color-green: #3ad900 !important;
  --color-green-rgb: 158, 255, 128 !important;
  --color-light-blue: #bed6ff !important;
  --color-light-blue-rgb: 190, 214, 255 !important;
  --color-light-green: #9eff80 !important;
  --color-medium-blue: #79abff !important;
  --color-mint: #2affdf !important;
  --color-orange: #ff9d00 !important;
  --color-orange-rgb: 255, 157, 0 !important;
  --color-pink: #ed9299 !important;
  --color-pink-rgb: 237, 146, 153 !important;
  --color-purple: #D197D9 !important;
  --color-purple-rgb: 209, 151, 217 !important;
  --color-red: #ed9299 !important;
  --color-red-rgb: 255, 98, 140 !important;
  --color-salmon: #ed9299 !important;
  --color-selected-blue: #1F4662 !important;
  --color-yellow: #ffee80 !important;
  --color-yellow-rgb: 255, 238, 128 !important;
  --dark: #EEEEEE !important;
  --darkgray: #EEEEEE !important;
  --divider-color: #010e1a !important;
  --divider-color-hover: #0088ff !important;
  --drag-ghost-background: #1F4662 !important;
  --dropdown-background: #010e1a !important;
  --dropdown-background-hover: #1F4662 !important;
  --embed-border-start: 2px solid #0088ff !important;
  --file-header-background: #002240 !important;
  --file-header-background-focused: #002240 !important;
  --flair-background: #010e1a !important;
  --footnote-id-color: #EEEEEE !important;
  --footnote-input-background-active: #010e1a !important;
  --footnote-radius: 0px !important;
  --graph-node: #EEEEEE !important;
  --graph-node-attachment: #ffee80 !important;
  --graph-node-focused: hsl(205, 102%, 57.5%) !important;
  --graph-node-tag: #3ad900 !important;
  --gray: #EEEEEE !important;
  --h1-color: #ff9d00 !important;
  --h2-color: #ffee80 !important;
  --h3-color: #0088ff !important;
  --h4-color: #ed9299 !important;
  --h5-color: #9eff80 !important;
  --h6-color: #bed6ff !important;
  --heading-formatting: #ed9299 !important;
  --highlight: #1F4662 !important;
  --hr-color: #0088ff !important;
  --icon-color: #ffffff !important;
  --icon-color-active: #ffee80 !important;
  --icon-color-focused: #ff9d00 !important;
  --icon-color-hover: #ffee80 !important;
  --indentation-guide-color: #ed9299 !important;
  --inline-title-color: #ff9d00 !important;
  --input-radius: 0px !important;
  --interactive-accent: #0088ff !important;
  --interactive-accent-hover: #bed6ff !important;
  --interactive-accent-hsl: 208, 100%, 50% !important;
  --interactive-hover: #1F4662 !important;
  --interactive-normal: #010e1a !important;
  --light: #002240 !important;
  --lightgray: #011627 !important;
  --link-color: #3ad900 !important;
  --link-color-hover: #9eff80 !important;
  --link-external-color: hsl(205, 102%, 57.5%) !important;
  --link-external-color-hover: hsl(203, 105%, 64.5%) !important;
  --link-unresolved-color: #ed9299 !important;
  --link-unresolved-decoration-color: hsla(208, 100%, 50%, 0.3) !important;
  --link-unresolved-filter: blur(0.75px) !important;
  --link-unresolved-opacity: 1 !important;
  --list-marker-color: #ed9299 !important;
  --list-marker-color-collapsed: hsl(205, 102%, 57.5%) !important;
  --list-marker-color-hover: #EEEEEE !important;
  --menu-background: #011627 !important;
  --menu-border-color: #ffee80 !important;
  --menu-radius: 0px !important;
  --metadata-input-background-active: #010e1a !important;
  --metadata-label-background-active: #010e1a !important;
  --metadata-label-text-color: #EEEEEE !important;
  --metadata-label-text-color-hover: #EEEEEE !important;
  --metadata-property-background-active: #010e1a !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #ffee80 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #ffee80 !important;
  --modal-background: #002240 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #ed9299 !important;
  --nav-collapse-icon-color-collapsed: #ed9299 !important;
  --nav-heading-color-collapsed-hover: #EEEEEE !important;
  --nav-indentation-guide-color: #ed9299 !important;
  --nav-indetation-guide-color: #ed9299 !important;
  --nav-item-background-active: #010e1a !important;
  --nav-item-background-hover: #1F4662 !important;
  --nav-item-background-selected: #9eff80 !important;
  --nav-item-color: #EEEEEE !important;
  --nav-item-color-active: #ff9d00 !important;
  --nav-item-color-highlighted: #1F4662 !important;
  --nav-item-color-hover: #ffee80 !important;
  --nav-item-color-selected: #010e1a !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color-active: #EEEEEE !important;
  --nav-tag-color-hover: #EEEEEE !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #002240 !important;
  --pdf-page-background: #002240 !important;
  --pdf-sidebar-background: #002240 !important;
  --pill-border-color-hover: #ffee80 !important;
  --pill-color: #EEEEEE !important;
  --pill-color-remove-hover: hsl(205, 102%, 57.5%) !important;
  --prompt-background: #002240 !important;
  --prompt-border-color: #ffee80 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #010e1a 65%, transparent) linear-gradient(#010e1a, color-mix(in srgb, #010e1a 65%, transparent)) !important;
  --ribbon-background: #010e1a !important;
  --ribbon-background-collapsed: #010e1a !important;
  --scrollbar-active-thumb-bg: #ffee80 !important;
  --scrollbar-bg: #ffee80 !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: rgba(255, 238, 128, 0.5) !important;
  --search-clear-button-color: #EEEEEE !important;
  --search-icon-color: #EEEEEE !important;
  --search-result-background: #002240 !important;
  --secondary: hsl(205, 102%, 57.5%) !important;
  --setting-items-background: #011627 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-border-color: #ffee80 !important;
  --slider-thumb-radius: 0px !important;
  --status-bar-background: #011627 !important;
  --status-bar-border-color: #011627 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #FFFFFF !important;
  --suggestion-background: #002240 !important;
  --sync-avatar-color-1: #ed9299 !important;
  --sync-avatar-color-2: #ff9d00 !important;
  --sync-avatar-color-3: #ffee80 !important;
  --sync-avatar-color-4: #3ad900 !important;
  --sync-avatar-color-5: #9effff !important;
  --sync-avatar-color-6: #0088ff !important;
  --sync-avatar-color-7: #D197D9 !important;
  --sync-avatar-color-8: #ed9299 !important;
  --tab-background-active: #002240 !important;
  --tab-container-background: #ed9299 !important;
  --tab-divider-color: #ffee80 !important;
  --tab-outline-color: #010e1a !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #011627 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #011627, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(208, 100%, 50%) !important;
  --tab-text-color: #FFFFFF !important;
  --tab-text-color-active: #ff9d00 !important;
  --tab-text-color-focused: #ff9d00 !important;
  --tab-text-color-focused-active: #ff9d00 !important;
  --tab-text-color-focused-active-current: #ff9d00 !important;
  --tab-text-color-focused-highlighted: #ff9d00 !important;
  --table-border-color: #FFFFFF !important;
  --table-column-alt-background: rgba(0, 136, 255, 0.05) !important;
  --table-drag-handle-background: #002240 !important;
  --table-drag-handle-background-active: #002240 !important;
  --table-drag-handle-color: #ff9d00 !important;
  --table-drag-handle-color-active: #FFFFFF !important;
  --table-header-background: #011627 !important;
  --table-header-background-hover: #1F4662 !important;
  --table-header-border-color: #FFFFFF !important;
  --table-header-color: #ff9d00 !important;
  --table-header-weight: bold !important;
  --table-row-alt-background: rgba(0, 136, 255, 0.05) !important;
  --table-row-background-hover: #1F4662 !important;
  --table-selection: rgba(0, 136, 255, 0.25) !important;
  --table-selection-blend-mode: soft-light !important;
  --table-selection-border-color: #ffee80 !important;
  --table-text-color: #FFFFFF !important;
  --tag-background: #011627 !important;
  --tag-background-hover: #ed9299 !important;
  --tag-border-color: #011627 !important;
  --tag-border-color-hover: #011627 !important;
  --tag-color: #9effff !important;
  --tag-color-hover: #1F4662 !important;
  --tertiary: hsl(203, 105%, 64.5%) !important;
  --text-accent: hsl(205, 102%, 57.5%) !important;
  --text-accent-hover: hsl(203, 105%, 64.5%) !important;
  --text-error: #ed9299 !important;
  --text-highlight-bg: #1F4662 !important;
  --text-muted: #EEEEEE !important;
  --text-on-accent: #FFFFFF !important;
  --text-selection: #0088ff !important;
  --text-success: #3ad900 !important;
  --text-warning: #ff9d00 !important;
  --textHighlight: #1F4662 !important;
  --titlebar-background: #010e1a !important;
  --titlebar-background-focused: #010e1a !important;
  --titlebar-text-color: #EEEEEE !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 146, 153);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 34, 64);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 136, 255, 0.05);
}

html body .bases-table thead th {
  border-color: rgb(255, 255, 255);
  color: rgb(255, 157, 0);
  font-weight: 700;
}

html body .canvas-sidebar {
  background-color: rgb(1, 22, 39);
}

html body .note-properties-key {
  color: rgb(238, 238, 238);
}

html body .note-properties-row {
  border-color: rgb(238, 238, 238);
}

html body .note-properties-tags {
  background-color: rgb(1, 22, 39);
  color: rgb(158, 255, 255);
}

html body .note-properties-value {
  color: rgb(238, 238, 238);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(1, 22, 39);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(1, 14, 26);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 146, 153);
  border-left-color: rgb(1, 14, 26);
}

html body div#quartz-root {
  background-color: rgb(0, 34, 64);
}`,
    typography: `html body .text-highlight {
  background-color: rgb(31, 70, 98);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-radius: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 238, 128);
  border-color: rgb(255, 238, 128);
}

html body p {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}`,
    links: `html body a.external, html footer a {
  color: rgb(38, 165, 255);
  outline: rgb(38, 165, 255) none 0px;
  text-decoration-color: rgb(38, 165, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(58, 217, 0);
  outline: rgb(58, 217, 0) none 0px;
  text-decoration-color: rgb(58, 217, 0);
}

html body a.internal.broken {
  color: rgb(237, 146, 153);
  filter: blur(0.75px);
  outline: rgb(237, 146, 153) none 0px;
  text-decoration: underline rgba(0, 136, 255, 0.3);
  text-decoration-color: rgba(0, 136, 255, 0.3);
}`,
    tables: `html body tbody tr:nth-child(odd) {
  background-color: rgba(0, 136, 255, 0.05);
}

html body td {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body th {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 157, 0);
  font-weight: 700;
}

html body tr {
  background-color: rgb(1, 22, 39);
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(1, 22, 39);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(1, 22, 39);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre > code > [data-line] {
  border-left-color: rgb(190, 214, 255);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(190, 214, 255);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(190, 214, 255);
  border-left-color: rgb(190, 214, 255);
  border-right-color: rgb(190, 214, 255);
  border-top-color: rgb(190, 214, 255);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(1, 22, 39);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre:has(> code) {
  background-color: rgb(1, 22, 39);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html body img {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .transclude {
  border-left-color: rgb(0, 136, 255);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task="X"] {
  color: rgb(0, 136, 255);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(0, 136, 255);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 157, 0);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 238, 128);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 255, 255);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 136, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 146, 153);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 146, 153);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 146, 153);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 146, 153);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 136, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 238, 128);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 238, 128);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(209, 151, 217);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 146, 153);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(58, 217, 0);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(58, 217, 0);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(58, 217, 0);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 158, 255, 255;
  background: rgba(158, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(158, 255, 255, 0.1);
  border-bottom-color: rgba(158, 255, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(158, 255, 255, 0.25);
  border-right-color: rgba(158, 255, 255, 0.25);
  border-top-color: rgba(158, 255, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="bug"] {
  --callout-color: 255, 98, 140;
  background: rgba(255, 98, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 98, 140, 0.1);
  border-bottom-color: rgba(255, 98, 140, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 98, 140, 0.25);
  border-right-color: rgba(255, 98, 140, 0.25);
  border-top-color: rgba(255, 98, 140, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="danger"] {
  --callout-color: 255, 98, 140;
  background: rgba(255, 98, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 98, 140, 0.1);
  border-bottom-color: rgba(255, 98, 140, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 98, 140, 0.25);
  border-right-color: rgba(255, 98, 140, 0.25);
  border-top-color: rgba(255, 98, 140, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="example"] {
  --callout-color: 209, 151, 217;
  background: rgba(209, 151, 217, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(209, 151, 217, 0.1);
  border-bottom-color: rgba(209, 151, 217, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(209, 151, 217, 0.25);
  border-right-color: rgba(209, 151, 217, 0.25);
  border-top-color: rgba(209, 151, 217, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="failure"] {
  --callout-color: 255, 98, 140;
  background: rgba(255, 98, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 98, 140, 0.1);
  border-bottom-color: rgba(255, 98, 140, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 98, 140, 0.25);
  border-right-color: rgba(255, 98, 140, 0.25);
  border-top-color: rgba(255, 98, 140, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="info"] {
  --callout-color: 0, 136, 255;
  background: rgba(0, 136, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 136, 255, 0.1);
  border-bottom-color: rgba(0, 136, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 136, 255, 0.25);
  border-right-color: rgba(0, 136, 255, 0.25);
  border-top-color: rgba(0, 136, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="note"] {
  --callout-color: 0, 136, 255;
  background: rgba(0, 136, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 136, 255, 0.1);
  border-bottom-color: rgba(0, 136, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 136, 255, 0.25);
  border-right-color: rgba(0, 136, 255, 0.25);
  border-top-color: rgba(0, 136, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="question"] {
  --callout-color: 255, 157, 0;
  background: rgba(255, 157, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 157, 0, 0.1);
  border-bottom-color: rgba(255, 157, 0, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 157, 0, 0.25);
  border-right-color: rgba(255, 157, 0, 0.25);
  border-top-color: rgba(255, 157, 0, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="success"] {
  --callout-color: 158, 255, 128;
  background: rgba(158, 255, 128, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(158, 255, 128, 0.1);
  border-bottom-color: rgba(158, 255, 128, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(158, 255, 128, 0.25);
  border-right-color: rgba(158, 255, 128, 0.25);
  border-top-color: rgba(158, 255, 128, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="tip"] {
  --callout-color: 158, 255, 255;
  background: rgba(158, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(158, 255, 255, 0.1);
  border-bottom-color: rgba(158, 255, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(158, 255, 255, 0.25);
  border-right-color: rgba(158, 255, 255, 0.25);
  border-top-color: rgba(158, 255, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="todo"] {
  --callout-color: 0, 136, 255;
  background: rgba(0, 136, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 136, 255, 0.1);
  border-bottom-color: rgba(0, 136, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 136, 255, 0.25);
  border-right-color: rgba(0, 136, 255, 0.25);
  border-top-color: rgba(0, 136, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="warning"] {
  --callout-color: 255, 157, 0;
  background: rgba(255, 157, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 157, 0, 0.1);
  border-bottom-color: rgba(255, 157, 0, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 157, 0, 0.25);
  border-right-color: rgba(255, 157, 0, 0.25);
  border-top-color: rgba(255, 157, 0, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 136, 255);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space {
  background-color: rgb(0, 34, 64);
  border-bottom-color: rgb(255, 238, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 238, 128);
  border-right-color: rgb(255, 238, 128);
  border-top-color: rgb(255, 238, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(1, 14, 26);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 238, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 238, 128);
  border-right-color: rgb(255, 238, 128);
  border-top-color: rgb(255, 238, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(1, 22, 39);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(1, 14, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(1, 14, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(1, 22, 39);
  border-left-color: rgb(1, 22, 39);
  border-right-color: rgb(1, 22, 39);
  border-top-color: rgb(1, 22, 39);
}

html body a.internal.tag-link::before {
  color: rgb(158, 255, 255);
}

html body h1 {
  color: rgb(255, 157, 0);
}

html body h2 {
  color: rgb(255, 238, 128);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 157, 0);
}

html body h3 {
  color: rgb(0, 136, 255);
}

html body h4 {
  color: rgb(237, 146, 153);
}

html body h5 {
  color: rgb(158, 255, 128);
}

html body h6 {
  color: rgb(190, 214, 255);
}

html body hr {
  border-bottom-color: rgb(1, 14, 26);
  border-left-color: rgb(1, 14, 26);
  border-right-color: rgb(1, 14, 26);
}`,
    scrollbars: `html body .callout {
  --callout-color: 0, 136, 255;
  border-bottom-color: rgba(0, 136, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 136, 255, 0.25);
  border-right-color: rgba(0, 136, 255, 0.25);
  border-top-color: rgba(0, 136, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(238, 238, 238);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(238, 238, 238);
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(237, 146, 153);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}`,
    footer: `html body footer {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(1, 22, 39);
  border-left-color: rgb(1, 22, 39);
  border-right-color: rgb(1, 22, 39);
  border-top-color: rgb(1, 22, 39);
  border-top-left-radius: 0px;
  color: rgb(255, 255, 255);
}

html body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(238, 238, 238);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(238, 238, 238);
}`,
    listPage: `html body li.section-li > .section .meta {
  color: rgb(238, 238, 238);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(238, 238, 238);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(238, 238, 238);
}`,
    misc: `html body .metadata {
  color: rgb(238, 238, 238);
}

html body .metadata-properties {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html body .navigation-progress {
  background-color: rgb(1, 22, 39);
}

html body input[type=text] {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html body kbd {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html body ul.tags > li {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(1, 22, 39);
  border-left-color: rgb(1, 22, 39);
  border-right-color: rgb(1, 22, 39);
  border-top-color: rgb(1, 22, 39);
  color: rgb(158, 255, 255);
}`,
  },
  light: {},
};
