import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "pink-topaz",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lucida-handwriting", "monaco"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-strong: #efe9d9;
  --allow-1: #f93759;
  --aqua: #30daff;
  --background-accent: #e4ba6c;
  --background-blockquote-dark: #292929;
  --background-blue: #2f5264;
  --background-brown: #493a3a;
  --background-gray: #535353;
  --background-green: #32503e;
  --background-modifier-border: var(--color-base-30, #191919);
  --background-modifier-box-shadow: #292929;
  --background-modifier-cover: rgba(0, 0, 0, 0.3);
  --background-modifier-error: var(--color-red, #f93759);
  --background-modifier-error-hover: var(--color-red, #F93758);
  --background-modifier-error-rgb: var(--color-red-rgb, #f93759);
  --background-modifier-form-field: var(--color-base-25, #f39ba0);
  --background-modifier-form-field-highlighted: #e5c7a9;
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #f39ba0);
  --background-modifier-success: var(--color-green, #f93759);
  --background-orange: #53422f;
  --background-pink: #533b4a;
  --background-primary: var(--color-base-00, #212121);
  --background-primary-alt: var(--color-base-10, #f937590d);
  --background-purple: #443f57;
  --background-red: #683c3c;
  --background-search-result: #292929;
  --background-secondary: var(--color-base-20, #242424);
  --background-secondary-alt: var(--color-base-30, #191919);
  --background-yellow: #585536;
  --bases-cards-background: var(--background-primary, #212121);
  --bases-cards-cover-background: var(--background-primary-alt, #f937590d);
  --bases-embed-border-color: var(--background-modifier-border, #191919);
  --bases-group-heading-property-color: var(--text-muted, #efe9d9);
  --bases-table-border-color: var(--table-border-color, #ffebec);
  --bases-table-cell-background-active: var(--background-primary, #212121);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f937590d);
  --bases-table-group-background: var(--background-primary-alt, #f937590d);
  --bases-table-header-background: var(--background-primary, #212121);
  --bases-table-header-color: var(--text-muted, #efe9d9);
  --bases-table-summary-background: var(--background-primary, #212121);
  --blockquote-border-color: var(--interactive-accent, #f39ba0);
  --blue: #00a3b9;
  --calendar-week-background-color: transparent;
  --calendar-week-color: #ffccbc;
  --calendar-week-hover: #f39ba0;
  --canvas-background: var(--background-primary, #212121);
  --canvas-card-label-color: var(--text-faint, #efe9d9);
  --caret-color: var(--text-normal, #efe9d9);
  --checkbox-border-color: var(--text-faint, #efe9d9);
  --checkbox-border-color-hover: var(--text-muted, #efe9d9);
  --checkbox-color: var(--interactive-accent, #f39ba0);
  --checkbox-color-hover: var(--interactive-accent-hover, #f93759);
  --checkbox-marker-color: var(--background-primary, #212121);
  --checklist-done-color: var(--text-muted, #efe9d9);
  --code-background: var(--background-primary-alt, #f937590d);
  --code-border-color: var(--background-modifier-border, #191919);
  --code-comment: var(--text-faint, #efe9d9);
  --code-normal: var(--text-normal, #efe9d9);
  --code-punctuation: var(--text-muted, #efe9d9);
  --collapse-icon-color: var(--text-faint, #efe9d9);
  --collapse-icon-color-collapsed: var(--text-accent, #ffccbc);
  --color-specification: #f93759;
  --dark: var(--text-normal, var(--color-base-100, #efe9d9));
  --darkblue: #0040ff;
  --darkgray: var(--text-normal, var(--color-base-100, #efe9d9));
  --darkgreen: #1bbc9b;
  --day-planner-dot: #ffebec;
  --day-planner-item-hover: #f39ba0;
  --day-planner-line: #f39ba0;
  --day-planner-pie: #ffccbc;
  --day-planner-timeline: #ff9b7c;
  --divider-color: var(--background-modifier-border, #191919);
  --divider-color-hover: var(--interactive-accent, #f39ba0);
  --dropdown-background: var(--interactive-normal, #f39ba0);
  --dropdown-background-hover: var(--interactive-hover, #ffccbc);
  --embed-color: #2929297d;
  --event-item-color1: #ffe4bc;
  --event-item-color10: #ffccbc;
  --event-item-color2: #ffdcbc;
  --event-item-color3: #ffd4bc;
  --event-item-color4: #ffccbc;
  --event-item-color5: #ffc3bc;
  --event-item-color6: #ffbcbc;
  --event-item-color7: #ffbcc4;
  --event-item-color8: #ffbcbc;
  --event-item-color9: #ffc3bc;
  --file-header-background: var(--background-primary, #212121);
  --file-header-background-focused: var(--background-primary, #212121);
  --flair-background: var(--interactive-normal, #f39ba0);
  --flair-color: var(--text-normal, #efe9d9);
  --folder-title: #fff;
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
  --footnote-divider-color: var(--metadata-divider-color, #191919);
  --footnote-id-color: var(--text-muted, #efe9d9);
  --footnote-id-color-no-occurrences: var(--text-faint, #efe9d9);
  --graph-arrow: #ffc3bc;
  --graph-attach: #ffebec;
  --graph-circle: #f39ba0;
  --graph-node: var(--text-muted, #efe9d9);
  --graph-node-focused: var(--text-accent, #ffccbc);
  --graph-node-unresolved: var(--text-faint, #efe9d9);
  --graph-text: var(--text-normal, #efe9d9);
  --graph-text-color: #efe9d9;
  --graph-unresolved: #ffccbc;
  --graphtag: #f39ba0;
  --gray: var(--text-muted, var(--color-base-70, #efe9d9));
  --gray-1: #c9b0b0;
  --gray-2: #b4b1c6;
  --green: #00ffc7;
  --h1-color: #ffccbc;
  --h2-color: #ffccbc;
  --h3-color: #ffccbc;
  --h4-color: #ffccbc;
  --h5-color: #ffccbc;
  --h6-color: #ffccbc;
  --header-color: #f39ba0;
  --heading-formatting: var(--text-faint, #efe9d9);
  --hr-color: var(--background-modifier-border, #191919);
  --icon-color: var(--text-muted, #efe9d9);
  --icon-color-active: var(--text-accent, #ffccbc);
  --icon-color-focused: var(--text-normal, #efe9d9);
  --icon-color-hover: var(--text-muted, #efe9d9);
  --inline-title-color: var(--h1-color, #ffccbc);
  --input-date-separator: var(--text-faint, #efe9d9);
  --input-placeholder-color: var(--text-faint, #efe9d9);
  --interactive-accent: var(--color-accent, #f39ba0);
  --interactive-accent-hover: var(--color-accent-1, #f93759);
  --interactive-accent-rgb: 45, 135, 211;
  --interactive-hover: var(--color-base-35, #ffccbc);
  --interactive-normal: var(--color-base-30, #f39ba0);
  --light: var(--background-primary, var(--color-base-00, #212121));
  --light-yellow: #ffd26c;
  --lightgray: var(--background-secondary, var(--color-base-20, #242424));
  --link-color: var(--text-accent, #ffccbc);
  --link-color-hover: var(--text-accent-hover, #f93759);
  --link-external-color: var(--text-accent, #ffccbc);
  --link-external-color-hover: var(--text-accent-hover, #f93759);
  --link-unresolved-color: var(--text-accent, #ffccbc);
  --list-marker-color: var(--text-faint, #efe9d9);
  --list-marker-color-collapsed: var(--text-accent, #ffccbc);
  --list-marker-color-hover: var(--text-muted, #efe9d9);
  --list-ol-block-color: #f39ba0;
  --list-ol-hover: #ffebec;
  --list-ol-number-color: #ffccbc;
  --list-ul-block-color: #f39ba0;
  --list-ul-disc-color: #f93759;
  --list-ul-hover: #ffebec;
  --mark-highlight: #f93759;
  --menu-background: var(--background-secondary, #242424);
  --mermaid-active-task-color: #F39BA4;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --mermaid-seq-dia-color: #ffebec;
  --metadata-border-color: var(--background-modifier-border, #191919);
  --metadata-divider-color: var(--background-modifier-border, #191919);
  --metadata-input-text-color: var(--text-normal, #efe9d9);
  --metadata-label-text-color: var(--text-muted, #efe9d9);
  --metadata-label-text-color-hover: var(--text-muted, #efe9d9);
  --modal-background: var(--background-primary, #212121);
  --nav-collapse-icon-color: var(--collapse-icon-color, #efe9d9);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #efe9d9);
  --nav-heading-color: var(--text-normal, #efe9d9);
  --nav-heading-color-collapsed: var(--text-faint, #efe9d9);
  --nav-heading-color-collapsed-hover: var(--text-muted, #efe9d9);
  --nav-heading-color-hover: var(--text-normal, #efe9d9);
  --nav-item-color: var(--text-muted, #efe9d9);
  --nav-item-color-active: var(--text-normal, #efe9d9);
  --nav-item-color-highlighted: var(--text-accent, #ffccbc);
  --nav-item-color-hover: var(--text-normal, #efe9d9);
  --nav-item-color-selected: var(--text-normal, #efe9d9);
  --nav-tag-color: var(--text-faint, #efe9d9);
  --nav-tag-color-active: var(--text-muted, #efe9d9);
  --nav-tag-color-hover: var(--text-muted, #efe9d9);
  --note-cloze: #f93759;
  --note-important: #f93759;
  --orange: #f28d61;
  --panel-border-color: #f93759;
  --pdf-background: var(--background-primary, #212121);
  --pdf-page-background: var(--background-primary, #212121);
  --pdf-sidebar-background: var(--background-primary, #212121);
  --pill-border-color: var(--background-modifier-border, #191919);
  --pill-color: var(--text-muted, #efe9d9);
  --pill-color-hover: var(--text-normal, #efe9d9);
  --pill-color-remove: var(--text-faint, #efe9d9);
  --pill-color-remove-hover: var(--text-accent, #ffccbc);
  --prompt-background: var(--background-primary, #212121);
  --purple: #b073ff;
  --raised-background: var(--blur-background, color-mix(in srgb, #f39ba0 65%, transparent) linear-gradient(#f39ba0, color-mix(in srgb, #f39ba0 65%, transparent)));
  --red: #ff9090;
  --red-1: #f93759;
  --ribbon-background: var(--background-secondary, #242424);
  --ribbon-background-collapsed: var(--background-primary, #212121);
  --search-clear-button-color: var(--text-muted, #efe9d9);
  --search-icon-color: var(--text-muted, #efe9d9);
  --search-result-background: var(--background-primary, #212121);
  --search-result-file-title-color: #f39ba0;
  --search-text: #fff;
  --secondary: var(--text-accent, var(--color-accent-1, #ffccbc));
  --setting-group-heading-color: var(--text-normal, #efe9d9);
  --setting-items-background: var(--background-primary-alt, #f937590d);
  --setting-items-border-color: var(--background-modifier-border, #191919);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #efe9d9);
  --shiki-code-background: var(--code-background, #f937590d);
  --shiki-code-comment: var(--text-faint, #efe9d9);
  --shiki-code-normal: var(--text-muted, #efe9d9);
  --shiki-code-punctuation: var(--text-muted, #efe9d9);
  --shiki-gutter-border-color: var(--background-modifier-border, #191919);
  --shiki-gutter-text-color: var(--text-faint, #efe9d9);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #efe9d9);
  --shiki-highlight-neutral: var(--shiki-code-normal, #efe9d9);
  --shiki-terminal-dots-color: var(--text-faint, #efe9d9);
  --slider-track-background: var(--background-modifier-border, #191919);
  --stag1: #f39ba0;
  --stag2: #ffccbc;
  --stag3: #ffebec;
  --status-bar-background: var(--background-secondary, #242424);
  --status-bar-border-color: var(--divider-color, #191919);
  --status-bar-text-color: var(--text-muted, #efe9d9);
  --stickies-color-1: #f39ba0;
  --stickies-color-2: #ffebec;
  --suggestion-background: var(--background-primary, #212121);
  --tab-background-active: var(--background-primary, #212121);
  --tab-container-background: var(--background-secondary, #242424);
  --tab-outline-color: var(--divider-color, #191919);
  --tab-switcher-background: var(--background-secondary, #242424);
  --tab-text-color: var(--text-faint, #efe9d9);
  --tab-text-color-active: var(--text-muted, #efe9d9);
  --tab-text-color-focused: var(--text-muted, #efe9d9);
  --tab-text-color-focused-active: var(--text-muted, #efe9d9);
  --tab-text-color-focused-active-current: var(--text-normal, #efe9d9);
  --tab-text-color-focused-highlighted: var(--text-accent, #ffccbc);
  --table-add-button-border-color: var(--background-modifier-border, #191919);
  --table-background-color: #212121;
  --table-background-color-odd: transparent;
  --table-border-color: var(--background-modifier-border, #ffebec);
  --table-drag-handle-background-active: var(--table-selection-border-color, #f39ba0);
  --table-drag-handle-color: var(--text-faint, #efe9d9);
  --table-drag-handle-color-active: var(--text-on-accent, #ffffff);
  --table-header-border-color: var(--table-border-color, #ffebec);
  --table-header-color: var(--text-normal, #efe9d9);
  --table-hover-color: #ffccbc0a;
  --table-hover-raw-color: #292929;
  --table-hover-thead-color: #f39ba0;
  --table-selection-border-color: var(--interactive-accent, #f39ba0);
  --table-thead-background-color: #f39ba0ad;
  --tag-color: var(--text-accent, #ffccbc);
  --tag-color-hover: var(--text-accent, #ffccbc);
  --tag1: #028588;
  --tag2: #40916c;
  --tag3: #69a2ee;
  --tag4: #c47a5e;
  --tag5: #004f2d;
  --tag6: #f5a7a2;
  --tag7: #f19c79;
  --tag8: #02a588;
  --tag9: #ab4967;
  --tape-color: #ffccbc47;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #f93759));
  --text-accent: var(--color-accent-1, #ffccbc);
  --text-accent-hover: var(--color-accent-2, #f93759);
  --text-blue: #8ca1ff;
  --text-brown: #be9684;
  --text-em-color: #f93759;
  --text-error: var(--color-red, #f93759);
  --text-error-hover: #f93759;
  --text-faint: var(--color-base-50, #efe9d9);
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-gray: #acacac;
  --text-green: #52c7b2;
  --text-muted: var(--color-base-70, #efe9d9);
  --text-normal: var(--color-base-100, #efe9d9);
  --text-on-accent: #ffffff;
  --text-orange: #ffa344;
  --text-pink: #ff6bba;
  --text-purple: #b386f1;
  --text-red: #ff4f4f;
  --text-size-cloze: 0.9375em;
  --text-yellow: #ffdc51;
  --theme-color: #ffccbc;
  --theme-color-translucent: #f39ba0;
  --theme-color-translucent-1: #f39ba0;
  --titlebar-background: var(--background-secondary, #242424);
  --titlebar-background-focused: var(--background-secondary-alt, #191919);
  --titlebar-border-color: var(--background-modifier-border, #191919);
  --titlebar-text-color: var(--text-muted, #efe9d9);
  --titlebar-text-color-focused: var(--text-normal, #efe9d9);
  --vault-profile-color: var(--text-normal, #efe9d9);
  --vault-profile-color-hover: var(--vault-profile-color, #efe9d9);
  --yellow: #fcdc00;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #242424);
  background-color: var(--tab-container-background, rgb(36, 36, 36));
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(33, 33, 33));
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(36, 36, 36));
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #242424);
  background-color: var(--tab-container-background, rgb(36, 36, 36));
  border-left-color: rgb(25, 25, 25);
  color: rgb(239, 233, 217);
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
  color: var(--accent-strong, rgb(239, 233, 217));
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(239, 233, 217));
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(239, 233, 217));
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--accent-strong, rgb(239, 233, 217));
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--mark-highlight, rgb(249, 55, 89));
  color: var(--text-normal, rgb(239, 233, 217));
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(243, 155, 160));
  border-color: rgb(243, 155, 160);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(239, 233, 217));
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(255, 204, 188));
  outline: rgb(255, 204, 188) none 0px;
  text-decoration-color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(255, 204, 188));
  outline: rgb(255, 204, 188) none 0px;
  text-decoration-color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--graph-unresolved, rgb(255, 204, 188));
  outline: rgb(255, 204, 188) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(255, 204, 188));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body dt {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(239, 233, 217));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--background-blockquote-dark, rgb(41, 41, 41));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body table {
  color: rgb(239, 233, 217);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: var(--heading-spacing, 0px);
  width: 273.219px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(255, 235, 236);
  border-left-color: rgb(255, 235, 236);
  border-right-color: rgb(255, 235, 236);
  border-top-color: rgb(255, 235, 236);
  color: var(--table-text-color, rgb(239, 233, 217));
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(255, 235, 236);
  border-left-color: rgb(255, 235, 236);
  border-right-color: rgb(255, 235, 236);
  border-top-color: rgb(255, 235, 236);
  color: var(--table-header-color, rgb(239, 233, 217));
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="dark"] body thead {
  background-color: var(--table-thead-background-color, rgba(243, 155, 160, 0.68));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(249, 55, 89, 0.05));
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: var(--code-normal, rgb(255, 255, 255));
  font-family: var(--font-family-preview-edit-code, Consolas, Monaco, monospace);
  padding-bottom: 2.4px;
  padding-left: 4.8px;
  padding-right: 4.8px;
  padding-top: 2.4px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(249, 55, 89, 0.05));
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
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(239, 233, 217);
  text-align: justify;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #f937590d);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  text-align: justify;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 204, 188);
  border-left-color: rgb(255, 204, 188);
  border-right-color: rgb(255, 204, 188);
  border-top-color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgba(249, 55, 89, 0.05));
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(243, 155, 160);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(239, 233, 217);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 33, 33);
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
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(239, 233, 217);
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
  background-color: rgb(243, 155, 160);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: var(--text-normal, rgb(239, 233, 217));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(33, 33, 33));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-1, rgb(243, 155, 160));
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--theme-color-translucent-1, rgb(243, 155, 160));
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-1, rgb(243, 155, 160));
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #ffccbc);
  --pill-color-hover: var(--tag-color-hover, #ffccbc);
  --pill-color-remove: var(--tag-color, #ffccbc);
  --pill-color-remove-hover: var(--tag-color-hover, #ffccbc);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(255, 204, 188));
  font-family: var(--font-family-h1, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(255, 204, 188));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(255, 204, 188));
  font-family: var(--font-family-h2, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(255, 204, 188));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(255, 204, 188));
  font-family: var(--font-family-h3, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(255, 204, 188));
  font-family: var(--font-family-h4, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(255, 204, 188));
  font-family: var(--font-family-h5, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(255, 204, 188));
  font-family: var(--font-family-h6, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-normal, rgb(239, 233, 217));
  font-family: var(--font-family-folder-file-title, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-normal, rgb(239, 233, 217));
  font-family: var(--font-family-folder-file-title, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 600);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: var(--icon-color, rgb(239, 233, 217));
}`,
    footer: `html[saved-theme="dark"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-background, rgb(36, 36, 36));
  border-bottom-color: rgb(249, 55, 89);
  border-bottom-width: 1px;
  border-left-color: rgb(249, 55, 89);
  border-right-color: rgb(249, 55, 89);
  border-right-width: 1px;
  border-top-color: rgb(249, 55, 89);
  color: var(--text-muted, rgb(239, 233, 217));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(239, 233, 217);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-muted, rgb(239, 233, 217));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(239, 233, 217);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-muted, rgb(239, 233, 217));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: var(--icon-color, rgb(239, 233, 217));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(239, 233, 217);
  stroke: rgb(239, 233, 217);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(239, 233, 217));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(239, 233, 217));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(36, 36, 36));
  border-color: rgb(239, 233, 217);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(255, 235, 236);
  color: var(--table-header-color, rgb(239, 233, 217));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: var(--text-muted, rgb(239, 233, 217));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-color: var(--tag-color, #ffccbc);
  --pill-color-hover: var(--tag-color-hover, #ffccbc);
  --pill-color-remove: var(--tag-color, #ffccbc);
  --pill-color-remove-hover: var(--tag-color-hover, #ffccbc);
  color: var(--pill-color, rgb(255, 204, 188));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(33, 33, 33));
  color: var(--text-normal, rgb(239, 233, 217));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(36, 36, 36));
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(25, 25, 25));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(239, 233, 217);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .navigation-progress {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-background, rgb(36, 36, 36));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(239, 233, 217));
}

html[saved-theme="dark"] body abbr {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: var(--text-normal, rgb(239, 233, 217));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(249, 55, 89, 0.05));
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: var(--code-normal, rgb(239, 233, 217));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body sub {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body summary {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body sup {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag1, rgb(2, 133, 136));
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
  --accent-strong: #37291a;
  --allow-1: #fd355a;
  --aqua: #4dd8ef;
  --background-accent: #fefcf9;
  --background-blue: #ddebf1;
  --background-brown: #e9e5e3;
  --background-gray: #ebeced;
  --background-green: #ddedea;
  --background-modifier-border: var(--color-base-30, rgba(0, 0, 0, 0.1));
  --background-modifier-cover: rgba(0, 0, 0, 0.2);
  --background-modifier-error: var(--color-red, #f5a7a2);
  --background-modifier-error-hover: var(--color-red, #fefcf9);
  --background-modifier-error-rgb: var(--color-red-rgb, 230, 135, 135);
  --background-modifier-form-field: var(--color-base-00, #ffdece);
  --background-modifier-form-field-highlighted: #f5a7a2;
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #ffdece);
  --background-modifier-success: var(--color-green, #ffdece);
  --background-orange: #faebdd;
  --background-pink: #f4dfeb;
  --background-primary: var(--color-base-00, #efe9d9);
  --background-primary-alt: var(--color-base-10, #ffdece);
  --background-purple: #eae4f2;
  --background-red: #ffe3e3;
  --background-search-result: #ffdece;
  --background-secondary: var(--color-base-20, #efe9d9);
  --background-secondary-alt: var(--color-base-05, #efe9d9);
  --background-yellow: #fbf3db;
  --bases-cards-background: var(--background-primary, #efe9d9);
  --bases-cards-cover-background: var(--background-primary-alt, #ffdece);
  --bases-embed-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --bases-group-heading-property-color: var(--text-muted, #37291a);
  --bases-table-border-color: var(--table-border-color, #fd355a);
  --bases-table-cell-background-active: var(--background-primary, #efe9d9);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #ffdece);
  --bases-table-group-background: var(--background-primary-alt, #ffdece);
  --bases-table-header-background: var(--background-primary, #efe9d9);
  --bases-table-header-color: var(--text-muted, #37291a);
  --bases-table-summary-background: var(--background-primary, #efe9d9);
  --blockquote-border-color: var(--interactive-accent, #f5a7a2);
  --blue: #69a2ee;
  --blue-green: #16bcc0;
  --calendar-week-background-color: #ffdece;
  --calendar-week-color: #f5a7a2;
  --calendar-week-hover: #ffdece;
  --canvas-background: var(--background-primary, #efe9d9);
  --canvas-card-label-color: var(--text-faint, #37291a);
  --caret-color: var(--text-normal, #37291a);
  --checkbox-border-color: var(--text-faint, #37291a);
  --checkbox-border-color-hover: var(--text-muted, #37291a);
  --checkbox-color: var(--interactive-accent, #f5a7a2);
  --checkbox-color-hover: var(--interactive-accent-hover, #fd355a);
  --checkbox-marker-color: var(--background-primary, #efe9d9);
  --checklist-done-color: var(--text-muted, #37291a);
  --code-background: var(--background-primary-alt, #ffdece);
  --code-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --code-comment: var(--text-faint, #37291a);
  --code-normal: var(--text-normal, #37291a);
  --code-punctuation: var(--text-muted, #37291a);
  --collapse-icon-color: var(--text-faint, #37291a);
  --collapse-icon-color-collapsed: var(--text-accent, #980000);
  --color-specification: #fd355a;
  --dark: var(--text-normal, var(--color-base-100, #37291a));
  --darkblue: #5981f0;
  --darkgray: var(--text-normal, var(--color-base-100, #37291a));
  --darkgreen: #004f2d;
  --day-planner-dot: #ffdece;
  --day-planner-item-hover: #f5a7a2;
  --day-planner-line: #fd355a;
  --day-planner-pie: #f5a7a2;
  --day-planner-timeline: #ffdece;
  --divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --divider-color-hover: var(--interactive-accent, #f5a7a2);
  --dropdown-background: var(--interactive-normal, #f39ba0);
  --dropdown-background-hover: var(--interactive-hover, #ffdece);
  --embed-color: #fd355a1a;
  --event-item-color1: #f39ba063;
  --event-item-color10: #f39ba091;
  --event-item-color2: #f39ba091;
  --event-item-color3: #f39ba0c4;
  --event-item-color4: #f39ba0;
  --event-item-color5: #D08489;
  --event-item-color6: #B27175;
  --event-item-color7: #D08489;
  --event-item-color8: #f39ba0;
  --event-item-color9: #f39ba0c4;
  --file-header-background: var(--background-primary, #efe9d9);
  --file-header-background-focused: var(--background-primary, #efe9d9);
  --flair-background: var(--interactive-normal, #f39ba0);
  --flair-color: var(--text-normal, #37291a);
  --folder-title: #37291a;
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
  --footnote-id-color: var(--text-muted, #37291a);
  --footnote-id-color-no-occurrences: var(--text-faint, #37291a);
  --graph-arrow: #980000;
  --graph-attach: #f5a7a2;
  --graph-circle: #FD355C;
  --graph-node: var(--text-muted, #37291a);
  --graph-node-focused: var(--text-accent, #980000);
  --graph-node-unresolved: var(--text-faint, #37291a);
  --graph-text: var(--text-normal, #37291a);
  --graph-text-color: #37291a;
  --graph-unresolved: #E87659;
  --graphtag: #ffdece;
  --gray: var(--text-muted, var(--color-base-70, #37291a));
  --gray-1: #c4c4c4;
  --gray-2: #7c8595;
  --green: #40916c;
  --h1-color: #f39ba0;
  --h2-color: #f39ba0;
  --h3-color: #f39ba0;
  --h4-color: #f39ba0;
  --h5-color: #f39ba0;
  --h6-color: #f39ba0;
  --header-color: #f5a7a2;
  --heading-formatting: var(--text-faint, #37291a);
  --hr-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --icon-color: var(--text-muted, #37291a);
  --icon-color-active: var(--text-accent, #980000);
  --icon-color-focused: var(--text-normal, #37291a);
  --icon-color-hover: var(--text-muted, #37291a);
  --inline-title-color: var(--h1-color, #f39ba0);
  --input-date-separator: var(--text-faint, #37291a);
  --input-placeholder-color: var(--text-faint, #37291a);
  --interactive-accent: var(--color-accent-1, #f5a7a2);
  --interactive-accent-hover: var(--color-accent-2, #fd355a);
  --interactive-accent-rgb: #fd355a;
  --interactive-hover: var(--color-base-10, #ffdece);
  --interactive-normal: var(--color-base-00, #f39ba0);
  --light: var(--background-primary, var(--color-base-00, #efe9d9));
  --light-purple: #d3d6fe;
  --light-yellow: #e5e79c;
  --lightgray: var(--background-secondary, var(--color-base-20, #efe9d9));
  --link-color: var(--text-accent, #980000);
  --link-color-hover: var(--text-accent-hover, #37291a);
  --link-external-color: var(--text-accent, #980000);
  --link-external-color-hover: var(--text-accent-hover, #37291a);
  --link-unresolved-color: var(--text-accent, #980000);
  --list-marker-color: var(--text-faint, #37291a);
  --list-marker-color-collapsed: var(--text-accent, #980000);
  --list-marker-color-hover: var(--text-muted, #37291a);
  --list-ol-block-color: #f5a7a2;
  --list-ol-hover: #980000;
  --list-ol-number-color: #f5a7a2;
  --list-ul-block-color: #f5a7a2;
  --list-ul-disc-color: #fd355a;
  --list-ul-hover: #980000;
  --mark-highlight: #fd355a;
  --menu-background: var(--background-secondary, #efe9d9);
  --mermaid-active-task-color: #f5a7a2;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --mermaid-seq-dia-color: #ffdece;
  --metadata-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --metadata-divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --metadata-input-text-color: var(--text-normal, #37291a);
  --metadata-label-text-color: var(--text-muted, #37291a);
  --metadata-label-text-color-hover: var(--text-muted, #37291a);
  --modal-background: var(--background-primary, #efe9d9);
  --nav-collapse-icon-color: var(--collapse-icon-color, #37291a);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #37291a);
  --nav-heading-color: var(--text-normal, #37291a);
  --nav-heading-color-collapsed: var(--text-faint, #37291a);
  --nav-heading-color-collapsed-hover: var(--text-muted, #37291a);
  --nav-heading-color-hover: var(--text-normal, #37291a);
  --nav-item-color: var(--text-muted, #37291a);
  --nav-item-color-active: var(--text-normal, #37291a);
  --nav-item-color-highlighted: var(--text-accent, #980000);
  --nav-item-color-hover: var(--text-normal, #37291a);
  --nav-item-color-selected: var(--text-normal, #37291a);
  --nav-tag-color: var(--text-faint, #37291a);
  --nav-tag-color-active: var(--text-muted, #37291a);
  --nav-tag-color-hover: var(--text-muted, #37291a);
  --note-cloze: #fd355a;
  --note-important: #fd355a;
  --orange: #f19c79;
  --panel-border-color: #fd355a;
  --pdf-background: var(--background-primary, #efe9d9);
  --pdf-page-background: var(--background-primary, #efe9d9);
  --pdf-sidebar-background: var(--background-primary, #efe9d9);
  --pill-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --pill-color: var(--text-muted, #37291a);
  --pill-color-hover: var(--text-normal, #37291a);
  --pill-color-remove: var(--text-faint, #37291a);
  --pill-color-remove-hover: var(--text-accent, #980000);
  --prompt-background: var(--background-primary, #efe9d9);
  --purple: #8673b4;
  --raised-background: var(--blur-background, color-mix(in srgb, #efe9d9 65%, transparent) linear-gradient(#efe9d9, color-mix(in srgb, #efe9d9 65%, transparent)));
  --red: #fd355a;
  --red-1: #980000;
  --ribbon-background: var(--background-secondary, #efe9d9);
  --ribbon-background-collapsed: var(--background-primary, #efe9d9);
  --search-clear-button-color: var(--text-muted, #37291a);
  --search-icon-color: var(--text-muted, #37291a);
  --search-result-background: var(--background-primary, #efe9d9);
  --search-result-file-title-color: #980000;
  --search-text: #37291a;
  --secondary: var(--text-accent, var(--color-accent, #980000));
  --setting-group-heading-color: var(--text-normal, #37291a);
  --setting-items-background: var(--background-primary-alt, #ffdece);
  --setting-items-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #37291a);
  --shiki-code-background: var(--code-background, #ffdece);
  --shiki-code-comment: var(--text-faint, #37291a);
  --shiki-code-normal: var(--text-muted, #37291a);
  --shiki-code-punctuation: var(--text-muted, #37291a);
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --shiki-gutter-text-color: var(--text-faint, #37291a);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #37291a);
  --shiki-highlight-neutral: var(--shiki-code-normal, #37291a);
  --shiki-terminal-dots-color: var(--text-faint, #37291a);
  --slider-track-background: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --stag1: #fd355a;
  --stag2: #fd355a;
  --stag3: #fd355a;
  --status-bar-background: var(--background-secondary, #efe9d9);
  --status-bar-border-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  --status-bar-text-color: var(--text-muted, #37291a);
  --stickies-color-1: #fd355a;
  --stickies-color-2: #f5a7a2;
  --suggestion-background: var(--background-primary, #efe9d9);
  --tab-background-active: var(--background-primary, #efe9d9);
  --tab-container-background: var(--background-secondary, #efe9d9);
  --tab-outline-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  --tab-switcher-background: var(--background-secondary, #efe9d9);
  --tab-text-color: var(--text-faint, #37291a);
  --tab-text-color-active: var(--text-muted, #37291a);
  --tab-text-color-focused: var(--text-muted, #37291a);
  --tab-text-color-focused-active: var(--text-muted, #37291a);
  --tab-text-color-focused-active-current: var(--text-normal, #37291a);
  --tab-text-color-focused-highlighted: var(--text-accent, #980000);
  --table-add-button-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --table-background-color: #ffdece;
  --table-background-color-odd: #ffdece;
  --table-border-color: var(--background-modifier-border, #fd355a);
  --table-drag-handle-background-active: var(--table-selection-border-color, #f5a7a2);
  --table-drag-handle-color: var(--text-faint, #37291a);
  --table-drag-handle-color-active: var(--text-on-accent, #37291a);
  --table-header-border-color: var(--table-border-color, #fd355a);
  --table-header-color: var(--text-normal, #37291a);
  --table-hover-color: #f5a7a2;
  --table-hover-raw-color: #ffdece;
  --table-hover-thead-color: #f5a7a2;
  --table-selection-border-color: var(--interactive-accent, #f5a7a2);
  --table-thead-background-color: #f5a7a2;
  --tag-color: var(--text-accent, #980000);
  --tag-color-hover: var(--text-accent, #980000);
  --tag1: #e5c7a9;
  --tag2: #fea2c2;
  --tag3: #69a2ee;
  --tag4: #40916c;
  --tag5: #c47a5e;
  --tag6: #f5a7a2;
  --tag7: #ab4967;
  --tag8: #dbb671;
  --tag9: #f19c79;
  --tape-color: #acacac65;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #37291a));
  --text-accent: var(--color-accent, #980000);
  --text-accent-hover: var(--color-accent-2, #37291a);
  --text-blue: #0083bb;
  --text-brown: #855a46;
  --text-error: var(--color-red, #f5a7a2);
  --text-error-hover: #fefcf9;
  --text-faint: var(--color-base-50, #37291a);
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-gray: #37352f99;
  --text-green: #00927f;
  --text-muted: var(--color-base-70, #37291a);
  --text-normal: var(--color-base-100, #37291a);
  --text-on-accent: #37291a;
  --text-orange: #d9730d;
  --text-pink: #c40075;
  --text-purple: #5d1fb9;
  --text-red: #ff4343;
  --text-size-cloze: 0.9375em;
  --text-yellow: #d4a300;
  --theme-color: #f5a7a2;
  --theme-color-translucent: #f5a7a2;
  --theme-color-translucent-1: #ffdece;
  --titlebar-background: var(--background-secondary, #efe9d9);
  --titlebar-background-focused: var(--background-secondary-alt, #efe9d9);
  --titlebar-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.1));
  --titlebar-text-color: var(--text-muted, #37291a);
  --titlebar-text-color-focused: var(--text-normal, #37291a);
  --vault-profile-color: var(--text-normal, #37291a);
  --vault-profile-color-hover: var(--vault-profile-color, #37291a);
  --yellow: #ffc727;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #efe9d9);
  background-color: var(--tab-container-background, rgb(239, 233, 217));
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(239, 233, 217));
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(239, 233, 217));
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #efe9d9);
  background-color: var(--tab-container-background, rgb(239, 233, 217));
  border-left-color: rgba(0, 0, 0, 0.1);
  color: rgb(55, 41, 26);
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
  color: var(--accent-strong, rgb(55, 41, 26));
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(55, 41, 26));
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(55, 41, 26));
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--accent-strong, rgb(55, 41, 26));
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--mark-highlight, rgb(253, 53, 90));
  color: var(--text-normal, rgb(55, 41, 26));
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body del {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(245, 167, 162));
  border-color: rgb(245, 167, 162);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(55, 41, 26));
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(152, 0, 0));
  outline: rgb(152, 0, 0) none 0px;
  text-decoration-color: rgb(152, 0, 0);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(152, 0, 0));
  outline: rgb(152, 0, 0) none 0px;
  text-decoration-color: rgb(152, 0, 0);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--graph-unresolved, rgb(232, 118, 89));
  outline: rgb(232, 118, 89) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(232, 118, 89));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body dt {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ol > li {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ul > li {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(55, 41, 26));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--background-primary-alt, rgb(255, 222, 206));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body table {
  color: rgb(55, 41, 26);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: var(--heading-spacing, 0px);
  width: 273.219px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(253, 53, 90);
  border-left-color: rgb(253, 53, 90);
  border-right-color: rgb(253, 53, 90);
  border-top-color: rgb(253, 53, 90);
  color: var(--table-text-color, rgb(55, 41, 26));
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(253, 53, 90);
  border-left-color: rgb(253, 53, 90);
  border-right-color: rgb(253, 53, 90);
  border-top-color: rgb(253, 53, 90);
  color: var(--table-header-color, rgb(55, 41, 26));
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="light"] body thead {
  background-color: var(--table-thead-background-color, rgb(245, 167, 162));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(255, 222, 206));
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: var(--code-normal, rgb(238, 95, 0));
  font-family: var(--font-family-preview-edit-code, Consolas, Monaco, monospace);
  padding-bottom: 2.4px;
  padding-left: 4.8px;
  padding-right: 4.8px;
  padding-top: 2.4px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(255, 222, 206));
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
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body figcaption {
  color: rgb(55, 41, 26);
  text-align: justify;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #ffdece);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  text-align: justify;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(243, 155, 160);
  border-left-color: rgb(243, 155, 160);
  border-right-color: rgb(243, 155, 160);
  border-top-color: rgb(243, 155, 160);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(255, 222, 206));
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(245, 167, 162);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(55, 41, 26);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 233, 217);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 233, 217);
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
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(55, 41, 26);
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
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: var(--text-normal, rgb(55, 41, 26));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(239, 233, 217));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-1, rgb(255, 222, 206));
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--theme-color-translucent-1, rgb(255, 222, 206));
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-1, rgb(255, 222, 206));
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #980000);
  --pill-color-hover: var(--tag-color-hover, #980000);
  --pill-color-remove: var(--tag-color, #980000);
  --pill-color-remove-hover: var(--tag-color-hover, #980000);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(152, 0, 0);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(243, 155, 160));
  font-family: var(--font-family-h1, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(243, 155, 160));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(243, 155, 160));
  font-family: var(--font-family-h2, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(243, 155, 160));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(243, 155, 160));
  font-family: var(--font-family-h3, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(243, 155, 160));
  font-family: var(--font-family-h4, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(243, 155, 160));
  font-family: var(--font-family-h5, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(243, 155, 160));
  font-family: var(--font-family-h6, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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
  color: var(--text-normal, rgb(55, 41, 26));
  font-family: var(--font-family-folder-file-title, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-normal, rgb(55, 41, 26));
  font-family: var(--font-family-folder-file-title, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 600);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: var(--icon-color, rgb(55, 41, 26));
}`,
    footer: `html[saved-theme="light"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-background, rgb(239, 233, 217));
  border-bottom-color: rgb(253, 53, 90);
  border-bottom-width: 1px;
  border-left-color: rgb(253, 53, 90);
  border-right-color: rgb(253, 53, 90);
  border-right-width: 1px;
  border-top-color: rgb(253, 53, 90);
  color: var(--text-muted, rgb(55, 41, 26));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(55, 41, 26);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-muted, rgb(55, 41, 26));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(55, 41, 26);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-muted, rgb(55, 41, 26));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: var(--icon-color, rgb(55, 41, 26));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(55, 41, 26);
  stroke: rgb(55, 41, 26);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(55, 41, 26));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(55, 41, 26));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(239, 233, 217));
  border-color: rgb(55, 41, 26);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(253, 53, 90);
  color: var(--table-header-color, rgb(55, 41, 26));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: var(--text-muted, rgb(55, 41, 26));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, #980000);
  --pill-color-hover: var(--tag-color-hover, #980000);
  --pill-color-remove: var(--tag-color, #980000);
  --pill-color-remove-hover: var(--tag-color-hover, #980000);
  color: var(--pill-color, rgb(152, 0, 0));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(239, 233, 217));
  color: var(--text-normal, rgb(55, 41, 26));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(239, 233, 217));
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(239, 233, 217));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(55, 41, 26);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .navigation-progress {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-background, rgb(239, 233, 217));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(55, 41, 26));
}

html[saved-theme="light"] body abbr {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: var(--text-normal, rgb(55, 41, 26));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(255, 222, 206));
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: var(--code-normal, rgb(55, 41, 26));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body sub {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body summary {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body sup {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag1, rgb(229, 199, 169));
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
