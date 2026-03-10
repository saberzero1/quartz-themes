import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "flatcap", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --active-line-bg: rgba(255, 255, 255, 0.04);
  --background-modifier-active: rgba(255, 255, 255, 0.1);
  --background-modifier-border: #303540;
  --background-modifier-border-focus: #88c0d0;
  --background-modifier-border-hover: #484f5c;
  --background-modifier-error: #ff70a6;
  --background-modifier-error-hover: #e06c7529;
  --background-modifier-error-rgb: 255, 112, 166;
  --background-modifier-form-field: #191c22;
  --background-modifier-form-field-highlighted: #23272f;
  --background-modifier-form-field-hover: #191c22;
  --background-modifier-hover: rgba(255, 255, 255, 0.05);
  --background-modifier-success: #84dcc6;
  --background-modifier-success-rgb: 132, 220, 198;
  --background-primary: #121418;
  --background-primary-alt: #191c22;
  --background-secondary: #191c22;
  --background-secondary-alt: #23272f;
  --background-table-rows: #191c22;
  --bases-cards-background: #121418;
  --bases-cards-cover-background: #191c22;
  --bases-cards-shadow: 0 0 0 1px #303540;
  --bases-cards-shadow-hover: 0 0 0 1px #484f5c;
  --bases-embed-border-color: #303540;
  --bases-group-heading-property-color: #bfc2ca;
  --bases-group-heading-property-size: 11px;
  --bases-table-border-color: #303540;
  --bases-table-cell-background-active: #121418;
  --bases-table-cell-background-disabled: #191c22;
  --bases-table-cell-background-selected: rgba(143, 167, 193, 0.3);
  --bases-table-cell-shadow-active: 0 0 0 2px #88c0d0;
  --bases-table-cell-shadow-focus: 0 0 0 2px #81a1c1;
  --bases-table-group-background: #191c22;
  --bases-table-header-background: #121418;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.05);
  --bases-table-header-color: #bfc2ca;
  --bases-table-summary-background: #121418;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.05);
  --blockquote-border-color: #303540;
  --blockquote-border-thickness: 1px;
  --blockquote-color: #bfc2ca;
  --blockquote-style: normal;
  --blur-background: color-mix(in srgb, #23272f 65%, transparent) linear-gradient(#23272f, color-mix(in srgb, #23272f 65%, transparent));
  --btn-shadow-color: rgba(0, 0, 0, 0.2);
  --callout-bug: 255, 112, 166;
  --callout-default: 136, 192, 208;
  --callout-error: 255, 112, 166;
  --callout-example: 104, 182, 239;
  --callout-fail: 255, 112, 166;
  --callout-important: 0, 168, 224;
  --callout-info: 136, 192, 208;
  --callout-question: 255, 214, 112;
  --callout-success: 132, 220, 198;
  --callout-summary: 0, 168, 224;
  --callout-tip: 0, 168, 224;
  --callout-todo: 136, 192, 208;
  --callout-warning: 255, 214, 112;
  --canvas-background: #121418;
  --canvas-card-label-color: #b2b6bf;
  --canvas-color-1: 255, 112, 166;
  --canvas-color-2: 255, 214, 112;
  --canvas-color-3: 255, 214, 112;
  --canvas-color-4: 132, 220, 198;
  --canvas-color-5: 0, 168, 224;
  --canvas-color-6: 104, 182, 239;
  --caret-color: #cbced5;
  --checkbox-border-color: #b2b6bf;
  --checkbox-border-color-hover: #bfc2ca;
  --checkbox-color: #88c0d0;
  --checkbox-color-hover: #88c0d0;
  --checkbox-marker-color: #121418;
  --checklist-done-color: #484f5c;
  --code-background: #191c22;
  --code-border-color: #303540;
  --code-bracket-background: rgba(255, 255, 255, 0.05);
  --code-comment: #b2b6bf;
  --code-function: #ffd670;
  --code-important: #ffd670;
  --code-keyword: #ff70a6;
  --code-normal: #bfc2ca;
  --code-operator: #ff70a6;
  --code-property: #00a8e0;
  --code-punctuation: #bfc2ca;
  --code-string: #84dcc6;
  --code-tag: #ff70a6;
  --code-value: #68b6ef;
  --collapse-icon-color: #b2b6bf;
  --collapse-icon-color-collapsed: #88c0d0;
  --color-blue: #88c0d0;
  --color-blue-rgb: 136, 192, 208;
  --color-cyan: #00a8e0;
  --color-cyan-rgb: 0, 168, 224;
  --color-green: #84dcc6;
  --color-green-rgb: 132, 220, 198;
  --color-orange: #ffd670;
  --color-orange-rgb: 255, 214, 112;
  --color-pink: #ff70a6;
  --color-pink-rgb: 255, 112, 166;
  --color-purple: #68b6ef;
  --color-purple-rgb: 104, 182, 239;
  --color-red: #ff70a6;
  --color-red-rgb: 255, 112, 166;
  --color-yellow: #ffd670;
  --color-yellow-rgb: 255, 214, 112;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #303540;
  --divider-color-hover: #81a1c1;
  --dropdown-background: #23272f;
  --dropdown-background-hover: #303540;
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid #81a1c1;
  --file-header-background: #121418;
  --file-header-background-focused: #121418;
  --file-margins: 8px 48px;
  --flair-background: #23272f;
  --flair-color: #cbced5;
  --flatcap-0: #121418;
  --flatcap-1: #191c22;
  --flatcap-10: #5e81ac;
  --flatcap-11: #81a1c1;
  --flatcap-12: #88c0d0;
  --flatcap-13: #8fbcbb;
  --flatcap-14: #95b1b0;
  --flatcap-15: #ff70a6;
  --flatcap-16: #ffd670;
  --flatcap-17: #84dcc6;
  --flatcap-18: #68b6ef;
  --flatcap-19: #00a8e0;
  --flatcap-2: #23272f;
  --flatcap-3: #303540;
  --flatcap-4: #484f5c;
  --flatcap-5: #b2b6bf;
  --flatcap-6: #bfc2ca;
  --flatcap-7: #cbced5;
  --flatcap-8: #d8dadf;
  --flatcap-9: #e4e6e9;
  --folding-offset: 32px;
  --font-adaptive-normal: 16px;
  --font-adaptive-small: 13.91px;
  --font-adaptive-smaller: 13px;
  --font-adaptive-smallest: 11px;
  --font-code: 14.4px;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif;
  --font-ui-smaller: 11px;
  --footnote-divider-color: #303540;
  --footnote-id-color: #bfc2ca;
  --footnote-id-color-no-occurrences: #b2b6bf;
  --footnote-input-background-active: rgba(255, 255, 255, 0.05);
  --frame-divider-color: #303540;
  --graph-node: #bfc2ca;
  --graph-node-attachment: #ffd670;
  --graph-node-focused: #88c0d0;
  --graph-node-tag: #84dcc6;
  --graph-node-unresolved: #b2b6bf;
  --graph-text: #cbced5;
  --gray: var(--text-muted);
  --h1-size: 1.125em;
  --h1-weight: 600;
  --h2-size: 1.05em;
  --h2-weight: 600;
  --h3-size: 1em;
  --h3-weight: 500;
  --h4-size: 0.9em;
  --h4-weight: 500;
  --h5-size: 0.85em;
  --h5-variant: small-caps;
  --h5-weight: 500;
  --h6-size: 0.85em;
  --h6-variant: small-caps;
  --h6-weight: 400;
  --heading-formatting: #b2b6bf;
  --heading-spacing: 2em;
  --highlight: var(--text-highlight-bg);
  --hr-color: #303540;
  --icon-color: #b2b6bf;
  --icon-color-active: #cbced5;
  --icon-color-focused: #cbced5;
  --icon-color-hover: #bfc2ca;
  --icon-hex: #121418;
  --icon-muted: 0.5;
  --image-muted: 0.7;
  --image-radius: 4px;
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: 1.125em;
  --inline-title-weight: 600;
  --input-date-separator: #b2b6bf;
  --input-height: 32px;
  --input-placeholder-color: #b2b6bf;
  --interactive-accent: #81a1c1;
  --interactive-accent-hover: #88c0d0;
  --interactive-accent-rgb: 142, 165, 185;
  --interactive-hover: #303540;
  --interactive-normal: #23272f;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-width: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: #88c0d0;
  --link-color-hover: #8fbcbb;
  --link-external-color: #88c0d0;
  --link-external-color-hover: #8fbcbb;
  --link-unresolved-color: #88c0d0;
  --list-edit-offset: 0.5em;
  --list-indent: 2em;
  --list-marker-color: #484f5c;
  --list-marker-color-collapsed: #88c0d0;
  --list-marker-color-hover: #bfc2ca;
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: #191c22;
  --menu-border-color: #484f5c;
  --metadata-border-color: #303540;
  --metadata-divider-color: #303540;
  --metadata-input-background-active: rgba(255, 255, 255, 0.05);
  --metadata-input-font-size: 13.91px;
  --metadata-input-text-color: #cbced5;
  --metadata-label-background-active: rgba(255, 255, 255, 0.05);
  --metadata-label-font-size: 13.91px;
  --metadata-label-text-color: #bfc2ca;
  --metadata-label-text-color-hover: #bfc2ca;
  --metadata-label-width: 125.19px;
  --metadata-label-width-multiplier: 9;
  --metadata-property-background-active: rgba(255, 255, 255, 0.05);
  --metadata-property-box-shadow-focus: 0 0 0 2px #88c0d0;
  --metadata-property-box-shadow-hover: 0 0 0 1px #484f5c;
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --modal-background: #121418;
  --modal-border-color: #191c22;
  --mono0: black;
  --mono100: white;
  --nav-collapse-icon-color: #b2b6bf;
  --nav-collapse-icon-color-collapsed: #b2b6bf;
  --nav-heading-color: #cbced5;
  --nav-heading-color-collapsed: #b2b6bf;
  --nav-heading-color-collapsed-hover: #bfc2ca;
  --nav-heading-color-hover: #cbced5;
  --nav-indentation-guide-color: #303540;
  --nav-item-background-active: #303540;
  --nav-item-background-hover: #23272f;
  --nav-item-color: #b2b6bf;
  --nav-item-color-active: #cbced5;
  --nav-item-color-highlighted: #88c0d0;
  --nav-item-color-hover: #bfc2ca;
  --nav-item-color-selected: #cbced5;
  --nav-tag-color: #b2b6bf;
  --nav-tag-color-active: #bfc2ca;
  --nav-tag-color-hover: #bfc2ca;
  --nested-padding: 1.1em;
  --normal-weight: 400;
  --p-spacing: 1.75rem;
  --pdf-background: #121418;
  --pdf-page-background: #121418;
  --pdf-shadow: 0 0 0 1px #303540;
  --pdf-sidebar-background: #121418;
  --pdf-thumbnail-shadow: 0 0 0 1px #303540;
  --pill-border-color: #303540;
  --pill-border-color-hover: #484f5c;
  --pill-color: #bfc2ca;
  --pill-color-hover: #cbced5;
  --pill-color-remove: #b2b6bf;
  --pill-color-remove-hover: #88c0d0;
  --prompt-background: #121418;
  --prompt-border-color: #484f5c;
  --quote-opening-modifier: #303540;
  --raised-background: color-mix(in srgb, #23272f 65%, transparent) linear-gradient(#23272f, color-mix(in srgb, #23272f 65%, transparent));
  --ribbon-background: #121418;
  --ribbon-background-collapsed: #121418;
  --scrollbar-active-thumb-bg: #484f5c;
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: #303540;
  --search-clear-button-color: #bfc2ca;
  --search-icon-color: #bfc2ca;
  --search-result-background: #121418;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #cbced5;
  --setting-items-background: #191c22;
  --setting-items-border-color: #303540;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --sidebar-background: #191c22;
  --slider-thumb-border-color: #484f5c;
  --slider-track-background: #303540;
  --status-bar-background: #191c22;
  --status-bar-border-color: #303540;
  --status-bar-font-size: 11px;
  --status-bar-text-color: #bfc2ca;
  --suggestion-background: #121418;
  --sync-avatar-color-1: #ff70a6;
  --sync-avatar-color-2: #ffd670;
  --sync-avatar-color-3: #ffd670;
  --sync-avatar-color-4: #84dcc6;
  --sync-avatar-color-5: #00a8e0;
  --sync-avatar-color-6: #88c0d0;
  --sync-avatar-color-7: #68b6ef;
  --sync-avatar-color-8: #ff70a6;
  --tab-background-active: #121418;
  --tab-container-background: #121418;
  --tab-divider-color: #484f5c;
  --tab-outline-color: #303540;
  --tab-switcher-background: #191c22;
  --tab-switcher-menubar-background: linear-gradient(to top, #191c22, transparent);
  --tab-text-color: #b2b6bf;
  --tab-text-color-active: #bfc2ca;
  --tab-text-color-focused: #bfc2ca;
  --tab-text-color-focused-active: #d8dadf;
  --tab-text-color-focused-active-current: #cbced5;
  --tab-text-color-focused-highlighted: #88c0d0;
  --table-add-button-border-color: #303540;
  --table-add-button-border-width: 0px;
  --table-border-color: #303540;
  --table-drag-handle-background-active: rgba(143, 167, 193, 0.3);
  --table-drag-handle-color: #b2b6bf;
  --table-drag-handle-color-active: #88c0d0;
  --table-header-border-color: #303540;
  --table-header-color: #cbced5;
  --table-header-size: 14px;
  --table-selection: rgba(143, 167, 193, 0.3);
  --table-selection-border-color: #88c0d0;
  --table-selection-border-radius: 0px;
  --table-selection-border-width: 0px;
  --table-text-size: 14px;
  --tag-color: #88c0d0;
  --tag-color-hover: #88c0d0;
  --tertiary: var(--text-accent-hover);
  --text-accent: #88c0d0;
  --text-accent-hover: #8fbcbb;
  --text-blockquote: #bfc2ca;
  --text-bold: #d8dadf;
  --text-code: #8fbcbb;
  --text-error: #ff70a6;
  --text-faint: #b2b6bf;
  --text-formatting: #484f5c;
  --text-highlight-bg: rgba(209, 154, 102, 0.3);
  --text-highlight-bg-active: rgba(209, 154, 102, 0.5);
  --text-information: #68b6ef;
  --text-italic: #d8dadf;
  --text-muted: #bfc2ca;
  --text-normal: #cbced5;
  --text-on-accent: #121418;
  --text-selection: rgba(143, 167, 193, 0.3);
  --text-success: #84dcc6;
  --text-warning: #ffd670;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #121418;
  --titlebar-background-focused: #191c22;
  --titlebar-border-color: #303540;
  --titlebar-text-color: #bfc2ca;
  --titlebar-text-color-focused: #cbced5;
  --top-left-padding-y: 0px;
  --vault-profile-color: #bfc2ca;
  --vault-profile-color-hover: #cbced5;
  --workspace-background-translucent: rgba(28, 30, 34, 0.7);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(18, 20, 24);
  color: rgb(203, 206, 213);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(18, 20, 24);
  color: rgb(203, 206, 213);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 28, 34);
  color: rgb(203, 206, 213);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 53, 64);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(18, 20, 24);
  border-left-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}

