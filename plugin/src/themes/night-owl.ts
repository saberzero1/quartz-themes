import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "night-owl",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #122d42;
  --background-modifier-border-focus: #82AAFF;
  --background-modifier-border-hover: #262A39;
  --background-modifier-error: rgba(239, 83, 80, 0.3);
  --background-modifier-error-hover: rgba(239, 83, 80, 0.4);
  --background-modifier-error-rgb: 239, 83, 80;
  --background-modifier-form-field: #1d3b53;
  --background-modifier-form-field-hover: #1d3b53;
  --background-modifier-message: #0b253a;
  --background-modifier-success: rgba(197, 228, 120, 0.3);
  --background-modifier-success-rgb: 197, 228, 120;
  --background-primary: #011627;
  --background-primary-alt: #0b253a;
  --background-secondary: #021320;
  --background-secondary-alt: #0b2942;
  --bases-cards-background: #011627;
  --bases-cards-cover-background: #0b253a;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #122d42;
  --bases-cards-shadow-hover: 0 0 0 1px #262A39;
  --bases-embed-border-color: #122d42;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #5f7e97;
  --bases-table-border-color: #122d42;
  --bases-table-cell-background-active: #011627;
  --bases-table-cell-background-disabled: #0b253a;
  --bases-table-cell-shadow-active: 0 0 0 2px #82AAFF;
  --bases-table-cell-shadow-focus: 0 0 0 2px #82AAFF;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #0b253a;
  --bases-table-header-background: #011627;
  --bases-table-header-color: #5f7e97;
  --bases-table-row-background-hover: #0b253a;
  --bases-table-summary-background: #011627;
  --blockquote-background-color: rgba(127, 219, 202, 0.1);
  --blockquote-border: 2px solid #7fdbca;
  --blockquote-border-color: #82AAFF;
  --blockquote-color: #d6deeb;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, #0b253a 65%, transparent) linear-gradient(#0b253a, color-mix(in srgb, #0b253a 65%, transparent));
  --bold-color: #c5e478;
  --bold-weight: 600;
  --button-active-bg: #82AAFF;
  --button-default-bg: #7e57c2cc;
  --button-default-border-color: transparent;
  --button-default-color: #ffffff;
  --button-hover-bg: #7e57c2;
  --button-radius: 0px;
  --calendar-background-hover: #0b253a;
  --calendar-hover: #0b2942;
  --calendar-today: #82AAFF;
  --calendar-week: #5f7e97;
  --callout-radius: 0px;
  --canvas-background: #011627;
  --canvas-card-label-color: #4b6479;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #262A39;
  --caret-color: #d6deeb;
  --checkbox-border: #122d42;
  --checkbox-border-color: #4b6479;
  --checkbox-border-color-hover: #5f7e97;
  --checkbox-border-hover: #82AAFF;
  --checkbox-color: #82AAFF;
  --checkbox-color-hover: #7fdbca;
  --checkbox-marker-color: #011627;
  --checkbox-radius: 0px;
  --checklist-done-color: #5f7e97;
  --clickable-icon-radius: 0px;
  --code-background: #021320;
  --code-border-color: #122d42;
  --code-comment: #637777;
  --code-function: #82AAFF;
  --code-important: #EF5350;
  --code-keyword: #c792ea;
  --code-normal: #d6deeb;
  --code-operator: #7fdbca;
  --code-property: #c5e478;
  --code-punctuation: #d6deeb;
  --code-radius: 0px;
  --code-string: #ecc48d;
  --code-tag: #caece6;
  --code-value: #F78C6C;
  --collapse-icon-color: #4b6479;
  --collapse-icon-color-collapsed: #82AAFF;
  --color-accent: #82AAFF;
  --color-accent-1: #c792ea;
  --color-accent-2: #7fdbca;
  --color-base-00: #011627;
  --color-base-05: #0b253a;
  --color-base-10: #021320;
  --color-base-100: #ffffff;
  --color-base-20: #122d42;
  --color-base-25: #1d3b53;
  --color-base-30: #262A39;
  --color-base-35: #2C3043;
  --color-base-40: #4b6479;
  --color-base-50: #5f7e97;
  --color-base-60: #89a4bb;
  --color-base-70: #d6deeb;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #122d42;
  --divider-color-hover: #262A39;
  --dropdown-background: #0b253a;
  --dropdown-background-hover: #0b2942;
  --embed-background: #0b253a;
  --embed-block-shadow-hover: 0 0 0 1px #122d42, inset 0 0 0 1px #122d42;
  --embed-border-left: 2px solid #82AAFF;
  --embed-border-right: none;
  --embed-border-start: 2px solid #82AAFF;
  --embed-font-style: italic;
  --embed-padding: 0 0 0 20px;
  --file-header-background: #011627;
  --file-header-background-focused: #011627;
  --file-header-font-weight: 600;
  --file-margins: 44px;
  --flair-background: #0b253a;
  --flair-color: #d6deeb;
  --footnote-divider-color: #122d42;
  --footnote-id-color: #5f7e97;
  --footnote-id-color-no-occurrences: #4b6479;
  --footnote-radius: 0px;
  --graph-line: #122d42;
  --graph-node: #82AAFF;
  --graph-node-attachment: #F78C6C;
  --graph-node-focused: #7fdbca;
  --graph-node-tag: #c5e478;
  --graph-node-unresolved: #5f7e97;
  --graph-text: #d6deeb;
  --gray: var(--text-muted);
  --h1-color: #82AAFF;
  --h1-size: 1.875em;
  --h1-weight: 600;
  --h2-color: #7fdbca;
  --h2-size: 1.5em;
  --h2-weight: 600;
  --h3-color: #c5e478;
  --h3-line-height: 1.2;
  --h3-size: 1.25em;
  --h3-weight: 600;
  --h4-color: #ecc48d;
  --h4-line-height: 1.2;
  --h4-size: 1.125em;
  --h4-weight: 600;
  --h5-color: #F78C6C;
  --h5-line-height: 1.2;
  --h5-size: 1em;
  --h5-weight: 600;
  --h6-color: #c792ea;
  --h6-line-height: 1.2;
  --heading-formatting: #4b6479;
  --highlight: var(--text-highlight-bg);
  --highlight-background: rgba(255, 235, 149, 0.4);
  --highlight-background-hover: rgba(255, 235, 149, 0.6);
  --hr-color: #122d42;
  --icon-color: #5f7e97;
  --icon-color-active: #82AAFF;
  --icon-color-focused: #82AAFF;
  --icon-color-hover: #d6deeb;
  --indentation-guide-color: rgba(94, 129, 206, 0.32);
  --indentation-guide-color-active: #7E97AC;
  --inline-title-color: #82AAFF;
  --inline-title-size: 1.875em;
  --inline-title-weight: 600;
  --input-bg: #0b253a;
  --input-border-color: #5f7e97;
  --input-date-separator: #4b6479;
  --input-placeholder-color: #5f7e97;
  --input-radius: 0px;
  --input-text-color: #ffffff;
  --interactive-accent: #82AAFF;
  --interactive-accent-hover: #7fdbca;
  --interactive-hover: #0b2942;
  --interactive-normal: #0b253a;
  --interactive-success: #c5e478;
  --italic-color: #c792ea;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #7fdbca;
  --link-color-hover: #82AAFF;
  --link-external-color: #ff869a;
  --link-external-color-hover: #EF5350;
  --link-unresolved-color: #5f7e97;
  --link-unresolved-decoration-color: #5f7e97;
  --list-indent: 2em;
  --list-marker-color: #7fdbca;
  --list-marker-color-collapsed: #5f7e97;
  --list-marker-color-hover: #82AAFF;
  --menu-background: #011627;
  --menu-border: #122d42;
  --menu-border-color: #262A39;
  --menu-item-background-active: #1d3b53;
  --menu-item-background-hover: #0b2942;
  --menu-item-color: #d6deeb;
  --menu-item-color-hover: #ffffff;
  --menu-radius: 0px;
  --metadata-border-color: #122d42;
  --metadata-divider-color: #122d42;
  --metadata-input-text-color: #d6deeb;
  --metadata-label-text-color: #5f7e97;
  --metadata-label-text-color-hover: #5f7e97;
  --metadata-property-box-shadow-focus: 0 0 0 2px #82AAFF;
  --metadata-property-box-shadow-hover: 0 0 0 1px #262A39;
  --modal-backdrop: rgba(1, 22, 39, 0.8);
  --modal-background: #011627;
  --modal-border: #122d42;
  --modal-border-color: #4b6479;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #5f7e97;
  --nav-collapse-icon-color-collapsed: #5f7e97;
  --nav-heading-color: #d6deeb;
  --nav-heading-color-collapsed: #4b6479;
  --nav-heading-color-collapsed-hover: #5f7e97;
  --nav-heading-color-hover: #d6deeb;
  --nav-indentation-guide-color: rgba(94, 129, 206, 0.32);
  --nav-item-background-active: #1d3b53;
  --nav-item-background-hover: #0b2942;
  --nav-item-background-selected: #0b2942;
  --nav-item-color: #5f7e97;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #82AAFF;
  --nav-item-color-hover: #d6deeb;
  --nav-item-color-selected: #ffffff;
  --nav-item-radius: 0px;
  --nav-item-weight-active: normal;
  --nav-item-weight-hover: normal;
  --nav-tag-color: #4b6479;
  --nav-tag-color-active: #5f7e97;
  --nav-tag-color-hover: #5f7e97;
  --nav-tag-radius: 0px;
  --night-owl-accent-blue: #82AAFF;
  --night-owl-accent-cyan: #7fdbca;
  --night-owl-accent-green: #c5e478;
  --night-owl-accent-orange: #F78C6C;
  --night-owl-accent-pink: #ff5874;
  --night-owl-accent-purple: #c792ea;
  --night-owl-accent-red: #EF5350;
  --night-owl-accent-yellow: #ecc48d;
  --night-owl-bg-primary: #011627;
  --night-owl-bg-secondary: #0b253a;
  --night-owl-bg-tab-active: #0b2942;
  --night-owl-bg-tab-inactive: #01111d;
  --night-owl-bg-tertiary: #021320;
  --night-owl-border: #122d42;
  --night-owl-border-secondary: #262A39;
  --night-owl-button-bg: #7e57c2cc;
  --night-owl-button-hover: #7e57c2;
  --night-owl-highlight: #5f7e9779;
  --night-owl-selection: #1d3b53;
  --night-owl-text-accent: #82AAFF;
  --night-owl-text-bright: #ffffff;
  --night-owl-text-muted: #4b6479;
  --night-owl-text-primary: #d6deeb;
  --night-owl-text-secondary: #5f7e97;
  --pdf-background: #011627;
  --pdf-page-background: #011627;
  --pdf-shadow: 0 0 0 1px #122d42;
  --pdf-sidebar-background: #011627;
  --pdf-thumbnail-shadow: 0 0 0 1px #122d42;
  --pill-border-color: #122d42;
  --pill-border-color-hover: #262A39;
  --pill-color: #5f7e97;
  --pill-color-hover: #d6deeb;
  --pill-color-remove: #4b6479;
  --pill-color-remove-hover: #82AAFF;
  --progress-bar-bg: #0b253a;
  --progress-bar-fill: #82AAFF;
  --prompt-background: #011627;
  --prompt-border-color: #4b6479;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #0b253a 65%, transparent) linear-gradient(#0b253a, color-mix(in srgb, #0b253a 65%, transparent));
  --ribbon-background: #011627;
  --ribbon-background-collapsed: #011627;
  --scrollbar-active-thumb-bg: rgba(8, 77, 129, 0.5);
  --scrollbar-bg: transparent;
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: rgba(8, 77, 129, 0.3);
  --search-clear-button-color: #5f7e97;
  --search-clear-button-color-hover: #d6deeb;
  --search-icon-color: #5f7e97;
  --search-icon-color-active: #82AAFF;
  --search-result-background: #0b253a;
  --search-text-clear: #5f7e97;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d6deeb;
  --setting-items-background: #0b253a;
  --setting-items-border-color: #122d42;
  --setting-items-radius: 0px;
  --slider-thumb-border-color: #262A39;
  --slider-thumb-radius: 0px;
  --slider-track-background: #122d42;
  --status-bar-background: #011627;
  --status-bar-border: #262A39;
  --status-bar-border-color: #122d42;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text: #5f7e97;
  --status-bar-text-color: #5f7e97;
  --suggestion-background: #011627;
  --syntax-highlighting-attribute: #c5e478;
  --syntax-highlighting-class: #ffcb8b;
  --syntax-highlighting-comment: #637777;
  --syntax-highlighting-constant: #82AAFF;
  --syntax-highlighting-function: #82AAFF;
  --syntax-highlighting-keyword: #c792ea;
  --syntax-highlighting-number: #F78C6C;
  --syntax-highlighting-operator: #7fdbca;
  --syntax-highlighting-string: #ecc48d;
  --syntax-highlighting-tag: #caece6;
  --syntax-highlighting-variable: #c5e478;
  --tab-background-active: #0b2942;
  --tab-container-background: #021320;
  --tab-divider-color: #262A39;
  --tab-outline-color: #262A39;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #021320;
  --tab-switcher-menubar-background: linear-gradient(to top, #021320, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #82AAFF;
  --tab-text-color: #4b6479;
  --tab-text-color-active: #d2dee7;
  --tab-text-color-focused: #5f7e97;
  --tab-text-color-focused-active: #5f7e97;
  --tab-text-color-focused-active-current: #d6deeb;
  --tab-text-color-focused-highlighted: #82AAFF;
  --tab-text-color-inactive: #5f7e97;
  --table-add-button-border-color: #122d42;
  --table-background: #011627;
  --table-border-color: #122d42;
  --table-column-alt-background: rgba(95, 126, 151, 0.05);
  --table-drag-handle-background-active: #82AAFF;
  --table-drag-handle-color: #4b6479;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: #0b253a;
  --table-header-background-hover: #0b2942;
  --table-header-border-color: #122d42;
  --table-header-color: #d6deeb;
  --table-header-font-size: 0.875em;
  --table-header-font-weight: 600;
  --table-row-alt-background: rgba(95, 126, 151, 0.05);
  --table-row-alt-background-hover: #011627;
  --table-row-background-hover: #0b253a;
  --table-selection-border-color: #82AAFF;
  --table-text-color: #d6deeb;
  --tag-background: #0b253a;
  --tag-background-hover: #0b2942;
  --tag-border: #122d42;
  --tag-color: #7fdbca;
  --tag-color-hover: #82AAFF;
  --tertiary: var(--text-accent-hover);
  --text-accent: #82AAFF;
  --text-accent-hover: #7fdbca;
  --text-error: #EF5350;
  --text-faint: #4b6479;
  --text-highlight-bg: #5f7e9779;
  --text-muted: #5f7e97;
  --text-normal: #d6deeb;
  --text-on-accent: #ffffff;
  --text-selection: #1d3b53;
  --text-success: #c5e478;
  --text-warning: #FFCA28;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #011627;
  --titlebar-background-focused: #011627;
  --titlebar-border: #262A39;
  --titlebar-border-color: #122d42;
  --titlebar-text: #eeefff;
  --titlebar-text-color: #5f7e97;
  --titlebar-text-color-focused: #d6deeb;
  --titlebar-text-weight: normal;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --tooltip-bg: #021320;
  --tooltip-border: #122d42;
  --tooltip-color: #d6deeb;
  --vault-name-color: #5f7e97;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #d6deeb;
  --vault-profile-color-hover: #d6deeb;
  --workspace-background-translucent: rgba(1, 22, 39, 0.85);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(2, 19, 32);
  color: rgb(214, 222, 235);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(1, 22, 39);
  color: rgb(214, 222, 235);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(2, 19, 32);
  color: rgb(214, 222, 235);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(18, 45, 66);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(2, 19, 32);
  border-left-color: rgb(18, 45, 66);
  color: rgb(214, 222, 235);
}

