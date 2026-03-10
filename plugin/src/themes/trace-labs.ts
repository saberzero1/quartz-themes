import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "trace-labs", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 212;
  --accent-h-theme: 212;
  --accent-l: 67%;
  --accent-l-theme: 67%;
  --accent-s: 100%;
  --accent-s-theme: 100%;
  --background-modifier-active-hover: rgba(87, 165, 255, 0.15);
  --background-modifier-border: #30363d;
  --background-modifier-border-focus: rgb(87, 165, 255);
  --background-modifier-border-hover: #30363d;
  --background-modifier-error: #F47067;
  --background-modifier-error-hover: #F47067;
  --background-modifier-error-rgb: 248, 81, 73;
  --background-modifier-form-field: #010409;
  --background-modifier-form-field-hover: #010409;
  --background-modifier-hover: rgba(177, 186, 196, 0.12);
  --background-modifier-hover-alpha: 0.12;
  --background-modifier-success: #7ee787;
  --background-modifier-success-rgb: 126, 231, 135;
  --background-primary: #1d1b1b;
  --background-primary-alt: #161b22;
  --background-secondary: #0f0909;
  --background-secondary-alt: #010409;
  --bases-cards-background: #1d1b1b;
  --bases-cards-cover-background: #161b22;
  --bases-cards-shadow: 0 0 0 1px #30363d;
  --bases-cards-shadow-hover: 0 0 0 1px #30363d;
  --bases-embed-border-color: #30363d;
  --bases-group-heading-property-color: #8b949e;
  --bases-group-heading-value-weight: 700;
  --bases-table-border-color: #30363d;
  --bases-table-cell-background-active: #1d1b1b;
  --bases-table-cell-background-disabled: #161b22;
  --bases-table-cell-background-selected: rgba(87, 165, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(87, 165, 255);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(87, 165, 255);
  --bases-table-group-background: #161b22;
  --bases-table-header-background: #1d1b1b;
  --bases-table-header-background-hover: rgba(177, 186, 196, 0.12);
  --bases-table-header-color: #8b949e;
  --bases-table-summary-background: #1d1b1b;
  --bases-table-summary-background-hover: rgba(177, 186, 196, 0.12);
  --blockquote-border-color: rgb(87, 165, 255);
  --blur-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent));
  --bold-color: #d400ff;
  --bold-weight: 700;
  --callout-bug: 248, 81, 73;
  --callout-error: 248, 81, 73;
  --callout-fail: 248, 81, 73;
  --callout-question: 224, 222, 113;
  --callout-success: 126, 231, 135;
  --canvas-background: #1d1b1b;
  --canvas-card-label-color: #6e7681;
  --canvas-color-1: 248, 81, 73;
  --canvas-color-4: 126, 231, 135;
  --canvas-dot-pattern: #30363d;
  --caret-color: #ffffff;
  --checkbox-border-color: #6e7681;
  --checkbox-border-color-hover: #8b949e;
  --checkbox-color: rgb(87, 165, 255);
  --checkbox-color-hover: rgb(66, 154, 255);
  --checkbox-marker-color: #1d1b1b;
  --checklist-done-color: #8b949e;
  --code-background: #161b22;
  --code-border-color: #30363d;
  --code-bracket-background: rgba(177, 186, 196, 0.12);
  --code-comment: #6e7681;
  --code-function: #FFA657;
  --code-important: #FFA657;
  --code-keyword: #F47067;
  --code-normal: #8b949e;
  --code-operator: #F47067;
  --code-property: #00ffff;
  --code-punctuation: #8b949e;
  --code-string: #A5D6FF;
  --code-tag: #F47067;
  --code-value: #D2A8FF;
  --collapse-icon-color: #6e7681;
  --collapse-icon-color-collapsed: rgb(66, 154, 255);
  --color-accent: rgb(87, 165, 255);
  --color-accent-1: rgb(66, 154, 255);
  --color-accent-2: rgb(107, 176, 255);
  --color-accent-hsl: 212, 100%, 67%;
  --color-base-00: #0d1117;
  --color-base-10: #161b22;
  --color-base-100: #ffffff;
  --color-base-20: #161b22;
  --color-base-25: #010409;
  --color-base-30: #30363d;
  --color-base-35: #21262d;
  --color-base-40: #30363d;
  --color-base-50: #6e7681;
  --color-base-60: #999;
  --color-base-70: #8b949e;
  --color-blue: #00ffff;
  --color-btn-primary-bg: #238636;
  --color-btn-primary-hover-bg: #2ea043;
  --color-cyan: #A5D6FF;
  --color-green: #7ee787;
  --color-green-rgb: 126, 231, 135;
  --color-orange: #FFA657;
  --color-pink: #f778ba;
  --color-purple: #D2A8FF;
  --color-red: #F47067;
  --color-red-rgb: 248, 81, 73;
  --color-tlgreen: #84EDB5;
  --color-yellow: #d29922;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #30363d;
  --divider-color-hover: rgb(87, 165, 255);
  --dropdown-background: #30363d;
  --dropdown-background-hover: #21262d;
  --embed-block-shadow-hover: 0 0 0 1px #30363d,
        inset 0 0 0 1px #30363d;
  --embed-border-left: 2px solid rgb(87, 165, 255);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(87, 165, 255);
  --file-header-background: #1d1b1b;
  --file-header-background-focused: #1d1b1b;
  --file-margins: 32px;
  --flair-background: #30363d;
  --flair-color: #ffffff;
  --font-semibold: 700;
  --footnote-divider-color: #30363d;
  --footnote-id-color: #8b949e;
  --footnote-id-color-no-occurrences: #6e7681;
  --footnote-input-background-active: rgba(177, 186, 196, 0.12);
  --graph-line: #21262d;
  --graph-node: #84EDB5;
  --graph-node-attachment: #d29922;
  --graph-node-focused: rgb(66, 154, 255);
  --graph-node-tag: #7ee787;
  --graph-node-unresolved: #6e7681;
  --graph-text: #ffffff;
  --gray: var(--text-muted);
  --h-color-theme: #7ee787;
  --h1-color: #84EDB5;
  --h1-color-theme: #84EDB5;
  --h1-size: 3.5em;
  --h2-color: #84EDB5;
  --h2-color-theme: #84EDB5;
  --h2-size: 3.0em;
  --h2-weight: 600;
  --h3-color: #84EDB5;
  --h3-color-theme: #84EDB5;
  --h3-size: 2.0em;
  --h3-weight: 600;
  --h4-color: #84EDB5;
  --h4-color-theme: #84EDB5;
  --h4-size: 1.0em;
  --h4-weight: 600;
  --h5-color: #84EDB5;
  --h5-color-theme: #84EDB5;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-color: #84EDB5;
  --h6-color-theme: #84EDB5;
  --h6-size: 1.12em;
  --heading-formatting: #6e7681;
  --highlight: var(--background-modifier-hover);
  --hr-color: #30363d;
  --icon-color: #8b949e;
  --icon-color-active: rgb(66, 154, 255);
  --icon-color-focused: #ffffff;
  --icon-color-hover: #8b949e;
  --inline-code-background: #6e768166;
  --inline-title-color: #84EDB5;
  --inline-title-size: 3.5em;
  --input-date-separator: #6e7681;
  --input-placeholder-color: #6e7681;
  --input-shadow: inset 0 0 0 1px #f0f6fc1a;
  --input-shadow-hover: inset 0 0 0 1px #8b949e;
  --interactive-accent: rgb(87, 165, 255);
  --interactive-accent-hover: rgb(66, 154, 255);
  --interactive-accent-hsl: 212, 100%, 67%;
  --interactive-hover: #21262d;
  --interactive-normal: #30363d;
  --italic-color: #ffd900;
  --kanban-background: #1d1b1b;
  --kanban-item-background: #161b22;
  --kanban-lane-background: #010409;
  --kanban-lane-border: #21262d;
  --kanban-lane-count: #21262d;
  --kanban-options-btn: #30363d;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #00ffff;
  --link-color-hover: #84EDB5;
  --link-decoration: none;
  --link-external-color: #00ffff;
  --link-external-color-hover: rgb(107, 176, 255);
  --link-external-decoration: none;
  --link-unresolved-color: #00ffff;
  --link-unresolved-decoration-color: rgba(87, 165, 255, 0.3);
  --list-bullet-size: 7px;
  --list-indent: 3em;
  --list-marker-color: #84EDB5;
  --list-marker-color-collapsed: rgb(66, 154, 255);
  --list-marker-color-hover: #8b949e;
  --menu-background: #0f0909;
  --menu-border-color: #30363d;
  --menu-shadow: none;
  --metadata-border-color: #30363d;
  --metadata-divider-color: #30363d;
  --metadata-input-background-active: rgba(177, 186, 196, 0.12);
  --metadata-input-text-color: #ffffff;
  --metadata-label-background-active: rgba(177, 186, 196, 0.12);
  --metadata-label-text-color: #8b949e;
  --metadata-label-text-color-hover: #8b949e;
  --metadata-property-background-active: rgba(177, 186, 196, 0.12);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(87, 165, 255);
  --metadata-property-box-shadow-hover: 0 0 0 1px #30363d;
  --modal-background: #1d1b1b;
  --modal-border-color: #30363d;
  --nav-collapse-icon-color: #6e7681;
  --nav-collapse-icon-color-collapsed: #6e7681;
  --nav-heading-color: #ffffff;
  --nav-heading-color-collapsed: #6e7681;
  --nav-heading-color-collapsed-hover: #8b949e;
  --nav-heading-color-hover: #ffffff;
  --nav-item-background-active: rgba(177, 186, 196, 0.12);
  --nav-item-background-hover: rgba(177, 186, 196, 0.12);
  --nav-item-background-selected: rgba(87, 165, 255, 0.2);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: #8b949e;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: rgb(107, 176, 255);
  --nav-item-color-hover: #ffffff;
  --nav-item-color-selected: #ffffff;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #6e7681;
  --nav-tag-color-active: #8b949e;
  --nav-tag-color-hover: #8b949e;
  --nav-tag-weight: 700;
  --pdf-background: #1d1b1b;
  --pdf-page-background: #1d1b1b;
  --pdf-shadow: 0 0 0 1px #30363d;
  --pdf-sidebar-background: #1d1b1b;
  --pdf-thumbnail-shadow: 0 0 0 1px #30363d;
  --pill-border-color: #30363d;
  --pill-border-color-hover: #30363d;
  --pill-color: #8b949e;
  --pill-color-hover: #ffffff;
  --pill-color-remove: #6e7681;
  --pill-color-remove-hover: rgb(66, 154, 255);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #1d1b1b;
  --prompt-border-color: #30363d;
  --raised-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent));
  --rgb-hover: 177, 186, 196;
  --ribbon-background: #0f0909;
  --ribbon-background-collapsed: #1d1b1b;
  --search-clear-button-color: #8b949e;
  --search-icon-color: #8b949e;
  --search-result-background: #1d1b1b;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #ffffff;
  --setting-group-heading-weight: 700;
  --setting-items-background: #161b22;
  --setting-items-border-color: #30363d;
  --shadow-l: none;
  --shadow-s: none;
  --slider-thumb-border-color: #30363d;
  --slider-thumb-radius: 50%;
  --slider-track-background: #30363d;
  --status-bar-background: #0f0909;
  --status-bar-border-color: #30363d;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #8b949e;
  --suggestion-background: #1d1b1b;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #F47067;
  --sync-avatar-color-2: #FFA657;
  --sync-avatar-color-3: #d29922;
  --sync-avatar-color-4: #7ee787;
  --sync-avatar-color-5: #A5D6FF;
  --sync-avatar-color-6: #00ffff;
  --sync-avatar-color-7: #D2A8FF;
  --sync-avatar-color-8: #f778ba;
  --tab-background-active: #1d1b1b;
  --tab-container-background: #0f0909;
  --tab-divider-color: #30363d;
  --tab-outline-color: #30363d;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #0f0909;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f0909, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(87, 165, 255);
  --tab-text-color: #6e7681;
  --tab-text-color-active: #8b949e;
  --tab-text-color-focused: #8b949e;
  --tab-text-color-focused-active: #8b949e;
  --tab-text-color-focused-active-current: #ffffff;
  --tab-text-color-focused-highlighted: rgb(66, 154, 255);
  --table-add-button-border-color: #30363d;
  --table-border-color: #30363d;
  --table-drag-handle-background-active: rgb(87, 165, 255);
  --table-drag-handle-color: #6e7681;
  --table-header-border-color: #30363d;
  --table-header-color: #ffffff;
  --table-header-weight: 700;
  --table-selection: rgba(87, 165, 255, 0.1);
  --table-selection-border-color: rgb(87, 165, 255);
  --table-white-space: normal;
  --tag-background: rgba(87, 165, 255, 0.1);
  --tag-background-hover: rgba(87, 165, 255, 0.2);
  --tag-border-color: rgba(87, 165, 255, 0.15);
  --tag-border-color-hover: rgba(87, 165, 255, 0.15);
  --tag-color: rgb(66, 154, 255);
  --tag-color-hover: rgb(66, 154, 255);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(66, 154, 255);
  --text-accent-hover: rgb(107, 176, 255);
  --text-error: #F47067;
  --text-faint: #6e7681;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #8b949e;
  --text-normal: #ffffff;
  --text-selection: rgba(87, 165, 255, 0.4);
  --text-success: #7ee787;
  --text-warning: #FFA657;
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #0f0909;
  --titlebar-background-focused: #010409;
  --titlebar-border-color: #30363d;
  --titlebar-text-color: #8b949e;
  --titlebar-text-color-focused: #ffffff;
  --vault-name-color: #ffffff;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #ffffff;
  --vault-profile-color-hover: #ffffff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 9, 9);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 27, 27);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 9, 9);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 54, 61);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 9, 9);
  border-left-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(29, 27, 27);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(212, 0, 255);
  outline: rgb(212, 0, 255) none 0px;
  text-decoration: rgb(212, 0, 255);
  text-decoration-color: rgb(212, 0, 255);
}

