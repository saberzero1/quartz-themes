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
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  background-color: rgb(31, 70, 98);
}

html body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
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
}

html body .transclude-inner {
  border-left-color: rgb(0, 136, 255);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 136, 255);
  text-decoration-color: rgb(0, 136, 255);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(0, 34, 64);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 158, 255, 255;
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

html body .callout[data-callout="bug"] {
  --callout-color: 255, 98, 140;
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

html body .callout[data-callout="danger"] {
  --callout-color: 255, 98, 140;
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

html body .callout[data-callout="example"] {
  --callout-color: 209, 151, 217;
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

html body .callout[data-callout="failure"] {
  --callout-color: 255, 98, 140;
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

html body .callout[data-callout="info"] {
  --callout-color: 0, 136, 255;
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

html body .callout[data-callout="note"] {
  --callout-color: 0, 136, 255;
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

html body .callout[data-callout="question"] {
  --callout-color: 255, 157, 0;
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

html body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: 158, 255, 128;
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

html body .callout[data-callout="tip"] {
  --callout-color: 158, 255, 255;
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

html body .callout[data-callout="todo"] {
  --callout-color: 0, 136, 255;
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

html body .callout[data-callout="warning"] {
  --callout-color: 255, 157, 0;
  background-color: rgba(255, 157, 0, 0.1);
  border-bottom-color: rgba(255, 157, 0, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 157, 0, 0.25);
  border-right-color: rgba(255, 157, 0, 0.25);
  border-top-color: rgba(255, 157, 0, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
}

html body ::-webkit-scrollbar {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

html body ::-webkit-scrollbar-track {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(238, 238, 238);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(238, 238, 238);
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
}`,
  },
  light: {},
};
