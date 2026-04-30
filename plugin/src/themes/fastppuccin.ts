import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "fastppuccin",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["noto-serif"],
    styleSettingsId: "fastppuccin-theme-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anp-bold-color: var(--ctp-red, 243, 139, 168);
  --anp-header-font: "Noto Serif";
  --anp-header-margin-value: 15px;
  --anp-highlight-color: var(--ctp-yellow, 249, 226, 175);
  --anp-italic-color: var(--ctp-green, 166, 227, 161);
  --anp-preview-width-max: 800px;
  --anp-preview-width-pct: 95%;
  --anp-rainbow-folder-bg-opacity: 1;
  --anp-rainbow-folder-border-opacity: 1;
  --anp-rainbow-folder-collapse-border-custom: #00000044;
  --anp-speech-bubble-opacity: var(--anp-sp-op-dark, 0.9);
  --anp-table-width-pct: 100%;
  --background-modifier-active: hsla(var(--color-accent-hsl), 0.1);
  --background-modifier-active-hover: rgba(var(--ctp-accent), 0.15);
  --background-modifier-border: rgb(var(--ctp-surface0));
  --background-modifier-border-focus: rgb(var(--ctp-surface2));
  --background-modifier-border-hover: rgb(var(--ctp-surface1));
  --background-modifier-cover: rgba(var(--ctp-mantle), 0.4);
  --background-modifier-error: rgba(var(--ctp-red), 1);
  --background-modifier-error-hover: rgba(var(--ctp-red), 0.9);
  --background-modifier-error-rgb: var(--ctp-red, 243, 139, 168);
  --background-modifier-form-field: rgba(var(--ctp-crust), 0.3);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(17, 17, 27, 0.3));
  --background-modifier-hover: rgba(var(--ctp-text), 0.075);
  --background-modifier-message: rgba(var(--ctp-crust), 0.9);
  --background-modifier-success: rgba(var(--ctp-green), 1);
  --background-modifier-success-hover: rgba(var(--ctp-green), 0.9);
  --background-modifier-success-rgb: var(--ctp-green, 166, 227, 161);
  --background-primary: rgb(var(--ctp-base));
  --background-primary-alt: rgb(var(--ctp-mantle));
  --background-secondary: rgb(var(--ctp-mantle));
  --background-secondary-alt: rgb(var(--ctp-crust));
  --bases-cards-background: var(--background-primary, rgb(30, 30, 46));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(24, 24, 37));
  --bases-embed-border-color: var(--background-modifier-border, rgb(49, 50, 68));
  --bases-group-heading-property-color: var(--text-muted, rgb(142, 149, 179));
  --bases-table-border-color: var(--table-border-color, rgb(49, 50, 68));
  --bases-table-cell-background-active: var(--background-primary, rgb(30, 30, 46));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(24, 24, 37));
  --bases-table-group-background: var(--background-primary-alt, rgb(24, 24, 37));
  --bases-table-header-background: var(--background-primary, rgb(30, 30, 46));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  --bases-table-header-color: var(--text-muted, rgb(142, 149, 179));
  --bases-table-summary-background: var(--background-primary, rgb(30, 30, 46));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  --blockquote-background-color: rgba(var(--ctp-crust), 0.5);
  --blockquote-border-color: rgb(var(--ctp-accent));
  --callout-blend-mode: var(--highlight-mix-blend-mode, none);
  --callout-bug: var(--color-red-rgb, 243, 139, 168);
  --callout-content-padding: var(--size-4-2, 8px);
  --callout-default: var(--color-blue-rgb, 135, 176, 249);
  --callout-error: var(--color-red-rgb, 243, 139, 168);
  --callout-example: var(--color-purple-rgb, 180, 190, 254);
  --callout-fail: var(--color-red-rgb, 243, 139, 168);
  --callout-important: var(--color-cyan-rgb, 137, 220, 235);
  --callout-info: var(--color-blue-rgb, 135, 176, 249);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-orange-rgb, 250, 179, 135);
  --callout-success: var(--color-green-rgb, 166, 227, 161);
  --callout-summary: var(--color-cyan-rgb, 137, 220, 235);
  --callout-tip: var(--color-cyan-rgb, 137, 220, 235);
  --callout-title-padding: var(--size-4-2, 8px);
  --callout-todo: var(--color-blue-rgb, 135, 176, 249);
  --callout-warning: var(--color-orange-rgb, 250, 179, 135);
  --canvas-background: var(--background-primary, rgb(30, 30, 46));
  --canvas-card-label-color: var(--text-faint, rgb(161, 168, 201));
  --canvas-color: var(--ctp-overlay0, 105, 109, 134);
  --canvas-color-1: var(--color-red-rgb, 243, 139, 168);
  --canvas-color-2: var(--color-orange-rgb, 250, 179, 135);
  --canvas-color-3: var(--color-yellow-rgb, 249, 226, 175);
  --canvas-color-4: var(--color-green-rgb, 166, 227, 161);
  --canvas-color-5: var(--color-cyan-rgb, 137, 220, 235);
  --canvas-color-6: var(--color-purple-rgb, 180, 190, 254);
  --canvas-dot-pattern: var(--color-base-30, rgb(67, 70, 90));
  --card-background-color: rgb(var(--ctp-crust));
  --card-foreground-color: rgb(var(--ctp-base));
  --caret-color: var(--text-normal, rgb(198, 208, 245));
  --checkbox-border-color: var(--text-faint, rgb(161, 168, 201));
  --checkbox-border-color-hover: var(--text-muted, rgb(142, 149, 179));
  --checkbox-color: var(--interactive-accent, rgb(245, 224, 220));
  --checkbox-color-hover: var(--interactive-accent-hover, rgba(245, 224, 220, 0.9));
  --checkbox-marker-color: var(--background-primary, rgb(30, 30, 46));
  --checklist-done-color: var(--text-muted, rgb(142, 149, 179));
  --code-background: var(--anp-code-bg-color, var(--background-secondary-alt));
  --code-border-color: var(--background-modifier-border, rgb(49, 50, 68));
  --code-bracket-background: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  --code-comment: var(--text-faint, rgb(161, 168, 201));
  --code-function: var(--color-yellow, rgb(249, 226, 175));
  --code-important: var(--color-orange, rgb(250, 179, 135));
  --code-keyword: var(--color-pink, rgb(245, 194, 231));
  --code-normal: var(--anp-code-text-color, var(--text-normal));
  --code-operator: var(--color-red, rgb(243, 139, 168));
  --code-property: var(--color-cyan, rgb(137, 220, 235));
  --code-punctuation: var(--text-muted, rgb(142, 149, 179));
  --code-string: var(--color-green, rgb(166, 227, 161));
  --code-tag: var(--color-red, rgb(243, 139, 168));
  --code-value: var(--color-purple, rgb(180, 190, 254));
  --collapse-icon-color: var(--text-faint, rgb(161, 168, 201));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(245, 224, 220));
  --color-accent: rgb(var(--ctp-accent));
  --color-accent-1: rgb(var(--ctp-accent));
  --color-accent-2: rgba(var(--ctp-accent), 0.9);
  --color-base-00: rgb(var(--ctp-crust));
  --color-base-10: rgb(var(--ctp-mantle));
  --color-base-100: rgb(var(--ctp-text));
  --color-base-20: rgb(var(--ctp-base));
  --color-base-25: rgb(var(--ctp-surface0));
  --color-base-30: rgb(var(--ctp-surface1));
  --color-base-35: rgb(var(--ctp-surface2));
  --color-base-40: rgb(var(--ctp-overlay0));
  --color-base-50: rgb(var(--ctp-overlay1));
  --color-base-60: rgb(var(--ctp-overlay2));
  --color-base-70: rgb(var(--ctp-subtext0));
  --color-blue: rgb(var(--ctp-blue));
  --color-blue-rgb: var(--ctp-blue, 135, 176, 249);
  --color-cyan: rgb(var(--ctp-sky));
  --color-cyan-rgb: var(--ctp-sky, 137, 220, 235);
  --color-green: rgb(var(--ctp-green));
  --color-green-rgb: var(--ctp-green, 166, 227, 161);
  --color-orange: rgb(var(--ctp-peach));
  --color-orange-rgb: var(--ctp-peach, 250, 179, 135);
  --color-pink: rgb(var(--ctp-pink));
  --color-pink-rgb: var(--ctp-pink, 245, 194, 231);
  --color-purple: rgb(var(--ctp-lavender));
  --color-purple-rgb: var(--ctp-lavender, 180, 190, 254);
  --color-red: rgb(var(--ctp-red));
  --color-red-rgb: var(--ctp-red, 243, 139, 168);
  --color-yellow: rgb(var(--ctp-yellow));
  --color-yellow-rgb: var(--ctp-yellow, 249, 226, 175);
  --ctp-accent: var(--ctp-rosewater, 245, 224, 220);
  --ctp-base: var(--ctp-ext-base, 30, 30, 46);
  --ctp-blue: var(--ctp-ext-blue, 135, 176, 249);
  --ctp-crust: var(--ctp-ext-crust, 17, 17, 27);
  --ctp-flamingo: var(--ctp-ext-flamingo, 242, 205, 205);
  --ctp-green: var(--ctp-ext-green, 166, 227, 161);
  --ctp-lavender: var(--ctp-ext-lavender, 180, 190, 254);
  --ctp-mantle: var(--ctp-ext-mantle, 24, 24, 37);
  --ctp-maroon: var(--ctp-ext-maroon, 235, 160, 172);
  --ctp-mauve: var(--ctp-ext-mauve, 203, 166, 247);
  --ctp-overlay0: var(--ctp-ext-overlay0, 105, 109, 134);
  --ctp-overlay1: var(--ctp-ext-overlay1, 123, 129, 157);
  --ctp-overlay2: var(--ctp-ext-overlay2, 142, 149, 179);
  --ctp-peach: var(--ctp-ext-peach, 250, 179, 135);
  --ctp-pink: var(--ctp-ext-pink, 245, 194, 231);
  --ctp-red: var(--ctp-ext-red, 243, 139, 168);
  --ctp-rosewater: var(--ctp-ext-rosewater, 245, 224, 220);
  --ctp-sapphire: var(--ctp-ext-sapphire, 116, 199, 236);
  --ctp-sky: var(--ctp-ext-sky, 137, 220, 235);
  --ctp-subtext0: var(--ctp-ext-subtext0, 161, 168, 201);
  --ctp-subtext1: var(--ctp-ext-subtext1, 179, 188, 223);
  --ctp-surface0: var(--ctp-ext-surface0, 49, 50, 68);
  --ctp-surface1: var(--ctp-ext-surface1, 67, 70, 90);
  --ctp-surface2: var(--ctp-ext-surface2, 86, 89, 112);
  --ctp-teal: var(--ctp-ext-teal, 148, 226, 213);
  --ctp-text: var(--ctp-ext-text, 198, 208, 245);
  --ctp-yellow: var(--ctp-ext-yellow, 249, 226, 175);
  --dark: var(--text-normal, rgb(var(--ctp-text)));
  --darkgray: var(--text-normal, rgb(var(--ctp-text)));
  --divider-color: var(--background-modifier-border, rgb(49, 50, 68));
  --divider-color-hover: var(--interactive-accent, rgb(245, 224, 220));
  --drag-ghost-background: rgb(var(--ctp-text));
  --drag-ghost-text-color: rgb(var(--ctp-crust));
  --dropdown-background: var(--interactive-normal, rgb(49, 50, 68));
  --dropdown-background-hover: var(--interactive-hover, rgb(67, 70, 90));
  --file-header-background: var(--background-primary, rgb(30, 30, 46));
  --file-header-background-focused: var(--background-primary, rgb(30, 30, 46));
  --flair-background: var(--interactive-normal, rgb(49, 50, 68));
  --flair-color: var(--text-normal, rgb(198, 208, 245));
  --footnote-divider-color: var(--metadata-divider-color, rgb(49, 50, 68));
  --footnote-id-color: var(--text-muted, rgb(142, 149, 179));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(161, 168, 201));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(198, 208, 245, 0.075));
  --graph-node: var(--text-muted, rgb(142, 149, 179));
  --graph-node-attachment: var(--color-yellow, rgb(249, 226, 175));
  --graph-node-focused: var(--text-accent, rgb(245, 224, 220));
  --graph-node-tag: var(--color-green, rgb(166, 227, 161));
  --graph-node-unresolved: var(--text-faint, rgb(161, 168, 201));
  --graph-text: var(--text-normal, rgb(198, 208, 245));
  --gray: var(--text-muted, rgb(var(--ctp-overlay2)));
  --h1-color: rgb(var(--ctp-red));
  --h2-color: rgb(var(--ctp-peach));
  --h3-color: rgb(var(--ctp-green));
  --h4-color: rgb(var(--ctp-teal));
  --h5-color: rgb(var(--ctp-lavender));
  --h6-color: rgb(var(--ctp-mauve));
  --header-height: var(--anp-alt-tab-custom-height, 40px);
  --heading-formatting: rgb(var(--ctp-accent));
  --highlight: var(--text-highlight-bg, rgba(var(--ctp-yellow), 0.2));
  --highlight-mix-blend-mode: none;
  --hr-color: var(--background-modifier-border, rgb(49, 50, 68));
  --icon-color: var(--text-muted, rgb(142, 149, 179));
  --icon-color-active: var(--text-accent, rgb(245, 224, 220));
  --icon-color-focused: var(--color-accent, rgb(245, 224, 220));
  --icon-color-hover: var(--text-muted, rgb(142, 149, 179));
  --inline-title-color: var(--text-normal, rgb(198, 208, 245));
  --input-date-separator: var(--text-faint, rgb(161, 168, 201));
  --input-placeholder-color: var(--text-faint, rgb(161, 168, 201));
  --interactive-accent: rgb(var(--ctp-accent));
  --interactive-accent-hover: rgba(var(--ctp-accent), 0.9);
  --interactive-accent-rgb: var(--ctp-accent, 245, 224, 220);
  --interactive-hover: rgb(var(--ctp-surface1));
  --interactive-normal: rgb(var(--ctp-surface0));
  --interactive-success: rgb(var(--ctp-green));
  --light: var(--background-primary, rgb(var(--ctp-base)));
  --lightgray: var(--background-secondary, rgb(var(--ctp-mantle)));
  --link-color: var(--text-accent, rgb(245, 224, 220));
  --link-color-hover: var(--text-accent-hover, rgb(245, 224, 220));
  --link-external-color: var(--text-accent, rgb(245, 224, 220));
  --link-external-color-hover: var(--text-accent-hover, rgb(245, 224, 220));
  --link-unresolved-color: var(--text-accent, rgb(245, 224, 220));
  --link-unresolved-decoration-color: rgba(var(--ctp-accent), 0.3);
  --list-marker-color: var(--text-faint, rgb(161, 168, 201));
  --list-marker-color-collapsed: var(--text-accent, rgb(245, 224, 220));
  --list-marker-color-hover: var(--text-muted, rgb(142, 149, 179));
  --max-width-image: 90%;
  --menu-background: var(--background-secondary, rgb(24, 24, 37));
  --menu-border-color: var(--background-modifier-border-hover, rgb(67, 70, 90));
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(17, 17, 27, 0.121),
      0px 3.4px 6.7px rgba(17, 17, 27, 0.179),
      0px 15px 30px rgba(17, 17, 27, 0.3));
  --metadata-border-color: var(--background-modifier-border, rgb(49, 50, 68));
  --metadata-divider-color: var(--background-modifier-border, rgb(49, 50, 68));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  --metadata-input-text-color: var(--text-normal, rgb(198, 208, 245));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  --metadata-label-text-color: var(--text-muted, rgb(142, 149, 179));
  --metadata-label-text-color-hover: var(--text-muted, rgb(142, 149, 179));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  --min-width-image: 50%;
  --modal-background: var(--background-primary, rgb(30, 30, 46));
  --modal-border-color: rgb(var(--ctp-surface0));
  --mono-rgb-0: var(--ctp-crust, 17, 17, 27);
  --mono-rgb-100: var(--ctp-text, 198, 208, 245);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(161, 168, 201));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(161, 168, 201));
  --nav-heading-color: var(--text-normal, rgb(198, 208, 245));
  --nav-heading-color-collapsed: var(--text-faint, rgb(161, 168, 201));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(142, 149, 179));
  --nav-heading-color-hover: var(--text-normal, rgb(198, 208, 245));
  --nav-indentation-guide-color: var(--background-primary, rgb(30, 30, 46));
  --nav-item-background-active: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  --nav-item-background-selected: rgba(var(--ctp-accent), 0.2);
  --nav-item-color: var(--text-muted, rgb(142, 149, 179));
  --nav-item-color-active: var(--text-normal, rgb(198, 208, 245));
  --nav-item-color-highlighted: var(--text-accent, rgb(245, 224, 220));
  --nav-item-color-hover: var(--text-normal, rgb(198, 208, 245));
  --nav-item-color-selected: var(--text-normal, rgb(198, 208, 245));
  --nav-tag-color: var(--text-faint, rgb(161, 168, 201));
  --nav-tag-color-active: var(--text-muted, rgb(142, 149, 179));
  --nav-tag-color-hover: var(--text-muted, rgb(142, 149, 179));
  --pdf-background: var(--background-primary, rgb(30, 30, 46));
  --pdf-dark-opacity: 1;
  --pdf-page-background: var(--background-primary, rgb(30, 30, 46));
  --pdf-sidebar-background: var(--background-primary, rgb(30, 30, 46));
  --pill-border-color: var(--background-modifier-border, rgb(49, 50, 68));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(67, 70, 90));
  --pill-color: var(--text-muted, rgb(142, 149, 179));
  --pill-color-hover: var(--text-normal, rgb(198, 208, 245));
  --pill-color-remove: var(--text-faint, rgb(161, 168, 201));
  --pill-color-remove-hover: var(--text-accent, rgb(245, 224, 220));
  --prompt-background: var(--background-primary, rgb(30, 30, 46));
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(49, 50, 68) 65%, transparent) linear-gradient(rgb(49, 50, 68), color-mix(in srgb, rgb(49, 50, 68) 65%, transparent)));
  --ribbon-background: var(--background-secondary, rgb(24, 24, 37));
  --ribbon-background-collapsed: var(--background-primary, rgb(30, 30, 46));
  --search-clear-button-color: var(--text-muted, rgb(142, 149, 179));
  --search-icon-color: var(--text-muted, rgb(142, 149, 179));
  --search-result-background: var(--background-primary, rgb(30, 30, 46));
  --secondary: var(--text-accent, rgb(var(--ctp-accent)));
  --setting-group-heading-color: var(--text-normal, rgb(198, 208, 245));
  --setting-items-background: var(--background-primary-alt, rgb(24, 24, 37));
  --setting-items-border-color: var(--background-modifier-border, rgb(49, 50, 68));
  --shadow-l: 0px 1.8px 7.3px rgba(var(--ctp-crust), 0.071),
      0px 6.3px 24.7px rgba(var(--ctp-crust), 0.112),
      0px 30px 90px rgba(var(--ctp-crust), 0.2);
  --shadow-s: 0px 1px 2px rgba(var(--ctp-crust), 0.121),
      0px 3.4px 6.7px rgba(var(--ctp-crust), 0.179),
      0px 15px 30px rgba(var(--ctp-crust), 0.3);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(142, 149, 179));
  --shiki-code-background: var(--code-background, rgb(17, 17, 27));
  --shiki-code-comment: var(--text-faint, rgb(161, 168, 201));
  --shiki-code-function: var(--color-green, rgb(166, 227, 161));
  --shiki-code-important: var(--color-orange, rgb(250, 179, 135));
  --shiki-code-keyword: var(--color-pink, rgb(245, 194, 231));
  --shiki-code-normal: var(--text-muted, rgb(142, 149, 179));
  --shiki-code-property: var(--color-cyan, rgb(137, 220, 235));
  --shiki-code-punctuation: var(--text-muted, rgb(142, 149, 179));
  --shiki-code-string: var(--color-yellow, rgb(249, 226, 175));
  --shiki-code-value: var(--color-purple, rgb(180, 190, 254));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(49, 50, 68));
  --shiki-gutter-text-color: var(--text-faint, rgb(161, 168, 201));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(142, 149, 179));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(142, 149, 179));
  --shiki-terminal-dots-color: var(--text-faint, rgb(161, 168, 201));
  --shiki-tooltip-background: var(--background-modifier-message, rgba(17, 17, 27, 0.9));
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(67, 70, 90));
  --slider-track-background: var(--background-modifier-border, rgb(49, 50, 68));
  --status-bar-background: var(--background-secondary, rgb(24, 24, 37));
  --status-bar-border-color: var(--divider-color, rgb(49, 50, 68));
  --status-bar-text-color: var(--text-muted, rgb(142, 149, 179));
  --suggestion-background: var(--background-primary, rgb(30, 30, 46));
  --sync-avatar-color-1: var(--color-red, rgb(243, 139, 168));
  --sync-avatar-color-2: var(--color-orange, rgb(250, 179, 135));
  --sync-avatar-color-3: var(--color-yellow, rgb(249, 226, 175));
  --sync-avatar-color-4: var(--color-green, rgb(166, 227, 161));
  --sync-avatar-color-5: var(--color-cyan, rgb(137, 220, 235));
  --sync-avatar-color-6: var(--color-blue, rgb(135, 176, 249));
  --sync-avatar-color-7: var(--color-purple, rgb(180, 190, 254));
  --sync-avatar-color-8: var(--color-pink, rgb(245, 194, 231));
  --tab-background-active: var(--background-primary, rgb(30, 30, 46));
  --tab-container-background: var(--background-secondary, rgb(24, 24, 37));
  --tab-divider-color: var(--background-modifier-border-hover, rgb(67, 70, 90));
  --tab-inactive-color: rgb(var(--ctp-mantle));
  --tab-outline-color: var(--divider-color, rgb(49, 50, 68));
  --tab-stacked-header-width: var(--anp-stacked-header-width, 40px);
  --tab-stacked-pane-width: calc(var(--anp-tab-stacked-pane-width, 1)*var(--file-line-width));
  --tab-switcher-background: var(--background-secondary, rgb(24, 24, 37));
  --tab-text-color: var(--text-faint, rgb(161, 168, 201));
  --tab-text-color-active: var(--text-muted, rgb(142, 149, 179));
  --tab-text-color-focused: var(--text-muted, rgb(142, 149, 179));
  --tab-text-color-focused-active: var(--text-muted, rgb(142, 149, 179));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(198, 208, 245));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(245, 224, 220));
  --table-add-button-border-color: var(--background-modifier-border, rgb(49, 50, 68));
  --table-border-color: var(--background-modifier-border, rgb(49, 50, 68));
  --table-border-width: var(--anp-table-thickness, 1px);
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(245, 224, 220));
  --table-drag-handle-color: var(--text-faint, rgb(161, 168, 201));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(30, 30, 46));
  --table-header-border-color: var(--table-border-color, rgb(49, 50, 68));
  --table-header-color: var(--text-normal, rgb(198, 208, 245));
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, none);
  --table-selection-border-color: var(--interactive-accent, rgb(245, 224, 220));
  --tag-background: rgba(var(--ctp-accent), 0.1);
  --tag-background-hover: rgba(var(--ctp-accent), 0.2);
  --tag-border-color: rgba(var(--ctp-accent), 0.15);
  --tag-border-color-hover: rgba(var(--ctp-accent), 0.15);
  --tag-color: var(--text-accent, rgb(245, 224, 220));
  --tag-color-hover: var(--text-accent, rgb(245, 224, 220));
  --tertiary: var(--text-accent-hover, rgb(var(--ctp-accent)));
  --text-accent: rgb(var(--ctp-accent));
  --text-accent-hover: rgb(var(--ctp-accent));
  --text-error: rgb(var(--ctp-red));
  --text-error-hover: rgba(var(--ctp-red), 0.8);
  --text-faint: rgb(var(--ctp-subtext0));
  --text-highlight-bg: rgba(var(--ctp-yellow), 0.2);
  --text-highlight-bg-active: rgba(var(--ctp-yellow), 0.4);
  --text-muted: rgb(var(--ctp-overlay2));
  --text-muted-rgb: var(--ctp-overlay2, 142, 149, 179);
  --text-normal: rgb(var(--ctp-text));
  --text-on-accent: rgb(var(--ctp-base));
  --text-selection: rgba(var(--ctp-accent), 0.25);
  --text-success: rgb(var(--ctp-green));
  --text-warning: var(--color-orange, rgb(250, 179, 135));
  --textHighlight: var(--text-highlight-bg, rgba(var(--ctp-yellow), 0.2));
  --titlebar-background: var(--background-secondary, rgb(24, 24, 37));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(17, 17, 27));
  --titlebar-border-color: var(--background-modifier-border, rgb(49, 50, 68));
  --titlebar-text-color: var(--text-muted, rgb(142, 149, 179));
  --titlebar-text-color-focused: var(--color-accent, rgb(245, 224, 220));
  --vault-profile-color: var(--text-normal, rgb(198, 208, 245));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(198, 208, 245));
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(var(--ctp-crust), 0.6);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(24, 24, 37));
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(30, 30, 46));
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(24, 24, 37));
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(49, 50, 68);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(24, 24, 37));
  border-left-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(198, 208, 245));
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(198, 208, 245));
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(198, 208, 245));
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(198, 208, 245));
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(249, 226, 175, 0.2));
  color: var(--text-normal, rgb(198, 208, 245));
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(161, 168, 201);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(245, 224, 220));
  border-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(142, 149, 179));
  outline: rgb(142, 149, 179) none 0px;
  text-decoration-color: rgb(142, 149, 179);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(245, 224, 220));
  outline: rgb(245, 224, 220) none 0px;
  text-decoration-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(245, 224, 220));
  outline: rgb(245, 224, 220) none 0px;
  text-decoration-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(245, 224, 220));
  outline: rgb(245, 224, 220) none 0px;
  text-decoration: underline rgba(245, 224, 220, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(245, 224, 220, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(161, 168, 201));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(17, 17, 27, 0.5));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--table-text-color, rgb(198, 208, 245));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--table-header-color, rgb(198, 208, 245));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(17, 17, 27));
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--code-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(17, 17, 27));
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(243, 139, 168);
  border-left-color: rgb(243, 139, 168);
  border-right-color: rgb(243, 139, 168);
  border-top-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(24, 24, 37));
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(245, 224, 220);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(161, 168, 201);
  border-left-color: rgb(161, 168, 201);
  border-right-color: rgb(161, 168, 201);
  border-top-color: rgb(161, 168, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(142, 149, 179);
  text-decoration: line-through;
  text-decoration-color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 179, 135);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(161, 168, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 226, 213);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(116, 199, 236);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 176, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 160, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(203, 166, 247);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--ctp-sky, 137, 220, 235);
  background: rgba(137, 220, 235, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 220, 235, 0.25);
  border-left-color: rgba(137, 220, 235, 0.25);
  border-right-color: rgba(137, 220, 235, 0.25);
  border-top-color: rgba(137, 220, 235, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--ctp-red, 243, 139, 168);
  background: rgba(243, 139, 168, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--ctp-red, 243, 139, 168);
  background: rgba(243, 139, 168, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--ctp-lavender, 180, 190, 254);
  background: rgba(180, 190, 254, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 190, 254, 0.25);
  border-left-color: rgba(180, 190, 254, 0.25);
  border-right-color: rgba(180, 190, 254, 0.25);
  border-top-color: rgba(180, 190, 254, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--ctp-red, 243, 139, 168);
  background: rgba(243, 139, 168, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 135, 176, 249);
  background: rgba(135, 176, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--ctp-blue, 135, 176, 249);
  background: rgba(135, 176, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--ctp-peach, 250, 179, 135);
  background: rgba(250, 179, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.25);
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--ctp-green, 166, 227, 161);
  background: rgba(166, 227, 161, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(166, 227, 161, 0.25);
  border-left-color: rgba(166, 227, 161, 0.25);
  border-right-color: rgba(166, 227, 161, 0.25);
  border-top-color: rgba(166, 227, 161, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--ctp-sky, 137, 220, 235);
  background: rgba(137, 220, 235, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(137, 220, 235, 0.25);
  border-left-color: rgba(137, 220, 235, 0.25);
  border-right-color: rgba(137, 220, 235, 0.25);
  border-top-color: rgba(137, 220, 235, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--ctp-blue, 135, 176, 249);
  background: rgba(135, 176, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--ctp-peach, 250, 179, 135);
  background: rgba(250, 179, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.25);
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(135, 176, 249));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(198, 208, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
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
  background-color: rgba(17, 17, 27, 0.3);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(30, 30, 46));
  border-bottom-color: rgb(105, 109, 134);
  border-left-color: rgb(105, 109, 134);
  border-right-color: rgb(105, 109, 134);
  border-top-color: rgb(105, 109, 134);
  box-shadow: var(--shadow-l, rgba(17, 17, 27, 0.07) 0px 1.8px 7.3px 0px, rgba(17, 17, 27, 0.114) 0px 6.3px 24.7px 0px, rgba(17, 17, 27, 0.2) 0px 30px 90px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(105, 109, 134);
  border-left-color: rgb(105, 109, 134);
  border-right-color: rgb(105, 109, 134);
  border-top-color: rgb(105, 109, 134);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 37);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(198, 208, 245, 0.075));
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(245, 224, 220, 0.1));
  border-bottom-color: rgba(245, 224, 220, 0.15);
  border-left-color: rgba(245, 224, 220, 0.15);
  border-right-color: rgba(245, 224, 220, 0.15);
  border-top-color: rgba(245, 224, 220, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(243, 139, 168));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(198, 208, 245));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(250, 179, 135));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(198, 208, 245));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(166, 227, 161));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(148, 226, 213));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(180, 190, 254));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(203, 166, 247));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--ctp-blue, 135, 176, 249);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(142, 149, 179));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(142, 149, 179));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(198, 208, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: var(--icon-color, rgb(142, 149, 179));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(24, 24, 37));
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--status-bar-text-color, rgb(142, 149, 179));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(142, 149, 179);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(142, 149, 179));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 149, 179);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(142, 149, 179));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: var(--icon-color, rgb(142, 149, 179));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(142, 149, 179);
  stroke: rgb(142, 149, 179);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(161, 168, 201));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(24, 24, 37));
  border-color: rgb(198, 208, 245);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(49, 50, 68);
  color: var(--table-header-color, rgb(198, 208, 245));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: var(--text-muted, rgb(142, 149, 179));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(49, 50, 68);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(245, 224, 220, 0.1));
  color: var(--pill-color, rgb(245, 224, 220));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(30, 30, 46));
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(24, 24, 37));
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(17, 17, 27));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(198, 208, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(24, 24, 37));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: var(--text-normal, rgb(142, 149, 179));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(17, 17, 27));
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: var(--code-normal, rgb(198, 208, 245));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(245, 224, 220, 0.1));
  border-bottom-color: rgba(245, 224, 220, 0.15);
  border-left-color: rgba(245, 224, 220, 0.15);
  border-right-color: rgba(245, 224, 220, 0.15);
  border-top-color: rgba(245, 224, 220, 0.15);
  color: var(--tag-color, rgb(245, 224, 220));
}`,
  },
  light: {
    base: `:root:root {
  --anp-bold-color: var(--ctp-red, 210, 15, 57);
  --anp-header-font: "Noto Serif";
  --anp-header-margin-value: 15px;
  --anp-highlight-color: var(--ctp-yellow, 228, 147, 32);
  --anp-italic-color: var(--ctp-green, 64, 160, 43);
  --anp-preview-width-max: 800px;
  --anp-preview-width-pct: 95%;
  --anp-rainbow-folder-bg-opacity: 1;
  --anp-rainbow-folder-border-opacity: 1;
  --anp-rainbow-folder-collapse-border-custom: #00000044;
  --anp-speech-bubble-opacity: var(--anp-sp-op-light, 0.5);
  --anp-table-width-pct: 100%;
  --background-modifier-active: hsla(var(--color-accent-hsl), 0.1);
  --background-modifier-active-hover: rgba(var(--ctp-accent), 0.15);
  --background-modifier-border: rgb(var(--ctp-surface1));
  --background-modifier-border-focus: rgb(var(--ctp-overlay0));
  --background-modifier-border-hover: rgb(var(--ctp-surface2));
  --background-modifier-cover: #00000022;
  --background-modifier-error: rgba(var(--ctp-red), 1);
  --background-modifier-error-hover: rgba(var(--ctp-red), 0.9);
  --background-modifier-error-rgb: var(--ctp-red, 210, 15, 57);
  --background-modifier-form-field: rgba(var(--ctp-crust), 0.3);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(220, 224, 232, 0.3));
  --background-modifier-hover: rgba(var(--ctp-text), 0.075);
  --background-modifier-message: rgba(var(--ctp-crust), 0.9);
  --background-modifier-success: rgba(var(--ctp-green), 1);
  --background-modifier-success-hover: rgba(var(--ctp-green), 0.9);
  --background-modifier-success-rgb: var(--ctp-green, 64, 160, 43);
  --background-primary: rgb(var(--ctp-base));
  --background-primary-alt: rgb(var(--ctp-mantle));
  --background-secondary: rgb(var(--ctp-mantle));
  --background-secondary-alt: rgb(var(--ctp-crust));
  --bases-cards-background: var(--background-primary, rgb(239, 241, 245));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(230, 233, 239));
  --bases-embed-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --bases-group-heading-property-color: var(--text-muted, rgb(124, 127, 147));
  --bases-table-border-color: var(--table-border-color, rgb(188, 192, 204));
  --bases-table-cell-background-active: var(--background-primary, rgb(239, 241, 245));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(230, 233, 239));
  --bases-table-group-background: var(--background-primary-alt, rgb(230, 233, 239));
  --bases-table-header-background: var(--background-primary, rgb(239, 241, 245));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --bases-table-header-color: var(--text-muted, rgb(124, 127, 147));
  --bases-table-summary-background: var(--background-primary, rgb(239, 241, 245));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --blockquote-background-color: rgba(var(--ctp-crust), 0.5);
  --blockquote-border-color: rgb(var(--ctp-accent));
  --callout-blend-mode: var(--highlight-mix-blend-mode, none);
  --callout-bug: var(--color-red-rgb, 210, 15, 57);
  --callout-content-padding: var(--size-4-2, 8px);
  --callout-default: var(--color-blue-rgb, 42, 110, 245);
  --callout-error: var(--color-red-rgb, 210, 15, 57);
  --callout-example: var(--color-purple-rgb, 114, 135, 253);
  --callout-fail: var(--color-red-rgb, 210, 15, 57);
  --callout-important: var(--color-cyan-rgb, 4, 165, 229);
  --callout-info: var(--color-blue-rgb, 42, 110, 245);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-orange-rgb, 254, 100, 11);
  --callout-success: var(--color-green-rgb, 64, 160, 43);
  --callout-summary: var(--color-cyan-rgb, 4, 165, 229);
  --callout-tip: var(--color-cyan-rgb, 4, 165, 229);
  --callout-title-padding: var(--size-4-2, 8px);
  --callout-todo: var(--color-blue-rgb, 42, 110, 245);
  --callout-warning: var(--color-orange-rgb, 254, 100, 11);
  --canvas-background: var(--background-primary, rgb(239, 241, 245));
  --canvas-card-label-color: var(--text-faint, rgb(108, 111, 133));
  --canvas-color: var(--ctp-overlay0, 156, 160, 176);
  --canvas-color-1: var(--color-red-rgb, 210, 15, 57);
  --canvas-color-2: var(--color-orange-rgb, 254, 100, 11);
  --canvas-color-3: var(--color-yellow-rgb, 228, 147, 32);
  --canvas-color-4: var(--color-green-rgb, 64, 160, 43);
  --canvas-color-5: var(--color-cyan-rgb, 4, 165, 229);
  --canvas-color-6: var(--color-purple-rgb, 114, 135, 253);
  --canvas-dot-pattern: var(--color-base-30, rgb(188, 192, 204));
  --card-background-color: rgb(var(--ctp-crust));
  --card-foreground-color: rgb(var(--ctp-base));
  --caret-color: var(--text-normal, rgb(76, 79, 105));
  --checkbox-border-color: var(--text-faint, rgb(108, 111, 133));
  --checkbox-border-color-hover: var(--text-muted, rgb(124, 127, 147));
  --checkbox-color: var(--interactive-accent, rgb(222, 149, 132));
  --checkbox-color-hover: var(--interactive-accent-hover, rgba(222, 149, 132, 0.9));
  --checkbox-marker-color: var(--background-primary, rgb(239, 241, 245));
  --checklist-done-color: var(--text-muted, rgb(124, 127, 147));
  --code-background: var(--anp-code-bg-color, var(--background-secondary-alt));
  --code-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --code-bracket-background: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --code-comment: var(--text-faint, rgb(108, 111, 133));
  --code-function: var(--color-yellow, rgb(228, 147, 32));
  --code-important: var(--color-orange, rgb(254, 100, 11));
  --code-keyword: var(--color-pink, rgb(236, 131, 208));
  --code-normal: var(--anp-code-text-color, var(--text-normal));
  --code-operator: var(--color-red, rgb(210, 15, 57));
  --code-property: var(--color-cyan, rgb(4, 165, 229));
  --code-punctuation: var(--text-muted, rgb(124, 127, 147));
  --code-string: var(--color-green, rgb(64, 160, 43));
  --code-tag: var(--color-red, rgb(210, 15, 57));
  --code-value: var(--color-purple, rgb(114, 135, 253));
  --collapse-icon-color: var(--text-faint, rgb(108, 111, 133));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(222, 149, 132));
  --color-accent: rgb(var(--ctp-accent));
  --color-accent-1: rgb(var(--ctp-accent));
  --color-accent-2: rgba(var(--ctp-accent), 0.9);
  --color-base-00: rgb(var(--ctp-crust));
  --color-base-10: rgb(var(--ctp-mantle));
  --color-base-100: rgb(var(--ctp-text));
  --color-base-20: rgb(var(--ctp-base));
  --color-base-25: rgb(var(--ctp-surface0));
  --color-base-30: rgb(var(--ctp-surface1));
  --color-base-35: rgb(var(--ctp-surface2));
  --color-base-40: rgb(var(--ctp-overlay0));
  --color-base-50: rgb(var(--ctp-overlay1));
  --color-base-60: rgb(var(--ctp-overlay2));
  --color-base-70: rgb(var(--ctp-subtext0));
  --color-blue: rgb(var(--ctp-blue));
  --color-blue-rgb: var(--ctp-blue, 42, 110, 245);
  --color-cyan: rgb(var(--ctp-sky));
  --color-cyan-rgb: var(--ctp-sky, 4, 165, 229);
  --color-green: rgb(var(--ctp-green));
  --color-green-rgb: var(--ctp-green, 64, 160, 43);
  --color-orange: rgb(var(--ctp-peach));
  --color-orange-rgb: var(--ctp-peach, 254, 100, 11);
  --color-pink: rgb(var(--ctp-pink));
  --color-pink-rgb: var(--ctp-pink, 236, 131, 208);
  --color-purple: rgb(var(--ctp-lavender));
  --color-purple-rgb: var(--ctp-lavender, 114, 135, 253);
  --color-red: rgb(var(--ctp-red));
  --color-red-rgb: var(--ctp-red, 210, 15, 57);
  --color-yellow: rgb(var(--ctp-yellow));
  --color-yellow-rgb: var(--ctp-yellow, 228, 147, 32);
  --ctp-accent: var(--ctp-rosewater, 222, 149, 132);
  --ctp-base: var(--ctp-ext-base, 239, 241, 245);
  --ctp-blue: var(--ctp-ext-blue, 42, 110, 245);
  --ctp-crust: var(--ctp-ext-crust, 220, 224, 232);
  --ctp-flamingo: var(--ctp-ext-flamingo, 221, 120, 120);
  --ctp-green: var(--ctp-ext-green, 64, 160, 43);
  --ctp-lavender: var(--ctp-ext-lavender, 114, 135, 253);
  --ctp-mantle: var(--ctp-ext-mantle, 230, 233, 239);
  --ctp-maroon: var(--ctp-ext-maroon, 230, 69, 83);
  --ctp-mauve: var(--ctp-ext-mauve, 136, 57, 239);
  --ctp-overlay0: var(--ctp-ext-overlay0, 156, 160, 176);
  --ctp-overlay1: var(--ctp-ext-overlay1, 140, 143, 161);
  --ctp-overlay2: var(--ctp-ext-overlay2, 124, 127, 147);
  --ctp-peach: var(--ctp-ext-peach, 254, 100, 11);
  --ctp-pink: var(--ctp-ext-pink, 236, 131, 208);
  --ctp-red: var(--ctp-ext-red, 210, 15, 57);
  --ctp-rosewater: var(--ctp-ext-rosewater, 222, 149, 132);
  --ctp-sapphire: var(--ctp-ext-sapphire, 32, 159, 181);
  --ctp-sky: var(--ctp-ext-sky, 4, 165, 229);
  --ctp-subtext0: var(--ctp-ext-subtext0, 108, 111, 133);
  --ctp-subtext1: var(--ctp-ext-subtext1, 92, 95, 119);
  --ctp-surface0: var(--ctp-ext-surface0, 204, 208, 218);
  --ctp-surface1: var(--ctp-ext-surface1, 188, 192, 204);
  --ctp-surface2: var(--ctp-ext-surface2, 172, 176, 190);
  --ctp-teal: var(--ctp-ext-teal, 23, 146, 153);
  --ctp-text: var(--ctp-ext-text, 76, 79, 105);
  --ctp-yellow: var(--ctp-ext-yellow, 228, 147, 32);
  --dark: var(--text-normal, rgb(var(--ctp-text)));
  --darkgray: var(--text-normal, rgb(var(--ctp-text)));
  --divider-color: var(--background-modifier-border, rgb(188, 192, 204));
  --divider-color-hover: var(--interactive-accent, rgb(222, 149, 132));
  --drag-ghost-background: rgb(var(--ctp-text));
  --drag-ghost-text-color: rgb(var(--ctp-crust));
  --dropdown-background: var(--interactive-normal, rgb(204, 208, 218));
  --dropdown-background-hover: var(--interactive-hover, rgb(188, 192, 204));
  --file-header-background: var(--background-primary, rgb(239, 241, 245));
  --file-header-background-focused: var(--background-primary, rgb(239, 241, 245));
  --flair-background: var(--interactive-normal, rgb(204, 208, 218));
  --flair-color: var(--text-normal, rgb(76, 79, 105));
  --footnote-divider-color: var(--metadata-divider-color, rgb(188, 192, 204));
  --footnote-id-color: var(--text-muted, rgb(124, 127, 147));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(108, 111, 133));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(76, 79, 105, 0.075));
  --graph-node: var(--text-muted, rgb(124, 127, 147));
  --graph-node-attachment: var(--color-yellow, rgb(228, 147, 32));
  --graph-node-focused: var(--text-accent, rgb(222, 149, 132));
  --graph-node-tag: var(--color-green, rgb(64, 160, 43));
  --graph-node-unresolved: var(--text-faint, rgb(108, 111, 133));
  --graph-text: var(--text-normal, rgb(76, 79, 105));
  --gray: var(--text-muted, rgb(var(--ctp-overlay2)));
  --h1-color: rgb(var(--ctp-red));
  --h2-color: rgb(var(--ctp-peach));
  --h3-color: rgb(var(--ctp-green));
  --h4-color: rgb(var(--ctp-teal));
  --h5-color: rgb(var(--ctp-lavender));
  --h6-color: rgb(var(--ctp-mauve));
  --header-height: var(--anp-alt-tab-custom-height, 40px);
  --heading-formatting: rgb(var(--ctp-accent));
  --highlight: var(--text-highlight-bg, rgba(var(--ctp-yellow), 0.2));
  --highlight-mix-blend-mode: none;
  --hr-color: var(--background-modifier-border, rgb(188, 192, 204));
  --icon-color: var(--text-muted, rgb(124, 127, 147));
  --icon-color-active: var(--text-accent, rgb(222, 149, 132));
  --icon-color-focused: var(--color-accent, rgb(222, 149, 132));
  --icon-color-hover: var(--text-muted, rgb(124, 127, 147));
  --inline-title-color: var(--text-normal, rgb(76, 79, 105));
  --input-date-separator: var(--text-faint, rgb(108, 111, 133));
  --input-placeholder-color: var(--text-faint, rgb(108, 111, 133));
  --interactive-accent: rgb(var(--ctp-accent));
  --interactive-accent-hover: rgba(var(--ctp-accent), 0.9);
  --interactive-accent-rgb: var(--ctp-accent, 222, 149, 132);
  --interactive-hover: rgb(var(--ctp-surface1));
  --interactive-normal: rgb(var(--ctp-surface0));
  --interactive-success: rgb(var(--ctp-green));
  --light: var(--background-primary, rgb(var(--ctp-base)));
  --lightgray: var(--background-secondary, rgb(var(--ctp-mantle)));
  --link-color: var(--text-accent, rgb(222, 149, 132));
  --link-color-hover: var(--text-accent-hover, rgb(222, 149, 132));
  --link-external-color: var(--text-accent, rgb(222, 149, 132));
  --link-external-color-hover: var(--text-accent-hover, rgb(222, 149, 132));
  --link-unresolved-color: var(--text-accent, rgb(222, 149, 132));
  --link-unresolved-decoration-color: rgba(var(--ctp-accent), 0.3);
  --list-marker-color: var(--text-faint, rgb(108, 111, 133));
  --list-marker-color-collapsed: var(--text-accent, rgb(222, 149, 132));
  --list-marker-color-hover: var(--text-muted, rgb(124, 127, 147));
  --max-width-image: 90%;
  --menu-background: var(--background-secondary, rgb(230, 233, 239));
  --menu-border-color: var(--background-modifier-border-hover, rgb(172, 176, 190));
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(220, 224, 232, 0.121),
      0px 3.4px 6.7px rgba(220, 224, 232, 0.179),
      0px 15px 30px rgba(220, 224, 232, 0.3));
  --metadata-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --metadata-divider-color: var(--background-modifier-border, rgb(188, 192, 204));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --metadata-input-text-color: var(--text-normal, rgb(76, 79, 105));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --metadata-label-text-color: var(--text-muted, rgb(124, 127, 147));
  --metadata-label-text-color-hover: var(--text-muted, rgb(124, 127, 147));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --min-width-image: 50%;
  --modal-background: var(--background-primary, rgb(239, 241, 245));
  --modal-border-color: rgb(var(--ctp-surface0));
  --mono-rgb-0: var(--ctp-crust, 220, 224, 232);
  --mono-rgb-100: var(--ctp-text, 76, 79, 105);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(108, 111, 133));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(108, 111, 133));
  --nav-heading-color: var(--text-normal, rgb(76, 79, 105));
  --nav-heading-color-collapsed: var(--text-faint, rgb(108, 111, 133));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(124, 127, 147));
  --nav-heading-color-hover: var(--text-normal, rgb(76, 79, 105));
  --nav-indentation-guide-color: var(--background-primary, rgb(239, 241, 245));
  --nav-item-background-active: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --nav-item-background-selected: rgba(var(--ctp-accent), 0.2);
  --nav-item-color: var(--text-muted, rgb(124, 127, 147));
  --nav-item-color-active: var(--text-normal, rgb(76, 79, 105));
  --nav-item-color-highlighted: var(--text-accent, rgb(222, 149, 132));
  --nav-item-color-hover: var(--text-normal, rgb(76, 79, 105));
  --nav-item-color-selected: var(--text-normal, rgb(76, 79, 105));
  --nav-tag-color: var(--text-faint, rgb(108, 111, 133));
  --nav-tag-color-active: var(--text-muted, rgb(124, 127, 147));
  --nav-tag-color-hover: var(--text-muted, rgb(124, 127, 147));
  --pdf-background: var(--background-primary, rgb(239, 241, 245));
  --pdf-dark-opacity: 1;
  --pdf-page-background: var(--background-primary, rgb(239, 241, 245));
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px transparent;
  --pdf-sidebar-background: var(--background-primary, rgb(239, 241, 245));
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px transparent;
  --pill-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(172, 176, 190));
  --pill-color: var(--text-muted, rgb(124, 127, 147));
  --pill-color-hover: var(--text-normal, rgb(76, 79, 105));
  --pill-color-remove: var(--text-faint, rgb(108, 111, 133));
  --pill-color-remove-hover: var(--text-accent, rgb(222, 149, 132));
  --prompt-background: var(--background-primary, rgb(239, 241, 245));
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent)));
  --ribbon-background: var(--background-secondary, rgb(230, 233, 239));
  --ribbon-background-collapsed: var(--background-primary, rgb(239, 241, 245));
  --search-clear-button-color: var(--text-muted, rgb(124, 127, 147));
  --search-icon-color: var(--text-muted, rgb(124, 127, 147));
  --search-result-background: var(--background-primary, rgb(239, 241, 245));
  --secondary: var(--text-accent, rgb(var(--ctp-accent)));
  --setting-group-heading-color: var(--text-normal, rgb(76, 79, 105));
  --setting-items-background: var(--background-primary-alt, rgb(230, 233, 239));
  --setting-items-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --shadow-l: 0px 1.8px 7.3px rgba(var(--ctp-crust), 0.071),
      0px 6.3px 24.7px rgba(var(--ctp-crust), 0.112),
      0px 30px 90px rgba(var(--ctp-crust), 0.2);
  --shadow-s: 0px 1px 2px rgba(var(--ctp-crust), 0.121),
      0px 3.4px 6.7px rgba(var(--ctp-crust), 0.179),
      0px 15px 30px rgba(var(--ctp-crust), 0.3);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(124, 127, 147));
  --shiki-code-background: var(--code-background, rgb(220, 224, 232));
  --shiki-code-comment: var(--text-faint, rgb(108, 111, 133));
  --shiki-code-function: var(--color-green, rgb(64, 160, 43));
  --shiki-code-important: var(--color-orange, rgb(254, 100, 11));
  --shiki-code-keyword: var(--color-pink, rgb(236, 131, 208));
  --shiki-code-normal: var(--text-muted, rgb(124, 127, 147));
  --shiki-code-property: var(--color-cyan, rgb(4, 165, 229));
  --shiki-code-punctuation: var(--text-muted, rgb(124, 127, 147));
  --shiki-code-string: var(--color-yellow, rgb(228, 147, 32));
  --shiki-code-value: var(--color-purple, rgb(114, 135, 253));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --shiki-gutter-text-color: var(--text-faint, rgb(108, 111, 133));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(124, 127, 147));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(124, 127, 147));
  --shiki-terminal-dots-color: var(--text-faint, rgb(108, 111, 133));
  --shiki-tooltip-background: var(--background-modifier-message, rgba(220, 224, 232, 0.9));
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(172, 176, 190));
  --slider-track-background: var(--background-modifier-border, rgb(188, 192, 204));
  --status-bar-background: var(--background-secondary, rgb(230, 233, 239));
  --status-bar-border-color: var(--divider-color, rgb(188, 192, 204));
  --status-bar-text-color: var(--text-muted, rgb(124, 127, 147));
  --suggestion-background: var(--background-primary, rgb(239, 241, 245));
  --sync-avatar-color-1: var(--color-red, rgb(210, 15, 57));
  --sync-avatar-color-2: var(--color-orange, rgb(254, 100, 11));
  --sync-avatar-color-3: var(--color-yellow, rgb(228, 147, 32));
  --sync-avatar-color-4: var(--color-green, rgb(64, 160, 43));
  --sync-avatar-color-5: var(--color-cyan, rgb(4, 165, 229));
  --sync-avatar-color-6: var(--color-blue, rgb(42, 110, 245));
  --sync-avatar-color-7: var(--color-purple, rgb(114, 135, 253));
  --sync-avatar-color-8: var(--color-pink, rgb(236, 131, 208));
  --tab-background-active: var(--background-primary, rgb(239, 241, 245));
  --tab-container-background: var(--background-secondary, rgb(230, 233, 239));
  --tab-divider-color: var(--background-modifier-border-hover, rgb(172, 176, 190));
  --tab-inactive-color: rgb(var(--ctp-mantle));
  --tab-outline-color: var(--divider-color, rgb(188, 192, 204));
  --tab-stacked-header-width: var(--anp-stacked-header-width, 40px);
  --tab-stacked-pane-width: calc(var(--anp-tab-stacked-pane-width, 1)*var(--file-line-width));
  --tab-switcher-background: var(--background-secondary, rgb(230, 233, 239));
  --tab-text-color: var(--text-faint, rgb(108, 111, 133));
  --tab-text-color-active: var(--text-muted, rgb(124, 127, 147));
  --tab-text-color-focused: var(--text-muted, rgb(124, 127, 147));
  --tab-text-color-focused-active: var(--text-muted, rgb(124, 127, 147));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(76, 79, 105));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(222, 149, 132));
  --table-add-button-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --table-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --table-border-width: var(--anp-table-thickness, 1px);
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(222, 149, 132));
  --table-drag-handle-color: var(--text-faint, rgb(108, 111, 133));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(239, 241, 245));
  --table-header-border-color: var(--table-border-color, rgb(188, 192, 204));
  --table-header-color: var(--text-normal, rgb(76, 79, 105));
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, none);
  --table-selection-border-color: var(--interactive-accent, rgb(222, 149, 132));
  --tag-background: rgba(var(--ctp-accent), 0.1);
  --tag-background-hover: rgba(var(--ctp-accent), 0.2);
  --tag-border-color: rgba(var(--ctp-accent), 0.15);
  --tag-border-color-hover: rgba(var(--ctp-accent), 0.15);
  --tag-color: var(--text-accent, rgb(222, 149, 132));
  --tag-color-hover: var(--text-accent, rgb(222, 149, 132));
  --tertiary: var(--text-accent-hover, rgb(var(--ctp-accent)));
  --text-accent: rgb(var(--ctp-accent));
  --text-accent-hover: rgb(var(--ctp-accent));
  --text-error: rgb(var(--ctp-red));
  --text-error-hover: rgba(var(--ctp-red), 0.8);
  --text-faint: rgb(var(--ctp-subtext0));
  --text-highlight-bg: rgba(var(--ctp-yellow), 0.2);
  --text-highlight-bg-active: rgba(var(--ctp-yellow), 0.4);
  --text-muted: rgb(var(--ctp-overlay2));
  --text-muted-rgb: var(--ctp-overlay2, 124, 127, 147);
  --text-normal: rgb(var(--ctp-text));
  --text-on-accent: rgb(var(--ctp-base));
  --text-selection: rgba(var(--ctp-accent), 0.25);
  --text-success: rgb(var(--ctp-green));
  --text-warning: var(--color-orange, rgb(254, 100, 11));
  --textHighlight: var(--text-highlight-bg, rgba(var(--ctp-yellow), 0.2));
  --titlebar-background: var(--background-secondary, rgb(230, 233, 239));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(220, 224, 232));
  --titlebar-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --titlebar-text-color: var(--text-muted, rgb(124, 127, 147));
  --titlebar-text-color-focused: var(--color-accent, rgb(222, 149, 132));
  --vault-profile-color: var(--text-normal, rgb(76, 79, 105));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(76, 79, 105));
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(var(--ctp-crust), 0.6);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(230, 233, 239));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(239, 241, 245));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(230, 233, 239));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(230, 233, 239));
  border-left-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(76, 79, 105));
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(76, 79, 105));
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(76, 79, 105));
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(76, 79, 105));
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(228, 147, 32, 0.2));
  color: var(--text-normal, rgb(76, 79, 105));
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body del {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(222, 149, 132));
  border-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(124, 127, 147));
  outline: rgb(124, 127, 147) none 0px;
  text-decoration-color: rgb(124, 127, 147);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(222, 149, 132));
  outline: rgb(222, 149, 132) none 0px;
  text-decoration-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(222, 149, 132));
  outline: rgb(222, 149, 132) none 0px;
  text-decoration-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(222, 149, 132));
  outline: rgb(222, 149, 132) none 0px;
  text-decoration: underline rgba(222, 149, 132, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(222, 149, 132, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(108, 111, 133));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(220, 224, 232, 0.5));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body table {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--table-text-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--table-header-color, rgb(76, 79, 105));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(220, 224, 232));
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--code-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(220, 224, 232));
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(210, 15, 57);
  border-left-color: rgb(210, 15, 57);
  border-right-color: rgb(210, 15, 57);
  border-top-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(230, 233, 239));
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(124, 127, 147);
  text-decoration: line-through;
  text-decoration-color: rgb(124, 127, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 100, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(23, 146, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 159, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 110, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 57, 239);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 69, 83);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 57, 239);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--ctp-sky, 4, 165, 229);
  background: rgba(4, 165, 229, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(4, 165, 229, 0.25);
  border-left-color: rgba(4, 165, 229, 0.25);
  border-right-color: rgba(4, 165, 229, 0.25);
  border-top-color: rgba(4, 165, 229, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--ctp-red, 210, 15, 57);
  background: rgba(210, 15, 57, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--ctp-red, 210, 15, 57);
  background: rgba(210, 15, 57, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--ctp-lavender, 114, 135, 253);
  background: rgba(114, 135, 253, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(114, 135, 253, 0.25);
  border-left-color: rgba(114, 135, 253, 0.25);
  border-right-color: rgba(114, 135, 253, 0.25);
  border-top-color: rgba(114, 135, 253, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--ctp-red, 210, 15, 57);
  background: rgba(210, 15, 57, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 42, 110, 245);
  background: rgba(42, 110, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--ctp-blue, 42, 110, 245);
  background: rgba(42, 110, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--ctp-peach, 254, 100, 11);
  background: rgba(254, 100, 11, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(254, 100, 11, 0.25);
  border-left-color: rgba(254, 100, 11, 0.25);
  border-right-color: rgba(254, 100, 11, 0.25);
  border-top-color: rgba(254, 100, 11, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--ctp-green, 64, 160, 43);
  background: rgba(64, 160, 43, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(64, 160, 43, 0.25);
  border-left-color: rgba(64, 160, 43, 0.25);
  border-right-color: rgba(64, 160, 43, 0.25);
  border-top-color: rgba(64, 160, 43, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--ctp-sky, 4, 165, 229);
  background: rgba(4, 165, 229, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(4, 165, 229, 0.25);
  border-left-color: rgba(4, 165, 229, 0.25);
  border-right-color: rgba(4, 165, 229, 0.25);
  border-top-color: rgba(4, 165, 229, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--ctp-blue, 42, 110, 245);
  background: rgba(42, 110, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--ctp-peach, 254, 100, 11);
  background: rgba(254, 100, 11, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(254, 100, 11, 0.25);
  border-left-color: rgba(254, 100, 11, 0.25);
  border-right-color: rgba(254, 100, 11, 0.25);
  border-top-color: rgba(254, 100, 11, 0.25);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(42, 110, 245));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
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
  background-color: rgba(220, 224, 232, 0.3);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(239, 241, 245));
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
  box-shadow: var(--shadow-l, rgba(220, 224, 232, 0.07) 0px 1.8px 7.3px 0px, rgba(220, 224, 232, 0.114) 0px 6.3px 24.7px 0px, rgba(220, 224, 232, 0.2) 0px 30px 90px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(222, 149, 132, 0.1));
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(222, 149, 132);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(210, 15, 57));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(254, 100, 11));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(64, 160, 43));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(23, 146, 153));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(114, 135, 253));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(136, 57, 239));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--ctp-blue, 42, 110, 245);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(124, 127, 147));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(124, 127, 147));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 79, 105);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: var(--icon-color, rgb(124, 127, 147));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(230, 233, 239));
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--status-bar-text-color, rgb(124, 127, 147));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(124, 127, 147);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(124, 127, 147));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(124, 127, 147);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(124, 127, 147));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: var(--icon-color, rgb(124, 127, 147));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(124, 127, 147);
  stroke: rgb(124, 127, 147);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(108, 111, 133));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(239, 241, 245));
  border-color: rgb(76, 79, 105);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(188, 192, 204);
  color: var(--table-header-color, rgb(76, 79, 105));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--text-muted, rgb(124, 127, 147));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(222, 149, 132, 0.1));
  color: var(--pill-color, rgb(222, 149, 132));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(239, 241, 245));
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(230, 233, 239));
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(220, 224, 232));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(76, 79, 105);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(230, 233, 239));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: var(--text-normal, rgb(124, 127, 147));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(220, 224, 232));
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: var(--code-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(222, 149, 132, 0.1));
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
  color: var(--tag-color, rgb(222, 149, 132));
}`,
  },
  classSettings: {
    "ctp-latte": {
      light: `.ctp-latte, .ctp-latte .themed-color-wrapper > .theme-light {
--ctp-rosewater: var(--ctp-ext-rosewater, 222, 149, 132);
--ctp-flamingo: var(--ctp-ext-flamingo, 221, 120, 120);
--ctp-pink: var(--ctp-ext-pink, 236, 131, 208);
--ctp-mauve: var(--ctp-ext-mauve, 136, 57, 239);
--ctp-red: var(--ctp-ext-red, 210, 15, 57);
--ctp-maroon: var(--ctp-ext-maroon, 230, 69, 83);
--ctp-peach: var(--ctp-ext-peach, 254, 100, 11);
--ctp-yellow: var(--ctp-ext-yellow, 228, 147, 32);
--ctp-green: var(--ctp-ext-green, 64, 160, 43);
--ctp-teal: var(--ctp-ext-teal, 23, 146, 153);
--ctp-sky: var(--ctp-ext-sky, 4, 165, 229);
--ctp-sapphire: var(--ctp-ext-sapphire, 32, 159, 181);
--ctp-blue: var(--ctp-ext-blue, 42, 110, 245);
--ctp-lavender: var(--ctp-ext-lavender, 114, 135, 253);
--ctp-text: var(--ctp-ext-text, 76, 79, 105);
--ctp-subtext1: var(--ctp-ext-subtext1, 92, 95, 119);
--ctp-subtext0: var(--ctp-ext-subtext0, 108, 111, 133);
--ctp-overlay2: var(--ctp-ext-overlay2, 124, 127, 147);
--ctp-overlay1: var(--ctp-ext-overlay1, 140, 143, 161);
--ctp-overlay0: var(--ctp-ext-overlay0, 156, 160, 176);
--ctp-surface2: var(--ctp-ext-surface2, 172, 176, 190);
--ctp-surface1: var(--ctp-ext-surface1, 188, 192, 204);
--ctp-surface0: var(--ctp-ext-surface0, 204, 208, 218);
--ctp-base: var(--ctp-ext-base, 239, 241, 245);
--ctp-mantle: var(--ctp-ext-mantle, 230, 233, 239);
--ctp-crust: var(--ctp-ext-crust, 220, 224, 232);
}`,
    },
    "ctp-rosepine-light": {
      light: `.ctp-rosepine-light, .ctp-rosepine-light .themed-color-wrapper > .theme-light {
--ctp-rosewater: var(--ctp-ext-rosewater, 214, 129, 125);
--ctp-flamingo: var(--ctp-ext-flamingo, 214, 129, 125);
--ctp-pink: var(--ctp-ext-pink, 144, 122, 169);
--ctp-mauve: var(--ctp-ext-mauve, 144, 122, 169);
--ctp-red: var(--ctp-ext-red, 180, 99, 122);
--ctp-maroon: var(--ctp-ext-maroon, 180, 99, 122);
--ctp-peach: var(--ctp-ext-peach, 214, 129, 125);
--ctp-yellow: var(--ctp-ext-yellow, 234, 157, 52);
--ctp-green: var(--ctp-ext-green, 86, 148, 159);
--ctp-teal: var(--ctp-ext-teal, 86, 148, 159);
--ctp-sky: var(--ctp-ext-sky, 40, 105, 131);
--ctp-sapphire: var(--ctp-ext-sapphire, 40, 105, 131);
--ctp-blue: var(--ctp-ext-blue, 40, 105, 131);
--ctp-lavender: var(--ctp-ext-lavender, 144, 122, 169);
--ctp-text: var(--ctp-ext-text, 87, 82, 121);
--ctp-subtext1: var(--ctp-ext-subtext1, 97, 92, 132);
--ctp-subtext0: var(--ctp-ext-subtext0, 121, 117, 147);
--ctp-overlay2: var(--ctp-ext-overlay2, 128, 124, 153);
--ctp-overlay1: var(--ctp-ext-overlay1, 152, 147, 165);
--ctp-overlay0: var(--ctp-ext-overlay0, 161, 156, 173);
--ctp-surface2: var(--ctp-ext-surface2, 202, 193, 185);
--ctp-surface1: var(--ctp-ext-surface1, 209, 201, 194);
--ctp-surface0: var(--ctp-ext-surface0, 220, 211, 203);
--ctp-base: var(--ctp-ext-base, 238, 230, 221);
--ctp-mantle: var(--ctp-ext-mantle, 230, 219, 209);
--ctp-crust: var(--ctp-ext-crust, 221, 208, 198);
}`,
    },
    "ctp-frappe": {
      dark: `.ctp-frappe, .ctp-frappe .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-ext-rosewater, 242, 213, 207);