body .page article p > em, em {
  color: rgb(255, 217, 0);
  outline: rgb(255, 217, 0) none 0px;
  text-decoration: rgb(255, 217, 0);
  text-decoration-color: rgb(255, 217, 0);
}

body .page article p > i, i {
  color: rgb(255, 217, 0);
  outline: rgb(255, 217, 0) none 0px;
  text-decoration: rgb(255, 217, 0);
  text-decoration-color: rgb(255, 217, 0);
}

body .page article p > strong, strong {
  color: rgb(212, 0, 255);
  outline: rgb(212, 0, 255) none 0px;
  text-decoration: rgb(212, 0, 255);
  text-decoration-color: rgb(212, 0, 255);
}

body .text-highlight {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(139, 148, 158);
  outline: rgb(139, 148, 158) none 0px;
  text-decoration: rgb(139, 148, 158);
  text-decoration-color: rgb(139, 148, 158);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
}

body a.internal.broken {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgba(87, 165, 255, 0.3);
  text-decoration-color: rgba(87, 165, 255, 0.3);
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
  background-color: rgb(29, 27, 27);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(29, 27, 27);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  width: 241.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(15, 9, 9);
}

body td {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body th {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `body code {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 166, 87);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 166, 87);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 166, 87);
  border-left-color: rgb(255, 166, 87);
  border-right-color: rgb(255, 166, 87);
  border-top-color: rgb(255, 166, 87);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
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
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(139, 148, 158);
  text-decoration: line-through rgb(139, 148, 158);
  text-decoration-color: rgb(139, 148, 158);
}

body input[type=checkbox] {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
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
    callouts: `body .callout[data-callout="bug"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(248, 81, 73, 0.1);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-left-color: rgba(248, 81, 73, 0.25);
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(248, 81, 73, 0.1);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-left-color: rgba(248, 81, 73, 0.25);
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(248, 81, 73, 0.1);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-left-color: rgba(248, 81, 73, 0.25);
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.1);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-left-color: rgba(224, 222, 113, 0.25);
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 126, 231, 135;
  background-color: rgba(126, 231, 135, 0.1);
  border-bottom-color: rgba(126, 231, 135, 0.25);
  border-left-color: rgba(126, 231, 135, 0.25);
  border-right-color: rgba(126, 231, 135, 0.25);
  border-top-color: rgba(126, 231, 135, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(29, 27, 27);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
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
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 9, 9);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(177, 186, 196, 0.12);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(87, 165, 255, 0.1);
  border-bottom-color: rgba(87, 165, 255, 0.15);
  border-left-color: rgba(87, 165, 255, 0.15);
  border-right-color: rgba(87, 165, 255, 0.15);
  border-top-color: rgba(87, 165, 255, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(67, 155, 255);
}

body h1 {
  color: rgb(132, 237, 181);
}

body h2 {
  color: rgb(132, 237, 181);
}

body h2.page-title, h2.page-title a {
  color: rgb(132, 237, 181);
}

body h3 {
  color: rgb(132, 237, 181);
}

body h4 {
  color: rgb(132, 237, 181);
}

body h5 {
  color: rgb(132, 237, 181);
}

body h6 {
  color: rgb(132, 237, 181);
}

body hr {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(177, 186, 196, 0.12);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}`,
    footer: `body footer {
  background-color: rgb(15, 9, 9);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(139, 148, 158);
}

body footer ul li a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 148, 158);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(139, 148, 158);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body .darkmode svg {
  color: rgb(139, 148, 158);
  stroke: rgb(139, 148, 158);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body .breadcrumb-element p {
  color: rgb(110, 118, 129);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(139, 148, 158);
}

body .metadata-properties {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body .navigation-progress {
  background-color: rgb(15, 9, 9);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
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
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body kbd {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
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
  light: {},
};
