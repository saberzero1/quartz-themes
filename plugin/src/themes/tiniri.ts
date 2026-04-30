import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "tiniri", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0;
  --accent-l: 50;
  --accent-s: 77;
  --background-modifier-border: var(--color-base-30, #0003);
  --background-modifier-error: var(--color-red, #AD514C);
  --background-modifier-error-hover: var(--color-red, #AD514C);
  --background-modifier-error-rgb: var(--color-red-rgb, 198, 107, 103);
  --background-modifier-success: var(--color-green, #F5A571);
  --background-modifier-success-rgb: var(--color-green-rgb, 173, 131, 1);
  --background-primary: var(--color-base-00, #1F2122);
  --background-primary-alt: var(--color-base-10, #1F2122);
  --background-secondary: var(--color-base-20, #1B1D1E);
  --background-secondary-alt: var(--color-base-30, #1B1D1E);
  --bases-cards-background: var(--background-primary, #1F2122);
  --bases-cards-cover-background: var(--background-primary-alt, #1F2122);
  --bases-embed-border-color: var(--background-modifier-border, #0003);
  --bases-group-heading-property-color: var(--text-muted, #938A80);
  --bases-table-border-color: var(--table-border-color, #0003);
  --bases-table-cell-background-active: var(--background-primary, #1F2122);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #1F2122);
  --bases-table-cell-background-selected: var(--table-selection, hsla(0, 77, 50, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #1F2122);
  --bases-table-header-background: var(--background-primary, #1F2122);
  --bases-table-header-color: var(--text-muted, #938A80);
  --bases-table-summary-background: var(--background-primary, #1F2122);
  --blockquote-border-color: var(--interactive-accent, #314F52);
  --callout-bug: var(--color-red-rgb, 198, 107, 103);
  --callout-default: var(--color-blue-rgb, 104, 160, 160);
  --callout-error: var(--color-red-rgb, 198, 107, 103);
  --callout-example: var(--color-purple-rgb, 168, 144, 128);
  --callout-fail: var(--color-red-rgb, 198, 107, 103);
  --callout-important: var(--color-cyan-rgb, 120, 113, 108);
  --callout-info: var(--color-blue-rgb, 104, 160, 160);
  --callout-question: var(--color-orange-rgb, 235, 147, 80);
  --callout-success: var(--color-green-rgb, 173, 131, 1);
  --callout-summary: var(--color-cyan-rgb, 120, 113, 108);
  --callout-tip: var(--color-cyan-rgb, 120, 113, 108);
  --callout-todo: var(--color-blue-rgb, 104, 160, 160);
  --callout-warning: var(--color-orange-rgb, 235, 147, 80);
  --canvas-background: var(--background-primary, #1F2122);
  --canvas-card-label-color: var(--text-faint, #938A8099);
  --canvas-color-1: var(--color-red-rgb, 198, 107, 103);
  --canvas-color-2: var(--color-orange-rgb, 235, 147, 80);
  --canvas-color-3: var(--color-yellow-rgb, 235, 147, 80);
  --canvas-color-4: var(--color-green-rgb, 173, 131, 1);
  --canvas-color-5: var(--color-cyan-rgb, 120, 113, 108);
  --canvas-color-6: var(--color-purple-rgb, 168, 144, 128);
  --caret-color: var(--text-normal, #DBD3CA);
  --checkbox-border-color: var(--text-faint, #938A8099);
  --checkbox-border-color-hover: var(--text-muted, #938A80);
  --checkbox-color: var(--interactive-accent, #314F52);
  --checkbox-color-hover: var(--interactive-accent-hover, #39595C);
  --checkbox-marker-color: var(--background-primary, #1F2122);
  --checklist-done-color: var(--text-muted, #938A80);
  --code-background: var(--background-primary-alt, #1F2122);
  --code-border-color: var(--background-modifier-border, #0003);
  --code-comment: var(--text-faint, #938A8099);
  --code-function: var(--color-yellow, #F5A571);
  --code-important: var(--color-orange, #F5A571);
  --code-keyword: var(--color-pink, #D67C7F);
  --code-normal: var(--text-normal, #DBD3CA);
  --code-operator: var(--color-red, #AD514C);
  --code-property: var(--color-cyan, #938A80);
  --code-punctuation: var(--text-muted, #938A80);
  --code-string: var(--color-green, #F5A571);
  --code-tag: var(--color-red, #AD514C);
  --code-value: var(--color-purple, #D67C7F);
  --collapse-icon-color: var(--text-faint, #938A8099);
  --collapse-icon-color-collapsed: var(--text-accent, #AD514C);
  --color-blue: #5BA9B9;
  --color-blue-rgb: 104, 160, 160;
  --color-cyan: #938A80;
  --color-cyan-rgb: 120, 113, 108;
  --color-green: #F5A571;
  --color-green-rgb: 173, 131, 1;
  --color-orange: #F5A571;
  --color-orange-rgb: 235, 147, 80;
  --color-pink: #D67C7F;
  --color-pink-rgb: 168, 144, 128;
  --color-purple: #D67C7F;
  --color-purple-rgb: 168, 144, 128;
  --color-red: #AD514C;
  --color-red-rgb: 198, 107, 103;
  --color-yellow: #F5A571;
  --color-yellow-rgb: 235, 147, 80;
  --dark: var(--text-normal, var(--color-base-100, #DBD3CA));
  --darkgray: var(--text-normal, var(--color-base-100, #DBD3CA));
  --divider-color: var(--background-modifier-border, #0003);
  --divider-color-hover: var(--interactive-accent, #314F52);
  --dropdown-background: var(--interactive-normal, #353A42);
  --dropdown-background-hover: var(--interactive-hover, #3F444D);
  --file-header-background: var(--background-primary, #1F2122);
  --file-header-background-focused: var(--background-primary, #1F2122);
  --flair-background: var(--interactive-normal, #353A42);
  --flair-color: var(--text-normal, #DBD3CA);
  --footnote-divider-color: var(--metadata-divider-color, #0003);
  --footnote-id-color: var(--text-muted, #938A80);
  --footnote-id-color-no-occurrences: var(--text-faint, #938A8099);
  --graph-node: var(--text-muted, #938A80);
  --graph-node-attachment: var(--color-yellow, #F5A571);
  --graph-node-focused: var(--text-accent, #AD514C);
  --graph-node-tag: var(--color-green, #F5A571);
  --graph-node-unresolved: var(--text-faint, #938A8099);
  --graph-text: var(--text-normal, #DBD3CA);
  --gray: var(--text-muted, var(--color-base-70, #938A80));
  --heading-formatting: var(--text-faint, #938A8099);
  --hr-color: var(--background-modifier-border, #0003);
  --icon-color: var(--text-muted, #938A80);
  --icon-color-active: var(--text-accent, #AD514C);
  --icon-color-focused: var(--text-normal, #DBD3CA);
  --icon-color-hover: var(--text-muted, #938A80);
  --input-date-separator: var(--text-faint, #938A8099);
  --input-placeholder-color: var(--text-faint, #938A8099);
  --interactive-accent: var(--color-accent, #314F52);
  --interactive-accent-hover: var(--color-accent-1, #39595C);
  --interactive-accent-hsl: var(--color-accent-hsl, 0, 77, 50);
  --interactive-hover: var(--color-base-35, #3F444D);
  --interactive-normal: var(--color-base-30, #353A42);
  --light: var(--background-primary, var(--color-base-00, #1F2122));
  --lightgray: var(--background-secondary, var(--color-base-20, #1B1D1E));
  --link-color: var(--text-accent, #AD514C);
  --link-color-hover: var(--text-accent-hover, #E07575);
  --link-external-color: var(--text-accent, #AD514C);
  --link-external-color-hover: var(--text-accent-hover, #E07575);
  --link-unresolved-color: var(--text-accent, #AD514C);
  --list-marker-color: var(--text-faint, #938A8099);
  --list-marker-color-collapsed: var(--text-accent, #AD514C);
  --list-marker-color-hover: var(--text-muted, #938A80);
  --menu-background: var(--background-secondary, #1B1D1E);
  --metadata-border-color: var(--background-modifier-border, #0003);
  --metadata-divider-color: var(--background-modifier-border, #0003);
  --metadata-input-text-color: var(--text-normal, #DBD3CA);
  --metadata-label-text-color: var(--text-muted, #938A80);
  --metadata-label-text-color-hover: var(--text-muted, #938A80);
  --modal-background: var(--background-primary, #1F2122);
  --nav-collapse-icon-color: var(--collapse-icon-color, #938A8099);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #938A8099);
  --nav-heading-color: var(--text-normal, #DBD3CA);
  --nav-heading-color-collapsed: var(--text-faint, #938A8099);
  --nav-heading-color-collapsed-hover: var(--text-muted, #938A80);
  --nav-heading-color-hover: var(--text-normal, #DBD3CA);
  --nav-item-color: var(--text-muted, #938A80);
  --nav-item-color-active: var(--text-normal, #DBD3CA);
  --nav-item-color-highlighted: var(--text-accent, #AD514C);
  --nav-item-color-hover: var(--text-normal, #DBD3CA);
  --nav-item-color-selected: var(--text-normal, #DBD3CA);
  --nav-tag-color: var(--text-faint, #938A8099);
  --nav-tag-color-active: var(--text-muted, #938A80);
  --nav-tag-color-hover: var(--text-muted, #938A80);
  --pdf-background: var(--background-primary, #1F2122);
  --pdf-page-background: var(--background-primary, #1F2122);
  --pdf-sidebar-background: var(--background-primary, #1F2122);
  --pill-border-color: var(--background-modifier-border, #0003);
  --pill-color: var(--text-muted, #938A80);
  --pill-color-hover: var(--text-normal, #DBD3CA);
  --pill-color-remove: var(--text-faint, #938A8099);
  --pill-color-remove-hover: var(--text-accent, #AD514C);
  --prompt-background: var(--background-primary, #1F2122);
  --raised-background: var(--blur-background, color-mix(in srgb, #353A42 65%, transparent) linear-gradient(#353A42, color-mix(in srgb, #353A42 65%, transparent)));
  --ribbon-background: var(--background-secondary, #1B1D1E);
  --ribbon-background-collapsed: var(--background-primary, #1F2122);
  --search-clear-button-color: var(--text-muted, #938A80);
  --search-icon-color: var(--text-muted, #938A80);
  --search-result-background: var(--background-primary, #1F2122);
  --secondary: var(--text-accent, var(--color-accent-1, #AD514C));
  --setting-group-heading-color: var(--text-normal, #DBD3CA);
  --setting-items-background: var(--background-primary-alt, #1F2122);
  --setting-items-border-color: var(--background-modifier-border, #0003);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #938A80);
  --shiki-code-background: var(--code-background, #1F2122);
  --shiki-code-comment: var(--text-faint, #938A8099);
  --shiki-code-function: var(--color-green, #F5A571);
  --shiki-code-important: var(--color-orange, #F5A571);
  --shiki-code-keyword: var(--color-pink, #D67C7F);
  --shiki-code-normal: var(--text-muted, #938A80);
  --shiki-code-property: var(--color-cyan, #938A80);
  --shiki-code-punctuation: var(--text-muted, #938A80);
  --shiki-code-string: var(--color-yellow, #F5A571);
  --shiki-code-value: var(--color-purple, #D67C7F);
  --shiki-gutter-border-color: var(--background-modifier-border, #0003);
  --shiki-gutter-text-color: var(--text-faint, #938A8099);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #938A80);
  --shiki-highlight-neutral: var(--shiki-code-normal, #938A80);
  --shiki-terminal-dots-color: var(--text-faint, #938A8099);
  --slider-track-background: var(--background-modifier-border, #0003);
  --status-bar-background: var(--background-secondary, #1B1D1E);
  --status-bar-border-color: var(--divider-color, #0003);
  --status-bar-text-color: var(--text-muted, #938A80);
  --suggestion-background: var(--background-primary, #1F2122);
  --sync-avatar-color-1: var(--color-red, #AD514C);
  --sync-avatar-color-2: var(--color-orange, #F5A571);
  --sync-avatar-color-3: var(--color-yellow, #F5A571);
  --sync-avatar-color-4: var(--color-green, #F5A571);
  --sync-avatar-color-5: var(--color-cyan, #938A80);
  --sync-avatar-color-6: var(--color-blue, #5BA9B9);
  --sync-avatar-color-7: var(--color-purple, #D67C7F);
  --sync-avatar-color-8: var(--color-pink, #D67C7F);
  --tab-background-active: var(--background-primary, #1F2122);
  --tab-container-background: var(--background-secondary, #1B1D1E);
  --tab-outline-color: var(--divider-color, #0003);
  --tab-switcher-background: var(--background-secondary, #1B1D1E);
  --tab-text-color: var(--text-faint, #938A8099);
  --tab-text-color-active: var(--text-muted, #938A80);
  --tab-text-color-focused: var(--text-muted, #938A80);
  --tab-text-color-focused-active: var(--text-muted, #938A80);
  --tab-text-color-focused-active-current: var(--text-normal, #DBD3CA);
  --tab-text-color-focused-highlighted: var(--text-accent, #AD514C);
  --table-add-button-border-color: var(--background-modifier-border, #0003);
  --table-border-color: var(--background-modifier-border, #0003);
  --table-drag-handle-background-active: var(--table-selection-border-color, #314F52);
  --table-drag-handle-color: var(--text-faint, #938A8099);
  --table-drag-handle-color-active: var(--text-on-accent, #DBD3CA);
  --table-header-border-color: var(--table-border-color, #0003);
  --table-header-color: var(--text-normal, #DBD3CA);
  --table-selection-border-color: var(--interactive-accent, #314F52);
  --tag-color: var(--text-accent, #AD514C);
  --tag-color-hover: var(--text-accent, #AD514C);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #E07575));
  --text-accent: var(--color-accent-1, #AD514C);
  --text-accent-hover: var(--color-accent-2, #E07575);
  --text-error: var(--color-red, #F5A571);
  --text-faint: var(--color-base-50, #938A8099);
  --text-muted: var(--color-base-70, #938A80);
  --text-normal: var(--color-base-100, #DBD3CA);
  --text-on-accent: #DBD3CA;
  --text-on-accent-inverted: #1F2122;
  --text-success: var(--color-green, #AAC2AE);
  --text-warning: var(--color-orange, #F5A571);
  --titlebar-background: var(--background-secondary, #1B1D1E);
  --titlebar-background-focused: var(--background-secondary-alt, #1B1D1E);
  --titlebar-border-color: var(--background-modifier-border, #0003);
  --titlebar-text-color: var(--text-muted, #938A80);
  --titlebar-text-color-focused: var(--text-normal, #DBD3CA);
  --vault-profile-color: var(--text-normal, #DBD3CA);
  --vault-profile-color-hover: var(--vault-profile-color, #DBD3CA);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #1B1D1E);
  background-color: var(--tab-container-background, rgb(27, 29, 30));
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(31, 33, 34));
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(27, 29, 30));
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #1B1D1E);
  background-color: var(--tab-container-background, rgb(27, 29, 30));
  border-left-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(219, 211, 202));
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(219, 211, 202));
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(219, 211, 202));
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(219, 211, 202));
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(173, 81, 76, 0.267));
  color: var(--text-normal, rgb(219, 211, 202));
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body del {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(219, 211, 202));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(147, 138, 128, 0.6);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(49, 79, 82));
  border-color: rgb(49, 79, 82);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(147, 138, 128));
  outline: rgb(147, 138, 128) none 0px;
  text-decoration-color: rgb(147, 138, 128);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(173, 81, 76));
  outline: rgb(173, 81, 76) none 0px;
  text-decoration-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(173, 81, 76));
  outline: rgb(173, 81, 76) none 0px;
  text-decoration-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(173, 81, 76));
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(173, 81, 76));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body dt {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgba(147, 138, 128, 0.6));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body table {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: var(--table-text-color, rgb(219, 211, 202));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: var(--table-header-color, rgb(219, 211, 202));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(31, 33, 34));
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: var(--code-normal, rgb(219, 211, 202));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(31, 33, 34));
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #1F2122);
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(31, 33, 34));
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(49, 79, 82);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(147, 138, 128, 0.6);
  border-left-color: rgba(147, 138, 128, 0.6);
  border-right-color: rgba(147, 138, 128, 0.6);
  border-top-color: rgba(147, 138, 128, 0.6);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 33, 34);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 33, 34);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 165, 113);
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
  background-color: rgb(245, 165, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(91, 169, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(91, 169, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 165, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 165, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(214, 124, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 165, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 165, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 165, 113);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 120, 113, 108);
  background: rgba(120, 113, 108, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 198, 107, 103);
  background: rgba(198, 107, 103, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(198, 107, 103, 0.25);
  border-left-color: rgba(198, 107, 103, 0.25);
  border-right-color: rgba(198, 107, 103, 0.25);
  border-top-color: rgba(198, 107, 103, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 198, 107, 103);
  background: rgba(198, 107, 103, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(198, 107, 103, 0.25);
  border-left-color: rgba(198, 107, 103, 0.25);
  border-right-color: rgba(198, 107, 103, 0.25);
  border-top-color: rgba(198, 107, 103, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 144, 128);
  background: rgba(168, 144, 128, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(168, 144, 128, 0.25);
  border-left-color: rgba(168, 144, 128, 0.25);
  border-right-color: rgba(168, 144, 128, 0.25);
  border-top-color: rgba(168, 144, 128, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 198, 107, 103);
  background: rgba(198, 107, 103, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(198, 107, 103, 0.25);
  border-left-color: rgba(198, 107, 103, 0.25);
  border-right-color: rgba(198, 107, 103, 0.25);
  border-top-color: rgba(198, 107, 103, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 104, 160, 160);
  background: rgba(104, 160, 160, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 104, 160, 160);
  background: rgba(104, 160, 160, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 235, 147, 80);
  background: rgba(235, 147, 80, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(235, 147, 80, 0.25);
  border-left-color: rgba(235, 147, 80, 0.25);
  border-right-color: rgba(235, 147, 80, 0.25);
  border-top-color: rgba(235, 147, 80, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 173, 131, 1);
  background: rgba(173, 131, 1, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 131, 1, 0.25);
  border-left-color: rgba(173, 131, 1, 0.25);
  border-right-color: rgba(173, 131, 1, 0.25);
  border-top-color: rgba(173, 131, 1, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 120, 113, 108);
  background: rgba(120, 113, 108, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 104, 160, 160);
  background: rgba(104, 160, 160, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 235, 147, 80);
  background: rgba(235, 147, 80, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(235, 147, 80, 0.25);
  border-left-color: rgba(235, 147, 80, 0.25);
  border-right-color: rgba(235, 147, 80, 0.25);
  border-top-color: rgba(235, 147, 80, 0.25);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 160, 160));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(219, 211, 202);
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
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: var(--text-normal, rgb(219, 211, 202));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(31, 33, 34));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 29, 30);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(0, 77, 50, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 77, 50, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 77, 50, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 77, 50, 0.15));
  --pill-color: var(--tag-color, #AD514C);
  --pill-color-hover: var(--tag-color-hover, #AD514C);
  --pill-color-remove: var(--tag-color, #AD514C);
  --pill-color-remove-hover: var(--tag-color-hover, #AD514C);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(219, 211, 202));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(219, 211, 202));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(219, 211, 202));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(219, 211, 202));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(219, 211, 202));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(219, 211, 202));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(219, 211, 202));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(219, 211, 202));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 104, 160, 160);
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(147, 138, 128));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(147, 138, 128));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(219, 211, 202);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: var(--icon-color, rgb(147, 138, 128));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(27, 29, 30));
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: var(--status-bar-text-color, rgb(147, 138, 128));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(147, 138, 128);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(147, 138, 128));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(147, 138, 128);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(147, 138, 128));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: var(--icon-color, rgb(147, 138, 128));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(147, 138, 128);
  stroke: rgb(147, 138, 128);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(147, 138, 128, 0.6));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(219, 211, 202));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(27, 29, 30));
  border-color: rgb(219, 211, 202);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0.2);
  color: var(--table-header-color, rgb(219, 211, 202));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: var(--text-muted, rgb(147, 138, 128));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(0, 77, 50, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 77, 50, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 77, 50, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 77, 50, 0.15));
  --pill-color: var(--tag-color, #AD514C);
  --pill-color-hover: var(--tag-color-hover, #AD514C);
  --pill-color-remove: var(--tag-color, #AD514C);
  --pill-color-remove-hover: var(--tag-color-hover, #AD514C);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  color: var(--pill-color, rgb(173, 81, 76));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(31, 33, 34));
  color: var(--text-normal, rgb(219, 211, 202));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(27, 29, 30));
  border-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(27, 29, 30));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(219, 211, 202);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(27, 29, 30));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(219, 211, 202));
}

html[saved-theme="dark"] body abbr {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: var(--text-normal, rgb(147, 138, 128));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(31, 33, 34));
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: var(--code-normal, rgb(219, 211, 202));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body sub {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body summary {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body sup {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
  color: var(--tag-color, rgb(173, 81, 76));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 3;
  --accent-l: 54;
  --accent-s: 70;
  --background-modifier-border: var(--color-base-30, #33323118);
  --background-modifier-error: var(--color-red, #AD514C);
  --background-modifier-error-hover: var(--color-red, #AD514C);
  --background-modifier-error-rgb: var(--color-red-rgb, 173, 81, 76);
  --background-modifier-success: var(--color-green, #538A8A);
  --background-modifier-success-rgb: var(--color-green-rgb, 83, 138, 138);
  --background-primary: var(--color-base-00, #FDFCFC);
  --background-primary-alt: var(--color-base-10, #FDFCFC);
  --background-secondary: var(--color-base-20, #F7F3F0);
  --background-secondary-alt: var(--color-base-05, #F7F3F0);
  --bases-cards-background: var(--background-primary, #FDFCFC);
  --bases-cards-cover-background: var(--background-primary-alt, #FDFCFC);
  --bases-embed-border-color: var(--background-modifier-border, #33323118);
  --bases-group-heading-property-color: var(--text-muted, #807974);
  --bases-table-border-color: var(--table-border-color, #33323118);
  --bases-table-cell-background-active: var(--background-primary, #FDFCFC);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #FDFCFC);
  --bases-table-cell-background-selected: var(--table-selection, hsla(3, 70, 54, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #FDFCFC);
  --bases-table-header-background: var(--background-primary, #FDFCFC);
  --bases-table-header-color: var(--text-muted, #807974);
  --bases-table-summary-background: var(--background-primary, #FDFCFC);
  --blockquote-border-color: var(--interactive-accent, #538a8a);
  --callout-bug: var(--color-red-rgb, 173, 81, 76);
  --callout-default: var(--color-blue-rgb, 53, 107, 148);
  --callout-error: var(--color-red-rgb, 173, 81, 76);
  --callout-example: var(--color-purple-rgb, 128, 76, 110);
  --callout-fail: var(--color-red-rgb, 173, 81, 76);
  --callout-important: var(--color-cyan-rgb, 120, 113, 108);
  --callout-info: var(--color-blue-rgb, 53, 107, 148);
  --callout-question: var(--color-orange-rgb, 210, 132, 80);
  --callout-success: var(--color-green-rgb, 83, 138, 138);
  --callout-summary: var(--color-cyan-rgb, 120, 113, 108);
  --callout-tip: var(--color-cyan-rgb, 120, 113, 108);
  --callout-todo: var(--color-blue-rgb, 53, 107, 148);
  --callout-warning: var(--color-orange-rgb, 210, 132, 80);
  --canvas-background: var(--background-primary, #FDFCFC);
  --canvas-card-label-color: var(--text-faint, #80797499);
  --canvas-color-1: var(--color-red-rgb, 173, 81, 76);
  --canvas-color-2: var(--color-orange-rgb, 210, 132, 80);
  --canvas-color-3: var(--color-yellow-rgb, 120, 113, 108);
  --canvas-color-4: var(--color-green-rgb, 83, 138, 138);
  --canvas-color-5: var(--color-cyan-rgb, 120, 113, 108);
  --canvas-color-6: var(--color-purple-rgb, 128, 76, 110);
  --caret-color: var(--text-normal, #333231);
  --checkbox-border-color: var(--text-faint, #80797499);
  --checkbox-border-color-hover: var(--text-muted, #807974);
  --checkbox-color: var(--interactive-accent, #538a8a);
  --checkbox-color-hover: var(--interactive-accent-hover, #5c9e9e);
  --checkbox-marker-color: var(--background-primary, #FDFCFC);
  --checklist-done-color: var(--text-muted, #807974);
  --code-background: var(--background-primary-alt, #FDFCFC);
  --code-border-color: var(--background-modifier-border, #33323118);
  --code-comment: var(--text-faint, #80797499);
  --code-function: var(--color-yellow, #D28450);
  --code-important: var(--color-orange, #D28450);
  --code-keyword: var(--color-pink, #BD71A4);
  --code-normal: var(--text-normal, #333231);
  --code-operator: var(--color-red, #AD514C);
  --code-property: var(--color-cyan, #807974);
  --code-punctuation: var(--text-muted, #807974);
  --code-string: var(--color-green, #538A8A);
  --code-tag: var(--color-red, #AD514C);
  --code-value: var(--color-purple, #804C6E);
  --collapse-icon-color: var(--text-faint, #80797499);
  --collapse-icon-color-collapsed: var(--text-accent, #AD514C);
  --color-blue: #356B94;
  --color-blue-rgb: 53, 107, 148;
  --color-cyan: #807974;
  --color-cyan-rgb: 120, 113, 108;
  --color-green: #538A8A;
  --color-green-rgb: 83, 138, 138;
  --color-orange: #D28450;
  --color-orange-rgb: 210, 132, 80;
  --color-pink: #BD71A4;
  --color-pink-rgb: 189, 113, 164;
  --color-purple: #804C6E;
  --color-purple-rgb: 128, 76, 110;
  --color-red: #AD514C;
  --color-red-rgb: 173, 81, 76;
  --color-yellow: #D28450;
  --color-yellow-rgb: 120, 113, 108;
  --dark: var(--text-normal, var(--color-base-100, #333231));
  --darkgray: var(--text-normal, var(--color-base-100, #333231));
  --divider-color: var(--background-modifier-border, #33323118);
  --divider-color-hover: var(--interactive-accent, #538a8a);
  --dropdown-background: var(--interactive-normal, #F7F3F0);
  --dropdown-background-hover: var(--interactive-hover, #ede9e1);
  --file-header-background: var(--background-primary, #FDFCFC);
  --file-header-background-focused: var(--background-primary, #FDFCFC);
  --flair-background: var(--interactive-normal, #F7F3F0);
  --flair-color: var(--text-normal, #333231);
  --footnote-divider-color: var(--metadata-divider-color, #33323118);
  --footnote-id-color: var(--text-muted, #807974);
  --footnote-id-color-no-occurrences: var(--text-faint, #80797499);
  --graph-node: var(--text-muted, #807974);
  --graph-node-attachment: var(--color-yellow, #D28450);
  --graph-node-focused: var(--text-accent, #AD514C);
  --graph-node-tag: var(--color-green, #538A8A);
  --graph-node-unresolved: var(--text-faint, #80797499);
  --graph-text: var(--text-normal, #333231);
  --gray: var(--text-muted, var(--color-base-70, #807974));
  --heading-formatting: var(--text-faint, #80797499);
  --hr-color: var(--background-modifier-border, #33323118);
  --icon-color: var(--text-muted, #807974);
  --icon-color-active: var(--text-accent, #AD514C);
  --icon-color-focused: var(--text-normal, #333231);
  --icon-color-hover: var(--text-muted, #807974);
  --input-date-separator: var(--text-faint, #80797499);
  --input-placeholder-color: var(--text-faint, #80797499);
  --interactive-accent: var(--color-accent-1, #538a8a);
  --interactive-accent-hover: var(--color-accent-2, #5c9e9e);
  --interactive-accent-hsl: var(--color-accent-hsl, 3, 70, 54);
  --interactive-hover: var(--color-base-10, #ede9e1);
  --interactive-normal: var(--color-base-00, #F7F3F0);
  --light: var(--background-primary, var(--color-base-00, #FDFCFC));
  --lightgray: var(--background-secondary, var(--color-base-20, #F7F3F0));
  --link-color: var(--text-accent, #AD514C);
  --link-color-hover: var(--text-accent-hover, #cc645e);
  --link-external-color: var(--text-accent, #AD514C);
  --link-external-color-hover: var(--text-accent-hover, #cc645e);
  --link-unresolved-color: var(--text-accent, #AD514C);
  --list-marker-color: var(--text-faint, #80797499);
  --list-marker-color-collapsed: var(--text-accent, #AD514C);
  --list-marker-color-hover: var(--text-muted, #807974);
  --menu-background: var(--background-secondary, #F7F3F0);
  --metadata-border-color: var(--background-modifier-border, #33323118);
  --metadata-divider-color: var(--background-modifier-border, #33323118);
  --metadata-input-text-color: var(--text-normal, #333231);
  --metadata-label-text-color: var(--text-muted, #807974);
  --metadata-label-text-color-hover: var(--text-muted, #807974);
  --modal-background: var(--background-primary, #FDFCFC);
  --nav-collapse-icon-color: var(--collapse-icon-color, #80797499);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #80797499);
  --nav-heading-color: var(--text-normal, #333231);
  --nav-heading-color-collapsed: var(--text-faint, #80797499);
  --nav-heading-color-collapsed-hover: var(--text-muted, #807974);
  --nav-heading-color-hover: var(--text-normal, #333231);
  --nav-item-color: var(--text-muted, #807974);
  --nav-item-color-active: var(--text-normal, #333231);
  --nav-item-color-highlighted: var(--text-accent, #AD514C);
  --nav-item-color-hover: var(--text-normal, #333231);
  --nav-item-color-selected: var(--text-normal, #333231);
  --nav-tag-color: var(--text-faint, #80797499);
  --nav-tag-color-active: var(--text-muted, #807974);
  --nav-tag-color-hover: var(--text-muted, #807974);
  --pdf-background: var(--background-primary, #FDFCFC);
  --pdf-page-background: var(--background-primary, #FDFCFC);
  --pdf-sidebar-background: var(--background-primary, #FDFCFC);
  --pill-border-color: var(--background-modifier-border, #33323118);
  --pill-color: var(--text-muted, #807974);
  --pill-color-hover: var(--text-normal, #333231);
  --pill-color-remove: var(--text-faint, #80797499);
  --pill-color-remove-hover: var(--text-accent, #AD514C);
  --prompt-background: var(--background-primary, #FDFCFC);
  --raised-background: var(--blur-background, color-mix(in srgb, #FDFCFC 65%, transparent) linear-gradient(#FDFCFC, color-mix(in srgb, #FDFCFC 65%, transparent)));
  --ribbon-background: var(--background-secondary, #F7F3F0);
  --ribbon-background-collapsed: var(--background-primary, #FDFCFC);
  --search-clear-button-color: var(--text-muted, #807974);
  --search-icon-color: var(--text-muted, #807974);
  --search-result-background: var(--background-primary, #FDFCFC);
  --secondary: var(--text-accent, var(--color-accent, #AD514C));
  --setting-group-heading-color: var(--text-normal, #333231);
  --setting-items-background: var(--background-primary-alt, #FDFCFC);
  --setting-items-border-color: var(--background-modifier-border, #33323118);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #807974);
  --shiki-code-background: var(--code-background, #FDFCFC);
  --shiki-code-comment: var(--text-faint, #80797499);
  --shiki-code-function: var(--color-green, #538A8A);
  --shiki-code-important: var(--color-orange, #D28450);
  --shiki-code-keyword: var(--color-pink, #BD71A4);
  --shiki-code-normal: var(--text-muted, #807974);
  --shiki-code-property: var(--color-cyan, #807974);
  --shiki-code-punctuation: var(--text-muted, #807974);
  --shiki-code-string: var(--color-yellow, #D28450);
  --shiki-code-value: var(--color-purple, #804C6E);
  --shiki-gutter-border-color: var(--background-modifier-border, #33323118);
  --shiki-gutter-text-color: var(--text-faint, #80797499);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #807974);
  --shiki-highlight-neutral: var(--shiki-code-normal, #807974);
  --shiki-terminal-dots-color: var(--text-faint, #80797499);
  --slider-track-background: var(--background-modifier-border, #33323118);
  --status-bar-background: var(--background-secondary, #F7F3F0);
  --status-bar-border-color: var(--divider-color, #33323118);
  --status-bar-text-color: var(--text-muted, #807974);
  --suggestion-background: var(--background-primary, #FDFCFC);
  --sync-avatar-color-1: var(--color-red, #AD514C);
  --sync-avatar-color-2: var(--color-orange, #D28450);
  --sync-avatar-color-3: var(--color-yellow, #D28450);
  --sync-avatar-color-4: var(--color-green, #538A8A);
  --sync-avatar-color-5: var(--color-cyan, #807974);
  --sync-avatar-color-6: var(--color-blue, #356B94);
  --sync-avatar-color-7: var(--color-purple, #804C6E);
  --sync-avatar-color-8: var(--color-pink, #BD71A4);
  --tab-background-active: var(--background-primary, #FDFCFC);
  --tab-container-background: var(--background-secondary, #F7F3F0);
  --tab-outline-color: var(--divider-color, #33323118);
  --tab-switcher-background: var(--background-secondary, #F7F3F0);
  --tab-text-color: var(--text-faint, #80797499);
  --tab-text-color-active: var(--text-muted, #807974);
  --tab-text-color-focused: var(--text-muted, #807974);
  --tab-text-color-focused-active: var(--text-muted, #807974);
  --tab-text-color-focused-active-current: var(--text-normal, #333231);
  --tab-text-color-focused-highlighted: var(--text-accent, #AD514C);
  --table-add-button-border-color: var(--background-modifier-border, #33323118);
  --table-border-color: var(--background-modifier-border, #33323118);
  --table-drag-handle-background-active: var(--table-selection-border-color, #538a8a);
  --table-drag-handle-color: var(--text-faint, #80797499);
  --table-drag-handle-color-active: var(--text-on-accent, #FDFCFC);
  --table-header-border-color: var(--table-border-color, #33323118);
  --table-header-color: var(--text-normal, #333231);
  --table-selection-border-color: var(--interactive-accent, #538a8a);
  --tag-color: var(--text-accent, #AD514C);
  --tag-color-hover: var(--text-accent, #AD514C);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #cc645e));
  --text-accent: var(--color-accent, #AD514C);
  --text-accent-hover: var(--color-accent-2, #cc645e);
  --text-error: var(--color-red, #AD514C);
  --text-faint: var(--color-base-50, #80797499);
  --text-muted: var(--color-base-70, #807974);
  --text-normal: var(--color-base-100, #333231);
  --text-on-accent: #FDFCFC;
  --text-on-accent-inverted: #333231;
  --text-success: var(--color-green, #538a8a);
  --text-warning: var(--color-orange, #AD514C);
  --titlebar-background: var(--background-secondary, #F7F3F0);
  --titlebar-background-focused: var(--background-secondary-alt, #F7F3F0);
  --titlebar-border-color: var(--background-modifier-border, #33323118);
  --titlebar-text-color: var(--text-muted, #807974);
  --titlebar-text-color-focused: var(--text-normal, #333231);
  --vault-profile-color: var(--text-normal, #333231);
  --vault-profile-color-hover: var(--vault-profile-color, #333231);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #F7F3F0);
  background-color: var(--tab-container-background, rgb(247, 243, 240));
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(253, 252, 252));
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(247, 243, 240));
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(51, 50, 49, 0.094);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #F7F3F0);
  background-color: var(--tab-container-background, rgb(247, 243, 240));
  border-left-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(51, 50, 49));
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(51, 50, 49));
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(51, 50, 49));
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(51, 50, 49));
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(250, 180, 133, 0.533));
  color: var(--text-normal, rgb(51, 50, 49));
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body del {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(51, 50, 49));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(128, 121, 116, 0.6);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(83, 138, 138));
  border-color: rgb(83, 138, 138);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(128, 121, 116));
  outline: rgb(128, 121, 116) none 0px;
  text-decoration-color: rgb(128, 121, 116);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(173, 81, 76));
  outline: rgb(173, 81, 76) none 0px;
  text-decoration-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(173, 81, 76));
  outline: rgb(173, 81, 76) none 0px;
  text-decoration-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(173, 81, 76));
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(173, 81, 76));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body dt {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ol > li {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ul > li {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgba(128, 121, 116, 0.6));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body table {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: var(--table-text-color, rgb(51, 50, 49));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: var(--table-header-color, rgb(51, 50, 49));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(253, 252, 252));
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: var(--code-normal, rgb(51, 50, 49));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(253, 252, 252));
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body figcaption {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #FDFCFC);
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(253, 252, 252));
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(83, 138, 138);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(128, 121, 116, 0.6);
  border-left-color: rgba(128, 121, 116, 0.6);
  border-right-color: rgba(128, 121, 116, 0.6);
  border-top-color: rgba(128, 121, 116, 0.6);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 132, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 132, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(128, 121, 116);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 132, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 132, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(128, 76, 110);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 138, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 138, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 138, 138);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 120, 113, 108);
  background: rgba(120, 113, 108, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 173, 81, 76);
  background: rgba(173, 81, 76, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 81, 76, 0.25);
  border-left-color: rgba(173, 81, 76, 0.25);
  border-right-color: rgba(173, 81, 76, 0.25);
  border-top-color: rgba(173, 81, 76, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 173, 81, 76);
  background: rgba(173, 81, 76, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 81, 76, 0.25);
  border-left-color: rgba(173, 81, 76, 0.25);
  border-right-color: rgba(173, 81, 76, 0.25);
  border-top-color: rgba(173, 81, 76, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 128, 76, 110);
  background: rgba(128, 76, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(128, 76, 110, 0.25);
  border-left-color: rgba(128, 76, 110, 0.25);
  border-right-color: rgba(128, 76, 110, 0.25);
  border-top-color: rgba(128, 76, 110, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 173, 81, 76);
  background: rgba(173, 81, 76, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 81, 76, 0.25);
  border-left-color: rgba(173, 81, 76, 0.25);
  border-right-color: rgba(173, 81, 76, 0.25);
  border-top-color: rgba(173, 81, 76, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 53, 107, 148);
  background: rgba(53, 107, 148, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 53, 107, 148);
  background: rgba(53, 107, 148, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 210, 132, 80);
  background: rgba(210, 132, 80, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 132, 80, 0.25);
  border-left-color: rgba(210, 132, 80, 0.25);
  border-right-color: rgba(210, 132, 80, 0.25);
  border-top-color: rgba(210, 132, 80, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 83, 138, 138);
  background: rgba(83, 138, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(83, 138, 138, 0.25);
  border-left-color: rgba(83, 138, 138, 0.25);
  border-right-color: rgba(83, 138, 138, 0.25);
  border-top-color: rgba(83, 138, 138, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 120, 113, 108);
  background: rgba(120, 113, 108, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 53, 107, 148);
  background: rgba(53, 107, 148, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 210, 132, 80);
  background: rgba(210, 132, 80, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 132, 80, 0.25);
  border-left-color: rgba(210, 132, 80, 0.25);
  border-right-color: rgba(210, 132, 80, 0.25);
  border-top-color: rgba(210, 132, 80, 0.25);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(53, 107, 148));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(51, 50, 49);
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
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: var(--text-normal, rgb(51, 50, 49));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(253, 252, 252));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 243, 240);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(3, 70, 54, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(3, 70, 54, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(3, 70, 54, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(3, 70, 54, 0.15));
  --pill-color: var(--tag-color, #AD514C);
  --pill-color-hover: var(--tag-color-hover, #AD514C);
  --pill-color-remove: var(--tag-color, #AD514C);
  --pill-color-remove-hover: var(--tag-color-hover, #AD514C);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(173, 81, 76);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(51, 50, 49));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(51, 50, 49));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(51, 50, 49));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(51, 50, 49));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(51, 50, 49));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(51, 50, 49));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(51, 50, 49));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(51, 50, 49));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 53, 107, 148);
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(128, 121, 116));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(128, 121, 116));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(51, 50, 49);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: var(--icon-color, rgb(128, 121, 116));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(247, 243, 240));
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: var(--status-bar-text-color, rgb(128, 121, 116));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(128, 121, 116);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(128, 121, 116));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(128, 121, 116);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(128, 121, 116));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: var(--icon-color, rgb(128, 121, 116));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(128, 121, 116);
  stroke: rgb(128, 121, 116);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(128, 121, 116, 0.6));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(51, 50, 49));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(253, 252, 252));
  border-color: rgb(51, 50, 49);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(51, 50, 49, 0.094);
  color: var(--table-header-color, rgb(51, 50, 49));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: var(--text-muted, rgb(128, 121, 116));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(51, 50, 49, 0.094);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(3, 70, 54, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(3, 70, 54, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(3, 70, 54, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(3, 70, 54, 0.15));
  --pill-color: var(--tag-color, #AD514C);
  --pill-color-hover: var(--tag-color-hover, #AD514C);
  --pill-color-remove: var(--tag-color, #AD514C);
  --pill-color-remove-hover: var(--tag-color-hover, #AD514C);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  color: var(--pill-color, rgb(173, 81, 76));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(253, 252, 252));
  color: var(--text-normal, rgb(51, 50, 49));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(247, 243, 240));
  border-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(247, 243, 240));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(51, 50, 49);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(247, 243, 240));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(51, 50, 49));
}

html[saved-theme="light"] body abbr {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: var(--text-normal, rgb(128, 121, 116));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(253, 252, 252));
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: var(--code-normal, rgb(51, 50, 49));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body sub {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body summary {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body sup {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
  color: var(--tag-color, rgb(173, 81, 76));
}`,
  },
};