--ctp-flamingo: var(--ctp-ext-flamingo, 238, 190, 190);
--ctp-pink: var(--ctp-ext-pink, 244, 184, 228);
--ctp-mauve: var(--ctp-ext-mauve, 202, 158, 230);
--ctp-red: var(--ctp-ext-red, 231, 130, 132);
--ctp-maroon: var(--ctp-ext-maroon, 234, 153, 156);
--ctp-peach: var(--ctp-ext-peach, 239, 159, 118);
--ctp-yellow: var(--ctp-ext-yellow, 229, 200, 144);
--ctp-green: var(--ctp-ext-green, 166, 209, 137);
--ctp-teal: var(--ctp-ext-teal, 129, 200, 190);
--ctp-sky: var(--ctp-ext-sky, 153, 209, 219);
--ctp-sapphire: var(--ctp-ext-sapphire, 133, 193, 220);
--ctp-blue: var(--ctp-ext-blue, 140, 170, 238);
--ctp-lavender: var(--ctp-ext-lavender, 186, 187, 241);
--ctp-text: var(--ctp-ext-text, 198, 206, 239);
--ctp-subtext1: var(--ctp-ext-subtext1, 181, 189, 220);
--ctp-subtext0: var(--ctp-ext-subtext0, 165, 172, 201);
--ctp-overlay2: var(--ctp-ext-overlay2, 148, 155, 183);
--ctp-overlay1: var(--ctp-ext-overlay1, 131, 138, 164);
--ctp-overlay0: var(--ctp-ext-overlay0, 115, 120, 145);
--ctp-surface2: var(--ctp-ext-surface2, 98, 103, 126);
--ctp-surface1: var(--ctp-ext-surface1, 81, 86, 108);
--ctp-surface0: var(--ctp-ext-surface0, 65, 69, 89);
--ctp-base: var(--ctp-ext-base, 48, 52, 70);
--ctp-mantle: var(--ctp-ext-mantle, 41, 44, 60);
--ctp-crust: var(--ctp-ext-crust, 35, 38, 52);
}`,
    },
    "ctp-macchiato": {
      dark: `.ctp-macchiato, .ctp-macchiato .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-ext-rosewater, 244, 219, 214);
