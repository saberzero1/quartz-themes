import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.gruvbox-medium",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-color-dark: var(--neutral-green, #98971a);
  --accent-color-hover: var(--bright-green, #b8bb26);
  --accent-color-light: var(--neutral-yellow, #d79921);
  --accent-h: 60;
  --accent-l: 35%;
  --accent-s: 71%;
  --background-modifier-border: var(--border-color-primary, #504945);
  --background-modifier-border-focus: var(--border-color-secondary, #665c54);
  --background-modifier-border-hover: var(--border-color-secondary, #665c54);
  --background-modifier-error: var(--color-red, #cc241d);
  --background-modifier-error-hover: var(--color-red, #cc241d);
  --background-modifier-form-field: var(--background-secondary, #32302f);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #32302f);
  --background-modifier-hover: var(--selection-background-color, #665c54);
  --background-modifier-success: var(--color-green, #98971a);
  --background-primary: var(--dark0, #282828);
  --background-secondary: var(--dark0-soft, #32302f);
  --bases-cards-background: var(--background-primary, #282828);
  --bases-embed-border-color: var(--background-modifier-border, #504945);
  --bases-group-heading-property-color: var(--text-muted, #ebdbb2);
  --bases-table-border-color: var(--table-border-color, #504945);
  --bases-table-cell-background-active: var(--background-primary, #282828);
  --bases-table-cell-background-selected: var(--table-selection, #665c54);
  --bases-table-header-background: var(--background-primary, #282828);
  --bases-table-header-background-hover: var(--background-modifier-hover, #665c54);
  --bases-table-header-color: var(--text-muted, #ebdbb2);
  --bases-table-summary-background: var(--background-primary, #282828);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #665c54);
  --blockquote-border-color: var(--accent-color-dark, #98971a);
  --bold-color: var(--accent-color-light, #d79921);
  --border-color: var(--border-color-primary, #504945);
  --border-color-primary: var(--dark2, #504945);
  --border-color-secondary: var(--dark3, #665c54);
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --canvas-background: var(--background-primary, #282828);
  --canvas-card-label-color: var(--text-faint, #665c54);
  --canvas-color: 152, 151, 26;
  --caret-color: var(--text-normal, #ebdbb2);
  --checkbox-border-color: var(--text-color-muted-light, #665c54);
  --checkbox-border-color-hover: var(--accent-color-hover, #b8bb26);
  --checkbox-color: var(--accent-color-dark, #98971a);
  --checkbox-color-hover: var(--accent-color-hover, #b8bb26);
  --checkbox-marker-color: var(--background-primary, #282828);
  --checklist-done-color: var(--text-color-muted-light, #665c54);
  --code-background: var(--background-secondary, #32302f);
  --code-boolean: var(--bright-purple, #d3869b);
  --code-border-color: var(--background-modifier-border, #504945);
  --code-bracket-background: var(--background-modifier-hover, #665c54);
  --code-builtin: var(--bright-orange, #fe8019);
  --code-comment: var(--text-faint, #665c54);
  --code-definition: var(--light1, #ebdbb2);
  --code-function: var(--color-yellow, #d79921);
  --code-important: var(--color-yellow, #d79921);
  --code-keyword: var(--bright-red, #fb4934);
  --code-normal: var(--text-normal, #ebdbb2);
  --code-operator: var(--bright-orange, #fe8019);
  --code-parentheses: var(--bright-orange, #fe8019);
  --code-property: var(--bright-green, #b8bb26);
  --code-punctuation: var(--text-muted, #ebdbb2);
  --code-string: var(--bright-green, #b8bb26);
  --code-tag: var(--color-red, #cc241d);
  --code-value: var(--bright-purple, #d3869b);
  --code-variable: var(--bright-blue, #83a598);
  --collapse-icon-color: var(--text-faint, #665c54);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(60, 71%, 35%));
  --color-blue: var(--neutral-blue, #458588);
  --color-cyan: var(--neutral-aqua, #689d6a);
  --color-green: var(--neutral-green, #98971a);
  --color-orange: var(--neutral-orange, #d65d0e);
  --color-pink: pink;
  --color-purple: var(--neutral-purple, #b16286);
  --color-red: var(--neutral-red, #cc241d);
  --color-yellow: var(--neutral-yellow, #d79921);
  --dark: var(--text-normal, var(--text-color, #ebdbb2));
  --dark-aqua: #49503b;
  --dark-aqua-hard: #3e4934;
  --dark-aqua-soft: #525742;
  --dark-green: #62693e;
  --dark-green-hard: #5a633a;
  --dark-green-soft: #686d43;
  --dark-red: #722529;
  --dark-red-hard: #792329;
  --dark-red-soft: #7b2c2f;
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal, var(--text-color, #ebdbb2));
  --divider-color: var(--background-modifier-border, #504945);
  --divider-color-hover: var(--interactive-accent, hsl(60, 71%, 35%));
  --dropdown-background: var(--interactive-normal, #32302f);
  --dropdown-background-hover: var(--interactive-hover, #504945);
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: var(--background-primary, #282828);
  --file-header-background-focused: var(--background-primary, #282828);
  --flair-background: var(--interactive-normal, #32302f);
  --flair-color: var(--text-normal, #ebdbb2);
  --footnote-divider-color: var(--metadata-divider-color, #504945);
  --footnote-id-color: var(--text-muted, #ebdbb2);
  --footnote-id-color-no-occurrences: var(--text-faint, #665c54);
  --footnote-input-background-active: var(--metadata-input-background-active, #665c54);
  --graph-line: var(--border-color-secondary, #665c54);
  --graph-node: var(--accent, hsl(60, 71%, 35%));
  --graph-node-attachment: var(--accent-color-dark, #98971a);
  --graph-node-focused: var(--accent-color-hover, #b8bb26);
  --graph-node-tag: var(--accent-color-light, #d79921);
  --graph-node-unresolved: var(--border-color-primary, #504945);
  --graph-text: var(--text-color, #ebdbb2);
  --gray: #928374;
  --h1-color: var(--color-purple, #b16286);
  --h2-color: var(--color-blue, #458588);
  --h3-color: var(--color-green, #98971a);
  --h4-color: var(--color-yellow, #d79921);
  --h5-color: var(--color-orange, #d65d0e);
  --h6-color: var(--color-red, #cc241d);
  --heading-formatting: var(--text-faint, #665c54);
  --highlight: var(--text-highlight-bg, var(--accent, hsl(60, 71%, 35%)));
  --hr-color: var(--text-color-muted-dark, #504945);
  --icon-color: var(--text-muted, #ebdbb2);
  --icon-color-active: var(--text-accent, hsl(60, 71%, 35%));
  --icon-color-focused: var(--text-normal, #ebdbb2);
  --icon-color-hover: var(--text-muted, #ebdbb2);
  --indentation-guide-color: var(--text-color-muted-dark, #504945);
  --indentation-guide-color-active: var(--text-color-muted-light, #665c54);
  --inline-title-color: var(--text-color, #ebdbb2);
  --input-date-separator: var(--text-faint, #665c54);
  --input-placeholder-color: var(--text-faint, #665c54);
  --interactive-accent: var(--accent, hsl(60, 71%, 35%));
  --interactive-accent-hover: var(--color-accent-1, hsl(57, 72.42%, 40.25%));
  --interactive-accent-hsl: var(--color-accent-hsl, 60, 71%, 35%);
  --interactive-hover: var(--border-color-primary, #504945);
  --interactive-normal: var(--background-secondary, #32302f);
  --italic-color: var(--accent-color-light, #d79921);
  --light: var(--background-primary, var(--dark0, #282828));
  --light-aqua: #e8e5b5;
  --light-aqua-hard: #e6e9c1;
  --light-aqua-soft: #e1dbac;
  --light-green: #d5d39b;
  --light-green-hard: #d3d6a5;
  --light-green-soft: #cecb94;
  --light-red: #fc9487;
  --light-red-hard: #fc9690;
  --light-red-soft: #f78b7f;
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightgray: var(--background-secondary, var(--dark0-soft, #32302f));
  --link-color: var(--accent-color-dark, #98971a);
  --link-color-hover: var(--accent-color-hover, #b8bb26);
  --link-external-color: var(--accent-color-dark, #98971a);
  --link-external-color-hover: var(--accent-color-hover, #b8bb26);
  --list-marker-color: var(--accent-color-dark, #98971a);
  --list-marker-color-collapsed: var(--text-accent, hsl(60, 71%, 35%));
  --list-marker-color-hover: var(--text-muted, #ebdbb2);
  --menu-background: var(--background-secondary, #32302f);
  --menu-border-color: var(--background-modifier-border-hover, #665c54);
  --metadata-border-color: var(--background-modifier-border, #504945);
  --metadata-divider-color: var(--background-modifier-border, #504945);
  --metadata-input-background-active: var(--background-modifier-hover, #665c54);
  --metadata-input-text-color: var(--text-color, #ebdbb2);
  --metadata-label-background-active: var(--background-modifier-hover, #665c54);
  --metadata-label-text-color: var(--text-color, #ebdbb2);
  --metadata-label-text-color-hover: var(--text-muted, #ebdbb2);
  --metadata-property-background-active: var(--background-modifier-hover, #665c54);
  --modal-background: var(--background-secondary, #32302f);
  --modal-border-color: var(--border-color-primary, #504945);
  --nav-collapse-icon-color: var(--border-color-secondary, #665c54);
  --nav-collapse-icon-color-collapsed: var(--border-color-secondary, #665c54);
  --nav-heading-color: var(--text-normal, #ebdbb2);
  --nav-heading-color-collapsed: var(--text-faint, #665c54);
  --nav-heading-color-collapsed-hover: var(--text-muted, #ebdbb2);
  --nav-heading-color-hover: var(--text-normal, #ebdbb2);
  --nav-indentation-guide-color: var(--border-color-secondary, #665c54);
  --nav-item-background-active: var(--accent-color-dark, #98971a);
  --nav-item-background-hover: var(--selection-background-color, #665c54);
  --nav-item-color: var(--text-color, #ebdbb2);
  --nav-item-color-active: var(--text-color-accent, white);
  --nav-item-color-highlighted: var(--accent-color-light, #d79921);
  --nav-item-color-hover: var(--text-color-accent, white);
  --nav-item-color-selected: var(--text-normal, red);
  --nav-tag-color: var(--text-faint, #665c54);
  --nav-tag-color-active: var(--text-muted, #ebdbb2);
  --nav-tag-color-hover: var(--text-muted, #ebdbb2);
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --pdf-background: var(--background-primary, #282828);
  --pdf-page-background: var(--background-primary, #282828);
  --pdf-sidebar-background: var(--background-primary, #282828);
  --pill-border-color: var(--background-modifier-border, #504945);
  --pill-border-color-hover: var(--background-modifier-border-hover, #665c54);
  --pill-color: var(--text-muted, #ebdbb2);
  --pill-color-hover: var(--text-normal, #ebdbb2);
  --pill-color-remove: var(--text-faint, #665c54);
  --pill-color-remove-hover: var(--text-accent, hsl(60, 71%, 35%));
  --prompt-background: var(--background-primary, #282828);
  --prompt-border-color: var(--border-color-primary, #504945);
  --raised-background: var(--blur-background, color-mix(in srgb, #32302f 65%, transparent) linear-gradient(#32302f, color-mix(in srgb, #32302f 65%, transparent)));
  --ribbon-background: var(--background-secondary, #32302f);
  --ribbon-background-collapsed: var(--background-primary, #282828);
  --search-clear-button-color: var(--text-muted, #ebdbb2);
  --search-icon-color: var(--text-muted, #ebdbb2);
  --search-result-background: var(--background-primary, #282828);
  --secondary: var(--text-accent, var(--accent, hsl(60, 71%, 35%)));
  --selection-background-color: var(--dark3, #665c54);
  --selection-border-color: var(--accent-color-hover, #b8bb26);
  --setting-group-heading-color: var(--text-normal, #ebdbb2);
  --setting-items-border-color: var(--background-modifier-border, #504945);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #ebdbb2);
  --shiki-code-background: var(--code-background, #32302f);
  --shiki-code-comment: var(--text-faint, #665c54);
  --shiki-code-function: var(--color-green, #98971a);
  --shiki-code-important: var(--color-orange, #d65d0e);
  --shiki-code-keyword: var(--color-pink, pink);
  --shiki-code-normal: var(--text-muted, #ebdbb2);
  --shiki-code-property: var(--color-cyan, #689d6a);
  --shiki-code-punctuation: var(--text-muted, #ebdbb2);
  --shiki-code-string: var(--color-yellow, #d79921);
  --shiki-code-value: var(--color-purple, #b16286);
  --shiki-gutter-border-color: var(--background-modifier-border, #504945);
  --shiki-gutter-text-color: var(--text-faint, #665c54);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #ebdbb2);
  --shiki-highlight-neutral: var(--shiki-code-normal, #ebdbb2);
  --shiki-terminal-dots-color: var(--text-faint, #665c54);
  --slider-track-background: var(--background-secondary, #32302f);
  --status-bar-background: var(--background-secondary, #32302f);
  --status-bar-border-color: var(--divider-color, #504945);
  --status-bar-text-color: var(--text-muted, #ebdbb2);
  --suggestion-background: var(--background-primary, #282828);
  --sync-avatar-color-1: var(--color-red, #cc241d);
  --sync-avatar-color-2: var(--color-orange, #d65d0e);
  --sync-avatar-color-3: var(--color-yellow, #d79921);
  --sync-avatar-color-4: var(--color-green, #98971a);
  --sync-avatar-color-5: var(--color-cyan, #689d6a);
  --sync-avatar-color-6: var(--color-blue, #458588);
  --sync-avatar-color-7: var(--color-purple, #b16286);
  --sync-avatar-color-8: var(--color-pink, pink);
  --tab-background-active: var(--background-primary, #282828);
  --tab-container-background: var(--background-secondary, #32302f);
  --tab-divider-color: var(--selection-background-color, #665c54);
  --tab-outline-color: var(--border-color-primary, #504945);
  --tab-switcher-background: var(--background-secondary, #32302f);
  --tab-text-color: var(--border-color-primary, #504945);
  --tab-text-color-active: var(--text-color, #ebdbb2);
  --tab-text-color-focused: var(--text-color, #ebdbb2);
  --tab-text-color-focused-active: var(--text-color, #ebdbb2);
  --tab-text-color-focused-active-current: var(--text-color-accent, white);
  --tab-text-color-focused-highlighted: var(--text-accent, red);
  --table-add-button-border-color: var(--background-modifier-border, #504945);
  --table-border-color: var(--border-color-primary, #504945);
  --table-drag-handle-background-active: var(--table-selection-border-color, #b8bb26);
  --table-drag-handle-color: var(--selection-background-color, #665c54);
  --table-drag-handle-color-active: var(--selection-background-color, #665c54);
  --table-header-border-color: var(--table-border-color, #504945);
  --table-header-color: var(--text-color, #ebdbb2);
  --table-selection: var(--selection-background-color, #665c54);
  --table-selection-border-color: var(--selection-border-color, #b8bb26);
  --tag-background: var(--text-color-muted-dark, #504945);
  --tag-background-hover: var(--text-color-muted-light, #665c54);
  --tag-color: var(--accent-color-dark, #98971a);
  --tag-color-hover: var(--accent-color-dark, #98971a);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, red));
  --text-accent: var(--accent, hsl(60, 71%, 35%));
  --text-accent-hover: var(--color-accent-2, red);
  --text-color: var(--light1, #ebdbb2);
  --text-color-accent: white;
  --text-color-muted-dark: var(--dark2, #504945);
  --text-color-muted-light: var(--dark3, #665c54);
  --text-error: var(--color-red, #cc241d);
  --text-faint: var(--text-color-muted-light, #665c54);
  --text-highlight-bg: var(--accent, hsl(60, 71%, 35%));
  --text-muted: var(--text-color, #ebdbb2);
  --text-normal: var(--text-color, #ebdbb2);
  --text-on-accent: var(--text-color-accent, white);
  --text-on-accent-inverted: var(--background-primary, #282828);
  --text-selection: var(--selection-background-color, #665c54);
  --text-success: var(--color-green, #98971a);
  --text-warning: var(--color-yellow, #d79921);
  --textHighlight: var(--text-highlight-bg, var(--accent, hsl(60, 71%, 35%)));
  --titlebar-background: var(--background-secondary, #32302f);
  --titlebar-background-focused: var(--border-color-primary, #504945);
  --titlebar-border-color: var(--background-modifier-border, #504945);
  --titlebar-text-color: var(--text-muted, #ebdbb2);
  --titlebar-text-color-focused: var(--text-normal, #ebdbb2);
  --toggle-thumb-color: var(--text-color-accent, white);
  --vault-profile-color: var(--text-normal, #ebdbb2);
  --vault-profile-color-hover: var(--vault-profile-color, #ebdbb2);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #32302f);
  background-color: var(--tab-container-background, rgb(50, 48, 47));
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(40, 40, 40));
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(50, 48, 47));
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #32302f);
  background-color: var(--tab-container-background, rgb(50, 48, 47));
  border-left-color: rgb(80, 73, 69);
  color: rgb(235, 219, 178);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(215, 153, 33));
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(215, 153, 33));
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(215, 153, 33));
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(215, 153, 33));
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(153, 153, 26));
  color: var(--text-normal, rgb(235, 219, 178));
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body del {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(235, 219, 178));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(102, 92, 84);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(152, 151, 26));
  border-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(235, 219, 178));
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(152, 151, 26));
  outline: rgb(152, 151, 26) none 0px;
  text-decoration-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(152, 151, 26));
  outline: rgb(152, 151, 26) none 0px;
  text-decoration-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(235, 219, 178));
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: underline rgba(153, 153, 26, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(153, 153, 26, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body dt {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(102, 92, 84));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body table {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: var(--table-text-color, rgb(235, 219, 178));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: var(--table-header-color, rgb(235, 219, 178));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(50, 48, 47));
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: var(--code-normal, rgb(235, 219, 178));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(50, 48, 47));
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #32302f);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(177, 98, 134);
  border-left-color: rgb(177, 98, 134);
  border-right-color: rgb(177, 98, 134);
  border-top-color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(153, 153, 26);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(102, 92, 84);
  border-left-color: rgb(102, 92, 84);
  border-right-color: rgb(102, 92, 84);
  border-top-color: rgb(102, 92, 84);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(102, 92, 84);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(102, 92, 84);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(214, 93, 14);
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
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 157, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(235, 219, 178);
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
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: var(--text-normal, rgb(235, 219, 178));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(40, 40, 40));
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(102, 92, 84));
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(50, 48, 47);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(102, 92, 84));
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(102, 92, 84));
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, #504945);
  --pill-background-hover: var(--tag-background-hover, #665c54);
  --pill-border-color: var(--tag-border-color, hsla(60, 71%, 35%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(60, 71%, 35%, 0.15));
  --pill-color: var(--tag-color, #98971a);
  --pill-color-hover: var(--tag-color-hover, #98971a);
  --pill-color-remove: var(--tag-color, #98971a);
  --pill-color-remove-hover: var(--tag-color-hover, #98971a);
  background-color: var(--pill-background, rgb(80, 73, 69));
  border-bottom-color: rgba(153, 153, 26, 0.15);
  border-left-color: rgba(153, 153, 26, 0.15);
  border-right-color: rgba(153, 153, 26, 0.15);
  border-top-color: rgba(153, 153, 26, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(177, 98, 134));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(235, 219, 178));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(69, 133, 136));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(235, 219, 178));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(152, 151, 26));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(215, 153, 33));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(214, 93, 14));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(204, 36, 29));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(102, 92, 84);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(235, 219, 178));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(235, 219, 178));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(235, 219, 178);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: var(--icon-color, rgb(235, 219, 178));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(50, 48, 47));
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: var(--status-bar-text-color, rgb(235, 219, 178));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(235, 219, 178);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(235, 219, 178));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(235, 219, 178);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(235, 219, 178));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: var(--icon-color, rgb(235, 219, 178));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(235, 219, 178);
  stroke: rgb(235, 219, 178);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(102, 92, 84));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(235, 219, 178));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(50, 48, 47));
  border-color: rgb(235, 219, 178);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(80, 73, 69);
  color: var(--table-header-color, rgb(235, 219, 178));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: var(--text-muted, rgb(235, 219, 178));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, #504945);
  --pill-background-hover: var(--tag-background-hover, #665c54);
  --pill-border-color: var(--tag-border-color, hsla(60, 71%, 35%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(60, 71%, 35%, 0.15));
  --pill-color: var(--tag-color, #98971a);
  --pill-color-hover: var(--tag-color-hover, #98971a);
  --pill-color-remove: var(--tag-color, #98971a);
  --pill-color-remove-hover: var(--tag-color-hover, #98971a);
  background-color: var(--pill-background, rgb(80, 73, 69));
  color: var(--pill-color, rgb(152, 151, 26));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(40, 40, 40));
  color: var(--text-normal, rgb(235, 219, 178));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(50, 48, 47));
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(80, 73, 69));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(235, 219, 178);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(50, 48, 47));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(235, 219, 178));
}

html[saved-theme="dark"] body abbr {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: var(--text-normal, rgb(235, 219, 178));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(50, 48, 47));
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: var(--code-normal, rgb(235, 219, 178));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body sub {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body summary {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body sup {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgb(80, 73, 69));
  border-bottom-color: rgba(153, 153, 26, 0.15);
  border-left-color: rgba(153, 153, 26, 0.15);
  border-right-color: rgba(153, 153, 26, 0.15);
  border-top-color: rgba(153, 153, 26, 0.15);
  color: var(--tag-color, rgb(152, 151, 26));
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-color-dark: var(--neutral-green, #98971a);
  --accent-color-hover: var(--bright-green, #b8bb26);
  --accent-color-light: var(--neutral-yellow, #d79921);
  --accent-h: 60;
  --accent-l: 35%;
  --accent-s: 71%;
  --background-modifier-border: var(--border-color-primary, #d5c4a1);
  --background-modifier-border-focus: var(--border-color-secondary, #bdae93);
  --background-modifier-border-hover: var(--border-color-secondary, #bdae93);
  --background-modifier-error: var(--color-red, #cc241d);
  --background-modifier-error-hover: var(--color-red, #cc241d);
  --background-modifier-form-field: var(--background-secondary, #f2e5bc);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #f2e5bc);
  --background-modifier-hover: var(--selection-background-color, #bdae93);
  --background-modifier-success: var(--color-green, #98971a);
  --background-primary: var(--light0, #fbf1c7);
  --background-secondary: var(--light0-soft, #f2e5bc);
  --bases-cards-background: var(--background-primary, #fbf1c7);
  --bases-embed-border-color: var(--background-modifier-border, #d5c4a1);
  --bases-group-heading-property-color: var(--text-muted, #3c3836);
  --bases-table-border-color: var(--table-border-color, #d5c4a1);
  --bases-table-cell-background-active: var(--background-primary, #fbf1c7);
  --bases-table-cell-background-selected: var(--table-selection, #bdae93);
  --bases-table-header-background: var(--background-primary, #fbf1c7);
  --bases-table-header-background-hover: var(--background-modifier-hover, #bdae93);
  --bases-table-header-color: var(--text-muted, #3c3836);
  --bases-table-summary-background: var(--background-primary, #fbf1c7);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #bdae93);
  --blockquote-border-color: var(--accent-color-dark, #98971a);
  --bold-color: var(--accent-color-light, #d79921);
  --border-color: var(--border-color-primary, #d5c4a1);
  --border-color-primary: var(--light2, #d5c4a1);
  --border-color-secondary: var(--light3, #bdae93);
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --canvas-background: var(--background-primary, #fbf1c7);
  --canvas-card-label-color: var(--text-faint, #bdae93);
  --canvas-color: 152, 151, 26;
  --caret-color: var(--text-normal, #3c3836);
  --checkbox-border-color: var(--text-color-muted-light, #bdae93);
  --checkbox-border-color-hover: var(--accent-color-hover, #b8bb26);
  --checkbox-color: var(--accent-color-dark, #98971a);
  --checkbox-color-hover: var(--accent-color-hover, #b8bb26);
  --checkbox-marker-color: var(--background-primary, #fbf1c7);
  --checklist-done-color: var(--text-color-muted-light, #bdae93);
  --code-background: var(--background-secondary, #f2e5bc);
  --code-boolean: var(--faded-purple, #8f3f71);
  --code-border-color: var(--background-modifier-border, #d5c4a1);
  --code-bracket-background: var(--background-modifier-hover, #bdae93);
  --code-builtin: var(--faded-orange, #af3a03);
  --code-comment: var(--text-faint, #bdae93);
  --code-definition: var(--dark1, #3c3836);
  --code-function: var(--color-yellow, #d79921);
  --code-important: var(--color-yellow, #d79921);
  --code-keyword: var(--faded-red, #9d0006);
  --code-normal: var(--text-normal, #3c3836);
  --code-operator: var(--faded-orange, #af3a03);
  --code-parentheses: var(--faded-orange, #af3a03);
  --code-property: var(--faded-green, #79740e);
  --code-punctuation: var(--text-muted, #3c3836);
  --code-string: var(--faded-green, #79740e);
  --code-tag: var(--color-red, #cc241d);
  --code-value: var(--faded-purple, #8f3f71);
  --code-variable: var(--faded-blue, #076678);
  --collapse-icon-color: var(--text-faint, #bdae93);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(60, 71%, 35%));
  --color-blue: var(--neutral-blue, #458588);
  --color-cyan: var(--neutral-aqua, #689d6a);
  --color-green: var(--neutral-green, #98971a);
  --color-orange: var(--neutral-orange, #d65d0e);
  --color-pink: pink;
  --color-purple: var(--neutral-purple, #b16286);
  --color-red: var(--neutral-red, #cc241d);
  --color-yellow: var(--neutral-yellow, #d79921);
  --dark: var(--text-normal, var(--text-color, #3c3836));
  --dark-aqua: #49503b;
  --dark-aqua-hard: #3e4934;
  --dark-aqua-soft: #525742;
  --dark-green: #62693e;
  --dark-green-hard: #5a633a;
  --dark-green-soft: #686d43;
  --dark-red: #722529;
  --dark-red-hard: #792329;
  --dark-red-soft: #7b2c2f;
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal, var(--text-color, #3c3836));
  --divider-color: var(--background-modifier-border, #d5c4a1);
  --divider-color-hover: var(--interactive-accent, hsl(60, 71%, 35%));
  --dropdown-background: var(--interactive-normal, #f2e5bc);
  --dropdown-background-hover: var(--interactive-hover, #d5c4a1);
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: var(--background-primary, #fbf1c7);
  --file-header-background-focused: var(--background-primary, #fbf1c7);
  --flair-background: var(--interactive-normal, #f2e5bc);
  --flair-color: var(--text-normal, #3c3836);
  --footnote-divider-color: var(--metadata-divider-color, #d5c4a1);
  --footnote-id-color: var(--text-muted, #3c3836);
  --footnote-id-color-no-occurrences: var(--text-faint, #bdae93);
  --footnote-input-background-active: var(--metadata-input-background-active, #bdae93);
  --graph-line: var(--border-color-secondary, #bdae93);
  --graph-node: var(--accent, hsl(60, 71%, 35%));
  --graph-node-attachment: var(--accent-color-dark, #98971a);
  --graph-node-focused: var(--accent-color-hover, #b8bb26);
  --graph-node-tag: var(--accent-color-light, #d79921);
  --graph-node-unresolved: var(--border-color-primary, #d5c4a1);
  --graph-text: var(--text-color, #3c3836);
  --gray: #928374;
  --h1-color: var(--color-purple, #b16286);
  --h2-color: var(--color-blue, #458588);
  --h3-color: var(--color-green, #98971a);
  --h4-color: var(--color-yellow, #d79921);
  --h5-color: var(--color-orange, #d65d0e);
  --h6-color: var(--color-red, #cc241d);
  --heading-formatting: var(--text-faint, #bdae93);
  --highlight: var(--text-highlight-bg, var(--accent, hsl(60, 71%, 35%)));
  --hr-color: var(--text-color-muted-dark, #d5c4a1);
  --icon-color: var(--text-muted, #3c3836);
  --icon-color-active: var(--text-accent, hsl(60, 71%, 35%));
  --icon-color-focused: var(--text-normal, #3c3836);
  --icon-color-hover: var(--text-muted, #3c3836);
  --indentation-guide-color: var(--text-color-muted-dark, #d5c4a1);
  --indentation-guide-color-active: var(--text-color-muted-light, #bdae93);
  --inline-title-color: var(--text-color, #3c3836);
  --input-date-separator: var(--text-faint, #bdae93);
  --input-placeholder-color: var(--text-faint, #bdae93);
  --interactive-accent: var(--accent, hsl(60, 71%, 35%));
  --interactive-accent-hover: var(--color-accent-2, hsl(57, 72.42%, 40.25%));
  --interactive-accent-hsl: var(--color-accent-hsl, 60, 71%, 35%);
  --interactive-hover: var(--border-color-primary, #d5c4a1);
  --interactive-normal: var(--background-secondary, #f2e5bc);
  --italic-color: var(--accent-color-light, #d79921);
  --light: var(--background-primary, var(--light0, #fbf1c7));
  --light-aqua: #e8e5b5;
  --light-aqua-hard: #e6e9c1;
  --light-aqua-soft: #e1dbac;
  --light-green: #d5d39b;
  --light-green-hard: #d3d6a5;
  --light-green-soft: #cecb94;
  --light-red: #fc9487;
  --light-red-hard: #fc9690;
  --light-red-soft: #f78b7f;
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightgray: var(--background-secondary, var(--light0-soft, #f2e5bc));
  --link-color: var(--accent-color-dark, #98971a);
  --link-color-hover: var(--accent-color-hover, #b8bb26);
  --link-external-color: var(--accent-color-dark, #98971a);
  --link-external-color-hover: var(--accent-color-hover, #b8bb26);
  --list-marker-color: var(--accent-color-dark, #98971a);
  --list-marker-color-collapsed: var(--text-accent, hsl(60, 71%, 35%));
  --list-marker-color-hover: var(--text-muted, #3c3836);
  --menu-background: var(--background-secondary, #f2e5bc);
  --menu-border-color: var(--background-modifier-border-hover, #bdae93);
  --metadata-border-color: var(--background-modifier-border, #d5c4a1);
  --metadata-divider-color: var(--background-modifier-border, #d5c4a1);
  --metadata-input-background-active: var(--background-modifier-hover, #bdae93);
  --metadata-input-text-color: var(--text-color, #3c3836);
  --metadata-label-background-active: var(--background-modifier-hover, #bdae93);
  --metadata-label-text-color: var(--text-color, #3c3836);
  --metadata-label-text-color-hover: var(--text-muted, #3c3836);
  --metadata-property-background-active: var(--background-modifier-hover, #bdae93);
  --modal-background: var(--background-secondary, #f2e5bc);
  --modal-border-color: var(--border-color-primary, #d5c4a1);
  --nav-collapse-icon-color: var(--border-color-secondary, #bdae93);
  --nav-collapse-icon-color-collapsed: var(--border-color-secondary, #bdae93);
  --nav-heading-color: var(--text-normal, #3c3836);
  --nav-heading-color-collapsed: var(--text-faint, #bdae93);
  --nav-heading-color-collapsed-hover: var(--text-muted, #3c3836);
  --nav-heading-color-hover: var(--text-normal, #3c3836);
  --nav-indentation-guide-color: var(--border-color-secondary, #bdae93);
  --nav-item-background-active: var(--accent-color-dark, #98971a);
  --nav-item-background-hover: var(--selection-background-color, #bdae93);
  --nav-item-color: var(--text-color, #3c3836);
  --nav-item-color-active: var(--text-color-accent, white);
  --nav-item-color-highlighted: var(--accent-color-light, #d79921);
  --nav-item-color-hover: var(--text-color-accent, white);
  --nav-item-color-selected: var(--text-normal, red);
  --nav-tag-color: var(--text-faint, #bdae93);
  --nav-tag-color-active: var(--text-muted, #3c3836);
  --nav-tag-color-hover: var(--text-muted, #3c3836);
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --pdf-background: var(--background-primary, #fbf1c7);
  --pdf-page-background: var(--background-primary, #fbf1c7);
  --pdf-sidebar-background: var(--background-primary, #fbf1c7);
  --pill-border-color: var(--background-modifier-border, #d5c4a1);
  --pill-border-color-hover: var(--background-modifier-border-hover, #bdae93);
  --pill-color: var(--text-muted, #3c3836);
  --pill-color-hover: var(--text-normal, #3c3836);
  --pill-color-remove: var(--text-faint, #bdae93);
  --pill-color-remove-hover: var(--text-accent, hsl(60, 71%, 35%));
  --prompt-background: var(--background-primary, #fbf1c7);
  --prompt-border-color: var(--border-color-primary, #d5c4a1);
  --raised-background: var(--blur-background, color-mix(in srgb, #fbf1c7 65%, transparent) linear-gradient(#fbf1c7, color-mix(in srgb, #fbf1c7 65%, transparent)));
  --ribbon-background: var(--background-secondary, #f2e5bc);
  --ribbon-background-collapsed: var(--background-primary, #fbf1c7);
  --search-clear-button-color: var(--text-muted, #3c3836);
  --search-icon-color: var(--text-muted, #3c3836);
  --search-result-background: var(--background-primary, #fbf1c7);
  --secondary: var(--text-accent, var(--accent, hsl(60, 71%, 35%)));
  --selection-background-color: var(--light3, #bdae93);
  --selection-border-color: var(--accent-color-hover, #b8bb26);
  --setting-group-heading-color: var(--text-normal, #3c3836);
  --setting-items-border-color: var(--background-modifier-border, #d5c4a1);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #3c3836);
  --shiki-code-background: var(--code-background, #f2e5bc);
  --shiki-code-comment: var(--text-faint, #bdae93);
  --shiki-code-function: var(--color-green, #98971a);
  --shiki-code-important: var(--color-orange, #d65d0e);
  --shiki-code-keyword: var(--color-pink, pink);
  --shiki-code-normal: var(--text-muted, #3c3836);
  --shiki-code-property: var(--color-cyan, #689d6a);
  --shiki-code-punctuation: var(--text-muted, #3c3836);
  --shiki-code-string: var(--color-yellow, #d79921);
  --shiki-code-value: var(--color-purple, #b16286);
  --shiki-gutter-border-color: var(--background-modifier-border, #d5c4a1);
  --shiki-gutter-text-color: var(--text-faint, #bdae93);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #3c3836);
  --shiki-highlight-neutral: var(--shiki-code-normal, #3c3836);
  --shiki-terminal-dots-color: var(--text-faint, #bdae93);
  --slider-track-background: var(--background-secondary, #f2e5bc);
  --status-bar-background: var(--background-secondary, #f2e5bc);
  --status-bar-border-color: var(--divider-color, #d5c4a1);
  --status-bar-text-color: var(--text-muted, #3c3836);
  --suggestion-background: var(--background-primary, #fbf1c7);
  --sync-avatar-color-1: var(--color-red, #cc241d);
  --sync-avatar-color-2: var(--color-orange, #d65d0e);
  --sync-avatar-color-3: var(--color-yellow, #d79921);
  --sync-avatar-color-4: var(--color-green, #98971a);
  --sync-avatar-color-5: var(--color-cyan, #689d6a);
  --sync-avatar-color-6: var(--color-blue, #458588);
  --sync-avatar-color-7: var(--color-purple, #b16286);
  --sync-avatar-color-8: var(--color-pink, pink);
  --tab-background-active: var(--background-primary, #fbf1c7);
  --tab-container-background: var(--background-secondary, #f2e5bc);
  --tab-divider-color: var(--selection-background-color, #bdae93);
  --tab-outline-color: var(--border-color-primary, #d5c4a1);
  --tab-switcher-background: var(--background-secondary, #f2e5bc);
  --tab-text-color: var(--border-color-primary, #d5c4a1);
  --tab-text-color-active: var(--text-color, #3c3836);
  --tab-text-color-focused: var(--text-color, #3c3836);
  --tab-text-color-focused-active: var(--text-color, #3c3836);
  --tab-text-color-focused-active-current: var(--text-normal, #3c3836);
  --tab-text-color-focused-highlighted: var(--text-accent, red);
  --table-add-button-border-color: var(--background-modifier-border, #d5c4a1);
  --table-border-color: var(--border-color-primary, #d5c4a1);
  --table-drag-handle-background-active: var(--table-selection-border-color, #b8bb26);
  --table-drag-handle-color: var(--selection-background-color, #bdae93);
  --table-drag-handle-color-active: var(--selection-background-color, #bdae93);
  --table-header-border-color: var(--table-border-color, #d5c4a1);
  --table-header-color: var(--text-color, #3c3836);
  --table-selection: var(--selection-background-color, #bdae93);
  --table-selection-border-color: var(--selection-border-color, #b8bb26);
  --tag-background: var(--text-color-muted-dark, #d5c4a1);
  --tag-background-hover: var(--text-color-muted-light, #bdae93);
  --tag-color: var(--accent-color-dark, #98971a);
  --tag-color-hover: var(--accent-color-dark, #98971a);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, red));
  --text-accent: var(--accent, hsl(60, 71%, 35%));
  --text-accent-hover: var(--color-accent-2, red);
  --text-color: var(--dark1, #3c3836);
  --text-color-accent: white;
  --text-color-muted-dark: var(--light2, #d5c4a1);
  --text-color-muted-light: var(--light3, #bdae93);
  --text-error: var(--color-red, #cc241d);
  --text-faint: var(--text-color-muted-light, #bdae93);
  --text-highlight-bg: var(--accent, hsl(60, 71%, 35%));
  --text-muted: var(--text-color, #3c3836);
  --text-normal: var(--text-color, #3c3836);
  --text-on-accent: var(--text-color-accent, white);
  --text-on-accent-inverted: var(--background-primary, #fbf1c7);
  --text-selection: var(--selection-background-color, #bdae93);
  --text-success: var(--color-green, #98971a);
  --text-warning: var(--color-yellow, #d79921);
  --textHighlight: var(--text-highlight-bg, var(--accent, hsl(60, 71%, 35%)));
  --titlebar-background: var(--background-secondary, #f2e5bc);
  --titlebar-background-focused: var(--border-color-primary, #d5c4a1);
  --titlebar-border-color: var(--background-modifier-border, #d5c4a1);
  --titlebar-text-color: var(--text-muted, #3c3836);
  --titlebar-text-color-focused: var(--text-normal, #3c3836);
  --toggle-thumb-color: var(--text-color-accent, white);
  --vault-profile-color: var(--text-normal, #3c3836);
  --vault-profile-color-hover: var(--vault-profile-color, #3c3836);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #f2e5bc);
  background-color: var(--tab-container-background, rgb(242, 229, 188));
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(251, 241, 199));
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(242, 229, 188));
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #f2e5bc);
  background-color: var(--tab-container-background, rgb(242, 229, 188));
  border-left-color: rgb(213, 196, 161);
  color: rgb(60, 56, 54);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(215, 153, 33));
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(215, 153, 33));
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(215, 153, 33));
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(215, 153, 33));
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(153, 153, 26));
  color: var(--text-normal, rgb(60, 56, 54));
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body del {
  color: rgb(60, 56, 54);
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(60, 56, 54));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 174, 147);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(152, 151, 26));
  border-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(60, 56, 54));
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(152, 151, 26));
  outline: rgb(152, 151, 26) none 0px;
  text-decoration-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(152, 151, 26));
  outline: rgb(152, 151, 26) none 0px;
  text-decoration-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(60, 56, 54));
  outline: rgb(60, 56, 54) none 0px;
  text-decoration: underline rgba(153, 153, 26, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(153, 153, 26, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body dt {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ol > li {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul > li {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(189, 174, 147));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body table {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--table-text-color, rgb(60, 56, 54));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--table-header-color, rgb(60, 56, 54));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(242, 229, 188));
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--code-normal, rgb(60, 56, 54));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(242, 229, 188));
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body figcaption {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #f2e5bc);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(177, 98, 134);
  border-left-color: rgb(177, 98, 134);
  border-right-color: rgb(177, 98, 134);
  border-top-color: rgb(177, 98, 134);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(153, 153, 26);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(189, 174, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(189, 174, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 241, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 241, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(214, 93, 14);
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
  background-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 157, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 133, 136);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 133, 136);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(177, 98, 134);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(60, 56, 54);
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
  background-color: rgb(242, 229, 188);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--text-normal, rgb(60, 56, 54));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(251, 241, 199));
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(60, 56, 54);
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(189, 174, 147));
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(189, 174, 147));
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(189, 174, 147));
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, #d5c4a1);
  --pill-background-hover: var(--tag-background-hover, #bdae93);
  --pill-border-color: var(--tag-border-color, hsla(60, 71%, 35%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(60, 71%, 35%, 0.15));
  --pill-color: var(--tag-color, #98971a);
  --pill-color-hover: var(--tag-color-hover, #98971a);
  --pill-color-remove: var(--tag-color, #98971a);
  --pill-color-remove-hover: var(--tag-color-hover, #98971a);
  background-color: var(--pill-background, rgb(213, 196, 161));
  border-bottom-color: rgba(153, 153, 26, 0.15);
  border-left-color: rgba(153, 153, 26, 0.15);
  border-right-color: rgba(153, 153, 26, 0.15);
  border-top-color: rgba(153, 153, 26, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(152, 151, 26);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(177, 98, 134));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(60, 56, 54));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(69, 133, 136));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(60, 56, 54));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(152, 151, 26));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(215, 153, 33));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(214, 93, 14));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(204, 36, 29));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(189, 174, 147);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(60, 56, 54));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(60, 56, 54));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(60, 56, 54);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: var(--icon-color, rgb(60, 56, 54));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(242, 229, 188));
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--status-bar-text-color, rgb(60, 56, 54));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(60, 56, 54);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(60, 56, 54));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(60, 56, 54);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(60, 56, 54));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: var(--icon-color, rgb(60, 56, 54));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(60, 56, 54);
  stroke: rgb(60, 56, 54);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(189, 174, 147));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(60, 56, 54));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(251, 241, 199));
  border-color: rgb(60, 56, 54);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(213, 196, 161);
  color: var(--table-header-color, rgb(60, 56, 54));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--text-muted, rgb(60, 56, 54));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, #d5c4a1);
  --pill-background-hover: var(--tag-background-hover, #bdae93);
  --pill-border-color: var(--tag-border-color, hsla(60, 71%, 35%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(60, 71%, 35%, 0.15));
  --pill-color: var(--tag-color, #98971a);
  --pill-color-hover: var(--tag-color-hover, #98971a);
  --pill-color-remove: var(--tag-color, #98971a);
  --pill-color-remove-hover: var(--tag-color-hover, #98971a);
  background-color: var(--pill-background, rgb(213, 196, 161));
  color: var(--pill-color, rgb(152, 151, 26));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(251, 241, 199));
  color: var(--text-normal, rgb(60, 56, 54));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(242, 229, 188));
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(213, 196, 161));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(60, 56, 54);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(242, 229, 188));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(60, 56, 54));
}

html[saved-theme="light"] body abbr {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: var(--text-normal, rgb(60, 56, 54));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(242, 229, 188));
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: var(--code-normal, rgb(60, 56, 54));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body sub {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body summary {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body sup {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgb(213, 196, 161));
  border-bottom-color: rgba(153, 153, 26, 0.15);
  border-left-color: rgba(153, 153, 26, 0.15);
  border-right-color: rgba(153, 153, 26, 0.15);
  border-top-color: rgba(153, 153, 26, 0.15);
  color: var(--tag-color, rgb(152, 151, 26));
}`,
  },
};
