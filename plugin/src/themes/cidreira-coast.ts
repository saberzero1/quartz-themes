import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cidreira-coast",
    modes: ["light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "boxicons",
        style: "normal",
        weight: "400",
        file: "boxicons.woff",
        format: "woff",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "obsidian-cidreira-coast-theme",
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-d: 51.6%;
  --accent-hsl: 316.9, 15.4%, 40.8%;
  --background-match-highlight: hsla(var(--accent-hsl), 0.2);
  --background-modifier-accent: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) + 10%)
  );
  --background-modifier-border: var(--shade-20, rgba(0, 0, 0, 0.2));
  --background-modifier-border-focus: var(--shade-20, rgba(0, 0, 0, 0.2));
  --background-modifier-border-hover: var(--shade-20, rgba(0, 0, 0, 0.2));
  --background-modifier-cover: rgba(100, 100, 100, 0.6);
  --background-modifier-error: var(--color-red, rgb(175, 62, 77));
  --background-modifier-error-hover: var(--color-red, rgb(175, 62, 77));
  --background-modifier-error-rgb: var(--color-red-rgb, 175, 62, 77);
  --background-modifier-success: var(--color-green, rgb(80, 193, 178));
  --background-modifier-success-rgb: var(--color-green-rgb, 80, 193, 178);
  --background-primary: var(--shade-0, rgb(244, 226, 205));
  --background-primary-alt: var(--shade-3, rgba(0, 0, 0, 0.03));
  --background-rgb: var(--color-white-rgb, 244, 226, 205);
  --background-secondary: var(--shade-3, rgba(0, 0, 0, 0.03));
  --background-secondary-alt: var(--shade-3, rgba(0, 0, 0, 0.03));
  --background-tertiary: var(--shade-3, rgba(0, 0, 0, 0.03));
  --background-translucent: rgba(244, 226, 205, 0.5);
  --background-transparent: transparent;
  --bases-cards-background: var(--background-primary, rgb(244, 226, 205));
  --bases-cards-cover-background: var(--background-primary-alt, rgba(0, 0, 0, 0.03));
  --bases-embed-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --bases-group-heading-property-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --bases-table-border-color: var(--table-border-color, rgba(0, 0, 0, 0.2));
  --bases-table-cell-background-active: var(--background-primary, rgb(244, 226, 205));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgba(0, 0, 0, 0.03));
  --bases-table-group-background: var(--background-primary-alt, rgba(0, 0, 0, 0.03));
  --bases-table-header-background: var(--background-primary, rgb(244, 226, 205));
  --bases-table-header-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --bases-table-summary-background: var(--background-primary, rgb(244, 226, 205));
  --blockquote-border-color: var(--interactive-accent, rgb(140, 108, 145));
  --border-width-alt: 1px;
  --callout-bug: var(--color-red-rgb, 175, 62, 77);
  --callout-default: var(--color-blue-rgb, 28, 129, 176);
  --callout-error: var(--color-red-rgb, 175, 62, 77);
  --callout-example: var(--color-purple-rgb, 140, 108, 145);
  --callout-fail: var(--color-red-rgb, 175, 62, 77);
  --callout-info: var(--color-blue-rgb, 28, 129, 176);
  --callout-success: var(--color-green-rgb, 80, 193, 178);
  --callout-todo: var(--color-blue-rgb, 28, 129, 176);
  --canvas-background: var(--background-primary, rgb(244, 226, 205));
  --canvas-card-label-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --canvas-color-1: var(--color-red-rgb, 175, 62, 77);
  --canvas-color-4: var(--color-green-rgb, 80, 193, 178);
  --canvas-color-6: var(--color-purple-rgb, 140, 108, 145);
  --caret-color: var(--text-normal, rgba(0, 0, 0, 0.9));
  --checkbox-border-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --checkbox-border-color-hover: var(--text-muted, rgba(0, 0, 0, 0.5));
  --checkbox-color: var(--interactive-accent, rgb(140, 108, 145));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
    258,
    88%,
    56%
  ));
  --checkbox-marker-color: var(--background-primary, rgb(244, 226, 205));
  --checklist-done-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --code-background: var(--background-primary-alt, rgba(0, 0, 0, 0.03));
  --code-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --code-comment: var(--text-faint, rgba(0, 0, 0, 0.3));
  --code-normal: var(--text-normal, rgba(0, 0, 0, 0.9));
  --code-operator: var(--color-red, rgb(175, 62, 77));
  --code-punctuation: var(--text-muted, rgba(0, 0, 0, 0.5));
  --code-string: var(--color-green, rgb(80, 193, 178));
  --code-tag: var(--color-red, rgb(175, 62, 77));
  --code-value: var(--color-purple, rgb(140, 108, 145));
  --collapse-icon-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --color-accent: rgb(var(--color-accent-rgb));
  --color-accent-rgb: var(--color-purple-rgb, 140, 108, 145);
  --color-black: rgb(0, 0, 0);
  --color-black-rgb: 0, 0, 0;
  --color-blue: rgb(var(--color-blue-rgb));
  --color-blue-rgb: 28, 129, 176;
  --color-green: rgb(var(--color-green-rgb));
  --color-green-rgb: 80, 193, 178;
  --color-purple: rgb(var(--color-purple-rgb));
  --color-purple-rgb: 140, 108, 145;
  --color-red: rgb(var(--color-red-rgb));
  --color-red-rgb: 175, 62, 77;
  --color-side: rgb(145, 136, 125);
  --color-side-rgb: 145, 136, 125;
  --color-white: rgb(244, 226, 205);
  --color-white-rgb: 244, 226, 205;
  --dark: var(--text-normal, var(--shade-90, rgba(0, 0, 0, 0.9)));
  --darkgray: var(--text-normal, var(--shade-90, rgba(0, 0, 0, 0.9)));
  --default-font: "Petrona";
  --divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --divider-color-hover: var(--interactive-accent, rgb(140, 108, 145));
  --editor-font-features: "";
  --editor-font-size: 18px;
  --editor-font-weight: 400;
  --editor-line-height: 1.88889;
  --editor-line-height-rem: calc(var(--editor-line-height)*1rem);
  --editor-line-height-small: calc(var(--editor-line-height)*var(--scale-small)/100);
  --editor-line-height-small-rem: calc(var(--editor-line-height-small)*1rem);
  --file-header-background: var(--background-primary, rgb(244, 226, 205));
  --file-header-background-focused: var(--background-primary, rgb(244, 226, 205));
  --file-header-font: var(--font-interface, "Petrona", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-color: var(--text-normal, rgba(0, 0, 0, 0.9));
  --footnote-divider-color: var(--metadata-divider-color, rgba(0, 0, 0, 0.2));
  --footnote-id-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(0, 0, 0, 0.3));
  --foreground-rgb: var(--color-black-rgb, 0, 0, 0);
  --graph-node: var(--text-muted, rgba(0, 0, 0, 0.5));
  --graph-node-focused: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --graph-node-tag: var(--color-green, rgb(80, 193, 178));
  --graph-node-unresolved: var(--text-faint, rgba(0, 0, 0, 0.3));
  --graph-text: var(--text-normal, rgba(0, 0, 0, 0.9));
  --gray: var(--text-muted, var(--shade-50, rgba(0, 0, 0, 0.5)));
  --h1-margin-bottom: 1;
  --h1-margin-top: 3;
  --h1-weight: 500;
  --h2-margin-bottom: 13px;
  --h2-margin-top: 2.25;
  --h2-weight: 500;
  --h3-margin-bottom: 0.5;
  --h3-margin-top: 1.75;
  --h3-weight: 500;
  --h4-margin-bottom: 0.5;
  --h4-margin-top: 1.5;
  --h4-weight: 500;
  --h5-margin-bottom: 0.5;
  --h5-margin-top: 1.5;
  --h5-weight: 500;
  --h6-margin-bottom: 0.5;
  --h6-margin-top: 1.5;
  --h6-weight: 500;
  --header-width: 42px;
  --heading-formatting: var(--text-faint, rgba(0, 0, 0, 0.3));
  --highlight: var(--text-highlight-bg, rgba(var(--color-accent-rgb), 0.5));
  --hr-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --hr-sym: " // ";
  --icon-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --icon-color-active: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --icon-color-focused: var(--text-normal, rgba(0, 0, 0, 0.9));
  --icon-color-hover: var(--text-muted, rgba(0, 0, 0, 0.5));
  --icon-hex: 000;
  --icon-muted: 0.4;
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, rgba(0, 0, 0, 0.3));
  --input-placeholder-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --interactive-accent: var(--color-accent, rgb(140, 108, 145));
  --interactive-accent-hover: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) - 10%)
  );
  --light: var(--background-primary, var(--shade-0, rgb(244, 226, 205)));
  --lightgray: var(--background-secondary, var(--shade-3, rgba(0, 0, 0, 0.03)));
  --line-height: 1.5;
  --line-width: 42rem;
  --link-color: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --link-color-hover: var(--text-accent-hover, hsl(
    258,
    88%,
    56%
  ));
  --link-external-color: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --link-external-color-hover: var(--text-accent-hover, hsl(
    258,
    88%,
    56%
  ));
  --link-unresolved-color: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --list-marker-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --list-marker-color-collapsed: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --list-marker-color-hover: var(--text-muted, rgba(0, 0, 0, 0.5));
  --max-width: 100%;
  --menu-background: var(--background-secondary, rgba(0, 0, 0, 0.03));
  --menu-border-color: var(--background-modifier-border-hover, rgba(0, 0, 0, 0.2));
  --metadata-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --metadata-divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --metadata-input-font: var(--font-interface, "Petrona", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, rgba(0, 0, 0, 0.9));
  --metadata-label-font: var(--font-interface, "Petrona", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --metadata-label-text-color-hover: var(--text-muted, rgba(0, 0, 0, 0.5));
  --modal-background: var(--background-primary, rgb(244, 226, 205));
  --nav-collapse-icon-color: var(--collapse-icon-color, rgba(0, 0, 0, 0.3));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(0, 0, 0, 0.3));
  --nav-heading-color: var(--text-normal, rgba(0, 0, 0, 0.9));
  --nav-heading-color-collapsed: var(--text-faint, rgba(0, 0, 0, 0.3));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(0, 0, 0, 0.5));
  --nav-heading-color-hover: var(--text-normal, rgba(0, 0, 0, 0.9));
  --nav-item-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --nav-item-color-active: var(--text-normal, rgba(0, 0, 0, 0.9));
  --nav-item-color-highlighted: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --nav-item-color-hover: var(--text-normal, rgba(0, 0, 0, 0.9));
  --nav-item-color-selected: var(--text-normal, rgba(0, 0, 0, 0.9));
  --nav-tag-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --nav-tag-color-active: var(--text-muted, rgba(0, 0, 0, 0.5));
  --nav-tag-color-hover: var(--text-muted, rgba(0, 0, 0, 0.5));
  --nested-padding: 3.5%;
  --normal-weight: 400;
  --opacity-translucency: 1;
  --pdf-background: var(--background-primary, rgb(244, 226, 205));
  --pdf-page-background: var(--background-primary, rgb(244, 226, 205));
  --pdf-sidebar-background: var(--background-primary, rgb(244, 226, 205));
  --pill-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgba(0, 0, 0, 0.2));
  --pill-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --pill-color-hover: var(--text-normal, rgba(0, 0, 0, 0.9));
  --pill-color-remove: var(--text-faint, rgba(0, 0, 0, 0.3));
  --pill-color-remove-hover: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --preview-font-features: var(--editor-font-features, "");
  --preview-font-size: var(--editor-font-size, 18px);
  --preview-font-weight: var(--editor-font-weight, 400);
  --preview-line-height: var(--editor-line-height, 1.88889);
  --preview-line-height-rem: calc(var(--preview-line-height)*1rem);
  --prompt-background: var(--background-primary, rgb(244, 226, 205));
  --quote-opening-modifier: var(--shade-70, rgba(0, 0, 0, 0.7));
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(244, 226, 205) 65%, transparent) linear-gradient(rgb(244, 226, 205), color-mix(in srgb, rgb(244, 226, 205) 65%, transparent)));
  --rem: 18px;
  --ribbon-background: var(--background-secondary, rgba(0, 0, 0, 0.03));
  --ribbon-background-collapsed: var(--background-primary, rgb(244, 226, 205));
  --scale-small: 90;
  --search-clear-button-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --search-icon-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --search-result-background: var(--background-primary, rgb(244, 226, 205));
  --secondary: var(--text-accent, hsl(var(--accent-hsl)));
  --setting-group-heading-color: var(--text-normal, rgba(0, 0, 0, 0.9));
  --setting-items-background: var(--background-primary-alt, rgba(0, 0, 0, 0.03));
  --setting-items-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --shade-0: rgb(var(--background-rgb));
  --shade-10: rgba(var(--foreground-rgb), 0.1);
  --shade-2: rgba(var(--foreground-rgb), 0.02);
  --shade-20: rgba(var(--foreground-rgb), 0.2);
  --shade-3: rgba(var(--foreground-rgb), 0.03);
  --shade-30: rgba(var(--foreground-rgb), 0.3);
  --shade-40: rgba(var(--foreground-rgb), 0.4);
  --shade-5: rgba(var(--foreground-rgb), 0.05);
  --shade-50: rgba(var(--foreground-rgb), 0.5);
  --shade-60: rgba(var(--foreground-rgb), 0.6);
  --shade-70: rgba(var(--foreground-rgb), 0.7);
  --shade-80: rgba(var(--foreground-rgb), 0.8);
  --shade-90: rgba(var(--foreground-rgb), 0.9);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(0, 0, 0, 0.5));
  --shiki-code-background: var(--code-background, rgba(0, 0, 0, 0.03));
  --shiki-code-comment: var(--text-faint, rgba(0, 0, 0, 0.3));
  --shiki-code-function: var(--color-green, rgb(80, 193, 178));
  --shiki-code-normal: var(--text-muted, rgba(0, 0, 0, 0.5));
  --shiki-code-punctuation: var(--text-muted, rgba(0, 0, 0, 0.5));
  --shiki-code-value: var(--color-purple, rgb(140, 108, 145));
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --shiki-gutter-text-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(0, 0, 0, 0.5));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(0, 0, 0, 0.5));
  --shiki-terminal-dots-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgba(0, 0, 0, 0.2));
  --slider-track-background: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --status-bar-background: var(--background-secondary, rgba(0, 0, 0, 0.03));
  --status-bar-border-color: var(--divider-color, rgba(0, 0, 0, 0.2));
  --status-bar-text-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --strong-weight: 600;
  --suggestion-background: var(--background-primary, rgb(244, 226, 205));
  --sync-avatar-color-1: var(--color-red, rgb(175, 62, 77));
  --sync-avatar-color-4: var(--color-green, rgb(80, 193, 178));
  --sync-avatar-color-6: var(--color-blue, rgb(28, 129, 176));
  --sync-avatar-color-7: var(--color-purple, rgb(140, 108, 145));
  --tab-background-active: var(--background-primary, rgb(244, 226, 205));
  --tab-container-background: var(--background-secondary, rgba(0, 0, 0, 0.03));
  --tab-divider-color: var(--background-modifier-border-hover, rgba(0, 0, 0, 0.2));
  --tab-outline-color: var(--divider-color, rgba(0, 0, 0, 0.2));
  --tab-switcher-background: var(--background-secondary, rgba(0, 0, 0, 0.03));
  --tab-text-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --tab-text-color-active: var(--text-muted, rgba(0, 0, 0, 0.5));
  --tab-text-color-focused: var(--text-muted, rgba(0, 0, 0, 0.5));
  --tab-text-color-focused-active: var(--text-muted, rgba(0, 0, 0, 0.5));
  --tab-text-color-focused-active-current: var(--text-normal, rgba(0, 0, 0, 0.9));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --table-add-button-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --table-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(140, 108, 145));
  --table-drag-handle-color: var(--text-faint, rgba(0, 0, 0, 0.3));
  --table-header-border-color: var(--table-border-color, rgba(0, 0, 0, 0.2));
  --table-header-color: var(--text-normal, rgba(0, 0, 0, 0.9));
  --table-selection-border-color: var(--interactive-accent, rgb(140, 108, 145));
  --tag-color: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --tag-color-hover: var(--text-accent, hsl(316.9, 15.4%, 40.8%));
  --tertiary: var(--text-accent-hover, hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) - 10%)
  ));
  --text: "Quicksand";
  --text-accent: hsl(var(--accent-hsl));
  --text-accent-hover: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) - 10%)
  );
  --text-editor: "Petrona";
  --text-error: var(--color-red, rgb(175, 62, 77));
  --text-faint: var(--shade-30, rgba(0, 0, 0, 0.3));
  --text-highlight-bg: rgba(var(--color-accent-rgb), 0.5);
  --text-highlight-bg-active: rgba(0, 0, 0, 0.1);
  --text-muted: var(--shade-50, rgba(0, 0, 0, 0.5));
  --text-normal: var(--shade-90, rgba(0, 0, 0, 0.9));
  --text-preview: var(--text-editor, "Petrona");
  --text-selection: var(--text-highlight-bg, rgba(140, 108, 145, 0.5));
  --text-success: var(--color-green, rgb(80, 193, 178));
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-accent-rgb), 0.5));
  --titlebar-background: var(--background-secondary, rgba(0, 0, 0, 0.03));
  --titlebar-background-focused: var(--background-secondary-alt, rgba(0, 0, 0, 0.03));
  --titlebar-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.2));
  --titlebar-text-color: var(--text-muted, rgba(0, 0, 0, 0.5));
  --titlebar-text-color-focused: var(--text-normal, rgba(0, 0, 0, 0.9));
  --vault-profile-color: var(--text-normal, rgba(0, 0, 0, 0.9));
  --vault-profile-color-hover: var(--vault-profile-color, rgba(0, 0, 0, 0.9));
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgba(0, 0, 0, 0.03));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0.03));
  color: rgba(0, 0, 0, 0.9);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(244, 226, 205));
  color: rgba(0, 0, 0, 0.9);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgba(0, 0, 0, 0.9);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgba(0, 0, 0, 0.03));
  background-color: var(--background-primary, rgb(244, 226, 205));
  border-left-color: rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.9);
}

