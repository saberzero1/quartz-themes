import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "california-coast",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "obsidian-california-coast-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-b: 255;
  --accent-d: 52%;
  --accent-g: 127;
  --accent-h: 210;
  --accent-hsl: var(--accent-h), var(--accent-s), var(--accent-d);
  --accent-r: 1;
  --accent-rgb: var(--accent-r), var(--accent-g), var(--accent-b);
  --background-match-highlight: hsla(var(--accent-hsl), 0.2);
  --background-modifier-accent: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-d) - 10%)
  );
  --background-modifier-border: var(--shade-plus-darker, rgba(255, 255, 255, 0.15));
  --background-modifier-border-focus: var(--shade-plus-darker, rgba(255, 255, 255, 0.15));
  --background-modifier-border-hover: var(--shade-plus-darker, rgba(255, 255, 255, 0.15));
  --background-modifier-cover: rgba(20, 20, 20, 0.6);
  --background-modifier-error: rgb(var(--red-rgb));
  --background-modifier-error-hover: rgb(var(--red-rgb));
  --background-modifier-error-rgb: var(--red-rgb, 255, 69, 58);
  --background-primary: var(--shade-0-opaque, rgb(30, 30, 30));
  --background-primary-alt: var(--shade-3-opaque, hsl(0, 0%, 14%));
  --background-rgb: 30, 30, 30;
  --background-secondary: var(--shade-3-opaque, hsl(0, 0%, 14%));
  --background-secondary-alt: var(--shade-3-opaque, hsl(0, 0%, 14%));
  --background-tertiary: var(--shade-3-opaque, hsl(0, 0%, 14%));
  --background-translucent: rgba(40, 40, 40, 0.6);
  --background-transparent: transparent;
  --bases-cards-background: var(--background-primary, rgb(30, 30, 30));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(0, 0%, 14%));
  --bases-embed-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --bases-group-heading-property-color: var(--text-muted, hsl(0, 0%, 46%));
  --bases-table-border-color: var(--table-border-color, rgba(255, 255, 255, 0.15));
  --bases-table-cell-background-active: var(--background-primary, rgb(30, 30, 30));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(0, 0%, 14%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(210, 88%, 66%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(0, 0%, 14%));
  --bases-table-header-background: var(--background-primary, rgb(30, 30, 30));
  --bases-table-header-color: var(--text-muted, hsl(0, 0%, 46%));
  --bases-table-summary-background: var(--background-primary, rgb(30, 30, 30));
  --blockquote-border-color: var(--interactive-accent, hsl(210, 88%, 52%));
  --blue-rgb: 10, 132, 255;
  --bodyFont: var(--font-text-theme, system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  --canvas-background: var(--background-primary, rgb(30, 30, 30));
  --canvas-card-label-color: var(--text-faint, hsl(0, 0%, 32%));
  --caret-color: var(--text-normal, hsl(0, 0%, 73%));
  --checkbox-border-color: var(--text-faint, hsl(0, 0%, 32%));
  --checkbox-border-color-hover: var(--text-muted, hsl(0, 0%, 46%));
  --checkbox-color: var(--interactive-accent, hsl(210, 88%, 52%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
    210,
    88%,
    37%
  ));
  --checkbox-marker-color: var(--background-primary, rgb(30, 30, 30));
  --checklist-done-color: var(--text-muted, hsl(0, 0%, 46%));
  --code-background: var(--background-primary-alt, hsl(0, 0%, 14%));
  --code-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --code-color: var(--text-normal, hsl(0, 0%, 73%));
  --code-comment: var(--text-faint, hsl(0, 0%, 32%));
  --code-normal: var(--text-normal, hsl(0, 0%, 73%));
  --code-punctuation: var(--text-muted, hsl(0, 0%, 46%));
  --collapse-icon-color: var(--text-faint, hsl(0, 0%, 32%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(210, 88%, 52%));
  --color-black-rgb: 0, 0, 0;
  --color-white-rgb: 255, 255, 255;
  --dark: var(--text-normal, var(--shade-90-opaque, hsl(0, 0%, 73%)));
  --dark-separator: hsl(0, 0%, 9%);
  --darkgray: var(--text-normal, var(--shade-90-opaque, hsl(0, 0%, 73%)));
  --default-font-smoothing: auto;
  --divider-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --divider-color-hover: var(--interactive-accent, hsl(210, 88%, 52%));
  --editor-font-features: "";
  --editor-font-size: var(--font-text-size, 18px);
  --editor-font-smoothing: auto;
  --editor-font-weight: 400;
  --editor-line-height: 1.88889;
  --editor-line-height-rem: calc(var(--editor-line-height)*1rem);
  --editor-line-height-small: calc(var(--editor-line-height)*var(--scale-small)/100);
  --editor-line-height-small-rem: calc(var(--editor-line-height-small)*1rem);
  --file-header-background: var(--background-primary, rgb(30, 30, 30));
  --file-header-background-focused: var(--background-primary, rgb(30, 30, 30));
  --file-header-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-color: var(--text-normal, hsl(0, 0%, 73%));
  --folder-b: 100%;
  --folder-h: 0deg;
  --folder-s: 100%;
  --font-interface-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  --font-mermaid: var(--font-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: Menlo, SFMono-Regular, Consolas, "Roboto Mono",
    monospace;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, rgba(255, 255, 255, 0.15));
  --footnote-id-color: var(--text-muted, hsl(0, 0%, 46%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(0, 0%, 32%));
  --foreground-rgb: 204, 204, 204;
  --graph-node: var(--text-muted, hsl(0, 0%, 46%));
  --graph-node-focused: var(--text-accent, hsl(210, 88%, 52%));
  --graph-node-unresolved: var(--text-faint, hsl(0, 0%, 32%));
  --graph-text: var(--text-normal, hsl(0, 0%, 73%));
  --gray: var(--text-muted, var(--shade-50-opaque, hsl(0, 0%, 46%)));
  --green-rgb: 50, 215, 75;
  --h1-line-height: 1.4;
  --h1-margin-bottom: 1;
  --h1-margin-top: 3;
  --h1-size: 1.602em;
  --h1-weight: 500;
  --h2-line-height: 1.4;
  --h2-margin-bottom: 0.5;
  --h2-margin-top: 2.25;
  --h2-size: 1.424em;
  --h2-weight: 500;
  --h3-line-height: 1.4;
  --h3-margin-bottom: 0.5;
  --h3-margin-top: 1.75;
  --h3-size: 1.266em;
  --h3-weight: 500;
  --h4-line-height: 1.5;
  --h4-margin-bottom: 0.5;
  --h4-margin-top: 1.5;
  --h4-size: 1.125em;
  --h4-weight: 500;
  --h5-margin-bottom: 0.5;
  --h5-margin-top: 1.5;
  --h5-size: 1em;
  --h5-weight: 500;
  --h6-margin-bottom: 0.5;
  --h6-margin-top: 1.5;
  --h6-style: italic;
  --h6-weight: 500;
  --header-editor-font: var(--font-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --header-width: 42px;
  --headerFont: var(--font-text-theme, system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  --heading-formatting: var(--text-faint, hsl(0, 0%, 32%));
  --hr-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --hr-spacing-bottom: calc(var(--editor-line-height-rem)*1.5);
  --hr-spacing-top: calc(var(--editor-line-height-rem)/2);
  --icon-color: var(--text-muted, hsl(0, 0%, 46%));
  --icon-color-active: var(--text-accent, hsl(210, 88%, 52%));
  --icon-color-focused: var(--text-normal, hsl(0, 0%, 73%));
  --icon-color-hover: var(--text-muted, hsl(0, 0%, 46%));
  --icon-hex: FFF;
  --icon-muted: 0.4;
  --indentation-guide: var(--shade-5, rgba(204, 204, 204, 0.05));
  --indentation-guide-active: rgba(var(--foreground-rgb), 0.15);
  --indigo-rgb: 94, 92, 230;
  --inline-title-line-height: var(--h1-line-height, 1.4);
  --inline-title-size: var(--h1-size, 1.602em);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, hsl(0, 0%, 32%));
  --input-placeholder-color: var(--text-faint, hsl(0, 0%, 32%));
  --interactive-accent: hsl(var(--accent-hsl));
  --interactive-accent-hover: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-d) - 15%)
  );
  --interactive-accent-hsl: var(--color-accent-hsl, 210, 88%, 66%);
  --interactive-accent-rgb: var(--accent-rgb, 1, 127, 255);
  --light: var(--background-primary, var(--shade-0-opaque, rgb(30, 30, 30)));
  --lightgray: var(--background-secondary, var(--shade-3-opaque, hsl(0, 0%, 14%)));
  --line-height: 1.5;
  --line-width: 600px;
  --link-color: var(--text-accent, hsl(210, 88%, 52%));
  --link-color-hover: var(--text-accent-hover, hsl(
    210,
    88%,
    64%
  ));
  --link-external-color: var(--text-accent, hsl(210, 88%, 52%));
  --link-external-color-hover: var(--text-accent-hover, hsl(
    210,
    88%,
    64%
  ));
  --link-unresolved-color: var(--text-accent, hsl(210, 88%, 52%));
  --list-marker-color: var(--text-faint, hsl(0, 0%, 32%));
  --list-marker-color-collapsed: var(--text-accent, hsl(210, 88%, 52%));
  --list-marker-color-hover: var(--text-muted, hsl(0, 0%, 46%));
  --max-width: 100%;
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --medium-weight: 500;
  --menu-background: var(--background-secondary, hsl(0, 0%, 14%));
  --menu-border-color: var(--background-modifier-border-hover, rgba(255, 255, 255, 0.15));
  --metadata-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --metadata-divider-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --metadata-input-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(0, 0%, 73%));
  --metadata-label-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(0, 0%, 46%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(0, 0%, 46%));
  --micro: 70px;
  --modal-background: var(--background-primary, rgb(30, 30, 30));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(0, 0%, 32%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(0, 0%, 32%));
  --nav-heading-color: var(--text-normal, hsl(0, 0%, 73%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(0, 0%, 32%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(0, 0%, 46%));
  --nav-heading-color-hover: var(--text-normal, hsl(0, 0%, 73%));
  --nav-item-color: var(--text-muted, hsl(0, 0%, 46%));
  --nav-item-color-active: var(--text-normal, hsl(0, 0%, 73%));
  --nav-item-color-highlighted: var(--text-accent, hsl(210, 88%, 52%));
  --nav-item-color-hover: var(--text-normal, hsl(0, 0%, 73%));
  --nav-item-color-selected: var(--text-normal, hsl(0, 0%, 73%));
  --nav-tag-color: var(--text-faint, hsl(0, 0%, 32%));
  --nav-tag-color-active: var(--text-muted, hsl(0, 0%, 46%));
  --nav-tag-color-hover: var(--text-muted, hsl(0, 0%, 46%));
  --nested-padding: 3.5%;
  --normal-weight: 400;
  --opacity-translucency: 1;
  --orange-rgb: 255, 159, 10;
  --pdf-background: var(--background-primary, rgb(30, 30, 30));
  --pdf-page-background: var(--background-primary, rgb(30, 30, 30));
  --pdf-sidebar-background: var(--background-primary, rgb(30, 30, 30));
  --pill-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgba(255, 255, 255, 0.15));
  --pill-color: var(--text-muted, hsl(0, 0%, 46%));
  --pill-color-hover: var(--text-normal, hsl(0, 0%, 73%));
  --pill-color-remove: var(--text-faint, hsl(0, 0%, 32%));
  --pill-color-remove-hover: var(--text-accent, hsl(210, 88%, 52%));
  --pink-rgb: 255, 0, 255;
  --preview-bullet-size-adjust: 100%;
  --preview-font: var(--font-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --preview-font-features: var(--editor-font-features, "");
  --preview-font-size: var(--editor-font-size, 16px);
  --preview-font-weight: var(--editor-font-weight, 400);
  --preview-line-height: var(--editor-line-height, 1.88889);
  --preview-line-height-rem: calc(var(--preview-line-height)*1rem);
  --prompt-background: var(--background-primary, rgb(30, 30, 30));
  --purple-rgb: 191, 90, 242;
  --quote-opening-modifier: var(--shade-70-opaque, hsl(0, 0%, 60%));
  --radius: 0px;
  --red-rgb: 255, 69, 58;
  --resize-handle-width: 2px;
  --ribbon-background: var(--background-secondary, hsl(0, 0%, 14%));
  --ribbon-background-collapsed: var(--background-primary, rgb(30, 30, 30));
  --scale-small: 90;
  --search-clear-button-color: var(--text-muted, hsl(0, 0%, 46%));
  --search-icon-color: var(--text-muted, hsl(0, 0%, 46%));
  --search-result-background: var(--background-primary, rgb(30, 30, 30));
  --secondary: var(--text-accent, hsl(var(--accent-hsl)));
  --setting-group-heading-color: var(--text-normal, hsl(0, 0%, 73%));
  --setting-items-background: var(--background-primary-alt, hsl(0, 0%, 14%));
  --setting-items-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --shade-0: rgb(var(--background-rgb));
  --shade-0-opaque: rgb(var(--background-rgb));
  --shade-10: rgba(var(--foreground-rgb), 0.1);
  --shade-10-opaque: hsl(0, 0%, 18%);
  --shade-2: rgba(var(--foreground-rgb), 0.02);
  --shade-2-opaque: hsl(0, 0%, 13%);
  --shade-20: rgba(var(--foreground-rgb), 0.2);
  --shade-20-opaque: hsl(0, 0%, 25%);
  --shade-3: rgba(var(--foreground-rgb), 0.03);
  --shade-3-opaque: hsl(0, 0%, 14%);
  --shade-30: rgba(var(--foreground-rgb), 0.3);
  --shade-30-opaque: hsl(0, 0%, 32%);
  --shade-40: rgba(var(--foreground-rgb), 0.4);
  --shade-40-opaque: hsl(0, 0%, 39%);
  --shade-5: rgba(var(--foreground-rgb), 0.05);
  --shade-5-opaque: hsl(0, 0%, 15%);
  --shade-50: rgba(var(--foreground-rgb), 0.5);
  --shade-50-opaque: hsl(0, 0%, 46%);
  --shade-60: rgba(var(--foreground-rgb), 0.6);
  --shade-60-opaque: hsl(0, 0%, 53%);
  --shade-70: rgba(var(--foreground-rgb), 0.7);
  --shade-70-opaque: hsl(0, 0%, 60%);
  --shade-80: rgba(var(--foreground-rgb), 0.8);
  --shade-80-opaque: hsl(0, 0%, 66%);
  --shade-90: rgba(var(--foreground-rgb), 0.9);
  --shade-90-opaque: hsl(0, 0%, 73%);
  --shade-plus-darker: rgba(255, 255, 255, 0.15);
  --shade-plus-darker-hsl: hsl(0, 0%, 16%);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(0, 0%, 46%));
  --shiki-code-background: var(--code-background, hsl(0, 0%, 14%));
  --shiki-code-comment: var(--text-faint, hsl(0, 0%, 32%));
  --shiki-code-normal: var(--text-muted, hsl(0, 0%, 46%));
  --shiki-code-punctuation: var(--text-muted, hsl(0, 0%, 46%));
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --shiki-gutter-text-color: var(--text-faint, hsl(0, 0%, 32%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(0, 0%, 46%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(0, 0%, 46%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(0, 0%, 32%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgba(255, 255, 255, 0.15));
  --slider-track-background: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --small: 200px;
  --small-med: 300px;
  --status-bar-background: var(--background-secondary, hsl(0, 0%, 14%));
  --status-bar-border-color: var(--divider-color, rgba(255, 255, 255, 0.15));
  --status-bar-text-color: var(--text-muted, hsl(0, 0%, 46%));
  --strong-weight: 600;
  --suggestion-background: var(--background-primary, rgb(30, 30, 30));
  --svg-l: 16px;
  --svg-m: 15px;
  --svg-s: 14px;
  --svg-xl: 18px;
  --svg-xs: 13px;
  --svg-xxl: 20px;
  --tab-background-active: var(--background-primary, rgb(30, 30, 30));
  --tab-container-background: var(--background-secondary, hsl(0, 0%, 14%));
  --tab-divider-color: var(--background-modifier-border-hover, rgba(255, 255, 255, 0.15));
  --tab-outline-color: var(--divider-color, rgba(255, 255, 255, 0.15));
  --tab-switcher-background: var(--background-secondary, hsl(0, 0%, 14%));
  --tab-text-color: var(--text-faint, hsl(0, 0%, 32%));
  --tab-text-color-active: var(--text-muted, hsl(0, 0%, 46%));
  --tab-text-color-focused: var(--text-muted, hsl(0, 0%, 46%));
  --tab-text-color-focused-active: var(--text-muted, hsl(0, 0%, 46%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(0, 0%, 73%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(210, 88%, 52%));
  --table-add-button-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --table-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(210, 88%, 52%));
  --table-drag-handle-color: var(--text-faint, hsl(0, 0%, 32%));
  --table-header-border-color: var(--table-border-color, rgba(255, 255, 255, 0.15));
  --table-header-color: var(--text-normal, hsl(0, 0%, 73%));
  --table-min-cell-width: 0px;
  --table-selection-border-color: var(--interactive-accent, hsl(210, 88%, 52%));
  --tag-color: var(--text-accent, hsl(210, 88%, 52%));
  --tag-color-hover: var(--text-accent, hsl(210, 88%, 52%));
  --tall: 700px;
  --teal-rgb: 100, 210, 255;
  --tertiary: var(--text-accent-hover, hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-d) + 12%)
  ));
  --text-accent: hsl(var(--accent-hsl));
  --text-accent-hover: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-d) + 12%)
  );
  --text-error: rgb(var(--red-rgb));
  --text-error-hover: rgb(var(--red-rgb));
  --text-faint: var(--shade-30-opaque, hsl(0, 0%, 32%));
  --text-highlight-bg-active: rgba(255, 255, 255, 0.1);
  --text-muted: var(--shade-50-opaque, hsl(0, 0%, 46%));
  --text-normal: var(--shade-90-opaque, hsl(0, 0%, 73%));
  --text-normal-bold: var(--shade-90-opaque, hsl(0, 0%, 73%));
  --text-normal-em: var(--shade-90-opaque, hsl(0, 0%, 73%));
  --text-selection: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-d) - 10%), 0.3);
  --tiny: 100px;
  --titleFont: var(--font-text-theme, system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  --titlebar-background: var(--background-secondary, hsl(0, 0%, 14%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(0, 0%, 14%));
  --titlebar-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.15));
  --titlebar-text-color: var(--text-muted, hsl(0, 0%, 46%));
  --titlebar-text-color-focused: var(--text-normal, hsl(0, 0%, 73%));
  --ui-font-size: 14px;
  --vault-profile-color: var(--text-normal, hsl(0, 0%, 73%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(0, 0%, 73%));
  --workspace-drawer-ribbon-width: 46px;
  --yellow-rgb: 255, 214, 10;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(36, 36, 36));
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(36, 36, 36));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body html {
  --accent-d: calc(var(--accent-l) + 2%);
  --accent-h: 211;
  --accent-l: 50%;
  --accent-s: 100%;
  --bold-weight: 600;
  --color-black-rgb: 0, 0, 0;
  --color-white-rgb: 255, 255, 255;
  --cursor: pointer;
  --default-font-smoothing: auto;
  --editor-font-features: "";
  --editor-font-smoothing: auto;
  --editor-font-weight: 400;
  --editor-line-height: 1.88889;
  --header-width: 42px;
  --icon-muted: 0.4;
  --line-height: 1.5;
  --line-width: 600px;
  --max-width: 100%;
  --medium-weight: 500;
  --nested-padding: 3.5%;
  --normal-weight: 400;
  --preview-bullet-size-adjust: 100%;
  --radius-l: 10px;
  --radius-m: 6px;
  --radius-s: 4px;
  --radius-xl: 20px;
  --resize-handle-width: 2px;
  --scale-small: 90;
  --strong-weight: var(--bold-weight, 600);
  --table-min-cell-width: 0px;
  --titlebar-height: 28px;
  --ui-font-size: 14px;
  --workspace-drawer-ribbon-width: 46px;
  font-size: var(--ui-font-size, 16px);
  font-weight: var(--normal-weight, 400);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--strong-color, rgb(186, 186, 186));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--strong-weight, 600);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--em-color, rgb(186, 186, 186));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--em-color, rgb(186, 186, 186));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--strong-color, rgb(186, 186, 186));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--strong-weight, 600);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 177, 80, 0.3));
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body del {
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(186, 186, 186));
  font-size: var(--ui-font-size, 14px);
  font-weight: var(--medium-weight, 500);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(204, 204, 204, 0.05);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(25, 133, 240));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(117, 117, 117));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 117, 117) none 0px;
  text-decoration-color: rgb(117, 117, 117);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(25, 133, 240));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(25, 133, 240) none 0px;
  text-decoration-color: rgb(25, 133, 240);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(25, 133, 240));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(25, 133, 240) none 0px;
  text-decoration-color: rgb(25, 133, 240);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(25, 133, 240));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(25, 133, 240) none 0px;
  text-decoration: underline rgba(92, 168, 245, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(92, 168, 245, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 14.4px;
  margin-top: 14.4px;
}

html[saved-theme="dark"] body dt {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(82, 82, 82));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: var(--blockquote-font-style, italic);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body table {
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 576px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: var(--table-text-color, rgb(186, 186, 186));
}

html[saved-theme="dark"] body th {
  background-color: var(--shade-5, rgba(204, 204, 204, 0.05));
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: var(--table-header-color, rgb(186, 186, 186));
  font-weight: var(--medium-weight, 500);
  text-align: left;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-left-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.15);
  color: var(--code-normal, rgb(186, 186, 186));
  font-family: var(--font-monospace, "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 1.89px;
  padding-left: 3.78px;
  padding-right: 3.78px;
  padding-top: 1.89px;
}

html[saved-theme="dark"] body pre:has(> code) {
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
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(25, 133, 240);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  padding-right: 24px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(204, 204, 204, 0.05);
  border-left-color: rgba(204, 204, 204, 0.05);
  border-right-color: rgba(204, 204, 204, 0.05);
  border-top-color: rgba(204, 204, 204, 0.05);
  width: var(--checkbox-size, 14.3906px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
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
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
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

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
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

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(186, 186, 186);
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
  border-bottom-color: rgba(204, 204, 204, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(204, 204, 204, 0.2);
  border-right-color: rgba(204, 204, 204, 0.2);
  border-top-color: rgba(204, 204, 204, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: var(--font-interface, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-left-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.15);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.2) 0px 20px 30px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-left-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.15);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(204, 204, 204, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(204, 204, 204, 0.2);
  border-right-color: rgba(204, 204, 204, 0.2);
  border-top-color: rgba(204, 204, 204, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(92, 168, 245, 0.1));
  border-bottom-color: rgba(92, 168, 245, 0.15);
  border-bottom-left-radius: 25.2px;
  border-bottom-right-radius: 25.2px;
  border-left-color: rgba(92, 168, 245, 0.15);
  border-right-color: rgba(92, 168, 245, 0.15);
  border-top-color: rgba(92, 168, 245, 0.15);
  border-top-left-radius: 25.2px;
  border-top-right-radius: 25.2px;
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(25, 133, 240);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(186, 186, 186));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(186, 186, 186));
  font-size: var(--inline-title-size, 23.0688px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(186, 186, 186));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(186, 186, 186));
  font-family: var(--inline-title-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(186, 186, 186));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(186, 186, 186));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(186, 186, 186));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(186, 186, 186));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container {
  background-color: var(--shade-5-opaque, rgb(38, 38, 38));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--medium-weight, 500);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--medium-weight, 500);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--medium-weight, 500);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: var(--text-muted, rgb(117, 117, 117));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(50, 50, 50));
  border-bottom-color: rgba(204, 204, 204, 0.03);
  border-left-color: rgba(204, 204, 204, 0.03);
  border-right-color: rgba(204, 204, 204, 0.03);
  border-top-color: rgba(204, 204, 204, 0.03);
  border-top-left-radius: var(--radius-m, 8px);
  color: var(--text-muted, rgb(117, 117, 117));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(117, 117, 117);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-normal, rgb(186, 186, 186));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-normal, rgb(186, 186, 186));
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: var(--shade-5-opaque, rgb(38, 38, 38));
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: var(--icon-color, rgb(117, 117, 117));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(117, 117, 117);
  stroke: rgb(117, 117, 117);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(82, 82, 82));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(186, 186, 186));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(36, 36, 36));
  border-color: rgb(186, 186, 186);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: var(--shade-5, rgba(204, 204, 204, 0.05));
  border-color: rgb(64, 64, 64);
  color: var(--table-header-color, rgb(186, 186, 186));
  font-weight: var(--medium-weight, 500);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-left-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.15);
  color: var(--text-muted, rgb(117, 117, 117));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.15);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(92, 168, 245, 0.1));
  border-radius: 25.2px;
  color: var(--pill-color, rgb(25, 133, 240));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body div#quartz-root {
  color: var(--text-normal, rgb(186, 186, 186));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgba(0, 0, 0, 0);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(50, 50, 50));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(204, 204, 204, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(204, 204, 204, 0.2);
  border-right-color: rgba(204, 204, 204, 0.2);
  border-top-color: rgba(204, 204, 204, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, rgb(117, 117, 117));
  font-family: var(--font-interface, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  padding-bottom: 6px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 6px;
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: var(--code-normal, rgb(186, 186, 186));
  font-family: var(--font-monospace, "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  font-size: var(--code-size, 12.6px);
  padding-bottom: 1.26px;
  padding-left: 3.15px;
  padding-right: 3.15px;
  padding-top: 1.26px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sub {
  color: rgb(186, 186, 186);
  font-size: 12px;
}

html[saved-theme="dark"] body summary {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sup {
  color: rgb(186, 186, 186);
  font-size: 12px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(92, 168, 245, 0.1));
  border-bottom-color: rgba(92, 168, 245, 0.15);
  border-bottom-left-radius: 22.05px;
  border-bottom-right-radius: 22.05px;
  border-left-color: rgba(92, 168, 245, 0.15);
  border-right-color: rgba(92, 168, 245, 0.15);
  border-top-color: rgba(92, 168, 245, 0.15);
  border-top-left-radius: 22.05px;
  border-top-right-radius: 22.05px;
  color: var(--tag-color, rgb(25, 133, 240));
}`,
  },
  light: {
    base: `:root:root {
  --accent-b: 255;
  --accent-d: 52%;
  --accent-g: 122;
  --accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --accent-r: 1;
  --accent-rgb: var(--accent-r), var(--accent-g), var(--accent-b);
  --background-match-highlight: hsla(var(--accent-hsl), 0.2);
  --background-modifier-accent: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) + 10%)
  );
  --background-modifier-border: var(--shade-plus-darker, rgba(0, 0, 0, 0.05));
  --background-modifier-border-focus: var(--shade-plus-darker, rgba(0, 0, 0, 0.05));
  --background-modifier-border-hover: var(--shade-plus-darker, rgba(0, 0, 0, 0.05));
  --background-modifier-cover: rgba(170, 170, 170, 0.6);
  --background-modifier-error: rgb(var(--red-rgb));
  --background-modifier-error-hover: rgb(var(--red-rgb));
  --background-modifier-error-rgb: var(--red-rgb, 255, 59, 48);
  --background-primary: var(--shade-0-opaque, rgb(255, 255, 255));
  --background-primary-alt: var(--shade-3-opaque, hsl(0, 0%, 97%));
  --background-rgb: var(--color-white-rgb, 255, 255, 255);
  --background-secondary: var(--shade-3-opaque, hsl(0, 0%, 97%));
  --background-secondary-alt: var(--shade-3-opaque, hsl(0, 0%, 97%));
  --background-tertiary: var(--shade-3-opaque, hsl(0, 0%, 97%));
  --background-translucent: rgba(245, 245, 245, 0.75);
  --background-transparent: transparent;
  --bases-cards-background: var(--background-primary, rgb(255, 255, 255));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(0, 0%, 97%));
  --bases-embed-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --bases-group-heading-property-color: var(--text-muted, hsl(0, 0%, 50%));
  --bases-table-border-color: var(--table-border-color, rgba(0, 0, 0, 0.05));
  --bases-table-cell-background-active: var(--background-primary, rgb(255, 255, 255));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(0, 0%, 97%));
  --bases-table-group-background: var(--background-primary-alt, hsl(0, 0%, 97%));
  --bases-table-header-background: var(--background-primary, rgb(255, 255, 255));
  --bases-table-header-color: var(--text-muted, hsl(0, 0%, 50%));
  --bases-table-summary-background: var(--background-primary, rgb(255, 255, 255));
  --blockquote-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --blue-rgb: 0, 122, 255;
  --bodyFont: var(--font-text-theme, system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  --canvas-background: var(--background-primary, rgb(255, 255, 255));
  --canvas-card-label-color: var(--text-faint, hsl(0, 0%, 70%));
  --caret-color: var(--text-normal, hsl(0, 0%, 10%));
  --checkbox-border-color: var(--text-faint, hsl(0, 0%, 70%));
  --checkbox-border-color-hover: var(--text-muted, hsl(0, 0%, 50%));
  --checkbox-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
    258,
    88%,
    56%
  ));
  --checkbox-marker-color: var(--background-primary, rgb(255, 255, 255));
  --checklist-done-color: var(--text-muted, hsl(0, 0%, 50%));
  --code-background: var(--background-primary-alt, hsl(0, 0%, 97%));
  --code-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --code-color: var(--text-normal, hsl(0, 0%, 10%));
  --code-comment: var(--text-faint, hsl(0, 0%, 70%));
  --code-normal: var(--text-normal, hsl(0, 0%, 10%));
  --code-punctuation: var(--text-muted, hsl(0, 0%, 50%));
  --collapse-icon-color: var(--text-faint, hsl(0, 0%, 70%));
  --color-black-rgb: 0, 0, 0;
  --color-white-rgb: 255, 255, 255;
  --dark: var(--text-normal, var(--shade-90-opaque, hsl(0, 0%, 10%)));
  --darkgray: var(--text-normal, var(--shade-90-opaque, hsl(0, 0%, 10%)));
  --default-font-smoothing: auto;
  --divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --divider-color-hover: var(--interactive-accent, hsl(258, 88%, 66%));
  --editor-font-features: "";
  --editor-font-size: var(--font-text-size, 18px);
  --editor-font-smoothing: auto;
  --editor-font-weight: 400;
  --editor-line-height: 1.88889;
  --editor-line-height-rem: calc(var(--editor-line-height)*1rem);
  --editor-line-height-small: calc(var(--editor-line-height)*var(--scale-small)/100);
  --editor-line-height-small-rem: calc(var(--editor-line-height-small)*1rem);
  --file-header-background: var(--background-primary, rgb(255, 255, 255));
  --file-header-background-focused: var(--background-primary, rgb(255, 255, 255));
  --file-header-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-color: var(--text-normal, hsl(0, 0%, 10%));
  --folder-b: 100%;
  --folder-h: 0deg;
  --folder-s: 100%;
  --font-interface-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  --font-mermaid: var(--font-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: Menlo, SFMono-Regular, Consolas, "Roboto Mono",
    monospace;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, rgba(0, 0, 0, 0.05));
  --footnote-id-color: var(--text-muted, hsl(0, 0%, 50%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(0, 0%, 70%));
  --foreground-rgb: var(--color-black-rgb, 0, 0, 0);
  --graph-node: var(--text-muted, hsl(0, 0%, 50%));
  --graph-node-unresolved: var(--text-faint, hsl(0, 0%, 70%));
  --graph-text: var(--text-normal, hsl(0, 0%, 10%));
  --gray: var(--text-muted, var(--shade-50-opaque, hsl(0, 0%, 50%)));
  --green-rgb: 52, 199, 89;
  --h1-line-height: 1.4;
  --h1-margin-bottom: 1;
  --h1-margin-top: 3;
  --h1-size: 1.602em;
  --h1-weight: 500;
  --h2-line-height: 1.4;
  --h2-margin-bottom: 0.5;
  --h2-margin-top: 2.25;
  --h2-size: 1.424em;
  --h2-weight: 500;
  --h3-line-height: 1.4;
  --h3-margin-bottom: 0.5;
  --h3-margin-top: 1.75;
  --h3-size: 1.266em;
  --h3-weight: 500;
  --h4-line-height: 1.5;
  --h4-margin-bottom: 0.5;
  --h4-margin-top: 1.5;
  --h4-size: 1.125em;
  --h4-weight: 500;
  --h5-margin-bottom: 0.5;
  --h5-margin-top: 1.5;
  --h5-size: 1em;
  --h5-weight: 500;
  --h6-margin-bottom: 0.5;
  --h6-margin-top: 1.5;
  --h6-style: italic;
  --h6-weight: 500;
  --header-editor-font: var(--font-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --header-width: 42px;
  --headerFont: var(--font-text-theme, system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  --heading-formatting: var(--text-faint, hsl(0, 0%, 70%));
  --hr-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --hr-spacing-bottom: calc(var(--editor-line-height-rem)*1.5);
  --hr-spacing-top: calc(var(--editor-line-height-rem)/2);
  --icon-color: var(--text-muted, hsl(0, 0%, 50%));
  --icon-color-focused: var(--text-normal, hsl(0, 0%, 10%));
  --icon-color-hover: var(--text-muted, hsl(0, 0%, 50%));
  --icon-hex: 000;
  --icon-muted: 0.4;
  --indentation-guide: var(--shade-5, rgba(0, 0, 0, 0.05));
  --indentation-guide-active: rgba(var(--foreground-rgb), 0.15);
  --indigo-rgb: 88, 86, 214;
  --inline-title-line-height: var(--h1-line-height, 1.4);
  --inline-title-size: var(--h1-size, 1.602em);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, hsl(0, 0%, 70%));
  --input-placeholder-color: var(--text-faint, hsl(0, 0%, 70%));
  --interactive-accent: hsl(var(--accent-hsl));
  --interactive-accent-hover: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) - 10%)
  );
  --interactive-accent-rgb: var(--accent-rgb, 1, 122, 255);
  --light: var(--background-primary, var(--shade-0-opaque, rgb(255, 255, 255)));
  --lightgray: var(--background-secondary, var(--shade-3-opaque, hsl(0, 0%, 97%)));
  --line-height: 1.5;
  --line-width: 600px;
  --link-color-hover: var(--text-accent-hover, hsl(
    258,
    88%,
    56%
  ));
  --link-external-color-hover: var(--text-accent-hover, hsl(
    258,
    88%,
    56%
  ));
  --list-marker-color: var(--text-faint, hsl(0, 0%, 70%));
  --list-marker-color-hover: var(--text-muted, hsl(0, 0%, 50%));
  --max-width: 100%;
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --medium-weight: 500;
  --menu-background: var(--background-secondary, hsl(0, 0%, 97%));
  --menu-border-color: var(--background-modifier-border-hover, rgba(0, 0, 0, 0.05));
  --metadata-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --metadata-divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --metadata-input-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(0, 0%, 10%));
  --metadata-label-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(0, 0%, 50%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(0, 0%, 50%));
  --micro: 70px;
  --modal-background: var(--background-primary, rgb(255, 255, 255));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(0, 0%, 70%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(0, 0%, 70%));
  --nav-heading-color: var(--text-normal, hsl(0, 0%, 10%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(0, 0%, 70%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(0, 0%, 50%));
  --nav-heading-color-hover: var(--text-normal, hsl(0, 0%, 10%));
  --nav-item-color: var(--text-muted, hsl(0, 0%, 50%));
  --nav-item-color-active: var(--text-normal, hsl(0, 0%, 10%));
  --nav-item-color-hover: var(--text-normal, hsl(0, 0%, 10%));
  --nav-item-color-selected: var(--text-normal, hsl(0, 0%, 10%));
  --nav-tag-color: var(--text-faint, hsl(0, 0%, 70%));
  --nav-tag-color-active: var(--text-muted, hsl(0, 0%, 50%));
  --nav-tag-color-hover: var(--text-muted, hsl(0, 0%, 50%));
  --nested-padding: 3.5%;
  --normal-weight: 400;
  --opacity-translucency: 1;
  --orange-rgb: 255, 149, 0;
  --pdf-background: var(--background-primary, rgb(255, 255, 255));
  --pdf-page-background: var(--background-primary, rgb(255, 255, 255));
  --pdf-sidebar-background: var(--background-primary, rgb(255, 255, 255));
  --pill-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgba(0, 0, 0, 0.05));
  --pill-color: var(--text-muted, hsl(0, 0%, 50%));
  --pill-color-hover: var(--text-normal, hsl(0, 0%, 10%));
  --pill-color-remove: var(--text-faint, hsl(0, 0%, 70%));
  --pink-rgb: 255, 0, 255;
  --preview-bullet-size-adjust: 100%;
  --preview-font: var(--font-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --preview-font-features: var(--editor-font-features, "");
  --preview-font-size: var(--editor-font-size, 16px);
  --preview-font-weight: var(--editor-font-weight, 400);
  --preview-line-height: var(--editor-line-height, 1.88889);
  --preview-line-height-rem: calc(var(--preview-line-height)*1rem);
  --prompt-background: var(--background-primary, rgb(255, 255, 255));
  --purple-rgb: 175, 82, 222;
  --quote-opening-modifier: var(--shade-70-opaque, hsl(0, 0%, 30%));
  --radius: 0px;
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)));
  --red-rgb: 255, 59, 48;
  --resize-handle-width: 2px;
  --ribbon-background: var(--background-secondary, hsl(0, 0%, 97%));
  --ribbon-background-collapsed: var(--background-primary, rgb(255, 255, 255));
  --scale-small: 90;
  --search-clear-button-color: var(--text-muted, hsl(0, 0%, 50%));
  --search-icon-color: var(--text-muted, hsl(0, 0%, 50%));
  --search-result-background: var(--background-primary, rgb(255, 255, 255));
  --secondary: var(--text-accent, hsl(var(--accent-hsl)));
  --setting-group-heading-color: var(--text-normal, hsl(0, 0%, 10%));
  --setting-items-background: var(--background-primary-alt, hsl(0, 0%, 97%));
  --setting-items-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --shade-0: rgb(var(--background-rgb));
  --shade-0-opaque: rgb(var(--background-rgb));
  --shade-10: rgba(var(--foreground-rgb), 0.1);
  --shade-10-opaque: hsl(0, 0%, 90%);
  --shade-2: rgba(var(--foreground-rgb), 0.02);
  --shade-2-opaque: hsl(0, 0%, 98%);
  --shade-20: rgba(var(--foreground-rgb), 0.2);
  --shade-20-opaque: hsl(0, 0%, 80%);
  --shade-3: rgba(var(--foreground-rgb), 0.03);
  --shade-3-opaque: hsl(0, 0%, 97%);
  --shade-30: rgba(var(--foreground-rgb), 0.3);
  --shade-30-opaque: hsl(0, 0%, 70%);
  --shade-40: rgba(var(--foreground-rgb), 0.4);
  --shade-40-opaque: hsl(0, 0%, 60%);
  --shade-5: rgba(var(--foreground-rgb), 0.05);
  --shade-5-opaque: hsl(0, 0%, 95%);
  --shade-50: rgba(var(--foreground-rgb), 0.5);
  --shade-50-opaque: hsl(0, 0%, 50%);
  --shade-60: rgba(var(--foreground-rgb), 0.6);
  --shade-60-opaque: hsl(0, 0%, 40%);
  --shade-70: rgba(var(--foreground-rgb), 0.7);
  --shade-70-opaque: hsl(0, 0%, 30%);
  --shade-80: rgba(var(--foreground-rgb), 0.8);
  --shade-80-opaque: hsl(0, 0%, 20%);
  --shade-90: rgba(var(--foreground-rgb), 0.9);
  --shade-90-opaque: hsl(0, 0%, 10%);
  --shade-plus-darker: var(--shade-5, rgba(0, 0, 0, 0.05));
  --shade-plus-darker-hsl: hsl(0, 0%, 95%);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(0, 0%, 50%));
  --shiki-code-background: var(--code-background, hsl(0, 0%, 97%));
  --shiki-code-comment: var(--text-faint, hsl(0, 0%, 70%));
  --shiki-code-normal: var(--text-muted, hsl(0, 0%, 50%));
  --shiki-code-punctuation: var(--text-muted, hsl(0, 0%, 50%));
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --shiki-gutter-text-color: var(--text-faint, hsl(0, 0%, 70%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(0, 0%, 50%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(0, 0%, 50%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(0, 0%, 70%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgba(0, 0, 0, 0.05));
  --slider-track-background: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --small: 200px;
  --small-med: 300px;
  --status-bar-background: var(--background-secondary, hsl(0, 0%, 97%));
  --status-bar-border-color: var(--divider-color, rgba(0, 0, 0, 0.05));
  --status-bar-text-color: var(--text-muted, hsl(0, 0%, 50%));
  --strong-weight: 600;
  --suggestion-background: var(--background-primary, rgb(255, 255, 255));
  --svg-l: 16px;
  --svg-m: 15px;
  --svg-s: 14px;
  --svg-xl: 18px;
  --svg-xs: 13px;
  --svg-xxl: 20px;
  --tab-background-active: var(--background-primary, rgb(255, 255, 255));
  --tab-container-background: var(--background-secondary, hsl(0, 0%, 97%));
  --tab-divider-color: var(--background-modifier-border-hover, rgba(0, 0, 0, 0.05));
  --tab-outline-color: var(--divider-color, rgba(0, 0, 0, 0.05));
  --tab-switcher-background: var(--background-secondary, hsl(0, 0%, 97%));
  --tab-text-color: var(--text-faint, hsl(0, 0%, 70%));
  --tab-text-color-active: var(--text-muted, hsl(0, 0%, 50%));
  --tab-text-color-focused: var(--text-muted, hsl(0, 0%, 50%));
  --tab-text-color-focused-active: var(--text-muted, hsl(0, 0%, 50%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(0, 0%, 10%));
  --table-add-button-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --table-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(258, 88%, 66%));
  --table-drag-handle-color: var(--text-faint, hsl(0, 0%, 70%));
  --table-header-border-color: var(--table-border-color, rgba(0, 0, 0, 0.05));
  --table-header-color: var(--text-normal, hsl(0, 0%, 10%));
  --table-min-cell-width: 0px;
  --table-selection-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --tall: 700px;
  --teal-rgb: 90, 200, 250;
  --tertiary: var(--text-accent-hover, hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) - 10%)
  ));
  --text-accent: hsl(var(--accent-hsl));
  --text-accent-hover: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) - 10%)
  );
  --text-error: rgb(var(--red-rgb));
  --text-error-hover: rgb(var(--red-rgb));
  --text-faint: var(--shade-30-opaque, hsl(0, 0%, 70%));
  --text-highlight-bg-active: rgba(0, 0, 0, 0.1);
  --text-muted: var(--shade-50-opaque, hsl(0, 0%, 50%));
  --text-normal: var(--shade-90-opaque, hsl(0, 0%, 10%));
  --text-normal-bold: var(--shade-90-opaque, hsl(0, 0%, 10%));
  --text-normal-em: var(--shade-90-opaque, hsl(0, 0%, 10%));
  --text-selection: rgba(var(--foreground-rgb), 0.08);
  --tiny: 100px;
  --titleFont: var(--font-text-theme, system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  --titlebar-background: var(--background-secondary, hsl(0, 0%, 97%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(0, 0%, 97%));
  --titlebar-border-color: var(--background-modifier-border, rgba(0, 0, 0, 0.05));
  --titlebar-text-color: var(--text-muted, hsl(0, 0%, 50%));
  --titlebar-text-color-focused: var(--text-normal, hsl(0, 0%, 10%));
  --ui-font-size: 14px;
  --vault-profile-color: var(--text-normal, hsl(0, 0%, 10%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(0, 0%, 10%));
  --workspace-drawer-ribbon-width: 46px;
  --yellow-rgb: 255, 204, 0;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(247, 247, 247));
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(247, 247, 247));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body html {
  --accent-d: calc(var(--accent-l) + 2%);
  --accent-h: 211;
  --accent-l: 50%;
  --accent-s: 100%;
  --bold-weight: 600;
  --color-black-rgb: 0, 0, 0;
  --color-white-rgb: 255, 255, 255;
  --cursor: pointer;
  --default-font-smoothing: auto;
  --editor-font-features: "";
  --editor-font-smoothing: auto;
  --editor-font-weight: 400;
  --editor-line-height: 1.88889;
  --header-width: 42px;
  --icon-muted: 0.4;
  --line-height: 1.5;
  --line-width: 600px;
  --max-width: 100%;
  --medium-weight: 500;
  --nested-padding: 3.5%;
  --normal-weight: 400;
  --preview-bullet-size-adjust: 100%;
  --radius-l: 10px;
  --radius-m: 6px;
  --radius-s: 4px;
  --radius-xl: 20px;
  --resize-handle-width: 2px;
  --scale-small: 90;
  --strong-weight: var(--bold-weight, 600);
  --table-min-cell-width: 0px;
  --titlebar-height: 28px;
  --ui-font-size: 14px;
  --workspace-drawer-ribbon-width: 46px;
  font-size: var(--ui-font-size, 16px);
  font-weight: var(--normal-weight, 400);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--strong-color, rgb(26, 26, 26));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--strong-weight, 600);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--em-color, rgb(26, 26, 26));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--em-color, rgb(26, 26, 26));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--strong-color, rgb(26, 26, 26));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--strong-weight, 600);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 224, 0, 0.5));
  color: var(--text-normal, rgb(26, 26, 26));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body del {
  color: rgb(26, 26, 26);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(26, 26, 26));
  font-size: var(--ui-font-size, 14px);
  font-weight: var(--medium-weight, 500);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(255, 255, 255);
  border-color: rgba(0, 0, 0, 0.4);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(138, 92, 245));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(128, 128, 128));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration-color: rgb(128, 128, 128);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.broken {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body dl {
  margin-bottom: 14.4px;
  margin-top: 14.4px;
}

html[saved-theme="light"] body dt {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(179, 179, 179));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: var(--blockquote-font-style, italic);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body table {
  color: rgb(26, 26, 26);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 576px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--table-text-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body th {
  background-color: var(--shade-2, rgba(0, 0, 0, 0.02));
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  color: var(--table-header-color, rgb(26, 26, 26));
  font-weight: var(--medium-weight, 500);
  text-align: left;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(247, 247, 247));
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  color: var(--code-normal, rgb(26, 26, 26));
  font-family: var(--font-monospace, "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 1.89px;
  padding-left: 3.78px;
  padding-right: 3.78px;
  padding-top: 1.89px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(247, 247, 247));
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
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 26, 26);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(247, 247, 247));
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  padding-right: 24px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0.4);
  border-left-color: rgba(0, 0, 0, 0.4);
  border-right-color: rgba(0, 0, 0, 0.4);
  border-top-color: rgba(0, 0, 0, 0.4);
  width: var(--checkbox-size, 14.3906px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
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
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(26, 26, 26);
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
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, rgb(26, 26, 26));
  font-family: var(--font-interface, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.2) 0px 20px 30px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 25.2px;
  border-bottom-right-radius: 25.2px;
  border-top-left-radius: 25.2px;
  border-top-right-radius: 25.2px;
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(26, 26, 26));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(26, 26, 26));
  font-size: var(--inline-title-size, 23.0688px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(26, 26, 26));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(26, 26, 26));
  font-family: var(--inline-title-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(26, 26, 26));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(26, 26, 26));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(26, 26, 26));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(26, 26, 26));
  font-family: var(--header-editor-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container {
  background-color: var(--shade-5-opaque, rgb(242, 242, 242));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-normal, rgb(26, 26, 26));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--medium-weight, 500);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-normal, rgb(26, 26, 26));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--medium-weight, 500);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--medium-weight, 500);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: var(--text-muted, rgb(128, 128, 128));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(255, 255, 255));
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-left-radius: var(--radius-m, 8px);
  color: var(--text-muted, rgb(128, 128, 128));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(128, 128, 128);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 26, 26);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(26, 26, 26);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(26, 26, 26);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body ul.section-ul {
  background-color: var(--shade-5-opaque, rgb(242, 242, 242));
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: var(--icon-color, rgb(128, 128, 128));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(128, 128, 128);
  stroke: rgb(128, 128, 128);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(179, 179, 179));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(26, 26, 26);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: var(--shade-2, rgba(0, 0, 0, 0.02));
  border-color: rgba(0, 0, 0, 0.05);
  color: var(--table-header-color, rgb(26, 26, 26));
  font-weight: var(--medium-weight, 500);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  color: var(--text-muted, rgb(128, 128, 128));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 25.2px;
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, rgb(26, 26, 26));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgba(0, 0, 0, 0);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(255, 255, 255));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(26, 26, 26));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, rgb(128, 128, 128));
  font-family: var(--font-interface, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  padding-bottom: 6px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 6px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(247, 247, 247));
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: var(--code-normal, rgb(26, 26, 26));
  font-family: var(--font-monospace, "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  font-size: var(--code-size, 12.6px);
  padding-bottom: 1.26px;
  padding-left: 3.15px;
  padding-right: 3.15px;
  padding-top: 1.26px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 26, 26);
  font-size: 12px;
}

