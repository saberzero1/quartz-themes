import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cosmical",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "cosmical",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: var(--color-base-60, oklch(42% 0 0));
  --background-modifier-border: var(--color-base-40, oklch(36% 0 0));
  --background-modifier-border-focus: var(--color-base-70, oklch(45% 0 0));
  --background-modifier-border-hover: var(--color-base-50, oklch(39% 0 0));
  --background-modifier-error: var(--color-red, #f47266);
  --background-modifier-error-hover: var(--color-red, #f47266);
  --background-modifier-error-rgb: var(--color-red-rgb, 244,114,102);
  --background-modifier-form-field: var(--background-primary, #2a2a2a);
  --background-modifier-success: var(--color-green, #8bdfae);
  --background-modifier-success-rgb: var(--color-green-rgb, 160,223,139);
  --background-primary: var(--color-base-20, oklch(30% 0 0));
  --background-primary-alt: var(--color-base-10, oklch(27% 0 0));
  --background-secondary: var(--color-base-05, oklch(24% 0 0));
  --background-secondary-alt: var(--color-base-10, oklch(27% 0 0));
  --base-row-even-bg: var(--color-base-20, oklch(30% 0 0));
  --base-row-hover-bg: var(--color-base-50, oklch(39% 0 0));
  --base-row-odd-bg: var(--color-base-30, oklch(33% 0 0));
  --bases-cards-background: var(--background-primary, oklch(30% 0 0));
  --bases-cards-cover-background: var(--background-primary-alt, oklch(27% 0 0));
  --bases-embed-border-color: var(--divider-color, oklch(42% 0 0));
  --bases-group-heading-property-color: var(--text-muted, oklch(77.5% 0 0));
  --bases-table-border-color: var(--table-border-color, oklch(42% 0 0));
  --bases-table-cell-background-active: var(--background-primary, oklch(30% 0 0));
  --bases-table-cell-background-disabled: var(--background-primary-alt, oklch(27% 0 0));
  --bases-table-group-background: var(--background-primary-alt, oklch(27% 0 0));
  --bases-table-header-background: var(--background-primary, oklch(30% 0 0));
  --bases-table-header-color: var(--theme-color-1-normal, oklch(0.9 0.15 262));
  --bases-table-summary-background: var(--background-primary, oklch(30% 0 0));
  --blockquote-border-color: var(--theme-color-1-alt, oklch(0.7 0.15 262));
  --blockquote-border-thickness: 0.2em;
  --callout-bug: var(--color-red-rgb, 244,114,102);
  --callout-default: var(--color-blue-rgb, 141,158,255);
  --callout-error: var(--color-red-rgb, 244,114,102);
  --callout-example: var(--color-purple-rgb, 184,157,231);
  --callout-fail: var(--color-red-rgb, 244,114,102);
  --callout-important: var(--color-cyan-rgb, 132,220,210);
  --callout-info: var(--color-blue-rgb, 141,158,255);
  --callout-question: var(--color-orange-rgb, 247,159,105);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--color-green-rgb, 160,223,139);
  --callout-summary: var(--color-cyan-rgb, 132,220,210);
  --callout-tip: var(--color-cyan-rgb, 132,220,210);
  --callout-todo: var(--color-blue-rgb, 141,158,255);
  --callout-warning: var(--color-orange-rgb, 247,159,105);
  --canvas-background: var(--background-primary, oklch(30% 0 0));
  --canvas-card-label-color: var(--text-faint, oklch(58% 0 0));
  --canvas-color-1: var(--color-red-rgb, 244,114,102);
  --canvas-color-2: var(--color-orange-rgb, 247,159,105);
  --canvas-color-3: var(--color-yellow-rgb, 228,220,129);
  --canvas-color-4: var(--color-green-rgb, 160,223,139);
  --canvas-color-5: var(--color-cyan-rgb, 132,220,210);
  --canvas-color-6: var(--color-purple-rgb, 184,157,231);
  --canvas-dot-pattern: var(--color-base-30, oklch(33% 0 0));
  --caret-color: var(--text-normal, oklch(100% 0 0));
  --checkbox-border-color: var(--text-faint, oklch(58% 0 0));
  --checkbox-border-color-hover: var(--text-muted, oklch(77.5% 0 0));
  --checkbox-color: var(--interactive-accent, oklch(0.7 0.15 70));
  --checkbox-color-hover: var(--interactive-accent-hover, oklch(0.9 0.15 70));
  --checkbox-marker-color: var(--background-primary, oklch(30% 0 0));
  --checklist-done-color: var(--text-muted, oklch(77.5% 0 0));
  --code-background: var(--color-base-10, oklch(27% 0 0));
  --code-border-color: var(--background-modifier-border, oklch(36% 0 0));
  --code-comment: var(--text-faint, oklch(70% 0 0));
  --code-function: var(--color-yellow, oklch(85% 0.2 300));
  --code-important: var(--color-orange, oklch(70% 0.2 295));
  --code-keyword: var(--color-pink, oklch(90% 0.16 150));
  --code-normal: var(--text-normal, oklch(95% 0 0));
  --code-operator: var(--code-normal, oklch(95% 0 0));
  --code-property: var(--color-cyan, oklch(90% 0.16 250));
  --code-punctuation: var(--code-normal, oklch(95% 0 0));
  --code-radius: var(--radius-m, 8px);
  --code-string: var(--color-green, oklch(90% 0.16 90));
  --code-tag: var(--color-red, oklch(75% 0.2 260));
  --code-value: var(--color-purple, #b89de7);
  --code-valuse: oklch(90% 0.16 110);
  --collapse-icon-color: var(--text-faint, oklch(58% 0 0));
  --collapse-icon-color-collapsed: var(--text-accent, oklch(0.9 0.15 70));
  --color-base-00: oklch(21% 0 0);
  --color-base-05: oklch(24% 0 0);
  --color-base-10: oklch(27% 0 0);
  --color-base-100: oklch(100% 0 0);
  --color-base-20: oklch(30% 0 0);
  --color-base-30: oklch(33% 0 0);
  --color-base-40: oklch(36% 0 0);
  --color-base-50: oklch(39% 0 0);
  --color-base-60: oklch(42% 0 0);
  --color-base-70: oklch(45% 0 0);
  --color-blue: #4958fd;
  --color-blue-rgb: 141,158,255;
  --color-cyan: #84dcd2;
  --color-cyan-rgb: 132,220,210;
  --color-green: #8bdfae;
  --color-green-rgb: 160,223,139;
  --color-orange: #f79f69;
  --color-orange-rgb: 247,159,105;
  --color-pink: #dfaac0;
  --color-pink-rgb: 223,170,192;
  --color-purple: #b89de7;
  --color-purple-rgb: 184,157,231;
  --color-red: #f47266;
  --color-red-rgb: 244,114,102;
  --color-yellow: #d4e481;
  --color-yellow-rgb: 228,220,129;
  --dark: var(--text-normal, var(--color-base-100, oklch(100% 0 0)));
  --darkgray: var(--text-normal, var(--color-base-100, oklch(100% 0 0)));
  --divider-color: var(--color-base-60, oklch(42% 0 0));
  --divider-color-hover: var(--interactive-accent, oklch(0.7 0.15 70));
  --dropdown-background: var(--interactive-normal, oklch(36% 0 0));
  --dropdown-background-hover: var(--interactive-hover, oklch(39% 0 0));
  --file-header-background: var(--background-primary, oklch(30% 0 0));
  --file-header-background-focused: var(--background-primary, oklch(30% 0 0));
  --file-header-justify: left;
  --flair-background: var(--interactive-normal, oklch(36% 0 0));
  --flair-color: var(--text-normal, oklch(100% 0 0));
  --font-headings: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --footnote-divider-color: var(--metadata-divider-color, oklch(36% 0 0));
  --footnote-id-color: var(--text-muted, oklch(77.5% 0 0));
  --footnote-id-color-no-occurrences: var(--text-faint, oklch(58% 0 0));
  --graph-node: var(--text-muted, oklch(77.5% 0 0));
  --graph-node-attachment: var(--color-yellow, #d4e481);
  --graph-node-focused: var(--text-accent, oklch(0.9 0.15 70));
  --graph-node-tag: var(--theme-color-1-normal, oklch(0.9 0.15 262));
  --graph-node-unresolved: var(--text-faint, oklch(58% 0 0));
  --graph-text: var(--text-normal, oklch(100% 0 0));
  --gray: var(--text-muted, var(--color-base-70, oklch(77.5% 0 0)));
  --h1-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h2-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h3-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h4-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h5-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h6-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: var(--text-faint, oklch(58% 0 0));
  --heading-underline-color: var(--color-base-40, oklch(36% 0 0));
  --highlight: var(--text-highlight-bg, var(--theme-color-2-transparent, oklch(from oklch(0.7 0.15 70) l c h/0.33)));
  --hr-color: var(--divider-color, oklch(42% 0 0));
  --icon-color: var(--text-faint, oklch(58% 0 0));
  --icon-color-active: var(--text-muted, oklch(77.5% 0 0));
  --icon-color-focused: var(--text-normal, oklch(100% 0 0));
  --icon-color-hover: var(--text-muted, oklch(77.5% 0 0));
  --inline-title-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: var(--h1-size, 1.625rem);
  --input-date-separator: var(--text-faint, oklch(58% 0 0));
  --input-placeholder-color: var(--text-faint, oklch(58% 0 0));
  --interactive-accent: var(--theme-color-2-alt, oklch(0.7 0.15 70));
  --interactive-accent-hover: var(--theme-color-2-normal, oklch(0.9 0.15 70));
  --interactive-hover: var(--color-base-50, oklch(39% 0 0));
  --interactive-normal: var(--color-base-40, oklch(36% 0 0));
  --light: var(--background-primary, var(--color-base-20, oklch(30% 0 0)));
  --lightgray: var(--background-secondary, var(--color-base-05, oklch(24% 0 0)));
  --link-color: var(--text-accent, oklch(0.9 0.15 70));
  --link-color-hover: var(--text-accent-hover, oklch(1 0.09 70));
  --link-external-color: var(--text-accent, oklch(0.9 0.15 70));
  --link-external-color-hover: var(--text-accent-hover, oklch(1 0.09 70));
  --link-unresolved-color: var(--text-accent, oklch(0.9 0.15 70));
  --list-marker-color: var(--text-muted, oklch(77.5% 0 0));
  --list-marker-color-collapsed: var(--text-accent, oklch(0.9 0.15 70));
  --list-marker-color-hover: var(--text-muted, oklch(77.5% 0 0));
  --menu-background: var(--background-secondary, oklch(24% 0 0));
  --menu-border-color: var(--background-modifier-border-hover, oklch(39% 0 0));
  --metadata-border-color: var(--background-modifier-border, oklch(36% 0 0));
  --metadata-divider-color: var(--background-modifier-border, oklch(36% 0 0));
  --metadata-gap: 0;
  --metadata-input-font-size: max(var(--font-ui-small),0.9em);
  --metadata-input-text-color: var(--property-input-color, oklch(0.9 0.15 70));
  --metadata-label-font-size: max(var(--font-ui-small),0.9em);
  --metadata-label-text-color: var(--property-label-color, oklch(0.9 0.15 262));
  --metadata-label-text-color-hover: var(--text-muted, oklch(77.5% 0 0));
  --metadata-label-width: max(22.5%,8rem);
  --modal-background: var(--background-primary, oklch(30% 0 0));
  --modal-border-color: var(--background-modifier-border, oklch(36% 0 0));
  --nav-collapse-icon-color: var(--collapse-icon-color, oklch(58% 0 0));
  --nav-collapse-icon-color-collapsed: var(--text-faint, oklch(58% 0 0));
  --nav-heading-color: var(--text-normal, oklch(100% 0 0));
  --nav-heading-color-collapsed: var(--text-faint, oklch(58% 0 0));
  --nav-heading-color-collapsed-hover: var(--text-muted, oklch(77.5% 0 0));
  --nav-heading-color-hover: var(--text-normal, oklch(100% 0 0));
  --nav-item-color: var(--text-muted, oklch(77.5% 0 0));
  --nav-item-color-active: var(--text-normal, oklch(100% 0 0));
  --nav-item-color-highlighted: var(--text-accent, oklch(0.9 0.15 70));
  --nav-item-color-hover: var(--text-normal, oklch(100% 0 0));
  --nav-item-color-selected: var(--text-normal, oklch(100% 0 0));
  --nav-tag-color: var(--text-faint, oklch(58% 0 0));
  --nav-tag-color-active: var(--text-muted, oklch(77.5% 0 0));
  --nav-tag-color-hover: var(--text-muted, oklch(77.5% 0 0));
  --nn-theme-file-selected-bg: var(--background-modifier-border-hover, oklch(39% 0 0));
  --nn-theme-file-selected-inactive-bg: var(--background-modifier-border, oklch(36% 0 0));
  --nn-theme-file-selected-name-color: var(--text-normal, oklch(100% 0 0));
  --nn-theme-file-tag-bg: var(--tag-background, color-mix(in oklch,oklch(0.9 0.15 262) 15%,transparent));
  --nn-theme-file-tag-color: var(--tag-color, oklch(0.9 0.15 262));
  --nn-theme-list-bg: var(--background-secondary, oklch(24% 0 0));
  --nn-theme-list-header-bg: var(--background-secondary, oklch(24% 0 0));
  --nn-theme-nav-bg: var(--background-secondary, oklch(24% 0 0));
  --pdf-background: var(--background-primary, oklch(30% 0 0));
  --pdf-page-background: var(--background-primary, oklch(30% 0 0));
  --pdf-sidebar-background: var(--background-primary, oklch(30% 0 0));
  --pill-border-color: var(--background-modifier-border, oklch(36% 0 0));
  --pill-border-color-hover: var(--background-modifier-border-hover, oklch(39% 0 0));
  --pill-color: var(--text-muted, oklch(77.5% 0 0));
  --pill-color-hover: var(--text-normal, oklch(100% 0 0));
  --pill-color-remove: var(--text-faint, oklch(58% 0 0));
  --pill-color-remove-hover: var(--text-accent, oklch(0.9 0.15 70));
  --prompt-background: var(--background-primary, oklch(30% 0 0));
  --prompt-border-color: var(--background-modifier-border, oklch(36% 0 0));
  --property-icon-color: var(--theme-color-1-alt, oklch(0.7 0.15 262));
  --property-input-color: var(--theme-color-2-normal, oklch(0.9 0.15 70));
  --property-label-color: var(--theme-color-1-normal, oklch(0.9 0.15 262));
  --raised-background: var(--blur-background, color-mix(in srgb, oklch(36% 0 0) 65%, transparent) linear-gradient(oklch(36% 0 0), color-mix(in srgb, oklch(36% 0 0) 65%, transparent)));
  --ribbon-background: var(--background-secondary, oklch(24% 0 0));
  --ribbon-background-collapsed: var(--ribbon-background, oklch(24% 0 0));
  --search-clear-button-color: var(--text-muted, oklch(77.5% 0 0));
  --search-icon-color: var(--text-muted, oklch(77.5% 0 0));
  --search-result-background: var(--background-primary, oklch(30% 0 0));
  --secondary: var(--text-accent, var(--theme-color-2-normal, oklch(0.9 0.15 70)));
  --setting-group-heading-color: var(--text-normal, oklch(100% 0 0));
  --setting-items-background: var(--background-primary-alt, oklch(27% 0 0));
  --setting-items-border-color: var(--background-modifier-border, oklch(36% 0 0));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, oklch(77.5% 0 0));
  --shiki-code-background: var(--code-background, oklch(27% 0 0));
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-comment: var(--text-faint, oklch(58% 0 0));
  --shiki-code-function: var(--color-green, #8bdfae);
  --shiki-code-important: var(--color-orange, #f79f69);
  --shiki-code-keyword: var(--color-pink, #dfaac0);
  --shiki-code-normal: var(--text-muted, oklch(77.5% 0 0));
  --shiki-code-property: var(--color-cyan, #84dcd2);
  --shiki-code-punctuation: var(--text-muted, oklch(77.5% 0 0));
  --shiki-code-string: var(--color-yellow, #d4e481);
  --shiki-code-value: var(--color-purple, #b89de7);
  --shiki-gutter-border-color: var(--background-modifier-border, oklch(36% 0 0));
  --shiki-gutter-text-color: var(--text-faint, oklch(58% 0 0));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, oklch(77.5% 0 0));
  --shiki-highlight-neutral: var(--shiki-code-normal, oklch(77.5% 0 0));
  --shiki-terminal-dots-color: var(--text-faint, oklch(58% 0 0));
  --slider-thumb-border-color: var(--background-modifier-border-hover, oklch(39% 0 0));
  --slider-track-background: var(--background-modifier-border, oklch(36% 0 0));
  --status-bar-background: var(--background-secondary, oklch(24% 0 0));
  --status-bar-border-color: var(--divider-color, oklch(42% 0 0));
  --status-bar-text-color: var(--text-muted, oklch(77.5% 0 0));
  --suggestion-background: var(--background-primary, oklch(30% 0 0));
  --sync-avatar-color-1: var(--color-red, #f47266);
  --sync-avatar-color-2: var(--color-orange, #f79f69);
  --sync-avatar-color-3: var(--color-yellow, #d4e481);
  --sync-avatar-color-4: var(--color-green, #8bdfae);
  --sync-avatar-color-5: var(--color-cyan, #84dcd2);
  --sync-avatar-color-6: var(--color-blue, #4958fd);
  --sync-avatar-color-7: var(--color-purple, #b89de7);
  --sync-avatar-color-8: var(--color-pink, #dfaac0);
  --tab-background-active: var(--background-primary, oklch(30% 0 0));
  --tab-container-background: var(--background-primary, oklch(30% 0 0));
  --tab-divider-color: var(--color-base-40, oklch(36% 0 0));
  --tab-outline-color: var(--color-base-50, oklch(39% 0 0));
  --tab-switcher-background: var(--background-secondary, oklch(24% 0 0));
  --tab-text-color: var(--text-faint, oklch(58% 0 0));
  --tab-text-color-active: var(--text-muted, oklch(77.5% 0 0));
  --tab-text-color-focused: var(--text-muted, oklch(77.5% 0 0));
  --tab-text-color-focused-active: var(--text-muted, oklch(77.5% 0 0));
  --tab-text-color-focused-active-current: var(--text-normal, oklch(100% 0 0));
  --tab-text-color-focused-highlighted: var(--text-accent, oklch(0.9 0.15 70));
  --table-add-button-border-color: var(--background-modifier-border, oklch(36% 0 0));
  --table-border-color: var(--divider-color, oklch(42% 0 0));
  --table-drag-handle-background-active: var(--table-selection-border-color, oklch(0.7 0.15 70));
  --table-drag-handle-color: var(--text-faint, oklch(58% 0 0));
  --table-header-border-color: var(--table-border-color, oklch(42% 0 0));
  --table-header-color: var(--text-normal, oklch(100% 0 0));
  --table-selection-border-color: var(--interactive-accent, oklch(0.7 0.15 70));
  --tag-background: color-mix(in oklch,var(--theme-color-1-normal) 15%,transparent);
  --tag-background-hover: color-mix(in oklch,var(--theme-color-1-normal) 30%,transparent);
  --tag-color: var(--theme-color-1-normal, oklch(0.9 0.15 262));
  --tag-color-hover: var(--theme-color-1-high, oklch(1 0.09 262));
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.33em;
  --tag-radius: var(--radius-l, 12px);
  --tertiary: var(--text-accent-hover, var(--theme-color-2-high, oklch(1 0.09 70)));
  --text-accent: var(--theme-color-2-normal, oklch(0.9 0.15 70));
  --text-accent-hover: var(--theme-color-2-high, oklch(1 0.09 70));
  --text-error: var(--color-red, #f47266);
  --text-faint: var(--color-base-50, oklch(58% 0 0));
  --text-highlight-bg: var(--theme-color-2-transparent, oklch(from oklch(0.7 0.15 70) l c h/0.33));
  --text-muted: var(--color-base-70, oklch(77.5% 0 0));
  --text-normal: var(--color-base-100, oklch(100% 0 0));
  --text-selection: var(--theme-color-1-transparent, oklch(from oklch(0.7 0.15 262) l c h/0.33));
  --text-success: var(--color-green, #8bdfae);
  --text-warning: var(--color-orange, #f79f69);
  --textHighlight: var(--text-highlight-bg, var(--theme-color-2-transparent, oklch(from oklch(0.7 0.15 70) l c h/0.33)));
  --theme-color-1-alt: oklch(var(--theme-color-luminosity-alt) var(--theme-color-1-chroma) var(--theme-color-1-hue));
  --theme-color-1-chroma: 0.15;
  --theme-color-1-high: oklch(var(--theme-color-luminosity-high) calc(var(--theme-color-1-chroma) - 0.06) var(--theme-color-1-hue));
  --theme-color-1-hue: 262;
  --theme-color-1-normal: oklch(var(--theme-color-luminosity-normal) var(--theme-color-1-chroma) var(--theme-color-1-hue));
  --theme-color-1-transparent: oklch(from var(--theme-color-1-alt) l c h/0.33);
  --theme-color-2-alt: oklch(var(--theme-color-luminosity-alt) var(--theme-color-2-chroma) var(--theme-color-2-hue));
  --theme-color-2-chroma: 0.15;
  --theme-color-2-high: oklch(var(--theme-color-luminosity-high) calc(var(--theme-color-2-chroma) - 0.06) var(--theme-color-2-hue));
  --theme-color-2-hue: 70;
  --theme-color-2-normal: oklch(var(--theme-color-luminosity-normal) var(--theme-color-2-chroma) var(--theme-color-2-hue));
  --theme-color-2-transparent: oklch(from var(--theme-color-2-alt) l c h/0.33);
  --theme-color-luminosity-alt: 0.7;
  --theme-color-luminosity-high: 1;
  --theme-color-luminosity-normal: 0.9;
  --titlebar-background: var(--background-primary, oklch(30% 0 0));
  --titlebar-background-focused: var(--background-primary, oklch(30% 0 0));
  --titlebar-border-color: var(--background-modifier-border, oklch(36% 0 0));
  --titlebar-text-color: var(--text-muted, oklch(77.5% 0 0));
  --titlebar-text-color-focused: var(--text-normal, oklch(100% 0 0));
  --vault-profile-color: var(--text-normal, oklch(100% 0 0));
  --vault-profile-color-hover: var(--vault-profile-color, oklch(100% 0 0));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, oklch(24% 0 0));
  --titlebar-background: var(--background-secondary, oklch(24% 0 0));
  --titlebar-background-focused: var(--background-secondary, oklch(24% 0 0));
  background-color: var(--tab-container-background, oklch(0.3 0 0));
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, oklch(0.3 0 0));
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, oklch(0.24 0 0));
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.42 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, oklch(24% 0 0));
  background-color: var(--tab-container-background, oklch(0.3 0 0));
  border-left-color: oklch(0.42 0 0);
  color: oklch(1 0 0);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, oklch(1 0 0));
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, oklch(1 0 0));
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, oklch(1 0 0));
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, oklch(1 0 0));
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, oklch(1 0 0));
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.7 0.15 70 / 0.33));
  color: var(--text-normal, oklch(1 0 0));
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body del {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: oklch(0.58 0 0);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, oklch(0.7 0.15 70));
  border-color: oklch(0.7 0.15 70);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, oklch(0.775 0 0));
  outline: oklch(0.775 0 0) none 0px;
  text-decoration-color: oklch(0.775 0 0);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, oklch(0.9 0.15 70));
  outline: oklch(0.9 0.15 70) none 0px;
  text-decoration-color: oklch(0.9 0.15 70);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, oklch(0.9 0.15 70));
  outline: oklch(0.9 0.15 70) none 0px;
  text-decoration-color: oklch(0.9 0.15 70);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, oklch(0.9 0.15 70));
  outline: oklch(0.9 0.15 70) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body dt {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body ol > li {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body ul > li {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, oklch(0.58 0 0));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, oklch(1 0 0));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body table {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body td {
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
  border-top-color: oklch(0.42 0 0);
  color: var(--table-text-color, oklch(1 0 0));
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
  border-top-color: oklch(0.42 0 0);
  color: var(--table-header-color, oklch(1 0 0));
  font-weight: var(--table-header-weight, 500);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, oklch(0.27 0 0));
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, oklch(0.95 0 0));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, oklch(0.27 0 0));
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body figcaption {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, oklch(27% 0 0));
  border-bottom-color: oklch(1 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body video {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, oklch(0.27 0 0));
  border-bottom-color: oklch(0.775 0 0);
  border-left-color: oklch(0.775 0 0);
  border-right-color: oklch(0.775 0 0);
  border-top-color: oklch(0.775 0 0);
  color: var(--text-muted, oklch(0.775 0 0));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(0.7 0.15 70);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 159, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.39 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 220, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(73, 88, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(73, 88, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(184, 157, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 132,220,210);
  background: rgba(132, 220, 210, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 244,114,102);
  background: rgba(244, 114, 102, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 244,114,102);
  background: rgba(244, 114, 102, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 184,157,231);
  background: rgba(184, 157, 231, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(184, 157, 231, 0.25);
  border-left-color: rgba(184, 157, 231, 0.25);
  border-right-color: rgba(184, 157, 231, 0.25);
  border-top-color: rgba(184, 157, 231, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 244,114,102);
  background: rgba(244, 114, 102, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 141,158,255);
  background: rgba(141, 158, 255, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 141,158,255);
  background: rgba(141, 158, 255, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 247,159,105);
  background: rgba(247, 159, 105, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 160,223,139);
  background: rgba(160, 223, 139, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(160, 223, 139, 0.25);
  border-left-color: rgba(160, 223, 139, 0.25);
  border-right-color: rgba(160, 223, 139, 0.25);
  border-top-color: rgba(160, 223, 139, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 132,220,210);
  background: rgba(132, 220, 210, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 141,158,255);
  background: rgba(141, 158, 255, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 247,159,105);
  background: rgba(247, 159, 105, 0.075) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color),.075);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: oklch(1 0 0);
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
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  color: var(--text-normal, oklch(1 0 0));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--background-primary, oklch(0.3 0 0));
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--background-primary, oklch(0.3 0 0));
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, color-mix(in oklch,oklch(0.9 0.15 262) 15%,transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix(in oklch,oklch(0.9 0.15 262) 30%,transparent));
  --pill-color: var(--tag-color, oklch(0.9 0.15 262));
  --pill-color-hover: var(--tag-color-hover, oklch(1 0.09 262));
  --pill-color-remove: var(--tag-color, oklch(0.9 0.15 262));
  --pill-color-remove-hover: var(--tag-color-hover, oklch(1 0.09 262));
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.33em);
  --pill-radius: var(--tag-radius, 12px);
  background-color: var(--pill-background, oklch(0.9 0.15 262 / 0.15));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--pill-color, oklch(0.9 0.15 262));
  font-size: 14.4px;
  line-height: var(--line-height-tight, 14.4px);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: oklch(0.9 0.15 262);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: var(--h1-color, oklch(1 0 0));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, oklch(1 0 0));
  font-size: var(--inline-title-size, 26px);
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: var(--h2-color, oklch(1 0 0));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: var(--inline-title-color, oklch(1 0 0));
  font-size: var(--inline-title-size, 26px);
  letter-spacing: -0.39px;
  line-height: var(--inline-title-line-height, 31.2px);
  margin-bottom: 16px;
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: var(--h3-color, oklch(1 0 0));
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: var(--h4-color, oklch(1 0 0));
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: var(--h5-color, oklch(1 0 0));
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: var(--h6-color, oklch(1 0 0));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 141,158,255);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.775 0 0));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.775 0 0));
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
  color: oklch(1 0 0);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
  color: var(--icon-color, oklch(0.58 0 0));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, oklch(0.24 0 0));
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
  border-top-color: oklch(0.42 0 0);
  color: var(--status-bar-text-color, oklch(0.775 0 0));
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.775 0 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, oklch(0.775 0 0));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.775 0 0);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, oklch(0.775 0 0));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
  color: var(--icon-color, oklch(0.58 0 0));
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.58 0 0);
  stroke: oklch(0.58 0 0);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
  color: oklch(0.58 0 0);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, oklch(0.58 0 0));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, oklch(1 0 0));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, oklch(0.24 0 0));
  border-color: oklch(1 0 0);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.42 0 0);
  color: var(--table-header-color, oklch(1 0 0));
  font-weight: var(--table-header-weight, 500);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  --checkbox-color: var(--property-input-color, oklch(0.9 0.15 70));
  --link-color: var(--property-input-color, oklch(0.9 0.15 70));
  --link-external-color: var(--property-input-color, oklch(0.9 0.15 70));
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  color: var(--text-muted, oklch(0.775 0 0));
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: oklch(0.775 0 0);
  border-left-color: oklch(0.775 0 0);
  border-right-color: oklch(0.775 0 0);
  border-top-color: oklch(0.775 0 0);
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.775 0 0);
  border-left-color: oklch(0.775 0 0);
  border-right-color: oklch(0.775 0 0);
  border-top-color: oklch(0.775 0 0);
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .metadata-property-key {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .note-properties {
  --checkbox-color: var(--property-input-color, oklch(0.9 0.15 70));
  --link-color: var(--property-input-color, oklch(0.9 0.15 70));
  --link-external-color: var(--property-input-color, oklch(0.9 0.15 70));
  border-color: oklch(0.36 0 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, color-mix(in oklch,oklch(0.9 0.15 262) 15%,transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix(in oklch,oklch(0.9 0.15 262) 30%,transparent));
  --pill-color: var(--tag-color, oklch(0.9 0.15 262));
  --pill-color-hover: var(--tag-color-hover, oklch(1 0.09 262));
  --pill-color-remove: var(--tag-color, oklch(0.9 0.15 262));
  --pill-color-remove-hover: var(--tag-color-hover, oklch(1 0.09 262));
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.33em);
  --pill-radius: var(--tag-radius, 12px);
  background-color: var(--pill-background, oklch(0.9 0.15 262 / 0.15));
  border-radius: 12px;
  color: var(--pill-color, oklch(0.9 0.15 262));
}

html[saved-theme="dark"] body .note-properties-value {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, oklch(0.3 0 0));
  color: var(--text-normal, oklch(1 0 0));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, oklch(0.24 0 0));
  border-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, oklch(0.24 0 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: oklch(1 0 0);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  background-color: var(--background-modifier-hover, oklch(0.27 0 0));
  border-bottom-color: oklch(0.95 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.95 0 0);
  border-right-color: oklch(0.95 0 0);
  border-top-color: oklch(0.95 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, oklch(0.95 0 0));
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, oklch(0.24 0 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: var(--text-normal, oklch(1 0 0));
}

html[saved-theme="dark"] body abbr {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body details {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: oklch(0.9 0.15 262);
  border-left-color: oklch(0.9 0.15 262);
  border-right-color: oklch(0.9 0.15 262);
  border-top-color: oklch(0.9 0.15 262);
  color: var(--text-normal, oklch(0.9 0.15 262));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, oklch(0.27 0 0));
  border-bottom-color: oklch(0.95 0 0);
  border-left-color: oklch(0.95 0 0);
  border-right-color: oklch(0.95 0 0);
  border-top-color: oklch(0.95 0 0);
  color: var(--code-normal, oklch(0.95 0 0));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body sub {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body summary {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body sup {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, oklch(0.9 0.15 262 / 0.15));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--tag-color, oklch(0.9 0.15 262));
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: var(--color-base-50, oklch(82% 0 0));
  --background-modifier-border: var(--color-base-30, oklch(88% 0 0));
  --background-modifier-border-focus: var(--color-base-60, oklch(78% 0 0));
  --background-modifier-border-hover: var(--color-base-40, oklch(85% 0 0));
  --background-modifier-error: var(--color-red, #f47266);
  --background-modifier-error-hover: var(--color-red, #f47266);
  --background-modifier-error-rgb: var(--color-red-rgb, 244,114,102);
  --background-modifier-form-field: var(--background-primary, oklch(100% 0 0));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, oklch(100% 0 0));
  --background-modifier-success: var(--color-green, #8bdfae);
  --background-modifier-success-rgb: var(--color-green-rgb, 160,223,139);
  --background-primary: var(--color-base-00, oklch(100% 0 0));
  --background-primary-alt: var(--color-base-05, oklch(97% 0 0));
  --background-secondary: var(--color-base-10, oklch(94% 0 0));
  --background-secondary-alt: var(--color-base-20, oklch(91% 0 0));
  --base-row-even-bg: var(--color-base-00, oklch(100% 0 0));
  --base-row-hover-bg: var(--color-base-50, oklch(82% 0 0));
  --base-row-odd-bg: var(--color-base-05, oklch(97% 0 0));
  --bases-cards-background: var(--background-primary, oklch(100% 0 0));
  --bases-cards-cover-background: var(--background-primary-alt, oklch(97% 0 0));
  --bases-embed-border-color: var(--divider-color, oklch(82% 0 0));
  --bases-group-heading-property-color: var(--text-muted, oklch(27.5% 0 0));
  --bases-table-border-color: var(--table-border-color, oklch(82% 0 0));
  --bases-table-cell-background-active: var(--background-primary, oklch(100% 0 0));
  --bases-table-cell-background-disabled: var(--background-primary-alt, oklch(97% 0 0));
  --bases-table-group-background: var(--background-primary-alt, oklch(97% 0 0));
  --bases-table-header-background: var(--background-primary, oklch(100% 0 0));
  --bases-table-header-color: var(--theme-color-1-normal, oklch(0.4 0.15 262));
  --bases-table-summary-background: var(--background-primary, oklch(100% 0 0));
  --blockquote-border-color: var(--theme-color-1-alt, oklch(0.5 0.15 262));
  --blockquote-border-thickness: 0.2em;
  --callout-bug: var(--color-red-rgb, 244,114,102);
  --callout-default: var(--color-blue-rgb, 141,158,255);
  --callout-error: var(--color-red-rgb, 244,114,102);
  --callout-example: var(--color-purple-rgb, 184,157,231);
  --callout-fail: var(--color-red-rgb, 244,114,102);
  --callout-important: var(--color-cyan-rgb, 132,220,210);
  --callout-info: var(--color-blue-rgb, 141,158,255);
  --callout-question: var(--color-orange-rgb, 247,159,105);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--color-green-rgb, 160,223,139);
  --callout-summary: var(--color-cyan-rgb, 132,220,210);
  --callout-tip: var(--color-cyan-rgb, 132,220,210);
  --callout-todo: var(--color-blue-rgb, 141,158,255);
  --callout-warning: var(--color-orange-rgb, 247,159,105);
  --canvas-background: var(--background-primary, oklch(100% 0 0));
  --canvas-card-label-color: var(--text-faint, oklch(45% 0 0));
  --canvas-color-1: var(--color-red-rgb, 244,114,102);
  --canvas-color-2: var(--color-orange-rgb, 247,159,105);
  --canvas-color-3: var(--color-yellow-rgb, 228,220,129);
  --canvas-color-4: var(--color-green-rgb, 160,223,139);
  --canvas-color-5: var(--color-cyan-rgb, 132,220,210);
  --canvas-color-6: var(--color-purple-rgb, 184,157,231);
  --canvas-dot-pattern: var(--color-base-30, oklch(88% 0 0));
  --caret-color: var(--text-normal, oklch(0% 0 0));
  --checkbox-border-color: var(--text-faint, oklch(45% 0 0));
  --checkbox-border-color-hover: var(--text-muted, oklch(27.5% 0 0));
  --checkbox-color: var(--interactive-accent, oklch(0.5 0.15 70));
  --checkbox-color-hover: var(--interactive-accent-hover, oklch(0.4 0.15 70));
  --checkbox-marker-color: var(--background-primary, oklch(100% 0 0));
  --checklist-done-color: var(--text-muted, oklch(27.5% 0 0));
  --code-background: var(--color-base-05, oklch(97% 0 0));
  --code-border-color: var(--background-modifier-border, oklch(88% 0 0));
  --code-comment: var(--text-faint, oklch(50% 0 0));
  --code-function: var(--color-yellow, oklch(40% 0.2 300));
  --code-important: var(--color-orange, oklch(30% 0.2 295));
  --code-keyword: var(--color-pink, oklch(40% 0.16 150));
  --code-normal: var(--text-normal, oklch(0% 0 0));
  --code-operator: var(--code-normal, oklch(0% 0 0));
  --code-property: var(--color-cyan, oklch(40% 0.16 250));
  --code-punctuation: var(--code-normal, oklch(0% 0 0));
  --code-radius: var(--radius-m, 8px);
  --code-string: var(--color-green, oklch(40% 0.2 90));
  --code-tag: var(--color-red, oklch(40% 0.2 260));
  --code-value: var(--color-purple, #b89de7);
  --code-valuse: oklch(40% 0.16 110);
  --collapse-icon-color: var(--text-faint, oklch(45% 0 0));
  --collapse-icon-color-collapsed: var(--text-accent, oklch(0.4 0.15 70));
  --color-base-00: oklch(100% 0 0);
  --color-base-05: oklch(97% 0 0);
  --color-base-10: oklch(94% 0 0);
  --color-base-100: oklch(0% 0 0);
  --color-base-20: oklch(91% 0 0);
  --color-base-30: oklch(88% 0 0);
  --color-base-40: oklch(85% 0 0);
  --color-base-50: oklch(82% 0 0);
  --color-base-60: oklch(78% 0 0);
  --color-base-70: oklch(73% 0 0);
  --color-blue: #4958fd;
  --color-blue-rgb: 141,158,255;
  --color-cyan: #84dcd2;
  --color-cyan-rgb: 132,220,210;
  --color-green: #8bdfae;
  --color-green-rgb: 160,223,139;
  --color-orange: #f79f69;
  --color-orange-rgb: 247,159,105;
  --color-pink: #dfaac0;
  --color-pink-rgb: 223,170,192;
  --color-purple: #b89de7;
  --color-purple-rgb: 184,157,231;
  --color-red: #f47266;
  --color-red-rgb: 244,114,102;
  --color-yellow: #d4e481;
  --color-yellow-rgb: 228,220,129;
  --dark: var(--text-normal, var(--color-base-100, oklch(0% 0 0)));
  --darkgray: var(--text-normal, var(--color-base-100, oklch(0% 0 0)));
  --divider-color: var(--color-base-50, oklch(82% 0 0));
  --divider-color-hover: var(--interactive-accent, oklch(0.5 0.15 70));
  --dropdown-background: var(--interactive-normal, oklch(94% 0 0));
  --dropdown-background-hover: var(--interactive-hover, oklch(91% 0 0));
  --file-header-background: var(--background-primary, oklch(100% 0 0));
  --file-header-background-focused: var(--background-primary, oklch(100% 0 0));
  --file-header-justify: left;
  --flair-background: var(--interactive-normal, oklch(94% 0 0));
  --flair-color: var(--text-normal, oklch(0% 0 0));
  --font-headings: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --footnote-divider-color: var(--metadata-divider-color, oklch(88% 0 0));
  --footnote-id-color: var(--text-muted, oklch(27.5% 0 0));
  --footnote-id-color-no-occurrences: var(--text-faint, oklch(45% 0 0));
  --graph-node: var(--text-muted, oklch(27.5% 0 0));
  --graph-node-attachment: var(--color-yellow, #d4e481);
  --graph-node-focused: var(--text-accent, oklch(0.4 0.15 70));
  --graph-node-tag: var(--theme-color-1-normal, oklch(0.4 0.15 262));
  --graph-node-unresolved: var(--text-faint, oklch(45% 0 0));
  --graph-text: var(--text-normal, oklch(0% 0 0));
  --gray: var(--text-muted, var(--color-base-70, oklch(27.5% 0 0)));
  --h1-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h2-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h3-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h4-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h5-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h6-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: var(--text-faint, oklch(45% 0 0));
  --heading-underline-color: var(--color-base-40, oklch(85% 0 0));
  --highlight: var(--text-highlight-bg, var(--theme-color-2-transparent, oklch(from oklch(0.5 0.15 70) l c h/0.33)));
  --hr-color: var(--divider-color, oklch(82% 0 0));
  --icon-color: var(--text-faint, oklch(45% 0 0));
  --icon-color-active: var(--text-muted, oklch(27.5% 0 0));
  --icon-color-focused: var(--text-normal, oklch(0% 0 0));
  --icon-color-hover: var(--text-muted, oklch(27.5% 0 0));
  --inline-title-font: var(--font-headings, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: var(--h1-size, 1.625rem);
  --input-date-separator: var(--text-faint, oklch(45% 0 0));
  --input-placeholder-color: var(--text-faint, oklch(45% 0 0));
  --interactive-accent: var(--theme-color-2-alt, oklch(0.5 0.15 70));
  --interactive-accent-hover: var(--theme-color-2-normal, oklch(0.4 0.15 70));
  --interactive-hover: var(--color-base-20, oklch(91% 0 0));
  --interactive-normal: var(--color-base-10, oklch(94% 0 0));
  --light: var(--background-primary, var(--color-base-00, oklch(100% 0 0)));
  --lightgray: var(--background-secondary, var(--color-base-10, oklch(94% 0 0)));
  --link-color: var(--text-accent, oklch(0.4 0.15 70));
  --link-color-hover: var(--text-accent-hover, oklch(0.3 0.15 70));
  --link-external-color: var(--text-accent, oklch(0.4 0.15 70));
  --link-external-color-hover: var(--text-accent-hover, oklch(0.3 0.15 70));
  --link-unresolved-color: var(--text-accent, oklch(0.4 0.15 70));
  --list-marker-color: var(--text-muted, oklch(27.5% 0 0));
  --list-marker-color-collapsed: var(--text-accent, oklch(0.4 0.15 70));
  --list-marker-color-hover: var(--text-muted, oklch(27.5% 0 0));
  --menu-background: var(--background-secondary, oklch(94% 0 0));
  --menu-border-color: var(--background-modifier-border-hover, oklch(85% 0 0));
  --metadata-border-color: var(--background-modifier-border, oklch(88% 0 0));
  --metadata-divider-color: var(--background-modifier-border, oklch(88% 0 0));
  --metadata-gap: 0;
  --metadata-input-font-size: max(var(--font-ui-small),0.9em);
  --metadata-input-text-color: var(--property-input-color, oklch(0.4 0.15 70));
  --metadata-label-font-size: max(var(--font-ui-small),0.9em);
  --metadata-label-text-color: var(--property-label-color, oklch(0.4 0.15 262));
  --metadata-label-text-color-hover: var(--text-muted, oklch(27.5% 0 0));
  --metadata-label-width: max(22.5%,8rem);
  --modal-background: var(--background-primary, oklch(100% 0 0));
  --modal-border-color: var(--background-modifier-border, oklch(88% 0 0));
  --nav-collapse-icon-color: var(--collapse-icon-color, oklch(45% 0 0));
  --nav-collapse-icon-color-collapsed: var(--text-faint, oklch(45% 0 0));
  --nav-heading-color: var(--text-normal, oklch(0% 0 0));
  --nav-heading-color-collapsed: var(--text-faint, oklch(45% 0 0));
  --nav-heading-color-collapsed-hover: var(--text-muted, oklch(27.5% 0 0));
  --nav-heading-color-hover: var(--text-normal, oklch(0% 0 0));
  --nav-item-color: var(--text-muted, oklch(27.5% 0 0));
  --nav-item-color-active: var(--text-normal, oklch(0% 0 0));
  --nav-item-color-highlighted: var(--text-accent, oklch(0.4 0.15 70));
  --nav-item-color-hover: var(--text-normal, oklch(0% 0 0));
  --nav-item-color-selected: var(--text-normal, oklch(0% 0 0));
  --nav-tag-color: var(--text-faint, oklch(45% 0 0));
  --nav-tag-color-active: var(--text-muted, oklch(27.5% 0 0));
  --nav-tag-color-hover: var(--text-muted, oklch(27.5% 0 0));
  --nn-theme-file-selected-bg: var(--background-modifier-border-hover, oklch(85% 0 0));
  --nn-theme-file-selected-inactive-bg: var(--background-modifier-border, oklch(88% 0 0));
  --nn-theme-file-selected-name-color: var(--text-normal, oklch(0% 0 0));
  --nn-theme-file-tag-bg: var(--tag-background, color-mix(in oklch,oklch(0.4 0.15 262) 15%,transparent));
  --nn-theme-file-tag-color: var(--tag-color, oklch(0.4 0.15 262));
  --nn-theme-list-bg: var(--background-secondary, oklch(94% 0 0));
  --nn-theme-list-header-bg: var(--background-secondary, oklch(94% 0 0));
  --nn-theme-nav-bg: var(--background-secondary, oklch(94% 0 0));
  --pdf-background: var(--background-primary, oklch(100% 0 0));
  --pdf-page-background: var(--background-primary, oklch(100% 0 0));
  --pdf-sidebar-background: var(--background-primary, oklch(100% 0 0));
  --pill-border-color: var(--background-modifier-border, oklch(88% 0 0));
  --pill-border-color-hover: var(--background-modifier-border-hover, oklch(85% 0 0));
  --pill-color: var(--text-muted, oklch(27.5% 0 0));
  --pill-color-hover: var(--text-normal, oklch(0% 0 0));
  --pill-color-remove: var(--text-faint, oklch(45% 0 0));
  --pill-color-remove-hover: var(--text-accent, oklch(0.4 0.15 70));
  --prompt-background: var(--background-primary, oklch(100% 0 0));
  --prompt-border-color: var(--background-modifier-border, oklch(88% 0 0));
  --property-icon-color: var(--theme-color-1-alt, oklch(0.5 0.15 262));
  --property-input-color: var(--theme-color-2-normal, oklch(0.4 0.15 70));
  --property-label-color: var(--theme-color-1-normal, oklch(0.4 0.15 262));
  --raised-background: var(--blur-background, color-mix(in srgb, oklch(100% 0 0) 65%, transparent) linear-gradient(oklch(100% 0 0), color-mix(in srgb, oklch(100% 0 0) 65%, transparent)));
  --ribbon-background: var(--background-secondary, oklch(94% 0 0));
  --ribbon-background-collapsed: var(--ribbon-background, oklch(94% 0 0));
  --search-clear-button-color: var(--text-muted, oklch(27.5% 0 0));
  --search-icon-color: var(--text-muted, oklch(27.5% 0 0));
  --search-result-background: var(--background-primary, oklch(100% 0 0));
  --secondary: var(--text-accent, var(--theme-color-2-normal, oklch(0.4 0.15 70)));
  --setting-group-heading-color: var(--text-normal, oklch(0% 0 0));
  --setting-items-background: var(--background-primary-alt, oklch(97% 0 0));
  --setting-items-border-color: var(--background-modifier-border, oklch(88% 0 0));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, oklch(27.5% 0 0));
  --shiki-code-background: var(--code-background, oklch(97% 0 0));
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-comment: var(--text-faint, oklch(45% 0 0));
  --shiki-code-function: var(--color-green, #8bdfae);
  --shiki-code-important: var(--color-orange, #f79f69);
  --shiki-code-keyword: var(--color-pink, #dfaac0);
  --shiki-code-normal: var(--text-muted, oklch(27.5% 0 0));
  --shiki-code-property: var(--color-cyan, #84dcd2);
  --shiki-code-punctuation: var(--text-muted, oklch(27.5% 0 0));
  --shiki-code-string: var(--color-yellow, #d4e481);
  --shiki-code-value: var(--color-purple, #b89de7);
  --shiki-gutter-border-color: var(--background-modifier-border, oklch(88% 0 0));
  --shiki-gutter-text-color: var(--text-faint, oklch(45% 0 0));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, oklch(27.5% 0 0));
  --shiki-highlight-neutral: var(--shiki-code-normal, oklch(27.5% 0 0));
  --shiki-terminal-dots-color: var(--text-faint, oklch(45% 0 0));
  --slider-thumb-border-color: var(--background-modifier-border-hover, oklch(85% 0 0));
  --slider-track-background: var(--background-modifier-border, oklch(88% 0 0));
  --status-bar-background: var(--background-secondary, oklch(94% 0 0));
  --status-bar-border-color: var(--divider-color, oklch(82% 0 0));
  --status-bar-text-color: var(--text-muted, oklch(27.5% 0 0));
  --suggestion-background: var(--background-primary, oklch(100% 0 0));
  --sync-avatar-color-1: var(--color-red, #f47266);
  --sync-avatar-color-2: var(--color-orange, #f79f69);
  --sync-avatar-color-3: var(--color-yellow, #d4e481);
  --sync-avatar-color-4: var(--color-green, #8bdfae);
  --sync-avatar-color-5: var(--color-cyan, #84dcd2);
  --sync-avatar-color-6: var(--color-blue, #4958fd);
  --sync-avatar-color-7: var(--color-purple, #b89de7);
  --sync-avatar-color-8: var(--color-pink, #dfaac0);
  --tab-background-active: var(--background-primary, oklch(100% 0 0));
  --tab-container-background: var(--background-primary, oklch(100% 0 0));
  --tab-divider-color: var(--color-base-30, oklch(88% 0 0));
  --tab-outline-color: var(--color-base-40, oklch(85% 0 0));
  --tab-switcher-background: var(--background-secondary, oklch(94% 0 0));
  --tab-text-color: var(--text-faint, oklch(45% 0 0));
  --tab-text-color-active: var(--text-muted, oklch(27.5% 0 0));
  --tab-text-color-focused: var(--text-muted, oklch(27.5% 0 0));
  --tab-text-color-focused-active: var(--text-muted, oklch(27.5% 0 0));
  --tab-text-color-focused-active-current: var(--text-normal, oklch(0% 0 0));
  --tab-text-color-focused-highlighted: var(--text-accent, oklch(0.4 0.15 70));
  --table-add-button-border-color: var(--background-modifier-border, oklch(88% 0 0));
  --table-border-color: var(--divider-color, oklch(82% 0 0));
  --table-drag-handle-background-active: var(--table-selection-border-color, oklch(0.5 0.15 70));
  --table-drag-handle-color: var(--text-faint, oklch(45% 0 0));
  --table-drag-handle-color-active: var(--text-on-accent, oklch(100% 0 0));
  --table-header-border-color: var(--table-border-color, oklch(82% 0 0));
  --table-header-color: var(--text-normal, oklch(0% 0 0));
  --table-selection-border-color: var(--interactive-accent, oklch(0.5 0.15 70));
  --tag-background: color-mix(in oklch,var(--theme-color-1-normal) 15%,transparent);
  --tag-background-hover: color-mix(in oklch,var(--theme-color-1-normal) 30%,transparent);
  --tag-color: var(--theme-color-1-normal, oklch(0.4 0.15 262));
  --tag-color-hover: var(--theme-color-1-high, oklch(0.3 0.15 262));
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.33em;
  --tag-radius: var(--radius-l, 12px);
  --tertiary: var(--text-accent-hover, var(--theme-color-2-high, oklch(0.3 0.15 70)));
  --text-accent: var(--theme-color-2-normal, oklch(0.4 0.15 70));
  --text-accent-hover: var(--theme-color-2-high, oklch(0.3 0.15 70));
  --text-error: var(--color-red, #f47266);
  --text-faint: var(--color-base-50, oklch(45% 0 0));
  --text-highlight-bg: var(--theme-color-2-transparent, oklch(from oklch(0.5 0.15 70) l c h/0.33));
  --text-muted: var(--color-base-70, oklch(27.5% 0 0));
  --text-normal: var(--color-base-100, oklch(0% 0 0));
  --text-on-accent: var(--color-base-00, oklch(100% 0 0));
  --text-on-accent-inverted: var(--color-base-00, oklch(100% 0 0));
  --text-selection: var(--theme-color-1-transparent, oklch(from oklch(0.5 0.15 262) l c h/0.33));
  --text-success: var(--color-green, #8bdfae);
  --text-warning: var(--color-orange, #f79f69);
  --textHighlight: var(--text-highlight-bg, var(--theme-color-2-transparent, oklch(from oklch(0.5 0.15 70) l c h/0.33)));
  --theme-color-1-alt: oklch(var(--theme-color-luminosity-alt) var(--theme-color-1-chroma) var(--theme-color-1-hue));
  --theme-color-1-chroma: 0.15;
  --theme-color-1-high: oklch(var(--theme-color-luminosity-high) var(--theme-color-1-chroma) var(--theme-color-1-hue));
  --theme-color-1-hue: 262;
  --theme-color-1-normal: oklch(var(--theme-color-luminosity-normal) var(--theme-color-1-chroma) var(--theme-color-1-hue));
  --theme-color-1-transparent: oklch(from var(--theme-color-1-alt) l c h/0.33);
  --theme-color-2-alt: oklch(var(--theme-color-luminosity-alt) var(--theme-color-2-chroma) var(--theme-color-2-hue));
  --theme-color-2-chroma: 0.15;
  --theme-color-2-high: oklch(var(--theme-color-luminosity-high) var(--theme-color-2-chroma) var(--theme-color-2-hue));
  --theme-color-2-hue: 70;
  --theme-color-2-normal: oklch(var(--theme-color-luminosity-normal) var(--theme-color-2-chroma) var(--theme-color-2-hue));
  --theme-color-2-transparent: oklch(from var(--theme-color-2-alt) l c h/0.33);
  --theme-color-luminosity-alt: 0.5;
  --theme-color-luminosity-high: 0.3;
  --theme-color-luminosity-normal: 0.4;
  --titlebar-background: var(--background-primary, oklch(100% 0 0));
  --titlebar-background-focused: var(--background-primary, oklch(100% 0 0));
  --titlebar-border-color: var(--background-modifier-border, oklch(88% 0 0));
  --titlebar-text-color: var(--text-muted, oklch(27.5% 0 0));
  --titlebar-text-color-focused: var(--text-normal, oklch(0% 0 0));
  --vault-profile-color: var(--text-normal, oklch(0% 0 0));
  --vault-profile-color-hover: var(--vault-profile-color, oklch(0% 0 0));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, oklch(94% 0 0));
  --titlebar-background: var(--background-secondary, oklch(94% 0 0));
  --titlebar-background-focused: var(--background-secondary, oklch(94% 0 0));
  background-color: var(--tab-container-background, oklch(1 0 0));
  color: oklch(0 0 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, oklch(1 0 0));
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, oklch(0.94 0 0));
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.82 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, oklch(94% 0 0));
  background-color: var(--tab-container-background, oklch(1 0 0));
  border-left-color: oklch(0.82 0 0);
  color: oklch(0 0 0);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, oklch(0 0 0));
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, oklch(0 0 0));
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, oklch(0 0 0));
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, oklch(0 0 0));
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, oklch(0 0 0));
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.5 0.15 70 / 0.33));
  color: var(--text-normal, oklch(0 0 0));
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body del {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: oklch(0.45 0 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, oklch(0.5 0.15 70));
  border-color: oklch(0.5 0.15 70);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, oklch(0.275 0 0));
  outline: oklch(0.275 0 0) none 0px;
  text-decoration-color: oklch(0.275 0 0);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, oklch(0.4 0.15 70));
  outline: oklch(0.4 0.15 70) none 0px;
  text-decoration-color: oklch(0.4 0.15 70);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, oklch(0.4 0.15 70));
  outline: oklch(0.4 0.15 70) none 0px;
  text-decoration-color: oklch(0.4 0.15 70);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, oklch(0.4 0.15 70));
  outline: oklch(0.4 0.15 70) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body dt {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ol > li {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ul > li {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, oklch(0.45 0 0));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, oklch(0 0 0));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body table {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body td {
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
  border-top-color: oklch(0.82 0 0);
  color: var(--table-text-color, oklch(0 0 0));
}

html[saved-theme="light"] body th {
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
  border-top-color: oklch(0.82 0 0);
  color: var(--table-header-color, oklch(0 0 0));
  font-weight: var(--table-header-weight, 500);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, oklch(0.97 0 0));
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, oklch(0 0 0));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, oklch(0.97 0 0));
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body figcaption {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, oklch(97% 0 0));
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body img {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, oklch(0.97 0 0));
  border-bottom-color: oklch(0.275 0 0);
  border-left-color: oklch(0.275 0 0);
  border-right-color: oklch(0.275 0 0);
  border-top-color: oklch(0.275 0 0);
  color: var(--text-muted, oklch(0.275 0 0));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0.5 0.15 70);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 159, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.82 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 220, 210);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(73, 88, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(73, 88, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(184, 157, 231);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 132,220,210);
  background: rgba(132, 220, 210, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 244,114,102);
  background: rgba(244, 114, 102, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 244,114,102);
  background: rgba(244, 114, 102, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 184,157,231);
  background: rgba(184, 157, 231, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(184, 157, 231, 0.25);
  border-left-color: rgba(184, 157, 231, 0.25);
  border-right-color: rgba(184, 157, 231, 0.25);
  border-top-color: rgba(184, 157, 231, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 244,114,102);
  background: rgba(244, 114, 102, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 141,158,255);
  background: rgba(141, 158, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 141,158,255);
  background: rgba(141, 158, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 247,159,105);
  background: rgba(247, 159, 105, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 160,223,139);
  background: rgba(160, 223, 139, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(160, 223, 139, 0.25);
  border-left-color: rgba(160, 223, 139, 0.25);
  border-right-color: rgba(160, 223, 139, 0.25);
  border-top-color: rgba(160, 223, 139, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 132,220,210);
  background: rgba(132, 220, 210, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 141,158,255);
  background: rgba(141, 158, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 247,159,105);
  background: rgba(247, 159, 105, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 141,158,255;
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(141, 158, 255));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: oklch(0 0 0);
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
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  color: var(--text-normal, oklch(0 0 0));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--background-primary, oklch(1 0 0));
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--background-primary, oklch(1 0 0));
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, color-mix(in oklch,oklch(0.4 0.15 262) 15%,transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix(in oklch,oklch(0.4 0.15 262) 30%,transparent));
  --pill-color: var(--tag-color, oklch(0.4 0.15 262));
  --pill-color-hover: var(--tag-color-hover, oklch(0.3 0.15 262));
  --pill-color-remove: var(--tag-color, oklch(0.4 0.15 262));
  --pill-color-remove-hover: var(--tag-color-hover, oklch(0.3 0.15 262));
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.33em);
  --pill-radius: var(--tag-radius, 12px);
  background-color: var(--pill-background, oklch(0.4 0.15 262 / 0.15));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--pill-color, oklch(0.4 0.15 262));
  font-size: 14.4px;
  line-height: var(--line-height-tight, 14.4px);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: oklch(0.4 0.15 262);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: var(--h1-color, oklch(0 0 0));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, oklch(0 0 0));
  font-size: var(--inline-title-size, 26px);
}

html[saved-theme="light"] body h2 {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: var(--h2-color, oklch(0 0 0));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: var(--inline-title-color, oklch(0 0 0));
  font-size: var(--inline-title-size, 26px);
  letter-spacing: -0.39px;
  line-height: var(--inline-title-line-height, 31.2px);
  margin-bottom: 16px;
}

html[saved-theme="light"] body h3 {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: var(--h3-color, oklch(0 0 0));
}

html[saved-theme="light"] body h4 {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: var(--h4-color, oklch(0 0 0));
}

html[saved-theme="light"] body h5 {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: var(--h5-color, oklch(0 0 0));
}

html[saved-theme="light"] body h6 {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: var(--h6-color, oklch(0 0 0));
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 141,158,255);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.275 0 0));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.275 0 0));
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
  color: oklch(0 0 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
  color: var(--icon-color, oklch(0.45 0 0));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, oklch(0.94 0 0));
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
  border-top-color: oklch(0.82 0 0);
  color: var(--status-bar-text-color, oklch(0.275 0 0));
}