html body html {
  --accent-d: calc(var(--accent-l) + 2%);
  --accent-h: 291.9;
  --accent-l: 49.6%;
  --accent-s: 14.6%;
  --bold-weight: 600;
  --border-width: 2px;
  --border-width-alt: 1px;
  --color-black: rgb(var(--color-black-rgb));
  --color-black-rgb: 0, 0, 0;
  --color-side: rgb(var(--color-side-rgb));
  --color-side-rgb: 145, 136, 125;
  --color-white: rgb(var(--color-white-rgb));
  --color-white-rgb: 244, 226, 205;
  --cursor: pointer;
  --default-font: "Petrona";
  --editor-font-features: "";
  --editor-font-size: 18px;
  --editor-font-weight: 400;
  --editor-line-height: 1.88889;
  --font-monospace: "JetBrains Mono";
  --font-normal: 16px;
  --font-small: 14px;
  --font-smaller: 11px;
  --font-smallest: 10px;
  --h1-line-height: 1.4;
  --h1-margin-bottom: 1;
  --h1-margin-top: 3;
  --h1-size: 2.5em;
  --h1-style: normal;
  --h1-weight: 500;
  --h2-line-height: 1.4;
  --h2-margin-bottom: 13px;
  --h2-margin-top: 2.25;
  --h2-size: 1.9em;
  --h2-style: normal;
  --h2-weight: 500;
  --h3-line-height: 1.4;
  --h3-margin-bottom: 0.5;
  --h3-margin-top: 1.75;
  --h3-size: 1.7em;
  --h3-style: normal;
  --h3-weight: 500;
  --h4-line-height: 1.5;
  --h4-margin-bottom: 0.5;
  --h4-margin-top: 1.5;
  --h4-size: 1.3em;
  --h4-style: normal;
  --h4-weight: 500;
  --h5-line-height: 1.5;
  --h5-margin-bottom: 0.5;
  --h5-margin-top: 1.5;
  --h5-size: 1em;
  --h5-style: normal;
  --h5-weight: 500;
  --h6-line-height: 1.5;
  --h6-margin-bottom: 0.5;
  --h6-margin-top: 1.5;
  --h6-size: 1em;
  --h6-style: italic;
  --h6-weight: 500;
  --header-width: 42px;
  --hr-sym: " // ";
  --icon-muted: 0.4;
  --line-height: 1.5;
  --line-width: 42rem;
  --max-width: 100%;
  --nested-padding: 3.5%;
  --normal-weight: 400;
  --radius-l: 25px;
  --radius-m: 8px;
  --radius-s: 4px;
  --radius-xl: 25px;
  --rem: 18px;
  --scale-small: 90;
  --strong-weight: var(--bold-weight, 600);
  --text: "Quicksand";
  --text-editor: "Petrona";
  --titlebar-height: 28px;
  font-size: var(--rem, 16px);
  font-weight: var(--normal-weight, 400);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--color-blue, rgb(28, 129, 176));
  font-family: Petrona;
  font-weight: var(--strong-weight, 600);
  outline: rgb(28, 129, 176) none 0px;
  text-decoration-color: rgb(28, 129, 176);
}

