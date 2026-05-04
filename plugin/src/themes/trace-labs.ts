import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "trace-labs", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: var(--accent-h-theme, 212);
  --accent-h-theme: 212;
  --accent-l: var(--accent-l-theme, 67%);
  --accent-l-theme: 67%;
  --accent-s: var(--accent-s-theme, 100%);
  --accent-s-theme: 100%;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-base-30, #30363d);
  --background-modifier-border-focus: var(--color-accent, hsl(212, 100%, 67%));
  --background-modifier-border-hover: var(--color-base-30, #30363d);
  --background-modifier-error: var(--color-red, #F47067);
  --background-modifier-error-hover: var(--color-red, #F47067);
  --background-modifier-error-rgb: var(--color-red-rgb, 248, 81, 73);
  --background-modifier-form-field: var(--color-base-25, #010409);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #010409);
  --background-modifier-hover: rgba(var(--rgb-hover), var(--background-modifier-hover-alpha));
  --background-modifier-hover-alpha: 0.12;
  --background-modifier-success: var(--color-green, #7ee787);
  --background-modifier-success-rgb: var(--color-green-rgb, 126, 231, 135);
  --background-primary: var(--color-base-00, #1d1b1b);
  --background-primary-alt: var(--color-base-10, #161b22);
  --background-secondary: var(--color-base-20, #0f0909);
  --background-secondary-alt: var(--color-base-25, #010409);
  --bases-cards-background: var(--background-primary, #1d1b1b);
  --bases-cards-cover-background: var(--background-primary-alt, #161b22);
  --bases-embed-border-color: var(--background-modifier-border, #30363d);
  --bases-group-heading-property-color: var(--text-muted, #8b949e);
  --bases-group-heading-value-weight: var(--font-semibold, 700);
  --bases-table-border-color: var(--table-border-color, #30363d);
  --bases-table-cell-background-active: var(--background-primary, #1d1b1b);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #161b22);
  --bases-table-cell-background-selected: var(--table-selection, hsla(212, 100%, 67%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #161b22);
  --bases-table-header-background: var(--background-primary, #1d1b1b);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  --bases-table-header-color: var(--text-muted, #8b949e);
  --bases-table-summary-background: var(--background-primary, #1d1b1b);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  --blockquote-border-color: var(--interactive-accent, hsl(212, 100%, 67%));
  --bold-color: #d400ff;
  --bold-weight: var(--font-semibold, 700);
  --callout-bug: var(--color-red-rgb, 248, 81, 73);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--color-red-rgb, 248, 81, 73);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--color-red-rgb, 248, 81, 73);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--color-yellow-rgb, 224, 222, 113);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--color-green-rgb, 126, 231, 135);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, #1d1b1b);
  --canvas-card-label-color: var(--text-faint, #6e7681);
  --canvas-color-1: var(--color-red-rgb, 248, 81, 73);
  --canvas-color-4: var(--color-green-rgb, 126, 231, 135);
  --canvas-dot-pattern: var(--color-base-30, #30363d);
  --caret-color: var(--text-normal, #ffffff);
  --checkbox-border-color: var(--text-faint, #6e7681);
  --checkbox-border-color-hover: var(--text-muted, #8b949e);
  --checkbox-color: var(--interactive-accent, hsl(212, 100%, 67%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(212, 100%, 63.2%));
  --checkbox-marker-color: var(--background-primary, #1d1b1b);
  --checklist-done-color: var(--text-muted, #8b949e);
  --code-background: var(--background-primary-alt, #161b22);
  --code-border-color: var(--background-modifier-border, #30363d);
  --code-bracket-background: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  --code-comment: var(--text-faint, #6e7681);
  --code-function: var(--color-orange, #FFA657);
  --code-important: var(--color-orange, #FFA657);
  --code-keyword: var(--color-red, #F47067);
  --code-normal: var(--text-muted, #8b949e);
  --code-operator: var(--color-red, #F47067);
  --code-property: var(--color-blue, #00ffff);
  --code-punctuation: var(--text-muted, #8b949e);
  --code-string: var(--color-cyan, #A5D6FF);
  --code-tag: var(--color-red, #F47067);
  --code-value: var(--color-purple, #D2A8FF);
  --collapse-icon-color: var(--text-faint, #6e7681);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(212, 100%, 63.2%));
  --color-accent-1: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) - 3.8%));
  --color-accent-2: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 3.8%));
  --color-base-00: #0d1117;
  --color-base-10: #161b22;
  --color-base-100: #ffffff;
  --color-base-20: #161b22;
  --color-base-25: #010409;
  --color-base-30: #30363d;
  --color-base-35: #21262d;
  --color-base-40: #30363d;
  --color-base-50: #6e7681;
  --color-base-60: #999;
  --color-base-70: #8b949e;
  --color-blue: #00ffff;
  --color-btn-primary-bg: #238636;
  --color-btn-primary-hover-bg: #2ea043;
  --color-cyan: #A5D6FF;
  --color-green: #7ee787;
  --color-green-rgb: 126, 231, 135;
  --color-orange: #FFA657;
  --color-pink: #f778ba;
  --color-purple: #D2A8FF;
  --color-red: #F47067;
  --color-red-rgb: 248, 81, 73;
  --color-tlgreen: #84EDB5;
  --color-yellow: #d29922;
  --dark: var(--text-normal, var(--color-base-100, #ffffff));
  --darkgray: var(--text-normal, var(--color-base-100, #ffffff));
  --divider-color: var(--background-modifier-border, #30363d);
  --divider-color-hover: var(--interactive-accent, hsl(212, 100%, 67%));
  --dropdown-background: var(--interactive-normal, #30363d);
  --dropdown-background-hover: var(--interactive-hover, #21262d);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
        inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-left: 2px solid var(--interactive-accent);
  --embed-border-right: none;
  --file-header-background: var(--background-primary, #1d1b1b);
  --file-header-background-focused: var(--background-primary, #1d1b1b);
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #30363d);
  --flair-color: var(--text-normal, #ffffff);
  --font-semibold: 700;
  --footnote-divider-color: var(--metadata-divider-color, #30363d);
  --footnote-id-color: var(--text-muted, #8b949e);
  --footnote-id-color-no-occurrences: var(--text-faint, #6e7681);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(177, 186, 196, 0.12));
  --graph-node: var(--color-tlgreen, #84EDB5);
  --graph-node-attachment: var(--color-yellow, #d29922);
  --graph-node-focused: var(--text-accent, hsl(212, 100%, 63.2%));
  --graph-node-tag: var(--color-green, #7ee787);
  --graph-node-unresolved: var(--text-faint, #6e7681);
  --graph-text: var(--text-normal, #ffffff);
  --gray: var(--text-muted, var(--color-base-70, #8b949e));
  --h-color-theme: var(--color-green, #7ee787);
  --h1-color: var(--h1-color-theme, #84EDB5);
  --h1-color-theme: var(--color-tlgreen, #84EDB5);
  --h1-size: 3.5em;
  --h2-color: var(--h2-color-theme, #84EDB5);
  --h2-color-theme: var(--color-tlgreen, #84EDB5);
  --h2-size: 3.0em;
  --h2-weight: 600;
  --h3-color: var(--h3-color-theme, #84EDB5);
  --h3-color-theme: var(--color-tlgreen, #84EDB5);
  --h3-size: 2.0em;
  --h3-weight: 600;
  --h4-color: var(--h4-color-theme, #84EDB5);
  --h4-color-theme: var(--color-tlgreen, #84EDB5);
  --h4-size: 1.0em;
  --h4-weight: 600;
  --h5-color: var(--h5-color-theme, #84EDB5);
  --h5-color-theme: var(--color-tlgreen, #84EDB5);
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-color: var(--h6-color-theme, #84EDB5);
  --h6-color-theme: var(--color-tlgreen, #84EDB5);
  --h6-size: 1.12em;
  --heading-formatting: var(--text-faint, #6e7681);
  --highlight: var(--background-modifier-hover, rgba(var(--rgb-hover), var(--background-modifier-hover-alpha)));
  --hr-color: var(--background-modifier-border, #30363d);
  --icon-color: var(--text-muted, #8b949e);
  --icon-color-active: var(--text-accent, hsl(212, 100%, 63.2%));
  --icon-color-focused: var(--text-normal, #ffffff);
  --icon-color-hover: var(--text-muted, #8b949e);
  --inline-code-background: #6e768166;
  --inline-title-color: var(--h1-color, #84EDB5);
  --inline-title-size: var(--h1-size, 3.5em);
  --input-date-separator: var(--text-faint, #6e7681);
  --input-placeholder-color: var(--text-faint, #6e7681);
  --input-shadow: inset 0 0 0 1px #f0f6fc1a;
  --input-shadow-hover: inset 0 0 0 1px var(--color-base-70);
  --interactive-accent: var(--color-accent-1, hsl(212, 100%, 67%));
  --interactive-accent-hover: var(--color-accent-2, hsl(212, 100%, 63.2%));
  --interactive-accent-hsl: var(--color-accent-hsl, 212, 100%, 67%);
  --interactive-hover: var(--color-base-10, #21262d);
  --interactive-normal: var(--color-base-00, #30363d);
  --italic-color: #ffd900;
  --kanban-background: var(--background-primary, #1d1b1b);
  --kanban-item-background: var(--background-primary-alt, #161b22);
  --kanban-lane-background: var(--background-secondary-alt, #010409);
  --kanban-lane-border: var(--color-base-35, #21262d);
  --kanban-lane-count: var(--color-base-35, #21262d);
  --kanban-options-btn: var(--color-base-30, #30363d);
  --light: var(--background-primary, var(--color-base-00, #1d1b1b));
  --lightgray: var(--background-secondary, var(--color-base-20, #0f0909));
  --link-color: var(--color-blue, #00ffff);
  --link-color-hover: var(--color-tlgreen, #84EDB5);
  --link-decoration: none;
  --link-external-color: var(--color-blue, #00ffff);
  --link-external-color-hover: var(--text-accent-hover, hsl(212, 100%, 70.8%));
  --link-external-decoration: none;
  --link-unresolved-color: var(--color-blue, #00ffff);
  --list-bullet-size: 7px;
  --list-marker-color: var(--color-tlgreen, #84EDB5);
  --list-marker-color-collapsed: var(--text-accent, hsl(212, 100%, 63.2%));
  --list-marker-color-hover: var(--text-muted, #8b949e);
  --menu-background: var(--background-secondary, #0f0909);
  --menu-border-color: var(--background-modifier-border-hover, #30363d);
  --menu-shadow: var(--shadow-s, none);
  --metadata-border-color: var(--background-modifier-border, #30363d);
  --metadata-divider-color: var(--background-modifier-border, #30363d);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  --metadata-input-text-color: var(--text-normal, #ffffff);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  --metadata-label-text-color: var(--text-muted, #8b949e);
  --metadata-label-text-color-hover: var(--text-muted, #8b949e);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  --modal-background: var(--background-primary, #1d1b1b);
  --modal-border-color: var(--color-base-30, var(--background-modifier-border-focus));
  --nav-collapse-icon-color: var(--collapse-icon-color, #6e7681);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #6e7681);
  --nav-heading-color: var(--text-normal, #ffffff);
  --nav-heading-color-collapsed: var(--text-faint, #6e7681);
  --nav-heading-color-collapsed-hover: var(--text-muted, #8b949e);
  --nav-heading-color-hover: var(--text-normal, #ffffff);
  --nav-item-background-active: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.2);
  --nav-item-children-margin-left: var(--size-4-3, 12px);
  --nav-item-children-padding-left: var(--size-2-2, 4px);
  --nav-item-color: var(--text-muted, #8b949e);
  --nav-item-color-active: var(--text-normal, #ffffff);
  --nav-item-color-highlighted: var(--text-accent-hover, hsl(212, 100%, 70.8%));
  --nav-item-color-hover: var(--text-normal, #ffffff);
  --nav-item-color-selected: var(--text-normal, #ffffff);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, #6e7681);
  --nav-tag-color-active: var(--text-muted, #8b949e);
  --nav-tag-color-hover: var(--text-muted, #8b949e);
  --nav-tag-weight: var(--font-semibold, 700);
  --pdf-background: var(--background-primary, #1d1b1b);
  --pdf-page-background: var(--background-primary, #1d1b1b);
  --pdf-sidebar-background: var(--background-primary, #1d1b1b);
  --pill-border-color: var(--background-modifier-border, #30363d);
  --pill-border-color-hover: var(--background-modifier-border-hover, #30363d);
  --pill-color: var(--text-muted, #8b949e);
  --pill-color-hover: var(--text-normal, #ffffff);
  --pill-color-remove: var(--text-faint, #6e7681);
  --pill-color-remove-hover: var(--text-accent, hsl(212, 100%, 63.2%));
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, #1d1b1b);
  --raised-background: var(--blur-background, color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent)));
  --rgb-hover: 177, 186, 196;
  --ribbon-background: var(--background-secondary, #0f0909);
  --ribbon-background-collapsed: var(--background-primary, #1d1b1b);
  --search-clear-button-color: var(--text-muted, #8b949e);
  --search-icon-color: var(--text-muted, #8b949e);
  --search-result-background: var(--background-primary, #1d1b1b);
  --secondary: var(--text-accent, var(--color-accent, hsl(212, 100%, 63.2%)));
  --setting-group-heading-color: var(--text-normal, #ffffff);
  --setting-group-heading-weight: var(--font-semibold, 700);
  --setting-items-background: var(--background-primary-alt, #161b22);
  --setting-items-border-color: var(--background-modifier-border, #30363d);
  --shadow-l: none;
  --shadow-s: none;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #8b949e);
  --shiki-code-background: var(--code-background, #161b22);
  --shiki-code-comment: var(--text-faint, #6e7681);
  --shiki-code-function: var(--color-green, #7ee787);
  --shiki-code-important: var(--color-orange, #FFA657);
  --shiki-code-keyword: var(--color-pink, #f778ba);
  --shiki-code-normal: var(--text-muted, #8b949e);
  --shiki-code-property: var(--color-cyan, #A5D6FF);
  --shiki-code-punctuation: var(--text-muted, #8b949e);
  --shiki-code-string: var(--color-yellow, #d29922);
  --shiki-code-value: var(--color-purple, #D2A8FF);
  --shiki-gutter-border-color: var(--background-modifier-border, #30363d);
  --shiki-gutter-text-color: var(--text-faint, #6e7681);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #8b949e);
  --shiki-highlight-neutral: var(--shiki-code-normal, #8b949e);
  --shiki-terminal-dots-color: var(--text-faint, #6e7681);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #30363d);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-track-background: var(--background-modifier-border, #30363d);
  --status-bar-background: var(--background-secondary, #0f0909);
  --status-bar-border-color: var(--divider-color, #30363d);
  --status-bar-scroll-padding: calc(var(--status-bar-font-size) + 18px);
  --status-bar-text-color: var(--text-muted, #8b949e);
  --suggestion-background: var(--background-primary, #1d1b1b);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: var(--color-red, #F47067);
  --sync-avatar-color-2: var(--color-orange, #FFA657);
  --sync-avatar-color-3: var(--color-yellow, #d29922);
  --sync-avatar-color-4: var(--color-green, #7ee787);
  --sync-avatar-color-5: var(--color-cyan, #A5D6FF);
  --sync-avatar-color-6: var(--color-blue, #00ffff);
  --sync-avatar-color-7: var(--color-purple, #D2A8FF);
  --sync-avatar-color-8: var(--color-pink, #f778ba);
  --tab-background-active: var(--background-primary, #1d1b1b);
  --tab-container-background: var(--background-secondary, #0f0909);
  --tab-divider-color: var(--background-modifier-border-hover, #30363d);
  --tab-outline-color: var(--divider-color, #30363d);
  --tab-stacked-text-align: left;
  --tab-switcher-background: var(--background-secondary, #0f0909);
  --tab-text-color: var(--text-faint, #6e7681);
  --tab-text-color-active: var(--text-muted, #8b949e);
  --tab-text-color-focused: var(--text-muted, #8b949e);
  --tab-text-color-focused-active: var(--text-muted, #8b949e);
  --tab-text-color-focused-active-current: var(--text-normal, #ffffff);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(212, 100%, 63.2%));
  --table-add-button-border-color: var(--background-modifier-border, #30363d);
  --table-border-color: var(--background-modifier-border, #30363d);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(212, 100%, 67%));
  --table-drag-handle-color: var(--text-faint, #6e7681);
  --table-header-border-color: var(--table-border-color, #30363d);
  --table-header-color: var(--text-normal, #ffffff);
  --table-header-size: var(--font-text-size, 16px);
  --table-header-weight: var(--bold-weight, 700);
  --table-selection-border-color: var(--interactive-accent, hsl(212, 100%, 67%));
  --table-white-space: normal;
  --tag-color: var(--text-accent, hsl(212, 100%, 63.2%));
  --tag-color-hover: var(--text-accent, hsl(212, 100%, 63.2%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(212, 100%, 70.8%)));
  --text-accent: var(--color-accent, hsl(212, 100%, 63.2%));
  --text-accent-hover: var(--color-accent-2, hsl(212, 100%, 70.8%));
  --text-error: var(--color-red, #F47067);
  --text-faint: var(--color-base-50, #6e7681);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--color-base-70, #8b949e);
  --text-normal: var(--color-base-100, #ffffff);
  --text-selection: hsla(var(--interactive-accent-hsl), 0.4);
  --text-success: var(--color-green, #7ee787);
  --text-warning: var(--color-orange, #FFA657);
  --textHighlight: var(--background-modifier-hover, rgba(var(--rgb-hover), var(--background-modifier-hover-alpha)));
  --titlebar-background: var(--background-secondary, #0f0909);
  --titlebar-background-focused: var(--background-secondary-alt, #010409);
  --titlebar-border-color: var(--background-modifier-border, #30363d);
  --titlebar-text-color: var(--text-muted, #8b949e);
  --titlebar-text-color-focused: var(--text-normal, #ffffff);
  --vault-name-color: var(--text-normal, #ffffff);
  --vault-name-font-size: var(--font-ui-small, 13px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, #ffffff);
  --vault-profile-color-hover: var(--vault-profile-color, #ffffff);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #0f0909);
  background-color: var(--tab-container-background, rgb(15, 9, 9));
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(29, 27, 27));
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(15, 9, 9));
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 54, 61);
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #0f0909);
  background-color: var(--tab-container-background, rgb(15, 9, 9));
  border-left-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(212, 0, 255));
  outline: rgb(212, 0, 255) none 0px;
  text-decoration-color: rgb(212, 0, 255);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(255, 217, 0));
  outline: rgb(255, 217, 0) none 0px;
  text-decoration-color: rgb(255, 217, 0);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(255, 217, 0));
  outline: rgb(255, 217, 0) none 0px;
  text-decoration-color: rgb(255, 217, 0);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--italic-color, rgb(255, 217, 0));
  outline: rgb(255, 217, 0) none 0px;
  text-decoration-color: rgb(255, 217, 0);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(212, 0, 255));
  outline: rgb(212, 0, 255) none 0px;
  text-decoration-color: rgb(212, 0, 255);
}

html body .text-highlight {
  color: var(--text-normal, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(110, 118, 129);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(87, 165, 255));
  border-color: rgb(87, 165, 255);
}

html body p {
  color: var(--text-muted, rgb(139, 148, 158));
  outline: rgb(139, 148, 158) none 0px;
  text-decoration-color: rgb(139, 148, 158);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(0, 255, 255));
  outline: rgb(0, 255, 255) none 0px;
  text-decoration-color: rgb(0, 255, 255);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(0, 255, 255));
  outline: rgb(0, 255, 255) none 0px;
  text-decoration-color: rgb(0, 255, 255);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(0, 255, 255));
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgba(87, 165, 255, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(87, 165, 255, 0.3));
}`,
    lists: `html body dd {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body dt {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(110, 118, 129));
}

html body blockquote {
  color: var(--blockquote-color, rgb(255, 255, 255));
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  color: rgb(255, 255, 255);
}

html body tbody tr:nth-child(even) {
  background-color: var(--background-secondary, rgb(15, 9, 9));
}

html body td {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: var(--table-text-color, rgb(255, 255, 255));
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html body th {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `html body code {
  background-color: var(--inline-code-background, rgba(110, 118, 129, 0.4));
  border-bottom-color: rgb(48, 54, 61);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--text-normal, rgb(255, 255, 255));
  padding-bottom: 2.8px;
  padding-left: 5.6px;
  padding-right: 5.6px;
  padding-top: 2.8px;
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(22, 27, 34));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
}

html body figure {
  --code-background: var(--ec-frm-edBg, #161b22);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(132, 237, 181);
  border-left-color: rgb(132, 237, 181);
  border-right-color: rgb(132, 237, 181);
  border-top-color: rgb(132, 237, 181);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(22, 27, 34));
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: var(--text-muted, rgb(139, 148, 158));
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
}

html body li.task-list-item[data-task="#"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(255, 255, 255);
}

html li.task-list-item[data-task="body"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="."] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="="] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(139, 148, 158);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(139, 148, 158);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 27, 27);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 27, 27);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 166, 87);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(110, 118, 129);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 153, 34);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 214, 255);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 255, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 255, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 153, 34);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 153, 34);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 168, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(126, 231, 135);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(126, 231, 135);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(126, 231, 135);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 248, 81, 73);
  background: rgba(248, 81, 73, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-left-color: rgba(248, 81, 73, 0.25);
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 248, 81, 73);
  background: rgba(248, 81, 73, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-left-color: rgba(248, 81, 73, 0.25);
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 248, 81, 73);
  background: rgba(248, 81, 73, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-left-color: rgba(248, 81, 73, 0.25);
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 224, 222, 113);
  background: rgba(224, 222, 113, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-left-color: rgba(224, 222, 113, 0.25);
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 126, 231, 135);
  background: rgba(126, 231, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(126, 231, 135, 0.25);
  border-left-color: rgba(126, 231, 135, 0.25);
  border-right-color: rgba(126, 231, 135, 0.25);
  border-top-color: rgba(126, 231, 135, 0.25);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(255, 255, 255);
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
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: var(--text-normal, rgb(255, 255, 255));
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(29, 27, 27));
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 9, 9);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(177, 186, 196, 0.12));
  color: rgb(255, 255, 255);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(212, 100%, 67%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(212, 100%, 67%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(212, 100%, 67%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(212, 100%, 67%, 0.15));
  --pill-color: var(--tag-color, hsl(212, 100%, 63.2%));
  --pill-color-hover: var(--tag-color-hover, hsl(212, 100%, 63.2%));
  --pill-color-remove: var(--tag-color, hsl(212, 100%, 63.2%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(212, 100%, 63.2%));
  background-color: var(--pill-background, rgba(87, 165, 255, 0.1));
  border-bottom-color: rgba(87, 165, 255, 0.15);
  border-left-color: rgba(87, 165, 255, 0.15);
  border-right-color: rgba(87, 165, 255, 0.15);
  border-top-color: rgba(87, 165, 255, 0.15);
  color: var(--pill-color, rgb(67, 155, 255));
}

html body a.internal-link.tag-link::before {
  color: rgb(67, 155, 255);
}

html body h1 {
  border-bottom-color: rgb(132, 237, 181);
  border-left-color: rgb(132, 237, 181);
  border-right-color: rgb(132, 237, 181);
  border-top-color: rgb(132, 237, 181);
  color: var(--h1-color, rgb(132, 237, 181));
  font-size: var(--h1-size, 56px);
  letter-spacing: var(--h1-letter-spacing, -0.84px);
  line-height: var(--h1-line-height, 67.2px);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(132, 237, 181));
  font-size: var(--inline-title-size, 56px);
}

html body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(132, 237, 181);
  border-left-color: rgb(132, 237, 181);
  border-right-color: rgb(132, 237, 181);
  border-top-color: rgb(132, 237, 181);
  color: var(--h2-color, rgb(132, 237, 181));
  font-size: var(--h2-size, 48px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.528px);
  line-height: var(--h2-line-height, 57.6px);
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgb(132, 237, 181);
  border-left-color: rgb(132, 237, 181);
  border-right-color: rgb(132, 237, 181);
  border-top-color: rgb(132, 237, 181);
  color: var(--inline-title-color, rgb(132, 237, 181));
  font-size: var(--inline-title-size, 56px);
  letter-spacing: -0.84px;
  line-height: var(--inline-title-line-height, 67.2px);
  margin-bottom: 28px;
}

html body h3 {
  --font-weight: var(--h3-weight, 600);
  border-bottom-color: rgb(132, 237, 181);
  border-left-color: rgb(132, 237, 181);
  border-right-color: rgb(132, 237, 181);
  border-top-color: rgb(132, 237, 181);
  color: var(--h3-color, rgb(132, 237, 181));
  font-size: var(--h3-size, 32px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.256px);
  line-height: var(--h3-line-height, 41.6px);
}

html body h4 {
  --font-weight: var(--h4-weight, 600);
  border-bottom-color: rgb(132, 237, 181);
  border-left-color: rgb(132, 237, 181);
  border-right-color: rgb(132, 237, 181);
  border-top-color: rgb(132, 237, 181);
  color: var(--h4-color, rgb(132, 237, 181));
  font-size: var(--h4-size, 16px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h4-letter-spacing, -0.08px);
  line-height: var(--h4-line-height, 22.4px);
}

html body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(132, 237, 181);
  border-left-color: rgb(132, 237, 181);
  border-right-color: rgb(132, 237, 181);
  border-top-color: rgb(132, 237, 181);
  color: var(--h5-color, rgb(132, 237, 181));
  font-size: var(--h5-size, 17.92px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.03584px);
  line-height: var(--h5-line-height, 26.88px);
}

html body h6 {
  border-bottom-color: rgb(132, 237, 181);
  border-left-color: rgb(132, 237, 181);
  border-right-color: rgb(132, 237, 181);
  border-top-color: rgb(132, 237, 181);
  color: var(--h6-color, rgb(132, 237, 181));
  font-size: var(--h6-size, 17.92px);
  line-height: var(--h6-line-height, 26.88px);
}

html body hr {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(139, 148, 158));
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(139, 148, 158));
}

html body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: var(--icon-color, rgb(139, 148, 158));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(15, 9, 9));
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: var(--status-bar-text-color, rgb(139, 148, 158));
}

html body footer ul li a {
  color: rgb(139, 148, 158);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(139, 148, 158));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 148, 158);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body li.section-li > .section .meta {
  color: rgb(139, 148, 158);
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(139, 148, 158));
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: var(--icon-color, rgb(139, 148, 158));
}

html body .darkmode svg {
  color: rgb(139, 148, 158);
  stroke: rgb(139, 148, 158);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(110, 118, 129));
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(255, 255, 255));
}

html body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(15, 9, 9));
  border-color: rgb(255, 255, 255);
  box-shadow: var(--input-shadow, rgba(240, 246, 252, 0.1) 0px 0px 0px 1px inset);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(48, 54, 61);
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: var(--text-muted, rgb(139, 148, 158));
}

html body .metadata-container .metadata-property {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

html body .metadata-properties {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

html body .metadata-property-key {
  color: rgb(139, 148, 158);
}

html body .metadata-property-value {
  color: rgb(139, 148, 158);
}

html body .note-properties {
  border-color: rgb(48, 54, 61);
}

html body .note-properties-key {
  color: rgb(139, 148, 158);
}

html body .note-properties-row {
  border-color: rgb(139, 148, 158);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(212, 100%, 67%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(212, 100%, 67%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(212, 100%, 67%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(212, 100%, 67%, 0.15));
  --pill-color: var(--tag-color, hsl(212, 100%, 63.2%));
  --pill-color-hover: var(--tag-color-hover, hsl(212, 100%, 63.2%));
  --pill-color-remove: var(--tag-color, hsl(212, 100%, 63.2%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(212, 100%, 63.2%));
  background-color: var(--pill-background, rgba(87, 165, 255, 0.1));
  color: var(--pill-color, rgb(67, 155, 255));
}

html body .note-properties-value {
  color: rgb(139, 148, 158);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(29, 27, 27));
  color: var(--text-normal, rgb(255, 255, 255));
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(15, 9, 9));
  border-color: rgb(255, 255, 255);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(1, 4, 9));
}

html body .stacked-page.active {
  border-color: rgb(255, 255, 255);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(15, 9, 9));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--text-normal, rgb(255, 255, 255));
}

html body abbr {
  color: rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body input[type=text] {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: var(--text-normal, rgb(139, 148, 158));
}

html body kbd {
  background-color: var(--code-background, rgb(22, 27, 34));
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: var(--code-normal, rgb(139, 148, 158));
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}

html body ul.tags > li {
  background-color: var(--tag-background, rgba(87, 165, 255, 0.1));
  border-bottom-color: rgba(87, 165, 255, 0.15);
  border-left-color: rgba(87, 165, 255, 0.15);
  border-right-color: rgba(87, 165, 255, 0.15);
  border-top-color: rgba(87, 165, 255, 0.15);
  color: var(--tag-color, rgb(67, 155, 255));
}`,
  },
  light: {},
};
