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
  --background-accent: rgba(10, 10, 10, 0.8);
  --background-modifier-border: #404040;
  --background-modifier-cover: rgba(0, 0, 0, 0.9);
  --background-modifier-error: #cd919e;
  --background-modifier-error-hover: #cd919e;
  --background-modifier-error-rgb: 205, 145, 158;
  --background-modifier-form-field: rgba(0, 0, 0, 0.8);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.8);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.8);
  --background-modifier-success: #8fbc8f;
  --background-modifier-success-rgb: 143, 188, 143;
  --background-opacity: 0.8;
  --background-primary: rgba(10, 10, 10, 0.8);
  --background-primary-alt: rgba(15, 15, 15, 0.8);
  --background-primary-rgb: 10, 10, 10;
  --background-secondary: rgba(18, 18, 18, 0.8);
  --background-secondary-alt: rgba(21, 21, 21, 0.8);
  --background-secondary-rgb: 18, 18, 18;
  --bases-cards-background: rgba(10, 10, 10, 0.8);
  --bases-cards-cover-background: rgba(15, 15, 15, 0.8);
  --bases-cards-shadow: 0 0 0 1px #404040;
  --bases-embed-border-color: #404040;
  --bases-embed-border-radius: 4px;
  --bases-group-heading-property-color: #d0d0d0;
  --bases-table-border-color: #404040;
  --bases-table-cell-background-active: rgba(10, 10, 10, 0.8);
  --bases-table-cell-background-disabled: rgba(15, 15, 15, 0.8);
  --bases-table-cell-shadow-focus: 0 0 0 2px #ffd700;
  --bases-table-container-border-radius: 4px;
  --bases-table-group-background: rgba(15, 15, 15, 0.8);
  --bases-table-header-background: rgba(10, 10, 10, 0.8);
  --bases-table-header-color: #d0d0d0;
  --bases-table-summary-background: rgba(10, 10, 10, 0.8);
  --blockquote-border-color: #ffd700;
  --blur-background: color-mix(in srgb, rgba(0, 0, 0, 0.8) 65%, transparent) linear-gradient(rgba(0, 0, 0, 0.8), color-mix(in srgb, rgba(0, 0, 0, 0.8) 65%, transparent));
  --blur-intensity: 20px;
  --border-color: #404040;
  --border-color-focus: #707070;
  --border-color-hover: #505050;
  --border-radius: 8px;
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
  --canvas-background: rgba(10, 10, 10, 0.8);
  --canvas-card-label-color: #a0a0a0;
  --canvas-color-1: 205, 145, 158;
  --canvas-color-2: 205, 133, 63;
  --canvas-color-3: 218, 165, 32;
  --canvas-color-4: 143, 188, 143;
  --canvas-color-5: 95, 158, 160;
  --canvas-color-6: 147, 112, 219;
  --canvas-controls-radius: 4px;
  --card-color: rgba(0, 0, 0, 0.8);
  --caret-color: #ffffff;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #d0d0d0;
  --checkbox-color: #ffd700;
  --checkbox-color-hover: #ffd700;
  --checkbox-marker-color: rgba(10, 10, 10, 0.8);
  --checkbox-radius: 4px;
  --checklist-done-color: #d0d0d0;
  --clickable-icon-radius: 4px;
  --code-background: rgba(15, 15, 15, 0.8);
  --code-border-color: #404040;
  --code-comment: #a0a0a0;
  --code-normal: #ffffff;
  --code-punctuation: #d0d0d0;
  --code-radius: 4px;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #cc99ff;
  --color-blue-rgb: 95, 158, 160;
  --color-cyan-rgb: 95, 158, 160;
  --color-green-rgb: 143, 188, 143;
  --color-orange-rgb: 205, 133, 63;
  --color-pink-rgb: 205, 145, 158;
  --color-purple-rgb: 147, 112, 219;
  --color-red-rgb: 205, 145, 158;
  --color-yellow-rgb: 218, 165, 32;
  --divider-color: #303030;
  --divider-color-hover: #404040;
  --dropdown-background: rgba(0, 0, 0, 0.8);
  --dropdown-background-hover: rgba(32, 32, 32, 0.8);
  --embed-block-shadow-hover: 0 0 0 1px #404040, inset 0 0 0 1px #404040;
  --embed-border-start: 2px solid #ffd700;
  --file-header-background: rgba(10, 10, 10, 0.8);
  --file-header-background-focused: rgba(10, 10, 10, 0.8);
  --file-header-font: 'EB Garamond', Georgia, serif;
  --flair-background: rgba(0, 0, 0, 0.8);
  --flair-color: #ffffff;
  --font-interface: 'EB Garamond', Georgia, serif;
  --font-mermaid: 'EB Garamond', Georgia, serif;
  --font-monospace: 'Courier New', monospace;
  --font-size: 16px;
  --font-text: 'EB Garamond', Georgia, serif;
  --footnote-divider-color: #404040;
  --footnote-id-color: #d0d0d0;
  --footnote-id-color-no-occurrences: #a0a0a0;
  --footnote-radius: 4px;
  --graph-node: #d0d0d0;
  --graph-node-focused: #cc99ff;
  --graph-node-unresolved: #a0a0a0;
  --graph-text: #ffffff;
  --h1-color: #cd919e;
  --h2-color: #daa520;
  --h3-color: #8fbc8f;
  --h4-color: #5f9ea0;
  --h5-color: #9370db;
  --h6-color: #cd853f;
  --heading-formatting: #a0a0a0;
  --highlight-blue: #1a1a4a;
  --highlight-green: #1a4a1a;
  --highlight-pink: #4a1a4a;
  --highlight-purple: #3a1a4a;
  --highlight-yellow: #4a4a1a;
  --hr-color: #404040;
  --icon-color: #d0d0d0;
  --icon-color-active: #cc99ff;
  --icon-color-focused: #ffffff;
  --icon-color-hover: #d0d0d0;
  --inline-title-color: #cd919e;
  --input-color: rgba(10, 10, 10, 0.8);
  --input-date-separator: #a0a0a0;
  --input-placeholder-color: #a0a0a0;
  --interactive-accent: #ffd700;
  --interactive-accent-hover: #ffd700;
  --interactive-hover: rgba(32, 32, 32, 0.8);
  --interactive-normal: rgba(0, 0, 0, 0.8);
  --interactive-success: #90ff9f;
  --italic-color: #8be3eb;
  --line-height: 1.6;
  --link-color: #cc99ff;
  --link-color-hover: #cc99ff;
  --link-external-color: #cc99ff;
  --link-external-color-hover: #cc99ff;
  --link-unresolved-color: #cc99ff;
  --list-marker-color: #a0a0a0;
  --list-marker-color-collapsed: #cc99ff;
  --list-marker-color-hover: #d0d0d0;
  --menu-background: rgba(18, 18, 18, 0.8);
  --metadata-border-color: #404040;
  --metadata-divider-color: #404040;
  --metadata-input-font: 'EB Garamond', Georgia, serif;
  --metadata-input-text-color: #ffffff;
  --metadata-label-font: 'EB Garamond', Georgia, serif;
  --metadata-label-text-color: #d0d0d0;
  --metadata-label-text-color-hover: #d0d0d0;
  --mica-effect: 1;
  --modal-background: rgba(10, 10, 10, 0.8);
  --modal-radius: 10.08px;
  --nav-collapse-icon-color: #a0a0a0;
  --nav-collapse-icon-color-collapsed: #a0a0a0;
  --nav-heading-color: #ffffff;
  --nav-heading-color-collapsed: #a0a0a0;
  --nav-heading-color-collapsed-hover: #d0d0d0;
  --nav-heading-color-hover: #ffffff;
  --nav-item-color: #d0d0d0;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #cc99ff;
  --nav-item-color-hover: #ffffff;
  --nav-item-color-selected: #ffffff;
  --nav-item-radius: 4px;
  --nav-tag-color: #a0a0a0;
  --nav-tag-color-active: #d0d0d0;
  --nav-tag-color-hover: #d0d0d0;
  --nav-tag-radius: 4px;
  --pdf-background: rgba(10, 10, 10, 0.8);
  --pdf-page-background: rgba(10, 10, 10, 0.8);
  --pdf-shadow: 0 0 0 1px #404040;
  --pdf-sidebar-background: rgba(10, 10, 10, 0.8);
  --pdf-thumbnail-shadow: 0 0 0 1px #404040;
  --pill-border-color: #404040;
  --pill-color: #d0d0d0;
  --pill-color-hover: #ffffff;
  --pill-color-remove: #a0a0a0;
  --pill-color-remove-hover: #cc99ff;
  --prompt-background: rgba(10, 10, 10, 0.8);
  --radius-l: 10.08px;
  --radius-s: 4px;
  --radius-xl: 16px;
  --raised-background: color-mix(in srgb, rgba(0, 0, 0, 0.8) 65%, transparent) linear-gradient(rgba(0, 0, 0, 0.8), color-mix(in srgb, rgba(0, 0, 0, 0.8) 65%, transparent));
  --ribbon-background: rgba(18, 18, 18, 0.8);
  --ribbon-background-collapsed: rgba(10, 10, 10, 0.8);
  --scrollbar-radius: 10.08px;
  --search-clear-button-color: #d0d0d0;
  --search-icon-color: #d0d0d0;
  --search-result-background: rgba(10, 10, 10, 0.8);
  --select-color: rgba(0, 0, 0, 0.8);
  --setting-group-heading-color: #ffffff;
  --setting-items-background: rgba(15, 15, 15, 0.8);
  --setting-items-border-color: #404040;
  --setting-items-radius: 10.08px;
  --slider-track-background: #404040;
  --status-bar-background: rgba(18, 18, 18, 0.8);
  --status-bar-border-color: #303030;
  --status-bar-text-color: #d0d0d0;
  --suggestion-background: rgba(10, 10, 10, 0.8);
  --tab-background-active: rgba(10, 10, 10, 0.8);
  --tab-container-background: rgba(18, 18, 18, 0.8);
  --tab-outline-color: #303030;
  --tab-radius: 4px;
  --tab-switcher-background: rgba(18, 18, 18, 0.8);
  --tab-switcher-menubar-background: linear-gradient(to top, rgba(18, 18, 18, 0.8), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-text-color: #a0a0a0;
  --tab-text-color-active: #d0d0d0;
  --tab-text-color-focused: #d0d0d0;
  --tab-text-color-focused-active: #d0d0d0;
  --tab-text-color-focused-active-current: #ffffff;
  --tab-text-color-focused-highlighted: #cc99ff;
  --table-add-button-border-color: #404040;
  --table-border-color: #404040;
  --table-drag-handle-background-active: #ffd700;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #000000;
  --table-header-background: #1f1f1f;
  --table-header-border-color: #404040;
  --table-header-color: #ffffff;
  --table-row-even: #151515;
  --table-row-odd: #0a0a0a;
  --table-selection-border-color: #ffd700;
  --tag-background: #1a2332;
  --tag-border: #42a5f5;
  --tag-color: #cc99ff;
  --tag-color-hover: #cc99ff;
  --tag-text: #90caf9;
  --text-accent: #cc99ff;
  --text-accent-hover: #cc99ff;
  --text-error: #cd919e;
  --text-faint: #a0a0a0;
  --text-muted: #d0d0d0;
  --text-normal: #ffffff;
  --text-on-accent: #000000;
  --text-success: #8fbc8f;
  --text-warning: #daa520;
  --titlebar-background: rgba(18, 18, 18, 0.8);
  --titlebar-background-focused: rgba(21, 21, 21, 0.8);
  --titlebar-border-color: #404040;
  --titlebar-text-color: #d0d0d0;
  --titlebar-text-color-focused: #ffffff;
  --vault-profile-color: #ffffff;
  --vault-profile-color-hover: #ffffff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(18, 18, 18, 0.8);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(18, 18, 18, 0.8);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 48, 48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(18, 18, 18, 0.8);
  border-left-color: rgb(48, 48, 48);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgba(10, 10, 10, 0.8);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(139, 227, 235);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(139, 227, 235) none 0px;
  text-decoration: rgb(139, 227, 235);
  text-decoration-color: rgb(139, 227, 235);
}