html body .markdown-rendered p > em, html em {
  color: var(--color-red, rgb(175, 62, 77));
  font-family: Petrona;
  font-weight: 700;
  outline: rgb(175, 62, 77) none 0px;
  text-decoration-color: rgb(175, 62, 77);
}

html body .markdown-rendered p > i, html i {
  color: var(--color-red, rgb(175, 62, 77));
  font-family: Petrona;
  font-weight: 700;
  outline: rgb(175, 62, 77) none 0px;
  text-decoration-color: rgb(175, 62, 77);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--color-blue, rgb(28, 129, 176));
  font-family: Petrona;
  font-weight: var(--strong-weight, 600);
  outline: rgb(28, 129, 176) none 0px;
  text-decoration-color: rgb(28, 129, 176);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(140, 108, 145, 0.5));
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
  font-family: Petrona;
  outline: rgba(0, 0, 0, 0.9) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body del {
  color: rgba(0, 0, 0, 0.9);
  font-family: Petrona;
  outline: rgba(0, 0, 0, 0.9) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body h1.article-title {
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
  font-size: 14px;
  font-weight: 500;
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(244, 226, 205);
  border-color: rgba(0, 0, 0, 0.4);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(120, 88, 111));
  border-color: rgba(0, 0, 0, 0);
}