--ctp-flamingo: var(--ctp-ext-flamingo, 240, 198, 198);
--ctp-pink: var(--ctp-ext-pink, 245, 189, 230);
--ctp-mauve: var(--ctp-ext-mauve, 198, 160, 246);
--ctp-red: var(--ctp-ext-red, 237, 135, 150);
--ctp-maroon: var(--ctp-ext-maroon, 238, 153, 160);
--ctp-peach: var(--ctp-ext-peach, 245, 169, 127);
--ctp-yellow: var(--ctp-ext-yellow, 238, 212, 159);
--ctp-green: var(--ctp-ext-green, 166, 218, 149);
--ctp-teal: var(--ctp-ext-teal, 139, 213, 202);
--ctp-sky: var(--ctp-ext-sky, 145, 215, 227);
--ctp-sapphire: var(--ctp-ext-sapphire, 125, 196, 228);
--ctp-blue: var(--ctp-ext-blue, 138, 173, 244);
--ctp-lavender: var(--ctp-ext-lavender, 183, 189, 248);
--ctp-text: var(--ctp-ext-text, 197, 207, 245);
--ctp-subtext1: var(--ctp-ext-subtext1, 179, 188, 224);
--ctp-subtext0: var(--ctp-ext-subtext0, 161, 170, 203);
--ctp-overlay2: var(--ctp-ext-overlay2, 143, 151, 183);
--ctp-overlay1: var(--ctp-ext-overlay1, 125, 132, 162);
--ctp-overlay0: var(--ctp-ext-overlay0, 108, 114, 141);
--ctp-surface2: var(--ctp-ext-surface2, 90, 95, 120);
--ctp-surface1: var(--ctp-ext-surface1, 72, 76, 100);
--ctp-surface0: var(--ctp-ext-surface0, 54, 58, 79);
--ctp-base: var(--ctp-ext-base, 36, 39, 58);
--ctp-mantle: var(--ctp-ext-mantle, 30, 32, 48);
--ctp-crust: var(--ctp-ext-crust, 24, 25, 38);
}`,
    },
    "ctp-mocha": {
      dark: `.ctp-mocha, .ctp-mocha .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-ext-rosewater, 245, 224, 220);
