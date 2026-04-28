import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "heboric",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgb(200, 100, 100);
  --background-modifier-border: hsl(221, 8%, 35%);
  --background-modifier-border-focus: hsl(221, 8%, 55%);
  --background-modifier-border-hover: hsl(221, 8%, 40%);
  --background-modifier-form-field: hsl(221, 8%, 27%);
  --background-modifier-form-field-hover: hsl(221, 8%, 27%);
  --background-primary: hsl(221, 8%, 17%);
  --background-primary-alt: hsl(221, 8%, 19%);
  --background-secondary: hsl(221, 8%, 14%);
  --background-secondary-alt: hsl(221, 8%, 35%);
  --bases-cards-background: hsl(221, 8%, 17%);
  --bases-cards-cover-background: hsl(221, 8%, 19%);
  --bases-cards-shadow: 0 0 0 1px hsl(221, 8%, 35%);
  --bases-cards-shadow-hover: 0 0 0 1px hsl(221, 8%, 40%);
  --bases-embed-border-color: hsl(221, 8%, 35%);
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: hsl(221, 8%, 75%);
  --bases-table-border-color: hsl(221, 8%, 35%);
  --bases-table-cell-background-active: hsl(221, 8%, 17%);
  --bases-table-cell-background-disabled: hsl(221, 8%, 19%);
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(221, 8%, 55%);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(200, 100, 100);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: hsl(221, 8%, 19%);
  --bases-table-header-background: hsl(221, 8%, 17%);
  --bases-table-header-color: hsl(221, 8%, 75%);
  --bases-table-summary-background: hsl(221, 8%, 17%);
  --blockquote-background-color: hsl(221, 8%, 17%);
  --blockquote-border-color: rgb(200, 100, 100);
  --blockquote-border-thickness: 0.2rem;
  --blur-background: color-mix(in srgb, hsl(221, 8%, 35%) 65%, transparent) linear-gradient(hsl(221, 8%, 35%), color-mix(in srgb, hsl(221, 8%, 35%) 65%, transparent));
  --bodyFont: var(--font-text, "New York", "Georgia", ui-serif, serif);
  --button-radius: 3px;
  --callout-border-width: 1px;
  --callout-padding: 1rem;
  --callout-radius: 3px;
  --canvas-background: hsl(221, 8%, 17%);
  --canvas-card-label-color: hsl(221, 8%, 45%);
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: hsl(221, 8%, 35%);
  --caret-color: hsl(221, 8%, 75%);
  --checkbox-border-color: hsl(221, 8%, 45%);
  --checkbox-border-color-hover: hsl(221, 8%, 75%);
  --checkbox-color: rgb(200, 100, 100);
  --checkbox-color-hover: rgb(200, 100, 100);
  --checkbox-marker-color: hsl(221, 8%, 17%);
  --checkbox-radius: 3px;
  --checklist-done-color: hsl(221, 8%, 75%);
  --clickable-icon-radius: 3px;
  --code-background: hsl(221, 8%, 19%);
  --code-border-color: hsl(221, 8%, 35%);
  --code-comment: hsl(221, 8%, 35%);
  --code-function: hsl(0, 50%, 60%);
  --code-important: hsl(0, 50%, 60%);
  --code-keyword: hsl(29, 57%, 60%);
  --code-normal: hsl(221, 8%, 85%);
  --code-operator: hsl(221, 8%, 65%);
  --code-property: hsl(197, 53%, 65%);
  --code-punctuation: hsl(221, 8%, 55%);
  --code-radius: 3px;
  --code-size: 0.8rem;
  --code-string: hsl(93, 44%, 63%);
  --code-tag: hsl(0, 50%, 65%);
  --code-value: hsl(29, 50%, 60%);
  --codeFont: var(--font-monospace, "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace);
  --collapse-icon-color: hsl(221, 8%, 45%);
  --collapse-icon-color-collapsed: rgb(200, 100, 100);
  --color-accent: rgb(200, 100, 100);
  --color-accent-1: rgb(200, 100, 100);
  --color-accent-2: rgb(220, 120, 120);
  --color-base-00: hsl(221, 8%, 14%);
  --color-base-05: hsl(221, 8%, 17%);
  --color-base-10: hsl(221, 8%, 19%);
  --color-base-100: hsl(221, 8%, 95%);
  --color-base-20: hsl(221, 8%, 23%);
  --color-base-25: hsl(221, 8%, 27%);
  --color-base-30: hsl(221, 8%, 35%);
  --color-base-35: hsl(221, 8%, 40%);
  --color-base-40: hsl(221, 8%, 55%);
  --color-base-50: hsl(221, 8%, 45%);
  --color-base-60: hsl(221, 8%, 65%);
  --color-base-70: hsl(221, 8%, 75%);
  --color-base-80: hsl(221, 8%, 85%);
  --dark: var(--text-normal, hsl(221, 8%, 75%));
  --darkgray: var(--text-normal, hsl(221, 8%, 75%));
  --divider-color: hsl(221, 8%, 23%);
  --divider-color-hover: rgb(200, 100, 100);
  --dropdown-background: hsl(221, 8%, 35%);
  --dropdown-background-hover: hsl(221, 8%, 40%);
  --embed-block-shadow-hover: 0 0 0 1px hsl(221, 8%, 35%), inset 0 0 0 1px hsl(221, 8%, 35%);
  --embed-border-start: 2px solid rgb(200, 100, 100);
  --file-header-background: hsl(221, 8%, 17%);
  --file-header-background-focused: hsl(221, 8%, 17%);
  --file-header-font: "SF Pro", ui-sans-serif, sans-serif;
  --flair-background: hsl(221, 8%, 35%);
  --flair-color: hsl(221, 8%, 75%);
  --font-interface: "SF Pro", ui-sans-serif, sans-serif;
  --font-mermaid: "New York", "Georgia", ui-serif, serif;
  --font-monospace: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace;
  --font-text: "New York", "Georgia", ui-serif, serif;
  --footnote-divider-color: hsl(221, 8%, 35%);
  --footnote-id-color: hsl(221, 8%, 75%);
  --footnote-id-color-no-occurrences: hsl(221, 8%, 45%);
  --footnote-radius: 3px;
  --graph-line: hsl(221, 8%, 40%);
  --graph-node: hsl(221, 8%, 75%);
  --graph-node-focused: rgb(200, 100, 100);
  --graph-node-tag: rgb(200, 100, 100);
  --graph-node-unresolved: rgb(220, 120, 120);
  --graph-text: hsl(221, 8%, 75%);
  --gray: var(--text-muted, hsl(221, 8%, 75%));
  --h1-color: hsl(221, 8%, 95%);
  --h1-font: "SF Pro", ui-sans-serif, sans-serif;
  --h1-size: 2rem;
  --h2-color: hsl(221, 8%, 95%);
  --h2-font: "SF Pro", ui-sans-serif, sans-serif;
  --h2-size: 1.65rem;
  --h3-color: hsl(221, 8%, 85%);
  --h3-font: "SF Pro", ui-sans-serif, sans-serif;
  --h3-size: 1.5rem;
  --h4-color: hsl(221, 8%, 85%);
  --h4-font: "SF Pro", ui-sans-serif, sans-serif;
  --h4-size: 1.25rem;
  --h5-color: hsl(221, 8%, 85%);
  --h5-font: "SF Pro", ui-sans-serif, sans-serif;
  --h5-size: 1.125rem;
  --h6-color: hsl(221, 8%, 85%);
  --h6-font: "SF Pro", ui-sans-serif, sans-serif;
  --h6-size: 1rem;
  --headerFont: var(--font-text, "New York", "Georgia", ui-serif, serif);
  --heading-formatting: hsl(221, 8%, 45%);
  --highlight: var(--background-modifier-active-hover, rgb(200, 100, 100));
  --hr-color: hsl(221, 8%, 27%);
  --hr-thickness: 0.125rem;
  --icon-color: hsl(221, 8%, 75%);
  --icon-color-active: hsl(221, 8%, 95%);
  --icon-color-focused: hsl(221, 8%, 75%);
  --icon-color-hover: hsl(221, 8%, 75%);
  --inline-title-color: hsl(221, 8%, 95%);
  --inline-title-font: "SF Pro", ui-sans-serif, sans-serif;
  --inline-title-size: 2.5rem;
  --input-date-separator: hsl(221, 8%, 45%);
  --input-placeholder-color: hsl(221, 8%, 45%);
  --input-radius: 3px;
  --interactive-accent: rgb(200, 100, 100);
  --interactive-accent-hover: rgb(200, 100, 100);
  --interactive-hover: hsl(221, 8%, 40%);
  --interactive-normal: hsl(221, 8%, 35%);
  --light: var(--background-primary, hsl(221, 8%, 17%));
  --lightgray: var(--background-secondary, hsl(221, 8%, 14%));
  --link-color: rgb(200, 100, 100);
  --link-color-hover: rgb(220, 120, 120);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(200, 100, 100);
  --link-external-color-hover: rgb(220, 120, 120);
  --link-unresolved-color: rgb(220, 120, 120);
  --list-marker-color: hsl(221, 8%, 45%);
  --list-marker-color-collapsed: rgb(200, 100, 100);
  --list-marker-color-hover: hsl(221, 8%, 75%);
  --menu-background: hsl(221, 8%, 14%);
  --menu-border-color: hsl(221, 8%, 40%);
  --metadata-border-color: hsl(221, 8%, 35%);
  --metadata-divider-color: hsl(221, 8%, 35%);
  --metadata-input-font: "SF Pro", ui-sans-serif, sans-serif;
  --metadata-input-text-color: hsl(221, 8%, 75%);
  --metadata-label-font: "SF Pro", ui-sans-serif, sans-serif;
  --metadata-label-text-color: hsl(221, 8%, 75%);
  --metadata-label-text-color-hover: hsl(221, 8%, 75%);
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(221, 8%, 55%);
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(221, 8%, 40%);
  --modal-background: hsl(221, 8%, 17%);
  --modal-border-color: hsl(221, 8%, 55%);
  --modal-radius: 3px;
  --mono: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace;
  --nav-collapse-icon-color: hsl(221, 8%, 45%);
  --nav-collapse-icon-color-collapsed: hsl(221, 8%, 45%);
  --nav-heading-color: hsl(221, 8%, 75%);
  --nav-heading-color-collapsed: hsl(221, 8%, 45%);
  --nav-heading-color-collapsed-hover: hsl(221, 8%, 75%);
  --nav-heading-color-hover: hsl(221, 8%, 75%);
  --nav-item-background-active: rgb(200, 100, 100);
  --nav-item-background-hover: rgb(200, 100, 100);
  --nav-item-color: hsl(221, 8%, 75%);
  --nav-item-color-active: hsl(221, 8%, 85%);
  --nav-item-color-highlighted: rgb(200, 100, 100);
  --nav-item-color-hover: hsl(221, 8%, 85%);
  --nav-item-color-selected: hsl(221, 8%, 75%);
  --nav-item-radius: 3px;
  --nav-tag-color: hsl(221, 8%, 45%);
  --nav-tag-color-active: hsl(221, 8%, 75%);
  --nav-tag-color-hover: hsl(221, 8%, 75%);
  --nav-tag-radius: 3px;
  --pdf-background: hsl(221, 8%, 17%);
  --pdf-page-background: hsl(221, 8%, 17%);
  --pdf-shadow: 0 0 0 1px hsl(221, 8%, 35%);
  --pdf-sidebar-background: hsl(221, 8%, 17%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(221, 8%, 35%);
  --pill-border-color: hsl(221, 8%, 35%);
  --pill-border-color-hover: hsl(221, 8%, 40%);
  --pill-color: hsl(221, 8%, 75%);
  --pill-color-hover: hsl(221, 8%, 75%);
  --pill-color-remove: hsl(221, 8%, 45%);
  --pill-color-remove-hover: rgb(200, 100, 100);
  --pill-radius: 3px;
  --prompt-background: hsl(221, 8%, 17%);
  --prompt-border-color: rgb(200, 100, 100);
  --prompt-border-width: 0.15rem;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, hsl(221, 8%, 35%) 65%, transparent) linear-gradient(hsl(221, 8%, 35%), color-mix(in srgb, hsl(221, 8%, 35%) 65%, transparent));
  --ribbon-background: hsl(221, 8%, 14%);
  --ribbon-background-collapsed: hsl(221, 8%, 17%);
  --sans-serif: "SF Pro", ui-sans-serif, sans-serif;
  --search-clear-button-color: hsl(221, 8%, 75%);
  --search-icon-color: hsl(221, 8%, 75%);
  --search-result-background: hsl(221, 8%, 17%);
  --secondary: var(--text-accent, rgb(200, 100, 100));
  --serif: "New York", "Georgia", ui-serif, serif;
  --setting-group-heading-color: hsl(221, 8%, 75%);
  --setting-items-background: hsl(221, 8%, 19%);
  --setting-items-border-color: hsl(221, 8%, 35%);
  --shiki-active-tab-border-color: hsl(221, 8%, 75%);
  --shiki-code-background: hsl(221, 8%, 19%);
  --shiki-code-block-border-radius: 3px;
  --shiki-code-comment: hsl(221, 8%, 45%);
  --shiki-code-normal: hsl(221, 8%, 75%);
  --shiki-code-punctuation: hsl(221, 8%, 75%);
  --shiki-gutter-border-color: hsl(221, 8%, 35%);
  --shiki-gutter-text-color: hsl(221, 8%, 45%);
  --shiki-gutter-text-color-highlight: hsl(221, 8%, 75%);
  --shiki-highlight-neutral: hsl(221, 8%, 75%);
  --shiki-terminal-dots-color: hsl(221, 8%, 45%);
  --slider-thumb-border-color: hsl(221, 8%, 40%);
  --slider-track-background: hsl(221, 8%, 35%);
  --status-bar-background: hsl(221, 8%, 14%);
  --status-bar-border-color: hsl(221, 8%, 23%);
  --status-bar-text-color: hsl(221, 8%, 75%);
  --suggestion-background: hsl(221, 8%, 17%);
  --swatch-radius: 3px;
  --tab-background-active: hsl(221, 8%, 17%);
  --tab-container-background: hsl(221, 8%, 14%);
  --tab-divider-color: hsl(221, 8%, 40%);
  --tab-outline-color: hsl(221, 8%, 23%);
  --tab-radius: 3px;
  --tab-switcher-background: hsl(221, 8%, 14%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(221, 8%, 14%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(200, 100, 100);
  --tab-text-color: hsl(221, 8%, 45%);
  --tab-text-color-active: hsl(221, 8%, 95%);
  --tab-text-color-focused: hsl(221, 8%, 75%);
  --tab-text-color-focused-active: hsl(221, 8%, 95%);
  --tab-text-color-focused-active-current: hsl(221, 8%, 95%);
  --tab-text-color-focused-highlighted: rgb(200, 100, 100);
  --table-add-button-border-color: hsl(221, 8%, 35%);
  --table-border-color: hsl(221, 8%, 35%);
  --table-drag-handle-background-active: rgb(200, 100, 100);
  --table-drag-handle-color: hsl(221, 8%, 45%);
  --table-header-background: hsl(221, 8%, 23%);
  --table-header-border-color: hsl(221, 8%, 35%);
  --table-header-color: hsl(221, 8%, 75%);
  --table-header-font: "SF Pro", ui-sans-serif, sans-serif;
  --table-selection-border-color: rgb(200, 100, 100);
  --tag-background: rgb(200, 100, 100);
  --tag-background-hover: rgb(220, 120, 120);
  --tag-color: hsl(221, 8%, 95%);
  --tag-color-hover: hsl(221, 8%, 95%);
  --tag-radius: 3px;
  --tertiary: var(--text-accent-hover, rgb(220, 120, 120));
  --text-accent: rgb(200, 100, 100);
  --text-accent-hover: rgb(220, 120, 120);
  --text-faint: hsl(221, 8%, 45%);
  --text-muted: hsl(221, 8%, 75%);
  --text-normal: hsl(221, 8%, 75%);
  --text-selection: hsl(0, 40%, 50%);
  --textHighlight: var(--background-modifier-active-hover, rgb(200, 100, 100));
  --titleFont: var(--font-text, "New York", "Georgia", ui-serif, serif);
  --titlebar-background: hsl(221, 8%, 14%);
  --titlebar-background-focused: hsl(221, 8%, 14%);
  --titlebar-border-color: hsl(221, 8%, 35%);
  --titlebar-text-color: hsl(221, 8%, 75%);
  --titlebar-text-color-focused: hsl(221, 8%, 75%);
  --vault-profile-color: hsl(221, 8%, 75%);
  --vault-profile-color-hover: hsl(221, 8%, 75%);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 35, 39);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 42, 47);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 35, 39);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 35, 39);
  border-left-color: rgb(54, 57, 63);
  color: rgb(186, 189, 196);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(241, 242, 243);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(241, 242, 243) none 0px;
  text-decoration-color: rgb(241, 242, 243);
}