html body p {
  color: var(--text-muted, rgba(0, 0, 0, 0.5));
  font-family: Quicksand;
  outline: rgba(0, 0, 0, 0.5) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.5);
}`,
    links: `html body a.external-link, html footer a {
  --accent-h: 258;
  --accent-l: 66%;
  --accent-s: 88%;
  --background-match-highlight: hsla(316.9, 15.4%, 40.8%, 0.2);
  --background-modifier-accent: hsl(
    258,
    88%,
    76%
  );
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(0, 0, 0, 0.2);
  --background-modifier-border-focus: rgba(0, 0, 0, 0.2);
  --background-modifier-border-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-error: rgb(175, 62, 77);
  --background-modifier-error-hover: rgb(175, 62, 77);
  --background-modifier-error-rgb: 175, 62, 77;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: rgb(80, 193, 178);
  --background-modifier-success-rgb: 80, 193, 178;
  --background-primary: rgb(244, 226, 205);
  --background-primary-alt: rgba(0, 0, 0, 0.03);
  --background-rgb: 244, 226, 205;
  --background-secondary: rgba(0, 0, 0, 0.03);
  --background-secondary-alt: rgba(0, 0, 0, 0.03);
  --background-tertiary: rgba(0, 0, 0, 0.03);
  --blockquote-border-color: rgb(140, 108, 145);
  --blur-background: color-mix(in srgb, rgb(244, 226, 205) 65%, transparent) linear-gradient(rgb(244, 226, 205), color-mix(in srgb, rgb(244, 226, 205) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --border-width: 1px;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 175, 62, 77;
  --callout-default: 28, 129, 176;
  --callout-error: 175, 62, 77;
  --callout-example: 140, 108, 145;
  --callout-fail: 175, 62, 77;
  --callout-important: 0, 191, 188;
  --callout-info: 28, 129, 176;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 80, 193, 178;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 28, 129, 176;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(244, 226, 205);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: rgba(0, 0, 0, 0.9);
  --checkbox-border-color: rgba(0, 0, 0, 0.3);
  --checkbox-border-color-hover: rgba(0, 0, 0, 0.5);
  --checkbox-color: rgb(140, 108, 145);
  --checkbox-color-hover: hsl(
    258,
    88%,
    56%
  );
  --checkbox-marker-color: rgb(244, 226, 205);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: rgba(0, 0, 0, 0.5);
  --clickable-icon-radius: 4px;
  --code-background: rgba(0, 0, 0, 0.03);
  --code-border-color: rgba(0, 0, 0, 0.2);
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: rgba(0, 0, 0, 0.3);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: rgba(0, 0, 0, 0.9);
  --code-operator: rgb(175, 62, 77);
  --code-property: #00bfbc;
  --code-punctuation: rgba(0, 0, 0, 0.5);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(80, 193, 178);
  --code-tag: rgb(175, 62, 77);
  --code-value: rgb(140, 108, 145);
  --collapse-icon-color: rgba(0, 0, 0, 0.3);
  --collapse-icon-color-collapsed: hsl(316.9, 15.4%, 40.8%);
  --color-accent: rgb(140, 108, 145);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-accent-rgb: 140, 108, 145;
  --color-blue: rgb(28, 129, 176);
  --color-green: rgb(80, 193, 178);
  --color-purple: rgb(140, 108, 145);
  --color-red: rgb(175, 62, 77);
  --cursor: default;
  --divider-color: rgba(0, 0, 0, 0.2);
  --divider-color-hover: rgb(140, 108, 145);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --editor-line-height-rem: 1.88889rem;
  --editor-line-height-small: 1.7;
  --editor-line-height-small-rem: 1.7rem;
  --flair-background: #ffffff;
  --flair-color: rgba(0, 0, 0, 0.9);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', '??', "Petrona", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal: 400;
  --font-print: '??', '??', '??', 'Arial';
  --font-small: 0.933em;
  --font-smaller: 0.875em;
  --font-smallest: 0.8em;
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--link-weight, 400);
  --foreground-rgb: 0, 0, 0;
  --graph-line: #d4d4d4;
  --graph-node: rgba(0, 0, 0, 0.5);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(316.9, 15.4%, 40.8%);
  --graph-node-tag: rgb(80, 193, 178);
  --graph-node-unresolved: rgba(0, 0, 0, 0.3);
  --graph-text: rgba(0, 0, 0, 0.9);
  --h1-line-height: 1.2;
  --h1-size: 1.618em;
  --h2-line-height: 1.2;
  --h2-size: 1.462em;
  --h3-line-height: 1.3;
  --h3-size: 1.318em;
  --h4-line-height: 1.4;
  --h4-size: 1.188em;
  --h5-size: 1.076em;
  --h6-style: normal;
  --heading-formatting: rgba(0, 0, 0, 0.3);
  --heading-spacing: 2.5rem;
  --hr-color: rgba(0, 0, 0, 0.2);
  --interactive-accent: rgb(140, 108, 145);
  --interactive-accent-hover: hsl(
    258,
    88%,
    56%
  );
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(316.9, 15.4%, 40.8%);
  --link-color-hover: hsl(
    258,
    88%,
    56%
  );
  --link-external-color: hsl(316.9, 15.4%, 40.8%);
  --link-external-color-hover: hsl(
    258,
    88%,
    56%
  );
  --link-unresolved-color: hsl(316.9, 15.4%, 40.8%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgba(0, 0, 0, 0.03);
  --menu-border-color: rgba(0, 0, 0, 0.2);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: rgb(244, 226, 205);
  --pdf-page-background: rgb(244, 226, 205);
  --pdf-sidebar-background: rgb(244, 226, 205);
  --popover-font-size: 16px;
  --preview-font-features: "";
  --preview-font-size: 18px;
  --preview-font-weight: 400;
  --preview-line-height: 1.88889;
  --preview-line-height-rem: 1.88889rem;
  --quote-opening-modifier: rgba(0, 0, 0, 0.7);
  --radius-l: 12px;
  --radius-xl: 16px;
  --raised-background: color-mix(in srgb, rgb(244, 226, 205) 65%, transparent) linear-gradient(rgb(244, 226, 205), color-mix(in srgb, rgb(244, 226, 205) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --raised-shadow: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent;
  --resizer-size: 20px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: rgba(0, 0, 0, 0.5);
  --search-icon-color: rgba(0, 0, 0, 0.5);
  --search-result-background: rgb(244, 226, 205);
  --setting-group-heading-color: rgba(0, 0, 0, 0.9);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgba(0, 0, 0, 0.03);
  --setting-items-border-color: rgba(0, 0, 0, 0.2);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shade-0: rgb(244, 226, 205);
  --shade-10: rgba(0, 0, 0, 0.1);
  --shade-2: rgba(0, 0, 0, 0.02);
  --shade-20: rgba(0, 0, 0, 0.2);
  --shade-3: rgba(0, 0, 0, 0.03);
  --shade-30: rgba(0, 0, 0, 0.3);
  --shade-40: rgba(0, 0, 0, 0.4);
  --shade-5: rgba(0, 0, 0, 0.05);
  --shade-50: rgba(0, 0, 0, 0.5);
  --shade-60: rgba(0, 0, 0, 0.6);
  --shade-70: rgba(0, 0, 0, 0.7);
  --shade-80: rgba(0, 0, 0, 0.8);
  --shade-90: rgba(0, 0, 0, 0.9);
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --shadow-xs: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent;
  --shiki-active-tab-border-color: rgba(0, 0, 0, 0.5);
  --shiki-code-background: rgba(0, 0, 0, 0.03);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgba(0, 0, 0, 0.3);
  --shiki-code-function: rgb(80, 193, 178);
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: rgba(0, 0, 0, 0.5);
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: rgba(0, 0, 0, 0.5);
  --shiki-code-string: #e0ac00;
  --shiki-code-value: rgb(140, 108, 145);
  --shiki-gutter-border-color: rgba(0, 0, 0, 0.2);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgba(0, 0, 0, 0.3);
  --shiki-gutter-text-color-highlight: rgba(0, 0, 0, 0.5);
  --shiki-highlight-green: rgba(80, 193, 178, 0.5);
  --shiki-highlight-green-background: rgba(80, 193, 178, 0.1);
  --shiki-highlight-neutral: rgba(0, 0, 0, 0.5);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(175, 62, 77, 0.5);
  --shiki-highlight-red-background: rgba(175, 62, 77, 0.1);
  --shiki-terminal-dots-color: rgba(0, 0, 0, 0.3);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(244, 226, 205);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(175, 62, 77);
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: rgb(80, 193, 178);
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: rgb(28, 129, 176);
  --sync-avatar-color-7: rgb(140, 108, 145);
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgb(244, 226, 205);
  --tab-divider-color: rgba(0, 0, 0, 0.2);
  --tab-font-size: 13px;
  --tab-outline-color: rgba(0, 0, 0, 0.2);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgba(0, 0, 0, 0.03);
  --tab-switcher-menubar-background: linear-gradient(to top, rgba(0, 0, 0, 0.03), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(140, 108, 145);
  --tab-text-color: rgba(0, 0, 0, 0.3);
  --tab-text-color-active: rgba(0, 0, 0, 0.5);
  --tab-text-color-focused: rgba(0, 0, 0, 0.5);
  --tab-text-color-focused-active: rgba(0, 0, 0, 0.5);
  --tab-text-color-focused-active-current: rgba(0, 0, 0, 0.9);
  --tab-text-color-focused-highlighted: hsl(316.9, 15.4%, 40.8%);
  --table-add-button-border-color: rgba(0, 0, 0, 0.2);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(0, 0, 0, 0.2);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgb(140, 108, 145);
  --table-drag-handle-color: rgba(0, 0, 0, 0.3);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(0, 0, 0, 0.2);
  --table-header-border-width: 1px;
  --table-header-color: rgba(0, 0, 0, 0.9);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: rgb(140, 108, 145);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(316.9, 15.4%, 40.8%);
  --tag-color-hover: hsl(316.9, 15.4%, 40.8%);
  --tag-size: 0.875em;
  --text-accent: hsl(316.9, 15.4%, 40.8%);
  --text-accent-hover: hsl(
    258,
    88%,
    56%
  );
  --text-error: rgb(175, 62, 77);
  --text-faint: rgba(0, 0, 0, 0.3);
  --text-highlight-bg: rgba(140, 108, 145, 0.5);
  --text-muted: rgba(0, 0, 0, 0.5);
  --text-normal: rgba(0, 0, 0, 0.9);
  --text-preview: "Petrona";
  --text-selection: rgba(140, 108, 145, 0.5);
  --text-success: rgb(80, 193, 178);
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --zoom-multiplier: 1;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0.2);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0) 0px 3px 0px 0px;
  color: var(--link-external-color, rgba(0, 0, 0, 0.2));
  content: "\\e917";
  font-family: boxicons;
  font-size: 16.2px;
  font-weight: var(--link-weight, 400);
  line-height: 16.2px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(120, 88, 111) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: var(--interactive-accent, rgb(120, 88, 111));
  transform: matrix(-0.707107, 0.707107, -0.707107, -0.707107, 0, 0);
  transition: box-shadow 0.1s ease-out;
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  box-shadow: rgba(0, 0, 0, 0) 0px 3px 0px 0px;
  color: var(--link-color, rgb(120, 88, 111));
  font-family: Petrona;
  outline: rgb(120, 88, 111) none 0px;
  text-decoration-color: rgb(120, 88, 111);
  transition: box-shadow 0.1s ease-out;
}

html body a.internal-link.broken {
  box-shadow: rgba(0, 0, 0, 0) 0px 3px 0px 0px;
  color: var(--link-unresolved-color, rgb(120, 88, 111));
  font-family: Petrona;
  outline: rgb(120, 88, 111) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: box-shadow 0.1s ease-out;
}`,
    lists: `html body dd {
  color: rgba(0, 0, 0, 0.9);
}

html body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

html body dt {
  color: rgba(0, 0, 0, 0.9);
}

html body ol > li {
  color: rgba(0, 0, 0, 0.9);
}

html body ul > li {
  color: rgba(0, 0, 0, 0.9);
}

html body ul.overflow {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgba(0, 0, 0, 0.3));
}

html body blockquote {
  background-color: var(--shade-10, rgba(0, 0, 0, 0.1));
  font-family: Petrona;
  font-style: var(--blockquote-font-style, italic);
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}

html body table {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.2);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgba(0, 0, 0, 0.9);
  font-family: Petrona;
  margin-bottom: var(--editor-line-height-rem, 0px);
  margin-left: 185.031px;
  margin-right: 185.031px;
  width: 203.359px;
}

html body td {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0.2);
  color: var(--table-text-color, rgba(0, 0, 0, 0.9));
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  text-align: center;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html body th {
  background-color: var(--shade-20, rgba(0, 0, 0, 0.2));
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.9);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgba(0, 0, 0, 0.9));
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  text-align: center;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html body thead {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
}

