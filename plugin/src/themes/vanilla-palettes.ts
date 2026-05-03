import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "obsidian-chameleon-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-color-dark: var(--glacier, #81a1c1);
  --accent-color-hover: var(--off-blue, #88c0d0);
  --accent-color-light: var(--teal, #8fbcbb);
  --accent-h: 210;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-border: var(--border-color-primary, #434c5e);
  --background-modifier-border-focus: var(--border-color-secondary, #4c566a);
  --background-modifier-border-hover: var(--border-color-secondary, #4c566a);
  --background-modifier-error: var(--color-red, #bf616a);
  --background-modifier-error-hover: var(--color-red, #bf616a);
  --background-modifier-form-field: var(--background-secondary, #3b4252);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #3b4252);
  --background-modifier-hover: var(--selection-background-color, #4c566a);
  --background-modifier-success: var(--color-green, #a3be8c);
  --background-primary: var(--black, #2e3440);
  --background-secondary: var(--dark-gray, #3b4252);
  --bases-cards-background: var(--background-primary, #2e3440);
  --bases-embed-border-color: var(--background-modifier-border, #434c5e);
  --bases-group-heading-property-color: var(--text-muted, #d8dee9);
  --bases-table-border-color: var(--table-border-color, #434c5e);
  --bases-table-cell-background-active: var(--background-primary, #2e3440);
  --bases-table-cell-background-selected: var(--table-selection, #4c566a);
  --bases-table-header-background: var(--background-primary, #2e3440);
  --bases-table-header-background-hover: var(--background-modifier-hover, #4c566a);
  --bases-table-header-color: var(--text-muted, #d8dee9);
  --bases-table-summary-background: var(--background-primary, #2e3440);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #4c566a);
  --black: #2e3440;
  --blockquote-border-color: var(--accent-color-dark, #81a1c1);
  --bold-color: var(--accent-color-light, #8fbcbb);
  --border-color: var(--border-color-primary, #434c5e);
  --border-color-primary: var(--gray, #434c5e);
  --border-color-secondary: var(--light-gray, #4c566a);
  --canvas-background: var(--background-primary, #2e3440);
  --canvas-card-label-color: var(--text-faint, #616e88);
  --canvas-color: 129, 161, 193;
  --caret-color: var(--text-normal, #d8dee9);
  --checkbox-border-color: var(--text-color-muted-light, #616e88);
  --checkbox-border-color-hover: var(--accent-color-hover, #88c0d0);
  --checkbox-color: var(--accent-color-dark, #81a1c1);
  --checkbox-color-hover: var(--accent-color-hover, #88c0d0);
  --checkbox-marker-color: var(--background-primary, #2e3440);
  --checklist-done-color: var(--text-color-muted-light, #616e88);
  --code-background: var(--background-secondary, #3b4252);
  --code-boolean: var(--glacier, #81a1c1);
  --code-border-color: var(--background-modifier-border, #434c5e);
  --code-bracket-background: var(--background-modifier-hover, #4c566a);
  --code-builtin: var(--off-blue, #88c0d0);
  --code-comment: var(--light-gray-bright, #616e88);
  --code-definition: var(--off-blue, #88c0d0);
  --code-function: var(--color-yellow, #ebcb8b);
  --code-important: var(--color-yellow, #ebcb8b);
  --code-keyword: var(--glacier, #81a1c1);
  --code-normal: var(--text-normal, #d8dee9);
  --code-operator: var(--glacier, #81a1c1);
  --code-parentheses: var(--teal, #8fbcbb);
  --code-property: var(--off-blue, #88c0d0);
  --code-punctuation: var(--text-muted, #d8dee9);
  --code-string: var(--color-green, #a3be8c);
  --code-tag: var(--color-red, #bf616a);
  --code-value: var(--color-purple, #b48ead);
  --code-variable: var(--text-color, #d8dee9);
  --collapse-icon-color: var(--text-faint, #616e88);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(210, 34%, 63%));
  --color-blue: #5e81ac;
  --color-cyan: #88c0d0;
  --color-green: #a3be8c;
  --color-orange: #d08770;
  --color-pink: pink;
  --color-purple: #b48ead;
  --color-red: #bf616a;
  --color-yellow: #ebcb8b;
  --dark: var(--text-normal, var(--text-color, #d8dee9));
  --dark-gray: #3b4252;
  --darker-white: #e5e9f0;
  --darkest-white: #d8dee9;
  --darkgray: var(--text-normal, var(--text-color, #d8dee9));
  --divider-color: var(--background-modifier-border, #434c5e);
  --divider-color-hover: var(--interactive-accent, hsl(210, 34%, 63%));
  --dropdown-background: var(--interactive-normal, #3b4252);
  --dropdown-background-hover: var(--interactive-hover, #434c5e);
  --file-header-background: var(--background-primary, #2e3440);
  --file-header-background-focused: var(--background-primary, #2e3440);
  --flair-background: var(--interactive-normal, #3b4252);
  --flair-color: var(--text-normal, #d8dee9);
  --footnote-divider-color: var(--metadata-divider-color, #434c5e);
  --footnote-id-color: var(--text-muted, #d8dee9);
  --footnote-id-color-no-occurrences: var(--text-faint, #616e88);
  --footnote-input-background-active: var(--metadata-input-background-active, #4c566a);
  --glacier: #81a1c1;
  --graph-line: var(--border-color-secondary, #4c566a);
  --graph-node: var(--accent, hsl(210, 34%, 63%));
  --graph-node-attachment: var(--accent-color-dark, #81a1c1);
  --graph-node-focused: var(--accent-color-hover, #88c0d0);
  --graph-node-tag: var(--accent-color-light, #8fbcbb);
  --graph-node-unresolved: var(--border-color-primary, #434c5e);
  --graph-text: var(--text-color, #d8dee9);
  --gray: #434c5e;
  --h1-color: var(--color-purple, #b48ead);
  --h2-color: var(--color-blue, #5e81ac);
  --h3-color: var(--color-green, #a3be8c);
  --h4-color: var(--color-yellow, #ebcb8b);
  --h5-color: var(--color-orange, #d08770);
  --h6-color: var(--color-red, #bf616a);
  --heading-formatting: var(--text-faint, #616e88);
  --highlight: var(--text-highlight-bg, var(--accent, hsl(210, 34%, 63%)));
  --hr-color: var(--text-color-muted-dark, #3b4252);
  --icon-color: var(--text-muted, #d8dee9);
  --icon-color-active: var(--text-accent, hsl(210, 34%, 63%));
  --icon-color-focused: var(--text-normal, #d8dee9);
  --icon-color-hover: var(--text-muted, #d8dee9);
  --indentation-guide-color: var(--text-color-muted-dark, #3b4252);
  --indentation-guide-color-active: var(--text-color-muted-light, #616e88);
  --inline-title-color: var(--text-color, #d8dee9);
  --input-date-separator: var(--text-faint, #616e88);
  --input-placeholder-color: var(--text-faint, #616e88);
  --interactive-accent: var(--accent, hsl(210, 34%, 63%));
  --interactive-accent-hover: var(--color-accent-1, hsl(207, 34.68%, 72.45%));
  --interactive-accent-hsl: var(--color-accent-hsl, 210, 34%, 63%);
  --interactive-hover: var(--border-color-primary, #434c5e);
  --interactive-normal: var(--background-secondary, #3b4252);
  --italic-color: var(--accent-color-light, #8fbcbb);
  --light: var(--background-primary, var(--black, #2e3440));
  --light-gray: #4c566a;
  --light-gray-bright: #616e88;
  --lightgray: var(--background-secondary, var(--dark-gray, #3b4252));
  --link-color: var(--accent-color-dark, #81a1c1);
  --link-color-hover: var(--accent-color-hover, #88c0d0);
  --link-external-color: var(--accent-color-dark, #81a1c1);
  --link-external-color-hover: var(--accent-color-hover, #88c0d0);
  --list-marker-color: var(--accent-color-dark, #81a1c1);
  --list-marker-color-collapsed: var(--text-accent, hsl(210, 34%, 63%));
  --list-marker-color-hover: var(--text-muted, #d8dee9);
  --menu-background: var(--background-secondary, #3b4252);
  --menu-border-color: var(--background-modifier-border-hover, #4c566a);
  --metadata-border-color: var(--background-modifier-border, #434c5e);
  --metadata-divider-color: var(--background-modifier-border, #434c5e);
  --metadata-input-background-active: var(--background-modifier-hover, #4c566a);
  --metadata-input-text-color: var(--text-color, #d8dee9);
  --metadata-label-background-active: var(--background-modifier-hover, #4c566a);
  --metadata-label-text-color: var(--text-color, #d8dee9);
  --metadata-label-text-color-hover: var(--text-muted, #d8dee9);
  --metadata-property-background-active: var(--background-modifier-hover, #4c566a);
  --modal-background: var(--background-secondary, #3b4252);
  --modal-border-color: var(--border-color-primary, #434c5e);
  --nav-collapse-icon-color: var(--border-color-secondary, #4c566a);
  --nav-collapse-icon-color-collapsed: var(--border-color-secondary, #4c566a);
  --nav-heading-color: var(--text-normal, #d8dee9);
  --nav-heading-color-collapsed: var(--text-faint, #616e88);
  --nav-heading-color-collapsed-hover: var(--text-muted, #d8dee9);
  --nav-heading-color-hover: var(--text-normal, #d8dee9);
  --nav-indentation-guide-color: var(--border-color-secondary, #4c566a);
  --nav-item-background-active: var(--accent-color-dark, #81a1c1);
  --nav-item-background-hover: var(--selection-background-color, #4c566a);
  --nav-item-color: var(--text-color, #d8dee9);
  --nav-item-color-active: var(--text-color-accent, #eceff4);
  --nav-item-color-highlighted: var(--accent-color-light, #8fbcbb);
  --nav-item-color-hover: var(--text-color-accent, #eceff4);
  --nav-item-color-selected: var(--text-normal, red);
  --nav-tag-color: var(--text-faint, #616e88);
  --nav-tag-color-active: var(--text-muted, #d8dee9);
  --nav-tag-color-hover: var(--text-muted, #d8dee9);
  --off-blue: #88c0d0;
  --pdf-background: var(--background-primary, #2e3440);
  --pdf-page-background: var(--background-primary, #2e3440);
  --pdf-sidebar-background: var(--background-primary, #2e3440);
  --pill-border-color: var(--background-modifier-border, #434c5e);
  --pill-border-color-hover: var(--background-modifier-border-hover, #4c566a);
  --pill-color: var(--text-muted, #d8dee9);
  --pill-color-hover: var(--text-normal, #d8dee9);
  --pill-color-remove: var(--text-faint, #616e88);
  --pill-color-remove-hover: var(--text-accent, hsl(210, 34%, 63%));
  --prompt-background: var(--background-primary, #2e3440);
  --prompt-border-color: var(--border-color-primary, #434c5e);
  --raised-background: var(--blur-background, color-mix(in srgb, #3b4252 65%, transparent) linear-gradient(#3b4252, color-mix(in srgb, #3b4252 65%, transparent)));
  --ribbon-background: var(--background-secondary, #3b4252);
  --ribbon-background-collapsed: var(--background-primary, #2e3440);
  --search-clear-button-color: var(--text-muted, #d8dee9);
  --search-icon-color: var(--text-muted, #d8dee9);
  --search-result-background: var(--background-primary, #2e3440);
  --secondary: var(--text-accent, var(--accent, hsl(210, 34%, 63%)));
  --selection-background-color: var(--light-gray, #4c566a);
  --selection-border-color: var(--accent-color-hover, #88c0d0);
  --setting-group-heading-color: var(--text-normal, #d8dee9);
  --setting-items-border-color: var(--background-modifier-border, #434c5e);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #d8dee9);
  --shiki-code-background: var(--code-background, #3b4252);
  --shiki-code-comment: var(--text-faint, #616e88);
  --shiki-code-function: var(--color-green, #a3be8c);
  --shiki-code-important: var(--color-orange, #d08770);
  --shiki-code-keyword: var(--color-pink, pink);
  --shiki-code-normal: var(--text-muted, #d8dee9);
  --shiki-code-property: var(--color-cyan, #88c0d0);
  --shiki-code-punctuation: var(--text-muted, #d8dee9);
  --shiki-code-string: var(--color-yellow, #ebcb8b);
  --shiki-code-value: var(--color-purple, #b48ead);
  --shiki-gutter-border-color: var(--background-modifier-border, #434c5e);
  --shiki-gutter-text-color: var(--text-faint, #616e88);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #d8dee9);
  --shiki-highlight-neutral: var(--shiki-code-normal, #d8dee9);
  --shiki-terminal-dots-color: var(--text-faint, #616e88);
  --slider-thumb-border-color: var(--black, #2e3440);
  --slider-track-background: var(--background-secondary, #3b4252);
  --status-bar-background: var(--background-secondary, #3b4252);
  --status-bar-border-color: var(--divider-color, #434c5e);
  --status-bar-text-color: var(--text-muted, #d8dee9);
  --suggestion-background: var(--background-primary, #2e3440);
  --sync-avatar-color-1: var(--color-red, #bf616a);
  --sync-avatar-color-2: var(--color-orange, #d08770);
  --sync-avatar-color-3: var(--color-yellow, #ebcb8b);
  --sync-avatar-color-4: var(--color-green, #a3be8c);
  --sync-avatar-color-5: var(--color-cyan, #88c0d0);
  --sync-avatar-color-6: var(--color-blue, #5e81ac);
  --sync-avatar-color-7: var(--color-purple, #b48ead);
  --sync-avatar-color-8: var(--color-pink, pink);
  --tab-background-active: var(--background-primary, #2e3440);
  --tab-container-background: var(--background-secondary, #3b4252);
  --tab-divider-color: var(--selection-background-color, #4c566a);
  --tab-outline-color: var(--border-color-primary, #434c5e);
  --tab-switcher-background: var(--background-secondary, #3b4252);
  --tab-text-color: var(--border-color-primary, #434c5e);
  --tab-text-color-active: var(--text-color, #d8dee9);
  --tab-text-color-focused: var(--text-color, #d8dee9);
  --tab-text-color-focused-active: var(--text-color, #d8dee9);
  --tab-text-color-focused-active-current: var(--text-color-accent, #eceff4);
  --tab-text-color-focused-highlighted: var(--text-accent, red);
  --table-add-button-border-color: var(--background-modifier-border, #434c5e);
  --table-border-color: var(--border-color-primary, #434c5e);
  --table-drag-handle-background-active: var(--table-selection-border-color, #88c0d0);
  --table-drag-handle-color: var(--selection-background-color, #4c566a);
  --table-drag-handle-color-active: var(--selection-background-color, #4c566a);
  --table-header-border-color: var(--table-border-color, #434c5e);
  --table-header-color: var(--text-color, #d8dee9);
  --table-selection: var(--selection-background-color, #4c566a);
  --table-selection-border-color: var(--selection-border-color, #88c0d0);
  --tag-background: var(--text-color-muted-dark, #3b4252);
  --tag-background-hover: var(--text-color-muted-light, #616e88);
  --tag-color: var(--accent-color-dark, #81a1c1);
  --tag-color-hover: var(--accent-color-dark, #81a1c1);
  --teal: #8fbcbb;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, red));
  --text-accent: var(--accent, hsl(210, 34%, 63%));
  --text-accent-hover: var(--color-accent-2, red);
  --text-color: var(--darkest-white, #d8dee9);
  --text-color-accent: var(--white, #eceff4);
  --text-color-muted-dark: var(--background-secondary, #3b4252);
  --text-color-muted-light: var(--light-gray-bright, #616e88);
  --text-error: var(--color-red, #bf616a);
  --text-faint: var(--text-color-muted-light, #616e88);
  --text-highlight-bg: var(--accent, hsl(210, 34%, 63%));
  --text-muted: var(--text-color, #d8dee9);
  --text-normal: var(--text-color, #d8dee9);
  --text-on-accent: var(--text-color-accent, #eceff4);
  --text-on-accent-inverted: var(--background-primary, #2e3440);
  --text-selection: var(--selection-background-color, #4c566a);
  --text-success: var(--color-green, #a3be8c);
  --text-warning: var(--color-yellow, #ebcb8b);
  --textHighlight: var(--text-highlight-bg, var(--accent, hsl(210, 34%, 63%)));
  --titlebar-background: var(--background-secondary, #3b4252);
  --titlebar-background-focused: var(--border-color-primary, #434c5e);
  --titlebar-border-color: var(--background-modifier-border, #434c5e);
  --titlebar-text-color: var(--text-muted, #d8dee9);
  --titlebar-text-color-focused: var(--text-normal, #d8dee9);
  --toggle-thumb-color: var(--text-color-accent, #eceff4);
  --vault-profile-color: var(--text-normal, #d8dee9);
  --vault-profile-color-hover: var(--vault-profile-color, #d8dee9);
  --white: #eceff4;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #3b4252);
  background-color: var(--tab-container-background, rgb(59, 66, 82));
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(46, 52, 64));
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(59, 66, 82));
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 76, 94);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #3b4252);
  background-color: var(--tab-container-background, rgb(59, 66, 82));
  border-left-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(143, 188, 187));
  outline: rgb(143, 188, 187) none 0px;
  text-decoration-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(143, 188, 187));
  outline: rgb(143, 188, 187) none 0px;
  text-decoration-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(143, 188, 187));
  outline: rgb(143, 188, 187) none 0px;
  text-decoration-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(143, 188, 187));
  outline: rgb(143, 188, 187) none 0px;
  text-decoration-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(129, 161, 193));
  color: var(--text-normal, rgb(216, 222, 233));
  outline: rgb(216, 222, 233) none 0px;
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body del {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(97, 110, 136);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(129, 161, 193));
  border-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(216, 222, 233));
  outline: rgb(216, 222, 233) none 0px;
  text-decoration-color: rgb(216, 222, 233);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(129, 161, 193));
  outline: rgb(129, 161, 193) none 0px;
  text-decoration-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(129, 161, 193));
  outline: rgb(129, 161, 193) none 0px;
  text-decoration-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(216, 222, 233));
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: underline rgba(129, 161, 193, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(129, 161, 193, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body dt {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(97, 110, 136));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body table {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: var(--table-text-color, rgb(216, 222, 233));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: var(--table-header-color, rgb(216, 222, 233));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(59, 66, 82));
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: var(--code-normal, rgb(216, 222, 233));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(59, 66, 82));
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #3b4252);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(180, 142, 173);
  border-left-color: rgb(180, 142, 173);
  border-right-color: rgb(180, 142, 173);
  border-top-color: rgb(180, 142, 173);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(97, 110, 136);
  border-left-color: rgb(97, 110, 136);
  border-right-color: rgb(97, 110, 136);
  border-top-color: rgb(97, 110, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(97, 110, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(97, 110, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 135, 112);
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
  background-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 192, 208);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 142, 173);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(216, 222, 233);
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
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: var(--text-normal, rgb(216, 222, 233));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(46, 52, 64));
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(76, 86, 106));
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(76, 86, 106));
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(76, 86, 106));
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, #3b4252);
  --pill-background-hover: var(--tag-background-hover, #616e88);
  --pill-border-color: var(--tag-border-color, hsla(210, 34%, 63%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 34%, 63%, 0.15));
  --pill-color: var(--tag-color, #81a1c1);
  --pill-color-hover: var(--tag-color-hover, #81a1c1);
  --pill-color-remove: var(--tag-color, #81a1c1);
  --pill-color-remove-hover: var(--tag-color-hover, #81a1c1);
  background-color: var(--pill-background, rgb(59, 66, 82));
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-left-color: rgba(129, 161, 193, 0.15);
  border-right-color: rgba(129, 161, 193, 0.15);
  border-top-color: rgba(129, 161, 193, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(180, 142, 173));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(216, 222, 233));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(216, 222, 233));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(163, 190, 140));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(235, 203, 139));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(208, 135, 112));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(191, 97, 106));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(76, 86, 106);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(216, 222, 233));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(216, 222, 233));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(216, 222, 233);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: var(--icon-color, rgb(216, 222, 233));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(59, 66, 82));
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: var(--status-bar-text-color, rgb(216, 222, 233));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(216, 222, 233);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(216, 222, 233));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(216, 222, 233);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(216, 222, 233));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: var(--icon-color, rgb(216, 222, 233));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(216, 222, 233);
  stroke: rgb(216, 222, 233);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(97, 110, 136));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(216, 222, 233));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(59, 66, 82));
  border-color: rgb(216, 222, 233);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(67, 76, 94);
  color: var(--table-header-color, rgb(216, 222, 233));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: var(--text-muted, rgb(216, 222, 233));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(67, 76, 94);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, #3b4252);
  --pill-background-hover: var(--tag-background-hover, #616e88);
  --pill-border-color: var(--tag-border-color, hsla(210, 34%, 63%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 34%, 63%, 0.15));
  --pill-color: var(--tag-color, #81a1c1);
  --pill-color-hover: var(--tag-color-hover, #81a1c1);
  --pill-color-remove: var(--tag-color, #81a1c1);
  --pill-color-remove-hover: var(--tag-color-hover, #81a1c1);
  background-color: var(--pill-background, rgb(59, 66, 82));
  color: var(--pill-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(46, 52, 64));
  color: var(--text-normal, rgb(216, 222, 233));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(59, 66, 82));
  border-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(67, 76, 94));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(216, 222, 233);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(59, 66, 82));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(216, 222, 233));
}

html[saved-theme="dark"] body abbr {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: var(--text-normal, rgb(216, 222, 233));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(59, 66, 82));
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: var(--code-normal, rgb(216, 222, 233));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body sub {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body summary {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body sup {
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgb(59, 66, 82));
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-left-color: rgba(129, 161, 193, 0.15);
  border-right-color: rgba(129, 161, 193, 0.15);
  border-top-color: rgba(129, 161, 193, 0.15);
  color: var(--tag-color, rgb(129, 161, 193));
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-color-dark: var(--pine, #286983);
  --accent-color-hover: var(--iris, #907aa9);
  --accent-color-light: var(--rose, #d7827e);
  --accent-h: 3;
  --accent-l: 67%;
  --accent-s: 53%;
  --background-modifier-border: var(--border-color-primary, #dfdad9);
  --background-modifier-border-focus: var(--border-color-secondary, #cecacd);
  --background-modifier-border-hover: var(--border-color-secondary, #cecacd);
  --background-modifier-error: var(--color-red, #b4637a);
  --background-modifier-error-hover: var(--color-red, #b4637a);
  --background-modifier-form-field: var(--background-secondary, #fffaf3);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #fffaf3);
  --background-modifier-hover: var(--selection-background-color, #f2e9e1);
  --background-modifier-success: var(--color-green, #56949f);
  --background-primary: var(--base, #faf4ed);
  --background-secondary: var(--surface, #fffaf3);
  --base: #faf4ed;
  --bases-cards-background: var(--background-primary, #faf4ed);
  --bases-embed-border-color: var(--background-modifier-border, #dfdad9);
  --bases-group-heading-property-color: var(--text-muted, #575279);
  --bases-table-border-color: var(--table-border-color, #dfdad9);
  --bases-table-cell-background-active: var(--background-primary, #faf4ed);
  --bases-table-cell-background-selected: var(--table-selection, #f2e9e1);
  --bases-table-header-background: var(--background-primary, #faf4ed);
  --bases-table-header-background-hover: var(--background-modifier-hover, #f2e9e1);
  --bases-table-header-color: var(--text-muted, #575279);
  --bases-table-summary-background: var(--background-primary, #faf4ed);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #f2e9e1);
  --blockquote-border-color: var(--accent-color-dark, #286983);
  --bold-color: var(--accent-color-light, #d7827e);
  --border-color: var(--border-color-primary, #dfdad9);
  --border-color-primary: var(--highlight-med, #dfdad9);
  --border-color-secondary: var(--highlight-high, #cecacd);
  --canvas-background: var(--background-primary, #faf4ed);
  --canvas-card-label-color: var(--text-faint, #9893a5);
  --canvas-color: 215, 130, 126;
  --caret-color: var(--text-normal, #575279);
  --checkbox-border-color: var(--text-color-muted-light, #9893a5);
  --checkbox-border-color-hover: var(--accent-color-hover, #907aa9);
  --checkbox-color: var(--accent-color-dark, #286983);
  --checkbox-color-hover: var(--accent-color-hover, #907aa9);
  --checkbox-marker-color: var(--background-primary, #faf4ed);
  --checklist-done-color: var(--text-color-muted-light, #9893a5);
  --code-background: var(--background-secondary, #fffaf3);
  --code-boolean: var(--rose, #d7827e);
  --code-border-color: var(--background-modifier-border, #dfdad9);
  --code-bracket-background: var(--background-modifier-hover, #f2e9e1);
  --code-builtin: var(--love, #b4637a);
  --code-comment: var(--muted, #9893a5);
  --code-definition: var(--rose, #d7827e);
  --code-function: var(--color-yellow, #ea9d34);
  --code-important: var(--color-yellow, #ea9d34);
  --code-keyword: var(--pine, #286983);
  --code-normal: var(--text-normal, #575279);
  --code-operator: var(--pine, #286983);
  --code-parentheses: var(--subtle, #797593);
  --code-property: var(--foam, #56949f);
  --code-punctuation: var(--text-muted, #575279);
  --code-string: var(--gold, #ea9d34);
  --code-tag: var(--color-red, #b4637a);
  --code-value: var(--rose, #d7827e);
  --code-variable: var(--text, #575279);
  --collapse-icon-color: var(--text-faint, #9893a5);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(3, 53%, 67%));
  --color-blue: var(--pine, #286983);
  --color-cyan: var(--foam, #56949f);
  --color-green: var(--foam, #56949f);
  --color-orange: var(--rose, #d7827e);
  --color-pink: pink;
  --color-purple: var(--iris, #907aa9);
  --color-red: var(--love, #b4637a);
  --color-yellow: var(--gold, #ea9d34);
  --dark: var(--text-normal, var(--text-color, #575279));
  --darkgray: var(--text-normal, var(--text-color, #575279));
  --divider-color: var(--background-modifier-border, #dfdad9);
  --divider-color-hover: var(--interactive-accent, hsl(3, 53%, 67%));
  --dropdown-background: var(--interactive-normal, #fffaf3);
  --dropdown-background-hover: var(--interactive-hover, #dfdad9);
  --file-header-background: var(--background-primary, #faf4ed);
  --file-header-background-focused: var(--background-primary, #faf4ed);
  --flair-background: var(--interactive-normal, #fffaf3);
  --flair-color: var(--text-normal, #575279);
  --foam: #56949f;
  --footnote-divider-color: var(--metadata-divider-color, #dfdad9);
  --footnote-id-color: var(--text-muted, #575279);
  --footnote-id-color-no-occurrences: var(--text-faint, #9893a5);
  --footnote-input-background-active: var(--metadata-input-background-active, #f2e9e1);
  --gold: #ea9d34;
  --graph-line: var(--border-color-secondary, #cecacd);
  --graph-node: var(--accent, hsl(3, 53%, 67%));
  --graph-node-attachment: var(--accent-color-dark, #286983);
  --graph-node-focused: var(--accent-color-hover, #907aa9);
  --graph-node-tag: var(--accent-color-light, #d7827e);
  --graph-node-unresolved: var(--border-color-primary, #dfdad9);
  --graph-text: var(--text-color, #575279);
  --gray: var(--text-muted, var(--text-color, #575279));
  --h1-color: var(--color-purple, #907aa9);
  --h2-color: var(--color-blue, #286983);
  --h3-color: var(--color-green, #56949f);
  --h4-color: var(--color-yellow, #ea9d34);
  --h5-color: var(--color-orange, #d7827e);
  --h6-color: var(--color-red, #b4637a);
  --heading-formatting: var(--text-faint, #9893a5);
  --highlight: var(--text-highlight-bg, var(--accent, hsl(3, 53%, 67%)));
  --highlight-high: #cecacd;
  --highlight-low: #f4ede8;
  --highlight-med: #dfdad9;
  --hr-color: var(--text-color-muted-dark, #f2e9e1);
  --icon-color: var(--text-muted, #575279);
  --icon-color-active: var(--text-accent, hsl(3, 53%, 67%));
  --icon-color-focused: var(--text-normal, #575279);
  --icon-color-hover: var(--text-muted, #575279);
  --indentation-guide-color: var(--text-color-muted-dark, #f2e9e1);
  --indentation-guide-color-active: var(--text-color-muted-light, #9893a5);
  --inline-title-color: var(--text-color, #575279);
  --input-date-separator: var(--text-faint, #9893a5);
  --input-placeholder-color: var(--text-faint, #9893a5);
  --interactive-accent: var(--accent, hsl(3, 53%, 67%));
  --interactive-accent-hover: var(--color-accent-2, hsl(0, 54.06%, 77.05%));
  --interactive-accent-hsl: var(--color-accent-hsl, 3, 53%, 67%);
  --interactive-hover: var(--border-color-primary, #dfdad9);
  --interactive-normal: var(--background-secondary, #fffaf3);
  --iris: #907aa9;
  --italic-color: var(--accent-color-light, #d7827e);
  --light: var(--background-primary, var(--base, #faf4ed));
  --lightgray: var(--background-secondary, var(--surface, #fffaf3));
  --link-color: var(--accent-color-dark, #286983);
  --link-color-hover: var(--accent-color-hover, #907aa9);
  --link-external-color: var(--accent-color-dark, #286983);
  --link-external-color-hover: var(--accent-color-hover, #907aa9);
  --list-marker-color: var(--accent-color-dark, #286983);
  --list-marker-color-collapsed: var(--text-accent, hsl(3, 53%, 67%));
  --list-marker-color-hover: var(--text-muted, #575279);
  --love: #b4637a;
  --menu-background: var(--background-secondary, #fffaf3);
  --menu-border-color: var(--background-modifier-border-hover, #cecacd);
  --metadata-border-color: var(--background-modifier-border, #dfdad9);
  --metadata-divider-color: var(--background-modifier-border, #dfdad9);
  --metadata-input-background-active: var(--background-modifier-hover, #f2e9e1);
  --metadata-input-text-color: var(--text-color, #575279);
  --metadata-label-background-active: var(--background-modifier-hover, #f2e9e1);
  --metadata-label-text-color: var(--text-color, #575279);
  --metadata-label-text-color-hover: var(--text-muted, #575279);
  --metadata-property-background-active: var(--background-modifier-hover, #f2e9e1);
  --modal-background: var(--background-secondary, #fffaf3);
  --modal-border-color: var(--border-color-primary, #dfdad9);
  --muted: #9893a5;
  --nav-collapse-icon-color: var(--border-color-secondary, #cecacd);
  --nav-collapse-icon-color-collapsed: var(--border-color-secondary, #cecacd);
  --nav-heading-color: var(--text-normal, #575279);
  --nav-heading-color-collapsed: var(--text-faint, #9893a5);
  --nav-heading-color-collapsed-hover: var(--text-muted, #575279);
  --nav-heading-color-hover: var(--text-normal, #575279);
  --nav-indentation-guide-color: var(--border-color-secondary, #cecacd);
  --nav-item-background-active: var(--accent-color-dark, #286983);
  --nav-item-background-hover: var(--selection-background-color, #f2e9e1);
  --nav-item-color: var(--text-color, #575279);
  --nav-item-color-active: var(--text-color-accent, #575279);
  --nav-item-color-highlighted: var(--accent-color-light, #d7827e);
  --nav-item-color-hover: var(--text-color-accent, #575279);
  --nav-item-color-selected: var(--text-normal, red);
  --nav-tag-color: var(--text-faint, #9893a5);
  --nav-tag-color-active: var(--text-muted, #575279);
  --nav-tag-color-hover: var(--text-muted, #575279);
  --nc: #f8f0e7;
  --overlay: #f2e9e1;
  --pdf-background: var(--background-primary, #faf4ed);
  --pdf-page-background: var(--background-primary, #faf4ed);
  --pdf-sidebar-background: var(--background-primary, #faf4ed);
  --pill-border-color: var(--background-modifier-border, #dfdad9);
  --pill-border-color-hover: var(--background-modifier-border-hover, #cecacd);
  --pill-color: var(--text-muted, #575279);
  --pill-color-hover: var(--text-normal, #575279);
  --pill-color-remove: var(--text-faint, #9893a5);
  --pill-color-remove-hover: var(--text-accent, hsl(3, 53%, 67%));
  --pine: #286983;
  --prompt-background: var(--background-primary, #faf4ed);
  --prompt-border-color: var(--border-color-primary, #dfdad9);
  --raised-background: var(--blur-background, color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent)));
  --ribbon-background: var(--background-secondary, #fffaf3);
  --ribbon-background-collapsed: var(--background-primary, #faf4ed);
  --rose: #d7827e;
  --search-clear-button-color: var(--text-muted, #575279);
  --search-icon-color: var(--text-muted, #575279);
  --search-result-background: var(--background-primary, #faf4ed);
  --secondary: var(--text-accent, var(--accent, hsl(3, 53%, 67%)));
  --selection-background-color: var(--overlay, #f2e9e1);
  --selection-border-color: var(--accent-color-hover, #907aa9);
  --setting-group-heading-color: var(--text-normal, #575279);
  --setting-items-border-color: var(--background-modifier-border, #dfdad9);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #575279);
  --shiki-code-background: var(--code-background, #fffaf3);
  --shiki-code-comment: var(--text-faint, #9893a5);
  --shiki-code-function: var(--color-green, #56949f);
  --shiki-code-important: var(--color-orange, #d7827e);
  --shiki-code-keyword: var(--color-pink, pink);
  --shiki-code-normal: var(--text-muted, #575279);
  --shiki-code-property: var(--color-cyan, #56949f);
  --shiki-code-punctuation: var(--text-muted, #575279);
  --shiki-code-string: var(--color-yellow, #ea9d34);
  --shiki-code-value: var(--color-purple, #907aa9);
  --shiki-gutter-border-color: var(--background-modifier-border, #dfdad9);
  --shiki-gutter-text-color: var(--text-faint, #9893a5);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #575279);
  --shiki-highlight-neutral: var(--shiki-code-normal, #575279);
  --shiki-terminal-dots-color: var(--text-faint, #9893a5);
  --slider-track-background: var(--background-secondary, #fffaf3);
  --status-bar-background: var(--background-secondary, #fffaf3);
  --status-bar-border-color: var(--divider-color, #dfdad9);
  --status-bar-text-color: var(--text-muted, #575279);
  --subtle: #797593;
  --suggestion-background: var(--background-primary, #faf4ed);
  --surface: #fffaf3;
  --sync-avatar-color-1: var(--color-red, #b4637a);
  --sync-avatar-color-2: var(--color-orange, #d7827e);
  --sync-avatar-color-3: var(--color-yellow, #ea9d34);
  --sync-avatar-color-4: var(--color-green, #56949f);
  --sync-avatar-color-5: var(--color-cyan, #56949f);
  --sync-avatar-color-6: var(--color-blue, #286983);
  --sync-avatar-color-7: var(--color-purple, #907aa9);
  --sync-avatar-color-8: var(--color-pink, pink);
  --tab-background-active: var(--background-primary, #faf4ed);
  --tab-container-background: var(--background-secondary, #fffaf3);
  --tab-divider-color: var(--selection-background-color, #f2e9e1);
  --tab-outline-color: var(--border-color-primary, #dfdad9);
  --tab-switcher-background: var(--background-secondary, #fffaf3);
  --tab-text-color: var(--border-color-primary, #dfdad9);
  --tab-text-color-active: var(--text-color, #575279);
  --tab-text-color-focused: var(--text-color, #575279);
  --tab-text-color-focused-active: var(--text-color, #575279);
  --tab-text-color-focused-active-current: var(--text-normal, #575279);
  --tab-text-color-focused-highlighted: var(--text-accent, red);
  --table-add-button-border-color: var(--background-modifier-border, #dfdad9);
  --table-border-color: var(--border-color-primary, #dfdad9);
  --table-drag-handle-background-active: var(--table-selection-border-color, #907aa9);
  --table-drag-handle-color: var(--selection-background-color, #f2e9e1);
  --table-drag-handle-color-active: var(--selection-background-color, #f2e9e1);
  --table-header-border-color: var(--table-border-color, #dfdad9);
  --table-header-color: var(--text-color, #575279);
  --table-selection: var(--selection-background-color, #f2e9e1);
  --table-selection-border-color: var(--selection-border-color, #907aa9);
  --tag-background: var(--text-color-muted-dark, #f2e9e1);
  --tag-background-hover: var(--text-color-muted-light, #9893a5);
  --tag-color: var(--accent-color-dark, #286983);
  --tag-color-hover: var(--accent-color-dark, #286983);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, red));
  --text: #575279;
  --text-accent: var(--accent, hsl(3, 53%, 67%));
  --text-accent-hover: var(--color-accent-2, red);
  --text-color: var(--text, #575279);
  --text-color-accent: var(--text, #575279);
  --text-color-muted-dark: var(--overlay, #f2e9e1);
  --text-color-muted-light: var(--muted, #9893a5);
  --text-error: var(--color-red, #b4637a);
  --text-faint: var(--text-color-muted-light, #9893a5);
  --text-highlight-bg: var(--accent, hsl(3, 53%, 67%));
  --text-muted: var(--text-color, #575279);
  --text-normal: var(--text-color, #575279);
  --text-on-accent: var(--text-color-accent, #575279);
  --text-on-accent-inverted: var(--background-primary, #faf4ed);
  --text-selection: var(--selection-background-color, #f2e9e1);
  --text-success: var(--color-green, #56949f);
  --text-warning: var(--color-yellow, #ea9d34);
  --textHighlight: var(--text-highlight-bg, var(--accent, hsl(3, 53%, 67%)));
  --titlebar-background: var(--background-secondary, #fffaf3);
  --titlebar-background-focused: var(--border-color-primary, #dfdad9);
  --titlebar-border-color: var(--background-modifier-border, #dfdad9);
  --titlebar-text-color: var(--text-muted, #575279);
  --titlebar-text-color-focused: var(--text-normal, #575279);
  --toggle-thumb-color: var(--text-color-accent, #575279);
  --vault-profile-color: var(--text-normal, #575279);
  --vault-profile-color-hover: var(--vault-profile-color, #575279);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #fffaf3);
  background-color: var(--tab-container-background, rgb(255, 250, 243));
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(250, 244, 237));
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(255, 250, 243));
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #fffaf3);
  background-color: var(--tab-container-background, rgb(255, 250, 243));
  border-left-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(215, 130, 126));
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(215, 130, 126));
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(215, 130, 126));
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(215, 130, 126));
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(215, 131, 126));
  color: var(--text-normal, rgb(87, 82, 121));
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body del {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(40, 105, 131));
  border-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(87, 82, 121));
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(40, 105, 131));
  outline: rgb(40, 105, 131) none 0px;
  text-decoration-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(40, 105, 131));
  outline: rgb(40, 105, 131) none 0px;
  text-decoration-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(87, 82, 121));
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: underline rgba(215, 131, 126, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(215, 131, 126, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body dt {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(152, 147, 165));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body table {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: var(--table-text-color, rgb(87, 82, 121));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: var(--table-header-color, rgb(87, 82, 121));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(255, 250, 243));
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: var(--code-normal, rgb(87, 82, 121));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(255, 250, 243));
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figcaption {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #fffaf3);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(144, 122, 169);
  border-left-color: rgb(144, 122, 169);
  border-right-color: rgb(144, 122, 169);
  border-top-color: rgb(144, 122, 169);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 131, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 130, 126);
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
  background-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(144, 122, 169);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 159);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(87, 82, 121);
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
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: var(--text-normal, rgb(87, 82, 121));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(250, 244, 237));
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(242, 233, 225));
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 250, 243);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(242, 233, 225));
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(242, 233, 225));
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, #f2e9e1);
  --pill-background-hover: var(--tag-background-hover, #9893a5);
  --pill-border-color: var(--tag-border-color, hsla(3, 53%, 67%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(3, 53%, 67%, 0.15));
  --pill-color: var(--tag-color, #286983);
  --pill-color-hover: var(--tag-color-hover, #286983);
  --pill-color-remove: var(--tag-color, #286983);
  --pill-color-remove-hover: var(--tag-color-hover, #286983);
  background-color: var(--pill-background, rgb(242, 233, 225));
  border-bottom-color: rgba(215, 131, 126, 0.15);
  border-left-color: rgba(215, 131, 126, 0.15);
  border-right-color: rgba(215, 131, 126, 0.15);
  border-top-color: rgba(215, 131, 126, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(40, 105, 131);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(144, 122, 169));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(87, 82, 121));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(40, 105, 131));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(87, 82, 121));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(86, 148, 159));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(234, 157, 52));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(215, 130, 126));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(180, 99, 122));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(206, 202, 205);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(87, 82, 121));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(87, 82, 121));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(87, 82, 121);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: var(--icon-color, rgb(87, 82, 121));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(255, 250, 243));
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: var(--status-bar-text-color, rgb(87, 82, 121));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(87, 82, 121);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(87, 82, 121));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 82, 121);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(87, 82, 121));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: var(--icon-color, rgb(87, 82, 121));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(87, 82, 121);
  stroke: rgb(87, 82, 121);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(152, 147, 165));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(87, 82, 121));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(250, 244, 237));
  border-color: rgb(87, 82, 121);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(223, 218, 217);
  color: var(--table-header-color, rgb(87, 82, 121));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: var(--text-muted, rgb(87, 82, 121));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, #f2e9e1);
  --pill-background-hover: var(--tag-background-hover, #9893a5);
  --pill-border-color: var(--tag-border-color, hsla(3, 53%, 67%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(3, 53%, 67%, 0.15));
  --pill-color: var(--tag-color, #286983);
  --pill-color-hover: var(--tag-color-hover, #286983);
  --pill-color-remove: var(--tag-color, #286983);
  --pill-color-remove-hover: var(--tag-color-hover, #286983);
  background-color: var(--pill-background, rgb(242, 233, 225));
  color: var(--pill-color, rgb(40, 105, 131));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(250, 244, 237));
  color: var(--text-normal, rgb(87, 82, 121));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(255, 250, 243));
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(223, 218, 217));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(87, 82, 121);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(255, 250, 243));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(87, 82, 121));
}

html[saved-theme="light"] body abbr {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: var(--text-normal, rgb(87, 82, 121));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(255, 250, 243));
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: var(--code-normal, rgb(87, 82, 121));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sub {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body summary {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sup {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgb(242, 233, 225));
  border-bottom-color: rgba(215, 131, 126, 0.15);
  border-left-color: rgba(215, 131, 126, 0.15);
  border-right-color: rgba(215, 131, 126, 0.15);
  border-top-color: rgba(215, 131, 126, 0.15);
  color: var(--tag-color, rgb(40, 105, 131));
}`,
  },
  classSettings: {
    "color-scheme-catppuccin-latte": {
      light: `.color-scheme-catppuccin-latte {
--rosewater: #dc8a78;
--flamingo: #dd7878;
--pink: #ea76cb;
--mauve: #8839ef;
--red: #d20f39;
--maroon: #e64553;
--peach: #fe640b;
--yellow: #df8e1d;
--green: #40a02b;
--teal: #179299;
--sky: #04a5e5;
--sapphire: #209fb5;
--blue: #1e66f5;
--lavender: #7287fd;
--text: #4c4f69;
--subtext1: #5c5f77;
--subtext0: #6c6f85;
--overlay2: #7c7f93;
--overlay1: #8c8fa1;
--overlay0: #9ca0b0;
--surface2: #acb0be;
--surface1: #bcc0cc;
--surface0: #ccd0da;
--base: #eff1f5;
--mantle: #e6e9ef;
--crust: #dce0e8;
--color-red: var(--red);
--color-orange: var(--peach);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--teal);
--color-blue: var(--blue);
--color-purple: var(--mauve);
--color-pink: var(--pink);
--background-primary: var(--base);
--background-secondary: var(--crust);
--selection-background-color: var(--crust);
--border-color-primary: var(--surface0);
--border-color-secondary: var(--surface1);
--text-color: var(--text);
--text-color-accent: white;
--text-color-muted-dark: var(--surface0);
--text-color-muted-light: var(--overlay0);
--accent-color-dark: var(--mauve);
--accent-color-light: var(--blue);
--accent-color-hover: var(--maroon);
--accent-h: 266;
--accent-s: 85%;
--accent-l: 58%;
--canvas-color: 136, 57, 239 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--peach);
--code-builtin: var(--peach);
--code-comment: var(--overlay0);
--code-definition: var(--lavender);
--code-keyword: var(--mauve);
--code-operator: var(--sky);
--code-property: var(--lavender);
--code-parentheses: var(--overlay2);
--code-string: var(--green);
--code-value: var(--peach);
--code-variable: var(--text-color);
}`,
    },
    "color-scheme-gruvbox-soft": {
      dark: `.color-scheme-gruvbox-soft {
--dark0-hard: #1d2021;
--dark0: #282828;
--dark0-soft: #32302f;
--dark1: #3c3836;
--dark2: #504945;
--dark3: #665c54;
--dark4: #7c6f64;
--light0-hard: #f9f5d7;
--light0: #fbf1c7;
--light0-soft: #f2e5bc;
--light1: #ebdbb2;
--light2: #d5c4a1;
--light3: #bdae93;
--light4: #a89984;
--bright-red: #fb4934;
--bright-green: #b8bb26;
--bright-yellow: #fabd2f;
--bright-blue: #83a598;
--bright-purple: #d3869b;
--bright-aqua: #8ec07c;
--bright-orange: #fe8019;
--neutral-red: #cc241d;
--neutral-green: #98971a;
--neutral-yellow: #d79921;
--neutral-blue: #458588;
--neutral-purple: #b16286;
--neutral-aqua: #689d6a;
--neutral-orange: #d65d0e;
--faded-red: #9d0006;
--faded-green: #79740e;
--faded-yellow: #b57614;
--faded-blue: #076678;
--faded-purple: #8f3f71;
--faded-aqua: #427b58;
--faded-orange: #af3a03;
--dark-red-hard: #792329;
--dark-red: #722529;
--dark-red-soft: #7b2c2f;
--light-red-hard: #fc9690;
--light-red: #fc9487;
--light-red-soft: #f78b7f;
--dark-green-hard: #5a633a;
--dark-green: #62693e;
--dark-green-soft: #686d43;
--light-green-hard: #d3d6a5;
--light-green: #d5d39b;
--light-green-soft: #cecb94;
--dark-aqua-hard: #3e4934;
--dark-aqua: #49503b;
--dark-aqua-soft: #525742;
--light-aqua-hard: #e6e9c1;
--light-aqua: #e8e5b5;
--light-aqua-soft: #e1dbac;
--gray: #928374;
--selection-background-color: var(--dark3);
--color-red: var(--neutral-red);
--color-orange: var(--neutral-orange);
--color-yellow: var(--neutral-yellow);
--color-green: var(--neutral-green);
--color-cyan: var(--neutral-aqua);
--color-blue: var(--neutral-blue);
--color-purple: var(--neutral-purple);
--color-pink: pink;
--text-color: var(--light1);
--text-color-accent: white;
--accent-color-dark: var(--neutral-green);
--accent-color-light: var(--neutral-yellow);
--accent-color-hover: var(--bright-green);
--accent-h: 60;
--accent-s: 71%;
--accent-l: 35%;
--canvas-color: 152, 151, 26 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--bright-purple);
--code-builtin: var(--bright-orange);
--code-comment: var(var(--gray));
--code-definition: var(--light1);
--code-keyword: var(--bright-red);
--code-operator: var(--bright-orange);
--code-property: var(--bright-green);
--code-parentheses: var(--bright-orange);
--code-string: var(--bright-green);
--code-value: var(--bright-purple);
--code-variable: var(--bright-blue);
}

.color-scheme-gruvbox-soft {
--background-primary: var(--dark0-soft);
--background-secondary: var(--dark1);
--border-color-primary: var(--dark3);
--border-color-secondary: var(--dark4);
--text-color-muted-dark: var(--dark3);
--text-color-muted-light: var(--dark4);
}`,
      light: `.color-scheme-gruvbox-soft {
--dark0-hard: #1d2021;
--dark0: #282828;
--dark0-soft: #32302f;
--dark1: #3c3836;
--dark2: #504945;
--dark3: #665c54;
--dark4: #7c6f64;
--light0-hard: #f9f5d7;
--light0: #fbf1c7;
--light0-soft: #f2e5bc;
--light1: #ebdbb2;
--light2: #d5c4a1;
--light3: #bdae93;
--light4: #a89984;
--bright-red: #fb4934;
--bright-green: #b8bb26;
--bright-yellow: #fabd2f;
--bright-blue: #83a598;
--bright-purple: #d3869b;
--bright-aqua: #8ec07c;
--bright-orange: #fe8019;
--neutral-red: #cc241d;
--neutral-green: #98971a;
--neutral-yellow: #d79921;
--neutral-blue: #458588;
--neutral-purple: #b16286;
--neutral-aqua: #689d6a;
--neutral-orange: #d65d0e;
--faded-red: #9d0006;
--faded-green: #79740e;
--faded-yellow: #b57614;
--faded-blue: #076678;
--faded-purple: #8f3f71;
--faded-aqua: #427b58;
--faded-orange: #af3a03;
--dark-red-hard: #792329;
--dark-red: #722529;
--dark-red-soft: #7b2c2f;
--light-red-hard: #fc9690;
--light-red: #fc9487;
--light-red-soft: #f78b7f;
--dark-green-hard: #5a633a;
--dark-green: #62693e;
--dark-green-soft: #686d43;
--light-green-hard: #d3d6a5;
--light-green: #d5d39b;
--light-green-soft: #cecb94;
--dark-aqua-hard: #3e4934;
--dark-aqua: #49503b;
--dark-aqua-soft: #525742;
--light-aqua-hard: #e6e9c1;
--light-aqua: #e8e5b5;
--light-aqua-soft: #e1dbac;
--gray: #928374;
--selection-background-color: var(--light3);
--color-red: var(--neutral-red);
--color-orange: var(--neutral-orange);
--color-yellow: var(--neutral-yellow);
--color-green: var(--neutral-green);
--color-cyan: var(--neutral-aqua);
--color-blue: var(--neutral-blue);
--color-purple: var(--neutral-purple);
--color-pink: pink;
--text-color: var(--dark1);
--text-color-accent: white;
--accent-color-dark: var(--neutral-green);
--accent-color-light: var(--neutral-yellow);
--accent-color-hover: var(--bright-green);
--accent-h: 60;
--accent-s: 71%;
--accent-l: 35%;
--canvas-color: 152, 151, 26 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--faded-purple);
--code-builtin: var(--faded-orange);
--code-comment: var(var(--gray));
--code-definition: var(--dark1);
--code-keyword: var(--faded-red);
--code-operator: var(--faded-orange);
--code-property: var(--faded-green);
--code-parentheses: var(--faded-orange);
--code-string: var(--faded-green);
--code-value: var(--faded-purple);
--code-variable: var(--faded-blue);
}

.color-scheme-gruvbox-soft {
--background-primary: var(--light0-soft);
--background-secondary: var(--light1);
--border-color-primary: var(--light3);
--border-color-secondary: var(--light4);
--text-color-muted-dark: var(--light3);
--text-color-muted-light: var(--light4);
}`,
    },
    "color-scheme-gruvbox-medium": {
      dark: `.color-scheme-gruvbox-medium {
--dark0-hard: #1d2021;
--dark0: #282828;
--dark0-soft: #32302f;
--dark1: #3c3836;
--dark2: #504945;
--dark3: #665c54;
--dark4: #7c6f64;
--light0-hard: #f9f5d7;
--light0: #fbf1c7;
--light0-soft: #f2e5bc;
--light1: #ebdbb2;
--light2: #d5c4a1;
--light3: #bdae93;
--light4: #a89984;
--bright-red: #fb4934;
--bright-green: #b8bb26;
--bright-yellow: #fabd2f;
--bright-blue: #83a598;
--bright-purple: #d3869b;
--bright-aqua: #8ec07c;
--bright-orange: #fe8019;
--neutral-red: #cc241d;
--neutral-green: #98971a;
--neutral-yellow: #d79921;
--neutral-blue: #458588;
--neutral-purple: #b16286;
--neutral-aqua: #689d6a;
--neutral-orange: #d65d0e;
--faded-red: #9d0006;
--faded-green: #79740e;
--faded-yellow: #b57614;
--faded-blue: #076678;
--faded-purple: #8f3f71;
--faded-aqua: #427b58;
--faded-orange: #af3a03;
--dark-red-hard: #792329;
--dark-red: #722529;
--dark-red-soft: #7b2c2f;
--light-red-hard: #fc9690;
--light-red: #fc9487;
--light-red-soft: #f78b7f;
--dark-green-hard: #5a633a;
--dark-green: #62693e;
--dark-green-soft: #686d43;
--light-green-hard: #d3d6a5;
--light-green: #d5d39b;
--light-green-soft: #cecb94;
--dark-aqua-hard: #3e4934;
--dark-aqua: #49503b;
--dark-aqua-soft: #525742;
--light-aqua-hard: #e6e9c1;
--light-aqua: #e8e5b5;
--light-aqua-soft: #e1dbac;
--gray: #928374;
--selection-background-color: var(--dark3);
--color-red: var(--neutral-red);
--color-orange: var(--neutral-orange);
--color-yellow: var(--neutral-yellow);
--color-green: var(--neutral-green);
--color-cyan: var(--neutral-aqua);
--color-blue: var(--neutral-blue);
--color-purple: var(--neutral-purple);
--color-pink: pink;
--text-color: var(--light1);
--text-color-accent: white;
--accent-color-dark: var(--neutral-green);
--accent-color-light: var(--neutral-yellow);
--accent-color-hover: var(--bright-green);
--accent-h: 60;
--accent-s: 71%;
--accent-l: 35%;
--canvas-color: 152, 151, 26 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--bright-purple);
--code-builtin: var(--bright-orange);
--code-comment: var(var(--gray));
--code-definition: var(--light1);
--code-keyword: var(--bright-red);
--code-operator: var(--bright-orange);
--code-property: var(--bright-green);
--code-parentheses: var(--bright-orange);
--code-string: var(--bright-green);
--code-value: var(--bright-purple);
--code-variable: var(--bright-blue);
}

.color-scheme-gruvbox-medium {
--background-primary: var(--dark0);
--background-secondary: var(--dark0-soft);
--border-color-primary: var(--dark2);
--border-color-secondary: var(--dark3);
--text-color-muted-dark: var(--dark2);
--text-color-muted-light: var(--dark3);
}`,
      light: `.color-scheme-gruvbox-medium {
--dark0-hard: #1d2021;
--dark0: #282828;
--dark0-soft: #32302f;
--dark1: #3c3836;
--dark2: #504945;
--dark3: #665c54;
--dark4: #7c6f64;
--light0-hard: #f9f5d7;
--light0: #fbf1c7;
--light0-soft: #f2e5bc;
--light1: #ebdbb2;
--light2: #d5c4a1;
--light3: #bdae93;
--light4: #a89984;
--bright-red: #fb4934;
--bright-green: #b8bb26;
--bright-yellow: #fabd2f;
--bright-blue: #83a598;
--bright-purple: #d3869b;
--bright-aqua: #8ec07c;
--bright-orange: #fe8019;
--neutral-red: #cc241d;
--neutral-green: #98971a;
--neutral-yellow: #d79921;
--neutral-blue: #458588;
--neutral-purple: #b16286;
--neutral-aqua: #689d6a;
--neutral-orange: #d65d0e;
--faded-red: #9d0006;
--faded-green: #79740e;
--faded-yellow: #b57614;
--faded-blue: #076678;
--faded-purple: #8f3f71;
--faded-aqua: #427b58;
--faded-orange: #af3a03;
--dark-red-hard: #792329;
--dark-red: #722529;
--dark-red-soft: #7b2c2f;
--light-red-hard: #fc9690;
--light-red: #fc9487;
--light-red-soft: #f78b7f;
--dark-green-hard: #5a633a;
--dark-green: #62693e;
--dark-green-soft: #686d43;
--light-green-hard: #d3d6a5;
--light-green: #d5d39b;
--light-green-soft: #cecb94;
--dark-aqua-hard: #3e4934;
--dark-aqua: #49503b;
--dark-aqua-soft: #525742;
--light-aqua-hard: #e6e9c1;
--light-aqua: #e8e5b5;
--light-aqua-soft: #e1dbac;
--gray: #928374;
--selection-background-color: var(--light3);
--color-red: var(--neutral-red);
--color-orange: var(--neutral-orange);
--color-yellow: var(--neutral-yellow);
--color-green: var(--neutral-green);
--color-cyan: var(--neutral-aqua);
--color-blue: var(--neutral-blue);
--color-purple: var(--neutral-purple);
--color-pink: pink;
--text-color: var(--dark1);
--text-color-accent: white;
--accent-color-dark: var(--neutral-green);
--accent-color-light: var(--neutral-yellow);
--accent-color-hover: var(--bright-green);
--accent-h: 60;
--accent-s: 71%;
--accent-l: 35%;
--canvas-color: 152, 151, 26 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--faded-purple);
--code-builtin: var(--faded-orange);
--code-comment: var(var(--gray));
--code-definition: var(--dark1);
--code-keyword: var(--faded-red);
--code-operator: var(--faded-orange);
--code-property: var(--faded-green);
--code-parentheses: var(--faded-orange);
--code-string: var(--faded-green);
--code-value: var(--faded-purple);
--code-variable: var(--faded-blue);
}

.color-scheme-gruvbox-medium {
--background-primary: var(--light0);
--background-secondary: var(--light0-soft);
--border-color-primary: var(--light2);
--border-color-secondary: var(--light3);
--text-color-muted-dark: var(--light2);
--text-color-muted-light: var(--light3);
}`,
    },
    "color-scheme-gruvbox-hard": {
      dark: `.color-scheme-gruvbox-hard {
--dark0-hard: #1d2021;
--dark0: #282828;
--dark0-soft: #32302f;
--dark1: #3c3836;
--dark2: #504945;
--dark3: #665c54;
--dark4: #7c6f64;
--light0-hard: #f9f5d7;
--light0: #fbf1c7;
--light0-soft: #f2e5bc;
--light1: #ebdbb2;
--light2: #d5c4a1;
--light3: #bdae93;
--light4: #a89984;
--bright-red: #fb4934;
--bright-green: #b8bb26;
--bright-yellow: #fabd2f;
--bright-blue: #83a598;
--bright-purple: #d3869b;
--bright-aqua: #8ec07c;
--bright-orange: #fe8019;
--neutral-red: #cc241d;
--neutral-green: #98971a;
--neutral-yellow: #d79921;
--neutral-blue: #458588;
--neutral-purple: #b16286;
--neutral-aqua: #689d6a;
--neutral-orange: #d65d0e;
--faded-red: #9d0006;
--faded-green: #79740e;
--faded-yellow: #b57614;
--faded-blue: #076678;
--faded-purple: #8f3f71;
--faded-aqua: #427b58;
--faded-orange: #af3a03;
--dark-red-hard: #792329;
--dark-red: #722529;
--dark-red-soft: #7b2c2f;
--light-red-hard: #fc9690;
--light-red: #fc9487;
--light-red-soft: #f78b7f;
--dark-green-hard: #5a633a;
--dark-green: #62693e;
--dark-green-soft: #686d43;
--light-green-hard: #d3d6a5;
--light-green: #d5d39b;
--light-green-soft: #cecb94;
--dark-aqua-hard: #3e4934;
--dark-aqua: #49503b;
--dark-aqua-soft: #525742;
--light-aqua-hard: #e6e9c1;
--light-aqua: #e8e5b5;
--light-aqua-soft: #e1dbac;
--gray: #928374;
--selection-background-color: var(--dark3);
--color-red: var(--neutral-red);
--color-orange: var(--neutral-orange);
--color-yellow: var(--neutral-yellow);
--color-green: var(--neutral-green);
--color-cyan: var(--neutral-aqua);
--color-blue: var(--neutral-blue);
--color-purple: var(--neutral-purple);
--color-pink: pink;
--text-color: var(--light1);
--text-color-accent: white;
--accent-color-dark: var(--neutral-green);
--accent-color-light: var(--neutral-yellow);
--accent-color-hover: var(--bright-green);
--accent-h: 60;
--accent-s: 71%;
--accent-l: 35%;
--canvas-color: 152, 151, 26 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--bright-purple);
--code-builtin: var(--bright-orange);
--code-comment: var(var(--gray));
--code-definition: var(--light1);
--code-keyword: var(--bright-red);
--code-operator: var(--bright-orange);
--code-property: var(--bright-green);
--code-parentheses: var(--bright-orange);
--code-string: var(--bright-green);
--code-value: var(--bright-purple);
--code-variable: var(--bright-blue);
}

.color-scheme-gruvbox-hard {
--background-primary: var(--dark0-hard);
--background-secondary: var(--dark0);
--border-color-primary: var(--dark1);
--border-color-secondary: var(--dark2);
--text-color-muted-dark: var(--dark1);
--text-color-muted-light: var(--dark2);
}`,
      light: `.color-scheme-gruvbox-hard {
--dark0-hard: #1d2021;
--dark0: #282828;
--dark0-soft: #32302f;
--dark1: #3c3836;
--dark2: #504945;
--dark3: #665c54;
--dark4: #7c6f64;
--light0-hard: #f9f5d7;
--light0: #fbf1c7;
--light0-soft: #f2e5bc;
--light1: #ebdbb2;
--light2: #d5c4a1;
--light3: #bdae93;
--light4: #a89984;
--bright-red: #fb4934;
--bright-green: #b8bb26;
--bright-yellow: #fabd2f;
--bright-blue: #83a598;
--bright-purple: #d3869b;
--bright-aqua: #8ec07c;
--bright-orange: #fe8019;
--neutral-red: #cc241d;
--neutral-green: #98971a;
--neutral-yellow: #d79921;
--neutral-blue: #458588;
--neutral-purple: #b16286;
--neutral-aqua: #689d6a;
--neutral-orange: #d65d0e;
--faded-red: #9d0006;
--faded-green: #79740e;
--faded-yellow: #b57614;
--faded-blue: #076678;
--faded-purple: #8f3f71;
--faded-aqua: #427b58;
--faded-orange: #af3a03;
--dark-red-hard: #792329;
--dark-red: #722529;
--dark-red-soft: #7b2c2f;
--light-red-hard: #fc9690;
--light-red: #fc9487;
--light-red-soft: #f78b7f;
--dark-green-hard: #5a633a;
--dark-green: #62693e;
--dark-green-soft: #686d43;
--light-green-hard: #d3d6a5;
--light-green: #d5d39b;
--light-green-soft: #cecb94;
--dark-aqua-hard: #3e4934;
--dark-aqua: #49503b;
--dark-aqua-soft: #525742;
--light-aqua-hard: #e6e9c1;
--light-aqua: #e8e5b5;
--light-aqua-soft: #e1dbac;
--gray: #928374;
--selection-background-color: var(--light3);
--color-red: var(--neutral-red);
--color-orange: var(--neutral-orange);
--color-yellow: var(--neutral-yellow);
--color-green: var(--neutral-green);
--color-cyan: var(--neutral-aqua);
--color-blue: var(--neutral-blue);
--color-purple: var(--neutral-purple);
--color-pink: pink;
--text-color: var(--dark1);
--text-color-accent: white;
--accent-color-dark: var(--neutral-green);
--accent-color-light: var(--neutral-yellow);
--accent-color-hover: var(--bright-green);
--accent-h: 60;
--accent-s: 71%;
--accent-l: 35%;
--canvas-color: 152, 151, 26 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--faded-purple);
--code-builtin: var(--faded-orange);
--code-comment: var(var(--gray));
--code-definition: var(--dark1);
--code-keyword: var(--faded-red);
--code-operator: var(--faded-orange);
--code-property: var(--faded-green);
--code-parentheses: var(--faded-orange);
--code-string: var(--faded-green);
--code-value: var(--faded-purple);
--code-variable: var(--faded-blue);
}

.color-scheme-gruvbox-hard {
--background-primary: var(--light0-hard);
--background-secondary: var(--light0);
--border-color-primary: var(--light1);
--border-color-secondary: var(--light2);
--text-color-muted-dark: var(--light1);
--text-color-muted-light: var(--light2);
}`,
    },
    "color-scheme-horizon-bright": {
      light: `.color-scheme-horizon-bright {
--blue: #26bbd9;
--cyan: #59e1e3;
--green: #29d398;
--magenta: #ee64ac;
--red: #e95678;
--yellow: #fab795;
--amethyst: #8a31b9;
--black: #333333;
--crimson: #da103f;
--elm: #1d8991;
--jaffa: #f77d26;
--tango: #f6661e;
--thunderbird: #dc3318;
--accent: #f9cbbe;
--accentAlt: #f9cec3;
--background: #fdf0ed;
--backgroundAlt: #fadad1;
--border: #1a1c23;
--darkText: #06060c;
--color-red: var(--red);
--color-orange: var(--jaffa);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--amethyst);
--color-pink: pink;
--background-primary: var(--background);
--background-secondary: var(--backgroundAlt);
--selection-background-color: var(--accent);
--border-color-primary: var(--accent);
--border-color-secondary: var(--accent);
--text-color: var(--black);
--text-color-accent: white;
--text-color-muted-dark: var(--accent);
--text-color-muted-light: var(--accentAlt);
--accent-color-dark: var(--red);
--accent-color-light: var(--elm);
--accent-color-hover: var(--yellow);
--accent-h: 346;
--accent-s: 77%;
--accent-l: 63%;
--canvas-color: 233, 86, 120 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--crimson);
--code-builtin: var(--elm);
--code-comment: #989290;
--code-definition: var(--thunderbird);
--code-keyword: var(--amethyst);
--code-operator: var(--black);
--code-property: var(--elm);
--code-parentheses: var(--black);
--code-string: var(--jaffa);
--code-value: var(--crimson);
--code-variable: var(--thunderbird);
}`,
    },
    "color-scheme-kanagawa-lotus": {
      light: `.color-scheme-kanagawa-lotus {
--lotusInk1: #545464;
--lotusInk2: #43436c;
--lotusGray: #dcd7ba;
--lotusGray2: #716e61;
--lotusGray3: #8a8980;
--lotusWhite0: #d5cea3;
--lotusWhite1: #dcd5ac;
--lotusWhite2: #e5ddb0;
--lotusWhite3: #f2ecbc;
--lotusWhite4: #e7dba0;
--lotusWhite5: #e4d794;
--lotusViolet1: #a09cac;
--lotusViolet2: #766b90;
--lotusViolet3: #c9cbd1;
--lotusViolet4: #624c83;
--lotusBlue1: #c7d7e0;
--lotusBlue2: #b5cbd2;
--lotusBlue3: #9fb5c9;
--lotusBlue4: #4d699b;
--lotusBlue5: #5d57a3;
--lotusGreen: #6f894e;
--lotusGreen2: #6e915f;
--lotusGreen3: #b7d0ae;
--lotusPink: #b35b79;
--lotusOrange: #cc6d00;
--lotusOrange2: #e98a00;
--lotusYellow: #77713f;
--lotusYellow2: #836f4a;
--lotusYellow3: #de9800;
--lotusYellow4: #f9d791;
--lotusRed: #c84053;
--lotusRed2: #d7474b;
--lotusRed3: #e82424;
--lotusRed4: #d9a594;
--lotusAqua: #597b75;
--lotusAqua2: #5e857a;
--lotusTeal1: #4e8ca2;
--lotusTeal2: #6693bf;
--lotusTeal3: #5a7785;
--lotusCyan: #d7e3d8;
--color-red: var(--lotusRed2);
--color-orange: var(--lotusOrange);
--color-yellow: var(--lotusYellow3);
--color-green: var(--lotusGreen);
--color-cyan: var(--lotusTeal2);
--color-blue: var(--lotusTeal1);
--color-purple: var(--lotusViolet4);
--color-pink: var(--lotusPink);
--background-primary: var(--lotusWhite3);
--background-secondary: var(--lotusWhite4);
--selection-background-color: var(--lotusViolet3);
--border-color-primary: var(--lotusWhite0);
--border-color-secondary: var(--lotusGray3);
--text-color: var(--lotusInk1);
--text-color-accent: white;
--text-color-muted-dark: var(--lotusGray3);
--text-color-muted-light: var(--lotusGray2);
--accent-color-dark: var(--lotusTeal1);
--accent-color-light: var(--lotusRed2);
--accent-color-hover: var(--lotusPink);
--accent-h: 196;
--accent-s: 35%;
--accent-l: 47%;
--canvas-color: 78, 140, 162 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--lotusOrange);
--code-builtin: var(--lotusTeal2);
--code-comment: var(--lotusGray3);
--code-definition: var(--lotusOrange);
--code-keyword: var(--lotusViolet4);
--code-operator: var(--lotusYellow2);
--code-property: var(--lotusInk1);
--code-parentheses: var(--lotusTeal1);
--code-string: var(--lotusGreen);
--code-value: var(--lotusPink);
--code-variable: var(--lotusOrange);
}`,
    },
    "color-scheme-tokyo-night-day": {
      light: `.color-scheme-tokyo-night-day {
--bg: #d5d6db;
--bg-dark: #cbccd1;
--bg-highlight: #b5b9c9;
--blue: #77a0f7;
--blue0: #7890dd;
--blue1: #23a8c0;
--blue2: #0baeca;
--blue5: #0098bb;
--blue6: #4c8988;
--blue7: #92a6d5;
--comment: #848cb5;
--cyan: #009cd0;
--dark3: #8990b3;
--dark5: #68709a;
--fg: #4c505e;
--fg-dark: #8d98c9;
--fg-gutter: #a8aecb;
--green: #799f50;
--green1: #519c91;
--green2: #48b5c6;
--magenta: #b28af6;
--magenta2: #d20065;
--orange: #e97c00;
--purple: #7847bd;
--red: #f77e94;
--red1: #c64343;
--teal: #18b495;
--terminal-black: #a1a6c5;
--yellow: #ba9155;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--purple);
--color-pink: pink;
--background-primary: var(--bg);
--background-secondary: var(--bg-dark);
--selection-background-color: var(--bg-highlight);
--border-color-primary: var(--fg-gutter);
--border-color-secondary: var(--fg-gutter);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--fg-gutter);
--text-color-muted-light: var(--fg-dark);
--accent-color-dark: var(--purple);
--accent-color-light: var(--blue);
--accent-color-hover: var(--magenta);
--accent-h: 265;
--accent-s: 47%;
--accent-l: 51%;
--canvas-color: 120, 71, 189 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--orange);
--code-builtin: var(--color-cyan);
--code-comment: var(--comment);
--code-definition: var(--color-blue);
--code-keyword: var(--color-purple);
--code-operator: var(--color-cyan);
--code-property: var(--blue);
--code-parentheses: var(--fg-dark);
--code-string: var(--color-green);
--code-value: var(--color-orange);
--code-variable: var(--fg);
}`,
    },
    "color-scheme-rose-pine-dawn": {
      light: `.color-scheme-rose-pine-dawn {
--nc: #f8f0e7;
--base: #faf4ed;
--surface: #fffaf3;
--overlay: #f2e9e1;
--muted: #9893a5;
--subtle: #797593;
--text: #575279;
--love: #b4637a;
--gold: #ea9d34;
--rose: #d7827e;
--pine: #286983;
--foam: #56949f;
--iris: #907aa9;
--highlight-low: #f4ede8;
--highlight-med: #dfdad9;
--highlight-high: #cecacd;
--color-red: var(--love);
--color-orange: var(--rose);
--color-yellow: var(--gold);
--color-green: var(--foam);
--color-cyan: var(--foam);
--color-blue: var(--pine);
--color-purple: var(--iris);
--color-pink: pink;
--background-primary: var(--base);
--background-secondary: var(--surface);
--selection-background-color: var(--overlay);
--border-color-primary: var(--highlight-med);
--border-color-secondary: var(--highlight-high);
--text-color: var(--text);
--text-color-accent: var(--text);
--text-color-muted-dark: var(--overlay);
--text-color-muted-light: var(--muted);
--accent-color-dark: var(--pine);
--accent-color-light: var(--rose);
--accent-color-hover: var(--iris);
--accent-h: 3;
--accent-s: 53%;
--accent-l: 67%;
--canvas-color: 215, 130, 126 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--rose);
--code-builtin: var(--love);
--code-comment: var(--muted);
--code-definition: var(--rose);
--code-keyword: var(--pine);
--code-operator: var(--pine);
--code-property: var(--foam);
--code-parentheses: var(--subtle);
--code-string: var(--gold);
--code-value: var(--rose);
--code-variable: var(--text);
}`,
    },
    "color-scheme-atom-one-dark": {
      dark: `.color-scheme-atom-one-dark {
--black: #181a1f;
--darkest-gray: #21252b;
--bg0: #282c34;
--bg1: #31353f;
--bg2: #393f4a;
--bg3: #3b3f4c;
--bg-blue: #73b8f1;
--bg-yellow: #ebd09c;
--foreground: #abb2bf;
--grey: #5c6370;
--light-grey: #848b98;
--color-red: #e86671;
--color-orange: #d19a66;
--color-yellow: #e5c07b;
--color-green: #98c379;
--color-cyan: #56b6c2;
--color-blue: #61afef;
--color-purple: #c678dd;
--color-pink: pink;
--background-primary: var(--bg0);
--background-secondary: var(--darkest-gray);
--selection-background-color: var(--bg3);
--border-color-primary: var(--bg2);
--border-color-secondary: var(--bg1);
--text-color: var(--foreground);
--text-color-accent: white;
--text-color-muted-dark: var(--bg2);
--text-color-muted-light: var(--grey);
--accent-color-dark: var(--color-blue);
--accent-color-light: var(--color-cyan);
--accent-color-hover: var(--bg-blue);
--accent-h: 207;
--accent-s: 82%;
--accent-l: 66%;
--canvas-color: 97, 175, 239 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--color-orange);
--code-builtin: var(--color-cyan);
--code-comment: var(--grey);
--code-definition: var(--color-blue);
--code-keyword: var(--color-purple);
--code-operator: var(--color-cyan);
--code-property: var(--color-cyan);
--code-parentheses: var(--light-grey);
--code-string: var(--color-green);
--code-value: var(--color-orange);
--code-variable: var(--text-color);
}`,
    },
    "color-scheme-catppuccin-frappe": {
      dark: `.color-scheme-catppuccin-frappe {
--rosewater: #f2d5cf;
--flamingo: #eebebe;
--pink: #f4b8e4;
--mauve: #ca9ee6;
--red: #e78284;
--maroon: #ea999c;
--peach: #ef9f76;
--yellow: #e5c890;
--green: #a6d189;
--teal: #81c8be;
--sky: #99d1db;
--sapphire: #85c1dc;
--blue: #8caaee;
--lavender: #babbf1;
--text: #c6d0f5;
--subtext1: #b5bfe2;
--subtext0: #a5adce;
--overlay2: #949cbb;
--overlay1: #838ba7;
--overlay0: #737994;
--surface2: #626880;
--surface1: #51576d;
--surface0: #414559;
--base: #303446;
--mantle: #292c3c;
--crust: #232634;
--color-red: var(--red);
--color-orange: var(--peach);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--teal);
--color-blue: var(--blue);
--color-purple: var(--mauve);
--color-pink: var(--pink);
--background-primary: var(--base);
--background-secondary: var(--crust);
--selection-background-color: var(--surface1);
--border-color-primary: var(--surface1);
--border-color-secondary: var(--surface0);
--text-color: var(--text);
--text-color-accent: white;
--text-color-muted-dark: var(--surface0);
--text-color-muted-light: var(--overlay0);
--accent-color-dark: var(--mauve);
--accent-color-light: var(--blue);
--accent-color-hover: var(--maroon);
--accent-h: 277;
--accent-s: 59%;
--accent-l: 76%;
--canvas-color: 202, 158, 230 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--peach);
--code-builtin: var(--peach);
--code-comment: var(--overlay0);
--code-definition: var(--lavender);
--code-keyword: var(--mauve);
--code-operator: var(--sky);
--code-property: var(--lavender);
--code-parentheses: var(--overlay2);
--code-string: var(--green);
--code-value: var(--peach);
--code-variable: var(--text-color);
}`,
    },
    "color-scheme-catppuccin-macchiato": {
      dark: `.color-scheme-catppuccin-macchiato {
--rosewater: #f4dbd6;
--flamingo: #f0c6c6;
--pink: #f5bde6;
--mauve: #c6a0f6;
--red: #ed8796;
--maroon: #ee99a0;
--peach: #f5a97f;
--yellow: #eed49f;
--green: #a6da95;
--teal: #8bd5ca;
--sky: #91d7e3;
--sapphire: #7dc4e4;
--blue: #8aadf4;
--lavender: #b7bdf8;
--text: #cad3f5;
--subtext1: #b8c0e0;
--subtext0: #a5adcb;
--overlay2: #939ab7;
--overlay1: #8087a2;
--overlay0: #6e738d;
--surface2: #5b6078;
--surface1: #494d64;
--surface0: #363a4f;
--base: #24273a;
--mantle: #1e2030;
--crust: #181926;
--color-red: var(--red);
--color-orange: var(--peach);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--teal);
--color-blue: var(--blue);
--color-purple: var(--mauve);
--color-pink: var(--pink);
--background-primary: var(--base);
--background-secondary: var(--crust);
--selection-background-color: var(--surface1);
--border-color-primary: var(--surface1);
--border-color-secondary: var(--surface0);
--text-color: var(--text);
--text-color-accent: white;
--text-color-muted-dark: var(--surface0);
--text-color-muted-light: var(--overlay0);
--accent-color-dark: var(--mauve);
--accent-color-light: var(--blue);
--accent-color-hover: var(--maroon);
--accent-h: 267;
--accent-s: 83%;
--accent-l: 80%;
--canvas-color: 198, 160, 246 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--peach);
--code-builtin: var(--peach);
--code-comment: var(--overlay0);
--code-definition: var(--lavender);
--code-keyword: var(--mauve);
--code-operator: var(--sky);
--code-property: var(--lavender);
--code-parentheses: var(--overlay2);
--code-string: var(--green);
--code-value: var(--peach);
--code-variable: var(--text-color);
}`,
    },
    "color-scheme-catppuccin-mocha": {
      dark: `.color-scheme-catppuccin-mocha {
--rosewater: #f5e0dc;
--flamingo: #f2cdcd;
--pink: #f5c2e7;
--mauve: #cba6f7;
--red: #f38ba8;
--maroon: #eba0ac;
--peach: #fab387;
--yellow: #f9e2af;
--green: #a6e3a1;
--teal: #94e2d5;
--sky: #89dceb;
--sapphire: #74c7ec;
--blue: #89b4fa;
--lavender: #b4befe;
--text: #cdd6f4;
--subtext1: #bac2de;
--subtext0: #a6adc8;
--overlay2: #9399b2;
--overlay1: #7f849c;
--overlay0: #6c7086;
--surface2: #585b70;
--surface1: #45475a;
--surface0: #313244;
--base: #1e1e2e;
--mantle: #181825;
--crust: #11111b;
--color-red: var(--red);
--color-orange: var(--peach);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--teal);
--color-blue: var(--blue);
--color-purple: var(--mauve);
--color-pink: var(--pink);
--background-primary: var(--base);
--background-secondary: var(--crust);
--selection-background-color: var(--surface1);
--border-color-primary: var(--surface1);
--border-color-secondary: var(--surface0);
--text-color: var(--text);
--text-color-accent: white;
--text-color-muted-dark: var(--surface0);
--text-color-muted-light: var(--overlay0);
--accent-color-dark: var(--mauve);
--accent-color-light: var(--blue);
--accent-color-hover: var(--maroon);
--accent-h: 267;
--accent-s: 84%;
--accent-l: 81%;
--canvas-color: 203, 166, 247 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--peach);
--code-builtin: var(--peach);
--code-comment: var(--overlay0);
--code-definition: var(--lavender);
--code-keyword: var(--mauve);
--code-operator: var(--sky);
--code-property: var(--lavender);
--code-parentheses: var(--overlay2);
--code-string: var(--green);
--code-value: var(--peach);
--code-variable: var(--text-color);
}`,
    },
    "color-scheme-dracula": {
      dark: `.color-scheme-dracula {
--bg: #282a36;
--fg: #f8f8f2;
--selection: #44475a;
--comment: #6272a4;
--red: #ff5555;
--orange: #ffb86c;
--yellow: #f1fa8c;
--green: #50fa7b;
--purple: #bd93f9;
--cyan: #8be9fd;
--pink: #ff79c6;
--bright-red: #ff6e6e;
--bright-green: #69ff94;
--bright-yellow: #ffffa5;
--bright-blue: #d6acff;
--bright-magenta: #ff92df;
--bright-cyan: #a4ffff;
--bright-white: #ffffff;
--menu: #21222c;
--visual: #3e4452;
--gutter-fg: #4b5263;
--nontext: #3b4048;
--white: #abb2bf;
--black: #191a21;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--comment);
--color-purple: var(--purple);
--color-pink: var(--pink);
--h2-color: var(--pink);
--background-primary: var(--bg);
--background-secondary: var(--menu);
--selection-background-color: var(--selection);
--border-color-primary: var(--gutter-fg);
--border-color-secondary: var(--visual);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--nontext);
--text-color-muted-light: var(--gutter-fg);
--accent-color-dark: var(--purple);
--accent-color-light: var(--pink);
--accent-color-hover: var(--green);
--accent-h: 265;
--accent-s: 89%;
--accent-l: 78%;
--canvas-color: 189, 147, 249 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--purple);
--code-builtin: var(--green);
--code-comment: var(--comment);
--code-definition: var(--text-color);
--code-keyword: var(--pink);
--code-operator: var(--pink);
--code-property: var(--green);
--code-parentheses: var(--cyan);
--code-string: var(--yellow);
--code-value: var(--purple);
--code-variable: var(--purple);
}

.color-scheme-dracula-soft {
--bg: #292a35;
--fg: #f6f6f5;
--selection: #7c7f8a;
--comment: #70747f;
--orange: #fdc38e;
--black: #1c1c1c;
--red: #dd6e6b;
--green: #87e58e;
--yellow: #e8eda2;
--purple: #baa0e8;
--pink: #e48cc1;
--cyan: #a7dfef;
--white: #f6f6f5;
--bright-red: #e1837f;
--bright-green: #97eda2;
--bright-yellow: #f6f6b6;
--bright-blue: #d0b5f3;
--bright-magenta: #e7a1d7;
--bright-cyan: #bcf4f5;
--bright-white: #ffffff;
--menu: #21222c;
--visual: #3e4452;
--gutter-fg: #4b5263;
--nontext: #3b4048;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--comment);
--color-purple: var(--purple);
--color-pink: var(--pink);
--h2-color: var(--pink);
--background-primary: var(--bg);
--background-secondary: var(--menu);
--selection-background-color: var(--selection);
--border-color-primary: var(--gutter-fg);
--border-color-secondary: var(--visual);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--nontext);
--text-color-muted-light: var(--gutter-fg);
--accent-color-dark: var(--purple);
--accent-color-light: var(--pink);
--accent-color-hover: var(--green);
--accent-h: 262;
--accent-s: 61%;
--accent-l: 77%;
--canvas-color: 186, 160, 232 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--purple);
--code-builtin: var(--green);
--code-comment: var(--comment);
--code-definition: var(--text-color);
--code-keyword: var(--pink);
--code-operator: var(--pink);
--code-property: var(--green);
--code-parentheses: var(--cyan);
--code-string: var(--yellow);
--code-value: var(--purple);
--code-variable: var(--purple);
}`,
    },
    "color-scheme-dracula-soft": {
      dark: `.color-scheme-dracula-soft {
--bg: #292a35;
--fg: #f6f6f5;
--selection: #7c7f8a;
--comment: #70747f;
--orange: #fdc38e;
--black: #1c1c1c;
--red: #dd6e6b;
--green: #87e58e;
--yellow: #e8eda2;
--purple: #baa0e8;
--pink: #e48cc1;
--cyan: #a7dfef;
--white: #f6f6f5;
--bright-red: #e1837f;
--bright-green: #97eda2;
--bright-yellow: #f6f6b6;
--bright-blue: #d0b5f3;
--bright-magenta: #e7a1d7;
--bright-cyan: #bcf4f5;
--bright-white: #ffffff;
--menu: #21222c;
--visual: #3e4452;
--gutter-fg: #4b5263;
--nontext: #3b4048;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--comment);
--color-purple: var(--purple);
--color-pink: var(--pink);
--h2-color: var(--pink);
--background-primary: var(--bg);
--background-secondary: var(--menu);
--selection-background-color: var(--selection);
--border-color-primary: var(--gutter-fg);
--border-color-secondary: var(--visual);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--nontext);
--text-color-muted-light: var(--gutter-fg);
--accent-color-dark: var(--purple);
--accent-color-light: var(--pink);
--accent-color-hover: var(--green);
--accent-h: 262;
--accent-s: 61%;
--accent-l: 77%;
--canvas-color: 186, 160, 232 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--purple);
--code-builtin: var(--green);
--code-comment: var(--comment);
--code-definition: var(--text-color);
--code-keyword: var(--pink);
--code-operator: var(--pink);
--code-property: var(--green);
--code-parentheses: var(--cyan);
--code-string: var(--yellow);
--code-value: var(--purple);
--code-variable: var(--purple);
}`,
    },
    "color-scheme-horizon": {
      dark: `.color-scheme-horizon {
--blue: #26bbd9;
--cyan: #59e1e3;
--green: #29d398;
--magenta: #ee64ac;
--red: #e95678;
--yellow: #fab795;
--apricot: #f09483;
--cranberry: #e95678;
--gray: #bbbbbb;
--lavender: #b877db;
--rosebud: #fab795;
--tacao: #fac29a;
--turquoise: #25b0bc;
--accent: #2e303e;
--accentAlt: #6c6f93;
--background: #1c1e26;
--backgroundAlt: #232530;
--border: #1a1c23;
--lightText: #d5d8da;
--color-red: var(--red);
--color-orange: var(--apricot);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--lavender);
--color-pink: pink;
--background-primary: var(--background);
--background-secondary: var(--backgroundAlt);
--selection-background-color: var(--accent);
--border-color-primary: var(--accent);
--border-color-secondary: var(--accent);
--text-color: var(--lightText);
--text-color-accent: white;
--text-color-muted-dark: var(--accent);
--text-color-muted-light: var(--accentAlt);
--accent-color-dark: var(--cranberry);
--accent-color-light: var(--turquoise);
--accent-color-hover: var(--rosebud);
--accent-h: 345;
--accent-s: 77%;
--accent-l: 62%;
--canvas-color: 233, 83, 120 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--apricot);
--code-builtin: var(--turquoise);
--code-comment: #4c4d53;
--code-definition: var(--cranberry);
--code-keyword: var(--lavender);
--code-operator: var(--gray);
--code-property: var(--turquoise);
--code-parentheses: var(--gray);
--code-string: var(--rosebud);
--code-value: var(--apricot);
--code-variable: var(--cranberry);
}`,
      light: `.color-scheme-horizon-bright {
--blue: #26bbd9;
--cyan: #59e1e3;
--green: #29d398;
--magenta: #ee64ac;
--red: #e95678;
--yellow: #fab795;
--amethyst: #8a31b9;
--black: #333333;
--crimson: #da103f;
--elm: #1d8991;
--jaffa: #f77d26;
--tango: #f6661e;
--thunderbird: #dc3318;
--accent: #f9cbbe;
--accentAlt: #f9cec3;
--background: #fdf0ed;
--backgroundAlt: #fadad1;
--border: #1a1c23;
--darkText: #06060c;
--color-red: var(--red);
--color-orange: var(--jaffa);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--amethyst);
--color-pink: pink;
--background-primary: var(--background);
--background-secondary: var(--backgroundAlt);
--selection-background-color: var(--accent);
--border-color-primary: var(--accent);
--border-color-secondary: var(--accent);
--text-color: var(--black);
--text-color-accent: white;
--text-color-muted-dark: var(--accent);
--text-color-muted-light: var(--accentAlt);
--accent-color-dark: var(--red);
--accent-color-light: var(--elm);
--accent-color-hover: var(--yellow);
--accent-h: 346;
--accent-s: 77%;
--accent-l: 63%;
--canvas-color: 233, 86, 120 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--crimson);
--code-builtin: var(--elm);
--code-comment: #989290;
--code-definition: var(--thunderbird);
--code-keyword: var(--amethyst);
--code-operator: var(--black);
--code-property: var(--elm);
--code-parentheses: var(--black);
--code-string: var(--jaffa);
--code-value: var(--crimson);
--code-variable: var(--thunderbird);
}`,
    },
    "color-scheme-kanagawa-dragon": {
      dark: `.color-scheme-kanagawa-dragon {
--dragonBlack0: #0d0c0c;
--dragonBlack1: #12120f;
--dragonBlack2: #1d1c19;
--dragonBlack3: #181616;
--dragonBlack4: #282727;
--dragonBlack5: #393836;
--dragonBlack6: #625e5a;
--dragonWhite: #c5c9c5;
--dragonGreen: #87a987;
--dragonGreen2: #8a9a7b;
--dragonPink: #a292a3;
--dragonOrange: #b6927b;
--dragonOrange2: #b98d7b;
--dragonGray: #a6a69c;
--dragonGray2: #9e9b93;
--dragonGray3: #7a8382;
--dragonBlue2: #8ba4b0;
--dragonViolet: #8992a7;
--dragonRed: #c4746e;
--dragonAqua: #8ea4a2;
--dragonAsh: #737c73;
--dragonTeal: #949fb5;
--dragonYellow: #c4b28a;
--waveBlue1: #223249;
--color-red: var(--dragonRed);
--color-orange: var(--dragonOrange);
--color-yellow: var(--dragonYellow);
--color-green: var(--dragonGreen2);
--color-cyan: var(--dragonTeal);
--color-blue: var(--dragonTeal);
--color-purple: var(--dragonViolet);
--color-pink: var(--dragonPink);
--background-primary: var(--dragonBlack3);
--background-secondary: var(--dragonBlack4);
--selection-background-color: var(--waveBlue1);
--border-color-primary: var(--dragonBlack5);
--border-color-secondary: var(--dragonBlack6);
--text-color: var(--dragonWhite);
--text-color-accent: white;
--text-color-muted-dark: var(--dragonBlack5);
--text-color-muted-light: var(--dragonBlack6);
--accent-color-dark: var(--dragonTeal);
--accent-color-light: var(--dragonOrange);
--accent-color-hover: var(--dragonPink);
--accent-h: 220;
--accent-s: 18%;
--accent-l: 65%;
--canvas-color: 148, 159, 181 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--dragonOrange);
--code-builtin: var(--dragonTeal);
--code-comment: var(--dragonAsh);
--code-definition: var(--dragonOrange);
--code-keyword: var(--dragonTeal);
--code-operator: var(--dragonRed);
--code-property: var(--dragonWhite);
--code-parentheses: var(--dragonGray2);
--code-string: var(--dragonGreen2);
--code-value: var(--dragonPink);
--code-variable: var(--dragonYellow);
}`,
    },
    "color-scheme-kanagawa-wave": {
      dark: `.color-scheme-kanagawa-wave {
--background: #1f1f28;
--background-alt: #2a2a37;
--sumiInk5: #363646;
--sumiInk6: #54546d;
--waveBlue1: #223249;
--fujiWhite: #dcd7ba;
--fujiGray: #727169;
--waveRed: #e46876;
--carpYellow: #e6c384;
--boatYellow2: #c0a36e;
--springGreen: #98bb6c;
--surimiOrange: #ffa066;
--crystalBlue: #7e9cd8;
--oniViolet: #957fb8;
--springViolet2: #9cabca;
--sakuraPink: #d27e99;
--color-red: var(--waveRed);
--color-orange: var(--surimiOrange);
--color-yellow: var(--carpYellow);
--color-green: var(--springGreen);
--color-cyan: var(--crystalBlue);
--color-blue: var(--crystalBlue);
--color-purple: var(--oniViolet);
--color-pink: var(--sakuraPink);
--background-primary: var(--background);
--background-secondary: var(--background-alt);
--selection-background-color: var(--waveBlue1);
--border-color-primary: var(--sumiInk5);
--border-color-secondary: var(--sumiInk6);
--text-color: var(--fujiWhite);
--text-color-accent: white;
--text-color-muted-dark: var(--sumiInk5);
--text-color-muted-light: var(--sumiInk6);
--accent-color-dark: var(--crystalBlue);
--accent-color-light: var(--sakuraPink);
--accent-color-hover: var(--springViolet2);
--accent-h: 220;
--accent-s: 54%;
--accent-l: 67%;
--canvas-color: 126, 156, 216 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--surimiOrange);
--code-builtin: var(--crystalBlue);
--code-comment: var(--fujiGray);
--code-definition: var(--crystalBlue);
--code-keyword: var(--oniViolet);
--code-operator: var(--boatYellow2);
--code-property: var(--carpYellow);
--code-parentheses: var(--springViolet2);
--code-string: var(--springGreen);
--code-value: var(--sakuraPink);
--code-variable: var(--purple);
}`,
    },
    "color-scheme-nord": {
      dark: `.color-scheme-nord {
--black: #2e3440;
--dark-gray: #3b4252;
--gray: #434c5e;
--light-gray: #4c566a;
--light-gray-bright: #616e88;
--darkest-white: #d8dee9;
--darker-white: #e5e9f0;
--white: #eceff4;
--teal: #8fbcbb;
--off-blue: #88c0d0;
--glacier: #81a1c1;
--color-red: #bf616a;
--color-orange: #d08770;
--color-yellow: #ebcb8b;
--color-green: #a3be8c;
--color-cyan: #88c0d0;
--color-blue: #5e81ac;
--color-purple: #b48ead;
--color-pink: pink;
--background-primary: var(--black);
--background-secondary: var(--dark-gray);
--selection-background-color: var(--light-gray);
--border-color-primary: var(--gray);
--border-color-secondary: var(--light-gray);
--text-color: var(--darkest-white);
--text-color-accent: var(--white);
--text-color-muted-dark: var(--background-secondary);
--text-color-muted-light: var(--light-gray-bright);
--accent-color-dark: var(--glacier);
--accent-color-light: var(--teal);
--accent-color-hover: var(--off-blue);
--accent-h: 210;
--accent-s: 34%;
--accent-l: 63%;
--canvas-color: 129, 161, 193 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--glacier);
--code-builtin: var(--off-blue);
--code-comment: var(--light-gray-bright);
--code-definition: var(--off-blue);
--code-keyword: var(--glacier);
--code-operator: var(--glacier);
--code-property: var(--off-blue);
--code-parentheses: var(--teal);
--code-string: var(--color-green);
--code-value: var(--color-purple);
--code-variable: var(--text-color);
}`,
    },
    "color-scheme-rose-pine": {
      dark: `.color-scheme-rose-pine {
--nc: #16141f;
--base: #191724;
--surface: #1f1d2e;
--overlay: #26233a;
--muted: #6e6a86;
--subtle: #908caa;
--text: #e0def4;
--love: #eb6f92;
--gold: #f6c177;
--rose: #ebbcba;
--pine: #31748f;
--foam: #9ccfd8;
--iris: #c4a7e7;
--highlight-low: #21202e;
--highlight-med: #403d52;
--highlight-high: #524f67;
--color-red: #eb6f92;
--color-orange: #ebbcba;
--color-yellow: #f6c177;
--color-green: #9ccfd8;
--color-cyan: #9ccfd8;
--color-blue: #31748f;
--color-purple: #c4a7e7;
--color-pink: pink;
--background-primary: var(--base);
--background-secondary: var(--surface);
--selection-background-color: var(--overlay);
--border-color-primary: var(--highlight-med);
--border-color-secondary: var(--highlight-high);
--text-color: var(--text);
--text-color-accent: white;
--text-color-muted-dark: var(--overlay);
--text-color-muted-light: var(--muted);
--accent-color-dark: var(--pine);
--accent-color-light: var(--rose);
--accent-color-hover: var(--foam);
--accent-h: 197;
--accent-s: 49%;
--accent-l: 38%;
--canvas-color: 49, 116, 143 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--rose);
--code-builtin: var(--love);
--code-comment: var(--muted);
--code-definition: var(--rose);
--code-keyword: var(--pine);
--code-operator: var(--pine);
--code-property: var(--foam);
--code-parentheses: var(--subtle);
--code-string: var(--gold);
--code-value: var(--rose);
--code-variable: var(--text);
}

.color-scheme-rose-pine-moon {
--nc: #1f1d30;
--base: #232136;
--surface: #2a273f;
--overlay: #393552;
--muted: #6e6a86;
--subtle: #908caa;
--text: #e0def4;
--love: #eb6f92;
--gold: #f6c177;
--rose: #ea9a97;
--pine: #3e8fb0;
--foam: #9ccfd8;
--iris: #c4a7e7;
--highlight-low: #2a283e;
--highlight-med: #44415a;
--highlight-high: #56526e;
--color-red: #eb6f92;
--color-orange: #ea9a97;
--color-yellow: #f6c177;
--color-green: #9ccfd8;
--color-cyan: #9ccfd8;
--color-blue: #3e8fb0;
--color-purple: #c4a7e7;
--color-pink: pink;
--background-primary: var(--base);
--background-secondary: var(--surface);
--selection-background-color: var(--overlay);
--border-color-primary: var(--highlight-med);
--border-color-secondary: var(--highlight-high);
--text-color: var(--text);
--text-color-accent: white;
--text-color-muted-dark: var(--overlay);
--text-color-muted-light: var(--muted);
--accent-color-dark: var(--pine);
--accent-color-light: var(--rose);
--accent-color-hover: var(--foam);
--accent-h: 197;
--accent-s: 48%;
--accent-l: 47%;
--canvas-color: 62, 143, 176 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--rose);
--code-builtin: var(--love);
--code-comment: var(--muted);
--code-definition: var(--rose);
--code-keyword: var(--pine);
--code-operator: var(--pine);
--code-property: var(--foam);
--code-parentheses: var(--subtle);
--code-string: var(--gold);
--code-value: var(--rose);
--code-variable: var(--text);
}`,
      light: `.color-scheme-rose-pine-dawn {
--nc: #f8f0e7;
--base: #faf4ed;
--surface: #fffaf3;
--overlay: #f2e9e1;
--muted: #9893a5;
--subtle: #797593;
--text: #575279;
--love: #b4637a;
--gold: #ea9d34;
--rose: #d7827e;
--pine: #286983;
--foam: #56949f;
--iris: #907aa9;
--highlight-low: #f4ede8;
--highlight-med: #dfdad9;
--highlight-high: #cecacd;
--color-red: var(--love);
--color-orange: var(--rose);
--color-yellow: var(--gold);
--color-green: var(--foam);
--color-cyan: var(--foam);
--color-blue: var(--pine);
--color-purple: var(--iris);
--color-pink: pink;
--background-primary: var(--base);
--background-secondary: var(--surface);
--selection-background-color: var(--overlay);
--border-color-primary: var(--highlight-med);
--border-color-secondary: var(--highlight-high);
--text-color: var(--text);
--text-color-accent: var(--text);
--text-color-muted-dark: var(--overlay);
--text-color-muted-light: var(--muted);
--accent-color-dark: var(--pine);
--accent-color-light: var(--rose);
--accent-color-hover: var(--iris);
--accent-h: 3;
--accent-s: 53%;
--accent-l: 67%;
--canvas-color: 215, 130, 126 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--rose);
--code-builtin: var(--love);
--code-comment: var(--muted);
--code-definition: var(--rose);
--code-keyword: var(--pine);
--code-operator: var(--pine);
--code-property: var(--foam);
--code-parentheses: var(--subtle);
--code-string: var(--gold);
--code-value: var(--rose);
--code-variable: var(--text);
}`,
    },
    "color-scheme-rose-pine-moon": {
      dark: `.color-scheme-rose-pine-moon {
--nc: #1f1d30;
--base: #232136;
--surface: #2a273f;
--overlay: #393552;
--muted: #6e6a86;
--subtle: #908caa;
--text: #e0def4;
--love: #eb6f92;
--gold: #f6c177;
--rose: #ea9a97;
--pine: #3e8fb0;
--foam: #9ccfd8;
--iris: #c4a7e7;
--highlight-low: #2a283e;
--highlight-med: #44415a;
--highlight-high: #56526e;
--color-red: #eb6f92;
--color-orange: #ea9a97;
--color-yellow: #f6c177;
--color-green: #9ccfd8;
--color-cyan: #9ccfd8;
--color-blue: #3e8fb0;
--color-purple: #c4a7e7;
--color-pink: pink;
--background-primary: var(--base);
--background-secondary: var(--surface);
--selection-background-color: var(--overlay);
--border-color-primary: var(--highlight-med);
--border-color-secondary: var(--highlight-high);
--text-color: var(--text);
--text-color-accent: white;
--text-color-muted-dark: var(--overlay);
--text-color-muted-light: var(--muted);
--accent-color-dark: var(--pine);
--accent-color-light: var(--rose);
--accent-color-hover: var(--foam);
--accent-h: 197;
--accent-s: 48%;
--accent-l: 47%;
--canvas-color: 62, 143, 176 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--rose);
--code-builtin: var(--love);
--code-comment: var(--muted);
--code-definition: var(--rose);
--code-keyword: var(--pine);
--code-operator: var(--pine);
--code-property: var(--foam);
--code-parentheses: var(--subtle);
--code-string: var(--gold);
--code-value: var(--rose);
--code-variable: var(--text);
}`,
    },
    "color-scheme-tokyo-night": {
      dark: `.color-scheme-tokyo-night {
--bg: #1a1b26;
--bg-dark: #16161e;
--bg-highlight: #363a4a;
--blue: #7aa2f7;
--blue0: #3d59a1;
--blue1: #2ac3de;
--blue2: #0db9d7;
--blue5: #89ddff;
--blue6: #b4f9f8;
--blue7: #394b70;
--comment: #565f89;
--cyan: #7dcfff;
--dark3: #545c7e;
--dark5: #737aa2;
--fg: #c0caf5;
--fg-dark: #a9b1d6;
--fg-gutter: #3b4261;
--green: #9ece6a;
--green1: #73daca;
--green2: #41a6b5;
--magenta: #bb9af7;
--magenta2: #ff007c;
--orange: #ff9e64;
--purple: #9d7cd8;
--red: #f7768e;
--red1: #db4b4b;
--teal: #1abc9c;
--terminal-black: #414868;
--yellow: #e0af68;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--purple);
--color-pink: pink;
--background-primary: var(--bg);
--background-secondary: var(--bg-dark);
--selection-background-color: var(--bg-highlight);
--border-color-primary: var(--fg-gutter);
--border-color-secondary: var(--fg-gutter);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--fg-gutter);
--text-color-muted-light: var(--fg-dark);
--accent-color-dark: var(--purple);
--accent-color-light: var(--blue);
--accent-color-hover: var(--magenta);
--accent-h: 261;
--accent-s: 85%;
--accent-l: 79%;
--canvas-color: 187, 154, 247 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--orange);
--code-builtin: var(--color-cyan);
--code-comment: var(--comment);
--code-definition: var(--color-blue);
--code-keyword: var(--color-purple);
--code-operator: var(--color-cyan);
--code-property: var(--blue);
--code-parentheses: var(--fg-dark);
--code-string: var(--color-green);
--code-value: var(--color-orange);
--code-variable: var(--fg);
}

.color-scheme-tokyo-night-moon {
--bg: #222436;
--bg-dark: #1e2030;
--bg-highlight: #2f334d;
--blue: #82aaff;
--blue0: #3e68d7;
--blue1: #65bcff;
--blue2: #0db9d7;
--blue5: #89ddff;
--blue6: #b4f9f8;
--blue7: #394b70;
--comment: #636da6;
--cyan: #86e1fc;
--dark3: #545c7e;
--dark5: #737aa2;
--fg: #c8d3f5;
--fg-dark: #828bb8;
--fg-gutter: #3b4261;
--green: #c3e88d;
--green1: #4fd6be;
--green2: #41a6b5;
--magenta: #c099ff;
--magenta2: #ff007c;
--orange: #ff966c;
--purple: #fca7ea;
--red: #ff757f;
--red1: #c53b53;
--teal: #4fd6be;
--terminal-black: #444a73;
--yellow: #ffc777;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--purple);
--color-pink: pink;
--background-primary: var(--bg);
--background-secondary: var(--bg-dark);
--selection-background-color: var(--bg-highlight);
--border-color-primary: var(--fg-gutter);
--border-color-secondary: var(--fg-gutter);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--fg-gutter);
--text-color-muted-light: var(--fg-dark);
--accent-color-dark: var(--magenta);
--accent-color-light: var(--blue);
--accent-color-hover: var(--purple);
--accent-h: 263;
--accent-s: 100%;
--accent-l: 80%;
--canvas-color: 192, 153, 255 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--orange);
--code-builtin: var(--color-cyan);
--code-comment: var(--comment);
--code-definition: var(--color-blue);
--code-keyword: var(--color-purple);
--code-operator: var(--color-cyan);
--code-property: var(--blue);
--code-parentheses: var(--fg-dark);
--code-string: var(--color-green);
--code-value: var(--color-orange);
--code-variable: var(--fg);
}

.color-scheme-tokyo-night-storm {
--bg: #24283b;
--bg-dark: #1f2335;
--bg-highlight: #363a4a;
--blue: #7aa2f7;
--blue0: #3d59a1;
--blue1: #2ac3de;
--blue2: #0db9d7;
--blue5: #89ddff;
--blue6: #b4f9f8;
--blue7: #394b70;
--comment: #565f89;
--cyan: #7dcfff;
--dark3: #545c7e;
--dark5: #737aa2;
--fg: #c0caf5;
--fg-dark: #a9b1d6;
--fg-gutter: #3b4261;
--green: #9ece6a;
--green1: #73daca;
--green2: #41a6b5;
--magenta: #bb9af7;
--magenta2: #ff007c;
--orange: #ff9e64;
--purple: #9d7cd8;
--red: #f7768e;
--red1: #db4b4b;
--teal: #1abc9c;
--terminal-black: #414868;
--yellow: #e0af68;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--purple);
--color-pink: pink;
--background-primary: var(--bg);
--background-secondary: var(--bg-dark);
--selection-background-color: var(--bg-highlight);
--border-color-primary: var(--fg-gutter);
--border-color-secondary: var(--fg-gutter);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--fg-gutter);
--text-color-muted-light: var(--fg-dark);
--accent-color-dark: var(--purple);
--accent-color-light: var(--blue);
--accent-color-hover: var(--magenta);
--accent-h: 261;
--accent-s: 85%;
--accent-l: 79%;
--canvas-color: 187, 154, 247 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--orange);
--code-builtin: var(--color-cyan);
--code-comment: var(--comment);
--code-definition: var(--color-blue);
--code-keyword: var(--color-purple);
--code-operator: var(--color-cyan);
--code-property: var(--blue);
--code-parentheses: var(--fg-dark);
--code-string: var(--color-green);
--code-value: var(--color-orange);
--code-variable: var(--fg);
}`,
      light: `.color-scheme-tokyo-night-day {
--bg: #d5d6db;
--bg-dark: #cbccd1;
--bg-highlight: #b5b9c9;
--blue: #77a0f7;
--blue0: #7890dd;
--blue1: #23a8c0;
--blue2: #0baeca;
--blue5: #0098bb;
--blue6: #4c8988;
--blue7: #92a6d5;
--comment: #848cb5;
--cyan: #009cd0;
--dark3: #8990b3;
--dark5: #68709a;
--fg: #4c505e;
--fg-dark: #8d98c9;
--fg-gutter: #a8aecb;
--green: #799f50;
--green1: #519c91;
--green2: #48b5c6;
--magenta: #b28af6;
--magenta2: #d20065;
--orange: #e97c00;
--purple: #7847bd;
--red: #f77e94;
--red1: #c64343;
--teal: #18b495;
--terminal-black: #a1a6c5;
--yellow: #ba9155;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--purple);
--color-pink: pink;
--background-primary: var(--bg);
--background-secondary: var(--bg-dark);
--selection-background-color: var(--bg-highlight);
--border-color-primary: var(--fg-gutter);
--border-color-secondary: var(--fg-gutter);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--fg-gutter);
--text-color-muted-light: var(--fg-dark);
--accent-color-dark: var(--purple);
--accent-color-light: var(--blue);
--accent-color-hover: var(--magenta);
--accent-h: 265;
--accent-s: 47%;
--accent-l: 51%;
--canvas-color: 120, 71, 189 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--orange);
--code-builtin: var(--color-cyan);
--code-comment: var(--comment);
--code-definition: var(--color-blue);
--code-keyword: var(--color-purple);
--code-operator: var(--color-cyan);
--code-property: var(--blue);
--code-parentheses: var(--fg-dark);
--code-string: var(--color-green);
--code-value: var(--color-orange);
--code-variable: var(--fg);
}`,
    },
    "color-scheme-tokyo-night-moon": {
      dark: `.color-scheme-tokyo-night-moon {
--bg: #222436;
--bg-dark: #1e2030;
--bg-highlight: #2f334d;
--blue: #82aaff;
--blue0: #3e68d7;
--blue1: #65bcff;
--blue2: #0db9d7;
--blue5: #89ddff;
--blue6: #b4f9f8;
--blue7: #394b70;
--comment: #636da6;
--cyan: #86e1fc;
--dark3: #545c7e;
--dark5: #737aa2;
--fg: #c8d3f5;
--fg-dark: #828bb8;
--fg-gutter: #3b4261;
--green: #c3e88d;
--green1: #4fd6be;
--green2: #41a6b5;
--magenta: #c099ff;
--magenta2: #ff007c;
--orange: #ff966c;
--purple: #fca7ea;
--red: #ff757f;
--red1: #c53b53;
--teal: #4fd6be;
--terminal-black: #444a73;
--yellow: #ffc777;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--purple);
--color-pink: pink;
--background-primary: var(--bg);
--background-secondary: var(--bg-dark);
--selection-background-color: var(--bg-highlight);
--border-color-primary: var(--fg-gutter);
--border-color-secondary: var(--fg-gutter);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--fg-gutter);
--text-color-muted-light: var(--fg-dark);
--accent-color-dark: var(--magenta);
--accent-color-light: var(--blue);
--accent-color-hover: var(--purple);
--accent-h: 263;
--accent-s: 100%;
--accent-l: 80%;
--canvas-color: 192, 153, 255 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--orange);
--code-builtin: var(--color-cyan);
--code-comment: var(--comment);
--code-definition: var(--color-blue);
--code-keyword: var(--color-purple);
--code-operator: var(--color-cyan);
--code-property: var(--blue);
--code-parentheses: var(--fg-dark);
--code-string: var(--color-green);
--code-value: var(--color-orange);
--code-variable: var(--fg);
}`,
    },
    "color-scheme-tokyo-night-storm": {
      dark: `.color-scheme-tokyo-night-storm {
--bg: #24283b;
--bg-dark: #1f2335;
--bg-highlight: #363a4a;
--blue: #7aa2f7;
--blue0: #3d59a1;
--blue1: #2ac3de;
--blue2: #0db9d7;
--blue5: #89ddff;
--blue6: #b4f9f8;
--blue7: #394b70;
--comment: #565f89;
--cyan: #7dcfff;
--dark3: #545c7e;
--dark5: #737aa2;
--fg: #c0caf5;
--fg-dark: #a9b1d6;
--fg-gutter: #3b4261;
--green: #9ece6a;
--green1: #73daca;
--green2: #41a6b5;
--magenta: #bb9af7;
--magenta2: #ff007c;
--orange: #ff9e64;
--purple: #9d7cd8;
--red: #f7768e;
--red1: #db4b4b;
--teal: #1abc9c;
--terminal-black: #414868;
--yellow: #e0af68;
--color-red: var(--red);
--color-orange: var(--orange);
--color-yellow: var(--yellow);
--color-green: var(--green);
--color-cyan: var(--cyan);
--color-blue: var(--blue);
--color-purple: var(--purple);
--color-pink: pink;
--background-primary: var(--bg);
--background-secondary: var(--bg-dark);
--selection-background-color: var(--bg-highlight);
--border-color-primary: var(--fg-gutter);
--border-color-secondary: var(--fg-gutter);
--text-color: var(--fg);
--text-color-accent: white;
--text-color-muted-dark: var(--fg-gutter);
--text-color-muted-light: var(--fg-dark);
--accent-color-dark: var(--purple);
--accent-color-light: var(--blue);
--accent-color-hover: var(--magenta);
--accent-h: 261;
--accent-s: 85%;
--accent-l: 79%;
--canvas-color: 187, 154, 247 !important;
--code-important: var(--color-yellow);
--code-boolean: var(--orange);
--code-builtin: var(--color-cyan);
--code-comment: var(--comment);
--code-definition: var(--color-blue);
--code-keyword: var(--color-purple);
--code-operator: var(--color-cyan);
--code-property: var(--blue);
--code-parentheses: var(--fg-dark);
--code-string: var(--color-green);
--code-value: var(--color-orange);
--code-variable: var(--fg);
}`,
    },
  },
};
