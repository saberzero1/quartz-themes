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
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
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
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
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
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
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
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
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
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
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