--ctp-flamingo: var(--ctp-ext-flamingo, 242, 205, 205);
--ctp-pink: var(--ctp-ext-pink, 245, 194, 231);
--ctp-mauve: var(--ctp-ext-mauve, 203, 166, 247);
--ctp-red: var(--ctp-ext-red, 243, 139, 168);
--ctp-maroon: var(--ctp-ext-maroon, 235, 160, 172);
--ctp-peach: var(--ctp-ext-peach, 250, 179, 135);
--ctp-yellow: var(--ctp-ext-yellow, 249, 226, 175);
--ctp-green: var(--ctp-ext-green, 166, 227, 161);
--ctp-teal: var(--ctp-ext-teal, 148, 226, 213);
--ctp-sky: var(--ctp-ext-sky, 137, 220, 235);
--ctp-sapphire: var(--ctp-ext-sapphire, 116, 199, 236);
--ctp-blue: var(--ctp-ext-blue, 135, 176, 249);
--ctp-lavender: var(--ctp-ext-lavender, 180, 190, 254);
--ctp-text: var(--ctp-ext-text, 198, 208, 245);
--ctp-subtext1: var(--ctp-ext-subtext1, 179, 188, 223);
--ctp-subtext0: var(--ctp-ext-subtext0, 161, 168, 201);
--ctp-overlay2: var(--ctp-ext-overlay2, 142, 149, 179);
--ctp-overlay1: var(--ctp-ext-overlay1, 123, 129, 157);
--ctp-overlay0: var(--ctp-ext-overlay0, 105, 109, 134);
--ctp-surface2: var(--ctp-ext-surface2, 86, 89, 112);
--ctp-surface1: var(--ctp-ext-surface1, 67, 70, 90);
--ctp-surface0: var(--ctp-ext-surface0, 49, 50, 68);
--ctp-base: var(--ctp-ext-base, 30, 30, 46);
--ctp-mantle: var(--ctp-ext-mantle, 24, 24, 37);
--ctp-crust: var(--ctp-ext-crust, 17, 17, 27);
}

