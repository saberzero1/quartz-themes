import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "material-ocean", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 354;
  --accent-l: 64%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(255, 71, 90, 0.1);
  --background-modifier-border: #1e2537;
  --background-modifier-border-focus: #1e2537;
  --background-modifier-border-hover: #11131e;
  --background-modifier-error: rgb(255, 71, 90);
  --background-modifier-error-hover: rgb(255, 71, 90);
  --background-modifier-error-rgb: 255, 71, 90;
  --background-modifier-form-field: #0b0d13;
  --background-modifier-form-field-hover: #0b0d13;
  --background-modifier-hover: #11131e;
  --background-modifier-success: rgb(163, 190, 140);
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #0f111a;
  --background-primary-alt: #0b0d13;
  --background-secondary: #090b10;
  --background-secondary-alt: #1e2537;
  --bases-cards-background: #0f111a;
  --bases-cards-cover-background: #0b0d13;
  --bases-cards-shadow: 0 0 0 1px #1e2537;
  --bases-cards-shadow-hover: 0 0 0 1px #11131e;
  --bases-embed-border-color: #1e2537;
  --bases-group-heading-property-color: #9093a2;
  --bases-table-border-color: #1e2537;
  --bases-table-cell-background-active: #0f111a;
  --bases-table-cell-background-disabled: #0b0d13;
  --bases-table-cell-background-selected: rgba(255, 71, 90, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #1e2537;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 71, 90);
  --bases-table-group-background: #0b0d13;
  --bases-table-header-background: #0f111a;
  --bases-table-header-background-hover: #11131e;
  --bases-table-header-color: #9093a2;
  --bases-table-summary-background: #0f111a;
  --bases-table-summary-background-hover: #11131e;
  --blockquote-border-color: rgb(255, 71, 90);
  --blockquote-color: #9093a2;
  --blur-background: color-mix(in srgb, #1e2537 65%, transparent) linear-gradient(#1e2537, color-mix(in srgb, #1e2537 65%, transparent));
  --callout-bug: 255, 71, 90;
  --callout-error: 255, 71, 90;
  --callout-fail: 255, 71, 90;
  --callout-padding: 16px 16px 16px 20px;
  --callout-success: 163, 190, 140;
  --canvas-background: #0f111a;
  --canvas-card-label-color: #697086;
  --canvas-color-1: 255, 71, 90;
  --canvas-color-4: 163, 190, 140;
  --canvas-dot-pattern: #1e2537;
  --caret-color: #b6b7be;
  --checkbox-border-color: #697086;
  --checkbox-border-color-hover: #9093a2;
  --checkbox-color: rgb(255, 71, 90);
  --checkbox-color-hover: hsl(351, 102%, 73.6%);
  --checkbox-marker-color: #0f111a;
  --checklist-done-color: #9093a2;
  --code-background: #0b0d13;
  --code-border-color: #1e2537;
  --code-bracket-background: #11131e;
  --code-comment: #697086;
  --code-function: #ffcb6b;
  --code-important: #fde3c0;
  --code-keyword: #ffc0cb;
  --code-normal: #b6b7be;
  --code-operator: rgb(255, 71, 90);
  --code-property: #89ddff;
  --code-punctuation: #9093a2;
  --code-string: rgb(163, 190, 140);
  --code-tag: rgb(255, 71, 90);
  --code-value: #c792ea;
  --collapse-icon-color: #697086;
  --collapse-icon-color-collapsed: #697086;
  --color-accent: rgb(255, 71, 90);
  --color-accent-1: hsl(351, 102%, 73.6%);
  --color-accent-2: hsl(349, 105%, 82.56%);
  --color-accent-hsl: 354, 100%, 64%;
  --color-base-00: #0f111a;
  --color-base-10: #0b0d13;
  --color-base-100: #b6b7be;
  --color-base-20: #090b10;
  --color-base-25: #0b0d13;
  --color-base-30: #1e2537;
  --color-base-35: #11131e;
  --color-base-40: #1e2537;
  --color-base-50: #697086;
  --color-base-60: #697086;
  --color-base-70: #9093a2;
  --color-blue: #82aaff;
  --color-cyan: #89ddff;
  --color-green: rgb(163, 190, 140);
  --color-green-rgb: 163, 190, 140;
  --color-orange: #fde3c0;
  --color-pink: #ffc0cb;
  --color-purple: #c792ea;
  --color-red: rgb(255, 71, 90);
  --color-red-rgb: 255, 71, 90;
  --color-yellow: #ffcb6b;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #1e2537;
  --divider-color-hover: rgb(255, 71, 90);
  --dropdown-background: #1e2537;
  --dropdown-background-hover: #11131e;
  --embed-block-shadow-hover: 0 0 0 1px #1e2537, inset 0 0 0 1px #1e2537;
  --embed-border-start: 2px solid rgb(255, 71, 90);
  --file-header-background: #0f111a;
  --file-header-background-focused: #0f111a;
  --flair-background: #1e2537;
  --flair-color: #b6b7be;
  --footnote-divider-color: #1e2537;
  --footnote-id-color: #9093a2;
  --footnote-id-color-no-occurrences: #697086;
  --footnote-input-background-active: #11131e;
  --graph-line: #1e2537;
  --graph-node: #9093a2;
  --graph-node-attachment: #ffcb6b;
  --graph-node-focused: hsl(351, 102%, 73.6%);
  --graph-node-tag: rgb(163, 190, 140);
  --graph-node-unresolved: #697086;
  --graph-text: #b6b7be;
  --gray: var(--text-muted);
  --h1-color: hsl(351, 102%, 73.6%);
  --h2-color: hsl(351, 102%, 73.6%);
  --h3-color: hsl(351, 102%, 73.6%);
  --h4-color: hsl(351, 102%, 73.6%);
  --h5-color: hsl(351, 102%, 73.6%);
  --h6-color: hsl(351, 102%, 73.6%);
  --heading-formatting: #697086;
  --highlight: var(--text-highlight-bg);
  --hr-color: #1e2537;
  --icon-color: #9093a2;
  --icon-color-active: hsl(351, 102%, 73.6%);
  --icon-color-focused: #b6b7be;
  --icon-color-hover: #9093a2;
  --inline-title-color: hsl(351, 102%, 73.6%);
  --input-date-separator: #697086;
  --input-placeholder-color: #697086;
  --interactive-accent: rgb(255, 71, 90);
  --interactive-accent-hover: hsl(351, 102%, 73.6%);
  --interactive-accent-hsl: 354, 100%, 64%;
  --interactive-hover: #11131e;
  --interactive-normal: #1e2537;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: hsl(351, 102%, 73.6%);
  --link-color-hover: hsl(349, 105%, 82.56%);
  --link-external-color: hsl(351, 102%, 73.6%);
  --link-external-color-hover: hsl(349, 105%, 82.56%);
  --link-unresolved-color: hsl(351, 102%, 73.6%);
  --link-unresolved-decoration-color: rgba(255, 71, 90, 0.3);
  --list-marker-color: #9093a2;
  --list-marker-color-collapsed: #9093a2;
  --list-marker-color-hover: #9093a2;
  --lucide-calendar-days: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3Cpath d='M8 14h.01'%3E%3C/path%3E%3Cpath d='M12 14h.01'%3E%3C/path%3E%3Cpath d='M16 14h.01'%3E%3C/path%3E%3Cpath d='M8 18h.01'%3E%3C/path%3E%3Cpath d='M12 18h.01'%3E%3C/path%3E%3Cpath d='M16 18h.01'%3E%3C/path%3E%3C/svg%3E");
  --lucide-maximize: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E");
  --lucide-minus: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --lucide-x: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --menu-background: #090b10;
  --menu-border-color: #11131e;
  --metadata-border-color: #1e2537;
  --metadata-divider-color: #1e2537;
  --metadata-input-background-active: #11131e;
  --metadata-input-text-color: #b6b7be;
  --metadata-label-background-active: #11131e;
  --metadata-label-text-color: #9093a2;
  --metadata-label-text-color-hover: #9093a2;
  --metadata-property-background-active: #11131e;
  --metadata-property-box-shadow-focus: 0 0 0 2px #1e2537;
  --metadata-property-box-shadow-hover: 0 0 0 1px #11131e;
  --modal-background: #0f111a;
  --modal-border-color: #1e2537;
  --nav-collapse-icon-color: #697086;
  --nav-collapse-icon-color-collapsed: #697086;
  --nav-heading-color: #b6b7be;
  --nav-heading-color-collapsed: #697086;
  --nav-heading-color-collapsed-hover: #9093a2;
  --nav-heading-color-hover: #b6b7be;
  --nav-item-background-active: #11131e;
  --nav-item-background-hover: #11131e;
  --nav-item-background-selected: rgba(255, 71, 90, 0.15);
  --nav-item-color: #9093a2;
  --nav-item-color-active: #b6b7be;
  --nav-item-color-highlighted: hsl(351, 102%, 73.6%);
  --nav-item-color-hover: #b6b7be;
  --nav-item-color-selected: #b6b7be;
  --nav-tag-color: #697086;
  --nav-tag-color-active: #9093a2;
  --nav-tag-color-hover: #9093a2;
  --pdf-background: #0f111a;
  --pdf-page-background: #0f111a;
  --pdf-shadow: 0 0 0 1px #1e2537;
  --pdf-sidebar-background: #0f111a;
  --pdf-thumbnail-shadow: 0 0 0 1px #1e2537;
  --pill-border-color: #1e2537;
  --pill-border-color-hover: #11131e;
  --pill-color: #9093a2;
  --pill-color-hover: #b6b7be;
  --pill-color-remove: #697086;
  --pill-color-remove-hover: hsl(351, 102%, 73.6%);
  --prompt-background: #0f111a;
  --prompt-border-color: #1e2537;
  --raised-background: color-mix(in srgb, #1e2537 65%, transparent) linear-gradient(#1e2537, color-mix(in srgb, #1e2537 65%, transparent));
  --ribbon-background: #090b10;
  --ribbon-background-collapsed: #0f111a;
  --scrollbar-active-thumb-bg: rgb(255, 71, 90);
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: #00010a;
  --search-clear-button-color: #9093a2;
  --search-icon-color: #9093a2;
  --search-result-background: #0f111a;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #b6b7be;
  --setting-items-background: #0b0d13;
  --setting-items-border-color: #1e2537;
  --slider-thumb-border-color: #11131e;
  --slider-track-background: #1e2537;
  --status-bar-background: #090b10;
  --status-bar-border-color: #1e2537;
  --status-bar-text-color: #9093a2;
  --suggestion-background: #0f111a;
  --sync-avatar-color-1: rgb(255, 71, 90);
  --sync-avatar-color-2: #fde3c0;
  --sync-avatar-color-3: #ffcb6b;
  --sync-avatar-color-4: rgb(163, 190, 140);
  --sync-avatar-color-5: #89ddff;
  --sync-avatar-color-6: #82aaff;
  --sync-avatar-color-7: #c792ea;
  --sync-avatar-color-8: #ffc0cb;
  --tab-background-active: #0f111a;
  --tab-container-background: #090b10;
  --tab-divider-color: #11131e;
  --tab-outline-color: #1e2537;
  --tab-switcher-background: #090b10;
  --tab-switcher-menubar-background: linear-gradient(to top, #090b10, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 71, 90);
  --tab-text-color: #697086;
  --tab-text-color-active: #9093a2;
  --tab-text-color-focused: #9093a2;
  --tab-text-color-focused-active: #9093a2;
  --tab-text-color-focused-active-current: #b6b7be;
  --tab-text-color-focused-highlighted: hsl(351, 102%, 73.6%);
  --table-add-button-border-color: #1e2537;
  --table-border-color: #1e2537;
  --table-drag-handle-background-active: rgb(255, 71, 90);
  --table-drag-handle-color: #697086;
  --table-header-background: #11131e;
  --table-header-background-hover: #11131e;
  --table-header-border-color: #1e2537;
  --table-header-color: #b6b7be;
  --table-selection: rgba(255, 71, 90, 0.1);
  --table-selection-border-color: rgb(255, 71, 90);
  --tag-background: rgba(255, 71, 90, 0.1);
  --tag-background-hover: rgba(255, 71, 90, 0.2);
  --tag-border-color: rgba(255, 71, 90, 0.15);
  --tag-border-color-hover: rgba(255, 71, 90, 0.15);
  --tag-color: hsl(351, 102%, 73.6%);
  --tag-color-hover: hsl(351, 102%, 73.6%);
  --tag-padding-y: 0.23em;
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(351, 102%, 73.6%);
  --text-accent-hover: hsl(349, 105%, 82.56%);
  --text-error: rgb(255, 71, 90);
  --text-faint: #697086;
  --text-highlight-bg: hsl(351, 102%, 73.6%);
  --text-muted: #9093a2;
  --text-normal: #b6b7be;
  --text-selection: rgba(255, 71, 90, 0.33);
  --text-success: rgb(163, 190, 140);
  --text-warning: #fde3c0;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #090b10;
  --titlebar-background-focused: #090b10;
  --titlebar-border-color: #1e2537;
  --titlebar-text-color: #9093a2;
  --titlebar-text-color-focused: #b6b7be;
  --vault-profile-color: #b6b7be;
  --vault-profile-color-hover: #b6b7be;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(9, 11, 16);
  color: rgb(182, 183, 190);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 17, 26);
  color: rgb(182, 183, 190);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(9, 11, 16);
  color: rgb(182, 183, 190);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(30, 37, 55);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(9, 11, 16);
  border-left-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body div#quartz-root {
  background-color: rgb(15, 17, 26);
  color: rgb(182, 183, 190);
}`,
    typography: `body .page article p > b, b {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .page article p > em, em {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .page article p > i, i {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .page article p > strong, strong {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .text-highlight {
  background-color: rgb(255, 120, 141);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: line-through rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body p {
  color: rgb(144, 147, 162);
  outline: rgb(144, 147, 162) none 0px;
  text-decoration: rgb(144, 147, 162);
  text-decoration-color: rgb(144, 147, 162);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 120, 141);
  outline: rgb(255, 120, 141) none 0px;
  text-decoration: underline rgb(255, 120, 141);
  text-decoration-color: rgb(255, 120, 141);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 120, 141);
  outline: rgb(255, 120, 141) none 0px;
  text-decoration: underline rgb(255, 120, 141);
  text-decoration-color: rgb(255, 120, 141);
}

body a.internal.broken {
  color: rgb(255, 120, 141);
  outline: rgb(255, 120, 141) none 0px;
  text-decoration: underline rgba(255, 71, 90, 0.3);
  text-decoration-color: rgba(255, 71, 90, 0.3);
}`,
    lists: `body dd {
  color: rgb(182, 183, 190);
}

body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

body dt {
  color: rgb(182, 183, 190);
}

body ol > li {
  color: rgb(182, 183, 190);
}

body ol.overflow {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body ul > li {
  color: rgb(182, 183, 190);
}

body ul.overflow {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(105, 112, 134);
  text-decoration: rgb(105, 112, 134);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body table {
  color: rgb(182, 183, 190);
  margin-top: 0px;
  width: 662px;
}

body td {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body th {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body tr {
  background-color: rgb(17, 19, 30);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 71, 90);
  border-left-color: rgb(255, 71, 90);
  border-right-color: rgb(255, 71, 90);
  border-top-color: rgb(255, 71, 90);
  color: rgb(255, 71, 90);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 203, 107);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 203, 107);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 203, 107);
  border-left-color: rgb(255, 203, 107);
  border-right-color: rgb(255, 203, 107);
  border-top-color: rgb(255, 203, 107);
}

body pre > code, pre:has(> code) {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  overflow-x: scroll;
}

body pre:has(> code) {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  overflow-x: scroll;
}`,
    images: `body audio {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body figcaption {
  color: rgb(182, 183, 190);
}

body figure {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body img {
  border-bottom-color: rgb(182, 183, 190);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(182, 183, 190);
  border-radius: 4px;
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    embeds: `body .file-embed {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
}

body .footnotes {
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body .transclude {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(255, 71, 90);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body .transclude-inner {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(255, 71, 90);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
  text-decoration-color: rgb(144, 147, 162);
}

body input[type=checkbox] {
  border-bottom-color: rgb(105, 112, 134);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border-left-color: rgb(105, 112, 134);
  border-right-color: rgb(105, 112, 134);
  border-top-color: rgb(105, 112, 134);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='*'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='-'] {
  color: rgb(105, 112, 134);
  text-decoration: line-through rgb(144, 147, 162);
  text-decoration-color: rgb(144, 147, 162);
}

body li.task-list-item[data-task='/'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='>'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='?'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='I'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='S'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='b'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='c'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='d'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='f'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='i'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='k'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='l'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='p'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='u'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='w'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}`,
    callouts: `body .callout .callout-title {
  gap: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 71, 90;
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.25);
  border-left-color: rgba(255, 71, 90, 0.25);
  border-right-color: rgba(255, 71, 90, 0.25);
  border-top-color: rgba(255, 71, 90, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 71, 90;
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.25);
  border-left-color: rgba(255, 71, 90, 0.25);
  border-right-color: rgba(255, 71, 90, 0.25);
  border-top-color: rgba(255, 71, 90, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 71, 90;
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.25);
  border-left-color: rgba(255, 71, 90, 0.25);
  border-right-color: rgba(255, 71, 90, 0.25);
  border-top-color: rgba(255, 71, 90, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-left-color: rgba(163, 190, 140, 0.25);
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgba(163, 190, 140, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
}

body .search > .search-container > .search-space > * {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(17, 19, 30);
  color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(9, 11, 16);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(17, 19, 30);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(17, 19, 30);
  color: rgb(182, 183, 190);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.15);
  border-left-color: rgba(255, 71, 90, 0.15);
  border-right-color: rgba(255, 71, 90, 0.15);
  border-top-color: rgba(255, 71, 90, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(255, 120, 141);
}

body h1 {
  color: rgb(255, 120, 141);
}

body h2 {
  color: rgb(255, 120, 141);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 120, 141);
}

body h3 {
  color: rgb(255, 120, 141);
}

body h4 {
  color: rgb(255, 120, 141);
}

body h5 {
  color: rgb(255, 120, 141);
}

body h6 {
  color: rgb(255, 120, 141);
}

body hr {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
}`,
    scrollbars: `body .callout {
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(17, 19, 30);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}`,
    footer: `body footer {
  background-color: rgb(9, 11, 16);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(144, 147, 162);
}

body footer ul li a {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(182, 183, 190);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(144, 147, 162);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body li.section-li > .section .meta {
  color: rgb(144, 147, 162);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body ul.section-ul {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}

body .breadcrumb-element p {
  color: rgb(105, 112, 134);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body .metadata {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(144, 147, 162);
  margin-bottom: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}

body .navigation-progress {
  background-color: rgb(9, 11, 16);
}

body .page-header h2.page-title {
  color: rgb(182, 183, 190);
}

body abbr {
  color: rgb(182, 183, 190);
  text-decoration: underline dotted rgb(182, 183, 190);
}

body details {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body input[type=text] {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}

body kbd {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body progress {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body sub {
  color: rgb(182, 183, 190);
}

body summary {
  color: rgb(182, 183, 190);
}

body sup {
  color: rgb(182, 183, 190);
}`,
  },
  light: {},
};