html body tr {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
}`,
    code: `html body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgba(0, 0, 0, 0.5));
  font-family: var(--ec-codeFontFml, "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html body pre:has(> code) {
  background-color: var(--code-background, rgba(0, 0, 0, 0.03));
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
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}

html body figcaption {
  color: var(--text-muted, rgba(0, 0, 0, 0.9));
  font-family: "??", "??", Petrona, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}

html body figure {
  --code-background: var(--ec-frm-edBg, rgba(0, 0, 0, 0.03));
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}

html body img {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body video {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgba(0, 0, 0, 0.03));
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
}

html body .footnotes {
  border-top-color: rgba(0, 0, 0, 0.9);
  color: rgba(0, 0, 0, 0.9);
}

html body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgb(140, 108, 145);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}

html body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0.4);
  border-left-color: rgba(0, 0, 0, 0.4);
  border-right-color: rgba(0, 0, 0, 0.4);
  border-top-color: rgba(0, 0, 0, 0.4);
  margin-right: 6px;
}

html body li.task-list-item[data-task="#"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="$"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="%"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html li.task-list-item[data-task="body"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="'"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="+"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task=", html "] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="."] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="0"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="1"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="2"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="3"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="4"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="5"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="6"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="7"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="8"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="9"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task=":"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task=";"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="<"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="="] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="@"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="A"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="B"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="C"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="D"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="E"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="F"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="G"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="H"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="J"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="K"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="L"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="M"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="N"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="O"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="P"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="Q"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="R"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="T"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="U"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="V"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="W"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="X"] {
  color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task="Y"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="Z"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="_"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="\`"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="a"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="e"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="g"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="h"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="j"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="m"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="n"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="o"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="q"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="r"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="s"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="t"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="v"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="x"] {
  color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task="y"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="z"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="|"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="~"] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task='!'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='*'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='/'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='>'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='?'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='I'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='S'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='b'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='c'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='d'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='f'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='i'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='k'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='l'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='p'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='u'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task='w'] {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: line-through;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 226, 205);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 226, 205);
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
  background-color: rgb(28, 129, 176);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 62, 77);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 62, 77);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 62, 77);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 62, 77);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(28, 129, 176);
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
  background-color: rgb(140, 108, 145);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 62, 77);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(80, 193, 178);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(80, 193, 178);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(80, 193, 178);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 175, 62, 77);
  background: rgba(175, 62, 77, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(175, 62, 77, 0.25);
  border-left-color: rgba(175, 62, 77, 0.25);
  border-right-color: rgba(175, 62, 77, 0.25);
  border-top-color: rgba(175, 62, 77, 0.25);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 175, 62, 77);
  background: rgba(175, 62, 77, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(175, 62, 77, 0.25);
  border-left-color: rgba(175, 62, 77, 0.25);
  border-right-color: rgba(175, 62, 77, 0.25);
  border-top-color: rgba(175, 62, 77, 0.25);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 140, 108, 145);
  background: rgba(140, 108, 145, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(140, 108, 145, 0.25);
  border-left-color: rgba(140, 108, 145, 0.25);
  border-right-color: rgba(140, 108, 145, 0.25);
  border-top-color: rgba(140, 108, 145, 0.25);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 175, 62, 77);
  background: rgba(175, 62, 77, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(175, 62, 77, 0.25);
  border-left-color: rgba(175, 62, 77, 0.25);
  border-right-color: rgba(175, 62, 77, 0.25);
  border-top-color: rgba(175, 62, 77, 0.25);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 28, 129, 176);
  background: rgba(28, 129, 176, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(28, 129, 176, 0.25);
  border-left-color: rgba(28, 129, 176, 0.25);
  border-right-color: rgba(28, 129, 176, 0.25);
  border-top-color: rgba(28, 129, 176, 0.25);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 28, 129, 176);
  background: rgba(28, 129, 176, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(28, 129, 176, 0.25);
  border-left-color: rgba(28, 129, 176, 0.25);
  border-right-color: rgba(28, 129, 176, 0.25);
  border-top-color: rgba(28, 129, 176, 0.25);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 80, 193, 178);
  background: rgba(80, 193, 178, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(80, 193, 178, 0.25);
  border-left-color: rgba(80, 193, 178, 0.25);
  border-right-color: rgba(80, 193, 178, 0.25);
  border-top-color: rgba(80, 193, 178, 0.25);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 28, 129, 176);
  background: rgba(28, 129, 176, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(28, 129, 176, 0.25);
  border-left-color: rgba(28, 129, 176, 0.25);
  border-right-color: rgba(28, 129, 176, 0.25);
  border-top-color: rgba(28, 129, 176, 0.25);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgba(0, 0, 0, 0.9);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 28, 129, 176;
  border-bottom-color: rgb(28, 129, 176);
  border-left-color: rgb(28, 129, 176);
  border-right-color: rgb(28, 129, 176);
  border-top-color: rgb(28, 129, 176);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(28, 129, 176));
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgba(0, 0, 0, 0.9);
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
  background-color: var(--shade-10, rgba(0, 0, 0, 0.1));
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
  font-family: var(--text, Quicksand);
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(244, 226, 205));
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.2) 0px 20px 30px 0px);
}

