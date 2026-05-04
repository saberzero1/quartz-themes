import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.horizon",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-color-dark: var(--cranberry, #e95678);
  --accent-color-hover: var(--rosebud, #fab795);
  --accent-color-light: var(--turquoise, #25b0bc);
  --accent-h: 345;
  --accent-l: 62%;
  --accent-s: 77%;
  --accentAlt: #6c6f93;
  --apricot: #f09483;
  --background: #1c1e26;
  --background-modifier-border: var(--border-color-primary, #2e303e);
  --background-modifier-border-focus: var(--border-color-secondary, #2e303e);
  --background-modifier-border-hover: var(--border-color-secondary, #2e303e);
  --background-modifier-error: var(--color-red, #e95678);
  --background-modifier-error-hover: var(--color-red, #e95678);
  --background-modifier-form-field: var(--background-secondary, #232530);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #232530);
  --background-modifier-hover: var(--selection-background-color, #2e303e);
  --background-modifier-success: var(--color-green, #29d398);
  --background-primary: var(--background, #1c1e26);
  --background-secondary: var(--backgroundAlt, #232530);
  --backgroundAlt: #232530;
  --bases-cards-background: var(--background-primary, #1c1e26);
  --bases-embed-border-color: var(--background-modifier-border, #2e303e);
  --bases-group-heading-property-color: var(--text-muted, #d5d8da);
  --bases-table-border-color: var(--table-border-color, #2e303e);
  --bases-table-cell-background-active: var(--background-primary, #1c1e26);
  --bases-table-cell-background-selected: var(--table-selection, #2e303e);
  --bases-table-header-background: var(--background-primary, #1c1e26);
  --bases-table-header-background-hover: var(--background-modifier-hover, #2e303e);
  --bases-table-header-color: var(--text-muted, #d5d8da);
  --bases-table-summary-background: var(--background-primary, #1c1e26);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #2e303e);
  --blockquote-border-color: var(--accent-color-dark, #e95678);
  --blue: #26bbd9;
  --bold-color: var(--accent-color-light, #25b0bc);
  --border: #1a1c23;
  --border-color: var(--border-color-primary, #2e303e);
  --border-color-primary: var(--accent, #2e303e);
  --border-color-secondary: var(--accent, #2e303e);
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
  --canvas-background: var(--background-primary, #1c1e26);
  --canvas-card-label-color: var(--text-faint, #6c6f93);
  --canvas-color: 233, 83, 120;
  --caret-color: var(--text-normal, #d5d8da);
  --checkbox-border-color: var(--text-color-muted-light, #6c6f93);
  --checkbox-border-color-hover: var(--accent-color-hover, #fab795);
  --checkbox-color: var(--accent-color-dark, #e95678);
  --checkbox-color-hover: var(--accent-color-hover, #fab795);
  --checkbox-marker-color: var(--background-primary, #1c1e26);
  --checklist-done-color: var(--text-color-muted-light, #6c6f93);
  --code-background: var(--background-secondary, #232530);
  --code-boolean: var(--apricot, #f09483);
  --code-border-color: var(--background-modifier-border, #2e303e);
  --code-bracket-background: var(--background-modifier-hover, #2e303e);
  --code-builtin: var(--turquoise, #25b0bc);
  --code-comment: var(--text-faint, #4c4d53);
  --code-definition: var(--cranberry, #e95678);
  --code-function: var(--color-yellow, #fab795);
  --code-important: var(--color-yellow, #fab795);
  --code-keyword: var(--lavender, #b877db);
  --code-normal: var(--text-normal, #d5d8da);
  --code-operator: var(--gray, #bbbbbb);
  --code-parentheses: var(--gray, #bbbbbb);
  --code-property: var(--turquoise, #25b0bc);
  --code-punctuation: var(--text-muted, #d5d8da);
  --code-string: var(--rosebud, #fab795);
  --code-tag: var(--color-red, #e95678);
  --code-value: var(--apricot, #f09483);
  --code-variable: var(--cranberry, #e95678);
  --collapse-icon-color: var(--text-faint, #6c6f93);
  --collapse-icon-color-collapsed: var(--text-accent, #2e303e);
  --color-blue: var(--blue, #26bbd9);
  --color-cyan: var(--cyan, #59e1e3);
  --color-green: var(--green, #29d398);
  --color-orange: var(--apricot, #f09483);
  --color-pink: pink;
  --color-purple: var(--lavender, #b877db);
  --color-red: var(--red, #e95678);
  --color-yellow: var(--yellow, #fab795);
  --cranberry: #e95678;
  --cyan: #59e1e3;
  --dark: var(--text-normal, var(--text-color, #d5d8da));
  --darkgray: var(--text-normal, var(--text-color, #d5d8da));
  --divider-color: var(--background-modifier-border, #2e303e);
  --divider-color-hover: var(--interactive-accent, #2e303e);
  --dropdown-background: var(--interactive-normal, #232530);
  --dropdown-background-hover: var(--interactive-hover, #2e303e);
  --file-header-background: var(--background-primary, #1c1e26);
  --file-header-background-focused: var(--background-primary, #1c1e26);
  --flair-background: var(--interactive-normal, #232530);
  --flair-color: var(--text-normal, #d5d8da);
  --footnote-divider-color: var(--metadata-divider-color, #2e303e);
  --footnote-id-color: var(--text-muted, #d5d8da);
  --footnote-id-color-no-occurrences: var(--text-faint, #6c6f93);
  --footnote-input-background-active: var(--metadata-input-background-active, #2e303e);
  --graph-line: var(--border-color-secondary, #2e303e);
  --graph-node: var(--accent, #2e303e);
  --graph-node-attachment: var(--accent-color-dark, #e95678);
  --graph-node-focused: var(--accent-color-hover, #fab795);
  --graph-node-tag: var(--accent-color-light, #25b0bc);
  --graph-node-unresolved: var(--border-color-primary, #2e303e);
  --graph-text: var(--text-color, #d5d8da);
  --gray: #bbbbbb;
  --green: #29d398;
  --h1-color: var(--color-purple, #b877db);
  --h2-color: var(--color-blue, #26bbd9);
  --h3-color: var(--color-green, #29d398);
  --h4-color: var(--color-yellow, #fab795);
  --h5-color: var(--color-orange, #f09483);
  --h6-color: var(--color-red, #e95678);
  --heading-formatting: var(--text-faint, #6c6f93);
  --highlight: var(--text-highlight-bg, var(--accent, #2e303e));
  --hr-color: var(--text-color-muted-dark, #2e303e);
  --icon-color: var(--text-muted, #d5d8da);
  --icon-color-active: var(--text-accent, #2e303e);
  --icon-color-focused: var(--text-normal, #d5d8da);
  --icon-color-hover: var(--text-muted, #d5d8da);
  --indentation-guide-color: var(--text-color-muted-dark, #2e303e);
  --indentation-guide-color-active: var(--text-color-muted-light, #6c6f93);
  --inline-title-color: var(--text-color, #d5d8da);
  --input-date-separator: var(--text-faint, #6c6f93);
  --input-placeholder-color: var(--text-faint, #6c6f93);
  --interactive-accent: var(--accent, #2e303e);
  --interactive-accent-hover: var(--color-accent-1, hsl(342, 78.54%, 71.3%));
  --interactive-accent-hsl: var(--color-accent-hsl, 345, 77%, 62%);
  --interactive-hover: var(--border-color-primary, #2e303e);
  --interactive-normal: var(--background-secondary, #232530);
  --italic-color: var(--accent-color-light, #25b0bc);
  --lavender: #b877db;
  --light: var(--background-primary, var(--background, #1c1e26));
  --lightText: #d5d8da;
  --lightgray: var(--background-secondary, var(--backgroundAlt, #232530));
  --link-color: var(--accent-color-dark, #e95678);
  --link-color-hover: var(--accent-color-hover, #fab795);
  --link-external-color: var(--accent-color-dark, #e95678);
  --link-external-color-hover: var(--accent-color-hover, #fab795);
  --link-unresolved-color: var(--red, #e95678);
  --link-unresolved-color-hover: var(--red, #e95678);
  --list-marker-color: var(--accent-color-dark, #e95678);
  --list-marker-color-collapsed: var(--text-accent, #2e303e);
  --list-marker-color-hover: var(--text-muted, #d5d8da);
  --magenta: #ee64ac;
  --menu-background: var(--background-secondary, #232530);
  --menu-border-color: var(--background-modifier-border-hover, #2e303e);
  --metadata-border-color: var(--background-modifier-border, #2e303e);
  --metadata-divider-color: var(--background-modifier-border, #2e303e);
  --metadata-input-background-active: var(--background-modifier-hover, #2e303e);
  --metadata-input-text-color: var(--text-color, #d5d8da);
  --metadata-label-background-active: var(--background-modifier-hover, #2e303e);
  --metadata-label-text-color: var(--text-color, #d5d8da);
  --metadata-label-text-color-hover: var(--text-muted, #d5d8da);
  --metadata-property-background-active: var(--background-modifier-hover, #2e303e);
  --modal-background: var(--background-secondary, #232530);
  --modal-border-color: var(--border-color-primary, #2e303e);
  --nav-collapse-icon-color: var(--border-color-secondary, #2e303e);
  --nav-collapse-icon-color-collapsed: var(--border-color-secondary, #2e303e);
  --nav-heading-color: var(--text-normal, #d5d8da);
  --nav-heading-color-collapsed: var(--text-faint, #6c6f93);
  --nav-heading-color-collapsed-hover: var(--text-muted, #d5d8da);
  --nav-heading-color-hover: var(--text-normal, #d5d8da);
  --nav-indentation-guide-color: var(--border-color-secondary, #2e303e);
  --nav-item-background-active: var(--accent-color-dark, #e95678);
  --nav-item-background-hover: var(--selection-background-color, #2e303e);
  --nav-item-color: var(--text-color, #d5d8da);
  --nav-item-color-active: var(--text-color-accent, white);
  --nav-item-color-highlighted: var(--accent-color-light, #25b0bc);
  --nav-item-color-hover: var(--text-color-accent, white);
  --nav-item-color-selected: var(--text-normal, red);
  --nav-tag-color: var(--text-faint, #6c6f93);
  --nav-tag-color-active: var(--text-muted, #d5d8da);
  --nav-tag-color-hover: var(--text-muted, #d5d8da);
  --pdf-background: var(--background-primary, #1c1e26);
  --pdf-page-background: var(--background-primary, #1c1e26);
  --pdf-sidebar-background: var(--background-primary, #1c1e26);
  --pill-border-color: var(--background-modifier-border, #2e303e);
  --pill-border-color-hover: var(--background-modifier-border-hover, #2e303e);
  --pill-color: var(--text-muted, #d5d8da);
  --pill-color-hover: var(--text-normal, #d5d8da);
  --pill-color-remove: var(--text-faint, #6c6f93);
  --pill-color-remove-hover: var(--text-accent, #2e303e);
  --prompt-background: var(--background-primary, #1c1e26);
  --prompt-border-color: var(--border-color-primary, #2e303e);
  --raised-background: var(--blur-background, color-mix(in srgb, #232530 65%, transparent) linear-gradient(#232530, color-mix(in srgb, #232530 65%, transparent)));
  --red: #e95678;
  --ribbon-background: var(--background-secondary, #232530);
  --ribbon-background-collapsed: var(--background-primary, #1c1e26);
  --rosebud: #fab795;
  --search-clear-button-color: var(--text-muted, #d5d8da);
  --search-icon-color: var(--text-muted, #d5d8da);
  --search-result-background: var(--background-primary, #1c1e26);
  --secondary: var(--text-accent, var(--accent, #2e303e));
  --selection-background-color: var(--accent, #2e303e);
  --selection-border-color: var(--accent-color-hover, #fab795);
  --setting-group-heading-color: var(--text-normal, #d5d8da);
  --setting-items-border-color: var(--background-modifier-border, #2e303e);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #d5d8da);
  --shiki-code-background: var(--code-background, #232530);
  --shiki-code-comment: var(--text-faint, #6c6f93);
  --shiki-code-function: var(--color-green, #29d398);
  --shiki-code-important: var(--color-orange, #f09483);
  --shiki-code-keyword: var(--color-pink, pink);
  --shiki-code-normal: var(--text-muted, #d5d8da);
  --shiki-code-property: var(--color-cyan, #59e1e3);
  --shiki-code-punctuation: var(--text-muted, #d5d8da);
  --shiki-code-string: var(--color-yellow, #fab795);
  --shiki-code-value: var(--color-purple, #b877db);
  --shiki-gutter-border-color: var(--background-modifier-border, #2e303e);
  --shiki-gutter-text-color: var(--text-faint, #6c6f93);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #d5d8da);
  --shiki-highlight-neutral: var(--shiki-code-normal, #d5d8da);
  --shiki-terminal-dots-color: var(--text-faint, #6c6f93);
  --slider-track-background: var(--background-secondary, #232530);
  --status-bar-background: var(--background-secondary, #232530);
  --status-bar-border-color: var(--divider-color, #2e303e);
  --status-bar-text-color: var(--text-muted, #d5d8da);
  --suggestion-background: var(--background-primary, #1c1e26);
  --sync-avatar-color-1: var(--color-red, #e95678);
  --sync-avatar-color-2: var(--color-orange, #f09483);
  --sync-avatar-color-3: var(--color-yellow, #fab795);
  --sync-avatar-color-4: var(--color-green, #29d398);
  --sync-avatar-color-5: var(--color-cyan, #59e1e3);
  --sync-avatar-color-6: var(--color-blue, #26bbd9);
  --sync-avatar-color-7: var(--color-purple, #b877db);
  --sync-avatar-color-8: var(--color-pink, pink);
  --tab-background-active: var(--background-primary, #1c1e26);
  --tab-container-background: var(--background-secondary, #232530);
  --tab-divider-color: var(--selection-background-color, #2e303e);
  --tab-outline-color: var(--border-color-primary, #2e303e);
  --tab-switcher-background: var(--background-secondary, #232530);
  --tab-text-color: var(--border-color-primary, #2e303e);
  --tab-text-color-active: var(--text-color, #d5d8da);
  --tab-text-color-focused: var(--text-color, #d5d8da);
  --tab-text-color-focused-active: var(--text-color, #d5d8da);
  --tab-text-color-focused-active-current: var(--text-color-accent, white);
  --tab-text-color-focused-highlighted: var(--text-accent, red);
  --table-add-button-border-color: var(--background-modifier-border, #2e303e);
  --table-border-color: var(--border-color-primary, #2e303e);
  --table-drag-handle-background-active: var(--table-selection-border-color, #fab795);
  --table-drag-handle-color: var(--selection-background-color, #2e303e);
  --table-drag-handle-color-active: var(--selection-background-color, #2e303e);
  --table-header-border-color: var(--table-border-color, #2e303e);
  --table-header-color: var(--text-color, #d5d8da);
  --table-selection: var(--selection-background-color, #2e303e);
  --table-selection-border-color: var(--selection-border-color, #fab795);
  --tacao: #fac29a;
  --tag-background: var(--text-color-muted-dark, #2e303e);
  --tag-background-hover: var(--text-color-muted-light, #6c6f93);
  --tag-color: var(--accent-color-dark, #e95678);
  --tag-color-hover: var(--accent-color-dark, #e95678);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, red));
  --text-accent: var(--accent, #2e303e);
  --text-accent-hover: var(--color-accent-2, red);
  --text-color: var(--lightText, #d5d8da);
  --text-color-accent: white;
  --text-color-muted-dark: var(--accent, #2e303e);
  --text-color-muted-light: var(--accentAlt, #6c6f93);
  --text-error: var(--color-red, #e95678);
  --text-faint: var(--text-color-muted-light, #6c6f93);
  --text-highlight-bg: var(--accent, #2e303e);
  --text-muted: var(--text-color, #d5d8da);
  --text-normal: var(--text-color, #d5d8da);
  --text-on-accent: var(--text-color-accent, white);
  --text-on-accent-inverted: var(--background-primary, #1c1e26);
  --text-selection: var(--selection-background-color, #2e303e);
  --text-success: var(--color-green, #29d398);
  --text-warning: var(--color-yellow, #fab795);
  --textHighlight: var(--text-highlight-bg, var(--accent, #2e303e));
  --titlebar-background: var(--background-secondary, #232530);
  --titlebar-background-focused: var(--border-color-primary, #2e303e);
  --titlebar-border-color: var(--background-modifier-border, #2e303e);
  --titlebar-text-color: var(--text-muted, #d5d8da);
  --titlebar-text-color-focused: var(--text-normal, #d5d8da);
  --toggle-thumb-color: var(--text-color-accent, white);
  --turquoise: #25b0bc;
  --vault-profile-color: var(--text-normal, #d5d8da);
  --vault-profile-color-hover: var(--vault-profile-color, #d5d8da);
  --yellow: #fab795;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #232530);
  background-color: var(--tab-container-background, rgb(35, 37, 48));
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(28, 30, 38));
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(35, 37, 48));
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #232530);
  background-color: var(--tab-container-background, rgb(35, 37, 48));
  border-left-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(37, 176, 188));
  outline: rgb(37, 176, 188) none 0px;
  text-decoration-color: rgb(37, 176, 188);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(37, 176, 188));
  outline: rgb(37, 176, 188) none 0px;
  text-decoration-color: rgb(37, 176, 188);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(37, 176, 188));
  outline: rgb(37, 176, 188) none 0px;
  text-decoration-color: rgb(37, 176, 188);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(37, 176, 188));
  outline: rgb(37, 176, 188) none 0px;
  text-decoration-color: rgb(37, 176, 188);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(37, 176, 188));
  outline: rgb(37, 176, 188) none 0px;
  text-decoration-color: rgb(37, 176, 188);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(46, 48, 62));
  color: var(--text-normal, rgb(213, 216, 218));
  outline: rgb(213, 216, 218) none 0px;
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body del {
  color: rgb(213, 216, 218);
  outline: rgb(213, 216, 218) none 0px;
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 111, 147);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(233, 86, 120));
  border-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(213, 216, 218));
  outline: rgb(213, 216, 218) none 0px;
  text-decoration-color: rgb(213, 216, 218);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(233, 86, 120));
  outline: rgb(233, 86, 120) none 0px;
  text-decoration-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(233, 86, 120));
  outline: rgb(233, 86, 120) none 0px;
  text-decoration-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(233, 86, 120));
  outline: rgb(233, 86, 120) none 0px;
  text-decoration: underline rgba(233, 83, 121, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(233, 83, 121, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(108, 111, 147));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgb(213, 216, 218));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body table {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: var(--table-text-color, rgb(213, 216, 218));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: var(--table-header-color, rgb(213, 216, 218));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(35, 37, 48));
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: var(--code-normal, rgb(213, 216, 218));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(35, 37, 48));
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #232530);
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(184, 119, 219);
  border-left-color: rgb(184, 119, 219);
  border-right-color: rgb(184, 119, 219);
  border-top-color: rgb(184, 119, 219);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: var(--text-muted, rgb(213, 216, 218));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 147);
  border-left-color: rgb(108, 111, 147);
  border-right-color: rgb(108, 111, 147);
  border-top-color: rgb(108, 111, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(108, 111, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(108, 111, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(28, 30, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(28, 30, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 148, 131);
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
  background-color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 225, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 187, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 187, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(184, 119, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(213, 216, 218);
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
  background-color: rgb(35, 37, 48);
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: var(--text-normal, rgb(213, 216, 218));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(28, 30, 38));
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(213, 216, 218);
  outline: rgb(213, 216, 218) none 0px;
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(46, 48, 62));
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(35, 37, 48);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(46, 48, 62));
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(46, 48, 62));
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, #2e303e);
  --pill-background-hover: var(--tag-background-hover, #6c6f93);
  --pill-border-color: var(--tag-border-color, hsla(345, 77%, 62%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(345, 77%, 62%, 0.15));
  --pill-color: var(--tag-color, #e95678);
  --pill-color-hover: var(--tag-color-hover, #e95678);
  --pill-color-remove: var(--tag-color, #e95678);
  --pill-color-remove-hover: var(--tag-color-hover, #e95678);
  background-color: var(--pill-background, rgb(46, 48, 62));
  border-bottom-color: rgba(233, 83, 121, 0.15);
  border-left-color: rgba(233, 83, 121, 0.15);
  border-right-color: rgba(233, 83, 121, 0.15);
  border-top-color: rgba(233, 83, 121, 0.15);
  color: var(--pill-color, rgb(233, 86, 120));
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(184, 119, 219);
  border-left-color: rgb(184, 119, 219);
  border-right-color: rgb(184, 119, 219);
  border-top-color: rgb(184, 119, 219);
  color: var(--h1-color, rgb(184, 119, 219));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(213, 216, 218));
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: rgb(38, 187, 217);
  border-left-color: rgb(38, 187, 217);
  border-right-color: rgb(38, 187, 217);
  border-top-color: rgb(38, 187, 217);
  color: var(--h2-color, rgb(38, 187, 217));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: var(--inline-title-color, rgb(213, 216, 218));
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: rgb(41, 211, 152);
  border-left-color: rgb(41, 211, 152);
  border-right-color: rgb(41, 211, 152);
  border-top-color: rgb(41, 211, 152);
  color: var(--h3-color, rgb(41, 211, 152));
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(250, 183, 149);
  border-left-color: rgb(250, 183, 149);
  border-right-color: rgb(250, 183, 149);
  border-top-color: rgb(250, 183, 149);
  color: var(--h4-color, rgb(250, 183, 149));
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(240, 148, 131);
  border-left-color: rgb(240, 148, 131);
  border-right-color: rgb(240, 148, 131);
  border-top-color: rgb(240, 148, 131);
  color: var(--h5-color, rgb(240, 148, 131));
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(233, 86, 120);
  border-left-color: rgb(233, 86, 120);
  border-right-color: rgb(233, 86, 120);
  border-top-color: rgb(233, 86, 120);
  color: var(--h6-color, rgb(233, 86, 120));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(213, 216, 218));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(213, 216, 218));
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

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(213, 216, 218);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: var(--icon-color, rgb(213, 216, 218));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(35, 37, 48));
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: var(--status-bar-text-color, rgb(213, 216, 218));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(213, 216, 218);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(213, 216, 218));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 216, 218);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(213, 216, 218));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: var(--icon-color, rgb(213, 216, 218));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(213, 216, 218);
  stroke: rgb(213, 216, 218);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(108, 111, 147));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(213, 216, 218));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(35, 37, 48));
  border-color: rgb(213, 216, 218);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(46, 48, 62);
  color: var(--table-header-color, rgb(213, 216, 218));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: var(--text-muted, rgb(213, 216, 218));
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, #2e303e);
  --pill-background-hover: var(--tag-background-hover, #6c6f93);
  --pill-border-color: var(--tag-border-color, hsla(345, 77%, 62%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(345, 77%, 62%, 0.15));
  --pill-color: var(--tag-color, #e95678);
  --pill-color-hover: var(--tag-color-hover, #e95678);
  --pill-color-remove: var(--tag-color, #e95678);
  --pill-color-remove-hover: var(--tag-color-hover, #e95678);
  background-color: var(--pill-background, rgb(46, 48, 62));
  color: var(--pill-color, rgb(233, 86, 120));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(28, 30, 38));
  color: var(--text-normal, rgb(213, 216, 218));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(35, 37, 48));
  border-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(46, 48, 62));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(213, 216, 218);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(35, 37, 48));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: var(--text-normal, rgb(213, 216, 218));
}

html[saved-theme="dark"] body abbr {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: var(--text-normal, rgb(213, 216, 218));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(35, 37, 48));
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: var(--code-normal, rgb(213, 216, 218));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body sub {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body summary {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body sup {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgb(46, 48, 62));
  border-bottom-color: rgba(233, 83, 121, 0.15);
  border-left-color: rgba(233, 83, 121, 0.15);
  border-right-color: rgba(233, 83, 121, 0.15);
  border-top-color: rgba(233, 83, 121, 0.15);
  color: var(--tag-color, rgb(233, 86, 120));
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-color-dark: var(--red, #e95678);
  --accent-color-hover: var(--yellow, #fab795);
  --accent-color-light: var(--elm, #1d8991);
  --accent-h: 346;
  --accent-l: 63%;
  --accent-s: 77%;
  --accentAlt: #f9cec3;
  --amethyst: #8a31b9;
  --background: #fdf0ed;
  --background-modifier-border: var(--border-color-primary, #f9cbbe);
  --background-modifier-border-focus: var(--border-color-secondary, #f9cbbe);
  --background-modifier-border-hover: var(--border-color-secondary, #f9cbbe);
  --background-modifier-error: var(--color-red, #e95678);
  --background-modifier-error-hover: var(--color-red, #e95678);
  --background-modifier-form-field: var(--background-secondary, #fadad1);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #fadad1);
  --background-modifier-hover: var(--selection-background-color, #f9cbbe);
  --background-modifier-success: var(--color-green, #29d398);
  --background-primary: var(--background, #fdf0ed);
  --background-secondary: var(--backgroundAlt, #fadad1);
  --backgroundAlt: #fadad1;
  --bases-cards-background: var(--background-primary, #fdf0ed);
  --bases-embed-border-color: var(--background-modifier-border, #f9cbbe);
  --bases-group-heading-property-color: var(--text-muted, #333333);
  --bases-table-border-color: var(--table-border-color, #f9cbbe);
  --bases-table-cell-background-active: var(--background-primary, #fdf0ed);
  --bases-table-cell-background-selected: var(--table-selection, #f9cbbe);
  --bases-table-header-background: var(--background-primary, #fdf0ed);
  --bases-table-header-background-hover: var(--background-modifier-hover, #f9cbbe);
  --bases-table-header-color: var(--text-muted, #333333);
  --bases-table-summary-background: var(--background-primary, #fdf0ed);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #f9cbbe);
  --black: #333333;
  --blockquote-border-color: var(--accent-color-dark, #e95678);
  --blue: #26bbd9;
  --bold-color: var(--accent-color-light, #1d8991);
  --border: #1a1c23;
  --border-color: var(--border-color-primary, #f9cbbe);
  --border-color-primary: var(--accent, #f9cbbe);
  --border-color-secondary: var(--accent, #f9cbbe);
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
  --canvas-background: var(--background-primary, #fdf0ed);
  --canvas-card-label-color: var(--text-faint, #f9cec3);
  --canvas-color: 233, 86, 120;
  --caret-color: var(--text-normal, #333333);
  --checkbox-border-color: var(--text-color-muted-light, #f9cec3);
  --checkbox-border-color-hover: var(--accent-color-hover, #fab795);
  --checkbox-color: var(--accent-color-dark, #e95678);
  --checkbox-color-hover: var(--accent-color-hover, #fab795);
  --checkbox-marker-color: var(--background-primary, #fdf0ed);
  --checklist-done-color: var(--text-color-muted-light, #f9cec3);
  --code-background: var(--background-secondary, #fadad1);
  --code-boolean: var(--crimson, #da103f);
  --code-border-color: var(--background-modifier-border, #f9cbbe);
  --code-bracket-background: var(--background-modifier-hover, #f9cbbe);
  --code-builtin: var(--elm, #1d8991);
  --code-comment: var(--text-faint, #989290);
  --code-definition: var(--thunderbird, #dc3318);
  --code-function: var(--color-yellow, #fab795);
  --code-important: var(--color-yellow, #fab795);
  --code-keyword: var(--amethyst, #8a31b9);
  --code-normal: var(--text-normal, #333333);
  --code-operator: var(--black, #333333);
  --code-parentheses: var(--black, #333333);
  --code-property: var(--elm, #1d8991);
  --code-punctuation: var(--text-muted, #333333);
  --code-string: var(--jaffa, #f77d26);
  --code-tag: var(--color-red, #e95678);
  --code-value: var(--crimson, #da103f);
  --code-variable: var(--thunderbird, #dc3318);
  --collapse-icon-color: var(--text-faint, #f9cec3);
  --collapse-icon-color-collapsed: var(--text-accent, #f9cbbe);
  --color-blue: var(--blue, #26bbd9);
  --color-cyan: var(--cyan, #59e1e3);
  --color-green: var(--green, #29d398);
  --color-orange: var(--jaffa, #f77d26);
  --color-pink: pink;
  --color-purple: var(--amethyst, #8a31b9);
  --color-red: var(--red, #e95678);
  --color-yellow: var(--yellow, #fab795);
  --crimson: #da103f;
  --cyan: #59e1e3;
  --dark: var(--text-normal, var(--text-color, #333333));
  --darkText: #06060c;
  --darkgray: var(--text-normal, var(--text-color, #333333));
  --divider-color: var(--background-modifier-border, #f9cbbe);
  --divider-color-hover: var(--interactive-accent, #f9cbbe);
  --dropdown-background: var(--interactive-normal, #fadad1);
  --dropdown-background-hover: var(--interactive-hover, #f9cbbe);
  --elm: #1d8991;
  --file-header-background: var(--background-primary, #fdf0ed);
  --file-header-background-focused: var(--background-primary, #fdf0ed);
  --flair-background: var(--interactive-normal, #fadad1);
  --flair-color: var(--text-normal, #333333);
  --footnote-divider-color: var(--metadata-divider-color, #f9cbbe);
  --footnote-id-color: var(--text-muted, #333333);
  --footnote-id-color-no-occurrences: var(--text-faint, #f9cec3);
  --footnote-input-background-active: var(--metadata-input-background-active, #f9cbbe);
  --graph-line: var(--border-color-secondary, #f9cbbe);
  --graph-node: var(--accent, #f9cbbe);
  --graph-node-attachment: var(--accent-color-dark, #e95678);
  --graph-node-focused: var(--accent-color-hover, #fab795);
  --graph-node-tag: var(--accent-color-light, #1d8991);
  --graph-node-unresolved: var(--border-color-primary, #f9cbbe);
  --graph-text: var(--text-color, #333333);
  --gray: var(--text-muted, var(--text-color, #333333));
  --green: #29d398;
  --h1-color: var(--color-purple, #8a31b9);
  --h2-color: var(--color-blue, #26bbd9);
  --h3-color: var(--color-green, #29d398);
  --h4-color: var(--color-yellow, #fab795);
  --h5-color: var(--color-orange, #f77d26);
  --h6-color: var(--color-red, #e95678);
  --heading-formatting: var(--text-faint, #f9cec3);
  --highlight: var(--text-highlight-bg, var(--accent, #f9cbbe));
  --hr-color: var(--text-color-muted-dark, #f9cbbe);
  --icon-color: var(--text-muted, #333333);
  --icon-color-active: var(--text-accent, #f9cbbe);
  --icon-color-focused: var(--text-normal, #333333);
  --icon-color-hover: var(--text-muted, #333333);
  --indentation-guide-color: var(--text-color-muted-dark, #f9cbbe);
  --indentation-guide-color-active: var(--text-color-muted-light, #f9cec3);
  --inline-title-color: var(--text-color, #333333);
  --input-date-separator: var(--text-faint, #f9cec3);
  --input-placeholder-color: var(--text-faint, #f9cec3);
  --interactive-accent: var(--accent, #f9cbbe);
  --interactive-accent-hover: var(--color-accent-2, hsl(343, 78.54%, 72.45%));
  --interactive-accent-hsl: var(--color-accent-hsl, 346, 77%, 63%);
  --interactive-hover: var(--border-color-primary, #f9cbbe);
  --interactive-normal: var(--background-secondary, #fadad1);
  --italic-color: var(--accent-color-light, #1d8991);
  --jaffa: #f77d26;
  --light: var(--background-primary, var(--background, #fdf0ed));
  --lightgray: var(--background-secondary, var(--backgroundAlt, #fadad1));
  --link-color: var(--accent-color-dark, #e95678);
  --link-color-hover: var(--accent-color-hover, #fab795);
  --link-external-color: var(--accent-color-dark, #e95678);
  --link-external-color-hover: var(--accent-color-hover, #fab795);
  --link-unresolved-color: var(--red, #e95678);
  --link-unresolved-color-hover: var(--red, #e95678);
  --list-marker-color: var(--accent-color-dark, #e95678);
  --list-marker-color-collapsed: var(--text-accent, #f9cbbe);
  --list-marker-color-hover: var(--text-muted, #333333);
  --magenta: #ee64ac;
  --menu-background: var(--background-secondary, #fadad1);
  --menu-border-color: var(--background-modifier-border-hover, #f9cbbe);
  --metadata-border-color: var(--background-modifier-border, #f9cbbe);
  --metadata-divider-color: var(--background-modifier-border, #f9cbbe);
  --metadata-input-background-active: var(--background-modifier-hover, #f9cbbe);
  --metadata-input-text-color: var(--text-color, #333333);
  --metadata-label-background-active: var(--background-modifier-hover, #f9cbbe);
  --metadata-label-text-color: var(--text-color, #333333);
  --metadata-label-text-color-hover: var(--text-muted, #333333);
  --metadata-property-background-active: var(--background-modifier-hover, #f9cbbe);
  --modal-background: var(--background-secondary, #fadad1);
  --modal-border-color: var(--border-color-primary, #f9cbbe);
  --nav-collapse-icon-color: var(--border-color-secondary, #f9cbbe);
  --nav-collapse-icon-color-collapsed: var(--border-color-secondary, #f9cbbe);
  --nav-heading-color: var(--text-normal, #333333);
  --nav-heading-color-collapsed: var(--text-faint, #f9cec3);
  --nav-heading-color-collapsed-hover: var(--text-muted, #333333);
  --nav-heading-color-hover: var(--text-normal, #333333);
  --nav-indentation-guide-color: var(--border-color-secondary, #f9cbbe);
  --nav-item-background-active: var(--accent-color-dark, #e95678);
  --nav-item-background-hover: var(--selection-background-color, #f9cbbe);
  --nav-item-color: var(--text-color, #333333);
  --nav-item-color-active: var(--text-color-accent, white);
  --nav-item-color-highlighted: var(--accent-color-light, #1d8991);
  --nav-item-color-hover: var(--text-color-accent, white);
  --nav-item-color-selected: var(--text-normal, red);
  --nav-tag-color: var(--text-faint, #f9cec3);
  --nav-tag-color-active: var(--text-muted, #333333);
  --nav-tag-color-hover: var(--text-muted, #333333);
  --pdf-background: var(--background-primary, #fdf0ed);
  --pdf-page-background: var(--background-primary, #fdf0ed);
  --pdf-sidebar-background: var(--background-primary, #fdf0ed);
  --pill-border-color: var(--background-modifier-border, #f9cbbe);
  --pill-border-color-hover: var(--background-modifier-border-hover, #f9cbbe);
  --pill-color: var(--text-muted, #333333);
  --pill-color-hover: var(--text-normal, #333333);
  --pill-color-remove: var(--text-faint, #f9cec3);
  --pill-color-remove-hover: var(--text-accent, #f9cbbe);
  --prompt-background: var(--background-primary, #fdf0ed);
  --prompt-border-color: var(--border-color-primary, #f9cbbe);
  --raised-background: var(--blur-background, color-mix(in srgb, #fdf0ed 65%, transparent) linear-gradient(#fdf0ed, color-mix(in srgb, #fdf0ed 65%, transparent)));
  --red: #e95678;
  --ribbon-background: var(--background-secondary, #fadad1);
  --ribbon-background-collapsed: var(--background-primary, #fdf0ed);
  --search-clear-button-color: var(--text-muted, #333333);
  --search-icon-color: var(--text-muted, #333333);
  --search-result-background: var(--background-primary, #fdf0ed);
  --secondary: var(--text-accent, var(--accent, #f9cbbe));
  --selection-background-color: var(--accent, #f9cbbe);
  --selection-border-color: var(--accent-color-hover, #fab795);
  --setting-group-heading-color: var(--text-normal, #333333);
  --setting-items-border-color: var(--background-modifier-border, #f9cbbe);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #333333);
  --shiki-code-background: var(--code-background, #fadad1);
  --shiki-code-comment: var(--text-faint, #f9cec3);
  --shiki-code-function: var(--color-green, #29d398);
  --shiki-code-important: var(--color-orange, #f77d26);
  --shiki-code-keyword: var(--color-pink, pink);
  --shiki-code-normal: var(--text-muted, #333333);
  --shiki-code-property: var(--color-cyan, #59e1e3);
  --shiki-code-punctuation: var(--text-muted, #333333);
  --shiki-code-string: var(--color-yellow, #fab795);
  --shiki-code-value: var(--color-purple, #8a31b9);
  --shiki-gutter-border-color: var(--background-modifier-border, #f9cbbe);
  --shiki-gutter-text-color: var(--text-faint, #f9cec3);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #333333);
  --shiki-highlight-neutral: var(--shiki-code-normal, #333333);
  --shiki-terminal-dots-color: var(--text-faint, #f9cec3);
  --slider-thumb-border-color: var(--black, #333333);
  --slider-track-background: var(--background-secondary, #fadad1);
  --status-bar-background: var(--background-secondary, #fadad1);
  --status-bar-border-color: var(--divider-color, #f9cbbe);
  --status-bar-text-color: var(--text-muted, #333333);
  --suggestion-background: var(--background-primary, #fdf0ed);
  --sync-avatar-color-1: var(--color-red, #e95678);
  --sync-avatar-color-2: var(--color-orange, #f77d26);
  --sync-avatar-color-3: var(--color-yellow, #fab795);
  --sync-avatar-color-4: var(--color-green, #29d398);
  --sync-avatar-color-5: var(--color-cyan, #59e1e3);
  --sync-avatar-color-6: var(--color-blue, #26bbd9);
  --sync-avatar-color-7: var(--color-purple, #8a31b9);
  --sync-avatar-color-8: var(--color-pink, pink);
  --tab-background-active: var(--background-primary, #fdf0ed);
  --tab-container-background: var(--background-secondary, #fadad1);
  --tab-divider-color: var(--selection-background-color, #f9cbbe);
  --tab-outline-color: var(--border-color-primary, #f9cbbe);
  --tab-switcher-background: var(--background-secondary, #fadad1);
  --tab-text-color: var(--border-color-primary, #f9cbbe);
  --tab-text-color-active: var(--text-color, #333333);
  --tab-text-color-focused: var(--text-color, #333333);
  --tab-text-color-focused-active: var(--text-color, #333333);
  --tab-text-color-focused-active-current: var(--text-normal, #333333);
  --tab-text-color-focused-highlighted: var(--text-accent, red);
  --table-add-button-border-color: var(--background-modifier-border, #f9cbbe);
  --table-border-color: var(--border-color-primary, #f9cbbe);
  --table-drag-handle-background-active: var(--table-selection-border-color, #fab795);
  --table-drag-handle-color: var(--selection-background-color, #f9cbbe);
  --table-drag-handle-color-active: var(--selection-background-color, #f9cbbe);
  --table-header-border-color: var(--table-border-color, #f9cbbe);
  --table-header-color: var(--text-color, #333333);
  --table-selection: var(--selection-background-color, #f9cbbe);
  --table-selection-border-color: var(--selection-border-color, #fab795);
  --tag-background: var(--text-color-muted-dark, #f9cbbe);
  --tag-background-hover: var(--text-color-muted-light, #f9cec3);
  --tag-color: var(--accent-color-dark, #e95678);
  --tag-color-hover: var(--accent-color-dark, #e95678);
  --tango: #f6661e;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, red));
  --text-accent: var(--accent, #f9cbbe);
  --text-accent-hover: var(--color-accent-2, red);
  --text-color: var(--black, #333333);
  --text-color-accent: white;
  --text-color-muted-dark: var(--accent, #f9cbbe);
  --text-color-muted-light: var(--accentAlt, #f9cec3);
  --text-error: var(--color-red, #e95678);
  --text-faint: var(--text-color-muted-light, #f9cec3);
  --text-highlight-bg: var(--accent, #f9cbbe);
  --text-muted: var(--text-color, #333333);
  --text-normal: var(--text-color, #333333);
  --text-on-accent: var(--text-color-accent, white);
  --text-on-accent-inverted: var(--background-primary, #fdf0ed);
  --text-selection: var(--selection-background-color, #f9cbbe);
  --text-success: var(--color-green, #29d398);
  --text-warning: var(--color-yellow, #fab795);
  --textHighlight: var(--text-highlight-bg, var(--accent, #f9cbbe));
  --thunderbird: #dc3318;
  --titlebar-background: var(--background-secondary, #fadad1);
  --titlebar-background-focused: var(--border-color-primary, #f9cbbe);
  --titlebar-border-color: var(--background-modifier-border, #f9cbbe);
  --titlebar-text-color: var(--text-muted, #333333);
  --titlebar-text-color-focused: var(--text-normal, #333333);
  --toggle-thumb-color: var(--text-color-accent, white);
  --vault-profile-color: var(--text-normal, #333333);
  --vault-profile-color-hover: var(--vault-profile-color, #333333);
  --yellow: #fab795;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #fadad1);
  background-color: var(--tab-container-background, rgb(250, 218, 209));
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(253, 240, 237));
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(250, 218, 209));
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #fadad1);
  background-color: var(--tab-container-background, rgb(250, 218, 209));
  border-left-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(29, 137, 145));
  outline: rgb(29, 137, 145) none 0px;
  text-decoration-color: rgb(29, 137, 145);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(29, 137, 145));
  outline: rgb(29, 137, 145) none 0px;
  text-decoration-color: rgb(29, 137, 145);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(29, 137, 145));
  outline: rgb(29, 137, 145) none 0px;
  text-decoration-color: rgb(29, 137, 145);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(29, 137, 145));
  outline: rgb(29, 137, 145) none 0px;
  text-decoration-color: rgb(29, 137, 145);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(29, 137, 145));
  outline: rgb(29, 137, 145) none 0px;
  text-decoration-color: rgb(29, 137, 145);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(249, 203, 190));
  color: var(--text-normal, rgb(51, 51, 51));
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body del {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(249, 206, 195);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(233, 86, 120));
  border-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(51, 51, 51));
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(233, 86, 120));
  outline: rgb(233, 86, 120) none 0px;
  text-decoration-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(233, 86, 120));
  outline: rgb(233, 86, 120) none 0px;
  text-decoration-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(233, 86, 120));
  outline: rgb(233, 86, 120) none 0px;
  text-decoration: underline rgba(233, 88, 122, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(233, 88, 122, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ol > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(249, 206, 195));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, rgb(51, 51, 51));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body table {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: var(--table-text-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: var(--table-header-color, rgb(51, 51, 51));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(250, 218, 209));
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: var(--code-normal, rgb(51, 51, 51));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(250, 218, 209));
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body figcaption {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #fadad1);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(138, 49, 185);
  border-left-color: rgb(138, 49, 185);
  border-right-color: rgb(138, 49, 185);
  border-top-color: rgb(138, 49, 185);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--text-muted, rgb(51, 51, 51));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(249, 206, 195);
  border-left-color: rgb(249, 206, 195);
  border-right-color: rgb(249, 206, 195);
  border-top-color: rgb(249, 206, 195);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(249, 206, 195);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(249, 206, 195);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 240, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 240, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 125, 38);
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
  background-color: rgb(250, 183, 149);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 225, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 187, 217);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 187, 217);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 49, 185);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(51, 51, 51);
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
  background-color: rgb(250, 218, 209);
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: var(--text-normal, rgb(51, 51, 51));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(253, 240, 237));
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(249, 203, 190));
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 218, 209);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(249, 203, 190));
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(249, 203, 190));
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, #f9cbbe);
  --pill-background-hover: var(--tag-background-hover, #f9cec3);
  --pill-border-color: var(--tag-border-color, hsla(346, 77%, 63%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(346, 77%, 63%, 0.15));
  --pill-color: var(--tag-color, #e95678);
  --pill-color-hover: var(--tag-color-hover, #e95678);
  --pill-color-remove: var(--tag-color, #e95678);
  --pill-color-remove-hover: var(--tag-color-hover, #e95678);
  background-color: var(--pill-background, rgb(249, 203, 190));
  border-bottom-color: rgba(233, 88, 122, 0.15);
  border-left-color: rgba(233, 88, 122, 0.15);
  border-right-color: rgba(233, 88, 122, 0.15);
  border-top-color: rgba(233, 88, 122, 0.15);
  color: var(--pill-color, rgb(233, 86, 120));
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(233, 86, 120);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(138, 49, 185);
  border-left-color: rgb(138, 49, 185);
  border-right-color: rgb(138, 49, 185);
  border-top-color: rgb(138, 49, 185);
  color: var(--h1-color, rgb(138, 49, 185));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(38, 187, 217);
  border-left-color: rgb(38, 187, 217);
  border-right-color: rgb(38, 187, 217);
  border-top-color: rgb(38, 187, 217);
  color: var(--h2-color, rgb(38, 187, 217));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--inline-title-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(41, 211, 152);
  border-left-color: rgb(41, 211, 152);
  border-right-color: rgb(41, 211, 152);
  border-top-color: rgb(41, 211, 152);
  color: var(--h3-color, rgb(41, 211, 152));
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(250, 183, 149);
  border-left-color: rgb(250, 183, 149);
  border-right-color: rgb(250, 183, 149);
  border-top-color: rgb(250, 183, 149);
  color: var(--h4-color, rgb(250, 183, 149));
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(247, 125, 38);
  border-left-color: rgb(247, 125, 38);
  border-right-color: rgb(247, 125, 38);
  border-top-color: rgb(247, 125, 38);
  color: var(--h5-color, rgb(247, 125, 38));
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(233, 86, 120);
  border-left-color: rgb(233, 86, 120);
  border-right-color: rgb(233, 86, 120);
  border-top-color: rgb(233, 86, 120);
  color: var(--h6-color, rgb(233, 86, 120));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="light"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(51, 51, 51);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--icon-color, rgb(51, 51, 51));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(250, 218, 209));
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: var(--status-bar-text-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(51, 51, 51);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 51, 51);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--icon-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(51, 51, 51);
  stroke: rgb(51, 51, 51);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(249, 206, 195));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(51, 51, 51));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(253, 240, 237));
  border-color: rgb(51, 51, 51);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(249, 203, 190);
  color: var(--table-header-color, rgb(51, 51, 51));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: var(--text-muted, rgb(51, 51, 51));
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, #f9cbbe);
  --pill-background-hover: var(--tag-background-hover, #f9cec3);
  --pill-border-color: var(--tag-border-color, hsla(346, 77%, 63%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(346, 77%, 63%, 0.15));
  --pill-color: var(--tag-color, #e95678);
  --pill-color-hover: var(--tag-color-hover, #e95678);
  --pill-color-remove: var(--tag-color, #e95678);
  --pill-color-remove-hover: var(--tag-color-hover, #e95678);
  background-color: var(--pill-background, rgb(249, 203, 190));
  color: var(--pill-color, rgb(233, 86, 120));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(253, 240, 237));
  color: var(--text-normal, rgb(51, 51, 51));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(250, 218, 209));
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(249, 203, 190));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(51, 51, 51);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(250, 218, 209));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--text-normal, rgb(51, 51, 51));
}

html[saved-theme="light"] body abbr {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--text-normal, rgb(51, 51, 51));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(250, 218, 209));
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--code-normal, rgb(51, 51, 51));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sub {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body summary {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sup {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgb(249, 203, 190));
  border-bottom-color: rgba(233, 88, 122, 0.15);
  border-left-color: rgba(233, 88, 122, 0.15);
  border-right-color: rgba(233, 88, 122, 0.15);
  border-top-color: rgba(233, 88, 122, 0.15);
  color: var(--tag-color, rgb(233, 86, 120));
}`,
  },
};