html[saved-theme="light"] body summary {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 26, 26);
  font-size: 12px;
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 22.05px;
  border-bottom-right-radius: 22.05px;
  border-top-left-radius: 22.05px;
  border-top-right-radius: 22.05px;
}`,
  },
  classSettings: {
    "cc-show-vault-name": {
      general: `.cc-show-vault-name .nav-folder.mod-root > .nav-folder-title .nav-folder-title-content {
color: inherit;
overflow: visible;
height: unset;
padding: 4px;
}`,
    },
    "cc-transparent-popover": {
      general: `.cc-transparent-popover:not(.is-mobile):not(.is-translucent) .notice, .cc-transparent-popover:not(.is-mobile):not(.is-translucent) .menu {
background: rgba(245, 245, 245, 0.7);
backdrop-filter: blur(35px);
background-blend-mode: luminosity;
}`,
      dark: `.cc-transparent-popover:not(.is-mobile):not(.is-translucent).theme-dark .notice, .cc-transparent-popover:not(.is-mobile):not(.is-translucent).theme-dark .menu {
background: rgba(30, 30, 30, 0.7);
}`,
    },
    "cc-truncated-explorer-titles": {
      general: `body:not(.cc-no-folder-icons) .cc-truncated-explorer-titles .nav-folder-title-content::before {
top: 2px;
}