html body .search > .search-container > .search-space > * {
  color: rgba(0, 0, 0, 0.9);
  font-family: Petrona;
  outline: rgba(0, 0, 0, 0.9) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.9);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(0, 0, 0, 0.9);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgba(0, 0, 0, 0.9);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--shade-20, rgba(0, 0, 0, 0.2));
  color: rgba(0, 0, 0, 0.9);
}

html body .search > .search-container > .search-space > input {
  background-color: var(--shade-10, rgba(0, 0, 0, 0.1));
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: var(--shade-20, rgba(0, 0, 0, 0.2));
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
  color: rgba(0, 0, 0, 0.9);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--shade-20, rgba(0, 0, 0, 0.2));
  color: rgba(0, 0, 0, 0.9);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, hsl(316.9, 15.4%, 40.8%));
  --pill-color-hover: var(--tag-color-hover, hsl(316.9, 15.4%, 40.8%));
  --pill-color-remove: var(--tag-color, hsl(316.9, 15.4%, 40.8%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(316.9, 15.4%, 40.8%));
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
  font-family: "??", "??", Petrona, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(120, 88, 111);
}

html body h1 {
  --font-weight: var(--h1-weight, 500);
  color: var(--h1-color, rgba(0, 0, 0, 0.9));
  font-family: var(--h1-font, Petrona);
}

