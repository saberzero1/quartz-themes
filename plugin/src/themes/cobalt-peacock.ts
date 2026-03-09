import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "cobalt-peacock", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 208;
  --accent-l: 50%;
  --accent-s: 100%;
  --background-modifier-active-hover: #011627;
  --background-modifier-border-focus: #ffee80;
  --background-modifier-border-hover: #ffee80;
  --background-modifier-error: #ed9299;
  --background-modifier-error-hover: #ed9299;
  --background-modifier-error-rgb: 255, 98, 140;
  --background-modifier-hover: #010e1a;
  --background-modifier-success: #3ad900;
  --background-modifier-success-rgb: 158, 255, 128;
  --background-primary: #002240;
  --background-primary-alt: #011627;
  --background-secondary: #011627;
  --background-secondary-alt: #010e1a;
  --bases-cards-background: #002240;
  --bases-cards-cover-background: #011627;
  --bases-cards-radius: 0px;
  --bases-cards-shadow-hover: 0 0 0 1px #ffee80;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #EEEEEE;
  --bases-table-border-color: #FFFFFF;
  --bases-table-cell-background-active: #002240;
  --bases-table-cell-background-disabled: #011627;
  --bases-table-cell-background-selected: rgba(0, 136, 255, 0.25);
  --bases-table-cell-shadow-active: 0 0 0 2px #ffee80;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0088ff;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #011627;
  --bases-table-header-background: #002240;
  --bases-table-header-background-hover: #010e1a;
  --bases-table-header-color: #EEEEEE;
  --bases-table-row-background-hover: #1F4662;
  --bases-table-summary-background: #002240;
  --bases-table-summary-background-hover: #010e1a;
  --blockquote-border-color: #0088ff;
  --blockquote-color: #0088ff;
  --blur-background: color-mix(in srgb, #010e1a 65%, transparent) linear-gradient(#010e1a, color-mix(in srgb, #010e1a 65%, transparent));
  --button-radius: 0px;
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
  --canvas-background: #002240;
  --canvas-color-1: 255, 98, 140;
  --canvas-color-2: 255, 157, 0;
  --canvas-color-3: 255, 238, 128;
  --canvas-color-4: 158, 255, 128;
  --canvas-color-5: 158, 255, 255;
  --canvas-color-6: 209, 151, 217;
  --canvas-controls-radius: 0px;
  --checkbox-border-color: #FFFFFF;
  --checkbox-border-color-hover: #1F4662;
  --checkbox-color: #ffee80;
  --checkbox-color-hover: #1F4662;
  --checkbox-marker-color: #002240;
  --checkbox-radius: 0px;
  --checklist-done-color: #0088ff;
  --clickable-icon-radius: 0px;
  --code-background: #011627;
  --code-bracket-background: #010e1a;
  --code-comment: #0088ff;
  --code-function: #bed6ff;
  --code-keyword: #ff9d00;
  --code-normal: #FFFFFF;
  --code-operator: #FFFFFF;
  --code-property: #D197D9;
  --code-punctuation: #FFFFFF;
  --code-radius: 0px;
  --code-string: #3ad900;
  --code-tag: #9effff;
  --code-value: #ed9299;
  --collapse-icon-color-collapsed: hsl(205, 102%, 57.5%);
  --color-accent: rgb(0, 136, 255);
  --color-accent-1: hsl(205, 102%, 57.5%);
  --color-accent-2: hsl(203, 105%, 64.5%);
  --color-accent-hsl: 208, 100%, 50%;
  --color-blue: #0088ff;
  --color-blue-rgb: 0, 136, 255;
  --color-comment-blue: #0088ff;
  --color-comment-blue-rgb: 0, 136, 255;
  --color-cyan: #9effff;
  --color-cyan-rgb: 158, 255, 255;
  --color-dark-blue: #011627;
  --color-deep-blue: #010e1a;
  --color-green: #3ad900;
  --color-green-rgb: 158, 255, 128;
  --color-light-blue: #bed6ff;
  --color-light-blue-rgb: 190, 214, 255;
  --color-light-green: #9eff80;
  --color-medium-blue: #79abff;
  --color-mint: #2affdf;
  --color-orange: #ff9d00;
  --color-orange-rgb: 255, 157, 0;
  --color-pink: #ed9299;
  --color-pink-rgb: 237, 146, 153;
  --color-purple: #D197D9;
  --color-purple-rgb: 209, 151, 217;
  --color-red: #ed9299;
  --color-red-rgb: 255, 98, 140;
  --color-salmon: #ed9299;
  --color-selected-blue: #1F4662;
  --color-yellow: #ffee80;
  --color-yellow-rgb: 255, 238, 128;
  --divider-color: #010e1a;
  --divider-color-hover: #0088ff;
  --drag-ghost-background: #1F4662;
  --dropdown-background: #010e1a;
  --dropdown-background-hover: #1F4662;
  --embed-border-start: 2px solid #0088ff;
  --file-header-background: #002240;
  --file-header-background-focused: #002240;
  --flair-background: #010e1a;
  --footnote-id-color: #EEEEEE;
  --footnote-input-background-active: #010e1a;
  --footnote-radius: 0px;
  --graph-node: #EEEEEE;
  --graph-node-attachment: #ffee80;
  --graph-node-focused: hsl(205, 102%, 57.5%);
  --graph-node-tag: #3ad900;
  --h1-color: #ff9d00;
  --h2-color: #ffee80;
  --h3-color: #0088ff;
  --h4-color: #ed9299;
  --h5-color: #9eff80;
  --h6-color: #bed6ff;
  --heading-formatting: #ed9299;
  --hr-color: #0088ff;
  --icon-color: #ffffff;
  --icon-color-active: #ffee80;
  --icon-color-focused: #ff9d00;
  --icon-color-hover: #ffee80;
  --indentation-guide-color: #ed9299;
  --inline-title-color: #ff9d00;
  --input-radius: 0px;
  --interactive-accent: #0088ff;
  --interactive-accent-hover: #bed6ff;
  --interactive-accent-hsl: 208, 100%, 50%;
  --interactive-hover: #1F4662;
  --interactive-normal: #010e1a;
  --link-color: #3ad900;
  --link-color-hover: #9eff80;
  --link-external-color: hsl(205, 102%, 57.5%);
  --link-external-color-hover: hsl(203, 105%, 64.5%);
  --link-unresolved-color: #ed9299;
  --link-unresolved-decoration-color: rgba(0, 136, 255, 0.3);
  --link-unresolved-filter: blur(0.75px);
  --link-unresolved-opacity: 1;
  --list-marker-color: #ed9299;
  --list-marker-color-collapsed: hsl(205, 102%, 57.5%);
  --list-marker-color-hover: #EEEEEE;
  --menu-background: #011627;
  --menu-border-color: #ffee80;
  --menu-radius: 0px;
  --metadata-input-background-active: #010e1a;
  --metadata-label-background-active: #010e1a;
  --metadata-label-text-color: #EEEEEE;
  --metadata-label-text-color-hover: #EEEEEE;
  --metadata-property-background-active: #010e1a;
  --metadata-property-box-shadow-focus: 0 0 0 2px #ffee80;
  --metadata-property-box-shadow-hover: 0 0 0 1px #ffee80;
  --modal-background: #002240;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #ed9299;
  --nav-collapse-icon-color-collapsed: #ed9299;
  --nav-heading-color-collapsed-hover: #EEEEEE;
  --nav-indentation-guide-color: #ed9299;
  --nav-indetation-guide-color: #ed9299;
  --nav-item-background-active: #010e1a;
  --nav-item-background-hover: #1F4662;
  --nav-item-background-selected: #9eff80;
  --nav-item-color: #EEEEEE;
  --nav-item-color-active: #ff9d00;
  --nav-item-color-highlighted: #1F4662;
  --nav-item-color-hover: #ffee80;
  --nav-item-color-selected: #010e1a;
  --nav-item-radius: 0px;
  --nav-tag-color-active: #EEEEEE;
  --nav-tag-color-hover: #EEEEEE;
  --nav-tag-radius: 0px;
  --pdf-background: #002240;
  --pdf-page-background: #002240;
  --pdf-sidebar-background: #002240;
  --pill-border-color-hover: #ffee80;
  --pill-color: #EEEEEE;
  --pill-color-remove-hover: hsl(205, 102%, 57.5%);
  --prompt-background: #002240;
  --prompt-border-color: #ffee80;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #010e1a 65%, transparent) linear-gradient(#010e1a, color-mix(in srgb, #010e1a 65%, transparent));
  --ribbon-background: #010e1a;
  --ribbon-background-collapsed: #010e1a;
  --scrollbar-active-thumb-bg: #ffee80;
  --scrollbar-bg: #ffee80;
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: rgba(255, 238, 128, 0.5);
  --search-clear-button-color: #EEEEEE;
  --search-icon-color: #EEEEEE;
  --search-result-background: #002240;
  --setting-items-background: #011627;
  --setting-items-radius: 0px;
  --slider-thumb-border-color: #ffee80;
  --slider-thumb-radius: 0px;
  --status-bar-background: #011627;
  --status-bar-border-color: #011627;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #FFFFFF;
  --suggestion-background: #002240;
  --sync-avatar-color-1: #ed9299;
  --sync-avatar-color-2: #ff9d00;
  --sync-avatar-color-3: #ffee80;
  --sync-avatar-color-4: #3ad900;
  --sync-avatar-color-5: #9effff;
  --sync-avatar-color-6: #0088ff;
  --sync-avatar-color-7: #D197D9;
  --sync-avatar-color-8: #ed9299;
  --tab-background-active: #002240;
  --tab-container-background: #ed9299;
  --tab-divider-color: #ffee80;
  --tab-outline-color: #010e1a;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #011627;
  --tab-switcher-menubar-background: linear-gradient(to top, #011627, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 136, 255);
  --tab-text-color: #FFFFFF;
  --tab-text-color-active: #ff9d00;
  --tab-text-color-focused: #ff9d00;
  --tab-text-color-focused-active: #ff9d00;
  --tab-text-color-focused-active-current: #ff9d00;
  --tab-text-color-focused-highlighted: #ff9d00;
  --table-border-color: #FFFFFF;
  --table-column-alt-background: rgba(0, 136, 255, 0.05);
  --table-drag-handle-background: #002240;
  --table-drag-handle-background-active: #002240;
  --table-drag-handle-color: #ff9d00;
  --table-drag-handle-color-active: #FFFFFF;
  --table-header-background: #011627;
  --table-header-background-hover: #1F4662;
  --table-header-border-color: #FFFFFF;
  --table-header-color: #ff9d00;
  --table-header-weight: bold;
  --table-row-alt-background: rgba(0, 136, 255, 0.05);
  --table-row-background-hover: #1F4662;
  --table-selection: rgba(0, 136, 255, 0.25);
  --table-selection-blend-mode: soft-light;
  --table-selection-border-color: #ffee80;
  --table-text-color: #FFFFFF;
  --tag-background: #011627;
  --tag-background-hover: #ed9299;
  --tag-border-color: #011627;
  --tag-border-color-hover: #011627;
  --tag-color: #9effff;
  --tag-color-hover: #1F4662;
  --text-accent: hsl(205, 102%, 57.5%);
  --text-accent-hover: hsl(203, 105%, 64.5%);
  --text-error: #ed9299;
  --text-highlight-bg: #1F4662;
  --text-muted: #EEEEEE;
  --text-on-accent: #FFFFFF;
  --text-selection: #0088ff;
  --text-success: #3ad900;
  --text-warning: #ff9d00;
  --titlebar-background: #010e1a;
  --titlebar-background-focused: #010e1a;
  --titlebar-text-color: #EEEEEE;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 146, 153);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 34, 64);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(1, 22, 39);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(1, 14, 26);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 146, 153);
  border-left-color: rgb(1, 14, 26);
}

body div#quartz-root {
  background-color: rgb(0, 34, 64);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgb(31, 70, 98);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}`,
    links: `body a.external, footer a {
  color: rgb(38, 165, 255);
  outline: rgb(38, 165, 255) none 0px;
  text-decoration: underline rgb(38, 165, 255);
  text-decoration-color: rgb(38, 165, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(58, 217, 0);
  outline: rgb(58, 217, 0) none 0px;
  text-decoration: underline rgb(58, 217, 0);
  text-decoration-color: rgb(58, 217, 0);
}

body a.internal.broken {
  color: rgb(237, 146, 153);
  filter: blur(0.75px);
  outline: rgb(237, 146, 153) none 0px;
  text-decoration: underline rgba(0, 136, 255, 0.3);
  text-decoration-color: rgba(0, 136, 255, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(0, 34, 64);
}

body ul.overflow {
  background-color: rgb(0, 34, 64);
}`,
    tables: `body tbody tr:nth-child(odd) {
  background-color: rgba(0, 136, 255, 0.05);
}

body td {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body th {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 157, 0);
  font-weight: 700;
}

body tr {
  background-color: rgb(1, 22, 39);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(1, 22, 39);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(1, 22, 39);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre > code > [data-line] {
  border-left-color: rgb(190, 214, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(190, 214, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(190, 214, 255);
  border-left-color: rgb(190, 214, 255);
  border-right-color: rgb(190, 214, 255);
  border-top-color: rgb(190, 214, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(1, 22, 39);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(1, 22, 39);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    embeds: `body .file-embed {
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

body .transclude {
  border-left-color: rgb(0, 136, 255);
}

body .transclude-inner {
  border-left-color: rgb(0, 136, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 136, 255);
  text-decoration: line-through rgb(0, 136, 255);
  text-decoration-color: rgb(0, 136, 255);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(1, 14, 26);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 238, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 238, 128);
  border-right-color: rgb(255, 238, 128);
  border-top-color: rgb(255, 238, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(1, 22, 39);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(1, 14, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(1, 14, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(1, 22, 39);
  border-left-color: rgb(1, 22, 39);
  border-right-color: rgb(1, 22, 39);
  border-top-color: rgb(1, 22, 39);
}

body a.internal.tag-link::before {
  color: rgb(158, 255, 255);
}

body h1 {
  color: rgb(255, 157, 0);
}

body h2 {
  color: rgb(255, 238, 128);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 157, 0);
}

body h3 {
  color: rgb(0, 136, 255);
}

body h4 {
  color: rgb(237, 146, 153);
}

body h5 {
  color: rgb(158, 255, 128);
}

body h6 {
  color: rgb(190, 214, 255);
}

body hr {
  border-bottom-color: rgb(1, 14, 26);
  border-left-color: rgb(1, 14, 26);
  border-right-color: rgb(1, 14, 26);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 34, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 64);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(1, 14, 26);
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 157, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(1, 22, 39);
  border-left-color: rgb(1, 22, 39);
  border-right-color: rgb(1, 22, 39);
  border-top-color: rgb(1, 22, 39);
  border-top-left-radius: 0px;
  color: rgb(255, 255, 255);
}

body footer ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(238, 238, 238);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(238, 238, 238);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `body .breadcrumb-container {
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
    misc: `body .metadata {
  color: rgb(238, 238, 238);
}

body .metadata-properties {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .navigation-progress {
  background-color: rgb(1, 22, 39);
}

body input[type=text] {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body kbd {
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