.ctp-mocha-old, .ctp-mocha-old .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-ext-rosewater, 245, 224, 220);
--ctp-flamingo: var(--ctp-ext-flamingo, 242, 205, 205);
--ctp-pink: var(--ctp-ext-pink, 245, 194, 231);
--ctp-mauve: var(--ctp-ext-mauve, 203, 166, 247);
--ctp-red: var(--ctp-ext-red, 243, 139, 168);
--ctp-maroon: var(--ctp-ext-maroon, 235, 160, 172);
--ctp-peach: var(--ctp-ext-peach, 250, 179, 135);
--ctp-yellow: var(--ctp-ext-yellow, 249, 226, 175);
--ctp-green: var(--ctp-ext-green, 166, 227, 161);
--ctp-teal: var(--ctp-ext-teal, 148, 226, 213);
--ctp-sky: var(--ctp-ext-sky, 137, 220, 235);
--ctp-sapphire: var(--ctp-ext-sapphire, 116, 199, 236);
--ctp-blue: var(--ctp-ext-blue, 135, 176, 249);
--ctp-lavender: var(--ctp-ext-lavender, 180, 190, 254);
--ctp-text: var(--ctp-ext-text, 217, 224, 238);
--ctp-subtext1: var(--ctp-ext-subtext1, 211, 205, 214);
--ctp-subtext0: var(--ctp-ext-subtext0, 190, 179, 193);
--ctp-overlay2: var(--ctp-ext-overlay2, 167, 156, 176);
--ctp-overlay1: var(--ctp-ext-overlay1, 152, 139, 162);
--ctp-overlay0: var(--ctp-ext-overlay0, 109, 107, 125);
--ctp-surface2: var(--ctp-ext-surface2, 87, 82, 105);
--ctp-surface1: var(--ctp-ext-surface1, 45, 40, 72);
--ctp-surface0: var(--ctp-ext-surface0, 48, 45, 65);
--ctp-base: var(--ctp-ext-base, 30, 30, 46);
--ctp-mantle: var(--ctp-ext-mantle, 26, 24, 38);
--ctp-crust: var(--ctp-ext-crust, 22, 19, 32);
}`,
    },
    "ctp-mocha-old": {
      dark: `.ctp-mocha-old, .ctp-mocha-old .themed-color-wrapper > .theme-dark {
--ctp-rosewater: var(--ctp-ext-rosewater, 245, 224, 220);
--ctp-flamingo: var(--ctp-ext-flamingo, 242, 205, 205);
--ctp-pink: var(--ctp-ext-pink, 245, 194, 231);
--ctp-mauve: var(--ctp-ext-mauve, 203, 166, 247);
--ctp-red: var(--ctp-ext-red, 243, 139, 168);
--ctp-maroon: var(--ctp-ext-maroon, 235, 160, 172);
--ctp-peach: var(--ctp-ext-peach, 250, 179, 135);
--ctp-yellow: var(--ctp-ext-yellow, 249, 226, 175);
--ctp-green: var(--ctp-ext-green, 166, 227, 161);
--ctp-teal: var(--ctp-ext-teal, 148, 226, 213);
--ctp-sky: var(--ctp-ext-sky, 137, 220, 235);
--ctp-sapphire: var(--ctp-ext-sapphire, 116, 199, 236);
--ctp-blue: var(--ctp-ext-blue, 135, 176, 249);
--ctp-lavender: var(--ctp-ext-lavender, 180, 190, 254);
--ctp-text: var(--ctp-ext-text, 217, 224, 238);
--ctp-subtext1: var(--ctp-ext-subtext1, 211, 205, 214);
--ctp-subtext0: var(--ctp-ext-subtext0, 190, 179, 193);
--ctp-overlay2: var(--ctp-ext-overlay2, 167, 156, 176);
--ctp-overlay1: var(--ctp-ext-overlay1, 152, 139, 162);
--ctp-overlay0: var(--ctp-ext-overlay0, 109, 107, 125);
--ctp-surface2: var(--ctp-ext-surface2, 87, 82, 105);
--ctp-surface1: var(--ctp-ext-surface1, 45, 40, 72);
--ctp-surface0: var(--ctp-ext-surface0, 48, 45, 65);
--ctp-base: var(--ctp-ext-base, 30, 30, 46);
--ctp-mantle: var(--ctp-ext-mantle, 26, 24, 38);
--ctp-crust: var(--ctp-ext-crust, 22, 19, 32);
}`,
    },
    "inline-title-normal": {
      general: `.inline-title-normal {
--inline-title-color: var(--text-normal);
}`,
    },
    "inline-title-muted": {
      general: `.inline-title-muted {
--inline-title-color: var(--text-muted);
}`,
    },
    "inline-title-accent": {
      general: `.inline-title-accent {
--inline-title-color: var(--color-accent);
}`,
    },
    "inline-title-h1": {
      general: `.inline-title-h1 {
--inline-title-color: var(--h1-color);
}`,
    },
    "callout-title-force-default": {
      general: `.callout-title-force-default {
--callout-title-color: var(--text-normal);
}`,
    },
    "fastppuccin-accent-toggle": {
      general: `.fastppuccin-accent-toggle {
--color-accent: rgb(var(--ctp-accent));
--color-accent-1: rgb(var(--ctp-accent));
--color-accent-2: rgba(var(--ctp-accent), 0.9);
--text-selection: rgba(var(--ctp-accent), 0.25);
--interactive-accent: rgb(var(--ctp-accent));
--interactive-accent-hover: rgba(var(--ctp-accent), 0.9);
--text-accent: rgb(var(--ctp-accent));
--text-accent-hover: rgb(var(--ctp-accent));
--text-highlight-bg: rgba(var(--ctp-accent), 0.4);
--text-highlight-bg-active: rgba(var(--ctp-accent), 0.6);
--interactive-accent: rgb(var(--ctp-accent));
--interactive-accent-rgb: var(--ctp-accent);
--blockquote-border-color: rgb(var(--ctp-accent));
--background-modifier-active: rgba(var(--ctp-accent), 0.1);
--background-modifier-active-hover: rgba(var(--ctp-accent), 0.15);
--link-unresolved-decoration-color: rgba(var(--ctp-accent), 0.3);
--tag-background: rgba(var(--ctp-accent), 0.1);
--tag-background-hover: rgba(var(--ctp-accent), 0.2);
--tag-border-color: rgba(var(--ctp-accent), 0.15);
--tag-border-color-hover: rgba(var(--ctp-accent), 0.15);
--nav-item-background-selected: rgba(var(--ctp-accent), 0.2);
--heading-formatting: rgb(var(--ctp-accent));
--icon-color-focused: rgb(var(--ctp-accent));
}`,
    },
    "ctp-accent-light-rosewater": {
      light: `.ctp-accent-light-rosewater {
--ctp-accent: var(--ctp-rosewater) !important;
}`,
    },
    "ctp-accent-light-flamingo": {
      light: `.ctp-accent-light-flamingo {
--ctp-accent: var(--ctp-flamingo) !important;
}`,
    },
    "ctp-accent-light-pink": {
      light: `.ctp-accent-light-pink {
--ctp-accent: var(--ctp-pink) !important;
}`,
    },
    "ctp-accent-light-mauve": {
      light: `.ctp-accent-light-mauve {
--ctp-accent: var(--ctp-mauve) !important;
}`,
    },
    "ctp-accent-light-red": {
      light: `.ctp-accent-light-red {
--ctp-accent: var(--ctp-red) !important;
}`,
    },
    "ctp-accent-light-maroon": {
      light: `.ctp-accent-light-maroon {
--ctp-accent: var(--ctp-maroon) !important;
}`,
    },
    "ctp-accent-light-peach": {
      light: `.ctp-accent-light-peach {
--ctp-accent: var(--ctp-peach) !important;
}`,
    },
    "ctp-accent-light-yellow": {
      light: `.ctp-accent-light-yellow {
--ctp-accent: var(--ctp-yellow) !important;
}`,
    },
    "ctp-accent-light-green": {
      light: `.ctp-accent-light-green {
--ctp-accent: var(--ctp-green) !important;
}`,
    },
    "ctp-accent-light-teal": {
      light: `.ctp-accent-light-teal {
--ctp-accent: var(--ctp-teal) !important;
}`,
    },
    "ctp-accent-light-sky": {
      light: `.ctp-accent-light-sky {
--ctp-accent: var(--ctp-sky) !important;
}`,
    },
    "ctp-accent-light-sapphire": {
      light: `.ctp-accent-light-sapphire {
--ctp-accent: var(--ctp-sapphire) !important;
}`,
    },
    "ctp-accent-light-blue": {
      light: `.ctp-accent-light-blue {
--ctp-accent: var(--ctp-blue) !important;
}`,
    },
    "ctp-accent-light-lavender": {
      light: `.ctp-accent-light-lavender {
--ctp-accent: var(--ctp-lavender) !important;
}`,
    },
    "ctp-accent-rosewater": {
      general: `.ctp-accent-rosewater {
--ctp-accent: var(--ctp-rosewater) !important;
}`,
    },
    "ctp-accent-flamingo": {
      general: `.ctp-accent-flamingo {
--ctp-accent: var(--ctp-flamingo) !important;
}`,
    },
    "ctp-accent-pink": {
      general: `.ctp-accent-pink {
--ctp-accent: var(--ctp-pink) !important;
}`,
    },
    "ctp-accent-mauve": {
      general: `.ctp-accent-mauve {
--ctp-accent: var(--ctp-mauve) !important;
}`,
    },
    "ctp-accent-red": {
      general: `.ctp-accent-red {
--ctp-accent: var(--ctp-red) !important;
}`,
    },
    "ctp-accent-maroon": {
      general: `.ctp-accent-maroon {
--ctp-accent: var(--ctp-maroon) !important;
}`,
    },
    "ctp-accent-peach": {
      general: `.ctp-accent-peach {
--ctp-accent: var(--ctp-peach) !important;
}`,
    },
    "ctp-accent-yellow": {
      general: `.ctp-accent-yellow {
--ctp-accent: var(--ctp-yellow) !important;
}`,
    },
    "ctp-accent-green": {
      general: `.ctp-accent-green {
--ctp-accent: var(--ctp-green) !important;
}`,
    },
    "ctp-accent-teal": {
      general: `.ctp-accent-teal {
--ctp-accent: var(--ctp-teal) !important;
}`,
    },
    "ctp-accent-sky": {
      general: `.ctp-accent-sky {
--ctp-accent: var(--ctp-sky) !important;
}`,
    },
    "ctp-accent-sapphire": {
      general: `.ctp-accent-sapphire {
--ctp-accent: var(--ctp-sapphire) !important;
}`,
    },
    "ctp-accent-blue": {
      general: `.ctp-accent-blue {
--ctp-accent: var(--ctp-blue) !important;
}`,
    },
    "ctp-accent-lavender": {
      general: `.ctp-accent-lavender {
--ctp-accent: var(--ctp-lavender) !important;
}`,
    },
    "anp-decoration-toggle": {
      general: `.anp-decoration-toggle {
--italic-color: rgb(var(--anp-italic-color, var(--text-normal)));
--bold-color: rgb(var(--anp-bold-color, var(--text-normal)));
--text-highlight-bg: rgba(var(--anp-highlight-color, var(--ctp-yellow)), 0.2);
}`,
    },
    "anp-bold-rosewater": {
      general: `.anp-bold-rosewater {
--anp-bold-color: var(--ctp-rosewater);
}`,
    },
    "anp-bold-flamingo": {
      general: `.anp-bold-flamingo {
--anp-bold-color: var(--ctp-flamingo);
}`,
    },
    "anp-bold-pink": {
      general: `.anp-bold-pink {
--anp-bold-color: var(--ctp-pink);
}`,
    },
    "anp-bold-mauve": {
      general: `.anp-bold-mauve {
--anp-bold-color: var(--ctp-mauve);
}`,
    },
    "anp-bold-red": {
      general: `.anp-bold-red {
--anp-bold-color: var(--ctp-red);
}`,
    },
    "anp-bold-maroon": {
      general: `.anp-bold-maroon {
--anp-bold-color: var(--ctp-maroon);
}`,
    },
    "anp-bold-peach": {
      general: `.anp-bold-peach {
--anp-bold-color: var(--ctp-peach);
}`,
    },
    "anp-bold-yellow": {
      general: `.anp-bold-yellow {
--anp-bold-color: var(--ctp-yellow);
}`,
    },
    "anp-bold-green": {
      general: `.anp-bold-green {
--anp-bold-color: var(--ctp-green);
}`,
    },
    "anp-bold-teal": {
      general: `.anp-bold-teal {
--anp-bold-color: var(--ctp-teal);
}`,
    },
    "anp-bold-sky": {
      general: `.anp-bold-sky {
--anp-bold-color: var(--ctp-sky);
}`,
    },
    "anp-bold-sapphire": {
      general: `.anp-bold-sapphire {
--anp-bold-color: var(--ctp-sapphire);
}`,
    },
    "anp-bold-blue": {
      general: `.anp-bold-blue {
--anp-bold-color: var(--ctp-blue);
}`,
    },
    "anp-bold-lavender": {
      general: `.anp-bold-lavender {
--anp-bold-color: var(--ctp-lavender);
}`,
    },
    "anp-italic-rosewater": {
      general: `.anp-italic-rosewater {
--anp-italic-color: var(--ctp-rosewater);
}`,
    },
    "anp-italic-flamingo": {
      general: `.anp-italic-flamingo {
--anp-italic-color: var(--ctp-flamingo);
}`,
    },
    "anp-italic-pink": {
      general: `.anp-italic-pink {
--anp-italic-color: var(--ctp-pink);
}`,
    },
    "anp-italic-mauve": {
      general: `.anp-italic-mauve {
--anp-italic-color: var(--ctp-mauve);
}`,
    },
    "anp-italic-red": {
      general: `.anp-italic-red {
--anp-italic-color: var(--ctp-red);
}`,
    },
    "anp-italic-maroon": {
      general: `.anp-italic-maroon {
--anp-italic-color: var(--ctp-maroon);
}`,
    },
    "anp-italic-peach": {
      general: `.anp-italic-peach {
--anp-italic-color: var(--ctp-peach);
}`,
    },
    "anp-italic-yellow": {
      general: `.anp-italic-yellow {
--anp-italic-color: var(--ctp-yellow);
}`,
    },
    "anp-italic-green": {
      general: `.anp-italic-green {
--anp-italic-color: var(--ctp-green);
}`,
    },
    "anp-italic-teal": {
      general: `.anp-italic-teal {
--anp-italic-color: var(--ctp-teal);
}`,
    },
    "anp-italic-sky": {
      general: `.anp-italic-sky {
--anp-italic-color: var(--ctp-sky);
}`,
    },
    "anp-italic-sapphire": {
      general: `.anp-italic-sapphire {
--anp-italic-color: var(--ctp-sapphire);
}`,
    },
    "anp-italic-blue": {
      general: `.anp-italic-blue {
--anp-italic-color: var(--ctp-blue);
}`,
    },
    "anp-italic-lavender": {
      general: `.anp-italic-lavender {
--anp-italic-color: var(--ctp-lavender);
}`,
    },
    "anp-highlight-rosewater": {
      general: `.anp-highlight-rosewater {
--anp-highlight-color: var(--ctp-rosewater);
}`,
    },
    "anp-highlight-flamingo": {
      general: `.anp-highlight-flamingo {
--anp-highlight-color: var(--ctp-flamingo);
}`,
    },
    "anp-highlight-pink": {
      general: `.anp-highlight-pink {
--anp-highlight-color: var(--ctp-pink);
}`,
    },
    "anp-highlight-mauve": {
      general: `.anp-highlight-mauve {
--anp-highlight-color: var(--ctp-mauve);
}`,
    },
    "anp-highlight-red": {
      general: `.anp-highlight-red {
--anp-highlight-color: var(--ctp-red);
}`,
    },
    "anp-highlight-maroon": {
      general: `.anp-highlight-maroon {
--anp-highlight-color: var(--ctp-maroon);
}`,
    },
    "anp-highlight-peach": {
      general: `.anp-highlight-peach {
--anp-highlight-color: var(--ctp-peach);
}`,
    },
    "anp-highlight-yellow": {
      general: `.anp-highlight-yellow {
--anp-highlight-color: var(--ctp-yellow);
}`,
    },
    "anp-highlight-green": {
      general: `.anp-highlight-green {
--anp-highlight-color: var(--ctp-green);
}`,
    },
    "anp-highlight-teal": {
      general: `.anp-highlight-teal {
--anp-highlight-color: var(--ctp-teal);
}`,
    },
    "anp-highlight-sky": {
      general: `.anp-highlight-sky {
--anp-highlight-color: var(--ctp-sky);
}`,
    },
    "anp-highlight-sapphire": {
      general: `.anp-highlight-sapphire {
--anp-highlight-color: var(--ctp-sapphire);
}`,
    },
    "anp-highlight-blue": {
      general: `.anp-highlight-blue {
--anp-highlight-color: var(--ctp-blue);
}`,
    },
    "anp-highlight-lavender": {
      general: `.anp-highlight-lavender {
--anp-highlight-color: var(--ctp-lavender);
}`,
    },
    "anp-custom-checkboxes": {
      general: `.anp-custom-checkboxes [data-task="x"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="x"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="x"][type="checkbox"]:checked {
--checkbox-color: rgb(var(--ctp-green));
--checkbox-color-hover: rgb(var(--ctp-green));
}

