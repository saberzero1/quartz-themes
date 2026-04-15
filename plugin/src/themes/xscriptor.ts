import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "xscriptor",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["eb-garamond"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-accent: rgba(10, 10, 10, 0.8) !important;
  --background-modifier-border: #404040 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.9) !important;
  --background-modifier-error: #cd919e !important;
  --background-modifier-error-hover: #cd919e !important;
  --background-modifier-error-rgb: 205, 145, 158 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-success: #8fbc8f !important;
  --background-modifier-success-rgb: 143, 188, 143 !important;
  --background-opacity: 0.8 !important;
  --background-primary: rgba(10, 10, 10, 0.8) !important;
  --background-primary-alt: rgba(15, 15, 15, 0.8) !important;
  --background-primary-rgb: 10, 10, 10 !important;
  --background-secondary: rgba(18, 18, 18, 0.8) !important;
  --background-secondary-alt: rgba(21, 21, 21, 0.8) !important;
  --background-secondary-rgb: 18, 18, 18 !important;
  --bases-cards-background: rgba(10, 10, 10, 0.8) !important;
  --bases-cards-cover-background: rgba(15, 15, 15, 0.8) !important;
  --bases-cards-shadow: 0 0 0 1px #404040 !important;
  --bases-embed-border-color: #404040 !important;
  --bases-embed-border-radius: 4px !important;
  --bases-group-heading-property-color: #d0d0d0 !important;
  --bases-table-border-color: #404040 !important;
  --bases-table-cell-background-active: rgba(10, 10, 10, 0.8) !important;
  --bases-table-cell-background-disabled: rgba(15, 15, 15, 0.8) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ffd700 !important;
  --bases-table-container-border-radius: 4px !important;
  --bases-table-group-background: rgba(15, 15, 15, 0.8) !important;
  --bases-table-header-background: rgba(10, 10, 10, 0.8) !important;
  --bases-table-header-color: #d0d0d0 !important;
  --bases-table-summary-background: rgba(10, 10, 10, 0.8) !important;
  --blockquote-border-color: #ffd700 !important;
  --blur-background: color-mix(in srgb, rgba(0, 0, 0, 0.8) 65%, transparent) linear-gradient(rgba(0, 0, 0, 0.8), color-mix(in srgb, rgba(0, 0, 0, 0.8) 65%, transparent)) !important;
  --blur-intensity: 20px !important;
  --bodyFont: 'EB Garamond', Georgia, serif !important;
  --border-color: #404040 !important;
  --border-color-focus: #707070 !important;
  --border-color-hover: #505050 !important;
  --border-radius: 8px !important;
  --callout-bug: 205, 145, 158;
  --callout-default: 95, 158, 160;
  --callout-error: #2d1b1b;
  --callout-error-border: #ef5350;
  --callout-error-text: #ffcdd2;
  --callout-example: 147, 112, 219;
  --callout-fail: 205, 145, 158;
  --callout-important: 95, 158, 160;
  --callout-info: #1a2332;
  --callout-info-border: #64b5f6;
  --callout-info-text: #90caf9;
  --callout-note: #1f1f1f;
  --callout-note-border: #9e9e9e;
  --callout-note-text: #e0e0e0;
  --callout-question: 205, 133, 63;
  --callout-radius: 4px;
  --callout-success: #1b2d1b;
  --callout-success-border: #66bb6a;
  --callout-success-text: #c8e6c9;
  --callout-summary: 95, 158, 160;
  --callout-tip: #2d1b2d;
  --callout-tip-border: #ba68c8;
  --callout-tip-text: #e1bee7;
  --callout-todo: 95, 158, 160;
  --callout-warning: #2d2416;
  --callout-warning-border: #ffb74d;
  --callout-warning-text: #ffcc02;
  --canvas-background: rgba(10, 10, 10, 0.8) !important;
  --canvas-card-label-color: #a0a0a0 !important;
  --canvas-color-1: 205, 145, 158 !important;
  --canvas-color-2: 205, 133, 63 !important;
  --canvas-color-3: 218, 165, 32 !important;
  --canvas-color-4: 143, 188, 143 !important;
  --canvas-color-5: 95, 158, 160 !important;
  --canvas-color-6: 147, 112, 219 !important;
  --canvas-controls-radius: 4px !important;
  --card-color: rgba(0, 0, 0, 0.8) !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #a0a0a0 !important;
  --checkbox-border-color-hover: #d0d0d0 !important;
  --checkbox-color: #ffd700 !important;
  --checkbox-color-hover: #ffd700 !important;
  --checkbox-marker-color: rgba(10, 10, 10, 0.8) !important;
  --checkbox-radius: 4px !important;
  --checklist-done-color: #d0d0d0 !important;
  --clickable-icon-radius: 4px !important;
  --code-background: rgba(15, 15, 15, 0.8) !important;
  --code-border-color: #404040 !important;
  --code-comment: #a0a0a0 !important;
  --code-normal: #ffffff !important;
  --code-punctuation: #d0d0d0 !important;
  --code-radius: 4px !important;
  --codeFont: 'Courier New', monospace !important;
  --collapse-icon-color: #a0a0a0 !important;
  --collapse-icon-color-collapsed: #cc99ff !important;
  --color-blue-rgb: 95, 158, 160 !important;
  --color-cyan-rgb: 95, 158, 160 !important;
  --color-green-rgb: 143, 188, 143 !important;
  --color-orange-rgb: 205, 133, 63 !important;
  --color-pink-rgb: 205, 145, 158 !important;
  --color-purple-rgb: 147, 112, 219 !important;
  --color-red-rgb: 205, 145, 158 !important;
  --color-yellow-rgb: 218, 165, 32 !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --divider-color: #303030 !important;
  --divider-color-hover: #404040 !important;
  --dropdown-background: rgba(0, 0, 0, 0.8) !important;
  --dropdown-background-hover: rgba(32, 32, 32, 0.8) !important;
  --embed-block-shadow-hover: 0 0 0 1px #404040, inset 0 0 0 1px #404040 !important;
  --embed-border-start: 2px solid #ffd700 !important;
  --file-header-background: rgba(10, 10, 10, 0.8) !important;
  --file-header-background-focused: rgba(10, 10, 10, 0.8) !important;
  --file-header-font: 'EB Garamond', Georgia, serif !important;
  --flair-background: rgba(0, 0, 0, 0.8) !important;
  --flair-color: #ffffff !important;
  --font-interface: 'EB Garamond', Georgia, serif !important;
  --font-mermaid: 'EB Garamond', Georgia, serif !important;
  --font-monospace: 'Courier New', monospace !important;
  --font-size: 16px !important;
  --font-text: 'EB Garamond', Georgia, serif !important;
  --footnote-divider-color: #404040 !important;
  --footnote-id-color: #d0d0d0 !important;
  --footnote-id-color-no-occurrences: #a0a0a0 !important;
  --footnote-radius: 4px !important;
  --graph-node: #d0d0d0 !important;
  --graph-node-focused: #cc99ff !important;
  --graph-node-unresolved: #a0a0a0 !important;
  --graph-text: #ffffff !important;
  --gray: #d0d0d0 !important;
  --h1-color: #cd919e !important;
  --h2-color: #daa520 !important;
  --h3-color: #8fbc8f !important;
  --h4-color: #5f9ea0 !important;
  --h5-color: #9370db !important;
  --h6-color: #cd853f !important;
  --headerFont: 'EB Garamond', Georgia, serif !important;
  --heading-formatting: #a0a0a0 !important;
  --highlight-blue: #1a1a4a !important;
  --highlight-green: #1a4a1a !important;
  --highlight-pink: #4a1a4a !important;
  --highlight-purple: #3a1a4a !important;
  --highlight-yellow: #4a4a1a !important;
  --hr-color: #404040 !important;
  --icon-color: #d0d0d0 !important;
  --icon-color-active: #cc99ff !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #d0d0d0 !important;
  --inline-title-color: #cd919e !important;
  --input-color: rgba(10, 10, 10, 0.8) !important;
  --input-date-separator: #a0a0a0 !important;
  --input-placeholder-color: #a0a0a0 !important;
  --interactive-accent: #ffd700 !important;
  --interactive-accent-hover: #ffd700 !important;
  --interactive-hover: rgba(32, 32, 32, 0.8) !important;
  --interactive-normal: rgba(0, 0, 0, 0.8) !important;
  --interactive-success: #90ff9f !important;
  --italic-color: #8be3eb !important;
  --light: rgba(10, 10, 10, 0.8) !important;
  --lightgray: rgba(18, 18, 18, 0.8) !important;
  --line-height: 1.6 !important;
  --link-color: #cc99ff !important;
  --link-color-hover: #cc99ff !important;
  --link-external-color: #cc99ff !important;
  --link-external-color-hover: #cc99ff !important;
  --link-unresolved-color: #cc99ff !important;
  --list-marker-color: #a0a0a0 !important;
  --list-marker-color-collapsed: #cc99ff !important;
  --list-marker-color-hover: #d0d0d0 !important;
  --menu-background: rgba(18, 18, 18, 0.8) !important;
  --metadata-border-color: #404040 !important;
  --metadata-divider-color: #404040 !important;
  --metadata-input-font: 'EB Garamond', Georgia, serif !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-font: 'EB Garamond', Georgia, serif !important;
  --metadata-label-text-color: #d0d0d0 !important;
  --metadata-label-text-color-hover: #d0d0d0 !important;
  --mica-effect: 1 !important;
  --modal-background: rgba(10, 10, 10, 0.8) !important;
  --modal-radius: 10.08px !important;
  --nav-collapse-icon-color: #a0a0a0 !important;
  --nav-collapse-icon-color-collapsed: #a0a0a0 !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #a0a0a0 !important;
  --nav-heading-color-collapsed-hover: #d0d0d0 !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-color: #d0d0d0 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #cc99ff !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-item-radius: 4px !important;
  --nav-tag-color: #a0a0a0 !important;
  --nav-tag-color-active: #d0d0d0 !important;
  --nav-tag-color-hover: #d0d0d0 !important;
  --nav-tag-radius: 4px !important;
  --pdf-background: rgba(10, 10, 10, 0.8) !important;
  --pdf-page-background: rgba(10, 10, 10, 0.8) !important;
  --pdf-shadow: 0 0 0 1px #404040 !important;
  --pdf-sidebar-background: rgba(10, 10, 10, 0.8) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040 !important;
  --pill-border-color: #404040 !important;
  --pill-color: #d0d0d0 !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #a0a0a0 !important;
  --pill-color-remove-hover: #cc99ff !important;
  --prompt-background: rgba(10, 10, 10, 0.8) !important;
  --radius-l: 10.08px !important;
  --radius-s: 4px !important;
  --radius-xl: 16px !important;
  --raised-background: color-mix(in srgb, rgba(0, 0, 0, 0.8) 65%, transparent) linear-gradient(rgba(0, 0, 0, 0.8), color-mix(in srgb, rgba(0, 0, 0, 0.8) 65%, transparent)) !important;
  --ribbon-background: rgba(18, 18, 18, 0.8) !important;
  --ribbon-background-collapsed: rgba(10, 10, 10, 0.8) !important;
  --scrollbar-radius: 10.08px !important;
  --search-clear-button-color: #d0d0d0 !important;
  --search-icon-color: #d0d0d0 !important;
  --search-result-background: rgba(10, 10, 10, 0.8) !important;
  --secondary: #cc99ff !important;
  --select-color: rgba(0, 0, 0, 0.8) !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-background: rgba(15, 15, 15, 0.8) !important;
  --setting-items-border-color: #404040 !important;
  --setting-items-radius: 10.08px !important;
  --slider-track-background: #404040 !important;
  --status-bar-background: rgba(18, 18, 18, 0.8) !important;
  --status-bar-border-color: #303030 !important;
  --status-bar-text-color: #d0d0d0 !important;
  --suggestion-background: rgba(10, 10, 10, 0.8) !important;
  --tab-background-active: rgba(10, 10, 10, 0.8) !important;
  --tab-container-background: rgba(18, 18, 18, 0.8) !important;
  --tab-outline-color: #303030 !important;
  --tab-radius: 4px !important;
  --tab-switcher-background: rgba(18, 18, 18, 0.8) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgba(18, 18, 18, 0.8), transparent) !important;
  --tab-switcher-preview-radius: 16px !important;
  --tab-text-color: #a0a0a0 !important;
  --tab-text-color-active: #d0d0d0 !important;
  --tab-text-color-focused: #d0d0d0 !important;
  --tab-text-color-focused-active: #d0d0d0 !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: #cc99ff !important;
  --table-add-button-border-color: #404040 !important;
  --table-border-color: #404040 !important;
  --table-drag-handle-background-active: #ffd700 !important;
  --table-drag-handle-color: #a0a0a0 !important;
  --table-drag-handle-color-active: #000000 !important;
  --table-header-background: #1f1f1f !important;
  --table-header-border-color: #404040 !important;
  --table-header-color: #ffffff !important;
  --table-row-even: #151515 !important;
  --table-row-odd: #0a0a0a !important;
  --table-selection-border-color: #ffd700 !important;
  --tag-background: #1a2332 !important;
  --tag-border: #42a5f5 !important;
  --tag-color: #cc99ff !important;
  --tag-color-hover: #cc99ff !important;
  --tag-text: #90caf9 !important;
  --tertiary: #cc99ff !important;
  --text-accent: #cc99ff !important;
  --text-accent-hover: #cc99ff !important;
  --text-error: #cd919e !important;
  --text-faint: #a0a0a0 !important;
  --text-muted: #d0d0d0 !important;
  --text-normal: #ffffff !important;
  --text-on-accent: #000000 !important;
  --text-success: #8fbc8f !important;
  --text-warning: #daa520 !important;
  --titleFont: 'EB Garamond', Georgia, serif !important;
  --titlebar-background: rgba(18, 18, 18, 0.8) !important;
  --titlebar-background-focused: rgba(21, 21, 21, 0.8) !important;
  --titlebar-border-color: #404040 !important;
  --titlebar-text-color: #d0d0d0 !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(18, 18, 18, 0.8);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(42, 42, 42);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgba(18, 18, 18, 0.9);
  border-color: rgb(64, 64, 64);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgba(10, 10, 10, 0.8);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgba(18, 18, 18, 0.8);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(208, 208, 208);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(208, 208, 208);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(26, 35, 50);
  color: rgb(204, 153, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(208, 208, 208);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(18, 18, 18, 0.8);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(18, 18, 18, 0.8);
  border-left-color: rgb(48, 48, 48);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgba(10, 10, 10, 0.8);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(139, 227, 235);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(139, 227, 235) none 0px;
  text-decoration-color: rgb(139, 227, 235);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(139, 227, 235);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(139, 227, 235) none 0px;
  text-decoration-color: rgb(139, 227, 235);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(74, 74, 26);
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgba(10, 10, 10, 0.8);
  border-color: rgb(42, 42, 42);
  border-radius: 16px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 215, 0);
  border-color: rgb(255, 215, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(208, 208, 208) none 0px;
  text-decoration-color: rgb(208, 208, 208);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
  text-decoration-color: rgb(204, 153, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
  text-decoration-color: rgb(204, 153, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(18, 18, 18, 0.8);
  font-family: "EB Garamond", Georgia, serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(42, 42, 42);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  width: 662px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body th {
  background-color: rgba(18, 18, 18, 0.9);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(42, 47, 58);
  border-bottom-width: 1px;
  border-left-color: rgb(42, 47, 58);
  border-left-width: 1px;
  border-right-color: rgb(42, 47, 58);
  border-right-width: 1px;
  border-top-color: rgb(42, 47, 58);
  border-top-width: 1px;
  color: rgb(230, 233, 239);
  font-family: Consolas, Monaco, "Courier New", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(42, 47, 58);
  border-bottom-width: 1px;
  border-left-color: rgb(42, 47, 58);
  border-left-width: 1px;
  border-right-color: rgb(42, 47, 58);
  border-right-width: 1px;
  border-top-color: rgb(42, 47, 58);
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(42, 47, 58);
  border-bottom-width: 1px;
  border-left-color: rgb(42, 47, 58);
  border-left-width: 1px;
  border-right-color: rgb(42, 47, 58);
  border-right-width: 1px;
  border-top-color: rgb(42, 47, 58);
  border-top-width: 1px;
  color: rgb(230, 233, 239);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(42, 47, 58);
  border-bottom-width: 1px;
  border-left-color: rgb(42, 47, 58);
  border-left-width: 1px;
  border-right-color: rgb(42, 47, 58);
  border-right-width: 1px;
  border-top-color: rgb(42, 47, 58);
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(42, 47, 58);
  border-bottom-width: 1px;
  border-left-color: rgb(42, 47, 58);
  border-left-width: 1px;
  border-right-color: rgb(42, 47, 58);
  border-right-width: 1px;
  border-top-color: rgb(42, 47, 58);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(205, 145, 158);
  border-left-color: rgb(205, 145, 158);
  border-right-color: rgb(205, 145, 158);
  border-top-color: rgb(205, 145, 158);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgba(15, 15, 15, 0.8);
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 215, 0);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgba(10, 10, 10, 0.8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgba(10, 10, 10, 0.8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
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
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(95, 158, 160);
  border-left-color: rgb(95, 158, 160);
  border-right-color: rgb(95, 158, 160);
  border-top-color: rgb(95, 158, 160);
  color: rgb(95, 158, 160);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(95, 158, 160);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 95, 158, 160;
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 205, 145, 158;
  background-color: rgba(18, 18, 18, 0.7);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(42, 42, 42);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: #2d1b1b;
  background-color: rgb(45, 27, 27);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(239, 83, 80);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 147, 112, 219;
  background-color: rgba(18, 18, 18, 0.7);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(42, 42, 42);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 205, 145, 158;
  background-color: rgba(18, 18, 18, 0.7);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(42, 42, 42);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: #1a2332;
  background-color: rgb(26, 35, 50);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(100, 181, 246);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 95, 158, 160;
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 205, 133, 63;
  background-color: rgba(18, 18, 18, 0.7);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(42, 42, 42);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(18, 18, 18, 0.7);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(42, 42, 42);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: #1b2d1b;
  background-color: rgb(27, 45, 27);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(102, 187, 106);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: #2d1b2d;
  background-color: rgb(45, 27, 45);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 104, 200);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 95, 158, 160;
  background-color: rgba(18, 18, 18, 0.7);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(42, 42, 42);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: #2d2416;
  background-color: rgb(45, 36, 22);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 183, 77);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
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
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(255, 215, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0.8);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.8);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.8);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(255, 215, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(255, 215, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(26, 35, 50);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(204, 153, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(205, 145, 158);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(218, 165, 32);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(205, 145, 158);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(143, 188, 143);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(95, 158, 160);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(147, 112, 219);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(205, 133, 63);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 95, 158, 160;
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 1px;
  border-right-color: rgb(42, 42, 42);
  border-right-width: 1px;
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(78, 205, 196);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(18, 18, 18, 0.8);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(64, 64, 64);
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(208, 208, 208);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  font-weight: 700;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(208, 208, 208);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(208, 208, 208);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(208, 208, 208);
  stroke: rgb(208, 208, 208);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(160, 160, 160);
  font-family: "EB Garamond", Georgia, serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(18, 18, 18, 0.8);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.8);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  padding-bottom: 8px;
  padding-left: 10.1px;
  padding-right: 10.1px;
  padding-top: 8px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(15, 15, 15, 0.8);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "Courier New", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(26, 35, 50);
  color: rgb(204, 153, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-accent: #ffffff !important;
  --background-modifier-border: #dadce0 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #f8d7da !important;
  --background-modifier-error-hover: #f5c6cb !important;
  --background-modifier-error-rgb: 248, 215, 218 !important;
  --background-modifier-form-field-highlighted: #f8f9fa !important;
  --background-modifier-success: #d4edda !important;
  --background-opacity: 0.8 !important;
  --background-primary-alt: #f8f9fa !important;
  --background-primary-rgb: 255, 255, 255 !important;
  --background-secondary: #f1f3f4 !important;
  --background-secondary-alt: #e8eaed !important;
  --background-secondary-rgb: 248, 249, 250 !important;
  --bases-cards-cover-background: #f8f9fa !important;
  --bases-cards-shadow: 0 0 0 1px #dadce0 !important;
  --bases-embed-border-color: #dadce0 !important;
  --bases-embed-border-radius: 4px !important;
  --bases-group-heading-property-color: #5f6368 !important;
  --bases-table-cell-background-disabled: #f8f9fa !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #1a73e8 !important;
  --bases-table-container-border-radius: 4px !important;
  --bases-table-group-background: #f8f9fa !important;
  --bases-table-header-color: #5f6368 !important;
  --blockquote-border-color: #1a73e8 !important;
  --blur-intensity: 20px !important;
  --bodyFont: 'EB Garamond', Georgia, serif !important;
  --border-color: #dadce0 !important;
  --border-color-focus: #9aa0a6 !important;
  --border-color-hover: #bdc1c6 !important;
  --border-radius: 8px !important;
  --callout-error: #ffebee;
  --callout-error-border: #f44336;
  --callout-error-text: #c62828;
  --callout-info: #e3f2fd;
  --callout-info-border: #2196f3;
  --callout-info-text: #0d47a1;
  --callout-note: #f5f5f5;
  --callout-note-border: #757575;
  --callout-note-text: #424242;
  --callout-radius: 4px;
  --callout-success: #e8f5e8;
  --callout-success-border: #4caf50;
  --callout-success-text: #2e7d32;
  --callout-tip: #f3e5f5;
  --callout-tip-border: #9c27b0;
  --callout-tip-text: #6a1b9a;
  --callout-warning: #fff3e0;
  --callout-warning-border: #ff9800;
  --callout-warning-text: #e65100;
  --canvas-card-label-color: #9aa0a6 !important;
  --canvas-controls-radius: 4px !important;
  --card-color: #ffffff !important;
  --caret-color: #202124 !important;
  --checkbox-border-color: #9aa0a6 !important;
  --checkbox-border-color-hover: #5f6368 !important;
  --checkbox-color: #1a73e8 !important;
  --checkbox-color-hover: #1557b0 !important;
  --checkbox-radius: 4px !important;
  --checklist-done-color: #5f6368 !important;
  --clickable-icon-radius: 4px !important;
  --code-background: #f8f9fa !important;
  --code-border-color: #dadce0 !important;
  --code-comment: #9aa0a6 !important;
  --code-normal: #202124 !important;
  --code-punctuation: #5f6368 !important;
  --code-radius: 4px !important;
  --codeFont: 'Courier New', monospace !important;
  --collapse-icon-color: #9aa0a6 !important;
  --collapse-icon-color-collapsed: #cc99ff !important;
  --dark: #202124 !important;
  --darkgray: #202124 !important;
  --divider-color: #e8eaed !important;
  --divider-color-hover: #dadce0 !important;
  --dropdown-background: #f8f9fa !important;
  --dropdown-background-hover: #f1f3f4 !important;
  --embed-block-shadow-hover: 0 0 0 1px #dadce0, inset 0 0 0 1px #dadce0 !important;
  --embed-border-start: 2px solid #1a73e8 !important;
  --file-header-font: 'EB Garamond', Georgia, serif !important;
  --flair-background: #f8f9fa !important;
  --flair-color: #202124 !important;
  --font-interface: 'EB Garamond', Georgia, serif !important;
  --font-mermaid: 'EB Garamond', Georgia, serif !important;
  --font-monospace: 'Courier New', monospace !important;
  --font-size: 16px !important;
  --font-text: 'EB Garamond', Georgia, serif !important;
  --footnote-divider-color: #dadce0 !important;
  --footnote-id-color: #5f6368 !important;
  --footnote-id-color-no-occurrences: #9aa0a6 !important;
  --footnote-radius: 4px !important;
  --graph-node: #5f6368 !important;
  --graph-node-focused: #cc99ff !important;
  --graph-node-unresolved: #9aa0a6 !important;
  --graph-text: #202124 !important;
  --gray: #5f6368 !important;
  --h1-color: #8b0000 !important;
  --h2-color: #b8860b !important;
  --h3-color: #2e8b57 !important;
  --h4-color: #4682b4 !important;
  --h5-color: #9932cc !important;
  --h6-color: #696969 !important;
  --headerFont: 'EB Garamond', Georgia, serif !important;
  --heading-formatting: #9aa0a6 !important;
  --highlight-blue: #bbdefb !important;
  --highlight-green: #c8e6c9 !important;
  --highlight-pink: #f8bbd9 !important;
  --highlight-purple: #e1bee7 !important;
  --highlight-yellow: #fff59d !important;
  --hr-color: #dadce0 !important;
  --icon-color: #5f6368 !important;
  --icon-color-active: #cc99ff !important;
  --icon-color-focused: #202124 !important;
  --icon-color-hover: #5f6368 !important;
  --inline-title-color: #8b0000 !important;
  --input-color: #f8f9fa !important;
  --input-date-separator: #9aa0a6 !important;
  --input-placeholder-color: #9aa0a6 !important;
  --interactive-accent: #1a73e8 !important;
  --interactive-accent-hover: #1557b0 !important;
  --interactive-hover: #f1f3f4 !important;
  --interactive-normal: #f8f9fa !important;
  --interactive-success: #137333 !important;
  --italic-color: #8b4513 !important;
  --light: #f8f9fa !important;
  --lightgray: #f1f3f4 !important;
  --line-height: 1.6 !important;
  --link-color: #cc99ff !important;
  --link-color-hover: #99c2ff !important;
  --link-external-color: #cc99ff !important;
  --link-external-color-hover: #99c2ff !important;
  --link-unresolved-color: #cc99ff !important;
  --list-marker-color: #9aa0a6 !important;
  --list-marker-color-collapsed: #cc99ff !important;
  --list-marker-color-hover: #5f6368 !important;
  --menu-background: #f1f3f4 !important;
  --metadata-border-color: #dadce0 !important;
  --metadata-divider-color: #dadce0 !important;
  --metadata-input-font: 'EB Garamond', Georgia, serif !important;
  --metadata-input-text-color: #202124 !important;
  --metadata-label-font: 'EB Garamond', Georgia, serif !important;
  --metadata-label-text-color: #5f6368 !important;
  --metadata-label-text-color-hover: #5f6368 !important;
  --mica-effect: 1 !important;
  --modal-radius: 10.08px !important;
  --nav-collapse-icon-color: #9aa0a6 !important;
  --nav-collapse-icon-color-collapsed: #9aa0a6 !important;
  --nav-heading-color: #202124 !important;
  --nav-heading-color-collapsed: #9aa0a6 !important;
  --nav-heading-color-collapsed-hover: #5f6368 !important;
  --nav-heading-color-hover: #202124 !important;
  --nav-item-color: #5f6368 !important;
  --nav-item-color-active: #202124 !important;
  --nav-item-color-highlighted: #cc99ff !important;
  --nav-item-color-hover: #202124 !important;
  --nav-item-color-selected: #202124 !important;
  --nav-item-radius: 4px !important;
  --nav-tag-color: #9aa0a6 !important;
  --nav-tag-color-active: #5f6368 !important;
  --nav-tag-color-hover: #5f6368 !important;
  --nav-tag-radius: 4px !important;
  --pill-border-color: #dadce0 !important;
  --pill-color: #5f6368 !important;
  --pill-color-hover: #202124 !important;
  --pill-color-remove: #9aa0a6 !important;
  --pill-color-remove-hover: #cc99ff !important;
  --radius-l: 10.08px !important;
  --radius-s: 4px !important;
  --radius-xl: 16px !important;
  --ribbon-background: #f1f3f4 !important;
  --scrollbar-radius: 10.08px !important;
  --search-clear-button-color: #5f6368 !important;
  --search-icon-color: #5f6368 !important;
  --secondary: #cc99ff !important;
  --select-color: #ffffff !important;
  --setting-group-heading-color: #202124 !important;
  --setting-items-background: #f8f9fa !important;
  --setting-items-border-color: #dadce0 !important;
  --setting-items-radius: 10.08px !important;
  --slider-track-background: #dadce0 !important;
  --status-bar-background: #f1f3f4 !important;
  --status-bar-border-color: #e8eaed !important;
  --status-bar-text-color: #5f6368 !important;
  --tab-container-background: #f1f3f4 !important;
  --tab-outline-color: #e8eaed !important;
  --tab-radius: 4px !important;
  --tab-switcher-background: #f1f3f4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f1f3f4, transparent) !important;
  --tab-switcher-preview-radius: 16px !important;
  --tab-text-color: #9aa0a6 !important;
  --tab-text-color-active: #5f6368 !important;
  --tab-text-color-focused: #5f6368 !important;
  --tab-text-color-focused-active: #5f6368 !important;
  --tab-text-color-focused-active-current: #202124 !important;
  --tab-text-color-focused-highlighted: #cc99ff !important;
  --table-add-button-border-color: #dadce0 !important;
  --table-drag-handle-background-active: #1a73e8 !important;
  --table-drag-handle-color: #9aa0a6 !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-background: #f5f5f5 !important;
  --table-header-color: #202124 !important;
  --table-row-even: #fafafa !important;
  --table-row-odd: #ffffff !important;
  --table-selection-border-color: #1a73e8 !important;
  --tag-background: #e8f0fe !important;
  --tag-border: #bbdefb !important;
  --tag-color: #cc99ff !important;
  --tag-color-hover: #cc99ff !important;
  --tag-text: #1565c0 !important;
  --tertiary: #99c2ff !important;
  --text-accent: #cc99ff !important;
  --text-accent-hover: #99c2ff !important;
  --text-error: #d93025 !important;
  --text-faint: #9aa0a6 !important;
  --text-muted: #5f6368 !important;
  --text-normal: #202124 !important;
  --text-on-accent: #ffffff !important;
  --text-success: #137333 !important;
  --text-warning: #f9ab00 !important;
  --titleFont: 'EB Garamond', Georgia, serif !important;
  --titlebar-background: #f1f3f4 !important;
  --titlebar-background-focused: #e8eaed !important;
  --titlebar-border-color: #dadce0 !important;
  --titlebar-text-color: #5f6368 !important;
  --titlebar-text-color-focused: #202124 !important;
  --vault-profile-color: #202124 !important;
  --vault-profile-color-hover: #202124 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(241, 243, 244);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(255, 255, 255);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgb(255, 255, 255);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(218, 220, 224);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(232, 240, 254);
  color: rgb(204, 153, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(241, 243, 244);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(232, 234, 237);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(241, 243, 244);
  border-left-color: rgb(232, 234, 237);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(32, 33, 36);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(139, 69, 19);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(139, 69, 19) none 0px;
  text-decoration-color: rgb(139, 69, 19);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(139, 69, 19);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(139, 69, 19) none 0px;
  text-decoration-color: rgb(139, 69, 19);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(255, 245, 157);
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body del {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(255, 255, 255);
  border-color: rgb(154, 160, 166);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(26, 115, 232);
  border-color: rgb(26, 115, 232);
}

html[saved-theme="light"] body p {
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(95, 99, 104) none 0px;
  text-decoration-color: rgb(95, 99, 104);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
  text-decoration-color: rgb(204, 153, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
  text-decoration-color: rgb(204, 153, 255);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body dt {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ol > li {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(154, 160, 166);
}

html[saved-theme="light"] body blockquote {
  font-family: "EB Garamond", Georgia, serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body table {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  width: 662px;
}

html[saved-theme="light"] body td {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body th {
  background-color: rgb(255, 255, 255);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="light"] body tr {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-width: 1px;
  border-left-color: rgb(222, 226, 230);
  border-left-width: 1px;
  border-right-color: rgb(222, 226, 230);
  border-right-width: 1px;
  border-top-color: rgb(222, 226, 230);
  border-top-width: 1px;
  color: rgb(33, 37, 41);
  font-family: Consolas, Monaco, "Courier New", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-width: 1px;
  border-left-color: rgb(222, 226, 230);
  border-left-width: 1px;
  border-right-color: rgb(222, 226, 230);
  border-right-width: 1px;
  border-top-color: rgb(222, 226, 230);
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-width: 1px;
  border-left-color: rgb(222, 226, 230);
  border-left-width: 1px;
  border-right-color: rgb(222, 226, 230);
  border-right-width: 1px;
  border-top-color: rgb(222, 226, 230);
  border-top-width: 1px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-width: 1px;
  border-left-color: rgb(222, 226, 230);
  border-left-width: 1px;
  border-right-color: rgb(222, 226, 230);
  border-right-width: 1px;
  border-top-color: rgb(222, 226, 230);
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-width: 1px;
  border-left-color: rgb(222, 226, 230);
  border-left-width: 1px;
  border-right-color: rgb(222, 226, 230);
  border-right-width: 1px;
  border-top-color: rgb(222, 226, 230);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body figcaption {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(139, 0, 0);
  border-left-color: rgb(139, 0, 0);
  border-right-color: rgb(139, 0, 0);
  border-top-color: rgb(139, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(26, 115, 232);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(154, 160, 166);
  border-left-color: rgb(154, 160, 166);
  border-right-color: rgb(154, 160, 166);
  border-top-color: rgb(154, 160, 166);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(245, 245, 245);
  border-bottom-color: color(srgb 0.666667 0.91634 0.912418 / 0.75);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(117, 117, 117);
  border-left-width: 1px;
  border-right-color: color(srgb 0.666667 0.91634 0.912418 / 0.75);
  border-right-width: 1px;
  border-top-color: color(srgb 0.666667 0.91634 0.912418 / 0.75);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.971242 0.730719 0.759477 / 0.75);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.971242 0.730719 0.759477 / 0.75);
  border-left-width: 1px;
  border-right-color: color(srgb 0.971242 0.730719 0.759477 / 0.75);
  border-right-width: 1px;
  border-top-color: color(srgb 0.971242 0.730719 0.759477 / 0.75);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: #ffebee;
  background-color: rgb(255, 235, 238);
  border-bottom-color: rgb(198, 40, 40);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-left-color: rgb(244, 67, 54);
  border-right-color: rgb(198, 40, 40);
  border-top-color: rgb(198, 40, 40);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.823529 0.773856 0.977778 / 0.75);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.823529 0.773856 0.977778 / 0.75);
  border-left-width: 1px;
  border-right-color: color(srgb 0.823529 0.773856 0.977778 / 0.75);
  border-right-width: 1px;
  border-top-color: color(srgb 0.823529 0.773856 0.977778 / 0.75);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.971242 0.730719 0.759477 / 0.75);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.971242 0.730719 0.759477 / 0.75);
  border-left-width: 1px;
  border-right-color: color(srgb 0.971242 0.730719 0.759477 / 0.75);
  border-right-width: 1px;
  border-top-color: color(srgb 0.971242 0.730719 0.759477 / 0.75);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: #e3f2fd;
  background-color: rgb(227, 242, 253);
  border-bottom-color: rgb(13, 71, 161);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-left-color: rgb(33, 150, 243);
  border-right-color: rgb(13, 71, 161);
  border-top-color: rgb(13, 71, 161);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(245, 245, 245);
  border-bottom-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(117, 117, 117);
  border-left-width: 1px;
  border-right-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-right-width: 1px;
  border-top-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.975163 0.819608 0.666667 / 0.75);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.975163 0.819608 0.666667 / 0.75);
  border-left-width: 1px;
  border-right-color: color(srgb 0.975163 0.819608 0.666667 / 0.75);
  border-right-width: 1px;
  border-top-color: color(srgb 0.975163 0.819608 0.666667 / 0.75);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.873203 0.873203 0.873203 / 0.75);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.873203 0.873203 0.873203 / 0.75);
  border-left-width: 1px;
  border-right-color: color(srgb 0.873203 0.873203 0.873203 / 0.75);
  border-right-width: 1px;
  border-top-color: color(srgb 0.873203 0.873203 0.873203 / 0.75);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: #e8f5e8;
  background-color: rgb(232, 245, 232);
  border-bottom-color: rgb(46, 125, 50);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(46, 125, 50);
  border-top-color: rgb(46, 125, 50);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: #f3e5f5;
  background-color: rgb(243, 229, 245);
  border-bottom-color: rgb(106, 27, 154);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-left-color: rgb(156, 39, 176);
  border-right-color: rgb(106, 27, 154);
  border-top-color: rgb(106, 27, 154);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-left-width: 1px;
  border-right-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-right-width: 1px;
  border-top-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: #fff3e0;
  background-color: rgb(255, 243, 224);
  border-bottom-color: rgb(230, 81, 0);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-left-color: rgb(255, 152, 0);
  border-right-color: rgb(230, 81, 0);
  border-top-color: rgb(230, 81, 0);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
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
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(26, 115, 232);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(232, 240, 254);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(204, 153, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(139, 0, 0);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(184, 134, 11);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(139, 0, 0);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 139, 87);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(70, 130, 180);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(153, 50, 204);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(105, 105, 105);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(232, 234, 237);
  border-left-color: rgb(232, 234, 237);
  border-right-color: rgb(232, 234, 237);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-bottom-width: 1px;
  border-left-color: rgb(117, 117, 117);
  border-left-width: 1px;
  border-right-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-right-width: 1px;
  border-top-color: color(srgb 0.677124 0.80915 0.955556 / 0.75);
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(78, 205, 196);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(241, 243, 244);
  border-bottom-color: rgb(232, 234, 237);
  border-left-color: rgb(232, 234, 237);
  border-right-color: rgb(232, 234, 237);
  border-top-color: rgb(218, 220, 224);
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(95, 99, 104);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  font-weight: 700;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(95, 99, 104);
  stroke: rgb(95, 99, 104);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(154, 160, 166);
  font-family: "EB Garamond", Georgia, serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(241, 243, 244);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 1px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  padding-bottom: 8px;
  padding-left: 10.1px;
  padding-right: 10.1px;
  padding-top: 8px;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
  font-family: "Courier New", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body sub {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body summary {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body sup {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(232, 240, 254);
  color: rgb(204, 153, 255);
}`,
  },
  extras: `.workspace {
  backdrop-filter: blur(var(--blur-intensity, 20px));
  -webkit-backdrop-filter: blur(var(--blur-intensity, 20px));
}

.workspace-leaf-content {
  backdrop-filter: blur(calc(var(--blur-intensity, 20px) * 0.7));
  -webkit-backdrop-filter: blur(calc(var(--blur-intensity, 20px) * 0.7));
}

.modal {
  backdrop-filter: blur(calc(var(--blur-intensity, 20px) * 1.2));
  -webkit-backdrop-filter: blur(calc(var(--blur-intensity, 20px) * 1.2));
}

.menu {
  backdrop-filter: blur(calc(var(--blur-intensity, 20px) * 0.8));
  -webkit-backdrop-filter: blur(calc(var(--blur-intensity, 20px) * 0.8));
}

.status-bar {
  backdrop-filter: blur(calc(var(--blur-intensity, 20px) * 0.7));
  -webkit-backdrop-filter: blur(calc(var(--blur-intensity, 20px) * 0.7));
}

@supports not (backdrop-filter: blur(1px)) {
  .workspace,
  .workspace-leaf-content {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
`,
};
