import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "w95",
    modes: ["light"],
    variations: [],
    fonts: [],
    styleSettingsId: "w95-display-props",
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-1: #FFFFFF;
  --accent-1-muted: #ff79c6;
  --accent-2: #00FFFF;
  --accent-2-muted: #8be9fd;
  --accent-3: #00FF00;
  --accent-3-muted: #50fa7b;
  --accent-4: #FFFF00;
  --accent-4-muted: #ffb86c;
  --accent-5: #FF0000;
  --accent-5-muted: #ff5555;
  --accent-6: #00007b;
  --accent-6-muted: #bd93f9;
  --accent-h: 240;
  --accent-l: 24%;
  --accent-s: 100%;
  --background-editor-primary: #ffffff;
  --background-modifier-border: var(--color-base-60, #707070);
  --background-modifier-border-focus: var(--background-primary, #bdbebd);
  --background-modifier-border-hover: var(--background-primary, #bdbebd);
  --background-primary: var(--color-base-00, #bdbebd);
  --background-secondary: var(--color-base-20, #bdbebd);
  --bases-cards-background: var(--background-primary, #bdbebd);
  --bases-embed-border-color: var(--background-modifier-border, #707070);
  --bases-group-heading-property-size: var(--font-ui-smaller, 11px);
  --bases-table-border-color: var(--table-border-color, #707070);
  --bases-table-cell-background-active: var(--background-primary, #bdbebd);
  --bases-table-cell-background-selected: var(--table-selection, hsla(240, 100%, 24%, 0.1));
  --bases-table-header-background: var(--background-primary, #bdbebd);
  --bases-table-summary-background: var(--background-primary, #bdbebd);
  --blockquote-border-color: var(--interactive-accent, #00007b);
  --bold-color: #000000;
  --border-highlight: var(--accent-1, #FFFFFF);
  --border-shadow: var(--color-base-55, #808080);
  --canvas-background: var(--background-primary, #bdbebd);
  --canvas-card-label-color: var(--text-faint, #4f5057);
  --checkbox-border-color: var(--text-faint, #4f5057);
  --checkbox-color: var(--interactive-accent, #00007b);
  --checkbox-color-hover: var(--interactive-accent-hover, #bdbebd);
  --checkbox-marker-color: var(--background-primary, #bdbebd);
  --clickable-icon-radius: var(--radius-s, 0);
  --code-background: var(--accent-1, #FFFFFF);
  --code-border-color: var(--background-modifier-border, #707070);
  --code-comment: var(--text-faint, #4f5057);
  --collapse-icon-color: var(--text-faint, #4f5057);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(240, 100%, 24%));
  --color-base-55: #808080;
  --divider-color: var(--background-modifier-border, #707070);
  --divider-color-hover: var(--interactive-accent, #00007b);
  --dropdown-background: var(--interactive-normal, #FFFFFF);
  --dropdown-background-hover: var(--interactive-hover, #FFFFFF);
  --file-header-background: var(--background-primary, #bdbebd);
  --file-header-background-focused: var(--background-primary, #bdbebd);
  --file-header-font-size: var(--font-ui-small, 12px);
  --flair-background: var(--interactive-normal, #FFFFFF);
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --font-ui-smaller: 11px;
  --footnote-divider-color: var(--metadata-divider-color, #707070);
  --footnote-id-color-no-occurrences: var(--text-faint, #4f5057);
  --graph-line: var(--background-primary, var(--background-modifier-border-focus));
  --graph-node-focused: var(--text-accent, hsl(240, 100%, 24%));
  --graph-node-unresolved: var(--text-faint, #4f5057);
  --gray: var(--text-faint, var(--color-base-50, #4f5057));
  --h1-color: var(--header-color, #34548a);
  --h1-size: var(--header-size, 1.4rem);
  --h2-color: var(--header-color, #34548a);
  --h2-size: 1.3rem;
  --h3-color: var(--header-color, #34548a);
  --h3-size: 1.2rem;
  --h4-color: var(--header-color, #34548a);
  --h4-size: 1.1rem;
  --h5-color: var(--header-color, #34548a);
  --h5-size: 1rem;
  --h6-color: var(--header-color, #34548a);
  --h6-size: 0.9rem;
  --header-color: #34548a;
  --header-size: 1.4rem;
  --heading-formatting: var(--text-faint, #4f5057);
  --hr-color: var(--background-modifier-border, #707070);
  --icon-color-active: var(--text-accent, hsl(240, 100%, 24%));
  --indentation-guide-color: rgba(var(--mono-rgb-100), 0.4);
  --inline-title-color: var(--h1-color, #34548a);
  --inline-title-size: var(--h1-size, 1.4rem);
  --input-date-separator: var(--text-faint, #4f5057);
  --input-placeholder-color: var(--text-faint, #4f5057);
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
  0 2px 3px 0 rgba(0, 0, 0, 0.05),
  0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
  0 1px 2px 0 rgba(0, 0, 0, 0.04),
  0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
  0 2px 3px 0 rgba(0, 0, 0, 0.1),
  0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
  0 1px 2px 0 rgba(0, 0, 0, 0.04),
  0 0 0 0 transparent;
  --interactive-accent: var(--accent-6, #00007b);
  --interactive-accent-hover: var(--background-primary, #bdbebd);
  --interactive-accent-hsl: var(--color-accent-hsl, 240, 100%, 24%);
  --interactive-hover: var(--accent-1, #FFFFFF);
  --interactive-normal: var(--accent-1, #FFFFFF);
  --italic-color: #343b58;
  --light: var(--background-primary, var(--color-base-00, #bdbebd));
  --lightgray: var(--background-secondary, var(--color-base-20, #bdbebd));
  --link-color: var(--text-accent, hsl(240, 100%, 24%));
  --link-color-hover: var(--text-accent-hover, hsl(237, 102%, 27.6%));
  --link-external-color: var(--text-accent, hsl(240, 100%, 24%));
  --link-external-color-hover: var(--text-accent-hover, hsl(237, 102%, 27.6%));
  --link-unresolved-color: var(--text-accent, hsl(240, 100%, 24%));
  --list-marker-color: var(--text-faint, #4f5057);
  --list-marker-color-collapsed: var(--text-accent, hsl(240, 100%, 24%));
  --menu-background: var(--background-secondary, #bdbebd);
  --menu-border-color: var(--background-modifier-border-hover, #bdbebd);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.028),
  0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
  0px 15px 30px rgba(0, 0, 0, 0.07));
  --metadata-border-color: var(--background-modifier-border, #707070);
  --metadata-divider-color: var(--background-modifier-border, #707070);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 12px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 12px);
  --modal-background: var(--background-primary, #bdbebd);
  --nav-collapse-icon-color: var(--collapse-icon-color, #4f5057);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #4f5057);
  --nav-files-background: var(--background-editor-primary, #ffffff);
  --nav-heading-color-collapsed: var(--text-faint, #4f5057);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(0, 0, 0, 0.4));
  --nav-item-background-active: var(--background-modifier-hover, #00007b);
  --nav-item-color-active: var(--accent-1, #FFFFFF);
  --nav-item-color-highlighted: var(--text-accent, hsl(240, 100%, 24%));
  --nav-item-size: var(--font-ui-small, 12px);
  --nav-tag-color: var(--text-faint, #4f5057);
  --pdf-background: var(--background-primary, #bdbebd);
  --pdf-page-background: var(--background-primary, #bdbebd);
  --pdf-sidebar-background: var(--background-primary, #bdbebd);
  --pill-border-color: var(--background-modifier-border, #707070);
  --pill-border-color-hover: var(--background-modifier-border-hover, #bdbebd);
  --pill-color-remove: var(--text-faint, #4f5057);
  --pill-color-remove-hover: var(--text-accent, hsl(240, 100%, 24%));
  --prompt-background: var(--background-primary, #bdbebd);
  --raised-background: var(--blur-background, color-mix(in srgb, #bdbebd 65%, transparent) linear-gradient(#bdbebd, color-mix(in srgb, #bdbebd 65%, transparent)));
  --ribbon-background: var(--background-primary, #bdbebd);
  --ribbon-background-collapsed: var(--background-primary, #bdbebd);
  --scrollbar-thumb: var(--color-base-20, #f6f6f6);
  --scrollbar-track: var(--color-base-25, #e3e3e3);
  --search-result-background: var(--background-primary, #bdbebd);
  --secondary: var(--text-accent, var(--color-accent, hsl(240, 100%, 24%)));
  --setting-group-heading-size: var(--font-ui-medium, 14px);
  --setting-items-border-color: var(--background-modifier-border, #707070);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
  0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
  0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
  0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
  0px 15px 30px rgba(0, 0, 0, 0.07);
  --shiki-code-background: var(--code-background, #FFFFFF);
  --shiki-code-comment: var(--text-faint, #4f5057);
  --shiki-gutter-border-color: var(--background-modifier-border, #707070);
  --shiki-gutter-text-color: var(--text-faint, #4f5057);
  --shiki-terminal-dots-color: var(--text-faint, #4f5057);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #bdbebd);
  --slider-track-background: var(--background-modifier-border, #707070);
  --status-bar-background: var(--background-secondary, #bdbebd);
  --status-bar-border-color: var(--divider-color, #707070);
  --status-bar-font-size: var(--font-ui-smaller, 11px);
  --suggestion-background: var(--background-primary, #bdbebd);
  --tab-background-active: var(--background-primary, #bdbebd);
  --tab-container-background: var(--background-primary, #bdbebd);
  --tab-curve: 1px;
  --tab-divider-color: var(--background-modifier-border-hover, #bdbebd);
  --tab-font-size: var(--font-ui-small, 12px);
  --tab-outline-color: var(--divider-color, #707070);
  --tab-radius-active: 1px;
  --tab-stacked-font-size: var(--font-ui-small, 12px);
  --tab-switcher-background: var(--background-secondary, #bdbebd);
  --tab-text-color: var(--text-faint, #4f5057);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(240, 100%, 24%));
  --table-add-button-border-color: var(--background-modifier-border, #707070);
  --table-border-color: var(--background-modifier-border, #707070);
  --table-drag-handle-background-active: var(--table-selection-border-color, #00007b);
  --table-drag-handle-color: var(--text-faint, #4f5057);
  --table-header-border-color: var(--table-border-color, #707070);
  --table-selection-border-color: var(--interactive-accent, #00007b);
  --tag-color: var(--text-accent, hsl(240, 100%, 24%));
  --tag-color-hover: var(--text-accent, hsl(240, 100%, 24%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(237, 102%, 27.6%)));
  --text-accent: var(--color-accent, hsl(240, 100%, 24%));
  --text-accent-hover: var(--color-accent-2, hsl(237, 102%, 27.6%));
  --text-faint: var(--color-base-50, #4f5057);
  --titlebar-background: var(--background-primary, #bdbebd);
  --titlebar-background-focused: var(--background-primary, #bdbebd);
  --titlebar-border-color: var(--background-modifier-border, #707070);
  --vault-profile-font-size: var(--font-ui-small, 12px);
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #bdbebd);
  background-color: var(--tab-container-background, rgb(189, 190, 189));
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(189, 190, 189));
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(189, 190, 189));
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(112, 112, 112);
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #bdbebd);
  background-color: var(--tab-container-background, rgb(189, 190, 189));
  border-left-color: rgb(112, 112, 112);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(52, 59, 88));
  outline: rgb(52, 59, 88) none 0px;
  text-decoration-color: rgb(52, 59, 88);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(52, 59, 88));
  outline: rgb(52, 59, 88) none 0px;
  text-decoration-color: rgb(52, 59, 88);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(72, 94, 48, 0.4));
}

html body h1.article-title {
  font-size: 12px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(79, 80, 87);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(0, 0, 123));
  border-color: rgb(0, 0, 123);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(0, 0, 122));
  outline: rgb(0, 0, 122) none 0px;
  text-decoration-color: rgb(0, 0, 122);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(0, 0, 122));
  outline: rgb(0, 0, 122) none 0px;
  text-decoration-color: rgb(0, 0, 122);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(0, 0, 122));
  outline: rgb(0, 0, 122) none 0px;
  text-decoration: underline rgba(0, 0, 122, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(0, 0, 122, 0.3));
}`,
    lists: `html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(79, 80, 87));
}`,
    tables: `html body td {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body th {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(255, 255, 255));
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(255, 255, 255));
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}`,
    images: `html body figure {
  --code-background: var(--ec-frm-edBg, #FFFFFF);
}

html body img {
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
}`,
    embeds: `html body .transclude {
  border-left-color: rgb(0, 0, 123);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(79, 80, 87);
  border-left-color: rgb(79, 80, 87);
  border-right-color: rgb(79, 80, 87);
  border-top-color: rgb(79, 80, 87);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(189, 190, 189);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(189, 190, 189);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
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
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(189, 190, 189));
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(189, 190, 189);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(240, 100%, 24%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(240, 100%, 24%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(240, 100%, 24%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(240, 100%, 24%, 0.15));
  --pill-color: var(--tag-color, hsl(240, 100%, 24%));
  --pill-color-hover: var(--tag-color-hover, hsl(240, 100%, 24%));
  --pill-color-remove: var(--tag-color, hsl(240, 100%, 24%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(240, 100%, 24%));
  background-color: var(--pill-background, rgba(0, 0, 122, 0.1));
  border-bottom-color: rgba(0, 0, 122, 0.15);
  border-left-color: rgba(0, 0, 122, 0.15);
  border-right-color: rgba(0, 0, 122, 0.15);
  border-top-color: rgba(0, 0, 122, 0.15);
}

html body a.internal-link.tag-link::before {
  color: rgb(0, 0, 122);
}

html body h1 {
  color: var(--h1-color, rgb(52, 84, 138));
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(52, 84, 138));
  font-size: var(--inline-title-size, 22.4px);
}

html body h2 {
  color: var(--h2-color, rgb(52, 84, 138));
}

html body h2.page-title, html h2.page-title a {
  color: var(--inline-title-color, rgb(52, 84, 138));
}

html body h3 {
  color: var(--h3-color, rgb(52, 84, 138));
}

html body h4 {
  color: var(--h4-color, rgb(52, 84, 138));
}

html body h5 {
  color: var(--h5-color, rgb(52, 84, 138));
}

html body h6 {
  color: var(--h6-color, rgb(52, 84, 138));
}

html body hr {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html body .nav-files-container {
  background-color: var(--nav-files-background, rgb(255, 255, 255));
}

html body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0.4);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(128, 128, 128);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-width: 0px;
}`,
    listPage: `html body ul.section-ul {
  background-color: var(--nav-files-background, rgb(255, 255, 255));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: ridge;
  border-left-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(128, 128, 128);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: var(--text-faint, rgb(79, 80, 87));
}`,
    canvas: `html body .canvas-sidebar {
  background-color: var(--background-primary, rgb(189, 190, 189));
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(112, 112, 112);
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body .note-properties {
  border-color: rgb(112, 112, 112);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(240, 100%, 24%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(240, 100%, 24%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(240, 100%, 24%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(240, 100%, 24%, 0.15));
  --pill-color: var(--tag-color, hsl(240, 100%, 24%));
  --pill-color-hover: var(--tag-color-hover, hsl(240, 100%, 24%));
  --pill-color-remove: var(--tag-color, hsl(240, 100%, 24%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(240, 100%, 24%));
  background-color: var(--pill-background, rgba(0, 0, 122, 0.1));
  color: var(--pill-color, rgb(0, 0, 122));
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(189, 190, 189));
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(189, 190, 189));
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(189, 190, 189));
}`,
    misc: `html body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html body kbd {
  background-color: var(--code-background, rgb(255, 255, 255));
}

html body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 122, 0.1));
  border-bottom-color: rgba(0, 0, 122, 0.15);
  border-left-color: rgba(0, 0, 122, 0.15);
  border-right-color: rgba(0, 0, 122, 0.15);
  border-top-color: rgba(0, 0, 122, 0.15);
  color: var(--tag-color, rgb(0, 0, 122));
}`,
  },
  classSettings: {
    "w95-reactionary": {
      dark: `.w95-reactionary, .theme-light.w95-reactionary {
--background-primary: #d4d0c8;
--background-secondary: #d4d0c8;
--text-normal: #181612;
--nav-item-background-active: #3a6ea5;
--nav-item-color-active: var(--accent-1);
}`,
      light: `.theme-dark.w95-reactionary, .w95-reactionary {
--background-primary: #d4d0c8;
--background-secondary: #d4d0c8;
--text-normal: #181612;
--nav-item-background-active: #3a6ea5;
--nav-item-color-active: var(--accent-1);
}`,
    },
    "w95-scheme-brick": {
      dark: `.w95-scheme-brick, .theme-light.w95-scheme-brick {
--background-primary: #bdbea4;
--background-secondary: #bdbea4;
--border-highlight: #dedecd;
--border-shadow: #514e35;
--scrollbar-track: #d4d5c1;
--scrollbar-thumb: #d5d6ba;
--nav-item-background-active: #8b855a;
--interactive-accent: #8b855a;
}`,
      light: `.theme-dark.w95-scheme-brick, .w95-scheme-brick {
--background-primary: #bdbea4;
--background-secondary: #bdbea4;
--border-highlight: #dedecd;
--border-shadow: #514e35;
--scrollbar-track: #d4d5c1;
--scrollbar-thumb: #d5d6ba;
--nav-item-background-active: #8b855a;
--interactive-accent: #8b855a;
}`,
    },
    "w95-scheme-desert": {
      dark: `.w95-scheme-desert, .theme-light.w95-scheme-desert {
--background-primary: #d5cab5;
--background-secondary: #d5cab4;
--border-highlight: #e6e6de;
--border-shadow: #594d37;
--scrollbar-track: #e1dacc;
--scrollbar-thumb: #e6dcc8;
--nav-item-background-active: #007d7b;
--interactive-accent:;
}`,
      light: `.theme-dark.w95-scheme-desert, .w95-scheme-desert {
--background-primary: #d5cab5;
--background-secondary: #d5cab4;
--border-highlight: #e6e6de;
--border-shadow: #594d37;
--scrollbar-track: #e1dacc;
--scrollbar-thumb: #e6dcc8;
--nav-item-background-active: #007d7b;
--interactive-accent:;
}`,
    },
    "w95-scheme-eggplant": {
      dark: `.w95-scheme-eggplant, .theme-light.w95-scheme-eggplant {
--background-primary: #8baea4;
--background-secondary: #8baea4;
--border-highlight: #c5d6d5;
--border-shadow: #304943;
--scrollbar-track: #aec5be;
--scrollbar-thumb: #b1d6cc;
--nav-item-background-active: #527d73;
--interactive-accent: #527d73;
}`,
      light: `.theme-dark.w95-scheme-eggplant, .w95-scheme-eggplant {
--background-primary: #8baea4;
--background-secondary: #8baea4;
--border-highlight: #c5d6d5;
--border-shadow: #304943;
--scrollbar-track: #aec5be;
--scrollbar-thumb: #b1d6cc;
--nav-item-background-active: #527d73;
--interactive-accent: #527d73;
}`,
    },
    "w95-scheme-lilac": {
      dark: `.w95-scheme-lilac, .theme-light.w95-scheme-lilac {
--background-primary: #aca5d6;
--background-secondary: #aca5d6;
--border-highlight: #d5d2ee;
--border-shadow: #3e3d45;
--scrollbar-track: #cdcae3;
--scrollbar-thumb: #bfb9e4;
--nav-item-background-active: #524cab;
--interactive-accent: #524cab;
}`,
      light: `.theme-dark.w95-scheme-lilac, .w95-scheme-lilac {
--background-primary: #aca5d6;
--background-secondary: #aca5d6;
--border-highlight: #d5d2ee;
--border-shadow: #3e3d45;
--scrollbar-track: #cdcae3;
--scrollbar-thumb: #bfb9e4;
--nav-item-background-active: #524cab;
--interactive-accent: #524cab;
}`,
    },
    "w95-scheme-maple": {
      dark: `.w95-scheme-maple, .theme-light.w95-scheme-maple {
--background-primary: #e6d6ac;
--background-secondary: #e6d6ac;
--border-highlight: #eeead5;
--border-shadow: #736026;
--scrollbar-track: #e4d7b1;
--scrollbar-thumb: #f1e2ba;
--nav-item-background-active: #c5a540;
--interactive-accent: #c5a540;
}`,
      light: `.theme-dark.w95-scheme-maple, .w95-scheme-maple {
--background-primary: #e6d6ac;
--background-secondary: #e6d6ac;
--border-highlight: #eeead5;
--border-shadow: #736026;
--scrollbar-track: #e4d7b1;
--scrollbar-thumb: #f1e2ba;
--nav-item-background-active: #c5a540;
--interactive-accent: #c5a540;
}`,
    },
    "w95-scheme-marine": {
      dark: `.w95-scheme-marine, .theme-light.w95-scheme-marine {
--background-primary: #83beb5;
--background-secondary: #83beb5;
--border-highlight: #c5dfd5;
--border-shadow: #7b8a84;
--scrollbar-track: #aad6d0;
--scrollbar-thumb: #9edcd2;
--nav-item-background-active: #00147b;
--interactive-accent: #00147b;
--background-editor-primary: #c5dfd5;
}`,
      light: `.theme-dark.w95-scheme-marine, .w95-scheme-marine {
--background-primary: #83beb5;
--background-secondary: #83beb5;
--border-highlight: #c5dfd5;
--border-shadow: #7b8a84;
--scrollbar-track: #aad6d0;
--scrollbar-thumb: #9edcd2;
--nav-item-background-active: #00147b;
--interactive-accent: #00147b;
--background-editor-primary: #c5dfd5;
}`,
    },
    "w95-scheme-mystery": {
      dark: `.w95-scheme-mystery, .theme-light.w95-scheme-mystery {
--background-primary: #687868;
--background-secondary: #687868;
--border-highlight: #92a292;
--border-shadow: #414c41;
--scrollbar-track: #a1aea1;
--scrollbar-thumb: #859585;
--nav-item-background-active: #b77840;
--interactive-accent: #b77840;
}`,
      light: `.theme-dark.w95-scheme-mystery, .w95-scheme-mystery {
--background-primary: #687868;
--background-secondary: #687868;
--border-highlight: #92a292;
--border-shadow: #414c41;
--scrollbar-track: #a1aea1;
--scrollbar-thumb: #859585;
--nav-item-background-active: #b77840;
--interactive-accent: #b77840;
}`,
    },
    "w95-scheme-plum": {
      dark: `.w95-scheme-plum, .theme-light.w95-scheme-plum {
--background-primary: #a4958b;
--background-secondary: #a4958b;
--border-highlight: #d5cec4;
--border-shadow: #d5cec4;
--scrollbar-track: #cac0b9;
--scrollbar-thumb: #bfb1a7;
--nav-item-background-active: #a4958b;
--interactive-accent: #a4958b;
--background-editor-primary: #a4958b;
}`,
      light: `.theme-dark.w95-scheme-plum, .w95-scheme-plum {
--background-primary: #a4958b;
--background-secondary: #a4958b;
--border-highlight: #d5cec4;
--border-shadow: #d5cec4;
--scrollbar-track: #cac0b9;
--scrollbar-thumb: #bfb1a7;
--nav-item-background-active: #a4958b;
--interactive-accent: #a4958b;
--background-editor-primary: #a4958b;
}`,
    },
    "w95-scheme-pumpkin": {
      dark: `.w95-scheme-pumpkin, .theme-light.w95-scheme-pumpkin {
--background-primary: #eed29c;
--background-secondary: #eed29c;
--border-highlight: #eed29c;
--border-shadow: #7c5e19;
--scrollbar-track: #f8e6c4;
--scrollbar-thumb: #f6dca9;
--nav-item-background-active: #7b157a;
--interactive-accent: #7b157a;
}`,
      light: `.theme-dark.w95-scheme-pumpkin, .w95-scheme-pumpkin {
--background-primary: #eed29c;
--background-secondary: #eed29c;
--border-highlight: #eed29c;
--border-shadow: #7c5e19;
--scrollbar-track: #f8e6c4;
--scrollbar-thumb: #f6dca9;
--nav-item-background-active: #7b157a;
--interactive-accent: #7b157a;
}`,
    },
    "w95-scheme-rainy-day": {
      dark: `.w95-scheme-rainy-day, .theme-light.w95-scheme-rainy-day {
--background-primary: #7b95ac;
--background-secondary: #7b95ac;
--border-highlight: #bdcad5;
--border-shadow: #4a617b;
--scrollbar-track: #b0c2d3;
--scrollbar-thumb: #9ab4cc;
--nav-item-background-active: #4a617b;
--interactive-accent: #4a617b;
}`,
      light: `.theme-dark.w95-scheme-rainy-day, .w95-scheme-rainy-day {
--background-primary: #7b95ac;
--background-secondary: #7b95ac;
--border-highlight: #bdcad5;
--border-shadow: #4a617b;
--scrollbar-track: #b0c2d3;
--scrollbar-thumb: #9ab4cc;
--nav-item-background-active: #4a617b;
--interactive-accent: #4a617b;
}`,
    },
    "w95-scheme-rose": {
      dark: `.w95-scheme-rose, .theme-light.w95-scheme-rose {
--background-primary: #cdaeb4;
--background-secondary: #cdaeb4;
--border-highlight: #e6d6de;
--border-shadow: #8a525c;
--scrollbar-track: #ead8df;
--scrollbar-thumb: #e6c6cc;
--nav-item-background-active: #9c5d6a;
--interactive-accent: #9c5d6a;
}`,
      light: `.theme-dark.w95-scheme-rose, .w95-scheme-rose {
--background-primary: #cdaeb4;
--background-secondary: #cdaeb4;
--border-highlight: #e6d6de;
--border-shadow: #8a525c;
--scrollbar-track: #ead8df;
--scrollbar-thumb: #e6c6cc;
--nav-item-background-active: #9c5d6a;
--interactive-accent: #9c5d6a;
}`,
    },
    "w95-scheme-slate": {
      dark: `.w95-scheme-slate, .theme-light.w95-scheme-slate {
--background-primary: #9cb6c5;
--background-secondary: #9cb6c5;
--border-highlight: #cddade;
--border-shadow: #527d94;
--scrollbar-track: #c6d6df;
--scrollbar-thumb: #b2cad8;
--nav-item-background-active: #527d94;
--interactive-accent: #527d94;
}`,
      light: `.theme-dark.w95-scheme-slate, .w95-scheme-slate {
--background-primary: #9cb6c5;
--background-secondary: #9cb6c5;
--border-highlight: #cddade;
--border-shadow: #527d94;
--scrollbar-track: #c6d6df;
--scrollbar-thumb: #b2cad8;
--nav-item-background-active: #527d94;
--interactive-accent: #527d94;
}`,
    },
    "w95-scheme-spruce": {
      dark: `.w95-scheme-spruce, .theme-light.w95-scheme-spruce {
--background-primary: #9cc6a4;
--background-secondary: #9cc6a4;
--border-highlight: #cde2cd;
--border-shadow: #529562;
--scrollbar-track: #bfd8c4;
--scrollbar-thumb: #b3d8ba;
--nav-item-background-active: #529562;
--interactive-accent: #529562;
}`,
      light: `.theme-dark.w95-scheme-spruce, .w95-scheme-spruce {
--background-primary: #9cc6a4;
--background-secondary: #9cc6a4;
--border-highlight: #cde2cd;
--border-shadow: #529562;
--scrollbar-track: #bfd8c4;
--scrollbar-thumb: #b3d8ba;
--nav-item-background-active: #529562;
--interactive-accent: #529562;
}`,
    },
    "w95-scheme-storm": {
      dark: `.w95-scheme-storm, .theme-light.w95-scheme-storm {
--background-primary: #bdbebd;
--background-secondary: #bdbebd;
--border-highlight: #ffffff;
--border-shadow: #7b7d7b;
--scrollbar-track: #dedfde;
--scrollbar-thumb: #cbcccb;
--nav-item-background-active: #7b157a;
--interactive-accent: #7b157a;
}`,
      light: `.theme-dark.w95-scheme-storm, .w95-scheme-storm {
--background-primary: #bdbebd;
--background-secondary: #bdbebd;
--border-highlight: #ffffff;
--border-shadow: #7b7d7b;
--scrollbar-track: #dedfde;
--scrollbar-thumb: #cbcccb;
--nav-item-background-active: #7b157a;
--interactive-accent: #7b157a;
}`,
    },
    "w95-scheme-teal": {
      dark: `.w95-scheme-teal, .theme-light.w95-scheme-teal {
--background-primary: #bdbebd;
--background-secondary: #bdbebd;
--border-highlight: #ffffff;
--border-shadow: #7b7d7b;
--scrollbar-track: #dedfde;
--scrollbar-thumb: #cbcccb;
--nav-item-background-active: #0b7d7b;
--interactive-accent: #0b7d7b;
}`,
      light: `.theme-dark.w95-scheme-teal, .w95-scheme-teal {
--background-primary: #bdbebd;
--background-secondary: #bdbebd;
--border-highlight: #ffffff;
--border-shadow: #7b7d7b;
--scrollbar-track: #dedfde;
--scrollbar-thumb: #cbcccb;
--nav-item-background-active: #0b7d7b;
--interactive-accent: #0b7d7b;
}`,
    },
    "w95-scheme-wheat": {
      dark: `.w95-scheme-wheat, .theme-light.w95-scheme-wheat {
--background-primary: #dede9c;
--background-secondary: #dede9c;
--border-highlight: #eeeecd;
--border-shadow: #bdba39;
--scrollbar-track: #dede9c;
--scrollbar-thumb: #dede9c;
--nav-item-background-active: #7b7d00;
--interactive-accent: #7b7d00;
}`,
      light: `.theme-dark.w95-scheme-wheat, .w95-scheme-wheat {
--background-primary: #dede9c;
--background-secondary: #dede9c;
--border-highlight: #eeeecd;
--border-shadow: #bdba39;
--scrollbar-track: #dede9c;
--scrollbar-thumb: #dede9c;
--nav-item-background-active: #7b7d00;
--interactive-accent: #7b7d00;
}`,
    },
  },
};
