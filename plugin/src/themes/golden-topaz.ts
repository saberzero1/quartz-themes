import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "golden-topaz",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lucida-handwriting", "monaco"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-strong: #786b54;
  --allow-1: #E1B87F;
  --aqua: #61C8B9;
  --background-accent: #786b54;
  --background-blockquote-dark: #786b540d;
  --background-blue: #2f5264;
  --background-brown: #493a3a;
  --background-gray: #535353;
  --background-green: #32503e;
  --background-modifier-border: var(--color-base-30, rgba(0, 0, 0, 0.1));
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: var(--color-red, #007672);
  --background-modifier-error-hover: var(--color-red, #D1CCBD);
  --background-modifier-error-rgb: var(--color-red-rgb, 155,67,67);
  --background-modifier-form-field: var(--color-base-25, #007672);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #007672);
  --background-modifier-success: var(--color-green, #E1B87F);
  --background-orange: #53422f;
  --background-pink: #533b4a;
  --background-primary: var(--color-base-00, #353231);
  --background-primary-alt: var(--color-base-10, #00767224);
  --background-purple: #443f57;
  --background-red: #683c3c;
  --background-search-result: #786b54;
  --background-secondary: var(--color-base-20, #383433);
  --background-secondary-alt: var(--color-base-30, #353231);
  --background-yellow: #585536;
  --bases-cards-background: var(--background-primary, #353231);
  --bases-cards-cover-background: var(--background-primary-alt, #00767224);
  --bases-embed-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --bases-group-heading-property-color: var(--text-muted, #a29c90);
  --bases-table-border-color: var(--table-border-color, #c0c0c0);
  --bases-table-cell-background-active: var(--background-primary, #353231);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #00767224);
  --bases-table-group-background: var(--background-primary-alt, #00767224);
  --bases-table-header-background: var(--background-primary, #353231);
  --bases-table-header-color: var(--text-muted, #a29c90);
  --bases-table-summary-background: var(--background-primary, #353231);
  --blockquote-border-color: var(--interactive-accent, #007672);
  --blue: #198cff;
  --calendar-week-background-color: #007672;
  --calendar-week-color: #E1B87F;
  --calendar-week-hover: #786b54;
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
  --canvas-background: var(--background-primary, #353231);
  --canvas-card-label-color: var(--text-faint, rgb(121, 121, 121));
  --caret-color: var(--text-normal, #a29c90);
  --checkbox-border-color: var(--text-faint, rgb(121, 121, 121));
  --checkbox-border-color-hover: var(--text-muted, #a29c90);
  --checkbox-color: var(--interactive-accent, #007672);
  --checkbox-color-hover: var(--interactive-accent-hover, #E1B87F);
  --checkbox-marker-color: var(--background-primary, #353231);
  --checklist-done-color: var(--text-muted, #a29c90);
  --code-background: var(--background-primary-alt, #00767224);
  --code-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --code-comment: var(--text-faint, rgb(121, 121, 121));
  --code-normal: var(--text-normal, #a29c90);
  --code-punctuation: var(--text-muted, #a29c90);
  --collapse-icon-color: var(--text-faint, rgb(121, 121, 121));
  --collapse-icon-color-collapsed: var(--text-accent, #E1B87F);
  --color-specification: #E1B87F;
  --dark: var(--text-normal, var(--color-base-100, #a29c90));
  --darkblue: #007aff;
  --darkgray: var(--text-normal, var(--color-base-100, #a29c90));
  --darkgreen: #007672;
  --day-planner-dot: #786b54;
  --day-planner-item-hover: #EFDBB2;
  --day-planner-line: #786b54;
  --day-planner-pie: #007672;
  --day-planner-timeline: #269894;
  --divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --divider-color-hover: var(--interactive-accent, #007672);
  --dropdown-background: var(--interactive-normal, #007672);
  --dropdown-background-hover: var(--interactive-hover, #E1B87F);
  --embed-color: #786b540d;
  --event-item-color1: #007672;
  --event-item-color10: #136664;
  --event-item-color2: #136664;
  --event-item-color3: #105553;
  --event-item-color4: #0D4a48;
  --event-item-color5: #0b3f3d;
  --event-item-color6: #093634;
  --event-item-color7: #0b3f3d;
  --event-item-color8: #0D4a48;
  --event-item-color9: #105553;
  --file-header-background: var(--background-primary, #353231);
  --file-header-background-focused: var(--background-primary, #353231);
  --flair-background: var(--interactive-normal, #007672);
  --flair-color: var(--text-normal, #a29c90);
  --folder-title: #007672;
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-size-code: 0.9375em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-code: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.125em;
  --font-size-file-header-title: 0.9375em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.8125em;
  --font-size-h1: 1.5625em;
  --font-size-h2: 1.4375em;
  --font-size-h3: 1.3125em;
  --font-size-h4: 1.1875em;
  --font-size-h5: 1.0625em;
  --font-size-h6: 0.9375em;
  --font-size-latex: 1.25em;
  --font-size-list: 1em;
  --font-size-obsidian-titlebar: 0.75em;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-tag: 1em;
  --font-size-vault-name: 0.875em;
  --footnote-divider-color: var(--metadata-divider-color, rgba(0, 0, 0, 0.1));
  --footnote-id-color: var(--text-muted, #a29c90);
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(121, 121, 121));
  --graph-arrow: #EFDBB2;
  --graph-attach: #E1B87F;
  --graph-circle: #EFDBB2;
  --graph-node: var(--text-muted, #a29c90);
  --graph-node-focused: var(--text-accent, #E1B87F);
  --graph-node-unresolved: var(--text-faint, rgb(121, 121, 121));
  --graph-text: var(--text-normal, #a29c90);
  --graph-text-color: #a29c90;
  --graph-unresolved: #E1B87F;
  --graphtag: #007672;
  --gray: var(--text-muted, var(--color-base-70, #a29c90));
  --gray-1: #353231;
  --gray-2: #786b54;
  --green: #0f9d58;
  --h1-color: #D1CCBD;
  --h2-color: #D1CCBD;
  --h3-color: #D1CCBD;
  --h4-color: #D1CCBD;
  --h5-color: #D1CCBD;
  --h6-color: #D1CCBD;
  --header-color: #f1a634d0;
  --heading-formatting: var(--text-faint, rgb(121, 121, 121));
  --hr-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --icon-color: var(--text-muted, #a29c90);
  --icon-color-active: var(--text-accent, #E1B87F);
  --icon-color-focused: var(--text-normal, #a29c90);
  --icon-color-hover: var(--text-muted, #a29c90);
  --inline-title-color: var(--h1-color, #D1CCBD);
  --input-date-separator: var(--text-faint, rgb(121, 121, 121));
  --input-placeholder-color: var(--text-faint, rgb(121, 121, 121));
  --interactive-accent: var(--color-accent, #007672);
  --interactive-accent-hover: var(--color-accent-1, #E1B87F);
  --interactive-accent-rgb: 45, 135, 211;
  --interactive-hover: var(--color-base-35, #E1B87F);
  --interactive-normal: var(--color-base-30, #007672);
  --light: var(--background-primary, var(--color-base-00, #353231));
  --light-yellow: #E1B87F;
  --lightgray: var(--background-secondary, var(--color-base-20, #383433));
  --link-color: var(--text-accent, #E1B87F);
  --link-color-hover: var(--text-accent-hover, #786b54);
  --link-external-color: var(--text-accent, #E1B87F);
  --link-external-color-hover: var(--text-accent-hover, #786b54);
  --link-unresolved-color: var(--text-accent, #E1B87F);
  --list-marker-color: var(--text-faint, rgb(121, 121, 121));
  --list-marker-color-collapsed: var(--text-accent, #E1B87F);
  --list-marker-color-hover: var(--text-muted, #a29c90);
  --list-ol-block-color: #a29c90;
  --list-ol-hover: #007672;
  --list-ol-number-color: #a29c90;
  --list-ul-block-color: #007672;
  --list-ul-disc-color: #E1B87F;
  --list-ul-hover: #EFDBB2;
  --mark-highlight: #007672;
  --menu-background: var(--background-secondary, #383433);
  --mermaid-active-task-color: #007672;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --mermaid-seq-dia-color: #E1B87F;
  --metadata-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --metadata-divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --metadata-input-text-color: var(--text-normal, #a29c90);
  --metadata-label-text-color: var(--text-muted, #a29c90);
  --metadata-label-text-color-hover: var(--text-muted, #a29c90);
  --modal-background: var(--background-primary, #353231);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(121, 121, 121));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(121, 121, 121));
  --nav-heading-color: var(--text-normal, #a29c90);
  --nav-heading-color-collapsed: var(--text-faint, rgb(121, 121, 121));
  --nav-heading-color-collapsed-hover: var(--text-muted, #a29c90);
  --nav-heading-color-hover: var(--text-normal, #a29c90);
  --nav-item-color: var(--text-muted, #a29c90);
  --nav-item-color-active: var(--text-normal, #a29c90);
  --nav-item-color-highlighted: var(--text-accent, #E1B87F);
  --nav-item-color-hover: var(--text-normal, #a29c90);
  --nav-item-color-selected: var(--text-normal, #a29c90);
  --nav-tag-color: var(--text-faint, rgb(121, 121, 121));
  --nav-tag-color-active: var(--text-muted, #a29c90);
  --nav-tag-color-hover: var(--text-muted, #a29c90);
  --note-cloze: #E1B87F;
  --note-important: #007672;
  --orange: #f9944c;
  --panel-border-color: #353231;
  --pdf-background: var(--background-primary, #353231);
  --pdf-page-background: var(--background-primary, #353231);
  --pdf-sidebar-background: var(--background-primary, #353231);
  --pill-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --pill-color: var(--text-muted, #a29c90);
  --pill-color-hover: var(--text-normal, #a29c90);
  --pill-color-remove: var(--text-faint, rgb(121, 121, 121));
  --pill-color-remove-hover: var(--text-accent, #E1B87F);
  --prompt-background: var(--background-primary, #353231);
  --purple: #ab7fe6;
  --raised-background: var(--blur-background, color-mix(in srgb, #007672 65%, transparent) linear-gradient(#007672, color-mix(in srgb, #007672 65%, transparent)));
  --red: #f97065;
  --red-1: #ff4a4a;
  --ribbon-background: var(--background-secondary, #383433);
  --ribbon-background-collapsed: var(--background-primary, #353231);
  --search-clear-button-color: var(--text-muted, #a29c90);
  --search-icon-color: var(--text-muted, #a29c90);
  --search-result-background: var(--background-primary, #353231);
  --search-result-file-title-color: #007672;
  --search-text: #007672;
  --secondary: var(--text-accent, var(--color-accent-1, #E1B87F));
  --setting-group-heading-color: var(--text-normal, #a29c90);
  --setting-items-background: var(--background-primary-alt, #00767224);
  --setting-items-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #a29c90);
  --shiki-code-background: var(--code-background, #00767224);
  --shiki-code-comment: var(--text-faint, rgb(121, 121, 121));
  --shiki-code-normal: var(--text-muted, #a29c90);
  --shiki-code-punctuation: var(--text-muted, #a29c90);
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --shiki-gutter-text-color: var(--text-faint, rgb(121, 121, 121));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #a29c90);
  --shiki-highlight-neutral: var(--shiki-code-normal, #a29c90);
  --shiki-terminal-dots-color: var(--text-faint, rgb(121, 121, 121));
  --slider-track-background: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --stag1: #cf0000;
  --stag2: #cf7c00;
  --stag3: #00a71c;
  --status-bar-background: var(--background-secondary, #383433);
  --status-bar-border-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  --status-bar-text-color: var(--text-muted, #a29c90);
  --stickies-color-1: #007672;
  --stickies-color-2: #E1B87F;
  --suggestion-background: var(--background-primary, #353231);
  --tab-background-active: var(--background-primary, #353231);
  --tab-container-background: var(--background-secondary, #383433);
  --tab-outline-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  --tab-switcher-background: var(--background-secondary, #383433);
  --tab-text-color: var(--text-faint, rgb(121, 121, 121));
  --tab-text-color-active: var(--text-muted, #a29c90);
  --tab-text-color-focused: var(--text-muted, #a29c90);
  --tab-text-color-focused-active: var(--text-muted, #a29c90);
  --tab-text-color-focused-active-current: var(--text-normal, #a29c90);
  --tab-text-color-focused-highlighted: var(--text-accent, #E1B87F);
  --table-add-button-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --table-background-color: #353231;
  --table-background-color-odd: #353231;
  --table-border-color: var(--background-modifier-border, #c0c0c0);
  --table-drag-handle-background-active: var(--table-selection-border-color, #007672);
  --table-drag-handle-color: var(--text-faint, rgb(121, 121, 121));
  --table-drag-handle-color-active: var(--text-on-accent, #E1B87F);
  --table-header-border-color: var(--table-border-color, #c0c0c0);
  --table-header-color: var(--text-normal, #a29c90);
  --table-hover-color: #efdbb217;
  --table-hover-raw-color: #353231;
  --table-hover-thead-color: #efdbb2e3;
  --table-selection-border-color: var(--interactive-accent, #007672);
  --table-thead-background-color: #786b54;
  --tag-color: var(--text-accent, #E1B87F);
  --tag-color-hover: var(--text-accent, #E1B87F);
  --tag1: #007672;
  --tag2: #786b54;
  --tag3: #aa7f39cc;
  --tag4: #3C4855;
  --tag5: #674712;
  --tag6: #60616f;
  --tag7: #7f7272;
  --tag8: #2F3546;
  --tag9: #393c44;
  --tape-color: #007672;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #786b54));
  --text-accent: var(--color-accent-1, #E1B87F);
  --text-accent-hover: var(--color-accent-2, #786b54);
  --text-blue: #8ca1ff;
  --text-brown: #be9684;
  --text-em-color: #E1B87F;
  --text-error: var(--color-red, #007672);
  --text-error-hover: #E1B87F;
  --text-faint: var(--color-base-50, rgb(121, 121, 121));
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-gray: #acacac;
  --text-green: #52c7b2;
  --text-muted: var(--color-base-70, #a29c90);
  --text-normal: var(--color-base-100, #a29c90);
  --text-on-accent: #E1B87F;
  --text-orange: #ffa344;
  --text-pink: #ff6bba;
  --text-purple: #b386f1;
  --text-red: #ff4f4f;
  --text-size-cloze: 0.9375em;
  --text-yellow: #ffdc51;
  --theme-color: #E1B87F;
  --theme-color-translucent: #007672;
  --theme-color-translucent-1: #007672;
  --titlebar-background: var(--background-secondary, #383433);
  --titlebar-background-focused: var(--background-secondary-alt, #353231);
  --titlebar-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --titlebar-text-color: var(--text-muted, #a29c90);
  --titlebar-text-color-focused: var(--text-normal, #a29c90);
  --vault-profile-color: var(--text-normal, #a29c90);
  --vault-profile-color-hover: var(--vault-profile-color, #a29c90);
  --yellow: #f7dc01;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #383433);
  background-color: var(--tab-container-background, rgb(56, 52, 51));
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(53, 50, 49));
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(56, 52, 51));
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #383433);
  background-color: var(--tab-container-background, rgb(56, 52, 51));
  border-left-color: rgba(0, 0, 0, 0.1);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body html {
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-monospace: "Consolas", "Monaco", "Source Code Pro", monospace;
  --font-size-code: 0.9375em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-code: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.125em;
  --font-size-file-header-title: 0.9375em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.8125em;
  --font-size-h1: 1.5625em;
  --font-size-h2: 1.4375em;
  --font-size-h3: 1.3125em;
  --font-size-h4: 1.1875em;
  --font-size-h5: 1.0625em;
  --font-size-h6: 0.9375em;
  --font-size-latex: 1.25em;
  --font-size-list: 1em;
  --font-size-obsidian-titlebar: 0.75em;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-tag: 1em;
  --font-size-vault-name: 0.875em;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-size-cloze: 0.9375em;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--accent-strong, rgb(120, 107, 84));
  outline: rgb(120, 107, 84) none 0px;
  text-decoration-color: rgb(120, 107, 84);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(162, 156, 144));
  outline: rgb(162, 156, 144) none 0px;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(162, 156, 144));
  outline: rgb(162, 156, 144) none 0px;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  background-color: rgb(245, 84, 84);
  color: var(--italic-color, rgb(120, 107, 84));
  outline: rgb(120, 107, 84) none 0px;
  text-decoration-color: rgb(120, 107, 84);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--accent-strong, rgb(120, 107, 84));
  outline: rgb(120, 107, 84) none 0px;
  text-decoration-color: rgb(120, 107, 84);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--mark-highlight, rgb(0, 118, 114));
  color: var(--text-normal, rgb(162, 156, 144));
  outline: rgb(162, 156, 144) none 0px;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body del {
  color: rgb(162, 156, 144);
  outline: rgb(162, 156, 144) none 0px;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(121, 121, 121);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(0, 118, 114));
  border-color: rgb(0, 118, 114);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(162, 156, 144));
  outline: rgb(162, 156, 144) none 0px;
  text-decoration-color: rgb(162, 156, 144);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(225, 184, 127));
  outline: rgb(225, 184, 127) none 0px;
  text-decoration-color: rgb(225, 184, 127);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(225, 184, 127));
  outline: rgb(225, 184, 127) none 0px;
  text-decoration-color: rgb(225, 184, 127);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--graph-unresolved, rgb(225, 184, 127));
  outline: rgb(225, 184, 127) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(225, 184, 127));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(162, 156, 144);
  margin-bottom: 6px;
  margin-left: -5px;
  margin-top: 4px;
  padding-left: 6px;
  padding-right: 6px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(162, 156, 144);
  margin-bottom: 6px;
  margin-left: -5px;
  margin-top: 4px;
  padding-left: 6px;
  padding-right: 6px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(121, 121, 121));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--background-blockquote-dark, rgba(120, 107, 84, 0.05));
  color: var(--blockquote-color, rgb(162, 156, 144));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body table {
  color: rgb(162, 156, 144);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: var(--heading-spacing, 0px);
  text-align: justify;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: var(--table-text-color, rgb(162, 156, 144));
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: var(--table-header-color, rgb(162, 156, 144));
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="dark"] body thead {
  background-color: var(--table-thead-background-color, rgb(120, 107, 84));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(0, 118, 114, 0.14));
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: var(--code-normal, rgb(120, 107, 84));
  font-family: var(--font-family-preview-edit-code, Consolas, Monaco, monospace);
  padding-bottom: 2.4px;
  padding-left: 4.8px;
  padding-right: 4.8px;
  padding-top: 2.4px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(0, 118, 114, 0.14));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(162, 156, 144);
  text-align: justify;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #00767224);
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  text-align: justify;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(209, 204, 189);
  border-left-color: rgb(209, 204, 189);
  border-right-color: rgb(209, 204, 189);
  border-top-color: rgb(209, 204, 189);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgba(0, 118, 114, 0.14));
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: var(--text-muted, rgb(162, 156, 144));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(0, 118, 114);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(162, 156, 144);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 50, 49);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 50, 49);
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
  background-color: rgb(102, 102, 102);
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
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(162, 156, 144);
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
  background-color: rgb(0, 118, 114);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: var(--text-normal, rgb(162, 156, 144));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(53, 50, 49));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(162, 156, 144);
  outline: rgb(162, 156, 144) none 0px;
  text-decoration-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-1, rgb(0, 118, 114));
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(56, 52, 51);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--theme-color-translucent-1, rgb(0, 118, 114));
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-1, rgb(0, 118, 114));
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #E1B87F);
  --pill-color-hover: var(--tag-color-hover, #E1B87F);
  --pill-color-remove: var(--tag-color, #E1B87F);
  --pill-color-remove-hover: var(--tag-color-hover, #E1B87F);
  color: var(--pill-color, rgb(225, 184, 127));
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(225, 184, 127);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(209, 204, 189);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(209, 204, 189);
  border-right-color: rgb(209, 204, 189);
  border-top-color: rgb(209, 204, 189);
  color: var(--h1-color, rgb(209, 204, 189));
  font-family: var(--font-family-h1, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h1, 25px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h1-letter-spacing, -0.375px);
  line-height: var(--h1-line-height, 32.5px);
  padding-bottom: 1px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(209, 204, 189));
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: rgb(209, 204, 189);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(209, 204, 189);
  border-right-color: rgb(209, 204, 189);
  border-top-color: rgb(209, 204, 189);
  color: var(--h2-color, rgb(209, 204, 189));
  font-family: var(--font-family-h2, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h2, 23px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.253px);
  line-height: var(--h2-line-height, 29.9px);
  padding-bottom: 1px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(209, 204, 189);
  border-left-color: rgb(209, 204, 189);
  border-right-color: rgb(209, 204, 189);
  border-top-color: rgb(209, 204, 189);
  color: var(--inline-title-color, rgb(209, 204, 189));
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: rgb(209, 204, 189);
  border-left-color: rgb(209, 204, 189);
  border-right-color: rgb(209, 204, 189);
  border-top-color: rgb(209, 204, 189);
  color: var(--h3-color, rgb(209, 204, 189));
  font-family: var(--font-family-h3, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h3, 21px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.168px);
  line-height: var(--h3-line-height, 27.3px);
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(209, 204, 189);
  border-left-color: rgb(209, 204, 189);
  border-right-color: rgb(209, 204, 189);
  border-top-color: rgb(209, 204, 189);
  color: var(--h4-color, rgb(209, 204, 189));
  font-family: var(--font-family-h4, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h4, 19px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h4-letter-spacing, -0.095px);
  line-height: var(--h4-line-height, 26.6px);
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(209, 204, 189);
  border-left-color: rgb(209, 204, 189);
  border-right-color: rgb(209, 204, 189);
  border-top-color: rgb(209, 204, 189);
  color: var(--h5-color, rgb(209, 204, 189));
  font-family: var(--font-family-h5, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h5, 17px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.034px);
  line-height: var(--h5-line-height, 25.5px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(209, 204, 189);
  border-left-color: rgb(209, 204, 189);
  border-right-color: rgb(209, 204, 189);
  border-top-color: rgb(209, 204, 189);
  color: var(--h6-color, rgb(209, 204, 189));
  font-family: var(--font-family-h6, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h6, 15px);
  line-height: var(--h6-line-height, 22.5px);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-normal, rgb(162, 156, 144));
  font-family: var(--font-family-folder-file-title, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-normal, rgb(162, 156, 144));
  font-family: var(--font-family-folder-file-title, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--nav-item-weight, 600);
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
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 600);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: var(--icon-color, rgb(162, 156, 144));
}`,
    footer: `html[saved-theme="dark"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-background, rgb(56, 52, 51));
  border-bottom-color: rgb(53, 50, 49);
  border-bottom-width: 1px;
  border-left-color: rgb(53, 50, 49);
  border-right-color: rgb(53, 50, 49);
  border-right-width: 1px;
  border-top-color: rgb(53, 50, 49);
  color: var(--text-muted, rgb(162, 156, 144));
  padding-bottom: 0px;
  padding-left: 20px;
  padding-top: 0px;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(162, 156, 144);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-muted, rgb(162, 156, 144));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(162, 156, 144);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-muted, rgb(162, 156, 144));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: var(--icon-color, rgb(162, 156, 144));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(162, 156, 144);
  stroke: rgb(162, 156, 144);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(121, 121, 121));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(162, 156, 144));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(56, 52, 51));
  border-color: rgb(162, 156, 144);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(192, 192, 192);
  color: var(--table-header-color, rgb(162, 156, 144));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: var(--text-muted, rgb(162, 156, 144));
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-color: var(--tag-color, #E1B87F);
  --pill-color-hover: var(--tag-color-hover, #E1B87F);
  --pill-color-remove: var(--tag-color, #E1B87F);
  --pill-color-remove-hover: var(--tag-color-hover, #E1B87F);
  color: var(--pill-color, rgb(225, 184, 127));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(53, 50, 49));
  color: var(--text-normal, rgb(162, 156, 144));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(56, 52, 51));
  border-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(53, 50, 49));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(162, 156, 144);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body .navigation-progress {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-background, rgb(56, 52, 51));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgba(0, 0, 0, 0);
  color: var(--text-normal, rgb(162, 156, 144));
  font-size: var(--font-size-file-header-title, 12.1875px);
  font-weight: 600;
  line-height: 15.8438px;
  padding-right: 6px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: var(--text-normal, rgb(162, 156, 144));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(0, 118, 114, 0.14));
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: var(--code-normal, rgb(162, 156, 144));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body sub {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body summary {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body sup {
  color: rgb(162, 156, 144);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag1, rgb(0, 118, 114));
  border-bottom-color: rgb(241, 241, 241);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(241, 241, 241);
  border-right-color: rgb(241, 241, 241);
  border-top-color: rgb(241, 241, 241);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: var(--tag-color, rgb(241, 241, 241));
}`,
  },
  light: {
    base: `:root:root {
  --accent-strong: #5667a4;
  --allow-1: #4c5064;
  --aqua: #63e2fd;
  --background-accent: #e6eff4;
  --background-blue: #ddebf1;
  --background-brown: #e9e5e3;
  --background-gray: #ebeced;
  --background-green: #ddedea;
  --background-modifier-border: var(--color-base-30, rgba(0, 0, 0, 0.1));
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: var(--color-red, #4c5064);
  --background-modifier-error-hover: var(--color-red, #4c5064);
  --background-modifier-error-rgb: var(--color-red-rgb, 230, 135, 135);
  --background-modifier-form-field: var(--color-base-00, #fbf0d2);
  --background-modifier-form-field-highlighted: #e6eff4;
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #fbf0d2);
  --background-modifier-success: var(--color-green, #fbf0d2);
  --background-orange: #faebdd;
  --background-pink: #f4dfeb;
  --background-primary: var(--color-base-00, #dddbc7);
  --background-primary-alt: var(--color-base-10, #fbf0d221);
  --background-purple: #eae4f2;
  --background-red: #ffe3e3;
  --background-search-result: rgba(0, 0, 0, 0.1);
  --background-secondary: var(--color-base-20, #dddbc7);
  --background-secondary-alt: var(--color-base-05, rgba(0, 0, 0, 0.1));
  --background-yellow: #fbf3db;
  --bases-cards-background: var(--background-primary, #dddbc7);
  --bases-cards-cover-background: var(--background-primary-alt, #fbf0d221);
  --bases-embed-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --bases-group-heading-property-color: var(--text-muted, #4c5064);
  --bases-table-border-color: var(--table-border-color, #4c5064);
  --bases-table-cell-background-active: var(--background-primary, #dddbc7);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #fbf0d221);
  --bases-table-group-background: var(--background-primary-alt, #fbf0d221);
  --bases-table-header-background: var(--background-primary, #dddbc7);
  --bases-table-header-color: var(--text-muted, #4c5064);
  --bases-table-summary-background: var(--background-primary, #dddbc7);
  --blockquote-border-color: var(--interactive-accent, #4c5064);
  --blue: #4285f4;
  --blue-green: #00b0b5;
  --calendar-week-background-color: #e6eff4;
  --calendar-week-color: #4c5064;
  --calendar-week-hover: #4c5064;
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
  --canvas-background: var(--background-primary, #dddbc7);
  --canvas-card-label-color: var(--text-faint, #4c5064);
  --caret-color: var(--text-normal, #000000);
  --checkbox-border-color: var(--text-faint, #4c5064);
  --checkbox-border-color-hover: var(--text-muted, #4c5064);
  --checkbox-color: var(--interactive-accent, #4c5064);
  --checkbox-color-hover: var(--interactive-accent-hover, #e6eff4);
  --checkbox-marker-color: var(--background-primary, #dddbc7);
  --checklist-done-color: var(--text-muted, #4c5064);
  --code-background: var(--background-primary-alt, #fbf0d221);
  --code-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --code-comment: var(--text-faint, #4c5064);
  --code-normal: var(--text-normal, #000000);
  --code-punctuation: var(--text-muted, #4c5064);
  --collapse-icon-color: var(--text-faint, #4c5064);
  --collapse-icon-color-collapsed: var(--text-accent, #4c5064);
  --color-specification: #e6eff4;
  --dark: var(--text-normal, var(--color-base-100, #000000));
  --darkblue: #5667a4;
  --darkgray: var(--text-normal, var(--color-base-100, #000000));
  --darkgreen: #1a8b8d;
  --day-planner-dot: #e6eff4;
  --day-planner-item-hover: #4c5064;
  --day-planner-line: #7db9ff;
  --day-planner-pie: #4c5064;
  --day-planner-timeline: #7db9ff;
  --divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --divider-color-hover: var(--interactive-accent, #4c5064);
  --dropdown-background: var(--interactive-normal, #dddbc7);
  --dropdown-background-hover: var(--interactive-hover, #e6eff4);
  --embed-color: #fbf0d221;
  --event-item-color1: #77aff1;
  --event-item-color10: #6da1dd;
  --event-item-color2: #6da1dd;
  --event-item-color3: #6292cb;
  --event-item-color4: #5883b4;
  --event-item-color5: #4e749f;
  --event-item-color6: #44658b;
  --event-item-color7: #4e749f;
  --event-item-color8: #5883b4;
  --event-item-color9: #6292cb;
  --file-header-background: var(--background-primary, #dddbc7);
  --file-header-background-focused: var(--background-primary, #dddbc7);
  --flair-background: var(--interactive-normal, #dddbc7);
  --flair-color: var(--text-normal, #000000);
  --folder-title: #4c5064;
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-size-code: 0.9375em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-code: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.125em;
  --font-size-file-header-title: 0.9375em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.8125em;
  --font-size-h1: 1.5625em;
  --font-size-h2: 1.4375em;
  --font-size-h3: 1.3125em;
  --font-size-h4: 1.1875em;
  --font-size-h5: 1.0625em;
  --font-size-h6: 0.9375em;
  --font-size-latex: 1.25em;
  --font-size-list: 1em;
  --font-size-obsidian-titlebar: 0.75em;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-tag: 1em;
  --font-size-vault-name: 0.875em;
  --footnote-divider-color: var(--metadata-divider-color, rgba(0, 0, 0, 0.1));
  --footnote-id-color: var(--text-muted, #4c5064);
  --footnote-id-color-no-occurrences: var(--text-faint, #4c5064);
  --graph-arrow: #5667a4;
  --graph-attach: #4c5064;
  --graph-circle: #5667a4;
  --graph-node: var(--text-muted, #4c5064);
  --graph-node-focused: var(--text-accent, #4c5064);
  --graph-node-unresolved: var(--text-faint, #4c5064);
  --graph-text: var(--text-normal, #000000);
  --graph-text-color: #000000;
  --graph-unresolved: #4c5064;
  --graphtag: #4c5064;
  --gray: var(--text-muted, var(--color-base-70, #4c5064));
  --gray-1: #a6a7a8;
  --gray-2: #808080;
  --green: #0f9d58;
  --h1-color: #000000;
  --h2-color: #000000;
  --h3-color: #000000;
  --h4-color: #000000;
  --h5-color: #000000;
  --h6-color: #000000;
  --header-color: #E1B87F;
  --heading-formatting: var(--text-faint, #4c5064);
  --hr-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --icon-color: var(--text-muted, #4c5064);
  --icon-color-active: var(--text-accent, #4c5064);
  --icon-color-focused: var(--text-normal, #000000);
  --icon-color-hover: var(--text-muted, #4c5064);
  --inline-title-color: var(--h1-color, #000000);
  --input-date-separator: var(--text-faint, #4c5064);
  --input-placeholder-color: var(--text-faint, #4c5064);
  --interactive-accent: var(--color-accent-1, #4c5064);
  --interactive-accent-hover: var(--color-accent-2, #e6eff4);
  --interactive-accent-rgb: 70, 142, 235;
  --interactive-hover: var(--color-base-10, #e6eff4);
  --interactive-normal: var(--color-base-00, #dddbc7);
  --light: var(--background-primary, var(--color-base-00, #dddbc7));
  --light-purple: #b77dca;
  --light-yellow: #ffe168;
  --lightgray: var(--background-secondary, var(--color-base-20, #dddbc7));
  --link-color: var(--text-accent, #4c5064);
  --link-color-hover: var(--text-accent-hover, #4c5064);
  --link-external-color: var(--text-accent, #4c5064);
  --link-external-color-hover: var(--text-accent-hover, #4c5064);
  --link-unresolved-color: var(--text-accent, #4c5064);
  --list-marker-color: var(--text-faint, #4c5064);
  --list-marker-color-collapsed: var(--text-accent, #4c5064);
  --list-marker-color-hover: var(--text-muted, #4c5064);
  --list-ol-block-color: #4c5064;
  --list-ol-hover: #fbf0d2;
  --list-ol-number-color: #4c5064;
  --list-ul-block-color: #4c5064;
  --list-ul-disc-color: #4c5064;
  --list-ul-hover: #fbf0d2;
  --mark-highlight: #e6eff4;
  --menu-background: var(--background-secondary, #dddbc7);
  --mermaid-active-task-color: #e6eff4;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --mermaid-seq-dia-color: #59a0e2;
  --metadata-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --metadata-divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --metadata-input-text-color: var(--text-normal, #000000);
  --metadata-label-text-color: var(--text-muted, #4c5064);
  --metadata-label-text-color-hover: var(--text-muted, #4c5064);
  --modal-background: var(--background-primary, #dddbc7);
  --nav-collapse-icon-color: var(--collapse-icon-color, #4c5064);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #4c5064);
  --nav-heading-color: var(--text-normal, #000000);
  --nav-heading-color-collapsed: var(--text-faint, #4c5064);
  --nav-heading-color-collapsed-hover: var(--text-muted, #4c5064);
  --nav-heading-color-hover: var(--text-normal, #000000);
  --nav-item-color: var(--text-muted, #4c5064);
  --nav-item-color-active: var(--text-normal, #000000);
  --nav-item-color-highlighted: var(--text-accent, #4c5064);
  --nav-item-color-hover: var(--text-normal, #000000);
  --nav-item-color-selected: var(--text-normal, #000000);
  --nav-tag-color: var(--text-faint, #4c5064);
  --nav-tag-color-active: var(--text-muted, #4c5064);
  --nav-tag-color-hover: var(--text-muted, #4c5064);
  --note-cloze: #000000;
  --note-important: #4c5064;
  --orange: #ff7622;
  --panel-border-color: #dddbc7;
  --pdf-background: var(--background-primary, #dddbc7);
  --pdf-page-background: var(--background-primary, #dddbc7);
  --pdf-sidebar-background: var(--background-primary, #dddbc7);
  --pill-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --pill-color: var(--text-muted, #4c5064);
  --pill-color-hover: var(--text-normal, #000000);
  --pill-color-remove: var(--text-faint, #4c5064);
  --pill-color-remove-hover: var(--text-accent, #4c5064);
  --prompt-background: var(--background-primary, #dddbc7);
  --purple: #a23ef7;
  --raised-background: var(--blur-background, color-mix(in srgb, #dddbc7 65%, transparent) linear-gradient(#dddbc7, color-mix(in srgb, #dddbc7 65%, transparent)));
  --red: #db4437;
  --red-1: #a63b58;
  --ribbon-background: var(--background-secondary, #dddbc7);
  --ribbon-background-collapsed: var(--background-primary, #dddbc7);
  --search-clear-button-color: var(--text-muted, #4c5064);
  --search-icon-color: var(--text-muted, #4c5064);
  --search-result-background: var(--background-primary, #dddbc7);
  --search-result-file-title-color: #4c5064;
  --search-text: #4c5064;
  --secondary: var(--text-accent, var(--color-accent, #4c5064));
  --setting-group-heading-color: var(--text-normal, #000000);
  --setting-items-background: var(--background-primary-alt, #fbf0d221);
  --setting-items-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #4c5064);
  --shiki-code-background: var(--code-background, #fbf0d221);
  --shiki-code-comment: var(--text-faint, #4c5064);
  --shiki-code-normal: var(--text-muted, #4c5064);
  --shiki-code-punctuation: var(--text-muted, #4c5064);
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --shiki-gutter-text-color: var(--text-faint, #4c5064);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #4c5064);
  --shiki-highlight-neutral: var(--shiki-code-normal, #4c5064);
  --shiki-terminal-dots-color: var(--text-faint, #4c5064);
  --slider-track-background: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --stag1: #ff0000;
  --stag2: #ff9900;
  --stag3: #00a030;
  --status-bar-background: var(--background-secondary, #dddbc7);
  --status-bar-border-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  --status-bar-text-color: var(--text-muted, #4c5064);
  --stickies-color-1: #5667a4;
  --stickies-color-2: #007672;
  --suggestion-background: var(--background-primary, #dddbc7);
  --tab-background-active: var(--background-primary, #dddbc7);
  --tab-container-background: var(--background-secondary, #dddbc7);
  --tab-outline-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  --tab-switcher-background: var(--background-secondary, #dddbc7);
  --tab-text-color: var(--text-faint, #4c5064);
  --tab-text-color-active: var(--text-muted, #4c5064);
  --tab-text-color-focused: var(--text-muted, #4c5064);
  --tab-text-color-focused-active: var(--text-muted, #4c5064);
  --tab-text-color-focused-active-current: var(--text-normal, #000000);
  --tab-text-color-focused-highlighted: var(--text-accent, #4c5064);
  --table-add-button-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --table-background-color: #dddbc7;
  --table-background-color-odd: #dddbc7;
  --table-border-color: var(--background-modifier-border, #4c5064);
  --table-drag-handle-background-active: var(--table-selection-border-color, #4c5064);
  --table-drag-handle-color: var(--text-faint, #4c5064);
  --table-drag-handle-color-active: var(--text-on-accent, #FBF0D0);
  --table-header-border-color: var(--table-border-color, #4c5064);
  --table-header-color: var(--text-normal, #000000);
  --table-hover-color: #fbf0d28a;
  --table-hover-raw-color: #dddbc7;
  --table-hover-thead-color: #fbf0d28a;
  --table-selection-border-color: var(--interactive-accent, #4c5064);
  --table-thead-background-color: #dddbc7;
  --tag-color: var(--text-accent, #4c5064);
  --tag-color-hover: var(--text-accent, #4c5064);
  --tag1: #5667a4;
  --tag2: #007672;
  --tag3: #3f73b8;
  --tag4: #608ec1;
  --tag5: #786b54;
  --tag6: #6da1dd;
  --tag7: #a29c90;
  --tag8: #1a8b8d;
  --tag9: #a6a7a8;
  --tape-color: #786b54;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #4c5064));
  --text-accent: var(--color-accent, #4c5064);
  --text-accent-hover: var(--color-accent-2, #4c5064);
  --text-blue: #0083bb;
  --text-brown: #855a46;
  --text-error: var(--color-red, #4c5064);
  --text-error-hover: #4c5064;
  --text-faint: var(--color-base-50, #4c5064);
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-gray: #37352f99;
  --text-green: #00927f;
  --text-muted: var(--color-base-70, #4c5064);
  --text-normal: var(--color-base-100, #000000);
  --text-on-accent: #FBF0D0;
  --text-orange: #d9730d;
  --text-pink: #c40075;
  --text-purple: #5d1fb9;
  --text-red: #ff4343;
  --text-size-cloze: 0.9375em;
  --text-yellow: #d4a300;
  --theme-color: #4c5064;
  --theme-color-translucent: #4c5064;
  --theme-color-translucent-1: #fbf0d2;
  --titlebar-background: var(--background-secondary, #dddbc7);
  --titlebar-background-focused: var(--background-secondary-alt, rgba(0, 0, 0, 0.1));
  --titlebar-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --titlebar-text-color: var(--text-muted, #4c5064);
  --titlebar-text-color-focused: var(--text-normal, #000000);
  --vault-profile-color: var(--text-normal, #000000);
  --vault-profile-color-hover: var(--vault-profile-color, #000000);
  --yellow: #f4b400;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #dddbc7);
  background-color: var(--tab-container-background, rgb(221, 219, 199));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(221, 219, 199));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(221, 219, 199));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #dddbc7);
  background-color: var(--tab-container-background, rgb(221, 219, 199));
  border-left-color: rgba(0, 0, 0, 0.1);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body html {
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-monospace: "Consolas", "Monaco", "Source Code Pro", monospace;
  --font-size-code: 0.9375em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-code: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.125em;
  --font-size-file-header-title: 0.9375em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.8125em;
  --font-size-h1: 1.5625em;
  --font-size-h2: 1.4375em;
  --font-size-h3: 1.3125em;
  --font-size-h4: 1.1875em;
  --font-size-h5: 1.0625em;
  --font-size-h6: 0.9375em;
  --font-size-latex: 1.25em;
  --font-size-list: 1em;
  --font-size-obsidian-titlebar: 0.75em;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-tag: 1em;
  --font-size-vault-name: 0.875em;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-size-cloze: 0.9375em;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--accent-strong, rgb(86, 103, 164));
  outline: rgb(86, 103, 164) none 0px;
  text-decoration-color: rgb(86, 103, 164);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  background-color: rgb(245, 84, 84);
  color: var(--italic-color, rgb(86, 103, 164));
  outline: rgb(86, 103, 164) none 0px;
  text-decoration-color: rgb(86, 103, 164);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--accent-strong, rgb(86, 103, 164));
  outline: rgb(86, 103, 164) none 0px;
  text-decoration-color: rgb(86, 103, 164);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--mark-highlight, rgb(230, 239, 244));
  color: var(--text-normal, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(76, 80, 100));
  border-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(76, 80, 100));
  outline: rgb(76, 80, 100) none 0px;
  text-decoration-color: rgb(76, 80, 100);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(76, 80, 100));
  outline: rgb(76, 80, 100) none 0px;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(76, 80, 100));
  outline: rgb(76, 80, 100) none 0px;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--graph-unresolved, rgb(76, 80, 100));
  outline: rgb(76, 80, 100) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(76, 80, 100));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
  margin-bottom: 6px;
  margin-left: -5px;
  margin-top: 4px;
  padding-left: 6px;
  padding-right: 6px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
  margin-bottom: 6px;
  margin-left: -5px;
  margin-top: 4px;
  padding-left: 6px;
  padding-right: 6px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(76, 80, 100));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--background-primary-alt, rgba(251, 240, 210, 0.13));
  color: var(--blockquote-color, rgb(0, 0, 0));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: var(--heading-spacing, 0px);
  text-align: justify;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: var(--table-text-color, rgb(0, 0, 0));
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: var(--table-header-color, rgb(0, 0, 0));
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="light"] body thead {
  background-color: var(--table-thead-background-color, rgb(221, 219, 199));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(251, 240, 210, 0.13));
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: var(--code-normal, rgba(219, 78, 78, 0.8));
  font-family: var(--font-family-preview-edit-code, Consolas, Monaco, monospace);
  padding-bottom: 2.4px;
  padding-left: 4.8px;
  padding-right: 4.8px;
  padding-top: 2.4px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(251, 240, 210, 0.13));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  text-align: justify;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #fbf0d221);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  text-align: justify;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgba(251, 240, 210, 0.13));
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: var(--text-muted, rgb(76, 80, 100));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(76, 80, 100);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(221, 219, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(221, 219, 199);
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(0, 0, 0);
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
  background-color: rgb(251, 240, 210);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(221, 219, 199));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-1, rgb(251, 240, 210));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(221, 219, 199);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--theme-color-translucent-1, rgb(251, 240, 210));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-1, rgb(251, 240, 210));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #4c5064);
  --pill-color-hover: var(--tag-color-hover, #4c5064);
  --pill-color-remove: var(--tag-color, #4c5064);
  --pill-color-remove-hover: var(--tag-color-hover, #4c5064);
  color: var(--pill-color, rgb(76, 80, 100));
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--h1-color, rgb(0, 0, 0));
  font-family: var(--font-family-h1, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h1, 25px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h1-letter-spacing, -0.375px);
  line-height: var(--h1-line-height, 32.5px);
  padding-bottom: 1px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--h2-color, rgb(0, 0, 0));
  font-family: var(--font-family-h2, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h2, 23px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.253px);
  line-height: var(--h2-line-height, 29.9px);
  padding-bottom: 1px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--inline-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--h3-color, rgb(0, 0, 0));
  font-family: var(--font-family-h3, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h3, 21px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.168px);
  line-height: var(--h3-line-height, 27.3px);
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--h4-color, rgb(0, 0, 0));
  font-family: var(--font-family-h4, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h4, 19px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h4-letter-spacing, -0.095px);
  line-height: var(--h4-line-height, 26.6px);
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--h5-color, rgb(0, 0, 0));
  font-family: var(--font-family-h5, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h5, 17px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.034px);
  line-height: var(--h5-line-height, 25.5px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--h6-color, rgb(0, 0, 0));
  font-family: var(--font-family-h6, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--font-size-h6, 15px);
  line-height: var(--h6-line-height, 22.5px);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-normal, rgb(0, 0, 0));
  font-family: var(--font-family-folder-file-title, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-normal, rgb(0, 0, 0));
  font-family: var(--font-family-folder-file-title, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--nav-item-weight, 600);
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

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 600);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: var(--icon-color, rgb(76, 80, 100));
}`,
    footer: `html[saved-theme="light"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-background, rgb(221, 219, 199));
  border-bottom-color: rgb(221, 219, 199);
  border-bottom-width: 1px;
  border-left-color: rgb(221, 219, 199);
  border-right-color: rgb(221, 219, 199);
  border-right-width: 1px;
  border-top-color: rgb(221, 219, 199);
  color: var(--text-muted, rgb(76, 80, 100));
  padding-bottom: 0px;
  padding-left: 20px;
  padding-top: 0px;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(76, 80, 100);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-muted, rgb(76, 80, 100));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(76, 80, 100);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-muted, rgb(76, 80, 100));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: var(--icon-color, rgb(76, 80, 100));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(76, 80, 100);
  stroke: rgb(76, 80, 100);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(76, 80, 100));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(221, 219, 199));
  border-color: rgb(0, 0, 0);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(76, 80, 100);
  color: var(--table-header-color, rgb(0, 0, 0));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: var(--text-muted, rgb(76, 80, 100));
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(76, 80, 100);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, #4c5064);
  --pill-color-hover: var(--tag-color-hover, #4c5064);
  --pill-color-remove: var(--tag-color, #4c5064);
  --pill-color-remove-hover: var(--tag-color-hover, #4c5064);
  color: var(--pill-color, rgb(76, 80, 100));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(76, 80, 100);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(221, 219, 199));
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(221, 219, 199));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0.1));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(0, 0, 0);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .navigation-progress {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-background, rgb(221, 219, 199));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
  font-size: var(--font-size-file-header-title, 12.1875px);
  font-weight: 600;
  line-height: 15.8438px;
  padding-right: 6px;
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: var(--text-normal, rgb(76, 80, 100));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(251, 240, 210, 0.13));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--code-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag1, rgb(86, 103, 164));
  border-bottom-color: rgb(241, 241, 241);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(241, 241, 241);
  border-right-color: rgb(241, 241, 241);
  border-top-color: rgb(241, 241, 241);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: var(--tag-color, rgb(241, 241, 241));
}`,
  },
};
