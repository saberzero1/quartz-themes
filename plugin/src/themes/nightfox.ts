import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nightfox",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 181;
  --accent-l: 51%;
  --accent-s: 37%;
  --background-modifier-border: var(--color-base-25, #243347);
  --background-modifier-border-focus: var(--color-base-35, #39506d);
  --background-modifier-border-hover: var(--color-base-30, #29394f);
  --background-modifier-error: var(--color-red, #c94f6d);
  --background-modifier-error-hover: var(--color-red, #c94f6d);
  --background-modifier-error-rgb: var(--color-red-rgb, 201, 79, 109);
  --background-modifier-form-field: var(--color-base-25, #243347);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #243347);
  --background-modifier-success: var(--color-green, #81b29a);
  --background-modifier-success-rgb: var(--color-green-rgb, 129, 178, 154);
  --background-primary: var(--color-base-10, #192330);
  --background-primary-alt: var(--color-base-05, #151d28);
  --background-secondary: var(--color-base-05, #151d28);
  --background-secondary-alt: var(--color-base-30, #29394f);
  --bases-cards-background: var(--background-primary, #192330);
  --bases-cards-cover-background: var(--background-primary-alt, #151d28);
  --bases-embed-border-color: var(--background-modifier-border, #243347);
  --bases-group-heading-property-color: var(--text-muted, #aeafb0);
  --bases-table-border-color: var(--table-border-color, #243347);
  --bases-table-cell-background-active: var(--background-primary, #192330);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #151d28);
  --bases-table-cell-background-selected: var(--table-selection, hsla(181, 37%, 51%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #151d28);
  --bases-table-header-background: var(--background-primary, #192330);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  --bases-table-header-color: var(--text-muted, #aeafb0);
  --bases-table-summary-background: var(--background-primary, #192330);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  --blockquote-background-color: rgba(var(--color-cyan-rgb), 0.03);
  --blockquote-border-color: var(--interactive-accent, hsl(181, 37%, 51%));
  --bold-color: var(--color-base-110, #d6d6d7);
  --callout-bug: var(--color-red-rgb, 201, 79, 109);
  --callout-default: var(--color-blue-rgb, 113, 156, 214);
  --callout-error: var(--color-red-rgb, 201, 79, 109);
  --callout-example: var(--color-purple-rgb, 157, 121, 214);
  --callout-fail: var(--color-red-rgb, 201, 79, 109);
  --callout-important: var(--color-cyan-rgb, 99, 205, 207);
  --callout-info: var(--color-blue-rgb, 113, 156, 214);
  --callout-question: var(--color-orange-rgb, 244, 162, 97);
  --callout-success: var(--color-green-rgb, 129, 178, 154);
  --callout-summary: var(--color-cyan-rgb, 99, 205, 207);
  --callout-tip: var(--color-cyan-rgb, 99, 205, 207);
  --callout-todo: var(--color-blue-rgb, 113, 156, 214);
  --callout-warning: var(--color-orange-rgb, 244, 162, 97);
  --canvas-background: var(--background-primary, #192330);
  --canvas-card-label-color: var(--text-faint, #5d728e);
  --canvas-color-1: var(--color-red-rgb, 201, 79, 109);
  --canvas-color-2: var(--color-orange-rgb, 244, 162, 97);
  --canvas-color-3: var(--color-yellow-rgb, 219, 192, 116);
  --canvas-color-4: var(--color-green-rgb, 129, 178, 154);
  --canvas-color-5: var(--color-cyan-rgb, 99, 205, 207);
  --canvas-color-6: var(--color-purple-rgb, 157, 121, 214);
  --canvas-dot-pattern: var(--color-base-30, #29394f);
  --caret-color: var(--text-normal, #cdcecf);
  --checkbox-border-color: var(--text-faint, #5d728e);
  --checkbox-border-color-hover: var(--text-muted, #aeafb0);
  --checkbox-color: var(--interactive-accent, hsl(181, 37%, 51%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(178, 37.74%, 58.65%));
  --checkbox-marker-color: var(--background-primary, #192330);
  --checklist-done-color: var(--text-muted, #aeafb0);
  --code-background: var(--color-base-05, #151d28);
  --code-border-color: var(--background-modifier-border, #243347);
  --code-bracket-background: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  --code-comment: var(--text-faint, #738091);
  --code-function: var(--color-yellow, #dbc074);
  --code-important: var(--color-orange, #f4a261);
  --code-inline-background: var(--code-background, #131a24);
  --code-keyword: var(--color-pink, #d67ad2);
  --code-normal: var(--text-normal, #cdcecf);
  --code-operator: var(--color-red, #c94f6d);
  --code-property: var(--color-cyan, #63cdcf);
  --code-punctuation: var(--text-muted, #aeafb0);
  --code-string: var(--color-green, #81b29a);
  --code-tag: var(--color-red, #c94f6d);
  --code-value: var(--color-purple, #9d79d6);
  --collapse-icon-color: var(--text-faint, #5d728e);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --color-base-00: #131a24;
  --color-base-05: #151d28;
  --color-base-10: #192330;
  --color-base-100: #cdcecf;
  --color-base-110: #d6d6d7;
  --color-base-20: #212e3f;
  --color-base-25: #243347;
  --color-base-30: #29394f;
  --color-base-35: #39506d;
  --color-base-40: #496283;
  --color-base-50: #5d728e;
  --color-base-60: #71839b;
  --color-base-70: #aeafb0;
  --color-blue: #719cd6;
  --color-blue-bright: #86abdc;
  --color-blue-dim: #6085b6;
  --color-blue-rgb: 113, 156, 214;
  --color-cyan: #63cdcf;
  --color-cyan-bright: #7ad5d6;
  --color-cyan-dim: #54aeb0;
  --color-cyan-rgb: 99, 205, 207;
  --color-green: #81b29a;
  --color-green-bright: #8ebaa4;
  --color-green-dim: #6e9783;
  --color-green-rgb: 129, 178, 154;
  --color-orange: #f4a261;
  --color-orange-bright: #f6b079;
  --color-orange-dim: #cf8a52;
  --color-orange-rgb: 244, 162, 97;
  --color-pink: #d67ad2;
  --color-pink-bright: #dc8ed9;
  --color-pink-dim: #b668b3;
  --color-pink-rgb: 214, 122, 210;
  --color-purple: #9d79d6;
  --color-purple-bright: #baa1e2;
  --color-purple-dim: #8567b6;
  --color-purple-rgb: 157, 121, 214;
  --color-red: #c94f6d;
  --color-red-bright: #d16983;
  --color-red-dim: #ab435d;
  --color-red-rgb: 201, 79, 109;
  --color-yellow: #dbc074;
  --color-yellow-bright: #e0c989;
  --color-yellow-dim: #baa363;
  --color-yellow-rgb: 219, 192, 116;
  --dark: var(--text-normal, var(--color-base-100, #cdcecf));
  --darkgray: var(--text-normal, var(--color-base-100, #cdcecf));
  --divider-color: var(--background-modifier-border, #243347);
  --divider-color-hover: var(--interactive-accent, hsl(181, 37%, 51%));
  --dropdown-background: var(--interactive-normal, #29394f);
  --dropdown-background-hover: var(--interactive-hover, #39506d);
  --file-header-background: var(--background-primary, #192330);
  --file-header-background-focused: var(--background-primary, #192330);
  --flair-background: var(--interactive-normal, #29394f);
  --flair-color: var(--text-normal, #cdcecf);
  --footnote-divider-color: var(--metadata-divider-color, #243347);
  --footnote-id-color: var(--text-muted, #aeafb0);
  --footnote-id-color-no-occurrences: var(--text-faint, #5d728e);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(205, 206, 207, 0.067));
  --graph-node: var(--text-muted, #aeafb0);
  --graph-node-attachment: var(--color-yellow, #dbc074);
  --graph-node-focused: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --graph-node-tag: var(--color-green, #4f9c77);
  --graph-node-unresolved: var(--text-faint, #5d728e);
  --graph-text: var(--text-normal, #cdcecf);
  --gray: var(--text-muted, var(--color-base-70, #aeafb0));
  --h1-color: var(--heading-color, #d6d6d7);
  --h1-size: 2.75em;
  --h1-weight: 300;
  --h2-color: var(--heading-color, #d6d6d7);
  --h2-size: 2.0em;
  --h2-weight: 700;
  --h3-color: var(--heading-color, #d6d6d7);
  --h3-size: 1.75em;
  --h3-weight: 700;
  --h4-color: var(--heading-color, #d6d6d7);
  --h4-size: 1.4em;
  --h4-weight: 700;
  --h5-color: var(--heading-color, #d6d6d7);
  --h5-size: 1.2em;
  --h5-style: italic;
  --h5-weight: 700;
  --h6-color: var(--heading-color, #d6d6d7);
  --h6-size: 1.0em;
  --h6-style: italic;
  --h6-weight: 700;
  --heading-color: var(--color-base-110, #d6d6d7);
  --heading-formatting: var(--text-faint, #5d728e);
  --hr-color: var(--background-modifier-border, #243347);
  --hr-thickness: 3px;
  --icon-color: var(--text-muted, #aeafb0);
  --icon-color-active: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --icon-color-focused: var(--text-normal, #cdcecf);
  --icon-color-hover: var(--text-muted, #aeafb0);
  --inline-title-color: var(--h1-color, #d6d6d7);
  --inline-title-size: var(--h1-size, 2.75em);
  --inline-title-weight: var(--h1-weight, 300);
  --input-date-separator: var(--text-faint, #5d728e);
  --input-placeholder-color: var(--text-faint, #5d728e);
  --interactive-accent: var(--color-accent, hsl(181, 37%, 51%));
  --interactive-accent-hover: var(--color-accent-1, hsl(178, 37.74%, 58.65%));
  --interactive-accent-hsl: var(--color-accent-hsl, 181, 37%, 51%);
  --interactive-hover: var(--color-base-35, #39506d);
  --interactive-normal: var(--color-base-30, #29394f);
  --light: var(--background-primary, var(--color-base-10, #192330));
  --lightgray: var(--background-secondary, var(--color-base-05, #151d28));
  --link-color: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --link-color-hover: var(--text-accent-hover, hsl(176, 38.85%, 65.79%));
  --link-external-color: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --link-external-color-hover: var(--text-accent-hover, hsl(176, 38.85%, 65.79%));
  --link-unresolved-color: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --list-marker-color: var(--text-faint, #5d728e);
  --list-marker-color-collapsed: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --list-marker-color-hover: var(--text-muted, #aeafb0);
  --menu-background: var(--background-secondary, #151d28);
  --menu-border-color: var(--background-modifier-border-hover, #29394f);
  --metadata-border-color: var(--background-modifier-border, #243347);
  --metadata-divider-color: var(--background-modifier-border, #243347);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  --metadata-input-text-color: var(--text-normal, #cdcecf);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  --metadata-label-text-color: var(--text-muted, #aeafb0);
  --metadata-label-text-color-hover: var(--text-muted, #aeafb0);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  --modal-background: var(--background-primary, #192330);
  --modal-border-color: var(--color-base-30, #29394f);
  --mono-rgb-0: 19, 26, 36;
  --mono-rgb-100: 205, 206, 207;
  --nav-collapse-icon-color: var(--collapse-icon-color, #5d728e);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #5d728e);
  --nav-heading-color: var(--text-normal, #cdcecf);
  --nav-heading-color-collapsed: var(--text-faint, #5d728e);
  --nav-heading-color-collapsed-hover: var(--text-muted, #aeafb0);
  --nav-heading-color-hover: var(--text-normal, #cdcecf);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(205, 206, 207, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  --nav-item-color: var(--text-muted, #aeafb0);
  --nav-item-color-active: var(--text-normal, #cdcecf);
  --nav-item-color-highlighted: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --nav-item-color-hover: var(--text-normal, #cdcecf);
  --nav-item-color-selected: var(--text-normal, #cdcecf);
  --nav-tag-color: var(--text-faint, #5d728e);
  --nav-tag-color-active: var(--text-muted, #aeafb0);
  --nav-tag-color-hover: var(--text-muted, #aeafb0);
  --pdf-background: var(--background-primary, #192330);
  --pdf-page-background: var(--background-primary, #192330);
  --pdf-sidebar-background: var(--background-primary, #192330);
  --pill-border-color: var(--background-modifier-border, #243347);
  --pill-border-color-hover: var(--background-modifier-border-hover, #29394f);
  --pill-color: var(--text-muted, #aeafb0);
  --pill-color-hover: var(--text-normal, #cdcecf);
  --pill-color-remove: var(--text-faint, #5d728e);
  --pill-color-remove-hover: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --prompt-background: var(--background-primary, #192330);
  --raised-background: var(--blur-background, color-mix(in srgb, #29394f 65%, transparent) linear-gradient(#29394f, color-mix(in srgb, #29394f 65%, transparent)));
  --ribbon-background: var(--color-base-00, #131a24);
  --ribbon-background-collapsed: var(--color-base-05, #151d28);
  --search-clear-button-color: var(--text-muted, #aeafb0);
  --search-icon-color: var(--text-muted, #aeafb0);
  --search-result-background: var(--background-primary, #192330);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(178, 37.74%, 58.65%)));
  --setting-group-heading-color: var(--text-normal, #cdcecf);
  --setting-items-background: var(--background-primary-alt, #151d28);
  --setting-items-border-color: var(--background-modifier-border, #243347);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #aeafb0);
  --shiki-code-background: var(--code-background, #151d28);
  --shiki-code-comment: var(--text-faint, #5d728e);
  --shiki-code-function: var(--color-green, #81b29a);
  --shiki-code-important: var(--color-orange, #f4a261);
  --shiki-code-keyword: var(--color-pink, #d67ad2);
  --shiki-code-normal: var(--text-muted, #aeafb0);
  --shiki-code-property: var(--color-cyan, #63cdcf);
  --shiki-code-punctuation: var(--text-muted, #aeafb0);
  --shiki-code-string: var(--color-yellow, #dbc074);
  --shiki-code-value: var(--color-purple, #9d79d6);
  --shiki-gutter-border-color: var(--background-modifier-border, #243347);
  --shiki-gutter-text-color: var(--text-faint, #5d728e);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #aeafb0);
  --shiki-highlight-neutral: var(--shiki-code-normal, #aeafb0);
  --shiki-terminal-dots-color: var(--text-faint, #5d728e);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #29394f);
  --slider-track-background: var(--background-modifier-border, #243347);
  --status-bar-background: var(--background-secondary, #151d28);
  --status-bar-border-color: var(--divider-color, #243347);
  --status-bar-text-color: var(--text-muted, #aeafb0);
  --suggestion-background: var(--background-primary, #192330);
  --sync-avatar-color-1: var(--color-red, #c94f6d);
  --sync-avatar-color-2: var(--color-orange, #f4a261);
  --sync-avatar-color-3: var(--color-yellow, #dbc074);
  --sync-avatar-color-4: var(--color-green, #81b29a);
  --sync-avatar-color-5: var(--color-cyan, #63cdcf);
  --sync-avatar-color-6: var(--color-blue, #719cd6);
  --sync-avatar-color-7: var(--color-purple, #9d79d6);
  --sync-avatar-color-8: var(--color-pink, #d67ad2);
  --tab-background-active: var(--background-primary, #192330);
  --tab-container-background: var(--background-secondary, #151d28);
  --tab-divider-color: var(--background-modifier-border-hover, #29394f);
  --tab-outline-color: var(--divider-color, #243347);
  --tab-switcher-background: var(--background-secondary, #151d28);
  --tab-text-color: var(--text-faint, #5d728e);
  --tab-text-color-active: var(--text-muted, #aeafb0);
  --tab-text-color-focused: var(--text-muted, #aeafb0);
  --tab-text-color-focused-active: var(--text-muted, #aeafb0);
  --tab-text-color-focused-active-current: var(--text-normal, #cdcecf);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --table-add-button-border-color: var(--background-modifier-border, #243347);
  --table-border-color: var(--background-modifier-border, #243347);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(181, 37%, 51%));
  --table-drag-handle-color: var(--text-faint, #5d728e);
  --table-header-background: var(--color-base-05, #151d28);
  --table-header-background-hover: var(--color-base-05, #151d28);
  --table-header-border-color: var(--table-border-color, #243347);
  --table-header-color: var(--text-normal, #cdcecf);
  --table-selection-border-color: var(--interactive-accent, hsl(181, 37%, 51%));
  --tag-color: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --tag-color-hover: var(--text-accent, hsl(178, 37.74%, 58.65%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(176, 38.85%, 65.79%)));
  --text-accent: var(--color-accent-1, hsl(178, 37.74%, 58.65%));
  --text-accent-hover: var(--color-accent-2, hsl(176, 38.85%, 65.79%));
  --text-error: var(--color-red, #c94f6d);
  --text-faint: var(--color-base-50, #5d728e);
  --text-muted: var(--color-base-70, #aeafb0);
  --text-normal: var(--color-base-100, #cdcecf);
  --text-success: var(--color-green, #81b29a);
  --text-warning: var(--color-orange, #f4a261);
  --titlebar-background: var(--color-base-00, #131a24);
  --titlebar-background-focused: var(--color-base-00, #131a24);
  --titlebar-border-color: var(--background-modifier-border, #243347);
  --titlebar-text-color: var(--text-muted, #aeafb0);
  --titlebar-text-color-focused: var(--text-normal, #cdcecf);
  --vault-profile-color: var(--text-normal, #cdcecf);
  --vault-profile-color-hover: var(--vault-profile-color, #cdcecf);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #151d28);
  background-color: var(--tab-container-background, rgb(21, 29, 40));
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(25, 35, 48));
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(21, 29, 40));
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 51, 71);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #151d28);
  background-color: var(--tab-container-background, rgb(21, 29, 40));
  border-left-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(214, 214, 215));
  outline: rgb(214, 214, 215) none 0px;
  text-decoration-color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(205, 206, 207));
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(205, 206, 207));
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(214, 214, 215));
  outline: rgb(214, 214, 215) none 0px;
  text-decoration-color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, rgb(205, 206, 207));
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body del {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(205, 206, 207));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(93, 114, 142);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(84, 175, 176));
  border-color: rgb(84, 175, 176);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(174, 175, 176));
  outline: rgb(174, 175, 176) none 0px;
  text-decoration-color: rgb(174, 175, 176);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(110, 189, 187));
  outline: rgb(110, 189, 187) none 0px;
  text-decoration-color: rgb(110, 189, 187);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(110, 189, 187));
  outline: rgb(110, 189, 187) none 0px;
  text-decoration-color: rgb(110, 189, 187);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(110, 189, 187));
  outline: rgb(110, 189, 187) none 0px;
  text-decoration: underline rgba(84, 175, 176, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(84, 175, 176, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body dt {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(93, 114, 142));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(99, 205, 207, 0.03));
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body table {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: var(--table-text-color, rgb(205, 206, 207));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: var(--table-header-color, rgb(205, 206, 207));
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(21, 29, 40));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-inline-background, rgb(19, 26, 36));
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: var(--code-normal, rgb(205, 206, 207));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(21, 29, 40));
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
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #151d28);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(214, 214, 215);
  border-left-color: rgb(214, 214, 215);
  border-right-color: rgb(214, 214, 215);
  border-top-color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(21, 29, 40));
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(84, 175, 176);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(93, 114, 142);
  border-left-color: rgb(93, 114, 142);
  border-right-color: rgb(93, 114, 142);
  border-top-color: rgb(93, 114, 142);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(25, 35, 48);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(25, 35, 48);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 162, 97);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(93, 114, 142);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 192, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 205, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(201, 79, 109);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(201, 79, 109);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(201, 79, 109);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(201, 79, 109);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 192, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 192, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 121, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(201, 79, 109);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 178, 154);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 178, 154);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 178, 154);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 99, 205, 207);
  background: rgba(99, 205, 207, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(99, 205, 207, 0.25);
  border-left-color: rgba(99, 205, 207, 0.25);
  border-right-color: rgba(99, 205, 207, 0.25);
  border-top-color: rgba(99, 205, 207, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 201, 79, 109);
  background: rgba(201, 79, 109, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(201, 79, 109, 0.25);
  border-left-color: rgba(201, 79, 109, 0.25);
  border-right-color: rgba(201, 79, 109, 0.25);
  border-top-color: rgba(201, 79, 109, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 201, 79, 109);
  background: rgba(201, 79, 109, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(201, 79, 109, 0.25);
  border-left-color: rgba(201, 79, 109, 0.25);
  border-right-color: rgba(201, 79, 109, 0.25);
  border-top-color: rgba(201, 79, 109, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 157, 121, 214);
  background: rgba(157, 121, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(157, 121, 214, 0.25);
  border-left-color: rgba(157, 121, 214, 0.25);
  border-right-color: rgba(157, 121, 214, 0.25);
  border-top-color: rgba(157, 121, 214, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 201, 79, 109);
  background: rgba(201, 79, 109, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(201, 79, 109, 0.25);
  border-left-color: rgba(201, 79, 109, 0.25);
  border-right-color: rgba(201, 79, 109, 0.25);
  border-top-color: rgba(201, 79, 109, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 113, 156, 214);
  background: rgba(113, 156, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 113, 156, 214);
  background: rgba(113, 156, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 244, 162, 97);
  background: rgba(244, 162, 97, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 162, 97, 0.25);
  border-left-color: rgba(244, 162, 97, 0.25);
  border-right-color: rgba(244, 162, 97, 0.25);
  border-top-color: rgba(244, 162, 97, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 129, 178, 154);
  background: rgba(129, 178, 154, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(129, 178, 154, 0.25);
  border-left-color: rgba(129, 178, 154, 0.25);
  border-right-color: rgba(129, 178, 154, 0.25);
  border-top-color: rgba(129, 178, 154, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 99, 205, 207);
  background: rgba(99, 205, 207, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(99, 205, 207, 0.25);
  border-left-color: rgba(99, 205, 207, 0.25);
  border-right-color: rgba(99, 205, 207, 0.25);
  border-top-color: rgba(99, 205, 207, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 113, 156, 214);
  background: rgba(113, 156, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 244, 162, 97);
  background: rgba(244, 162, 97, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 162, 97, 0.25);
  border-left-color: rgba(244, 162, 97, 0.25);
  border-right-color: rgba(244, 162, 97, 0.25);
  border-top-color: rgba(244, 162, 97, 0.25);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(113, 156, 214));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(205, 206, 207);
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
  background-color: rgb(36, 51, 71);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: var(--text-normal, rgb(205, 206, 207));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(25, 35, 48));
  border-bottom-color: rgb(73, 98, 131);
  border-left-color: rgb(73, 98, 131);
  border-right-color: rgb(73, 98, 131);
  border-top-color: rgb(73, 98, 131);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(73, 98, 131);
  border-left-color: rgb(73, 98, 131);
  border-right-color: rgb(73, 98, 131);
  border-top-color: rgb(73, 98, 131);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(21, 29, 40);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(205, 206, 207, 0.067));
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(181, 37%, 51%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(181, 37%, 51%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(181, 37%, 51%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(181, 37%, 51%, 0.15));
  --pill-color: var(--tag-color, hsl(178, 37.74%, 58.65%));
  --pill-color-hover: var(--tag-color-hover, hsl(178, 37.74%, 58.65%));
  --pill-color-remove: var(--tag-color, hsl(178, 37.74%, 58.65%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(178, 37.74%, 58.65%));
  background-color: var(--pill-background, rgba(84, 175, 176, 0.1));
  border-bottom-color: rgba(84, 175, 176, 0.15);
  border-left-color: rgba(84, 175, 176, 0.15);
  border-right-color: rgba(84, 175, 176, 0.15);
  border-top-color: rgba(84, 175, 176, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(110, 189, 187);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 300);
  color: var(--h1-color, rgb(214, 214, 215));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(214, 214, 215));
  font-size: var(--inline-title-size, 44px);
  font-weight: var(--inline-title-weight, 300);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 700);
  color: var(--h2-color, rgb(214, 214, 215));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(214, 214, 215));
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 700);
  color: var(--h3-color, rgb(214, 214, 215));
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 700);
  color: var(--h4-color, rgb(214, 214, 215));
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 700);
  color: var(--h5-color, rgb(214, 214, 215));
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 700);
  color: var(--h6-color, rgb(214, 214, 215));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 113, 156, 214);
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(205, 206, 207, 0.12);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(174, 175, 176));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(174, 175, 176));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(205, 206, 207);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: var(--icon-color, rgb(174, 175, 176));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(21, 29, 40));
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: var(--status-bar-text-color, rgb(174, 175, 176));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(174, 175, 176);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(174, 175, 176));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(174, 175, 176);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(174, 175, 176));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: var(--icon-color, rgb(174, 175, 176));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(174, 175, 176);
  stroke: rgb(174, 175, 176);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(93, 114, 142));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(205, 206, 207));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(21, 29, 40));
  border-color: rgb(205, 206, 207);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(36, 51, 71);
  color: var(--table-header-color, rgb(205, 206, 207));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: var(--text-muted, rgb(174, 175, 176));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(36, 51, 71);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(181, 37%, 51%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(181, 37%, 51%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(181, 37%, 51%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(181, 37%, 51%, 0.15));
  --pill-color: var(--tag-color, hsl(178, 37.74%, 58.65%));
  --pill-color-hover: var(--tag-color-hover, hsl(178, 37.74%, 58.65%));
  --pill-color-remove: var(--tag-color, hsl(178, 37.74%, 58.65%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(178, 37.74%, 58.65%));
  background-color: var(--pill-background, rgba(84, 175, 176, 0.1));
  color: var(--pill-color, rgb(110, 189, 187));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(25, 35, 48));
  color: var(--text-normal, rgb(205, 206, 207));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(21, 29, 40));
  border-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(19, 26, 36));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(205, 206, 207);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(21, 29, 40));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(205, 206, 207));
}

html[saved-theme="dark"] body abbr {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: var(--text-normal, rgb(174, 175, 176));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(21, 29, 40));
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: var(--code-normal, rgb(205, 206, 207));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body sub {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body summary {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body sup {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(84, 175, 176, 0.1));
  border-bottom-color: rgba(84, 175, 176, 0.15);
  border-left-color: rgba(84, 175, 176, 0.15);
  border-right-color: rgba(84, 175, 176, 0.15);
  border-top-color: rgba(84, 175, 176, 0.15);
  color: var(--tag-color, rgb(110, 189, 187));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 185;
  --accent-l: 43%;
  --accent-s: 34%;
  --background-modifier-border: var(--color-base-25, #d3c7bb);
  --background-modifier-border-focus: var(--color-base-35, #a4a2a1);
  --background-modifier-border-hover: var(--color-base-30, #aab0ad);
  --background-modifier-error: var(--color-red, #a5222f);
  --background-modifier-error-hover: var(--color-red, #a5222f);
  --background-modifier-error-rgb: var(--color-red-rgb, 165, 34, 47);
  --background-modifier-form-field: var(--color-base-00, #e4dcd4);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #e4dcd4);
  --background-modifier-success: var(--color-green, #396847);
  --background-modifier-success-rgb: var(--color-green-rgb, 87, 127, 99);
  --background-primary: var(--color-base-10, #f6f2ee);
  --background-primary-alt: var(--color-base-05, #eae3dc);
  --background-secondary: var(--color-base-05, #eae3dc);
  --background-secondary-alt: var(--color-base-05, #eae3dc);
  --bases-cards-background: var(--background-primary, #f6f2ee);
  --bases-cards-cover-background: var(--background-primary-alt, #eae3dc);
  --bases-embed-border-color: var(--background-modifier-border, #d3c7bb);
  --bases-group-heading-property-color: var(--text-muted, #643f61);
  --bases-table-border-color: var(--table-border-color, #d3c7bb);
  --bases-table-cell-background-active: var(--background-primary, #f6f2ee);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #eae3dc);
  --bases-table-cell-background-selected: var(--table-selection, hsla(185, 34%, 43%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #eae3dc);
  --bases-table-header-background: var(--background-primary, #f6f2ee);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  --bases-table-header-color: var(--text-muted, #643f61);
  --bases-table-summary-background: var(--background-primary, #f6f2ee);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  --blockquote-background-color: rgba(var(--color-cyan-rgb), 0.03);
  --blockquote-border-color: var(--interactive-accent, hsl(184, 34.34%, 46.225%));
  --bold-color: var(--color-base-110, #302b5d);
  --callout-bug: var(--color-red-rgb, 165, 34, 47);
  --callout-default: var(--color-blue-rgb, 40, 72, 169);
  --callout-error: var(--color-red-rgb, 165, 34, 47);
  --callout-example: var(--color-purple-rgb, 110, 51, 206);
  --callout-fail: var(--color-red-rgb, 165, 34, 47);
  --callout-important: var(--color-cyan-rgb, 40, 121, 128);
  --callout-info: var(--color-blue-rgb, 40, 72, 169);
  --callout-question: var(--color-orange-rgb, 149, 95, 97);
  --callout-success: var(--color-green-rgb, 87, 127, 99);
  --callout-summary: var(--color-cyan-rgb, 40, 121, 128);
  --callout-tip: var(--color-cyan-rgb, 40, 121, 128);
  --callout-todo: var(--color-blue-rgb, 40, 72, 169);
  --callout-warning: var(--color-yellow-rgb, 172, 84, 2);
  --canvas-background: var(--background-primary, #f6f2ee);
  --canvas-card-label-color: var(--text-faint, #99868a);
  --canvas-color-1: var(--color-red-bright-rgb, 209, 105, 131);
  --canvas-color-2: var(--color-orange-bright-rgb, 246, 176, 121);
  --canvas-color-3: var(--color-yellow-bright-rgb, 224, 201, 137);
  --canvas-color-4: var(--color-green-bright-rgb, 142, 186, 164);
  --canvas-color-5: var(--color-cyan-bright-rgb, 122, 213, 214);
  --canvas-color-6: var(--color-purple-bright-rgb, 186, 161, 226);
  --canvas-dot-pattern: var(--color-base-30, #aab0ad);
  --caret-color: var(--text-normal, #3d2b5a);
  --checkbox-border-color: var(--text-faint, #99868a);
  --checkbox-border-color-hover: var(--text-muted, #643f61);
  --checkbox-color: var(--interactive-accent, hsl(184, 34.34%, 46.225%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(182, 34.68%, 49.45%));
  --checkbox-marker-color: var(--background-primary, #f6f2ee);
  --checklist-done-color: var(--text-muted, #643f61);
  --code-background: var(--color-base-05, #eae3dc);
  --code-border-color: var(--background-modifier-border, #d3c7bb);
  --code-bracket-background: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  --code-comment: var(--text-faint, #837a72);
  --code-function: var(--color-yellow, #ac5402);
  --code-important: var(--color-orange, #955f61);
  --code-inline-background: var(--code-background, #eae3dc);
  --code-keyword: var(--color-pink, #a440b5);
  --code-normal: var(--text-normal, #3d2b5a);
  --code-operator: var(--color-red, #a5222f);
  --code-property: var(--color-cyan, #287980);
  --code-punctuation: var(--text-muted, #643f61);
  --code-string: var(--color-green, #396847);
  --code-tag: var(--color-red, #a5222f);
  --code-value: var(--color-purple, #6e33ce);
  --collapse-icon-color: var(--text-faint, #99868a);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(185, 34%, 43%));
  --color-base-00: #e4dcd4;
  --color-base-05: #eae3dc;
  --color-base-10: #f6f2ee;
  --color-base-100: #3d2b5a;
  --color-base-110: #302b5d;
  --color-base-20: #dbd1dd;
  --color-base-25: #d3c7bb;
  --color-base-30: #aab0ad;
  --color-base-35: #a4a2a1;
  --color-base-40: #9f9496;
  --color-base-50: #99868a;
  --color-base-60: #824d5b;
  --color-base-70: #643f61;
  --color-blue: #2848a9;
  --color-blue-bright: #4863b6;
  --color-blue-bright-rgb: 134, 171, 220;
  --color-blue-dim: #223d90;
  --color-blue-rgb: 40, 72, 169;
  --color-cyan: #287980;
  --color-cyan-bright: #488d93;
  --color-cyan-bright-rgb: 122, 213, 214;
  --color-cyan-dim: #22676d;
  --color-cyan-rgb: 40, 121, 128;
  --color-green: #396847;
  --color-green-bright: #577f63;
  --color-green-bright-rgb: 142, 186, 164;
  --color-green-dim: #30583c;
  --color-green-rgb: 87, 127, 99;
  --color-orange: #955f61;
  --color-orange-bright: #a57779;
  --color-orange-bright-rgb: 246, 176, 121;
  --color-orange-dim: #7f5152;
  --color-orange-rgb: 149, 95, 97;
  --color-pink: #a440b5;
  --color-pink-bright: #b25dc0;
  --color-pink-bright-rgb: 220, 142, 217;
  --color-pink-dim: #8b369a;
  --color-pink-rgb: 164, 64, 181;
  --color-purple: #6e33ce;
  --color-purple-bright: #8452d5;
  --color-purple-bright-rgb: 186, 161, 226;
  --color-purple-dim: #5e2baf;
  --color-purple-rgb: 110, 51, 206;
  --color-red: #a5222f;
  --color-red-bright: #b3434e;
  --color-red-bright-rgb: 209, 105, 131;
  --color-red-dim: #8c1d28;
  --color-red-rgb: 165, 34, 47;
  --color-yellow: #ac5402;
  --color-yellow-bright: #b86e28;
  --color-yellow-bright-rgb: 224, 201, 137;
  --color-yellow-dim: #924702;
  --color-yellow-rgb: 172, 84, 2;
  --dark: var(--text-normal, var(--color-base-100, #3d2b5a));
  --darkgray: var(--text-normal, var(--color-base-100, #3d2b5a));
  --divider-color: var(--background-modifier-border, #d3c7bb);
  --divider-color-hover: var(--interactive-accent, hsl(184, 34.34%, 46.225%));
  --dropdown-background: var(--interactive-normal, #e4dcd4);
  --dropdown-background-hover: var(--interactive-hover, #f6f2ee);
  --file-header-background: var(--background-primary, #f6f2ee);
  --file-header-background-focused: var(--background-primary, #f6f2ee);
  --flair-background: var(--interactive-normal, #e4dcd4);
  --flair-color: var(--text-normal, #3d2b5a);
  --footnote-divider-color: var(--metadata-divider-color, #d3c7bb);
  --footnote-id-color: var(--text-muted, #643f61);
  --footnote-id-color-no-occurrences: var(--text-faint, #99868a);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(61, 43, 90, 0.067));
  --graph-line: var(--color-base-20, #dbd1dd);
  --graph-node: var(--text-muted, #643f61);
  --graph-node-attachment: var(--color-yellow, #e0af0f);
  --graph-node-focused: var(--text-accent, hsl(185, 34%, 43%));
  --graph-node-tag: var(--color-green, #19ae5b);
  --graph-node-unresolved: var(--text-faint, #99868a);
  --graph-text: var(--text-normal, #3d2b5a);
  --gray: var(--text-muted, var(--color-base-70, #643f61));
  --h1-color: var(--heading-color, #302b5d);
  --h1-size: 2.75em;
  --h1-weight: 300;
  --h2-color: var(--heading-color, #302b5d);
  --h2-size: 2.0em;
  --h2-weight: 700;
  --h3-color: var(--heading-color, #302b5d);
  --h3-size: 1.75em;
  --h3-weight: 700;
  --h4-color: var(--heading-color, #302b5d);
  --h4-size: 1.4em;
  --h4-weight: 700;
  --h5-color: var(--heading-color, #302b5d);
  --h5-size: 1.2em;
  --h5-style: italic;
  --h5-weight: 700;
  --h6-color: var(--heading-color, #302b5d);
  --h6-size: 1.0em;
  --h6-style: italic;
  --h6-weight: 700;
  --heading-color: var(--color-base-110, #302b5d);
  --heading-formatting: var(--text-faint, #99868a);
  --hr-color: var(--background-modifier-border, #d3c7bb);
  --hr-thickness: 3px;
  --icon-color: var(--text-muted, #643f61);
  --icon-color-active: var(--text-accent, hsl(185, 34%, 43%));
  --icon-color-focused: var(--text-normal, #3d2b5a);
  --icon-color-hover: var(--text-muted, #643f61);
  --inline-title-color: var(--h1-color, #302b5d);
  --inline-title-size: var(--h1-size, 2.75em);
  --inline-title-weight: var(--h1-weight, 300);
  --input-date-separator: var(--text-faint, #99868a);
  --input-placeholder-color: var(--text-faint, #99868a);
  --interactive-accent: var(--color-accent-1, hsl(184, 34.34%, 46.225%));
  --interactive-accent-hover: var(--color-accent-2, hsl(182, 34.68%, 49.45%));
  --interactive-accent-hsl: var(--color-accent-hsl, 185, 34%, 43%);
  --interactive-hover: var(--color-base-10, #f6f2ee);
  --interactive-normal: var(--color-base-00, #e4dcd4);
  --light: var(--background-primary, var(--color-base-10, #f6f2ee));
  --lightgray: var(--background-secondary, var(--color-base-05, #eae3dc));
  --link-color: var(--text-accent, hsl(185, 34%, 43%));
  --link-color-hover: var(--text-accent-hover, hsl(182, 34.68%, 49.45%));
  --link-external-color: var(--text-accent, hsl(185, 34%, 43%));
  --link-external-color-hover: var(--text-accent-hover, hsl(182, 34.68%, 49.45%));
  --link-unresolved-color: var(--text-accent, hsl(185, 34%, 43%));
  --list-marker-color: var(--text-faint, #99868a);
  --list-marker-color-collapsed: var(--text-accent, hsl(185, 34%, 43%));
  --list-marker-color-hover: var(--text-muted, #643f61);
  --menu-background: var(--background-secondary, #eae3dc);
  --menu-border-color: var(--background-modifier-border-hover, #aab0ad);
  --metadata-border-color: var(--background-modifier-border, #d3c7bb);
  --metadata-divider-color: var(--background-modifier-border, #d3c7bb);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  --metadata-input-text-color: var(--text-normal, #3d2b5a);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  --metadata-label-text-color: var(--text-muted, #643f61);
  --metadata-label-text-color-hover: var(--text-muted, #643f61);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  --modal-background: var(--background-primary, #f6f2ee);
  --modal-border-color: var(--color-base-30, #aab0ad);
  --mono-rgb-0: 228, 220, 212;
  --mono-rgb-100: 61, 43, 90;
  --nav-collapse-icon-color: var(--collapse-icon-color, #99868a);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #99868a);
  --nav-heading-color: var(--text-normal, #3d2b5a);
  --nav-heading-color-collapsed: var(--text-faint, #99868a);
  --nav-heading-color-collapsed-hover: var(--text-muted, #643f61);
  --nav-heading-color-hover: var(--text-normal, #3d2b5a);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(61, 43, 90, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  --nav-item-color: var(--text-muted, #643f61);
  --nav-item-color-active: var(--text-normal, #3d2b5a);
  --nav-item-color-highlighted: var(--text-accent, hsl(185, 34%, 43%));
  --nav-item-color-hover: var(--text-normal, #3d2b5a);
  --nav-item-color-selected: var(--text-normal, #3d2b5a);
  --nav-tag-color: var(--text-faint, #99868a);
  --nav-tag-color-active: var(--text-muted, #643f61);
  --nav-tag-color-hover: var(--text-muted, #643f61);
  --pdf-background: var(--background-primary, #f6f2ee);
  --pdf-page-background: var(--background-primary, #f6f2ee);
  --pdf-sidebar-background: var(--background-primary, #f6f2ee);
  --pill-border-color: var(--background-modifier-border, #d3c7bb);
  --pill-border-color-hover: var(--background-modifier-border-hover, #aab0ad);
  --pill-color: var(--text-muted, #643f61);
  --pill-color-hover: var(--text-normal, #3d2b5a);
  --pill-color-remove: var(--text-faint, #99868a);
  --pill-color-remove-hover: var(--text-accent, hsl(185, 34%, 43%));
  --prompt-background: var(--background-primary, #f6f2ee);
  --raised-background: var(--blur-background, color-mix(in srgb, #f6f2ee 65%, transparent) linear-gradient(#f6f2ee, color-mix(in srgb, #f6f2ee 65%, transparent)));
  --ribbon-background: var(--color-base-00, #e4dcd4);
  --ribbon-background-collapsed: var(--color-base-05, #eae3dc);
  --search-clear-button-color: var(--text-muted, #643f61);
  --search-icon-color: var(--text-muted, #643f61);
  --search-result-background: var(--background-primary, #f6f2ee);
  --secondary: var(--text-accent, var(--color-accent, hsl(185, 34%, 43%)));
  --setting-group-heading-color: var(--text-normal, #3d2b5a);
  --setting-items-background: var(--background-primary-alt, #eae3dc);
  --setting-items-border-color: var(--background-modifier-border, #d3c7bb);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #643f61);
  --shiki-code-background: var(--code-background, #eae3dc);
  --shiki-code-comment: var(--text-faint, #99868a);
  --shiki-code-function: var(--color-green, #396847);
  --shiki-code-important: var(--color-orange, #955f61);
  --shiki-code-keyword: var(--color-pink, #a440b5);
  --shiki-code-normal: var(--text-muted, #643f61);
  --shiki-code-property: var(--color-cyan, #287980);
  --shiki-code-punctuation: var(--text-muted, #643f61);
  --shiki-code-string: var(--color-yellow, #ac5402);
  --shiki-code-value: var(--color-purple, #6e33ce);
  --shiki-gutter-border-color: var(--background-modifier-border, #d3c7bb);
  --shiki-gutter-text-color: var(--text-faint, #99868a);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #643f61);
  --shiki-highlight-neutral: var(--shiki-code-normal, #643f61);
  --shiki-terminal-dots-color: var(--text-faint, #99868a);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #aab0ad);
  --slider-track-background: var(--background-modifier-border, #d3c7bb);
  --status-bar-background: var(--background-secondary, #eae3dc);
  --status-bar-border-color: var(--divider-color, #d3c7bb);
  --status-bar-text-color: var(--text-muted, #643f61);
  --suggestion-background: var(--background-primary, #f6f2ee);
  --sync-avatar-color-1: var(--color-red, #a5222f);
  --sync-avatar-color-2: var(--color-orange, #955f61);
  --sync-avatar-color-3: var(--color-yellow, #ac5402);
  --sync-avatar-color-4: var(--color-green, #396847);
  --sync-avatar-color-5: var(--color-cyan, #287980);
  --sync-avatar-color-6: var(--color-blue, #2848a9);
  --sync-avatar-color-7: var(--color-purple, #6e33ce);
  --sync-avatar-color-8: var(--color-pink, #a440b5);
  --tab-background-active: var(--background-primary, #f6f2ee);
  --tab-container-background: var(--background-secondary, #eae3dc);
  --tab-divider-color: var(--background-modifier-border-hover, #aab0ad);
  --tab-outline-color: var(--divider-color, #d3c7bb);
  --tab-switcher-background: var(--background-secondary, #eae3dc);
  --tab-text-color: var(--text-faint, #99868a);
  --tab-text-color-active: var(--text-muted, #643f61);
  --tab-text-color-focused: var(--text-muted, #643f61);
  --tab-text-color-focused-active: var(--text-muted, #643f61);
  --tab-text-color-focused-active-current: var(--text-normal, #3d2b5a);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(185, 34%, 43%));
  --table-add-button-border-color: var(--background-modifier-border, #d3c7bb);
  --table-border-color: var(--background-modifier-border, #d3c7bb);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(184, 34.34%, 46.225%));
  --table-drag-handle-color: var(--text-faint, #99868a);
  --table-header-background: var(--color-base-05, #eae3dc);
  --table-header-background-hover: var(--color-base-05, #eae3dc);
  --table-header-border-color: var(--table-border-color, #d3c7bb);
  --table-header-color: var(--text-normal, #3d2b5a);
  --table-selection-border-color: var(--interactive-accent, hsl(184, 34.34%, 46.225%));
  --tag-color: var(--text-accent, hsl(185, 34%, 43%));
  --tag-color-hover: var(--text-accent, hsl(185, 34%, 43%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(182, 34.68%, 49.45%)));
  --text-accent: var(--color-accent, hsl(185, 34%, 43%));
  --text-accent-hover: var(--color-accent-2, hsl(182, 34.68%, 49.45%));
  --text-error: var(--color-red, #a5222f);
  --text-faint: var(--color-base-50, #99868a);
  --text-muted: var(--color-base-70, #643f61);
  --text-normal: var(--color-base-100, #3d2b5a);
  --text-success: var(--color-green, #396847);
  --text-warning: var(--color-yellow, #ac5402);
  --titlebar-background: var(--color-base-00, #e4dcd4);
  --titlebar-background-focused: var(--color-base-00, #e4dcd4);
  --titlebar-border-color: var(--background-modifier-border, #d3c7bb);
  --titlebar-text-color: var(--text-muted, #643f61);
  --titlebar-text-color-focused: var(--text-normal, #3d2b5a);
  --vault-profile-color: var(--text-normal, #3d2b5a);
  --vault-profile-color-hover: var(--vault-profile-color, #3d2b5a);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #eae3dc);
  background-color: var(--tab-container-background, rgb(234, 227, 220));
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(246, 242, 238));
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(234, 227, 220));
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(211, 199, 187);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #eae3dc);
  background-color: var(--tab-container-background, rgb(234, 227, 220));
  border-left-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(48, 43, 93));
  outline: rgb(48, 43, 93) none 0px;
  text-decoration-color: rgb(48, 43, 93);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(61, 43, 90));
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(61, 43, 90));
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(48, 43, 93));
  outline: rgb(48, 43, 93) none 0px;
  text-decoration-color: rgb(48, 43, 93);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, rgb(61, 43, 90));
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body del {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(61, 43, 90));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 134, 138);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(77, 153, 158));
  border-color: rgb(77, 153, 158);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(100, 63, 97));
  outline: rgb(100, 63, 97) none 0px;
  text-decoration-color: rgb(100, 63, 97);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(72, 141, 147));
  outline: rgb(72, 141, 147) none 0px;
  text-decoration-color: rgb(72, 141, 147);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(72, 141, 147));
  outline: rgb(72, 141, 147) none 0px;
  text-decoration-color: rgb(72, 141, 147);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(72, 141, 147));
  outline: rgb(72, 141, 147) none 0px;
  text-decoration: underline rgba(72, 141, 147, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(72, 141, 147, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body dt {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ol > li {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ul > li {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(153, 134, 138));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(40, 121, 128, 0.03));
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body table {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: var(--table-text-color, rgb(61, 43, 90));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: var(--table-header-color, rgb(61, 43, 90));
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(234, 227, 220));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-inline-background, rgb(234, 227, 220));
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: var(--code-normal, rgb(61, 43, 90));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(234, 227, 220));
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
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body figcaption {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #eae3dc);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(48, 43, 93);
  border-left-color: rgb(48, 43, 93);
  border-right-color: rgb(48, 43, 93);
  border-top-color: rgb(48, 43, 93);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(234, 227, 220));
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(77, 153, 158);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 134, 138);
  border-left-color: rgb(153, 134, 138);
  border-right-color: rgb(153, 134, 138);
  border-top-color: rgb(153, 134, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 242, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 242, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(149, 95, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 134, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(172, 84, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 121, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 34, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 34, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 34, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 34, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(172, 84, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(172, 84, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(110, 51, 206);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 34, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 104, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 104, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 104, 71);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 40, 121, 128);
  background: rgba(40, 121, 128, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(40, 121, 128, 0.25);
  border-left-color: rgba(40, 121, 128, 0.25);
  border-right-color: rgba(40, 121, 128, 0.25);
  border-top-color: rgba(40, 121, 128, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 165, 34, 47);
  background: rgba(165, 34, 47, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(165, 34, 47, 0.25);
  border-left-color: rgba(165, 34, 47, 0.25);
  border-right-color: rgba(165, 34, 47, 0.25);
  border-top-color: rgba(165, 34, 47, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 165, 34, 47);
  background: rgba(165, 34, 47, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(165, 34, 47, 0.25);
  border-left-color: rgba(165, 34, 47, 0.25);
  border-right-color: rgba(165, 34, 47, 0.25);
  border-top-color: rgba(165, 34, 47, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 110, 51, 206);
  background: rgba(110, 51, 206, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 51, 206, 0.25);
  border-left-color: rgba(110, 51, 206, 0.25);
  border-right-color: rgba(110, 51, 206, 0.25);
  border-top-color: rgba(110, 51, 206, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 165, 34, 47);
  background: rgba(165, 34, 47, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(165, 34, 47, 0.25);
  border-left-color: rgba(165, 34, 47, 0.25);
  border-right-color: rgba(165, 34, 47, 0.25);
  border-top-color: rgba(165, 34, 47, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 40, 72, 169);
  background: rgba(40, 72, 169, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 40, 72, 169);
  background: rgba(40, 72, 169, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 149, 95, 97);
  background: rgba(149, 95, 97, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(149, 95, 97, 0.25);
  border-left-color: rgba(149, 95, 97, 0.25);
  border-right-color: rgba(149, 95, 97, 0.25);
  border-top-color: rgba(149, 95, 97, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 87, 127, 99);
  background: rgba(87, 127, 99, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(87, 127, 99, 0.25);
  border-left-color: rgba(87, 127, 99, 0.25);
  border-right-color: rgba(87, 127, 99, 0.25);
  border-top-color: rgba(87, 127, 99, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 40, 121, 128);
  background: rgba(40, 121, 128, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(40, 121, 128, 0.25);
  border-left-color: rgba(40, 121, 128, 0.25);
  border-right-color: rgba(40, 121, 128, 0.25);
  border-top-color: rgba(40, 121, 128, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 40, 72, 169);
  background: rgba(40, 72, 169, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 172, 84, 2);
  background: rgba(172, 84, 2, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(172, 84, 2, 0.25);
  border-left-color: rgba(172, 84, 2, 0.25);
  border-right-color: rgba(172, 84, 2, 0.25);
  border-top-color: rgba(172, 84, 2, 0.25);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(40, 72, 169));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(61, 43, 90);
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
  background-color: rgb(228, 220, 212);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: var(--text-normal, rgb(61, 43, 90));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(246, 242, 238));
  border-bottom-color: rgb(159, 148, 150);
  border-left-color: rgb(159, 148, 150);
  border-right-color: rgb(159, 148, 150);
  border-top-color: rgb(159, 148, 150);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(159, 148, 150);
  border-left-color: rgb(159, 148, 150);
  border-right-color: rgb(159, 148, 150);
  border-top-color: rgb(159, 148, 150);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(234, 227, 220);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(61, 43, 90, 0.067));
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(185, 34%, 43%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(185, 34%, 43%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(185, 34%, 43%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(185, 34%, 43%, 0.15));
  --pill-color: var(--tag-color, hsl(185, 34%, 43%));
  --pill-color-hover: var(--tag-color-hover, hsl(185, 34%, 43%));
  --pill-color-remove: var(--tag-color, hsl(185, 34%, 43%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(185, 34%, 43%));
  background-color: var(--pill-background, rgba(72, 141, 147, 0.1));
  border-bottom-color: rgba(72, 141, 147, 0.15);
  border-left-color: rgba(72, 141, 147, 0.15);
  border-right-color: rgba(72, 141, 147, 0.15);
  border-top-color: rgba(72, 141, 147, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(72, 141, 147);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 300);
  color: var(--h1-color, rgb(48, 43, 93));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(48, 43, 93));
  font-size: var(--inline-title-size, 44px);
  font-weight: var(--inline-title-weight, 300);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 700);
  color: var(--h2-color, rgb(48, 43, 93));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(48, 43, 93));
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 700);
  color: var(--h3-color, rgb(48, 43, 93));
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 700);
  color: var(--h4-color, rgb(48, 43, 93));
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 700);
  color: var(--h5-color, rgb(48, 43, 93));
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 700);
  color: var(--h6-color, rgb(48, 43, 93));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 40, 72, 169);
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(61, 43, 90, 0.12);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(100, 63, 97));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(100, 63, 97));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(61, 43, 90);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: var(--icon-color, rgb(100, 63, 97));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(234, 227, 220));
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: var(--status-bar-text-color, rgb(100, 63, 97));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(100, 63, 97);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(100, 63, 97));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(100, 63, 97);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(100, 63, 97));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: var(--icon-color, rgb(100, 63, 97));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(100, 63, 97);
  stroke: rgb(100, 63, 97);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(153, 134, 138));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(61, 43, 90));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(246, 242, 238));
  border-color: rgb(61, 43, 90);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(211, 199, 187);
  color: var(--table-header-color, rgb(61, 43, 90));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: var(--text-muted, rgb(100, 63, 97));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(211, 199, 187);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(185, 34%, 43%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(185, 34%, 43%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(185, 34%, 43%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(185, 34%, 43%, 0.15));
  --pill-color: var(--tag-color, hsl(185, 34%, 43%));
  --pill-color-hover: var(--tag-color-hover, hsl(185, 34%, 43%));
  --pill-color-remove: var(--tag-color, hsl(185, 34%, 43%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(185, 34%, 43%));
  background-color: var(--pill-background, rgba(72, 141, 147, 0.1));
  color: var(--pill-color, rgb(72, 141, 147));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(246, 242, 238));
  color: var(--text-normal, rgb(61, 43, 90));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(234, 227, 220));
  border-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(228, 220, 212));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(61, 43, 90);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(234, 227, 220));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(61, 43, 90));
}

html[saved-theme="light"] body abbr {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: var(--text-normal, rgb(100, 63, 97));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(234, 227, 220));
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: var(--code-normal, rgb(61, 43, 90));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body sub {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body summary {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body sup {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(72, 141, 147, 0.1));
  border-bottom-color: rgba(72, 141, 147, 0.15);
  border-left-color: rgba(72, 141, 147, 0.15);
  border-right-color: rgba(72, 141, 147, 0.15);
  border-top-color: rgba(72, 141, 147, 0.15);
  color: var(--tag-color, rgb(72, 141, 147));
}`,
  },
};