body .page article p > i, i {
  color: rgb(139, 227, 235);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(139, 227, 235) none 0px;
  text-decoration: rgb(139, 227, 235);
  text-decoration-color: rgb(139, 227, 235);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgb(74, 74, 26);
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(208, 208, 208) none 0px;
  text-decoration: rgb(208, 208, 208);
  text-decoration-color: rgb(208, 208, 208);
}`,
    links: `body a.external, footer a {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
  text-decoration: underline rgb(204, 153, 255);
  text-decoration-color: rgb(204, 153, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
  text-decoration: underline rgb(204, 153, 255);
  text-decoration-color: rgb(204, 153, 255);
}

body a.internal.broken {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body blockquote {
  background-color: rgba(18, 18, 18, 0.8);
  font-family: "EB Garamond", Georgia, serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
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

body td {
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
  color: rgb(255, 255, 255);
}

body th {
  background-color: rgba(18, 18, 18, 0.9);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(255, 255, 255);
}

body thead {
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
}

body tr {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgba(15, 15, 15, 0.8);
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 215, 0);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 215, 0);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "EB Garamond", Georgia, serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "EB Garamond", Georgia, serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(208, 208, 208);
  text-decoration: line-through rgb(208, 208, 208);
  text-decoration-color: rgb(208, 208, 208);
}

body input[type=checkbox] {
  border-bottom-color: rgb(42, 42, 42);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(95, 158, 160);
  border-left-color: rgb(95, 158, 160);
  border-right-color: rgb(95, 158, 160);
  border-top-color: rgb(95, 158, 160);
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(255, 215, 0);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(255, 215, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(255, 215, 0);
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(26, 35, 50);
  font-family: "EB Garamond", Georgia, serif;
}

body a.internal.tag-link::before {
  color: rgb(204, 153, 255);
}

body h1 {
  color: rgb(205, 145, 158);
  font-family: "EB Garamond", Georgia, serif;
}

body h2 {
  color: rgb(218, 165, 32);
  font-family: "EB Garamond", Georgia, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(205, 145, 158);
  font-family: "EB Garamond", Georgia, serif;
}

body h3 {
  color: rgb(143, 188, 143);
  font-family: "EB Garamond", Georgia, serif;
}

body h4 {
  color: rgb(95, 158, 160);
  font-family: "EB Garamond", Georgia, serif;
}

body h5 {
  color: rgb(147, 112, 219);
  font-family: "EB Garamond", Georgia, serif;
}

body h6 {
  color: rgb(205, 133, 63);
  font-family: "EB Garamond", Georgia, serif;
}

body hr {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}

body ::-webkit-scrollbar-corner {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}

body ::-webkit-scrollbar-track {
  background: rgba(10, 10, 10, 0.8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 10, 10, 0.8);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  font-weight: 500;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
  text-decoration: rgb(208, 208, 208);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(218, 165, 32, 0.5);
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
  color: rgb(204, 153, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}`,
    footer: `body footer {
  background-color: rgba(18, 18, 18, 0.8);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(64, 64, 64);
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}

body footer ul li a {
  color: rgb(208, 208, 208);
  text-decoration: rgb(208, 208, 208);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
  font-weight: 700;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(208, 208, 208);
  text-decoration: rgb(208, 208, 208);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(208, 208, 208);
  text-decoration: rgb(208, 208, 208);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}

body .darkmode svg {
  color: rgb(208, 208, 208);
  stroke: rgb(208, 208, 208);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}

body .breadcrumb-element p {
  color: rgb(160, 160, 160);
  font-family: "EB Garamond", Georgia, serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}

body .metadata-properties {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
  font-family: "EB Garamond", Georgia, serif;
}

body .navigation-progress {
  background-color: rgba(18, 18, 18, 0.8);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "EB Garamond", Georgia, serif;
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
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

body kbd {
  background-color: rgba(15, 15, 15, 0.8);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "Courier New", monospace;
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-accent: #ffffff;
  --background-modifier-border: #dadce0;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #f8d7da;
  --background-modifier-error-hover: #f5c6cb;
  --background-modifier-error-rgb: 248, 215, 218;
  --background-modifier-form-field-highlighted: #f8f9fa;
  --background-modifier-success: #d4edda;
  --background-opacity: 0.8;
  --background-primary-alt: #f8f9fa;
  --background-primary-rgb: 255, 255, 255;
  --background-secondary: #f1f3f4;
  --background-secondary-alt: #e8eaed;
  --background-secondary-rgb: 248, 249, 250;
  --bases-cards-cover-background: #f8f9fa;
  --bases-cards-shadow: 0 0 0 1px #dadce0;
  --bases-embed-border-color: #dadce0;
  --bases-embed-border-radius: 4px;
  --bases-group-heading-property-color: #5f6368;
  --bases-table-cell-background-disabled: #f8f9fa;
  --bases-table-cell-shadow-focus: 0 0 0 2px #1a73e8;
  --bases-table-container-border-radius: 4px;
  --bases-table-group-background: #f8f9fa;
  --bases-table-header-color: #5f6368;
  --blockquote-border-color: #1a73e8;
  --blur-intensity: 20px;
  --border-color: #dadce0;
  --border-color-focus: #9aa0a6;
  --border-color-hover: #bdc1c6;
  --border-radius: 8px;
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
  --canvas-card-label-color: #9aa0a6;
  --canvas-controls-radius: 4px;
  --card-color: #ffffff;
  --caret-color: #202124;
  --checkbox-border-color: #9aa0a6;
  --checkbox-border-color-hover: #5f6368;
  --checkbox-color: #1a73e8;
  --checkbox-color-hover: #1557b0;
  --checkbox-radius: 4px;
  --checklist-done-color: #5f6368;
  --clickable-icon-radius: 4px;
  --code-background: #f8f9fa;
  --code-border-color: #dadce0;
  --code-comment: #9aa0a6;
  --code-normal: #202124;
  --code-punctuation: #5f6368;
  --code-radius: 4px;
  --collapse-icon-color: #9aa0a6;
  --collapse-icon-color-collapsed: #cc99ff;
  --divider-color: #e8eaed;
  --divider-color-hover: #dadce0;
  --dropdown-background: #f8f9fa;
  --dropdown-background-hover: #f1f3f4;
  --embed-block-shadow-hover: 0 0 0 1px #dadce0, inset 0 0 0 1px #dadce0;
  --embed-border-start: 2px solid #1a73e8;
  --file-header-font: 'EB Garamond', Georgia, serif;
  --flair-background: #f8f9fa;
  --flair-color: #202124;
  --font-interface: 'EB Garamond', Georgia, serif;
  --font-mermaid: 'EB Garamond', Georgia, serif;
  --font-monospace: 'Courier New', monospace;
  --font-size: 16px;
  --font-text: 'EB Garamond', Georgia, serif;
  --footnote-divider-color: #dadce0;
  --footnote-id-color: #5f6368;
  --footnote-id-color-no-occurrences: #9aa0a6;
  --footnote-radius: 4px;
  --graph-node: #5f6368;
  --graph-node-focused: #cc99ff;
  --graph-node-unresolved: #9aa0a6;
  --graph-text: #202124;
  --h1-color: #8b0000;
  --h2-color: #b8860b;
  --h3-color: #2e8b57;
  --h4-color: #4682b4;
  --h5-color: #9932cc;
  --h6-color: #696969;
  --heading-formatting: #9aa0a6;
  --highlight-blue: #bbdefb;
  --highlight-green: #c8e6c9;
  --highlight-pink: #f8bbd9;
  --highlight-purple: #e1bee7;
  --highlight-yellow: #fff59d;
  --hr-color: #dadce0;
  --icon-color: #5f6368;
  --icon-color-active: #cc99ff;
  --icon-color-focused: #202124;
  --icon-color-hover: #5f6368;
  --inline-title-color: #8b0000;
  --input-color: #f8f9fa;
  --input-date-separator: #9aa0a6;
  --input-placeholder-color: #9aa0a6;
  --interactive-accent: #1a73e8;
  --interactive-accent-hover: #1557b0;
  --interactive-hover: #f1f3f4;
  --interactive-normal: #f8f9fa;
  --interactive-success: #137333;
  --italic-color: #8b4513;
  --line-height: 1.6;
  --link-color: #cc99ff;
  --link-color-hover: #99c2ff;
  --link-external-color: #cc99ff;
  --link-external-color-hover: #99c2ff;
  --link-unresolved-color: #cc99ff;
  --list-marker-color: #9aa0a6;
  --list-marker-color-collapsed: #cc99ff;
  --list-marker-color-hover: #5f6368;
  --menu-background: #f1f3f4;
  --metadata-border-color: #dadce0;
  --metadata-divider-color: #dadce0;
  --metadata-input-font: 'EB Garamond', Georgia, serif;
  --metadata-input-text-color: #202124;
  --metadata-label-font: 'EB Garamond', Georgia, serif;
  --metadata-label-text-color: #5f6368;
  --metadata-label-text-color-hover: #5f6368;
  --mica-effect: 1;
  --modal-radius: 10.08px;
  --nav-collapse-icon-color: #9aa0a6;
  --nav-collapse-icon-color-collapsed: #9aa0a6;
  --nav-heading-color: #202124;
  --nav-heading-color-collapsed: #9aa0a6;
  --nav-heading-color-collapsed-hover: #5f6368;
  --nav-heading-color-hover: #202124;
  --nav-item-color: #5f6368;
  --nav-item-color-active: #202124;
  --nav-item-color-highlighted: #cc99ff;
  --nav-item-color-hover: #202124;
  --nav-item-color-selected: #202124;
  --nav-item-radius: 4px;
  --nav-tag-color: #9aa0a6;
  --nav-tag-color-active: #5f6368;
  --nav-tag-color-hover: #5f6368;
  --nav-tag-radius: 4px;
  --pill-border-color: #dadce0;
  --pill-color: #5f6368;
  --pill-color-hover: #202124;
  --pill-color-remove: #9aa0a6;
  --pill-color-remove-hover: #cc99ff;
  --radius-l: 10.08px;
  --radius-s: 4px;
  --radius-xl: 16px;
  --ribbon-background: #f1f3f4;
  --scrollbar-radius: 10.08px;
  --search-clear-button-color: #5f6368;
  --search-icon-color: #5f6368;
  --select-color: #ffffff;
  --setting-group-heading-color: #202124;
  --setting-items-background: #f8f9fa;
  --setting-items-border-color: #dadce0;
  --setting-items-radius: 10.08px;
  --slider-track-background: #dadce0;
  --status-bar-background: #f1f3f4;
  --status-bar-border-color: #e8eaed;
  --status-bar-text-color: #5f6368;
  --tab-container-background: #f1f3f4;
  --tab-outline-color: #e8eaed;
  --tab-radius: 4px;
  --tab-switcher-background: #f1f3f4;
  --tab-switcher-menubar-background: linear-gradient(to top, #f1f3f4, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-text-color: #9aa0a6;
  --tab-text-color-active: #5f6368;
  --tab-text-color-focused: #5f6368;
  --tab-text-color-focused-active: #5f6368;
  --tab-text-color-focused-active-current: #202124;
  --tab-text-color-focused-highlighted: #cc99ff;
  --table-add-button-border-color: #dadce0;
  --table-drag-handle-background-active: #1a73e8;
  --table-drag-handle-color: #9aa0a6;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: #f5f5f5;
  --table-header-color: #202124;
  --table-row-even: #fafafa;
  --table-row-odd: #ffffff;
  --table-selection-border-color: #1a73e8;
  --tag-background: #e8f0fe;
  --tag-border: #bbdefb;
  --tag-color: #cc99ff;
  --tag-color-hover: #cc99ff;
  --tag-text: #1565c0;
  --text-accent: #cc99ff;
  --text-accent-hover: #99c2ff;
  --text-error: #d93025;
  --text-faint: #9aa0a6;
  --text-muted: #5f6368;
  --text-normal: #202124;
  --text-on-accent: #ffffff;
  --text-success: #137333;
  --text-warning: #f9ab00;
  --titlebar-background: #f1f3f4;
  --titlebar-background-focused: #e8eaed;
  --titlebar-border-color: #dadce0;
  --titlebar-text-color: #5f6368;
  --titlebar-text-color-focused: #202124;
  --vault-profile-color: #202124;
  --vault-profile-color-hover: #202124;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(241, 243, 244);
  color: rgb(32, 33, 36);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(32, 33, 36);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(241, 243, 244);
  color: rgb(32, 33, 36);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(232, 234, 237);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(241, 243, 244);
  border-left-color: rgb(232, 234, 237);
  color: rgb(32, 33, 36);
}

body div#quartz-root {
  color: rgb(32, 33, 36);
}`,
    typography: `body .page article p > b, b {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .page article p > em, em {
  color: rgb(139, 69, 19);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(139, 69, 19) none 0px;
  text-decoration: rgb(139, 69, 19);
  text-decoration-color: rgb(139, 69, 19);
}

body .page article p > i, i {
  color: rgb(139, 69, 19);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(139, 69, 19) none 0px;
  text-decoration: rgb(139, 69, 19);
  text-decoration-color: rgb(139, 69, 19);
}

body .page article p > strong, strong {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .text-highlight {
  background-color: rgb(255, 245, 157);
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body del {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: line-through rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body p {
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(95, 99, 104) none 0px;
  text-decoration: rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}`,
    links: `body a.external, footer a {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
  text-decoration: underline rgb(204, 153, 255);
  text-decoration-color: rgb(204, 153, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
  text-decoration: underline rgb(204, 153, 255);
  text-decoration-color: rgb(204, 153, 255);
}

body a.internal.broken {
  color: rgb(204, 153, 255);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(204, 153, 255) none 0px;
}`,
    lists: `body dd {
  color: rgb(32, 33, 36);
}

body dt {
  color: rgb(32, 33, 36);
}

body ol > li {
  color: rgb(32, 33, 36);
}

body ol.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body ul > li {
  color: rgb(32, 33, 36);
}

body ul.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(154, 160, 166);
  text-decoration: rgb(154, 160, 166);
}

body blockquote {
  font-family: "EB Garamond", Georgia, serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body table {
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

body td {
  color: rgb(32, 33, 36);
}

body th {
  background-color: rgb(255, 255, 255);
  color: rgb(32, 33, 36);
}

body thead {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body tr {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body figcaption {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
}

body figure {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body img {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body video {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    embeds: `body .file-embed {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
}

body .footnotes {
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

body .transclude {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(26, 115, 232);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body .transclude-inner {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(26, 115, 232);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "EB Garamond", Georgia, serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "EB Garamond", Georgia, serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body input[type=checkbox] {
  border-bottom-color: rgb(154, 160, 166);
  border-left-color: rgb(154, 160, 166);
  border-right-color: rgb(154, 160, 166);
  border-top-color: rgb(154, 160, 166);
}

body li.task-list-item[data-task='!'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='*'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='-'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='/'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='>'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='?'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='I'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='S'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='b'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='c'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='d'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='f'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='i'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='k'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='l'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='p'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='u'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body li.task-list-item[data-task='w'] {
  color: rgb(32, 33, 36);
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}`,
    callouts: `body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

body .search > .search-container > .search-space > * {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10.08px;
  border-bottom-right-radius: 10.08px;
  border-top-left-radius: 10.08px;
  border-top-right-radius: 10.08px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(26, 115, 232);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(26, 115, 232);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(232, 240, 254);
  font-family: "EB Garamond", Georgia, serif;
}

body a.internal.tag-link::before {
  color: rgb(204, 153, 255);
}

body h1 {
  color: rgb(139, 0, 0);
  font-family: "EB Garamond", Georgia, serif;
}

body h2 {
  color: rgb(184, 134, 11);
  font-family: "EB Garamond", Georgia, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(139, 0, 0);
  font-family: "EB Garamond", Georgia, serif;
}

body h3 {
  color: rgb(46, 139, 87);
  font-family: "EB Garamond", Georgia, serif;
}

body h4 {
  color: rgb(70, 130, 180);
  font-family: "EB Garamond", Georgia, serif;
}

body h5 {
  color: rgb(153, 50, 204);
  font-family: "EB Garamond", Georgia, serif;
}

body h6 {
  color: rgb(105, 105, 105);
  font-family: "EB Garamond", Georgia, serif;
}

body hr {
  border-bottom-color: rgb(232, 234, 237);
  border-left-color: rgb(232, 234, 237);
  border-right-color: rgb(232, 234, 237);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  font-weight: 500;
  text-decoration: rgb(32, 33, 36);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  text-decoration: rgb(32, 33, 36);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
  text-decoration: rgb(95, 99, 104);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(224, 172, 0, 0.5);
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(42, 42, 42);
  border-right-color: rgb(42, 42, 42);
  border-top-color: rgb(42, 42, 42);
  color: rgb(204, 153, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}`,
    footer: `body footer {
  background-color: rgb(241, 243, 244);
  border-bottom-color: rgb(232, 234, 237);
  border-left-color: rgb(232, 234, 237);
  border-right-color: rgb(232, 234, 237);
  border-top-color: rgb(218, 220, 224);
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}

body footer ul li a {
  color: rgb(95, 99, 104);
  text-decoration: rgb(95, 99, 104);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
  font-weight: 700;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
  text-decoration: rgb(95, 99, 104);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body li.section-li > .section .meta {
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
  text-decoration: rgb(95, 99, 104);
}

body ul.section-ul {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

body .darkmode svg {
  color: rgb(95, 99, 104);
  stroke: rgb(95, 99, 104);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

body .breadcrumb-element p {
  color: rgb(154, 160, 166);
  font-family: "EB Garamond", Georgia, serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

body .metadata {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}

body .metadata-properties {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
  font-family: "EB Garamond", Georgia, serif;
}

body .navigation-progress {
  background-color: rgb(241, 243, 244);
}

body .page-header h2.page-title {
  color: rgb(32, 33, 36);
  font-family: "EB Garamond", Georgia, serif;
}

body abbr {
  color: rgb(32, 33, 36);
  text-decoration: underline dotted rgb(32, 33, 36);
}

body details {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body input[type=text] {
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

body kbd {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
  font-family: "Courier New", monospace;
}

body progress {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body sub {
  color: rgb(32, 33, 36);
}

body summary {
  color: rgb(32, 33, 36);
}

body sup {
  color: rgb(32, 33, 36);
}`,
  },
};