.cc-truncated-explorer-titles .nav-files-container {
overflow-x: hidden;
}

.cc-truncated-explorer-titles .nav-file-title, .cc-truncated-explorer-titles .nav-folder-title {
width: 100%;
white-space: normal;
display: flex;
}

.cc-truncated-explorer-titles .nav-file-title-content, .cc-truncated-explorer-titles .nav-folder-title-content {
display: inline-block;
width: 100%;
}

.cc-truncated-explorer-titles .nav-file-title-content:not(.is-being-renamed), .cc-truncated-explorer-titles .nav-folder-title-content:not(.is-being-renamed) {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
vertical-align: middle;
}

.cc-truncated-explorer-titles:not(.cc-no-folder-icons) .nav-folder-title-content::before {
top: 0.15em;
}`,
    },
    "cc-wrapped-explorer-titles": {
      general: `.cc-wrapped-explorer-titles .nav-files-container {
overflow-x: hidden;
}

.cc-wrapped-explorer-titles .nav-file-title, .cc-wrapped-explorer-titles .nav-folder-title {
width: 100%;
white-space: normal;
display: flex;
}

.cc-wrapped-explorer-titles .nav-file-title-content, .cc-wrapped-explorer-titles .nav-folder-title-content {
width: 100%;
white-space: normal;
display: flex;
align-items: flex-start;
}

