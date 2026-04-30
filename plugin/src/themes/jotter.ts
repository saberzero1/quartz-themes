import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "jotter",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "jotter",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: var(--ultramarine, 92, 124, 255);
  --accent-h: 228;
  --accent-l: 68%;
  --accent-s: 100%;
  --background-modifier-border: var(--color-base-30, hsl(345, 3%, 28%));
  --background-modifier-border-focus: var(--background-modifier-border, hsl(345, 3%, 28%));
  --background-modifier-border-hover: var(--color-base-35, hsl(345, 3%, 30%));
  --background-modifier-error: var(--color-red, #bf616a);
  --background-modifier-error-hover: var(--color-red, #bf616a);
  --background-modifier-error-rgb: var(--color-red-rgb, 191, 97, 106);
  --background-modifier-form-field: var(--background-primary, #322f30);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #322f30);
  --background-modifier-hover: var(--background-primary-alt, #413e3e);
  --background-modifier-success: var(--color-green, #8fbcbb);
  --background-modifier-success-rgb: var(--color-green-rgb, 143, 188, 187);
  --background-primary: var(--color-base-00, #322f30);
  --background-primary-alt: var(--color-base-10, #413e3e);
  --background-secondary: var(--color-base-20, #322f30);
  --background-secondary-alt: var(--background-secondary, #322f30);
  --bases-cards-background: var(--background-primary, #322f30);
  --bases-cards-cover-background: var(--background-primary-alt, #413e3e);
  --bases-embed-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --bases-group-heading-property-color: var(--text-muted, #b7b2b2);
  --bases-table-border-color: var(--table-border-color, hsl(345, 3%, 28%));
  --bases-table-cell-background-active: var(--background-primary, #322f30);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #413e3e);
  --bases-table-cell-background-selected: var(--table-selection, hsla(228, 100%, 68%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #413e3e);
  --bases-table-header-background: var(--background-primary, #322f30);
  --bases-table-header-background-hover: var(--background-modifier-hover, #413e3e);
  --bases-table-header-color: var(--text-muted, #b7b2b2);
  --bases-table-summary-background: var(--background-primary, #322f30);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #413e3e);
  --blockquote-border-color: var(--interactive-accent, rgb(92, 124, 255));
  --bold-underline-color: var(--text-accent, rgb(92, 124, 255));
  --bubblegum: 255, 179, 189;
  --callout-bug: var(--color-red-rgb, 191, 97, 106);
  --callout-default: var(--color-blue-rgb, 129, 161, 193);
  --callout-error: var(--color-red-rgb, 191, 97, 106);
  --callout-example: var(--color-purple-rgb, 139, 129, 193);
  --callout-fail: var(--color-red-rgb, 191, 97, 106);
  --callout-important: var(--color-cyan-rgb, 136, 192, 208);
  --callout-info: var(--color-blue-rgb, 129, 161, 193);
  --callout-question: var(--color-orange-rgb, 208, 135, 112);
  --callout-success: var(--color-green-rgb, 143, 188, 187);
  --callout-summary: var(--color-cyan-rgb, 136, 192, 208);
  --callout-tip: var(--color-cyan-rgb, 136, 192, 208);
  --callout-todo: var(--color-blue-rgb, 129, 161, 193);
  --callout-warning: var(--color-orange-rgb, 208, 135, 112);
  --canvas-background: var(--background-primary, #322f30);
  --canvas-card-label-color: var(--text-faint, #807b7b);
  --canvas-color-1: var(--color-red-rgb, 191, 97, 106);
  --canvas-color-2: var(--color-orange-rgb, 208, 135, 112);
  --canvas-color-3: var(--color-yellow-rgb, 235, 200, 139);
  --canvas-color-4: var(--color-green-rgb, 143, 188, 187);
  --canvas-color-5: var(--color-cyan-rgb, 136, 192, 208);
  --canvas-color-6: var(--color-purple-rgb, 139, 129, 193);
  --caret-color: var(--text-normal, #e1e1e1);
  --checkbox-border-color: var(--text-faint, #807b7b);
  --checkbox-border-color-hover: var(--text-muted, #b7b2b2);
  --checkbox-color: var(--interactive-accent, rgb(92, 124, 255));
  --checkbox-color-hover: var(--interactive-accent-hover, rgb(92, 124, 255, 0.8));
  --checkbox-marker-color: var(--background-primary, #322f30);
  --checklist-done-color: var(--text-muted, #b7b2b2);
  --code-background: var(--background-primary-alt, #413e3e);
  --code-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --code-bracket-background: var(--background-modifier-hover, #413e3e);
  --code-comment: var(--text-faint, #807b7b);
  --code-function: var(--color-yellow, #ebc88b);
  --code-important: var(--color-orange, #d08770);
  --code-keyword: var(--color-pink, #bd81c1);
  --code-normal: var(--text-normal, #e1e1e1);
  --code-operator: var(--color-red, #bf616a);
  --code-property: var(--color-cyan, #88c0d0);
  --code-punctuation: var(--text-muted, #b7b2b2);
  --code-string: var(--color-green, #8fbcbb);
  --code-tag: var(--color-red, #bf616a);
  --code-value: var(--color-purple, #8b81c1);
  --collapse-icon-color: var(--text-faint, #807b7b);
  --collapse-icon-color-collapsed: var(--text-accent, rgb(92, 124, 255));
  --color-accent: rgb(var(--accent));
  --color-blue: #81a1c1;
  --color-blue-rgb: 129, 161, 193;
  --color-cyan: #88c0d0;
  --color-cyan-rgb: 136, 192, 208;
  --color-green: #8fbcbb;
  --color-green-rgb: 143, 188, 187;
  --color-orange: #d08770;
  --color-orange-rgb: 208, 135, 112;
  --color-pink: #bd81c1;
  --color-pink-rgb: 189, 129, 193;
  --color-purple: #8b81c1;
  --color-purple-rgb: 139, 129, 193;
  --color-red: #bf616a;
  --color-red-rgb: 191, 97, 106;
  --color-yellow: #ebc88b;
  --color-yellow-rgb: 235, 200, 139;
  --dark: var(--text-normal, var(--color-base-100, #e1e1e1));
  --darkgray: var(--text-normal, var(--color-base-100, #e1e1e1));
  --denim: 76, 80, 120;
  --divider-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --divider-color-hover: var(--interactive-accent, rgb(92, 124, 255));
  --dropdown-background: var(--interactive-normal, #433F40);
  --dropdown-background-hover: var(--interactive-hover, #4a4546);
  --em-color: var(--text-normal, #e1e1e1);
  --file-header-background: var(--background-primary, #322f30);
  --file-header-background-focused: var(--background-primary, #322f30);
  --flair-background: var(--interactive-normal, #433F40);
  --flair-color: var(--text-normal, #e1e1e1);
  --footnote-divider-color: var(--metadata-divider-color, hsl(345, 3%, 28%));
  --footnote-id-color: var(--text-muted, #b7b2b2);
  --footnote-id-color-no-occurrences: var(--text-faint, #807b7b);
  --footnote-input-background-active: var(--metadata-input-background-active, #413e3e);
  --forest: 77, 116, 53;
  --graph-node: var(--text-muted, #b7b2b2);
  --graph-node-attachment: var(--color-yellow, #ebc88b);
  --graph-node-focused: var(--text-accent, rgb(92, 124, 255));
  --graph-node-tag: var(--color-green, #8fbcbb);
  --graph-node-unresolved: var(--text-faint, #807b7b);
  --graph-text: var(--text-normal, #e1e1e1);
  --gray: var(--text-muted, var(--color-base-70, #b7b2b2));
  --h1-color: var(--text-normal, #e1e1e1);
  --h1-size: 1.3em;
  --h2-color: var(--text-accent, rgb(92, 124, 255));
  --h2-size: 1.2em;
  --h3-color: var(--text-normal, #e1e1e1);
  --h3-size: 1.1em;
  --h4-color: var(--text-muted, #b7b2b2);
  --h4-size: 1em;
  --h5-color: var(--text-muted, #b7b2b2);
  --h5-size: .85em;
  --h6-color: var(--text-faint, #807b7b);
  --h6-size: .75em;
  --heading-formatting: var(--text-faint, #807b7b);
  --highlight: var(--background-modifier-hover, var(--background-primary-alt, #413e3e));
  --hr-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --icon-color: var(--text-faint, #807b7b);
  --icon-color-active: var(--text-accent, rgb(92, 124, 255));
  --icon-color-focused: var(--text-muted, #b7b2b2);
  --icon-color-hover: var(--text-muted, #b7b2b2);
  --indentation-guide-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --indentation-guide-width: var(--border-width, 1.5px);
  --inline-title-color: var(--h1-color, #e1e1e1);
  --inline-title-size: var(--h1-size, 1.3em);
  --input-date-separator: var(--text-faint, #807b7b);
  --input-placeholder-color: var(--text-faint, #807b7b);
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: rgb(var(--accent));
  --interactive-accent-hover: rgb(var(--accent), 0.8);
  --interactive-accent-hsl: var(--color-accent-hsl, 228, 100%, 68%);
  --interactive-hover: var(--color-base-35, #4a4546);
  --interactive-normal: var(--color-base-30, #433F40);
  --italic-underline-color: var(--yellow, #fcd86c);
  --jade: 0, 168, 107;
  --light: var(--background-primary, var(--color-base-00, #322f30));
  --lightgray: var(--background-secondary, var(--color-base-20, #322f30));
  --link-color: var(--text-accent, rgb(92, 124, 255));
  --link-color-hover: var(--text-accent-hover, rgb(92, 124, 255, 0.8));
  --link-external-color: var(--text-accent, rgb(92, 124, 255));
  --link-external-color-hover: var(--text-accent-hover, rgb(92, 124, 255, 0.8));
  --link-unresolved-color: var(--text-accent, rgb(92, 124, 255));
  --list-marker-color: var(--text-faint, #807b7b);
  --list-marker-color-collapsed: var(--text-accent, rgb(92, 124, 255));
  --list-marker-color-hover: var(--text-muted, #b7b2b2);
  --mauve: 122, 73, 136;
  --menu-background: var(--background-secondary, #322f30);
  --menu-border-color: var(--background-modifier-border-hover, hsl(345, 3%, 30%));
  --menu-shadow: var(--shadow-s, none);
  --metadata-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --metadata-divider-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --metadata-input-background-active: var(--background-modifier-hover, #413e3e);
  --metadata-input-text-color: var(--text-normal, #e1e1e1);
  --metadata-label-background-active: var(--background-modifier-hover, #413e3e);
  --metadata-label-text-color: var(--text-muted, #b7b2b2);
  --metadata-label-text-color-hover: var(--text-muted, #b7b2b2);
  --metadata-property-background-active: var(--background-modifier-hover, #413e3e);
  --modal-background: var(--background-primary, #322f30);
  --modal-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --modal-border-width: var(--border-width, 2px);
  --mustard: 255, 208, 113;
  --nav-collapse-icon-color: var(--collapse-icon-color, #807b7b);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #807b7b);
  --nav-heading-color: var(--text-normal, #e1e1e1);
  --nav-heading-color-collapsed: var(--text-faint, #807b7b);
  --nav-heading-color-collapsed-hover: var(--text-muted, #b7b2b2);
  --nav-heading-color-hover: var(--text-normal, #e1e1e1);
  --nav-indentation-guide-color: var(--indentation-guide-color, hsl(345, 3%, 28%));
  --nav-indentation-guide-width: var(--indentation-guide-width, 1.5px);
  --nav-item-background-active: var(--background-modifier-hover, #413e3e);
  --nav-item-background-hover: var(--background-modifier-hover, #413e3e);
  --nav-item-color: var(--text-muted, #b7b2b2);
  --nav-item-color-active: var(--text-normal, #e1e1e1);
  --nav-item-color-highlighted: var(--text-accent, rgb(92, 124, 255));
  --nav-item-color-hover: var(--text-normal, #e1e1e1);
  --nav-item-color-selected: var(--text-normal, #e1e1e1);
  --nav-tag-color: var(--text-faint, #807b7b);
  --nav-tag-color-active: var(--text-muted, #b7b2b2);
  --nav-tag-color-hover: var(--text-muted, #b7b2b2);
  --pdf-background: var(--background-primary, #322f30);
  --pdf-page-background: var(--background-primary, #322f30);
  --pdf-sidebar-background: var(--background-primary, #322f30);
  --pill-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(345, 3%, 30%));
  --pill-color: var(--text-muted, #b7b2b2);
  --pill-color-hover: var(--text-normal, #e1e1e1);
  --pill-color-remove: var(--text-faint, #807b7b);
  --pill-color-remove-hover: var(--text-accent, rgb(92, 124, 255));
  --prompt-background: var(--background-primary, #322f30);
  --pumpkin: 246, 141, 69;
  --raised-background: var(--blur-background, color-mix(in srgb, #433F40 65%, transparent) linear-gradient(#433F40, color-mix(in srgb, #433F40 65%, transparent)));
  --ribbon-background: var(--background-secondary, #322f30);
  --ribbon-background-collapsed: var(--background-primary, #322f30);
  --rust: 188, 74, 60;
  --search-clear-button-color: var(--text-muted, #b7b2b2);
  --search-icon-color: var(--text-muted, #b7b2b2);
  --search-result-background: var(--background-primary, #322f30);
  --secondary: var(--text-accent, rgb(var(--accent)));
  --setting-group-heading-color: var(--text-normal, #e1e1e1);
  --setting-items-background: var(--background-primary-alt, #413e3e);
  --setting-items-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --shadow-l: none;
  --shadow-s: none;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #b7b2b2);
  --shiki-code-background: var(--code-background, #413e3e);
  --shiki-code-comment: var(--text-faint, #807b7b);
  --shiki-code-function: var(--color-green, #8fbcbb);
  --shiki-code-important: var(--color-orange, #d08770);
  --shiki-code-keyword: var(--color-pink, #bd81c1);
  --shiki-code-normal: var(--text-muted, #b7b2b2);
  --shiki-code-property: var(--color-cyan, #88c0d0);
  --shiki-code-punctuation: var(--text-muted, #b7b2b2);
  --shiki-code-string: var(--color-yellow, #ebc88b);
  --shiki-code-value: var(--color-purple, #8b81c1);
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --shiki-gutter-text-color: var(--text-faint, #807b7b);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #b7b2b2);
  --shiki-highlight-neutral: var(--shiki-code-normal, #b7b2b2);
  --shiki-terminal-dots-color: var(--text-faint, #807b7b);
  --slate: 131, 142, 154;
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(345, 3%, 30%));
  --slider-track-background: var(--background-modifier-border, hsl(345, 3%, 28%));
  --status-bar-background: var(--background-secondary, #322f30);
  --status-bar-border-color: var(--divider-color, hsl(345, 3%, 28%));
  --status-bar-text-color: var(--text-muted, #b7b2b2);
  --strong-color: var(--text-normal, #e1e1e1);
  --suggestion-background: var(--background-primary, #322f30);
  --sync-avatar-color-1: var(--color-red, #bf616a);
  --sync-avatar-color-2: var(--color-orange, #d08770);
  --sync-avatar-color-3: var(--color-yellow, #ebc88b);
  --sync-avatar-color-4: var(--color-green, #8fbcbb);
  --sync-avatar-color-5: var(--color-cyan, #88c0d0);
  --sync-avatar-color-6: var(--color-blue, #81a1c1);
  --sync-avatar-color-7: var(--color-purple, #8b81c1);
  --sync-avatar-color-8: var(--color-pink, #bd81c1);
  --tab-background-active: var(--background-primary, #322f30);
  --tab-container-background: var(--background-secondary, #322f30);
  --tab-divider-color: var(--background-modifier-border-hover, hsl(345, 3%, 30%));
  --tab-outline-color: var(--divider-color, hsl(345, 3%, 28%));
  --tab-switcher-background: var(--background-secondary, #322f30);
  --tab-text-color: var(--text-faint, #807b7b);
  --tab-text-color-active: var(--text-muted, #b7b2b2);
  --tab-text-color-focused: var(--text-muted, #b7b2b2);
  --tab-text-color-focused-active: var(--text-muted, #b7b2b2);
  --tab-text-color-focused-active-current: var(--text-normal, #e1e1e1);
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(92, 124, 255));
  --table-add-button-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --table-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(92, 124, 255));
  --table-drag-handle-color: var(--text-faint, #807b7b);
  --table-header-border-color: var(--table-border-color, hsl(345, 3%, 28%));
  --table-header-color: var(--text-normal, #e1e1e1);
  --table-selection-border-color: var(--interactive-accent, rgb(92, 124, 255));
  --tag-background: rgb(var(--accent), .2);
  --tag-background-hover: rgb(var(--accent), .3);
  --tag-color: var(--text-accent, rgb(92, 124, 255));
  --tag-color-hover: var(--text-accent, rgb(92, 124, 255));
  --tertiary: var(--text-accent-hover, rgb(var(--accent), 0.8));
  --text-accent: rgb(var(--accent));
  --text-accent-hover: rgb(var(--accent), 0.8);
  --text-error: var(--color-red, #bf616a);
  --text-faint: var(--color-base-50, #807b7b);
  --text-muted: var(--color-base-70, #b7b2b2);
  --text-normal: var(--color-base-100, #e1e1e1);
  --text-success: var(--color-green, #8fbcbb);
  --text-warning: var(--color-orange, #d08770);
  --textHighlight: var(--background-modifier-hover, var(--background-primary-alt, #413e3e));
  --titlebar-background: var(--background-secondary, #322f30);
  --titlebar-background-focused: var(--background-secondary-alt, #322f30);
  --titlebar-border-color: var(--background-modifier-border, hsl(345, 3%, 28%));
  --titlebar-text-color: var(--text-muted, #b7b2b2);
  --titlebar-text-color-focused: var(--text-normal, #e1e1e1);
  --turquoise: 120, 230, 232;
  --ultramarine: 92, 124, 255;
  --vault-profile-color: var(--text-normal, #e1e1e1);
  --vault-profile-color-hover: var(--vault-profile-color, #e1e1e1);
  --vermilion: 243, 90, 55;
  --wine: 114, 47, 55;
  --yellow: #fcd86c;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #322f30);
  background-color: var(--tab-container-background, rgb(50, 47, 48));
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(50, 47, 48));
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(50, 47, 48));
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(74, 69, 70);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #322f30);
  background-color: var(--tab-container-background, rgb(50, 47, 48));
  border-left-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--strong-color, rgb(225, 225, 225));
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--em-color, rgb(225, 225, 225));
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--em-color, rgb(225, 225, 225));
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--strong-color, rgb(225, 225, 225));
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, rgb(225, 225, 225));
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body del {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(225, 225, 225));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(92, 124, 255));
  border-color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(183, 178, 178));
  outline: rgb(183, 178, 178) none 0px;
  text-decoration-color: rgb(183, 178, 178);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(92, 124, 255));
  outline: rgb(92, 124, 255) none 0px;
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(92, 124, 255));
  outline: rgb(92, 124, 255) none 0px;
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(92, 124, 255));
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgba(92, 124, 255, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(92, 124, 255, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body dt {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(128, 123, 123));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body table {
  color: rgb(225, 225, 225);
  width: 193.219px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: var(--table-text-color, rgb(225, 225, 225));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: var(--table-header-color, rgb(225, 225, 225));
  padding-bottom: 4.8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 4.8px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(65, 62, 62));
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: var(--code-normal, rgb(225, 225, 225));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(65, 62, 62));
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #413e3e);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(65, 62, 62));
  border-bottom-color: rgb(183, 178, 178);
  border-left-color: rgb(183, 178, 178);
  border-right-color: rgb(183, 178, 178);
  border-top-color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(128, 123, 123);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(128, 123, 123);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(50, 47, 48);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(50, 47, 48);
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
  background-color: rgb(235, 200, 139);
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
  background-color: rgb(129, 161, 193);
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
  background-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 200, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 200, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 129, 193);
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
  background-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 188, 187);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 136, 192, 208);
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 191, 97, 106);
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 191, 97, 106);
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 139, 129, 193);
  background: rgba(139, 129, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(139, 129, 193, 0.25);
  border-left-color: rgba(139, 129, 193, 0.25);
  border-right-color: rgba(139, 129, 193, 0.25);
  border-top-color: rgba(139, 129, 193, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 191, 97, 106);
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 129, 161, 193);
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 129, 161, 193);
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 208, 135, 112);
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 143, 188, 187);
  background: rgba(143, 188, 187, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(143, 188, 187, 0.25);
  border-left-color: rgba(143, 188, 187, 0.25);
  border-right-color: rgba(143, 188, 187, 0.25);
  border-top-color: rgba(143, 188, 187, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 136, 192, 208);
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 129, 161, 193);
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 208, 135, 112);
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(225, 225, 225);
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
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: var(--text-normal, rgb(225, 225, 225));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(50, 47, 48));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(65, 62, 62));
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(50, 47, 48);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(65, 62, 62));
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(65, 62, 62));
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgb(92, 124, 255, .2));
  --pill-background-hover: var(--tag-background-hover, rgb(92, 124, 255, .3));
  --pill-border-color: var(--tag-border-color, hsla(228, 100%, 68%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(228, 100%, 68%, 0.15));
  --pill-color: var(--tag-color, rgb(92, 124, 255));
  --pill-color-hover: var(--tag-color-hover, rgb(92, 124, 255));
  --pill-color-remove: var(--tag-color, rgb(92, 124, 255));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(92, 124, 255));
  background-color: var(--pill-background, rgba(92, 124, 255, 0.2));
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(225, 225, 225));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(225, 225, 225));
  font-size: var(--inline-title-size, 20.8px);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(92, 124, 255));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(225, 225, 225));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(225, 225, 225));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(183, 178, 178));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(183, 178, 178));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(128, 123, 123));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 129, 161, 193);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(74, 69, 70);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-muted, rgb(183, 178, 178));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-muted, rgb(183, 178, 178));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(225, 225, 225);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
  color: var(--icon-color, rgb(128, 123, 123));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(50, 47, 48));
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: var(--status-bar-text-color, rgb(183, 178, 178));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(183, 178, 178);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(183, 178, 178));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--text-faint, rgb(128, 123, 123));
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: var(--text-faint, rgb(128, 123, 123));
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(183, 178, 178));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
  color: var(--icon-color, rgb(128, 123, 123));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(128, 123, 123);
  stroke: rgb(128, 123, 123);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(128, 123, 123));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(225, 225, 225));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(50, 47, 48));
  border-color: rgb(225, 225, 225);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(74, 69, 70);
  color: var(--table-header-color, rgb(225, 225, 225));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: var(--text-muted, rgb(183, 178, 178));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(183, 178, 178);
  border-left-color: rgb(183, 178, 178);
  border-right-color: rgb(183, 178, 178);
  border-top-color: rgb(183, 178, 178);
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(74, 69, 70);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgb(92, 124, 255, .2));
  --pill-background-hover: var(--tag-background-hover, rgb(92, 124, 255, .3));
  --pill-border-color: var(--tag-border-color, hsla(228, 100%, 68%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(228, 100%, 68%, 0.15));
  --pill-color: var(--tag-color, rgb(92, 124, 255));
  --pill-color-hover: var(--tag-color-hover, rgb(92, 124, 255));
  --pill-color-remove: var(--tag-color, rgb(92, 124, 255));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(92, 124, 255));
  background-color: var(--pill-background, rgba(92, 124, 255, 0.2));
  color: var(--pill-color, rgb(92, 124, 255));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(50, 47, 48));
  color: var(--text-normal, rgb(225, 225, 225));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(50, 47, 48));
  border-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(50, 47, 48));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(225, 225, 225);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(50, 47, 48));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(225, 225, 225));
}

html[saved-theme="dark"] body abbr {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(183, 178, 178);
  border-left-color: rgb(183, 178, 178);
  border-right-color: rgb(183, 178, 178);
  border-top-color: rgb(183, 178, 178);
  color: var(--text-normal, rgb(183, 178, 178));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(65, 62, 62));
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: var(--code-normal, rgb(225, 225, 225));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body sub {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body summary {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body sup {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(92, 124, 255, 0.2));
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
  color: var(--tag-color, rgb(92, 124, 255));
}`,
  },
  light: {
    base: `:root:root {
  --accent: var(--ultramarine, 92, 124, 255);
  --accent-h: 228;
  --accent-l: 68%;
  --accent-s: 100%;
  --background-modifier-border: var(--color-base-30, hsl(0, 0%, 84%));
  --background-modifier-border-focus: var(--background-modifier-border, hsl(0, 0%, 84%));
  --background-modifier-border-hover: var(--color-base-35, hsl(0, 0%, 84%));
  --background-modifier-form-field: var(--background-primary, #f2f2f2);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #f2f2f2);
  --background-modifier-hover: var(--background-primary-alt, #e6e6e6);
  --background-primary: var(--color-base-00, #f2f2f2);
  --background-primary-alt: var(--color-base-10, #e6e6e6);
  --background-secondary: var(--color-base-20, #f2f2f2);
  --background-secondary-alt: var(--background-secondary, #f2f2f2);
  --bases-cards-background: var(--background-primary, #f2f2f2);
  --bases-cards-cover-background: var(--background-primary-alt, #e6e6e6);
  --bases-embed-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --bases-group-heading-property-color: var(--text-muted, #878586);
  --bases-table-border-color: var(--table-border-color, hsl(0, 0%, 84%));
  --bases-table-cell-background-active: var(--background-primary, #f2f2f2);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #e6e6e6);
  --bases-table-cell-background-selected: var(--table-selection, hsla(228, 100%, 68%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #e6e6e6);
  --bases-table-header-background: var(--background-primary, #f2f2f2);
  --bases-table-header-background-hover: var(--background-modifier-hover, #e6e6e6);
  --bases-table-header-color: var(--text-muted, #878586);
  --bases-table-summary-background: var(--background-primary, #f2f2f2);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #e6e6e6);
  --blockquote-border-color: var(--interactive-accent, rgb(92, 124, 255));
  --bold-underline-color: var(--text-accent, rgb(92, 124, 255));
  --bubblegum: 255, 179, 189;
  --canvas-background: var(--background-primary, #f2f2f2);
  --caret-color: var(--text-normal, #353132);
  --checkbox-border-color-hover: var(--text-muted, #878586);
  --checkbox-color: var(--interactive-accent, rgb(92, 124, 255));
  --checkbox-color-hover: var(--interactive-accent-hover, rgb(92, 124, 255, 0.8));
  --checkbox-marker-color: var(--background-primary, #f2f2f2);
  --checklist-done-color: var(--text-muted, #878586);
  --code-background: var(--background-primary-alt, #e6e6e6);
  --code-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --code-bracket-background: var(--background-modifier-hover, #e6e6e6);
  --code-normal: var(--text-normal, #353132);
  --code-punctuation: var(--text-muted, #878586);
  --collapse-icon-color-collapsed: var(--text-accent, rgb(92, 124, 255));
  --color-accent: rgb(var(--accent));
  --dark: var(--text-normal, var(--color-base-100, #353132));
  --darkgray: var(--text-normal, var(--color-base-100, #353132));
  --denim: 76, 80, 120;
  --divider-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --divider-color-hover: var(--interactive-accent, rgb(92, 124, 255));
  --dropdown-background: var(--interactive-normal, #e6e6e6);
  --dropdown-background-hover: var(--interactive-hover, #efefef);
  --em-color: var(--text-normal, #353132);
  --file-header-background: var(--background-primary, #f2f2f2);
  --file-header-background-focused: var(--background-primary, #f2f2f2);
  --flair-background: var(--interactive-normal, #e6e6e6);
  --flair-color: var(--text-normal, #353132);
  --footnote-divider-color: var(--metadata-divider-color, hsl(0, 0%, 84%));
  --footnote-id-color: var(--text-muted, #878586);
  --footnote-input-background-active: var(--metadata-input-background-active, #e6e6e6);
  --forest: 77, 116, 53;
  --graph-node: var(--text-muted, #878586);
  --graph-node-focused: var(--text-accent, rgb(92, 124, 255));
  --graph-text: var(--text-normal, #353132);
  --gray: var(--text-muted, var(--color-base-70, #878586));
  --h1-color: var(--text-normal, #353132);
  --h1-size: 1.3em;
  --h2-color: var(--text-accent, rgb(92, 124, 255));
  --h2-size: 1.2em;
  --h3-color: var(--text-normal, #353132);
  --h3-size: 1.1em;
  --h4-color: var(--text-muted, #878586);
  --h4-size: 1em;
  --h5-color: var(--text-muted, #878586);
  --h5-size: .85em;
  --h6-color: var(--text-faint, #ababab);
  --h6-size: .75em;
  --highlight: var(--background-modifier-hover, var(--background-primary-alt, #e6e6e6));
  --hr-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --icon-color: var(--text-faint, #ababab);
  --icon-color-active: var(--text-accent, rgb(92, 124, 255));
  --icon-color-focused: var(--text-muted, #878586);
  --icon-color-hover: var(--text-muted, #878586);
  --indentation-guide-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --indentation-guide-width: var(--border-width, 1.5px);
  --inline-title-color: var(--h1-color, #353132);
  --inline-title-size: var(--h1-size, 1.3em);
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: rgb(var(--accent));
  --interactive-accent-hover: rgb(var(--accent), 0.8);
  --interactive-accent-hsl: var(--color-accent-hsl, 228, 100%, 68%);
  --interactive-hover: var(--color-base-10, #efefef);
  --interactive-normal: var(--color-base-00, #e6e6e6);
  --italic-underline-color: var(--yellow, #fcd86c);
  --jade: 0, 168, 107;
  --light: var(--background-primary, var(--color-base-00, #f2f2f2));
  --lightgray: var(--background-secondary, var(--color-base-20, #f2f2f2));
  --link-color: var(--text-accent, rgb(92, 124, 255));
  --link-color-hover: var(--text-accent-hover, rgb(92, 124, 255, 0.8));
  --link-external-color: var(--text-accent, rgb(92, 124, 255));
  --link-external-color-hover: var(--text-accent-hover, rgb(92, 124, 255, 0.8));
  --link-unresolved-color: var(--text-accent, rgb(92, 124, 255));
  --list-marker-color-collapsed: var(--text-accent, rgb(92, 124, 255));
  --list-marker-color-hover: var(--text-muted, #878586);
  --mauve: 122, 73, 136;
  --menu-background: var(--background-secondary, #f2f2f2);
  --menu-border-color: var(--background-modifier-border-hover, hsl(0, 0%, 84%));
  --menu-shadow: var(--shadow-s, none);
  --metadata-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --metadata-divider-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --metadata-input-background-active: var(--background-modifier-hover, #e6e6e6);
  --metadata-input-text-color: var(--text-normal, #353132);
  --metadata-label-background-active: var(--background-modifier-hover, #e6e6e6);
  --metadata-label-text-color: var(--text-muted, #878586);
  --metadata-label-text-color-hover: var(--text-muted, #878586);
  --metadata-property-background-active: var(--background-modifier-hover, #e6e6e6);
  --modal-background: var(--background-primary, #f2f2f2);
  --modal-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --modal-border-width: var(--border-width, 2px);
  --mustard: 255, 208, 113;
  --nav-heading-color: var(--text-normal, #353132);
  --nav-heading-color-collapsed-hover: var(--text-muted, #878586);
  --nav-heading-color-hover: var(--text-normal, #353132);
  --nav-indentation-guide-color: var(--indentation-guide-color, hsl(0, 0%, 84%));
  --nav-indentation-guide-width: var(--indentation-guide-width, 1.5px);
  --nav-item-background-active: var(--background-modifier-hover, #e6e6e6);
  --nav-item-background-hover: var(--background-modifier-hover, #e6e6e6);
  --nav-item-color: var(--text-muted, #878586);
  --nav-item-color-active: var(--text-normal, #353132);
  --nav-item-color-highlighted: var(--text-accent, rgb(92, 124, 255));
  --nav-item-color-hover: var(--text-normal, #353132);
  --nav-item-color-selected: var(--text-normal, #353132);
  --nav-tag-color-active: var(--text-muted, #878586);
  --nav-tag-color-hover: var(--text-muted, #878586);
  --pdf-background: var(--background-primary, #f2f2f2);
  --pdf-page-background: var(--background-primary, #f2f2f2);
  --pdf-sidebar-background: var(--background-primary, #f2f2f2);
  --pill-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(0, 0%, 84%));
  --pill-color: var(--text-muted, #878586);
  --pill-color-hover: var(--text-normal, #353132);
  --pill-color-remove-hover: var(--text-accent, rgb(92, 124, 255));
  --prompt-background: var(--background-primary, #f2f2f2);
  --pumpkin: 246, 141, 69;
  --raised-background: var(--blur-background, color-mix(in srgb, #f2f2f2 65%, transparent) linear-gradient(#f2f2f2, color-mix(in srgb, #f2f2f2 65%, transparent)));
  --ribbon-background: var(--background-secondary, #f2f2f2);
  --ribbon-background-collapsed: var(--background-primary, #f2f2f2);
  --rust: 188, 74, 60;
  --search-clear-button-color: var(--text-muted, #878586);
  --search-icon-color: var(--text-muted, #878586);
  --search-result-background: var(--background-primary, #f2f2f2);
  --secondary: var(--text-accent, rgb(var(--accent)));
  --setting-group-heading-color: var(--text-normal, #353132);
  --setting-items-background: var(--background-primary-alt, #e6e6e6);
  --setting-items-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --shadow-l: none;
  --shadow-s: none;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #878586);
  --shiki-code-background: var(--code-background, #e6e6e6);
  --shiki-code-normal: var(--text-muted, #878586);
  --shiki-code-punctuation: var(--text-muted, #878586);
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #878586);
  --shiki-highlight-neutral: var(--shiki-code-normal, #878586);
  --slate: 131, 142, 154;
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(0, 0%, 84%));
  --slider-track-background: var(--background-modifier-border, hsl(0, 0%, 84%));
  --status-bar-background: var(--background-secondary, #f2f2f2);
  --status-bar-border-color: var(--divider-color, hsl(0, 0%, 84%));
  --status-bar-text-color: var(--text-muted, #878586);
  --strong-color: var(--text-normal, #353132);
  --suggestion-background: var(--background-primary, #f2f2f2);
  --tab-background-active: var(--background-primary, #f2f2f2);
  --tab-container-background: var(--background-secondary, #f2f2f2);
  --tab-divider-color: var(--background-modifier-border-hover, hsl(0, 0%, 84%));
  --tab-outline-color: var(--divider-color, hsl(0, 0%, 84%));
  --tab-switcher-background: var(--background-secondary, #f2f2f2);
  --tab-text-color-active: var(--text-muted, #878586);
  --tab-text-color-focused: var(--text-muted, #878586);
  --tab-text-color-focused-active: var(--text-muted, #878586);
  --tab-text-color-focused-active-current: var(--text-normal, #353132);
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(92, 124, 255));
  --table-add-button-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --table-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(92, 124, 255));
  --table-header-border-color: var(--table-border-color, hsl(0, 0%, 84%));
  --table-header-color: var(--text-normal, #353132);
  --table-selection-border-color: var(--interactive-accent, rgb(92, 124, 255));
  --tag-background: rgb(var(--accent), .2);
  --tag-background-hover: rgb(var(--accent), .3);
  --tag-color: var(--text-accent, rgb(92, 124, 255));
  --tag-color-hover: var(--text-accent, rgb(92, 124, 255));
  --tertiary: var(--text-accent-hover, rgb(var(--accent), 0.8));
  --text-accent: rgb(var(--accent));
  --text-accent-hover: rgb(var(--accent), 0.8);
  --text-muted: var(--color-base-70, #878586);
  --text-normal: var(--color-base-100, #353132);
  --textHighlight: var(--background-modifier-hover, var(--background-primary-alt, #e6e6e6));
  --titlebar-background: var(--background-secondary, #f2f2f2);
  --titlebar-background-focused: var(--background-secondary-alt, #f2f2f2);
  --titlebar-border-color: var(--background-modifier-border, hsl(0, 0%, 84%));
  --titlebar-text-color: var(--text-muted, #878586);
  --titlebar-text-color-focused: var(--text-normal, #353132);
  --turquoise: 120, 230, 232;
  --ultramarine: 92, 124, 255;
  --vault-profile-color: var(--text-normal, #353132);
  --vault-profile-color-hover: var(--vault-profile-color, #353132);
  --vermilion: 243, 90, 55;
  --wine: 114, 47, 55;
  --yellow: #fcd86c;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #f2f2f2);
  background-color: var(--tab-container-background, rgb(242, 242, 242));
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(242, 242, 242));
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(242, 242, 242));
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(214, 214, 214);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #f2f2f2);
  background-color: var(--tab-container-background, rgb(242, 242, 242));
  border-left-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--strong-color, rgb(53, 49, 50));
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--em-color, rgb(53, 49, 50));
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--em-color, rgb(53, 49, 50));
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--strong-color, rgb(53, 49, 50));
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, rgb(53, 49, 50));
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body del {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(53, 49, 50));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(92, 124, 255));
  border-color: rgb(92, 124, 255);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(135, 133, 134));
  outline: rgb(135, 133, 134) none 0px;
  text-decoration-color: rgb(135, 133, 134);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(92, 124, 255));
  outline: rgb(92, 124, 255) none 0px;
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(92, 124, 255));
  outline: rgb(92, 124, 255) none 0px;
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(92, 124, 255));
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgba(92, 124, 255, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(92, 124, 255, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body dt {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ol > li {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ul > li {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body table {
  color: rgb(53, 49, 50);
  width: 193.219px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: var(--table-text-color, rgb(53, 49, 50));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: var(--table-header-color, rgb(53, 49, 50));
  padding-bottom: 4.8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 4.8px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(230, 230, 230));
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: var(--code-normal, rgb(53, 49, 50));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(230, 230, 230));
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body figcaption {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #e6e6e6);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(230, 230, 230));
  border-bottom-color: rgb(135, 133, 134);
  border-left-color: rgb(135, 133, 134);
  border-right-color: rgb(135, 133, 134);
  border-top-color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(171, 171, 171);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(171, 171, 171);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 242, 242);
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
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(53, 49, 50);
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
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: var(--text-normal, rgb(53, 49, 50));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(242, 242, 242));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(230, 230, 230));
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(230, 230, 230));
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(230, 230, 230));
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgb(92, 124, 255, .2));
  --pill-background-hover: var(--tag-background-hover, rgb(92, 124, 255, .3));
  --pill-border-color: var(--tag-border-color, hsla(228, 100%, 68%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(228, 100%, 68%, 0.15));
  --pill-color: var(--tag-color, rgb(92, 124, 255));
  --pill-color-hover: var(--tag-color-hover, rgb(92, 124, 255));
  --pill-color-remove: var(--tag-color, rgb(92, 124, 255));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(92, 124, 255));
  background-color: var(--pill-background, rgba(92, 124, 255, 0.2));
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(92, 124, 255);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(53, 49, 50));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(53, 49, 50));
  font-size: var(--inline-title-size, 20.8px);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(92, 124, 255));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(53, 49, 50));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(53, 49, 50));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(135, 133, 134));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(135, 133, 134));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(171, 171, 171));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(214, 214, 214);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-muted, rgb(135, 133, 134));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-muted, rgb(135, 133, 134));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(53, 49, 50);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: var(--icon-color, rgb(171, 171, 171));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(242, 242, 242));
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: var(--status-bar-text-color, rgb(135, 133, 134));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(135, 133, 134);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(135, 133, 134));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--text-faint, rgb(171, 171, 171));
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: var(--text-faint, rgb(171, 171, 171));
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(135, 133, 134));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: var(--icon-color, rgb(171, 171, 171));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(171, 171, 171);
  stroke: rgb(171, 171, 171);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(53, 49, 50));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(242, 242, 242));
  border-color: rgb(53, 49, 50);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(214, 214, 214);
  color: var(--table-header-color, rgb(53, 49, 50));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: var(--text-muted, rgb(135, 133, 134));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(135, 133, 134);
  border-left-color: rgb(135, 133, 134);
  border-right-color: rgb(135, 133, 134);
  border-top-color: rgb(135, 133, 134);
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(214, 214, 214);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgb(92, 124, 255, .2));
  --pill-background-hover: var(--tag-background-hover, rgb(92, 124, 255, .3));
  --pill-border-color: var(--tag-border-color, hsla(228, 100%, 68%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(228, 100%, 68%, 0.15));
  --pill-color: var(--tag-color, rgb(92, 124, 255));
  --pill-color-hover: var(--tag-color-hover, rgb(92, 124, 255));
  --pill-color-remove: var(--tag-color, rgb(92, 124, 255));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(92, 124, 255));
  background-color: var(--pill-background, rgba(92, 124, 255, 0.2));
  color: var(--pill-color, rgb(92, 124, 255));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(242, 242, 242));
  color: var(--text-normal, rgb(53, 49, 50));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(242, 242, 242));
  border-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(242, 242, 242));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(53, 49, 50);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(242, 242, 242));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(53, 49, 50));
}

html[saved-theme="light"] body abbr {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(135, 133, 134);
  border-left-color: rgb(135, 133, 134);
  border-right-color: rgb(135, 133, 134);
  border-top-color: rgb(135, 133, 134);
  color: var(--text-normal, rgb(135, 133, 134));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(230, 230, 230));
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: var(--code-normal, rgb(53, 49, 50));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body sub {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body summary {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body sup {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(92, 124, 255, 0.2));
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
  color: var(--tag-color, rgb(92, 124, 255));
}`,
  },
  classSettings: {
    "wrap-titles": {
      general: `.wrap-titles {
--nav-item-white-space: wrap;
}

.wrap-titles .nav-file-title .nav-file-tag {
align-self: flex-start;
margin-top: .2em;
}`,
    },
    "border-invisible": {
      general: `.border-invisible {
--divider-color: transparent;
}

.border-invisible .workspace-ribbon.mod-left:before {
border-bottom-color: var(--background-secondary);
}

.border-invisible .setting-item {
border-top: none;
}`,
    },
    "border-visible": {
      general: `.border-visible .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header {
border-right: 1px solid var(--divider-color);
box-shadow: var(--tab-stacked-shadow);
}`,
    },
    "colorful-tooltips": {
      general: `.accent-turquoise .tooltip, .accent-mustard .tooltip, .accent-bubblegum .tooltip, .accent-pumpkin .tooltip {
color: var(--text-on-accent);
}

.colorful-tooltips .tooltip {
background-color: var(--color-accent);
}`,
    },
    "ct-jotter": {
      dark: `.ct-jotter {
--color-red: #bf616a;
--color-red-rgb: 191, 97, 106;
--color-green: #8fbcbb;
--color-green-rgb: 143, 188, 187;
--color-orange: #d08770;
--color-orange-rgb: 208, 135, 112;
--color-yellow: #ebc88b;
--color-yellow-rgb: 235, 200, 139;
--color-cyan: #88c0d0;
--color-cyan-rgb: 136, 192, 208;
--color-blue: #81a1c1;
--color-blue-rgb: 129, 161, 193;
--color-purple: #8b81c1;
--color-purple-rgb: 139, 129, 193;
--color-pink: #bd81c1;
--color-pink-rgb: 189, 129, 193;
}`,
    },
    "ct-reporter": {
      general: `.ct-reporter {
--color-red: #bf616a;
--color-red-rgb: 191, 97, 106;
--color-green: #8fbcbb;
--color-green-rgb: 143, 188, 187;
--color-orange: #d08770;
--color-orange-rgb: 208, 135, 112;
--color-yellow: #ebc88b;
--color-yellow-rgb: 235, 200, 139;
--color-cyan: #88c0d0;
--color-cyan-rgb: 136, 192, 208;
--color-blue: #81a1c1;
--color-blue-rgb: 129, 161, 193;
--color-purple: #8b81c1;
--color-purple-rgb: 139, 129, 193;
--color-pink: #bd81c1;
--color-pink-rgb: 189, 129, 193;
}`,
      dark: `.ct-reporter {
--background-primary: #252423;
--background-primary-alt: #302e2c;
--background-secondary: #21201f;
--background-modifier-border: hsla(37, 5%, 20%);
--background-modifier-border-hover: hsla(37, 5%, 25%);
--indentation-guide-color-active: hsl(37, 5%, 35%);
--interactive-normal: var(--background-modifier-border);
--interactive-hover: var(--background-modifier-border-hover);
--text-normal: #d7cdc1;
--text-muted: #938d89;
--text-faint: #65615f;
}`,
      light: `.ct-reporter {
--background-primary: #fffdf8;
--background-primary-alt: #ebe4d6;
--background-secondary: #f5f0e5;
--code-background: #f3ede2;
--background-modifier-border: hsl(41, 18%, 82%);
--background-modifier-border-hover: hsl(41, 20%, 88%);
--indentation-guide-color-active: hsl(41, 5%, 65%);
--interactive-normal: var(--background-primary-alt);
--interactive-hover: #f2ede4;
--text-normal: #353132;
--text-muted: #7d7c7d;
--text-faint: #a7a7a7;
}`,
    },
    "ct-explorer": {
      dark: `.ct-explorer {
--background-primary: #161616;
--background-primary-alt: #242323;
--background-secondary: #161616;
--background-modifier-border: hsl(30, 1%, 23%);
--background-modifier-border-hover: hsl(30, 1%, 28%);
--indentation-guide-color-active: hsl(30, 1%, 43%);
--interactive-normal: var(--background-modifier-border);
--interactive-hover: var(--background-modifier-border-hover);
--text-normal: #f4f4f0;
--text-muted: #a6a4a1;
--text-faint: #555453;
}

.ct-explorer {
--color-red: #bf616a;
--color-red-rgb: 191, 97, 106;
--color-green: #8fbcbb;
--color-green-rgb: 143, 188, 187;
--color-orange: #d08770;
--color-orange-rgb: 208, 135, 112;
--color-yellow: #ebc88b;
--color-yellow-rgb: 235, 200, 139;
--color-cyan: #88c0d0;
--color-cyan-rgb: 136, 192, 208;
--color-blue: #81a1c1;
--color-blue-rgb: 129, 161, 193;
--color-purple: #8b81c1;
--color-purple-rgb: 139, 129, 193;
--color-pink: #bd81c1;
--color-pink-rgb: 189, 129, 193;
}`,
      light: `.ct-explorer {
--background-primary: #e7e5d0;
--background-primary-alt: #dad7c3;
--background-secondary: #e7e5d0;
--code-background: #dedbc9;
--background-modifier-border: hsl(55, 20%, 75%);
--background-modifier-border-hover: hsl(55, 20%, 80%);
--indentation-guide-color-active: hsl(30, 1%, 63%);
--interactive-normal: var(--background-modifier-border);
--interactive-hover: var(--background-modifier-border-hover);
--text-normal: #191919;
--text-muted: #555864;
--text-faint: #999ba4;
}`,
    },
    "ct-keeper": {
      general: `.ct-keeper {
--color-red: #bf616a;
--color-red-rgb: 191, 97, 106;
--color-green: #8fbcbb;
--color-green-rgb: 143, 188, 187;
--color-orange: #d08770;
--color-orange-rgb: 208, 135, 112;
--color-yellow: #ebc88b;
--color-yellow-rgb: 235, 200, 139;
--color-cyan: #88c0d0;
--color-cyan-rgb: 136, 192, 208;
--color-blue: #81a1c1;
--color-blue-rgb: 129, 161, 193;
--color-purple: #8b81c1;
--color-purple-rgb: 139, 129, 193;
--color-pink: #bd81c1;
--color-pink-rgb: 189, 129, 193;
}`,
      dark: `.ct-keeper {
--background-primary: #2e3440;
--background-primary-alt: #3B4252;
--background-secondary: #2e3440;
--background-modifier-border: hsl(222, 16%, 28%);
--background-modifier-border-hover: hsl(222, 16%, 33%);
--indentation-guide-color-active: hsl(220, 17%, 40%);
--interactive-normal: var(--background-modifier-border);
--interactive-hover: var(--background-modifier-border-hover);
--text-normal: #eceff4;
--text-muted: #a3aab9;
--text-faint: #7a8191;
}`,
      light: `.ct-keeper {
--background-primary: #d8dee9;
--background-primary-alt: #c5cdda;
--background-secondary: #d8dee9;
--code-background: #d0d8e4;
--background-modifier-border: hsl(222, 20%, 80%);
--background-modifier-border-hover: hsl(222, 20%, 83%);
--indentation-guide-color-active: hsl(220, 17%, 70%);
--interactive-normal: var(--background-modifier-border);
--interactive-hover: var(--background-modifier-border-hover);
--text-normal: #2e3440;
--text-muted: #6b7b97;
--text-faint: #8b9ab9;
}`,
    },
    "ct-undercover": {
      dark: `.ct-undercover {
--background-primary: #08090D;
--background-primary-alt: #171c23;
--background-secondary: #090C10;
--code-background: #131820;
--background-modifier-border: hsl(219, 20%, 27%);
--background-modifier-border-hover: hsl(219, 20%, 37%);
--indentation-guide-color-active: hsl(221, 16%, 40%);
--interactive-normal: #1d232c;
--interactive-hover: #242c36;
--text-normal: #eff0f2;
--text-muted: #7b87a0;
--text-faint: #4b5870;
}`,
      light: `.ct-undercover {
--background-primary: #FCFCFC;
--background-primary-alt: #dbe1eb;
--background-secondary: #EFF1F5;
--code-background: #eaf0f8;
--background-modifier-border: hsl(218, 11%, 86%);
--background-modifier-border-hover: hsl(218, 11%, 81%);
--indentation-guide-color-active: hsl(218, 11%, 70%);
--interactive-normal: var(--background-modifier-border);
--interactive-hover: hsl(218, 11%, 90%);
--text-normal: #212834;
--text-muted: #7787A9;
--text-faint: #A1ACC2;
}`,
    },
    "ct-obsidian": {
      dark: `.theme-light.ct-obsidian, .ct-obsidian {
--background-primary: var(--color-base-00);
--background-primary-alt: var(--color-base-10);
--background-secondary: var(--color-base-20);
--background-modifier-border: var(--color-base-30);
--background-modifier-border-hover: var(--color-base-35);
--background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
--indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
--indentation-guide-color-active: rgba(var(--mono-rgb-100), 0.3);
--interactive-normal: var(--color-base-00);
--interactive-hover: var(--color-base-10);
--text-normal: var(--color-base-100);
--text-muted: var(--color-base-70);
--text-faint: var(--color-base-50);
}`,
      light: `.ct-obsidian, .theme-dark.ct-obsidian {
--background-primary: var(--color-base-00);
--background-primary-alt: var(--color-base-10);
--background-secondary: var(--color-base-20);
--background-modifier-border: var(--color-base-30);
--background-modifier-border-hover: var(--color-base-35);
--background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
--indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
--indentation-guide-color-active: rgba(var(--mono-rgb-100), 0.3);
--interactive-normal: var(--color-base-00);
--interactive-hover: var(--color-base-10);
--text-normal: var(--color-base-100);
--text-muted: var(--color-base-70);
--text-faint: var(--color-base-50);
}`,
    },
    "predefined-accent-color": {
      general: `.predefined-accent-color {
--text-accent: rgb(var(--accent));
--color-accent: rgb(var(--accent));
--interactive-accent: rgb(var(--accent));
--tag-background: rgb(var(--accent), .2);
--tag-background-hover: rgb(var(--accent), .3);
--text-accent-hover: rgb(var(--accent), 0.8);
--interactive-accent-hover: rgb(var(--accent), 0.8);
--rust: 188, 74, 60;
--vermilion: 243, 90, 55;
--pumpkin: 246, 141, 69;
--mustard: 255, 208, 113;
--jade: 0, 168, 107;
--forest: 77, 116, 53;
--turquoise: 120, 230, 232;
--ultramarine: 92, 124, 255;
--denim: 76, 80, 120;
--mauve: 122, 73, 136;
--bubblegum: 255, 179, 189;
--wine: 114, 47, 55;
--slate: 131, 142, 154;
}

.accent-rust {
--accent: var(--rust);
--accent-h: 7;
--accent-s: 52%;
--accent-l: 49%;
}

.accent-vermilion {
--accent: var(--vermilion);
--accent-h: 11;
--accent-s: 89%;
--accent-l: 58%;
}

.accent-pumpkin {
--accent: var(--pumpkin);
--accent-h: 24;
--accent-s: 91%;
--accent-l: 62%;
}

.accent-mustard {
--accent: var(--mustard);
--accent-h: 40;
--accent-s: 100%;
--accent-l: 72%;
}

.accent-jade {
--accent: var(--jade);
--accent-h: 158;
--accent-s: 100%;
--accent-l: 33%;
}

.accent-forest {
--accent: var(--forest);
--accent-h: 97;
--accent-s: 37%;
--accent-l: 33%;
}

.accent-turquoise {
--accent: var(--turquoise);
--accent-h: 181;
--accent-s: 71%;
--accent-l: 69%;
}

.accent-ultramarine {
--accent: var(--ultramarine);
--accent-h: 228;
--accent-s: 100%;
--accent-l: 68%;
}

.accent-denim {
--accent: var(--denim);
--accent-h: 235;
--accent-s: 22%;
--accent-l: 38%;
}

.accent-mauve {
--accent: var(--mauve);
--accent-h: 287;
--accent-s: 30%;
--accent-l: 41%;
}

.accent-bubblegum {
--accent: var(--bubblegum);
--accent-h: 352;
--accent-s: 100%;
--accent-l: 85%;
}

.accent-wine {
--accent: var(--wine);
--accent-h: 353;
--accent-s: 42%;
--accent-l: 32%;
}

.accent-slate {
--accent: var(--slate);
--accent-h: 211;
--accent-s: 10%;
--accent-l: 56%;
}

.predefined-accent-color .mod-settings .vertical-tab-content>.setting-item:nth-child(2)>.setting-item-control>input[type=color] {
visibility: hidden;
width: 12rem;
}

.predefined-accent-color .mod-settings .vertical-tab-content>.setting-item:nth-child(2)>.setting-item-control .lucide-rotate-ccw {
display: none;
}

.predefined-accent-color .mod-settings .vertical-tab-content>.setting-item:nth-child(2)>.setting-item-control>input[type=color]::before {
visibility: visible;
content: "Open the Style Settings plugin to pick your accent colors.";
color: var(--text-error);
font-size: var(--font-ui-smaller);
}`,
    },
    "accent-rust": {
      general: `.predefined-accent-color.accent-rust {
--accent: var(--rust);
--accent-h: 7;
--accent-s: 52%;
--accent-l: 49%;
}`,
    },
    "accent-vermilion": {
      general: `.predefined-accent-color.accent-vermilion {
--accent: var(--vermilion);
--accent-h: 11;
--accent-s: 89%;
--accent-l: 58%;
}`,
    },
    "accent-pumpkin": {
      general: `.predefined-accent-color.accent-pumpkin {
--accent: var(--pumpkin);
--accent-h: 24;
--accent-s: 91%;
--accent-l: 62%;
}

.colorful-tooltips.accent-pumpkin .tooltip {
color: var(--text-on-accent);
}`,
    },
    "accent-mustard": {
      general: `.predefined-accent-color.accent-mustard {
--accent: var(--mustard);
--accent-h: 40;
--accent-s: 100%;
--accent-l: 72%;
}

.accent-mustard {
--text-on-accent: #353132;
}

.colorful-tooltips.accent-mustard .tooltip {
color: var(--text-on-accent);
}`,
    },
    "accent-jade": {
      general: `.predefined-accent-color.accent-jade {
--accent: var(--jade);
--accent-h: 158;
--accent-s: 100%;
--accent-l: 33%;
}`,
    },
    "accent-forest": {
      general: `.predefined-accent-color.accent-forest {
--accent: var(--forest);
--accent-h: 97;
--accent-s: 37%;
--accent-l: 33%;
}`,
    },
    "accent-turquoise": {
      general: `.predefined-accent-color.accent-turquoise {
--accent: var(--turquoise);
--accent-h: 181;
--accent-s: 71%;
--accent-l: 69%;
}

.accent-turquoise {
--text-on-accent: #353132;
}

.colorful-tooltips.accent-turquoise .tooltip {
color: var(--text-on-accent);
}`,
    },
    "accent-ultramarine": {
      general: `.predefined-accent-color.accent-ultramarine {
--accent: var(--ultramarine);
--accent-h: 228;
--accent-s: 100%;
--accent-l: 68%;
}`,
    },
    "accent-denim": {
      general: `.predefined-accent-color.accent-denim {
--accent: var(--denim);
--accent-h: 235;
--accent-s: 22%;
--accent-l: 38%;
}`,
    },
    "accent-mauve": {
      general: `.predefined-accent-color.accent-mauve {
--accent: var(--mauve);
--accent-h: 287;
--accent-s: 30%;
--accent-l: 41%;
}`,
    },
    "accent-wine": {
      general: `.predefined-accent-color.accent-wine {
--accent: var(--wine);
--accent-h: 353;
--accent-s: 42%;
--accent-l: 32%;
}`,
    },
    "accent-bubblegum": {
      general: `.predefined-accent-color.accent-bubblegum {
--accent: var(--bubblegum);
--accent-h: 352;
--accent-s: 100%;
--accent-l: 85%;
}

.accent-bubblegum {
--text-on-accent: #353132;
}

.colorful-tooltips.accent-bubblegum .tooltip {
color: var(--text-on-accent);
}`,
    },
    "accent-slate": {
      general: `.predefined-accent-color.accent-slate {
--accent: var(--slate);
--accent-h: 211;
--accent-s: 10%;
--accent-l: 56%;
}`,
    },
    "active-line-highlight": {
      general: `.active-line-highlight .cm-active.cm-line {
background-color: rgb(var(--accent), .1);
border-radius: 3px;
}`,
    },
    "hide-note-title": {
      general: `.hide-note-title .inline-title {
display: none;
}`,
    },
    "h2-underline": {
      general: `.h2-underline h2, .h2-underline .markdown-rendered h2, .h2-underline .HyperMD-header-2.cm-line {
border-bottom: 2px solid var(--h2-color);
width: 100%;
padding-bottom: 2px;
}`,
    },
    "h3-italics": {
      general: `.h3-italics h3, .h3-italics .markdown-rendered h3, .h3-italics .HyperMD-header-3, .h3-italics .cm-header-3 {
font-style: italic;
}`,
    },
    "h5-uppercase": {
      general: `.h5-uppercase h5, .h5-uppercase .markdown-rendered h5, .h5-uppercase .HyperMD-header-5, .h5-uppercase .cm-header-5 {
text-transform: uppercase;
font-weight: 600;
}`,
    },
    "h6-uppercase": {
      general: `.h6-uppercase h6, .h6-uppercase .markdown-rendered h6, .h6-uppercase .HyperMD-header-6, .h6-uppercase .cm-header-6 {
text-transform: uppercase;
font-weight: 500;
}`,
    },
    "em-underline": {
      general: `body.em-underline em, body.em-underline span.cm-em {
border-bottom: 5.5px solid var(--italic-underline-color);
}`,
    },
    "bold-underline": {
      general: `body.bold-underline strong, body.bold-underline span.cm-strong {
border-bottom: 5.5px solid var(--bold-underline-color);
}`,
    },
  },
};