.anp-custom-checkboxes [data-task="!"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="!"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="!"][type="checkbox"]:checked {
--checkbox-color: rgb(var(--ctp-yellow));
--checkbox-color-hover: rgb(var(--ctp-yellow));
}

.anp-custom-checkboxes [data-task="!"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="!"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="!"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
-webkit-mask-size: 20%;
}

.anp-custom-checkboxes [data-task="!"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="!"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="!"][type="checkbox"]:checked:before {
color: var(--checkbox-color);
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="?"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="?"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="?"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="?"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="?"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="?"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-peach));
left: 0px;
}

.anp-custom-checkboxes [data-task="?"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="?"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="?"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-peach));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="-"] {
text-decoration: var(--checklist-done-decoration);
color: var(--checklist-done-color);
}

.anp-custom-checkboxes [data-task="-"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="-"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="-"][type="checkbox"]:checked {
--checkbox-color: rgb(var(--ctp-red));
--checkbox-color-hover: rgb(var(--ctp-red));
}

.anp-custom-checkboxes [data-task="-"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="-"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="-"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
-webkit-mask-size: 50%;
}

.anp-custom-checkboxes [data-task="-"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="-"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="-"][type="checkbox"]:checked:before {
color: var(--checkbox-color);
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="b"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="b"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="b"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="b"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="b"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="b"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-red));
left: 0px;
}