html body h1.article-title {
  color: var(--inline-title-color, rgba(0, 0, 0, 0.9));
  font-size: var(--inline-title-size, 29.124px);
  font-weight: var(--inline-title-weight, 500);
}

html body h2 {
  --font-weight: var(--h2-weight, 500);
  color: var(--h2-color, rgba(0, 0, 0, 0.9));
  font-family: var(--h2-font, Petrona);
}

html body h2.page-title, html h2.page-title a {
  color: var(--inline-title-color, rgba(0, 0, 0, 0.9));
  font-family: var(--inline-title-font, Petrona);
}

html body h3 {
  --font-weight: var(--h3-weight, 500);
  color: var(--h3-color, rgba(0, 0, 0, 0.9));
  font-family: var(--h3-font, Petrona);
}

html body h4 {
  --font-weight: var(--h4-weight, 500);
  color: var(--h4-color, rgba(0, 0, 0, 0.9));
  font-family: var(--h4-font, Petrona);
}

html body h5 {
  --font-weight: var(--h5-weight, 500);
  color: var(--h5-color, rgba(0, 0, 0, 0.9));
  font-family: var(--h5-font, Petrona);
}

html body h6 {
  --font-weight: var(--h6-weight, 500);
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
  font-family: var(--h6-font, Petrona);
}

