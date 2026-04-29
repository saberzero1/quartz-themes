import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wyrd",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["architects-daughter", "neucha", "space-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 270;
  --accent-l: 58.8%;
  --accent-s: 65%;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-yellow, hsl(37, 100%, 50%));
  --background-modifier-border-focus: var(--color-base-40, hsl(270, 13%, 65%));
  --background-modifier-border-hover: var(--color-base-35, hsl(270, 8%, 50%));
  --background-modifier-error: var(--color-red, hsl(340, 85%, 48.3%));
  --background-modifier-error-hover: var(--color-red, hsl(340, 85%, 48.3%));
  --background-modifier-error-rgb: var(--color-red-rgb, 228, 18, 88);
  --background-modifier-form-field: var(--color-base-00, hsl(270, 10%, 20%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(270, 10%, 20%));
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-modifier-success: var(--color-green, hsla(100, 90%, 33.5%));
  --background-modifier-success-rgb: var(--color-green-rgb, 51, 138, 7);
  --background-primary: var(--color-base-10, hsl(270, 10%, 15%));
  --background-primary-alt: var(--color-base-20, hsl(270, 10%, 17.5%));
  --background-secondary: var(--color-base-10, hsl(270, 10%, 15%));
  --background-secondary-alt: var(--color-base-00, hsl(270, 8%, 35%));
  --bases-cards-background: var(--background-primary, hsl(270, 10%, 15%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(270, 10%, 17.5%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --bases-group-heading-property-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --bases-table-border-color: var(--table-border-color, hsl(37, 100%, 50%));
  --bases-table-cell-background-active: var(--background-primary, hsl(270, 10%, 15%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(270, 10%, 17.5%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(270, 65%, 58.8%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(270, 10%, 17.5%));
  --bases-table-header-background: var(--background-primary, hsl(270, 10%, 15%));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bases-table-header-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --bases-table-summary-background: var(--background-primary, hsl(270, 10%, 15%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --blockquote-border-color: var(--interactive-accent, hsl(270, 65%, 58.8%));
  --bodyFont: var(--font-text-theme, Neucha);
  --bold-color: hsl(12, 65%, 62%);
  --callout-bug: var(--color-red-rgb, 228, 18, 88);
  --callout-error: var(--color-red-rgb, 228, 18, 88);
  --callout-fail: var(--color-red-rgb, 228, 18, 88);
  --callout-success: var(--color-green-rgb, 51, 138, 7);
  --canvas-background: var(--background-primary, hsl(270, 10%, 15%));
  --canvas-card-label-color: var(--text-faint, hsl(270, 13%, 65%));
  --canvas-color-1: var(--color-red-rgb, 228, 18, 88);
  --canvas-color-4: var(--color-green-rgb, 51, 138, 7);
  --canvas-dot-pattern: var(--color-base-30, hsl(270, 8%, 35%));
  --caret-color: var(--text-normal, hsl(270, 10%, 75%));
  --checkbox-border-color: var(--text-faint, hsl(270, 13%, 65%));
  --checkbox-border-color-hover: var(--text-muted, hsl(270, 10%, 72.5%));
  --checkbox-color: var(--interactive-accent, hsl(270, 65%, 58.8%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(267, 66.3%, 67.62%));
  --checkbox-marker-color: var(--background-primary, hsl(270, 10%, 15%));
  --checklist-done-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --code-background: var(--background-primary-alt, hsl(270, 10%, 17.5%));
  --code-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --code-comment: var(--text-faint, hsl(270, 13%, 65%));
  --code-function: var(--color-yellow, hsl(37, 100%, 50%));
  --code-important: var(--color-orange, hsl(25, 85%, 50%));
  --code-keyword: var(--color-pink, hsl(330, 85%, 47.2%));
  --code-normal: var(--text-normal, hsl(270, 10%, 75%));
  --code-operator: var(--color-red, hsl(340, 85%, 48.3%));
  --code-property: var(--color-cyan, hsla(175, 100%, 50%));
  --code-punctuation: var(--text-muted, hsl(270, 10%, 72.5%));
  --code-string: var(--color-green, hsla(100, 90%, 33.5%));
  --code-tag: var(--color-red, hsl(340, 85%, 48.3%));
  --code-value: var(--color-purple, hsl(270, 65%, 58.8%));
  --collapse-icon-color: var(--text-faint, hsl(270, 13%, 65%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(267, 66.3%, 67.62%));
  --color-base-00: var(--wyrd-base-00, hsl(270, 10%, 12.5%));
  --color-base-10: var(--wyrd-base-10, hsl(270, 10%, 15%));
  --color-base-100: var(--wyrd-base-95, hsl(270, 10%, 80%));
  --color-base-20: var(--wyrd-base-20, hsl(270, 10%, 17.5%));
  --color-base-25: var(--wyrd-base-30, hsl(270, 10%, 20%));
  --color-base-30: var(--wyrd-base-40, hsl(270, 8%, 35%));
  --color-base-35: var(--wyrd-base-50, hsl(270, 8%, 50%));
  --color-base-40: var(--wyrd-base-60, hsl(270, 13%, 65%));
  --color-base-50: var(--wyrd-base-70, hsl(270, 10%, 72.5%));
  --color-base-60: var(--wyrd-base-80, hsl(270, 10%, 75%));
  --color-base-70: var(--wyrd-base-90, hsl(270, 10%, 77.5%));
  --color-blue: var(--wyrd-blue, hsl(190, 100%, 26%));
  --color-cyan: var(--wyrd-cyan, hsla(175, 100%, 50%));
  --color-green: var(--wyrd-green, hsla(100, 90%, 33.5%));
  --color-green-rgb: var(--wyrd-green-rgb, 51, 138, 7);
  --color-orange: var(--wyrd-orange, hsl(25, 85%, 50%));
  --color-pink: var(--wyrd-pink, hsl(330, 85%, 47.2%));
  --color-purple: var(--wyrd-purple, hsl(270, 65%, 58.8%));
  --color-red: var(--wyrd-red, hsl(340, 85%, 48.3%));
  --color-red-rgb: var(--wyrd-red-rgb, 228, 18, 88);
  --color-yellow: var(--wyrd-yellow, hsl(37, 100%, 50%));
  --dark: var(--text-normal, var(--color-base-60, hsl(270, 10%, 75%)));
  --darkgray: var(--text-normal, var(--color-base-60, hsl(270, 10%, 75%)));
  --divider-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --divider-color-hover: var(--interactive-accent, hsl(270, 65%, 58.8%));
  --dropdown-background: var(--interactive-normal, hsl(270, 8%, 35%));
  --dropdown-background-hover: var(--interactive-hover, hsl(270, 8%, 50%));
  --file-header-background: var(--background-primary, hsl(270, 10%, 15%));
  --file-header-background-focused: var(--background-primary, hsl(270, 10%, 15%));
  --file-header-font: var(--font-interface, Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(270, 8%, 35%));
  --flair-color: var(--text-normal, hsl(270, 10%, 75%));
  --font-interface-theme: Neucha;
  --font-mermaid: var(--font-text, Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "Space Mono";
  --font-text-theme: Neucha;
  --footnote-divider-color: var(--metadata-divider-color, hsl(37, 100%, 50%));
  --footnote-id-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(270, 13%, 65%));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.075));
  --graph-line: var(--wyrd-yellow-dark, hsl(37, 100%, 40%));
  --graph-node: var(--text-muted, hsl(270, 10%, 72.5%));
  --graph-node-attachment: var(--wyrd-orange, hsl(25, 85%, 50%));
  --graph-node-focused: var(--wyrd-yellow, hsl(37, 100%, 50%));
  --graph-node-tag: var(--wyrd-green, hsla(100, 90%, 33.5%));
  --graph-node-unresolved: var(--text-faint, hsl(270, 13%, 65%));
  --graph-text: var(--text-normal, hsl(270, 10%, 75%));
  --gray: var(--text-muted, var(--color-base-50, hsl(270, 10%, 72.5%)));
  --h1-color: var(--wyrd-purple, hsl(270, 65%, 58.8%));
  --h1-font: "Architects Daughter", Neucha;
  --h2-color: var(--wyrd-pink, hsl(330, 85%, 47.2%));
  --h2-font: "Architects Daughter", Neucha;
  --h3-color: var(--wyrd-indigo, hsl(257, 60%, 50%));
  --h3-font: "Architects Daughter", Neucha;
  --h4-color: var(--wyrd-green, hsla(100, 90%, 33.5%));
  --h4-font: "Architects Daughter", Neucha;
  --h5-color: var(--wyrd-teal, hsl(160, 100%, 36%));
  --h5-font: "Architects Daughter", Neucha;
  --h6-color: var(--wyrd-blue, hsl(190, 100%, 26%));
  --h6-font: "Architects Daughter", Neucha;
  --headerFont: var(--font-text-theme, Neucha);
  --heading-formatting: var(--text-muted, hsl(270, 10%, 72.5%));
  --highlight: var(--text-highlight-bg, rgba(var(--wyrd-yellow-rgb), 0.7));
  --hr-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --icon-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --icon-color-active: var(--text-accent, hsl(267, 66.3%, 67.62%));
  --icon-color-focused: var(--text-normal, hsl(270, 10%, 75%));
  --icon-color-hover: var(--text-muted, hsl(270, 10%, 72.5%));
  --inline-title-color: var(--h1-color, hsl(270, 65%, 58.8%));
  --inline-title-font: var(--h1-font, "Architects Daughter", Neucha);
  --input-date-separator: var(--text-faint, hsl(270, 13%, 65%));
  --input-placeholder-color: var(--text-faint, hsl(270, 13%, 65%));
  --interactive-accent: var(--color-accent-1, hsl(270, 65%, 58.8%));
  --interactive-accent-hover: var(--color-accent-2, hsl(267, 66.3%, 67.62%));
  --interactive-accent-hsl: var(--color-accent-hsl, 270, 65%, 58.8%);
  --interactive-hover: var(--color-base-10, hsl(270, 8%, 50%));
  --interactive-normal: var(--color-base-00, hsl(270, 8%, 35%));
  --italic-color: hsl(346, 64%, 57%);
  --light: var(--background-primary, var(--color-base-10, hsl(270, 10%, 15%)));
  --lightgray: var(--background-secondary, var(--color-base-10, hsl(270, 10%, 15%)));
  --link-color: var(--wyrd-yellow, hsl(37, 100%, 50%));
  --link-color-hover: var(--wyrd-yellow-light, hsl(37, 100%, 60%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--wyrd-cyan-dark, hsla(175, 100%, 40%));
  --link-external-color-hover: var(--wyrd-cyan, hsla(175, 100%, 50%));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--wyrd-orange-dark, hsl(25, 85%, 40%));
  --link-unresolved-color-hover: var(--wyrd-orange, hsl(25, 85%, 50%));
  --link-unresolved-decoration-color: hsla(var(--interactive-accent-hsl), 0.5);
  --link-unresolved-opacity: 0.8;
  --list-marker-color: var(--text-faint, hsl(270, 13%, 65%));
  --list-marker-color-collapsed: var(--text-accent, hsl(267, 66.3%, 67.62%));
  --list-marker-color-hover: var(--text-muted, hsl(270, 10%, 72.5%));
  --menu-background: var(--background-secondary, hsl(270, 10%, 15%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(270, 8%, 50%));
  --metadata-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --metadata-divider-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-input-font: var(--font-interface, Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(270, 10%, 75%));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-font: var(--font-interface, Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(270, 10%, 72.5%));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --modal-background: var(--background-primary, hsl(270, 10%, 15%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(270, 13%, 65%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(270, 13%, 65%));
  --nav-heading-color: var(--text-normal, hsl(270, 10%, 75%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(270, 13%, 65%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(270, 10%, 72.5%));
  --nav-heading-color-hover: var(--text-normal, hsl(270, 10%, 75%));
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --nav-item-color-active: var(--text-normal, hsl(270, 10%, 75%));
  --nav-item-color-highlighted: var(--text-accent-hover, hsl(265, 68.25%, 75.852%));
  --nav-item-color-hover: var(--text-normal, hsl(270, 10%, 75%));
  --nav-item-color-selected: var(--text-normal, hsl(270, 10%, 75%));
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, hsl(270, 13%, 65%));
  --nav-tag-color-active: var(--text-muted, hsl(270, 10%, 72.5%));
  --nav-tag-color-hover: var(--text-muted, hsl(270, 10%, 72.5%));
  --pdf-background: var(--background-primary, hsl(270, 10%, 15%));
  --pdf-page-background: var(--background-primary, hsl(270, 10%, 15%));
  --pdf-sidebar-background: var(--background-primary, hsl(270, 10%, 15%));
  --pill-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(270, 8%, 50%));
  --pill-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --pill-color-hover: var(--text-normal, hsl(270, 10%, 75%));
  --pill-color-remove: var(--text-faint, hsl(270, 13%, 65%));
  --pill-color-remove-hover: var(--text-accent, hsl(267, 66.3%, 67.62%));
  --prompt-background: var(--background-primary, hsl(270, 10%, 15%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(270, 10%, 15%));
  --ribbon-background-collapsed: var(--background-primary, hsl(270, 10%, 15%));
  --search-clear-button-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --search-icon-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --search-result-background: var(--background-primary, hsl(270, 10%, 15%));
  --secondary: var(--text-accent, var(--color-accent, hsl(267, 66.3%, 67.62%)));
  --setting-group-heading-color: var(--text-normal, hsl(270, 10%, 75%));
  --setting-items-background: var(--background-primary-alt, hsl(270, 10%, 17.5%));
  --setting-items-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(270, 10%, 72.5%));
  --shiki-code-background: var(--code-background, hsl(270, 10%, 17.5%));
  --shiki-code-comment: var(--text-faint, hsl(270, 13%, 65%));
  --shiki-code-function: var(--color-green, hsla(100, 90%, 33.5%));
  --shiki-code-important: var(--color-orange, hsl(25, 85%, 50%));
  --shiki-code-keyword: var(--color-pink, hsl(330, 85%, 47.2%));
  --shiki-code-normal: var(--text-muted, hsl(270, 10%, 72.5%));
  --shiki-code-property: var(--color-cyan, hsla(175, 100%, 50%));
  --shiki-code-punctuation: var(--text-muted, hsl(270, 10%, 72.5%));
  --shiki-code-string: var(--color-yellow, hsl(37, 100%, 50%));
  --shiki-code-value: var(--color-purple, hsl(270, 65%, 58.8%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --shiki-gutter-text-color: var(--text-faint, hsl(270, 13%, 65%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(270, 10%, 72.5%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(270, 10%, 72.5%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(270, 13%, 65%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(270, 8%, 50%));
  --slider-track-background: var(--background-modifier-border, hsl(37, 100%, 50%));
  --status-bar-background: var(--background-secondary, hsl(270, 10%, 15%));
  --status-bar-border-color: var(--divider-color, hsl(37, 100%, 50%));
  --status-bar-text-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --suggestion-background: var(--background-primary, hsl(270, 10%, 15%));
  --sync-avatar-color-1: var(--color-red, hsl(340, 85%, 48.3%));
  --sync-avatar-color-2: var(--color-orange, hsl(25, 85%, 50%));
  --sync-avatar-color-3: var(--color-yellow, hsl(37, 100%, 50%));
  --sync-avatar-color-4: var(--color-green, hsla(100, 90%, 33.5%));
  --sync-avatar-color-5: var(--color-cyan, hsla(175, 100%, 50%));
  --sync-avatar-color-6: var(--color-blue, hsl(190, 100%, 26%));
  --sync-avatar-color-7: var(--color-purple, hsl(270, 65%, 58.8%));
  --sync-avatar-color-8: var(--color-pink, hsl(330, 85%, 47.2%));
  --tab-background-active: var(--background-secondary, hsl(270, 10%, 15%));
  --tab-container-background: var(--background-primary-alt, hsl(270, 10%, 17.5%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(270, 8%, 50%));
  --tab-outline-color: var(--divider-color, hsl(37, 100%, 50%));
  --tab-switcher-background: var(--background-secondary, hsl(270, 10%, 15%));
  --tab-text-color: var(--text-faint, hsl(270, 13%, 65%));
  --tab-text-color-active: var(--text-muted, hsl(270, 10%, 72.5%));
  --tab-text-color-focused: var(--text-muted, hsl(270, 10%, 72.5%));
  --tab-text-color-focused-active: var(--text-normal, hsl(270, 10%, 75%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(270, 10%, 75%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(267, 66.3%, 67.62%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --table-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(270, 65%, 58.8%));
  --table-drag-handle-color: var(--text-faint, hsl(270, 13%, 65%));
  --table-header-border-color: var(--table-border-color, hsl(37, 100%, 50%));
  --table-header-color: var(--text-normal, hsl(270, 10%, 75%));
  --table-header-size: var(--font-smaller, 0.875em);
  --table-header-weight: var(--font-bold, 700);
  --table-selection-border-color: var(--interactive-accent, hsl(270, 65%, 58.8%));
  --table-white-space: normal;
  --tag-color: var(--text-accent, hsl(267, 66.3%, 67.62%));
  --tag-color-hover: var(--text-accent, hsl(267, 66.3%, 67.62%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(265, 68.25%, 75.852%)));
  --text-accent: var(--color-accent, hsl(267, 66.3%, 67.62%));
  --text-accent-hover: var(--color-accent-2, hsl(265, 68.25%, 75.852%));
  --text-error: var(--color-red, hsl(340, 85%, 48.3%));
  --text-faint: var(--color-base-40, hsl(270, 13%, 65%));
  --text-highlight-bg: rgba(var(--wyrd-yellow-rgb), 0.7);
  --text-highlight-bg-active: rgba(var(--wyrd-yellow-light-rgb), 0.8);
  --text-muted: var(--color-base-50, hsl(270, 10%, 72.5%));
  --text-normal: var(--color-base-60, hsl(270, 10%, 75%));
  --text-selection: hsla(var(--color-accent-hsl), 0.2);
  --text-success: var(--color-green, hsla(100, 90%, 33.5%));
  --text-warning: var(--color-orange, hsl(25, 85%, 50%));
  --textHighlight: var(--text-highlight-bg, rgba(var(--wyrd-yellow-rgb), 0.7));
  --titleFont: var(--font-text-theme, Neucha);
  --titlebar-background: var(--background-secondary, hsl(270, 10%, 15%));
  --titlebar-background-focused: var(--background-primary-alt, hsl(270, 10%, 17.5%));
  --titlebar-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --titlebar-text-color: var(--text-muted, hsl(270, 10%, 72.5%));
  --titlebar-text-color-focused: var(--text-normal, hsl(270, 10%, 75%));
  --titlebar-text-color-highlighted: var(--text-accent-hover, hsl(265, 68.25%, 75.852%));
  --vault-name-color: var(--wyrd-yellow, hsl(37, 100%, 50%));
  --vault-profile-color: var(--text-normal, hsl(270, 10%, 75%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(270, 10%, 75%));
  --wyrd-base-00: hsl(270, 10%, 12.5%);
  --wyrd-base-10: hsl(270, 10%, 15%);
  --wyrd-base-100: hsl(270, 10%, 82.5%);
  --wyrd-base-20: hsl(270, 10%, 17.5%);
  --wyrd-base-30: hsl(270, 10%, 20%);
  --wyrd-base-40: hsl(270, 8%, 35%);
  --wyrd-base-50: hsl(270, 8%, 50%);
  --wyrd-base-50-rgb: 128, 117, 138;
  --wyrd-base-60: hsl(270, 13%, 65%);
  --wyrd-base-70: hsl(270, 10%, 72.5%);
  --wyrd-base-80: hsl(270, 10%, 75%);
  --wyrd-base-90: hsl(270, 10%, 77.5%);
  --wyrd-base-95: hsl(270, 10%, 80%);
  --wyrd-blue: hsl(190, 100%, 26%);
  --wyrd-blue-dark: hsl(190, 100%, 16%);
  --wyrd-blue-light: hsl(190, 100%, 36%);
  --wyrd-blue-rgb: 0, 153, 184;
  --wyrd-cyan: hsla(175, 100%, 50%);
  --wyrd-cyan-dark: hsla(175, 100%, 40%);
  --wyrd-cyan-light: hsla(175, 100%, 60%);
  --wyrd-cyan-rgb: 0, 255, 234;
  --wyrd-green: hsla(100, 90%, 33.5%);
  --wyrd-green-dark: hsla(100, 90%, 23.5%);
  --wyrd-green-light: hsla(100, 90%, 43.5%);
  --wyrd-green-rgb: 51, 138, 7;
  --wyrd-indigo: hsl(257, 60%, 50%);
  --wyrd-indigo-dark: hsl(257, 60%, 40%);
  --wyrd-indigo-light: hsl(257, 60%, 60%);
  --wyrd-indigo-rgb: 94, 51, 204;
  --wyrd-orange: hsl(25, 85%, 50%);
  --wyrd-orange-dark: hsl(25, 85%, 40%);
  --wyrd-orange-light: hsl(25, 85%, 60%);
  --wyrd-orange-rgb: 236, 109, 19;
  --wyrd-pink: hsl(330, 85%, 47.2%);
  --wyrd-pink-dark: hsl(330, 85%, 37.2%);
  --wyrd-pink-light: hsl(330, 85%, 57.2%);
  --wyrd-pink-rgb: 223, 18, 120;
  --wyrd-purple: hsl(270, 65%, 58.8%);
  --wyrd-purple-dark: hsl(270, 65%, 48.8%);
  --wyrd-purple-light: hsl(270, 65%, 68.8%);
  --wyrd-purple-rgb: 150, 82, 218;
  --wyrd-red: hsl(340, 85%, 48.3%);
  --wyrd-red-dark: hsl(340, 85%, 38.3%);
  --wyrd-red-light: hsl(340, 85%, 58.3%);
  --wyrd-red-rgb: 228, 18, 88;
  --wyrd-strike-color: var(--color-base-30, hsl(270, 8%, 35%));
  --wyrd-strike-color-hover: var(--text-faint, hsl(270, 13%, 65%));
  --wyrd-teal: hsl(160, 100%, 36%);
  --wyrd-teal-dark: hsl(160, 100%, 26%);
  --wyrd-teal-light: hsl(160, 100%, 46%);
  --wyrd-teal-rgb: 0, 184, 122;
  --wyrd-yellow: hsl(37, 100%, 50%);
  --wyrd-yellow-dark: hsl(37, 100%, 40%);
  --wyrd-yellow-dark-rgb: 204, 126, 0;
  --wyrd-yellow-light: hsl(37, 100%, 60%);
  --wyrd-yellow-light-rgb: 255, 177, 51;
  --wyrd-yellow-rgb: 255, 157, 0;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(45, 40, 49));
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(38, 34, 42));
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(38, 34, 42));
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(45, 40, 49));
  border-left-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 13%, 65%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 20%);
  --background-modifier-form-field-hover: hsl(270, 10%, 20%);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 15%);
  --background-primary-alt: hsl(270, 10%, 17.5%);
  --background-secondary: hsl(270, 10%, 15%);
  --background-secondary-alt: hsl(270, 8%, 35%);
  --blockquote-border-color: hsl(270, 65%, 58.8%);
  --blur-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 228, 18, 88;
  --callout-default: 2, 122, 255;
  --callout-error: 228, 18, 88;
  --callout-example: 168, 130, 255;
  --callout-fail: 228, 18, 88;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(270, 10%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 8%, 35%);
  --caret-color: hsl(270, 10%, 75%);
  --checkbox-border-color: hsl(270, 13%, 65%);
  --checkbox-border-color-hover: hsl(270, 10%, 72.5%);
  --checkbox-color: hsl(270, 65%, 58.8%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 72.5%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 17.5%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(270, 13%, 65%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 10%, 75%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 72.5%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 13%, 65%);
  --collapse-icon-color-collapsed: hsl(267, 66.3%, 67.62%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(267, 66.3%, 67.62%);
  --color-accent-2: hsl(265, 68.25%, 75.852%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 12.5%);
  --color-base-10: hsl(270, 10%, 15%);
  --color-base-100: hsl(270, 10%, 80%);
  --color-base-20: hsl(270, 10%, 17.5%);
  --color-base-25: hsl(270, 10%, 20%);
  --color-base-30: hsl(270, 8%, 35%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 13%, 65%);
  --color-base-50: hsl(270, 10%, 72.5%);
  --color-base-60: hsl(270, 10%, 75%);
  --color-base-70: hsl(270, 10%, 77.5%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(270, 65%, 58.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 8%, 35%);
  --dropdown-background-hover: hsl(270, 8%, 50%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 8%, 35%);
  --flair-color: hsl(270, 10%, 75%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 72.5%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 13%, 65%);
  --graph-text: hsl(270, 10%, 75%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 72.5%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(270, 65%, 58.8%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 8%, 50%);
  --interactive-normal: hsl(270, 8%, 35%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 15%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(270, 10%, 15%);
  --pdf-page-background: hsl(270, 10%, 15%);
  --pdf-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --pdf-sidebar-background: hsl(270, 10%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(270, 10%, 72.5%);
  --search-icon-color: hsl(270, 10%, 72.5%);
  --search-result-background: hsl(270, 10%, 15%);
  --setting-group-heading-color: hsl(270, 10%, 75%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 17.5%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 72.5%);
  --shiki-code-background: hsl(270, 10%, 17.5%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 13%, 65%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 72.5%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 72.5%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 13%, 65%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 72.5%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 72.5%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 13%, 65%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 15%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 15%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 15%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 15%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 13%, 65%);
  --tab-text-color-active: hsl(270, 10%, 72.5%);
  --tab-text-color-focused: hsl(270, 10%, 72.5%);
  --tab-text-color-focused-active: hsl(270, 10%, 75%);
  --tab-text-color-focused-active-current: hsl(270, 10%, 75%);
  --tab-text-color-focused-highlighted: hsl(267, 66.3%, 67.62%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(270, 65%, 58.8%);
  --table-drag-handle-color: hsl(270, 13%, 65%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 10%, 75%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(270, 65%, 58.8%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(267, 66.3%, 67.62%);
  --tag-color-hover: hsl(267, 66.3%, 67.62%);
  --tag-size: 0.875em;
  --text-accent: hsl(267, 66.3%, 67.62%);
  --text-accent-hover: hsl(265, 68.25%, 75.852%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 13%, 65%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 72.5%);
  --text-normal: hsl(270, 10%, 75%);
  --text-selection: hsla(270, 65%, 58.8%, 0.33);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 8%, 35%);
  --wyrd-strike-color-hover: hsl(270, 13%, 65%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(150, 82, 218), rgb(150, 82, 218) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(150, 82, 218);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(150, 82, 218);
  border-left-width: 0px;
  border-right-color: rgb(150, 82, 218);
  border-right-width: 0px;
  border-top-color: rgb(150, 82, 218);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(150, 82, 218));
  content: " ";
  font-family: var(--h1-font, "Architects Daughter", Neucha);
  font-size: var(--h1-size, 25.888px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.38832px);
  line-height: var(--h1-line-height, 31.0656px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--text-normal, rgb(191, 185, 198));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(216, 75, 108));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(216, 75, 108));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--text-normal, rgb(191, 185, 198));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 157, 0, 0.7));
  color: var(--text-normal, rgb(191, 185, 198));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration-color: rgb(191, 185, 198);
  transition: background-color 0.25s ease-in-out;
}

html[saved-theme="dark"] body del {
  color: var(--wyrd-strike-color, rgb(89, 82, 96));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
  transition: color 0.25s ease-in-out;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(191, 185, 198));
}

html[saved-theme="dark"] body h2 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 13%, 65%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 20%);
  --background-modifier-form-field-hover: hsl(270, 10%, 20%);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 15%);
  --background-primary-alt: hsl(270, 10%, 17.5%);
  --background-secondary: hsl(270, 10%, 15%);
  --background-secondary-alt: hsl(270, 8%, 35%);
  --blockquote-border-color: hsl(270, 65%, 58.8%);
  --blur-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 228, 18, 88;
  --callout-default: 2, 122, 255;
  --callout-error: 228, 18, 88;
  --callout-example: 168, 130, 255;
  --callout-fail: 228, 18, 88;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(270, 10%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 8%, 35%);
  --caret-color: hsl(270, 10%, 75%);
  --checkbox-border-color: hsl(270, 13%, 65%);
  --checkbox-border-color-hover: hsl(270, 10%, 72.5%);
  --checkbox-color: hsl(270, 65%, 58.8%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 72.5%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 17.5%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(270, 13%, 65%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 10%, 75%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 72.5%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 13%, 65%);
  --collapse-icon-color-collapsed: hsl(267, 66.3%, 67.62%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(267, 66.3%, 67.62%);
  --color-accent-2: hsl(265, 68.25%, 75.852%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 12.5%);
  --color-base-10: hsl(270, 10%, 15%);
  --color-base-100: hsl(270, 10%, 80%);
  --color-base-20: hsl(270, 10%, 17.5%);
  --color-base-25: hsl(270, 10%, 20%);
  --color-base-30: hsl(270, 8%, 35%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 13%, 65%);
  --color-base-50: hsl(270, 10%, 72.5%);
  --color-base-60: hsl(270, 10%, 75%);
  --color-base-70: hsl(270, 10%, 77.5%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(270, 65%, 58.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 8%, 35%);
  --dropdown-background-hover: hsl(270, 8%, 50%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 8%, 35%);
  --flair-color: hsl(270, 10%, 75%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h2-weight, 680);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 72.5%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 13%, 65%);
  --graph-text: hsl(270, 10%, 75%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 72.5%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(270, 65%, 58.8%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 8%, 50%);
  --interactive-normal: hsl(270, 8%, 35%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 15%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(270, 10%, 15%);
  --pdf-page-background: hsl(270, 10%, 15%);
  --pdf-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --pdf-sidebar-background: hsl(270, 10%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(270, 10%, 72.5%);
  --search-icon-color: hsl(270, 10%, 72.5%);
  --search-result-background: hsl(270, 10%, 15%);
  --setting-group-heading-color: hsl(270, 10%, 75%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 17.5%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 72.5%);
  --shiki-code-background: hsl(270, 10%, 17.5%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 13%, 65%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 72.5%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 72.5%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 13%, 65%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 72.5%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 72.5%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 13%, 65%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 15%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 15%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 15%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 15%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 13%, 65%);
  --tab-text-color-active: hsl(270, 10%, 72.5%);
  --tab-text-color-focused: hsl(270, 10%, 72.5%);
  --tab-text-color-focused-active: hsl(270, 10%, 75%);
  --tab-text-color-focused-active-current: hsl(270, 10%, 75%);
  --tab-text-color-focused-highlighted: hsl(267, 66.3%, 67.62%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(270, 65%, 58.8%);
  --table-drag-handle-color: hsl(270, 13%, 65%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 10%, 75%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(270, 65%, 58.8%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(267, 66.3%, 67.62%);
  --tag-color-hover: hsl(267, 66.3%, 67.62%);
  --tag-size: 0.875em;
  --text-accent: hsl(267, 66.3%, 67.62%);
  --text-accent-hover: hsl(265, 68.25%, 75.852%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 13%, 65%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 72.5%);
  --text-normal: hsl(270, 10%, 75%);
  --text-selection: hsla(270, 65%, 58.8%, 0.33);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 8%, 35%);
  --wyrd-strike-color-hover: hsl(270, 13%, 65%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(223, 18, 120), rgb(223, 18, 120) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(223, 18, 120);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(223, 18, 120);
  border-left-width: 0px;
  border-right-color: rgb(223, 18, 120);
  border-right-width: 0px;
  border-top-color: rgb(223, 18, 120);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(223, 18, 120));
  content: " ";
  font-family: var(--h2-font, "Architects Daughter", Neucha);
  font-size: var(--h2-size, 23.392px);
  font-weight: var(--font-weight, 680);
  letter-spacing: var(--h2-letter-spacing, -0.257312px);
  line-height: var(--h2-line-height, 28.0704px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body h3 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 13%, 65%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 20%);
  --background-modifier-form-field-hover: hsl(270, 10%, 20%);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 15%);
  --background-primary-alt: hsl(270, 10%, 17.5%);
  --background-secondary: hsl(270, 10%, 15%);
  --background-secondary-alt: hsl(270, 8%, 35%);
  --blockquote-border-color: hsl(270, 65%, 58.8%);
  --blur-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 228, 18, 88;
  --callout-default: 2, 122, 255;
  --callout-error: 228, 18, 88;
  --callout-example: 168, 130, 255;
  --callout-fail: 228, 18, 88;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(270, 10%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 8%, 35%);
  --caret-color: hsl(270, 10%, 75%);
  --checkbox-border-color: hsl(270, 13%, 65%);
  --checkbox-border-color-hover: hsl(270, 10%, 72.5%);
  --checkbox-color: hsl(270, 65%, 58.8%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 72.5%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 17.5%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(270, 13%, 65%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 10%, 75%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 72.5%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 13%, 65%);
  --collapse-icon-color-collapsed: hsl(267, 66.3%, 67.62%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(267, 66.3%, 67.62%);
  --color-accent-2: hsl(265, 68.25%, 75.852%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 12.5%);
  --color-base-10: hsl(270, 10%, 15%);
  --color-base-100: hsl(270, 10%, 80%);
  --color-base-20: hsl(270, 10%, 17.5%);
  --color-base-25: hsl(270, 10%, 20%);
  --color-base-30: hsl(270, 8%, 35%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 13%, 65%);
  --color-base-50: hsl(270, 10%, 72.5%);
  --color-base-60: hsl(270, 10%, 75%);
  --color-base-70: hsl(270, 10%, 77.5%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(270, 65%, 58.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 8%, 35%);
  --dropdown-background-hover: hsl(270, 8%, 50%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 8%, 35%);
  --flair-color: hsl(270, 10%, 75%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h3-weight, 660);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 72.5%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 13%, 65%);
  --graph-text: hsl(270, 10%, 75%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 72.5%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(270, 65%, 58.8%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 8%, 50%);
  --interactive-normal: hsl(270, 8%, 35%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 15%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(270, 10%, 15%);
  --pdf-page-background: hsl(270, 10%, 15%);
  --pdf-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --pdf-sidebar-background: hsl(270, 10%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(270, 10%, 72.5%);
  --search-icon-color: hsl(270, 10%, 72.5%);
  --search-result-background: hsl(270, 10%, 15%);
  --setting-group-heading-color: hsl(270, 10%, 75%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 17.5%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 72.5%);
  --shiki-code-background: hsl(270, 10%, 17.5%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 13%, 65%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 72.5%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 72.5%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 13%, 65%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 72.5%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 72.5%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 13%, 65%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 15%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 15%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 15%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 15%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 13%, 65%);
  --tab-text-color-active: hsl(270, 10%, 72.5%);
  --tab-text-color-focused: hsl(270, 10%, 72.5%);
  --tab-text-color-focused-active: hsl(270, 10%, 75%);
  --tab-text-color-focused-active-current: hsl(270, 10%, 75%);
  --tab-text-color-focused-highlighted: hsl(267, 66.3%, 67.62%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(270, 65%, 58.8%);
  --table-drag-handle-color: hsl(270, 13%, 65%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 10%, 75%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(270, 65%, 58.8%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(267, 66.3%, 67.62%);
  --tag-color-hover: hsl(267, 66.3%, 67.62%);
  --tag-size: 0.875em;
  --text-accent: hsl(267, 66.3%, 67.62%);
  --text-accent-hover: hsl(265, 68.25%, 75.852%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 13%, 65%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 72.5%);
  --text-normal: hsl(270, 10%, 75%);
  --text-selection: hsla(270, 65%, 58.8%, 0.33);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 8%, 35%);
  --wyrd-strike-color-hover: hsl(270, 13%, 65%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(94, 51, 204), rgb(94, 51, 204) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(94, 51, 204);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 51, 204);
  border-left-width: 0px;
  border-right-color: rgb(94, 51, 204);
  border-right-width: 0px;
  border-top-color: rgb(94, 51, 204);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(94, 51, 204));
  content: " ";
  font-family: var(--h3-font, "Architects Daughter", Neucha);
  font-size: var(--h3-size, 21.088px);
  font-weight: var(--font-weight, 660);
  letter-spacing: var(--h3-letter-spacing, -0.168704px);
  line-height: var(--h3-line-height, 27.4144px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body h4 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 13%, 65%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 20%);
  --background-modifier-form-field-hover: hsl(270, 10%, 20%);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 15%);
  --background-primary-alt: hsl(270, 10%, 17.5%);
  --background-secondary: hsl(270, 10%, 15%);
  --background-secondary-alt: hsl(270, 8%, 35%);
  --blockquote-border-color: hsl(270, 65%, 58.8%);
  --blur-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 228, 18, 88;
  --callout-default: 2, 122, 255;
  --callout-error: 228, 18, 88;
  --callout-example: 168, 130, 255;
  --callout-fail: 228, 18, 88;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(270, 10%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 8%, 35%);
  --caret-color: hsl(270, 10%, 75%);
  --checkbox-border-color: hsl(270, 13%, 65%);
  --checkbox-border-color-hover: hsl(270, 10%, 72.5%);
  --checkbox-color: hsl(270, 65%, 58.8%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 72.5%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 17.5%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(270, 13%, 65%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 10%, 75%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 72.5%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 13%, 65%);
  --collapse-icon-color-collapsed: hsl(267, 66.3%, 67.62%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(267, 66.3%, 67.62%);
  --color-accent-2: hsl(265, 68.25%, 75.852%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 12.5%);
  --color-base-10: hsl(270, 10%, 15%);
  --color-base-100: hsl(270, 10%, 80%);
  --color-base-20: hsl(270, 10%, 17.5%);
  --color-base-25: hsl(270, 10%, 20%);
  --color-base-30: hsl(270, 8%, 35%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 13%, 65%);
  --color-base-50: hsl(270, 10%, 72.5%);
  --color-base-60: hsl(270, 10%, 75%);
  --color-base-70: hsl(270, 10%, 77.5%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(270, 65%, 58.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 8%, 35%);
  --dropdown-background-hover: hsl(270, 8%, 50%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 8%, 35%);
  --flair-color: hsl(270, 10%, 75%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h4-weight, 640);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 72.5%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 13%, 65%);
  --graph-text: hsl(270, 10%, 75%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 72.5%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(270, 65%, 58.8%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 8%, 50%);
  --interactive-normal: hsl(270, 8%, 35%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 15%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(270, 10%, 15%);
  --pdf-page-background: hsl(270, 10%, 15%);
  --pdf-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --pdf-sidebar-background: hsl(270, 10%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(270, 10%, 72.5%);
  --search-icon-color: hsl(270, 10%, 72.5%);
  --search-result-background: hsl(270, 10%, 15%);
  --setting-group-heading-color: hsl(270, 10%, 75%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 17.5%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 72.5%);
  --shiki-code-background: hsl(270, 10%, 17.5%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 13%, 65%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 72.5%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 72.5%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 13%, 65%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 72.5%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 72.5%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 13%, 65%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 15%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 15%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 15%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 15%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 13%, 65%);
  --tab-text-color-active: hsl(270, 10%, 72.5%);
  --tab-text-color-focused: hsl(270, 10%, 72.5%);
  --tab-text-color-focused-active: hsl(270, 10%, 75%);
  --tab-text-color-focused-active-current: hsl(270, 10%, 75%);
  --tab-text-color-focused-highlighted: hsl(267, 66.3%, 67.62%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(270, 65%, 58.8%);
  --table-drag-handle-color: hsl(270, 13%, 65%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 10%, 75%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(270, 65%, 58.8%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(267, 66.3%, 67.62%);
  --tag-color-hover: hsl(267, 66.3%, 67.62%);
  --tag-size: 0.875em;
  --text-accent: hsl(267, 66.3%, 67.62%);
  --text-accent-hover: hsl(265, 68.25%, 75.852%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 13%, 65%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 72.5%);
  --text-normal: hsl(270, 10%, 75%);
  --text-selection: hsla(270, 65%, 58.8%, 0.33);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 8%, 35%);
  --wyrd-strike-color-hover: hsl(270, 13%, 65%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(60, 162, 9), rgb(60, 162, 9) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(60, 162, 9);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(60, 162, 9);
  border-left-width: 0px;
  border-right-color: rgb(60, 162, 9);
  border-right-width: 0px;
  border-top-color: rgb(60, 162, 9);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(60, 162, 9));
  content: " ";
  font-family: var(--h4-font, "Architects Daughter", Neucha);
  font-size: var(--h4-size, 19.008px);
  font-weight: var(--font-weight, 640);
  letter-spacing: var(--h4-letter-spacing, -0.09504px);
  line-height: var(--h4-line-height, 26.6112px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body h5 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 13%, 65%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 20%);
  --background-modifier-form-field-hover: hsl(270, 10%, 20%);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 15%);
  --background-primary-alt: hsl(270, 10%, 17.5%);
  --background-secondary: hsl(270, 10%, 15%);
  --background-secondary-alt: hsl(270, 8%, 35%);
  --blockquote-border-color: hsl(270, 65%, 58.8%);
  --blur-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 228, 18, 88;
  --callout-default: 2, 122, 255;
  --callout-error: 228, 18, 88;
  --callout-example: 168, 130, 255;
  --callout-fail: 228, 18, 88;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(270, 10%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 8%, 35%);
  --caret-color: hsl(270, 10%, 75%);
  --checkbox-border-color: hsl(270, 13%, 65%);
  --checkbox-border-color-hover: hsl(270, 10%, 72.5%);
  --checkbox-color: hsl(270, 65%, 58.8%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 72.5%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 17.5%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(270, 13%, 65%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 10%, 75%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 72.5%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 13%, 65%);
  --collapse-icon-color-collapsed: hsl(267, 66.3%, 67.62%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(267, 66.3%, 67.62%);
  --color-accent-2: hsl(265, 68.25%, 75.852%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 12.5%);
  --color-base-10: hsl(270, 10%, 15%);
  --color-base-100: hsl(270, 10%, 80%);
  --color-base-20: hsl(270, 10%, 17.5%);
  --color-base-25: hsl(270, 10%, 20%);
  --color-base-30: hsl(270, 8%, 35%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 13%, 65%);
  --color-base-50: hsl(270, 10%, 72.5%);
  --color-base-60: hsl(270, 10%, 75%);
  --color-base-70: hsl(270, 10%, 77.5%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(270, 65%, 58.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 8%, 35%);
  --dropdown-background-hover: hsl(270, 8%, 50%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 8%, 35%);
  --flair-color: hsl(270, 10%, 75%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h5-weight, 620);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 72.5%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 13%, 65%);
  --graph-text: hsl(270, 10%, 75%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 72.5%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(270, 65%, 58.8%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 8%, 50%);
  --interactive-normal: hsl(270, 8%, 35%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 15%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(270, 10%, 15%);
  --pdf-page-background: hsl(270, 10%, 15%);
  --pdf-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --pdf-sidebar-background: hsl(270, 10%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(270, 10%, 72.5%);
  --search-icon-color: hsl(270, 10%, 72.5%);
  --search-result-background: hsl(270, 10%, 15%);
  --setting-group-heading-color: hsl(270, 10%, 75%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 17.5%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 72.5%);
  --shiki-code-background: hsl(270, 10%, 17.5%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 13%, 65%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 72.5%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 72.5%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 13%, 65%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 72.5%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 72.5%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 13%, 65%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 15%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 15%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 15%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 15%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 13%, 65%);
  --tab-text-color-active: hsl(270, 10%, 72.5%);
  --tab-text-color-focused: hsl(270, 10%, 72.5%);
  --tab-text-color-focused-active: hsl(270, 10%, 75%);
  --tab-text-color-focused-active-current: hsl(270, 10%, 75%);
  --tab-text-color-focused-highlighted: hsl(267, 66.3%, 67.62%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(270, 65%, 58.8%);
  --table-drag-handle-color: hsl(270, 13%, 65%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 10%, 75%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(270, 65%, 58.8%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(267, 66.3%, 67.62%);
  --tag-color-hover: hsl(267, 66.3%, 67.62%);
  --tag-size: 0.875em;
  --text-accent: hsl(267, 66.3%, 67.62%);
  --text-accent-hover: hsl(265, 68.25%, 75.852%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 13%, 65%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 72.5%);
  --text-normal: hsl(270, 10%, 75%);
  --text-selection: hsla(270, 65%, 58.8%, 0.33);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 8%, 35%);
  --wyrd-strike-color-hover: hsl(270, 13%, 65%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(0, 184, 122), rgb(0, 184, 122) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(0, 184, 122);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 184, 122);
  border-left-width: 0px;
  border-right-color: rgb(0, 184, 122);
  border-right-width: 0px;
  border-top-color: rgb(0, 184, 122);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(0, 184, 122));
  content: " ";
  font-family: var(--h5-font, "Architects Daughter", Neucha);
  font-size: var(--h5-size, 17.216px);
  font-weight: var(--font-weight, 620);
  letter-spacing: var(--h5-letter-spacing, -0.034432px);
  line-height: var(--h5-line-height, 25.824px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body h6 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 13%, 65%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 20%);
  --background-modifier-form-field-hover: hsl(270, 10%, 20%);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 15%);
  --background-primary-alt: hsl(270, 10%, 17.5%);
  --background-secondary: hsl(270, 10%, 15%);
  --background-secondary-alt: hsl(270, 8%, 35%);
  --blockquote-border-color: hsl(270, 65%, 58.8%);
  --blur-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 228, 18, 88;
  --callout-default: 2, 122, 255;
  --callout-error: 228, 18, 88;
  --callout-example: 168, 130, 255;
  --callout-fail: 228, 18, 88;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(270, 10%, 15%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 8%, 35%);
  --caret-color: hsl(270, 10%, 75%);
  --checkbox-border-color: hsl(270, 13%, 65%);
  --checkbox-border-color-hover: hsl(270, 10%, 72.5%);
  --checkbox-color: hsl(270, 65%, 58.8%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 15%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 72.5%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 17.5%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: hsl(270, 13%, 65%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 10%, 75%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 72.5%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 13%, 65%);
  --collapse-icon-color-collapsed: hsl(267, 66.3%, 67.62%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(267, 66.3%, 67.62%);
  --color-accent-2: hsl(265, 68.25%, 75.852%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 12.5%);
  --color-base-10: hsl(270, 10%, 15%);
  --color-base-100: hsl(270, 10%, 80%);
  --color-base-20: hsl(270, 10%, 17.5%);
  --color-base-25: hsl(270, 10%, 20%);
  --color-base-30: hsl(270, 8%, 35%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 13%, 65%);
  --color-base-50: hsl(270, 10%, 72.5%);
  --color-base-60: hsl(270, 10%, 75%);
  --color-base-70: hsl(270, 10%, 77.5%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(270, 65%, 58.8%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 8%, 35%);
  --dropdown-background-hover: hsl(270, 8%, 50%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 8%, 35%);
  --flair-color: hsl(270, 10%, 75%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h6-weight, 600);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 72.5%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 13%, 65%);
  --graph-text: hsl(270, 10%, 75%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 72.5%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(270, 65%, 58.8%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 8%, 50%);
  --interactive-normal: hsl(270, 8%, 35%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 15%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(270, 10%, 15%);
  --pdf-page-background: hsl(270, 10%, 15%);
  --pdf-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --pdf-sidebar-background: hsl(270, 10%, 15%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(37, 100%, 50%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(270, 10%, 72.5%);
  --search-icon-color: hsl(270, 10%, 72.5%);
  --search-result-background: hsl(270, 10%, 15%);
  --setting-group-heading-color: hsl(270, 10%, 75%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 17.5%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 72.5%);
  --shiki-code-background: hsl(270, 10%, 17.5%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 13%, 65%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 72.5%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 72.5%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 13%, 65%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 72.5%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 72.5%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 13%, 65%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 15%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 15%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 15%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 15%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 13%, 65%);
  --tab-text-color-active: hsl(270, 10%, 72.5%);
  --tab-text-color-focused: hsl(270, 10%, 72.5%);
  --tab-text-color-focused-active: hsl(270, 10%, 75%);
  --tab-text-color-focused-active-current: hsl(270, 10%, 75%);
  --tab-text-color-focused-highlighted: hsl(267, 66.3%, 67.62%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(270, 65%, 58.8%);
  --table-drag-handle-color: hsl(270, 13%, 65%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 10%, 75%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(270, 65%, 58.8%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(267, 66.3%, 67.62%);
  --tag-color-hover: hsl(267, 66.3%, 67.62%);
  --tag-size: 0.875em;
  --text-accent: hsl(267, 66.3%, 67.62%);
  --text-accent-hover: hsl(265, 68.25%, 75.852%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 13%, 65%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 72.5%);
  --text-normal: hsl(270, 10%, 75%);
  --text-selection: hsla(270, 65%, 58.8%, 0.33);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 8%, 35%);
  --wyrd-strike-color-hover: hsl(270, 13%, 65%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(0, 110, 133), rgb(0, 110, 133) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(0, 110, 133);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 110, 133);
  border-left-width: 0px;
  border-right-color: rgb(0, 110, 133);
  border-right-width: 0px;
  border-top-color: rgb(0, 110, 133);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(0, 110, 133));
  content: " ";
  font-family: var(--h6-font, "Architects Daughter", Neucha);
  font-size: var(--h6-size, 16px);
  font-weight: var(--font-weight, 600);
  line-height: var(--h6-line-height, 24px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(166, 154, 177);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(150, 82, 218));
  border-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(185, 178, 192));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(185, 178, 192) none 0px;
  text-decoration-color: rgb(185, 178, 192);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(0, 204, 187));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 187) none 0px;
  text-decoration-color: rgb(0, 204, 187);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(255, 157, 0));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 157, 0) none 0px;
  text-decoration-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(189, 88, 15));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 88, 15) none 0px;
  text-decoration: rgba(150, 82, 218, 0.5);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(150, 82, 218, 0.5));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body dt {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--wyrd-pink, rgb(223, 18, 120));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body table {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 230.281px;
  margin-right: 230.281px;
  width: 201.438px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--table-text-color, rgb(191, 185, 198));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--table-header-color, rgb(191, 185, 198));
  font-weight: var(--table-header-weight, 700);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(45, 40, 49));
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--code-normal, rgb(191, 185, 198));
  font-family: var(--font-monospace, "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(45, 40, 49));
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(45, 40, 49));
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 34, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 34, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 109, 19);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 255, 234);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 110, 133);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 110, 133);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(60, 162, 9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(60, 162, 9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(60, 162, 9);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--wyrd-blue-rgb, 0, 153, 184);
  background: rgba(0, 153, 184, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 153, 184, 0.25);
  border-left-color: rgba(0, 153, 184, 0.25);
  border-right-color: rgba(0, 153, 184, 0.25);
  border-top-color: rgba(0, 153, 184, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--wyrd-red-rgb, 228, 18, 88);
  background: rgba(228, 18, 88, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--wyrd-red-rgb, 228, 18, 88);
  background: rgba(228, 18, 88, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--wyrd-indigo-rgb, 94, 51, 204);
  background: rgba(94, 51, 204, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(94, 51, 204, 0.25);
  border-left-color: rgba(94, 51, 204, 0.25);
  border-right-color: rgba(94, 51, 204, 0.25);
  border-top-color: rgba(94, 51, 204, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--wyrd-red-rgb, 228, 18, 88);
  background: rgba(228, 18, 88, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--wyrd-orange-rgb, 236, 109, 19);
  background: rgba(236, 109, 19, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--wyrd-purple-rgb, 150, 82, 218);
  background: rgba(150, 82, 218, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--wyrd-teal-rgb, 0, 184, 122);
  background: rgba(0, 184, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 184, 122, 0.25);
  border-left-color: rgba(0, 184, 122, 0.25);
  border-right-color: rgba(0, 184, 122, 0.25);
  border-top-color: rgba(0, 184, 122, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--wyrd-base-50-rgb, 128, 117, 138);
  background: rgba(128, 117, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(128, 117, 138, 0.25);
  border-left-color: rgba(128, 117, 138, 0.25);
  border-right-color: rgba(128, 117, 138, 0.25);
  border-top-color: rgba(128, 117, 138, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--wyrd-green-rgb, 51, 138, 7);
  background: rgba(51, 138, 7, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(51, 138, 7, 0.25);
  border-left-color: rgba(51, 138, 7, 0.25);
  border-right-color: rgba(51, 138, 7, 0.25);
  border-top-color: rgba(51, 138, 7, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--wyrd-pink-rgb, 223, 18, 120);
  background: rgba(223, 18, 120, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(223, 18, 120, 0.25);
  border-left-color: rgba(223, 18, 120, 0.25);
  border-right-color: rgba(223, 18, 120, 0.25);
  border-top-color: rgba(223, 18, 120, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--wyrd-orange-rgb, 236, 109, 19);
  background: rgba(236, 109, 19, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--wyrd-yellow-rgb, 255, 157, 0);
  background: rgba(255, 157, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 157, 0, 0.25);
  border-left-color: rgba(255, 157, 0, 0.25);
  border-right-color: rgba(255, 157, 0, 0.25);
  border-top-color: rgba(255, 157, 0, 0.25);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(191, 185, 198);
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
  background-color: rgb(51, 46, 56);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--text-normal, rgb(191, 185, 198));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(38, 34, 42));
  border-bottom-color: rgb(166, 154, 177);
  border-left-color: rgb(166, 154, 177);
  border-right-color: rgb(166, 154, 177);
  border-top-color: rgb(166, 154, 177);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(166, 154, 177);
  border-left-color: rgb(166, 154, 177);
  border-right-color: rgb(166, 154, 177);
  border-top-color: rgb(166, 154, 177);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 34, 42);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(150, 82, 218, 0.1));
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(167, 118, 227);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(150, 82, 218));
  font-family: var(--h1-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(150, 82, 218));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(223, 18, 120));
  font-family: var(--h2-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(150, 82, 218));
  font-family: var(--inline-title-font, "Architects Daughter", Neucha);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(94, 51, 204));
  font-family: var(--h3-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(60, 162, 9));
  font-family: var(--h4-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(0, 184, 122));
  font-family: var(--h5-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(0, 110, 133));
  font-family: var(--h6-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--wyrd-purple-rgb, 150, 82, 218);
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(185, 178, 192));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(185, 178, 192));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(191, 185, 198);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: var(--icon-color, rgb(185, 178, 192));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(38, 34, 42));
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--status-bar-text-color, rgb(185, 178, 192));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(185, 178, 192);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(185, 178, 192));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(185, 178, 192));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: var(--icon-color, rgb(185, 178, 192));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(185, 178, 192);
  stroke: rgb(185, 178, 192);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(166, 154, 177));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(191, 185, 198));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(38, 34, 42));
  border-color: rgb(191, 185, 198);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(255, 157, 0);
  color: var(--table-header-color, rgb(191, 185, 198));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--text-muted, rgb(185, 178, 192));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(150, 82, 218, 0.1));
  color: var(--pill-color, rgb(167, 118, 227));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(38, 34, 42));
  color: var(--text-normal, rgb(191, 185, 198));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(38, 34, 42));
  border-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(45, 40, 49));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(191, 185, 198);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(38, 34, 42));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(191, 185, 198));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: var(--text-normal, rgb(185, 178, 192));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(45, 40, 49));
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: var(--code-normal, rgb(191, 185, 198));
  font-family: var(--font-monospace, "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body sub {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body summary {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body sup {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(150, 82, 218, 0.1));
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  color: var(--tag-color, rgb(167, 118, 227));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 270;
  --accent-l: 58.8%;
  --accent-s: 65%;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-yellow, hsl(37, 100%, 50%));
  --background-modifier-border-focus: var(--color-base-40, hsl(270, 8%, 35%));
  --background-modifier-border-hover: var(--color-base-35, hsl(270, 8%, 50%));
  --background-modifier-error: var(--color-red, hsl(340, 85%, 48.3%));
  --background-modifier-error-hover: var(--color-red, hsl(340, 85%, 48.3%));
  --background-modifier-error-rgb: var(--color-red-rgb, 228, 18, 88);
  --background-modifier-form-field: var(--color-base-00, hsl(270, 10%, 82.5%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(270, 10%, 82.5%));
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-modifier-success: var(--color-green, hsla(100, 90%, 33.5%));
  --background-modifier-success-rgb: var(--color-green-rgb, 51, 138, 7);
  --background-primary: var(--color-base-10, hsl(270, 10%, 77.5%));
  --background-primary-alt: var(--color-base-20, hsl(270, 10%, 75%));
  --background-secondary: var(--color-base-10, hsl(270, 10%, 77.5%));
  --background-secondary-alt: var(--color-base-00, hsl(270, 10%, 80%));
  --bases-cards-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(270, 10%, 75%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --bases-group-heading-property-color: var(--text-muted, hsl(270, 10%, 20%));
  --bases-table-border-color: var(--table-border-color, hsl(37, 100%, 50%));
  --bases-table-cell-background-active: var(--background-primary, hsl(270, 10%, 77.5%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(270, 10%, 75%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(270, 65%, 58.8%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(270, 10%, 75%));
  --bases-table-header-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --bases-table-header-color: var(--text-muted, hsl(270, 10%, 20%));
  --bases-table-summary-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --blockquote-border-color: var(--interactive-accent, hsl(269, 65.65%, 63.21%));
  --bodyFont: var(--font-text-theme, Neucha);
  --bold-color: hsl(12, 65%, 62%);
  --callout-bug: var(--color-red-rgb, 228, 18, 88);
  --callout-error: var(--color-red-rgb, 228, 18, 88);
  --callout-fail: var(--color-red-rgb, 228, 18, 88);
  --callout-success: var(--color-green-rgb, 51, 138, 7);
  --canvas-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --canvas-card-label-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --canvas-color-1: var(--color-red-rgb, 228, 18, 88);
  --canvas-color-4: var(--color-green-rgb, 51, 138, 7);
  --canvas-dot-pattern: var(--color-base-30, hsl(270, 13%, 65%));
  --caret-color: var(--text-normal, hsl(270, 8%, 35%));
  --checkbox-border-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --checkbox-border-color-hover: var(--text-muted, hsl(270, 10%, 20%));
  --checkbox-color: var(--interactive-accent, hsl(269, 65.65%, 63.21%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(267, 66.3%, 67.62%));
  --checkbox-marker-color: var(--background-primary, hsl(270, 10%, 77.5%));
  --checklist-done-color: var(--text-muted, hsl(270, 10%, 20%));
  --code-background: var(--background-primary-alt, hsl(270, 10%, 75%));
  --code-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --code-comment: var(--text-faint, hsl(270, 10%, 17.5%));
  --code-function: var(--color-yellow, hsl(37, 100%, 50%));
  --code-important: var(--color-orange, hsl(25, 85%, 50%));
  --code-keyword: var(--color-pink, hsl(330, 85%, 47.2%));
  --code-normal: var(--text-normal, hsl(270, 8%, 35%));
  --code-operator: var(--color-red, hsl(340, 85%, 48.3%));
  --code-property: var(--color-cyan, hsla(175, 100%, 50%));
  --code-punctuation: var(--text-muted, hsl(270, 10%, 20%));
  --code-string: var(--color-green, hsla(100, 90%, 33.5%));
  --code-tag: var(--color-red, hsl(340, 85%, 48.3%));
  --code-value: var(--color-purple, hsl(270, 65%, 58.8%));
  --collapse-icon-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(270, 65%, 58.8%));
  --color-base-00: var(--wyrd-base-100, hsl(270, 10%, 82.5%));
  --color-base-05: var(--wyrd-base-95, hsl(270, 10%, 80%));
  --color-base-10: var(--wyrd-base-90, hsl(270, 10%, 77.5%));
  --color-base-100: var(--wyrd-base-00, hsl(270, 10%, 12.5%));
  --color-base-20: var(--wyrd-base-80, hsl(270, 10%, 75%));
  --color-base-25: var(--wyrd-base-70, hsl(270, 10%, 72.5%));
  --color-base-30: var(--wyrd-base-60, hsl(270, 13%, 65%));
  --color-base-35: var(--wyrd-base-50, hsl(270, 8%, 50%));
  --color-base-40: var(--wyrd-base-40, hsl(270, 8%, 35%));
  --color-base-50: var(--wyrd-base-30, hsl(270, 10%, 20%));
  --color-base-60: var(--wyrd-base-20, hsl(270, 10%, 17.5%));
  --color-base-70: var(--wyrd-base-10, hsl(270, 10%, 15%));
  --color-blue: var(--wyrd-blue, hsl(190, 100%, 26%));
  --color-cyan: var(--wyrd-cyan, hsla(175, 100%, 50%));
  --color-green: var(--wyrd-green, hsla(100, 90%, 33.5%));
  --color-green-rgb: var(--wyrd-green-rgb, 51, 138, 7);
  --color-orange: var(--wyrd-orange, hsl(25, 85%, 50%));
  --color-pink: var(--wyrd-pink, hsl(330, 85%, 47.2%));
  --color-purple: var(--wyrd-purple, hsl(270, 65%, 58.8%));
  --color-red: var(--wyrd-red, hsl(340, 85%, 48.3%));
  --color-red-rgb: var(--wyrd-red-rgb, 228, 18, 88);
  --color-yellow: var(--wyrd-yellow, hsl(37, 100%, 50%));
  --dark: var(--text-normal, var(--color-base-40, hsl(270, 8%, 35%)));
  --darkgray: var(--text-normal, var(--color-base-40, hsl(270, 8%, 35%)));
  --divider-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --divider-color-hover: var(--interactive-accent, hsl(269, 65.65%, 63.21%));
  --dropdown-background: var(--interactive-normal, hsl(270, 10%, 82.5%));
  --dropdown-background-hover: var(--interactive-hover, hsl(270, 10%, 77.5%));
  --file-header-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --file-header-background-focused: var(--background-primary, hsl(270, 10%, 77.5%));
  --file-header-font: var(--font-interface, Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(270, 10%, 82.5%));
  --flair-color: var(--text-normal, hsl(270, 8%, 35%));
  --font-interface-theme: Neucha;
  --font-mermaid: var(--font-text, Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "Space Mono";
  --font-text-theme: Neucha;
  --footnote-divider-color: var(--metadata-divider-color, hsl(37, 100%, 50%));
  --footnote-id-color: var(--text-muted, hsl(270, 10%, 20%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(270, 10%, 17.5%));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.075));
  --graph-line: var(--wyrd-yellow-dark, hsl(37, 100%, 40%));
  --graph-node: var(--text-muted, hsl(270, 10%, 20%));
  --graph-node-attachment: var(--wyrd-orange, hsl(25, 85%, 50%));
  --graph-node-focused: var(--wyrd-yellow, hsl(37, 100%, 50%));
  --graph-node-tag: var(--wyrd-green, hsla(100, 90%, 33.5%));
  --graph-node-unresolved: var(--text-faint, hsl(270, 10%, 17.5%));
  --graph-text: var(--text-normal, hsl(270, 8%, 35%));
  --gray: var(--text-muted, var(--color-base-50, hsl(270, 10%, 20%)));
  --h1-color: var(--wyrd-purple, hsl(270, 65%, 58.8%));
  --h1-font: "Architects Daughter", Neucha;
  --h2-color: var(--wyrd-pink, hsl(330, 85%, 47.2%));
  --h2-font: "Architects Daughter", Neucha;
  --h3-color: var(--wyrd-indigo, hsl(257, 60%, 50%));
  --h3-font: "Architects Daughter", Neucha;
  --h4-color: var(--wyrd-green, hsla(100, 90%, 33.5%));
  --h4-font: "Architects Daughter", Neucha;
  --h5-color: var(--wyrd-teal, hsl(160, 100%, 36%));
  --h5-font: "Architects Daughter", Neucha;
  --h6-color: var(--wyrd-blue, hsl(190, 100%, 26%));
  --h6-font: "Architects Daughter", Neucha;
  --headerFont: var(--font-text-theme, Neucha);
  --heading-formatting: var(--text-muted, hsl(270, 10%, 20%));
  --highlight: var(--text-highlight-bg, rgba(var(--wyrd-yellow-rgb), 0.7));
  --hr-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --icon-color: var(--text-muted, hsl(270, 10%, 20%));
  --icon-color-active: var(--text-accent, hsl(270, 65%, 58.8%));
  --icon-color-focused: var(--text-normal, hsl(270, 8%, 35%));
  --icon-color-hover: var(--text-muted, hsl(270, 10%, 20%));
  --inline-title-color: var(--h1-color, hsl(270, 65%, 58.8%));
  --inline-title-font: var(--h1-font, "Architects Daughter", Neucha);
  --input-date-separator: var(--text-faint, hsl(270, 10%, 17.5%));
  --input-placeholder-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --interactive-accent: var(--color-accent-1, hsl(269, 65.65%, 63.21%));
  --interactive-accent-hover: var(--color-accent-2, hsl(267, 66.3%, 67.62%));
  --interactive-accent-hsl: var(--color-accent-hsl, 270, 65%, 58.8%);
  --interactive-hover: var(--color-base-10, hsl(270, 10%, 77.5%));
  --interactive-normal: var(--color-base-00, hsl(270, 10%, 82.5%));
  --italic-color: hsl(346, 64%, 57%);
  --light: var(--background-primary, var(--color-base-10, hsl(270, 10%, 77.5%)));
  --lightgray: var(--background-secondary, var(--color-base-10, hsl(270, 10%, 77.5%)));
  --link-color: var(--wyrd-yellow, hsl(37, 100%, 50%));
  --link-color-hover: var(--wyrd-yellow-light, hsl(37, 100%, 60%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--wyrd-cyan-dark, hsla(175, 100%, 40%));
  --link-external-color-hover: var(--wyrd-cyan, hsla(175, 100%, 50%));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--wyrd-orange-dark, hsl(25, 85%, 40%));
  --link-unresolved-color-hover: var(--wyrd-orange, hsl(25, 85%, 50%));
  --link-unresolved-decoration-color: hsla(var(--interactive-accent-hsl), 0.5);
  --link-unresolved-opacity: 0.8;
  --list-marker-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --list-marker-color-collapsed: var(--text-accent, hsl(270, 65%, 58.8%));
  --list-marker-color-hover: var(--text-muted, hsl(270, 10%, 20%));
  --menu-background: var(--background-secondary, hsl(270, 10%, 77.5%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(270, 8%, 50%));
  --metadata-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --metadata-divider-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-input-font: var(--font-interface, Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(270, 8%, 35%));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-label-font: var(--font-interface, Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(270, 10%, 20%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(270, 10%, 20%));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --modal-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(270, 10%, 17.5%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(270, 10%, 17.5%));
  --nav-heading-color: var(--text-normal, hsl(270, 8%, 35%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(270, 10%, 17.5%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(270, 10%, 20%));
  --nav-heading-color-hover: var(--text-normal, hsl(270, 8%, 35%));
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-color: var(--text-muted, hsl(270, 10%, 20%));
  --nav-item-color-active: var(--text-normal, hsl(270, 8%, 35%));
  --nav-item-color-highlighted: var(--text-accent-hover, hsl(267, 66.3%, 67.62%));
  --nav-item-color-hover: var(--text-normal, hsl(270, 8%, 35%));
  --nav-item-color-selected: var(--text-normal, hsl(270, 8%, 35%));
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --nav-tag-color-active: var(--text-muted, hsl(270, 10%, 20%));
  --nav-tag-color-hover: var(--text-muted, hsl(270, 10%, 20%));
  --pdf-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --pdf-page-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --pdf-sidebar-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --pill-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(270, 8%, 50%));
  --pill-color: var(--text-muted, hsl(270, 10%, 20%));
  --pill-color-hover: var(--text-normal, hsl(270, 8%, 35%));
  --pill-color-remove: var(--text-faint, hsl(270, 10%, 17.5%));
  --pill-color-remove-hover: var(--text-accent, hsl(270, 65%, 58.8%));
  --prompt-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(270, 10%, 77.5%));
  --ribbon-background-collapsed: var(--background-primary, hsl(270, 10%, 77.5%));
  --search-clear-button-color: var(--text-muted, hsl(270, 10%, 20%));
  --search-icon-color: var(--text-muted, hsl(270, 10%, 20%));
  --search-result-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --secondary: var(--text-accent, var(--color-accent, hsl(270, 65%, 58.8%)));
  --setting-group-heading-color: var(--text-normal, hsl(270, 8%, 35%));
  --setting-items-background: var(--background-primary-alt, hsl(270, 10%, 75%));
  --setting-items-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(270, 10%, 20%));
  --shiki-code-background: var(--code-background, hsl(270, 10%, 75%));
  --shiki-code-comment: var(--text-faint, hsl(270, 10%, 17.5%));
  --shiki-code-function: var(--color-green, hsla(100, 90%, 33.5%));
  --shiki-code-important: var(--color-orange, hsl(25, 85%, 50%));
  --shiki-code-keyword: var(--color-pink, hsl(330, 85%, 47.2%));
  --shiki-code-normal: var(--text-muted, hsl(270, 10%, 20%));
  --shiki-code-property: var(--color-cyan, hsla(175, 100%, 50%));
  --shiki-code-punctuation: var(--text-muted, hsl(270, 10%, 20%));
  --shiki-code-string: var(--color-yellow, hsl(37, 100%, 50%));
  --shiki-code-value: var(--color-purple, hsl(270, 65%, 58.8%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --shiki-gutter-text-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(270, 10%, 20%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(270, 10%, 20%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(270, 8%, 50%));
  --slider-track-background: var(--background-modifier-border, hsl(37, 100%, 50%));
  --status-bar-background: var(--background-secondary, hsl(270, 10%, 77.5%));
  --status-bar-border-color: var(--divider-color, hsl(37, 100%, 50%));
  --status-bar-text-color: var(--text-muted, hsl(270, 10%, 20%));
  --suggestion-background: var(--background-primary, hsl(270, 10%, 77.5%));
  --sync-avatar-color-1: var(--color-red, hsl(340, 85%, 48.3%));
  --sync-avatar-color-2: var(--color-orange, hsl(25, 85%, 50%));
  --sync-avatar-color-3: var(--color-yellow, hsl(37, 100%, 50%));
  --sync-avatar-color-4: var(--color-green, hsla(100, 90%, 33.5%));
  --sync-avatar-color-5: var(--color-cyan, hsla(175, 100%, 50%));
  --sync-avatar-color-6: var(--color-blue, hsl(190, 100%, 26%));
  --sync-avatar-color-7: var(--color-purple, hsl(270, 65%, 58.8%));
  --sync-avatar-color-8: var(--color-pink, hsl(330, 85%, 47.2%));
  --tab-background-active: var(--background-secondary, hsl(270, 10%, 77.5%));
  --tab-container-background: var(--background-primary-alt, hsl(270, 10%, 75%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(270, 8%, 50%));
  --tab-outline-color: var(--divider-color, hsl(37, 100%, 50%));
  --tab-switcher-background: var(--background-secondary, hsl(270, 10%, 77.5%));
  --tab-text-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --tab-text-color-active: var(--text-muted, hsl(270, 10%, 20%));
  --tab-text-color-focused: var(--text-muted, hsl(270, 10%, 20%));
  --tab-text-color-focused-active: var(--text-normal, hsl(270, 8%, 35%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(270, 8%, 35%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(270, 65%, 58.8%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --table-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(269, 65.65%, 63.21%));
  --table-drag-handle-color: var(--text-faint, hsl(270, 10%, 17.5%));
  --table-header-border-color: var(--table-border-color, hsl(37, 100%, 50%));
  --table-header-color: var(--text-normal, hsl(270, 8%, 35%));
  --table-header-size: var(--font-smaller, 0.875em);
  --table-header-weight: var(--font-bold, 700);
  --table-selection-border-color: var(--interactive-accent, hsl(269, 65.65%, 63.21%));
  --table-white-space: normal;
  --tag-color: var(--text-accent, hsl(270, 65%, 58.8%));
  --tag-color-hover: var(--text-accent, hsl(270, 65%, 58.8%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(267, 66.3%, 67.62%)));
  --text-accent: var(--color-accent, hsl(270, 65%, 58.8%));
  --text-accent-hover: var(--color-accent-2, hsl(267, 66.3%, 67.62%));
  --text-error: var(--color-red, hsl(340, 85%, 48.3%));
  --text-faint: var(--color-base-60, hsl(270, 10%, 17.5%));
  --text-highlight-bg: rgba(var(--wyrd-yellow-rgb), 0.7);
  --text-highlight-bg-active: rgba(var(--wyrd-yellow-light-rgb), 0.8);
  --text-muted: var(--color-base-50, hsl(270, 10%, 20%));
  --text-normal: var(--color-base-40, hsl(270, 8%, 35%));
  --text-success: var(--color-green, hsla(100, 90%, 33.5%));
  --text-warning: var(--color-orange, hsl(25, 85%, 50%));
  --textHighlight: var(--text-highlight-bg, rgba(var(--wyrd-yellow-rgb), 0.7));
  --titleFont: var(--font-text-theme, Neucha);
  --titlebar-background: var(--background-secondary, hsl(270, 10%, 77.5%));
  --titlebar-background-focused: var(--background-primary-alt, hsl(270, 10%, 75%));
  --titlebar-border-color: var(--background-modifier-border, hsl(37, 100%, 50%));
  --titlebar-text-color: var(--text-muted, hsl(270, 10%, 20%));
  --titlebar-text-color-focused: var(--text-normal, hsl(270, 8%, 35%));
  --titlebar-text-color-highlighted: var(--text-accent-hover, hsl(267, 66.3%, 67.62%));
  --vault-name-color: var(--wyrd-yellow, hsl(37, 100%, 50%));
  --vault-profile-color: var(--text-normal, hsl(270, 8%, 35%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(270, 8%, 35%));
  --wyrd-base-00: hsl(270, 10%, 12.5%);
  --wyrd-base-10: hsl(270, 10%, 15%);
  --wyrd-base-100: hsl(270, 10%, 82.5%);
  --wyrd-base-20: hsl(270, 10%, 17.5%);
  --wyrd-base-30: hsl(270, 10%, 20%);
  --wyrd-base-40: hsl(270, 8%, 35%);
  --wyrd-base-50: hsl(270, 8%, 50%);
  --wyrd-base-50-rgb: 128, 117, 138;
  --wyrd-base-60: hsl(270, 13%, 65%);
  --wyrd-base-70: hsl(270, 10%, 72.5%);
  --wyrd-base-80: hsl(270, 10%, 75%);
  --wyrd-base-90: hsl(270, 10%, 77.5%);
  --wyrd-base-95: hsl(270, 10%, 80%);
  --wyrd-blue: hsl(190, 100%, 26%);
  --wyrd-blue-dark: hsl(190, 100%, 16%);
  --wyrd-blue-light: hsl(190, 100%, 36%);
  --wyrd-blue-rgb: 0, 153, 184;
  --wyrd-cyan: hsla(175, 100%, 50%);
  --wyrd-cyan-dark: hsla(175, 100%, 40%);
  --wyrd-cyan-light: hsla(175, 100%, 60%);
  --wyrd-cyan-rgb: 0, 255, 234;
  --wyrd-green: hsla(100, 90%, 33.5%);
  --wyrd-green-dark: hsla(100, 90%, 23.5%);
  --wyrd-green-light: hsla(100, 90%, 43.5%);
  --wyrd-green-rgb: 51, 138, 7;
  --wyrd-indigo: hsl(257, 60%, 50%);
  --wyrd-indigo-dark: hsl(257, 60%, 40%);
  --wyrd-indigo-light: hsl(257, 60%, 60%);
  --wyrd-indigo-rgb: 94, 51, 204;
  --wyrd-orange: hsl(25, 85%, 50%);
  --wyrd-orange-dark: hsl(25, 85%, 40%);
  --wyrd-orange-light: hsl(25, 85%, 60%);
  --wyrd-orange-rgb: 236, 109, 19;
  --wyrd-pink: hsl(330, 85%, 47.2%);
  --wyrd-pink-dark: hsl(330, 85%, 37.2%);
  --wyrd-pink-light: hsl(330, 85%, 57.2%);
  --wyrd-pink-rgb: 223, 18, 120;
  --wyrd-purple: hsl(270, 65%, 58.8%);
  --wyrd-purple-dark: hsl(270, 65%, 48.8%);
  --wyrd-purple-light: hsl(270, 65%, 68.8%);
  --wyrd-purple-rgb: 150, 82, 218;
  --wyrd-red: hsl(340, 85%, 48.3%);
  --wyrd-red-dark: hsl(340, 85%, 38.3%);
  --wyrd-red-light: hsl(340, 85%, 58.3%);
  --wyrd-red-rgb: 228, 18, 88;
  --wyrd-strike-color: var(--color-base-30, hsl(270, 13%, 65%));
  --wyrd-strike-color-hover: var(--text-faint, hsl(270, 10%, 17.5%));
  --wyrd-teal: hsl(160, 100%, 36%);
  --wyrd-teal-dark: hsl(160, 100%, 26%);
  --wyrd-teal-light: hsl(160, 100%, 46%);
  --wyrd-teal-rgb: 0, 184, 122;
  --wyrd-yellow: hsl(37, 100%, 50%);
  --wyrd-yellow-dark: hsl(37, 100%, 40%);
  --wyrd-yellow-dark-rgb: 204, 126, 0;
  --wyrd-yellow-light: hsl(37, 100%, 60%);
  --wyrd-yellow-light-rgb: 255, 177, 51;
  --wyrd-yellow-rgb: 255, 157, 0;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(191, 185, 198));
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(198, 192, 203));
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(198, 192, 203));
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(191, 185, 198));
  border-left-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 8%, 35%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 82.5%);
  --background-modifier-form-field-hover: hsl(270, 10%, 82.5%);
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 77.5%);
  --background-primary-alt: hsl(270, 10%, 75%);
  --background-secondary: hsl(270, 10%, 77.5%);
  --background-secondary-alt: hsl(270, 10%, 80%);
  --blockquote-border-color: hsl(269, 65.65%, 63.21%);
  --blur-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 228, 18, 88;
  --callout-default: 8, 109, 221;
  --callout-error: 228, 18, 88;
  --callout-example: 120, 82, 238;
  --callout-fail: 228, 18, 88;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(270, 10%, 77.5%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 13%, 65%);
  --caret-color: hsl(270, 8%, 35%);
  --checkbox-border-color: hsl(270, 10%, 17.5%);
  --checkbox-border-color-hover: hsl(270, 10%, 20%);
  --checkbox-color: hsl(269, 65.65%, 63.21%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 77.5%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 20%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 75%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(270, 10%, 17.5%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 8%, 35%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 20%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 10%, 17.5%);
  --collapse-icon-color-collapsed: hsl(270, 65%, 58.8%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(269, 65.65%, 63.21%);
  --color-accent-2: hsl(267, 66.3%, 67.62%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 82.5%);
  --color-base-10: hsl(270, 10%, 77.5%);
  --color-base-100: hsl(270, 10%, 12.5%);
  --color-base-20: hsl(270, 10%, 75%);
  --color-base-25: hsl(270, 10%, 72.5%);
  --color-base-30: hsl(270, 13%, 65%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 8%, 35%);
  --color-base-50: hsl(270, 10%, 20%);
  --color-base-60: hsl(270, 10%, 17.5%);
  --color-base-70: hsl(270, 10%, 15%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(269, 65.65%, 63.21%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 10%, 82.5%);
  --dropdown-background-hover: hsl(270, 10%, 77.5%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 10%, 82.5%);
  --flair-color: hsl(270, 8%, 35%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 20%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 10%, 17.5%);
  --graph-text: hsl(270, 8%, 35%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 20%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(269, 65.65%, 63.21%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 10%, 77.5%);
  --interactive-normal: hsl(270, 10%, 82.5%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 77.5%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(270, 10%, 77.5%);
  --pdf-page-background: hsl(270, 10%, 77.5%);
  --pdf-sidebar-background: hsl(270, 10%, 77.5%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(270, 10%, 20%);
  --search-icon-color: hsl(270, 10%, 20%);
  --search-result-background: hsl(270, 10%, 77.5%);
  --setting-group-heading-color: hsl(270, 8%, 35%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 75%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 20%);
  --shiki-code-background: hsl(270, 10%, 75%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 10%, 17.5%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 20%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 20%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 10%, 17.5%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 20%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 20%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 10%, 17.5%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 77.5%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 77.5%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 77.5%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 77.5%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 10%, 17.5%);
  --tab-text-color-active: hsl(270, 10%, 20%);
  --tab-text-color-focused: hsl(270, 10%, 20%);
  --tab-text-color-focused-active: hsl(270, 8%, 35%);
  --tab-text-color-focused-active-current: hsl(270, 8%, 35%);
  --tab-text-color-focused-highlighted: hsl(270, 65%, 58.8%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(269, 65.65%, 63.21%);
  --table-drag-handle-color: hsl(270, 10%, 17.5%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 8%, 35%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(269, 65.65%, 63.21%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(270, 65%, 58.8%);
  --tag-color-hover: hsl(270, 65%, 58.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(270, 65%, 58.8%);
  --text-accent-hover: hsl(267, 66.3%, 67.62%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 10%, 17.5%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 20%);
  --text-normal: hsl(270, 8%, 35%);
  --text-selection: hsla(270, 65%, 58.8%, 0.2);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 13%, 65%);
  --wyrd-strike-color-hover: hsl(270, 10%, 17.5%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(150, 82, 218), rgb(150, 82, 218) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(150, 82, 218);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(150, 82, 218);
  border-left-width: 0px;
  border-right-color: rgb(150, 82, 218);
  border-right-width: 0px;
  border-top-color: rgb(150, 82, 218);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(150, 82, 218));
  content: " ";
  font-family: var(--h1-font, "Architects Daughter", Neucha);
  font-size: var(--h1-size, 25.888px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.38832px);
  line-height: var(--h1-line-height, 31.0656px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--text-normal, rgb(89, 82, 96));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(216, 75, 108));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(216, 75, 108));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--text-normal, rgb(89, 82, 96));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 157, 0, 0.7));
  color: var(--text-normal, rgb(89, 82, 96));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
  transition: background-color 0.25s ease-in-out;
}

html[saved-theme="light"] body del {
  color: var(--wyrd-strike-color, rgb(166, 154, 177));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 154, 177) none 0px;
  text-decoration-color: rgb(166, 154, 177);
  transition: color 0.25s ease-in-out;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(89, 82, 96));
}

html[saved-theme="light"] body h2 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 8%, 35%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 82.5%);
  --background-modifier-form-field-hover: hsl(270, 10%, 82.5%);
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 77.5%);
  --background-primary-alt: hsl(270, 10%, 75%);
  --background-secondary: hsl(270, 10%, 77.5%);
  --background-secondary-alt: hsl(270, 10%, 80%);
  --blockquote-border-color: hsl(269, 65.65%, 63.21%);
  --blur-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 228, 18, 88;
  --callout-default: 8, 109, 221;
  --callout-error: 228, 18, 88;
  --callout-example: 120, 82, 238;
  --callout-fail: 228, 18, 88;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(270, 10%, 77.5%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 13%, 65%);
  --caret-color: hsl(270, 8%, 35%);
  --checkbox-border-color: hsl(270, 10%, 17.5%);
  --checkbox-border-color-hover: hsl(270, 10%, 20%);
  --checkbox-color: hsl(269, 65.65%, 63.21%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 77.5%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 20%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 75%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(270, 10%, 17.5%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 8%, 35%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 20%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 10%, 17.5%);
  --collapse-icon-color-collapsed: hsl(270, 65%, 58.8%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(269, 65.65%, 63.21%);
  --color-accent-2: hsl(267, 66.3%, 67.62%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 82.5%);
  --color-base-10: hsl(270, 10%, 77.5%);
  --color-base-100: hsl(270, 10%, 12.5%);
  --color-base-20: hsl(270, 10%, 75%);
  --color-base-25: hsl(270, 10%, 72.5%);
  --color-base-30: hsl(270, 13%, 65%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 8%, 35%);
  --color-base-50: hsl(270, 10%, 20%);
  --color-base-60: hsl(270, 10%, 17.5%);
  --color-base-70: hsl(270, 10%, 15%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(269, 65.65%, 63.21%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 10%, 82.5%);
  --dropdown-background-hover: hsl(270, 10%, 77.5%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 10%, 82.5%);
  --flair-color: hsl(270, 8%, 35%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h2-weight, 680);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 20%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 10%, 17.5%);
  --graph-text: hsl(270, 8%, 35%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 20%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(269, 65.65%, 63.21%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 10%, 77.5%);
  --interactive-normal: hsl(270, 10%, 82.5%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 77.5%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(270, 10%, 77.5%);
  --pdf-page-background: hsl(270, 10%, 77.5%);
  --pdf-sidebar-background: hsl(270, 10%, 77.5%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(270, 10%, 20%);
  --search-icon-color: hsl(270, 10%, 20%);
  --search-result-background: hsl(270, 10%, 77.5%);
  --setting-group-heading-color: hsl(270, 8%, 35%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 75%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 20%);
  --shiki-code-background: hsl(270, 10%, 75%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 10%, 17.5%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 20%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 20%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 10%, 17.5%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 20%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 20%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 10%, 17.5%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 77.5%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 77.5%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 77.5%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 77.5%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 10%, 17.5%);
  --tab-text-color-active: hsl(270, 10%, 20%);
  --tab-text-color-focused: hsl(270, 10%, 20%);
  --tab-text-color-focused-active: hsl(270, 8%, 35%);
  --tab-text-color-focused-active-current: hsl(270, 8%, 35%);
  --tab-text-color-focused-highlighted: hsl(270, 65%, 58.8%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(269, 65.65%, 63.21%);
  --table-drag-handle-color: hsl(270, 10%, 17.5%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 8%, 35%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(269, 65.65%, 63.21%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(270, 65%, 58.8%);
  --tag-color-hover: hsl(270, 65%, 58.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(270, 65%, 58.8%);
  --text-accent-hover: hsl(267, 66.3%, 67.62%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 10%, 17.5%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 20%);
  --text-normal: hsl(270, 8%, 35%);
  --text-selection: hsla(270, 65%, 58.8%, 0.2);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 13%, 65%);
  --wyrd-strike-color-hover: hsl(270, 10%, 17.5%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(223, 18, 120), rgb(223, 18, 120) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(223, 18, 120);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(223, 18, 120);
  border-left-width: 0px;
  border-right-color: rgb(223, 18, 120);
  border-right-width: 0px;
  border-top-color: rgb(223, 18, 120);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(223, 18, 120));
  content: " ";
  font-family: var(--h2-font, "Architects Daughter", Neucha);
  font-size: var(--h2-size, 23.392px);
  font-weight: var(--font-weight, 680);
  letter-spacing: var(--h2-letter-spacing, -0.257312px);
  line-height: var(--h2-line-height, 28.0704px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body h3 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 8%, 35%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 82.5%);
  --background-modifier-form-field-hover: hsl(270, 10%, 82.5%);
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 77.5%);
  --background-primary-alt: hsl(270, 10%, 75%);
  --background-secondary: hsl(270, 10%, 77.5%);
  --background-secondary-alt: hsl(270, 10%, 80%);
  --blockquote-border-color: hsl(269, 65.65%, 63.21%);
  --blur-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 228, 18, 88;
  --callout-default: 8, 109, 221;
  --callout-error: 228, 18, 88;
  --callout-example: 120, 82, 238;
  --callout-fail: 228, 18, 88;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(270, 10%, 77.5%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 13%, 65%);
  --caret-color: hsl(270, 8%, 35%);
  --checkbox-border-color: hsl(270, 10%, 17.5%);
  --checkbox-border-color-hover: hsl(270, 10%, 20%);
  --checkbox-color: hsl(269, 65.65%, 63.21%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 77.5%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 20%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 75%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(270, 10%, 17.5%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 8%, 35%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 20%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 10%, 17.5%);
  --collapse-icon-color-collapsed: hsl(270, 65%, 58.8%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(269, 65.65%, 63.21%);
  --color-accent-2: hsl(267, 66.3%, 67.62%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 82.5%);
  --color-base-10: hsl(270, 10%, 77.5%);
  --color-base-100: hsl(270, 10%, 12.5%);
  --color-base-20: hsl(270, 10%, 75%);
  --color-base-25: hsl(270, 10%, 72.5%);
  --color-base-30: hsl(270, 13%, 65%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 8%, 35%);
  --color-base-50: hsl(270, 10%, 20%);
  --color-base-60: hsl(270, 10%, 17.5%);
  --color-base-70: hsl(270, 10%, 15%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(269, 65.65%, 63.21%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 10%, 82.5%);
  --dropdown-background-hover: hsl(270, 10%, 77.5%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 10%, 82.5%);
  --flair-color: hsl(270, 8%, 35%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h3-weight, 660);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 20%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 10%, 17.5%);
  --graph-text: hsl(270, 8%, 35%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 20%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(269, 65.65%, 63.21%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 10%, 77.5%);
  --interactive-normal: hsl(270, 10%, 82.5%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 77.5%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(270, 10%, 77.5%);
  --pdf-page-background: hsl(270, 10%, 77.5%);
  --pdf-sidebar-background: hsl(270, 10%, 77.5%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(270, 10%, 20%);
  --search-icon-color: hsl(270, 10%, 20%);
  --search-result-background: hsl(270, 10%, 77.5%);
  --setting-group-heading-color: hsl(270, 8%, 35%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 75%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 20%);
  --shiki-code-background: hsl(270, 10%, 75%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 10%, 17.5%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 20%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 20%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 10%, 17.5%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 20%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 20%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 10%, 17.5%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 77.5%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 77.5%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 77.5%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 77.5%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 10%, 17.5%);
  --tab-text-color-active: hsl(270, 10%, 20%);
  --tab-text-color-focused: hsl(270, 10%, 20%);
  --tab-text-color-focused-active: hsl(270, 8%, 35%);
  --tab-text-color-focused-active-current: hsl(270, 8%, 35%);
  --tab-text-color-focused-highlighted: hsl(270, 65%, 58.8%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(269, 65.65%, 63.21%);
  --table-drag-handle-color: hsl(270, 10%, 17.5%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 8%, 35%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(269, 65.65%, 63.21%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(270, 65%, 58.8%);
  --tag-color-hover: hsl(270, 65%, 58.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(270, 65%, 58.8%);
  --text-accent-hover: hsl(267, 66.3%, 67.62%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 10%, 17.5%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 20%);
  --text-normal: hsl(270, 8%, 35%);
  --text-selection: hsla(270, 65%, 58.8%, 0.2);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 13%, 65%);
  --wyrd-strike-color-hover: hsl(270, 10%, 17.5%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(94, 51, 204), rgb(94, 51, 204) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(94, 51, 204);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 51, 204);
  border-left-width: 0px;
  border-right-color: rgb(94, 51, 204);
  border-right-width: 0px;
  border-top-color: rgb(94, 51, 204);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(94, 51, 204));
  content: " ";
  font-family: var(--h3-font, "Architects Daughter", Neucha);
  font-size: var(--h3-size, 21.088px);
  font-weight: var(--font-weight, 660);
  letter-spacing: var(--h3-letter-spacing, -0.168704px);
  line-height: var(--h3-line-height, 27.4144px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body h4 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 8%, 35%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 82.5%);
  --background-modifier-form-field-hover: hsl(270, 10%, 82.5%);
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 77.5%);
  --background-primary-alt: hsl(270, 10%, 75%);
  --background-secondary: hsl(270, 10%, 77.5%);
  --background-secondary-alt: hsl(270, 10%, 80%);
  --blockquote-border-color: hsl(269, 65.65%, 63.21%);
  --blur-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 228, 18, 88;
  --callout-default: 8, 109, 221;
  --callout-error: 228, 18, 88;
  --callout-example: 120, 82, 238;
  --callout-fail: 228, 18, 88;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(270, 10%, 77.5%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 13%, 65%);
  --caret-color: hsl(270, 8%, 35%);
  --checkbox-border-color: hsl(270, 10%, 17.5%);
  --checkbox-border-color-hover: hsl(270, 10%, 20%);
  --checkbox-color: hsl(269, 65.65%, 63.21%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 77.5%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 20%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 75%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(270, 10%, 17.5%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 8%, 35%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 20%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 10%, 17.5%);
  --collapse-icon-color-collapsed: hsl(270, 65%, 58.8%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(269, 65.65%, 63.21%);
  --color-accent-2: hsl(267, 66.3%, 67.62%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 82.5%);
  --color-base-10: hsl(270, 10%, 77.5%);
  --color-base-100: hsl(270, 10%, 12.5%);
  --color-base-20: hsl(270, 10%, 75%);
  --color-base-25: hsl(270, 10%, 72.5%);
  --color-base-30: hsl(270, 13%, 65%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 8%, 35%);
  --color-base-50: hsl(270, 10%, 20%);
  --color-base-60: hsl(270, 10%, 17.5%);
  --color-base-70: hsl(270, 10%, 15%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(269, 65.65%, 63.21%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 10%, 82.5%);
  --dropdown-background-hover: hsl(270, 10%, 77.5%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 10%, 82.5%);
  --flair-color: hsl(270, 8%, 35%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h4-weight, 640);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 20%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 10%, 17.5%);
  --graph-text: hsl(270, 8%, 35%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 20%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(269, 65.65%, 63.21%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 10%, 77.5%);
  --interactive-normal: hsl(270, 10%, 82.5%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 77.5%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(270, 10%, 77.5%);
  --pdf-page-background: hsl(270, 10%, 77.5%);
  --pdf-sidebar-background: hsl(270, 10%, 77.5%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(270, 10%, 20%);
  --search-icon-color: hsl(270, 10%, 20%);
  --search-result-background: hsl(270, 10%, 77.5%);
  --setting-group-heading-color: hsl(270, 8%, 35%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 75%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 20%);
  --shiki-code-background: hsl(270, 10%, 75%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 10%, 17.5%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 20%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 20%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 10%, 17.5%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 20%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 20%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 10%, 17.5%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 77.5%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 77.5%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 77.5%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 77.5%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 10%, 17.5%);
  --tab-text-color-active: hsl(270, 10%, 20%);
  --tab-text-color-focused: hsl(270, 10%, 20%);
  --tab-text-color-focused-active: hsl(270, 8%, 35%);
  --tab-text-color-focused-active-current: hsl(270, 8%, 35%);
  --tab-text-color-focused-highlighted: hsl(270, 65%, 58.8%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(269, 65.65%, 63.21%);
  --table-drag-handle-color: hsl(270, 10%, 17.5%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 8%, 35%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(269, 65.65%, 63.21%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(270, 65%, 58.8%);
  --tag-color-hover: hsl(270, 65%, 58.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(270, 65%, 58.8%);
  --text-accent-hover: hsl(267, 66.3%, 67.62%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 10%, 17.5%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 20%);
  --text-normal: hsl(270, 8%, 35%);
  --text-selection: hsla(270, 65%, 58.8%, 0.2);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 13%, 65%);
  --wyrd-strike-color-hover: hsl(270, 10%, 17.5%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(60, 162, 9), rgb(60, 162, 9) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(60, 162, 9);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(60, 162, 9);
  border-left-width: 0px;
  border-right-color: rgb(60, 162, 9);
  border-right-width: 0px;
  border-top-color: rgb(60, 162, 9);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(60, 162, 9));
  content: " ";
  font-family: var(--h4-font, "Architects Daughter", Neucha);
  font-size: var(--h4-size, 19.008px);
  font-weight: var(--font-weight, 640);
  letter-spacing: var(--h4-letter-spacing, -0.09504px);
  line-height: var(--h4-line-height, 26.6112px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body h5 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 8%, 35%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 82.5%);
  --background-modifier-form-field-hover: hsl(270, 10%, 82.5%);
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 77.5%);
  --background-primary-alt: hsl(270, 10%, 75%);
  --background-secondary: hsl(270, 10%, 77.5%);
  --background-secondary-alt: hsl(270, 10%, 80%);
  --blockquote-border-color: hsl(269, 65.65%, 63.21%);
  --blur-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 228, 18, 88;
  --callout-default: 8, 109, 221;
  --callout-error: 228, 18, 88;
  --callout-example: 120, 82, 238;
  --callout-fail: 228, 18, 88;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(270, 10%, 77.5%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 13%, 65%);
  --caret-color: hsl(270, 8%, 35%);
  --checkbox-border-color: hsl(270, 10%, 17.5%);
  --checkbox-border-color-hover: hsl(270, 10%, 20%);
  --checkbox-color: hsl(269, 65.65%, 63.21%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 77.5%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 20%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 75%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(270, 10%, 17.5%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 8%, 35%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 20%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 10%, 17.5%);
  --collapse-icon-color-collapsed: hsl(270, 65%, 58.8%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(269, 65.65%, 63.21%);
  --color-accent-2: hsl(267, 66.3%, 67.62%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 82.5%);
  --color-base-10: hsl(270, 10%, 77.5%);
  --color-base-100: hsl(270, 10%, 12.5%);
  --color-base-20: hsl(270, 10%, 75%);
  --color-base-25: hsl(270, 10%, 72.5%);
  --color-base-30: hsl(270, 13%, 65%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 8%, 35%);
  --color-base-50: hsl(270, 10%, 20%);
  --color-base-60: hsl(270, 10%, 17.5%);
  --color-base-70: hsl(270, 10%, 15%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(269, 65.65%, 63.21%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 10%, 82.5%);
  --dropdown-background-hover: hsl(270, 10%, 77.5%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 10%, 82.5%);
  --flair-color: hsl(270, 8%, 35%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h5-weight, 620);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 20%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 10%, 17.5%);
  --graph-text: hsl(270, 8%, 35%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 20%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(269, 65.65%, 63.21%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 10%, 77.5%);
  --interactive-normal: hsl(270, 10%, 82.5%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 77.5%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(270, 10%, 77.5%);
  --pdf-page-background: hsl(270, 10%, 77.5%);
  --pdf-sidebar-background: hsl(270, 10%, 77.5%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(270, 10%, 20%);
  --search-icon-color: hsl(270, 10%, 20%);
  --search-result-background: hsl(270, 10%, 77.5%);
  --setting-group-heading-color: hsl(270, 8%, 35%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 75%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 20%);
  --shiki-code-background: hsl(270, 10%, 75%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 10%, 17.5%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 20%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 20%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 10%, 17.5%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 20%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 20%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 10%, 17.5%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 77.5%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 77.5%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 77.5%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 77.5%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 10%, 17.5%);
  --tab-text-color-active: hsl(270, 10%, 20%);
  --tab-text-color-focused: hsl(270, 10%, 20%);
  --tab-text-color-focused-active: hsl(270, 8%, 35%);
  --tab-text-color-focused-active-current: hsl(270, 8%, 35%);
  --tab-text-color-focused-highlighted: hsl(270, 65%, 58.8%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(269, 65.65%, 63.21%);
  --table-drag-handle-color: hsl(270, 10%, 17.5%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 8%, 35%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(269, 65.65%, 63.21%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(270, 65%, 58.8%);
  --tag-color-hover: hsl(270, 65%, 58.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(270, 65%, 58.8%);
  --text-accent-hover: hsl(267, 66.3%, 67.62%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 10%, 17.5%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 20%);
  --text-normal: hsl(270, 8%, 35%);
  --text-selection: hsla(270, 65%, 58.8%, 0.2);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 13%, 65%);
  --wyrd-strike-color-hover: hsl(270, 10%, 17.5%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(0, 184, 122), rgb(0, 184, 122) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(0, 184, 122);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 184, 122);
  border-left-width: 0px;
  border-right-color: rgb(0, 184, 122);
  border-right-width: 0px;
  border-top-color: rgb(0, 184, 122);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(0, 184, 122));
  content: " ";
  font-family: var(--h5-font, "Architects Daughter", Neucha);
  font-size: var(--h5-size, 17.216px);
  font-weight: var(--font-weight, 620);
  letter-spacing: var(--h5-letter-spacing, -0.034432px);
  line-height: var(--h5-line-height, 25.824px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body h6 {
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15);
  --background-modifier-border: hsl(37, 100%, 50%);
  --background-modifier-border-focus: hsl(270, 8%, 35%);
  --background-modifier-border-hover: hsl(270, 8%, 50%);
  --background-modifier-error: hsl(340, 85%, 48.3%);
  --background-modifier-error-hover: hsl(340, 85%, 48.3%);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: hsl(270, 10%, 82.5%);
  --background-modifier-form-field-hover: hsl(270, 10%, 82.5%);
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: hsla(100, 90%, 33.5%);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: hsl(270, 10%, 77.5%);
  --background-primary-alt: hsl(270, 10%, 75%);
  --background-secondary: hsl(270, 10%, 77.5%);
  --background-secondary-alt: hsl(270, 10%, 80%);
  --blockquote-border-color: hsl(269, 65.65%, 63.21%);
  --blur-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 228, 18, 88;
  --callout-default: 8, 109, 221;
  --callout-error: 228, 18, 88;
  --callout-example: 120, 82, 238;
  --callout-fail: 228, 18, 88;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 51, 138, 7;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(270, 10%, 77.5%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsl(270, 13%, 65%);
  --caret-color: hsl(270, 8%, 35%);
  --checkbox-border-color: hsl(270, 10%, 17.5%);
  --checkbox-border-color-hover: hsl(270, 10%, 20%);
  --checkbox-color: hsl(269, 65.65%, 63.21%);
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%);
  --checkbox-marker-color: hsl(270, 10%, 77.5%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(270, 10%, 20%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(270, 10%, 75%);
  --code-border-color: hsl(37, 100%, 50%);
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: hsl(270, 10%, 17.5%);
  --code-function: hsl(37, 100%, 50%);
  --code-important: hsl(25, 85%, 50%);
  --code-keyword: hsl(330, 85%, 47.2%);
  --code-normal: hsl(270, 8%, 35%);
  --code-operator: hsl(340, 85%, 48.3%);
  --code-property: hsla(175, 100%, 50%);
  --code-punctuation: hsl(270, 10%, 20%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsla(100, 90%, 33.5%);
  --code-tag: hsl(340, 85%, 48.3%);
  --code-value: hsl(270, 65%, 58.8%);
  --collapse-icon-color: hsl(270, 10%, 17.5%);
  --collapse-icon-color-collapsed: hsl(270, 65%, 58.8%);
  --color-accent: hsl(270, 65%, 58.8%);
  --color-accent-1: hsl(269, 65.65%, 63.21%);
  --color-accent-2: hsl(267, 66.3%, 67.62%);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: hsl(270, 10%, 82.5%);
  --color-base-10: hsl(270, 10%, 77.5%);
  --color-base-100: hsl(270, 10%, 12.5%);
  --color-base-20: hsl(270, 10%, 75%);
  --color-base-25: hsl(270, 10%, 72.5%);
  --color-base-30: hsl(270, 13%, 65%);
  --color-base-35: hsl(270, 8%, 50%);
  --color-base-40: hsl(270, 8%, 35%);
  --color-base-50: hsl(270, 10%, 20%);
  --color-base-60: hsl(270, 10%, 17.5%);
  --color-base-70: hsl(270, 10%, 15%);
  --color-blue: hsl(190, 100%, 26%);
  --color-cyan: hsla(175, 100%, 50%);
  --color-green: hsla(100, 90%, 33.5%);
  --color-green-rgb: 51, 138, 7;
  --color-orange: hsl(25, 85%, 50%);
  --color-pink: hsl(330, 85%, 47.2%);
  --color-purple: hsl(270, 65%, 58.8%);
  --color-red: hsl(340, 85%, 48.3%);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: hsl(37, 100%, 50%);
  --divider-color: hsl(37, 100%, 50%);
  --divider-color-hover: hsl(269, 65.65%, 63.21%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(270, 10%, 82.5%);
  --dropdown-background-hover: hsl(270, 10%, 77.5%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(270, 10%, 82.5%);
  --flair-color: hsl(270, 8%, 35%);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h6-weight, 600);
  --graph-line: hsl(37, 100%, 40%);
  --graph-node: hsl(270, 10%, 20%);
  --graph-node-attachment: hsl(25, 85%, 50%);
  --graph-node-focused: hsl(37, 100%, 50%);
  --graph-node-tag: hsla(100, 90%, 33.5%);
  --graph-node-unresolved: hsl(270, 10%, 17.5%);
  --graph-text: hsl(270, 8%, 35%);
  --h1-color: hsl(270, 65%, 58.8%);
  --h2-color: hsl(330, 85%, 47.2%);
  --h3-color: hsl(257, 60%, 50%);
  --h4-color: hsla(100, 90%, 33.5%);
  --h5-color: hsl(160, 100%, 36%);
  --h5-line-height: 1.5;
  --h6-color: hsl(190, 100%, 26%);
  --h6-line-height: 1.5;
  --heading-formatting: hsl(270, 10%, 20%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(37, 100%, 50%);
  --interactive-accent: hsl(269, 65.65%, 63.21%);
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: hsl(270, 10%, 77.5%);
  --interactive-normal: hsl(270, 10%, 82.5%);
  --link-color: hsl(37, 100%, 50%);
  --link-color-hover: hsl(37, 100%, 60%);
  --link-external-color: hsla(175, 100%, 40%);
  --link-external-color-hover: hsla(175, 100%, 50%);
  --link-unresolved-color: hsl(25, 85%, 40%);
  --link-unresolved-color-hover: hsl(25, 85%, 50%);
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: hsl(270, 10%, 77.5%);
  --menu-border-color: hsl(270, 8%, 50%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(270, 10%, 77.5%);
  --pdf-page-background: hsl(270, 10%, 77.5%);
  --pdf-sidebar-background: hsl(270, 10%, 77.5%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(270, 10%, 20%);
  --search-icon-color: hsl(270, 10%, 20%);
  --search-result-background: hsl(270, 10%, 77.5%);
  --setting-group-heading-color: hsl(270, 8%, 35%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(270, 10%, 75%);
  --setting-items-border-color: hsl(37, 100%, 50%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: hsl(270, 10%, 20%);
  --shiki-code-background: hsl(270, 10%, 75%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(270, 10%, 17.5%);
  --shiki-code-function: hsla(100, 90%, 33.5%);
  --shiki-code-important: hsl(25, 85%, 50%);
  --shiki-code-keyword: hsl(330, 85%, 47.2%);
  --shiki-code-normal: hsl(270, 10%, 20%);
  --shiki-code-property: hsla(175, 100%, 50%);
  --shiki-code-punctuation: hsl(270, 10%, 20%);
  --shiki-code-string: hsl(37, 100%, 50%);
  --shiki-code-value: hsl(270, 65%, 58.8%);
  --shiki-gutter-border-color: hsl(37, 100%, 50%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(270, 10%, 17.5%);
  --shiki-gutter-text-color-highlight: hsl(270, 10%, 20%);
  --shiki-highlight-green: rgba(51, 138, 7, 0.5);
  --shiki-highlight-green-background: rgba(51, 138, 7, 0.1);
  --shiki-highlight-neutral: hsl(270, 10%, 20%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(228, 18, 88, 0.5);
  --shiki-highlight-red-background: rgba(228, 18, 88, 0.1);
  --shiki-terminal-dots-color: hsl(270, 10%, 17.5%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(270, 10%, 77.5%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: hsl(340, 85%, 48.3%);
  --sync-avatar-color-2: hsl(25, 85%, 50%);
  --sync-avatar-color-3: hsl(37, 100%, 50%);
  --sync-avatar-color-4: hsla(100, 90%, 33.5%);
  --sync-avatar-color-5: hsla(175, 100%, 50%);
  --sync-avatar-color-6: hsl(190, 100%, 26%);
  --sync-avatar-color-7: hsl(270, 65%, 58.8%);
  --sync-avatar-color-8: hsl(330, 85%, 47.2%);
  --tab-background-active: hsl(270, 10%, 77.5%);
  --tab-divider-color: hsl(270, 8%, 50%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(37, 100%, 50%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(270, 10%, 77.5%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 77.5%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%);
  --tab-text-color: hsl(270, 10%, 17.5%);
  --tab-text-color-active: hsl(270, 10%, 20%);
  --tab-text-color-focused: hsl(270, 10%, 20%);
  --tab-text-color-focused-active: hsl(270, 8%, 35%);
  --tab-text-color-focused-active-current: hsl(270, 8%, 35%);
  --tab-text-color-focused-highlighted: hsl(270, 65%, 58.8%);
  --table-add-button-border-color: hsl(37, 100%, 50%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(37, 100%, 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(269, 65.65%, 63.21%);
  --table-drag-handle-color: hsl(270, 10%, 17.5%);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(37, 100%, 50%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(270, 8%, 35%);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(270, 65%, 58.8%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(269, 65.65%, 63.21%);
  --tag-background: hsla(270, 65%, 58.8%, 0.1);
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2);
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15);
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15);
  --tag-color: hsl(270, 65%, 58.8%);
  --tag-color-hover: hsl(270, 65%, 58.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(270, 65%, 58.8%);
  --text-accent-hover: hsl(267, 66.3%, 67.62%);
  --text-error: hsl(340, 85%, 48.3%);
  --text-faint: hsl(270, 10%, 17.5%);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: hsl(270, 10%, 20%);
  --text-normal: hsl(270, 8%, 35%);
  --text-selection: hsla(270, 65%, 58.8%, 0.2);
  --text-success: hsla(100, 90%, 33.5%);
  --text-warning: hsl(25, 85%, 50%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --wyrd-strike-color: hsl(270, 13%, 65%);
  --wyrd-strike-color-hover: hsl(270, 10%, 17.5%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(0, 110, 133), rgb(0, 110, 133) 25%, rgba(0, 0, 0, 0) 75%);
  border-bottom-color: rgb(0, 110, 133);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 110, 133);
  border-left-width: 0px;
  border-right-color: rgb(0, 110, 133);
  border-right-width: 0px;
  border-top-color: rgb(0, 110, 133);
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(0, 110, 133));
  content: " ";
  font-family: var(--h6-font, "Architects Daughter", Neucha);
  font-size: var(--h6-size, 16px);
  font-weight: var(--font-weight, 600);
  line-height: var(--h6-line-height, 24px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(45, 40, 49);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(159, 100, 223));
  border-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(51, 46, 56));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 46, 56) none 0px;
  text-decoration-color: rgb(51, 46, 56);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(0, 204, 187));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 187) none 0px;
  text-decoration-color: rgb(0, 204, 187);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(255, 157, 0));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 157, 0) none 0px;
  text-decoration-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(189, 88, 15));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 88, 15) none 0px;
  text-decoration: rgba(150, 82, 218, 0.5);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(150, 82, 218, 0.5));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body dt {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ol > li {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ul > li {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--wyrd-pink, rgb(223, 18, 120));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body table {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 230.281px;
  margin-right: 230.281px;
  width: 201.438px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--table-text-color, rgb(89, 82, 96));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--table-header-color, rgb(89, 82, 96));
  font-weight: var(--table-header-weight, 700);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(191, 185, 198));
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--code-normal, rgb(89, 82, 96));
  font-family: var(--font-monospace, "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(191, 185, 198));
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body figcaption {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(191, 185, 198));
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(159, 100, 223);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(198, 192, 203);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(198, 192, 203);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 109, 19);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 46, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 255, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 110, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 110, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 18, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(60, 162, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(60, 162, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(60, 162, 9);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--wyrd-blue-rgb, 0, 153, 184);
  background: rgba(0, 153, 184, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 153, 184, 0.25);
  border-left-color: rgba(0, 153, 184, 0.25);
  border-right-color: rgba(0, 153, 184, 0.25);
  border-top-color: rgba(0, 153, 184, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--wyrd-red-rgb, 228, 18, 88);
  background: rgba(228, 18, 88, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--wyrd-red-rgb, 228, 18, 88);
  background: rgba(228, 18, 88, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--wyrd-indigo-rgb, 94, 51, 204);
  background: rgba(94, 51, 204, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(94, 51, 204, 0.25);
  border-left-color: rgba(94, 51, 204, 0.25);
  border-right-color: rgba(94, 51, 204, 0.25);
  border-top-color: rgba(94, 51, 204, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--wyrd-red-rgb, 228, 18, 88);
  background: rgba(228, 18, 88, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--wyrd-orange-rgb, 236, 109, 19);
  background: rgba(236, 109, 19, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--wyrd-purple-rgb, 150, 82, 218);
  background: rgba(150, 82, 218, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--wyrd-teal-rgb, 0, 184, 122);
  background: rgba(0, 184, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 184, 122, 0.25);
  border-left-color: rgba(0, 184, 122, 0.25);
  border-right-color: rgba(0, 184, 122, 0.25);
  border-top-color: rgba(0, 184, 122, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--wyrd-base-50-rgb, 128, 117, 138);
  background: rgba(128, 117, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(128, 117, 138, 0.25);
  border-left-color: rgba(128, 117, 138, 0.25);
  border-right-color: rgba(128, 117, 138, 0.25);
  border-top-color: rgba(128, 117, 138, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--wyrd-green-rgb, 51, 138, 7);
  background: rgba(51, 138, 7, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(51, 138, 7, 0.25);
  border-left-color: rgba(51, 138, 7, 0.25);
  border-right-color: rgba(51, 138, 7, 0.25);
  border-top-color: rgba(51, 138, 7, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--wyrd-pink-rgb, 223, 18, 120);
  background: rgba(223, 18, 120, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(223, 18, 120, 0.25);
  border-left-color: rgba(223, 18, 120, 0.25);
  border-right-color: rgba(223, 18, 120, 0.25);
  border-top-color: rgba(223, 18, 120, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--wyrd-orange-rgb, 236, 109, 19);
  background: rgba(236, 109, 19, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--wyrd-yellow-rgb, 255, 157, 0);
  background: rgba(255, 157, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 157, 0, 0.25);
  border-left-color: rgba(255, 157, 0, 0.25);
  border-right-color: rgba(255, 157, 0, 0.25);
  border-top-color: rgba(255, 157, 0, 0.25);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(89, 82, 96);
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
  background-color: rgb(210, 206, 215);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--text-normal, rgb(89, 82, 96));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(198, 192, 203));
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(198, 192, 203);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(150, 82, 218, 0.1));
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(150, 82, 218);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(150, 82, 218));
  font-family: var(--h1-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(223, 18, 120));
  font-family: var(--h2-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(150, 82, 218));
  font-family: var(--inline-title-font, "Architects Daughter", Neucha);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(94, 51, 204));
  font-family: var(--h3-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(60, 162, 9));
  font-family: var(--h4-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(0, 184, 122));
  font-family: var(--h5-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(0, 110, 133));
  font-family: var(--h6-font, "Architects Daughter", Neucha);
  text-shadow: 0 0 4px var(--wyrd-base-00);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--wyrd-purple-rgb, 150, 82, 218);
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(51, 46, 56));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(51, 46, 56));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(89, 82, 96);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: var(--icon-color, rgb(51, 46, 56));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(198, 192, 203));
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--status-bar-text-color, rgb(51, 46, 56));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(51, 46, 56);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(51, 46, 56));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(51, 46, 56));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: var(--icon-color, rgb(51, 46, 56));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(51, 46, 56);
  stroke: rgb(51, 46, 56);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(45, 40, 49));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(89, 82, 96));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(198, 192, 203));
  border-color: rgb(89, 82, 96);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(255, 157, 0);
  color: var(--table-header-color, rgb(89, 82, 96));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: var(--text-muted, rgb(51, 46, 56));
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(150, 82, 218, 0.1));
  color: var(--pill-color, rgb(150, 82, 218));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(51, 46, 56);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(198, 192, 203));
  color: var(--text-normal, rgb(89, 82, 96));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(198, 192, 203));
  border-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(191, 185, 198));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(89, 82, 96);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(198, 192, 203));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(89, 82, 96));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: var(--text-normal, rgb(51, 46, 56));
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(191, 185, 198));
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: var(--code-normal, rgb(89, 82, 96));
  font-family: var(--font-monospace, "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body sub {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body summary {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body sup {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(150, 82, 218, 0.1));
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  color: var(--tag-color, rgb(150, 82, 218));
}`,
  },
};
