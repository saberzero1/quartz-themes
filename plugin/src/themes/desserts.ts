import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "desserts",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: var(--color-base-30, #372622);
  --background-modifier-border-focus: var(--color-base-40, #62656a);
  --background-modifier-border-hover: var(--color-base-35, #372622);
  --background-modifier-form-field: var(--color-base-25, #372622);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #372622);
  --background-primary: var(--color-base-00, #110f10);
  --background-primary-alt: var(--color-base-10, #040405);
  --background-secondary: var(--color-base-20, #110f10);
  --background-secondary-alt: var(--color-base-30, #372622);
  --bases-cards-background: var(--background-primary, #110f10);
  --bases-cards-cover-background: var(--background-primary-alt, #040405);
  --bases-cards-radius: var(--radius-m, 0px);
  --bases-embed-border-color: var(--background-modifier-border, #372622);
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, #a3a5aa);
  --bases-table-border-color: var(--table-border-color, #372622);
  --bases-table-cell-background-active: var(--background-primary, #110f10);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #040405);
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-group-background: var(--background-primary-alt, #040405);
  --bases-table-header-background: var(--background-primary, #110f10);
  --bases-table-header-color: var(--text-muted, #a3a5aa);
  --bases-table-summary-background: var(--background-primary, #110f10);
  --button-radius: var(--input-radius, 0px);
  --callout-radius: var(--radius-s, 0px);
  --canvas-background: var(--background-primary, #110f10);
  --canvas-card-label-color: var(--text-faint, #74593D);
  --canvas-controls-radius: var(--radius-s, 0px);
  --canvas-dot-pattern: var(--color-base-30, #372622);
  --caret-color: var(--text-normal, #a3a5aa);
  --checkbox-border-color: var(--text-faint, #876642);
  --checkbox-border-color-hover: var(--text-muted, #422c17);
  --checkbox-color: var(--interactive-accent, #74593D);
  --checkbox-color-hover: var(--interactive-accent-hover, #422c17);
  --checkbox-marker-color: var(--background-primary, #110f10);
  --checkbox-radius: var(--radius-s, 5px);
  --checklist-done-color: var(--text-muted, #a3a5aa);
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--background-primary-alt, #7452504f);
  --code-border-color: var(--background-modifier-border, #372622);
  --code-comment: var(--text-faint, #74593D);
  --code-normal: var(--text-normal, #a3a5aa);
  --code-punctuation: var(--text-muted, #a3a5aa);
  --code-radius: var(--radius-s, 0px);
  --collapse-icon-color: var(--text-faint, #74593D);
  --collapse-icon-color-collapsed: var(--text-accent, #74593D);
  --color-base-00: #110f10;
  --color-base-05: #372622;
  --color-base-10: #040405;
  --color-base-100: #a3a5aa;
  --color-base-20: #110f10;
  --color-base-25: #372622;
  --color-base-30: #372622;
  --color-base-35: #372622;
  --color-base-40: #62656a;
  --color-base-50: #74593D;
  --color-base-60: #a3a5aa;
  --color-base-70: #a3a5aa;
  --dark: var(--text-normal, var(--color-base-100, #a3a5aa));
  --darkgray: var(--text-normal, var(--color-base-100, #a3a5aa));
  --divider-color: var(--background-modifier-border, transparent);
  --dropdown-background: var(--interactive-normal, #372622);
  --dropdown-background-hover: var(--interactive-hover, #745250);
  --file-header-background: var(--background-primary, #110f10);
  --file-header-background-focused: var(--background-primary, #110f10);
  --flair-background: var(--interactive-normal, #372622);
  --flair-color: var(--text-normal, #a3a5aa);
  --footnote-divider-color: var(--metadata-divider-color, #372622);
  --footnote-id-color: var(--text-muted, #a3a5aa);
  --footnote-id-color-no-occurrences: var(--text-faint, #74593D);
  --footnote-radius: var(--radius-s, 0px);
  --graph-node: var(--text-muted, #a3a5aa);
  --graph-node-focused: var(--text-accent, #74593D);
  --graph-node-unresolved: var(--text-faint, #74593D);
  --graph-text: var(--text-normal, #a3a5aa);
  --gray: var(--text-muted, var(--color-base-70, #a3a5aa));
  --heading-formatting: var(--text-faint, #74593D);
  --hr-color: var(--background-modifier-border, #372622);
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, #74593D);
  --icon-color-active: var(--text-accent, #74593D);
  --icon-color-focused: var(--text-normal, #74593D);
  --icon-color-hover: var(--text-muted, #B0A79E);
  --inline-title-color: var(--h1-color, #74593D);
  --inline-title-size: var(--h1-size, 2.5em);
  --inline-title-weight: var(--h1-weight, 200);
  --input-date-separator: var(--text-faint, #74593D);
  --input-placeholder-color: var(--text-faint, #74593D);
  --input-radius: 0px;
  --interactive-hover: var(--color-base-35, #745250);
  --interactive-normal: var(--color-base-30, #372622);
  --light: var(--background-primary, var(--color-base-00, #110f10));
  --lightgray: var(--background-secondary, var(--color-base-20, #110f10));
  --link-color: var(--text-accent, #74593D);
  --link-color-hover: var(--text-accent-hover, #9a7c5d);
  --link-external-color: var(--text-accent, #74593D);
  --link-external-color-hover: var(--text-accent-hover, #9a7c5d);
  --link-unresolved-color: var(--text-accent, #74593D);
  --list-marker-color: var(--text-faint, #74593D);
  --list-marker-color-collapsed: var(--text-accent, #74593D);
  --list-marker-color-hover: var(--text-muted, #a3a5aa);
  --menu-background: var(--background-secondary, #110f10);
  --menu-border-color: var(--background-modifier-border-hover, #372622);
  --menu-radius: var(--radius-m, 0px);
  --metadata-border-color: var(--background-modifier-border, #372622);
  --metadata-divider-color: var(--background-modifier-border, #372622);
  --metadata-input-text-color: var(--text-normal, #a3a5aa);
  --metadata-label-text-color: var(--text-muted, #a3a5aa);
  --metadata-label-text-color-hover: var(--text-muted, #a3a5aa);
  --modal-background: var(--background-primary, #110f10);
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #74593D);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #74593D);
  --nav-heading-color: var(--text-normal, #a3a5aa);
  --nav-heading-color-collapsed: var(--text-faint, #74593D);
  --nav-heading-color-collapsed-hover: var(--text-muted, #a3a5aa);
  --nav-heading-color-hover: var(--text-normal, #a3a5aa);
  --nav-item-background-active: var(--background-modifier-hover, #372622);
  --nav-item-background-hover: var(--background-modifier-hover, #2b201a69);
  --nav-item-color: var(--text-muted, #564134);
  --nav-item-color-active: var(--text-normal, #B0A79E);
  --nav-item-color-highlighted: var(--text-accent, #74593D);
  --nav-item-color-hover: var(--text-normal, #74593D);
  --nav-item-color-selected: var(--text-normal, #a3a5aa);
  --nav-item-radius: var(--radius-s, 0px);
  --nav-tag-color: var(--text-faint, #74593D);
  --nav-tag-color-active: var(--text-muted, #a3a5aa);
  --nav-tag-color-hover: var(--text-muted, #a3a5aa);
  --nav-tag-radius: var(--radius-s, 0px);
  --pdf-background: var(--background-primary, #110f10);
  --pdf-page-background: var(--background-primary, #110f10);
  --pdf-sidebar-background: var(--background-primary, #110f10);
  --pill-border-color: var(--background-modifier-border, #372622);
  --pill-border-color-hover: var(--background-modifier-border-hover, #372622);
  --pill-color: var(--text-muted, #a3a5aa);
  --pill-color-hover: var(--text-normal, #a3a5aa);
  --pill-color-remove: var(--text-faint, #74593D);
  --pill-color-remove-hover: var(--text-accent, #74593D);
  --prompt-background: var(--background-primary, #110f10);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: var(--blur-background, color-mix(in srgb, #372622 65%, transparent) linear-gradient(#372622, color-mix(in srgb, #372622 65%, transparent)));
  --ribbon-background: var(--background-secondary, #110f10);
  --ribbon-background-collapsed: var(--background-primary, #110f10);
  --scrollbar-radius: var(--radius-l, 0px);
  --search-clear-button-color: var(--text-muted, #a3a5aa);
  --search-icon-color: var(--text-muted, #a3a5aa);
  --search-result-background: var(--background-primary, #110f10);
  --secondary: var(--text-accent, var(--color-accent-1, #74593D));
  --setting-group-heading-color: var(--text-normal, #a3a5aa);
  --setting-items-background: var(--background-primary-alt, #040405);
  --setting-items-border-color: var(--background-modifier-border, #372622);
  --setting-items-radius: var(--radius-l, 0px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #a3a5aa);
  --shiki-code-background: var(--code-background, #7452504f);
  --shiki-code-block-border-radius: var(--code-radius, 0px);
  --shiki-code-comment: var(--text-faint, #74593D);
  --shiki-code-normal: var(--text-muted, #a3a5aa);
  --shiki-code-punctuation: var(--text-muted, #a3a5aa);
  --shiki-gutter-border-color: var(--background-modifier-border, #372622);
  --shiki-gutter-text-color: var(--text-faint, #74593D);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #a3a5aa);
  --shiki-highlight-neutral: var(--shiki-code-normal, #a3a5aa);
  --shiki-terminal-dots-color: var(--text-faint, #74593D);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #372622);
  --slider-thumb-radius: var(--slider-thumb-height, 0px);
  --slider-track-background: var(--background-modifier-border, #745250);
  --status-bar-background: var(--background-secondary, #110f10);
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-radius: var(--radius-m, 0px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #a3a5aa);
  --suggestion-background: var(--background-primary, #110f10);
  --tab-background-active: var(--background-primary, #110f10);
  --tab-container-background: var(--background-secondary, #110f10);
  --tab-divider-color: var(--background-modifier-border-hover, #372622);
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-switcher-background: var(--background-secondary, #110f10);
  --tab-text-color: var(--text-faint, #74593D);
  --tab-text-color-active: var(--text-muted, #B0A79E);
  --tab-text-color-focused: var(--text-muted, #B0A79E);
  --tab-text-color-focused-active: var(--text-muted, #a3a5aa);
  --tab-text-color-focused-active-current: var(--text-normal, #a3a5aa);
  --tab-text-color-focused-highlighted: var(--text-accent, #74593D);
  --table-add-button-border-color: var(--background-modifier-border, #372622);
  --table-border-color: var(--background-modifier-border, #372622);
  --table-drag-handle-color: var(--text-faint, #74593D);
  --table-header-border-color: var(--table-border-color, #372622);
  --table-header-color: var(--text-normal, #a3a5aa);
  --tag-color: var(--text-accent, #74593D);
  --tag-color-hover: var(--text-accent, #B0A79E);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #9a7c5d));
  --text-accent: var(--color-accent-1, #74593D);
  --text-accent-hover: var(--color-accent-2, #9a7c5d);
  --text-faint: var(--color-base-50, #74593D);
  --text-muted: var(--color-base-70, #a3a5aa);
  --text-normal: var(--color-base-100, #a3a5aa);
  --titlebar-background: var(--background-secondary, #110f10);
  --titlebar-background-focused: var(--background-secondary-alt, #372622);
  --titlebar-border-color: var(--background-modifier-border, #372622);
  --titlebar-text-color: var(--text-muted, #a3a5aa);
  --titlebar-text-color-focused: var(--text-normal, #a3a5aa);
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: var(--text-normal, #a3a5aa);
  --vault-profile-color-hover: var(--vault-profile-color, #a3a5aa);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #110f10);
  background-color: var(--tab-container-background, rgb(17, 15, 16));
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(17, 15, 16));
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(17, 15, 16));
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #110f10);
  background-color: var(--tab-container-background, rgb(17, 15, 16));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(163, 165, 170);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(163, 165, 170));
  outline: rgb(163, 165, 170) none 0px;
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(116, 89, 61));
  outline: rgb(116, 89, 61) none 0px;
  text-decoration-color: rgb(116, 89, 61);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(116, 89, 61));
  outline: rgb(116, 89, 61) none 0px;
  text-decoration-color: rgb(116, 89, 61);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(163, 165, 170));
  outline: rgb(163, 165, 170) none 0px;
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(163, 165, 170));
  outline: rgb(163, 165, 170) none 0px;
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body del {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(135, 102, 66);
  border-radius: 5px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(116, 89, 61));
  border-color: rgb(116, 89, 61);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(163, 165, 170));
  outline: rgb(163, 165, 170) none 0px;
  text-decoration-color: rgb(163, 165, 170);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(116, 89, 61));
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: underline rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(116, 89, 61));
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: underline rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(116, 89, 61));
  outline: rgb(116, 89, 61) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body dt {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(116, 89, 61));
  text-decoration: underline rgb(55, 38, 34);
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(43, 32, 26, 0.41));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body table {
  color: rgb(163, 165, 170);
  width: 227.125px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: var(--table-text-color, rgb(163, 165, 170));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: var(--table-header-color, rgb(163, 165, 170));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(116, 82, 80, 0.31));
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(163, 165, 170));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(116, 82, 80, 0.31));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #7452504f);
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(163, 165, 170);
  border-radius: 8px;
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(4, 4, 5));
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(135, 102, 66);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(135, 102, 66);
  border-right-color: rgb(135, 102, 66);
  border-top-color: rgb(135, 102, 66);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(17, 15, 16);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(17, 15, 16);
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
  background-color: rgb(116, 89, 61);
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
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgb(38, 26, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(163, 165, 170);
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
  background-color: rgb(55, 38, 34);
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(163, 165, 170));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(17, 15, 16));
  border-bottom-color: rgb(98, 101, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(98, 101, 106);
  border-right-color: rgb(98, 101, 106);
  border-top-color: rgb(98, 101, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(98, 101, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(98, 101, 106);
  border-right-color: rgb(98, 101, 106);
  border-top-color: rgb(98, 101, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 15, 16);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background-hover: var(--tag-background-hover, #372622);
  --pill-color: var(--tag-color, #74593D);
  --pill-color-hover: var(--tag-color-hover, #B0A79E);
  --pill-color-remove: var(--tag-color, #74593D);
  --pill-color-remove-hover: var(--tag-color-hover, #B0A79E);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(116, 89, 61);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(163, 165, 170));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(116, 89, 61));
  font-size: var(--inline-title-size, 40px);
  font-weight: var(--inline-title-weight, 200);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(163, 165, 170));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(116, 89, 61));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(163, 165, 170));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(163, 165, 170));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(163, 165, 170));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(163, 165, 170));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(86, 65, 52));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(86, 65, 52));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(163, 165, 170);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(116, 89, 61);
  border-right-color: rgb(116, 89, 61);
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(116, 89, 61));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(17, 15, 16));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(163, 165, 170));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(163, 165, 170);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(86, 65, 52));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(86, 65, 52);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(86, 65, 52);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(86, 65, 52));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(116, 89, 61);
  border-right-color: rgb(116, 89, 61);
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(116, 89, 61));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(116, 89, 61);
  stroke: rgb(116, 89, 61);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(116, 89, 61));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(163, 165, 170));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(17, 15, 16));
  border-color: rgb(163, 165, 170);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(55, 38, 34);
  color: var(--table-header-color, rgb(163, 165, 170));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: var(--text-muted, rgb(163, 165, 170));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(55, 38, 34);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background-hover: var(--tag-background-hover, #372622);
  --pill-color: var(--tag-color, #74593D);
  --pill-color-hover: var(--tag-color-hover, #B0A79E);
  --pill-color-remove: var(--tag-color, #74593D);
  --pill-color-remove-hover: var(--tag-color-hover, #B0A79E);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  color: var(--pill-color, rgb(116, 89, 61));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(17, 15, 16));
  color: var(--text-normal, rgb(163, 165, 170));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(17, 15, 16));
  border-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(55, 38, 34));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(163, 165, 170);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(17, 15, 16));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(163, 165, 170));
  font-family: monospace;
}

html[saved-theme="dark"] body abbr {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: var(--text-normal, rgb(163, 165, 170));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(116, 82, 80, 0.31));
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(163, 165, 170));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body sub {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body summary {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body sup {
  color: rgb(163, 165, 170);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: var(--tag-color, rgb(116, 89, 61));
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: var(--color-base-30, #E6D8C5);
  --background-modifier-border-focus: var(--color-base-40, #F5EDE3);
  --background-modifier-border-hover: var(--color-base-35, #E6D8C5);
  --background-modifier-form-field: var(--color-base-00, #F5EDE3);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #F5EDE3);
  --background-primary: var(--color-base-00, #F5EDE3);
  --background-primary-alt: var(--color-base-10, #E6D8C5);
  --background-secondary: var(--color-base-20, #F5EDE3);
  --background-secondary-alt: var(--color-base-05, #E6D8C5);
  --bases-cards-background: var(--background-primary, #F5EDE3);
  --bases-cards-cover-background: var(--background-primary-alt, #E6D8C5);
  --bases-cards-radius: var(--radius-m, 0px);
  --bases-embed-border-color: var(--background-modifier-border, #E6D8C5);
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, #372622);
  --bases-table-border-color: var(--table-border-color, #E6D8C5);
  --bases-table-cell-background-active: var(--background-primary, #F5EDE3);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #E6D8C5);
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-group-background: var(--background-primary-alt, #E6D8C5);
  --bases-table-header-background: var(--background-primary, #F5EDE3);
  --bases-table-header-color: var(--text-muted, #372622);
  --bases-table-summary-background: var(--background-primary, #F5EDE3);
  --button-radius: var(--input-radius, 0px);
  --callout-radius: var(--radius-s, 0px);
  --canvas-background: var(--background-primary, #F5EDE3);
  --canvas-card-label-color: var(--text-faint, #74593D);
  --canvas-controls-radius: var(--radius-s, 0px);
  --canvas-dot-pattern: var(--color-base-30, #E6D8C5);
  --caret-color: var(--text-normal, #372622);
  --checkbox-border-color: var(--text-faint, #A2856E);
  --checkbox-border-color-hover: var(--text-muted, #ce9f9f);
  --checkbox-color: var(--interactive-accent, #EBC4C4);
  --checkbox-color-hover: var(--interactive-accent-hover, #ce9f9f);
  --checkbox-marker-color: var(--background-primary, #F5EDE3);
  --checkbox-radius: var(--radius-s, 5px);
  --checklist-done-color: var(--text-muted, #372622);
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--background-primary-alt, #EBC4C4);
  --code-border-color: var(--background-modifier-border, #E6D8C5);
  --code-comment: var(--text-faint, #74593D);
  --code-normal: var(--text-normal, #372622);
  --code-punctuation: var(--text-muted, #372622);
  --code-radius: var(--radius-s, 0px);
  --collapse-icon-color: var(--text-faint, #74593D);
  --collapse-icon-color-collapsed: var(--text-accent, #A2856E);
  --color-base-00: #F5EDE3;
  --color-base-05: #E6D8C5;
  --color-base-10: #E6D8C5;
  --color-base-100: #372622;
  --color-base-20: #F5EDE3;
  --color-base-25: #E6D8C5;
  --color-base-30: #E6D8C5;
  --color-base-35: #E6D8C5;
  --color-base-40: #F5EDE3;
  --color-base-50: #74593D;
  --color-base-60: #372622;
  --color-base-70: #372622;
  --dark: var(--text-normal, var(--color-base-100, #372622));
  --darkgray: var(--text-normal, var(--color-base-100, #372622));
  --divider-color: var(--background-modifier-border, transparent);
  --dropdown-background: var(--interactive-normal, #E6D8C5);
  --dropdown-background-hover: var(--interactive-hover, #EBC4C4);
  --file-header-background: var(--background-primary, #F5EDE3);
  --file-header-background-focused: var(--background-primary, #F5EDE3);
  --flair-background: var(--interactive-normal, #E6D8C5);
  --flair-color: var(--text-normal, #372622);
  --footnote-divider-color: var(--metadata-divider-color, #E6D8C5);
  --footnote-id-color: var(--text-muted, #372622);
  --footnote-id-color-no-occurrences: var(--text-faint, #74593D);
  --footnote-radius: var(--radius-s, 0px);
  --graph-node: var(--text-muted, #372622);
  --graph-node-focused: var(--text-accent, #A2856E);
  --graph-node-unresolved: var(--text-faint, #74593D);
  --graph-text: var(--text-normal, #372622);
  --gray: var(--text-muted, var(--color-base-70, #372622));
  --heading-formatting: var(--text-faint, #74593D);
  --hr-color: var(--background-modifier-border, #E6D8C5);
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, #A2856E);
  --icon-color-active: var(--text-accent, #A2856E);
  --icon-color-focused: var(--text-normal, #74593D);
  --icon-color-hover: var(--text-muted, #8C6550);
  --inline-title-color: var(--h1-color, #ce9f9f);
  --inline-title-size: var(--h1-size, 2.5em);
  --inline-title-weight: var(--h1-weight, 200);
  --input-date-separator: var(--text-faint, #74593D);
  --input-placeholder-color: var(--text-faint, #74593D);
  --input-radius: 0px;
  --interactive-hover: var(--color-base-10, #EBC4C4);
  --interactive-normal: var(--color-base-00, #E6D8C5);
  --light: var(--background-primary, var(--color-base-00, #F5EDE3));
  --lightgray: var(--background-secondary, var(--color-base-20, #F5EDE3));
  --link-color: var(--text-accent, #A2856E);
  --link-color-hover: var(--text-accent-hover, #EBC4C4);
  --link-external-color: var(--text-accent, #A2856E);
  --link-external-color-hover: var(--text-accent-hover, #EBC4C4);
  --link-unresolved-color: var(--text-accent, #A2856E);
  --list-marker-color: var(--text-faint, #74593D);
  --list-marker-color-collapsed: var(--text-accent, #A2856E);
  --list-marker-color-hover: var(--text-muted, #372622);
  --menu-background: var(--background-secondary, #F5EDE3);
  --menu-border-color: var(--background-modifier-border-hover, #E6D8C5);
  --menu-radius: var(--radius-m, 0px);
  --metadata-border-color: var(--background-modifier-border, #E6D8C5);
  --metadata-divider-color: var(--background-modifier-border, #E6D8C5);
  --metadata-input-text-color: var(--text-normal, #372622);
  --metadata-label-text-color: var(--text-muted, #372622);
  --metadata-label-text-color-hover: var(--text-muted, #372622);
  --modal-background: var(--background-primary, #F5EDE3);
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #74593D);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #74593D);
  --nav-heading-color: var(--text-normal, #372622);
  --nav-heading-color-collapsed: var(--text-faint, #74593D);
  --nav-heading-color-collapsed-hover: var(--text-muted, #372622);
  --nav-heading-color-hover: var(--text-normal, #372622);
  --nav-item-background-active: var(--background-modifier-hover, #E6D8C5);
  --nav-item-background-hover: var(--background-modifier-hover, #ebc4c46e);
  --nav-item-color: var(--text-muted, #564134);
  --nav-item-color-active: var(--text-normal, #A35D66);
  --nav-item-color-highlighted: var(--text-accent, #A2856E);
  --nav-item-color-hover: var(--text-normal, #74593D);
  --nav-item-color-selected: var(--text-normal, #372622);
  --nav-item-radius: var(--radius-s, 0px);
  --nav-tag-color: var(--text-faint, #74593D);
  --nav-tag-color-active: var(--text-muted, #372622);
  --nav-tag-color-hover: var(--text-muted, #372622);
  --nav-tag-radius: var(--radius-s, 0px);
  --pdf-background: var(--background-primary, #F5EDE3);
  --pdf-page-background: var(--background-primary, #F5EDE3);
  --pdf-sidebar-background: var(--background-primary, #F5EDE3);
  --pill-border-color: var(--background-modifier-border, #E6D8C5);
  --pill-border-color-hover: var(--background-modifier-border-hover, #E6D8C5);
  --pill-color: var(--text-muted, #372622);
  --pill-color-hover: var(--text-normal, #372622);
  --pill-color-remove: var(--text-faint, #74593D);
  --pill-color-remove-hover: var(--text-accent, #A2856E);
  --prompt-background: var(--background-primary, #F5EDE3);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: var(--blur-background, color-mix(in srgb, #F5EDE3 65%, transparent) linear-gradient(#F5EDE3, color-mix(in srgb, #F5EDE3 65%, transparent)));
  --ribbon-background: var(--background-secondary, #F5EDE3);
  --ribbon-background-collapsed: var(--background-primary, #F5EDE3);
  --scrollbar-radius: var(--radius-l, 0px);
  --search-clear-button-color: var(--text-muted, #372622);
  --search-icon-color: var(--text-muted, #372622);
  --search-result-background: var(--background-primary, #F5EDE3);
  --secondary: var(--text-accent, var(--color-accent, #A2856E));
  --setting-group-heading-color: var(--text-normal, #372622);
  --setting-items-background: var(--background-primary-alt, #E6D8C5);
  --setting-items-border-color: var(--background-modifier-border, #E6D8C5);
  --setting-items-radius: var(--radius-l, 0px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #372622);
  --shiki-code-background: var(--code-background, #EBC4C4);
  --shiki-code-block-border-radius: var(--code-radius, 0px);
  --shiki-code-comment: var(--text-faint, #74593D);
  --shiki-code-normal: var(--text-muted, #372622);
  --shiki-code-punctuation: var(--text-muted, #372622);
  --shiki-gutter-border-color: var(--background-modifier-border, #E6D8C5);
  --shiki-gutter-text-color: var(--text-faint, #74593D);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #372622);
  --shiki-highlight-neutral: var(--shiki-code-normal, #372622);
  --shiki-terminal-dots-color: var(--text-faint, #74593D);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #E6D8C5);
  --slider-thumb-radius: var(--slider-thumb-height, 0px);
  --slider-track-background: var(--background-modifier-border, #745250);
  --status-bar-background: var(--background-secondary, #F5EDE3);
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-radius: var(--radius-m, 0px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #372622);
  --suggestion-background: var(--background-primary, #F5EDE3);
  --tab-background-active: var(--background-primary, #F5EDE3);
  --tab-container-background: var(--background-secondary, #F5EDE3);
  --tab-divider-color: var(--background-modifier-border-hover, #E6D8C5);
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-switcher-background: var(--background-secondary, #F5EDE3);
  --tab-text-color: var(--text-faint, #74593D);
  --tab-text-color-active: var(--text-muted, #372622);
  --tab-text-color-focused: var(--text-muted, #372622);
  --tab-text-color-focused-active: var(--text-muted, #372622);
  --tab-text-color-focused-active-current: var(--text-normal, #372622);
  --tab-text-color-focused-highlighted: var(--text-accent, #A2856E);
  --table-add-button-border-color: var(--background-modifier-border, #E6D8C5);
  --table-border-color: var(--background-modifier-border, #E6D8C5);
  --table-drag-handle-color: var(--text-faint, #74593D);
  --table-header-border-color: var(--table-border-color, #E6D8C5);
  --table-header-color: var(--text-normal, #372622);
  --tag-color: var(--text-accent, #74593D);
  --tag-color-hover: var(--text-accent, #F5EDE3);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #EBC4C4));
  --text-accent: var(--color-accent, #A2856E);
  --text-accent-hover: var(--color-accent-2, #EBC4C4);
  --text-faint: var(--color-base-50, #74593D);
  --text-muted: var(--color-base-70, #372622);
  --text-normal: var(--color-base-100, #372622);
  --titlebar-background: var(--background-secondary, #F5EDE3);
  --titlebar-background-focused: var(--background-secondary-alt, #E6D8C5);
  --titlebar-border-color: var(--background-modifier-border, #E6D8C5);
  --titlebar-text-color: var(--text-muted, #372622);
  --titlebar-text-color-focused: var(--text-normal, #372622);
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: var(--text-normal, #372622);
  --vault-profile-color-hover: var(--vault-profile-color, #372622);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #F5EDE3);
  background-color: var(--tab-container-background, rgb(245, 237, 227));
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(245, 237, 227));
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(245, 237, 227));
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #F5EDE3);
  background-color: var(--tab-container-background, rgb(245, 237, 227));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(55, 38, 34);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(55, 38, 34));
  outline: rgb(55, 38, 34) none 0px;
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(138, 104, 68));
  outline: rgb(138, 104, 68) none 0px;
  text-decoration-color: rgb(138, 104, 68);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(138, 104, 68));
  outline: rgb(138, 104, 68) none 0px;
  text-decoration-color: rgb(138, 104, 68);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(55, 38, 34));
  outline: rgb(55, 38, 34) none 0px;
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(55, 38, 34));
  outline: rgb(55, 38, 34) none 0px;
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body del {
  color: rgb(55, 38, 34);
  outline: rgb(55, 38, 34) none 0px;
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(162, 133, 110);
  border-radius: 5px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(235, 196, 196));
  border-color: rgb(235, 196, 196);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(55, 38, 34));
  outline: rgb(55, 38, 34) none 0px;
  text-decoration-color: rgb(55, 38, 34);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(162, 133, 110));
  outline: rgb(162, 133, 110) none 0px;
  text-decoration: underline rgb(230, 216, 197);
  text-decoration-color: rgb(230, 216, 197);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(162, 133, 110));
  outline: rgb(162, 133, 110) none 0px;
  text-decoration: underline rgb(230, 216, 197);
  text-decoration-color: rgb(230, 216, 197);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(162, 133, 110));
  outline: rgb(162, 133, 110) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body dt {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body ol > li {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body ul > li {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(116, 89, 61));
  text-decoration: underline rgb(230, 216, 197);
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(235, 196, 196, 0.373));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body table {
  color: rgb(55, 38, 34);
  width: 227.125px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(230, 216, 197);
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  color: var(--table-text-color, rgb(55, 38, 34));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(230, 216, 197);
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  color: var(--table-header-color, rgb(55, 38, 34));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(235, 196, 196));
  border-bottom-color: rgb(230, 216, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(55, 38, 34));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(235, 196, 196));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body figcaption {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #EBC4C4);
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(55, 38, 34);
  border-radius: 8px;
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(230, 216, 197));
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(55, 38, 34);
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(162, 133, 110);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(162, 133, 110);
  border-right-color: rgb(162, 133, 110);
  border-top-color: rgb(162, 133, 110);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 237, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 237, 227);
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
  background-color: rgb(116, 89, 61);
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
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgba(230, 216, 197, 0.435) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(106, 71, 55));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(55, 38, 34);
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
  background-color: rgb(245, 237, 227);
  border-bottom-color: rgb(230, 216, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(55, 38, 34));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(245, 237, 227));
  border-bottom-color: rgb(245, 237, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 237, 227);
  border-right-color: rgb(245, 237, 227);
  border-top-color: rgb(245, 237, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(55, 38, 34);
  outline: rgb(55, 38, 34) none 0px;
  text-decoration-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(245, 237, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 237, 227);
  border-right-color: rgb(245, 237, 227);
  border-top-color: rgb(245, 237, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 237, 227);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background-hover: var(--tag-background-hover, #ce9f9f);
  --pill-color: var(--tag-color, #74593D);
  --pill-color-hover: var(--tag-color-hover, #F5EDE3);
  --pill-color-remove: var(--tag-color, #74593D);
  --pill-color-remove-hover: var(--tag-color-hover, #F5EDE3);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(116, 89, 61);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(55, 38, 34));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(206, 159, 159));
  font-size: var(--inline-title-size, 40px);
  font-weight: var(--inline-title-weight, 200);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(55, 38, 34));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(206, 159, 159));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(55, 38, 34));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(55, 38, 34));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(55, 38, 34));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(55, 38, 34));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(86, 65, 52));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(86, 65, 52));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(55, 38, 34);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(162, 133, 110);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 133, 110);
  border-right-color: rgb(162, 133, 110);
  border-top-color: rgb(162, 133, 110);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(162, 133, 110));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(245, 237, 227));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(55, 38, 34));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(55, 38, 34);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(86, 65, 52));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(86, 65, 52);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(86, 65, 52);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(86, 65, 52));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(162, 133, 110);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 133, 110);
  border-right-color: rgb(162, 133, 110);
  border-top-color: rgb(162, 133, 110);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(162, 133, 110));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(162, 133, 110);
  stroke: rgb(162, 133, 110);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(116, 89, 61));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(55, 38, 34));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(245, 237, 227));
  border-color: rgb(55, 38, 34);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(230, 216, 197);
  color: var(--table-header-color, rgb(55, 38, 34));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(230, 216, 197);
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  color: var(--text-muted, rgb(55, 38, 34));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(230, 216, 197);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background-hover: var(--tag-background-hover, #ce9f9f);
  --pill-color: var(--tag-color, #74593D);
  --pill-color-hover: var(--tag-color-hover, #F5EDE3);
  --pill-color-remove: var(--tag-color, #74593D);
  --pill-color-remove-hover: var(--tag-color-hover, #F5EDE3);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  color: var(--pill-color, rgb(116, 89, 61));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(245, 237, 227));
  color: var(--text-normal, rgb(55, 38, 34));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(245, 237, 227));
  border-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(230, 216, 197));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(55, 38, 34);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(245, 237, 227));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(55, 38, 34));
  font-family: monospace;
}

html[saved-theme="light"] body abbr {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: var(--text-normal, rgb(55, 38, 34));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(235, 196, 196));
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(55, 38, 34));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

html[saved-theme="light"] body sub {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body summary {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body sup {
  color: rgb(55, 38, 34);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: var(--tag-color, rgb(116, 89, 61));
}`,
  },
};
