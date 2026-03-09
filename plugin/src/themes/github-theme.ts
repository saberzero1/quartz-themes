import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "github-theme",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
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
  --background-primary: #0d1117;
  --background-primary-alt: #161b22;
  --background-secondary: #161b22;
  --background-secondary-alt: #010409;
  --bases-cards-background: #0d1117;
  --bases-cards-cover-background: #161b22;
  --bases-cards-shadow: 0 0 0 1px #30363d;
  --bases-cards-shadow-hover: 0 0 0 1px #30363d;
  --bases-embed-border-color: #30363d;
  --bases-group-heading-property-color: #8b949e;
  --bases-table-border-color: #30363d;
  --bases-table-cell-background-active: #0d1117;
  --bases-table-cell-background-disabled: #161b22;
  --bases-table-cell-background-selected: rgba(87, 165, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(87, 165, 255);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(87, 165, 255);
  --bases-table-group-background: #161b22;
  --bases-table-header-background: #0d1117;
  --bases-table-header-background-hover: rgba(177, 186, 196, 0.12);
  --bases-table-header-color: #8b949e;
  --bases-table-summary-background: #0d1117;
  --bases-table-summary-background-hover: rgba(177, 186, 196, 0.12);
  --blockquote-border-color: rgb(87, 165, 255);
  --blur-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent));
  --bold-weight: 600;
  --callout-border-width: 0;
  --callout-bug: 248, 81, 73;
  --callout-error: 248, 81, 73;
  --callout-fail: 248, 81, 73;
  --callout-padding: 0 1em;
  --callout-question: 224, 222, 113;
  --callout-radius: 0;
  --callout-success: 126, 231, 135;
  --canvas-background: #0d1117;
  --canvas-card-label-color: #6e7681;
  --canvas-color-1: 248, 81, 73;
  --canvas-color-4: 126, 231, 135;
  --canvas-dot-pattern: #30363d;
  --caret-color: #c9d1d9;
  --checkbox-border-color: #6e7681;
  --checkbox-border-color-hover: #8b949e;
  --checkbox-color: rgb(87, 165, 255);
  --checkbox-color-hover: rgb(66, 154, 255);
  --checkbox-marker-color: #0d1117;
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
  --code-property: #6CB6FF;
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
  --color-base-100: #c9d1d9;
  --color-base-20: #161b22;
  --color-base-25: #010409;
  --color-base-30: #30363d;
  --color-base-35: #21262d;
  --color-base-40: #30363d;
  --color-base-50: #6e7681;
  --color-base-60: #999;
  --color-base-70: #8b949e;
  --color-blue: #6CB6FF;
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
  --color-yellow: #d29922;
  --divider-color: #30363d;
  --divider-color-hover: rgb(87, 165, 255);
  --dropdown-background: #30363d;
  --dropdown-background-hover: #21262d;
  --embed-block-shadow-hover: 0 0 0 1px #30363d,
        inset 0 0 0 1px #30363d;
  --embed-border-left: 2px solid rgb(87, 165, 255);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(87, 165, 255);
  --file-header-background: #0d1117;
  --file-header-background-focused: #0d1117;
  --file-margins: 32px;
  --flair-background: #30363d;
  --flair-color: #c9d1d9;
  --footnote-divider-color: #30363d;
  --footnote-id-color: #8b949e;
  --footnote-id-color-no-occurrences: #6e7681;
  --footnote-input-background-active: rgba(177, 186, 196, 0.12);
  --graph-line: #21262d;
  --graph-node: #8b949e;
  --graph-node-attachment: #d29922;
  --graph-node-focused: rgb(66, 154, 255);
  --graph-node-tag: #7ee787;
  --graph-node-unresolved: #6e7681;
  --graph-text: #c9d1d9;
  --h-color-theme: #7ee787;
  --h1-color: #7ee787;
  --h1-color-theme: #7ee787;
  --h1-size: 2em;
  --h2-color: #7ee787;
  --h2-color-theme: #7ee787;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-color: #7ee787;
  --h3-color-theme: #7ee787;
  --h3-size: 1.37em;
  --h3-weight: 600;
  --h4-color: #7ee787;
  --h4-color-theme: #7ee787;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-color: #7ee787;
  --h5-color-theme: #7ee787;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-color: #7ee787;
  --h6-color-theme: #7ee787;
  --h6-size: 1.12em;
  --heading-formatting: #6e7681;
  --hr-color: #30363d;
  --icon-color: #8b949e;
  --icon-color-active: rgb(66, 154, 255);
  --icon-color-focused: #c9d1d9;
  --icon-color-hover: #8b949e;
  --inline-code-background: #6e768166;
  --inline-title-color: #7ee787;
  --inline-title-size: 2em;
  --input-date-separator: #6e7681;
  --input-placeholder-color: #6e7681;
  --input-shadow: inset 0 0 0 1px #f0f6fc1a;
  --input-shadow-hover: inset 0 0 0 1px #8b949e;
  --interactive-accent: rgb(87, 165, 255);
  --interactive-accent-hover: rgb(66, 154, 255);
  --interactive-accent-hsl: 212, 100%, 67%;
  --interactive-hover: #21262d;
  --interactive-normal: #30363d;
  --kanban-background: #0d1117;
  --kanban-item-background: #161b22;
  --kanban-lane-background: #010409;
  --kanban-lane-border: #21262d;
  --kanban-lane-count: #21262d;
  --kanban-options-btn: #30363d;
  --link-color: rgb(66, 154, 255);
  --link-color-hover: rgb(107, 176, 255);
  --link-decoration: none;
  --link-external-color: rgb(66, 154, 255);
  --link-external-color-hover: rgb(107, 176, 255);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(66, 154, 255);
  --link-unresolved-decoration-color: rgba(87, 165, 255, 0.3);
  --list-bullet-size: 5px;
  --list-indent: 2em;
  --list-marker-color: #c9d1d9;
  --list-marker-color-collapsed: rgb(66, 154, 255);
  --list-marker-color-hover: #8b949e;
  --menu-background: #161b22;
  --menu-border-color: #30363d;
  --menu-shadow: none;
  --metadata-border-color: #30363d;
  --metadata-divider-color: #30363d;
  --metadata-input-background-active: rgba(177, 186, 196, 0.12);
  --metadata-input-text-color: #c9d1d9;
  --metadata-label-background-active: rgba(177, 186, 196, 0.12);
  --metadata-label-text-color: #8b949e;
  --metadata-label-text-color-hover: #8b949e;
  --metadata-property-background-active: rgba(177, 186, 196, 0.12);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(87, 165, 255);
  --metadata-property-box-shadow-hover: 0 0 0 1px #30363d;
  --modal-background: #0d1117;
  --modal-border-color: #30363d;
  --nav-collapse-icon-color: #6e7681;
  --nav-collapse-icon-color-collapsed: #6e7681;
  --nav-heading-color: #c9d1d9;
  --nav-heading-color-collapsed: #6e7681;
  --nav-heading-color-collapsed-hover: #8b949e;
  --nav-heading-color-hover: #c9d1d9;
  --nav-item-background-active: rgba(177, 186, 196, 0.12);
  --nav-item-background-hover: rgba(177, 186, 196, 0.12);
  --nav-item-background-selected: rgba(87, 165, 255, 0.2);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: #8b949e;
  --nav-item-color-active: #c9d1d9;
  --nav-item-color-highlighted: rgb(107, 176, 255);
  --nav-item-color-hover: #c9d1d9;
  --nav-item-color-selected: #c9d1d9;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #6e7681;
  --nav-tag-color-active: #8b949e;
  --nav-tag-color-hover: #8b949e;
  --pdf-background: #0d1117;
  --pdf-page-background: #0d1117;
  --pdf-shadow: 0 0 0 1px #30363d;
  --pdf-sidebar-background: #0d1117;
  --pdf-thumbnail-shadow: 0 0 0 1px #30363d;
  --pill-border-color: #30363d;
  --pill-border-color-hover: #30363d;
  --pill-color: #8b949e;
  --pill-color-hover: #c9d1d9;
  --pill-color-remove: #6e7681;
  --pill-color-remove-hover: rgb(66, 154, 255);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #0d1117;
  --prompt-border-color: #30363d;
  --raised-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent));
  --rgb-hover: 177, 186, 196;
  --ribbon-background: #161b22;
  --ribbon-background-collapsed: #0d1117;
  --search-clear-button-color: #8b949e;
  --search-icon-color: #8b949e;
  --search-result-background: #0d1117;
  --setting-group-heading-color: #c9d1d9;
  --setting-items-background: #161b22;
  --setting-items-border-color: #30363d;
  --shadow-l: none;
  --shadow-s: none;
  --slider-thumb-border-color: #30363d;
  --slider-thumb-radius: 50%;
  --slider-track-background: #30363d;
  --status-bar-background: #161b22;
  --status-bar-border-color: #30363d;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #8b949e;
  --suggestion-background: #0d1117;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #F47067;
  --sync-avatar-color-2: #FFA657;
  --sync-avatar-color-3: #d29922;
  --sync-avatar-color-4: #7ee787;
  --sync-avatar-color-5: #A5D6FF;
  --sync-avatar-color-6: #6CB6FF;
  --sync-avatar-color-7: #D2A8FF;
  --sync-avatar-color-8: #f778ba;
  --tab-background-active: #0d1117;
  --tab-container-background: #161b22;
  --tab-divider-color: #30363d;
  --tab-outline-color: #30363d;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #161b22;
  --tab-switcher-menubar-background: linear-gradient(to top, #161b22, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(87, 165, 255);
  --tab-text-color: #6e7681;
  --tab-text-color-active: #8b949e;
  --tab-text-color-focused: #8b949e;
  --tab-text-color-focused-active: #8b949e;
  --tab-text-color-focused-active-current: #c9d1d9;
  --tab-text-color-focused-highlighted: rgb(66, 154, 255);
  --table-add-button-border-color: #30363d;
  --table-border-color: #30363d;
  --table-drag-handle-background-active: rgb(87, 165, 255);
  --table-drag-handle-color: #6e7681;
  --table-header-border-color: #30363d;
  --table-header-color: #c9d1d9;
  --table-header-weight: 600;
  --table-selection: rgba(87, 165, 255, 0.1);
  --table-selection-border-color: rgb(87, 165, 255);
  --table-white-space: normal;
  --tag-background: rgba(87, 165, 255, 0.1);
  --tag-background-hover: rgba(87, 165, 255, 0.2);
  --tag-border-color: rgba(87, 165, 255, 0.15);
  --tag-border-color-hover: rgba(87, 165, 255, 0.15);
  --tag-color: rgb(66, 154, 255);
  --tag-color-hover: rgb(66, 154, 255);
  --text-accent: rgb(66, 154, 255);
  --text-accent-hover: rgb(107, 176, 255);
  --text-error: #F47067;
  --text-faint: #6e7681;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #8b949e;
  --text-normal: #c9d1d9;
  --text-selection: rgba(87, 165, 255, 0.4);
  --text-success: #7ee787;
  --text-warning: #FFA657;
  --titlebar-background: #161b22;
  --titlebar-background-focused: #010409;
  --titlebar-border-color: #30363d;
  --titlebar-text-color: #8b949e;
  --titlebar-text-color-focused: #c9d1d9;
  --vault-name-color: #c9d1d9;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #c9d1d9;
  --vault-profile-color-hover: #c9d1d9;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 54, 61);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 27, 34);
  border-left-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
}

