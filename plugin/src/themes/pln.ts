import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "pln",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "pln",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-dark-hsl-h: 210;
  --accent-dark-hsl-l: 63%;
  --accent-dark-hsl-s: 34%;
  --accent-h: var(--accent-dark-hsl-h, 210);
  --accent-l: var(--accent-dark-hsl-l, 63%);
  --accent-light-hsl-h: 213;
  --accent-light-hsl-l: 53%;
  --accent-light-hsl-s: 32%;
  --accent-s: var(--accent-dark-hsl-s, 34%);
  --b0: #2E3440;
  --b1: #3B4252;
  --b2: #434C5E;
  --b3: #4C566A;
  --b3-rgb: 76, 86, 106;
  --background-modifier-border: var(--b3, #4C566A);
  --background-modifier-border-focus: var(--color-base-40, #2E3440);
  --background-modifier-border-hover: var(--color-base-35, #4C566A);
  --background-modifier-error: var(--color-red, #bf616a);
  --background-modifier-error-hover: var(--color-red, #bf616a);
  --background-modifier-error-rgb: var(--color-red-rgb, 191, 97, 106);
  --background-modifier-form-field: var(--color-base-25, #2E3440);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #2E3440);
  --background-modifier-success: var(--color-green, #a3be8c);
  --background-modifier-success-rgb: var(--color-green-rgb, 163, 190, 140);
  --background-primary: var(--b1, #3B4252);
  --background-primary-alt: var(--b0, #2E3440);
  --background-secondary: var(--b0, #2E3440);
  --background-secondary-alt: var(--b0, #2E3440);
  --bases-cards-background: var(--background-primary, #3B4252);
  --bases-cards-cover-background: var(--background-primary-alt, #2E3440);
  --bases-embed-border-color: var(--background-modifier-border, #4C566A);
  --bases-group-heading-property-color: var(--text-muted, #ECEFF4);
  --bases-group-heading-property-size: var(--font-ui-smaller, 10px);
  --bases-table-border-color: var(--table-border-color, #4C566A);
  --bases-table-cell-background-active: var(--background-primary, #3B4252);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #2E3440);
  --bases-table-cell-background-selected: var(--table-selection, hsla(210, 34%, 63%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #2E3440);
  --bases-table-header-background: var(--background-primary, #3B4252);
  --bases-table-header-color: var(--text-muted, #ECEFF4);
  --bases-table-summary-background: var(--background-primary, #3B4252);
  --blockquote-border-color: var(--interactive-accent, hsl(210, 34%, 63%));
  --bold-weight: var(--font-bold, 700);
  --callout-bug: var(--color-red-rgb, 191, 97, 106);
  --callout-content-padding: 0 var(--size-4-2) var(--size-4-2) var(--size-4-3);
  --callout-default: var(--color-blue-rgb, 94, 129, 172);
  --callout-error: var(--color-red-rgb, 191, 97, 106);
  --callout-example: var(--color-purple-rgb, 180, 142, 173);
  --callout-fail: var(--color-red-rgb, 191, 97, 106);
  --callout-important: var(--color-cyan-rgb, 136, 192, 208);
  --callout-info: var(--color-blue-rgb, 94, 129, 172);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-orange-rgb, 208, 135, 112);
  --callout-radius: var(--radius-s, 5px);
  --callout-success: var(--color-green-rgb, 163, 190, 140);
  --callout-summary: var(--color-cyan-rgb, 136, 192, 208);
  --callout-tip: var(--color-cyan-rgb, 136, 192, 208);
  --callout-title-padding: var(--size-4-2) var(--size-4-2) var(--size-4-2) var(--size-4-3, 8px 8px 8px 12px);
  --callout-todo: var(--color-blue-rgb, 94, 129, 172);
  --callout-warning: var(--color-orange-rgb, 208, 135, 112);
  --canvas-background: var(--background-primary, #3B4252);
  --canvas-card-label-color: var(--text-faint, #D8DEE9);
  --canvas-color-1: var(--color-red-rgb, 191, 97, 106);
  --canvas-color-2: var(--color-orange-rgb, 208, 135, 112);
  --canvas-color-3: var(--color-yellow-rgb, 235, 203, 139);
  --canvas-color-4: var(--color-green-rgb, 163, 190, 140);
  --canvas-color-5: var(--color-cyan-rgb, 136, 192, 208);
  --canvas-color-6: var(--color-purple-rgb, 180, 142, 173);
  --canvas-dot-pattern: var(--color-base-30, #3B4252);
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, #f5f7f9);
  --checkbox-border-color: var(--text-faint, #D8DEE9);
  --checkbox-border-color-hover: var(--text-muted, #ECEFF4);
  --checkbox-color: var(--interactive-accent, hsl(210, 34%, 63%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(207, 34.68%, 72.45%));
  --checkbox-marker-color: var(--background-primary, #3B4252);
  --checkbox-size: var(--font-text-size, 1.1em);
  --checklist-done-color: var(--text-muted, #ECEFF4);
  --code-background: var(--background-primary-alt, #2E3440);
  --code-border-color: var(--background-modifier-border, #4C566A);
  --code-comment: var(--text-faint, #D8DEE9);
  --code-function: var(--color-yellow, #ebcb8b);
  --code-important: var(--color-orange, #d08770);
  --code-normal: var(--text-normal, #f5f7f9);
  --code-operator: var(--color-red, #bf616a);
  --code-property: var(--color-cyan, #88c0d0);
  --code-punctuation: var(--text-muted, #ECEFF4);
  --code-string: var(--color-green, #a3be8c);
  --code-tag: var(--color-red, #bf616a);
  --code-value: var(--color-purple, #b48ead);
  --collapse-icon-color: var(--text-faint, #D8DEE9);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(210, 34%, 63%));
  --color-base-00: var(--b0, #2E3440);
  --color-base-10: var(--b0, #2E3440);
  --color-base-100: var(--w3, #f5f7f9);
  --color-base-20: var(--b0, #2E3440);
  --color-base-25: var(--b0, #2E3440);
  --color-base-30: var(--b1, #3B4252);
  --color-base-35: var(--b3, #4C566A);
  --color-base-40: var(--b0, #2E3440);
  --color-base-50: var(--w0, #D8DEE9);
  --color-base-60: var(--w1, #E5E9F0);
  --color-base-70: var(--w2, #ECEFF4);
  --color-blue: #5e81ac;
  --color-blue-rgb: 94, 129, 172;
  --color-cyan: #88c0d0;
  --color-cyan-rgb: 136, 192, 208;
  --color-frost: #81a1c1;
  --color-frost-rgb: 129, 161, 193;
  --color-green: #a3be8c;
  --color-green-rgb: 163, 190, 140;
  --color-orange: #d08770;
  --color-orange-rgb: 208, 135, 112;
  --color-purple: #b48ead;
  --color-purple-rgb: 180, 142, 173;
  --color-red: #bf616a;
  --color-red-rgb: 191, 97, 106;
  --color-salmon: #FC6E68;
  --color-salmon-rgb: 252, 110, 104;
  --color-sea-green: #8fbcbb;
  --color-sea-green-rgb: 143, 188, 187;
  --color-yellow: var(--color-yellow-light, #ebcb8b);
  --color-yellow-dark: #e4b860;
  --color-yellow-dark-rgb: 228, 184, 96;
  --color-yellow-light: #ebcb8b;
  --color-yellow-light-rgb: 235, 203, 139;
  --color-yellow-rgb: var(--color-yellow-light-rgb, 235, 203, 139);
  --dark: var(--text-normal, var(--color-base-100, #f5f7f9));
  --darkgray: var(--text-normal, var(--color-base-100, #f5f7f9));
  --divider-color: var(--background-modifier-border, #4C566A);
  --divider-color-hover: var(--interactive-accent, hsl(210, 34%, 63%));
  --dropdown-background: var(--interactive-normal, #3B4252);
  --dropdown-background-hover: var(--interactive-hover, #4C566A);
  --embed-border-left: none;
  --embed-border-right: none;
  --file-folding-offset: 10px;
  --file-header-background: var(--background-primary, #3B4252);
  --file-header-background-focused: var(--background-primary, #3B4252);
  --file-header-font-size: var(--font-ui-small, 10px);
  --file-margins: var(--file-margins-y) var(--file-margins-x, 20px);
  --flair-background: var(--interactive-normal, #3B4252);
  --flair-color: var(--text-normal, #f5f7f9);
  --font-ui-large: 14px;
  --font-ui-medium: 12px;
  --font-ui-small: 10px;
  --font-ui-smaller: 10px;
  --footnote-divider-color: var(--metadata-divider-color, #4C566A);
  --footnote-id-color: var(--text-muted, #ECEFF4);
  --footnote-id-color-no-occurrences: var(--text-faint, #D8DEE9);
  --graph-node: var(--text-muted, #ECEFF4);
  --graph-node-attachment: var(--color-yellow, #ebcb8b);
  --graph-node-focused: var(--text-accent, hsl(210, 34%, 63%));
  --graph-node-tag: var(--color-green, #a3be8c);
  --graph-node-unresolved: var(--text-faint, #D8DEE9);
  --graph-text: var(--text-normal, #f5f7f9);
  --gray: var(--text-muted, var(--color-base-70, #ECEFF4));
  --h1-size: 2em;
  --h2-size: 1.6em;
  --h3-size: 1.37em;
  --h4-size: 1.25em;
  --h5-size: 1.12em;
  --h6-size: 1.12em;
  --header-height: 30px;
  --heading-formatting: var(--text-faint, #D8DEE9);
  --hr-color: var(--background-modifier-border, #4C566A);
  --icon-color: var(--text-muted, #ECEFF4);
  --icon-color-active: var(--text-accent, hsl(210, 34%, 63%));
  --icon-color-focused: var(--text-normal, #f5f7f9);
  --icon-color-hover: var(--text-muted, #ECEFF4);
  --inline-title-size: var(--h1-size, 2em);
  --input-date-separator: var(--text-faint, #D8DEE9);
  --input-placeholder-color: var(--text-faint, #D8DEE9);
  --interactive-accent: var(--color-accent, hsl(210, 34%, 63%));
  --interactive-accent-hover: var(--color-accent-1, hsl(207, 34.68%, 72.45%));
  --interactive-accent-hsl: var(--color-accent-hsl, 210, 34%, 63%);
  --interactive-hover: var(--color-base-35, #4C566A);
  --interactive-normal: var(--color-base-30, #3B4252);
  --light: var(--background-primary, var(--b1, #3B4252));
  --lightgray: var(--background-secondary, var(--b0, #2E3440));
  --link-color: var(--text-accent, hsl(210, 34%, 63%));
  --link-color-hover: var(--text-accent-hover, hsl(205, 35.7%, 81.27%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, hsl(210, 34%, 63%));
  --link-external-color-hover: var(--text-accent-hover, hsl(205, 35.7%, 81.27%));
  --link-unresolved-color: var(--text-accent, hsl(210, 34%, 63%));
  --link-unresolved-opacity: 100;
  --list-bullet-size: .5em;
  --list-marker-color: var(--text-faint, #D8DEE9);
  --list-marker-color-collapsed: var(--text-accent, hsl(210, 34%, 63%));
  --list-marker-color-hover: var(--text-muted, #ECEFF4);
  --list-spacing: 1px;
  --menu-background: var(--background-secondary, #2E3440);
  --menu-border-color: var(--background-modifier-border-hover, #4C566A);
  --metadata-background: rgba(76, 86, 106, 0.4);
  --metadata-border-color: var(--background-modifier-border, rgb(76, 86, 106));
  --metadata-border-radius: 5px;
  --metadata-display-reading: none;
  --metadata-divider-color: var(--background-modifier-border, #4C566A);
  --metadata-input-text-color: var(--text-normal, #f5f7f9);
  --metadata-label-text-color: var(--text-muted, #ECEFF4);
  --metadata-label-text-color-hover: var(--text-muted, #ECEFF4);
  --metadata-property-radius: 5px;
  --metadata-sidebar-input-font-size: var(--font-ui-small, 10px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 10px);
  --modal-background: var(--background-primary, #3B4252);
  --nav-collapse-icon-color: var(--collapse-icon-color, #D8DEE9);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #D8DEE9);
  --nav-heading-color: var(--text-normal, #f5f7f9);
  --nav-heading-color-collapsed: var(--text-faint, #D8DEE9);
  --nav-heading-color-collapsed-hover: var(--text-muted, #ECEFF4);
  --nav-heading-color-hover: var(--text-normal, #f5f7f9);
  --nav-item-color: var(--text-muted, #ECEFF4);
  --nav-item-color-active: var(--text-normal, #f5f7f9);
  --nav-item-color-highlighted: var(--text-accent, hsl(210, 34%, 63%));
  --nav-item-color-hover: var(--text-normal, #f5f7f9);
  --nav-item-color-selected: var(--text-normal, #f5f7f9);
  --nav-item-size: var(--font-ui-small, 10px);
  --nav-tag-color: var(--text-faint, #D8DEE9);
  --nav-tag-color-active: var(--text-muted, #ECEFF4);
  --nav-tag-color-hover: var(--text-muted, #ECEFF4);
  --p-spacing: .5rem;
  --pdf-background: var(--background-primary, #3B4252);
  --pdf-page-background: var(--background-primary, #3B4252);
  --pdf-sidebar-background: var(--background-primary, #3B4252);
  --pill-border-color: var(--background-modifier-border, #4C566A);
  --pill-border-color-hover: var(--background-modifier-border-hover, #4C566A);
  --pill-color: var(--text-muted, #ECEFF4);
  --pill-color-hover: var(--text-normal, #f5f7f9);
  --pill-color-remove: var(--text-faint, #D8DEE9);
  --pill-color-remove-hover: var(--text-accent, hsl(210, 34%, 63%));
  --pln-cards-color-rgb: var(--b3-rgb, 76, 86, 106);
  --prompt-background: var(--background-primary, #3B4252);
  --raised-background: var(--blur-background, color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent)));
  --ribbon-background: var(--background-secondary, #2E3440);
  --ribbon-background-collapsed: var(--background-primary, #3B4252);
  --search-clear-button-color: var(--text-muted, #ECEFF4);
  --search-icon-color: var(--text-muted, #ECEFF4);
  --search-result-background: var(--background-primary, #3B4252);
  --secondary: var(--text-accent, var(--color-accent, hsl(210, 34%, 63%)));
  --setting-group-heading-color: var(--text-normal, #f5f7f9);
  --setting-group-heading-size: var(--font-ui-medium, 12px);
  --setting-items-background: var(--background-primary-alt, #2E3440);
  --setting-items-border-color: var(--background-modifier-border, #4C566A);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #ECEFF4);
  --shiki-code-background: var(--code-background, #2E3440);
  --shiki-code-block-spacing: var(--p-spacing, .5rem);
  --shiki-code-comment: var(--text-faint, #D8DEE9);
  --shiki-code-function: var(--color-green, #a3be8c);
  --shiki-code-important: var(--color-orange, #d08770);
  --shiki-code-normal: var(--text-muted, #ECEFF4);
  --shiki-code-property: var(--color-cyan, #88c0d0);
  --shiki-code-punctuation: var(--text-muted, #ECEFF4);
  --shiki-code-string: var(--color-yellow, #ebcb8b);
  --shiki-code-value: var(--color-purple, #b48ead);
  --shiki-gutter-border-color: var(--background-modifier-border, #4C566A);
  --shiki-gutter-text-color: var(--text-faint, #D8DEE9);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #ECEFF4);
  --shiki-highlight-neutral: var(--shiki-code-normal, #ECEFF4);
  --shiki-terminal-dots-color: var(--text-faint, #D8DEE9);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #4C566A);
  --slider-track-background: var(--background-modifier-border, #4C566A);
  --status-bar-background: var(--background-secondary, #2E3440);
  --status-bar-border-color: var(--divider-color, #4C566A);
  --status-bar-font-size: var(--font-ui-smaller, 10px);
  --status-bar-text-color: var(--text-muted, #ECEFF4);
  --suggestion-background: var(--background-primary, #3B4252);
  --sync-avatar-color-1: var(--color-red, #bf616a);
  --sync-avatar-color-2: var(--color-orange, #d08770);
  --sync-avatar-color-3: var(--color-yellow, #ebcb8b);
  --sync-avatar-color-4: var(--color-green, #a3be8c);
  --sync-avatar-color-5: var(--color-cyan, #88c0d0);
  --sync-avatar-color-6: var(--color-blue, #5e81ac);
  --sync-avatar-color-7: var(--color-purple, #b48ead);
  --tab-background-active: var(--background-primary, #3B4252);
  --tab-container-background: var(--background-secondary, #2E3440);
  --tab-divider-color: var(--background-modifier-border-hover, #4C566A);
  --tab-font-size: var(--font-ui-small, 10px);
  --tab-outline-color: var(--divider-color, #4C566A);
  --tab-stacked-font-size: var(--font-ui-small, 10px);
  --tab-stacked-header-width: var(--header-height, 20px);
  --tab-stacked-text-align: right;
  --tab-stacked-text-transform: rotate(180deg);
  --tab-switcher-background: var(--background-secondary, #2E3440);
  --tab-text-color: var(--text-faint, #D8DEE9);
  --tab-text-color-active: var(--text-muted, #ECEFF4);
  --tab-text-color-focused: var(--text-muted, #ECEFF4);
  --tab-text-color-focused-active: var(--text-muted, #ECEFF4);
  --tab-text-color-focused-active-current: var(--text-normal, #f5f7f9);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(210, 34%, 63%));
  --table-add-button-border-color: var(--background-modifier-border, #4C566A);
  --table-border-color: var(--background-modifier-border, #4C566A);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(210, 34%, 63%));
  --table-drag-handle-color: var(--text-faint, #D8DEE9);
  --table-header-border-color: var(--table-border-color, #4C566A);
  --table-header-color: var(--text-normal, #f5f7f9);
  --table-selection-border-color: var(--interactive-accent, hsl(210, 34%, 63%));
  --tag-border-width: 2px;
  --tag-color: var(--text-accent, hsl(210, 34%, 63%));
  --tag-color-hover: var(--text-accent, hsl(210, 34%, 63%));
  --tag-radius: 5px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(205, 35.7%, 81.27%)));
  --text-accent: var(--color-accent, hsl(210, 34%, 63%));
  --text-accent-hover: var(--color-accent-2, hsl(205, 35.7%, 81.27%));
  --text-error: var(--color-salmon, #FC6E68);
  --text-faint: var(--color-base-50, #D8DEE9);
  --text-highlight-bg-active: rgba(180, 142, 173, 0.4);
  --text-muted: var(--color-base-70, #ECEFF4);
  --text-normal: var(--color-base-100, #f5f7f9);
  --text-success: var(--color-green, #a3be8c);
  --text-warning: var(--color-orange, #d08770);
  --titlebar-background: var(--background-secondary, #2E3440);
  --titlebar-background-focused: var(--background-secondary-alt, #2E3440);
  --titlebar-border-color: var(--background-modifier-border, #4C566A);
  --titlebar-text-color: var(--text-muted, #ECEFF4);
  --titlebar-text-color-focused: var(--text-normal, #f5f7f9);
  --traffic-lights-offset-x: var(--header-height, 30px);
  --traffic-lights-offset-y: var(--header-height, 30px);
  --vault-profile-color: var(--text-normal, #f5f7f9);
  --vault-profile-color-hover: var(--vault-profile-color, #f5f7f9);
  --vault-profile-font-size: var(--font-ui-small, 10px);
  --w0: #D8DEE9;
  --w0-rgb: 216, 222, 233;
  --w1: #E5E9F0;
  --w2: #ECEFF4;
  --w3: #f5f7f9;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(46, 52, 64));
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(59, 66, 82));
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(46, 52, 64));
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(76, 86, 106);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(46, 52, 64));
  border-left-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(245, 247, 249));
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(245, 247, 249));
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
  transform: matrix(1, 0, -0.176327, 1, 0, 0);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(245, 247, 249));
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
  transform: matrix(1, 0, -0.176327, 1, 0, 0);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(245, 247, 249));
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(235, 203, 139, 0.2));
  color: var(--text-normal, rgb(245, 247, 249));
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(245, 247, 249));
  font-size: 10px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(129, 161, 193));
  border-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(236, 239, 244));
  outline: rgb(236, 239, 244) none 0px;
  text-decoration-color: rgb(236, 239, 244);
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
  color: var(--link-unresolved-color, rgb(129, 161, 193));
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: rgba(129, 161, 193, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(129, 161, 193, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body dt {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(216, 222, 233));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: var(--table-text-color, rgb(245, 247, 249));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: var(--table-header-color, rgb(245, 247, 249));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(46, 52, 64));
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--code-normal, rgb(245, 247, 249));
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(46, 52, 64));
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(46, 52, 64));
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-left-width: 0px;
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  margin-left: -17px;
  width: var(--checkbox-size, 14.6562px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(236, 239, 244);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(236, 239, 244);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 247, 249);
  text-decoration: line-through;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 66, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1meGVtb2ppIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBmaWxsPSIjMkIzQjQ3IiBkPSJNMzA1LjQ4NiA0MDUuMjExYzAgMjcuMTkxLTIxLjc1MiA0OS40ODYtNDkuNDg2IDQ5LjQ4NmMtMjcuNzM0IDAtNDkuNDg2LTIyLjI5NS00OS40ODYtNDkuNDg2YzAtMjcuMTkgMjEuNzUyLTQ5LjQ4NSA0OS40ODYtNDkuNDg1YzI3LjczNCAwIDQ5LjQ4NiAyMi4yOTYgNDkuNDg2IDQ5LjQ4NXptLTI2LjgwOC05OC45NzFoLTQ1Ljg3M2MtNi44IDAtMTIuMzk4LTUuMzQ3LTEyLjcwOC0xMi4xNGwtOS43MTEtMjEyLjE5N2MtLjMzMi03LjI0NyA1LjQ1NC0xMy4zMDMgMTIuNzA4LTEzLjMwM2g2NS43ODFjNy4yNjYgMCAxMy4wNTYgNi4wNzUgMTIuNzA3IDEzLjMzMmwtMTAuMTk3IDIxMi4xOTdjLS4zMjUgNi43ODEtNS45MTggMTIuMTExLTEyLjcwNyAxMi4xMTF6Ij48L3BhdGg+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1meGVtb2ppIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBmaWxsPSIjMkIzQjQ3IiBkPSJNMzA1LjQ4NiA0MDUuMjExYzAgMjcuMTkxLTIxLjc1MiA0OS40ODYtNDkuNDg2IDQ5LjQ4NmMtMjcuNzM0IDAtNDkuNDg2LTIyLjI5NS00OS40ODYtNDkuNDg2YzAtMjcuMTkgMjEuNzUyLTQ5LjQ4NSA0OS40ODYtNDkuNDg1YzI3LjczNCAwIDQ5LjQ4NiAyMi4yOTYgNDkuNDg2IDQ5LjQ4NXptLTI2LjgwOC05OC45NzFoLTQ1Ljg3M2MtNi44IDAtMTIuMzk4LTUuMzQ3LTEyLjcwOC0xMi4xNGwtOS43MTEtMjEyLjE5N2MtLjMzMi03LjI0NyA1LjQ1NC0xMy4zMDMgMTIuNzA4LTEzLjMwM2g2NS43ODFjNy4yNjYgMCAxMy4wNTYgNi4wNzUgMTIuNzA3IDEzLjMzMmwtMTAuMTk3IDIxMi4xOTdjLS4zMjUgNi43ODEtNS45MTggMTIuMTExLTEyLjcwNyAxMi4xMTF6Ij48L3BhdGg+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 66, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3My4xcHgiIGhlaWdodD0iOTczLjFweCIgdmlld0JveD0iMCAwIDk3My4xIDk3My4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NzMuMSA5NzMuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTUwMi4yOSw3ODguMTk5aC00N2MtMzMuMSwwLTYwLDI2LjktNjAsNjB2NjQuOWMwLDMzLjEsMjYuOSw2MCw2MCw2MGg0N2MzMy4xMDEsMCw2MC0yNi45LDYwLTYwdi02NC45DQoJCUM1NjIuMjksODE1LDUzNS4zOTEsNzg4LjE5OSw1MDIuMjksNzg4LjE5OXoiLz4NCgk8cGF0aCBkPSJNMTcwLjg5LDI4NS44bDg2LjcsMTAuOGMyNy41LDMuNCw1My42LTEyLjQsNjMuNS0zOC4zYzEyLjUtMzIuNywyOS45LTU4LjUsNTIuMi03Ny4zYzMxLjYwMS0yNi42LDcwLjktNDAsMTE3LjktNDANCgkJYzQ4LjcsMCw4Ny41LDEyLjgsMTE2LjMsMzguM2MyOC44LDI1LjYsNDMuMSw1Ni4yLDQzLjEsOTIuMWMwLDI1LjgtOC4xLDQ5LjQtMjQuMyw3MC44Yy0xMC41LDEzLjYtNDIuOCw0Mi4yLTk2LjcsODUuOQ0KCQljLTU0LDQzLjctODkuODk5LDgzLjA5OS0xMDcuODk5LDExOC4wOTljLTE4LjQsMzUuODAxLTI0LjgsNzUuNS0yNi40LDExNS4zMDFjLTEuMzk5LDM0LjEsMjUuOCw2Mi41LDYwLDYyLjVoNDkNCgkJYzMxLjIsMCw1Ny0yMy45LDU5LjgtNTQuOWMyLTIyLjI5OSw1LjctMzkuMTk5LDExLjMwMS01MC42OTljOS4zOTktMTkuNzAxLDMzLjY5OS00NS43MDEsNzIuNjk5LTc4LjENCgkJQzcyMy41OSw0NzcuOCw3NzIuNzksNDI4LjQsNzk1Ljg5MSwzOTJjMjMtMzYuMywzNC42LTc0LjgsMzQuNi0xMTUuNWMwLTczLjUtMzEuMy0xMzgtOTQtMTkzLjRjLTYyLjYtNTUuNC0xNDctODMuMS0yNTMtODMuMQ0KCQljLTEwMC44LDAtMTgyLjEsMjcuMy0yNDQuMSw4MmMtNTIuOCw0Ni42LTg0LjksMTAxLjgtOTYuMiwxNjUuNUMxMzkuNjksMjY2LjEsMTUyLjM5LDI4My41LDE3MC44OSwyODUuOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3My4xcHgiIGhlaWdodD0iOTczLjFweCIgdmlld0JveD0iMCAwIDk3My4xIDk3My4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NzMuMSA5NzMuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTUwMi4yOSw3ODguMTk5aC00N2MtMzMuMSwwLTYwLDI2LjktNjAsNjB2NjQuOWMwLDMzLjEsMjYuOSw2MCw2MCw2MGg0N2MzMy4xMDEsMCw2MC0yNi45LDYwLTYwdi02NC45DQoJCUM1NjIuMjksODE1LDUzNS4zOTEsNzg4LjE5OSw1MDIuMjksNzg4LjE5OXoiLz4NCgk8cGF0aCBkPSJNMTcwLjg5LDI4NS44bDg2LjcsMTAuOGMyNy41LDMuNCw1My42LTEyLjQsNjMuNS0zOC4zYzEyLjUtMzIuNywyOS45LTU4LjUsNTIuMi03Ny4zYzMxLjYwMS0yNi42LDcwLjktNDAsMTE3LjktNDANCgkJYzQ4LjcsMCw4Ny41LDEyLjgsMTE2LjMsMzguM2MyOC44LDI1LjYsNDMuMSw1Ni4yLDQzLjEsOTIuMWMwLDI1LjgtOC4xLDQ5LjQtMjQuMyw3MC44Yy0xMC41LDEzLjYtNDIuOCw0Mi4yLTk2LjcsODUuOQ0KCQljLTU0LDQzLjctODkuODk5LDgzLjA5OS0xMDcuODk5LDExOC4wOTljLTE4LjQsMzUuODAxLTI0LjgsNzUuNS0yNi40LDExNS4zMDFjLTEuMzk5LDM0LjEsMjUuOCw2Mi41LDYwLDYyLjVoNDkNCgkJYzMxLjIsMCw1Ny0yMy45LDU5LjgtNTQuOWMyLTIyLjI5OSw1LjctMzkuMTk5LDExLjMwMS01MC42OTljOS4zOTktMTkuNzAxLDMzLjY5OS00NS43MDEsNzIuNjk5LTc4LjENCgkJQzcyMy41OSw0NzcuOCw3NzIuNzksNDI4LjQsNzk1Ljg5MSwzOTJjMjMtMzYuMywzNC42LTc0LjgsMzQuNi0xMTUuNWMwLTczLjUtMzEuMy0xMzgtOTQtMTkzLjRjLTYyLjYtNTUuNC0xNDctODMuMS0yNTMtODMuMQ0KCQljLTEwMC44LDAtMTgyLjEsMjcuMy0yNDQuMSw4MmMtNTIuOCw0Ni42LTg0LjksMTAxLjgtOTYuMiwxNjUuNUMxMzkuNjksMjY2LjEsMTUyLjM5LDI4My41LDE3MC44OSwyODUuOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
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
  background-color: rgb(216, 222, 233);
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

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iLTUgMCAyNSAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+cmlnaHQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJ1aS1nYW1ibGluZy13ZWJzaXRlLWxpbmVkLWljbm9zLWNhc2lub3NodW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzgzLjAwMDAwMCwgLTE1OC4wMDAwMDApIiBmaWxsPSIjMUMxQzFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzNi40NTM1MTcsMzguNTY5MjQ5IEw0NDcuMzAyNDU5LDQ4Ljk5MzgxNTggTDQ0Ny4zOTI2MSw0OS4wNzQ4ODAyIEM0NDcuNzU1MzQsNDkuNDIzNDU0IDQ0Ny45NjgxNTksNDkuODg3MDQ2MSA0NDgsNTAuNDM4MjIyNyBMNDQ3Ljk5ODEzNSw1MC42MjI4MjI5IEM0NDcuOTY4MTU5LDUxLjExMjk1MzkgNDQ3Ljc1NTM0LDUxLjU3NjU0NiA0NDcuMzMzNjc1LDUxLjk3NzQ0NjkgTDQ0Ny4zMzkwOTUsNTEuOTY4OTgzMiBMNDM2LjQ1MzUxNyw2Mi40MzA3NTEgQzQzNS42NjM2OTQsNjMuMTg5NzQ5NyA0MzQuMzk5MDAxLDYzLjE4OTc0OTcgNDMzLjYwOTE3OCw2Mi40MzA3NTEgQzQzMi43OTY5NDEsNjEuNjUwMjEzIDQzMi43OTY5NDEsNjAuMzY3NTkyNCA0MzMuNjA5NDMyLDU5LjU4NjgxMDYgTDQ0My4wMTIzMjQsNTAuNTU3MjQ3MSBMNDMzLjYwOTE3OCw0MS40MTI5NDU2IEM0MzIuNzk2OTQxLDQwLjYzMjQwNzYgNDMyLjc5Njk0MSwzOS4zNDk3ODcgNDMzLjYwOTE3OCwzOC41NjkyNDkgQzQzNC4zOTkwMDEsMzcuODEwMjUwMyA0MzUuNjYzNjk0LDM3LjgxMDI1MDMgNDM2LjQ1MzUxNywzOC41NjkyNDkgWiIgaWQ9InJpZ2h0Ij48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iLTUgMCAyNSAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+cmlnaHQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJ1aS1nYW1ibGluZy13ZWJzaXRlLWxpbmVkLWljbm9zLWNhc2lub3NodW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzgzLjAwMDAwMCwgLTE1OC4wMDAwMDApIiBmaWxsPSIjMUMxQzFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzNi40NTM1MTcsMzguNTY5MjQ5IEw0NDcuMzAyNDU5LDQ4Ljk5MzgxNTggTDQ0Ny4zOTI2MSw0OS4wNzQ4ODAyIEM0NDcuNzU1MzQsNDkuNDIzNDU0IDQ0Ny45NjgxNTksNDkuODg3MDQ2MSA0NDgsNTAuNDM4MjIyNyBMNDQ3Ljk5ODEzNSw1MC42MjI4MjI5IEM0NDcuOTY4MTU5LDUxLjExMjk1MzkgNDQ3Ljc1NTM0LDUxLjU3NjU0NiA0NDcuMzMzNjc1LDUxLjk3NzQ0NjkgTDQ0Ny4zMzkwOTUsNTEuOTY4OTgzMiBMNDM2LjQ1MzUxNyw2Mi40MzA3NTEgQzQzNS42NjM2OTQsNjMuMTg5NzQ5NyA0MzQuMzk5MDAxLDYzLjE4OTc0OTcgNDMzLjYwOTE3OCw2Mi40MzA3NTEgQzQzMi43OTY5NDEsNjEuNjUwMjEzIDQzMi43OTY5NDEsNjAuMzY3NTkyNCA0MzMuNjA5NDMyLDU5LjU4NjgxMDYgTDQ0My4wMTIzMjQsNTAuNTU3MjQ3MSBMNDMzLjYwOTE3OCw0MS40MTI5NDU2IEM0MzIuNzk2OTQxLDQwLjYzMjQwNzYgNDMyLjc5Njk0MSwzOS4zNDk3ODcgNDMzLjYwOTE3OCwzOC41NjkyNDkgQzQzNC4zOTkwMDEsMzcuODEwMjUwMyA0MzUuNjYzNjk0LDM3LjgxMDI1MDMgNDM2LjQ1MzUxNywzOC41NjkyNDkgWiIgaWQ9InJpZ2h0Ij48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
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
  mask-image: url("data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e %3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 488.9 488.9' style='enable-background:new 0 0 488.9 488.9%3b' xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath d='M239.15%2c0c31.9%2c0%2c57.7%2c25.8%2c57.7%2c57.7s-25.8%2c57.7-57.7%2c57.7s-57.7-25.8-57.7-57.7S207.25%2c0%2c239.15%2c0z M291.65%2c151.6h-1.5 h-92.8h-3.4c-19%2c0-34.3%2c15.4-34.3%2c34.3l0%2c0c0%2c19%2c15.4%2c34.3%2c34.3%2c34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e %3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 488.9 488.9' style='enable-background:new 0 0 488.9 488.9%3b' xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath d='M239.15%2c0c31.9%2c0%2c57.7%2c25.8%2c57.7%2c57.7s-25.8%2c57.7-57.7%2c57.7s-57.7-25.8-57.7-57.7S207.25%2c0%2c239.15%2c0z M291.65%2c151.6h-1.5 h-92.8h-3.4c-19%2c0-34.3%2c15.4-34.3%2c34.3l0%2c0c0%2c19%2c15.4%2c34.3%2c34.3%2c34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
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
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--color-frost-rgb, 129, 161, 193);
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="blank"] {
  --accent-h: 210;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-active-hover: hsla(210, 34%, 63%, 0.1);
  --background-modifier-border: #4C566A;
  --background-modifier-border-focus: #2E3440;
  --background-modifier-border-hover: #4C566A;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #2E3440;
  --background-modifier-form-field-hover: #2E3440;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #3B4252;
  --background-primary-alt: #2E3440;
  --background-secondary: #2E3440;
  --background-secondary-alt: #2E3440;
  --blockquote-border-color: hsl(210, 34%, 63%);
  --blur-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--callout-default, 94, 129, 172);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #3B4252;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #3B4252;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #f5f7f9;
  --checkbox-border-color: #D8DEE9;
  --checkbox-border-color-hover: #ECEFF4;
  --checkbox-color: hsl(210, 34%, 63%);
  --checkbox-color-hover: hsl(207, 34.68%, 72.45%);
  --checkbox-marker-color: #3B4252;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #ECEFF4;
  --clickable-icon-radius: 4px;
  --code-background: #2E3440;
  --code-border-color: #4C566A;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #D8DEE9;
  --code-function: #ebcb8b;
  --code-important: #d08770;
  --code-keyword: #fa99cd;
  --code-normal: #f5f7f9;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #ECEFF4;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #D8DEE9;
  --collapse-icon-color-collapsed: hsl(210, 34%, 63%);
  --color-accent: hsl(210, 34%, 63%);
  --color-accent-1: hsl(207, 34.68%, 72.45%);
  --color-accent-2: hsl(205, 35.7%, 81.27%);
  --color-accent-hsl: 210, 34%, 63%;
  --color-base-00: #2E3440;
  --color-base-10: #2E3440;
  --color-base-100: #f5f7f9;
  --color-base-20: #2E3440;
  --color-base-25: #2E3440;
  --color-base-30: #3B4252;
  --color-base-35: #4C566A;
  --color-base-40: #2E3440;
  --color-base-50: #D8DEE9;
  --color-base-60: #E5E9F0;
  --color-base-70: #ECEFF4;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 235, 203, 139;
  --divider-color: #4C566A;
  --divider-color-hover: hsl(210, 34%, 63%);
  --divider-vertical-height: 100%;
  --dropdown-background: #3B4252;
  --dropdown-background-hover: #4C566A;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #3B4252;
  --flair-color: #f5f7f9;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #4C566A;
  --graph-node: #ECEFF4;
  --graph-node-attachment: #ebcb8b;
  --graph-node-focused: hsl(210, 34%, 63%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #D8DEE9;
  --graph-text: #f5f7f9;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #D8DEE9;
  --heading-spacing: 1rem;
  --hr-color: #4C566A;
  --interactive-accent: hsl(210, 34%, 63%);
  --interactive-accent-hover: hsl(207, 34.68%, 72.45%);
  --interactive-accent-hsl: 210, 34%, 63%;
  --interactive-hover: #4C566A;
  --interactive-normal: #3B4252;
  --link-color: hsl(210, 34%, 63%);
  --link-color-hover: hsl(205, 35.7%, 81.27%);
  --link-external-color: hsl(210, 34%, 63%);
  --link-external-color-hover: hsl(205, 35.7%, 81.27%);
  --link-unresolved-color: hsl(210, 34%, 63%);
  --link-unresolved-decoration-color: hsla(210, 34%, 63%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2E3440;
  --menu-border-color: #4C566A;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #3B4252;
  --pdf-page-background: #3B4252;
  --pdf-shadow: 0 0 0 1px #4C566A;
  --pdf-sidebar-background: #3B4252;
  --pdf-thumbnail-shadow: 0 0 0 1px #4C566A;
  --pln-cards-color-rgb: 76, 86, 106;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #ECEFF4;
  --search-icon-color: #ECEFF4;
  --search-result-background: #3B4252;
  --setting-group-heading-color: #f5f7f9;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #2E3440;
  --setting-items-border-color: #4C566A;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #ECEFF4;
  --shiki-code-background: #2E3440;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #D8DEE9;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #ECEFF4;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #ECEFF4;
  --shiki-code-string: #ebcb8b;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #4C566A;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #D8DEE9;
  --shiki-gutter-text-color-highlight: #ECEFF4;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #ECEFF4;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #D8DEE9;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #3B4252;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #3B4252;
  --tab-divider-color: #4C566A;
  --tab-font-size: 10px;
  --tab-outline-color: #4C566A;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #2E3440;
  --tab-switcher-menubar-background: linear-gradient(to top, #2E3440, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 34%, 63%);
  --tab-text-color: #D8DEE9;
  --tab-text-color-active: #ECEFF4;
  --tab-text-color-focused: #ECEFF4;
  --tab-text-color-focused-active: #ECEFF4;
  --tab-text-color-focused-active-current: #f5f7f9;
  --tab-text-color-focused-highlighted: hsl(210, 34%, 63%);
  --table-add-button-border-color: #4C566A;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(210, 34%, 63%);
  --table-drag-handle-color: #D8DEE9;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #4C566A;
  --table-header-border-width: 1px;
  --table-header-color: #f5f7f9;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(210, 34%, 63%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(210, 34%, 63%);
  --table-text-size: 16px;
  --tag-background: hsla(210, 34%, 63%, 0.1);
  --tag-background-hover: hsla(210, 34%, 63%, 0.2);
  --tag-border-color: hsla(210, 34%, 63%, 0.15);
  --tag-border-color-hover: hsla(210, 34%, 63%, 0.15);
  --tag-color: hsl(210, 34%, 63%);
  --tag-color-hover: hsl(210, 34%, 63%);
  --tag-size: 0.875em;
  --text-accent: hsl(210, 34%, 63%);
  --text-accent-hover: hsl(205, 35.7%, 81.27%);
  --text-error: #FC6E68;
  --text-faint: #D8DEE9;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #ECEFF4;
  --text-normal: #f5f7f9;
  --text-selection: hsla(210, 34%, 63%, 0.33);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 129, 172);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="blank-titled"] {
  --accent-h: 210;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-active-hover: hsla(210, 34%, 63%, 0.1);
  --background-modifier-border: #4C566A;
  --background-modifier-border-focus: #2E3440;
  --background-modifier-border-hover: #4C566A;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #2E3440;
  --background-modifier-form-field-hover: #2E3440;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #3B4252;
  --background-primary-alt: #2E3440;
  --background-secondary: #2E3440;
  --background-secondary-alt: #2E3440;
  --blockquote-border-color: hsl(210, 34%, 63%);
  --blur-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--callout-default, 94, 129, 172);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #3B4252;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #3B4252;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #f5f7f9;
  --checkbox-border-color: #D8DEE9;
  --checkbox-border-color-hover: #ECEFF4;
  --checkbox-color: hsl(210, 34%, 63%);
  --checkbox-color-hover: hsl(207, 34.68%, 72.45%);
  --checkbox-marker-color: #3B4252;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #ECEFF4;
  --clickable-icon-radius: 4px;
  --code-background: #2E3440;
  --code-border-color: #4C566A;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #D8DEE9;
  --code-function: #ebcb8b;
  --code-important: #d08770;
  --code-keyword: #fa99cd;
  --code-normal: #f5f7f9;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #ECEFF4;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #D8DEE9;
  --collapse-icon-color-collapsed: hsl(210, 34%, 63%);
  --color-accent: hsl(210, 34%, 63%);
  --color-accent-1: hsl(207, 34.68%, 72.45%);
  --color-accent-2: hsl(205, 35.7%, 81.27%);
  --color-accent-hsl: 210, 34%, 63%;
  --color-base-00: #2E3440;
  --color-base-10: #2E3440;
  --color-base-100: #f5f7f9;
  --color-base-20: #2E3440;
  --color-base-25: #2E3440;
  --color-base-30: #3B4252;
  --color-base-35: #4C566A;
  --color-base-40: #2E3440;
  --color-base-50: #D8DEE9;
  --color-base-60: #E5E9F0;
  --color-base-70: #ECEFF4;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 235, 203, 139;
  --divider-color: #4C566A;
  --divider-color-hover: hsl(210, 34%, 63%);
  --divider-vertical-height: 100%;
  --dropdown-background: #3B4252;
  --dropdown-background-hover: #4C566A;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #3B4252;
  --flair-color: #f5f7f9;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #4C566A;
  --graph-node: #ECEFF4;
  --graph-node-attachment: #ebcb8b;
  --graph-node-focused: hsl(210, 34%, 63%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #D8DEE9;
  --graph-text: #f5f7f9;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #D8DEE9;
  --heading-spacing: 1rem;
  --hr-color: #4C566A;
  --interactive-accent: hsl(210, 34%, 63%);
  --interactive-accent-hover: hsl(207, 34.68%, 72.45%);
  --interactive-accent-hsl: 210, 34%, 63%;
  --interactive-hover: #4C566A;
  --interactive-normal: #3B4252;
  --link-color: hsl(210, 34%, 63%);
  --link-color-hover: hsl(205, 35.7%, 81.27%);
  --link-external-color: hsl(210, 34%, 63%);
  --link-external-color-hover: hsl(205, 35.7%, 81.27%);
  --link-unresolved-color: hsl(210, 34%, 63%);
  --link-unresolved-decoration-color: hsla(210, 34%, 63%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2E3440;
  --menu-border-color: #4C566A;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #3B4252;
  --pdf-page-background: #3B4252;
  --pdf-shadow: 0 0 0 1px #4C566A;
  --pdf-sidebar-background: #3B4252;
  --pdf-thumbnail-shadow: 0 0 0 1px #4C566A;
  --pln-cards-color-rgb: 76, 86, 106;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #ECEFF4;
  --search-icon-color: #ECEFF4;
  --search-result-background: #3B4252;
  --setting-group-heading-color: #f5f7f9;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #2E3440;
  --setting-items-border-color: #4C566A;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #ECEFF4;
  --shiki-code-background: #2E3440;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #D8DEE9;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #ECEFF4;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #ECEFF4;
  --shiki-code-string: #ebcb8b;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #4C566A;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #D8DEE9;
  --shiki-gutter-text-color-highlight: #ECEFF4;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #ECEFF4;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #D8DEE9;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #3B4252;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #3B4252;
  --tab-divider-color: #4C566A;
  --tab-font-size: 10px;
  --tab-outline-color: #4C566A;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #2E3440;
  --tab-switcher-menubar-background: linear-gradient(to top, #2E3440, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 34%, 63%);
  --tab-text-color: #D8DEE9;
  --tab-text-color-active: #ECEFF4;
  --tab-text-color-focused: #ECEFF4;
  --tab-text-color-focused-active: #ECEFF4;
  --tab-text-color-focused-active-current: #f5f7f9;
  --tab-text-color-focused-highlighted: hsl(210, 34%, 63%);
  --table-add-button-border-color: #4C566A;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(210, 34%, 63%);
  --table-drag-handle-color: #D8DEE9;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #4C566A;
  --table-header-border-width: 1px;
  --table-header-color: #f5f7f9;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(210, 34%, 63%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(210, 34%, 63%);
  --table-text-size: 16px;
  --tag-background: hsla(210, 34%, 63%, 0.1);
  --tag-background-hover: hsla(210, 34%, 63%, 0.2);
  --tag-border-color: hsla(210, 34%, 63%, 0.15);
  --tag-border-color-hover: hsla(210, 34%, 63%, 0.15);
  --tag-color: hsl(210, 34%, 63%);
  --tag-color-hover: hsl(210, 34%, 63%);
  --tag-size: 0.875em;
  --text-accent: hsl(210, 34%, 63%);
  --text-accent-hover: hsl(205, 35.7%, 81.27%);
  --text-error: #FC6E68;
  --text-faint: #D8DEE9;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #ECEFF4;
  --text-normal: #f5f7f9;
  --text-selection: hsla(210, 34%, 63%, 0.33);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 129, 172);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--color-red-rgb, 191, 97, 106);
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(191, 97, 106);
  border-left-width: 2px;
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgb(191, 97, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--color-salmon-rgb, 252, 110, 104);
  background: rgba(252, 110, 104, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(252, 110, 104, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(252, 110, 104);
  border-left-width: 2px;
  border-right-color: rgba(252, 110, 104, 0.25);
  border-top-color: rgb(252, 110, 104);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--color-purple-rgb, 180, 142, 173);
  background: rgba(180, 142, 173, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(180, 142, 173);
  border-left-width: 2px;
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgb(180, 142, 173);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--color-orange-rgb, 208, 135, 112);
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(208, 135, 112);
  border-left-width: 2px;
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgb(208, 135, 112);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --accent-h: 210;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-active-hover: hsla(210, 34%, 63%, 0.1);
  --background-modifier-border: #4C566A;
  --background-modifier-border-focus: #2E3440;
  --background-modifier-border-hover: #4C566A;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #2E3440;
  --background-modifier-form-field-hover: #2E3440;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #3B4252;
  --background-primary-alt: #2E3440;
  --background-secondary: #2E3440;
  --background-secondary-alt: #2E3440;
  --blockquote-border-color: hsl(210, 34%, 63%);
  --blur-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--color-yellow-light-rgb, 235, 203, 139);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #3B4252;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #3B4252;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #f5f7f9;
  --checkbox-border-color: #D8DEE9;
  --checkbox-border-color-hover: #ECEFF4;
  --checkbox-color: hsl(210, 34%, 63%);
  --checkbox-color-hover: hsl(207, 34.68%, 72.45%);
  --checkbox-marker-color: #3B4252;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #ECEFF4;
  --clickable-icon-radius: 4px;
  --code-background: #2E3440;
  --code-border-color: #4C566A;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #D8DEE9;
  --code-function: #ebcb8b;
  --code-important: #d08770;
  --code-keyword: #fa99cd;
  --code-normal: #f5f7f9;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #ECEFF4;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #D8DEE9;
  --collapse-icon-color-collapsed: hsl(210, 34%, 63%);
  --color-accent: hsl(210, 34%, 63%);
  --color-accent-1: hsl(207, 34.68%, 72.45%);
  --color-accent-2: hsl(205, 35.7%, 81.27%);
  --color-accent-hsl: 210, 34%, 63%;
  --color-base-00: #2E3440;
  --color-base-10: #2E3440;
  --color-base-100: #f5f7f9;
  --color-base-20: #2E3440;
  --color-base-25: #2E3440;
  --color-base-30: #3B4252;
  --color-base-35: #4C566A;
  --color-base-40: #2E3440;
  --color-base-50: #D8DEE9;
  --color-base-60: #E5E9F0;
  --color-base-70: #ECEFF4;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 235, 203, 139;
  --divider-color: #4C566A;
  --divider-color-hover: hsl(210, 34%, 63%);
  --divider-vertical-height: 100%;
  --dropdown-background: #3B4252;
  --dropdown-background-hover: #4C566A;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #3B4252;
  --flair-color: #f5f7f9;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #4C566A;
  --graph-node: #ECEFF4;
  --graph-node-attachment: #ebcb8b;
  --graph-node-focused: hsl(210, 34%, 63%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #D8DEE9;
  --graph-text: #f5f7f9;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #D8DEE9;
  --heading-spacing: 1rem;
  --hr-color: #4C566A;
  --interactive-accent: hsl(210, 34%, 63%);
  --interactive-accent-hover: hsl(207, 34.68%, 72.45%);
  --interactive-accent-hsl: 210, 34%, 63%;
  --interactive-hover: #4C566A;
  --interactive-normal: #3B4252;
  --link-color: hsl(210, 34%, 63%);
  --link-color-hover: hsl(205, 35.7%, 81.27%);
  --link-external-color: hsl(210, 34%, 63%);
  --link-external-color-hover: hsl(205, 35.7%, 81.27%);
  --link-unresolved-color: hsl(210, 34%, 63%);
  --link-unresolved-decoration-color: hsla(210, 34%, 63%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2E3440;
  --menu-border-color: #4C566A;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #3B4252;
  --pdf-page-background: #3B4252;
  --pdf-shadow: 0 0 0 1px #4C566A;
  --pdf-sidebar-background: #3B4252;
  --pdf-thumbnail-shadow: 0 0 0 1px #4C566A;
  --pln-cards-color-rgb: 76, 86, 106;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #ECEFF4;
  --search-icon-color: #ECEFF4;
  --search-result-background: #3B4252;
  --setting-group-heading-color: #f5f7f9;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #2E3440;
  --setting-items-border-color: #4C566A;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #ECEFF4;
  --shiki-code-background: #2E3440;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #D8DEE9;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #ECEFF4;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #ECEFF4;
  --shiki-code-string: #ebcb8b;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #4C566A;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #D8DEE9;
  --shiki-gutter-text-color-highlight: #ECEFF4;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #ECEFF4;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #D8DEE9;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #3B4252;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #3B4252;
  --tab-divider-color: #4C566A;
  --tab-font-size: 10px;
  --tab-outline-color: #4C566A;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #2E3440;
  --tab-switcher-menubar-background: linear-gradient(to top, #2E3440, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 34%, 63%);
  --tab-text-color: #D8DEE9;
  --tab-text-color-active: #ECEFF4;
  --tab-text-color-focused: #ECEFF4;
  --tab-text-color-focused-active: #ECEFF4;
  --tab-text-color-focused-active-current: #f5f7f9;
  --tab-text-color-focused-highlighted: hsl(210, 34%, 63%);
  --table-add-button-border-color: #4C566A;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(210, 34%, 63%);
  --table-drag-handle-color: #D8DEE9;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #4C566A;
  --table-header-border-width: 1px;
  --table-header-color: #f5f7f9;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(210, 34%, 63%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(210, 34%, 63%);
  --table-text-size: 16px;
  --tag-background: hsla(210, 34%, 63%, 0.1);
  --tag-background-hover: hsla(210, 34%, 63%, 0.2);
  --tag-border-color: hsla(210, 34%, 63%, 0.15);
  --tag-border-color-hover: hsla(210, 34%, 63%, 0.15);
  --tag-color: hsl(210, 34%, 63%);
  --tag-color-hover: hsl(210, 34%, 63%);
  --tag-size: 0.875em;
  --text-accent: hsl(210, 34%, 63%);
  --text-accent-hover: hsl(205, 35.7%, 81.27%);
  --text-error: #FC6E68;
  --text-faint: #D8DEE9;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #ECEFF4;
  --text-normal: #f5f7f9;
  --text-selection: hsla(210, 34%, 63%, 0.33);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(235, 203, 139, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 203, 139);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(235, 203, 139, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(235, 203, 139);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--color-cyan-rgb, 136, 192, 208);
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="links"] {
  --accent-h: 210;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-active-hover: hsla(210, 34%, 63%, 0.1);
  --background-modifier-border: #4C566A;
  --background-modifier-border-focus: #2E3440;
  --background-modifier-border-hover: #4C566A;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #2E3440;
  --background-modifier-form-field-hover: #2E3440;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #3B4252;
  --background-primary-alt: #2E3440;
  --background-secondary: #2E3440;
  --background-secondary-alt: #2E3440;
  --blockquote-border-color: hsl(210, 34%, 63%);
  --blur-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--w0-rgb, 216, 222, 233);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #3B4252;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #3B4252;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #f5f7f9;
  --checkbox-border-color: #D8DEE9;
  --checkbox-border-color-hover: #ECEFF4;
  --checkbox-color: hsl(210, 34%, 63%);
  --checkbox-color-hover: hsl(207, 34.68%, 72.45%);
  --checkbox-marker-color: #3B4252;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #ECEFF4;
  --clickable-icon-radius: 4px;
  --code-background: #2E3440;
  --code-border-color: #4C566A;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #D8DEE9;
  --code-function: #ebcb8b;
  --code-important: #d08770;
  --code-keyword: #fa99cd;
  --code-normal: #f5f7f9;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #ECEFF4;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #D8DEE9;
  --collapse-icon-color-collapsed: hsl(210, 34%, 63%);
  --color-accent: hsl(210, 34%, 63%);
  --color-accent-1: hsl(207, 34.68%, 72.45%);
  --color-accent-2: hsl(205, 35.7%, 81.27%);
  --color-accent-hsl: 210, 34%, 63%;
  --color-base-00: #2E3440;
  --color-base-10: #2E3440;
  --color-base-100: #f5f7f9;
  --color-base-20: #2E3440;
  --color-base-25: #2E3440;
  --color-base-30: #3B4252;
  --color-base-35: #4C566A;
  --color-base-40: #2E3440;
  --color-base-50: #D8DEE9;
  --color-base-60: #E5E9F0;
  --color-base-70: #ECEFF4;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 235, 203, 139;
  --divider-color: #4C566A;
  --divider-color-hover: hsl(210, 34%, 63%);
  --divider-vertical-height: 100%;
  --dropdown-background: #3B4252;
  --dropdown-background-hover: #4C566A;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #3B4252;
  --flair-color: #f5f7f9;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #4C566A;
  --graph-node: #ECEFF4;
  --graph-node-attachment: #ebcb8b;
  --graph-node-focused: hsl(210, 34%, 63%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #D8DEE9;
  --graph-text: #f5f7f9;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #D8DEE9;
  --heading-spacing: 1rem;
  --hr-color: #4C566A;
  --interactive-accent: hsl(210, 34%, 63%);
  --interactive-accent-hover: hsl(207, 34.68%, 72.45%);
  --interactive-accent-hsl: 210, 34%, 63%;
  --interactive-hover: #4C566A;
  --interactive-normal: #3B4252;
  --link-color: hsl(210, 34%, 63%);
  --link-color-hover: hsl(205, 35.7%, 81.27%);
  --link-external-color: hsl(210, 34%, 63%);
  --link-external-color-hover: hsl(205, 35.7%, 81.27%);
  --link-unresolved-color: hsl(210, 34%, 63%);
  --link-unresolved-decoration-color: hsla(210, 34%, 63%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2E3440;
  --menu-border-color: #4C566A;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #3B4252;
  --pdf-page-background: #3B4252;
  --pdf-shadow: 0 0 0 1px #4C566A;
  --pdf-sidebar-background: #3B4252;
  --pdf-thumbnail-shadow: 0 0 0 1px #4C566A;
  --pln-cards-color-rgb: 76, 86, 106;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #ECEFF4;
  --search-icon-color: #ECEFF4;
  --search-result-background: #3B4252;
  --setting-group-heading-color: #f5f7f9;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #2E3440;
  --setting-items-border-color: #4C566A;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #ECEFF4;
  --shiki-code-background: #2E3440;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #D8DEE9;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #ECEFF4;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #ECEFF4;
  --shiki-code-string: #ebcb8b;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #4C566A;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #D8DEE9;
  --shiki-gutter-text-color-highlight: #ECEFF4;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #ECEFF4;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #D8DEE9;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #3B4252;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #3B4252;
  --tab-divider-color: #4C566A;
  --tab-font-size: 10px;
  --tab-outline-color: #4C566A;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #2E3440;
  --tab-switcher-menubar-background: linear-gradient(to top, #2E3440, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 34%, 63%);
  --tab-text-color: #D8DEE9;
  --tab-text-color-active: #ECEFF4;
  --tab-text-color-focused: #ECEFF4;
  --tab-text-color-focused-active: #ECEFF4;
  --tab-text-color-focused-active-current: #f5f7f9;
  --tab-text-color-focused-highlighted: hsl(210, 34%, 63%);
  --table-add-button-border-color: #4C566A;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(210, 34%, 63%);
  --table-drag-handle-color: #D8DEE9;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #4C566A;
  --table-header-border-width: 1px;
  --table-header-color: #f5f7f9;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(210, 34%, 63%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(210, 34%, 63%);
  --table-text-size: 16px;
  --tag-background: hsla(210, 34%, 63%, 0.1);
  --tag-background-hover: hsla(210, 34%, 63%, 0.2);
  --tag-border-color: hsla(210, 34%, 63%, 0.15);
  --tag-border-color-hover: hsla(210, 34%, 63%, 0.15);
  --tag-color: hsl(210, 34%, 63%);
  --tag-color-hover: hsl(210, 34%, 63%);
  --tag-size: 0.875em;
  --text-accent: hsl(210, 34%, 63%);
  --text-accent-hover: hsl(205, 35.7%, 81.27%);
  --text-error: #FC6E68;
  --text-faint: #D8DEE9;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #ECEFF4;
  --text-normal: #f5f7f9;
  --text-selection: hsla(210, 34%, 63%, 0.33);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(216, 222, 233, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 222, 233);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(216, 222, 233, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="meta"] {
  --accent-h: 210;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-active-hover: hsla(210, 34%, 63%, 0.1);
  --background-modifier-border: #4C566A;
  --background-modifier-border-focus: #2E3440;
  --background-modifier-border-hover: #4C566A;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #2E3440;
  --background-modifier-form-field-hover: #2E3440;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #3B4252;
  --background-primary-alt: #2E3440;
  --background-secondary: #2E3440;
  --background-secondary-alt: #2E3440;
  --blockquote-border-color: hsl(210, 34%, 63%);
  --blur-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--w0-rgb, 216, 222, 233);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #3B4252;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #3B4252;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #f5f7f9;
  --checkbox-border-color: #D8DEE9;
  --checkbox-border-color-hover: #ECEFF4;
  --checkbox-color: hsl(210, 34%, 63%);
  --checkbox-color-hover: hsl(207, 34.68%, 72.45%);
  --checkbox-marker-color: #3B4252;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #ECEFF4;
  --clickable-icon-radius: 4px;
  --code-background: #2E3440;
  --code-border-color: #4C566A;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #D8DEE9;
  --code-function: #ebcb8b;
  --code-important: #d08770;
  --code-keyword: #fa99cd;
  --code-normal: #f5f7f9;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #ECEFF4;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #D8DEE9;
  --collapse-icon-color-collapsed: hsl(210, 34%, 63%);
  --color-accent: hsl(210, 34%, 63%);
  --color-accent-1: hsl(207, 34.68%, 72.45%);
  --color-accent-2: hsl(205, 35.7%, 81.27%);
  --color-accent-hsl: 210, 34%, 63%;
  --color-base-00: #2E3440;
  --color-base-10: #2E3440;
  --color-base-100: #f5f7f9;
  --color-base-20: #2E3440;
  --color-base-25: #2E3440;
  --color-base-30: #3B4252;
  --color-base-35: #4C566A;
  --color-base-40: #2E3440;
  --color-base-50: #D8DEE9;
  --color-base-60: #E5E9F0;
  --color-base-70: #ECEFF4;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 235, 203, 139;
  --divider-color: #4C566A;
  --divider-color-hover: hsl(210, 34%, 63%);
  --divider-vertical-height: 100%;
  --dropdown-background: #3B4252;
  --dropdown-background-hover: #4C566A;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #3B4252;
  --flair-color: #f5f7f9;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #4C566A;
  --graph-node: #ECEFF4;
  --graph-node-attachment: #ebcb8b;
  --graph-node-focused: hsl(210, 34%, 63%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #D8DEE9;
  --graph-text: #f5f7f9;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #D8DEE9;
  --heading-spacing: 1rem;
  --hr-color: #4C566A;
  --interactive-accent: hsl(210, 34%, 63%);
  --interactive-accent-hover: hsl(207, 34.68%, 72.45%);
  --interactive-accent-hsl: 210, 34%, 63%;
  --interactive-hover: #4C566A;
  --interactive-normal: #3B4252;
  --link-color: hsl(210, 34%, 63%);
  --link-color-hover: hsl(205, 35.7%, 81.27%);
  --link-external-color: hsl(210, 34%, 63%);
  --link-external-color-hover: hsl(205, 35.7%, 81.27%);
  --link-unresolved-color: hsl(210, 34%, 63%);
  --link-unresolved-decoration-color: hsla(210, 34%, 63%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2E3440;
  --menu-border-color: #4C566A;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #3B4252;
  --pdf-page-background: #3B4252;
  --pdf-shadow: 0 0 0 1px #4C566A;
  --pdf-sidebar-background: #3B4252;
  --pdf-thumbnail-shadow: 0 0 0 1px #4C566A;
  --pln-cards-color-rgb: 76, 86, 106;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #ECEFF4;
  --search-icon-color: #ECEFF4;
  --search-result-background: #3B4252;
  --setting-group-heading-color: #f5f7f9;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #2E3440;
  --setting-items-border-color: #4C566A;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #ECEFF4;
  --shiki-code-background: #2E3440;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #D8DEE9;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #ECEFF4;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #ECEFF4;
  --shiki-code-string: #ebcb8b;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #4C566A;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #D8DEE9;
  --shiki-gutter-text-color-highlight: #ECEFF4;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #ECEFF4;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #D8DEE9;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #3B4252;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #3B4252;
  --tab-divider-color: #4C566A;
  --tab-font-size: 10px;
  --tab-outline-color: #4C566A;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #2E3440;
  --tab-switcher-menubar-background: linear-gradient(to top, #2E3440, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 34%, 63%);
  --tab-text-color: #D8DEE9;
  --tab-text-color-active: #ECEFF4;
  --tab-text-color-focused: #ECEFF4;
  --tab-text-color-focused-active: #ECEFF4;
  --tab-text-color-focused-active-current: #f5f7f9;
  --tab-text-color-focused-highlighted: hsl(210, 34%, 63%);
  --table-add-button-border-color: #4C566A;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(210, 34%, 63%);
  --table-drag-handle-color: #D8DEE9;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #4C566A;
  --table-header-border-width: 1px;
  --table-header-color: #f5f7f9;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(210, 34%, 63%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(210, 34%, 63%);
  --table-text-size: 16px;
  --tag-background: hsla(210, 34%, 63%, 0.1);
  --tag-background-hover: hsla(210, 34%, 63%, 0.2);
  --tag-border-color: hsla(210, 34%, 63%, 0.15);
  --tag-border-color-hover: hsla(210, 34%, 63%, 0.15);
  --tag-color: hsl(210, 34%, 63%);
  --tag-color-hover: hsl(210, 34%, 63%);
  --tag-size: 0.875em;
  --text-accent: hsl(210, 34%, 63%);
  --text-accent-hover: hsl(205, 35.7%, 81.27%);
  --text-error: #FC6E68;
  --text-faint: #D8DEE9;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #ECEFF4;
  --text-normal: #f5f7f9;
  --text-selection: hsla(210, 34%, 63%, 0.33);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(216, 222, 233, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 222, 233);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(216, 222, 233, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--color-blue-rgb, 94, 129, 172);
  background: rgba(94, 129, 172, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--color-green-rgb, 163, 190, 140);
  background: rgba(163, 190, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--color-frost-rgb, 129, 161, 193);
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--color-green-rgb, 163, 190, 140);
  background: rgba(163, 190, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--color-cyan-rgb, 136, 192, 208);
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--color-cyan-rgb, 136, 192, 208);
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--color-yellow-light-rgb, 235, 203, 139);
  background: rgba(235, 203, 139, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(235, 203, 139, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(235, 203, 139);
  border-left-width: 2px;
  border-right-color: rgba(235, 203, 139, 0.25);
  border-top-color: rgb(235, 203, 139);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="blank-titled"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="blank"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 16h.01'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="links"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="meta"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'/%3E%3Cpath d='M3 5V19A9 3 0 0 0 21 19V5'/%3E%3Cpath d='M3 12A9 3 0 0 0 21 12'/%3E%3C/svg%3E");
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
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: var(--text-normal, rgb(245, 247, 249));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(59, 66, 82));
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(129, 161, 193, 0.1));
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(129, 161, 193, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(129, 161, 193, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(245, 247, 249));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(245, 247, 249));
  font-size: var(--inline-title-size, 32px);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(245, 247, 249));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(245, 247, 249));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(245, 247, 249));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(245, 247, 249));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(245, 247, 249));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(245, 247, 249));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--color-blue-rgb, 94, 129, 172);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(191, 97, 106);
  border-left-width: 3px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(46, 52, 64));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(236, 239, 244));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(245, 247, 249);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: var(--icon-color, rgb(236, 239, 244));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(46, 52, 64));
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: var(--status-bar-text-color, rgb(236, 239, 244));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(236, 239, 244);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(236, 239, 244));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(236, 239, 244);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(236, 239, 244));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: var(--icon-color, rgb(236, 239, 244));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(236, 239, 244);
  stroke: rgb(236, 239, 244);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(216, 222, 233));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(245, 247, 249));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(46, 52, 64));
  border-color: rgb(245, 247, 249);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(76, 86, 106);
  color: var(--table-header-color, rgb(245, 247, 249));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--metadata-background, rgba(76, 86, 106, 0.4));
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(76, 86, 106);
  border-left-width: 2px;
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: var(--text-muted, rgb(236, 239, 244));
  margin-bottom: 10px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--metadata-background, rgba(76, 86, 106, 0.4));
  border-color: rgb(76, 86, 106);
  border-radius: 5px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(129, 161, 193, 0.1));
  border-radius: 5px;
  color: var(--pill-color, rgb(129, 161, 193));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(59, 66, 82));
  color: var(--text-normal, rgb(245, 247, 249));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(46, 52, 64));
  border-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(46, 52, 64));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(245, 247, 249);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(46, 52, 64));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(245, 247, 249));
}

html[saved-theme="dark"] body abbr {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: var(--text-normal, rgb(236, 239, 244));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(46, 52, 64));
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: var(--code-normal, rgb(245, 247, 249));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body sub {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body summary {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body sup {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(129, 161, 193, 0.1));
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(129, 161, 193, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(129, 161, 193, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  color: var(--tag-color, rgb(129, 161, 193));
}`,
  },
  light: {
    base: `:root:root {
  --accent-dark-hsl-h: 210;
  --accent-dark-hsl-l: 63%;
  --accent-dark-hsl-s: 34%;
  --accent-h: var(--accent-light-hsl-h, 213);
  --accent-l: var(--accent-light-hsl-l, 53%);
  --accent-light-hsl-h: 213;
  --accent-light-hsl-l: 53%;
  --accent-light-hsl-s: 32%;
  --accent-s: var(--accent-light-hsl-s, 32%);
  --b0: #2E3440;
  --b1: #3B4252;
  --b2: #434C5E;
  --b3: #4C566A;
  --b3-rgb: 76, 86, 106;
  --background-modifier-border: var(--w0, #D8DEE9);
  --background-modifier-border-focus: var(--color-base-40, #ECEFF4);
  --background-modifier-border-hover: var(--color-base-35, #D8DEE9);
  --background-modifier-error: var(--color-red, #bf616a);
  --background-modifier-error-hover: var(--color-red, #bf616a);
  --background-modifier-error-rgb: var(--color-red-rgb, 191, 97, 106);
  --background-modifier-form-field: var(--color-base-00, #ECEFF4);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #ECEFF4);
  --background-modifier-success: var(--color-green, #a3be8c);
  --background-modifier-success-rgb: var(--color-green-rgb, 163, 190, 140);
  --background-primary: var(--w3, #f5f7f9);
  --background-primary-alt: var(--w2, #ECEFF4);
  --background-secondary: var(--w2, #ECEFF4);
  --background-secondary-alt: var(--w1, #E5E9F0);
  --bases-cards-background: var(--background-primary, #f5f7f9);
  --bases-cards-cover-background: var(--background-primary-alt, #ECEFF4);
  --bases-embed-border-color: var(--background-modifier-border, #D8DEE9);
  --bases-group-heading-property-color: var(--text-muted, #2E3440);
  --bases-group-heading-property-size: var(--font-ui-smaller, 10px);
  --bases-table-border-color: var(--table-border-color, #D8DEE9);
  --bases-table-cell-background-active: var(--background-primary, #f5f7f9);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #ECEFF4);
  --bases-table-cell-background-selected: var(--table-selection, hsla(213, 32%, 53%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #ECEFF4);
  --bases-table-header-background: var(--background-primary, #f5f7f9);
  --bases-table-header-color: var(--text-muted, #2E3440);
  --bases-table-summary-background: var(--background-primary, #f5f7f9);
  --blockquote-border-color: var(--interactive-accent, hsl(212, 32.32%, 56.975%));
  --bold-weight: var(--font-bold, 700);
  --callout-bug: var(--color-red-rgb, 191, 97, 106);
  --callout-content-padding: 0 var(--size-4-2) var(--size-4-2) var(--size-4-3);
  --callout-default: var(--color-blue-rgb, 94, 129, 172);
  --callout-error: var(--color-red-rgb, 191, 97, 106);
  --callout-example: var(--color-purple-rgb, 180, 142, 173);
  --callout-fail: var(--color-red-rgb, 191, 97, 106);
  --callout-important: var(--color-cyan-rgb, 136, 192, 208);
  --callout-info: var(--color-blue-rgb, 94, 129, 172);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-orange-rgb, 208, 135, 112);
  --callout-radius: var(--radius-s, 5px);
  --callout-success: var(--color-green-rgb, 163, 190, 140);
  --callout-summary: var(--color-cyan-rgb, 136, 192, 208);
  --callout-tip: var(--color-cyan-rgb, 136, 192, 208);
  --callout-title-padding: var(--size-4-2) var(--size-4-2) var(--size-4-2) var(--size-4-3, 8px 8px 8px 12px);
  --callout-todo: var(--color-blue-rgb, 94, 129, 172);
  --callout-warning: var(--color-orange-rgb, 208, 135, 112);
  --canvas-background: var(--background-primary, #f5f7f9);
  --canvas-card-label-color: var(--text-faint, #3B4252);
  --canvas-color-1: var(--color-red-rgb, 191, 97, 106);
  --canvas-color-2: var(--color-orange-rgb, 208, 135, 112);
  --canvas-color-3: var(--color-yellow-rgb, 228, 184, 96);
  --canvas-color-4: var(--color-green-rgb, 163, 190, 140);
  --canvas-color-5: var(--color-cyan-rgb, 136, 192, 208);
  --canvas-color-6: var(--color-purple-rgb, 180, 142, 173);
  --canvas-dot-pattern: var(--color-base-30, #D8DEE9);
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, #2E3440);
  --checkbox-border-color: var(--text-faint, #3B4252);
  --checkbox-border-color-hover: var(--text-muted, #2E3440);
  --checkbox-color: var(--interactive-accent, hsl(212, 32.32%, 56.975%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(210, 32.64%, 60.95%));
  --checkbox-marker-color: var(--background-primary, #f5f7f9);
  --checkbox-size: var(--font-text-size, 1.1em);
  --checklist-done-color: var(--text-muted, #2E3440);
  --code-background: var(--background-primary-alt, #ECEFF4);
  --code-border-color: var(--background-modifier-border, #D8DEE9);
  --code-comment: var(--text-faint, #3B4252);
  --code-function: var(--color-yellow, #e4b860);
  --code-important: var(--color-orange, #d08770);
  --code-normal: var(--text-normal, #2E3440);
  --code-operator: var(--color-red, #bf616a);
  --code-property: var(--color-cyan, #88c0d0);
  --code-punctuation: var(--text-muted, #2E3440);
  --code-string: var(--color-green, #a3be8c);
  --code-tag: var(--color-red, #bf616a);
  --code-value: var(--color-purple, #b48ead);
  --collapse-icon-color: var(--text-faint, #3B4252);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(213, 32%, 53%));
  --color-base-00: var(--w2, #ECEFF4);
  --color-base-05: var(--w2, #ECEFF4);
  --color-base-10: var(--w1, #E5E9F0);
  --color-base-100: var(--b0, #2E3440);
  --color-base-20: var(--w0, #D8DEE9);
  --color-base-25: var(--b3, #4C566A);
  --color-base-30: var(--w0, #D8DEE9);
  --color-base-35: var(--w0, #D8DEE9);
  --color-base-40: var(--w2, #ECEFF4);
  --color-base-50: var(--b1, #3B4252);
  --color-base-60: var(--b0, #2E3440);
  --color-base-70: var(--b0, #2E3440);
  --color-blue: #5e81ac;
  --color-blue-rgb: 94, 129, 172;
  --color-cyan: #88c0d0;
  --color-cyan-rgb: 136, 192, 208;
  --color-frost: #81a1c1;
  --color-frost-rgb: 129, 161, 193;
  --color-green: #a3be8c;
  --color-green-rgb: 163, 190, 140;
  --color-orange: #d08770;
  --color-orange-rgb: 208, 135, 112;
  --color-purple: #b48ead;
  --color-purple-rgb: 180, 142, 173;
  --color-red: #bf616a;
  --color-red-rgb: 191, 97, 106;
  --color-salmon: #FC6E68;
  --color-salmon-rgb: 252, 110, 104;
  --color-sea-green: #8fbcbb;
  --color-sea-green-rgb: 143, 188, 187;
  --color-yellow: var(--color-yellow-dark, #e4b860);
  --color-yellow-dark: #e4b860;
  --color-yellow-dark-rgb: 228, 184, 96;
  --color-yellow-light: #ebcb8b;
  --color-yellow-light-rgb: 235, 203, 139;
  --color-yellow-rgb: var(--color-yellow-dark-rgb, 228, 184, 96);
  --dark: var(--text-normal, var(--color-base-100, #2E3440));
  --darkgray: var(--text-normal, var(--color-base-100, #2E3440));
  --divider-color: var(--background-modifier-border, #D8DEE9);
  --divider-color-hover: var(--interactive-accent, hsl(212, 32.32%, 56.975%));
  --dropdown-background: var(--interactive-normal, #ECEFF4);
  --dropdown-background-hover: var(--interactive-hover, #E5E9F0);
  --embed-border-left: none;
  --embed-border-right: none;
  --file-folding-offset: 10px;
  --file-header-background: var(--background-primary, #f5f7f9);
  --file-header-background-focused: var(--background-primary, #f5f7f9);
  --file-header-font-size: var(--font-ui-small, 10px);
  --file-margins: var(--file-margins-y) var(--file-margins-x, 20px);
  --flair-background: var(--interactive-normal, #ECEFF4);
  --flair-color: var(--text-normal, #2E3440);
  --font-ui-large: 14px;
  --font-ui-medium: 12px;
  --font-ui-small: 10px;
  --font-ui-smaller: 10px;
  --footnote-divider-color: var(--metadata-divider-color, #D8DEE9);
  --footnote-id-color: var(--text-muted, #2E3440);
  --footnote-id-color-no-occurrences: var(--text-faint, #3B4252);
  --graph-node: var(--text-muted, #2E3440);
  --graph-node-attachment: var(--color-yellow, #e4b860);
  --graph-node-focused: var(--text-accent, hsl(213, 32%, 53%));
  --graph-node-tag: var(--color-green, #a3be8c);
  --graph-node-unresolved: var(--text-faint, #3B4252);
  --graph-text: var(--text-normal, #2E3440);
  --gray: var(--text-muted, var(--color-base-70, #2E3440));
  --h1-size: 2em;
  --h2-size: 1.6em;
  --h3-size: 1.37em;
  --h4-size: 1.25em;
  --h5-size: 1.12em;
  --h6-size: 1.12em;
  --header-height: 30px;
  --heading-formatting: var(--text-faint, #3B4252);
  --hr-color: var(--background-modifier-border, #D8DEE9);
  --icon-color: var(--text-muted, #2E3440);
  --icon-color-active: var(--text-accent, hsl(213, 32%, 53%));
  --icon-color-focused: var(--text-normal, #2E3440);
  --icon-color-hover: var(--text-muted, #2E3440);
  --inline-title-size: var(--h1-size, 2em);
  --input-date-separator: var(--text-faint, #3B4252);
  --input-placeholder-color: var(--text-faint, #3B4252);
  --interactive-accent: var(--color-accent-1, hsl(212, 32.32%, 56.975%));
  --interactive-accent-hover: var(--color-accent-2, hsl(210, 32.64%, 60.95%));
  --interactive-accent-hsl: var(--color-accent-hsl, 213, 32%, 53%);
  --interactive-hover: var(--color-base-10, #E5E9F0);
  --interactive-normal: var(--color-base-00, #ECEFF4);
  --light: var(--background-primary, var(--w3, #f5f7f9));
  --lightgray: var(--background-secondary, var(--w2, #ECEFF4));
  --link-color: var(--text-accent, hsl(213, 32%, 53%));
  --link-color-hover: var(--text-accent-hover, hsl(210, 32.64%, 60.95%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, hsl(213, 32%, 53%));
  --link-external-color-hover: var(--text-accent-hover, hsl(210, 32.64%, 60.95%));
  --link-unresolved-color: var(--text-accent, hsl(213, 32%, 53%));
  --link-unresolved-opacity: 100;
  --list-bullet-size: .5em;
  --list-marker-color: var(--text-faint, #3B4252);
  --list-marker-color-collapsed: var(--text-accent, hsl(213, 32%, 53%));
  --list-marker-color-hover: var(--text-muted, #2E3440);
  --list-spacing: 1px;
  --menu-background: var(--background-secondary, #ECEFF4);
  --menu-border-color: var(--background-modifier-border-hover, #D8DEE9);
  --metadata-background: rgba(216, 222, 233, 0.4);
  --metadata-border-color: var(--background-modifier-border, rgb(216, 222, 233));
  --metadata-border-radius: 5px;
  --metadata-display-reading: none;
  --metadata-divider-color: var(--background-modifier-border, #D8DEE9);
  --metadata-input-text-color: var(--text-normal, #2E3440);
  --metadata-label-text-color: var(--text-muted, #2E3440);
  --metadata-label-text-color-hover: var(--text-muted, #2E3440);
  --metadata-property-radius: 5px;
  --metadata-sidebar-input-font-size: var(--font-ui-small, 10px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 10px);
  --modal-background: var(--background-primary, #f5f7f9);
  --nav-collapse-icon-color: var(--collapse-icon-color, #3B4252);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #3B4252);
  --nav-heading-color: var(--text-normal, #2E3440);
  --nav-heading-color-collapsed: var(--text-faint, #3B4252);
  --nav-heading-color-collapsed-hover: var(--text-muted, #2E3440);
  --nav-heading-color-hover: var(--text-normal, #2E3440);
  --nav-item-color: var(--text-muted, #2E3440);
  --nav-item-color-active: var(--text-normal, #2E3440);
  --nav-item-color-highlighted: var(--text-accent, hsl(213, 32%, 53%));
  --nav-item-color-hover: var(--text-normal, #2E3440);
  --nav-item-color-selected: var(--text-normal, #2E3440);
  --nav-item-size: var(--font-ui-small, 10px);
  --nav-tag-color: var(--text-faint, #3B4252);
  --nav-tag-color-active: var(--text-muted, #2E3440);
  --nav-tag-color-hover: var(--text-muted, #2E3440);
  --p-spacing: .5rem;
  --pdf-background: var(--background-primary, #f5f7f9);
  --pdf-page-background: var(--background-primary, #f5f7f9);
  --pdf-sidebar-background: var(--background-primary, #f5f7f9);
  --pill-border-color: var(--background-modifier-border, #D8DEE9);
  --pill-border-color-hover: var(--background-modifier-border-hover, #D8DEE9);
  --pill-color: var(--text-muted, #2E3440);
  --pill-color-hover: var(--text-normal, #2E3440);
  --pill-color-remove: var(--text-faint, #3B4252);
  --pill-color-remove-hover: var(--text-accent, hsl(213, 32%, 53%));
  --pln-cards-color-rgb: var(--w0-rgb, 216, 222, 233);
  --prompt-background: var(--background-primary, #f5f7f9);
  --raised-background: var(--blur-background, color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent)));
  --ribbon-background: var(--background-secondary, #ECEFF4);
  --ribbon-background-collapsed: var(--background-primary, #f5f7f9);
  --search-clear-button-color: var(--text-muted, #2E3440);
  --search-icon-color: var(--text-muted, #2E3440);
  --search-result-background: var(--background-primary, #f5f7f9);
  --secondary: var(--text-accent, var(--color-accent, hsl(213, 32%, 53%)));
  --setting-group-heading-color: var(--text-normal, #2E3440);
  --setting-group-heading-size: var(--font-ui-medium, 12px);
  --setting-items-background: var(--background-primary-alt, #ECEFF4);
  --setting-items-border-color: var(--background-modifier-border, #D8DEE9);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #2E3440);
  --shiki-code-background: var(--code-background, #ECEFF4);
  --shiki-code-block-spacing: var(--p-spacing, .5rem);
  --shiki-code-comment: var(--text-faint, #3B4252);
  --shiki-code-function: var(--color-green, #a3be8c);
  --shiki-code-important: var(--color-orange, #d08770);
  --shiki-code-normal: var(--text-muted, #2E3440);
  --shiki-code-property: var(--color-cyan, #88c0d0);
  --shiki-code-punctuation: var(--text-muted, #2E3440);
  --shiki-code-string: var(--color-yellow, #e4b860);
  --shiki-code-value: var(--color-purple, #b48ead);
  --shiki-gutter-border-color: var(--background-modifier-border, #D8DEE9);
  --shiki-gutter-text-color: var(--text-faint, #3B4252);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #2E3440);
  --shiki-highlight-neutral: var(--shiki-code-normal, #2E3440);
  --shiki-terminal-dots-color: var(--text-faint, #3B4252);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #D8DEE9);
  --slider-track-background: var(--background-modifier-border, #D8DEE9);
  --status-bar-background: var(--background-secondary, #ECEFF4);
  --status-bar-border-color: var(--divider-color, #D8DEE9);
  --status-bar-font-size: var(--font-ui-smaller, 10px);
  --status-bar-text-color: var(--text-muted, #2E3440);
  --suggestion-background: var(--background-primary, #f5f7f9);
  --sync-avatar-color-1: var(--color-red, #bf616a);
  --sync-avatar-color-2: var(--color-orange, #d08770);
  --sync-avatar-color-3: var(--color-yellow, #e4b860);
  --sync-avatar-color-4: var(--color-green, #a3be8c);
  --sync-avatar-color-5: var(--color-cyan, #88c0d0);
  --sync-avatar-color-6: var(--color-blue, #5e81ac);
  --sync-avatar-color-7: var(--color-purple, #b48ead);
  --tab-background-active: var(--background-primary, #f5f7f9);
  --tab-container-background: var(--background-secondary, #ECEFF4);
  --tab-divider-color: var(--background-modifier-border-hover, #D8DEE9);
  --tab-font-size: var(--font-ui-small, 10px);
  --tab-outline-color: var(--divider-color, #D8DEE9);
  --tab-stacked-font-size: var(--font-ui-small, 10px);
  --tab-stacked-header-width: var(--header-height, 20px);
  --tab-stacked-text-align: right;
  --tab-stacked-text-transform: rotate(180deg);
  --tab-switcher-background: var(--background-secondary, #ECEFF4);
  --tab-text-color: var(--text-faint, #3B4252);
  --tab-text-color-active: var(--text-muted, #2E3440);
  --tab-text-color-focused: var(--text-muted, #2E3440);
  --tab-text-color-focused-active: var(--text-muted, #2E3440);
  --tab-text-color-focused-active-current: var(--text-normal, #2E3440);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(213, 32%, 53%));
  --table-add-button-border-color: var(--background-modifier-border, #D8DEE9);
  --table-border-color: var(--background-modifier-border, #D8DEE9);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(212, 32.32%, 56.975%));
  --table-drag-handle-color: var(--text-faint, #3B4252);
  --table-header-border-color: var(--table-border-color, #D8DEE9);
  --table-header-color: var(--text-normal, #2E3440);
  --table-selection-border-color: var(--interactive-accent, hsl(212, 32.32%, 56.975%));
  --tag-border-width: 2px;
  --tag-color: var(--text-accent, hsl(213, 32%, 53%));
  --tag-color-hover: var(--text-accent, hsl(213, 32%, 53%));
  --tag-radius: 5px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(210, 32.64%, 60.95%)));
  --text-accent: var(--color-accent, hsl(213, 32%, 53%));
  --text-accent-hover: var(--color-accent-2, hsl(210, 32.64%, 60.95%));
  --text-error: var(--color-salmon, #FC6E68);
  --text-faint: var(--color-base-50, #3B4252);
  --text-highlight-bg-active: rgba(180, 142, 173, 0.4);
  --text-muted: var(--color-base-70, #2E3440);
  --text-normal: var(--color-base-100, #2E3440);
  --text-success: var(--color-green, #a3be8c);
  --text-warning: var(--color-orange, #d08770);
  --titlebar-background: var(--background-secondary, #ECEFF4);
  --titlebar-background-focused: var(--background-secondary-alt, #E5E9F0);
  --titlebar-border-color: var(--background-modifier-border, #D8DEE9);
  --titlebar-text-color: var(--text-muted, #2E3440);
  --titlebar-text-color-focused: var(--text-normal, #2E3440);
  --traffic-lights-offset-x: var(--header-height, 30px);
  --traffic-lights-offset-y: var(--header-height, 30px);
  --vault-profile-color: var(--text-normal, #2E3440);
  --vault-profile-color-hover: var(--vault-profile-color, #2E3440);
  --vault-profile-font-size: var(--font-ui-small, 10px);
  --w0: #D8DEE9;
  --w0-rgb: 216, 222, 233;
  --w1: #E5E9F0;
  --w2: #ECEFF4;
  --w3: #f5f7f9;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(236, 239, 244));
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(245, 247, 249));
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(236, 239, 244));
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(216, 222, 233);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(236, 239, 244));
  border-left-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(46, 52, 64));
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(46, 52, 64));
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
  transform: matrix(1, 0, -0.176327, 1, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(46, 52, 64));
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
  transform: matrix(1, 0, -0.176327, 1, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(46, 52, 64));
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(228, 184, 96, 0.2));
  color: var(--text-normal, rgb(46, 52, 64));
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body del {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(46, 52, 64));
  font-size: 10px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(59, 66, 82);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(110, 143, 181));
  border-color: rgb(110, 143, 181);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(46, 52, 64));
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(97, 131, 174));
  outline: rgb(97, 131, 174) none 0px;
  text-decoration-color: rgb(97, 131, 174);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(97, 131, 174));
  outline: rgb(97, 131, 174) none 0px;
  text-decoration-color: rgb(97, 131, 174);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(97, 131, 174));
  outline: rgb(97, 131, 174) none 0px;
  text-decoration: rgba(97, 131, 174, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(97, 131, 174, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body dt {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ol > li {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ul > li {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(59, 66, 82));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body table {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: var(--table-text-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: var(--table-header-color, rgb(46, 52, 64));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(236, 239, 244));
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--code-normal, rgb(46, 52, 64));
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(236, 239, 244));
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body figcaption {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(236, 239, 244));
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-left-width: 0px;
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
  margin-left: -17px;
  width: var(--checkbox-size, 14.6562px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(46, 52, 64);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(46, 52, 64);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(46, 52, 64);
  text-decoration: line-through;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 247, 249);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1meGVtb2ppIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBmaWxsPSIjMkIzQjQ3IiBkPSJNMzA1LjQ4NiA0MDUuMjExYzAgMjcuMTkxLTIxLjc1MiA0OS40ODYtNDkuNDg2IDQ5LjQ4NmMtMjcuNzM0IDAtNDkuNDg2LTIyLjI5NS00OS40ODYtNDkuNDg2YzAtMjcuMTkgMjEuNzUyLTQ5LjQ4NSA0OS40ODYtNDkuNDg1YzI3LjczNCAwIDQ5LjQ4NiAyMi4yOTYgNDkuNDg2IDQ5LjQ4NXptLTI2LjgwOC05OC45NzFoLTQ1Ljg3M2MtNi44IDAtMTIuMzk4LTUuMzQ3LTEyLjcwOC0xMi4xNGwtOS43MTEtMjEyLjE5N2MtLjMzMi03LjI0NyA1LjQ1NC0xMy4zMDMgMTIuNzA4LTEzLjMwM2g2NS43ODFjNy4yNjYgMCAxMy4wNTYgNi4wNzUgMTIuNzA3IDEzLjMzMmwtMTAuMTk3IDIxMi4xOTdjLS4zMjUgNi43ODEtNS45MTggMTIuMTExLTEyLjcwNyAxMi4xMTF6Ij48L3BhdGg+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1meGVtb2ppIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBmaWxsPSIjMkIzQjQ3IiBkPSJNMzA1LjQ4NiA0MDUuMjExYzAgMjcuMTkxLTIxLjc1MiA0OS40ODYtNDkuNDg2IDQ5LjQ4NmMtMjcuNzM0IDAtNDkuNDg2LTIyLjI5NS00OS40ODYtNDkuNDg2YzAtMjcuMTkgMjEuNzUyLTQ5LjQ4NSA0OS40ODYtNDkuNDg1YzI3LjczNCAwIDQ5LjQ4NiAyMi4yOTYgNDkuNDg2IDQ5LjQ4NXptLTI2LjgwOC05OC45NzFoLTQ1Ljg3M2MtNi44IDAtMTIuMzk4LTUuMzQ3LTEyLjcwOC0xMi4xNGwtOS43MTEtMjEyLjE5N2MtLjMzMi03LjI0NyA1LjQ1NC0xMy4zMDMgMTIuNzA4LTEzLjMwM2g2NS43ODFjNy4yNjYgMCAxMy4wNTYgNi4wNzUgMTIuNzA3IDEzLjMzMmwtMTAuMTk3IDIxMi4xOTdjLS4zMjUgNi43ODEtNS45MTggMTIuMTExLTEyLjcwNyAxMi4xMTF6Ij48L3BhdGg+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 247, 249);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3My4xcHgiIGhlaWdodD0iOTczLjFweCIgdmlld0JveD0iMCAwIDk3My4xIDk3My4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NzMuMSA5NzMuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTUwMi4yOSw3ODguMTk5aC00N2MtMzMuMSwwLTYwLDI2LjktNjAsNjB2NjQuOWMwLDMzLjEsMjYuOSw2MCw2MCw2MGg0N2MzMy4xMDEsMCw2MC0yNi45LDYwLTYwdi02NC45DQoJCUM1NjIuMjksODE1LDUzNS4zOTEsNzg4LjE5OSw1MDIuMjksNzg4LjE5OXoiLz4NCgk8cGF0aCBkPSJNMTcwLjg5LDI4NS44bDg2LjcsMTAuOGMyNy41LDMuNCw1My42LTEyLjQsNjMuNS0zOC4zYzEyLjUtMzIuNywyOS45LTU4LjUsNTIuMi03Ny4zYzMxLjYwMS0yNi42LDcwLjktNDAsMTE3LjktNDANCgkJYzQ4LjcsMCw4Ny41LDEyLjgsMTE2LjMsMzguM2MyOC44LDI1LjYsNDMuMSw1Ni4yLDQzLjEsOTIuMWMwLDI1LjgtOC4xLDQ5LjQtMjQuMyw3MC44Yy0xMC41LDEzLjYtNDIuOCw0Mi4yLTk2LjcsODUuOQ0KCQljLTU0LDQzLjctODkuODk5LDgzLjA5OS0xMDcuODk5LDExOC4wOTljLTE4LjQsMzUuODAxLTI0LjgsNzUuNS0yNi40LDExNS4zMDFjLTEuMzk5LDM0LjEsMjUuOCw2Mi41LDYwLDYyLjVoNDkNCgkJYzMxLjIsMCw1Ny0yMy45LDU5LjgtNTQuOWMyLTIyLjI5OSw1LjctMzkuMTk5LDExLjMwMS01MC42OTljOS4zOTktMTkuNzAxLDMzLjY5OS00NS43MDEsNzIuNjk5LTc4LjENCgkJQzcyMy41OSw0NzcuOCw3NzIuNzksNDI4LjQsNzk1Ljg5MSwzOTJjMjMtMzYuMywzNC42LTc0LjgsMzQuNi0xMTUuNWMwLTczLjUtMzEuMy0xMzgtOTQtMTkzLjRjLTYyLjYtNTUuNC0xNDctODMuMS0yNTMtODMuMQ0KCQljLTEwMC44LDAtMTgyLjEsMjcuMy0yNDQuMSw4MmMtNTIuOCw0Ni42LTg0LjksMTAxLjgtOTYuMiwxNjUuNUMxMzkuNjksMjY2LjEsMTUyLjM5LDI4My41LDE3MC44OSwyODUuOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3My4xcHgiIGhlaWdodD0iOTczLjFweCIgdmlld0JveD0iMCAwIDk3My4xIDk3My4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NzMuMSA5NzMuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTUwMi4yOSw3ODguMTk5aC00N2MtMzMuMSwwLTYwLDI2LjktNjAsNjB2NjQuOWMwLDMzLjEsMjYuOSw2MCw2MCw2MGg0N2MzMy4xMDEsMCw2MC0yNi45LDYwLTYwdi02NC45DQoJCUM1NjIuMjksODE1LDUzNS4zOTEsNzg4LjE5OSw1MDIuMjksNzg4LjE5OXoiLz4NCgk8cGF0aCBkPSJNMTcwLjg5LDI4NS44bDg2LjcsMTAuOGMyNy41LDMuNCw1My42LTEyLjQsNjMuNS0zOC4zYzEyLjUtMzIuNywyOS45LTU4LjUsNTIuMi03Ny4zYzMxLjYwMS0yNi42LDcwLjktNDAsMTE3LjktNDANCgkJYzQ4LjcsMCw4Ny41LDEyLjgsMTE2LjMsMzguM2MyOC44LDI1LjYsNDMuMSw1Ni4yLDQzLjEsOTIuMWMwLDI1LjgtOC4xLDQ5LjQtMjQuMyw3MC44Yy0xMC41LDEzLjYtNDIuOCw0Mi4yLTk2LjcsODUuOQ0KCQljLTU0LDQzLjctODkuODk5LDgzLjA5OS0xMDcuODk5LDExOC4wOTljLTE4LjQsMzUuODAxLTI0LjgsNzUuNS0yNi40LDExNS4zMDFjLTEuMzk5LDM0LjEsMjUuOCw2Mi41LDYwLDYyLjVoNDkNCgkJYzMxLjIsMCw1Ny0yMy45LDU5LjgtNTQuOWMyLTIyLjI5OSw1LjctMzkuMTk5LDExLjMwMS01MC42OTljOS4zOTktMTkuNzAxLDMzLjY5OS00NS43MDEsNzIuNjk5LTc4LjENCgkJQzcyMy41OSw0NzcuOCw3NzIuNzksNDI4LjQsNzk1Ljg5MSwzOTJjMjMtMzYuMywzNC42LTc0LjgsMzQuNi0xMTUuNWMwLTczLjUtMzEuMy0xMzgtOTQtMTkzLjRjLTYyLjYtNTUuNC0xNDctODMuMS0yNTMtODMuMQ0KCQljLTEwMC44LDAtMTgyLjEsMjcuMy0yNDQuMSw4MmMtNTIuOCw0Ni42LTg0LjksMTAxLjgtOTYuMiwxNjUuNUMxMzkuNjksMjY2LjEsMTUyLjM5LDI4My41LDE3MC44OSwyODUuOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 135, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 66, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 184, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 192, 208);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iLTUgMCAyNSAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+cmlnaHQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJ1aS1nYW1ibGluZy13ZWJzaXRlLWxpbmVkLWljbm9zLWNhc2lub3NodW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzgzLjAwMDAwMCwgLTE1OC4wMDAwMDApIiBmaWxsPSIjMUMxQzFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzNi40NTM1MTcsMzguNTY5MjQ5IEw0NDcuMzAyNDU5LDQ4Ljk5MzgxNTggTDQ0Ny4zOTI2MSw0OS4wNzQ4ODAyIEM0NDcuNzU1MzQsNDkuNDIzNDU0IDQ0Ny45NjgxNTksNDkuODg3MDQ2MSA0NDgsNTAuNDM4MjIyNyBMNDQ3Ljk5ODEzNSw1MC42MjI4MjI5IEM0NDcuOTY4MTU5LDUxLjExMjk1MzkgNDQ3Ljc1NTM0LDUxLjU3NjU0NiA0NDcuMzMzNjc1LDUxLjk3NzQ0NjkgTDQ0Ny4zMzkwOTUsNTEuOTY4OTgzMiBMNDM2LjQ1MzUxNyw2Mi40MzA3NTEgQzQzNS42NjM2OTQsNjMuMTg5NzQ5NyA0MzQuMzk5MDAxLDYzLjE4OTc0OTcgNDMzLjYwOTE3OCw2Mi40MzA3NTEgQzQzMi43OTY5NDEsNjEuNjUwMjEzIDQzMi43OTY5NDEsNjAuMzY3NTkyNCA0MzMuNjA5NDMyLDU5LjU4NjgxMDYgTDQ0My4wMTIzMjQsNTAuNTU3MjQ3MSBMNDMzLjYwOTE3OCw0MS40MTI5NDU2IEM0MzIuNzk2OTQxLDQwLjYzMjQwNzYgNDMyLjc5Njk0MSwzOS4zNDk3ODcgNDMzLjYwOTE3OCwzOC41NjkyNDkgQzQzNC4zOTkwMDEsMzcuODEwMjUwMyA0MzUuNjYzNjk0LDM3LjgxMDI1MDMgNDM2LjQ1MzUxNywzOC41NjkyNDkgWiIgaWQ9InJpZ2h0Ij48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iLTUgMCAyNSAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+cmlnaHQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJ1aS1nYW1ibGluZy13ZWJzaXRlLWxpbmVkLWljbm9zLWNhc2lub3NodW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzgzLjAwMDAwMCwgLTE1OC4wMDAwMDApIiBmaWxsPSIjMUMxQzFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzNi40NTM1MTcsMzguNTY5MjQ5IEw0NDcuMzAyNDU5LDQ4Ljk5MzgxNTggTDQ0Ny4zOTI2MSw0OS4wNzQ4ODAyIEM0NDcuNzU1MzQsNDkuNDIzNDU0IDQ0Ny45NjgxNTksNDkuODg3MDQ2MSA0NDgsNTAuNDM4MjIyNyBMNDQ3Ljk5ODEzNSw1MC42MjI4MjI5IEM0NDcuOTY4MTU5LDUxLjExMjk1MzkgNDQ3Ljc1NTM0LDUxLjU3NjU0NiA0NDcuMzMzNjc1LDUxLjk3NzQ0NjkgTDQ0Ny4zMzkwOTUsNTEuOTY4OTgzMiBMNDM2LjQ1MzUxNyw2Mi40MzA3NTEgQzQzNS42NjM2OTQsNjMuMTg5NzQ5NyA0MzQuMzk5MDAxLDYzLjE4OTc0OTcgNDMzLjYwOTE3OCw2Mi40MzA3NTEgQzQzMi43OTY5NDEsNjEuNjUwMjEzIDQzMi43OTY5NDEsNjAuMzY3NTkyNCA0MzMuNjA5NDMyLDU5LjU4NjgxMDYgTDQ0My4wMTIzMjQsNTAuNTU3MjQ3MSBMNDMzLjYwOTE3OCw0MS40MTI5NDU2IEM0MzIuNzk2OTQxLDQwLjYzMjQwNzYgNDMyLjc5Njk0MSwzOS4zNDk3ODcgNDMzLjYwOTE3OCwzOC41NjkyNDkgQzQzNC4zOTkwMDEsMzcuODEwMjUwMyA0MzUuNjYzNjk0LDM3LjgxMDI1MDMgNDM2LjQ1MzUxNywzOC41NjkyNDkgWiIgaWQ9InJpZ2h0Ij48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 129, 172);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e %3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 488.9 488.9' style='enable-background:new 0 0 488.9 488.9%3b' xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath d='M239.15%2c0c31.9%2c0%2c57.7%2c25.8%2c57.7%2c57.7s-25.8%2c57.7-57.7%2c57.7s-57.7-25.8-57.7-57.7S207.25%2c0%2c239.15%2c0z M291.65%2c151.6h-1.5 h-92.8h-3.4c-19%2c0-34.3%2c15.4-34.3%2c34.3l0%2c0c0%2c19%2c15.4%2c34.3%2c34.3%2c34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e %3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 488.9 488.9' style='enable-background:new 0 0 488.9 488.9%3b' xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath d='M239.15%2c0c31.9%2c0%2c57.7%2c25.8%2c57.7%2c57.7s-25.8%2c57.7-57.7%2c57.7s-57.7-25.8-57.7-57.7S207.25%2c0%2c239.15%2c0z M291.65%2c151.6h-1.5 h-92.8h-3.4c-19%2c0-34.3%2c15.4-34.3%2c34.3l0%2c0c0%2c19%2c15.4%2c34.3%2c34.3%2c34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 129, 172);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 184, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 184, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 142, 173);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--color-frost-rgb, 129, 161, 193);
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="blank"] {
  --accent-h: 213;
  --accent-l: 53%;
  --accent-s: 32%;
  --background-modifier-active-hover: hsla(213, 32%, 53%, 0.1);
  --background-modifier-border: #D8DEE9;
  --background-modifier-border-focus: #ECEFF4;
  --background-modifier-border-hover: #D8DEE9;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #ECEFF4;
  --background-modifier-form-field-hover: #ECEFF4;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #f5f7f9;
  --background-primary-alt: #ECEFF4;
  --background-secondary: #ECEFF4;
  --background-secondary-alt: #E5E9F0;
  --blockquote-border-color: hsl(212, 32.32%, 56.975%);
  --blur-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--callout-default, 94, 129, 172);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #f5f7f9;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #D8DEE9;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #2E3440;
  --checkbox-border-color: #3B4252;
  --checkbox-border-color-hover: #2E3440;
  --checkbox-color: hsl(212, 32.32%, 56.975%);
  --checkbox-color-hover: hsl(210, 32.64%, 60.95%);
  --checkbox-marker-color: #f5f7f9;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #2E3440;
  --clickable-icon-radius: 4px;
  --code-background: #ECEFF4;
  --code-border-color: #D8DEE9;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #3B4252;
  --code-function: #e4b860;
  --code-important: #d08770;
  --code-keyword: #d53984;
  --code-normal: #2E3440;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #2E3440;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #3B4252;
  --collapse-icon-color-collapsed: hsl(213, 32%, 53%);
  --color-accent: hsl(213, 32%, 53%);
  --color-accent-1: hsl(212, 32.32%, 56.975%);
  --color-accent-2: hsl(210, 32.64%, 60.95%);
  --color-accent-hsl: 213, 32%, 53%;
  --color-base-00: #ECEFF4;
  --color-base-10: #E5E9F0;
  --color-base-100: #2E3440;
  --color-base-20: #D8DEE9;
  --color-base-25: #4C566A;
  --color-base-30: #D8DEE9;
  --color-base-35: #D8DEE9;
  --color-base-40: #ECEFF4;
  --color-base-50: #3B4252;
  --color-base-60: #2E3440;
  --color-base-70: #2E3440;
  --color-yellow: #e4b860;
  --color-yellow-rgb: 228, 184, 96;
  --divider-color: #D8DEE9;
  --divider-color-hover: hsl(212, 32.32%, 56.975%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ECEFF4;
  --dropdown-background-hover: #E5E9F0;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ECEFF4;
  --flair-color: #2E3440;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #D8DEE9;
  --graph-node: #2E3440;
  --graph-node-attachment: #e4b860;
  --graph-node-focused: hsl(213, 32%, 53%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #3B4252;
  --graph-text: #2E3440;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #3B4252;
  --heading-spacing: 1rem;
  --hr-color: #D8DEE9;
  --interactive-accent: hsl(212, 32.32%, 56.975%);
  --interactive-accent-hover: hsl(210, 32.64%, 60.95%);
  --interactive-accent-hsl: 213, 32%, 53%;
  --interactive-hover: #E5E9F0;
  --interactive-normal: #ECEFF4;
  --link-color: hsl(213, 32%, 53%);
  --link-color-hover: hsl(210, 32.64%, 60.95%);
  --link-external-color: hsl(213, 32%, 53%);
  --link-external-color-hover: hsl(210, 32.64%, 60.95%);
  --link-unresolved-color: hsl(213, 32%, 53%);
  --link-unresolved-decoration-color: hsla(213, 32%, 53%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #ECEFF4;
  --menu-border-color: #D8DEE9;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #f5f7f9;
  --pdf-page-background: #f5f7f9;
  --pdf-sidebar-background: #f5f7f9;
  --pln-cards-color-rgb: 216, 222, 233;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #2E3440;
  --search-icon-color: #2E3440;
  --search-result-background: #f5f7f9;
  --setting-group-heading-color: #2E3440;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #ECEFF4;
  --setting-items-border-color: #D8DEE9;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #2E3440;
  --shiki-code-background: #ECEFF4;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #3B4252;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #2E3440;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #2E3440;
  --shiki-code-string: #e4b860;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #D8DEE9;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #3B4252;
  --shiki-gutter-text-color-highlight: #2E3440;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #2E3440;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #3B4252;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f5f7f9;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #e4b860;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #f5f7f9;
  --tab-divider-color: #D8DEE9;
  --tab-font-size: 10px;
  --tab-outline-color: #D8DEE9;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #ECEFF4;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECEFF4, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 32%, 53%);
  --tab-text-color: #3B4252;
  --tab-text-color-active: #2E3440;
  --tab-text-color-focused: #2E3440;
  --tab-text-color-focused-active: #2E3440;
  --tab-text-color-focused-active-current: #2E3440;
  --tab-text-color-focused-highlighted: hsl(213, 32%, 53%);
  --table-add-button-border-color: #D8DEE9;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 32.32%, 56.975%);
  --table-drag-handle-color: #3B4252;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8DEE9;
  --table-header-border-width: 1px;
  --table-header-color: #2E3440;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(213, 32%, 53%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(212, 32.32%, 56.975%);
  --table-text-size: 16px;
  --tag-background: hsla(213, 32%, 53%, 0.1);
  --tag-background-hover: hsla(213, 32%, 53%, 0.2);
  --tag-border-color: hsla(213, 32%, 53%, 0.15);
  --tag-border-color-hover: hsla(213, 32%, 53%, 0.15);
  --tag-color: hsl(213, 32%, 53%);
  --tag-color-hover: hsl(213, 32%, 53%);
  --tag-size: 0.875em;
  --text-accent: hsl(213, 32%, 53%);
  --text-accent-hover: hsl(210, 32.64%, 60.95%);
  --text-error: #FC6E68;
  --text-faint: #3B4252;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #2E3440;
  --text-normal: #2E3440;
  --text-selection: hsla(213, 32%, 53%, 0.2);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 129, 172);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="blank-titled"] {
  --accent-h: 213;
  --accent-l: 53%;
  --accent-s: 32%;
  --background-modifier-active-hover: hsla(213, 32%, 53%, 0.1);
  --background-modifier-border: #D8DEE9;
  --background-modifier-border-focus: #ECEFF4;
  --background-modifier-border-hover: #D8DEE9;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #ECEFF4;
  --background-modifier-form-field-hover: #ECEFF4;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #f5f7f9;
  --background-primary-alt: #ECEFF4;
  --background-secondary: #ECEFF4;
  --background-secondary-alt: #E5E9F0;
  --blockquote-border-color: hsl(212, 32.32%, 56.975%);
  --blur-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--callout-default, 94, 129, 172);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #f5f7f9;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #D8DEE9;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #2E3440;
  --checkbox-border-color: #3B4252;
  --checkbox-border-color-hover: #2E3440;
  --checkbox-color: hsl(212, 32.32%, 56.975%);
  --checkbox-color-hover: hsl(210, 32.64%, 60.95%);
  --checkbox-marker-color: #f5f7f9;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #2E3440;
  --clickable-icon-radius: 4px;
  --code-background: #ECEFF4;
  --code-border-color: #D8DEE9;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #3B4252;
  --code-function: #e4b860;
  --code-important: #d08770;
  --code-keyword: #d53984;
  --code-normal: #2E3440;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #2E3440;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #3B4252;
  --collapse-icon-color-collapsed: hsl(213, 32%, 53%);
  --color-accent: hsl(213, 32%, 53%);
  --color-accent-1: hsl(212, 32.32%, 56.975%);
  --color-accent-2: hsl(210, 32.64%, 60.95%);
  --color-accent-hsl: 213, 32%, 53%;
  --color-base-00: #ECEFF4;
  --color-base-10: #E5E9F0;
  --color-base-100: #2E3440;
  --color-base-20: #D8DEE9;
  --color-base-25: #4C566A;
  --color-base-30: #D8DEE9;
  --color-base-35: #D8DEE9;
  --color-base-40: #ECEFF4;
  --color-base-50: #3B4252;
  --color-base-60: #2E3440;
  --color-base-70: #2E3440;
  --color-yellow: #e4b860;
  --color-yellow-rgb: 228, 184, 96;
  --divider-color: #D8DEE9;
  --divider-color-hover: hsl(212, 32.32%, 56.975%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ECEFF4;
  --dropdown-background-hover: #E5E9F0;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ECEFF4;
  --flair-color: #2E3440;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #D8DEE9;
  --graph-node: #2E3440;
  --graph-node-attachment: #e4b860;
  --graph-node-focused: hsl(213, 32%, 53%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #3B4252;
  --graph-text: #2E3440;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #3B4252;
  --heading-spacing: 1rem;
  --hr-color: #D8DEE9;
  --interactive-accent: hsl(212, 32.32%, 56.975%);
  --interactive-accent-hover: hsl(210, 32.64%, 60.95%);
  --interactive-accent-hsl: 213, 32%, 53%;
  --interactive-hover: #E5E9F0;
  --interactive-normal: #ECEFF4;
  --link-color: hsl(213, 32%, 53%);
  --link-color-hover: hsl(210, 32.64%, 60.95%);
  --link-external-color: hsl(213, 32%, 53%);
  --link-external-color-hover: hsl(210, 32.64%, 60.95%);
  --link-unresolved-color: hsl(213, 32%, 53%);
  --link-unresolved-decoration-color: hsla(213, 32%, 53%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #ECEFF4;
  --menu-border-color: #D8DEE9;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #f5f7f9;
  --pdf-page-background: #f5f7f9;
  --pdf-sidebar-background: #f5f7f9;
  --pln-cards-color-rgb: 216, 222, 233;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #2E3440;
  --search-icon-color: #2E3440;
  --search-result-background: #f5f7f9;
  --setting-group-heading-color: #2E3440;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #ECEFF4;
  --setting-items-border-color: #D8DEE9;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #2E3440;
  --shiki-code-background: #ECEFF4;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #3B4252;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #2E3440;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #2E3440;
  --shiki-code-string: #e4b860;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #D8DEE9;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #3B4252;
  --shiki-gutter-text-color-highlight: #2E3440;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #2E3440;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #3B4252;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f5f7f9;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #e4b860;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #f5f7f9;
  --tab-divider-color: #D8DEE9;
  --tab-font-size: 10px;
  --tab-outline-color: #D8DEE9;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #ECEFF4;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECEFF4, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 32%, 53%);
  --tab-text-color: #3B4252;
  --tab-text-color-active: #2E3440;
  --tab-text-color-focused: #2E3440;
  --tab-text-color-focused-active: #2E3440;
  --tab-text-color-focused-active-current: #2E3440;
  --tab-text-color-focused-highlighted: hsl(213, 32%, 53%);
  --table-add-button-border-color: #D8DEE9;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 32.32%, 56.975%);
  --table-drag-handle-color: #3B4252;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8DEE9;
  --table-header-border-width: 1px;
  --table-header-color: #2E3440;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(213, 32%, 53%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(212, 32.32%, 56.975%);
  --table-text-size: 16px;
  --tag-background: hsla(213, 32%, 53%, 0.1);
  --tag-background-hover: hsla(213, 32%, 53%, 0.2);
  --tag-border-color: hsla(213, 32%, 53%, 0.15);
  --tag-border-color-hover: hsla(213, 32%, 53%, 0.15);
  --tag-color: hsl(213, 32%, 53%);
  --tag-color-hover: hsl(213, 32%, 53%);
  --tag-size: 0.875em;
  --text-accent: hsl(213, 32%, 53%);
  --text-accent-hover: hsl(210, 32.64%, 60.95%);
  --text-error: #FC6E68;
  --text-faint: #3B4252;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #2E3440;
  --text-normal: #2E3440;
  --text-selection: hsla(213, 32%, 53%, 0.2);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 129, 172);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--color-red-rgb, 191, 97, 106);
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(191, 97, 106);
  border-left-width: 2px;
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgb(191, 97, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--color-salmon-rgb, 252, 110, 104);
  background: rgba(252, 110, 104, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(252, 110, 104, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(252, 110, 104);
  border-left-width: 2px;
  border-right-color: rgba(252, 110, 104, 0.25);
  border-top-color: rgb(252, 110, 104);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--color-purple-rgb, 180, 142, 173);
  background: rgba(180, 142, 173, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(180, 142, 173);
  border-left-width: 2px;
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgb(180, 142, 173);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--color-orange-rgb, 208, 135, 112);
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(208, 135, 112);
  border-left-width: 2px;
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgb(208, 135, 112);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --accent-h: 213;
  --accent-l: 53%;
  --accent-s: 32%;
  --background-modifier-active-hover: hsla(213, 32%, 53%, 0.1);
  --background-modifier-border: #D8DEE9;
  --background-modifier-border-focus: #ECEFF4;
  --background-modifier-border-hover: #D8DEE9;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #ECEFF4;
  --background-modifier-form-field-hover: #ECEFF4;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #f5f7f9;
  --background-primary-alt: #ECEFF4;
  --background-secondary: #ECEFF4;
  --background-secondary-alt: #E5E9F0;
  --blockquote-border-color: hsl(212, 32.32%, 56.975%);
  --blur-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--color-yellow-dark-rgb, 228, 184, 96);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #f5f7f9;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #D8DEE9;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #2E3440;
  --checkbox-border-color: #3B4252;
  --checkbox-border-color-hover: #2E3440;
  --checkbox-color: hsl(212, 32.32%, 56.975%);
  --checkbox-color-hover: hsl(210, 32.64%, 60.95%);
  --checkbox-marker-color: #f5f7f9;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #2E3440;
  --clickable-icon-radius: 4px;
  --code-background: #ECEFF4;
  --code-border-color: #D8DEE9;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #3B4252;
  --code-function: #e4b860;
  --code-important: #d08770;
  --code-keyword: #d53984;
  --code-normal: #2E3440;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #2E3440;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #3B4252;
  --collapse-icon-color-collapsed: hsl(213, 32%, 53%);
  --color-accent: hsl(213, 32%, 53%);
  --color-accent-1: hsl(212, 32.32%, 56.975%);
  --color-accent-2: hsl(210, 32.64%, 60.95%);
  --color-accent-hsl: 213, 32%, 53%;
  --color-base-00: #ECEFF4;
  --color-base-10: #E5E9F0;
  --color-base-100: #2E3440;
  --color-base-20: #D8DEE9;
  --color-base-25: #4C566A;
  --color-base-30: #D8DEE9;
  --color-base-35: #D8DEE9;
  --color-base-40: #ECEFF4;
  --color-base-50: #3B4252;
  --color-base-60: #2E3440;
  --color-base-70: #2E3440;
  --color-yellow: #e4b860;
  --color-yellow-rgb: 228, 184, 96;
  --divider-color: #D8DEE9;
  --divider-color-hover: hsl(212, 32.32%, 56.975%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ECEFF4;
  --dropdown-background-hover: #E5E9F0;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ECEFF4;
  --flair-color: #2E3440;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #D8DEE9;
  --graph-node: #2E3440;
  --graph-node-attachment: #e4b860;
  --graph-node-focused: hsl(213, 32%, 53%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #3B4252;
  --graph-text: #2E3440;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #3B4252;
  --heading-spacing: 1rem;
  --hr-color: #D8DEE9;
  --interactive-accent: hsl(212, 32.32%, 56.975%);
  --interactive-accent-hover: hsl(210, 32.64%, 60.95%);
  --interactive-accent-hsl: 213, 32%, 53%;
  --interactive-hover: #E5E9F0;
  --interactive-normal: #ECEFF4;
  --link-color: hsl(213, 32%, 53%);
  --link-color-hover: hsl(210, 32.64%, 60.95%);
  --link-external-color: hsl(213, 32%, 53%);
  --link-external-color-hover: hsl(210, 32.64%, 60.95%);
  --link-unresolved-color: hsl(213, 32%, 53%);
  --link-unresolved-decoration-color: hsla(213, 32%, 53%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #ECEFF4;
  --menu-border-color: #D8DEE9;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #f5f7f9;
  --pdf-page-background: #f5f7f9;
  --pdf-sidebar-background: #f5f7f9;
  --pln-cards-color-rgb: 216, 222, 233;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #2E3440;
  --search-icon-color: #2E3440;
  --search-result-background: #f5f7f9;
  --setting-group-heading-color: #2E3440;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #ECEFF4;
  --setting-items-border-color: #D8DEE9;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #2E3440;
  --shiki-code-background: #ECEFF4;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #3B4252;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #2E3440;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #2E3440;
  --shiki-code-string: #e4b860;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #D8DEE9;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #3B4252;
  --shiki-gutter-text-color-highlight: #2E3440;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #2E3440;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #3B4252;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f5f7f9;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #e4b860;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #f5f7f9;
  --tab-divider-color: #D8DEE9;
  --tab-font-size: 10px;
  --tab-outline-color: #D8DEE9;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #ECEFF4;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECEFF4, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 32%, 53%);
  --tab-text-color: #3B4252;
  --tab-text-color-active: #2E3440;
  --tab-text-color-focused: #2E3440;
  --tab-text-color-focused-active: #2E3440;
  --tab-text-color-focused-active-current: #2E3440;
  --tab-text-color-focused-highlighted: hsl(213, 32%, 53%);
  --table-add-button-border-color: #D8DEE9;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 32.32%, 56.975%);
  --table-drag-handle-color: #3B4252;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8DEE9;
  --table-header-border-width: 1px;
  --table-header-color: #2E3440;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(213, 32%, 53%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(212, 32.32%, 56.975%);
  --table-text-size: 16px;
  --tag-background: hsla(213, 32%, 53%, 0.1);
  --tag-background-hover: hsla(213, 32%, 53%, 0.2);
  --tag-border-color: hsla(213, 32%, 53%, 0.15);
  --tag-border-color-hover: hsla(213, 32%, 53%, 0.15);
  --tag-color: hsl(213, 32%, 53%);
  --tag-color-hover: hsl(213, 32%, 53%);
  --tag-size: 0.875em;
  --text-accent: hsl(213, 32%, 53%);
  --text-accent-hover: hsl(210, 32.64%, 60.95%);
  --text-error: #FC6E68;
  --text-faint: #3B4252;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #2E3440;
  --text-normal: #2E3440;
  --text-selection: hsla(213, 32%, 53%, 0.2);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(228, 184, 96, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(228, 184, 96);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(228, 184, 96, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(228, 184, 96);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--color-cyan-rgb, 136, 192, 208);
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="links"] {
  --accent-h: 213;
  --accent-l: 53%;
  --accent-s: 32%;
  --background-modifier-active-hover: hsla(213, 32%, 53%, 0.1);
  --background-modifier-border: #D8DEE9;
  --background-modifier-border-focus: #ECEFF4;
  --background-modifier-border-hover: #D8DEE9;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #ECEFF4;
  --background-modifier-form-field-hover: #ECEFF4;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #f5f7f9;
  --background-primary-alt: #ECEFF4;
  --background-secondary: #ECEFF4;
  --background-secondary-alt: #E5E9F0;
  --blockquote-border-color: hsl(212, 32.32%, 56.975%);
  --blur-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--b3-rgb, 76, 86, 106);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #f5f7f9;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #D8DEE9;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #2E3440;
  --checkbox-border-color: #3B4252;
  --checkbox-border-color-hover: #2E3440;
  --checkbox-color: hsl(212, 32.32%, 56.975%);
  --checkbox-color-hover: hsl(210, 32.64%, 60.95%);
  --checkbox-marker-color: #f5f7f9;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #2E3440;
  --clickable-icon-radius: 4px;
  --code-background: #ECEFF4;
  --code-border-color: #D8DEE9;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #3B4252;
  --code-function: #e4b860;
  --code-important: #d08770;
  --code-keyword: #d53984;
  --code-normal: #2E3440;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #2E3440;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #3B4252;
  --collapse-icon-color-collapsed: hsl(213, 32%, 53%);
  --color-accent: hsl(213, 32%, 53%);
  --color-accent-1: hsl(212, 32.32%, 56.975%);
  --color-accent-2: hsl(210, 32.64%, 60.95%);
  --color-accent-hsl: 213, 32%, 53%;
  --color-base-00: #ECEFF4;
  --color-base-10: #E5E9F0;
  --color-base-100: #2E3440;
  --color-base-20: #D8DEE9;
  --color-base-25: #4C566A;
  --color-base-30: #D8DEE9;
  --color-base-35: #D8DEE9;
  --color-base-40: #ECEFF4;
  --color-base-50: #3B4252;
  --color-base-60: #2E3440;
  --color-base-70: #2E3440;
  --color-yellow: #e4b860;
  --color-yellow-rgb: 228, 184, 96;
  --divider-color: #D8DEE9;
  --divider-color-hover: hsl(212, 32.32%, 56.975%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ECEFF4;
  --dropdown-background-hover: #E5E9F0;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ECEFF4;
  --flair-color: #2E3440;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #D8DEE9;
  --graph-node: #2E3440;
  --graph-node-attachment: #e4b860;
  --graph-node-focused: hsl(213, 32%, 53%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #3B4252;
  --graph-text: #2E3440;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #3B4252;
  --heading-spacing: 1rem;
  --hr-color: #D8DEE9;
  --interactive-accent: hsl(212, 32.32%, 56.975%);
  --interactive-accent-hover: hsl(210, 32.64%, 60.95%);
  --interactive-accent-hsl: 213, 32%, 53%;
  --interactive-hover: #E5E9F0;
  --interactive-normal: #ECEFF4;
  --link-color: hsl(213, 32%, 53%);
  --link-color-hover: hsl(210, 32.64%, 60.95%);
  --link-external-color: hsl(213, 32%, 53%);
  --link-external-color-hover: hsl(210, 32.64%, 60.95%);
  --link-unresolved-color: hsl(213, 32%, 53%);
  --link-unresolved-decoration-color: hsla(213, 32%, 53%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #ECEFF4;
  --menu-border-color: #D8DEE9;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #f5f7f9;
  --pdf-page-background: #f5f7f9;
  --pdf-sidebar-background: #f5f7f9;
  --pln-cards-color-rgb: 216, 222, 233;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #2E3440;
  --search-icon-color: #2E3440;
  --search-result-background: #f5f7f9;
  --setting-group-heading-color: #2E3440;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #ECEFF4;
  --setting-items-border-color: #D8DEE9;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #2E3440;
  --shiki-code-background: #ECEFF4;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #3B4252;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #2E3440;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #2E3440;
  --shiki-code-string: #e4b860;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #D8DEE9;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #3B4252;
  --shiki-gutter-text-color-highlight: #2E3440;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #2E3440;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #3B4252;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f5f7f9;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #e4b860;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #f5f7f9;
  --tab-divider-color: #D8DEE9;
  --tab-font-size: 10px;
  --tab-outline-color: #D8DEE9;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #ECEFF4;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECEFF4, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 32%, 53%);
  --tab-text-color: #3B4252;
  --tab-text-color-active: #2E3440;
  --tab-text-color-focused: #2E3440;
  --tab-text-color-focused-active: #2E3440;
  --tab-text-color-focused-active-current: #2E3440;
  --tab-text-color-focused-highlighted: hsl(213, 32%, 53%);
  --table-add-button-border-color: #D8DEE9;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 32.32%, 56.975%);
  --table-drag-handle-color: #3B4252;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8DEE9;
  --table-header-border-width: 1px;
  --table-header-color: #2E3440;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(213, 32%, 53%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(212, 32.32%, 56.975%);
  --table-text-size: 16px;
  --tag-background: hsla(213, 32%, 53%, 0.1);
  --tag-background-hover: hsla(213, 32%, 53%, 0.2);
  --tag-border-color: hsla(213, 32%, 53%, 0.15);
  --tag-border-color-hover: hsla(213, 32%, 53%, 0.15);
  --tag-color: hsl(213, 32%, 53%);
  --tag-color-hover: hsl(213, 32%, 53%);
  --tag-size: 0.875em;
  --text-accent: hsl(213, 32%, 53%);
  --text-accent-hover: hsl(210, 32.64%, 60.95%);
  --text-error: #FC6E68;
  --text-faint: #3B4252;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #2E3440;
  --text-normal: #2E3440;
  --text-selection: hsla(213, 32%, 53%, 0.2);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(76, 86, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(76, 86, 106);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(76, 86, 106, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="meta"] {
  --accent-h: 213;
  --accent-l: 53%;
  --accent-s: 32%;
  --background-modifier-active-hover: hsla(213, 32%, 53%, 0.1);
  --background-modifier-border: #D8DEE9;
  --background-modifier-border-focus: #ECEFF4;
  --background-modifier-border-hover: #D8DEE9;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #ECEFF4;
  --background-modifier-form-field-hover: #ECEFF4;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #f5f7f9;
  --background-primary-alt: #ECEFF4;
  --background-secondary: #ECEFF4;
  --background-secondary-alt: #E5E9F0;
  --blockquote-border-color: hsl(212, 32.32%, 56.975%);
  --blur-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 191, 97, 106;
  --callout-color: var(--b3-rgb, 76, 86, 106);
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-title-weight: 600;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #f5f7f9;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #D8DEE9;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --caret-color: #2E3440;
  --checkbox-border-color: #3B4252;
  --checkbox-border-color-hover: #2E3440;
  --checkbox-color: hsl(212, 32.32%, 56.975%);
  --checkbox-color-hover: hsl(210, 32.64%, 60.95%);
  --checkbox-marker-color: #f5f7f9;
  --checkbox-radius: 4px;
  --checkbox-size: 1.1em;
  --checklist-done-color: #2E3440;
  --clickable-icon-radius: 4px;
  --code-background: #ECEFF4;
  --code-border-color: #D8DEE9;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #3B4252;
  --code-function: #e4b860;
  --code-important: #d08770;
  --code-keyword: #d53984;
  --code-normal: #2E3440;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #2E3440;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #3B4252;
  --collapse-icon-color-collapsed: hsl(213, 32%, 53%);
  --color-accent: hsl(213, 32%, 53%);
  --color-accent-1: hsl(212, 32.32%, 56.975%);
  --color-accent-2: hsl(210, 32.64%, 60.95%);
  --color-accent-hsl: 213, 32%, 53%;
  --color-base-00: #ECEFF4;
  --color-base-10: #E5E9F0;
  --color-base-100: #2E3440;
  --color-base-20: #D8DEE9;
  --color-base-25: #4C566A;
  --color-base-30: #D8DEE9;
  --color-base-35: #D8DEE9;
  --color-base-40: #ECEFF4;
  --color-base-50: #3B4252;
  --color-base-60: #2E3440;
  --color-base-70: #2E3440;
  --color-yellow: #e4b860;
  --color-yellow-rgb: 228, 184, 96;
  --divider-color: #D8DEE9;
  --divider-color-hover: hsl(212, 32.32%, 56.975%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ECEFF4;
  --dropdown-background-hover: #E5E9F0;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ECEFF4;
  --flair-color: #2E3440;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #D8DEE9;
  --graph-node: #2E3440;
  --graph-node-attachment: #e4b860;
  --graph-node-focused: hsl(213, 32%, 53%);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #3B4252;
  --graph-text: #2E3440;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #3B4252;
  --heading-spacing: 1rem;
  --hr-color: #D8DEE9;
  --interactive-accent: hsl(212, 32.32%, 56.975%);
  --interactive-accent-hover: hsl(210, 32.64%, 60.95%);
  --interactive-accent-hsl: 213, 32%, 53%;
  --interactive-hover: #E5E9F0;
  --interactive-normal: #ECEFF4;
  --link-color: hsl(213, 32%, 53%);
  --link-color-hover: hsl(210, 32.64%, 60.95%);
  --link-external-color: hsl(213, 32%, 53%);
  --link-external-color-hover: hsl(210, 32.64%, 60.95%);
  --link-unresolved-color: hsl(213, 32%, 53%);
  --link-unresolved-decoration-color: hsla(213, 32%, 53%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #ECEFF4;
  --menu-border-color: #D8DEE9;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #f5f7f9;
  --pdf-page-background: #f5f7f9;
  --pdf-sidebar-background: #f5f7f9;
  --pln-cards-color-rgb: 216, 222, 233;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #2E3440;
  --search-icon-color: #2E3440;
  --search-result-background: #f5f7f9;
  --setting-group-heading-color: #2E3440;
  --setting-group-heading-size: 12px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #ECEFF4;
  --setting-items-border-color: #D8DEE9;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #2E3440;
  --shiki-code-background: #ECEFF4;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: .5rem;
  --shiki-code-comment: #3B4252;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #2E3440;
  --shiki-code-property: #88c0d0;
  --shiki-code-punctuation: #2E3440;
  --shiki-code-string: #e4b860;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #D8DEE9;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #3B4252;
  --shiki-gutter-text-color-highlight: #2E3440;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5);
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1);
  --shiki-highlight-neutral: #2E3440;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(191, 97, 106, 0.5);
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1);
  --shiki-terminal-dots-color: #3B4252;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f5f7f9;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #e4b860;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #f5f7f9;
  --tab-divider-color: #D8DEE9;
  --tab-font-size: 10px;
  --tab-outline-color: #D8DEE9;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-switcher-background: #ECEFF4;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECEFF4, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 32%, 53%);
  --tab-text-color: #3B4252;
  --tab-text-color-active: #2E3440;
  --tab-text-color-focused: #2E3440;
  --tab-text-color-focused-active: #2E3440;
  --tab-text-color-focused-active-current: #2E3440;
  --tab-text-color-focused-highlighted: hsl(213, 32%, 53%);
  --table-add-button-border-color: #D8DEE9;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 32.32%, 56.975%);
  --table-drag-handle-color: #3B4252;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8DEE9;
  --table-header-border-width: 1px;
  --table-header-color: #2E3440;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(213, 32%, 53%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(212, 32.32%, 56.975%);
  --table-text-size: 16px;
  --tag-background: hsla(213, 32%, 53%, 0.1);
  --tag-background-hover: hsla(213, 32%, 53%, 0.2);
  --tag-border-color: hsla(213, 32%, 53%, 0.15);
  --tag-border-color-hover: hsla(213, 32%, 53%, 0.15);
  --tag-color: hsl(213, 32%, 53%);
  --tag-color-hover: hsl(213, 32%, 53%);
  --tag-size: 0.875em;
  --text-accent: hsl(213, 32%, 53%);
  --text-accent-hover: hsl(210, 32.64%, 60.95%);
  --text-error: #FC6E68;
  --text-faint: #3B4252;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-muted: #2E3440;
  --text-normal: #2E3440;
  --text-selection: hsla(213, 32%, 53%, 0.2);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(76, 86, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(76, 86, 106);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(76, 86, 106, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--color-blue-rgb, 94, 129, 172);
  background: rgba(94, 129, 172, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--color-green-rgb, 163, 190, 140);
  background: rgba(163, 190, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--color-frost-rgb, 129, 161, 193);
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--color-green-rgb, 163, 190, 140);
  background: rgba(163, 190, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--color-cyan-rgb, 136, 192, 208);
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--color-cyan-rgb, 136, 192, 208);
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--color-yellow-dark-rgb, 228, 184, 96);
  background: rgba(228, 184, 96, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(228, 184, 96, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(228, 184, 96);
  border-left-width: 2px;
  border-right-color: rgba(228, 184, 96, 0.25);
  border-top-color: rgb(228, 184, 96);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(94, 129, 172));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="blank-titled"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="blank"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 16h.01'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="links"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="meta"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'/%3E%3Cpath d='M3 5V19A9 3 0 0 0 21 19V5'/%3E%3Cpath d='M3 12A9 3 0 0 0 21 12'/%3E%3C/svg%3E");
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
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: var(--text-normal, rgb(46, 52, 64));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(245, 247, 249));
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(97, 131, 174, 0.1));
  border-bottom-color: rgba(97, 131, 174, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(97, 131, 174, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(97, 131, 174, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(97, 131, 174, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(97, 131, 174);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(46, 52, 64));
  font-size: var(--inline-title-size, 32px);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--color-blue-rgb, 94, 129, 172);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(191, 97, 106);
  border-left-width: 3px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(46, 52, 64));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(46, 52, 64);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: var(--icon-color, rgb(46, 52, 64));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(236, 239, 244));
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: var(--status-bar-text-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(46, 52, 64);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(46, 52, 64);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: var(--icon-color, rgb(46, 52, 64));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(46, 52, 64);
  stroke: rgb(46, 52, 64);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(59, 66, 82));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(46, 52, 64));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(245, 247, 249));
  border-color: rgb(46, 52, 64);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(216, 222, 233);
  color: var(--table-header-color, rgb(46, 52, 64));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--metadata-background, rgba(216, 222, 233, 0.4));
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 222, 233);
  border-left-width: 2px;
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: var(--text-muted, rgb(46, 52, 64));
  margin-bottom: 10px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--metadata-background, rgba(216, 222, 233, 0.4));
  border-color: rgb(216, 222, 233);
  border-radius: 5px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(97, 131, 174, 0.1));
  border-radius: 5px;
  color: var(--pill-color, rgb(97, 131, 174));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(245, 247, 249));
  color: var(--text-normal, rgb(46, 52, 64));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(236, 239, 244));
  border-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(229, 233, 240));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(46, 52, 64);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(236, 239, 244));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(46, 52, 64));
}

html[saved-theme="light"] body abbr {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: var(--text-normal, rgb(46, 52, 64));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(236, 239, 244));
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: var(--code-normal, rgb(46, 52, 64));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body sub {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body summary {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body sup {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(97, 131, 174, 0.1));
  border-bottom-color: rgba(97, 131, 174, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(97, 131, 174, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(97, 131, 174, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(97, 131, 174, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  color: var(--tag-color, rgb(97, 131, 174));
}`,
  },
  classSettings: {
    "pln-italics": {
      general: `.pln-italics {
em, .cm-em {
            display: inline-block;
            transform: skew(-10deg);
        };
}`,
    },
    "pln-link-mods": {
      general: `body.pln-link-mods {
& {
    --link-decoration: none;
    --link-decoration-hover: none;
    --link-external-decoration: underline;
    --link-external-decoration-hover: underline !important;
    --link-unresolved-opacity: 100;
    };
/* remove the icon from external links */
& .external-link {
        background-image: none;
        padding-right: 0px;
    };
}`,
    },
    "pln-hilite-mods": {
      general: `.pln-hilite-mods {
& mark,
    & .markdown-rendered mark,
    & .cm-s-obsidian span.cm-highlight {
        color: inherit;
        background: rgba(var(--color-yellow-rgb),0.2);
        border-radius: 5px;
        border: 2px solid;
        border-color: var(--color-yellow);
    };
/*Add highlighter's label before highlighted text*/
& mark::before,
    & .cm-s-obsidian span.cm-highlight::before {
        padding: 0 5px;
        text-transform: lowercase;
        font-style: italic;
        font-family: Palatino;
    };
/*Red highlighter (edit)*/
& mark.edit { 
        border-color: var(--color-red);
        background: rgba(var(--color-red-rgb),0.2);
    };
& mark.edit::before {
        color: var(--color-red);
        content: "Edit:";
    };
/*Orange highlighter (unfinished)*/
& mark.unfinished { 
        border-color: var(--color-orange);
        background: rgba(var(--color-orange-rgb),0.2);
    };
& mark.unfinished::before {
        color: var(--color-orange);
        content: "Unfinished:";
    };
/*Pink highlighter (verify)*/
& mark.verify { 
        border-color: var(--color-purple);
        background: rgba(var(--color-purple-rgb),0.2);
    };
& mark.verify::before {
        color: var(--color-purple);
        content: "Verify:";
    };
/* Green highlighter (important)*/
& mark.important { 
        border-color: var(--color-green);
        background: rgba(var(--color-green-rgb),0.2);
    };
& mark.important::before {
        color: var(--color-green);
        content: "Important:";
    };
/*
    * Text colours using mark
    */
& mark.red {
        color: var(--color-red);
        background: none;
        border: 0px;
    };
& mark.orange {
        color: var(--color-orange);
        background: none;
        border: 0px;
    };
& mark.yellow {
        color: var(--color-yellow);
        background: none;
        border: 0px;
    };
& mark.green {
        color: var(--color-green);
        background: none;
        border: 0px;
    };
& mark.purple {
        color: var(--color-purple);
        background: none;
        border: 0px;
    };
& mark.sea-green {
        color: var(--color-sea-green);
        background: none;
        border: 0px;
    };
& mark.cyan {
        color: var(--color-cyan);
        background: none;
        border: 0px;
    };
& mark.frost {
        color: var(--color-frost);
        background: none;
        border: 0px;
    };
& mark.blue {
        color: var(--color-blue);
        background: none;
        border: 0px;
    };
& mark.salmon {
        color: var(--color-salmon);
        background: none;
        border: 0px;
    };
/*underlined text*/
& mark.underline {
        text-decoration: underline;
        background: none;
        border: 0px;
    };
/* paths */
& mark.path {
        font-family: var(--font-monospace);
        color: var(--text-faint);
        background: none;
        border: 0px;
    };
/* borders */
& mark.borders {
        border: 1px solid;
        border-radius: 0px;
        padding-left: 2px;
        padding-right: 2px;
        background: none;
    };
/* spoiler */
& mark.spoiler {
        border: 0px;
        background-color: var(--text-normal);
    };
& mark.spoiler:hover {
        background-color: inherit;
    };
}`,
    },
    "pln-hi-line": {
      general: `.pln-hi-line:not(.pln-vision) .cm-active.cm-line, .pln-hi-line-hover:not(.pln-vision) .cm-line:hover {
background-color: var(--background-modifier-border);
}

.pln-hi-line:not(.pln-vision) .cm-gutterElement.cm-active {
color:  var(--color-yellow);
font-weight: bold;
background-color: var(--background-modifier-border);
}`,
    },
    "pln-hi-line-hover": {
      general: `.pln-hi-line-hover:not(.pln-vision) .cm-line:hover {
background-color: var(--background-modifier-border);
}`,
    },
    "pln-hi-tr": {
      general: `.pln-hi-tr .mod-root tr:hover {
background-color: var(--background-secondary) !important;
}`,
    },
    "pln-hide-files": {
      general: `.pln-hide-files {
& div[data-path^="_"],
    & div[data-path*="/_"] {
        display: none;
    };
}`,
    },
    "pln-folder-icons": {
      general: `.pln-folder-icons {
/* optionally make the collapse icons folders instead */
& .nav-files-container .collapse-icon.is-collapsed svg.svg-icon {
        transform: none;
    };
/* Make all folder chevrons into icons, and make them all white */
& .nav-files-container > div > .nav-folder .collapse-icon svg {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-folder-open'%3E%3Cpath d='m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2'/%3E%3C/svg%3E");
        color: var(--icon-color);
        background-color: var(--icon-color);
    };
/* Change top level to grey */
& .nav-files-container > div > .nav-folder > .nav-folder-title > .collapse-icon svg {
        color: var(--b0);
        background-color: var(--b0);
    };
/* Make all folder chevrons into icons, and make them all white */
& .nav-files-container > div > .nav-folder .collapse-icon.is-collapsed  svg {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-folder'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E");
        color: var(--icon-color);
        background-color: var(--icon-color);
    };
/* Change top level to grey */
& .nav-files-container > div > .nav-folder > .nav-folder-title > .collapse-icon.is-collapsed svg {
        color: var(--b0);
        background-color: var(--b0);
    };
}`,
    },
    "pln-dv-mods": {
      general: `.pln-dv-mods {
& .markdown-source-view.mod-cm6 .edit-block-button {
        display: none;
    };
/* move dataview results over 2px to align with embeds in reading mode */
& .markdown-reading-view .dataview.result-group {
        padding-left: 2px;
    };
/* do not move dataview results over in live preview mode */
& .is-live-preview .dataview.result-group {
        padding-left: 0px;
    };
/* if you offset embeds, this can be 0 otherwise 2px */
& .cm-preview-code-block.cm-embed-block.markdown-rendered {
        padding-left: 0;
    };
/* move the checkbox container over pixels in reading mode */
/* this was an issue on my daily notes when embedding all PTIs */
& .markdown-reading-view .dataview-container .contains-task-list {
        padding-left: 20px;
    };
/* hides the item count on a list */
&.pln-dv-count .dataview.small-text {
        display: none;
    };
/* 1.6 fix to move lists back over in embeds */
& .dataview-container {
        --list-indent: 0;
    };
/* 1.6 fix to move list items over in DV queries in LP unless it is in an embed */
/* This is not exact but it is a better fix than margin-left: -6px */
& .is-live-preview:not(:has(.markdown-embed-content)) .dataview.task-list-item {
        margin-inline-start: var(--list-indent);
    };
/* commented out to fix daily note in 1.6.1
    /* 1.6 for child items in LP 
    & .is-live-preview .dataview-container .contains-task-list .contains-task-list .task-list-item-checkbox {
        --checkbox-margin-inline-start: 3em;
    }
    /* 1.6 for bullet items in LP 
    & .is-live-preview .dataview-container .contains-task-list .contains-task-list .task-list-basic-item {
        margin-inline-start: 3em;
    }
    */
/* 1.6 fix non-checkbox list under a dataview task in LP */
& .is-live-preview .dataview.result-group .contains-task-list .task-list-item ul:not(:has(.task-list-item-checkbox)) {
        padding-inline-start: 2em;
    };
/* 1.6 fix non-checkbox list under a dataview task in Reading */
& .markdown-reading-view .dataview.result-group .task-list-item ul {
        padding-inline-start: 2em;
    };
}`,
    },
    "pln-dv-count": {
      general: `&.pln-dv-count .dataview.small-text {
display: none;
}`,
    },
    "pln-view-invert": {
      general: `.pln-view-invert {
& .workspace-leaf-content:has(.is-live-preview) .clickable-icon.view-action[aria-label^="Current view: editing"] {
        -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20h9'%3E%3C/path%3E%3Cpath d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'%3E%3C/path%3E%3C/svg%3E");
        background-color: var(--icon-color);
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
    };
& .clickable-icon.view-action[aria-label^="Current view: reading"] {
        -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'%3E%3C/path%3E%3Cpath d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'%3E%3C/path%3E%3C/svg%3E");
        background-color: var(--icon-color);
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
    };
/* add an icon specifc for source view */
& .workspace-leaf-content:not(:has(.is-live-preview)) .clickable-icon.view-action[aria-label^="Current view: editing"] {
        -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-pencil-line'%3E%3Cpath d='M12 20h9'/%3E%3Cpath d='M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z'/%3E%3Cpath d='m15 5 3 3'/%3E%3C/svg%3E");
        background-color: var(--icon-color);
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
    };
}`,
    },
    "pln-boxed-tags": {
      general: `.pln-boxed-tags {
& {
        --tag-radius: 5px;
        --tag-border-width: 2px;
    };
}`,
    },
    "pln-tab-rows": {
      general: `&.pln-tab-rows .mod-root .workspace-tabs .workspace-tab-header-container:hover .workspace-tab-header:has(.mod-pinned) {
--tab-max-width: unset;
& .workspace-tab-header-inner-title {
            display: contents;
        };
& .workspace-tab-header-inner-icon {
            display: none;
        };
& .mod-pinned {
            display: contents;
        };
}

.pln-tab-rows:not(:has(.mod-stacked)) {
/* Primary wrapping functions */
& .mod-root .workspace-tab-header-container:hover {
        --tab-width: unset; /* Kapirklaa */
        flex-wrap: wrap;
        min-height: var(--header-height);
        height: unset;

        /* primary bubble creation */
        /* here be dragons */
        & .workspace-tab-header {
            width: unset; /* Kapirklaa */
            container-type: normal; /* Kapirklaa */
            flex-shrink: 1;
            flex-grow: 1;
            flex-basis:auto;
            margin-bottom: 4px;
            border-radius: 5px;
        }

        /* Remove the shoulders on tabs so the bubbles work */
        & .workspace-tab-header::before, .workspace-tab-header::after {
            display: none;
        }
    };
/* Remove drag, this is required for hover to work. It does not break the ability to drag tabs */
& .workspace-tab-header-container-inner {
        flex-wrap: wrap;
        -webkit-app-region: no-drag;
    };
/* Prevent hovering over tabs from making them larger and twitching the display */
& .mod-root .workspace-tabs {
        & .workspace-tab-header {
            & .workspace-tab-header-inner-close-button svg {
                height: calc(var(--icon-size) /2);
                width: calc(var(--icon-size) /2);
            }
            /* Make all close buttons light up */
            & .workspace-tab-header-inner-close-button:hover {
                background-color: var(--background-modifier-hover);
            }
        }
        /* make the close icons work better by always taking up space and only showing the x on hover
           also does not overlap the words (absolute positioning causes overlap) */
        & .workspace-tab-header-container:hover .workspace-tab-header .workspace-tab-header-inner-close-button {
            display: flex;
            width: 12px;
        }
        & .workspace-tab-header:not(:hover) .workspace-tab-header-inner-close-button svg {
            display: none;
        }
    };
/* Corrects spacing below tabs */
&  .workspace-tab-header-tab-list {
        position: absolute;
        right: 0;
        top: 30px;
    };
/* Move the tabs over with padding to make room for new tab icon */
& .mod-root .workspace-tab-header-container-inner {
        padding-right: 53px;
    };
/* Move new tab icon when using frameless */
&.is-hidden-frameless {
        &.mod-macos .mod-root .workspace-tab-header-new-tab {
            position: absolute;
            right: 0;
            top: -5px;
        }
        &.mod-windows {
            & .workspace-tab-header-new-tab {
                position: absolute;
                right: 138px;
                top: -5px;
            }
            & .is-right-sidedock-open .workspace-tab-header-new-tab {
                right: 0;
            }
        }
    };
/* Move new tab icon when using frameled */
&:not(.is-hidden-frameless) {
        &.mod-windows {
            & .workspace-tab-header-new-tab {
                position: absolute;
                right: 0px;
                top: -5px;
            }
        }
    };
/* Move sidebar toggle */
& .sidebar-toggle-button {
        display: none;
        /* position: absolute;
        right: 60px;
        top: 30px; */
    };
/* shorten the separator between tabs */
& .workspace .mod-root .workspace-tab-header-inner::after {
        height: 10px;
    };
/* Original code */
& .is-hidden-frameless:not(.is-fullscreen):not(.mod-macos) .workspace-tabs.mod-top-right-space .workspace-tab-header-container:after {
        height: 40px;
    };
& .workspace-tab-header-spacer {
        display: none;
    };
}`,
    },
    "pln-pretty-pinned": {
      general: `.pln-pretty-pinned:not(:has(.mod-stacked)) {
& .workspace-tab-header:has(.mod-pinned) {
        --tab-max-width: 30px;
        & .workspace-tab-header-inner-title {
            display: none;
        }
        & .workspace-tab-header-inner-icon {
            display: flex;
        }
        & .mod-pinned {
            display: none;
        }
    };
&.pln-tab-rows .mod-root .workspace-tabs .workspace-tab-header-container:hover .workspace-tab-header:has(.mod-pinned) {
        --tab-max-width: unset;
        & .workspace-tab-header-inner-title {
            display: contents;
        }
        & .workspace-tab-header-inner-icon {
            display: none;
        }
        & .mod-pinned {
            display: contents;
        }
    };
}`,
    },
    "pln-pin-protect": {
      general: `.pln-pin-protect .mod-pinned {
pointer-events: none;
}`,
    },
    "pln-stacked-100": {
      general: `&.pln-stacked-100 {
--tab-stacked-pane-width: 100%
    ;
}`,
    },
    "pln-attachments": {
      general: `&.pln-attachments .nav-file:has(.nav-file-tag) {
display: none;
}

.pln-attachments {
&.pln-attachments-canvas .nav-file:has([data-path$=".canvas"]),
    &.pln-attachments-pdf .nav-file:has([data-path$=".pdf"]),
    &.pln-attachments-docx .nav-file:has([data-path$=".docx"]),
    &.pln-attachments-xlsx .nav-file:has([data-path$=".xlsx"]),
    &.pln-attachments-images .nav-file:has([data-path$=".jpg"]),
    &.pln-attachments-images .nav-file:has([data-path$=".jpeg"]),
    &.pln-attachments-images .nav-file:has([data-path$=".png"]) {
        display: contents !important;
    };
}

&.pln-attachments-canvas .nav-file:has([data-path$=".canvas"]), &.pln-attachments-pdf .nav-file:has([data-path$=".pdf"]), &.pln-attachments-docx .nav-file:has([data-path$=".docx"]), &.pln-attachments-xlsx .nav-file:has([data-path$=".xlsx"]), &.pln-attachments-images .nav-file:has([data-path$=".jpg"]), &.pln-attachments-images .nav-file:has([data-path$=".jpeg"]), &.pln-attachments-images .nav-file:has([data-path$=".png"]) {
display: contents !important;
}`,
    },
    "pln-attachments-canvas": {
      general: `&.pln-attachments-canvas .nav-file:has([data-path$=".canvas"]) {
display: contents !important;
}`,
    },
    "pln-attachments-pdf": {
      general: `&.pln-attachments-pdf .nav-file:has([data-path$=".pdf"]) {
display: contents !important;
}`,
    },
    "pln-attachments-docx": {
      general: `&.pln-attachments-docx .nav-file:has([data-path$=".docx"]) {
display: contents !important;
}`,
    },
    "pln-attachments-xlsx": {
      general: `&.pln-attachments-xlsx .nav-file:has([data-path$=".xlsx"]) {
display: contents !important;
}`,
    },
    "pln-attachments-images": {
      general: `&.pln-attachments-images .nav-file:has([data-path$=".jpg"]), &.pln-attachments-images .nav-file:has([data-path$=".jpeg"]), &.pln-attachments-images .nav-file:has([data-path$=".png"]) {
display: contents !important;
}`,
    },
    "pln-hdcl": {
      general: `.pln-hdcl {
--pln-hdcl-1: #BF616A;
--pln-hdcl-2: #D08770;
--pln-hdcl-3: #EBCB8B;
--pln-hdcl-4: #A3BE8C;
--pln-hdcl-5: #8FBCBB;
--pln-hdcl-6: #88C0D0;
--h1-color: var(--pln-hdcl-1);
--h2-color: var(--pln-hdcl-2);
--h3-color: var(--pln-hdcl-3);
--h4-color: var(--pln-hdcl-4);
--h5-color: var(--pln-hdcl-5);
--h6-color: var(--pln-hdcl-6);
}`,
    },
    "hide-properties": {
      general: `.hide-properties {
--metadata-display-reading: none;
}`,
    },
    "pln-props-heading": {
      general: `&.pln-props-heading .metadata-properties-heading {
display: none;
}`,
    },
    "pln-props-emptyval": {
      general: `&.pln-props-emptyval .metadata-input-longtext:empty:before, &.pln-props-emptyval .multi-select-input:before {
display: none;
}`,
    },
    "pln-props-list": {
      general: `&.pln-props-list .metadata-property:not([data-property-key="tags"]) .metadata-property-value .multi-select-container {
display: block;
}`,
    },
    "pln-embd-mods": {
      general: `.pln-embd-first .markdown-embed :is(h1,h2,h3,h4,h5,h6):first-child {
display: none;
}

.pln-embd-mods {
& {
        --embed-background: inherit;
        --embed-border-left: none;
        --embed-border-right: none;
        --embed-border-top: none;
        --embed-border-bottom: none;
        --embed-padding: 0 0 0 0;
        --embed-font-style: inherit;
    };
/* hide headers */
&.pln-embd-h1 .markdown-embed h1,
    &.pln-embd-h2 .markdown-embed h2,
    &.pln-embd-h3 .markdown-embed h3,
    &.pln-embd-h4 .markdown-embed h4,
    &.pln-embd-h5 .markdown-embed h5,
    &.pln-embd-h6 .markdown-embed h6 {
        display: none;
    };
/* a better way to hide the first header only */
&.pln-embd-first .markdown-embed .mod-header + div > :is(h1,h2,h3,h4,h5,h6) {
        display: none;
    };
/* hide titles in emebds */
&.pln-embd-title .embed-title {
        display: none;
    };
/* hide the link icon for embeds */
&.pln-embd-link .markdown-embed-link {
        display: none;
    };
/* hide the new 1.6 left border */
/* also moves them over from 0.85em */
& .markdown-embed {
        border-inline-start: none;
        --checkbox-margin-inline-start: 0.4em;
    };
/* this is to move embededlists over in 1.1 */
& .cm-embed-block .contains-task-list,
    & .inline-embed .contains-task-list { 
        padding: 0 0 0 0px;
    };
/* 1.6 fix to move lists back over in embeds
    2024-08-08 - this is seen breacking a basic embeded list in DFS migration which used:
        class="internal-embed markdown-embed inline-embed is-loaded"
    & .is-live-preview .markdown-embed {
        --list-indent: 0;
    }
    */
/* this includes an OR to make basic list items also move over */
& .is-live-preview .task-list-item .task-list-item, .task-list-basic-item {
        --list-indent: 2.25em;
    };
}`,
    },
    "pln-embd-link": {
      general: `&.pln-embd-link .markdown-embed-link {
display: none;
}`,
    },
    "pln-embd-title": {
      general: `&.pln-embd-title .embed-title {
display: none;
}`,
    },
    "pln-embd-first": {
      general: `.pln-embd-mods.pln-embd-first .markdown-embed :is(h1,h2,h3,h4,h5,h6):first-child {
display: none;
}

&.pln-embd-first .markdown-embed .mod-header + div > :is(h1,h2,h3,h4,h5,h6) {
display: none;
}`,
    },
    "pln-embd-h1": {
      general: `&.pln-embd-h1 .markdown-embed h1 {
display: none;
}`,
    },
    "pln-embd-h2": {
      general: `&.pln-embd-h2 .markdown-embed h2 {
display: none;
}`,
    },
    "pln-embd-h3": {
      general: `&.pln-embd-h3 .markdown-embed h3 {
display: none;
}`,
    },
    "pln-embd-h4": {
      general: `&.pln-embd-h4 .markdown-embed h4 {
display: none;
}`,
    },
    "pln-embd-h5": {
      general: `&.pln-embd-h5 .markdown-embed h5 {
display: none;
}`,
    },
    "pln-embd-h6": {
      general: `&.pln-embd-h6 .markdown-embed h6 {
display: none;
}`,
    },
    "pln-rm-mods": {
      general: `.pln-rm-mods {
/* hide attachments */
&.pln-attachments .nav-file:has(.nav-file-tag),
    /* folder navigation buttons */
    &.pln-rm-folder-nav .workspace-leaf-content[data-type="file-explorer"] .nav-buttons-container,
    /* settings pane */
    &:not(.is-mobile).pln-rm-settings .workspace-split.mod-left-split .workspace-sidedock-vault-profile,
    /* sidebars */
    &.pln-rm-rside .sidebar-toggle-button.mod-right,
    &.pln-rm-rside .sidebar-toggle-button,
    /* statusbar */
    &.pln-rm-status .status-bar,
    /* tab chevron */
    &.pln-rm-tablist .workspace-tab-header-tab-list .clickable-icon,
    /* new tab */
    &.pln-rm-nt .mod-root .workspace-tab-header-new-tab,
    /* tab close button */
    &.pln-rm-clstab .workspace-tab-header-inner-close-button,
    /* nav buttons */
    &.pln-rm-nav .view-header-nav-buttons,
    /* action bottons, top right of note */
    &.pln-rm-act .view-actions,
    /* suggestion pop up box */
    &.pln-rm-srchSug .suggestion-container.mod-search-suggestion,
    /* note icon for stacked tabs */
    &.pln-rm-noteic .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header-inner-icon,
    /* remove top left sidebar container in hidden*/
    &.mod-windows.pln-rm-win-lside-tl.is-hidden-frameless .mod-left-split .mod-top-left-space .workspace-tab-header-container {
        display: none;
    };
}`,
    },
    "pln-rm-folder-nav": {
      general: `&.pln-rm-folder-nav .workspace-leaf-content[data-type="file-explorer"] .nav-buttons-container {
display: none;
}`,
    },
    "pln-rm-settings": {
      general: `&:not(.is-mobile).pln-rm-settings .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
display: none;
}`,
    },
    "pln-rm-rside": {
      general: `&.pln-rm-rside .sidebar-toggle-button.mod-right, &.pln-rm-rside .sidebar-toggle-button {
display: none;
}`,
    },
    "pln-rm-win-lside-tl": {
      general: `&.mod-windows.is-hidden-frameless .mod-left-split .mod-top-left-space .workspace-tab-header-container {
display: none;
}`,
    },
    "pln-rm-status": {
      general: `&.pln-rm-status .status-bar {
display: none;
}`,
    },
    "pln-rm-tablist": {
      general: `&.pln-rm-tablist .workspace-tab-header-tab-list .clickable-icon {
display: none;
}`,
    },
    "pln-rm-nt": {
      general: `&.pln-rm-nt .mod-root .workspace-tab-header-new-tab {
display: none;
}`,
    },
    "pln-rm-clstab": {
      general: `&.pln-rm-clstab .workspace-tab-header-inner-close-button {
display: none;
}`,
    },
    "pln-rm-nav": {
      general: `&.pln-rm-nav .view-header-nav-buttons {
display: none;
}`,
    },
    "pln-rm-act": {
      general: `&.pln-rm-act .view-actions {
display: none;
}`,
    },
    "pln-rm-noteic": {
      general: `&.pln-rm-noteic .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header-inner-icon {
display: none;
}`,
    },
    "pln-rm-scroll": {
      general: `.pln-rm-scroll {
& ::-webkit-scrollbar {
        visibility: hidden;
        background-color: transparent;
        width: 10px;
    };
& ::-webkit-scrollbar-thumb {
        visibility: hidden;
    };
& ::-webkit-scrollbar:hover {
        visibility: initial;
    };
& ::-webkit-scrollbar-thumb:hover {
        visibility: initial;
    };
}`,
    },
    "pln-rm-mac-tside": {
      general: `& .mod-macos.is-hidden-frameless .mod-vertical .mod-stacked .workspace-tab-header-container {
display: none;
}`,
    },
    "pln-rm-srchSug": {
      general: `&.pln-rm-srchSug .suggestion-container.mod-search-suggestion {
display: none;
}`,
    },
    "pln-checkboxes": {
      general: `body.pln-checkboxes {
.markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="x"],
    .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="X"],
    ul > li.task-list-item[data-task="x"],
    ul > li.task-list-item[data-task="X"] {
        text-decoration: none;
    };
/* > */
input[type=checkbox][data-task=">"],
    input[type=checkbox][data-task=">"]:hover,
    ul > li.task-list-item[data-task=">"] > .task-list-item-checkbox {
        background-color: var(--color-orange);
        border-color: var(--color-orange);
    };
input[type=checkbox][data-task=">"]:checked:after,
    ul > li.task-list-item[data-task=">"] > .task-list-item-checkbox:checked:after {
        -webkit-mask-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iLTUgMCAyNSAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+cmlnaHQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJ1aS1nYW1ibGluZy13ZWJzaXRlLWxpbmVkLWljbm9zLWNhc2lub3NodW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzgzLjAwMDAwMCwgLTE1OC4wMDAwMDApIiBmaWxsPSIjMUMxQzFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzNi40NTM1MTcsMzguNTY5MjQ5IEw0NDcuMzAyNDU5LDQ4Ljk5MzgxNTggTDQ0Ny4zOTI2MSw0OS4wNzQ4ODAyIEM0NDcuNzU1MzQsNDkuNDIzNDU0IDQ0Ny45NjgxNTksNDkuODg3MDQ2MSA0NDgsNTAuNDM4MjIyNyBMNDQ3Ljk5ODEzNSw1MC42MjI4MjI5IEM0NDcuOTY4MTU5LDUxLjExMjk1MzkgNDQ3Ljc1NTM0LDUxLjU3NjU0NiA0NDcuMzMzNjc1LDUxLjk3NzQ0NjkgTDQ0Ny4zMzkwOTUsNTEuOTY4OTgzMiBMNDM2LjQ1MzUxNyw2Mi40MzA3NTEgQzQzNS42NjM2OTQsNjMuMTg5NzQ5NyA0MzQuMzk5MDAxLDYzLjE4OTc0OTcgNDMzLjYwOTE3OCw2Mi40MzA3NTEgQzQzMi43OTY5NDEsNjEuNjUwMjEzIDQzMi43OTY5NDEsNjAuMzY3NTkyNCA0MzMuNjA5NDMyLDU5LjU4NjgxMDYgTDQ0My4wMTIzMjQsNTAuNTU3MjQ3MSBMNDMzLjYwOTE3OCw0MS40MTI5NDU2IEM0MzIuNzk2OTQxLDQwLjYzMjQwNzYgNDMyLjc5Njk0MSwzOS4zNDk3ODcgNDMzLjYwOTE3OCwzOC41NjkyNDkgQzQzNC4zOTkwMDEsMzcuODEwMjUwMyA0MzUuNjYzNjk0LDM3LjgxMDI1MDMgNDM2LjQ1MzUxNywzOC41NjkyNDkgWiIgaWQ9InJpZ2h0Ij48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
    };
/* ? */
input[type=checkbox][data-task="?"],
    input[type=checkbox][data-task="?"]:hover,
    ul > li.task-list-item[data-task="?"] > .task-list-item-checkbox {
        background-color: var(--color-yellow);
        border-color: var(--color-yellow);
    };
input[type=checkbox][data-task="?"]:checked:after,
    ul > li.task-list-item[data-task="?"] > .task-list-item-checkbox:checked:after {
            -webkit-mask-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3My4xcHgiIGhlaWdodD0iOTczLjFweCIgdmlld0JveD0iMCAwIDk3My4xIDk3My4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NzMuMSA5NzMuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTUwMi4yOSw3ODguMTk5aC00N2MtMzMuMSwwLTYwLDI2LjktNjAsNjB2NjQuOWMwLDMzLjEsMjYuOSw2MCw2MCw2MGg0N2MzMy4xMDEsMCw2MC0yNi45LDYwLTYwdi02NC45DQoJCUM1NjIuMjksODE1LDUzNS4zOTEsNzg4LjE5OSw1MDIuMjksNzg4LjE5OXoiLz4NCgk8cGF0aCBkPSJNMTcwLjg5LDI4NS44bDg2LjcsMTAuOGMyNy41LDMuNCw1My42LTEyLjQsNjMuNS0zOC4zYzEyLjUtMzIuNywyOS45LTU4LjUsNTIuMi03Ny4zYzMxLjYwMS0yNi42LDcwLjktNDAsMTE3LjktNDANCgkJYzQ4LjcsMCw4Ny41LDEyLjgsMTE2LjMsMzguM2MyOC44LDI1LjYsNDMuMSw1Ni4yLDQzLjEsOTIuMWMwLDI1LjgtOC4xLDQ5LjQtMjQuMyw3MC44Yy0xMC41LDEzLjYtNDIuOCw0Mi4yLTk2LjcsODUuOQ0KCQljLTU0LDQzLjctODkuODk5LDgzLjA5OS0xMDcuODk5LDExOC4wOTljLTE4LjQsMzUuODAxLTI0LjgsNzUuNS0yNi40LDExNS4zMDFjLTEuMzk5LDM0LjEsMjUuOCw2Mi41LDYwLDYyLjVoNDkNCgkJYzMxLjIsMCw1Ny0yMy45LDU5LjgtNTQuOWMyLTIyLjI5OSw1LjctMzkuMTk5LDExLjMwMS01MC42OTljOS4zOTktMTkuNzAxLDMzLjY5OS00NS43MDEsNzIuNjk5LTc4LjENCgkJQzcyMy41OSw0NzcuOCw3NzIuNzksNDI4LjQsNzk1Ljg5MSwzOTJjMjMtMzYuMywzNC42LTc0LjgsMzQuNi0xMTUuNWMwLTczLjUtMzEuMy0xMzgtOTQtMTkzLjRjLTYyLjYtNTUuNC0xNDctODMuMS0yNTMtODMuMQ0KCQljLTEwMC44LDAtMTgyLjEsMjcuMy0yNDQuMSw4MmMtNTIuOCw0Ni42LTg0LjksMTAxLjgtOTYuMiwxNjUuNUMxMzkuNjksMjY2LjEsMTUyLjM5LDI4My41LDE3MC44OSwyODUuOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
    };
/* - */
input[type=checkbox][data-task="-"],
    input[type=checkbox][data-task="-"]:hover,
    ul > li.task-list-item[data-task="-"] > .task-list-item-checkbox {
        background-color: var(--color-purple);
        border-color: var(--color-purple);
    };
input[type=checkbox][data-task="-"]:checked:after,
    ul > li.task-list-item[data-task="-"] > .task-list-item-checkbox:checked:after {
        -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==");
    };
/* mark out the canceled item */
.markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="-"],
    ul > li.task-list-item[data-task="-"] {
        text-decoration: var(--checklist-done-decoration);
    };
/* ! */
input[type=checkbox][data-task="!"],
    input[type=checkbox][data-task="!"]:hover,
    ul > li.task-list-item[data-task="!"] > .task-list-item-checkbox {
        background-color: var(--color-red);
        border-color: var(--color-red);
    };
input[type=checkbox][data-task="!"]:checked:after,
    ul > li.task-list-item[data-task="!"] > .task-list-item-checkbox:checked:after {
        -webkit-mask-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1meGVtb2ppIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBmaWxsPSIjMkIzQjQ3IiBkPSJNMzA1LjQ4NiA0MDUuMjExYzAgMjcuMTkxLTIxLjc1MiA0OS40ODYtNDkuNDg2IDQ5LjQ4NmMtMjcuNzM0IDAtNDkuNDg2LTIyLjI5NS00OS40ODYtNDkuNDg2YzAtMjcuMTkgMjEuNzUyLTQ5LjQ4NSA0OS40ODYtNDkuNDg1YzI3LjczNCAwIDQ5LjQ4NiAyMi4yOTYgNDkuNDg2IDQ5LjQ4NXptLTI2LjgwOC05OC45NzFoLTQ1Ljg3M2MtNi44IDAtMTIuMzk4LTUuMzQ3LTEyLjcwOC0xMi4xNGwtOS43MTEtMjEyLjE5N2MtLjMzMi03LjI0NyA1LjQ1NC0xMy4zMDMgMTIuNzA4LTEzLjMwM2g2NS43ODFjNy4yNjYgMCAxMy4wNTYgNi4wNzUgMTIuNzA3IDEzLjMzMmwtMTAuMTk3IDIxMi4xOTdjLS4zMjUgNi43ODEtNS45MTggMTIuMTExLTEyLjcwNyAxMi4xMTF6Ij48L3BhdGg+PC9zdmc+");
    };
/* i */
input[type=checkbox][data-task="i"],
    input[type=checkbox][data-task="i"]:hover,
    ul > li.task-list-item[data-task="i"] > .task-list-item-checkbox {
        background-color: var(--color-green);
        border-color: var(--color-green);
    };
input[type=checkbox][data-task="i"]:checked:after,
    ul > li.task-list-item[data-task="i"] > .task-list-item-checkbox:checked:after {
        -webkit-mask-image:url("data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e %3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 488.9 488.9' style='enable-background:new 0 0 488.9 488.9%3b' xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath d='M239.15%2c0c31.9%2c0%2c57.7%2c25.8%2c57.7%2c57.7s-25.8%2c57.7-57.7%2c57.7s-57.7-25.8-57.7-57.7S207.25%2c0%2c239.15%2c0z M291.65%2c151.6h-1.5 h-92.8h-3.4c-19%2c0-34.3%2c15.4-34.3%2c34.3l0%2c0c0%2c19%2c15.4%2c34.3%2c34.3%2c34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
    };
/* / */
input[type=checkbox][data-task="/"],
    input[type=checkbox][data-task="/"]:hover,
    ul > li.task-list-item[data-task="/"] > .task-list-item-checkbox {
        background-color: var(--color-sea-green);
        border-color: var(--color-sea-green);
    };
input[type=checkbox][data-task="/"]:checked:after,
    ul > li.task-list-item[data-task="/"] > .task-list-item-checkbox:checked:after {
        -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor;'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E");
    };
}`,
    },
    "pln-rm-co-meta": {
      general: `.pln-rm-co-meta .markdown-reading-view .callout[data-callout="meta"] {
display: none;
}`,
    },
    "pln-pdf-rm-co-meta": {
      general: `.pln-pdf-rm-co-meta .callout[data-callout="meta"] {
display: none;
}`,
    },
    "pln-rm-co-links": {
      general: `.pln-rm-co-links .markdown-reading-view .callout[data-callout="links"] {
display: none;
}`,
    },
    "pln-pdf-rm-co-links": {
      general: `.pln-pdf-rm-co-links .callout[data-callout="links"] {
display: none;
}`,
    },
    "pln-cards-sort": {
      general: `.cards.pln-cards-sort table.dataview thead, .pln-cards-sort .cards table.dataview thead {
display: none !important;
}`,
    },
    "pln-cards-borders": {
      general: `.cards.pln-cards-borders table.dataview > tbody > tr, .pln-cards-borders .cards table.dataview > tbody > tr {
background-color: rgba(var(--pln-cards-color-rgb), 0.4) !important;
border-top: 4px solid rgb(var(--pln-cards-color-rgb)) !important;
border-left: 2px solid rgb(var(--pln-cards-color-rgb)) !important;
border-right: none !important;
border-bottom: none !important;
}`,
      dark: `.cards.theme-dark, .theme-dark {
--pln-cards-color-rgb: var(--w0-rgb) !important;
}

.cards.theme-dark, .theme-dark {
--pln-cards-color-rgb: var(--b3-rgb);
}`,
      light: `.cards.theme-light, .theme-light {
--pln-cards-color-rgb: var(--w0-rgb);
}`,
    },
    cards: {
      general: `.pln-cards-sort table.dataview thead, .pln-cards-sort .cards table.dataview thead {
display: none !important;
}

.pln-cards-borders table.dataview > tbody > tr, .pln-cards-borders .cards table.dataview > tbody > tr {
background-color: rgba(var(--pln-cards-color-rgb), 0.4) !important;
border-top: 4px solid rgb(var(--pln-cards-color-rgb)) !important;
border-left: 2px solid rgb(var(--pln-cards-color-rgb)) !important;
border-right: none !important;
border-bottom: none !important;
}

.cards table.dataview {
font-size: unset;
}

.cards {
--list-indent: 0;
}

.table-100 table.dataview tbody, .table-100 .cards table.dataview tbody {
padding: 0.25rem 0.75rem;
}

.cards table.dataview {
--table-width: 100%;
--table-edge-cell-padding-first: calc(var(--cards-padding)/2);
--table-edge-cell-padding-last: calc(var(--cards-padding)/2);
--table-cell-padding: calc(var(--cards-padding)/3) calc(var(--cards-padding)/2);
line-height: 1.3;
}

.cards table.dataview tbody {
clear: both;
padding: 0.5rem 0;
display: grid;
grid-template-columns: var(--cards-columns);
grid-column-gap: 0.75rem;
grid-row-gap: 0.75rem;
}

.cards table.dataview > tbody > tr {
background-color: var(--cards-background);
border: var(--cards-border-width) solid var(--background-modifier-border);
display: flex;
flex-direction: column;
margin: 0;
padding: 0 0 calc(var(--cards-padding)/3) 0;
border-radius: 6px;
overflow: hidden;
transition: box-shadow 0.15s linear;
max-width: var(--cards-max-width);
height: auto;
}

.cards table.dataview > tbody > tr:hover {
border: var(--cards-border-width) solid var(--background-modifier-border-hover);
box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.05), 0 1px 3px 1px rgba(0, 0, 0, 0.025);
transition: box-shadow 0.15s linear;
}

.cards table.dataview tbody > tr > td {
/* Paragraphs */
/* Links */
/* Buttons */
/* Lists */
/* Images */
}

.cards table.dataview tbody > tr > td:first-child {
font-weight: var(--bold-weight);
border: none;
}

.cards table.dataview tbody > tr > td:first-child a {
display: block;
}

.cards table.dataview tbody > tr > td:last-child {
border: none;
}

.cards table.dataview tbody > tr > td:not(:first-child) {
font-size: calc(var(--table-text-size) * .9);
color: var(--text-muted);
}

.cards table.dataview tbody > tr > td > * {
padding: calc(var(--cards-padding)/3) 0;
}

.cards table.dataview tbody > tr > td:not(:last-child):not(:first-child) {
padding: 4px 0;
border-bottom: 1px solid var(--background-modifier-border);
width: calc(100% - var(--cards-padding));
margin: 0 calc(var(--cards-padding)/2);
}

.cards table.dataview tbody > tr > td a {
text-decoration: none;
}

.cards table.dataview tbody > tr > td > button {
width: 100%;
margin: calc(var(--cards-padding)/2) 0;
}

.cards table.dataview tbody > tr > td:last-child > button {
margin-bottom: calc(var(--cards-padding)/6);
}

.cards table.dataview tbody > tr > td > ul {
width: 100%;
padding: 0.25em 0 !important;
margin: 0 auto !important;
}

.cards table.dataview tbody > tr > td:has(img) {
padding: 0 !important;
background-color: var(--background-secondary);
display: block;
margin: 0;
width: 100%;
}

.cards table.dataview tbody > tr > td img {
aspect-ratio: var(--cards-aspect-ratio);
width: 100%;
object-fit: var(--cards-image-fit);
max-height: var(--cards-image-height);
background-color: var(--background-secondary);
vertical-align: bottom;
}

.markdown-source-view.mod-cm6.cards .dataview.table-view-table > tbody > tr > td, .trim-cols .cards table.dataview tbody > tr > td {
white-space: normal;
}

.links-int-on .cards table {
--link-decoration: none;
}

.markdown-source-view.mod-cm6.cards .edit-block-button {
top: 0px;
}

.table-100 table.dataview thead > tr, .table-100 .cards table.dataview thead > tr {
right: 0.75rem;
}

.table-100 .cards table.dataview thead:before, .table-100 table.dataview thead:before {
margin-right: 0.75rem;
}

.cards table.dataview thead {
user-select: none;
width: 180px;
display: block;
float: right;
position: relative;
text-align: right;
height: 24px;
padding-bottom: 0px;
}

.cards table.dataview thead:hover:before {
opacity: 0.5;
background-color: var(--background-modifier-hover);
}

.cards table.dataview thead:before {
content: '';
position: absolute;
right: 0;
top: 0;
width: 10px;
height: 16px;
background-repeat: no-repeat;
cursor: var(--cursor);
text-align: right;
padding: var(--size-4-1) var(--size-4-2);
margin-bottom: 2px;
border-radius: var(--radius-s);
font-weight: 500;
font-size: var(--font-adaptive-small);
opacity: 0.25;
background-position: center center;
background-size: 16px;
background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="white" d="M49.792 33.125l-5.892 5.892L33.333 28.45V83.333H25V28.45L14.438 39.017L8.542 33.125L29.167 12.5l20.625 20.625zm41.667 33.75L70.833 87.5l-20.625 -20.625l5.892 -5.892l10.571 10.567L66.667 16.667h8.333v54.883l10.567 -10.567l5.892 5.892z"></path></svg>');
}

.cards table.dataview thead > tr {
top: -1px;
position: absolute;
display: none;
z-index: 9;
border: 1px solid var(--background-modifier-border-hover);
background-color: var(--background-secondary);
box-shadow: var(--shadow-s);
padding: 6px;
border-radius: var(--radius-m);
flex-direction: column;
margin: 24px 0 0 0;
width: 100%;
}

.cards table.dataview thead:hover > tr {
display: flex;
}

.cards table.dataview thead > tr > th {
display: block;
padding: 3px 30px 3px 6px !important;
border-radius: var(--radius-s);
width: 100%;
font-weight: 400;
color: var(--text-normal);
cursor: var(--cursor);
border: none;
font-size: var(--font-ui-small);
}

.cards table.dataview thead > tr > th[sortable-style="sortable-asc"], .cards table.dataview thead > tr > th[sortable-style="sortable-desc"] {
color: var(--text-normal);
}

.cards table.dataview thead > tr > th:hover {
color: var(--text-normal);
background-color: var(--background-modifier-hover);
}

.cards-16-9, .list-cards.cards-16-9 {
--cards-aspect-ratio: 16/9;
}

.cards-1-1, .list-cards.cards-1-1 {
--cards-aspect-ratio: 1/1;
}

.cards-2-1, .list-cards.cards-2-1 {
--cards-aspect-ratio: 2/1;
}

.cards-2-3, .list-cards.cards-2-3 {
--cards-aspect-ratio: 2/3;
}

.cards-cols-1, .list-cards.cards-cols-1 {
--cards-columns: repeat(1, minmax(0, 1fr));
}

.cards-cols-2, .list-cards.cards-cols-2 {
--cards-columns: repeat(2, minmax(0, 1fr));
}

.cards-cover, .list-cards.cards-cover {
--cards-image-fit: cover;
}

.cards-align-bottom table.dataview tbody > tr > td:last-child, .list-cards.cards-align-bottom table.dataview tbody > tr > td:last-child {
margin-top: auto;
}

.cards table.dataview tbody > tr > td:not(:first-child) {
font-size: 80%;
}

.cards-cols-3 {
--cards-columns: repeat(3, minmax(0, 1fr));
}

.cards-cols-4 {
--cards-columns: repeat(4, minmax(0, 1fr));
}

.cards-cols-5 {
--cards-columns: repeat(5, minmax(0, 1fr));
}

.cards-cols-6 {
--cards-columns: repeat(6, minmax(0, 1fr));
}

.cards-cols-7 {
--cards-columns: repeat(7, minmax(0, 1fr));
}

.cards-cols-8 {
--cards-columns: repeat(8, minmax(0, 1fr));
}`,
      dark: `.pln-cards-borders.theme-dark {
--pln-cards-color-rgb: var(--w0-rgb) !important;
}

.pln-cards-borders.theme-dark {
--pln-cards-color-rgb: var(--b3-rgb);
}`,
      light: `.pln-cards-borders.theme-light {
--pln-cards-color-rgb: var(--w0-rgb);
}

.theme-light .cards table.dataview thead:before {
background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="black" d="M49.792 33.125l-5.892 5.892L33.333 28.45V83.333H25V28.45L14.438 39.017L8.542 33.125L29.167 12.5l20.625 20.625zm41.667 33.75L70.833 87.5l-20.625 -20.625l5.892 -5.892l10.571 10.567L66.667 16.667h8.333v54.883l10.567 -10.567l5.892 5.892z"></path></svg>');
}`,
    },
    "pln-vision": {
      general: `.pln-vision {
--pln-vision-high: #cccc00;
--pln-vision-low: #4C4E52;
--text-normal: var(--pln-vision-high);
--text-faint: var(--pln-vision-high);
--text-muted: var(--pln-vision-high);
--background-primary: black;
--background-primary-alt: var(--pln-vision-low);
--background-secondary: black;
--background-secondary-alt: black;
--background-modifier-border: var(--pln-vision-high);
--text-on-accent: black;
--color-base-30: var(--pln-vision-low);
--color-base-35: var(--pln-vision-high);
--color-red: var(--pln-vision-high);
--color-orange: var(--pln-vision-high);
--color-yellow-light: var(--pln-vision-high);
--color-yellow-dark: var(--pln-vision-high);
--color-green: var(--pln-vision-high);
--color-purple: var(--pln-vision-high);
--color-sea-green: var(--pln-vision-high);
--color-cyan: var(--pln-vision-high);
--color-frost: var(--pln-vision-high);
--color-blue: var(--pln-vision-high);
--color-salmon: var(--pln-vision-high);
}`,
    },
  },
};