body div#quartz-root {
  background-color: rgb(1, 22, 39);
  color: rgb(214, 222, 235);
}`,
    typography: `body .page article p > b, b {
  color: rgb(197, 228, 120);
  outline: rgb(197, 228, 120) none 0px;
  text-decoration: rgb(197, 228, 120);
  text-decoration-color: rgb(197, 228, 120);
}

body .page article p > em, em {
  color: rgb(199, 146, 234);
  outline: rgb(199, 146, 234) none 0px;
  text-decoration: rgb(199, 146, 234);
  text-decoration-color: rgb(199, 146, 234);
}

body .page article p > i, i {
  color: rgb(199, 146, 234);
  outline: rgb(199, 146, 234) none 0px;
  text-decoration: rgb(199, 146, 234);
  text-decoration-color: rgb(199, 146, 234);
}

body .page article p > strong, strong {
  color: rgb(197, 228, 120);
  outline: rgb(197, 228, 120) none 0px;
  text-decoration: rgb(197, 228, 120);
  text-decoration-color: rgb(197, 228, 120);
}

body .text-highlight {
  background-color: rgba(95, 126, 151, 0.475);
  color: rgb(214, 222, 235);
  outline: rgb(214, 222, 235) none 0px;
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body del {
  color: rgb(214, 222, 235);
  outline: rgb(214, 222, 235) none 0px;
  text-decoration: line-through rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body p {
  color: rgb(95, 126, 151);
  outline: rgb(95, 126, 151) none 0px;
  text-decoration: rgb(95, 126, 151);
  text-decoration-color: rgb(95, 126, 151);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 134, 154);
  outline: rgb(255, 134, 154) none 0px;
  text-decoration: underline rgb(255, 134, 154);
  text-decoration-color: rgb(255, 134, 154);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(127, 219, 202);
  outline: rgb(127, 219, 202) none 0px;
  text-decoration: underline rgb(127, 219, 202);
  text-decoration-color: rgb(127, 219, 202);
}

body a.internal.broken {
  color: rgb(95, 126, 151);
  outline: rgb(95, 126, 151) none 0px;
  text-decoration: underline rgb(95, 126, 151);
  text-decoration-color: rgb(95, 126, 151);
}`,
    lists: `body dd {
  color: rgb(214, 222, 235);
}

body dt {
  color: rgb(214, 222, 235);
}

body ol > li {
  color: rgb(214, 222, 235);
}

body ol.overflow {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body ul > li {
  color: rgb(214, 222, 235);
}

body ul.overflow {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(75, 100, 121);
  text-decoration: rgb(75, 100, 121);
}

body blockquote {
  background-color: rgba(127, 219, 202, 0.1);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body table {
  color: rgb(214, 222, 235);
}

body tbody tr:nth-child(even) {
  background-color: rgb(1, 22, 39);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(95, 126, 151, 0.05);
}

body td {
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  color: rgb(214, 222, 235);
}

body th {
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  color: rgb(214, 222, 235);
}

body tr {
  background-color: rgb(11, 37, 58);
}`,
    code: `body code {
  border-bottom-color: rgb(214, 222, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

body pre > code > [data-line] {
  border-left-color: rgb(130, 170, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(130, 170, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(130, 170, 255);
  border-left-color: rgb(130, 170, 255);
  border-right-color: rgb(130, 170, 255);
  border-top-color: rgb(130, 170, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body figcaption {
  color: rgb(214, 222, 235);
}

body figure {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body img {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body video {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}`,
    embeds: `body .file-embed {
  background-color: rgb(11, 37, 58);
  border-bottom-color: rgb(95, 126, 151);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(214, 222, 235);
  color: rgb(214, 222, 235);
}

body .transclude {
  background-color: rgb(11, 37, 58);
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(130, 170, 255);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body .transclude-inner {
  background-color: rgb(11, 37, 58);
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(130, 170, 255);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(95, 126, 151);
  text-decoration: line-through rgb(95, 126, 151);
  text-decoration-color: rgb(95, 126, 151);
}

body input[type=checkbox] {
  border-bottom-color: rgb(75, 100, 121);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(75, 100, 121);
  border-right-color: rgb(75, 100, 121);
  border-top-color: rgb(75, 100, 121);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='*'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='-'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='>'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='?'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='I'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='S'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='b'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='c'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='d'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='f'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='i'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='k'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='l'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='p'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='u'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body li.task-list-item[data-task='w'] {
  color: rgb(214, 222, 235);
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
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
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(29, 59, 83);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

body .search > .search-container > .search-space {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(75, 100, 121);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(75, 100, 121);
  border-right-color: rgb(75, 100, 121);
  border-top-color: rgb(75, 100, 121);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(214, 222, 235);
  outline: rgb(214, 222, 235) none 0px;
  text-decoration: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(214, 222, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(214, 222, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(214, 222, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(214, 222, 235);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(75, 100, 121);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(75, 100, 121);
  border-right-color: rgb(75, 100, 121);
  border-top-color: rgb(75, 100, 121);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(2, 19, 32);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(214, 222, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(11, 37, 58);
}

body a.internal.tag-link::before {
  color: rgb(127, 219, 202);
}

body h1 {
  color: rgb(130, 170, 255);
}

body h2 {
  color: rgb(127, 219, 202);
}

body h2.page-title, h2.page-title a {
  color: rgb(130, 170, 255);
}

body h3 {
  color: rgb(197, 228, 120);
}

body h4 {
  color: rgb(236, 196, 141);
}

body h5 {
  color: rgb(247, 140, 108);
}

body h6 {
  color: rgb(199, 146, 234);
}

body hr {
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

body ::-webkit-scrollbar-corner {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

body ::-webkit-scrollbar-track {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(95, 126, 151);
  text-decoration: rgb(95, 126, 151);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(95, 126, 151);
  text-decoration: rgb(95, 126, 151);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(95, 126, 151);
  text-decoration: rgb(95, 126, 151);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(29, 59, 83);
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(95, 126, 151);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(95, 126, 151);
}`,
    footer: `body footer {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  color: rgb(95, 126, 151);
}

body footer ul li a {
  color: rgb(95, 126, 151);
  text-decoration: rgb(95, 126, 151);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(214, 222, 235);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  color: rgb(214, 222, 235);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 126, 151);
  text-decoration: rgb(95, 126, 151);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 126, 151);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body li.section-li > .section .meta {
  color: rgb(95, 126, 151);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 126, 151);
  text-decoration: rgb(95, 126, 151);
}

body ul.section-ul {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(95, 126, 151);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(95, 126, 151);
}

body .darkmode svg {
  color: rgb(95, 126, 151);
  stroke: rgb(95, 126, 151);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(95, 126, 151);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(95, 126, 151);
}

body .breadcrumb-element p {
  color: rgb(75, 100, 121);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  color: rgb(214, 222, 235);
}

body .metadata {
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  color: rgb(95, 126, 151);
}

body .metadata-properties {
  border-bottom-color: rgb(95, 126, 151);
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  color: rgb(95, 126, 151);
}

body .navigation-progress {
  background-color: rgb(1, 22, 39);
}

body .page-header h2.page-title {
  color: rgb(214, 222, 235);
}

body abbr {
  color: rgb(214, 222, 235);
  text-decoration: underline dotted rgb(214, 222, 235);
}

body details {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body input[type=text] {
  border-bottom-color: rgb(95, 126, 151);
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  color: rgb(95, 126, 151);
}

body kbd {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(214, 222, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

body progress {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

body sub {
  color: rgb(214, 222, 235);
}

body summary {
  color: rgb(214, 222, 235);
}

body sup {
  color: rgb(214, 222, 235);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --blockquote-border-color: rgb(153, 115, 247);
  --bold-weight: 600;
  --callout-title-weight: 600;
  --checkbox-color: rgb(153, 115, 247);
  --checkbox-color-hover: rgb(166, 139, 249);
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --divider-color-hover: rgb(153, 115, 247);
  --embed-border-start: 2px solid rgb(153, 115, 247);
  --graph-node-focused: rgb(138, 92, 245);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: rgb(138, 92, 245);
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --metadata-input-height: 28px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --pill-color-remove-hover: rgb(138, 92, 245);
  --secondary: var(--text-accent);
  --sidebar-markdown-font-size: 14.4px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-drag-handle-background-active: rgb(153, 115, 247);
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(153, 115, 247);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-selection: rgba(138, 92, 245, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: none solid rgb(92, 92, 92);
}`,
  },
};