.cc-wrapped-explorer-titles:not(.cc-no-folder-icons) .nav-file-title-content::before, .cc-wrapped-explorer-titles:not(.cc-no-folder-icons) .nav-folder-title-content::before {
top: 0;
}`,
    },
    "cc-trim-table-cols": {
      general: `.cc-trim-table-cols td, .cc-trim-table-cols th {
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
min-width: unset;
max-width: var(--table-min-cell-width) !important;
}`,
    },
    "cc-fancy-cursor": {
      general: `.cc-fancy-cursor .cm-s-obsidian.mod-cm6 .cm-line {
caret-color: var(--text-accent);
}

.cc-fancy-cursor .cm-s-obsidian.mod-cm6 .CodeMirror-cursor, .cc-fancy-cursor .cm-s-obsidian.mod-cm6 .cm-cursor, .cc-fancy-cursor .cm-s-obsidian.mod-cm6 .cm-dropCursor {
border-color: var(--text-accent);
}

.cc-fancy-cursor .markdown-source-view.mod-cm5 .CodeMirror-cursor {
border-left: 2px solid var(--text-accent);
transform: translateX(-0.5px);
border-radius: 2px;
}`,
    },
    "cc-editor-heading-hash": {
      general: `.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .cm-header.cm-formatting-header.obsidian-search-match-highlight {
background: transparent;
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header {
position: relative;
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header:not(.cm-active) .cm-formatting-header:not(:only-child):after {
background-color: transparent;
color: transparent;
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header .cm-formatting-header:not(:only-child) {
z-index: 1000;
position: absolute;
left: 0;
transform: translateX(-100%);
display: inline-block;
color: transparent;
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header .cm-formatting-header:not(:only-child):after {
background-color: var(--background-primary);
font-family: var(--font-interface);
color: var(--text-faint);
font-weight: var(--normal-weight);
font-size: 10px;
position: absolute;
bottom: 15%;
right: 0;
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-1:after {
content: "#";
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-2:after {
content: "##";
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-3:after {
content: "###";
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-4:after {
content: "####";
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-5:after {
content: "#####";
}

.cc-editor-heading-hash .cm-s-obsidian.mod-cm6:not(.is-live-preview) .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-6:after {
content: "######";
}

.is-mobile .cm-s-obsidian:not(.is-live-preview) .HyperMD-header .cm-formatting-header:not(:only-child):after {
letter-spacing: -3px;
}

.cc-editor-heading-hash .markdown-source-view.mod-cm5 .cm-formatting-header.obsidian-search-match-highlight {
background: transparent;
}

.cc-editor-heading-hash .markdown-source-view.mod-cm5 .cm-formatting-header {
font-family: var(--font-interface);
color: var(--text-faint) !important;
font-weight: var(--normal-weight) !important;
}

.cc-editor-heading-hash .markdown-source-view.mod-cm5 div:not(.CodeMirror-activeline) > pre.HyperMD-header .cm-formatting-header:not(:only-child) {
color: transparent !important;
}

.cc-editor-heading-hash .markdown-source-view.mod-cm5 div:not(.CodeMirror-activeline) > pre.HyperMD-header .cm-formatting-header:not(:only-child):after {
font-family: var(--text);
color: var(--shade-20);
display: inline-block;
padding-right: 5px;
}

.cc-editor-heading-hash .markdown-source-view.mod-cm5 .cm-s-obsidian .HyperMD-header {
position: relative;
}

.cc-editor-heading-hash .markdown-source-view.mod-cm5 .cm-s-obsidian .HyperMD-header .cm-formatting-header:not(:only-child) {
position: absolute;
left: 0;
transform: translateX(-100%);
font-size: 11px !important;
display: block;
height: 100%;
}`,
    },
    "cc-lp-editor-heading-hash": {
      general: `.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .cm-header.cm-formatting-header.obsidian-search-match-highlight {
background: transparent;
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header {
position: relative;
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header:not(.cm-active) .cm-formatting-header:not(:only-child):after {
background-color: transparent;
color: transparent;
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header .cm-formatting-header:not(:only-child) {
z-index: 1000;
position: absolute;
left: 0;
transform: translateX(-100%);
display: inline-block;
color: transparent;
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header .cm-formatting-header:not(:only-child):after {
background-color: var(--background-primary);
bottom: 15%;
color: var(--text-faint);
font-family: var(--font-interface);
font-size: 10px;
font-weight: var(--normal-weight);
position: absolute;
right: 0;
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-1:after {
content: "#";
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-2:after {
content: "##";
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-3:after {
content: "###";
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-4:after {
content: "####";
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-5:after {
content: "#####";
}

.cc-lp-editor-heading-hash .cm-s-obsidian.mod-cm6.is-live-preview .HyperMD-header .cm-formatting-header:not(:only-child).cm-header-6:after {
content: "######";
}

.is-mobile .cm-s-obsidian.is-live-preview .HyperMD-header .cm-formatting-header:not(:only-child):after {
letter-spacing: -3px;
}`,
    },
    "cc-em-strong": {
      general: `body.cc-em-strong .markdown-source-view.cm-s-obsidian span.cm-formatting-strong.cm-header, body.cc-em-strong .markdown-source-view.cm-s-obsidian span.cm-formatting-em.cm-header, body.cc-em-strong .markdown-source-view.cm-s-obsidian span.cm-formatting-strong, body.cc-em-strong .markdown-source-view.cm-s-obsidian span.cm-formatting-em {
color: var(--shade-20);
font-size: 0.777em;
}

.cc-em-strong .markdown-source-view.mod-cm5 .cm-formatting-strong.cm-header, .cc-em-strong .markdown-source-view.mod-cm5 .cm-formatting-em.cm-header, .cc-em-strong .markdown-source-view.mod-cm5 .cm-formatting-strong, .cc-em-strong .markdown-source-view.mod-cm5 .cm-formatting-em {
color: var(--shade-20);
font-size: 0.777em;
}`,
    },
    "cc-hr": {
      general: `.cc-hr .cm-s-obsidian.mod-cm6 .HyperMD-hr:not(.cm-active) span.cm-hr {
color: transparent;
}

.cc-hr .cm-s-obsidian.mod-cm6 .HyperMD-hr:not(.cm-active) {
background: linear-gradient(180deg, transparent calc(50% - 1px), var(--shade-10) 50%, transparent calc(50% + 1px));
}

.cc-hr .markdown-source-view.mod-cm5 .cm-s-obsidian div:not(.CodeMirror-activeline) > .HyperMD-hr span.cm-builtin, .cc-hr .markdown-source-view.mod-cm5 .cm-s-obsidian div:not(.CodeMirror-activeline) > .HyperMD-hr span.cm-hr {
color: transparent;
}

.cc-hr .markdown-source-view.mod-cm5 .HyperMD-hr {
position: relative;
}

.cc-hr .markdown-source-view.mod-cm5 .cm-s-obsidian div:not(.CodeMirror-activeline) > .HyperMD-hr-bg:after {
content: " ";
display: block;
position: absolute;
width: 100%;
height: 1px;
background-color: var(--shade-10);
top: 50%;
}`,
    },
    "cc-editor-list-bullets": {
      general: `.cc-editor-list-bullets .cm-s-obsidian.mod-cm6:not(.is-live-preview) span.cm-formatting-list-ul {
color: transparent !important;
position: relative;
}

.cc-editor-list-bullets .cm-s-obsidian.mod-cm6:not(.is-live-preview) span.cm-formatting-list-ul:before {
line-height: 0;
position: absolute;
top: 51%;
left: 0;
display: block;
transform: translate(-40%, -50%);
width: 6px;
height: 6px;
content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0);"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z"></path></svg>');
}

.cc-editor-list-bullets .cm-s-obsidian .HyperMD-list-line {
padding-top: 0;
padding-bottom: 10px;
}

.cc-editor-list-bullets .markdown-source-view.mod-cm5 .cm-s-obsidian pre.HyperMD-list-line {
padding-top: 0;
padding-bottom: 10px;
}

.cc-editor-list-bullets .markdown-source-view.mod-cm5 .cm-s-obsidian span.cm-formatting-list-ul {
color: transparent !important;
position: relative;
}

.cc-editor-list-bullets .markdown-source-view.mod-cm5 .cm-formatting-list-ul:before {
line-height: 0;
position: absolute;
top: 51%;
left: 0;
display: block;
transform: translate(-56%, -50%);
width: 6px;
height: 6px;
content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0);"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z"></path></svg>');
}`,
      dark: `.theme-dark .cm-s-obsidian:not(.is-live-preview) span.cm-formatting-list-ul:before {
content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" style="fill:rgba(204,204,204);"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z"></path></svg>');
}

.cc-editor-list-bullets .markdown-source-view.mod-cm5 .cm-formatting-list-ul:before {
content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" style="fill:rgba(204,204,204);"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z"></path></svg>');
}`,
    },
    "cc-header-spacing": {
      general: `.cc-header-spacing .markdown-preview-view:not(.kanban-plugin__markdown-preview-view) h1 {
margin-top: calc(var(--h1-margin-top) * var(--editor-line-height-rem));
margin-bottom: calc(var(--h1-margin-bottom) * var(--editor-line-height-rem));
}

.cc-header-spacing .markdown-preview-view:not(.kanban-plugin__markdown-preview-view) h2 {
margin-top: calc(var(--h2-margin-top) * var(--editor-line-height-rem));
margin-bottom: calc(var(--h2-margin-bottom) * var(--editor-line-height-rem));
}

.cc-header-spacing .markdown-preview-view:not(.kanban-plugin__markdown-preview-view) h3 {
margin-top: calc(var(--h3-margin-top) * var(--editor-line-height-rem));
margin-bottom: calc(var(--h3-margin-bottom) * var(--editor-line-height-rem));
}

.cc-header-spacing .markdown-preview-view:not(.kanban-plugin__markdown-preview-view) h4 {
margin-top: calc(var(--h4-margin-top) * var(--editor-line-height-rem));
margin-bottom: calc(var(--h4-margin-bottom) * var(--editor-line-height-rem));
}

.cc-header-spacing .markdown-preview-view:not(.kanban-plugin__markdown-preview-view) h5 {
margin-top: calc(var(--h5-margin-top) * var(--editor-line-height-rem));
margin-bottom: calc(var(--h5-margin-bottom) * var(--editor-line-height-rem));
}

.cc-header-spacing .markdown-preview-view:not(.kanban-plugin__markdown-preview-view) h6 {
margin-top: calc(var(--h6-margin-top) * var(--editor-line-height-rem));
margin-bottom: calc(var(--h6-margin-bottom) * var(--editor-line-height-rem));
}

.cc-header-spacing .popover .markdown-embed .markdown-preview-view h1, .cc-header-spacing .workspace-tabs .markdown-preview-view h1 {
margin-top: calc(var(--h1-margin-top) * var(--editor-line-height-small-rem));
margin-bottom: calc(var(--h1-margin-bottom) * var(--editor-line-height-small-rem));
}

.cc-header-spacing .popover .markdown-embed .markdown-preview-view h2, .cc-header-spacing .workspace-tabs .markdown-preview-view h2 {
margin-top: calc(var(--h2-margin-top) * var(--editor-line-height-small-rem));
margin-bottom: calc(var(--h2-margin-bottom) * var(--editor-line-height-small-rem));
}

.cc-header-spacing .popover .markdown-embed .markdown-preview-view h3, .cc-header-spacing .workspace-tabs .markdown-preview-view h3 {
margin-top: calc(var(--h3-margin-top) * var(--editor-line-height-small-rem));
margin-bottom: calc(var(--h3-margin-bottom) * var(--editor-line-height-small-rem));
}

.cc-header-spacing .popover .markdown-embed .markdown-preview-view h4, .cc-header-spacing .workspace-tabs .markdown-preview-view h4 {
margin-top: calc(var(--h4-margin-top) * var(--editor-line-height-small-rem));
margin-bottom: calc(var(--h4-margin-bottom) * var(--editor-line-height-small-rem));
}

.cc-header-spacing .popover .markdown-embed .markdown-preview-view h5, .cc-header-spacing .workspace-tabs .markdown-preview-view h5 {
margin-top: calc(var(--h5-margin-top) * var(--editor-line-height-small-rem));
margin-bottom: calc(var(--h5-margin-bottom) * var(--editor-line-height-small-rem));
}

.cc-header-spacing .popover .markdown-embed .markdown-preview-view h6, .cc-header-spacing .workspace-tabs .markdown-preview-view h6 {
margin-top: calc(var(--h6-margin-top) * var(--editor-line-height-small-rem));
margin-bottom: calc(var(--h6-margin-bottom) * var(--editor-line-height-small-rem));
}

.contextual-typography.cc-header-spacing .markdown-preview-view div[data-tag-name=h1] + div > h2 {
margin-top: var(--editor-line-height-rem);
}

.contextual-typography.cc-header-spacing .markdown-preview-view div[data-tag-name=h2] + div > h3, .contextual-typography.cc-header-spacing .markdown-preview-view div[data-tag-name=h3] + div > h4, .contextual-typography.cc-header-spacing .markdown-preview-view div[data-tag-name=h4] + div > h5 {
margin-top: calc(var(--editor-line-height-rem) / 2);
}

.contextual-typography.cc-header-spacing .markdown-preview-view div[data-tag-name=h5] + div > h6 {
margin-top: 0;
}

.contextual-typography.cc-header-spacing .community-plugin-readme.markdown-preview-view h1:first-child, .contextual-typography.cc-header-spacing .community-plugin-readme.markdown-preview-view h2:first-child, .contextual-typography.cc-header-spacing .community-plugin-readme.markdown-preview-view h3:first-child, .contextual-typography.cc-header-spacing .community-plugin-readme.markdown-preview-view h4:first-child, .contextual-typography.cc-header-spacing .community-plugin-readme.markdown-preview-view h5:first-child, .contextual-typography.cc-header-spacing .community-plugin-readme.markdown-preview-view h6:first-child, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div > h1, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div > h2, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div > h3, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div > h4, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div > h5, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div > h6, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div:empty + div > h1, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div:empty + div > h2, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div:empty + div > h3, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div:empty + div > h4, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div:empty + div > h5, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div:empty + div > h6, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div[data-tag-name=pre] + div > h1, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div[data-tag-name=pre] + div > h2, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div[data-tag-name=pre] + div > h3, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div[data-tag-name=pre] + div > h4, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div[data-tag-name=pre] + div > h5, .contextual-typography.cc-header-spacing .markdown-preview-pusher + div[data-tag-name=pre] + div > h6 {
margin-top: 0 !important;
}

.cc-header-spacing .markdown-preview-view:not(.kanban-plugin__markdown-preview-view) h1.embedded-note-title__preview {
margin-top: 0;
margin-bottom: 0;
}`,
    },
    "cc-soft-wrap-code-blocks": {
      general: `.cc-soft-wrap-code-blocks code[class*=language-], .cc-soft-wrap-code-blocks pre[class*=language-] {
overflow: hidden;
white-space: pre-wrap;
}`,
    },
    "cc-seamless-embed": {
      general: `.cc-seamless-embed .markdown-embed .markdown-preview-view {
padding: 0;
}

.cc-seamless-embed .markdown-embed {
border: none;
padding: 0;
margin: 0;
}

.cc-seamless-embed .markdown-embed-title {
display: none;
}

.cc-seamless-embed .is-live-preview .markdown-embed-title {
display: block;
}`,
    },
    "cc-no-folder-icons": {
      general: `body:not(.cc-no-file-icons).cc-no-folder-icons .nav-file-title-content::before {
margin-right: 4px;
margin-left: -1px;
}`,
    },
  },
};