.anp-custom-checkboxes [data-task="b"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="b"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="b"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-red));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="I"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="I"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="I"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="I"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="I"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="I"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-yellow));
left: 0px;
}

.anp-custom-checkboxes [data-task="I"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="I"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="I"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-yellow));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="p"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="p"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="p"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="p"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="p"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="p"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-green));
left: 0px;
}

.anp-custom-checkboxes [data-task="p"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="p"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="p"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-green));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="c"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="c"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="c"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="c"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="c"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="c"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
-webkit-mask-size: 100%;
background-color: rgb(var(--ctp-red));
left: 0px;
}

.anp-custom-checkboxes [data-task="c"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="c"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="c"][type="checkbox"]:checked:before {
color: var(--checkbox-color);
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="i"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="i"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="i"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="i"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="i"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="i"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-blue));
left: 0px;
}

.anp-custom-checkboxes [data-task="i"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="i"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="i"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-blue));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="l"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="l"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="l"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="l"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="l"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="l"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-mauve));
left: 0px;
}

.anp-custom-checkboxes [data-task="l"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="l"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="l"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-mauve));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="*"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="*"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="*"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="*"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="*"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="*"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-yellow));
left: 0px;
}

.anp-custom-checkboxes [data-task="*"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="*"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="*"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-yellow));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="n"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="n"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="n"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="n"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="n"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="n"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-maroon));
left: 0px;
}