body div#quartz-root {
  background-color: rgb(18, 20, 24);
  color: rgb(203, 206, 213);
}`,
    typography: `body .page article p > b, b {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body .page article p > em, em {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body .page article p > i, i {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body .page article p > strong, strong {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body .text-highlight {
  background-color: rgba(209, 154, 102, 0.3);
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body del {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration: line-through rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body p {
  color: rgb(191, 194, 202);
  outline: rgb(191, 194, 202) none 0px;
  text-decoration: rgb(191, 194, 202);
  text-decoration-color: rgb(191, 194, 202);
}`,
    links: `body a.external, footer a {
  color: rgb(136, 192, 208);
  outline: rgb(136, 192, 208) none 0px;
  text-decoration: underline rgb(136, 192, 208);
  text-decoration-color: rgb(136, 192, 208);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 192, 208);
  outline: rgb(136, 192, 208) none 0px;
  text-decoration: underline rgb(136, 192, 208);
  text-decoration-color: rgb(136, 192, 208);
}

body a.internal.broken {
  color: rgb(136, 192, 208);
  outline: rgb(136, 192, 208) none 0px;
}`,
    lists: `body dd {
  color: rgb(203, 206, 213);
}

body dt {
  color: rgb(203, 206, 213);
}

body ol > li {
  color: rgb(203, 206, 213);
}

body ol.overflow {
  background-color: rgb(18, 20, 24);
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body ul > li {
  color: rgb(203, 206, 213);
}

body ul.overflow {
  background-color: rgb(18, 20, 24);
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(178, 182, 191);
  text-decoration: rgb(178, 182, 191);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body table {
  color: rgb(203, 206, 213);
  margin-top: 28px;
  width: 201.438px;
}

body td {
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}

body th {
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}`,
    code: `body code {
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 214, 112);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 214, 112);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 214, 112);
  border-left-color: rgb(255, 214, 112);
  border-right-color: rgb(255, 214, 112);
  border-top-color: rgb(255, 214, 112);
}

body pre > code, pre:has(> code) {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
}

body pre:has(> code) {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
}`,
    images: `body audio {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body figcaption {
  color: rgb(203, 206, 213);
}

body figure {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body img {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body video {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}`,
    embeds: `body .file-embed {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
}

body .footnotes {
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
}

body .transclude {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body .transclude-inner {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(72, 79, 92);
  text-decoration: line-through rgb(72, 79, 92);
  text-decoration-color: rgb(72, 79, 92);
}

body input[type=checkbox] {
  border-bottom-color: rgb(178, 182, 191);
  border-left-color: rgb(178, 182, 191);
  border-right-color: rgb(178, 182, 191);
  border-top-color: rgb(178, 182, 191);
}

body li.task-list-item[data-task='!'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='*'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='/'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='>'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='?'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='I'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='S'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='b'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='c'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='d'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='f'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='i'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='k'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='l'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='p'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='u'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body li.task-list-item[data-task='w'] {
  color: rgb(203, 206, 213);
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 168, 224;
  background-color: rgba(0, 168, 224, 0.1);
  border-bottom-color: rgba(0, 168, 224, 0.25);
  border-left-color: rgba(0, 168, 224, 0.25);
  border-right-color: rgba(0, 168, 224, 0.25);
  border-top-color: rgba(0, 168, 224, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 112, 166;
  background-color: rgba(255, 112, 166, 0.1);
  border-bottom-color: rgba(255, 112, 166, 0.25);
  border-left-color: rgba(255, 112, 166, 0.25);
  border-right-color: rgba(255, 112, 166, 0.25);
  border-top-color: rgba(255, 112, 166, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 112, 166;
  background-color: rgba(255, 112, 166, 0.1);
  border-bottom-color: rgba(255, 112, 166, 0.25);
  border-left-color: rgba(255, 112, 166, 0.25);
  border-right-color: rgba(255, 112, 166, 0.25);
  border-top-color: rgba(255, 112, 166, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 104, 182, 239;
  background-color: rgba(104, 182, 239, 0.1);
  border-bottom-color: rgba(104, 182, 239, 0.25);
  border-left-color: rgba(104, 182, 239, 0.25);
  border-right-color: rgba(104, 182, 239, 0.25);
  border-top-color: rgba(104, 182, 239, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 112, 166;
  background-color: rgba(255, 112, 166, 0.1);
  border-bottom-color: rgba(255, 112, 166, 0.25);
  border-left-color: rgba(255, 112, 166, 0.25);
  border-right-color: rgba(255, 112, 166, 0.25);
  border-top-color: rgba(255, 112, 166, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 255, 214, 112;
  background-color: rgba(255, 214, 112, 0.1);
  border-bottom-color: rgba(255, 214, 112, 0.25);
  border-left-color: rgba(255, 214, 112, 0.25);
  border-right-color: rgba(255, 214, 112, 0.25);
  border-top-color: rgba(255, 214, 112, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 132, 220, 198;
  background-color: rgba(132, 220, 198, 0.1);
  border-bottom-color: rgba(132, 220, 198, 0.25);
  border-left-color: rgba(132, 220, 198, 0.25);
  border-right-color: rgba(132, 220, 198, 0.25);
  border-top-color: rgba(132, 220, 198, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 168, 224;
  background-color: rgba(0, 168, 224, 0.1);
  border-bottom-color: rgba(0, 168, 224, 0.25);
  border-left-color: rgba(0, 168, 224, 0.25);
  border-right-color: rgba(0, 168, 224, 0.25);
  border-top-color: rgba(0, 168, 224, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 214, 112;
  background-color: rgba(255, 214, 112, 0.1);
  border-bottom-color: rgba(255, 214, 112, 0.25);
  border-left-color: rgba(255, 214, 112, 0.25);
  border-right-color: rgba(255, 214, 112, 0.25);
  border-top-color: rgba(255, 214, 112, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}

body .search > .search-container > .search-space {
  background-color: rgb(18, 20, 24);
  border-bottom-color: rgb(72, 79, 92);
  border-left-color: rgb(72, 79, 92);
  border-right-color: rgb(72, 79, 92);
  border-top-color: rgb(72, 79, 92);
}

body .search > .search-container > .search-space > * {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(203, 206, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(203, 206, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgb(203, 206, 213);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(72, 79, 92);
  border-left-color: rgb(72, 79, 92);
  border-right-color: rgb(72, 79, 92);
  border-top-color: rgb(72, 79, 92);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 28, 34);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgb(203, 206, 213);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
}

body a.internal.tag-link::before {
  color: rgb(136, 192, 208);
}

body h1 {
  color: rgb(203, 206, 213);
}

body h2 {
  color: rgb(203, 206, 213);
}

body h2.page-title, h2.page-title a {
  color: rgb(203, 206, 213);
}

body h3 {
  color: rgb(203, 206, 213);
}

body h4 {
  color: rgb(203, 206, 213);
}

body h5 {
  color: rgb(203, 206, 213);
}

body h6 {
  color: rgb(203, 206, 213);
}

body hr {
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
}`,
    scrollbars: `body .callout {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}

body ::-webkit-scrollbar-corner {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}

body ::-webkit-scrollbar-track {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(178, 182, 191);
  text-decoration: rgb(178, 182, 191);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(178, 182, 191);
  text-decoration: rgb(178, 182, 191);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(178, 182, 191);
  text-decoration: rgb(178, 182, 191);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(48, 53, 64);
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(178, 182, 191);
  border-left-color: rgb(178, 182, 191);
  border-right-color: rgb(178, 182, 191);
  border-top-color: rgb(178, 182, 191);
  color: rgb(178, 182, 191);
}`,
    footer: `body footer {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(191, 194, 202);
}

body footer ul li a {
  color: rgb(191, 194, 202);
  text-decoration: rgb(191, 194, 202);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(203, 206, 213);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 182, 191);
  text-decoration: rgb(178, 182, 191);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 182, 191);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body li.section-li > .section .meta {
  color: rgb(178, 182, 191);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 182, 191);
  text-decoration: rgb(178, 182, 191);
}

body ul.section-ul {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(178, 182, 191);
  border-left-color: rgb(178, 182, 191);
  border-right-color: rgb(178, 182, 191);
  border-top-color: rgb(178, 182, 191);
  color: rgb(178, 182, 191);
}

body .darkmode svg {
  color: rgb(178, 182, 191);
  stroke: rgb(178, 182, 191);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

body .breadcrumb-element p {
  color: rgb(178, 182, 191);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
}

body .metadata {
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(191, 194, 202);
}

body .metadata-properties {
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

body .navigation-progress {
  background-color: rgb(25, 28, 34);
}

body .page-header h2.page-title {
  color: rgb(203, 206, 213);
}

body abbr {
  color: rgb(203, 206, 213);
  text-decoration: underline dotted rgb(203, 206, 213);
}

body details {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body input[type=text] {
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

body kbd {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

body progress {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

body sub {
  color: rgb(203, 206, 213);
}

body summary {
  color: rgb(203, 206, 213);
}

body sup {
  color: rgb(203, 206, 213);
}`,
  },
  light: {},
};