html body hr {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  margin-bottom: 30px;
  margin-top: 25px;
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 28, 129, 176);
  border-bottom-color: rgba(28, 129, 176, 0.25);
  border-left-color: rgba(28, 129, 176, 0.25);
  border-right-color: rgba(28, 129, 176, 0.25);
  border-top-color: rgba(28, 129, 176, 0.25);
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
  font-family: Quicksand;
  font-weight: var(--nav-item-weight, 500);
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
  font-family: Quicksand;
  font-weight: var(--nav-item-weight, 500);
}`,
    toc: `html body details.toc summary::marker {
  color: rgba(0, 0, 0, 0.9);
}

html body li.depth-0 {
  font-weight: var(--nav-item-weight, 500);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: var(--text-muted, rgba(0, 0, 0, 0.5));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0.1));
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: var(--radius-m, 8px);
  color: var(--text-muted, rgba(0, 0, 0, 0.5));
  font-family: Quicksand;
}

html body footer ul li a {
  color: rgba(0, 0, 0, 0.5);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgba(0, 0, 0, 0.9);
  font-family: Quicksand;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
  color: rgba(0, 0, 0, 0.9);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(0, 0, 0, 0.9);
  font-family: Quicksand;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}

html body li.section-li > .section .meta {
  color: rgba(0, 0, 0, 0.9);
  font-family: Quicksand;
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
}

html body ul.section-ul {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: var(--icon-color, rgba(0, 0, 0, 0.5));
}

html body .darkmode svg {
  color: rgba(0, 0, 0, 0.5);
  fill: rgba(0, 0, 0, 0.5);
  stroke: rgba(0, 0, 0, 0.5);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgba(0, 0, 0, 0.3));
  font-family: "??", "??", Petrona, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgba(0, 0, 0, 0.9);
}

html body .canvas-node-content {
  color: rgba(0, 0, 0, 0.9);
}

html body .canvas-node-file {
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
}

html body .canvas-node-group {
  border-color: rgba(0, 0, 0, 0.9);
}

html body .canvas-sidebar {
  background-color: var(--background-primary, rgb(244, 226, 205));
  border-color: rgba(0, 0, 0, 0.9);
}`,
    bases: `html body .bases-table {
  border-color: rgba(0, 0, 0, 0.2);
}

html body .bases-table thead th {
  background-color: var(--shade-20, rgba(0, 0, 0, 0.2));
  border-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.9);
  color: var(--table-header-color, rgba(0, 0, 0, 0.9));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: var(--text-muted, rgba(0, 0, 0, 0.5));
  font-family: Petrona;
}

html body .metadata-properties {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  font-family: Petrona;
}

html body .note-properties {
  border-color: rgba(0, 0, 0, 0.2);
}

html body .note-properties-key {
  color: rgba(0, 0, 0, 0.5);
}

html body .note-properties-row {
  border-color: rgba(0, 0, 0, 0.5);
}

html body .note-properties-tags {
  --pill-color: var(--tag-color, hsl(316.9, 15.4%, 40.8%));
  --pill-color-hover: var(--tag-color-hover, hsl(316.9, 15.4%, 40.8%));
  --pill-color-remove: var(--tag-color, hsl(316.9, 15.4%, 40.8%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(316.9, 15.4%, 40.8%));
  border-radius: 31.5px;
  color: var(--pill-color, rgb(120, 88, 111));
}

html body .note-properties-value {
  color: rgba(0, 0, 0, 0.5);
}

html body div#quartz-root {
  background-color: var(--shade-20, rgba(0, 0, 0, 0.2));
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
}

html body ol.overflow {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgba(0, 0, 0, 0.9);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html body .stacked-page.active {
  border-color: rgba(0, 0, 0, 0.9);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
  color: rgba(0, 0, 0, 0.9);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0.1));
}

html body .page-header h2.page-title {
  color: var(--text-normal, rgba(0, 0, 0, 0.9));
  font-family: "??", "??", Petrona, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgba(0, 0, 0, 0.9);
}

html body details {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}

html body input[type=text] {
  background-color: var(--shade-10, rgba(0, 0, 0, 0.1));
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, rgba(0, 0, 0, 0.5));
  font-family: var(--text, Quicksand);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html body kbd {
  background-color: var(--code-background, rgba(0, 0, 0, 0.03));
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
  color: var(--code-normal, rgba(0, 0, 0, 0.9));
  font-size: var(--code-size, 15.75px);
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

html body progress {
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-left-color: rgba(0, 0, 0, 0.9);
  border-right-color: rgba(0, 0, 0, 0.9);
  border-top-color: rgba(0, 0, 0, 0.9);
}

html body sub {
  color: rgba(0, 0, 0, 0.9);
  font-size: 13.5px;
  vertical-align: baseline;
}

html body summary {
  color: rgba(0, 0, 0, 0.9);
}

html body sup {
  color: rgba(0, 0, 0, 0.9);
  font-size: 13.5px;
  vertical-align: baseline;
}

html body ul.tags > li {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--tag-color, rgb(120, 88, 111));
}`,
  },
};