.anp-custom-checkboxes [data-task="n"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="n"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="n"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-maroon));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="S"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="S"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="S"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="S"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="S"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="S"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-green));
left: 0px;
}

.anp-custom-checkboxes [data-task="S"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="S"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="S"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-green));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="/"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="/"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="/"][type="checkbox"]:checked {
--checkbox-color: rgba(var(--ctp-subtext0), 0.3);
--checkbox-color-hover: rgba(var(--ctp-subtext0), 0.3);
border-color: rgb(var(--ctp-subtext0)) !important;
}

.anp-custom-checkboxes [data-task="/"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="/"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="/"][type="checkbox"]:checked:after {
background-color: transparent;
}

.anp-custom-checkboxes [data-task="/"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="/"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="/"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-subtext0));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="<"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="<"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="<"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="<"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="<"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="<"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-teal));
left: 0px;
}

.anp-custom-checkboxes [data-task="<"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="<"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="<"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-teal));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task=">"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task=">"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task=">"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task=">"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task=">"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task=">"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-sapphire));
left: 0px;
}

.anp-custom-checkboxes [data-task=">"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task=">"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task=">"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-sapphire));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task='"'] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task='"'] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task='"'][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task='"'] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task='"'] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task='"'][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-subtext0));
left: 0px;
}

.anp-custom-checkboxes [data-task='"'] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task='"'] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task='"'][type="checkbox"]:checked:before {
color: rgb(var(--ctp-subtext0));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="u"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="u"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="u"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="u"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="u"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="u"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-green));
left: 0px;
}

.anp-custom-checkboxes [data-task="u"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="u"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="u"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-green));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="d"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="d"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="d"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="d"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="d"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="d"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-red));
left: 0px;
}

.anp-custom-checkboxes [data-task="d"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="d"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="d"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-red));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="f"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="f"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="f"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="f"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="f"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="f"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-red));
left: 0px;
}

.anp-custom-checkboxes [data-task="f"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="f"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="f"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-red));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="k"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="k"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="k"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="k"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="k"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="k"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-yellow));
left: 0px;
}

.anp-custom-checkboxes [data-task="k"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="k"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="k"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-yellow));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes [data-task="w"] > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="w"] > p > input[type="checkbox"]:checked, .anp-custom-checkboxes [data-task="w"][type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.anp-custom-checkboxes [data-task="w"] > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="w"] > p > input[type="checkbox"]:checked:after, .anp-custom-checkboxes [data-task="w"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
-webkit-mask-size: contain;
background-color: rgb(var(--ctp-mauve));
left: 0px;
}

.anp-custom-checkboxes [data-task="w"] > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="w"] > p > input[type="checkbox"]:checked:before, .anp-custom-checkboxes [data-task="w"][type="checkbox"]:checked:before {
color: rgb(var(--ctp-mauve));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: bold;
}

.anp-custom-checkboxes-labels [data-task="!"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="!"][type="checkbox"]:checked:before {
content: "IMP";
}

.anp-custom-checkboxes-labels [data-task=">"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task=">"][type="checkbox"]:checked:before {
content: "RSCH";
}

.anp-custom-checkboxes-labels [data-task="<"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="<"][type="checkbox"]:checked:before {
content: "SCH";
}

.anp-custom-checkboxes-labels [data-task="-"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="-"][type="checkbox"]:checked:before {
content: "CNCL";
}

.anp-custom-checkboxes-labels [data-task="/"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="/"][type="checkbox"]:checked:before {
content: "PRG";
}

.anp-custom-checkboxes-labels [data-task="?"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="?"][type="checkbox"]:checked:before {
content: "QUE";
}

.anp-custom-checkboxes-labels [data-task="*"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="*"][type="checkbox"]:checked:before {
content: "STAR";
}

.anp-custom-checkboxes-labels [data-task="n"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="n"][type="checkbox"]:checked:before {
content: "NOTE";
}

.anp-custom-checkboxes-labels [data-task="l"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="l"][type="checkbox"]:checked:before {
content: "LCTN";
}

.anp-custom-checkboxes-labels [data-task="i"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="i"][type="checkbox"]:checked:before {
content: "INFO";
}

.anp-custom-checkboxes-labels [data-task="I"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="I"][type="checkbox"]:checked:before {
content: "IDEA";
}

.anp-custom-checkboxes-labels [data-task="S"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="S"][type="checkbox"]:checked:before {
content: "AMT";
}

.anp-custom-checkboxes-labels [data-task="p"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="p"][type="checkbox"]:checked:before {
content: "PRO";
}

.anp-custom-checkboxes-labels [data-task="c"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="c"][type="checkbox"]:checked:before {
content: "CON";
}

.anp-custom-checkboxes-labels [data-task="b"] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task="b"][type="checkbox"]:checked:before {
content: "BKMK";
}

.anp-custom-checkboxes-labels [data-task='"'] input[type="checkbox"]:checked:before, .anp-custom-checkboxes-labels [data-task='"'][type="checkbox"]:checked:before {
content: "QUOT";
}

.anp-custom-checkboxes-labels .task-list-item .task-list-item-checkbox {
margin-right: calc(var(--checkbox-size) * 2.7);
}`,
    },
    "anp-file-icons": {
      general: `.anp-file-icons .nav-file .nav-file-title[data-path] {
align-items: center;
}

.anp-file-icons .nav-file .nav-file-title[data-path]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/%3E%3Cpath d='M14 2v6h6'/%3E%3C/svg%3E%0A");
-webkit-mask-repeat: no-repeat;
background-color: var(--icon-color);
content: "";
display: flex;
flex-shrink: 0;
height: var(--size-4-4);
margin-left: calc(-1 * var(--size-4-5));
opacity: var(--icon-opacity);
position: absolute;
width: var(--size-4-4);
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".md"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/%3E%3Cpath d='M14 2v6h6m-4 5H8m8 4H8m2-8H8'/%3E%3C/svg%3E%0A");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".canvas"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 3h7v9H3zm11 0h7v5h-7zm0 9h7v9h-7zM3 16h7v5H3z'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".excalidraw.md"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5'/%3E%3Cpath d='M14 2v6h6'/%3E%3Cpath d='M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".svg"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".bmp"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".jpg"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".gif"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".webp"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".jpeg"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".png"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/%3E%3Cpath d='M14 2v6h6'/%3E%3Ccircle cx='10' cy='13' r='2'/%3E%3Cpath d='m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22'/%3E%3C/svg%3E%0A");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".mp3"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".wav"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".m4a"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".ogg"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".flac"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".3gp"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18V5l12-2v13M9 9l12-2'/%3E%3Ccircle cx='6' cy='18' r='3'/%3E%3Ccircle cx='18' cy='16' r='3'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".webm"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M10 8l6 4-6 4V8z'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".mp4"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".ogv"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".mov"]::before, .anp-file-icons .nav-file .nav-file-title[data-path$=".mkv"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z'/%3E%3Cpath d='m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z'/%3E%3Cpath d='M6.6 4.99l3.38 4.2m1.88-5.81l3.38 4.2'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}

.anp-file-icons .nav-file .nav-file-title[data-path$=".loom"]::before {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3v18'/%3E%3Crect width='18' height='18' x='3' y='3' rx='2'/%3E%3Cpath d='M3 9h18M3 15h18'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
}`,
    },
    "colored-headers": {
      general: `.colored-headers {
--h1-color: rgb(var(--ctp-red));
--h2-color: rgb(var(--ctp-peach));
--h3-color: rgb(var(--ctp-green));
--h4-color: rgb(var(--ctp-teal));
--h5-color: rgb(var(--ctp-lavender));
--h6-color: rgb(var(--ctp-mauve));
}`,
    },
    "file-ext-label-right": {
      general: `.file-ext-label-right .nav-file-title-content {
flex-grow: 1;
}

.file-ext-label-right .nav-folder-title-content {
flex-grow: 1;
}`,
    },
    "anp-alternate-tab-toggle": {
      general: `.anp-alternate-tab-toggle {
--header-height: var(--anp-alt-tab-custom-height, 40px);
--tab-stacked-header-width: var(--anp-stacked-header-width, 40px);
}

.anp-alternate-tab-toggle .workspace-tabs:not(.mod-stacked) {
--tab-background: var(--background-secondary);
--tab-background-active: var(--background-primary);
--tab-font-size: 12px;
--tab-height: calc(var(--header-height) * 0.7);
--tab-max-width: 200px;
--tab-max-width-active: 300px;
}

.anp-alternate-tab-toggle .workspace-ribbon.mod-left {
margin-top: var(--header-height);
}

.anp-alternate-tab-toggle .workspace-ribbon.mod-left:before {
padding-bottom: 0px;
}

.anp-alternate-tab-toggle .workspace-tabs:not(.mod-stacked) .workspace-tab-header::before, .anp-alternate-tab-toggle .workspace-tabs:not(.mod-stacked) .workspace-tab-header::after, .anp-alternate-tab-toggle .workspace .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner::after {
display: none;
}

.anp-alternate-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner, .anp-alternate-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
align-items: center;
justify-content: var(--anp-safari-tab-align, center);
margin: 0;
width: 100%;
gap: var(--anp-safari-tab-gap, 10px);
}

.anp-disable-newtab-align.anp-alternate-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner, .anp-disable-newtab-align.anp-alternate-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
width: unset;
gap: var(--anp-safari-tab-gap, 10px);
}

.anp-alternate-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header, .anp-alternate-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
background: var(--tab-background);
border-radius: var(--anp-safari-tab-radius, 6px);
box-shadow: none !important;
height: var(--tab-height);
padding: 0 !important;
transition: 400ms, background-color 150ms ease-in-out;
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
max-width: var(--tab-max-width);
border: var(--anp-safari-border-width, 1px) solid var(--tab-outline-color);
}

.anp-alt-tab-anim-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
transition: 400ms, background-color 150ms ease-in-out;
}

.anp-alternate-tab-toggle .workspace-tabs:not(.mod-stacked) .workspace-tab-header:first-child {
margin-left: 0;
}

.anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner {
padding: 7px 8px;
}

.anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner {
padding: 0 4px 0 8px;
transition: 400ms, background-color 150ms ease-in-out, max-width 400ms;
}

.anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner, .anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner-close-button, .anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner-icon {
color: var(--text-muted);
}

.anp-alternate-tab-toggle .workspace .mod-root .workspace-tab-header-inner::after {
display: none;
}

.anp-alternate-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active {
flex-grow: 1.67;
max-width: var(--tab-max-width-active);
background-color: var(--background-primary);
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--color-accent);
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-title, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--text-faint);
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner:hover {
background-color: rgba(var(--ctp-surface1), 0.4);
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--color-accent) !important;
}

.anp-alternate-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active:hover {
background-color: var(--background-modifier-border);
}

.anp-alternate-tab-toggle .sidebar-toggle-button.mod-left, .anp-alternate-tab-toggle .sidebar-toggle-button.mod-right {
align-items: center;
}

.anp-alternate-tab-toggle .sidebar-toggle-button.mod-left .clickable-icon, .anp-alternate-tab-toggle .sidebar-toggle-button.mod-right .clickable-icon {
height: var(--tab-height);
}`,
    },
    "hide-external-link-icon": {
      general: `.hide-external-link-icon .external-link, .hide-external-link-icon .external-link:hover {
background-image: none;
padding-right: 0px;
}`,
    },
    "toggle-table-transition": {
      general: `body.toggle-table-transition :is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) tbody tr:hover, body.toggle-table-transition :is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) thead tr:hover {
background: var(--background-modifier-border);
/* transform: scale(1.02); */
transition: 0.1s cubic-bezier(0.11, 0.33, 0.23, 0.33);
}`,
    },
  },
};
