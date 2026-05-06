import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "base16-default-dark",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: var(--color-base-30, #383838);
  --background-modifier-box-shadow: none;
  --background-modifier-cover: rgba(24, 24, 24, 0.8);
  --background-modifier-error: var(--color-red, #ab4642);
  --background-modifier-error-hover: var(--color-red, #ab4642);
  --background-modifier-error-rgb: var(--color-red-rgb, 171, 70, 66);
  --background-modifier-form-field: var(--color-base-25, #181818);
  --background-modifier-form-field-highlighted: #181818;
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #181818);
  --background-modifier-success: var(--color-green, #a1b56c);
  --background-primary: var(--color-base-00, #181818);
  --background-primary-alt: var(--color-base-10, #181818);
  --background-secondary: var(--color-base-20, #181818);
  --background-secondary-alt: var(--color-base-30, #181818);
  --bases-cards-background: var(--background-primary, #181818);
  --bases-cards-cover-background: var(--background-primary-alt, #181818);
  --bases-charts-accent: var(--interactive-accent, #7cafc2);
  --bases-embed-border-color: var(--background-modifier-border, #383838);
  --bases-group-heading-property-color: var(--text-muted, #b8b8b8);
  --bases-table-border-color: var(--table-border-color, #383838);
  --bases-table-cell-background-active: var(--background-primary, #181818);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #181818);
  --bases-table-group-background: var(--background-primary-alt, #181818);
  --bases-table-header-background: var(--background-primary, #181818);
  --bases-table-header-color: var(--text-muted, #b8b8b8);
  --bases-table-summary-background: var(--background-primary, #181818);
  --blockquote-border-color: var(--interactive-accent, #7cafc2);
  --bold-color: #ab4642;
  --bullet-new-color: rgb(72, 72, 72);
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, #181818);
  --canvas-card-label-color: var(--text-faint, #585858);
  --caret-color: var(--text-normal, #d8d8d8);
  --checkbox-border-color: var(--text-faint, #585858);
  --checkbox-border-color-hover: var(--text-muted, #b8b8b8);
  --checkbox-border-width: 1.5px;
  --checkbox-color: var(--interactive-accent, #7cafc2);
  --checkbox-color-hover: var(--interactive-accent-hover, #86c1b9);
  --checkbox-marker-color: var(--background-primary, #181818);
  --checkbox-radius: var(--radius-s, 0px);
  --checklist-done-color: var(--text-muted, #b8b8b8);
  --code-background: var(--background-primary-alt, #202020);
  --code-border-color: var(--background-modifier-border, #383838);
  --code-comment: var(--text-faint, #585858);
  --code-function: var(--color-yellow, #7cafc2);
  --code-important: var(--color-orange, #f7ca88);
  --code-keyword: var(--color-pink, #ba8baf);
  --code-normal: var(--text-normal, #d8d8d8);
  --code-operator: var(--color-red, #86c1b9);
  --code-property: var(--color-cyan, #f7ca88);
  --code-punctuation: var(--text-muted, #d8d8d8);
  --code-string: var(--color-green, #a1b56c);
  --code-tag: var(--color-red, #ab4642);
  --code-value: var(--color-purple, #f7ca88);
  --collapse-icon-color: var(--text-faint, #585858);
  --collapse-icon-color-collapsed: var(--text-accent, #7cafc2);
  --color-blue: #7cafc2;
  --color-cyan: #86c1b9;
  --color-green: #a1b56c;
  --color-orange: #dc9656;
  --color-pink: #ba8baf;
  --color-purple: #ba8baf;
  --color-red: #ab4642;
  --color-yellow: #f7ca88;
  --dark: var(--text-normal, var(--color-base-100, #d8d8d8));
  --darkgray: var(--text-normal, var(--color-base-100, #d8d8d8));
  --divider-color: var(--background-modifier-border, #383838);
  --divider-color-hover: var(--interactive-accent, #484848);
  --dropdown-background: var(--interactive-normal, #282828);
  --dropdown-background-hover: var(--interactive-hover, #383838);
  --file-header-background: var(--background-primary, #181818);
  --file-header-background-focused: var(--background-primary, #181818);
  --flair-background: var(--interactive-normal, #282828);
  --flair-color: var(--text-normal, #d8d8d8);
  --font-weight-normal: 450;
  --footnote-divider-color: var(--metadata-divider-color, #383838);
  --footnote-id-color: var(--text-muted, #b8b8b8);
  --footnote-id-color-no-occurrences: var(--text-faint, #585858);
  --graph-node: var(--text-muted, #7cafc2);
  --graph-node-attachment: var(--color-yellow, #f7ca88);
  --graph-node-focused: var(--text-accent, #7cafc2);
  --graph-node-tag: var(--color-green, #a1b56c);
  --graph-node-unresolved: var(--text-faint, #585858);
  --graph-text: var(--text-normal, #d8d8d8);
  --gray: var(--text-muted, var(--color-base-70, #b8b8b8));
  --heading-color: #d8d8d8;
  --heading-formatting: var(--text-faint, #585858);
  --hr-color: var(--background-modifier-border, #383838);
  --icon-color: var(--text-muted, #b8b8b8);
  --icon-color-active: var(--text-accent, #7cafc2);
  --icon-color-focused: var(--text-normal, #d8d8d8);
  --icon-color-hover: var(--text-muted, #b8b8b8);
  --inline-code-color: #dc9656;
  --inline-title-color: var(--h1-color, #d8d8d8);
  --input-date-separator: var(--text-faint, #585858);
  --input-placeholder-color: var(--text-faint, #585858);
  --interactive-accent: var(--color-accent, #7cafc2);
  --interactive-accent-hover: var(--color-accent-1, #86c1b9);
  --interactive-accent-rgb: 124, 175, 194;
  --interactive-hover: var(--color-base-35, #383838);
  --interactive-normal: var(--color-base-30, #282828);
  --interactive-success: #a1b56c;
  --italic-color: #a1b56c;
  --light: var(--background-primary, var(--color-base-00, #181818));
  --lightgray: var(--background-secondary, var(--color-base-20, #181818));
  --link-color: var(--text-accent, #7cafc2);
  --link-color-hover: var(--text-accent-hover, #86c1b9);
  --link-external-color: var(--text-accent, #ba8baf);
  --link-external-color-hover: var(--text-accent-hover, #86c1b9);
  --link-internal-color: #7cafc2;
  --link-internal-hover: #86c1b9;
  --link-unresolved-color: var(--text-accent, #888888);
  --list-marker-color: var(--text-faint, #585858);
  --list-marker-color-collapsed: var(--text-accent, #7cafc2);
  --list-marker-color-hover: var(--text-muted, #b8b8b8);
  --menu-background: var(--background-secondary, #181818);
  --metadata-border-color: var(--background-modifier-border, #383838);
  --metadata-divider-color: var(--background-modifier-border, #383838);
  --metadata-gap: 0;
  --metadata-input-text-color: var(--text-normal, #d8d8d8);
  --metadata-label-text-color: var(--text-muted, #b8b8b8);
  --metadata-label-text-color-hover: var(--text-muted, #b8b8b8);
  --metadata-label-width: 5em;
  --metadata-padding: var(--size-4-2, 0) 0;
  --modal-background: var(--background-primary, #181818);
  --nav-collapse-icon-color: var(--collapse-icon-color, #585858);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #585858);
  --nav-heading-color: var(--text-normal, #d8d8d8);
  --nav-heading-color-collapsed: var(--text-faint, #585858);
  --nav-heading-color-collapsed-hover: var(--text-muted, #b8b8b8);
  --nav-heading-color-hover: var(--text-normal, #d8d8d8);
  --nav-item-color: var(--text-muted, #b8b8b8);
  --nav-item-color-active: var(--text-normal, #d8d8d8);
  --nav-item-color-highlighted: var(--text-accent, #7cafc2);
  --nav-item-color-hover: var(--text-normal, #d8d8d8);
  --nav-item-color-selected: var(--text-normal, #d8d8d8);
  --nav-tag-color: var(--text-faint, #585858);
  --nav-tag-color-active: var(--text-muted, #b8b8b8);
  --nav-tag-color-hover: var(--text-muted, #b8b8b8);
  --pdf-background: var(--background-primary, #181818);
  --pdf-page-background: var(--background-primary, #181818);
  --pdf-sidebar-background: var(--background-primary, #181818);
  --pill-border-color: var(--background-modifier-border, #383838);
  --pill-color: var(--text-muted, #b8b8b8);
  --pill-color-hover: var(--text-normal, #d8d8d8);
  --pill-color-remove: var(--text-faint, #585858);
  --pill-color-remove-hover: var(--text-accent, #7cafc2);
  --popover-width: 600px;
  --prompt-background: var(--background-primary, #181818);
  --raised-background: var(--blur-background, color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent)));
  --ribbon-background: var(--background-secondary, #202020);
  --ribbon-background-collapsed: var(--background-primary, #181818);
  --search-clear-button-color: var(--text-muted, #b8b8b8);
  --search-icon-color: var(--text-muted, #b8b8b8);
  --search-result-background: var(--background-primary, #181818);
  --secondary: var(--text-accent, var(--color-accent-1, #7cafc2));
  --setting-group-heading-color: var(--text-normal, #d8d8d8);
  --setting-items-background: var(--background-primary-alt, #181818);
  --setting-items-border-color: var(--background-modifier-border, #383838);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #b8b8b8);
  --shiki-code-background: var(--code-background, #202020);
  --shiki-code-comment: var(--text-faint, #585858);
  --shiki-code-function: var(--color-green, #a1b56c);
  --shiki-code-important: var(--color-orange, #dc9656);
  --shiki-code-keyword: var(--color-pink, #ba8baf);
  --shiki-code-normal: var(--text-muted, #b8b8b8);
  --shiki-code-property: var(--color-cyan, #86c1b9);
  --shiki-code-punctuation: var(--text-muted, #b8b8b8);
  --shiki-code-string: var(--color-yellow, #f7ca88);
  --shiki-code-value: var(--color-purple, #ba8baf);
  --shiki-gutter-border-color: var(--background-modifier-border, #383838);
  --shiki-gutter-text-color: var(--text-faint, #585858);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #b8b8b8);
  --shiki-highlight-neutral: var(--shiki-code-normal, #b8b8b8);
  --shiki-terminal-dots-color: var(--text-faint, #585858);
  --slider-track-background: var(--background-modifier-border, #383838);
  --status-bar-background: var(--background-secondary, #181818);
  --status-bar-border-color: var(--divider-color, #383838);
  --status-bar-text-color: var(--text-muted, #b8b8b8);
  --suggestion-background: var(--background-primary, #181818);
  --sync-avatar-color-1: var(--color-red, #ab4642);
  --sync-avatar-color-2: var(--color-orange, #dc9656);
  --sync-avatar-color-3: var(--color-yellow, #f7ca88);
  --sync-avatar-color-4: var(--color-green, #a1b56c);
  --sync-avatar-color-5: var(--color-cyan, #86c1b9);
  --sync-avatar-color-6: var(--color-blue, #7cafc2);
  --sync-avatar-color-7: var(--color-purple, #ba8baf);
  --sync-avatar-color-8: var(--color-pink, #ba8baf);
  --tab-background-active: var(--background-primary, #282828);
  --tab-container-background: var(--background-secondary, #181818);
  --tab-outline-color: var(--divider-color, #383838);
  --tab-switcher-background: var(--background-secondary, #181818);
  --tab-text-color: var(--text-faint, #b8b8b8);
  --tab-text-color-active: var(--text-muted, #d8d8d8);
  --tab-text-color-focused: var(--text-muted, #d8d8d8);
  --tab-text-color-focused-active: var(--text-muted, #b8b8b8);
  --tab-text-color-focused-active-current: var(--text-normal, #d8d8d8);
  --tab-text-color-focused-highlighted: var(--text-accent, #7cafc2);
  --table-add-button-border-color: var(--background-modifier-border, #383838);
  --table-border-color: var(--background-modifier-border, #383838);
  --table-drag-handle-background-active: var(--table-selection-border-color, #7cafc2);
  --table-drag-handle-color: var(--text-faint, #585858);
  --table-drag-handle-color-active: var(--text-on-accent, #181818);
  --table-header-border-color: var(--table-border-color, #383838);
  --table-header-color: var(--text-normal, #d8d8d8);
  --table-row-even-background: transparent;
  --table-row-odd-background: transparent;
  --table-selection-border-color: var(--interactive-accent, #7cafc2);
  --tag-color: var(--text-accent, #7cafc2);
  --tag-color-hover: var(--text-accent, #7cafc2);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #86c1b9));
  --text-accent: var(--color-accent-1, #7cafc2);
  --text-accent-hover: var(--color-accent-2, #86c1b9);
  --text-error: var(--color-red, #ab4642);
  --text-faint: var(--color-base-50, #585858);
  --text-muted: var(--color-base-70, #b8b8b8);
  --text-normal: var(--color-base-100, #d8d8d8);
  --text-on-accent: #181818;
  --text-success: var(--color-green, #a1b56c);
  --text-warning: var(--color-orange, #dc9656);
  --titlebar-background: var(--background-secondary, #181818);
  --titlebar-background-focused: var(--titlebar-background, #181818);
  --titlebar-border-color: var(--background-modifier-border, #383838);
  --titlebar-text-color: var(--text-muted, #b8b8b8);
  --titlebar-text-color-focused: var(--text-normal, #d8d8d8);
  --toggle-border-color: #383838;
  --toggle-thumb-color: #d8d8d8;
  --vault-profile-color: var(--text-normal, #d8d8d8);
  --vault-profile-color-hover: var(--vault-profile-color, #d8d8d8);
  --vim-cursor: #7cafc2;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #181818);
  background-color: var(--tab-container-background, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(56, 56, 56);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #181818);
  background-color: var(--tab-container-background, rgb(24, 24, 24));
  border-left-color: rgb(56, 56, 56);
  border-left-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body html {
  --bullet-new-color: rgb(72, 72, 72);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(171, 70, 66));
  font-weight: var(--font-weight-normal, 700);
  outline: rgb(171, 70, 66) none 0px;
  text-decoration-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(161, 181, 108));
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(161, 181, 108) none 0px;
  text-decoration-color: rgb(161, 181, 108);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(161, 181, 108));
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(161, 181, 108) none 0px;
  text-decoration-color: rgb(161, 181, 108);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(161, 181, 108));
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(161, 181, 108) none 0px;
  text-decoration-color: rgb(161, 181, 108);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(171, 70, 66));
  font-weight: var(--font-weight-normal, 700);
  outline: rgb(171, 70, 66) none 0px;
  text-decoration-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(210, 185, 60, 0.25));
  color: var(--text-normal, rgb(216, 216, 216));
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body del {
  color: rgb(216, 216, 216);
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(88, 88, 88);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(160, 160, 160));
  border-color: rgb(88, 88, 88);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(184, 184, 184));
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(184, 184, 184) none 0px;
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(186, 139, 175));
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(186, 139, 175) none 0px;
  text-decoration-color: rgb(186, 139, 175);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(124, 175, 194));
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(124, 175, 194) none 0px;
  text-decoration-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(136, 136, 136));
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(136, 136, 136));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--link-color, rgb(124, 175, 194));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgb(216, 216, 216));
  font-style: var(--blockquote-font-style, italic);
  font-weight: var(--font-weight-normal, 450);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(216, 216, 216);
  margin-bottom: 0px;
  margin-left: 223.562px;
  margin-right: 223.578px;
  margin-top: 0px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(48, 48, 48);
  border-bottom-width: 0px;
  border-left-color: rgb(48, 48, 48);
  border-left-width: 0px;
  border-right-color: rgb(48, 48, 48);
  border-right-width: 0px;
  border-top-color: rgb(48, 48, 48);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(216, 216, 216));
  font-weight: var(--font-weight-normal, 450);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-width: 2px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(56, 56, 56);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(216, 216, 216));
  font-weight: var(--font-weight-normal, 700);
  letter-spacing: 1.024px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: left;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-width: 0px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
  border-top-color: rgb(64, 64, 64);
  border-top-width: 0px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-width: 0px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
  border-top-color: rgb(64, 64, 64);
  border-top-width: 0px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(26, 26, 26));
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: var(--inline-code-color, rgb(220, 150, 86));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(26, 26, 26));
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #202020);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(24, 24, 24));
  border-bottom-color: rgb(184, 184, 184);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 184, 184);
  border-left-width: 0px;
  border-right-color: rgb(184, 184, 184);
  border-right-width: 0px;
  border-top-color: rgb(184, 184, 184);
  border-top-width: 0px;
  color: var(--text-muted, rgb(184, 184, 184));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, rgb(24, 24, 24));
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, rgb(24, 24, 24));
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(88, 88, 88);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(88, 88, 88);
  border-left-width: 0px;
  border-right-color: rgb(88, 88, 88);
  border-right-width: 0px;
  border-top-color: rgb(88, 88, 88);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 150, 86);
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
  background-color: rgb(247, 202, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(134, 193, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 202, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 202, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(186, 139, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(161, 181, 108);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(161, 181, 108);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(161, 181, 108);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="ai"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bot"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="code"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="contacts"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="documentation"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="image"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="img"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="link"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="mind"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="mindmap"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="my"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="picture"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 8px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="toc"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a1b56c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #181818;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --divider-vertical-height: 100%;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --hr-color: #383838;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --menu-background: #181818;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --setting-group-heading-color: #d8d8d8;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #202020;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #585858;
  --shiki-code-function: #a1b56c;
  --shiki-code-important: #dc9656;
  --shiki-code-keyword: #ba8baf;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #86c1b9;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #f7ca88;
  --shiki-code-value: #ba8baf;
  --shiki-gutter-border-color: #383838;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #585858;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #585858;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #181818;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #383838;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-background: transparent;
  --table-header-border-color: #383838;
  --table-header-border-width: 1px;
  --table-header-color: #d8d8d8;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #7cafc2;
  --table-text-size: 16px;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tag-size: 0.875em;
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-weight-normal, 450);
  line-height: 24px;
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 8px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(232, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(232, 232, 232);
  border-top-width: 0px;
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(232, 232, 232));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: rgb(216, 216, 216);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="ai"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 8V4H8'/%3E%3Crect width='16' height='12' x='4' y='8' rx='2'/%3E%3Cpath d='M2 14h2'/%3E%3Cpath d='M20 14h2'/%3E%3Cpath d='M15 13v2'/%3E%3Cpath d='M9 13v2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bot"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 8V4H8'/%3E%3Crect width='16' height='12' x='4' y='8' rx='2'/%3E%3Cpath d='M2 14h2'/%3E%3Cpath d='M20 14h2'/%3E%3Cpath d='M15 13v2'/%3E%3Cpath d='M9 13v2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 18 6-6-6-6'/%3E%3Cpath d='m8 6-6 6 6 6'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="contacts"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Cpath d='M16 3.128a4 4 0 0 1 0 7.744'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.87'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="documentation"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 17V5a2 2 0 0 0-2-2H4'/%3E%3Cpath d='M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="img"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="link"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="mind"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 18V5'/%3E%3Cpath d='M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4'/%3E%3Cpath d='M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5'/%3E%3Cpath d='M17.997 5.125a4 4 0 0 1 2.526 5.77'/%3E%3Cpath d='M18 18a4 4 0 0 0 2-7.464'/%3E%3Cpath d='M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517'/%3E%3Cpath d='M6 18a4 4 0 0 1-2-7.464'/%3E%3Cpath d='M6.003 5.125a4 4 0 0 0-2.526 5.77'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="mindmap"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 18V5'/%3E%3Cpath d='M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4'/%3E%3Cpath d='M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5'/%3E%3Cpath d='M17.997 5.125a4 4 0 0 1 2.526 5.77'/%3E%3Cpath d='M18 18a4 4 0 0 0 2-7.464'/%3E%3Cpath d='M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517'/%3E%3Cpath d='M6 18a4 4 0 0 1-2-7.464'/%3E%3Cpath d='M6.003 5.125a4 4 0 0 0-2.526 5.77'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="my"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.5 3 8 9l4 13 4-13-2.5-6'/%3E%3Cpath d='M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z'/%3E%3Cpath d='M2 9h20'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="picture"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="toc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M13 12h8'/%3E%3Cpath d='M13 19h8'/%3E%3Cpath d='M3 10a2 2 0 0 0 2 2h3'/%3E%3Cpath d='M3 5v12a2 2 0 0 0 2 2h3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(56, 56, 56);
  border-top-width: 0px;
  color: var(--text-normal, rgb(216, 216, 216));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(24, 24, 24));
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(216, 216, 216);
  font-weight: var(--font-weight-normal, 450);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(216, 216, 216);
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(124, 175, 194, 0.05));
  --pill-color: var(--tag-color, #7cafc2);
  --pill-color-hover: var(--tag-color-hover, #7cafc2);
  --pill-color-remove: var(--tag-color, #7cafc2);
  --pill-color-remove-hover: var(--tag-color-hover, #7cafc2);
  background-color: var(--pill-background, rgba(124, 175, 194, 0.05));
  color: var(--pill-color, rgb(124, 175, 194));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(171, 70, 66);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(216, 216, 216));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight-normal, 650);
  line-height: var(--h1-line-height, 23.2992px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--h1-color, rgb(216, 216, 216));
  font-weight: var(--font-weight-normal, 650);
}

html[saved-theme="dark"] body h2 {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(171, 70, 66);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(216, 216, 216));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight-normal, 650);
  line-height: var(--h2-line-height, 21.0528px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(171, 70, 66);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(216, 216, 216));
  font-weight: var(--font-weight-normal, 650);
  line-height: var(--inline-title-line-height, 23.2992px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 38px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h3 {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(171, 70, 66);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(216, 216, 216));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight-normal, 600);
  line-height: var(--h3-line-height, 18.9792px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h4 {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(171, 70, 66);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(216, 216, 216));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight-normal, 600);
  line-height: var(--h4-line-height, 17.1072px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h5 {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(171, 70, 66);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(216, 216, 216));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight-normal, 600);
  line-height: var(--h5-line-height, 15.4944px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(171, 70, 66);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(216, 216, 216));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight-normal, 600);
  line-height: var(--h6-line-height, 14.4px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(56, 56, 56);
  border-top-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 4px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(184, 184, 184));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(184, 184, 184));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--font-weight-normal, 450);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 184, 184);
  border-left-width: 0px;
  border-right-color: rgb(184, 184, 184);
  border-right-width: 0px;
  border-top-color: rgb(184, 184, 184);
  border-top-width: 0px;
  color: var(--icon-color, rgb(184, 184, 184));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(24, 24, 24));
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(56, 56, 56);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(184, 184, 184));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(184, 184, 184);
  font-weight: var(--font-weight-normal, 450);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(216, 216, 216);
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(184, 184, 184));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(184, 184, 184));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(184, 184, 184);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 184, 184);
  border-left-width: 0px;
  border-right-color: rgb(184, 184, 184);
  border-right-width: 0px;
  border-top-color: rgb(184, 184, 184);
  border-top-width: 0px;
  color: var(--icon-color, rgb(184, 184, 184));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(184, 184, 184);
  stroke: rgb(184, 184, 184);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(184, 184, 184);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 184, 184);
  border-left-width: 0px;
  border-right-color: rgb(184, 184, 184);
  border-right-width: 0px;
  border-top-color: rgb(184, 184, 184);
  border-top-width: 0px;
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(88, 88, 88));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(216, 216, 216));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(24, 24, 24));
  border-color: rgb(216, 216, 216);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(56, 56, 56) rgb(56, 56, 56) rgb(72, 72, 72);
  color: var(--table-header-color, rgb(216, 216, 216));
  font-weight: var(--font-weight-normal, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(56, 56, 56);
  border-top-width: 0px;
  color: var(--text-muted, rgb(184, 184, 184));
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(184, 184, 184);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 184, 184);
  border-left-width: 0px;
  border-right-color: rgb(184, 184, 184);
  border-right-width: 0px;
  border-top-color: rgb(184, 184, 184);
  border-top-width: 0px;
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 184, 184);
  border-left-width: 0px;
  border-right-color: rgb(184, 184, 184);
  border-right-width: 0px;
  border-top-color: rgb(184, 184, 184);
  border-top-width: 0px;
  color: rgb(184, 184, 184);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 3px;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(184, 184, 184);
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(56, 56, 56);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(184, 184, 184);
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(124, 175, 194, 0.05));
  --pill-color: var(--tag-color, #7cafc2);
  --pill-color-hover: var(--tag-color-hover, #7cafc2);
  --pill-color-remove: var(--tag-color, #7cafc2);
  --pill-color-remove-hover: var(--tag-color-hover, #7cafc2);
  background-color: var(--pill-background, rgba(124, 175, 194, 0.05));
  color: var(--pill-color, rgb(124, 175, 194));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(24, 24, 24));
  color: var(--text-normal, rgb(216, 216, 216));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(24, 24, 24));
  border-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(24, 24, 24));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(216, 216, 216);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(24, 24, 24));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: var(--text-normal, rgb(216, 216, 216));
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body abbr {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 184, 184);
  border-left-width: 0px;
  border-right-color: rgb(184, 184, 184);
  border-right-width: 0px;
  border-top-color: rgb(184, 184, 184);
  border-top-width: 0px;
  color: var(--text-normal, rgb(184, 184, 184));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(32, 32, 32));
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
  color: var(--code-normal, rgb(216, 216, 216));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-width: 0px;
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-right-width: 0px;
  border-top-color: rgb(216, 216, 216);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body summary {
  color: rgb(216, 216, 216);
  font-weight: var(--font-weight-normal, 450);
}

html[saved-theme="dark"] body sup {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(124, 175, 194, 0.05));
  color: var(--tag-color, rgb(124, 175, 194));
}`,
  },
  light: {
    base: `:root:root {
  --bullet-new-color: rgb(72, 72, 72);
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-info: var(--callout-info, 8, 109, 221);
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 8, 109, 221);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --metadata-gap: 0;
  --metadata-label-width: 5em;
  --metadata-padding: var(--size-4-2, 0) 0;
  --popover-width: 600px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body html {
  --bullet-new-color: rgb(72, 72, 72);
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(210, 185, 60, 0.25));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(160, 160, 160));
  border-color: rgb(171, 171, 171);
}`,
    links: `html[saved-theme="light"] body a.internal-link.broken {
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(138, 92, 245));
}`,
    tables: `html[saved-theme="light"] body table {
  margin-bottom: 0px;
  margin-left: 231.391px;
  margin-right: 231.391px;
  margin-top: 0px;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, rgb(255, 255, 255));
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, rgb(255, 255, 255));
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
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
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="ai"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bot"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="code"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="contacts"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="documentation"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="image"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="img"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="link"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="mind"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="mindmap"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="my"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="picture"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="toc"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #e0e0e0;
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: #e0e0e0;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f6f6f6;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #e0e0e0;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="ai"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bot"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="contacts"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="documentation"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="img"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="link"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="mind"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="mindmap"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="my"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="picture"] {
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

html[saved-theme="light"] body .callout[data-callout="toc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body h1 {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 49, 71);
  border-left-style: solid;
  border-left-width: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  line-height: var(--h1-line-height, 23.2992px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--h1-color, rgb(34, 34, 34));
  font-weight: var(--inline-title-weight, 650);
}

html[saved-theme="light"] body h2 {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 49, 71);
  border-left-style: solid;
  border-left-width: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  line-height: var(--h2-line-height, 21.0528px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 49, 71);
  border-left-style: solid;
  border-left-width: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-weight: var(--inline-title-weight, 650);
  line-height: var(--inline-title-line-height, 23.2992px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 38px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h3 {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 49, 71);
  border-left-style: solid;
  border-left-width: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  line-height: var(--h3-line-height, 18.9792px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h4 {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 49, 71);
  border-left-style: solid;
  border-left-width: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  line-height: var(--h4-line-height, 17.1072px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h5 {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 49, 71);
  border-left-style: solid;
  border-left-width: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  line-height: var(--h5-line-height, 15.4944px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h6 {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 49, 71);
  border-left-style: solid;
  border-left-width: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: var(--font-heading-theme, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  line-height: var(--h6-line-height, 14.4px);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 3px;
}`,
  },
};