html[saved-theme="light"] body footer ul li a {
  color: oklch(0.275 0 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, oklch(0.275 0 0));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.275 0 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, oklch(0.275 0 0));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
  color: var(--icon-color, oklch(0.45 0 0));
}

html[saved-theme="light"] body .darkmode svg {
  color: oklch(0.45 0 0);
  stroke: oklch(0.45 0 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
  color: oklch(0.45 0 0);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, oklch(0.45 0 0));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, oklch(0 0 0));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, oklch(1 0 0));
  border-color: oklch(0 0 0);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: oklch(0.82 0 0);
  color: var(--table-header-color, oklch(0 0 0));
  font-weight: var(--table-header-weight, 500);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  --checkbox-color: var(--property-input-color, oklch(0.4 0.15 70));
  --link-color: var(--property-input-color, oklch(0.4 0.15 70));
  --link-external-color: var(--property-input-color, oklch(0.4 0.15 70));
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  color: var(--text-muted, oklch(0.275 0 0));
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: oklch(0.275 0 0);
  border-left-color: oklch(0.275 0 0);
  border-right-color: oklch(0.275 0 0);
  border-top-color: oklch(0.275 0 0);
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.275 0 0);
  border-left-color: oklch(0.275 0 0);
  border-right-color: oklch(0.275 0 0);
  border-top-color: oklch(0.275 0 0);
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .metadata-property-key {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .metadata-property-value {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .note-properties {
  --checkbox-color: var(--property-input-color, oklch(0.4 0.15 70));
  --link-color: var(--property-input-color, oklch(0.4 0.15 70));
  --link-external-color: var(--property-input-color, oklch(0.4 0.15 70));
  border-color: oklch(0.88 0 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, color-mix(in oklch,oklch(0.4 0.15 262) 15%,transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix(in oklch,oklch(0.4 0.15 262) 30%,transparent));
  --pill-color: var(--tag-color, oklch(0.4 0.15 262));
  --pill-color-hover: var(--tag-color-hover, oklch(0.3 0.15 262));
  --pill-color-remove: var(--tag-color, oklch(0.4 0.15 262));
  --pill-color-remove-hover: var(--tag-color-hover, oklch(0.3 0.15 262));
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.33em);
  --pill-radius: var(--tag-radius, 12px);
  background-color: var(--pill-background, oklch(0.4 0.15 262 / 0.15));
  border-radius: 12px;
  color: var(--pill-color, oklch(0.4 0.15 262));
}

html[saved-theme="light"] body .note-properties-value {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, oklch(1 0 0));
  color: var(--text-normal, oklch(0 0 0));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, oklch(0.94 0 0));
  border-color: oklch(0 0 0);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, oklch(0.94 0 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: oklch(0 0 0);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  background-color: var(--background-modifier-hover, oklch(0.97 0 0));
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, oklch(0 0 0));
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, oklch(0.94 0 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: var(--text-normal, oklch(0 0 0));
}

html[saved-theme="light"] body abbr {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: oklch(0.4 0.15 262);
  border-left-color: oklch(0.4 0.15 262);
  border-right-color: oklch(0.4 0.15 262);
  border-top-color: oklch(0.4 0.15 262);
  color: var(--text-normal, oklch(0.4 0.15 262));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, oklch(0.97 0 0));
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: var(--code-normal, oklch(0 0 0));
}

