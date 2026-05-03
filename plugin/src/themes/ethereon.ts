import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ethereon",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 174;
  --accent-l: 48%;
  --accent-s: 20%;
  --background-modifier-border: var(--color-base-20, #444648);
  --background-modifier-border-focus: var(--color-base-40, #6c6c6e);
  --background-modifier-border-hover: var(--color-base-35, #626365);
  --background-modifier-error: var(--color-red, #B65E67);
  --background-modifier-error-hover: var(--color-red, #B65E67);
  --background-modifier-form-field: var(--color-base-25, #4e4f51);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #4e4f51);
  --background-modifier-hover: rgba(var(--mono-rgb-0), 0.5);
  --background-modifier-success: var(--color-green, #88BC7D);
  --background-modifier-success-rgb: var(--color-green-rgb, 136, 188, 125);
  --background-primary: var(--color-base-00, #1d1f21);
  --background-primary-alt: var(--color-base-05, #27292b);
  --background-secondary: var(--color-base-10, #313234);
  --background-secondary-alt: var(--color-base-20, #444648);
  --bases-cards-background: var(--background-primary, #1d1f21);
  --bases-cards-cover-background: var(--background-primary-alt, #27292b);
  --bases-embed-border-color: var(--background-modifier-border, #444648);
  --bases-group-heading-property-color: var(--text-muted, #a7a6a8);
  --bases-table-border-color: var(--table-border-color, #444648);
  --bases-table-cell-background-active: var(--background-primary, #1d1f21);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #27292b);
  --bases-table-cell-background-selected: var(--table-selection, hsla(174, 20%, 48%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #27292b);
  --bases-table-header-background: var(--background-primary, #1d1f21);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(29, 31, 33, 0.5));
  --bases-table-header-color: var(--text-muted, #a7a6a8);
  --bases-table-summary-background: var(--background-primary, #1d1f21);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(29, 31, 33, 0.5));
  --blockquote-border-color: var(--interactive-accent, hsl(174, 20%, 48%));
  --blockquote-border-thickness: 4px;
  --callout-example: var(--color-purple-rgb, 156, 151, 183);
  --callout-important: var(--color-cyan-rgb, 94, 141, 135);
  --callout-success: var(--color-green-rgb, 136, 188, 125);
  --callout-summary: var(--color-cyan-rgb, 94, 141, 135);
  --callout-tip: var(--color-cyan-rgb, 94, 141, 135);
  --canvas-background: var(--background-primary, #1d1f21);
  --canvas-card-label-color: var(--text-faint, #808082);
  --canvas-color-3: var(--color-yellow-rgb, 188, 156, 98);
  --canvas-color-4: var(--color-green-rgb, 136, 188, 125);
  --canvas-color-5: var(--color-cyan-rgb, 94, 141, 135);
  --canvas-color-6: var(--color-purple-rgb, 156, 151, 183);
  --canvas-dot-pattern: var(--color-base-30, #58595b);
  --caret-color: var(--text-normal, #e2e0d2);
  --checkbox-border-color: var(--text-faint, #808082);
  --checkbox-border-color-hover: var(--checkbox-color, hsl(174, 20%, 48%));
  --checkbox-border-color-unchecked: var(--color-base-50, #808082);
  --checkbox-color: var(--interactive-accent, hsl(174, 20%, 48%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(171, 20.4%, 55.2%));
  --checkbox-marker-color: var(--background-primary, #1d1f21);
  --checkbox-radius: var(--radius-s, 10px);
  --checklist-done-color: var(--text-muted, #a7a6a8);
  --code-background: var(--background-primary-alt, #27292b);
  --code-border-color: var(--background-modifier-border, #444648);
  --code-bracket-background: var(--background-modifier-hover, rgba(29, 31, 33, 0.5));
  --code-comment: var(--text-faint, #808082);
  --code-function: var(--color-yellow, #BCAB62);
  --code-important: var(--color-orange, #BC8762);
  --code-keyword: var(--color-pink, #AE7499);
  --code-normal: var(--text-normal, #e2e0d2);
  --code-operator: var(--color-red, #B65E67);
  --code-property: var(--color-cyan, #5E8D87);
  --code-punctuation: var(--text-muted, #a7a6a8);
  --code-size: var(--font-smaller, --font-normal);
  --code-string: var(--color-green, #88BC7D);
  --code-tag: var(--color-red, #B65E67);
  --code-value: var(--color-purple, #9C97B7);
  --collapse-icon-color: var(--text-faint, #808082);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --color-base-00: #1d1f21;
  --color-base-05: #27292b;
  --color-base-10: #313234;
  --color-base-100: #e2e0d2;
  --color-base-20: #444648;
  --color-base-25: #4e4f51;
  --color-base-30: #58595b;
  --color-base-35: #626365;
  --color-base-40: #6c6c6e;
  --color-base-50: #808082;
  --color-base-60: #939395;
  --color-base-70: #a7a6a8;
  --color-blue: #C4CAD6;
  --color-blue_rgb: 196, 202, 214;
  --color-cyan: var(--color-teal, #5E8D87);
  --color-cyan-rgb: var(--color-teal-rgb, 94, 141, 135);
  --color-green: #88BC7D;
  --color-green-rgb: 136, 188, 125;
  --color-orange: #BC8762;
  --color-orange_rgb: 188, 135, 98;
  --color-pink: #AE7499;
  --color-pink-rgb: 174, 116, 153;
  --color-purple: #9C97B7;
  --color-purple-rgb: 156, 151, 183;
  --color-red: #B65E67;
  --color-red_rgb: 182, 94, 103;
  --color-teal: #5E8D87;
  --color-teal-rgb: 94, 141, 135;
  --color-yellow: #BCAB62;
  --color-yellow-rgb: 188, 156, 98;
  --dark: var(--text-normal, var(--color-base-100, #e2e0d2));
  --darkgray: var(--text-normal, var(--color-base-100, #e2e0d2));
  --divider-color: var(--background-modifier-border, #444648);
  --divider-color-hover: var(--interactive-accent, hsl(174, 20%, 48%));
  --dropdown-background: var(--interactive-normal, #58595b);
  --dropdown-background-hover: var(--interactive-hover, #626365);
  --file-header-background: var(--background-primary, #1d1f21);
  --file-header-background-focused: var(--background-primary, #1d1f21);
  --flair-background: var(--interactive-normal, #58595b);
  --flair-color: var(--text-normal, #e2e0d2);
  --font-mermaid: var(--font-text, "Inter", sans-serif);
  --footnote-divider-color: var(--metadata-divider-color, #444648);
  --footnote-id-color: var(--text-muted, #a7a6a8);
  --footnote-id-color-no-occurrences: var(--text-faint, #808082);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(29, 31, 33, 0.5));
  --graph-node: var(--text-muted, #a7a6a8);
  --graph-node-attachment: var(--color-yellow, #BCAB62);
  --graph-node-focused: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --graph-node-tag: var(--color-green, #88BC7D);
  --graph-node-unresolved: var(--text-faint, #808082);
  --graph-text: var(--text-normal, #e2e0d2);
  --gray: var(--text-muted, var(--color-base-70, #a7a6a8));
  --h1-color: var(--color-red, #B65E67);
  --h1-weight: 300;
  --h2-color: var(--color-orange, #BC8762);
  --h2-weight: 300;
  --h3-color: var(--color-yellow, #BCAB62);
  --h3-weight: 300;
  --h4-color: var(--color-green, #88BC7D);
  --h4-weight: 300;
  --h5-color: var(--color-blue, #C4CAD6);
  --h5-weight: 300;
  --h6-color: var(--color-purple, #9C97B7);
  --h6-weight: 300;
  --heading-formatting: var(--text-faint, #808082);
  --heading-spacing: calc(var(--p-spacing)*1.5);
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-0), 0.5));
  --hr-color: var(--background-modifier-border, #444648);
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, #a7a6a8);
  --icon-color-active: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --icon-color-focused: var(--text-normal, #e2e0d2);
  --icon-color-hover: var(--text-muted, #a7a6a8);
  --indentation-guide-width: var(--border-width, 2px);
  --inline-title-color: var(--color-base-50, #808082);
  --inline-title-size: var(--h3-size, 1.318em);
  --inline-title-style: var(--h1-style, italic);
  --inline-title-weight: var(--h1-weight, 50);
  --input-date-separator: var(--text-faint, #808082);
  --input-placeholder-color: var(--text-faint, #808082);
  --interactive-accent: var(--color-accent, hsl(174, 20%, 48%));
  --interactive-accent-hover: var(--color-accent-1, hsl(171, 20.4%, 55.2%));
  --interactive-accent-hsl: var(--color-accent-hsl, 174, 20%, 48%);
  --interactive-hover: var(--color-base-35, #626365);
  --interactive-normal: var(--color-base-30, #58595b);
  --light: var(--background-primary, var(--color-base-00, #1d1f21));
  --lightgray: var(--background-secondary, var(--color-base-10, #313234));
  --link-color: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --link-color-hover: var(--text-accent-hover, hsl(169, 21%, 61.92%));
  --link-external-color: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --link-external-color-hover: var(--text-accent-hover, hsl(169, 21%, 61.92%));
  --link-unresolved-color: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --list-bullet-radius: 40%;
  --list-bullet-size: 0.4em;
  --list-marker-color: var(--text-faint, #808082);
  --list-marker-color-collapsed: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --list-marker-color-hover: var(--text-muted, #a7a6a8);
  --menu-background: var(--background-secondary, #313234);
  --menu-border-color: var(--background-modifier-border-hover, #626365);
  --metadata-border-color: var(--background-modifier-border, #444648);
  --metadata-divider-color: var(--background-modifier-border, #444648);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(29, 31, 33, 0.5));
  --metadata-input-text-color: var(--text-normal, #e2e0d2);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(29, 31, 33, 0.5));
  --metadata-label-text-color: var(--text-muted, #a7a6a8);
  --metadata-label-text-color-hover: var(--text-muted, #a7a6a8);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(29, 31, 33, 0.5));
  --modal-background: var(--background-primary, #1d1f21);
  --modal-border-color: var(--color-base-30, var(--background-modifier-border-focus));
  --mono-rgb-0: 29, 31, 33;
  --mono-rgb-100: 226, 224, 226;
  --nav-collapse-icon-color: var(--collapse-icon-color, #808082);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #808082);
  --nav-heading-color: var(--text-normal, #e2e0d2);
  --nav-heading-color-collapsed: var(--text-faint, #808082);
  --nav-heading-color-collapsed-hover: var(--text-muted, #a7a6a8);
  --nav-heading-color-hover: var(--text-normal, #e2e0d2);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(226, 224, 226, 0.12));
  --nav-indentation-guide-width: var(--indentation-guide-width, 2px);
  --nav-item-background-active: var(--background-modifier-hover, rgba(29, 31, 33, 0.5));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(29, 31, 33, 0.5));
  --nav-item-color: var(--text-muted, #a7a6a8);
  --nav-item-color-active: var(--text-normal, #e2e0d2);
  --nav-item-color-highlighted: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --nav-item-color-hover: var(--text-normal, #e2e0d2);
  --nav-item-color-selected: var(--text-normal, #e2e0d2);
  --nav-tag-color: var(--text-faint, #808082);
  --nav-tag-color-active: var(--text-muted, #a7a6a8);
  --nav-tag-color-hover: var(--text-muted, #a7a6a8);
  --pdf-background: var(--background-primary, #1d1f21);
  --pdf-page-background: var(--background-primary, #1d1f21);
  --pdf-sidebar-background: var(--background-primary, #1d1f21);
  --pill-border-color: var(--background-modifier-border, #444648);
  --pill-border-color-hover: var(--background-modifier-border-hover, #626365);
  --pill-color: var(--text-muted, #a7a6a8);
  --pill-color-hover: var(--text-normal, #e2e0d2);
  --pill-color-remove: var(--text-faint, #808082);
  --pill-color-remove-hover: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --prompt-background: var(--background-primary, #1d1f21);
  --raised-background: var(--blur-background, color-mix(in srgb, #58595b 65%, transparent) linear-gradient(#58595b, color-mix(in srgb, #58595b 65%, transparent)));
  --ribbon-background: var(--background-secondary, #313234);
  --ribbon-background-collapsed: var(--background-primary, #1d1f21);
  --search-clear-button-color: var(--text-muted, #a7a6a8);
  --search-icon-color: var(--text-muted, #a7a6a8);
  --search-result-background: var(--background-primary, #1d1f21);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(171, 20.4%, 55.2%)));
  --setting-group-heading-color: var(--text-normal, #e2e0d2);
  --setting-items-background: var(--background-primary-alt, #27292b);
  --setting-items-border-color: var(--background-modifier-border, #444648);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #a7a6a8);
  --shiki-code-background: var(--code-background, #27292b);
  --shiki-code-comment: var(--text-faint, #808082);
  --shiki-code-function: var(--color-green, #88BC7D);
  --shiki-code-important: var(--color-orange, #BC8762);
  --shiki-code-keyword: var(--color-pink, #AE7499);
  --shiki-code-normal: var(--text-muted, #a7a6a8);
  --shiki-code-property: var(--color-cyan, #5E8D87);
  --shiki-code-punctuation: var(--text-muted, #a7a6a8);
  --shiki-code-string: var(--color-yellow, #BCAB62);
  --shiki-code-value: var(--color-purple, #9C97B7);
  --shiki-gutter-border-color: var(--background-modifier-border, #444648);
  --shiki-gutter-text-color: var(--text-faint, #808082);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #a7a6a8);
  --shiki-highlight-neutral: var(--shiki-code-normal, #a7a6a8);
  --shiki-terminal-dots-color: var(--text-faint, #808082);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #626365);
  --slider-track-background: var(--background-modifier-border, #444648);
  --status-bar-background: var(--background-secondary, #313234);
  --status-bar-border-color: var(--divider-color, #444648);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0);
  --status-bar-text-color: var(--text-muted, #a7a6a8);
  --suggestion-background: var(--background-primary, #1d1f21);
  --sync-avatar-color-1: var(--color-red, #B65E67);
  --sync-avatar-color-2: var(--color-orange, #BC8762);
  --sync-avatar-color-3: var(--color-yellow, #BCAB62);
  --sync-avatar-color-4: var(--color-green, #88BC7D);
  --sync-avatar-color-5: var(--color-cyan, #5E8D87);
  --sync-avatar-color-6: var(--color-blue, #C4CAD6);
  --sync-avatar-color-7: var(--color-purple, #9C97B7);
  --sync-avatar-color-8: var(--color-pink, #AE7499);
  --tab-background-active: var(--background-primary, #1d1f21);
  --tab-container-background: var(--background-secondary, #313234);
  --tab-divider-color: var(--background-modifier-border-hover, #626365);
  --tab-outline-color: var(--divider-color, #444648);
  --tab-switcher-background: var(--background-secondary, #313234);
  --tab-text-color: var(--text-faint, #808082);
  --tab-text-color-active: var(--text-muted, #a7a6a8);
  --tab-text-color-focused: var(--text-muted, #a7a6a8);
  --tab-text-color-focused-active: var(--text-muted, #a7a6a8);
  --tab-text-color-focused-active-current: var(--text-normal, #e2e0d2);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --table-add-button-border-color: var(--background-modifier-border, #444648);
  --table-border-color: var(--background-modifier-border, #444648);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(174, 20%, 48%));
  --table-drag-handle-color: var(--text-faint, #808082);
  --table-header-border-color: var(--table-border-color, #444648);
  --table-header-color: var(--text-normal, #e2e0d2);
  --table-selection-border-color: var(--interactive-accent, hsl(174, 20%, 48%));
  --tag-color: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --tag-color-hover: var(--text-accent, hsl(171, 20.4%, 55.2%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(169, 21%, 61.92%)));
  --text-accent: var(--color-accent-1, hsl(171, 20.4%, 55.2%));
  --text-accent-hover: var(--color-accent-2, hsl(169, 21%, 61.92%));
  --text-error: var(--color-red, #B65E67);
  --text-faint: var(--color-base-50, #808082);
  --text-highlight-bg-rgb: var(--color-yellow-rgb, 188, 156, 98);
  --text-muted: var(--color-base-70, #a7a6a8);
  --text-normal: var(--color-base-100, #e2e0d2);
  --text-success: var(--color-green, #88BC7D);
  --text-warning: var(--color-orange, #BC8762);
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-0), 0.5));
  --titlebar-background: var(--background-secondary, #313234);
  --titlebar-background-focused: var(--background-secondary-alt, #444648);
  --titlebar-border-color: var(--background-modifier-border, #444648);
  --titlebar-text-color: var(--text-muted, #a7a6a8);
  --titlebar-text-color-focused: var(--text-normal, #e2e0d2);
  --vault-profile-color: var(--text-normal, #e2e0d2);
  --vault-profile-color-hover: var(--vault-profile-color, #e2e0d2);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #313234);
  background-color: var(--tab-container-background, rgb(49, 50, 52));
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(29, 31, 33));
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(49, 50, 52));
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(68, 70, 72);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #313234);
  background-color: var(--tab-container-background, rgb(49, 50, 52));
  border-left-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(226, 224, 210));
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(226, 224, 210));
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(226, 224, 210));
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(226, 224, 210));
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(188, 156, 98, 0.4));
  color: var(--text-normal, rgb(226, 224, 210));
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body del {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(128, 128, 130);
  border-radius: 10px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(98, 147, 142));
  border-color: rgb(98, 147, 142);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(167, 166, 168));
  outline: rgb(167, 166, 168) none 0px;
  text-decoration-color: rgb(167, 166, 168);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(117, 164, 157));
  font-family: Inter, sans-serif;
  outline: rgb(117, 164, 157) none 0px;
  text-decoration-color: rgb(117, 164, 157);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(117, 164, 157));
  font-family: Inter, sans-serif;
  outline: rgb(117, 164, 157) none 0px;
  text-decoration-color: rgb(117, 164, 157);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(117, 164, 157));
  font-family: Inter, sans-serif;
  outline: rgb(117, 164, 157) none 0px;
  text-decoration: underline rgba(98, 147, 142, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(98, 147, 142, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body dt {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(128, 128, 130));
}

html[saved-theme="dark"] body blockquote {
  font-family: Inter, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body table {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  width: 194.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: var(--table-text-color, rgb(226, 224, 210));
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: var(--table-header-color, rgb(226, 224, 210));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(39, 41, 43));
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: var(--code-normal, rgb(226, 224, 210));
  font-family: var(--font-monospace, "Courier New", monospace);
  padding-bottom: 2.4px;
  padding-left: 4.8px;
  padding-right: 4.8px;
  padding-top: 2.4px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(39, 41, 43));
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #27292b);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(182, 94, 103);
  border-left-color: rgb(182, 94, 103);
  border-right-color: rgb(182, 94, 103);
  border-top-color: rgb(182, 94, 103);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(39, 41, 43));
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(98, 147, 142);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(128, 128, 130);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(128, 128, 130);
  border-right-color: rgb(128, 128, 130);
  border-top-color: rgb(128, 128, 130);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 31, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 31, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(188, 135, 98);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(128, 128, 130);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(188, 171, 98);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 141, 135);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 202, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 94, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 94, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 94, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 94, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 202, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(188, 171, 98);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(188, 171, 98);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 151, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 94, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 188, 125);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 188, 125);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 188, 125);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 94, 141, 135);
  background: rgba(94, 141, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 156, 151, 183);
  background: rgba(156, 151, 183, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(156, 151, 183, 0.25);
  border-left-color: rgba(156, 151, 183, 0.25);
  border-right-color: rgba(156, 151, 183, 0.25);
  border-top-color: rgba(156, 151, 183, 0.25);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 136, 188, 125);
  background: rgba(136, 188, 125, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(136, 188, 125, 0.25);
  border-left-color: rgba(136, 188, 125, 0.25);
  border-right-color: rgba(136, 188, 125, 0.25);
  border-top-color: rgba(136, 188, 125, 0.25);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 94, 141, 135);
  background: rgba(94, 141, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(226, 224, 210);
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
  background-color: rgb(78, 79, 81);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: var(--text-normal, rgb(226, 224, 210));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(29, 31, 33));
  border-bottom-color: rgb(108, 108, 110);
  border-left-color: rgb(108, 108, 110);
  border-right-color: rgb(108, 108, 110);
  border-top-color: rgb(108, 108, 110);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--text-selection, rgba(98, 147, 142, 0.33));
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(108, 108, 110);
  border-left-color: rgb(108, 108, 110);
  border-right-color: rgb(108, 108, 110);
  border-top-color: rgb(108, 108, 110);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 50, 52);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--text-selection, rgba(98, 147, 142, 0.33));
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--text-selection, rgba(98, 147, 142, 0.33));
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(174, 20%, 48%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(174, 20%, 48%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(174, 20%, 48%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(174, 20%, 48%, 0.15));
  --pill-color: var(--tag-color, hsl(171, 20.4%, 55.2%));
  --pill-color-hover: var(--tag-color-hover, hsl(171, 20.4%, 55.2%));
  --pill-color-remove: var(--tag-color, hsl(171, 20.4%, 55.2%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(171, 20.4%, 55.2%));
  background-color: var(--pill-background, rgba(98, 147, 142, 0.1));
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(117, 164, 157);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 300);
  color: var(--h1-color, rgb(182, 94, 103));
  font-family: var(--h1-font, Inter, sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(128, 128, 130));
  font-size: var(--inline-title-size, 21.088px);
  font-weight: var(--inline-title-weight, 50);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 300);
  color: var(--h2-color, rgb(188, 135, 98));
  font-family: var(--h2-font, Inter, sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(128, 128, 130));
  font-family: var(--inline-title-font, Inter, sans-serif);
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 300);
  color: var(--h3-color, rgb(188, 171, 98));
  font-family: var(--h3-font, Inter, sans-serif);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 300);
  color: var(--h4-color, rgb(136, 188, 125));
  font-family: var(--h4-font, Inter, sans-serif);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 300);
  color: var(--h5-color, rgb(196, 202, 214));
  font-family: var(--h5-font, Inter, sans-serif);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 300);
  color: var(--h6-color, rgb(156, 151, 183));
  font-family: var(--h6-font, Inter, sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(226, 224, 226, 0.12);
  border-left-width: 2px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(167, 166, 168));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(167, 166, 168));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(226, 224, 210);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: var(--icon-color, rgb(167, 166, 168));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(49, 50, 52));
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-left-width: 0px;
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(167, 166, 168));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(167, 166, 168);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(167, 166, 168));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(167, 166, 168);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(167, 166, 168));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: var(--icon-color, rgb(167, 166, 168));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(167, 166, 168);
  stroke: rgb(167, 166, 168);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(128, 128, 130));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(226, 224, 210));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(49, 50, 52));
  border-color: rgb(226, 224, 210);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(68, 70, 72);
  color: var(--table-header-color, rgb(226, 224, 210));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: var(--text-muted, rgb(167, 166, 168));
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(68, 70, 72);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(174, 20%, 48%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(174, 20%, 48%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(174, 20%, 48%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(174, 20%, 48%, 0.15));
  --pill-color: var(--tag-color, hsl(171, 20.4%, 55.2%));
  --pill-color-hover: var(--tag-color-hover, hsl(171, 20.4%, 55.2%));
  --pill-color-remove: var(--tag-color, hsl(171, 20.4%, 55.2%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(171, 20.4%, 55.2%));
  background-color: var(--pill-background, rgba(98, 147, 142, 0.1));
  color: var(--pill-color, rgb(117, 164, 157));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(29, 31, 33));
  color: var(--text-normal, rgb(226, 224, 210));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(49, 50, 52));
  border-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(68, 70, 72));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(226, 224, 210);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(49, 50, 52));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(226, 224, 210));
}

html[saved-theme="dark"] body abbr {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: var(--text-normal, rgb(167, 166, 168));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(39, 41, 43));
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: var(--code-normal, rgb(226, 224, 210));
  font-family: var(--font-monospace, "Courier New", monospace);
  font-size: var(--code-size, 16px);
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body sub {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body summary {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body sup {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(98, 147, 142, 0.1));
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
  color: var(--tag-color, rgb(117, 164, 157));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 174;
  --accent-l: 48%;
  --accent-s: 20%;
  --background-modifier-border: var(--color-base-20, #b1b0b2);
  --background-modifier-border-focus: var(--color-base-40, #89898b);
  --background-modifier-border-hover: var(--color-base-35, #939395);
  --background-modifier-error: var(--color-red, #933942);
  --background-modifier-error-hover: var(--color-red, #933942);
  --background-modifier-form-field: var(--color-base-00, #d8d6d8);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #d8d6d8);
  --background-modifier-hover: rgba(var(--mono-rgb-0), 0.5);
  --background-modifier-success: var(--color-green, #3F7F31);
  --background-modifier-success-rgb: var(--color-green-rgb, 63, 127, 49);
  --background-primary: var(--color-base-00, #d8d6d8);
  --background-primary-alt: var(--color-base-05, #cecdcf);
  --background-secondary: var(--color-base-10, #c4c3c5);
  --background-secondary-alt: var(--color-base-20, #b1b0b2);
  --bases-cards-background: var(--background-primary, #d8d6d8);
  --bases-cards-cover-background: var(--background-primary-alt, #cecdcf);
  --bases-embed-border-color: var(--background-modifier-border, #b1b0b2);
  --bases-group-heading-property-color: var(--text-muted, #4e4f51);
  --bases-table-border-color: var(--table-border-color, #b1b0b2);
  --bases-table-cell-background-active: var(--background-primary, #d8d6d8);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #cecdcf);
  --bases-table-cell-background-selected: var(--table-selection, hsla(174, 20%, 48%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #cecdcf);
  --bases-table-header-background: var(--background-primary, #d8d6d8);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(226, 224, 226, 0.5));
  --bases-table-header-color: var(--text-muted, #4e4f51);
  --bases-table-summary-background: var(--background-primary, #d8d6d8);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(226, 224, 226, 0.5));
  --blockquote-border-color: var(--interactive-accent, hsl(173, 20.2%, 51.6%));
  --blockquote-border-thickness: 4px;
  --callout-example: var(--color-purple-rgb, 59, 49, 105);
  --callout-important: var(--color-cyan-rgb, 94, 141, 135);
  --callout-success: var(--color-green-rgb, 63, 127, 49);
  --callout-summary: var(--color-cyan-rgb, 94, 141, 135);
  --callout-tip: var(--color-cyan-rgb, 94, 141, 135);
  --canvas-background: var(--background-primary, #d8d6d8);
  --canvas-card-label-color: var(--text-faint, #767678);
  --canvas-color-3: var(--color-yellow-rgb, 152, 119, 59);
  --canvas-color-4: var(--color-green-rgb, 63, 127, 49);
  --canvas-color-5: var(--color-cyan-rgb, 94, 141, 135);
  --canvas-color-6: var(--color-purple-rgb, 59, 49, 105);
  --canvas-dot-pattern: var(--color-base-30, #9d9c9e);
  --caret-color: var(--text-normal, #1d1f21);
  --checkbox-border-color: var(--text-faint, #767678);
  --checkbox-border-color-hover: var(--checkbox-color, hsl(173, 20.2%, 51.6%));
  --checkbox-border-color-unchecked: var(--color-base-50, #767678);
  --checkbox-color: var(--interactive-accent, hsl(173, 20.2%, 51.6%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(171, 20.4%, 55.2%));
  --checkbox-marker-color: var(--background-primary, #d8d6d8);
  --checkbox-radius: var(--radius-s, 10px);
  --checklist-done-color: var(--text-muted, #4e4f51);
  --code-background: var(--background-primary-alt, #cecdcf);
  --code-border-color: var(--background-modifier-border, #b1b0b2);
  --code-bracket-background: var(--background-modifier-hover, rgba(226, 224, 226, 0.5));
  --code-comment: var(--text-faint, #767678);
  --code-function: var(--color-yellow, #98863B);
  --code-important: var(--color-orange, #98623B);
  --code-keyword: var(--color-pink, #752E5C);
  --code-normal: var(--text-normal, #1d1f21);
  --code-operator: var(--color-red, #933942);
  --code-property: var(--color-cyan, #5E8D87);
  --code-punctuation: var(--text-muted, #4e4f51);
  --code-size: var(--font-smaller, --font-normal);
  --code-string: var(--color-green, #3F7F31);
  --code-tag: var(--color-red, #933942);
  --code-value: var(--color-purple, #3B3169);
  --collapse-icon-color: var(--text-faint, #767678);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(174, 20%, 48%));
  --color-base-00: #d8d6d8;
  --color-base-05: #cecdcf;
  --color-base-10: #c4c3c5;
  --color-base-100: #1d1f21;
  --color-base-20: #b1b0b2;
  --color-base-25: #a7a6a8;
  --color-base-30: #9d9c9e;
  --color-base-35: #939395;
  --color-base-40: #89898b;
  --color-base-50: #767678;
  --color-base-60: #626365;
  --color-base-70: #4e4f51;
  --color-blue: #687995;
  --color-blue_rgb: 104, 121, 149;
  --color-cyan: var(--color-teal, #5E8D87);
  --color-cyan-rgb: var(--color-teal-rgb, 94, 141, 135);
  --color-green: #3F7F31;
  --color-green-rgb: 63, 127, 49;
  --color-orange: #98623B;
  --color-orange_rgb: 152, 98, 59;
  --color-pink: #752E5C;
  --color-pink-rgb: 117, 46, 92;
  --color-purple: #3B3169;
  --color-purple-rgb: 59, 49, 105;
  --color-red: #933942;
  --color-red_rgb: 147, 57, 66;
  --color-teal: #5E8D87;
  --color-teal-rgb: 94, 141, 135;
  --color-yellow: #98863B;
  --color-yellow-rgb: 152, 119, 59;
  --dark: var(--text-normal, var(--color-base-100, #1d1f21));
  --darkgray: var(--text-normal, var(--color-base-100, #1d1f21));
  --divider-color: var(--background-modifier-border, #b1b0b2);
  --divider-color-hover: var(--interactive-accent, hsl(173, 20.2%, 51.6%));
  --dropdown-background: var(--interactive-normal, #d8d6d8);
  --dropdown-background-hover: var(--interactive-hover, #c4c3c5);
  --file-header-background: var(--background-primary, #d8d6d8);
  --file-header-background-focused: var(--background-primary, #d8d6d8);
  --flair-background: var(--interactive-normal, #d8d6d8);
  --flair-color: var(--text-normal, #1d1f21);
  --font-mermaid: var(--font-text, "Inter", sans-serif);
  --footnote-divider-color: var(--metadata-divider-color, #b1b0b2);
  --footnote-id-color: var(--text-muted, #4e4f51);
  --footnote-id-color-no-occurrences: var(--text-faint, #767678);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(226, 224, 226, 0.5));
  --graph-node: var(--text-muted, #4e4f51);
  --graph-node-attachment: var(--color-yellow, #98863B);
  --graph-node-focused: var(--text-accent, hsl(174, 20%, 48%));
  --graph-node-tag: var(--color-green, #3F7F31);
  --graph-node-unresolved: var(--text-faint, #767678);
  --graph-text: var(--text-normal, #1d1f21);
  --gray: var(--text-muted, var(--color-base-70, #4e4f51));
  --h1-color: var(--color-red, #933942);
  --h1-weight: 500;
  --h2-color: var(--color-orange, #98623B);
  --h2-weight: 400;
  --h3-color: var(--color-yellow, #98863B);
  --h3-weight: 400;
  --h4-color: var(--color-green, #3F7F31);
  --h4-weight: 400;
  --h5-color: var(--color-blue, #687995);
  --h5-weight: 400;
  --h6-color: var(--color-purple, #3B3169);
  --h6-weight: 400;
  --heading-formatting: var(--text-faint, #767678);
  --heading-spacing: calc(var(--p-spacing)*1.5);
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-0), 0.5));
  --hr-color: var(--background-modifier-border, #b1b0b2);
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, #4e4f51);
  --icon-color-active: var(--text-accent, hsl(174, 20%, 48%));
  --icon-color-focused: var(--text-normal, #1d1f21);
  --icon-color-hover: var(--text-muted, #4e4f51);
  --indentation-guide-width: var(--border-width, 2px);
  --inline-title-color: var(--color-base-50, #767678);
  --inline-title-size: var(--h3-size, 1.318em);
  --inline-title-style: var(--h1-style, italic);
  --inline-title-weight: var(--h1-weight, 50);
  --input-date-separator: var(--text-faint, #767678);
  --input-placeholder-color: var(--text-faint, #767678);
  --interactive-accent: var(--color-accent-1, hsl(173, 20.2%, 51.6%));
  --interactive-accent-hover: var(--color-accent-2, hsl(171, 20.4%, 55.2%));
  --interactive-accent-hsl: var(--color-accent-hsl, 174, 20%, 48%);
  --interactive-hover: var(--color-base-10, #c4c3c5);
  --interactive-normal: var(--color-base-00, #d8d6d8);
  --light: var(--background-primary, var(--color-base-00, #d8d6d8));
  --lightgray: var(--background-secondary, var(--color-base-10, #c4c3c5));
  --link-color: var(--text-accent, hsl(174, 20%, 48%));
  --link-color-hover: var(--text-accent-hover, hsl(171, 20.4%, 55.2%));
  --link-external-color: var(--text-accent, hsl(174, 20%, 48%));
  --link-external-color-hover: var(--text-accent-hover, hsl(171, 20.4%, 55.2%));
  --link-unresolved-color: var(--text-accent, hsl(174, 20%, 48%));
  --list-bullet-radius: 40%;
  --list-bullet-size: 0.4em;
  --list-marker-color: var(--text-faint, #767678);
  --list-marker-color-collapsed: var(--text-accent, hsl(174, 20%, 48%));
  --list-marker-color-hover: var(--text-muted, #4e4f51);
  --menu-background: var(--background-secondary, #c4c3c5);
  --menu-border-color: var(--background-modifier-border-hover, #939395);
  --metadata-border-color: var(--background-modifier-border, #b1b0b2);
  --metadata-divider-color: var(--background-modifier-border, #b1b0b2);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(226, 224, 226, 0.5));
  --metadata-input-text-color: var(--text-normal, #1d1f21);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(226, 224, 226, 0.5));
  --metadata-label-text-color: var(--text-muted, #4e4f51);
  --metadata-label-text-color-hover: var(--text-muted, #4e4f51);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(226, 224, 226, 0.5));
  --modal-background: var(--background-primary, #d8d6d8);
  --modal-border-color: var(--color-base-30, var(--background-modifier-border-focus));
  --mono-rgb-0: 226, 224, 226;
  --mono-rgb-100: 29, 31, 33;
  --nav-collapse-icon-color: var(--collapse-icon-color, #767678);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #767678);
  --nav-heading-color: var(--text-normal, #1d1f21);
  --nav-heading-color-collapsed: var(--text-faint, #767678);
  --nav-heading-color-collapsed-hover: var(--text-muted, #4e4f51);
  --nav-heading-color-hover: var(--text-normal, #1d1f21);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(29, 31, 33, 0.12));
  --nav-indentation-guide-width: var(--indentation-guide-width, 2px);
  --nav-item-background-active: var(--background-modifier-hover, rgba(226, 224, 226, 0.5));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(226, 224, 226, 0.5));
  --nav-item-color: var(--text-muted, #4e4f51);
  --nav-item-color-active: var(--text-normal, #1d1f21);
  --nav-item-color-highlighted: var(--text-accent, hsl(174, 20%, 48%));
  --nav-item-color-hover: var(--text-normal, #1d1f21);
  --nav-item-color-selected: var(--text-normal, #1d1f21);
  --nav-tag-color: var(--text-faint, #767678);
  --nav-tag-color-active: var(--text-muted, #4e4f51);
  --nav-tag-color-hover: var(--text-muted, #4e4f51);
  --pdf-background: var(--background-primary, #d8d6d8);
  --pdf-page-background: var(--background-primary, #d8d6d8);
  --pdf-sidebar-background: var(--background-primary, #d8d6d8);
  --pill-border-color: var(--background-modifier-border, #b1b0b2);
  --pill-border-color-hover: var(--background-modifier-border-hover, #939395);
  --pill-color: var(--text-muted, #4e4f51);
  --pill-color-hover: var(--text-normal, #1d1f21);
  --pill-color-remove: var(--text-faint, #767678);
  --pill-color-remove-hover: var(--text-accent, hsl(174, 20%, 48%));
  --prompt-background: var(--background-primary, #d8d6d8);
  --raised-background: var(--blur-background, color-mix(in srgb, #d8d6d8 65%, transparent) linear-gradient(#d8d6d8, color-mix(in srgb, #d8d6d8 65%, transparent)));
  --ribbon-background: var(--background-secondary, #c4c3c5);
  --ribbon-background-collapsed: var(--background-primary, #d8d6d8);
  --search-clear-button-color: var(--text-muted, #4e4f51);
  --search-icon-color: var(--text-muted, #4e4f51);
  --search-result-background: var(--background-primary, #d8d6d8);
  --secondary: var(--text-accent, var(--color-accent, hsl(174, 20%, 48%)));
  --setting-group-heading-color: var(--text-normal, #1d1f21);
  --setting-items-background: var(--background-primary-alt, #cecdcf);
  --setting-items-border-color: var(--background-modifier-border, #b1b0b2);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #4e4f51);
  --shiki-code-background: var(--code-background, #cecdcf);
  --shiki-code-comment: var(--text-faint, #767678);
  --shiki-code-function: var(--color-green, #3F7F31);
  --shiki-code-important: var(--color-orange, #98623B);
  --shiki-code-keyword: var(--color-pink, #752E5C);
  --shiki-code-normal: var(--text-muted, #4e4f51);
  --shiki-code-property: var(--color-cyan, #5E8D87);
  --shiki-code-punctuation: var(--text-muted, #4e4f51);
  --shiki-code-string: var(--color-yellow, #98863B);
  --shiki-code-value: var(--color-purple, #3B3169);
  --shiki-gutter-border-color: var(--background-modifier-border, #b1b0b2);
  --shiki-gutter-text-color: var(--text-faint, #767678);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #4e4f51);
  --shiki-highlight-neutral: var(--shiki-code-normal, #4e4f51);
  --shiki-terminal-dots-color: var(--text-faint, #767678);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #939395);
  --slider-track-background: var(--background-modifier-border, #b1b0b2);
  --status-bar-background: var(--background-secondary, #c4c3c5);
  --status-bar-border-color: var(--divider-color, #b1b0b2);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0);
  --status-bar-text-color: var(--text-muted, #4e4f51);
  --suggestion-background: var(--background-primary, #d8d6d8);
  --sync-avatar-color-1: var(--color-red, #933942);
  --sync-avatar-color-2: var(--color-orange, #98623B);
  --sync-avatar-color-3: var(--color-yellow, #98863B);
  --sync-avatar-color-4: var(--color-green, #3F7F31);
  --sync-avatar-color-5: var(--color-cyan, #5E8D87);
  --sync-avatar-color-6: var(--color-blue, #687995);
  --sync-avatar-color-7: var(--color-purple, #3B3169);
  --sync-avatar-color-8: var(--color-pink, #752E5C);
  --tab-background-active: var(--background-primary, #d8d6d8);
  --tab-container-background: var(--background-secondary, #c4c3c5);
  --tab-divider-color: var(--background-modifier-border-hover, #939395);
  --tab-outline-color: var(--divider-color, #b1b0b2);
  --tab-switcher-background: var(--background-secondary, #c4c3c5);
  --tab-text-color: var(--text-faint, #767678);
  --tab-text-color-active: var(--text-muted, #4e4f51);
  --tab-text-color-focused: var(--text-muted, #4e4f51);
  --tab-text-color-focused-active: var(--text-muted, #4e4f51);
  --tab-text-color-focused-active-current: var(--text-normal, #1d1f21);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(174, 20%, 48%));
  --table-add-button-border-color: var(--background-modifier-border, #b1b0b2);
  --table-border-color: var(--background-modifier-border, #b1b0b2);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(173, 20.2%, 51.6%));
  --table-drag-handle-color: var(--text-faint, #767678);
  --table-header-border-color: var(--table-border-color, #b1b0b2);
  --table-header-color: var(--text-normal, #1d1f21);
  --table-selection-border-color: var(--interactive-accent, hsl(173, 20.2%, 51.6%));
  --tag-color: var(--text-accent, hsl(174, 20%, 48%));
  --tag-color-hover: var(--text-accent, hsl(174, 20%, 48%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(171, 20.4%, 55.2%)));
  --text-accent: var(--color-accent, hsl(174, 20%, 48%));
  --text-accent-hover: var(--color-accent-2, hsl(171, 20.4%, 55.2%));
  --text-error: var(--color-red, #933942);
  --text-faint: var(--color-base-50, #767678);
  --text-highlight-bg-rgb: var(--color-yellow-rgb, 152, 119, 59);
  --text-muted: var(--color-base-70, #4e4f51);
  --text-normal: var(--color-base-100, #1d1f21);
  --text-success: var(--color-green, #3F7F31);
  --text-warning: var(--color-orange, #98623B);
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-0), 0.5));
  --titlebar-background: var(--background-secondary, #c4c3c5);
  --titlebar-background-focused: var(--background-secondary-alt, #b1b0b2);
  --titlebar-border-color: var(--background-modifier-border, #b1b0b2);
  --titlebar-text-color: var(--text-muted, #4e4f51);
  --titlebar-text-color-focused: var(--text-normal, #1d1f21);
  --vault-profile-color: var(--text-normal, #1d1f21);
  --vault-profile-color-hover: var(--vault-profile-color, #1d1f21);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #c4c3c5);
  background-color: var(--tab-container-background, rgb(196, 195, 197));
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(216, 214, 216));
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(196, 195, 197));
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(177, 176, 178);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #c4c3c5);
  background-color: var(--tab-container-background, rgb(196, 195, 197));
  border-left-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(29, 31, 33));
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(29, 31, 33));
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(29, 31, 33));
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(29, 31, 33));
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(152, 119, 59, 0.4));
  color: var(--text-normal, rgb(29, 31, 33));
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body del {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(118, 118, 120);
  border-radius: 10px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(107, 157, 151));
  border-color: rgb(107, 157, 151);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(78, 79, 81));
  outline: rgb(78, 79, 81) none 0px;
  text-decoration-color: rgb(78, 79, 81);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(98, 147, 142));
  font-family: Inter, sans-serif;
  outline: rgb(98, 147, 142) none 0px;
  text-decoration-color: rgb(98, 147, 142);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(98, 147, 142));
  font-family: Inter, sans-serif;
  outline: rgb(98, 147, 142) none 0px;
  text-decoration-color: rgb(98, 147, 142);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(98, 147, 142));
  font-family: Inter, sans-serif;
  outline: rgb(98, 147, 142) none 0px;
  text-decoration: underline rgba(98, 147, 142, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(98, 147, 142, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body dt {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ol > li {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ul > li {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(118, 118, 120));
}

html[saved-theme="light"] body blockquote {
  font-family: Inter, sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body table {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  width: 194.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: var(--table-text-color, rgb(29, 31, 33));
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: var(--table-header-color, rgb(29, 31, 33));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(206, 205, 207));
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: var(--code-normal, rgb(29, 31, 33));
  font-family: var(--font-monospace, "Courier New", monospace);
  padding-bottom: 2.4px;
  padding-left: 4.8px;
  padding-right: 4.8px;
  padding-top: 2.4px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(206, 205, 207));
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body figcaption {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #cecdcf);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(147, 57, 66);
  border-left-color: rgb(147, 57, 66);
  border-right-color: rgb(147, 57, 66);
  border-top-color: rgb(147, 57, 66);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(206, 205, 207));
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(107, 157, 151);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(118, 118, 120);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(118, 118, 120);
  border-right-color: rgb(118, 118, 120);
  border-top-color: rgb(118, 118, 120);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 214, 216);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 214, 216);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 98, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(118, 118, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 134, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 141, 135);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 121, 149);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(147, 57, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(147, 57, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(147, 57, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(147, 57, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 121, 149);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 134, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 134, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 49, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(147, 57, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(63, 127, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(63, 127, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(63, 127, 49);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 94, 141, 135);
  background: rgba(94, 141, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 59, 49, 105);
  background: rgba(59, 49, 105, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(59, 49, 105, 0.25);
  border-left-color: rgba(59, 49, 105, 0.25);
  border-right-color: rgba(59, 49, 105, 0.25);
  border-top-color: rgba(59, 49, 105, 0.25);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 63, 127, 49);
  background: rgba(63, 127, 49, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(63, 127, 49, 0.25);
  border-left-color: rgba(63, 127, 49, 0.25);
  border-right-color: rgba(63, 127, 49, 0.25);
  border-top-color: rgba(63, 127, 49, 0.25);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 94, 141, 135);
  background: rgba(94, 141, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(29, 31, 33);
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
  background-color: rgb(216, 214, 216);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: var(--text-normal, rgb(29, 31, 33));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(216, 214, 216));
  border-bottom-color: rgb(137, 137, 139);
  border-left-color: rgb(137, 137, 139);
  border-right-color: rgb(137, 137, 139);
  border-top-color: rgb(137, 137, 139);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--text-selection, rgba(98, 147, 142, 0.2));
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(137, 137, 139);
  border-left-color: rgb(137, 137, 139);
  border-right-color: rgb(137, 137, 139);
  border-top-color: rgb(137, 137, 139);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(196, 195, 197);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--text-selection, rgba(98, 147, 142, 0.2));
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--text-selection, rgba(98, 147, 142, 0.2));
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(174, 20%, 48%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(174, 20%, 48%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(174, 20%, 48%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(174, 20%, 48%, 0.15));
  --pill-color: var(--tag-color, hsl(174, 20%, 48%));
  --pill-color-hover: var(--tag-color-hover, hsl(174, 20%, 48%));
  --pill-color-remove: var(--tag-color, hsl(174, 20%, 48%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(174, 20%, 48%));
  background-color: var(--pill-background, rgba(98, 147, 142, 0.1));
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(98, 147, 142);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 500);
  color: var(--h1-color, rgb(147, 57, 66));
  font-family: var(--h1-font, Inter, sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(118, 118, 120));
  font-size: var(--inline-title-size, 21.088px);
  font-weight: var(--inline-title-weight, 50);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 400);
  color: var(--h2-color, rgb(152, 98, 59));
  font-family: var(--h2-font, Inter, sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(118, 118, 120));
  font-family: var(--inline-title-font, Inter, sans-serif);
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 400);
  color: var(--h3-color, rgb(152, 134, 59));
  font-family: var(--h3-font, Inter, sans-serif);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 400);
  color: var(--h4-color, rgb(63, 127, 49));
  font-family: var(--h4-font, Inter, sans-serif);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 400);
  color: var(--h5-color, rgb(104, 121, 149));
  font-family: var(--h5-font, Inter, sans-serif);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 400);
  color: var(--h6-color, rgb(59, 49, 105));
  font-family: var(--h6-font, Inter, sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(29, 31, 33, 0.12);
  border-left-width: 2px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(78, 79, 81));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(78, 79, 81));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(29, 31, 33);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: var(--icon-color, rgb(78, 79, 81));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(196, 195, 197));
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-left-width: 0px;
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(78, 79, 81));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(78, 79, 81);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(78, 79, 81));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(78, 79, 81);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(78, 79, 81));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: var(--icon-color, rgb(78, 79, 81));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(78, 79, 81);
  stroke: rgb(78, 79, 81);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(118, 118, 120));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(29, 31, 33));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(216, 214, 216));
  border-color: rgb(29, 31, 33);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(177, 176, 178);
  color: var(--table-header-color, rgb(29, 31, 33));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: var(--text-muted, rgb(78, 79, 81));
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(177, 176, 178);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(174, 20%, 48%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(174, 20%, 48%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(174, 20%, 48%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(174, 20%, 48%, 0.15));
  --pill-color: var(--tag-color, hsl(174, 20%, 48%));
  --pill-color-hover: var(--tag-color-hover, hsl(174, 20%, 48%));
  --pill-color-remove: var(--tag-color, hsl(174, 20%, 48%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(174, 20%, 48%));
  background-color: var(--pill-background, rgba(98, 147, 142, 0.1));
  color: var(--pill-color, rgb(98, 147, 142));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(216, 214, 216));
  color: var(--text-normal, rgb(29, 31, 33));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(196, 195, 197));
  border-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(177, 176, 178));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(29, 31, 33);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(196, 195, 197));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(29, 31, 33));
}

html[saved-theme="light"] body abbr {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: var(--text-normal, rgb(78, 79, 81));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(206, 205, 207));
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: var(--code-normal, rgb(29, 31, 33));
  font-family: var(--font-monospace, "Courier New", monospace);
  font-size: var(--code-size, 16px);
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body sub {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body summary {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body sup {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(98, 147, 142, 0.1));
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
  color: var(--tag-color, rgb(98, 147, 142));
}`,
  },
};