body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}`,
    typography: `body .page article p > b, b {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .page article p > em, em {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .page article p > i, i {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .page article p > strong, strong {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .text-highlight {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body del {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: line-through rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body p {
  color: rgb(139, 148, 158);
  outline: rgb(139, 148, 158) none 0px;
  text-decoration: rgb(139, 148, 158);
  text-decoration-color: rgb(139, 148, 158);
}`,
    links: `body a.external, footer a {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration: rgb(67, 155, 255);
  text-decoration-color: rgb(67, 155, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration: rgb(67, 155, 255);
  text-decoration-color: rgb(67, 155, 255);
}

body a.internal.broken {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration: rgba(87, 165, 255, 0.3);
  text-decoration-color: rgba(87, 165, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(201, 209, 217);
}

body dt {
  color: rgb(201, 209, 217);
}

body ol > li {
  color: rgb(201, 209, 217);
}

body ol.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body ul > li {
  color: rgb(201, 209, 217);
}

body ul.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body table {
  color: rgb(201, 209, 217);
  width: 241.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(22, 27, 34);
}

body td {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
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
  color: rgb(201, 209, 217);
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
  color: rgb(201, 209, 217);
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
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body figcaption {
  color: rgb(201, 209, 217);
}

body figure {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body img {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body video {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    embeds: `body .file-embed {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
}

body .footnotes {
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .transclude {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body .transclude-inner {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
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
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='*'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='-'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='/'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='>'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='?'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='I'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='S'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='b'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='c'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='d'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='f'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='i'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='k'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='l'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='p'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='u'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='w'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  --callout-color: 126, 231, 135;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(126, 231, 135, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(126, 231, 135, 0.25);
  border-top-color: rgba(126, 231, 135, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body .search > .search-container > .search-space > * {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 27, 34);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(177, 186, 196, 0.12);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(201, 209, 217);
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
  color: rgb(126, 231, 135);
}

body h2 {
  color: rgb(126, 231, 135);
}

body h2.page-title, h2.page-title a {
  color: rgb(126, 231, 135);
}

body h3 {
  color: rgb(126, 231, 135);
}

body h4 {
  color: rgb(126, 231, 135);
}

body h5 {
  color: rgb(126, 231, 135);
}

body h6 {
  color: rgb(126, 231, 135);
}

body hr {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
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
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}`,
    footer: `body footer {
  background-color: rgb(22, 27, 34);
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
  color: rgb(201, 209, 217);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 148, 158);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body li.section-li > .section .meta {
  color: rgb(139, 148, 158);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body ul.section-ul {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
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
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
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
  background-color: rgb(22, 27, 34);
}

body .page-header h2.page-title {
  color: rgb(201, 209, 217);
}

body abbr {
  color: rgb(201, 209, 217);
  text-decoration: underline dotted rgb(201, 209, 217);
}

body details {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
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
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body sub {
  color: rgb(201, 209, 217);
}

body summary {
  color: rgb(201, 209, 217);
}

body sup {
  color: rgb(201, 209, 217);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 212;
  --accent-h-theme: 212;
  --accent-l: 45%;
  --accent-l-theme: 45%;
  --accent-s: 92%;
  --accent-s-theme: 92%;
  --background-modifier-active-hover: rgba(9, 108, 220, 0.15);
  --background-modifier-border: #d0d7de;
  --background-modifier-border-focus: rgb(9, 108, 220);
  --background-modifier-border-hover: #d0d7de;
  --background-modifier-error: #cf222e;
  --background-modifier-error-hover: #cf222e;
  --background-modifier-error-rgb: 228, 55, 75;
  --background-modifier-form-field: #f6f8fa;
  --background-modifier-form-field-hover: #f6f8fa;
  --background-modifier-hover: rgba(208, 215, 222, 0.32);
  --background-modifier-hover-alpha: 0.32;
  --background-modifier-success: #0cb54f;
  --background-modifier-success-rgb: 12, 181, 79;
  --background-primary-alt: #f6f8fa;
  --background-secondary: #f6f8fa;
  --bases-cards-cover-background: #f6f8fa;
  --bases-cards-shadow: 0 0 0 1px #d0d7de;
  --bases-cards-shadow-hover: 0 0 0 1px #d0d7de;
  --bases-embed-border-color: #d0d7de;
  --bases-group-heading-property-color: #57606a;
  --bases-table-border-color: #d0d7de;
  --bases-table-cell-background-disabled: #f6f8fa;
  --bases-table-cell-background-selected: rgba(9, 108, 220, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(9, 108, 220);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(10, 115, 235);
  --bases-table-group-background: #f6f8fa;
  --bases-table-header-background-hover: rgba(208, 215, 222, 0.32);
  --bases-table-header-color: #57606a;
  --bases-table-summary-background-hover: rgba(208, 215, 222, 0.32);
  --blockquote-border-color: rgb(10, 115, 235);
  --bold-weight: 600;
  --callout-border-width: 0;
  --callout-bug: 228, 55, 75;
  --callout-error: 228, 55, 75;
  --callout-fail: 228, 55, 75;
  --callout-padding: 0 1em;
  --callout-question: 224, 172, 0;
  --callout-radius: 0;
  --callout-success: 12, 181, 79;
  --canvas-card-label-color: #6e7781;
  --canvas-color-1: 228, 55, 75;
  --canvas-color-4: 12, 181, 79;
  --canvas-dot-pattern: #d0d7de;
  --caret-color: #24292f;
  --checkbox-border-color: #6e7781;
  --checkbox-border-color-hover: #57606a;
  --checkbox-color: rgb(10, 115, 235);
  --checkbox-color-hover: rgb(10, 120, 245);
  --checklist-done-color: #57606a;
  --code-background: #f6f8fa;
  --code-border-color: #d0d7de;
  --code-bracket-background: rgba(208, 215, 222, 0.32);
  --code-comment: #6e7781;
  --code-function: #d96c00;
  --code-important: #d96c00;
  --code-keyword: #cf222e;
  --code-normal: #57606a;
  --code-operator: #cf222e;
  --code-property: #086DDD;
  --code-punctuation: #57606a;
  --code-string: #2db7b5;
  --code-tag: #cf222e;
  --code-value: #876be0;
  --collapse-icon-color: #6e7781;
  --collapse-icon-color-collapsed: rgb(9, 108, 220);
  --color-accent: rgb(9, 108, 220);
  --color-accent-1: rgb(10, 115, 235);
  --color-accent-2: rgb(10, 120, 245);
  --color-accent-hsl: 212, 92%, 45%;
  --color-base-10: #f6f8fa;
  --color-base-100: #24292f;
  --color-base-20: #f6f8fa;
  --color-base-25: #f6f8fa;
  --color-base-30: #d0d7de;
  --color-base-50: #6e7781;
  --color-base-70: #57606a;
  --color-blue: #086DDD;
  --color-btn-primary-bg: #2da44f;
  --color-btn-primary-hover-bg: #2c964a;
  --color-cyan: #2db7b5;
  --color-green: #0cb54f;
  --color-green-rgb: 12, 181, 79;
  --color-orange: #d96c00;
  --color-pink: #C32B74;
  --color-purple: #876be0;
  --color-red: #cf222e;
  --color-red-rgb: 228, 55, 75;
  --color-yellow: #BD8E37;
  --divider-color: #d0d7de;
  --divider-color-hover: rgb(10, 115, 235);
  --dropdown-background-hover: #f6f8fa;
  --embed-block-shadow-hover: 0 0 0 1px #d0d7de,
        inset 0 0 0 1px #d0d7de;
  --embed-border-left: 2px solid rgb(10, 115, 235);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(10, 115, 235);
  --file-margins: 32px;
  --flair-color: #24292f;
  --footnote-divider-color: #d0d7de;
  --footnote-id-color: #57606a;
  --footnote-id-color-no-occurrences: #6e7781;
  --footnote-input-background-active: rgba(208, 215, 222, 0.32);
  --graph-node: #57606a;
  --graph-node-attachment: #BD8E37;
  --graph-node-focused: rgb(9, 108, 220);
  --graph-node-tag: #0cb54f;
  --graph-node-unresolved: #6e7781;
  --graph-text: #24292f;
  --h-color-theme: #24292f;
  --h1-color: #24292f;
  --h1-color-theme: #24292f;
  --h1-size: 2em;
  --h2-color: #24292f;
  --h2-color-theme: #24292f;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-color: #24292f;
  --h3-color-theme: #24292f;
  --h3-size: 1.37em;
  --h3-weight: 600;
  --h4-color: #24292f;
  --h4-color-theme: #24292f;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-color: #24292f;
  --h5-color-theme: #24292f;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-color: #24292f;
  --h6-color-theme: #24292f;
  --h6-size: 1.12em;
  --heading-formatting: #6e7781;
  --hr-color: #d0d7de;
  --icon-color: #57606a;
  --icon-color-active: rgb(9, 108, 220);
  --icon-color-focused: #24292f;
  --icon-color-hover: #57606a;
  --inline-code-background: #aeb8c133;
  --inline-title-color: #24292f;
  --inline-title-size: 2em;
  --input-date-separator: #6e7781;
  --input-placeholder-color: #6e7781;
  --input-shadow: inset 0 0 0 1px #1b1f2426;
  --input-shadow-hover: inset 0 0 0 1px #1b1f2426;
  --interactive-accent: rgb(10, 115, 235);
  --interactive-accent-hover: rgb(10, 120, 245);
  --interactive-accent-hsl: 212, 92%, 45%;
  --interactive-hover: #f6f8fa;
  --kanban-background: #ffffff;
  --kanban-item-background: #ffffff;
  --kanban-lane-background: #f6f8fa;
  --kanban-lane-border: #d8dee4;
  --kanban-lane-count: #aeb8c133;
  --kanban-options-btn: #f6f8fa;
  --link-color: rgb(9, 108, 220);
  --link-color-hover: rgb(10, 120, 245);
  --link-decoration: none;
  --link-external-color: rgb(9, 108, 220);
  --link-external-color-hover: rgb(10, 120, 245);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(9, 108, 220);
  --link-unresolved-decoration-color: rgba(9, 108, 220, 0.3);
  --list-bullet-size: 5px;
  --list-indent: 2em;
  --list-marker-color: #24292f;
  --list-marker-color-collapsed: rgb(9, 108, 220);
  --list-marker-color-hover: #57606a;
  --menu-background: #f6f8fa;
  --menu-border-color: #d0d7de;
  --menu-shadow: none;
  --metadata-border-color: #d0d7de;
  --metadata-divider-color: #d0d7de;
  --metadata-input-background-active: rgba(208, 215, 222, 0.32);
  --metadata-input-text-color: #24292f;
  --metadata-label-background-active: rgba(208, 215, 222, 0.32);
  --metadata-label-text-color: #57606a;
  --metadata-label-text-color-hover: #57606a;
  --metadata-property-background-active: rgba(208, 215, 222, 0.32);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(9, 108, 220);
  --metadata-property-box-shadow-hover: 0 0 0 1px #d0d7de;
  --modal-border-color: #d0d7de;
  --nav-collapse-icon-color: #6e7781;
  --nav-collapse-icon-color-collapsed: #6e7781;
  --nav-heading-color: #24292f;
  --nav-heading-color-collapsed: #6e7781;
  --nav-heading-color-collapsed-hover: #57606a;
  --nav-heading-color-hover: #24292f;
  --nav-item-background-active: rgba(208, 215, 222, 0.32);
  --nav-item-background-hover: rgba(208, 215, 222, 0.32);
  --nav-item-background-selected: rgba(9, 108, 220, 0.2);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: #57606a;
  --nav-item-color-active: #24292f;
  --nav-item-color-highlighted: rgb(10, 120, 245);
  --nav-item-color-hover: #24292f;
  --nav-item-color-selected: #24292f;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #6e7781;
  --nav-tag-color-active: #57606a;
  --nav-tag-color-hover: #57606a;
  --pill-border-color: #d0d7de;
  --pill-border-color-hover: #d0d7de;
  --pill-color: #57606a;
  --pill-color-hover: #24292f;
  --pill-color-remove: #6e7781;
  --pill-color-remove-hover: rgb(9, 108, 220);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --rgb-hover: 208, 215, 222;
  --ribbon-background: #f6f8fa;
  --search-clear-button-color: #57606a;
  --search-icon-color: #57606a;
  --setting-group-heading-color: #24292f;
  --setting-items-background: #f6f8fa;
  --setting-items-border-color: #d0d7de;
  --shadow-l: none;
  --shadow-s: none;
  --slider-thumb-border-color: #d0d7de;
  --slider-thumb-radius: 50%;
  --slider-track-background: #d0d7de;
  --status-bar-background: #f6f8fa;
  --status-bar-border-color: #d0d7de;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #57606a;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #cf222e;
  --sync-avatar-color-2: #d96c00;
  --sync-avatar-color-3: #BD8E37;
  --sync-avatar-color-4: #0cb54f;
  --sync-avatar-color-5: #2db7b5;
  --sync-avatar-color-6: #086DDD;
  --sync-avatar-color-7: #876be0;
  --sync-avatar-color-8: #C32B74;
  --tab-container-background: #f6f8fa;
  --tab-divider-color: #d0d7de;
  --tab-outline-color: #d0d7de;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #f6f8fa;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f8fa, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(9, 108, 220);
  --tab-text-color: #6e7781;
  --tab-text-color-active: #57606a;
  --tab-text-color-focused: #57606a;
  --tab-text-color-focused-active: #57606a;
  --tab-text-color-focused-active-current: #24292f;
  --tab-text-color-focused-highlighted: rgb(9, 108, 220);
  --table-add-button-border-color: #d0d7de;
  --table-border-color: #d0d7de;
  --table-drag-handle-background-active: rgb(10, 115, 235);
  --table-drag-handle-color: #6e7781;
  --table-header-border-color: #d0d7de;
  --table-header-color: #24292f;
  --table-header-weight: 600;
  --table-selection: rgba(9, 108, 220, 0.1);
  --table-selection-border-color: rgb(10, 115, 235);
  --table-white-space: normal;
  --tag-background: rgba(9, 108, 220, 0.1);
  --tag-background-hover: rgba(9, 108, 220, 0.2);
  --tag-border-color: rgba(9, 108, 220, 0.15);
  --tag-border-color-hover: rgba(9, 108, 220, 0.15);
  --tag-color: rgb(9, 108, 220);
  --tag-color-hover: rgb(9, 108, 220);
  --text-accent: rgb(9, 108, 220);
  --text-accent-hover: rgb(10, 120, 245);
  --text-error: #cf222e;
  --text-faint: #6e7781;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #57606a;
  --text-normal: #24292f;
  --text-selection: rgba(9, 108, 220, 0.2);
  --text-success: #0cb54f;
  --text-warning: #d96c00;
  --titlebar-background: #f6f8fa;
  --titlebar-border-color: #d0d7de;
  --titlebar-text-color: #57606a;
  --titlebar-text-color-focused: #24292f;
  --vault-name-color: #24292f;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #24292f;
  --vault-profile-color-hover: #24292f;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 248, 250);
  color: rgb(36, 41, 47);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(36, 41, 47);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 248, 250);
  color: rgb(36, 41, 47);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(208, 215, 222);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 248, 250);
  border-left-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

body div#quartz-root {
  color: rgb(36, 41, 47);
}`,
    typography: `body .page article p > b, b {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .page article p > em, em {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .page article p > i, i {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .page article p > strong, strong {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .text-highlight {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body del {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: line-through rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body p {
  color: rgb(87, 96, 106);
  outline: rgb(87, 96, 106) none 0px;
  text-decoration: rgb(87, 96, 106);
  text-decoration-color: rgb(87, 96, 106);
}`,
    links: `body a.external, footer a {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration: rgb(9, 108, 220);
  text-decoration-color: rgb(9, 108, 220);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration: rgb(9, 108, 220);
  text-decoration-color: rgb(9, 108, 220);
}

body a.internal.broken {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration: rgba(9, 108, 220, 0.3);
  text-decoration-color: rgba(9, 108, 220, 0.3);
}`,
    lists: `body dd {
  color: rgb(36, 41, 47);
}

body dt {
  color: rgb(36, 41, 47);
}

body ol > li {
  color: rgb(36, 41, 47);
}

body ol.overflow {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body ul > li {
  color: rgb(36, 41, 47);
}

body ul.overflow {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(110, 119, 129);
  text-decoration: rgb(110, 119, 129);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body table {
  color: rgb(36, 41, 47);
  width: 241.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(246, 248, 250);
}

body td {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body th {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `body code {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

body pre > code > [data-line] {
  border-left-color: rgb(217, 108, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(217, 108, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(217, 108, 0);
  border-left-color: rgb(217, 108, 0);
  border-right-color: rgb(217, 108, 0);
  border-top-color: rgb(217, 108, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
}

body pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
}`,
    images: `body audio {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body figcaption {
  color: rgb(36, 41, 47);
}

body figure {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body img {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body video {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    embeds: `body .file-embed {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
}

body .footnotes {
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

body .transclude {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(10, 114, 233);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body .transclude-inner {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(10, 114, 233);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(87, 96, 106);
  text-decoration: line-through rgb(87, 96, 106);
  text-decoration-color: rgb(87, 96, 106);
}

body input[type=checkbox] {
  border-bottom-color: rgb(110, 119, 129);
  border-left-color: rgb(110, 119, 129);
  border-right-color: rgb(110, 119, 129);
  border-top-color: rgb(110, 119, 129);
}

body li.task-list-item[data-task='!'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='*'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='-'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='/'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='>'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='?'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='I'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='S'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='b'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='c'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='d'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='f'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='i'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='k'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='l'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='p'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='u'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='w'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 172, 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(224, 172, 0, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(224, 172, 0, 0.25);
  border-top-color: rgba(224, 172, 0, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  --callout-color: 12, 181, 79;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(12, 181, 79, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(12, 181, 79, 0.25);
  border-top-color: rgba(12, 181, 79, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > * {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(208, 215, 222, 0.32);
  color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 248, 250);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(208, 215, 222, 0.32);
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(208, 215, 222, 0.32);
  color: rgb(36, 41, 47);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(9, 108, 220, 0.1);
  border-bottom-color: rgba(9, 108, 220, 0.15);
  border-left-color: rgba(9, 108, 220, 0.15);
  border-right-color: rgba(9, 108, 220, 0.15);
  border-top-color: rgba(9, 108, 220, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(9, 108, 220);
}

body h1 {
  color: rgb(36, 41, 47);
}

body h2 {
  color: rgb(36, 41, 47);
}

body h2.page-title, h2.page-title a {
  color: rgb(36, 41, 47);
}

body h3 {
  color: rgb(36, 41, 47);
}

body h4 {
  color: rgb(36, 41, 47);
}

body h5 {
  color: rgb(36, 41, 47);
}

body h6 {
  color: rgb(36, 41, 47);
}

body hr {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(208, 215, 222, 0.32);
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}`,
    footer: `body footer {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(87, 96, 106);
}

body footer ul li a {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(36, 41, 47);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 96, 106);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body li.section-li > .section .meta {
  color: rgb(87, 96, 106);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body ul.section-ul {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body .darkmode svg {
  color: rgb(87, 96, 106);
  stroke: rgb(87, 96, 106);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body .breadcrumb-element p {
  color: rgb(110, 119, 129);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

body .metadata {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(87, 96, 106);
}

body .metadata-properties {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body .navigation-progress {
  background-color: rgb(246, 248, 250);
}

body .page-header h2.page-title {
  color: rgb(36, 41, 47);
}

body abbr {
  color: rgb(36, 41, 47);
  text-decoration: underline dotted rgb(36, 41, 47);
}

body details {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body input[type=text] {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body kbd {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body progress {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body sub {
  color: rgb(36, 41, 47);
}

body summary {
  color: rgb(36, 41, 47);
}

body sup {
  color: rgb(36, 41, 47);
}`,
  },
};
