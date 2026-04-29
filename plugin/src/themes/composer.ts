import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "composer",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "obsidian-composer-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 30;
  --accent-l: 65%;
  --accent-s: 40%;
  --background-gradient: linear-gradient(
		155deg,
		var(--background-primary) 0%,
		rgb(38, 45, 54),
		rgb(67, 63, 80)
	);
  --background-modifier-border: var(--color-base-30, rgb(69, 74, 84));
  --background-modifier-border-focus: var(--color-base-40, #4a5059);
  --background-modifier-border-hover: var(--color-base-35, #404650);
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 123, 114);
  --background-modifier-form-field: hsl(
		var(--accent-h),
		var(--accent-s),
		var(--accent-l),
		0.1
	);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #2f343d);
  --background-modifier-message: var(--background-secondary, hsl(225, 15%, 20%));
  --background-modifier-success-rgb: var(--color-green-rgb, 123, 204, 148);
  --background-primary: var(--color-base-00, hsl(215, 22%, 15%));
  --background-primary-alt: var(--color-base-10, hsl(215, 18%, 19%));
  --background-secondary: var(--color-base-20, hsl(225, 15%, 20%));
  --background-secondary-alt: var(--color-base-30, hsl(235, 15%, 28%));
  --bases-cards-background: var(--background-primary, hsl(215, 22%, 15%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(215, 18%, 19%));
  --bases-embed-border-color: var(--background-modifier-border, rgb(69, 74, 84));
  --bases-group-heading-property-color: var(--text-muted, #8d949d);
  --bases-table-border-color: var(--table-border-color, rgb(69, 74, 84));
  --bases-table-cell-background-active: var(--background-primary, hsl(215, 22%, 15%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(215, 18%, 19%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(30, 40%, 65%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(215, 18%, 19%));
  --bases-table-header-background: var(--background-primary, hsl(215, 22%, 15%));
  --bases-table-header-color: var(--text-muted, #8d949d);
  --bases-table-summary-background: var(--background-primary, hsl(215, 22%, 15%));
  --blockquote-background-color: rgba(42, 49, 60, 0.6);
  --blockquote-border-color: var(--interactive-accent, #67594c);
  --blockquote-color: rgb(207, 197, 175);
  --bold-color: #f0f4f8;
  --callout-bug: var(--color-red-rgb, 255, 123, 114);
  --callout-color: transparent;
  --callout-default: var(--color-blue-rgb, 123, 175, 222);
  --callout-error: var(--color-red-rgb, 255, 100, 92);
  --callout-example: var(--color-purple-rgb, 182, 155, 255);
  --callout-fail: var(--color-red-rgb, 255, 123, 114);
  --callout-important: var(--color-cyan-rgb, 123, 204, 214);
  --callout-info: var(--color-blue-rgb, 123, 175, 222);
  --callout-question: var(--color-orange-rgb, 255, 182, 104);
  --callout-radius: var(--radius-s, 8px);
  --callout-success: var(--color-green-rgb, 123, 204, 148);
  --callout-summary: var(--color-cyan-rgb, 123, 204, 214);
  --callout-tip: var(--color-cyan-rgb, 123, 204, 214);
  --callout-todo: var(--color-blue-rgb, 123, 175, 222);
  --callout-warning: var(--color-orange-rgb, 255, 170, 92);
  --canvas-background: var(--background-primary, hsl(215, 22%, 15%));
  --canvas-card-label-color: var(--text-faint, #5a616a);
  --canvas-color-1: var(--color-red-rgb, 255, 123, 114);
  --canvas-color-2: var(--color-orange-rgb, 255, 182, 104);
  --canvas-color-3: var(--color-yellow-rgb, 255, 203, 107);
  --canvas-color-4: var(--color-green-rgb, 123, 204, 148);
  --canvas-color-5: var(--color-cyan-rgb, 123, 204, 214);
  --canvas-color-6: var(--color-purple-rgb, 182, 155, 255);
  --canvas-dot-pattern: var(--color-base-30, #373c46);
  --caret-color: var(--text-normal, #e3e7eb);
  --checkbox-border-color: var(--text-faint, #5a616a);
  --checkbox-border-color-hover: var(--text-muted, #8d949d);
  --checkbox-color: var(--interactive-accent, hsl(30, 40%, 65%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(27, 40.8%, 74.75%));
  --checkbox-marker-color: var(--background-primary, hsl(215, 22%, 15%));
  --checklist-done-color: var(--text-muted, #8d949d);
  --code-background: var(--background-primary-alt, hsl(215, 18%, 19%));
  --code-border-color: var(--background-modifier-border, transparent);
  --code-comment: var(--text-faint, #5a616a);
  --code-normal: var(--text-normal, #ff7b72);
  --code-punctuation: var(--text-muted, #8d949d);
  --codeblock-background: rgba(37, 44, 55, 0.85);
  --codeblock-border: #e5e7eb;
  --codeblock-border-radius: 8px;
  --codeblock-caret-color: rgb(201, 166, 130);
  --collapse-icon-color: var(--text-faint, #5a616a);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --color-base-00: #181c22;
  --color-base-05: #1d2128;
  --color-base-10: #22262e;
  --color-base-100: #e3e7eb;
  --color-base-20: #282d35;
  --color-base-25: #2f343d;
  --color-base-30: #373c46;
  --color-base-35: #404650;
  --color-base-40: #4a5059;
  --color-base-50: #5a616a;
  --color-base-60: #6c737b;
  --color-base-70: #8d949d;
  --color-blue-rgb: 123, 175, 222;
  --color-cyan-rgb: 123, 204, 214;
  --color-green-rgb: 123, 204, 148;
  --color-orange-rgb: 255, 182, 104;
  --color-pink-rgb: 255, 157, 194;
  --color-purple-rgb: 182, 155, 255;
  --color-red-rgb: 255, 123, 114;
  --color-yellow-rgb: 255, 203, 107;
  --dark: var(--text-normal, var(--color-base-100, #e3e7eb));
  --darkgray: var(--text-normal, var(--color-base-100, #e3e7eb));
  --divider-color: var(--background-modifier-border, rgb(69, 74, 84));
  --divider-color-hover: var(--interactive-accent, hsl(30, 40%, 65%));
  --dropdown-background: var(--interactive-normal, #373c46);
  --dropdown-background-hover: var(--interactive-hover, #404650);
  --file-header-background: var(--background-primary, hsl(215, 22%, 15%));
  --file-header-background-focused: var(--background-primary, hsl(215, 22%, 15%));
  --file-margins: var(--file-margins-y) var(--file-margins-x, 24px);
  --flair-background: var(--interactive-normal, #373c46);
  --flair-color: var(--text-normal, #e3e7eb);
  --footnote-divider-color: var(--metadata-divider-color, rgb(69, 74, 84));
  --footnote-id-color: var(--text-muted, #8d949d);
  --footnote-id-color-no-occurrences: var(--text-faint, #5a616a);
  --footnote-line-height: var(--line-height-normal, 1.7);
  --graph-node: var(--text-muted, #8d949d);
  --graph-node-focused: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --graph-node-unresolved: var(--text-faint, #5a616a);
  --graph-text: var(--text-normal, #e3e7eb);
  --gray: var(--text-muted, var(--color-base-70, #8d949d));
  --h1-color: #e2e6eb;
  --h1-indicator-color: var(--h1-color, #e2e6eb);
  --h1-size: 1.69em;
  --h2-color: #c5cad4;
  --h2-indicator-color: var(--h2-color, #c5cad4);
  --h2-size: 1.51em;
  --h3-color: #a8aeb9;
  --h3-indicator-color: var(--h3-color, #a8aeb9);
  --h3-size: 1.35em;
  --h4-color: #8f96a1;
  --h4-indicator-color: var(--h4-color, #8f96a1);
  --h4-size: 1.21em;
  --h5-color: #787f8a;
  --h5-indicator-color: var(--h5-color, #787f8a);
  --h5-line-height: var(--line-height-normal, 1.7);
  --h5-size: 1.1em;
  --h6-color: #666d78;
  --h6-indicator-color: var(--h6-color, #666d78);
  --h6-line-height: var(--line-height-normal, 1.7);
  --header-active-bg: rgba(255, 255, 255, 0.05);
  --header-height: 36px;
  --heading-formatting: var(--text-faint, #5a616a);
  --heading-indicator-spacing: 6px;
  --heading-spacing: calc(var(--p-spacing)*1.8);
  --hr-color: var(--background-modifier-border, rgb(69, 74, 84));
  --icon-color: var(--text-muted, #8d949d);
  --icon-color-active: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --icon-color-focused: var(--text-normal, #e3e7eb);
  --icon-color-hover: var(--text-muted, #8d949d);
  --inline-code-background: hsla(204, 15%, 25%, 0.4);
  --inline-code-normal: #ff7b72;
  --inline-title-color: var(--text-normal, #e3e7eb);
  --inline-title-size: var(--h1-size, 1.6rem);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #5a616a);
  --input-placeholder-color: var(--text-faint, #5a616a);
  --interactive-accent: var(--color-accent, hsl(30, 40%, 65%));
  --interactive-accent-hover: var(--color-accent-1, hsl(27, 40.8%, 74.75%));
  --interactive-accent-hsl: var(--color-accent-hsl, 30, 40%, 65%);
  --interactive-hover: var(--color-base-35, #404650);
  --interactive-normal: var(--color-base-30, #373c46);
  --light: var(--background-primary, var(--color-base-00, hsl(215, 22%, 15%)));
  --lightgray: var(--background-secondary, var(--color-base-20, hsl(225, 15%, 20%)));
  --line-height-normal: var(--paragraph-line-height, 1.7);
  --link-color: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --link-color-hover: var(--text-accent-hover, hsl(25, 42%, 83.85%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --link-external-color-hover: var(--text-accent-hover, hsl(25, 42%, 83.85%));
  --link-unresolved-color: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --list-marker-color: var(--text-faint, #5a616a);
  --list-marker-color-collapsed: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --list-marker-color-hover: var(--text-muted, #8d949d);
  --list-spacing: 0.225em;
  --menu-background: var(--background-secondary, hsl(225, 15%, 20%));
  --menu-border-color: var(--background-modifier-border-hover, #404650);
  --metadata-border-color: var(--background-modifier-border, rgb(69, 74, 84));
  --metadata-divider-color: var(--background-modifier-border, rgb(69, 74, 84));
  --metadata-input-font-size: var(--font-smaller, 14px);
  --metadata-input-text-color: var(--text-normal, #e3e7eb);
  --metadata-label-text-color: var(--text-muted, #8d949d);
  --metadata-label-text-color-hover: var(--text-muted, #8d949d);
  --mod-left-ribbon-background: transparent;
  --mod-left-ribbon-background-collapsed: transparent;
  --mod-left-split-background: transparent;
  --mod-right-split-background: transparent;
  --mod-root-background: transparent;
  --mod-root-border: 0px 1px 0px 1px solid var(--background-modifier-border);
  --mod-root-header-background: transparent;
  --mod-root-header-margin: 0px 0px 4px 0px;
  --modal-background: var(--background-primary, hsl(215, 22%, 15%));
  --modal-bg-blur: 3px;
  --nav-button-container-bg: rgba(255, 255, 255, 0.03);
  --nav-collapse-icon-color: var(--collapse-icon-color, #5a616a);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #5a616a);
  --nav-heading-color: var(--text-normal, #e3e7eb);
  --nav-heading-color-collapsed: var(--text-faint, #5a616a);
  --nav-heading-color-collapsed-hover: var(--text-muted, #8d949d);
  --nav-heading-color-hover: var(--text-normal, #e3e7eb);
  --nav-indentation-guide-color: var(--indentation-guide-color, transparent);
  --nav-item-color: var(--text-muted, #8d949d);
  --nav-item-color-active: var(--text-normal, #e3e7eb);
  --nav-item-color-highlighted: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --nav-item-color-hover: var(--text-normal, #e3e7eb);
  --nav-item-color-selected: var(--text-normal, #e3e7eb);
  --nav-tag-color: var(--text-faint, #5a616a);
  --nav-tag-color-active: var(--text-muted, #8d949d);
  --nav-tag-color-hover: var(--text-muted, #8d949d);
  --outline-collapsed-icon-opacity: 1;
  --paragraph-letter-spacing: 0.035em;
  --paragraph-line-height: 1.7;
  --paragraph-word-spacing: 0.035em;
  --pdf-background: var(--background-primary, hsl(215, 22%, 15%));
  --pdf-page-background: var(--background-primary, hsl(215, 22%, 15%));
  --pdf-sidebar-background: var(--background-primary, hsl(215, 22%, 15%));
  --pill-border-color: var(--background-modifier-border, rgb(69, 74, 84));
  --pill-border-color-hover: var(--background-modifier-border-hover, #404650);
  --pill-color: var(--text-muted, #8d949d);
  --pill-color-hover: var(--text-normal, #e3e7eb);
  --pill-color-remove: var(--text-faint, #5a616a);
  --pill-color-remove-hover: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --prompt-background: var(--background-primary, hsl(215, 22%, 15%));
  --raised-background: var(--blur-background, color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent)));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 0px);
  --root-workspace-background: transparent;
  --root-workspace-margin-spacing: 16px;
  --root-workspace-padding-bottom: 28px;
  --root-workspace-radius: var(--radius-m, 8px);
  --root-workspace-shadow: var(--background-modifier-border) 0px 0px 3px 0px,
		var(--background-modifier-border) 0px 1px 2px 0px;
  --search-clear-button-color: var(--text-muted, #8d949d);
  --search-icon-color: var(--text-muted, #8d949d);
  --search-result-background: var(--background-primary, hsl(215, 22%, 15%));
  --secondary: var(--text-accent, var(--color-accent-1, hsl(27, 40.8%, 74.75%)));
  --setting-group-heading-color: var(--text-normal, #e3e7eb);
  --setting-items-background: var(--background-primary-alt, hsl(215, 18%, 19%));
  --setting-items-border-color: var(--background-modifier-border, rgb(69, 74, 84));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #8d949d);
  --shiki-code-background: var(--code-background, hsl(215, 18%, 19%));
  --shiki-code-comment: var(--text-faint, #5a616a);
  --shiki-code-normal: var(--text-muted, #8d949d);
  --shiki-code-punctuation: var(--text-muted, #8d949d);
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(69, 74, 84));
  --shiki-gutter-text-color: var(--text-faint, #5a616a);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #8d949d);
  --shiki-highlight-neutral: var(--shiki-code-normal, #8d949d);
  --shiki-terminal-dots-color: var(--text-faint, #5a616a);
  --shiki-tooltip-background: var(--background-modifier-message, hsl(225, 15%, 20%));
  --side-dock-actions-border-color: var(--background-modifier-border, rgb(69, 74, 84));
  --side-dock-actions-shadow: var(--background-modifier-border) 0px 1px 2px
			0px,
		var(--background-modifier-border) 0px 0px 0px 1px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, #404650);
  --slider-track-background: var(--background-modifier-border, rgb(69, 74, 84));
  --status-bar-background: var(--background-secondary, hsl(225, 15%, 20%));
  --status-bar-border-color: var(--divider-color, rgb(69, 74, 84));
  --status-bar-text-color: var(--text-muted, #8d949d);
  --suggestion-background: var(--background-primary, hsl(215, 22%, 15%));
  --suggesttion-highlight-color: var(--code-normal, #ff7b72);
  --tab-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, #404650);
  --tab-outline-color: var(--divider-color, rgb(69, 74, 84));
  --tab-stacked-header-width: var(--header-height, 36px);
  --tab-switcher-background: var(--background-secondary, hsl(225, 15%, 20%));
  --tab-text-color: var(--text-faint, #5a616a);
  --tab-text-color-active: var(--text-normal, #e3e7eb);
  --tab-text-color-focused: var(--text-faint, #5a616a);
  --tab-text-color-focused-active: var(--text-normal, #e3e7eb);
  --tab-text-color-focused-active-current: var(--text-normal, #e3e7eb);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --table-add-button-border-color: var(--background-modifier-border, rgb(69, 74, 84));
  --table-border-color: var(--background-modifier-border, rgb(69, 74, 84));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(30, 40%, 65%));
  --table-drag-handle-color: var(--text-faint, #5a616a);
  --table-header-border-color: var(--table-border-color, rgb(69, 74, 84));
  --table-header-color: var(--text-normal, #e3e7eb);
  --table-selection-border-color: var(--interactive-accent, hsl(30, 40%, 65%));
  --tag-border-width: 1px;
  --tag-color: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --tag-color-hover: var(--text-accent, hsl(27, 40.8%, 74.75%));
  --tag-padding-y: 0.2em;
  --tag-size: var(--font-smaller, 0.8em);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(25, 42%, 83.85%)));
  --text-accent: var(--color-accent-1, hsl(27, 40.8%, 74.75%));
  --text-accent-hover: var(--color-accent-2, hsl(25, 42%, 83.85%));
  --text-faint: var(--color-base-50, #5a616a);
  --text-highlight-background: hsla(38, 27%, 54%, 0.5);
  --text-highlight-border-color: hsl(31, 48%, 66%);
  --text-highlight-color: hsl(40, 20%, 90%);
  --text-muted: var(--color-base-70, #8d949d);
  --text-normal: var(--color-base-100, #e3e7eb);
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, rgb(69, 74, 84));
  --titlebar-text-color: var(--text-muted, #8d949d);
  --titlebar-text-color-focused: var(--text-normal, #e3e7eb);
  --traffic-lights-offset-x: var(--header-height, 36px);
  --traffic-lights-offset-y: var(--header-height, 36px);
  --vault-profile-color: var(--text-normal, #e3e7eb);
  --vault-profile-color-hover: var(--vault-profile-color, #e3e7eb);
  --workspace-header-background: transparent;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--mod-left-split-background, rgba(0, 0, 0, 0));
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(69, 74, 84);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--mod-right-split-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(69, 74, 84);
  color: rgb(227, 231, 235);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --background-gradient: linear-gradient(
		155deg,
		hsl(215, 22%, 15%) 0%,
		rgb(38, 45, 54),
		rgb(67, 63, 80)
	);
  --background-modifier-active-hover: hsla(30, 40%, 65%, 0.1);
  --background-modifier-border: rgb(69, 74, 84);
  --background-modifier-border-focus: #4a5059;
  --background-modifier-border-hover: #404650;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 255, 123, 114;
  --background-modifier-form-field: #2f343d;
  --background-modifier-form-field-hover: #2f343d;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-message: hsl(225, 15%, 20%);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 123, 204, 148;
  --background-primary: hsl(215, 22%, 15%);
  --background-primary-alt: hsl(215, 18%, 19%);
  --background-secondary: hsl(225, 15%, 20%);
  --background-secondary-alt: hsl(235, 15%, 28%);
  --blockquote-border-color: #67594c;
  --blur-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 123, 114;
  --callout-default: 123, 175, 222;
  --callout-error: 255, 100, 92;
  --callout-example: 182, 155, 255;
  --callout-fail: 255, 123, 114;
  --callout-important: 123, 204, 214;
  --callout-info: 123, 175, 222;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255, 182, 104;
  --callout-radius: 8px;
  --callout-success: 123, 204, 148;
  --callout-summary: 123, 204, 214;
  --callout-tip: 123, 204, 214;
  --callout-title-weight: 600;
  --callout-todo: 123, 175, 222;
  --callout-warning: 255, 170, 92;
  --canvas-background: hsl(215, 22%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #373c46;
  --caret-color: #e3e7eb;
  --checkbox-border-color: #5a616a;
  --checkbox-border-color-hover: #8d949d;
  --checkbox-color: hsl(30, 40%, 65%);
  --checkbox-color-hover: hsl(27, 40.8%, 74.75%);
  --checkbox-marker-color: hsl(215, 22%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #8d949d;
  --clickable-icon-radius: 4px;
  --code-background: hsl(215, 18%, 19%);
  --code-border-color: transparent;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5a616a;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #ff7b72;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #8d949d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #5a616a;
  --collapse-icon-color-collapsed: hsl(27, 40.8%, 74.75%);
  --color-accent: hsl(30, 40%, 65%);
  --color-accent-1: hsl(27, 40.8%, 74.75%);
  --color-accent-2: hsl(25, 42%, 83.85%);
  --color-accent-hsl: 30, 40%, 65%;
  --divider-color: rgb(69, 74, 84);
  --divider-color-hover: hsl(30, 40%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #373c46;
  --dropdown-background-hover: #404650;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #373c46;
  --flair-color: #e3e7eb;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #404650;
  --graph-node: #8d949d;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(27, 40.8%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #5a616a;
  --graph-text: #e3e7eb;
  --h1-indicator-color: #e2e6eb;
  --h2-indicator-color: #c5cad4;
  --h3-indicator-color: #a8aeb9;
  --h4-indicator-color: #8f96a1;
  --h5-indicator-color: #787f8a;
  --h5-line-height: 1.7;
  --h6-indicator-color: #666d78;
  --h6-line-height: 1.7;
  --heading-formatting: #5a616a;
  --heading-spacing: 1.8rem;
  --hr-color: rgb(69, 74, 84);
  --interactive-accent: hsl(30, 40%, 65%);
  --interactive-accent-hover: hsl(27, 40.8%, 74.75%);
  --interactive-accent-hsl: 30, 40%, 65%;
  --interactive-hover: #404650;
  --interactive-normal: #373c46;
  --line-height-normal: 1.7;
  --link-color: hsl(27, 40.8%, 74.75%);
  --link-color-hover: hsl(25, 42%, 83.85%);
  --link-external-color: hsl(27, 40.8%, 74.75%);
  --link-external-color-hover: hsl(25, 42%, 83.85%);
  --link-unresolved-color: hsl(27, 40.8%, 74.75%);
  --link-unresolved-decoration-color: hsla(30, 40%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(225, 15%, 20%);
  --menu-border-color: #404650;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mod-root-border: 0px 1px 0px 1px solid rgb(69, 74, 84);
  --pdf-background: hsl(215, 22%, 15%);
  --pdf-page-background: hsl(215, 22%, 15%);
  --pdf-shadow: 0 0 0 1px rgb(69, 74, 84);
  --pdf-sidebar-background: hsl(215, 22%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 74, 84);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: rgb(69, 74, 84) 0px 0px 3px 0px,
		rgb(69, 74, 84) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #8d949d;
  --search-icon-color: #8d949d;
  --search-result-background: hsl(215, 22%, 15%);
  --setting-group-heading-color: #e3e7eb;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(215, 18%, 19%);
  --setting-items-border-color: rgb(69, 74, 84);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #8d949d;
  --shiki-code-background: hsl(215, 18%, 19%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #5a616a;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8d949d;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8d949d;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgb(69, 74, 84);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #5a616a;
  --shiki-gutter-text-color-highlight: #8d949d;
  --shiki-highlight-green: rgba(123, 204, 148, 0.5);
  --shiki-highlight-green-background: rgba(123, 204, 148, 0.1);
  --shiki-highlight-neutral: #8d949d;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 123, 114, 0.5);
  --shiki-highlight-red-background: rgba(255, 123, 114, 0.1);
  --shiki-terminal-dots-color: #5a616a;
  --shiki-tooltip-background: hsl(225, 15%, 20%);
  --side-dock-actions-border-color: rgb(69, 74, 84);
  --side-dock-actions-shadow: rgb(69, 74, 84) 0px 1px 2px
			0px,
		rgb(69, 74, 84) 0px 0px 0px 1px;
  --suggestion-background: hsl(215, 22%, 15%);
  --suggesttion-highlight-color: #ff7b72;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgba(255, 255, 255, 0.067);
  --tab-divider-color: #404650;
  --tab-font-size: 13px;
  --tab-outline-color: rgb(69, 74, 84);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: hsl(225, 15%, 20%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(225, 15%, 20%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(30, 40%, 65%);
  --tab-text-color: #5a616a;
  --tab-text-color-active: #e3e7eb;
  --tab-text-color-focused: #5a616a;
  --tab-text-color-focused-active: #e3e7eb;
  --tab-text-color-focused-active-current: #e3e7eb;
  --tab-text-color-focused-highlighted: hsl(27, 40.8%, 74.75%);
  --table-add-button-border-color: rgb(69, 74, 84);
  --table-add-button-border-width: 1px;
  --table-border-color: rgb(69, 74, 84);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(30, 40%, 65%);
  --table-drag-handle-color: #5a616a;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgb(69, 74, 84);
  --table-header-border-width: 1px;
  --table-header-color: #e3e7eb;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(30, 40%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(30, 40%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(30, 40%, 65%, 0.1);
  --tag-background-hover: hsla(30, 40%, 65%, 0.2);
  --tag-border-color: hsla(30, 40%, 65%, 0.15);
  --tag-border-color-hover: hsla(30, 40%, 65%, 0.15);
  --tag-color: hsl(27, 40.8%, 74.75%);
  --tag-color-hover: hsl(27, 40.8%, 74.75%);
  --tag-size: 0.8em;
  --text-accent: hsl(27, 40.8%, 74.75%);
  --text-accent-hover: hsl(25, 42%, 83.85%);
  --text-error: #fb464c;
  --text-faint: #5a616a;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #8d949d;
  --text-normal: #e3e7eb;
  --text-selection: hsla(30, 40%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(226, 230, 235);
  border-bottom-color: rgb(226, 230, 235);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(226, 230, 235);
  border-left-width: 0px;
  border-right-color: rgb(226, 230, 235);
  border-right-width: 0px;
  border-top-color: rgb(226, 230, 235);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(226, 230, 235));
  content: " ";
  font-family: var(--h1-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 27.04px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.4056px);
  line-height: var(--h1-line-height, 32.448px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -2.704);
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(240, 244, 248));
  outline: rgb(240, 244, 248) none 0px;
  text-decoration-color: rgb(240, 244, 248);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(227, 231, 235));
  outline: rgb(227, 231, 235) none 0px;
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(227, 231, 235));
  outline: rgb(227, 231, 235) none 0px;
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(240, 244, 248));
  outline: rgb(240, 244, 248) none 0px;
  text-decoration-color: rgb(240, 244, 248);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-background, rgba(169, 146, 106, 0.5));
  color: var(--text-highlight-color, rgb(235, 231, 224));
  outline: rgb(235, 231, 224) none 0px;
  text-decoration-color: rgb(235, 231, 224);
}

html[saved-theme="dark"] body del {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(227, 231, 235));
}

html[saved-theme="dark"] body h2 {
  --background-gradient: linear-gradient(
		155deg,
		hsl(215, 22%, 15%) 0%,
		rgb(38, 45, 54),
		rgb(67, 63, 80)
	);
  --background-modifier-active-hover: hsla(30, 40%, 65%, 0.1);
  --background-modifier-border: rgb(69, 74, 84);
  --background-modifier-border-focus: #4a5059;
  --background-modifier-border-hover: #404650;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 255, 123, 114;
  --background-modifier-form-field: #2f343d;
  --background-modifier-form-field-hover: #2f343d;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-message: hsl(225, 15%, 20%);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 123, 204, 148;
  --background-primary: hsl(215, 22%, 15%);
  --background-primary-alt: hsl(215, 18%, 19%);
  --background-secondary: hsl(225, 15%, 20%);
  --background-secondary-alt: hsl(235, 15%, 28%);
  --blockquote-border-color: #67594c;
  --blur-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 123, 114;
  --callout-default: 123, 175, 222;
  --callout-error: 255, 100, 92;
  --callout-example: 182, 155, 255;
  --callout-fail: 255, 123, 114;
  --callout-important: 123, 204, 214;
  --callout-info: 123, 175, 222;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255, 182, 104;
  --callout-radius: 8px;
  --callout-success: 123, 204, 148;
  --callout-summary: 123, 204, 214;
  --callout-tip: 123, 204, 214;
  --callout-title-weight: 600;
  --callout-todo: 123, 175, 222;
  --callout-warning: 255, 170, 92;
  --canvas-background: hsl(215, 22%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #373c46;
  --caret-color: #e3e7eb;
  --checkbox-border-color: #5a616a;
  --checkbox-border-color-hover: #8d949d;
  --checkbox-color: hsl(30, 40%, 65%);
  --checkbox-color-hover: hsl(27, 40.8%, 74.75%);
  --checkbox-marker-color: hsl(215, 22%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #8d949d;
  --clickable-icon-radius: 4px;
  --code-background: hsl(215, 18%, 19%);
  --code-border-color: transparent;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5a616a;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #ff7b72;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #8d949d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #5a616a;
  --collapse-icon-color-collapsed: hsl(27, 40.8%, 74.75%);
  --color-accent: hsl(30, 40%, 65%);
  --color-accent-1: hsl(27, 40.8%, 74.75%);
  --color-accent-2: hsl(25, 42%, 83.85%);
  --color-accent-hsl: 30, 40%, 65%;
  --divider-color: rgb(69, 74, 84);
  --divider-color-hover: hsl(30, 40%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #373c46;
  --dropdown-background-hover: #404650;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #373c46;
  --flair-color: #e3e7eb;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h2-weight, 680);
  --graph-line: #404650;
  --graph-node: #8d949d;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(27, 40.8%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #5a616a;
  --graph-text: #e3e7eb;
  --h1-indicator-color: #e2e6eb;
  --h2-indicator-color: #c5cad4;
  --h3-indicator-color: #a8aeb9;
  --h4-indicator-color: #8f96a1;
  --h5-indicator-color: #787f8a;
  --h5-line-height: 1.7;
  --h6-indicator-color: #666d78;
  --h6-line-height: 1.7;
  --heading-formatting: #5a616a;
  --heading-spacing: 1.8rem;
  --hr-color: rgb(69, 74, 84);
  --interactive-accent: hsl(30, 40%, 65%);
  --interactive-accent-hover: hsl(27, 40.8%, 74.75%);
  --interactive-accent-hsl: 30, 40%, 65%;
  --interactive-hover: #404650;
  --interactive-normal: #373c46;
  --line-height-normal: 1.7;
  --link-color: hsl(27, 40.8%, 74.75%);
  --link-color-hover: hsl(25, 42%, 83.85%);
  --link-external-color: hsl(27, 40.8%, 74.75%);
  --link-external-color-hover: hsl(25, 42%, 83.85%);
  --link-unresolved-color: hsl(27, 40.8%, 74.75%);
  --link-unresolved-decoration-color: hsla(30, 40%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(225, 15%, 20%);
  --menu-border-color: #404650;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mod-root-border: 0px 1px 0px 1px solid rgb(69, 74, 84);
  --pdf-background: hsl(215, 22%, 15%);
  --pdf-page-background: hsl(215, 22%, 15%);
  --pdf-shadow: 0 0 0 1px rgb(69, 74, 84);
  --pdf-sidebar-background: hsl(215, 22%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 74, 84);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: rgb(69, 74, 84) 0px 0px 3px 0px,
		rgb(69, 74, 84) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #8d949d;
  --search-icon-color: #8d949d;
  --search-result-background: hsl(215, 22%, 15%);
  --setting-group-heading-color: #e3e7eb;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(215, 18%, 19%);
  --setting-items-border-color: rgb(69, 74, 84);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #8d949d;
  --shiki-code-background: hsl(215, 18%, 19%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #5a616a;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8d949d;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8d949d;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgb(69, 74, 84);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #5a616a;
  --shiki-gutter-text-color-highlight: #8d949d;
  --shiki-highlight-green: rgba(123, 204, 148, 0.5);
  --shiki-highlight-green-background: rgba(123, 204, 148, 0.1);
  --shiki-highlight-neutral: #8d949d;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 123, 114, 0.5);
  --shiki-highlight-red-background: rgba(255, 123, 114, 0.1);
  --shiki-terminal-dots-color: #5a616a;
  --shiki-tooltip-background: hsl(225, 15%, 20%);
  --side-dock-actions-border-color: rgb(69, 74, 84);
  --side-dock-actions-shadow: rgb(69, 74, 84) 0px 1px 2px
			0px,
		rgb(69, 74, 84) 0px 0px 0px 1px;
  --suggestion-background: hsl(215, 22%, 15%);
  --suggesttion-highlight-color: #ff7b72;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgba(255, 255, 255, 0.067);
  --tab-divider-color: #404650;
  --tab-font-size: 13px;
  --tab-outline-color: rgb(69, 74, 84);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: hsl(225, 15%, 20%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(225, 15%, 20%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(30, 40%, 65%);
  --tab-text-color: #5a616a;
  --tab-text-color-active: #e3e7eb;
  --tab-text-color-focused: #5a616a;
  --tab-text-color-focused-active: #e3e7eb;
  --tab-text-color-focused-active-current: #e3e7eb;
  --tab-text-color-focused-highlighted: hsl(27, 40.8%, 74.75%);
  --table-add-button-border-color: rgb(69, 74, 84);
  --table-add-button-border-width: 1px;
  --table-border-color: rgb(69, 74, 84);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(30, 40%, 65%);
  --table-drag-handle-color: #5a616a;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgb(69, 74, 84);
  --table-header-border-width: 1px;
  --table-header-color: #e3e7eb;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(30, 40%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(30, 40%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(30, 40%, 65%, 0.1);
  --tag-background-hover: hsla(30, 40%, 65%, 0.2);
  --tag-border-color: hsla(30, 40%, 65%, 0.15);
  --tag-border-color-hover: hsla(30, 40%, 65%, 0.15);
  --tag-color: hsl(27, 40.8%, 74.75%);
  --tag-color-hover: hsl(27, 40.8%, 74.75%);
  --tag-size: 0.8em;
  --text-accent: hsl(27, 40.8%, 74.75%);
  --text-accent-hover: hsl(25, 42%, 83.85%);
  --text-error: #fb464c;
  --text-faint: #5a616a;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #8d949d;
  --text-normal: #e3e7eb;
  --text-selection: hsla(30, 40%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(197, 202, 212);
  border-bottom-color: rgb(197, 202, 212);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(197, 202, 212);
  border-left-width: 0px;
  border-right-color: rgb(197, 202, 212);
  border-right-width: 0px;
  border-top-color: rgb(197, 202, 212);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(197, 202, 212));
  content: " ";
  font-family: var(--h2-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 24.16px);
  font-weight: var(--font-weight, 680);
  letter-spacing: var(--h2-letter-spacing, -0.26576px);
  line-height: var(--h2-line-height, 28.992px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -2.416);
}

html[saved-theme="dark"] body h3 {
  --background-gradient: linear-gradient(
		155deg,
		hsl(215, 22%, 15%) 0%,
		rgb(38, 45, 54),
		rgb(67, 63, 80)
	);
  --background-modifier-active-hover: hsla(30, 40%, 65%, 0.1);
  --background-modifier-border: rgb(69, 74, 84);
  --background-modifier-border-focus: #4a5059;
  --background-modifier-border-hover: #404650;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 255, 123, 114;
  --background-modifier-form-field: #2f343d;
  --background-modifier-form-field-hover: #2f343d;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-message: hsl(225, 15%, 20%);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 123, 204, 148;
  --background-primary: hsl(215, 22%, 15%);
  --background-primary-alt: hsl(215, 18%, 19%);
  --background-secondary: hsl(225, 15%, 20%);
  --background-secondary-alt: hsl(235, 15%, 28%);
  --blockquote-border-color: #67594c;
  --blur-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 123, 114;
  --callout-default: 123, 175, 222;
  --callout-error: 255, 100, 92;
  --callout-example: 182, 155, 255;
  --callout-fail: 255, 123, 114;
  --callout-important: 123, 204, 214;
  --callout-info: 123, 175, 222;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255, 182, 104;
  --callout-radius: 8px;
  --callout-success: 123, 204, 148;
  --callout-summary: 123, 204, 214;
  --callout-tip: 123, 204, 214;
  --callout-title-weight: 600;
  --callout-todo: 123, 175, 222;
  --callout-warning: 255, 170, 92;
  --canvas-background: hsl(215, 22%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #373c46;
  --caret-color: #e3e7eb;
  --checkbox-border-color: #5a616a;
  --checkbox-border-color-hover: #8d949d;
  --checkbox-color: hsl(30, 40%, 65%);
  --checkbox-color-hover: hsl(27, 40.8%, 74.75%);
  --checkbox-marker-color: hsl(215, 22%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #8d949d;
  --clickable-icon-radius: 4px;
  --code-background: hsl(215, 18%, 19%);
  --code-border-color: transparent;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5a616a;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #ff7b72;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #8d949d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #5a616a;
  --collapse-icon-color-collapsed: hsl(27, 40.8%, 74.75%);
  --color-accent: hsl(30, 40%, 65%);
  --color-accent-1: hsl(27, 40.8%, 74.75%);
  --color-accent-2: hsl(25, 42%, 83.85%);
  --color-accent-hsl: 30, 40%, 65%;
  --divider-color: rgb(69, 74, 84);
  --divider-color-hover: hsl(30, 40%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #373c46;
  --dropdown-background-hover: #404650;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #373c46;
  --flair-color: #e3e7eb;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h3-weight, 660);
  --graph-line: #404650;
  --graph-node: #8d949d;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(27, 40.8%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #5a616a;
  --graph-text: #e3e7eb;
  --h1-indicator-color: #e2e6eb;
  --h2-indicator-color: #c5cad4;
  --h3-indicator-color: #a8aeb9;
  --h4-indicator-color: #8f96a1;
  --h5-indicator-color: #787f8a;
  --h5-line-height: 1.7;
  --h6-indicator-color: #666d78;
  --h6-line-height: 1.7;
  --heading-formatting: #5a616a;
  --heading-spacing: 1.8rem;
  --hr-color: rgb(69, 74, 84);
  --interactive-accent: hsl(30, 40%, 65%);
  --interactive-accent-hover: hsl(27, 40.8%, 74.75%);
  --interactive-accent-hsl: 30, 40%, 65%;
  --interactive-hover: #404650;
  --interactive-normal: #373c46;
  --line-height-normal: 1.7;
  --link-color: hsl(27, 40.8%, 74.75%);
  --link-color-hover: hsl(25, 42%, 83.85%);
  --link-external-color: hsl(27, 40.8%, 74.75%);
  --link-external-color-hover: hsl(25, 42%, 83.85%);
  --link-unresolved-color: hsl(27, 40.8%, 74.75%);
  --link-unresolved-decoration-color: hsla(30, 40%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(225, 15%, 20%);
  --menu-border-color: #404650;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mod-root-border: 0px 1px 0px 1px solid rgb(69, 74, 84);
  --pdf-background: hsl(215, 22%, 15%);
  --pdf-page-background: hsl(215, 22%, 15%);
  --pdf-shadow: 0 0 0 1px rgb(69, 74, 84);
  --pdf-sidebar-background: hsl(215, 22%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 74, 84);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: rgb(69, 74, 84) 0px 0px 3px 0px,
		rgb(69, 74, 84) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #8d949d;
  --search-icon-color: #8d949d;
  --search-result-background: hsl(215, 22%, 15%);
  --setting-group-heading-color: #e3e7eb;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(215, 18%, 19%);
  --setting-items-border-color: rgb(69, 74, 84);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #8d949d;
  --shiki-code-background: hsl(215, 18%, 19%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #5a616a;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8d949d;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8d949d;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgb(69, 74, 84);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #5a616a;
  --shiki-gutter-text-color-highlight: #8d949d;
  --shiki-highlight-green: rgba(123, 204, 148, 0.5);
  --shiki-highlight-green-background: rgba(123, 204, 148, 0.1);
  --shiki-highlight-neutral: #8d949d;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 123, 114, 0.5);
  --shiki-highlight-red-background: rgba(255, 123, 114, 0.1);
  --shiki-terminal-dots-color: #5a616a;
  --shiki-tooltip-background: hsl(225, 15%, 20%);
  --side-dock-actions-border-color: rgb(69, 74, 84);
  --side-dock-actions-shadow: rgb(69, 74, 84) 0px 1px 2px
			0px,
		rgb(69, 74, 84) 0px 0px 0px 1px;
  --suggestion-background: hsl(215, 22%, 15%);
  --suggesttion-highlight-color: #ff7b72;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgba(255, 255, 255, 0.067);
  --tab-divider-color: #404650;
  --tab-font-size: 13px;
  --tab-outline-color: rgb(69, 74, 84);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: hsl(225, 15%, 20%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(225, 15%, 20%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(30, 40%, 65%);
  --tab-text-color: #5a616a;
  --tab-text-color-active: #e3e7eb;
  --tab-text-color-focused: #5a616a;
  --tab-text-color-focused-active: #e3e7eb;
  --tab-text-color-focused-active-current: #e3e7eb;
  --tab-text-color-focused-highlighted: hsl(27, 40.8%, 74.75%);
  --table-add-button-border-color: rgb(69, 74, 84);
  --table-add-button-border-width: 1px;
  --table-border-color: rgb(69, 74, 84);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(30, 40%, 65%);
  --table-drag-handle-color: #5a616a;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgb(69, 74, 84);
  --table-header-border-width: 1px;
  --table-header-color: #e3e7eb;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(30, 40%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(30, 40%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(30, 40%, 65%, 0.1);
  --tag-background-hover: hsla(30, 40%, 65%, 0.2);
  --tag-border-color: hsla(30, 40%, 65%, 0.15);
  --tag-border-color-hover: hsla(30, 40%, 65%, 0.15);
  --tag-color: hsl(27, 40.8%, 74.75%);
  --tag-color-hover: hsl(27, 40.8%, 74.75%);
  --tag-size: 0.8em;
  --text-accent: hsl(27, 40.8%, 74.75%);
  --text-accent-hover: hsl(25, 42%, 83.85%);
  --text-error: #fb464c;
  --text-faint: #5a616a;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #8d949d;
  --text-normal: #e3e7eb;
  --text-selection: hsla(30, 40%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(168, 174, 185);
  border-bottom-color: rgb(168, 174, 185);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(168, 174, 185);
  border-left-width: 0px;
  border-right-color: rgb(168, 174, 185);
  border-right-width: 0px;
  border-top-color: rgb(168, 174, 185);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(168, 174, 185));
  content: " ";
  font-family: var(--h3-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 21.6px);
  font-weight: var(--font-weight, 660);
  letter-spacing: var(--h3-letter-spacing, -0.1728px);
  line-height: var(--h3-line-height, 28.08px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -2.16);
}

html[saved-theme="dark"] body h4 {
  --background-gradient: linear-gradient(
		155deg,
		hsl(215, 22%, 15%) 0%,
		rgb(38, 45, 54),
		rgb(67, 63, 80)
	);
  --background-modifier-active-hover: hsla(30, 40%, 65%, 0.1);
  --background-modifier-border: rgb(69, 74, 84);
  --background-modifier-border-focus: #4a5059;
  --background-modifier-border-hover: #404650;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 255, 123, 114;
  --background-modifier-form-field: #2f343d;
  --background-modifier-form-field-hover: #2f343d;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-message: hsl(225, 15%, 20%);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 123, 204, 148;
  --background-primary: hsl(215, 22%, 15%);
  --background-primary-alt: hsl(215, 18%, 19%);
  --background-secondary: hsl(225, 15%, 20%);
  --background-secondary-alt: hsl(235, 15%, 28%);
  --blockquote-border-color: #67594c;
  --blur-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 123, 114;
  --callout-default: 123, 175, 222;
  --callout-error: 255, 100, 92;
  --callout-example: 182, 155, 255;
  --callout-fail: 255, 123, 114;
  --callout-important: 123, 204, 214;
  --callout-info: 123, 175, 222;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255, 182, 104;
  --callout-radius: 8px;
  --callout-success: 123, 204, 148;
  --callout-summary: 123, 204, 214;
  --callout-tip: 123, 204, 214;
  --callout-title-weight: 600;
  --callout-todo: 123, 175, 222;
  --callout-warning: 255, 170, 92;
  --canvas-background: hsl(215, 22%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #373c46;
  --caret-color: #e3e7eb;
  --checkbox-border-color: #5a616a;
  --checkbox-border-color-hover: #8d949d;
  --checkbox-color: hsl(30, 40%, 65%);
  --checkbox-color-hover: hsl(27, 40.8%, 74.75%);
  --checkbox-marker-color: hsl(215, 22%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #8d949d;
  --clickable-icon-radius: 4px;
  --code-background: hsl(215, 18%, 19%);
  --code-border-color: transparent;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5a616a;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #ff7b72;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #8d949d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #5a616a;
  --collapse-icon-color-collapsed: hsl(27, 40.8%, 74.75%);
  --color-accent: hsl(30, 40%, 65%);
  --color-accent-1: hsl(27, 40.8%, 74.75%);
  --color-accent-2: hsl(25, 42%, 83.85%);
  --color-accent-hsl: 30, 40%, 65%;
  --divider-color: rgb(69, 74, 84);
  --divider-color-hover: hsl(30, 40%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #373c46;
  --dropdown-background-hover: #404650;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #373c46;
  --flair-color: #e3e7eb;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h4-weight, 640);
  --graph-line: #404650;
  --graph-node: #8d949d;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(27, 40.8%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #5a616a;
  --graph-text: #e3e7eb;
  --h1-indicator-color: #e2e6eb;
  --h2-indicator-color: #c5cad4;
  --h3-indicator-color: #a8aeb9;
  --h4-indicator-color: #8f96a1;
  --h5-indicator-color: #787f8a;
  --h5-line-height: 1.7;
  --h6-indicator-color: #666d78;
  --h6-line-height: 1.7;
  --heading-formatting: #5a616a;
  --heading-spacing: 1.8rem;
  --hr-color: rgb(69, 74, 84);
  --interactive-accent: hsl(30, 40%, 65%);
  --interactive-accent-hover: hsl(27, 40.8%, 74.75%);
  --interactive-accent-hsl: 30, 40%, 65%;
  --interactive-hover: #404650;
  --interactive-normal: #373c46;
  --line-height-normal: 1.7;
  --link-color: hsl(27, 40.8%, 74.75%);
  --link-color-hover: hsl(25, 42%, 83.85%);
  --link-external-color: hsl(27, 40.8%, 74.75%);
  --link-external-color-hover: hsl(25, 42%, 83.85%);
  --link-unresolved-color: hsl(27, 40.8%, 74.75%);
  --link-unresolved-decoration-color: hsla(30, 40%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(225, 15%, 20%);
  --menu-border-color: #404650;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mod-root-border: 0px 1px 0px 1px solid rgb(69, 74, 84);
  --pdf-background: hsl(215, 22%, 15%);
  --pdf-page-background: hsl(215, 22%, 15%);
  --pdf-shadow: 0 0 0 1px rgb(69, 74, 84);
  --pdf-sidebar-background: hsl(215, 22%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 74, 84);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: rgb(69, 74, 84) 0px 0px 3px 0px,
		rgb(69, 74, 84) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #8d949d;
  --search-icon-color: #8d949d;
  --search-result-background: hsl(215, 22%, 15%);
  --setting-group-heading-color: #e3e7eb;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(215, 18%, 19%);
  --setting-items-border-color: rgb(69, 74, 84);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #8d949d;
  --shiki-code-background: hsl(215, 18%, 19%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #5a616a;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8d949d;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8d949d;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgb(69, 74, 84);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #5a616a;
  --shiki-gutter-text-color-highlight: #8d949d;
  --shiki-highlight-green: rgba(123, 204, 148, 0.5);
  --shiki-highlight-green-background: rgba(123, 204, 148, 0.1);
  --shiki-highlight-neutral: #8d949d;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 123, 114, 0.5);
  --shiki-highlight-red-background: rgba(255, 123, 114, 0.1);
  --shiki-terminal-dots-color: #5a616a;
  --shiki-tooltip-background: hsl(225, 15%, 20%);
  --side-dock-actions-border-color: rgb(69, 74, 84);
  --side-dock-actions-shadow: rgb(69, 74, 84) 0px 1px 2px
			0px,
		rgb(69, 74, 84) 0px 0px 0px 1px;
  --suggestion-background: hsl(215, 22%, 15%);
  --suggesttion-highlight-color: #ff7b72;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgba(255, 255, 255, 0.067);
  --tab-divider-color: #404650;
  --tab-font-size: 13px;
  --tab-outline-color: rgb(69, 74, 84);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: hsl(225, 15%, 20%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(225, 15%, 20%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(30, 40%, 65%);
  --tab-text-color: #5a616a;
  --tab-text-color-active: #e3e7eb;
  --tab-text-color-focused: #5a616a;
  --tab-text-color-focused-active: #e3e7eb;
  --tab-text-color-focused-active-current: #e3e7eb;
  --tab-text-color-focused-highlighted: hsl(27, 40.8%, 74.75%);
  --table-add-button-border-color: rgb(69, 74, 84);
  --table-add-button-border-width: 1px;
  --table-border-color: rgb(69, 74, 84);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(30, 40%, 65%);
  --table-drag-handle-color: #5a616a;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgb(69, 74, 84);
  --table-header-border-width: 1px;
  --table-header-color: #e3e7eb;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(30, 40%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(30, 40%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(30, 40%, 65%, 0.1);
  --tag-background-hover: hsla(30, 40%, 65%, 0.2);
  --tag-border-color: hsla(30, 40%, 65%, 0.15);
  --tag-border-color-hover: hsla(30, 40%, 65%, 0.15);
  --tag-color: hsl(27, 40.8%, 74.75%);
  --tag-color-hover: hsl(27, 40.8%, 74.75%);
  --tag-size: 0.8em;
  --text-accent: hsl(27, 40.8%, 74.75%);
  --text-accent-hover: hsl(25, 42%, 83.85%);
  --text-error: #fb464c;
  --text-faint: #5a616a;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #8d949d;
  --text-normal: #e3e7eb;
  --text-selection: hsla(30, 40%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(143, 150, 161);
  border-bottom-color: rgb(143, 150, 161);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(143, 150, 161);
  border-left-width: 0px;
  border-right-color: rgb(143, 150, 161);
  border-right-width: 0px;
  border-top-color: rgb(143, 150, 161);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(143, 150, 161));
  content: " ";
  font-family: var(--h4-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 19.36px);
  font-weight: var(--font-weight, 640);
  letter-spacing: var(--h4-letter-spacing, -0.0968px);
  line-height: var(--h4-line-height, 27.104px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -1.936);
}

html[saved-theme="dark"] body h5 {
  --background-gradient: linear-gradient(
		155deg,
		hsl(215, 22%, 15%) 0%,
		rgb(38, 45, 54),
		rgb(67, 63, 80)
	);
  --background-modifier-active-hover: hsla(30, 40%, 65%, 0.1);
  --background-modifier-border: rgb(69, 74, 84);
  --background-modifier-border-focus: #4a5059;
  --background-modifier-border-hover: #404650;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 255, 123, 114;
  --background-modifier-form-field: #2f343d;
  --background-modifier-form-field-hover: #2f343d;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-message: hsl(225, 15%, 20%);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 123, 204, 148;
  --background-primary: hsl(215, 22%, 15%);
  --background-primary-alt: hsl(215, 18%, 19%);
  --background-secondary: hsl(225, 15%, 20%);
  --background-secondary-alt: hsl(235, 15%, 28%);
  --blockquote-border-color: #67594c;
  --blur-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 123, 114;
  --callout-default: 123, 175, 222;
  --callout-error: 255, 100, 92;
  --callout-example: 182, 155, 255;
  --callout-fail: 255, 123, 114;
  --callout-important: 123, 204, 214;
  --callout-info: 123, 175, 222;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255, 182, 104;
  --callout-radius: 8px;
  --callout-success: 123, 204, 148;
  --callout-summary: 123, 204, 214;
  --callout-tip: 123, 204, 214;
  --callout-title-weight: 600;
  --callout-todo: 123, 175, 222;
  --callout-warning: 255, 170, 92;
  --canvas-background: hsl(215, 22%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #373c46;
  --caret-color: #e3e7eb;
  --checkbox-border-color: #5a616a;
  --checkbox-border-color-hover: #8d949d;
  --checkbox-color: hsl(30, 40%, 65%);
  --checkbox-color-hover: hsl(27, 40.8%, 74.75%);
  --checkbox-marker-color: hsl(215, 22%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #8d949d;
  --clickable-icon-radius: 4px;
  --code-background: hsl(215, 18%, 19%);
  --code-border-color: transparent;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5a616a;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #ff7b72;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #8d949d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #5a616a;
  --collapse-icon-color-collapsed: hsl(27, 40.8%, 74.75%);
  --color-accent: hsl(30, 40%, 65%);
  --color-accent-1: hsl(27, 40.8%, 74.75%);
  --color-accent-2: hsl(25, 42%, 83.85%);
  --color-accent-hsl: 30, 40%, 65%;
  --divider-color: rgb(69, 74, 84);
  --divider-color-hover: hsl(30, 40%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #373c46;
  --dropdown-background-hover: #404650;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #373c46;
  --flair-color: #e3e7eb;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h5-weight, 620);
  --graph-line: #404650;
  --graph-node: #8d949d;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(27, 40.8%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #5a616a;
  --graph-text: #e3e7eb;
  --h1-indicator-color: #e2e6eb;
  --h2-indicator-color: #c5cad4;
  --h3-indicator-color: #a8aeb9;
  --h4-indicator-color: #8f96a1;
  --h5-indicator-color: #787f8a;
  --h5-line-height: 1.7;
  --h6-indicator-color: #666d78;
  --h6-line-height: 1.7;
  --heading-formatting: #5a616a;
  --heading-spacing: 1.8rem;
  --hr-color: rgb(69, 74, 84);
  --interactive-accent: hsl(30, 40%, 65%);
  --interactive-accent-hover: hsl(27, 40.8%, 74.75%);
  --interactive-accent-hsl: 30, 40%, 65%;
  --interactive-hover: #404650;
  --interactive-normal: #373c46;
  --line-height-normal: 1.7;
  --link-color: hsl(27, 40.8%, 74.75%);
  --link-color-hover: hsl(25, 42%, 83.85%);
  --link-external-color: hsl(27, 40.8%, 74.75%);
  --link-external-color-hover: hsl(25, 42%, 83.85%);
  --link-unresolved-color: hsl(27, 40.8%, 74.75%);
  --link-unresolved-decoration-color: hsla(30, 40%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(225, 15%, 20%);
  --menu-border-color: #404650;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mod-root-border: 0px 1px 0px 1px solid rgb(69, 74, 84);
  --pdf-background: hsl(215, 22%, 15%);
  --pdf-page-background: hsl(215, 22%, 15%);
  --pdf-shadow: 0 0 0 1px rgb(69, 74, 84);
  --pdf-sidebar-background: hsl(215, 22%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 74, 84);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: rgb(69, 74, 84) 0px 0px 3px 0px,
		rgb(69, 74, 84) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #8d949d;
  --search-icon-color: #8d949d;
  --search-result-background: hsl(215, 22%, 15%);
  --setting-group-heading-color: #e3e7eb;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(215, 18%, 19%);
  --setting-items-border-color: rgb(69, 74, 84);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #8d949d;
  --shiki-code-background: hsl(215, 18%, 19%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #5a616a;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8d949d;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8d949d;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgb(69, 74, 84);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #5a616a;
  --shiki-gutter-text-color-highlight: #8d949d;
  --shiki-highlight-green: rgba(123, 204, 148, 0.5);
  --shiki-highlight-green-background: rgba(123, 204, 148, 0.1);
  --shiki-highlight-neutral: #8d949d;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 123, 114, 0.5);
  --shiki-highlight-red-background: rgba(255, 123, 114, 0.1);
  --shiki-terminal-dots-color: #5a616a;
  --shiki-tooltip-background: hsl(225, 15%, 20%);
  --side-dock-actions-border-color: rgb(69, 74, 84);
  --side-dock-actions-shadow: rgb(69, 74, 84) 0px 1px 2px
			0px,
		rgb(69, 74, 84) 0px 0px 0px 1px;
  --suggestion-background: hsl(215, 22%, 15%);
  --suggesttion-highlight-color: #ff7b72;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgba(255, 255, 255, 0.067);
  --tab-divider-color: #404650;
  --tab-font-size: 13px;
  --tab-outline-color: rgb(69, 74, 84);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: hsl(225, 15%, 20%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(225, 15%, 20%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(30, 40%, 65%);
  --tab-text-color: #5a616a;
  --tab-text-color-active: #e3e7eb;
  --tab-text-color-focused: #5a616a;
  --tab-text-color-focused-active: #e3e7eb;
  --tab-text-color-focused-active-current: #e3e7eb;
  --tab-text-color-focused-highlighted: hsl(27, 40.8%, 74.75%);
  --table-add-button-border-color: rgb(69, 74, 84);
  --table-add-button-border-width: 1px;
  --table-border-color: rgb(69, 74, 84);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(30, 40%, 65%);
  --table-drag-handle-color: #5a616a;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgb(69, 74, 84);
  --table-header-border-width: 1px;
  --table-header-color: #e3e7eb;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(30, 40%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(30, 40%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(30, 40%, 65%, 0.1);
  --tag-background-hover: hsla(30, 40%, 65%, 0.2);
  --tag-border-color: hsla(30, 40%, 65%, 0.15);
  --tag-border-color-hover: hsla(30, 40%, 65%, 0.15);
  --tag-color: hsl(27, 40.8%, 74.75%);
  --tag-color-hover: hsl(27, 40.8%, 74.75%);
  --tag-size: 0.8em;
  --text-accent: hsl(27, 40.8%, 74.75%);
  --text-accent-hover: hsl(25, 42%, 83.85%);
  --text-error: #fb464c;
  --text-faint: #5a616a;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #8d949d;
  --text-normal: #e3e7eb;
  --text-selection: hsla(30, 40%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(120, 127, 138);
  border-bottom-color: rgb(120, 127, 138);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(120, 127, 138);
  border-left-width: 0px;
  border-right-color: rgb(120, 127, 138);
  border-right-width: 0px;
  border-top-color: rgb(120, 127, 138);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(120, 127, 138));
  content: " ";
  font-family: var(--h5-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 17.6px);
  font-weight: var(--font-weight, 620);
  letter-spacing: var(--h5-letter-spacing, -0.0352px);
  line-height: var(--h5-line-height, 29.92px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -1.76);
}

html[saved-theme="dark"] body h6 {
  --background-gradient: linear-gradient(
		155deg,
		hsl(215, 22%, 15%) 0%,
		rgb(38, 45, 54),
		rgb(67, 63, 80)
	);
  --background-modifier-active-hover: hsla(30, 40%, 65%, 0.1);
  --background-modifier-border: rgb(69, 74, 84);
  --background-modifier-border-focus: #4a5059;
  --background-modifier-border-hover: #404650;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 255, 123, 114;
  --background-modifier-form-field: #2f343d;
  --background-modifier-form-field-hover: #2f343d;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-message: hsl(225, 15%, 20%);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 123, 204, 148;
  --background-primary: hsl(215, 22%, 15%);
  --background-primary-alt: hsl(215, 18%, 19%);
  --background-secondary: hsl(225, 15%, 20%);
  --background-secondary-alt: hsl(235, 15%, 28%);
  --blockquote-border-color: #67594c;
  --blur-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255, 123, 114;
  --callout-default: 123, 175, 222;
  --callout-error: 255, 100, 92;
  --callout-example: 182, 155, 255;
  --callout-fail: 255, 123, 114;
  --callout-important: 123, 204, 214;
  --callout-info: 123, 175, 222;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255, 182, 104;
  --callout-radius: 8px;
  --callout-success: 123, 204, 148;
  --callout-summary: 123, 204, 214;
  --callout-tip: 123, 204, 214;
  --callout-title-weight: 600;
  --callout-todo: 123, 175, 222;
  --callout-warning: 255, 170, 92;
  --canvas-background: hsl(215, 22%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #373c46;
  --caret-color: #e3e7eb;
  --checkbox-border-color: #5a616a;
  --checkbox-border-color-hover: #8d949d;
  --checkbox-color: hsl(30, 40%, 65%);
  --checkbox-color-hover: hsl(27, 40.8%, 74.75%);
  --checkbox-marker-color: hsl(215, 22%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #8d949d;
  --clickable-icon-radius: 4px;
  --code-background: hsl(215, 18%, 19%);
  --code-border-color: transparent;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5a616a;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #ff7b72;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #8d949d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #5a616a;
  --collapse-icon-color-collapsed: hsl(27, 40.8%, 74.75%);
  --color-accent: hsl(30, 40%, 65%);
  --color-accent-1: hsl(27, 40.8%, 74.75%);
  --color-accent-2: hsl(25, 42%, 83.85%);
  --color-accent-hsl: 30, 40%, 65%;
  --divider-color: rgb(69, 74, 84);
  --divider-color-hover: hsl(30, 40%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #373c46;
  --dropdown-background-hover: #404650;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #373c46;
  --flair-color: #e3e7eb;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h6-weight, 600);
  --graph-line: #404650;
  --graph-node: #8d949d;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(27, 40.8%, 74.75%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #5a616a;
  --graph-text: #e3e7eb;
  --h1-indicator-color: #e2e6eb;
  --h2-indicator-color: #c5cad4;
  --h3-indicator-color: #a8aeb9;
  --h4-indicator-color: #8f96a1;
  --h5-indicator-color: #787f8a;
  --h5-line-height: 1.7;
  --h6-indicator-color: #666d78;
  --h6-line-height: 1.7;
  --heading-formatting: #5a616a;
  --heading-spacing: 1.8rem;
  --hr-color: rgb(69, 74, 84);
  --interactive-accent: hsl(30, 40%, 65%);
  --interactive-accent-hover: hsl(27, 40.8%, 74.75%);
  --interactive-accent-hsl: 30, 40%, 65%;
  --interactive-hover: #404650;
  --interactive-normal: #373c46;
  --line-height-normal: 1.7;
  --link-color: hsl(27, 40.8%, 74.75%);
  --link-color-hover: hsl(25, 42%, 83.85%);
  --link-external-color: hsl(27, 40.8%, 74.75%);
  --link-external-color-hover: hsl(25, 42%, 83.85%);
  --link-unresolved-color: hsl(27, 40.8%, 74.75%);
  --link-unresolved-decoration-color: hsla(30, 40%, 65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(225, 15%, 20%);
  --menu-border-color: #404650;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mod-root-border: 0px 1px 0px 1px solid rgb(69, 74, 84);
  --pdf-background: hsl(215, 22%, 15%);
  --pdf-page-background: hsl(215, 22%, 15%);
  --pdf-shadow: 0 0 0 1px rgb(69, 74, 84);
  --pdf-sidebar-background: hsl(215, 22%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 74, 84);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #373c46 65%, transparent) linear-gradient(#373c46, color-mix(in srgb, #373c46 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: rgb(69, 74, 84) 0px 0px 3px 0px,
		rgb(69, 74, 84) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #8d949d;
  --search-icon-color: #8d949d;
  --search-result-background: hsl(215, 22%, 15%);
  --setting-group-heading-color: #e3e7eb;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(215, 18%, 19%);
  --setting-items-border-color: rgb(69, 74, 84);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #8d949d;
  --shiki-code-background: hsl(215, 18%, 19%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #5a616a;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8d949d;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8d949d;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgb(69, 74, 84);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #5a616a;
  --shiki-gutter-text-color-highlight: #8d949d;
  --shiki-highlight-green: rgba(123, 204, 148, 0.5);
  --shiki-highlight-green-background: rgba(123, 204, 148, 0.1);
  --shiki-highlight-neutral: #8d949d;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 123, 114, 0.5);
  --shiki-highlight-red-background: rgba(255, 123, 114, 0.1);
  --shiki-terminal-dots-color: #5a616a;
  --shiki-tooltip-background: hsl(225, 15%, 20%);
  --side-dock-actions-border-color: rgb(69, 74, 84);
  --side-dock-actions-shadow: rgb(69, 74, 84) 0px 1px 2px
			0px,
		rgb(69, 74, 84) 0px 0px 0px 1px;
  --suggestion-background: hsl(215, 22%, 15%);
  --suggesttion-highlight-color: #ff7b72;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgba(255, 255, 255, 0.067);
  --tab-divider-color: #404650;
  --tab-font-size: 13px;
  --tab-outline-color: rgb(69, 74, 84);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: hsl(225, 15%, 20%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(225, 15%, 20%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(30, 40%, 65%);
  --tab-text-color: #5a616a;
  --tab-text-color-active: #e3e7eb;
  --tab-text-color-focused: #5a616a;
  --tab-text-color-focused-active: #e3e7eb;
  --tab-text-color-focused-active-current: #e3e7eb;
  --tab-text-color-focused-highlighted: hsl(27, 40.8%, 74.75%);
  --table-add-button-border-color: rgb(69, 74, 84);
  --table-add-button-border-width: 1px;
  --table-border-color: rgb(69, 74, 84);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(30, 40%, 65%);
  --table-drag-handle-color: #5a616a;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgb(69, 74, 84);
  --table-header-border-width: 1px;
  --table-header-color: #e3e7eb;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(30, 40%, 65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(30, 40%, 65%);
  --table-text-size: 16px;
  --tag-background: hsla(30, 40%, 65%, 0.1);
  --tag-background-hover: hsla(30, 40%, 65%, 0.2);
  --tag-border-color: hsla(30, 40%, 65%, 0.15);
  --tag-border-color-hover: hsla(30, 40%, 65%, 0.15);
  --tag-color: hsl(27, 40.8%, 74.75%);
  --tag-color-hover: hsl(27, 40.8%, 74.75%);
  --tag-size: 0.8em;
  --text-accent: hsl(27, 40.8%, 74.75%);
  --text-accent-hover: hsl(25, 42%, 83.85%);
  --text-error: #fb464c;
  --text-faint: #5a616a;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #8d949d;
  --text-normal: #e3e7eb;
  --text-selection: hsla(30, 40%, 65%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(102, 109, 120);
  border-bottom-color: rgb(102, 109, 120);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(102, 109, 120);
  border-left-width: 0px;
  border-right-color: rgb(102, 109, 120);
  border-right-width: 0px;
  border-top-color: rgb(102, 109, 120);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(102, 109, 120));
  content: " ";
  font-family: var(--h6-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 16px);
  font-weight: var(--font-weight, 600);
  line-height: var(--h6-line-height, 27.2px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -1.6);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(90, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(201, 166, 130));
  border-color: rgb(201, 166, 130);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(141, 148, 157));
  outline: rgb(141, 148, 157) none 0px;
  text-decoration-color: rgb(141, 148, 157);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(217, 188, 164));
  outline: rgb(217, 188, 164) none 0px;
  text-decoration-color: rgb(217, 188, 164);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(217, 188, 164));
  outline: rgb(217, 188, 164) none 0px;
  text-decoration-color: rgb(217, 188, 164);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(217, 188, 164));
  outline: rgb(217, 188, 164) none 0px;
  text-decoration: rgba(201, 166, 130, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(201, 166, 130, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body dt {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(90, 97, 106));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(42, 49, 60, 0.6));
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body table {
  background-color: rgb(40, 47, 57);
  color: rgb(227, 231, 235);
  width: 233.969px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgb(30, 37, 47));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(227, 231, 235);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(227, 231, 235);
  border-right-width: 0px;
  border-top-color: rgb(69, 74, 84);
  color: var(--table-text-color, rgb(227, 231, 235));
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(69, 74, 84);
  border-right-width: 0px;
  border-top-color: rgb(69, 74, 84);
  color: var(--table-header-color, rgb(227, 231, 235));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--inline-code-background, rgba(54, 66, 73, 0.4));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: var(--inline-code-normal, rgb(255, 123, 114));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--codeblock-background, rgb(40, 47, 57));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(226, 230, 235);
  border-left-color: rgb(226, 230, 235);
  border-right-color: rgb(226, 230, 235);
  border-top-color: rgb(226, 230, 235);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(40, 47, 57));
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(90, 97, 106);
  border-left-color: rgb(90, 97, 106);
  border-right-color: rgb(90, 97, 106);
  border-top-color: rgb(90, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(90, 97, 106);
  text-decoration: line-through 1px rgb(90, 97, 106);
  text-decoration-color: rgb(90, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(227, 231, 235);
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(255, 182, 104);
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
  background-color: rgb(90, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(255, 203, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg t='1741258757843' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='7141' width='16' height='16'%3E%3Cpath d='M870.623079 147.094124a511.04523 511.04523 0 0 1 135.984362 496.646886 512.581053 512.581053 0 0 1-365.589958 363.4782c-63.352714 16.574094-127.985282 20.669623-190.95404 13.182484l26.364968-118.386386a391.954925 391.954925 0 0 0 413.520445-289.246736 390.803058 390.803058 0 0 0-104.052034-379.796324 392.274888 392.274888 0 0 0-314.459837-110.451298L443.472201 4.454528a513.22098 513.22098 0 0 1 427.150878 142.703589zM306.847913 846.597681c22.077461 13.374462 45.242797 24.445189 69.30403 33.212181l-26.300975 118.386385a513.668928 513.668928 0 0 1-119.21829-57.145428l76.215235-94.453138zM181.550322 725.39562c13.054499 20.029697 28.156762 39.099504 45.30679 57.017442l-76.151243 94.517131-7.103183-7.103183a513.604935 513.604935 0 0 1-71.863736-92.277388l109.811372-52.154002z' fill='%2367C23B' p-id='7142'%3E%3C/path%3E%3Cpath d='M121.589218 563.238268c3.071647 23.549292 8.319043 46.906606 15.742189 69.751978l-109.811371 52.09001A510.981237 510.981237 0 0 1 0.0032 563.238268h121.586018z' fill='%238DD16C' p-id='7143'%3E%3C/path%3E%3Cpath d='M26.880109 340.863841l109.939357 51.770046A390.995036 390.995036 0 0 0 121.589218 460.78605H0.0032a511.3012 511.3012 0 0 1 26.876909-119.922209z' fill='%23B3E09D' p-id='7144'%3E%3C/path%3E%3Cpath d='M150.705869 147.094124l76.151243 94.517131-4.095529 4.415492a392.018918 392.018918 0 0 0-42.107158 54.009789l-110.00335-51.770047c21.309549-35.195952 47.226569-68.472126 77.751059-98.86863l2.303735-2.303735z' fill='%23CBEABB' p-id='7145'%3E%3C/path%3E%3Cpath d='M343.515696 27.875834l27.900791 118.066423a389.971153 389.971153 0 0 0-64.632567 31.484379l-76.151242-94.517131a510.08534 510.08534 0 0 1 112.883018-55.033671z' fill='%23E1F3D9' p-id='7146'%3E%3C/path%3E%3Cpath d='M704.498183 326.721467a51.834039 51.834039 0 0 1 52.601951-20.093689l6.527249 1.855786c14.718307 5.119411 26.364968 16.766072 31.548372 31.420387l1.855787 6.463257c4.287507 19.965704-3.647581 40.571334-18.365888 51.066127l-284.703259 283.99934a57.785355 57.785355 0 0 1-79.22289-0.319963L254.501933 522.154992a51.642061 51.642061 0 0 1 19.709733-92.341381c19.965704-4.223514 40.635327 3.647581 51.194113 18.493874L451.151318 576.484744l253.346865-249.763277z' fill='%2367C23B' p-id='7147'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg t='1741258757843' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='7141' width='16' height='16'%3E%3Cpath d='M870.623079 147.094124a511.04523 511.04523 0 0 1 135.984362 496.646886 512.581053 512.581053 0 0 1-365.589958 363.4782c-63.352714 16.574094-127.985282 20.669623-190.95404 13.182484l26.364968-118.386386a391.954925 391.954925 0 0 0 413.520445-289.246736 390.803058 390.803058 0 0 0-104.052034-379.796324 392.274888 392.274888 0 0 0-314.459837-110.451298L443.472201 4.454528a513.22098 513.22098 0 0 1 427.150878 142.703589zM306.847913 846.597681c22.077461 13.374462 45.242797 24.445189 69.30403 33.212181l-26.300975 118.386385a513.668928 513.668928 0 0 1-119.21829-57.145428l76.215235-94.453138zM181.550322 725.39562c13.054499 20.029697 28.156762 39.099504 45.30679 57.017442l-76.151243 94.517131-7.103183-7.103183a513.604935 513.604935 0 0 1-71.863736-92.277388l109.811372-52.154002z' fill='%2367C23B' p-id='7142'%3E%3C/path%3E%3Cpath d='M121.589218 563.238268c3.071647 23.549292 8.319043 46.906606 15.742189 69.751978l-109.811371 52.09001A510.981237 510.981237 0 0 1 0.0032 563.238268h121.586018z' fill='%238DD16C' p-id='7143'%3E%3C/path%3E%3Cpath d='M26.880109 340.863841l109.939357 51.770046A390.995036 390.995036 0 0 0 121.589218 460.78605H0.0032a511.3012 511.3012 0 0 1 26.876909-119.922209z' fill='%23B3E09D' p-id='7144'%3E%3C/path%3E%3Cpath d='M150.705869 147.094124l76.151243 94.517131-4.095529 4.415492a392.018918 392.018918 0 0 0-42.107158 54.009789l-110.00335-51.770047c21.309549-35.195952 47.226569-68.472126 77.751059-98.86863l2.303735-2.303735z' fill='%23CBEABB' p-id='7145'%3E%3C/path%3E%3Cpath d='M343.515696 27.875834l27.900791 118.066423a389.971153 389.971153 0 0 0-64.632567 31.484379l-76.151242-94.517131a510.08534 510.08534 0 0 1 112.883018-55.033671z' fill='%23E1F3D9' p-id='7146'%3E%3C/path%3E%3Cpath d='M704.498183 326.721467a51.834039 51.834039 0 0 1 52.601951-20.093689l6.527249 1.855786c14.718307 5.119411 26.364968 16.766072 31.548372 31.420387l1.855787 6.463257c4.287507 19.965704-3.647581 40.571334-18.365888 51.066127l-284.703259 283.99934a57.785355 57.785355 0 0 1-79.22289-0.319963L254.501933 522.154992a51.642061 51.642061 0 0 1 19.709733-92.341381c19.965704-4.223514 40.635327 3.647581 51.194113 18.493874L451.151318 576.484744l253.346865-249.763277z' fill='%2367C23B' p-id='7147'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
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
  background-color: rgb(83, 223, 221);
  color: rgb(90, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(90, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(255, 182, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(255, 182, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(255, 123, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(255, 123, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  color: rgb(255, 203, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(255, 203, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
  color: rgb(255, 123, 114);
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

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(123, 204, 148);
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

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(182, 155, 255);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 123, 204, 214);
  background: rgba(123, 204, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(123, 204, 214, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 204, 214, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 204, 214, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 204, 214, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 255, 123, 114);
  background: rgba(255, 123, 114, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 123, 114, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 123, 114, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 123, 114, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 123, 114, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 100, 92);
  background: rgba(255, 100, 92, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 100, 92, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 100, 92, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 100, 92, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 100, 92, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 182, 155, 255);
  background: rgba(182, 155, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(182, 155, 255, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(182, 155, 255, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(182, 155, 255, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(182, 155, 255, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 123, 114);
  background: rgba(255, 123, 114, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 123, 114, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 123, 114, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 123, 114, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 123, 114, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 123, 175, 222);
  background: rgba(123, 175, 222, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(123, 175, 222, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 175, 222, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 175, 222, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 175, 222, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 123, 175, 222);
  background: rgba(123, 175, 222, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(123, 175, 222, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 175, 222, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 175, 222, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 175, 222, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255, 182, 104);
  background: rgba(255, 182, 104, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 182, 104, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 182, 104, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 182, 104, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 182, 104, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgba(158, 158, 158, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 123, 204, 148);
  background: rgba(123, 204, 148, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(123, 204, 148, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 204, 148, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 204, 148, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 204, 148, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 123, 204, 214);
  background: rgba(123, 204, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(123, 204, 214, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 204, 214, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 204, 214, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 204, 214, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 123, 175, 222);
  background: rgba(123, 175, 222, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(123, 175, 222, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 175, 222, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 175, 222, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 175, 222, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 170, 92);
  background: rgba(255, 170, 92, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 170, 92, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 170, 92, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 170, 92, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 170, 92, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 123, 175, 222;
  border-bottom-color: rgb(123, 175, 222);
  border-left-color: rgb(123, 175, 222);
  border-right-color: rgb(123, 175, 222);
  border-top-color: rgb(123, 175, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(123, 175, 222));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(227, 231, 235);
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
  background-color: rgb(47, 52, 61);
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-right-color: rgb(69, 74, 84);
  border-top-color: rgb(69, 74, 84);
  color: var(--text-normal, rgb(227, 231, 235));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(30, 37, 47));
  border-bottom-color: rgb(74, 80, 89);
  border-left-color: rgb(74, 80, 89);
  border-right-color: rgb(74, 80, 89);
  border-top-color: rgb(74, 80, 89);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(227, 231, 235);
  outline: rgb(227, 231, 235) none 0px;
  text-decoration-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(74, 80, 89);
  border-left-color: rgb(74, 80, 89);
  border-right-color: rgb(74, 80, 89);
  border-top-color: rgb(74, 80, 89);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(43, 47, 59);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(201, 166, 130, 0.1));
  border-bottom-color: rgba(201, 166, 130, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(201, 166, 130, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(201, 166, 130, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(201, 166, 130, 0.15);
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(217, 188, 164);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(226, 230, 235));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(227, 231, 235));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(197, 202, 212));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(227, 231, 235));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(168, 174, 185));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(143, 150, 161));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(120, 127, 138));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(102, 109, 120));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-right-color: rgb(69, 74, 84);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 123, 175, 222);
  border-bottom-color: rgba(123, 175, 222, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 175, 222, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(123, 175, 222, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(123, 175, 222, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--folder-text-2, rgba(123, 175, 222, 0.85));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--folder-sub-text-2, rgba(123, 175, 222, 0.7));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(227, 231, 235);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: var(--icon-color, rgb(141, 148, 157));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-left-width: 0px;
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(141, 148, 157));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(141, 148, 157);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(141, 148, 157));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(141, 148, 157);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(141, 148, 157));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: var(--icon-color, rgb(141, 148, 157));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(141, 148, 157);
  stroke: rgb(141, 148, 157);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(90, 97, 106));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(227, 231, 235));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(43, 47, 59));
  border-color: rgb(227, 231, 235);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgb(30, 37, 47));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(69, 74, 84);
  color: var(--table-header-color, rgb(227, 231, 235));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(69, 74, 84);
  border-left-color: rgb(69, 74, 84);
  border-right-color: rgb(69, 74, 84);
  border-top-color: rgb(69, 74, 84);
  color: var(--text-muted, rgb(141, 148, 157));
  margin-bottom: 8px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(69, 74, 84);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(201, 166, 130, 0.1));
  color: var(--pill-color, rgb(217, 188, 164));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(141, 148, 157);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(30, 37, 47));
  color: var(--text-normal, rgb(227, 231, 235));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--workspace-header-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(227, 231, 235);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(227, 231, 235));
}

html[saved-theme="dark"] body abbr {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(141, 148, 157);
  border-left-color: rgb(141, 148, 157);
  border-right-color: rgb(141, 148, 157);
  border-top-color: rgb(141, 148, 157);
  color: var(--text-normal, rgb(141, 148, 157));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(40, 47, 57));
  border-bottom-color: rgb(255, 123, 114);
  border-left-color: rgb(255, 123, 114);
  border-right-color: rgb(255, 123, 114);
  border-top-color: rgb(255, 123, 114);
  color: var(--code-normal, rgb(255, 123, 114));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(227, 231, 235);
  border-left-color: rgb(227, 231, 235);
  border-right-color: rgb(227, 231, 235);
  border-top-color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body sub {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body summary {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body sup {
  color: rgb(227, 231, 235);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(201, 166, 130, 0.1));
  border-bottom-color: rgba(201, 166, 130, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgba(201, 166, 130, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(201, 166, 130, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(201, 166, 130, 0.15);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: var(--tag-color, rgb(217, 188, 164));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 12;
  --accent-l: 60%;
  --accent-s: 31%;
  --background-gradient: linear-gradient(
		rgb(217, 224, 227),
		rgb(235, 215, 210)
	);
  --background-modifier-border: var(--color-base-30, hsla(25, 20%, 70%, 0.4));
  --background-modifier-border-focus: var(--color-base-40, #a3958c);
  --background-modifier-border-hover: var(--color-base-35, #b6a79d);
  --background-modifier-error-rgb: var(--color-red-rgb, 174, 62, 76);
  --background-modifier-form-field: hsl(
		var(--accent-h),
		var(--accent-s),
		var(--accent-l),
		0.1
	);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(
		12,
		31%,
		60%,
		0.1
	));
  --background-modifier-message: var(--background-secondary, rgb(232, 223, 217));
  --background-modifier-success-rgb: var(--color-green-rgb, 62, 132, 98);
  --background-primary: var(--color-base-00, rgb(243, 237, 233));
  --background-primary-alt: var(--color-base-10, rgb(238, 230, 225));
  --background-secondary: var(--color-base-20, rgb(232, 223, 217));
  --background-secondary-alt: var(--color-base-05, rgb(225, 215, 208));
  --bases-cards-background: var(--background-primary, rgb(243, 237, 233));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(238, 230, 225));
  --bases-embed-border-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --bases-group-heading-property-color: var(--text-muted, #554d47);
  --bases-table-border-color: var(--table-border-color, hsla(25, 20%, 70%, 0.4));
  --bases-table-cell-background-active: var(--background-primary, rgb(243, 237, 233));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(238, 230, 225));
  --bases-table-cell-background-selected: var(--table-selection, hsla(12, 31%, 60%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, rgb(238, 230, 225));
  --bases-table-header-background: var(--background-primary, rgb(243, 237, 233));
  --bases-table-header-color: var(--text-muted, #554d47);
  --bases-table-summary-background: var(--background-primary, rgb(243, 237, 233));
  --blockquote-background-color: rgba(237, 228, 222, 0.811);
  --blockquote-border-color: var(--interactive-accent, hsl(25, 20%, 70%));
  --blockquote-color: hsl(25, 20%, 30%);
  --bold-color: #2d3748;
  --callout-bug: var(--color-red-rgb, 174, 62, 76);
  --callout-color: transparent;
  --callout-default: var(--color-blue-rgb, 95, 164, 218);
  --callout-error: var(--color-red-rgb, 158, 48, 57);
  --callout-example: var(--color-purple-rgb, 94, 72, 146);
  --callout-fail: var(--color-red-rgb, 174, 62, 76);
  --callout-important: var(--color-cyan-rgb, 52, 136, 152);
  --callout-info: var(--color-blue-rgb, 95, 164, 218);
  --callout-question: var(--color-orange-rgb, 184, 110, 51);
  --callout-radius: var(--radius-s, 8px);
  --callout-success: var(--color-green-rgb, 62, 132, 98);
  --callout-summary: var(--color-cyan-rgb, 52, 136, 152);
  --callout-tip: var(--color-cyan-rgb, 52, 136, 152);
  --callout-todo: var(--color-blue-rgb, 95, 164, 218);
  --callout-warning: var(--color-orange-rgb, 191, 127, 63);
  --canvas-background: var(--background-primary, rgb(243, 237, 233));
  --canvas-card-label-color: var(--text-faint, #8a7e76);
  --canvas-color-1: var(--color-red-rgb, 174, 62, 76);
  --canvas-color-2: var(--color-orange-rgb, 184, 110, 51);
  --canvas-color-3: var(--color-yellow-rgb, 191, 143, 63);
  --canvas-color-4: var(--color-green-rgb, 62, 132, 98);
  --canvas-color-5: var(--color-cyan-rgb, 52, 136, 152);
  --canvas-color-6: var(--color-purple-rgb, 94, 72, 146);
  --canvas-dot-pattern: var(--color-base-30, #c8b9af);
  --caret-color: var(--text-normal, #3a3330);
  --checkbox-border-color: var(--text-faint, #8a7e76);
  --checkbox-border-color-hover: var(--text-muted, #554d47);
  --checkbox-color: var(--interactive-accent, hsl(11, 31.31%, 64.5%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(9, 31.62%, 69%));
  --checkbox-marker-color: var(--background-primary, rgb(243, 237, 233));
  --checklist-done-color: var(--text-muted, #554d47);
  --code-background: var(--background-primary-alt, rgb(238, 230, 225));
  --code-border-color: var(--background-modifier-border, transparent);
  --code-comment: var(--text-faint, #8a7e76);
  --code-normal: var(--text-normal, #eb5757);
  --code-punctuation: var(--text-muted, #554d47);
  --codeblock-background: rgba(234, 223, 215, 0.749);
  --codeblock-border-radius: 8px;
  --codeblock-caret-color: hsl(25, 20%, 30%);
  --collapse-icon-color: var(--text-faint, #8a7e76);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(12, 31%, 60%));
  --color-base-00: #f8f4f0;
  --color-base-05: #f3ece6;
  --color-base-10: #eee6df;
  --color-base-100: #3a3330;
  --color-base-20: #e6dcd3;
  --color-base-25: #d8ccc2;
  --color-base-30: #c8b9af;
  --color-base-35: #b6a79d;
  --color-base-40: #a3958c;
  --color-base-50: #8a7e76;
  --color-base-60: #6b625b;
  --color-base-70: #554d47;
  --color-blue-rgb: 95, 164, 218;
  --color-cyan-rgb: 52, 136, 152;
  --color-green-rgb: 62, 132, 98;
  --color-orange-rgb: 184, 110, 51;
  --color-pink-rgb: 184, 92, 132;
  --color-purple-rgb: 94, 72, 146;
  --color-red-rgb: 174, 62, 76;
  --color-yellow-rgb: 191, 143, 63;
  --dark: var(--text-normal, var(--color-base-100, #3a3330));
  --darkgray: var(--text-normal, var(--color-base-100, #3a3330));
  --divider-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --divider-color-hover: var(--interactive-accent, hsl(11, 31.31%, 64.5%));
  --dropdown-background: var(--interactive-normal, #f8f4f0);
  --dropdown-background-hover: var(--interactive-hover, #eee6df);
  --file-header-background: var(--background-primary, rgb(243, 237, 233));
  --file-header-background-focused: var(--background-primary, rgb(243, 237, 233));
  --file-margins: var(--file-margins-y) var(--file-margins-x, 24px);
  --flair-background: var(--interactive-normal, #f8f4f0);
  --flair-color: var(--text-normal, #3a3330);
  --footnote-divider-color: var(--metadata-divider-color, hsla(25, 20%, 70%, 0.4));
  --footnote-id-color: var(--text-muted, #554d47);
  --footnote-id-color-no-occurrences: var(--text-faint, #8a7e76);
  --footnote-line-height: var(--line-height-normal, 1.7);
  --graph-node: var(--text-muted, #554d47);
  --graph-node-focused: var(--text-accent, hsl(12, 31%, 60%));
  --graph-node-unresolved: var(--text-faint, #8a7e76);
  --graph-text: var(--text-normal, #3a3330);
  --gray: var(--text-muted, var(--color-base-70, #554d47));
  --h1-color: #2d3748;
  --h1-indicator-color: var(--h1-color, #2d3748);
  --h1-size: 1.69em;
  --h2-color: #4a556b;
  --h2-indicator-color: var(--h2-color, #4a556b);
  --h2-size: 1.51em;
  --h3-color: #66788d;
  --h3-indicator-color: var(--h3-color, #66788d);
  --h3-size: 1.35em;
  --h4-color: #7f8a9b;
  --h4-indicator-color: var(--h4-color, #7f8a9b);
  --h4-size: 1.21em;
  --h5-color: #9aa5b5;
  --h5-indicator-color: var(--h5-color, #9aa5b5);
  --h5-line-height: var(--line-height-normal, 1.7);
  --h5-size: 1.1em;
  --h6-color: #808080;
  --h6-indicator-color: var(--h6-color, #808080);
  --h6-line-height: var(--line-height-normal, 1.7);
  --header-active-bg: rgba(31, 34, 37, 0.03);
  --header-height: 36px;
  --heading-formatting: var(--text-faint, #8a7e76);
  --heading-indicator-spacing: 6px;
  --heading-spacing: calc(var(--p-spacing)*1.8);
  --hr-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --icon-color: var(--text-muted, #554d47);
  --icon-color-active: var(--text-accent, hsl(12, 31%, 60%));
  --icon-color-focused: var(--text-normal, #3a3330);
  --icon-color-hover: var(--text-muted, #554d47);
  --inline-code-background: hsla(31, 41%, 90%, 0.6);
  --inline-code-normal: #eb5757;
  --inline-title-color: var(--text-normal, #3a3330);
  --inline-title-size: var(--h1-size, 1.6rem);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #8a7e76);
  --input-placeholder-color: var(--text-faint, #8a7e76);
  --interactive-accent: var(--color-accent-1, hsl(11, 31.31%, 64.5%));
  --interactive-accent-hover: var(--color-accent-2, hsl(9, 31.62%, 69%));
  --interactive-accent-hsl: var(--color-accent-hsl, 12, 31%, 60%);
  --interactive-hover: var(--color-base-10, #eee6df);
  --interactive-normal: var(--color-base-00, #f8f4f0);
  --light: var(--background-primary, var(--color-base-00, rgb(243, 237, 233)));
  --lightgray: var(--background-secondary, var(--color-base-20, rgb(232, 223, 217)));
  --line-height-normal: var(--paragraph-line-height, 1.7);
  --link-color: var(--text-accent, hsl(12, 31%, 60%));
  --link-color-hover: var(--text-accent-hover, hsl(9, 31.62%, 69%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, hsl(12, 31%, 60%));
  --link-external-color-hover: var(--text-accent-hover, hsl(9, 31.62%, 69%));
  --link-unresolved-color: var(--text-accent, hsl(12, 31%, 60%));
  --list-marker-color: var(--text-faint, #8a7e76);
  --list-marker-color-collapsed: var(--text-accent, hsl(12, 31%, 60%));
  --list-marker-color-hover: var(--text-muted, #554d47);
  --list-spacing: 0.225em;
  --menu-background: var(--background-secondary, rgb(232, 223, 217));
  --menu-border-color: var(--background-modifier-border-hover, #b6a79d);
  --metadata-border-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --metadata-divider-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --metadata-input-font-size: var(--font-smaller, 14px);
  --metadata-input-text-color: var(--text-normal, #3a3330);
  --metadata-label-text-color: var(--text-muted, #554d47);
  --metadata-label-text-color-hover: var(--text-muted, #554d47);
  --mod-left-ribbon-background: transparent;
  --mod-left-ribbon-background-collapsed: transparent;
  --mod-left-split-background: transparent;
  --mod-right-split-background: transparent;
  --mod-root-background: transparent;
  --mod-root-border: 0px 1px 0px 1px solid var(--background-modifier-border);
  --mod-root-header-background: transparent;
  --mod-root-header-margin: 0px 0px 4px 0px;
  --modal-background: var(--background-primary, rgb(243, 237, 233));
  --modal-bg-blur: 3px;
  --nav-button-container-bg: rgba(31, 34, 37, 0.03);
  --nav-collapse-icon-color: var(--collapse-icon-color, #8a7e76);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #8a7e76);
  --nav-heading-color: var(--text-normal, #3a3330);
  --nav-heading-color-collapsed: var(--text-faint, #8a7e76);
  --nav-heading-color-collapsed-hover: var(--text-muted, #554d47);
  --nav-heading-color-hover: var(--text-normal, #3a3330);
  --nav-indentation-guide-color: var(--indentation-guide-color, transparent);
  --nav-item-color: var(--text-muted, #554d47);
  --nav-item-color-active: var(--text-normal, #3a3330);
  --nav-item-color-highlighted: var(--text-accent, hsl(12, 31%, 60%));
  --nav-item-color-hover: var(--text-normal, #3a3330);
  --nav-item-color-selected: var(--text-normal, #3a3330);
  --nav-tag-color: var(--text-faint, #8a7e76);
  --nav-tag-color-active: var(--text-muted, #554d47);
  --nav-tag-color-hover: var(--text-muted, #554d47);
  --outline-collapsed-icon-opacity: 1;
  --paragraph-letter-spacing: 0.035em;
  --paragraph-line-height: 1.7;
  --paragraph-word-spacing: 0.035em;
  --pdf-background: var(--background-primary, rgb(243, 237, 233));
  --pdf-page-background: var(--background-primary, rgb(243, 237, 233));
  --pdf-sidebar-background: var(--background-primary, rgb(243, 237, 233));
  --pill-border-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --pill-border-color-hover: var(--background-modifier-border-hover, #b6a79d);
  --pill-color: var(--text-muted, #554d47);
  --pill-color-hover: var(--text-normal, #3a3330);
  --pill-color-remove: var(--text-faint, #8a7e76);
  --pill-color-remove-hover: var(--text-accent, hsl(12, 31%, 60%));
  --prompt-background: var(--background-primary, rgb(243, 237, 233));
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent)));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 0px);
  --root-workspace-background: transparent;
  --root-workspace-margin-spacing: 16px;
  --root-workspace-padding-bottom: 28px;
  --root-workspace-radius: var(--radius-m, 8px);
  --root-workspace-shadow: var(--background-modifier-border) 0px 0px 3px 0px,
		var(--background-modifier-border) 0px 1px 2px 0px;
  --search-clear-button-color: var(--text-muted, #554d47);
  --search-icon-color: var(--text-muted, #554d47);
  --search-result-background: var(--background-primary, rgb(243, 237, 233));
  --secondary: var(--text-accent, var(--color-accent, hsl(12, 31%, 60%)));
  --setting-group-heading-color: var(--text-normal, #3a3330);
  --setting-items-background: var(--background-primary-alt, rgb(238, 230, 225));
  --setting-items-border-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #554d47);
  --shiki-code-background: var(--code-background, rgb(238, 230, 225));
  --shiki-code-comment: var(--text-faint, #8a7e76);
  --shiki-code-normal: var(--text-muted, #554d47);
  --shiki-code-punctuation: var(--text-muted, #554d47);
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --shiki-gutter-text-color: var(--text-faint, #8a7e76);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #554d47);
  --shiki-highlight-neutral: var(--shiki-code-normal, #554d47);
  --shiki-terminal-dots-color: var(--text-faint, #8a7e76);
  --shiki-tooltip-background: var(--background-modifier-message, rgb(232, 223, 217));
  --side-dock-actions-border-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --side-dock-actions-shadow: var(--background-modifier-border) 0px 1px 2px
			0px,
		var(--background-modifier-border) 0px 0px 0px 1px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, #b6a79d);
  --slider-track-background: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --status-bar-background: var(--background-secondary, rgb(232, 223, 217));
  --status-bar-border-color: var(--divider-color, hsla(25, 20%, 70%, 0.4));
  --status-bar-text-color: var(--text-muted, #554d47);
  --suggestion-background: var(--background-primary, rgb(243, 237, 233));
  --suggesttion-highlight-color: var(--code-normal, #eb5757);
  --tab-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, #b6a79d);
  --tab-outline-color: var(--divider-color, hsla(25, 20%, 70%, 0.4));
  --tab-stacked-header-width: var(--header-height, 36px);
  --tab-switcher-background: var(--background-secondary, rgb(232, 223, 217));
  --tab-text-color: var(--text-faint, #8a7e76);
  --tab-text-color-active: var(--text-normal, #3a3330);
  --tab-text-color-focused: var(--text-faint, #8a7e76);
  --tab-text-color-focused-active: var(--text-normal, #3a3330);
  --tab-text-color-focused-active-current: var(--text-normal, #3a3330);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(12, 31%, 60%));
  --table-add-button-border-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --table-border-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(11, 31.31%, 64.5%));
  --table-drag-handle-color: var(--text-faint, #8a7e76);
  --table-header-border-color: var(--table-border-color, hsla(25, 20%, 70%, 0.4));
  --table-header-color: var(--text-normal, #3a3330);
  --table-selection-border-color: var(--interactive-accent, hsl(11, 31.31%, 64.5%));
  --tag-border-width: 1px;
  --tag-color: var(--text-accent, hsl(12, 31%, 60%));
  --tag-color-hover: var(--text-accent, hsl(12, 31%, 60%));
  --tag-padding-y: 0.2em;
  --tag-size: var(--font-smaller, 0.8em);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(9, 31.62%, 69%)));
  --text-accent: var(--color-accent, hsl(12, 31%, 60%));
  --text-accent-hover: var(--color-accent-2, hsl(9, 31.62%, 69%));
  --text-faint: var(--color-base-50, #8a7e76);
  --text-highlight-background: rgba(248, 227, 217, 0.9);
  --text-highlight-border-color: rgb(167, 98, 64);
  --text-highlight-border-radius: 4px;
  --text-highlight-color: rgb(102, 80, 63);
  --text-muted: var(--color-base-70, #554d47);
  --text-normal: var(--color-base-100, #3a3330);
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, hsla(25, 20%, 70%, 0.4));
  --titlebar-text-color: var(--text-muted, #554d47);
  --titlebar-text-color-focused: var(--text-normal, #3a3330);
  --traffic-lights-offset-x: var(--header-height, 36px);
  --traffic-lights-offset-y: var(--header-height, 36px);
  --vault-profile-color: var(--text-normal, #3a3330);
  --vault-profile-color-hover: var(--vault-profile-color, #3a3330);
  --workspace-header-background: transparent;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--mod-left-split-background, rgba(0, 0, 0, 0));
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(194, 176, 163, 0.4);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--mod-right-split-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(194, 176, 163, 0.4);
  color: rgb(58, 51, 48);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  --background-modifier-active-hover: hsla(12, 31%, 60%, 0.1);
  --background-modifier-border: hsla(25, 20%, 70%, 0.4);
  --background-modifier-border-focus: #a3958c;
  --background-modifier-border-hover: #b6a79d;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 174, 62, 76;
  --background-modifier-form-field: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-form-field-hover: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-message: rgb(232, 223, 217);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 62, 132, 98;
  --background-primary: rgb(243, 237, 233);
  --background-primary-alt: rgb(238, 230, 225);
  --background-secondary: rgb(232, 223, 217);
  --background-secondary-alt: rgb(225, 215, 208);
  --blockquote-border-color: hsl(25, 20%, 70%);
  --blur-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 174, 62, 76;
  --callout-default: 95, 164, 218;
  --callout-error: 158, 48, 57;
  --callout-example: 94, 72, 146;
  --callout-fail: 174, 62, 76;
  --callout-important: 52, 136, 152;
  --callout-info: 95, 164, 218;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 184, 110, 51;
  --callout-radius: 8px;
  --callout-success: 62, 132, 98;
  --callout-summary: 52, 136, 152;
  --callout-tip: 52, 136, 152;
  --callout-title-weight: 600;
  --callout-todo: 95, 164, 218;
  --callout-warning: 191, 127, 63;
  --canvas-background: rgb(243, 237, 233);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c8b9af;
  --caret-color: #3a3330;
  --checkbox-border-color: #8a7e76;
  --checkbox-border-color-hover: #554d47;
  --checkbox-color: hsl(11, 31.31%, 64.5%);
  --checkbox-color-hover: hsl(9, 31.62%, 69%);
  --checkbox-marker-color: rgb(243, 237, 233);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #554d47;
  --clickable-icon-radius: 4px;
  --code-background: rgb(238, 230, 225);
  --code-border-color: transparent;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #8a7e76;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #eb5757;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #554d47;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #8a7e76;
  --collapse-icon-color-collapsed: hsl(12, 31%, 60%);
  --color-accent: hsl(12, 31%, 60%);
  --color-accent-1: hsl(11, 31.31%, 64.5%);
  --color-accent-2: hsl(9, 31.62%, 69%);
  --color-accent-hsl: 12, 31%, 60%;
  --divider-color: hsla(25, 20%, 70%, 0.4);
  --divider-color-hover: hsl(11, 31.31%, 64.5%);
  --divider-vertical-height: 100%;
  --dropdown-background: #f8f4f0;
  --dropdown-background-hover: #eee6df;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f8f4f0;
  --flair-color: #3a3330;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #b6a79d;
  --graph-node: #554d47;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(12, 31%, 60%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #8a7e76;
  --graph-text: #3a3330;
  --h1-indicator-color: #2d3748;
  --h2-indicator-color: #4a556b;
  --h3-indicator-color: #66788d;
  --h4-indicator-color: #7f8a9b;
  --h5-indicator-color: #9aa5b5;
  --h5-line-height: 1.7;
  --h6-indicator-color: #808080;
  --h6-line-height: 1.7;
  --heading-formatting: #8a7e76;
  --heading-spacing: 1.8rem;
  --hr-color: hsla(25, 20%, 70%, 0.4);
  --interactive-accent: hsl(11, 31.31%, 64.5%);
  --interactive-accent-hover: hsl(9, 31.62%, 69%);
  --interactive-accent-hsl: 12, 31%, 60%;
  --interactive-hover: #eee6df;
  --interactive-normal: #f8f4f0;
  --line-height-normal: 1.7;
  --link-color: hsl(12, 31%, 60%);
  --link-color-hover: hsl(9, 31.62%, 69%);
  --link-external-color: hsl(12, 31%, 60%);
  --link-external-color-hover: hsl(9, 31.62%, 69%);
  --link-unresolved-color: hsl(12, 31%, 60%);
  --link-unresolved-decoration-color: hsla(12, 31%, 60%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgb(232, 223, 217);
  --menu-border-color: #b6a79d;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mod-root-border: 0px 1px 0px 1px solid hsla(25, 20%, 70%, 0.4);
  --pdf-background: rgb(243, 237, 233);
  --pdf-page-background: rgb(243, 237, 233);
  --pdf-sidebar-background: rgb(243, 237, 233);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: hsla(25, 20%, 70%, 0.4) 0px 0px 3px 0px,
		hsla(25, 20%, 70%, 0.4) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #554d47;
  --search-icon-color: #554d47;
  --search-result-background: rgb(243, 237, 233);
  --setting-group-heading-color: #3a3330;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(238, 230, 225);
  --setting-items-border-color: hsla(25, 20%, 70%, 0.4);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #554d47;
  --shiki-code-background: rgb(238, 230, 225);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #8a7e76;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #554d47;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #554d47;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: hsla(25, 20%, 70%, 0.4);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #8a7e76;
  --shiki-gutter-text-color-highlight: #554d47;
  --shiki-highlight-green: rgba(62, 132, 98, 0.5);
  --shiki-highlight-green-background: rgba(62, 132, 98, 0.1);
  --shiki-highlight-neutral: #554d47;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(174, 62, 76, 0.5);
  --shiki-highlight-red-background: rgba(174, 62, 76, 0.1);
  --shiki-terminal-dots-color: #8a7e76;
  --shiki-tooltip-background: rgb(232, 223, 217);
  --side-dock-actions-border-color: hsla(25, 20%, 70%, 0.4);
  --side-dock-actions-shadow: hsla(25, 20%, 70%, 0.4) 0px 1px 2px
			0px,
		hsla(25, 20%, 70%, 0.4) 0px 0px 0px 1px;
  --suggestion-background: rgb(243, 237, 233);
  --suggesttion-highlight-color: #eb5757;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgba(0, 0, 0, 0.067);
  --tab-divider-color: #b6a79d;
  --tab-font-size: 13px;
  --tab-outline-color: hsla(25, 20%, 70%, 0.4);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: rgb(232, 223, 217);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 223, 217), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 31%, 60%);
  --tab-text-color: #8a7e76;
  --tab-text-color-active: #3a3330;
  --tab-text-color-focused: #8a7e76;
  --tab-text-color-focused-active: #3a3330;
  --tab-text-color-focused-active-current: #3a3330;
  --tab-text-color-focused-highlighted: hsl(12, 31%, 60%);
  --table-add-button-border-color: hsla(25, 20%, 70%, 0.4);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(25, 20%, 70%, 0.4);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(11, 31.31%, 64.5%);
  --table-drag-handle-color: #8a7e76;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsla(25, 20%, 70%, 0.4);
  --table-header-border-width: 1px;
  --table-header-color: #3a3330;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(12, 31%, 60%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(11, 31.31%, 64.5%);
  --table-text-size: 16px;
  --tag-background: hsla(12, 31%, 60%, 0.1);
  --tag-background-hover: hsla(12, 31%, 60%, 0.2);
  --tag-border-color: hsla(12, 31%, 60%, 0.15);
  --tag-border-color-hover: hsla(12, 31%, 60%, 0.15);
  --tag-color: hsl(12, 31%, 60%);
  --tag-color-hover: hsl(12, 31%, 60%);
  --tag-size: 0.8em;
  --text-accent: hsl(12, 31%, 60%);
  --text-accent-hover: hsl(9, 31.62%, 69%);
  --text-error: #e93147;
  --text-faint: #8a7e76;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #554d47;
  --text-normal: #3a3330;
  --text-selection: hsla(12, 31%, 60%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(45, 55, 72);
  border-bottom-color: rgb(45, 55, 72);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(45, 55, 72);
  border-left-width: 0px;
  border-right-color: rgb(45, 55, 72);
  border-right-width: 0px;
  border-top-color: rgb(45, 55, 72);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(45, 55, 72));
  content: " ";
  font-family: var(--h1-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 27.04px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.4056px);
  line-height: var(--h1-line-height, 32.448px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -2.704);
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(45, 55, 72));
  outline: rgb(45, 55, 72) none 0px;
  text-decoration-color: rgb(45, 55, 72);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(58, 51, 48));
  outline: rgb(58, 51, 48) none 0px;
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(58, 51, 48));
  outline: rgb(58, 51, 48) none 0px;
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(45, 55, 72));
  outline: rgb(45, 55, 72) none 0px;
  text-decoration-color: rgb(45, 55, 72);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-background, rgba(248, 227, 217, 0.9));
  color: var(--text-highlight-color, rgb(102, 80, 63));
  outline: rgb(102, 80, 63) none 0px;
  text-decoration-color: rgb(102, 80, 63);
}

html[saved-theme="light"] body del {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(58, 51, 48));
}

html[saved-theme="light"] body h2 {
  --background-modifier-active-hover: hsla(12, 31%, 60%, 0.1);
  --background-modifier-border: hsla(25, 20%, 70%, 0.4);
  --background-modifier-border-focus: #a3958c;
  --background-modifier-border-hover: #b6a79d;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 174, 62, 76;
  --background-modifier-form-field: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-form-field-hover: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-message: rgb(232, 223, 217);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 62, 132, 98;
  --background-primary: rgb(243, 237, 233);
  --background-primary-alt: rgb(238, 230, 225);
  --background-secondary: rgb(232, 223, 217);
  --background-secondary-alt: rgb(225, 215, 208);
  --blockquote-border-color: hsl(25, 20%, 70%);
  --blur-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 174, 62, 76;
  --callout-default: 95, 164, 218;
  --callout-error: 158, 48, 57;
  --callout-example: 94, 72, 146;
  --callout-fail: 174, 62, 76;
  --callout-important: 52, 136, 152;
  --callout-info: 95, 164, 218;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 184, 110, 51;
  --callout-radius: 8px;
  --callout-success: 62, 132, 98;
  --callout-summary: 52, 136, 152;
  --callout-tip: 52, 136, 152;
  --callout-title-weight: 600;
  --callout-todo: 95, 164, 218;
  --callout-warning: 191, 127, 63;
  --canvas-background: rgb(243, 237, 233);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c8b9af;
  --caret-color: #3a3330;
  --checkbox-border-color: #8a7e76;
  --checkbox-border-color-hover: #554d47;
  --checkbox-color: hsl(11, 31.31%, 64.5%);
  --checkbox-color-hover: hsl(9, 31.62%, 69%);
  --checkbox-marker-color: rgb(243, 237, 233);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #554d47;
  --clickable-icon-radius: 4px;
  --code-background: rgb(238, 230, 225);
  --code-border-color: transparent;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #8a7e76;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #eb5757;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #554d47;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #8a7e76;
  --collapse-icon-color-collapsed: hsl(12, 31%, 60%);
  --color-accent: hsl(12, 31%, 60%);
  --color-accent-1: hsl(11, 31.31%, 64.5%);
  --color-accent-2: hsl(9, 31.62%, 69%);
  --color-accent-hsl: 12, 31%, 60%;
  --divider-color: hsla(25, 20%, 70%, 0.4);
  --divider-color-hover: hsl(11, 31.31%, 64.5%);
  --divider-vertical-height: 100%;
  --dropdown-background: #f8f4f0;
  --dropdown-background-hover: #eee6df;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f8f4f0;
  --flair-color: #3a3330;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h2-weight, 680);
  --graph-line: #b6a79d;
  --graph-node: #554d47;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(12, 31%, 60%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #8a7e76;
  --graph-text: #3a3330;
  --h1-indicator-color: #2d3748;
  --h2-indicator-color: #4a556b;
  --h3-indicator-color: #66788d;
  --h4-indicator-color: #7f8a9b;
  --h5-indicator-color: #9aa5b5;
  --h5-line-height: 1.7;
  --h6-indicator-color: #808080;
  --h6-line-height: 1.7;
  --heading-formatting: #8a7e76;
  --heading-spacing: 1.8rem;
  --hr-color: hsla(25, 20%, 70%, 0.4);
  --interactive-accent: hsl(11, 31.31%, 64.5%);
  --interactive-accent-hover: hsl(9, 31.62%, 69%);
  --interactive-accent-hsl: 12, 31%, 60%;
  --interactive-hover: #eee6df;
  --interactive-normal: #f8f4f0;
  --line-height-normal: 1.7;
  --link-color: hsl(12, 31%, 60%);
  --link-color-hover: hsl(9, 31.62%, 69%);
  --link-external-color: hsl(12, 31%, 60%);
  --link-external-color-hover: hsl(9, 31.62%, 69%);
  --link-unresolved-color: hsl(12, 31%, 60%);
  --link-unresolved-decoration-color: hsla(12, 31%, 60%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgb(232, 223, 217);
  --menu-border-color: #b6a79d;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mod-root-border: 0px 1px 0px 1px solid hsla(25, 20%, 70%, 0.4);
  --pdf-background: rgb(243, 237, 233);
  --pdf-page-background: rgb(243, 237, 233);
  --pdf-sidebar-background: rgb(243, 237, 233);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: hsla(25, 20%, 70%, 0.4) 0px 0px 3px 0px,
		hsla(25, 20%, 70%, 0.4) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #554d47;
  --search-icon-color: #554d47;
  --search-result-background: rgb(243, 237, 233);
  --setting-group-heading-color: #3a3330;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(238, 230, 225);
  --setting-items-border-color: hsla(25, 20%, 70%, 0.4);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #554d47;
  --shiki-code-background: rgb(238, 230, 225);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #8a7e76;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #554d47;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #554d47;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: hsla(25, 20%, 70%, 0.4);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #8a7e76;
  --shiki-gutter-text-color-highlight: #554d47;
  --shiki-highlight-green: rgba(62, 132, 98, 0.5);
  --shiki-highlight-green-background: rgba(62, 132, 98, 0.1);
  --shiki-highlight-neutral: #554d47;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(174, 62, 76, 0.5);
  --shiki-highlight-red-background: rgba(174, 62, 76, 0.1);
  --shiki-terminal-dots-color: #8a7e76;
  --shiki-tooltip-background: rgb(232, 223, 217);
  --side-dock-actions-border-color: hsla(25, 20%, 70%, 0.4);
  --side-dock-actions-shadow: hsla(25, 20%, 70%, 0.4) 0px 1px 2px
			0px,
		hsla(25, 20%, 70%, 0.4) 0px 0px 0px 1px;
  --suggestion-background: rgb(243, 237, 233);
  --suggesttion-highlight-color: #eb5757;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgba(0, 0, 0, 0.067);
  --tab-divider-color: #b6a79d;
  --tab-font-size: 13px;
  --tab-outline-color: hsla(25, 20%, 70%, 0.4);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: rgb(232, 223, 217);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 223, 217), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 31%, 60%);
  --tab-text-color: #8a7e76;
  --tab-text-color-active: #3a3330;
  --tab-text-color-focused: #8a7e76;
  --tab-text-color-focused-active: #3a3330;
  --tab-text-color-focused-active-current: #3a3330;
  --tab-text-color-focused-highlighted: hsl(12, 31%, 60%);
  --table-add-button-border-color: hsla(25, 20%, 70%, 0.4);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(25, 20%, 70%, 0.4);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(11, 31.31%, 64.5%);
  --table-drag-handle-color: #8a7e76;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsla(25, 20%, 70%, 0.4);
  --table-header-border-width: 1px;
  --table-header-color: #3a3330;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(12, 31%, 60%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(11, 31.31%, 64.5%);
  --table-text-size: 16px;
  --tag-background: hsla(12, 31%, 60%, 0.1);
  --tag-background-hover: hsla(12, 31%, 60%, 0.2);
  --tag-border-color: hsla(12, 31%, 60%, 0.15);
  --tag-border-color-hover: hsla(12, 31%, 60%, 0.15);
  --tag-color: hsl(12, 31%, 60%);
  --tag-color-hover: hsl(12, 31%, 60%);
  --tag-size: 0.8em;
  --text-accent: hsl(12, 31%, 60%);
  --text-accent-hover: hsl(9, 31.62%, 69%);
  --text-error: #e93147;
  --text-faint: #8a7e76;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #554d47;
  --text-normal: #3a3330;
  --text-selection: hsla(12, 31%, 60%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(74, 85, 107);
  border-bottom-color: rgb(74, 85, 107);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(74, 85, 107);
  border-left-width: 0px;
  border-right-color: rgb(74, 85, 107);
  border-right-width: 0px;
  border-top-color: rgb(74, 85, 107);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(74, 85, 107));
  content: " ";
  font-family: var(--h2-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 24.16px);
  font-weight: var(--font-weight, 680);
  letter-spacing: var(--h2-letter-spacing, -0.26576px);
  line-height: var(--h2-line-height, 28.992px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -2.416);
}

html[saved-theme="light"] body h3 {
  --background-modifier-active-hover: hsla(12, 31%, 60%, 0.1);
  --background-modifier-border: hsla(25, 20%, 70%, 0.4);
  --background-modifier-border-focus: #a3958c;
  --background-modifier-border-hover: #b6a79d;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 174, 62, 76;
  --background-modifier-form-field: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-form-field-hover: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-message: rgb(232, 223, 217);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 62, 132, 98;
  --background-primary: rgb(243, 237, 233);
  --background-primary-alt: rgb(238, 230, 225);
  --background-secondary: rgb(232, 223, 217);
  --background-secondary-alt: rgb(225, 215, 208);
  --blockquote-border-color: hsl(25, 20%, 70%);
  --blur-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 174, 62, 76;
  --callout-default: 95, 164, 218;
  --callout-error: 158, 48, 57;
  --callout-example: 94, 72, 146;
  --callout-fail: 174, 62, 76;
  --callout-important: 52, 136, 152;
  --callout-info: 95, 164, 218;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 184, 110, 51;
  --callout-radius: 8px;
  --callout-success: 62, 132, 98;
  --callout-summary: 52, 136, 152;
  --callout-tip: 52, 136, 152;
  --callout-title-weight: 600;
  --callout-todo: 95, 164, 218;
  --callout-warning: 191, 127, 63;
  --canvas-background: rgb(243, 237, 233);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c8b9af;
  --caret-color: #3a3330;
  --checkbox-border-color: #8a7e76;
  --checkbox-border-color-hover: #554d47;
  --checkbox-color: hsl(11, 31.31%, 64.5%);
  --checkbox-color-hover: hsl(9, 31.62%, 69%);
  --checkbox-marker-color: rgb(243, 237, 233);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #554d47;
  --clickable-icon-radius: 4px;
  --code-background: rgb(238, 230, 225);
  --code-border-color: transparent;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #8a7e76;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #eb5757;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #554d47;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #8a7e76;
  --collapse-icon-color-collapsed: hsl(12, 31%, 60%);
  --color-accent: hsl(12, 31%, 60%);
  --color-accent-1: hsl(11, 31.31%, 64.5%);
  --color-accent-2: hsl(9, 31.62%, 69%);
  --color-accent-hsl: 12, 31%, 60%;
  --divider-color: hsla(25, 20%, 70%, 0.4);
  --divider-color-hover: hsl(11, 31.31%, 64.5%);
  --divider-vertical-height: 100%;
  --dropdown-background: #f8f4f0;
  --dropdown-background-hover: #eee6df;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f8f4f0;
  --flair-color: #3a3330;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h3-weight, 660);
  --graph-line: #b6a79d;
  --graph-node: #554d47;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(12, 31%, 60%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #8a7e76;
  --graph-text: #3a3330;
  --h1-indicator-color: #2d3748;
  --h2-indicator-color: #4a556b;
  --h3-indicator-color: #66788d;
  --h4-indicator-color: #7f8a9b;
  --h5-indicator-color: #9aa5b5;
  --h5-line-height: 1.7;
  --h6-indicator-color: #808080;
  --h6-line-height: 1.7;
  --heading-formatting: #8a7e76;
  --heading-spacing: 1.8rem;
  --hr-color: hsla(25, 20%, 70%, 0.4);
  --interactive-accent: hsl(11, 31.31%, 64.5%);
  --interactive-accent-hover: hsl(9, 31.62%, 69%);
  --interactive-accent-hsl: 12, 31%, 60%;
  --interactive-hover: #eee6df;
  --interactive-normal: #f8f4f0;
  --line-height-normal: 1.7;
  --link-color: hsl(12, 31%, 60%);
  --link-color-hover: hsl(9, 31.62%, 69%);
  --link-external-color: hsl(12, 31%, 60%);
  --link-external-color-hover: hsl(9, 31.62%, 69%);
  --link-unresolved-color: hsl(12, 31%, 60%);
  --link-unresolved-decoration-color: hsla(12, 31%, 60%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgb(232, 223, 217);
  --menu-border-color: #b6a79d;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mod-root-border: 0px 1px 0px 1px solid hsla(25, 20%, 70%, 0.4);
  --pdf-background: rgb(243, 237, 233);
  --pdf-page-background: rgb(243, 237, 233);
  --pdf-sidebar-background: rgb(243, 237, 233);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: hsla(25, 20%, 70%, 0.4) 0px 0px 3px 0px,
		hsla(25, 20%, 70%, 0.4) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #554d47;
  --search-icon-color: #554d47;
  --search-result-background: rgb(243, 237, 233);
  --setting-group-heading-color: #3a3330;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(238, 230, 225);
  --setting-items-border-color: hsla(25, 20%, 70%, 0.4);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #554d47;
  --shiki-code-background: rgb(238, 230, 225);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #8a7e76;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #554d47;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #554d47;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: hsla(25, 20%, 70%, 0.4);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #8a7e76;
  --shiki-gutter-text-color-highlight: #554d47;
  --shiki-highlight-green: rgba(62, 132, 98, 0.5);
  --shiki-highlight-green-background: rgba(62, 132, 98, 0.1);
  --shiki-highlight-neutral: #554d47;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(174, 62, 76, 0.5);
  --shiki-highlight-red-background: rgba(174, 62, 76, 0.1);
  --shiki-terminal-dots-color: #8a7e76;
  --shiki-tooltip-background: rgb(232, 223, 217);
  --side-dock-actions-border-color: hsla(25, 20%, 70%, 0.4);
  --side-dock-actions-shadow: hsla(25, 20%, 70%, 0.4) 0px 1px 2px
			0px,
		hsla(25, 20%, 70%, 0.4) 0px 0px 0px 1px;
  --suggestion-background: rgb(243, 237, 233);
  --suggesttion-highlight-color: #eb5757;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgba(0, 0, 0, 0.067);
  --tab-divider-color: #b6a79d;
  --tab-font-size: 13px;
  --tab-outline-color: hsla(25, 20%, 70%, 0.4);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: rgb(232, 223, 217);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 223, 217), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 31%, 60%);
  --tab-text-color: #8a7e76;
  --tab-text-color-active: #3a3330;
  --tab-text-color-focused: #8a7e76;
  --tab-text-color-focused-active: #3a3330;
  --tab-text-color-focused-active-current: #3a3330;
  --tab-text-color-focused-highlighted: hsl(12, 31%, 60%);
  --table-add-button-border-color: hsla(25, 20%, 70%, 0.4);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(25, 20%, 70%, 0.4);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(11, 31.31%, 64.5%);
  --table-drag-handle-color: #8a7e76;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsla(25, 20%, 70%, 0.4);
  --table-header-border-width: 1px;
  --table-header-color: #3a3330;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(12, 31%, 60%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(11, 31.31%, 64.5%);
  --table-text-size: 16px;
  --tag-background: hsla(12, 31%, 60%, 0.1);
  --tag-background-hover: hsla(12, 31%, 60%, 0.2);
  --tag-border-color: hsla(12, 31%, 60%, 0.15);
  --tag-border-color-hover: hsla(12, 31%, 60%, 0.15);
  --tag-color: hsl(12, 31%, 60%);
  --tag-color-hover: hsl(12, 31%, 60%);
  --tag-size: 0.8em;
  --text-accent: hsl(12, 31%, 60%);
  --text-accent-hover: hsl(9, 31.62%, 69%);
  --text-error: #e93147;
  --text-faint: #8a7e76;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #554d47;
  --text-normal: #3a3330;
  --text-selection: hsla(12, 31%, 60%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(102, 120, 141);
  border-bottom-color: rgb(102, 120, 141);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(102, 120, 141);
  border-left-width: 0px;
  border-right-color: rgb(102, 120, 141);
  border-right-width: 0px;
  border-top-color: rgb(102, 120, 141);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(102, 120, 141));
  content: " ";
  font-family: var(--h3-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 21.6px);
  font-weight: var(--font-weight, 660);
  letter-spacing: var(--h3-letter-spacing, -0.1728px);
  line-height: var(--h3-line-height, 28.08px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -2.16);
}

html[saved-theme="light"] body h4 {
  --background-modifier-active-hover: hsla(12, 31%, 60%, 0.1);
  --background-modifier-border: hsla(25, 20%, 70%, 0.4);
  --background-modifier-border-focus: #a3958c;
  --background-modifier-border-hover: #b6a79d;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 174, 62, 76;
  --background-modifier-form-field: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-form-field-hover: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-message: rgb(232, 223, 217);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 62, 132, 98;
  --background-primary: rgb(243, 237, 233);
  --background-primary-alt: rgb(238, 230, 225);
  --background-secondary: rgb(232, 223, 217);
  --background-secondary-alt: rgb(225, 215, 208);
  --blockquote-border-color: hsl(25, 20%, 70%);
  --blur-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 174, 62, 76;
  --callout-default: 95, 164, 218;
  --callout-error: 158, 48, 57;
  --callout-example: 94, 72, 146;
  --callout-fail: 174, 62, 76;
  --callout-important: 52, 136, 152;
  --callout-info: 95, 164, 218;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 184, 110, 51;
  --callout-radius: 8px;
  --callout-success: 62, 132, 98;
  --callout-summary: 52, 136, 152;
  --callout-tip: 52, 136, 152;
  --callout-title-weight: 600;
  --callout-todo: 95, 164, 218;
  --callout-warning: 191, 127, 63;
  --canvas-background: rgb(243, 237, 233);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c8b9af;
  --caret-color: #3a3330;
  --checkbox-border-color: #8a7e76;
  --checkbox-border-color-hover: #554d47;
  --checkbox-color: hsl(11, 31.31%, 64.5%);
  --checkbox-color-hover: hsl(9, 31.62%, 69%);
  --checkbox-marker-color: rgb(243, 237, 233);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #554d47;
  --clickable-icon-radius: 4px;
  --code-background: rgb(238, 230, 225);
  --code-border-color: transparent;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #8a7e76;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #eb5757;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #554d47;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #8a7e76;
  --collapse-icon-color-collapsed: hsl(12, 31%, 60%);
  --color-accent: hsl(12, 31%, 60%);
  --color-accent-1: hsl(11, 31.31%, 64.5%);
  --color-accent-2: hsl(9, 31.62%, 69%);
  --color-accent-hsl: 12, 31%, 60%;
  --divider-color: hsla(25, 20%, 70%, 0.4);
  --divider-color-hover: hsl(11, 31.31%, 64.5%);
  --divider-vertical-height: 100%;
  --dropdown-background: #f8f4f0;
  --dropdown-background-hover: #eee6df;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f8f4f0;
  --flair-color: #3a3330;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h4-weight, 640);
  --graph-line: #b6a79d;
  --graph-node: #554d47;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(12, 31%, 60%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #8a7e76;
  --graph-text: #3a3330;
  --h1-indicator-color: #2d3748;
  --h2-indicator-color: #4a556b;
  --h3-indicator-color: #66788d;
  --h4-indicator-color: #7f8a9b;
  --h5-indicator-color: #9aa5b5;
  --h5-line-height: 1.7;
  --h6-indicator-color: #808080;
  --h6-line-height: 1.7;
  --heading-formatting: #8a7e76;
  --heading-spacing: 1.8rem;
  --hr-color: hsla(25, 20%, 70%, 0.4);
  --interactive-accent: hsl(11, 31.31%, 64.5%);
  --interactive-accent-hover: hsl(9, 31.62%, 69%);
  --interactive-accent-hsl: 12, 31%, 60%;
  --interactive-hover: #eee6df;
  --interactive-normal: #f8f4f0;
  --line-height-normal: 1.7;
  --link-color: hsl(12, 31%, 60%);
  --link-color-hover: hsl(9, 31.62%, 69%);
  --link-external-color: hsl(12, 31%, 60%);
  --link-external-color-hover: hsl(9, 31.62%, 69%);
  --link-unresolved-color: hsl(12, 31%, 60%);
  --link-unresolved-decoration-color: hsla(12, 31%, 60%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgb(232, 223, 217);
  --menu-border-color: #b6a79d;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mod-root-border: 0px 1px 0px 1px solid hsla(25, 20%, 70%, 0.4);
  --pdf-background: rgb(243, 237, 233);
  --pdf-page-background: rgb(243, 237, 233);
  --pdf-sidebar-background: rgb(243, 237, 233);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: hsla(25, 20%, 70%, 0.4) 0px 0px 3px 0px,
		hsla(25, 20%, 70%, 0.4) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #554d47;
  --search-icon-color: #554d47;
  --search-result-background: rgb(243, 237, 233);
  --setting-group-heading-color: #3a3330;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(238, 230, 225);
  --setting-items-border-color: hsla(25, 20%, 70%, 0.4);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #554d47;
  --shiki-code-background: rgb(238, 230, 225);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #8a7e76;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #554d47;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #554d47;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: hsla(25, 20%, 70%, 0.4);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #8a7e76;
  --shiki-gutter-text-color-highlight: #554d47;
  --shiki-highlight-green: rgba(62, 132, 98, 0.5);
  --shiki-highlight-green-background: rgba(62, 132, 98, 0.1);
  --shiki-highlight-neutral: #554d47;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(174, 62, 76, 0.5);
  --shiki-highlight-red-background: rgba(174, 62, 76, 0.1);
  --shiki-terminal-dots-color: #8a7e76;
  --shiki-tooltip-background: rgb(232, 223, 217);
  --side-dock-actions-border-color: hsla(25, 20%, 70%, 0.4);
  --side-dock-actions-shadow: hsla(25, 20%, 70%, 0.4) 0px 1px 2px
			0px,
		hsla(25, 20%, 70%, 0.4) 0px 0px 0px 1px;
  --suggestion-background: rgb(243, 237, 233);
  --suggesttion-highlight-color: #eb5757;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgba(0, 0, 0, 0.067);
  --tab-divider-color: #b6a79d;
  --tab-font-size: 13px;
  --tab-outline-color: hsla(25, 20%, 70%, 0.4);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: rgb(232, 223, 217);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 223, 217), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 31%, 60%);
  --tab-text-color: #8a7e76;
  --tab-text-color-active: #3a3330;
  --tab-text-color-focused: #8a7e76;
  --tab-text-color-focused-active: #3a3330;
  --tab-text-color-focused-active-current: #3a3330;
  --tab-text-color-focused-highlighted: hsl(12, 31%, 60%);
  --table-add-button-border-color: hsla(25, 20%, 70%, 0.4);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(25, 20%, 70%, 0.4);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(11, 31.31%, 64.5%);
  --table-drag-handle-color: #8a7e76;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsla(25, 20%, 70%, 0.4);
  --table-header-border-width: 1px;
  --table-header-color: #3a3330;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(12, 31%, 60%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(11, 31.31%, 64.5%);
  --table-text-size: 16px;
  --tag-background: hsla(12, 31%, 60%, 0.1);
  --tag-background-hover: hsla(12, 31%, 60%, 0.2);
  --tag-border-color: hsla(12, 31%, 60%, 0.15);
  --tag-border-color-hover: hsla(12, 31%, 60%, 0.15);
  --tag-color: hsl(12, 31%, 60%);
  --tag-color-hover: hsl(12, 31%, 60%);
  --tag-size: 0.8em;
  --text-accent: hsl(12, 31%, 60%);
  --text-accent-hover: hsl(9, 31.62%, 69%);
  --text-error: #e93147;
  --text-faint: #8a7e76;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #554d47;
  --text-normal: #3a3330;
  --text-selection: hsla(12, 31%, 60%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(127, 138, 155);
  border-bottom-color: rgb(127, 138, 155);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(127, 138, 155);
  border-left-width: 0px;
  border-right-color: rgb(127, 138, 155);
  border-right-width: 0px;
  border-top-color: rgb(127, 138, 155);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(127, 138, 155));
  content: " ";
  font-family: var(--h4-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 19.36px);
  font-weight: var(--font-weight, 640);
  letter-spacing: var(--h4-letter-spacing, -0.0968px);
  line-height: var(--h4-line-height, 27.104px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -1.936);
}

html[saved-theme="light"] body h5 {
  --background-modifier-active-hover: hsla(12, 31%, 60%, 0.1);
  --background-modifier-border: hsla(25, 20%, 70%, 0.4);
  --background-modifier-border-focus: #a3958c;
  --background-modifier-border-hover: #b6a79d;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 174, 62, 76;
  --background-modifier-form-field: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-form-field-hover: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-message: rgb(232, 223, 217);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 62, 132, 98;
  --background-primary: rgb(243, 237, 233);
  --background-primary-alt: rgb(238, 230, 225);
  --background-secondary: rgb(232, 223, 217);
  --background-secondary-alt: rgb(225, 215, 208);
  --blockquote-border-color: hsl(25, 20%, 70%);
  --blur-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 174, 62, 76;
  --callout-default: 95, 164, 218;
  --callout-error: 158, 48, 57;
  --callout-example: 94, 72, 146;
  --callout-fail: 174, 62, 76;
  --callout-important: 52, 136, 152;
  --callout-info: 95, 164, 218;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 184, 110, 51;
  --callout-radius: 8px;
  --callout-success: 62, 132, 98;
  --callout-summary: 52, 136, 152;
  --callout-tip: 52, 136, 152;
  --callout-title-weight: 600;
  --callout-todo: 95, 164, 218;
  --callout-warning: 191, 127, 63;
  --canvas-background: rgb(243, 237, 233);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c8b9af;
  --caret-color: #3a3330;
  --checkbox-border-color: #8a7e76;
  --checkbox-border-color-hover: #554d47;
  --checkbox-color: hsl(11, 31.31%, 64.5%);
  --checkbox-color-hover: hsl(9, 31.62%, 69%);
  --checkbox-marker-color: rgb(243, 237, 233);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #554d47;
  --clickable-icon-radius: 4px;
  --code-background: rgb(238, 230, 225);
  --code-border-color: transparent;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #8a7e76;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #eb5757;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #554d47;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #8a7e76;
  --collapse-icon-color-collapsed: hsl(12, 31%, 60%);
  --color-accent: hsl(12, 31%, 60%);
  --color-accent-1: hsl(11, 31.31%, 64.5%);
  --color-accent-2: hsl(9, 31.62%, 69%);
  --color-accent-hsl: 12, 31%, 60%;
  --divider-color: hsla(25, 20%, 70%, 0.4);
  --divider-color-hover: hsl(11, 31.31%, 64.5%);
  --divider-vertical-height: 100%;
  --dropdown-background: #f8f4f0;
  --dropdown-background-hover: #eee6df;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f8f4f0;
  --flair-color: #3a3330;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h5-weight, 620);
  --graph-line: #b6a79d;
  --graph-node: #554d47;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(12, 31%, 60%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #8a7e76;
  --graph-text: #3a3330;
  --h1-indicator-color: #2d3748;
  --h2-indicator-color: #4a556b;
  --h3-indicator-color: #66788d;
  --h4-indicator-color: #7f8a9b;
  --h5-indicator-color: #9aa5b5;
  --h5-line-height: 1.7;
  --h6-indicator-color: #808080;
  --h6-line-height: 1.7;
  --heading-formatting: #8a7e76;
  --heading-spacing: 1.8rem;
  --hr-color: hsla(25, 20%, 70%, 0.4);
  --interactive-accent: hsl(11, 31.31%, 64.5%);
  --interactive-accent-hover: hsl(9, 31.62%, 69%);
  --interactive-accent-hsl: 12, 31%, 60%;
  --interactive-hover: #eee6df;
  --interactive-normal: #f8f4f0;
  --line-height-normal: 1.7;
  --link-color: hsl(12, 31%, 60%);
  --link-color-hover: hsl(9, 31.62%, 69%);
  --link-external-color: hsl(12, 31%, 60%);
  --link-external-color-hover: hsl(9, 31.62%, 69%);
  --link-unresolved-color: hsl(12, 31%, 60%);
  --link-unresolved-decoration-color: hsla(12, 31%, 60%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgb(232, 223, 217);
  --menu-border-color: #b6a79d;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mod-root-border: 0px 1px 0px 1px solid hsla(25, 20%, 70%, 0.4);
  --pdf-background: rgb(243, 237, 233);
  --pdf-page-background: rgb(243, 237, 233);
  --pdf-sidebar-background: rgb(243, 237, 233);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: hsla(25, 20%, 70%, 0.4) 0px 0px 3px 0px,
		hsla(25, 20%, 70%, 0.4) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #554d47;
  --search-icon-color: #554d47;
  --search-result-background: rgb(243, 237, 233);
  --setting-group-heading-color: #3a3330;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(238, 230, 225);
  --setting-items-border-color: hsla(25, 20%, 70%, 0.4);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #554d47;
  --shiki-code-background: rgb(238, 230, 225);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #8a7e76;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #554d47;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #554d47;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: hsla(25, 20%, 70%, 0.4);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #8a7e76;
  --shiki-gutter-text-color-highlight: #554d47;
  --shiki-highlight-green: rgba(62, 132, 98, 0.5);
  --shiki-highlight-green-background: rgba(62, 132, 98, 0.1);
  --shiki-highlight-neutral: #554d47;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(174, 62, 76, 0.5);
  --shiki-highlight-red-background: rgba(174, 62, 76, 0.1);
  --shiki-terminal-dots-color: #8a7e76;
  --shiki-tooltip-background: rgb(232, 223, 217);
  --side-dock-actions-border-color: hsla(25, 20%, 70%, 0.4);
  --side-dock-actions-shadow: hsla(25, 20%, 70%, 0.4) 0px 1px 2px
			0px,
		hsla(25, 20%, 70%, 0.4) 0px 0px 0px 1px;
  --suggestion-background: rgb(243, 237, 233);
  --suggesttion-highlight-color: #eb5757;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgba(0, 0, 0, 0.067);
  --tab-divider-color: #b6a79d;
  --tab-font-size: 13px;
  --tab-outline-color: hsla(25, 20%, 70%, 0.4);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: rgb(232, 223, 217);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 223, 217), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 31%, 60%);
  --tab-text-color: #8a7e76;
  --tab-text-color-active: #3a3330;
  --tab-text-color-focused: #8a7e76;
  --tab-text-color-focused-active: #3a3330;
  --tab-text-color-focused-active-current: #3a3330;
  --tab-text-color-focused-highlighted: hsl(12, 31%, 60%);
  --table-add-button-border-color: hsla(25, 20%, 70%, 0.4);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(25, 20%, 70%, 0.4);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(11, 31.31%, 64.5%);
  --table-drag-handle-color: #8a7e76;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsla(25, 20%, 70%, 0.4);
  --table-header-border-width: 1px;
  --table-header-color: #3a3330;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(12, 31%, 60%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(11, 31.31%, 64.5%);
  --table-text-size: 16px;
  --tag-background: hsla(12, 31%, 60%, 0.1);
  --tag-background-hover: hsla(12, 31%, 60%, 0.2);
  --tag-border-color: hsla(12, 31%, 60%, 0.15);
  --tag-border-color-hover: hsla(12, 31%, 60%, 0.15);
  --tag-color: hsl(12, 31%, 60%);
  --tag-color-hover: hsl(12, 31%, 60%);
  --tag-size: 0.8em;
  --text-accent: hsl(12, 31%, 60%);
  --text-accent-hover: hsl(9, 31.62%, 69%);
  --text-error: #e93147;
  --text-faint: #8a7e76;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #554d47;
  --text-normal: #3a3330;
  --text-selection: hsla(12, 31%, 60%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(154, 165, 181);
  border-bottom-color: rgb(154, 165, 181);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(154, 165, 181);
  border-left-width: 0px;
  border-right-color: rgb(154, 165, 181);
  border-right-width: 0px;
  border-top-color: rgb(154, 165, 181);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(154, 165, 181));
  content: " ";
  font-family: var(--h5-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 17.6px);
  font-weight: var(--font-weight, 620);
  letter-spacing: var(--h5-letter-spacing, -0.0352px);
  line-height: var(--h5-line-height, 29.92px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -1.76);
}

html[saved-theme="light"] body h6 {
  --background-modifier-active-hover: hsla(12, 31%, 60%, 0.1);
  --background-modifier-border: hsla(25, 20%, 70%, 0.4);
  --background-modifier-border-focus: #a3958c;
  --background-modifier-border-hover: #b6a79d;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 174, 62, 76;
  --background-modifier-form-field: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-form-field-hover: hsl(
		12,
		31%,
		60%,
		0.1
	);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-message: rgb(232, 223, 217);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 62, 132, 98;
  --background-primary: rgb(243, 237, 233);
  --background-primary-alt: rgb(238, 230, 225);
  --background-secondary: rgb(232, 223, 217);
  --background-secondary-alt: rgb(225, 215, 208);
  --blockquote-border-color: hsl(25, 20%, 70%);
  --blur-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 174, 62, 76;
  --callout-default: 95, 164, 218;
  --callout-error: 158, 48, 57;
  --callout-example: 94, 72, 146;
  --callout-fail: 174, 62, 76;
  --callout-important: 52, 136, 152;
  --callout-info: 95, 164, 218;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 184, 110, 51;
  --callout-radius: 8px;
  --callout-success: 62, 132, 98;
  --callout-summary: 52, 136, 152;
  --callout-tip: 52, 136, 152;
  --callout-title-weight: 600;
  --callout-todo: 95, 164, 218;
  --callout-warning: 191, 127, 63;
  --canvas-background: rgb(243, 237, 233);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c8b9af;
  --caret-color: #3a3330;
  --checkbox-border-color: #8a7e76;
  --checkbox-border-color-hover: #554d47;
  --checkbox-color: hsl(11, 31.31%, 64.5%);
  --checkbox-color-hover: hsl(9, 31.62%, 69%);
  --checkbox-marker-color: rgb(243, 237, 233);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #554d47;
  --clickable-icon-radius: 4px;
  --code-background: rgb(238, 230, 225);
  --code-border-color: transparent;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #8a7e76;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #eb5757;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #554d47;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #8a7e76;
  --collapse-icon-color-collapsed: hsl(12, 31%, 60%);
  --color-accent: hsl(12, 31%, 60%);
  --color-accent-1: hsl(11, 31.31%, 64.5%);
  --color-accent-2: hsl(9, 31.62%, 69%);
  --color-accent-hsl: 12, 31%, 60%;
  --divider-color: hsla(25, 20%, 70%, 0.4);
  --divider-color-hover: hsl(11, 31.31%, 64.5%);
  --divider-vertical-height: 100%;
  --dropdown-background: #f8f4f0;
  --dropdown-background-hover: #eee6df;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f8f4f0;
  --flair-color: #3a3330;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h6-weight, 600);
  --graph-line: #b6a79d;
  --graph-node: #554d47;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(12, 31%, 60%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #8a7e76;
  --graph-text: #3a3330;
  --h1-indicator-color: #2d3748;
  --h2-indicator-color: #4a556b;
  --h3-indicator-color: #66788d;
  --h4-indicator-color: #7f8a9b;
  --h5-indicator-color: #9aa5b5;
  --h5-line-height: 1.7;
  --h6-indicator-color: #808080;
  --h6-line-height: 1.7;
  --heading-formatting: #8a7e76;
  --heading-spacing: 1.8rem;
  --hr-color: hsla(25, 20%, 70%, 0.4);
  --interactive-accent: hsl(11, 31.31%, 64.5%);
  --interactive-accent-hover: hsl(9, 31.62%, 69%);
  --interactive-accent-hsl: 12, 31%, 60%;
  --interactive-hover: #eee6df;
  --interactive-normal: #f8f4f0;
  --line-height-normal: 1.7;
  --link-color: hsl(12, 31%, 60%);
  --link-color-hover: hsl(9, 31.62%, 69%);
  --link-external-color: hsl(12, 31%, 60%);
  --link-external-color-hover: hsl(9, 31.62%, 69%);
  --link-unresolved-color: hsl(12, 31%, 60%);
  --link-unresolved-decoration-color: hsla(12, 31%, 60%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgb(232, 223, 217);
  --menu-border-color: #b6a79d;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mod-root-border: 0px 1px 0px 1px solid hsla(25, 20%, 70%, 0.4);
  --pdf-background: rgb(243, 237, 233);
  --pdf-page-background: rgb(243, 237, 233);
  --pdf-sidebar-background: rgb(243, 237, 233);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(243, 237, 233) 65%, transparent) linear-gradient(rgb(243, 237, 233), color-mix(in srgb, rgb(243, 237, 233) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-workspace-radius: 8px;
  --root-workspace-shadow: hsla(25, 20%, 70%, 0.4) 0px 0px 3px 0px,
		hsla(25, 20%, 70%, 0.4) 0px 1px 2px 0px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #554d47;
  --search-icon-color: #554d47;
  --search-result-background: rgb(243, 237, 233);
  --setting-group-heading-color: #3a3330;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(238, 230, 225);
  --setting-items-border-color: hsla(25, 20%, 70%, 0.4);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #554d47;
  --shiki-code-background: rgb(238, 230, 225);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #8a7e76;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #554d47;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #554d47;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: hsla(25, 20%, 70%, 0.4);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #8a7e76;
  --shiki-gutter-text-color-highlight: #554d47;
  --shiki-highlight-green: rgba(62, 132, 98, 0.5);
  --shiki-highlight-green-background: rgba(62, 132, 98, 0.1);
  --shiki-highlight-neutral: #554d47;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(174, 62, 76, 0.5);
  --shiki-highlight-red-background: rgba(174, 62, 76, 0.1);
  --shiki-terminal-dots-color: #8a7e76;
  --shiki-tooltip-background: rgb(232, 223, 217);
  --side-dock-actions-border-color: hsla(25, 20%, 70%, 0.4);
  --side-dock-actions-shadow: hsla(25, 20%, 70%, 0.4) 0px 1px 2px
			0px,
		hsla(25, 20%, 70%, 0.4) 0px 0px 0px 1px;
  --suggestion-background: rgb(243, 237, 233);
  --suggesttion-highlight-color: #eb5757;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgba(0, 0, 0, 0.067);
  --tab-divider-color: #b6a79d;
  --tab-font-size: 13px;
  --tab-outline-color: hsla(25, 20%, 70%, 0.4);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: rgb(232, 223, 217);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 223, 217), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 31%, 60%);
  --tab-text-color: #8a7e76;
  --tab-text-color-active: #3a3330;
  --tab-text-color-focused: #8a7e76;
  --tab-text-color-focused-active: #3a3330;
  --tab-text-color-focused-active-current: #3a3330;
  --tab-text-color-focused-highlighted: hsl(12, 31%, 60%);
  --table-add-button-border-color: hsla(25, 20%, 70%, 0.4);
  --table-add-button-border-width: 1px;
  --table-border-color: hsla(25, 20%, 70%, 0.4);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(11, 31.31%, 64.5%);
  --table-drag-handle-color: #8a7e76;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsla(25, 20%, 70%, 0.4);
  --table-header-border-width: 1px;
  --table-header-color: #3a3330;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(12, 31%, 60%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(11, 31.31%, 64.5%);
  --table-text-size: 16px;
  --tag-background: hsla(12, 31%, 60%, 0.1);
  --tag-background-hover: hsla(12, 31%, 60%, 0.2);
  --tag-border-color: hsla(12, 31%, 60%, 0.15);
  --tag-border-color-hover: hsla(12, 31%, 60%, 0.15);
  --tag-color: hsl(12, 31%, 60%);
  --tag-color-hover: hsl(12, 31%, 60%);
  --tag-size: 0.8em;
  --text-accent: hsl(12, 31%, 60%);
  --text-accent-hover: hsl(9, 31.62%, 69%);
  --text-error: #e93147;
  --text-faint: #8a7e76;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #554d47;
  --text-normal: #3a3330;
  --text-selection: hsla(12, 31%, 60%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  background-color: rgb(128, 128, 128);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(128, 128, 128));
  content: " ";
  font-family: var(--h6-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 16px);
  font-weight: var(--font-weight, 600);
  line-height: var(--h6-line-height, 27.2px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 0, -1.6);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 126, 118);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(193, 147, 136));
  border-color: rgb(193, 147, 136);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(85, 77, 71));
  outline: rgb(85, 77, 71) none 0px;
  text-decoration-color: rgb(85, 77, 71);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(185, 134, 121));
  outline: rgb(185, 134, 121) none 0px;
  text-decoration-color: rgb(185, 134, 121);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(185, 134, 121));
  outline: rgb(185, 134, 121) none 0px;
  text-decoration-color: rgb(185, 134, 121);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(185, 134, 121));
  outline: rgb(185, 134, 121) none 0px;
  text-decoration: rgba(185, 134, 121, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(185, 134, 121, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body dt {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body ol > li {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body ul > li {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(138, 126, 118));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(237, 228, 222, 0.81));
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body table {
  background-color: rgb(238, 230, 225);
  color: rgb(58, 51, 48);
  width: 233.969px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgb(243, 237, 233));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgb(58, 51, 48);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(58, 51, 48);
  border-right-width: 0px;
  border-top-color: rgba(194, 176, 163, 0.4);
  color: var(--table-text-color, rgb(58, 51, 48));
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgba(194, 176, 163, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(194, 176, 163, 0.4);
  color: var(--table-header-color, rgb(58, 51, 48));
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--inline-code-background, rgba(240, 230, 219, 0.6));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: var(--inline-code-normal, rgb(235, 87, 87));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--codeblock-background, rgb(238, 230, 225));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body figcaption {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(45, 55, 72);
  border-left-color: rgb(45, 55, 72);
  border-right-color: rgb(45, 55, 72);
  border-top-color: rgb(45, 55, 72);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(238, 230, 225));
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(203, 213, 224);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 126, 118);
  border-left-color: rgb(138, 126, 118);
  border-right-color: rgb(138, 126, 118);
  border-top-color: rgb(138, 126, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(138, 126, 118);
  text-decoration: line-through 1px rgb(138, 126, 118);
  text-decoration-color: rgb(138, 126, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(58, 51, 48);
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(184, 110, 51);
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
  background-color: rgb(138, 126, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(191, 143, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg t='1741258757843' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='7141' width='16' height='16'%3E%3Cpath d='M870.623079 147.094124a511.04523 511.04523 0 0 1 135.984362 496.646886 512.581053 512.581053 0 0 1-365.589958 363.4782c-63.352714 16.574094-127.985282 20.669623-190.95404 13.182484l26.364968-118.386386a391.954925 391.954925 0 0 0 413.520445-289.246736 390.803058 390.803058 0 0 0-104.052034-379.796324 392.274888 392.274888 0 0 0-314.459837-110.451298L443.472201 4.454528a513.22098 513.22098 0 0 1 427.150878 142.703589zM306.847913 846.597681c22.077461 13.374462 45.242797 24.445189 69.30403 33.212181l-26.300975 118.386385a513.668928 513.668928 0 0 1-119.21829-57.145428l76.215235-94.453138zM181.550322 725.39562c13.054499 20.029697 28.156762 39.099504 45.30679 57.017442l-76.151243 94.517131-7.103183-7.103183a513.604935 513.604935 0 0 1-71.863736-92.277388l109.811372-52.154002z' fill='%2367C23B' p-id='7142'%3E%3C/path%3E%3Cpath d='M121.589218 563.238268c3.071647 23.549292 8.319043 46.906606 15.742189 69.751978l-109.811371 52.09001A510.981237 510.981237 0 0 1 0.0032 563.238268h121.586018z' fill='%238DD16C' p-id='7143'%3E%3C/path%3E%3Cpath d='M26.880109 340.863841l109.939357 51.770046A390.995036 390.995036 0 0 0 121.589218 460.78605H0.0032a511.3012 511.3012 0 0 1 26.876909-119.922209z' fill='%23B3E09D' p-id='7144'%3E%3C/path%3E%3Cpath d='M150.705869 147.094124l76.151243 94.517131-4.095529 4.415492a392.018918 392.018918 0 0 0-42.107158 54.009789l-110.00335-51.770047c21.309549-35.195952 47.226569-68.472126 77.751059-98.86863l2.303735-2.303735z' fill='%23CBEABB' p-id='7145'%3E%3C/path%3E%3Cpath d='M343.515696 27.875834l27.900791 118.066423a389.971153 389.971153 0 0 0-64.632567 31.484379l-76.151242-94.517131a510.08534 510.08534 0 0 1 112.883018-55.033671z' fill='%23E1F3D9' p-id='7146'%3E%3C/path%3E%3Cpath d='M704.498183 326.721467a51.834039 51.834039 0 0 1 52.601951-20.093689l6.527249 1.855786c14.718307 5.119411 26.364968 16.766072 31.548372 31.420387l1.855787 6.463257c4.287507 19.965704-3.647581 40.571334-18.365888 51.066127l-284.703259 283.99934a57.785355 57.785355 0 0 1-79.22289-0.319963L254.501933 522.154992a51.642061 51.642061 0 0 1 19.709733-92.341381c19.965704-4.223514 40.635327 3.647581 51.194113 18.493874L451.151318 576.484744l253.346865-249.763277z' fill='%2367C23B' p-id='7147'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg t='1741258757843' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='7141' width='16' height='16'%3E%3Cpath d='M870.623079 147.094124a511.04523 511.04523 0 0 1 135.984362 496.646886 512.581053 512.581053 0 0 1-365.589958 363.4782c-63.352714 16.574094-127.985282 20.669623-190.95404 13.182484l26.364968-118.386386a391.954925 391.954925 0 0 0 413.520445-289.246736 390.803058 390.803058 0 0 0-104.052034-379.796324 392.274888 392.274888 0 0 0-314.459837-110.451298L443.472201 4.454528a513.22098 513.22098 0 0 1 427.150878 142.703589zM306.847913 846.597681c22.077461 13.374462 45.242797 24.445189 69.30403 33.212181l-26.300975 118.386385a513.668928 513.668928 0 0 1-119.21829-57.145428l76.215235-94.453138zM181.550322 725.39562c13.054499 20.029697 28.156762 39.099504 45.30679 57.017442l-76.151243 94.517131-7.103183-7.103183a513.604935 513.604935 0 0 1-71.863736-92.277388l109.811372-52.154002z' fill='%2367C23B' p-id='7142'%3E%3C/path%3E%3Cpath d='M121.589218 563.238268c3.071647 23.549292 8.319043 46.906606 15.742189 69.751978l-109.811371 52.09001A510.981237 510.981237 0 0 1 0.0032 563.238268h121.586018z' fill='%238DD16C' p-id='7143'%3E%3C/path%3E%3Cpath d='M26.880109 340.863841l109.939357 51.770046A390.995036 390.995036 0 0 0 121.589218 460.78605H0.0032a511.3012 511.3012 0 0 1 26.876909-119.922209z' fill='%23B3E09D' p-id='7144'%3E%3C/path%3E%3Cpath d='M150.705869 147.094124l76.151243 94.517131-4.095529 4.415492a392.018918 392.018918 0 0 0-42.107158 54.009789l-110.00335-51.770047c21.309549-35.195952 47.226569-68.472126 77.751059-98.86863l2.303735-2.303735z' fill='%23CBEABB' p-id='7145'%3E%3C/path%3E%3Cpath d='M343.515696 27.875834l27.900791 118.066423a389.971153 389.971153 0 0 0-64.632567 31.484379l-76.151242-94.517131a510.08534 510.08534 0 0 1 112.883018-55.033671z' fill='%23E1F3D9' p-id='7146'%3E%3C/path%3E%3Cpath d='M704.498183 326.721467a51.834039 51.834039 0 0 1 52.601951-20.093689l6.527249 1.855786c14.718307 5.119411 26.364968 16.766072 31.548372 31.420387l1.855787 6.463257c4.287507 19.965704-3.647581 40.571334-18.365888 51.066127l-284.703259 283.99934a57.785355 57.785355 0 0 1-79.22289-0.319963L254.501933 522.154992a51.642061 51.642061 0 0 1 19.709733-92.341381c19.965704-4.223514 40.635327 3.647581 51.194113 18.493874L451.151318 576.484744l253.346865-249.763277z' fill='%2367C23B' p-id='7147'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(95, 164, 218);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
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
  background-color: rgb(0, 191, 188);
  color: rgb(138, 126, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(138, 126, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(184, 110, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(184, 110, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(174, 62, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(174, 62, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  color: rgb(191, 143, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(191, 143, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
  color: rgb(174, 62, 76);
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

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(62, 132, 98);
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

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(94, 72, 146);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 52, 136, 152);
  background: rgba(52, 136, 152, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(52, 136, 152, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(52, 136, 152, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(52, 136, 152, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(52, 136, 152, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 174, 62, 76);
  background: rgba(174, 62, 76, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(174, 62, 76, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(174, 62, 76, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(174, 62, 76, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(174, 62, 76, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 158, 48, 57);
  background: rgba(158, 48, 57, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(158, 48, 57, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 48, 57, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(158, 48, 57, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(158, 48, 57, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 94, 72, 146);
  background: rgba(94, 72, 146, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(94, 72, 146, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(94, 72, 146, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(94, 72, 146, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(94, 72, 146, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 174, 62, 76);
  background: rgba(174, 62, 76, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(174, 62, 76, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(174, 62, 76, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(174, 62, 76, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(174, 62, 76, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 95, 164, 218);
  background: rgba(95, 164, 218, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(95, 164, 218, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(95, 164, 218, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(95, 164, 218, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(95, 164, 218, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 95, 164, 218);
  background: rgba(95, 164, 218, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(95, 164, 218, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(95, 164, 218, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(95, 164, 218, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(95, 164, 218, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 184, 110, 51);
  background: rgba(184, 110, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(184, 110, 51, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(184, 110, 51, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(184, 110, 51, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(184, 110, 51, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgba(158, 158, 158, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 62, 132, 98);
  background: rgba(62, 132, 98, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(62, 132, 98, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(62, 132, 98, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(62, 132, 98, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(62, 132, 98, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 52, 136, 152);
  background: rgba(52, 136, 152, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(52, 136, 152, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(52, 136, 152, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(52, 136, 152, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(52, 136, 152, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 95, 164, 218);
  background: rgba(95, 164, 218, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(95, 164, 218, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(95, 164, 218, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(95, 164, 218, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(95, 164, 218, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 191, 127, 63);
  background: rgba(191, 127, 63, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(191, 127, 63, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 127, 63, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(191, 127, 63, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(191, 127, 63, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 95, 164, 218;
  border-bottom-color: rgb(95, 164, 218);
  border-left-color: rgb(95, 164, 218);
  border-right-color: rgb(95, 164, 218);
  border-top-color: rgb(95, 164, 218);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(95, 164, 218));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(58, 51, 48);
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
  background-color: rgba(185, 134, 121, 0.1);
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-right-color: rgba(194, 176, 163, 0.4);
  border-top-color: rgba(194, 176, 163, 0.4);
  color: var(--text-normal, rgb(58, 51, 48));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(243, 237, 233));
  border-bottom-color: rgb(163, 149, 140);
  border-left-color: rgb(163, 149, 140);
  border-right-color: rgb(163, 149, 140);
  border-top-color: rgb(163, 149, 140);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(58, 51, 48);
  outline: rgb(58, 51, 48) none 0px;
  text-decoration-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(163, 149, 140);
  border-left-color: rgb(163, 149, 140);
  border-right-color: rgb(163, 149, 140);
  border-top-color: rgb(163, 149, 140);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 223, 217);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(185, 134, 121, 0.1));
  border-bottom-color: rgba(185, 134, 121, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(185, 134, 121, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(185, 134, 121, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(185, 134, 121, 0.15);
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(185, 134, 121);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(45, 55, 72));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(58, 51, 48));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(74, 85, 107));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(58, 51, 48));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(102, 120, 141));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(127, 138, 155));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(154, 165, 181));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(128, 128, 128));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-right-color: rgba(194, 176, 163, 0.4);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 95, 164, 218);
  border-bottom-color: rgba(95, 164, 218, 0.35);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(95, 164, 218, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(95, 164, 218, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(95, 164, 218, 0.35);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--folder-text-2, rgba(95, 164, 218, 0.85));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--folder-sub-text-2, rgba(95, 164, 218, 0.7));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(58, 51, 48);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: var(--icon-color, rgb(85, 77, 71));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-left-width: 0px;
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(85, 77, 71));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(85, 77, 71);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(85, 77, 71));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 77, 71);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(85, 77, 71));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: var(--icon-color, rgb(85, 77, 71));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(85, 77, 71);
  stroke: rgb(85, 77, 71);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(138, 126, 118));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(58, 51, 48));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(243, 237, 233));
  border-color: rgb(58, 51, 48);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgb(243, 237, 233));
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(194, 176, 163, 0.4);
  color: var(--table-header-color, rgb(58, 51, 48));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(194, 176, 163, 0.4);
  border-left-color: rgba(194, 176, 163, 0.4);
  border-right-color: rgba(194, 176, 163, 0.4);
  border-top-color: rgba(194, 176, 163, 0.4);
  color: var(--text-muted, rgb(85, 77, 71));
  margin-bottom: 8px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(194, 176, 163, 0.4);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(85, 77, 71);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(185, 134, 121, 0.1));
  color: var(--pill-color, rgb(185, 134, 121));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(85, 77, 71);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(243, 237, 233));
  color: var(--text-normal, rgb(58, 51, 48));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--workspace-header-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(58, 51, 48);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(58, 51, 48));
}

html[saved-theme="light"] body abbr {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(85, 77, 71);
  border-left-color: rgb(85, 77, 71);
  border-right-color: rgb(85, 77, 71);
  border-top-color: rgb(85, 77, 71);
  color: var(--text-normal, rgb(85, 77, 71));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(238, 230, 225));
  border-bottom-color: rgb(235, 87, 87);
  border-left-color: rgb(235, 87, 87);
  border-right-color: rgb(235, 87, 87);
  border-top-color: rgb(235, 87, 87);
  color: var(--code-normal, rgb(235, 87, 87));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(58, 51, 48);
  border-left-color: rgb(58, 51, 48);
  border-right-color: rgb(58, 51, 48);
  border-top-color: rgb(58, 51, 48);
}

html[saved-theme="light"] body sub {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body summary {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body sup {
  color: rgb(58, 51, 48);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(185, 134, 121, 0.1));
  border-bottom-color: rgba(185, 134, 121, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgba(185, 134, 121, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(185, 134, 121, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(185, 134, 121, 0.15);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: var(--tag-color, rgb(185, 134, 121));
}`,
  },
  classSettings: {
    "composer--SuScheme-light": `.theme-light {
--accent-h: 204;
--accent-s: 15%;
--accent-l: 58%;
--background-primary: #fafafa;
--background-primary-alt: #f4f4f5;
--background-secondary: #f1f0ee;
--background-secondary-alt: #dddfe3;
--color-base-00: #fafafa;
--color-base-05: #f7f7f7;
--color-base-10: #f1f1f2;
--color-base-20: #e8e8ea;
--color-base-25: #dfdfe2;
--color-base-30: #d4d4d8;
--color-base-35: #bcbcc4;
--color-base-40: #a3a3af;
--color-base-50: #8a8a98;
--color-base-60: #6d6d7a;
--color-base-70: #53535f;
--color-base-100: #313139;
--background-gradient: radial-gradient(
		ellipse at 50% 30%,
		hsl(0, 0%, 100%) 20%,
		hsl(220, 16%, 95%) 80%
	);
--background-modifier-border: rgba(225, 219, 214, 0.6);
/* quote */
--blockquote-border-color: hsl(220, 15%, 80%);
--blockquote-background-color: hsl(220, 20%, 97%);
--blockquote-color: hsl(220, 25%, 35%);
/* codeblock */
--codeblock-background: #d6d4d440;
--codeblock-caret-color: #4a556b;
--codeblock-border-radius: 8px;
/* text-highlight */
--text-highlight-background: hsla(41, 61%, 92%);
--text-highlight-border-color: hsl(47, 48%, 42%);
--text-highlight-color: hsl(220, 25%, 25%);
--text-highlight-border-radius: 4px;
}`,
    "composer--NiScheme-light": `.composer--NiScheme-light {
--lightness-1000: 1;
--lightness-950: 0.95;
--lightness-900: 0.9;
--lightness-850: 0.85;
--lightness-800: 0.8;
--lightness-750: 0.75;
--lightness-700: 0.7;
--lightness-650: 0.65;
--lightness-600: 0.6;
--lightness-550: 0.55;
--lightness-500: 0.5;
--lightness-450: 0.45;
--lightness-400: 0.4;
--lightness-350: 0.35;
--lightness-300: 0.3;
--lightness-250: 0.25;
--lightness-200: 0.2;
--lightness-150: 0.15;
--lightness-100: 0.1;
--lightness-90: 0.09;
--lightness-80: 0.08;
--lightness-70: 0.07;
--lightness-60: 0.06;
--lightness-50: 0.05;
--lightness-40: 0.04;
--lightness-30: 0.03;
--lightness-20: 0.02;
--lightness-10: 0.01;
--lightness-0: 0;
--h1-color: oklch(
		var(--lightness-350) var(--chroma-high) var(--primary-hue)
	);
--h2-color: oklch(
		var(--lightness-450) var(--chroma-high) var(--primary-hue)
	);
--h3-color: oklch(
		var(--lightness-550) var(--chroma-high) var(--primary-hue)
	);
--h4-color: oklch(
		var(--lightness-650) var(--chroma-high) var(--primary-hue)
	);
--h5-color: oklch(
		var(--lightness-750) var(--chroma-high) var(--primary-hue)
	);
--h6-color: oklch(
		var(--lightness-800) var(--chroma-high) var(--primary-hue)
	);
--chroma-subtle: 0.01;
--chroma-neutral: calc(var(--chroma-subtle) * 2);
--chroma-low: calc(var(--chroma-subtle) * 4);
--chroma-medium: calc(var(--chroma-subtle) * 8);
--chroma-high: calc(var(--chroma-subtle) * 12);
--chroma-accent: calc(var(--chroma-subtle) * 16);
}
.theme-light {
--primary-hue: var(--light-primary-hue, 2);
--secondary-hue: var(--light-secondary-hue, 330);
--accent-h: 340;
--accent-s: 60%;
--accent-l: 65%;
--color-red-rgb: 214, 74, 122;
--color-blue-rgb: 101, 176, 199;
--color-purple-rgb: 161, 140, 193;
--color-cyan-rgb: 107, 197, 187;
--color-orange-rgb: 232, 129, 94;
--color-green-rgb: 107, 178, 148;
--color-yellow-rgb: 233, 196, 118;
--color-pink-rgb: 230, 170, 185;
--background-primary: oklch(
		calc(var(--lightness-950) + 0.015) var(--chroma-neutral)
			var(--primary-hue)
	);
--background-primary-alt: oklch(
		calc(var(--lightness-950) - 0.015) var(--chroma-neutral)
			var(--primary-hue)
	);
--background-secondary: oklch(
		var(--lightness-950) var(--chroma-low) var(--primary-hue)
	);
--background-secondary-alt: oklch(
		calc(var(--lightness-950) - 0.015) var(--chroma-low) var(--primary-hue)
	);
--background-gradient: linear-gradient(
		165deg,
		oklch(var(--lightness-950) var(--chroma-low) var(--primary-hue) / 0.82)
			0%,
		oklch(var(--lightness-950) var(--chroma-neutral) var(--primary-hue)) 70%,
		oklch(var(--lightness-950) var(--chroma-neutral) var(--secondary-hue))
			100%
	);
--background-modifier-border: oklch(
		var(--lightness-900) var(--chroma-low) var(--primary-hue)
	);
--color-base-00: oklch(
		var(--lightness-1000) var(--chroma-neutral) var(--primary-hue) / 0.32
	);
--color-base-05: oklch(
		var(--lightness-950) var(--chroma-neutral) var(--primary-hue) / 0.32
	);
--color-base-10: oklch(
		var(--lightness-900) var(--chroma-neutral) var(--primary-hue) / 0.32
	);
--color-base-20: oklch(
		var(--lightness-850) var(--chroma-neutral) var(--primary-hue) / 0.32
	);
--color-base-25: oklch(
		var(--lightness-800) var(--chroma-low) var(--primary-hue)
	);
--color-base-30: oklch(
		var(--lightness-750) var(--chroma-low) var(--primary-hue)
	);
--color-base-35: oklch(
		var(--lightness-700) var(--chroma-low) var(--primary-hue)
	);
--color-base-40: oklch(
		var(--lightness-650) var(--chroma-low) var(--primary-hue)
	);
--color-base-50: oklch(
		var(--lightness-600) var(--chroma-medium) var(--primary-hue)
	);
--color-base-60: oklch(
		var(--lightness-500) var(--chroma-medium) var(--primary-hue)
	);
--color-base-70: oklch(
		var(--lightness-400) var(--chroma-high) var(--primary-hue)
	);
--color-base-100: oklch(
		var(--lightness-100) var(--chroma-high) var(--primary-hue)
	);
--bold-color: oklch(
		var(--lightness-500) var(--chroma-accent) var(--primary-hue)
	);
--bold-modifier: 500;
--code-normal: oklch(
		var(--lightness-650) var(--chroma-high) var(--primary-hue)
	);
--code-border-color: transparent;
--inline-code-normal: oklch(
		var(--lightness-400) var(--chroma-accent) var(--primary-hue)
	);
--inline-code-background: oklch(
		var(--lightness-950) var(--chroma-low) calc(var(--primary-hue) + 10)
	);
--blockquote-border-color: oklch(
		var(--lightness-650) var(--chroma-high) var(--primary-hue)
	);
--blockquote-background-color: oklch(
		calc(var(--lightness-900) + 0.02) var(--chroma-low) var(--primary-hue) /
			0.62
	);
--blockquote-color: oklch(
		var(--lightness-450) var(--chroma-high) var(--primary-hue)
	);
--codeblock-background: oklch(
		calc(var(--lightness-900) + 0.02) var(--chroma-neutral)
			var(--primary-hue) / 0.62
	);
--codeblock-caret-color: oklch(
		var(--lightness-100) var(--chroma-high) var(--primary-hue)
	);
--codeblock-border-radius: 10px;
--text-highlight-background: oklch(
		var(--lightness-900) var(--chroma-medium) var(--primary-hue) / 0.12
	);
--text-highlight-border-color: oklch(
		var(--lightness-600) var(--chroma-high) var(--primary-hue)
	);
--text-highlight-color: oklch(
		var(--lightness-450) var(--chroma-accent) var(--primary-hue)
	);
--text-highlight-border-radius: 5px;
--callout-bug: var(--color-red-rgb);
--callout-default: 161, 140, 193;
--callout-error: 214, 74, 122;
--callout-example: 107, 197, 187;
--callout-fail: 214, 74, 122;
--callout-important: 232, 129, 94;
--callout-info: 101, 176, 199;
--callout-question: 233, 196, 118;
--callout-success: 107, 178, 148;
--callout-summary: 161, 140, 193;
--callout-tip: 107, 197, 187;
--callout-todo: 230, 170, 185;
--callout-warning: 233, 196, 118;
--callout-quote: 180, 180, 180;
/* 自定义元素 */
--nav-button-container-bg: oklch(
		var(--lightness-950) var(--chroma-medium) var(--primary-hue) / 0.32
	);
--header-active-bg: rgba(230, 170, 185, 0.15);
}`,
    "composer--QingScheme-light": `.theme-light {
--accent-h: 198;
--accent-s: 22%;
--accent-l: 55%;
--background-primary: #f8fbfb;
--background-primary-alt: #ecf2f4;
--background-secondary: #e0e8eb;
--background-secondary-alt: #d4dfe2;
--color-base-00: #f8fbfb;
--color-base-05: #f2f8f8;
--color-base-10: #eaf3f4;
--color-base-20: #dfeaec;
--color-base-25: #d1e0e3;
--color-base-30: #c2d5d9;
--color-base-35: #b0c9cf;
--color-base-40: #9bbbc2;
--color-base-50: #82a4ac;
--color-base-60: #668890;
--color-base-70: #4f6b72;
--color-base-100: #2c3f44;
--background-gradient: linear-gradient(
		160deg,
		hsl(190, 30%, 95%) 0%,
		hsl(190, 20%, 90%) 100%
	);
--background-modifier-border: #dce3e5;
/* quote */
--blockquote-border-color: hsl(190, 15%, 70%);
--blockquote-background-color: hsla(190, 20%, 95%, 0.8);
--blockquote-color: hsl(190, 25%, 35%);
/* codeblock */
--codeblock-background: hsla(190, 15%, 92%, 0.9);
--codeblock-caret-color: hsl(192, 33%, 15%);
/* text-highlight */
--text-highlight-background: hsla(201, 39%, 84%, 0.45);
--text-highlight-border-color: hsl(198, 25%, 70%);
--text-highlight-color: hsl(197, 35%, 30%);
}`,
    "composer--SuScheme-dark": `.theme-dark {
--accent-h: 204;
--accent-s: 18%;
--accent-l: 42%;
--background-primary: #1a1e24;
--background-primary-alt: #252a32;
--background-secondary: #2d333b;
--background-secondary-alt: #373e48;
--color-base-00: #1a1e24;
--color-base-05: #20242b;
--color-base-10: #252a32;
--color-base-20: #2d333b;
--color-base-25: #333a43;
--color-base-30: #3b424d;
--color-base-35: #444c58;
--color-base-40: #4d5666;
--color-base-50: #5e6778;
--color-base-60: #717b8c;
--color-base-70: #8b93a2;
--color-base-100: #e6e9ee;
--background-gradient: radial-gradient(
		ellipse at 50% 30%,
		hsl(220, 12%, 18%) 20%,
		hsl(220, 14%, 12%) 80%
	);
--background-modifier-border: rgba(67, 73, 83, 0.6);
/* quote */
--blockquote-border-color: hsl(204, 15%, 35%);
--blockquote-background-color: hsla(204, 15%, 15%, 0.3);
--blockquote-color: hsl(204, 15%, 75%);
/* codeblock */
--codeblock-background: #2b303880;
--codeblock-caret-color: #c5cad4;
--codeblock-border-radius: 8px;
--codeblock-border: #e5e7eb;
/* text highlight */
--text-highlight-background: hsla(40, 30%, 25%, 0.4);
--text-highlight-border-color: hsl(40, 27%, 61%);
--text-highlight-color: hsl(40, 60%, 85%);
--text-highlight-border-radius: 4px;
}`,
    "composer--NiScheme-dark": `.composer--NiScheme-dark {
--lightness-1000: 1;
--lightness-950: 0.95;
--lightness-900: 0.9;
--lightness-850: 0.85;
--lightness-800: 0.8;
--lightness-750: 0.75;
--lightness-700: 0.7;
--lightness-650: 0.65;
--lightness-600: 0.6;
--lightness-550: 0.55;
--lightness-500: 0.5;
--lightness-450: 0.45;
--lightness-400: 0.4;
--lightness-350: 0.35;
--lightness-300: 0.3;
--lightness-250: 0.25;
--lightness-200: 0.2;
--lightness-150: 0.15;
--lightness-100: 0.1;
--lightness-90: 0.09;
--lightness-80: 0.08;
--lightness-70: 0.07;
--lightness-60: 0.06;
--lightness-50: 0.05;
--lightness-40: 0.04;
--lightness-30: 0.03;
--lightness-20: 0.02;
--lightness-10: 0.01;
--lightness-0: 0;
--h1-color: oklch(
		var(--lightness-350) var(--chroma-high) var(--primary-hue)
	);
--h2-color: oklch(
		var(--lightness-450) var(--chroma-high) var(--primary-hue)
	);
--h3-color: oklch(
		var(--lightness-550) var(--chroma-high) var(--primary-hue)
	);
--h4-color: oklch(
		var(--lightness-650) var(--chroma-high) var(--primary-hue)
	);
--h5-color: oklch(
		var(--lightness-750) var(--chroma-high) var(--primary-hue)
	);
--h6-color: oklch(
		var(--lightness-800) var(--chroma-high) var(--primary-hue)
	);
--chroma-subtle: 0.01;
--chroma-neutral: calc(var(--chroma-subtle) * 2);
--chroma-low: calc(var(--chroma-subtle) * 4);
--chroma-medium: calc(var(--chroma-subtle) * 8);
--chroma-high: calc(var(--chroma-subtle) * 12);
--chroma-accent: calc(var(--chroma-subtle) * 16);
}
.theme-dark {
--primary-hue: var(--dark-primary-hue, 282);
--secondary-hue: var(--dark-secondary-hue, 2.65);
--accent-h: 272;
--accent-s: 40%;
--accent-l: 73%;
--color-red-rgb: 184, 64, 102;
--color-blue-rgb: 91, 156, 179;
--color-purple-rgb: 141, 120, 173;
--color-cyan-rgb: 87, 177, 167;
--color-orange-rgb: 202, 109, 74;
--color-green-rgb: 87, 158, 128;
--color-yellow-rgb: 203, 166, 88;
--color-pink-rgb: 200, 140, 155;
--background-primary: oklch(
		calc(var(--lightness-400) + 0.025) var(--chroma-medium)
			var(--primary-hue)
	);
--background-primary-alt: oklch(
		calc(var(--lightness-350) - 0.025) var(--chroma-medium)
			var(--primary-hue)
	);
--background-secondary: oklch(
		var(--lightness-450) var(--chroma-medium) var(--primary-hue)
	);
--background-secondary-alt: oklch(
		calc(var(--lightness-450) - 0.025) var(--chroma-medium)
			var(--primary-hue)
	);
--background-gradient: linear-gradient(
		165deg,
		oklch(var(--lightness-300) var(--chroma-medium) var(--primary-hue)) 0%,
		oklch(var(--lightness-400) var(--chroma-medium) var(--primary-hue)) 68%,
		oklch(var(--lightness-500) var(--chroma-low) var(--secondary-hue)) 100%
	);
--background-modifier-border: oklch(
		calc(var(--lightness-550) + 0.015) var(--chroma-medium)
			var(--primary-hue)
	);
--color-base-00: oklch(
		var(--lightness-0) var(--chroma-neutral) var(--primary-hue) / 0.32
	);
--color-base-05: oklch(
		var(--lightness-50) var(--chroma-neutral) var(--primary-hue) / 0.32
	);
--color-base-10: oklch(
		var(--lightness-100) var(--chroma-neutral) var(--primary-hue) / 0.32
	);
--color-base-20: oklch(
		var(--lightness-200) var(--chroma-neutral) var(--primary-hue) / 0.32
	);
--color-base-25: oklch(
		var(--lightness-250) var(--chroma-low) var(--primary-hue) / 0.64
	);
--color-base-30: oklch(
		var(--lightness-300) var(--chroma-low) var(--primary-hue) / 0.64
	);
--color-base-35: oklch(
		var(--lightness-350) var(--chroma-low) var(--primary-hue) / 0.64
	);
--color-base-40: oklch(
		var(--lightness-400) var(--chroma-low) var(--primary-hue) / 0.64
	);
--color-base-50: oklch(
		var(--lightness-550) var(--chroma-medium) var(--primary-hue)
	);
--color-base-60: oklch(
		var(--lightness-650) var(--chroma-medium) var(--primary-hue)
	);
--color-base-70: oklch(
		var(--lightness-700) var(--chroma-medium) var(--primary-hue)
	);
--color-base-100: oklch(
		var(--lightness-1000) var(--chroma-high) var(--primary-hue)
	);
--h1-color: oklch(
		var(--lightness-800) var(--chroma-high) var(--primary-hue)
	);
--h2-color: oklch(
		var(--lightness-750) var(--chroma-high) var(--primary-hue)
	);
--h3-color: oklch(
		var(--lightness-700) var(--chroma-high) var(--primary-hue)
	);
--h4-color: oklch(
		var(--lightness-650) var(--chroma-high) var(--primary-hue)
	);
--h5-color: oklch(
		var(--lightness-600) var(--chroma-high) var(--primary-hue)
	);
--h6-color: oklch(
		var(--lightness-550) var(--chroma-high) var(--primary-hue)
	);
--bold-color: oklch(
		var(--lightness-750) var(--chroma-accent) var(--primary-hue)
	);
--bold-modifier: 500;
--code-normal: oklch(
		var(--lightness-650) var(--chroma-high) var(--primary-hue)
	);
--code-border-color: transparent;
--inline-code-normal: oklch(
		var(--lightness-350) var(--chroma-accent) var(--primary-hue)
	);
--inline-code-background: oklch(
		var(--lightness-850) var(--chroma-low) calc(var(--primary-hue) + 10)
	);
--blockquote-border-color: oklch(
		var(--lightness-350) var(--chroma-low) var(--primary-hue)
	);
--blockquote-background-color: oklch(
		var(--lightness-10) var(--chroma-accent) var(--primary-hue) / 0.38
	);
--blockquote-color: oklch(
		var(--lightness-750) var(--chroma-high) var(--primary-hue)
	);
--codeblock-background: oklch(
		var(--lightness-10) var(--chroma-accent) var(--primary-hue) / 0.38
	);
--codeblock-caret-color: oklch(
		var(--lightness-450) var(--chroma-high) var(--primary-hue)
	);
--codeblock-border-radius: 10px;
--text-highlight-background: oklch(
		var(--lightness-500) var(--chroma-medium) var(--primary-hue) / 0.62
	);
--text-highlight-border-color: oklch(
		var(--lightness-950) var(--chroma-high) var(--primary-hue)
	);
--text-highlight-color: oklch(
		var(--lightness-950) var(--chroma-accent) var(--primary-hue)
	);
--text-highlight-border-radius: 5px;
--callout-bug: var(--color-red-rgb);
--callout-default: 141, 120, 173;
--callout-error: 184, 64, 102;
--callout-example: 87, 177, 167;
--callout-fail: 184, 64, 102;
--callout-important: 202, 109, 74;
--callout-info: 91, 156, 179;
--callout-question: 203, 166, 88;
--callout-success: 87, 158, 128;
--callout-summary: 141, 120, 173;
--callout-tip: 87, 177, 167;
--callout-todo: 200, 140, 155;
--callout-warning: 203, 166, 88;
--callout-quote: 150, 150, 150;
--nav-button-container-bg: oklch(
		var(--lightness-700) var(--chroma-medium) var(--primary-hue) / 0.25
	);
--header-active-bg: rgba(200, 140, 155, 0.2);
}`,
    "composer--QingScheme-dark": `.theme-dark {
--accent-h: 198;
--accent-s: 28%;
--accent-l: 45%;
--background-primary: hsl(198, 25%, 18%);
--background-primary-alt: hsl(198, 22%, 21%);
--background-secondary: hsl(198, 20%, 24%);
--background-secondary-alt: hsl(198, 18%, 27%);
--color-base-00: #192c33;
--color-base-05: #1e313a;
--color-base-10: #233640;
--color-base-20: #293e49;
--color-base-25: #30454f;
--color-base-30: #384d58;
--color-base-35: #405861;
--color-base-40: #49636d;
--color-base-50: #5a7680;
--color-base-60: #6d8891;
--color-base-70: #869fa8;
--color-base-100: #dae5e9;
--background-gradient: linear-gradient(
		165deg,
		hsl(198, 28%, 16%) 0%,
		hsl(198, 24%, 20%) 50%,
		hsl(198, 20%, 23%) 100%
	);
/* quote */
--blockquote-border-color: hsl(200, 20%, 35%);
--blockquote-background-color: hsla(200, 25%, 18%, 0.8);
--blockquote-color: hsl(200, 32%, 71%);
/* codeblock */
--codeblock-background: hsla(200, 20%, 22%, 0.9);
--codeblock-caret-color: hsl(200, 30%, 65%);
/* text-highlight */
--text-highlight-background: hsla(200, 38%, 74%, 0.4);
--text-highlight-border-color: hsl(199, 55%, 88%);
--text-highlight-color: hsl(200, 13%, 91%);
}`,
    "composer--SubtleGridCallout": `.composer--SubtleGridCallout .callout {
background: linear-gradient(
		150deg,
		rgba(var(--callout-color), 0.15) 0%,
		rgba(var(--callout-color), 0.05) 10%,
		var(--background-primary) 38%
	);
border: 1px solid rgba(var(--callout-color), 0.38);
position: relative;
padding: 4px;
}

.composer--SubtleGridCallout .callout::before {
content: "";
position: absolute;
top: 8px;
left: 8px;
width: 42%;
height: 88%;
background: repeating-linear-gradient(
			to right,
			transparent 0,
			transparent 19px,
			rgba(var(--callout-color), 0.6) 20px
		),
		repeating-linear-gradient(
			to bottom,
			transparent 0,
			transparent 19px,
			rgba(var(--callout-color), 0.6) 20px
		);
mask: linear-gradient(to right, var(--background-primary), transparent 80%),
		linear-gradient(to bottom, var(--background-primary), transparent 80%);
mask-composite: intersect;
z-index: -1;
}

.composer--SubtleGridCallout .callout-title {
padding: 8px 16px 8px 16px;
}

.composer--SubtleGridCallout .callout-content {
padding: 0px 16px 0px 16px;
}`,
    "composer--CleanLineCallout": `.composer--CleanLineCallout .callout {
background-color: transparent;
}

.composer--CleanLineCallout .callout-title {
position: relative;
padding: 0px 0px 8px 0px;
}

.composer--CleanLineCallout .callout.is-collapsed .callout-title {
padding: initial;
}

.composer--CleanLineCallout .callout.is-collapsed .callout-title::after {
display: none;
height: 0px;
background: initial;
}

.composer--CleanLineCallout .callout-title::after {
content: "";
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 2px;
background: linear-gradient(
		to right,
		rgba(var(--callout-color), 0.1) 0%,
		rgba(var(--callout-color), 0.6) 12%,
		rgba(var(--callout-color), 0.1) 62%,
		transparent 100%
	);
}`,
    "composer--GithubCallout": `.composer--GithubCallout .callout {
border: none;
border-left: rgba(var(--callout-color), 0.6) 4px solid;
border-radius: 0px;
background-color: transparent;
padding: 8px 16px 8px 16px;
}

.composer--GithubCallout .callout-title {
gap: var(--size-4-2);
}`,
    "composer--WindowPanelCallout": `.composer--WindowPanelCallout .callout {
border: 1px solid rgba(var(--callout-color), 0.68);
position: relative;
background-color: transparent;
padding: 0px;
}

.composer--WindowPanelCallout .callout-title {
border-bottom: 1px solid rgba(var(--callout-color), 0.68);
background-color: rgba(var(--callout-color), 0.1);
padding: 8px 16px 8px 16px;
}

.composer--WindowPanelCallout .callout-content {
padding: 0px 16px;
}`,
    "composer--ObsidianTableStyle": `.composer--ObsidianTableStyle {
.el-table table th,
	.el-table table td,
	.table-wrapper table th,
	.table-wrapper table td {
		border-right: 1px solid var(--background-modifier-border);
		border-left: 1px solid var(--background-modifier-border);
	};
}`,
    "composer--BorderlessTableStyle": `.composer--BorderlessTableStyle {
.el-table table,
	.table-wrapper table {
		--table-border-width: 0px;
		--table-header-border-width: 0px;
		--table-row-last-border-width: 0px;

		box-shadow: hsl(var(--accent-h), var(--accent-l), var(--accent-s), 0.25)
				0px 0px 5px -1px,
			hsl(var(--accent-h), var(--accent-l), var(--accent-s), 0.3) 0px 1px
				0px -1px;
	};
}`,
    "composer--AcademicTableStyle": `.composer--AcademicTableStyle {
--table-header-border-width: 2px;
--table-header-border-color: var(--text-normal);
--table-row-last-border-width: 2px;
--table-row-last-border-color: var(--text-normal);
--table-row-first-border-color: var(--text-faint);
--table-row-first-top-border-width: 1px;
--table-border-width: 0px;
.el-table table tbody tr:first-child > td,
	.table-wrapper table tbody tr:first-child > td {
		border-color: var(--table-row-first-border-color);
		border-top-width: var(--table-row-first-top-border-width);
	};
.el-table table tbody tr:last-child > td,
	.table-wrapper table tbody tr:last-child > td {
		border-color: var(--table-row-last-border-color);
	};
}`,
    "composer--ParagraphIndent": `.composer--ParagraphIndent {
--paragraph-indent: calc(var(--font-text-size) * 2);
}

.composer--ParagraphIndent .markdown-reading-view :is([class="cm-line"], [class="cm-active cm-line"], p), .composer--ParagraphIndent .is-live-preview :is([class="cm-line"], [class="cm-active cm-line"], p) {
text-indent: var(--paragraph-indent);
}

.composer--ParagraphIndent .markdown-reading-view p > br, .composer--ParagraphIndent .is-live-preview p > br {
content: "";
white-space: pre;
}

.composer--ParagraphIndent .markdown-reading-view p > br::after, .composer--ParagraphIndent .is-live-preview p > br::after {
content: "\\000A\\200B";
margin-inline-end: var(--paragraph-indent);
}

.composer--ParagraphIndent .markdown-reading-view .cm-preview-code-block p, .composer--ParagraphIndent .is-live-preview .cm-preview-code-block p {
text-indent: initial;
}

.composer--ParagraphIndent .table-cell-wrapper .markdown-reading-view :is([class="cm-line"], [class="cm-active cm-line"], p), .composer--ParagraphIndent .table-cell-wrapper .is-live-preview :is([class="cm-line"], [class="cm-active cm-line"], p) {
text-indent: initial;
}

body.composer--ParagraphIndent div.markdown-reading-view div.mermaid {
--paragraph-indent: 0px;
}

body.composer--ParagraphIndent .components--ComponentEl {
--paragraph-indent: 0px;
text-indent: initial;
}`,
    "composer--RemoveTaskCompletedDecoration": `body:not(.tasks).composer--RemoveTaskCompletedDecoration .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task]:is([data-task="x"]), body:not(.tasks).composer--RemoveTaskCompletedDecoration .markdown-preview-view ul li[data-task="x"].task-list-item.is-checked, body:not(.tasks).composer--RemoveTaskCompletedDecoration li[data-task="x"].task-list-item.is-checked {
text-decoration: unset;
color: var(--text-muted);
}`,
    "composer--EnableIndentationGuidLine": `body.composer--EnableIndentationGuidLine {
--indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
}`,
    "composer--EnableFilenameLineFeed": `body.composer--EnableFilenameLineFeed .nav-file-title-content {
overflow-wrap: break-word;
word-wrap: break-word;
word-break: break-all;
white-space: normal;
}`,
    "composer--EnableHiddenFileTag": `body.composer--EnableHiddenFileTag .nav-file-tag {
display: none;
}

body.composer--EnableHiddenFileTagHover .nav-file:hover .nav-file-tag {
display: inline;
}`,
    "composer--EnableHiddenFileTagHover": `body.composer--EnableHiddenFileTag.composer--EnableHiddenFileTagHover .nav-file:hover .nav-file-tag {
display: inline;
}`,
    "composer--NodeOutlineStyle": `.composer--NodeOutlineStyle .workspace-leaf-content[data-type="outline"] .view-content {
/* Base styles for outline container */
.collapse-icon {
		padding-inline-end: var(--size-2-3);
		opacity: var(--outline-collapsed-icon-opacity);

		&::before {
			content: "" !important;
		}
	};
/* Tree item base styles */
.tree-item {
		&:not(.is-grabbing) {
			position: relative;

			&::after {
				content: "";
				position: absolute;
				width: 2px;
				background-color: transparent;
				top: calc(var(--nav-item-size) * 1.8 / 2 * -1);
				left: -9px;
				height: calc(
					100% - var(--nav-item-size) * 1.8 + var(--size-4-8)
				);
			}
		}

		/* Tree item self styling */
		.tree-item-self {
			position: relative;
			margin: -1px 0 0;
			white-space: nowrap;

			.tree-item-inner {
				padding-left: 16px;
				margin-left: -16px;
				overflow: hidden;
				text-overflow: ellipsis;
				height: calc(var(--nav-item-size) * 1.8);
				line-height: calc(var(--nav-item-size) * 1.8);
				position: relative;

				&::before {
					content: "";
					width: var(--size-4-1);
					height: var(--size-4-1);
					border: 2px solid var(--color-accent);
					border-radius: 50%;
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
				}
			}

			/* Hide circle for items with icons */
			.tree-item-icon ~ .tree-item-inner::before {
				content: none;
			}
		}

		/* Tree item icon styling */
		.tree-item-icon {
			cursor: pointer;
			top: 50%;
			transform: translateY(-50%);
			z-index: 1;

			&::before {
				width: var(--size-4-2);
				height: var(--size-4-2);
				background-color: var(--color-accent);
				border-radius: 50%;
				position: absolute;
				left: 4px;
				top: 50%;
				transform: translateY(-50%);
			}

			svg {
				display: block;
				path {
					display: none;
				}
			}
		}

		/* Collapsed state */
		&.is-collapsed .tree-item-icon::before {
			box-shadow: 0 0 0 4px var(--background-modifier-active-hover);
		}

		/* Hover states */
		&:hover {
			> .tree-item-children > .tree-item::after {
				background-color: var(--color-accent);
			}

			> .tree-item-self:hover + .tree-item-children .tree-item::after,
			> .tree-item-children > .tree-item:hover::after,
			> .tree-item-children > .tree-item:hover ~ .tree-item::after {
				background-color: transparent;
			}
		}

		/* Hover decoration for child items */
		&:hover > .tree-item-children > .tree-item:hover::before {
			content: "";
			position: absolute;
			top: calc(var(--nav-item-size) * 1.8 / 2 * -1);
			left: -9px;
			bottom: calc(
				100% - (var(--nav-item-size) * 1.8 + var(--size-4-2)) / 2 - 1px
			);
			width: 16px;
			border-bottom-left-radius: var(--radius-m);
			border-bottom: 2px solid var(--color-accent);
			border-left: 2px solid var(--color-accent);
		}
	};
/* Child items spacing */
:is(.tree-item-children, .tree-item-self .tree-item-self) {
		padding-left: 0;
		margin-left: var(--size-4-5);
		border-left: none;
	};
}`,
    "composer--ComponentsSimpleTag": `.composer--ComponentsSimpleTag .theme-dark .components--tag, .composer--ComponentsSimpleTag .components--tag {
background-color: transparent;
border: 1px solid var(--background-modifier-border);
}`,
    "composer--ComponentsFilledGallaryCover": `.composer--ComponentsFilledGallaryCover .components--DynamicDataView-PageCard {
padding: 0px;
overflow: hidden;
border: 0px;
}

.composer--ComponentsFilledGallaryCover .components--DynamicDataView-PageCardCover {
border-radius: initial;
}

.composer--ComponentsFilledGallaryCover .components--DynamicDataView-PageCard .components--DynamicDataView-PageTitle {
padding-top: 4px;
padding-bottom: 4px;
}`,
  },
};
