import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "evangelion", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: var(--color-base-30, #2c1c42);
  --background-modifier-cover: #151515;
  --background-modifier-error: var(--color-red, #db6088);
  --background-modifier-error-hover: var(--color-red, #db6088);
  --background-modifier-error-rgb: var(--color-red-rgb, 61, 0, 0);
  --background-modifier-form-field: var(--color-base-25, rgba(0, 0, 0, 0.3));
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(0, 0, 0, 0.3));
  --background-modifier-success: var(--color-green, #8edf5f);
  --background-primary: var(--color-base-00, #201430);
  --background-primary-alt: var(--color-base-10, #39274c);
  --background-secondary: var(--color-base-20, #452f5c);
  --background-secondary-alt: var(--color-base-30, #483160);
  --bases-cards-background: var(--background-primary, #201430);
  --bases-cards-cover-background: var(--background-primary-alt, #39274c);
  --bases-embed-border-color: var(--background-modifier-border, #2c1c42);
  --bases-group-heading-property-color: var(--text-muted, #d4d4d4);
  --bases-table-border-color: var(--table-border-color, #483160);
  --bases-table-cell-background-active: var(--background-primary, #201430);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #39274c);
  --bases-table-cell-background-selected: var(--table-selection, #9cda7c);
  --bases-table-group-background: var(--background-primary-alt, #39274c);
  --bases-table-header-background: var(--background-primary, #201430);
  --bases-table-header-color: var(--text-muted, #d4d4d4);
  --bases-table-summary-background: var(--background-primary, #201430);
  --blockquote-border-color: var(--interactive-accent, #8edf5f);
  --button-radius: var(--input-radius, 0px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, darken);
  --callout-bug: var(--callout-bug, #201430);
  --callout-default: var(--callout-default, #201430);
  --callout-error: var(--callout-error, #201430);
  --callout-example: var(--callout-example, #201430);
  --callout-fail: var(--callout-fail, #201430);
  --callout-info: var(--callout-info, #201430);
  --callout-question: var(--callout-question, #201430);
  --callout-quote: var(--callout-quote, #201430);
  --callout-success: var(--callout-success, #201430);
  --callout-summary: var(--callout-summary, #201430);
  --callout-tip: var(--callout-tip, #201430);
  --callout-todo: var(--callout-todo, #201430);
  --callout-warning: var(--callout-warning, #201430);
  --canvas-background: var(--background-primary, #201430);
  --canvas-card-label-color: var(--text-faint, #ada4a0);
  --caret-color: var(--text-normal, #e1d6f8);
  --checkbox-border-color: var(--text-faint, #ada4a0);
  --checkbox-border-color-hover: var(--text-muted, #d4d4d4);
  --checkbox-color: var(--interactive-accent, #8edf5f);
  --checkbox-color-hover: var(--interactive-accent-hover, #87ff5f);
  --checkbox-marker-color: var(--background-primary, #201430);
  --checklist-done-color: var(--text-muted, #d4d4d4);
  --code-background: var(--background-primary-alt, #30213f);
  --code-border-color: var(--background-modifier-border, #2c1c42);
  --code-comment: var(--text-faint, #a1a0ad);
  --code-function: var(--color-yellow, #9cda7c);
  --code-important: var(--color-orange, #8bd450);
  --code-keyword: var(--color-pink, #87ff5f);
  --code-normal: var(--text-normal, #e1d6f8);
  --code-operator: var(--color-red, #b968fc);
  --code-property: var(--color-cyan, #ce67f0);
  --code-punctuation: var(--text-muted, #b968fc);
  --code-string: var(--color-green, #ab92fc);
  --code-tag: var(--color-red, #e6bb85);
  --code-value: var(--color-purple, #d99145);
  --collapse-icon-color: var(--text-faint, #ada4a0);
  --collapse-icon-color-collapsed: var(--text-accent, #875faf);
  --dark: var(--text-normal, var(--color-base-100, #e1d6f8));
  --darkgray: var(--text-normal, var(--color-base-100, #e1d6f8));
  --divider-color: var(--background-modifier-border, #452f5c);
  --divider-color-hover: var(--interactive-accent, #39274c);
  --dropdown-background: var(--interactive-normal, #39274c);
  --dropdown-background-hover: var(--interactive-hover, #444444);
  --file-header-background: var(--background-primary, #201430);
  --file-header-background-focused: var(--background-primary, #201430);
  --flair-background: var(--interactive-normal, #43492a);
  --flair-color: var(--text-normal, #e1d6f8);
  --footnote-divider-color: var(--metadata-divider-color, #2c1c42);
  --footnote-id-color: var(--text-muted, #d4d4d4);
  --footnote-id-color-no-occurrences: var(--text-faint, #ada4a0);
  --graph-node: var(--text-muted, #d4d4d4);
  --graph-node-focused: var(--text-accent, #875faf);
  --graph-node-unresolved: var(--text-faint, #ada4a0);
  --graph-text: var(--text-normal, #e1d6f8);
  --gray: var(--text-muted, var(--color-base-70, #d4d4d4));
  --heading-formatting: var(--text-faint, #ada4a0);
  --highlight-mix-blend-mode: darken;
  --hr-color: var(--background-modifier-border, #2c1c42);
  --icon-color: var(--text-muted, #d4d4d4);
  --icon-color-active: var(--text-accent, #875faf);
  --icon-color-focused: var(--text-normal, #e1d6f8);
  --icon-color-hover: var(--text-muted, #d4d4d4);
  --input-date-separator: var(--text-faint, #ada4a0);
  --input-placeholder-color: var(--text-faint, #ada4a0);
  --input-radius: 0px;
  --interactive-accent: var(--color-accent, #8edf5f);
  --interactive-accent-hover: var(--color-accent-1, #87ff5f);
  --interactive-hover: var(--color-base-35, #444444);
  --interactive-normal: var(--color-base-30, #43492a);
  --interactive-success: #8edf5f;
  --light: var(--background-primary, var(--color-base-00, #201430));
  --lightgray: var(--background-secondary, var(--color-base-20, #452f5c));
  --link-color: var(--text-accent, #b968fc);
  --link-color-hover: var(--text-accent-hover, #ce67f0);
  --link-decoration: dashed;
  --link-external-color: var(--text-accent, #b968fc);
  --link-external-color-hover: var(--text-accent-hover, #ce67f0);
  --link-external-decoration: wavy;
  --link-unresolved-color: var(--text-accent, #666);
  --list-marker-color: var(--text-faint, #ada4a0);
  --list-marker-color-collapsed: var(--text-accent, #875faf);
  --list-marker-color-hover: var(--text-muted, #d4d4d4);
  --menu-background: var(--background-secondary, #452f5c);
  --metadata-border-color: var(--background-modifier-border, #2c1c42);
  --metadata-divider-color: var(--background-modifier-border, #2c1c42);
  --metadata-input-text-color: var(--text-normal, #e1d6f8);
  --metadata-label-text-color: var(--text-muted, #d4d4d4);
  --metadata-label-text-color-hover: var(--text-muted, #d4d4d4);
  --modal-background: var(--background-primary, #201430);
  --nav-collapse-icon-color: var(--collapse-icon-color, #d99145);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #c88034);
  --nav-heading-color: var(--text-normal, #e1d6f8);
  --nav-heading-color-collapsed: var(--text-faint, #ada4a0);
  --nav-heading-color-collapsed-hover: var(--text-muted, #d4d4d4);
  --nav-heading-color-hover: var(--text-normal, #e1d6f8);
  --nav-indentation-guide-color: var(--indentation-guide-color, #28163b);
  --nav-item-color: var(--text-muted, #d4d4d4);
  --nav-item-color-active: var(--text-normal, #e1d6f8);
  --nav-item-color-highlighted: var(--text-accent, #875faf);
  --nav-item-color-hover: var(--text-normal, #e1d6f8);
  --nav-item-color-selected: var(--text-normal, #e1d6f8);
  --nav-tag-color: var(--text-faint, #ada4a0);
  --nav-tag-color-active: var(--text-muted, #d4d4d4);
  --nav-tag-color-hover: var(--text-muted, #d4d4d4);
  --pdf-background: var(--background-primary, #201430);
  --pdf-page-background: var(--background-primary, #201430);
  --pdf-sidebar-background: var(--background-primary, #201430);
  --pill-border-color: var(--background-modifier-border, #2c1c42);
  --pill-color: var(--text-muted, #d4d4d4);
  --pill-color-hover: var(--text-normal, #e1d6f8);
  --pill-color-remove: var(--text-faint, #ada4a0);
  --pill-color-remove-hover: var(--text-accent, #875faf);
  --prompt-background: var(--background-primary, #201430);
  --raised-background: var(--blur-background, color-mix(in srgb, #43492a 65%, transparent) linear-gradient(#43492a, color-mix(in srgb, #43492a 65%, transparent)));
  --ribbon-background: var(--background-secondary, #483160);
  --ribbon-background-collapsed: var(--background-primary, #201430);
  --scrollbar-active-th: rgba(255, 255, 255, 0.2);
  --search-clear-button-color: var(--text-muted, #d4d4d4);
  --search-icon-color: var(--text-muted, #d4d4d4);
  --search-result-background: var(--background-primary, #201430);
  --secondary: var(--text-accent, var(--color-accent-1, #875faf));
  --setting-group-heading-color: var(--text-normal, #e1d6f8);
  --setting-items-background: var(--background-primary-alt, #39274c);
  --setting-items-border-color: var(--background-modifier-border, #2c1c42);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #d4d4d4);
  --shiki-code-background: var(--code-background, #30213f);
  --shiki-code-comment: var(--text-faint, #ada4a0);
  --shiki-code-normal: var(--text-muted, #d4d4d4);
  --shiki-code-punctuation: var(--text-muted, #d4d4d4);
  --shiki-gutter-border-color: var(--background-modifier-border, #2c1c42);
  --shiki-gutter-text-color: var(--text-faint, #ada4a0);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #d4d4d4);
  --shiki-highlight-neutral: var(--shiki-code-normal, #d4d4d4);
  --shiki-terminal-dots-color: var(--text-faint, #ada4a0);
  --slider-track-background: var(--background-modifier-border, #2c1c42);
  --status-bar-background: var(--background-secondary, #452f5c);
  --status-bar-border-color: var(--divider-color, #452f5c);
  --status-bar-text-color: var(--text-muted, #d4d4d4);
  --suggestion-background: var(--background-primary, #201430);
  --tab-background-active: var(--background-primary, #201430);
  --tab-container-background: var(--background-secondary, #452f5c);
  --tab-curve: 0;
  --tab-gap: 5px;
  --tab-outline-color: var(--divider-color, #452f5c);
  --tab-radius: var(--radius-s, 0);
  --tab-radius-active: 0;
  --tab-switcher-background: var(--background-secondary, #452f5c);
  --tab-text-color: var(--text-faint, #ada4a0);
  --tab-text-color-active: var(--text-muted, #d4d4d4);
  --tab-text-color-focused: var(--text-muted, #d4d4d4);
  --tab-text-color-focused-active: var(--text-muted, #d4d4d4);
  --tab-text-color-focused-active-current: var(--text-normal, #e1d6f8);
  --tab-text-color-focused-highlighted: var(--text-accent, #875faf);
  --table-add-button-background: #452f5c;
  --table-add-button-border-color: var(--background-modifier-border, #e1d6f8);
  --table-add-button-border-width: var(--table-border-width, 0);
  --table-border-color: var(--background-modifier-border, #483160);
  --table-border-width: 1;
  --table-column-first-border-width: var(--table-border-width, 1);
  --table-column-last-border-width: var(--table-border-width, 1);
  --table-drag-handle-background: #452f5c;
  --table-drag-handle-background-active: var(--table-selection-border-color, #87ff5f);
  --table-drag-handle-color: var(--text-faint, #e1d6f8);
  --table-drag-handle-color-active: var(--text-on-accent, #d4d4d4);
  --table-header-background: var(--table-background, #9f50e1);
  --table-header-border-color: var(--table-border-color, #9f50e1);
  --table-header-border-width: var(--table-border-width, 1);
  --table-header-color: var(--text-normal, #000000);
  --table-row-last-border-width: var(--table-border-width, 1);
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, darken);
  --table-selection-border-color: var(--interactive-accent, #87ff5f);
  --table-selection-border-width: 1;
  --table-text-color: #e1d6f8;
  --tag-color: var(--text-accent, #87ff5f);
  --tag-color-hover: var(--text-accent, #875faf);
  --tag-radius: 0px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #875faf));
  --text-accent: var(--color-accent-1, #875faf);
  --text-accent-hover: var(--color-accent-2, #875faf);
  --text-error: var(--color-red, #db6088);
  --text-error-hover: #db6088;
  --text-faint: var(--color-base-50, #ada4a0);
  --text-highlight-bg-active: rgb(135, 255, 95);
  --text-muted: var(--color-base-70, #d4d4d4);
  --text-muted-rgb: 153, 153, 153;
  --text-normal: var(--color-base-100, #e1d6f8);
  --text-on-accent: #d4d4d4;
  --titlebar-background: var(--background-secondary, #452f5c);
  --titlebar-background-focused: var(--background-secondary-alt, #483160);
  --titlebar-border-color: var(--background-modifier-border, #2c1c42);
  --titlebar-text-color: var(--text-muted, #d4d4d4);
  --titlebar-text-color-focused: var(--text-normal, #e1d6f8);
  --vault-profile-color: var(--text-normal, #e1d6f8);
  --vault-profile-color-hover: var(--vault-profile-color, #e1d6f8);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #452f5c);
  background-color: var(--tab-container-background, rgb(69, 47, 92));
  color: rgb(225, 214, 248);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(32, 20, 48));
  color: rgb(225, 214, 248);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(69, 47, 92));
  color: rgb(225, 214, 248);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(72, 49, 96);
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #452f5c);
  background-color: var(--tab-container-background, rgb(69, 47, 92));
  border-left-color: rgb(72, 49, 96);
  color: rgb(225, 214, 248);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(119, 249, 155));
  outline: rgb(119, 249, 155) none 0px;
  text-decoration-color: rgb(119, 249, 155);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(119, 249, 155));
  outline: rgb(119, 249, 155) none 0px;
  text-decoration-color: rgb(119, 249, 155);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(119, 249, 155));
  outline: rgb(119, 249, 155) none 0px;
  text-decoration-color: rgb(119, 249, 155);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--italic-color, rgb(119, 249, 155));
  font-weight: 700;
  outline: rgb(119, 249, 155) none 0px;
  text-decoration-color: rgb(119, 249, 155);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(119, 249, 155));
  outline: rgb(119, 249, 155) none 0px;
  text-decoration-color: rgb(119, 249, 155);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(135, 255, 95, 0.85));
  color: var(--text-normal, rgb(225, 214, 248));
  outline: rgb(225, 214, 248) none 0px;
  text-decoration-color: rgb(225, 214, 248);
}

html body del {
  color: rgb(225, 214, 248);
  outline: rgb(225, 214, 248) none 0px;
  text-decoration-color: rgb(225, 214, 248);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(57, 39, 76);
  border-color: rgb(135, 95, 175);
  border-radius: 2px;
  border-width: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(57, 39, 76));
  border-color: rgb(135, 95, 175);
}

html body p {
  color: var(--text-muted, rgb(212, 212, 212));
  outline: rgb(212, 212, 212) none 0px;
  text-decoration-color: rgb(212, 212, 212);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(185, 104, 252));
  outline: rgb(185, 104, 252) none 0px;
  text-decoration-color: rgb(185, 104, 252);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(185, 104, 252));
  outline: rgb(185, 104, 252) none 0px;
  text-decoration-color: rgb(185, 104, 252);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(102, 102, 102));
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(159, 80, 225);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(159, 80, 225));
}`,
    lists: `html body dd {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

html body dt {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body ol > li {
  color: rgb(225, 214, 248);
  margin-left: 24px;
  padding-top: var(--list-spacing, 2.8px);
}

html body ul > li {
  color: rgb(225, 214, 248);
  margin-left: 24px;
  padding-top: var(--list-spacing, 2.8px);
}

html body ul.overflow {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(119, 249, 155));
}

html body blockquote {
  color: var(--blockquote-color, rgb(225, 214, 248));
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body table {
  color: rgb(225, 214, 248);
  margin-top: var(--heading-spacing, 10px);
}

html body td {
  border-bottom-color: rgb(225, 214, 248);
  border-bottom-width: 0px;
  border-left-color: rgb(225, 214, 248);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(225, 214, 248);
  border-right-width: 0px;
  border-top-color: rgb(225, 214, 248);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(225, 214, 248));
}

html body th {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(0, 0, 0));
}

html body thead {
  background-color: rgb(159, 80, 225);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body tr {
  background-color: var(--table-header-background, rgb(159, 80, 225));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(48, 33, 63));
  border-bottom-color: rgb(44, 28, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(225, 214, 248));
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(48, 33, 63));
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 4px;
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body figcaption {
  color: rgb(225, 214, 248);
}

html body figure {
  --code-background: var(--ec-frm-edBg, #30213f);
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body img {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body video {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(57, 39, 76));
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: var(--text-muted, rgb(212, 212, 212));
}

html body .footnotes {
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body .transclude {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(142, 223, 95);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body .transclude-inner {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(135, 95, 175);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 2px;
  border-left-color: rgb(135, 95, 175);
  border-left-width: 2px;
  border-right-color: rgb(135, 95, 175);
  border-right-width: 2px;
  border-top-color: rgb(135, 95, 175);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 2px;
}

html body li.task-list-item[data-task="#"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(161, 160, 173);
}

html li.task-list-item[data-task="body"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="."] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="="] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(161, 160, 173);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(161, 160, 173);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="y"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, #201430);
  background: rgb(230, 187, 133) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, #201430);
  background: rgb(219, 96, 136) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, #201430);
  background: rgb(219, 96, 136) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, #201430);
  background: rgb(171, 146, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, #201430);
  background: rgb(219, 96, 136) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, #201430);
  background: rgb(230, 187, 133) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, #201430);
  background: rgb(171, 146, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, #201430);
  background: rgb(171, 146, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, #201430);
  background: rgb(171, 146, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, #201430);
  background: rgb(156, 218, 124) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, #201430);
  background: rgb(171, 146, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, #201430);
  background: rgb(171, 146, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, #201430);
  background: rgb(230, 187, 133) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(32, 20, 48));
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(44, 28, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(225, 214, 248));
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(32, 20, 48));
  border-bottom-color: rgb(103, 71, 138);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(103, 71, 138);
  border-right-color: rgb(103, 71, 138);
  border-top-color: rgb(103, 71, 138);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(225, 214, 248);
  outline: rgb(225, 214, 248) none 0px;
  text-decoration-color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(103, 71, 138);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(103, 71, 138);
  border-right-color: rgb(103, 71, 138);
  border-top-color: rgb(103, 71, 138);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(69, 47, 92);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(225, 214, 248);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, #67478a);
  --pill-color: var(--tag-color, #87ff5f);
  --pill-color-hover: var(--tag-color-hover, #875faf);
  --pill-color-remove: var(--tag-color, #87ff5f);
  --pill-color-remove-hover: var(--tag-color-hover, #875faf);
  --pill-radius: var(--tag-radius, 0px);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(135, 255, 95);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--pill-color, rgb(135, 255, 95));
}

html body a.internal-link.tag-link::before {
  color: rgb(135, 255, 95);
}

html body h1 {
  border-bottom-color: rgb(135, 255, 95);
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
  color: var(--h1-color, rgb(135, 255, 95));
  margin-bottom: 0px;
  margin-top: 12.944px;
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(225, 214, 248));
}

html body h2 {
  border-bottom-color: rgb(135, 255, 95);
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
  color: var(--h2-color, rgb(135, 255, 95));
  margin-bottom: 0px;
  margin-top: var(--heading-spacing, 11.696px);
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: var(--inline-title-color, rgb(225, 214, 248));
  margin-bottom: 0px;
}

html body h3 {
  border-bottom-color: rgb(135, 255, 95);
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
  color: var(--h3-color, rgb(135, 255, 95));
  margin-bottom: 0px;
  margin-top: var(--heading-spacing, 10.544px);
}

html body h4 {
  border-bottom-color: rgb(135, 255, 95);
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
  color: var(--h4-color, rgb(135, 255, 95));
  margin-bottom: 0px;
  margin-top: var(--heading-spacing, 9.504px);
}

html body h5 {
  border-bottom-color: rgb(135, 255, 95);
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
  color: var(--h5-color, rgb(135, 255, 95));
  margin-bottom: 0px;
  margin-top: var(--heading-spacing, 8.608px);
}

html body h6 {
  border-bottom-color: rgb(135, 255, 95);
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
  color: var(--h6-color, rgb(135, 255, 95));
  margin-bottom: 0px;
  margin-top: 8px;
}

html body hr {
  border-bottom-color: rgb(72, 49, 96);
  border-left-color: rgb(72, 49, 96);
  border-right-color: rgb(72, 49, 96);
  border-top-color: rgb(72, 49, 96);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, #201430);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}`,
    explorer: `html body .nav-files-container {
  background-color: rgb(57, 39, 77);
}

html body .nav-files-container .tree-item-children {
  border-left-color: rgb(40, 22, 59);
  border-left-width: 2px;
}

html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(212, 212, 212));
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(212, 212, 212));
}

html body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(225, 214, 248);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: var(--icon-color, rgb(212, 212, 212));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(69, 47, 92));
  border-bottom-color: rgb(40, 22, 59);
  border-left-color: rgb(40, 22, 59);
  border-right-color: rgb(40, 22, 59);
  border-top-color: rgb(40, 22, 59);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(212, 212, 212));
}

html body footer ul li a {
  color: rgb(212, 212, 212);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(225, 214, 248);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(212, 212, 212));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(212, 212, 212);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body li.section-li > .section .meta {
  color: rgb(212, 212, 212);
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(212, 212, 212));
}

html body ul.section-ul {
  background-color: rgb(57, 39, 77);
  border-bottom-color: rgb(40, 22, 59);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(40, 22, 59);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: var(--icon-color, rgb(212, 212, 212));
}

html body .darkmode svg {
  color: rgb(212, 212, 212);
  fill: rgb(40, 22, 59);
  stroke: rgb(135, 255, 95);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(217, 145, 69);
  border-left-color: rgb(217, 145, 69);
  border-right-color: rgb(217, 145, 69);
  border-top-color: rgb(217, 145, 69);
  color: rgb(217, 145, 69);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(173, 164, 160));
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(225, 214, 248);
}

html body .canvas-node-content {
  color: rgb(225, 214, 248);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(225, 214, 248));
}

html body .canvas-node-group {
  border-color: rgb(225, 214, 248);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(69, 47, 92));
  border-color: rgb(225, 214, 248);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(0, 0, 0);
  color: var(--table-header-color, rgb(0, 0, 0));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(44, 28, 66);
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  color: var(--text-muted, rgb(212, 212, 212));
  margin-bottom: 0px;
  margin-left: 47.3125px;
  margin-right: 47.3125px;
}

html body .metadata-container .metadata-property {
  background-color: var(--metadata-property-background, rgb(57, 39, 76));
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html body .metadata-properties {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html body .metadata-property-key {
  color: rgb(212, 212, 212);
}

html body .metadata-property-value {
  color: rgb(212, 212, 212);
}

html body .note-properties {
  border-color: rgb(44, 28, 66);
}

html body .note-properties-key {
  color: rgb(212, 212, 212);
}

html body .note-properties-row {
  border-color: rgb(212, 212, 212) rgb(212, 212, 212) rgb(21, 21, 21);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, #67478a);
  --pill-color: var(--tag-color, #87ff5f);
  --pill-color-hover: var(--tag-color-hover, #875faf);
  --pill-color-remove: var(--tag-color, #87ff5f);
  --pill-color-remove-hover: var(--tag-color-hover, #875faf);
  --pill-radius: var(--tag-radius, 0px);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 0px;
  color: var(--pill-color, rgb(135, 255, 95));
}

html body .note-properties-value {
  color: rgb(212, 212, 212);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(32, 20, 48));
  color: var(--text-normal, rgb(225, 214, 248));
}

html body ol.overflow {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(69, 47, 92));
  border-color: rgb(225, 214, 248);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(72, 49, 96));
}

html body .stacked-page.active {
  border-color: rgb(225, 214, 248);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(69, 47, 92));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: var(--text-normal, rgb(225, 214, 248));
}

html body abbr {
  color: rgb(225, 214, 248);
}

html body details {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body input[type=text] {
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(156, 218, 124);
  border-left-color: rgb(156, 218, 124);
  border-right-color: rgb(156, 218, 124);
  border-top-color: rgb(156, 218, 124);
  color: var(--text-normal, rgb(156, 218, 124));
}

html body kbd {
  background-color: var(--code-background, rgb(48, 33, 63));
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: var(--code-normal, rgb(225, 214, 248));
}

html body progress {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body sub {
  color: rgb(225, 214, 248);
}

html body summary {
  color: rgb(225, 214, 248);
}

html body sup {
  color: rgb(119, 249, 155);
}

html body ul.tags > li {
  background-color: var(--tag-background, rgb(103, 71, 138));
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--tag-color, rgb(135, 255, 95));
}`,
  },
  light: {},
};