html[saved-theme="dark"] body del {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(106, 111, 124);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(200, 100, 100);
  border-color: rgb(200, 100, 100);
}

html[saved-theme="dark"] body p {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(220, 120, 120);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(220, 120, 120) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body dt {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(106, 111, 124);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(40, 42, 47);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body table {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  width: 204.625px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(82, 87, 96);
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(82, 87, 96);
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(54, 57, 63);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(214, 216, 220);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  padding-bottom: 1.92px;
  padding-left: 3.84px;
  padding-right: 3.84px;
  padding-top: 1.92px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(241, 242, 243);
  border-left-color: rgb(241, 242, 243);
  border-right-color: rgb(241, 242, 243);
  border-top-color: rgb(241, 242, 243);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(106, 111, 124);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(106, 111, 124);
  border-right-color: rgb(106, 111, 124);
  border-top-color: rgb(106, 111, 124);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(186, 189, 196);
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 42, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 42, 47);
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
  background-color: rgb(106, 111, 124);
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
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(214, 216, 220);
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
  background-color: rgb(63, 67, 74);
  border-bottom-color: rgb(82, 87, 96);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 47);
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(186, 189, 196) none 0px;
  text-decoration-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 35, 39);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(200, 100, 100);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(241, 242, 243);
}

html[saved-theme="dark"] body h1 {
  color: rgb(241, 242, 243);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(241, 242, 243);
  font-size: 40px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(241, 242, 243);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(241, 242, 243);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(214, 216, 220);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(186, 189, 196);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(33, 35, 39);
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
  border-top-color: rgb(54, 57, 63);
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(186, 189, 196);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(186, 189, 196);
  stroke: rgb(186, 189, 196);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(186, 189, 196);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(106, 111, 124);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(33, 35, 39);
  border-color: rgb(186, 189, 196);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(82, 87, 96);
  border-left-color: rgb(82, 87, 96);
  border-right-color: rgb(82, 87, 96);
  border-top-color: rgb(82, 87, 96);
  color: rgb(186, 189, 196);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(82, 87, 96);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(200, 100, 100);
  border-radius: 3px;
  color: rgb(241, 242, 243);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 42, 47);
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(33, 35, 39);
  border-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(33, 35, 39);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(186, 189, 196);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(214, 216, 220);
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  color: rgb(214, 216, 220);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(33, 35, 39);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
  color: rgb(186, 189, 196);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(45, 47, 52);
  border-bottom-color: rgb(214, 216, 220);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(214, 216, 220);
  border-right-color: rgb(214, 216, 220);
  border-top-color: rgb(214, 216, 220);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(214, 216, 220);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(186, 189, 196);
  border-left-color: rgb(186, 189, 196);
  border-right-color: rgb(186, 189, 196);
  border-top-color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body sub {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body summary {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body sup {
  color: rgb(186, 189, 196);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(200, 100, 100);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(241, 242, 243);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgb(250, 240, 240);
  --background-primary: #fefefe;
  --background-secondary: hsl(18, 65%, 98%);
  --background-secondary-alt: #fefefe;
  --bases-cards-background: #fefefe;
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: #555555;
  --bases-table-cell-background-active: #fefefe;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(200, 100, 100);
  --bases-table-container-border-radius: 3px;
  --bases-table-header-background: #fefefe;
  --bases-table-header-color: #555555;
  --bases-table-summary-background: #fefefe;
  --blockquote-background-color: #fefefe;
  --blockquote-border-color: rgb(200, 100, 100);
  --blockquote-border-thickness: 0.2rem;
  --blur-background: color-mix(in srgb, #fefefe 65%, transparent) linear-gradient(#fefefe, color-mix(in srgb, #fefefe 65%, transparent));
  --bodyFont: var(--font-text, "New York", "Georgia", ui-serif, serif);
  --button-radius: 3px;
  --callout-border-width: 1px;
  --callout-padding: 1rem;
  --callout-radius: 3px;
  --canvas-background: #fefefe;
  --canvas-controls-radius: 3px;
  --caret-color: #555555;
  --checkbox-border-color-hover: #555555;
  --checkbox-color: rgb(200, 100, 100);
  --checkbox-color-hover: rgb(220, 120, 120);
  --checkbox-marker-color: #fefefe;
  --checkbox-radius: 3px;
  --checklist-done-color: #555555;
  --clickable-icon-radius: 3px;
  --code-background: #f6f6f6;
  --code-comment: #bdbdbd;
  --code-function: hsl(0, 50%, 55%);
  --code-important: hsl(0, 50%, 55%);
  --code-keyword: hsl(29, 57%, 55%);
  --code-normal: #444444;
  --code-operator: #727272;
  --code-property: hsl(197, 53%, 55%);
  --code-punctuation: #bdbdbd;
  --code-radius: 3px;
  --code-size: 0.8rem;
  --code-string: hsl(93, 30%, 65%);
  --code-tag: hsl(0, 50%, 60%);
  --code-value: hsl(29, 50%, 55%);
  --codeFont: var(--font-monospace, "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace);
  --collapse-icon-color-collapsed: rgb(200, 100, 100);
  --color-accent: rgb(200, 100, 100);
  --color-accent-1: rgb(200, 100, 100);
  --color-accent-2: rgb(220, 120, 120);
  --color-base-05: #fefefe;
  --color-base-100: #000000;
  --color-base-60: #727272;
  --color-base-70: #555555;
  --color-base-80: #444444;
  --dark: var(--text-normal, #555555);
  --darkgray: var(--text-normal, #555555);
  --divider-color-hover: rgb(200, 100, 100);
  --embed-border-start: 2px solid rgb(200, 100, 100);
  --file-header-background: #fefefe;
  --file-header-background-focused: #fefefe;
  --file-header-font: "SF Pro", ui-sans-serif, sans-serif;
  --flair-color: #555555;
  --font-interface: "SF Pro", ui-sans-serif, sans-serif;
  --font-mermaid: "New York", "Georgia", ui-serif, serif;
  --font-monospace: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace;
  --font-text: "New York", "Georgia", ui-serif, serif;
  --footnote-id-color: #555555;
  --footnote-radius: 3px;
  --graph-node: #555555;
  --graph-node-focused: rgb(200, 100, 100);
  --graph-node-tag: rgb(200, 100, 100);
  --graph-node-unresolved: rgb(220, 120, 120);
  --graph-text: #555555;
  --gray: var(--text-muted, #555555);
  --h1-color: #000000;
  --h1-font: "SF Pro", ui-sans-serif, sans-serif;
  --h1-size: 2rem;
  --h2-color: #000000;
  --h2-font: "SF Pro", ui-sans-serif, sans-serif;
  --h2-size: 1.65rem;
  --h3-color: #444444;
  --h3-font: "SF Pro", ui-sans-serif, sans-serif;
  --h3-size: 1.5rem;
  --h4-color: #444444;
  --h4-font: "SF Pro", ui-sans-serif, sans-serif;
  --h4-size: 1.25rem;
  --h5-color: #444444;
  --h5-font: "SF Pro", ui-sans-serif, sans-serif;
  --h5-size: 1.125rem;
  --h6-color: #444444;
  --h6-font: "SF Pro", ui-sans-serif, sans-serif;
  --h6-size: 1rem;
  --headerFont: var(--font-text, "New York", "Georgia", ui-serif, serif);
  --highlight: var(--background-modifier-active-hover, rgb(250, 240, 240));
  --hr-color: #e3e3e3;
  --hr-thickness: 0.125rem;
  --icon-color: #555555;
  --icon-color-active: rgb(200, 100, 100);
  --icon-color-focused: #555555;
  --icon-color-hover: #555555;
  --inline-title-color: #000000;
  --inline-title-font: "SF Pro", ui-sans-serif, sans-serif;
  --inline-title-size: 2.5rem;
  --input-radius: 3px;
  --interactive-accent: rgb(200, 100, 100);
  --interactive-accent-hover: rgb(220, 120, 120);
  --light: var(--background-primary, #fefefe);
  --lightgray: var(--background-secondary, hsl(18, 65%, 98%));
  --link-color: rgb(200, 100, 100);
  --link-color-hover: rgb(220, 120, 120);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(200, 100, 100);
  --link-external-color-hover: rgb(220, 120, 120);
  --link-unresolved-color: rgb(220, 120, 120);
  --list-marker-color-collapsed: rgb(200, 100, 100);
  --list-marker-color-hover: #555555;
  --menu-background: hsl(18, 65%, 98%);
  --metadata-input-font: "SF Pro", ui-sans-serif, sans-serif;
  --metadata-input-text-color: #555555;
  --metadata-label-font: "SF Pro", ui-sans-serif, sans-serif;
  --metadata-label-text-color: #555555;
  --metadata-label-text-color-hover: #555555;
  --modal-background: #fefefe;
  --modal-radius: 3px;
  --mono: "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas,
    "DejaVu Sans Mono", monospace;
  --nav-heading-color: #555555;
  --nav-heading-color-collapsed-hover: #555555;
  --nav-heading-color-hover: #555555;
  --nav-item-background-active: rgb(200, 100, 100);
  --nav-item-background-hover: rgb(200, 100, 100);
  --nav-item-color: #555555;
  --nav-item-color-active: #f6f6f6;
  --nav-item-color-highlighted: rgb(200, 100, 100);
  --nav-item-color-hover: #f6f6f6;
  --nav-item-color-selected: #555555;
  --nav-item-radius: 3px;
  --nav-tag-color-active: #555555;
  --nav-tag-color-hover: #555555;
  --nav-tag-radius: 3px;
  --pdf-background: #fefefe;
  --pdf-page-background: #fefefe;
  --pdf-sidebar-background: #fefefe;
  --pill-color: #555555;
  --pill-color-hover: #555555;
  --pill-color-remove-hover: rgb(200, 100, 100);
  --pill-radius: 3px;
  --prompt-background: #fefefe;
  --prompt-border-color: rgb(200, 100, 100);
  --prompt-border-width: 0.15rem;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, #fefefe 65%, transparent) linear-gradient(#fefefe, color-mix(in srgb, #fefefe 65%, transparent));
  --ribbon-background: hsl(18, 65%, 98%);
  --ribbon-background-collapsed: #fefefe;
  --sans-serif: "SF Pro", ui-sans-serif, sans-serif;
  --search-clear-button-color: #555555;
  --search-icon-color: #555555;
  --search-result-background: #fefefe;
  --secondary: var(--text-accent, rgb(200, 100, 100));
  --serif: "New York", "Georgia", ui-serif, serif;
  --setting-group-heading-color: #555555;
  --shiki-active-tab-border-color: #555555;
  --shiki-code-background: #f6f6f6;
  --shiki-code-block-border-radius: 3px;
  --shiki-code-normal: #555555;
  --shiki-code-punctuation: #555555;
  --shiki-gutter-text-color-highlight: #555555;
  --shiki-highlight-neutral: #555555;
  --status-bar-background: hsl(18, 65%, 98%);
  --status-bar-text-color: #555555;
  --suggestion-background: #fefefe;
  --swatch-radius: 3px;
  --tab-background-active: #fefefe;
  --tab-container-background: hsl(18, 65%, 98%);
  --tab-radius: 3px;
  --tab-switcher-background: hsl(18, 65%, 98%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(18, 65%, 98%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(200, 100, 100);
  --tab-text-color-active: #000000;
  --tab-text-color-focused: #555555;
  --tab-text-color-focused-active: #000000;
  --tab-text-color-focused-active-current: #000000;
  --tab-text-color-focused-highlighted: rgb(200, 100, 100);
  --table-drag-handle-background-active: rgb(200, 100, 100);
  --table-header-background: #f6f6f6;
  --table-header-color: #555555;
  --table-header-font: "SF Pro", ui-sans-serif, sans-serif;
  --table-selection-border-color: rgb(200, 100, 100);
  --tag-background: rgb(200, 100, 100);
  --tag-background-hover: rgb(220, 120, 120);
  --tag-color: #fafafa;
  --tag-color-hover: #ffffff;
  --tag-radius: 3px;
  --tertiary: var(--text-accent-hover, rgb(220, 120, 120));
  --text-accent: rgb(200, 100, 100);
  --text-accent-hover: rgb(220, 120, 120);
  --text-muted: #555555;
  --text-normal: #555555;
  --text-selection: rgb(200, 100, 100);
  --textHighlight: var(--background-modifier-active-hover, rgb(250, 240, 240));
  --titleFont: var(--font-text, "New York", "Georgia", ui-serif, serif);
  --titlebar-background-focused: #f6f6f6;
  --titlebar-text-color: #555555;
  --titlebar-text-color-focused: #555555;
  --vault-profile-color: #555555;
  --vault-profile-color-hover: #555555;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(254, 254, 254);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body del {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(200, 100, 100);
  border-color: rgb(200, 100, 100);
}

html[saved-theme="light"] body p {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 100, 100);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(200, 100, 100) none 0px;
  text-decoration-color: rgb(200, 100, 100);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(220, 120, 120);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(220, 120, 120) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body dt {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ol > li {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ul > li {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgb(254, 254, 254);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body table {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  width: 204.625px;
}

html[saved-theme="light"] body td {
  color: rgb(85, 85, 85);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

html[saved-theme="light"] body th {
  color: rgb(85, 85, 85);
  padding-bottom: 10.4px;
  padding-left: 10.4px;
  padding-right: 10.4px;
  padding-top: 10.4px;
}

html[saved-theme="light"] body tr {
  background-color: rgb(246, 246, 246);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(68, 68, 68);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  padding-bottom: 1.92px;
  padding-left: 3.84px;
  padding-right: 3.84px;
  padding-top: 1.92px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body figcaption {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(200, 100, 100);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 254, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 254, 254);
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

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(68, 68, 68);
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
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "New York", Georgia, ui-serif, serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(200, 100, 100);
  border-bottom-width: 2px;
  border-left-color: rgb(200, 100, 100);
  border-left-width: 2px;
  border-right-color: rgb(200, 100, 100);
  border-right-width: 2px;
  border-top-color: rgb(200, 100, 100);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 249, 247);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(200, 100, 100);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(250, 250, 250);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 0, 0);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(0, 0, 0);
  font-size: 40px;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(68, 68, 68);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(85, 85, 85);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(253, 249, 247);
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(85, 85, 85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(85, 85, 85);
  stroke: rgb(85, 85, 85);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(254, 254, 254);
  border-color: rgb(85, 85, 85);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  color: rgb(85, 85, 85);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  color: rgb(85, 85, 85);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(200, 100, 100);
  border-radius: 3px;
  color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(254, 254, 254);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(253, 249, 247);
  border-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(85, 85, 85);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(253, 249, 247);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "??", "??", "SF Pro", ui-sans-serif, sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(68, 68, 68);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(68, 68, 68);
  font-family: "??", "??", "SF Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body sub {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body summary {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body sup {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(200, 100, 100);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(250, 250, 250);
}`,
  },
};