html[saved-theme="light"] body progress {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body sub {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body summary {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body sup {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, oklch(0.4 0.15 262 / 0.15));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--tag-color, oklch(0.4 0.15 262));
}`,
  },
  classSettings: {
    "subtheme-ocean": {
      general: `.subtheme-ocean {
--theme-color-1-chroma:0.15;
--theme-color-1-hue:262;
--theme-color-2-chroma:0.15;
--theme-color-2-hue:70;
}`,
    },
    "subtheme-forest": {
      general: `.subtheme-forest {
--theme-color-1-chroma:0.14;
--theme-color-1-hue:155;
--theme-color-2-chroma:0.14;
--theme-color-2-hue:40;
}`,
    },
    "subtheme-twilight": {
      general: `.subtheme-twilight {
--theme-color-1-chroma:0.16;
--theme-color-1-hue:285;
--theme-color-2-chroma:0.13;
--theme-color-2-hue:260;
}`,
    },
    "subtheme-sunset": {
      general: `.subtheme-sunset {
--theme-color-1-chroma:0.18;
--theme-color-1-hue:0;
--theme-color-2-chroma:0.16;
--theme-color-2-hue:25;
}`,
    },
    "subtheme-night": {
      general: `.subtheme-night {
--theme-color-1-chroma:0.06;
--theme-color-1-hue:205;
--theme-color-2-chroma:0.18;
--theme-color-2-hue:145;
}`,
    },
    "colored-headings": {
      general: `.colored-headings .HyperMD-header-1, .colored-headings .HyperMD-header-2, .colored-headings .HyperMD-header-3, .colored-headings .HyperMD-header-4, .colored-headings .HyperMD-header-5, .colored-headings .HyperMD-header-6, .colored-headings h1, .colored-headings h2, .colored-headings h3, .colored-headings h4, .colored-headings h5, .colored-headings h6 {
color:var(--theme-color-1-high);
}

.colored-headings {
--inline-title-color:var(--theme-color-1-high);
--heading-underline-color:var(--theme-color-1-transparent);
}

body.colored-headings {
--nn-theme-file-selected-name-color:var(--theme-color-1-high);
}`,
    },
    "wider-callouts": {
      general: `.wider-callouts {
--callout-padding:0.75em;
}

.wider-callouts .cm-embed-block.cm-callout {
padding-left:-.75em!important;
translate:-.75em;
width:calc(var(--file-line-width) + 1.5em);
}`,
    },
    "custom-caret": {
      general: `body.custom-caret {
--caret-color:var(--theme-color-1-normal);
}`,
    },
    "headings-underline": {
      general: `.headings-underline .HyperMD-header-1, .headings-underline .HyperMD-header-2, .headings-underline .HyperMD-header-3, .headings-underline .HyperMD-header-4, .headings-underline h1, .headings-underline h2, .headings-underline h3, .headings-underline h4 {
text-decoration-color:var(--heading-underline-color);
text-decoration-line:underline;
}

.headings-underline .HyperMD-header+* {
padding-top:var(--size-2-2)!important;
}`,
    },
    "centered-file-title": {
      general: `body.centered-file-title {
--file-header-justify:center;
}`,
    },
    "hide-file-title": {
      general: `.hide-file-title-path .view-header-title-container .view-header-title-parent {
display:none;
}

.hide-file-title .view-header-title-container .view-header-title, .hide-file-title .view-header-title-container .view-header-title-parent {
display:none;
}`,
    },
    "hide-file-title-path": {
      general: `.hide-file-title-path .view-header-title-container .view-header-title-parent {
display:none;
}`,
    },
    "metadata-container-alt-separator": {
      general: `.metadata-container-alt-separator .metadata-container {
border-bottom:2px dashed var(--theme-color-1-transparent);
margin-bottom:var(--size-4-2);
padding-bottom:var(--size-4-4);
}`,
    },
    "metadata-container-alt-outline": {
      general: `.metadata-container-alt-outline .metadata-container {
border:2px solid var(--background-modifier-border);
border-radius:var(--radius-l);
margin-bottom:var(--size-4-2);
padding:var(--size-4-3) var(--size-4-4);
}`,
    },
    "show-properties-label": {
      general: `.show-properties-label .metadata-properties-heading {
display:inline-block;
}`,
    },
    "improve-multilist-ux": {
      general: `.improve-multilist-ux .multi-select-pill .multi-select-pill-remove-button {
visibility:hidden;
width:0;
}

.improve-multilist-ux .metadata-property-value:focus .multi-select-pill-remove-button, .improve-multilist-ux .metadata-property-value:focus-within .multi-select-pill-remove-button {
visibility:visible;
width:auto;
}`,
    },
  },
};
