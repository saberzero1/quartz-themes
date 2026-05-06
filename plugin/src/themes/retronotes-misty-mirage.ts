import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retronotes.misty-mirage",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono"],
    fontFiles: [
      {
        family: "IBM Plex Mono",
        style: "normal",
        weight: "normal",
        file: "ibm-plex-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Mono",
        style: "italic",
        weight: "normal",
        file: "ibm-plex-mono-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Mono",
        style: "normal",
        weight: "bold",
        file: "ibm-plex-mono-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Mono",
        style: "italic",
        weight: "bold",
        file: "ibm-plex-mono-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 240;
  --accent-l: 84%;
  --accent-s: 67%;
  --background-modifier-border: var(--color-base-50, #9181aa);
  --background-modifier-border-focus: var(--color-base-40, #7d699b);
  --background-modifier-border-hover: var(--color-base-60, #a598ba);
  --background-modifier-error: var(--leather-color, #e6e6fa);
  --background-modifier-error-hover: var(--leather-color-alt, #bcbcf2);
  --background-modifier-error-rgb: var(--color-red-rgb, 138, 46, 46);
  --background-modifier-form-field: var(--color-base-20, #605178);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #605178);
  --background-modifier-hover: var(--leather-color-alt, #bcbcf2);
  --background-modifier-message: var(--color-base-40, #7d699b);
  --background-modifier-success: var(--color-base-40, #7d699b);
  --background-modifier-success-rgb: var(--color-green-rgb, 90, 122, 77);
  --background-primary: var(--color-base-00, #3b3149);
  --background-primary-alt: var(--color-base-10, #4d4161);
  --background-secondary: var(--leather-color, #e6e6fa);
  --background-secondary-alt: var(--leather-color-alt, #6a5884);
  --bases-cards-background: var(--background-primary, #3b3149);
  --bases-cards-cover-background: var(--background-primary-alt, #4d4161);
  --bases-embed-border-color: var(--background-modifier-border, #9181aa);
  --bases-group-heading-property-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --bases-table-border-color: var(--table-border-color, #9181aa);
  --bases-table-cell-background-active: var(--background-primary, #3b3149);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #4d4161);
  --bases-table-cell-background-selected: var(--table-selection, hsla(240, 67%, 84%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #4d4161);
  --bases-table-header-background: var(--background-primary, #3b3149);
  --bases-table-header-background-hover: var(--color-base-20, #57496c);
  --bases-table-header-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --bases-table-summary-background: var(--background-primary, #3b3149);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #bcbcf2);
  --blockquote-background-color: rgba(var(--color-base-50-rgb), 0.2);
  --blockquote-border-color: var(--secondary-ink, #e6e6fa);
  --bodyFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --bold-accent-ink: #a3b28c;
  --bold-color: var(--bold-accent-ink, #a3b28c);
  --button-radius: var(--input-radius, 50px);
  --callout-border-width: 2px;
  --callout-bug: var(--color-red-rgb, 138, 46, 46);
  --callout-default: var(--color-blue-rgb, 26, 69, 89);
  --callout-error: var(--color-red-rgb, 138, 46, 46);
  --callout-example: var(--color-purple-rgb, 95, 74, 140);
  --callout-fail: var(--color-red-rgb, 138, 46, 46);
  --callout-important: var(--color-cyan-rgb, 67, 143, 147);
  --callout-info: var(--color-blue-rgb, 26, 69, 89);
  --callout-question: var(--color-orange-rgb, 179, 104, 42);
  --callout-quote: var(--callout-quote, 145, 129, 170);
  --callout-success: var(--color-green-rgb, 90, 122, 77);
  --callout-summary: var(--color-cyan-rgb, 67, 143, 147);
  --callout-tip: var(--color-cyan-rgb, 67, 143, 147);
  --callout-todo: var(--color-blue-rgb, 26, 69, 89);
  --callout-warning: var(--color-orange-rgb, 179, 104, 42);
  --canvas-background: var(--background-primary, #3b3149);
  --canvas-card-label-color: var(--text-faint, rgba(249, 248, 249, 0.65));
  --canvas-color-1: var(--color-red-rgb, 138, 46, 46);
  --canvas-color-2: var(--color-orange-rgb, 179, 104, 42);
  --canvas-color-3: var(--color-yellow-rgb, 194, 153, 56);
  --canvas-color-4: var(--color-green-rgb, 90, 122, 77);
  --canvas-color-5: var(--color-cyan-rgb, 67, 143, 147);
  --canvas-color-6: var(--color-purple-rgb, 95, 74, 140);
  --canvas-dot-pattern: rgba(var(--secondary-ink-rgb), 0.4);
  --caret-color: var(--color-base-70, #bab0ca);
  --checkbox-border-color: var(--main-ink, #f9f8fe);
  --checkbox-border-color-hover: var(--main-ink-fainted, rgba(249, 248, 249, 0.65));
  --checkbox-color: var(--secondary-ink, #e6e6fa);
  --checkbox-color-hover: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
  --checkbox-marker-color: var(--color-base-10, #4d4161);
  --checklist-done-color: var(--secondary-ink-fainted, rgba(230, 230, 250, 0.65));
  --code-background: rgba(var(--color-base-50-rgb), 0.2);
  --code-border-color: var(--background-modifier-border, #9181aa);
  --code-bracket-background: var(--background-modifier-hover, #bcbcf2);
  --code-comment: var(--text-faint, rgba(249, 248, 249, 0.65));
  --code-function: var(--color-yellow, #c29938);
  --code-important: var(--color-orange, #b3682a);
  --code-keyword: var(--color-pink, #b16982);
  --code-normal: var(--text-normal, #f9f8fe);
  --code-operator: var(--color-red, #8a2e2e);
  --code-property: var(--color-cyan, #438f93);
  --code-punctuation: var(--text-muted, rgba(249, 248, 249, 0.85));
  --code-string: var(--color-green, #5a7a4d);
  --code-tag: var(--color-red, #8a2e2e);
  --code-value: var(--color-purple, #5f4a8c);
  --collapse-icon-color: var(--text-faint, rgba(249, 248, 249, 0.65));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(237, 68.34%, 96.6%));
  --color-base-00: #3b3149;
  --color-base-00-rgb: 59, 49, 73;
  --color-base-05: #443955;
  --color-base-10: #4d4161;
  --color-base-100: #e3dfe9;
  --color-base-20: #57496c;
  --color-base-25: #605178;
  --color-base-30: #6a5884;
  --color-base-35: #736090;
  --color-base-40: #7d699b;
  --color-base-50: #9181aa;
  --color-base-50-rgb: 145, 129, 170;
  --color-base-60: #a598ba;
  --color-base-70: #bab0ca;
  --color-blue: #1a4559;
  --color-blue-rgb: 26, 69, 89;
  --color-cyan: #438f93;
  --color-cyan-rgb: 67, 143, 147;
  --color-green: #5a7a4d;
  --color-green-rgb: 90, 122, 77;
  --color-orange: #b3682a;
  --color-orange-rgb: 179, 104, 42;
  --color-pink: #b16982;
  --color-pink-rgb: 177, 105, 130;
  --color-purple: #5f4a8c;
  --color-purple-rgb: 95, 74, 140;
  --color-red: #8a2e2e;
  --color-red-rgb: 138, 46, 46;
  --color-yellow: #c29938;
  --color-yellow-rgb: 194, 153, 56;
  --dark: var(--text-normal, var(--main-ink, #f9f8fe));
  --darkgray: var(--text-normal, var(--main-ink, #f9f8fe));
  --divider-color: var(--background-modifier-border, #9181aa);
  --divider-color-hover: var(--interactive-accent, hsl(240, 67%, 84%));
  --dropdown-background: var(--interactive-normal, #6a5884);
  --dropdown-background-hover: var(--interactive-hover, #736090);
  --embed-background: rgba(var(--color-base-50-rgb), 0.15);
  --embed-border-start: 2px solid var(--secondary-ink-muted);
  --fainted: 0.65;
  --file-header-background: var(--background-primary, #3b3149);
  --file-header-background-focused: var(--background-primary, #3b3149);
  --file-header-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #6a5884);
  --flair-color: var(--text-normal, #f9f8fe);
  --font-interface-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-mermaid: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-text-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --footnote-divider-color: var(--metadata-divider-color, #9181aa);
  --footnote-id-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(249, 248, 249, 0.65));
  --footnote-input-background-active: var(--metadata-input-background-active, #443955);
  --graph-node: var(--text-muted, rgba(249, 248, 249, 0.85));
  --graph-node-attachment: var(--color-yellow, #c29938);
  --graph-node-focused: var(--secondary-ink, #e6e6fa);
  --graph-node-tag: var(--bold-accent-ink, #a3b28c);
  --graph-node-unresolved: var(--text-faint, rgba(249, 248, 249, 0.65));
  --graph-text: var(--text-normal, #f9f8fe);
  --gray: var(--text-muted, var(--main-ink-muted, rgba(249, 248, 249, 0.85)));
  --h1-color: var(--secondary-ink, #e6e6fa);
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: var(--secondary-ink, #e6e6fa);
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: var(--secondary-ink, #e6e6fa);
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: var(--secondary-ink, #e6e6fa);
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: var(--secondary-ink, #e6e6fa);
  --h5-line-height: var(--line-height-normal, 1.5em);
  --h5-size: 1.4em;
  --h6-color: var(--secondary-ink, #e6e6fa);
  --h6-line-height: var(--line-height-normal, 1.5em);
  --h6-size: 1.2em;
  --headerFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --heading-formatting: var(--text-faint, rgba(249, 248, 249, 0.65));
  --highlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --hr-color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
  --icon-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --icon-color-active: var(--text-accent, hsl(237, 68.34%, 96.6%));
  --icon-color-focused: var(--text-normal, #f9f8fe);
  --icon-color-hover: var(--text-muted, rgba(249, 248, 249, 0.85));
  --indentation-guide-color: var(--secondary-ink-fainted, rgba(230, 230, 250, 0.65));
  --indentation-guide-color-active: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
  --inline-title-color: var(--h1-color, #e6e6fa);
  --inline-title-line-height: var(--h1-line-height, 1.5em);
  --inline-title-size: var(--h1-size, 2.2em);
  --input-date-separator: var(--text-faint, rgba(249, 248, 249, 0.65));
  --input-placeholder-color: var(--text-faint, rgba(249, 248, 249, 0.65));
  --interactive-accent: var(--leather-color-alt, hsl(240, 67%, 84%));
  --interactive-accent-hover: var(--leather-color, hsl(237, 68.34%, 96.6%));
  --interactive-accent-hsl: var(--color-accent-hsl, 240, 67%, 84%);
  --interactive-hover: var(--color-base-20, #736090);
  --interactive-normal: var(--color-base-30, #6a5884);
  --italic-accent-ink: #e6e6fa;
  --italic-color: var(--italic-accent-ink, #e6e6fa);
  --leather-color: #e6e6fa;
  --leather-color-alt: #bcbcf2;
  --leather-color-rgb: 44, 52, 41;
  --light: var(--background-primary, var(--color-base-00, #3b3149));
  --light-ink: var(--main-ink, #000);
  --light-ink-alt: #313147;
  --light-ink-fainted: rgba(0,0,0,var(--fainted));
  --light-ink-muted: rgba(0,0,0,var(--muted));
  --lightgray: var(--background-secondary, var(--leather-color, #e6e6fa));
  --link-color: var(--secondary-ink, #e6e6fa);
  --link-color-hover: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
  --link-external-color: var(--secondary-ink, #e6e6fa);
  --link-external-color-hover: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
  --link-unresolved-color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
  --link-unresolved-color-hover: var(--secondary-ink, #e6e6fa);
  --link-unresolved-decoration-color: var(--secondary-ink, #e6e6fa);
  --list-marker-color: var(--secondary-ink-fainted, rgba(230, 230, 250, 0.65));
  --list-marker-color-collapsed: var(--secondary-ink, #e6e6fa);
  --list-marker-color-hover: var(--secondary-ink-fainted, rgba(230, 230, 250, 0.65));
  --main-ink: #f9f8fe;
  --main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
  --main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
  --main-ink-rgb: 249,248,249;
  --menu-background: var(--background-secondary, #e6e6fa);
  --menu-border-color: var(--background-modifier-border-hover, #a598ba);
  --metadata-background: var(--color-base-10, #4d4161);
  --metadata-border-color: var(--color-base-50, #9181aa);
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: var(--background-modifier-border, #9181aa);
  --metadata-gap: 4px;
  --metadata-input-background-active: var(--color-base-05, #443955);
  --metadata-input-background-hover: var(--color-base-10, #4d4161);
  --metadata-input-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #f9f8fe);
  --metadata-label-background-active: var(--color-base-10, #4d4161);
  --metadata-label-background-hover: var(--color-base-10, #4d4161);
  --metadata-label-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --metadata-label-text-color-hover: var(--text-muted, rgba(249, 248, 249, 0.85));
  --metadata-padding: var(--size-4-2, 16px) 0;
  --metadata-property-background-active: var(--color-base-20, #57496c);
  --metadata-property-background-hover: var(--color-base-20, #57496c);
  --modal-background: var(--color-base-10, #4d4161);
  --modal-border-width: var(--border-width, 2px);
  --muted: 0.85;
  --nav-collapse-icon-color: var(--color-base-50, #9181aa);
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(249, 248, 249, 0.65));
  --nav-heading-color: var(--text-normal, #f9f8fe);
  --nav-heading-color-collapsed: var(--text-faint, rgba(249, 248, 249, 0.65));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(249, 248, 249, 0.85));
  --nav-heading-color-hover: var(--text-normal, #f9f8fe);
  --nav-indentation-guide-color: var(--light-ink-fainted, rgba(0, 0, 0, 0.65));
  --nav-item-background-active: var(--background-modifier-hover, #bcbcf2);
  --nav-item-background-hover: var(--background-modifier-hover, #bcbcf2);
  --nav-item-color: var(--light-ink, #000);
  --nav-item-color-active: var(--light-ink-alt, #313147);
  --nav-item-color-highlighted: var(--text-accent, hsl(237, 68.34%, 96.6%));
  --nav-item-color-hover: var(--light-ink-alt, #313147);
  --nav-item-color-selected: var(--light-ink-alt, #313147);
  --nav-tag-color: var(--text-faint, rgba(249, 248, 249, 0.65));
  --nav-tag-color-active: var(--text-muted, rgba(249, 248, 249, 0.85));
  --nav-tag-color-hover: var(--text-muted, rgba(249, 248, 249, 0.85));
  --pdf-background: var(--background-primary, #3b3149);
  --pdf-page-background: var(--background-primary, #3b3149);
  --pdf-sidebar-background: var(--background-primary, #3b3149);
  --pill-background: var(--color-base-20, #57496c);
  --pill-background-hover: var(--color-base-30, #6a5884);
  --pill-border-color: var(--color-base-50, #9181aa);
  --pill-border-color-hover: var(--background-modifier-border-hover, #a598ba);
  --pill-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --pill-color-hover: var(--text-normal, #f9f8fe);
  --pill-color-remove: var(--text-faint, rgba(249, 248, 249, 0.65));
  --pill-color-remove-hover: var(--text-accent, hsl(237, 68.34%, 96.6%));
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: var(--background-primary, #3b3149);
  --prompt-border-color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
  --prompt-border-width: var(--border-width, 2px);
  --raised-background: var(--blur-background, color-mix(in srgb, #6a5884 65%, transparent) linear-gradient(#6a5884, color-mix(in srgb, #6a5884 65%, transparent)));
  --ribbon-background: var(--background-secondary, #e6e6fa);
  --ribbon-background-collapsed: var(--leather-color-alt, #bcbcf2);
  --search-clear-button-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --search-icon-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --search-result-background: var(--color-base-00, #3b3149);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(237, 68.34%, 96.6%)));
  --secondary-ink: #e6e6fa;
  --secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
  --secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
  --secondary-ink-rgb: 230, 230, 250;
  --setting-group-heading-color: var(--text-normal, #f9f8fe);
  --setting-items-background: var(--background-primary-alt, #4d4161);
  --setting-items-border-color: var(--background-modifier-border, #9181aa);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(249, 248, 249, 0.85));
  --shiki-code-background: var(--code-background, rgba(145, 129, 170, 0.2));
  --shiki-code-comment: var(--text-faint, rgba(249, 248, 249, 0.65));
  --shiki-code-function: var(--color-green, #5a7a4d);
  --shiki-code-important: var(--color-orange, #b3682a);
  --shiki-code-keyword: var(--color-pink, #b16982);
  --shiki-code-normal: var(--text-muted, rgba(249, 248, 249, 0.85));
  --shiki-code-property: var(--color-cyan, #438f93);
  --shiki-code-punctuation: var(--text-muted, rgba(249, 248, 249, 0.85));
  --shiki-code-string: var(--color-yellow, #c29938);
  --shiki-code-value: var(--color-purple, #5f4a8c);
  --shiki-gutter-border-color: var(--background-modifier-border, #9181aa);
  --shiki-gutter-text-color: var(--text-faint, rgba(249, 248, 249, 0.65));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(249, 248, 249, 0.85));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(249, 248, 249, 0.85));
  --shiki-terminal-dots-color: var(--text-faint, rgba(249, 248, 249, 0.65));
  --shiki-tooltip-background: var(--background-modifier-message, #7d699b);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #a598ba);
  --slider-track-background: var(--background-modifier-border, #9181aa);
  --status-bar-background: var(--color-base-20, #57496c);
  --status-bar-border-color: var(--divider-color, #9181aa);
  --status-bar-text-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --suggestion-background: var(--background-primary, #3b3149);
  --sync-avatar-color-1: var(--color-red, #8a2e2e);
  --sync-avatar-color-2: var(--color-orange, #b3682a);
  --sync-avatar-color-3: var(--color-yellow, #c29938);
  --sync-avatar-color-4: var(--color-green, #5a7a4d);
  --sync-avatar-color-5: var(--color-cyan, #438f93);
  --sync-avatar-color-6: var(--color-blue, #1a4559);
  --sync-avatar-color-7: var(--color-purple, #5f4a8c);
  --sync-avatar-color-8: var(--color-pink, #b16982);
  --tab-background-active: var(--color-base-10, #4d4161);
  --tab-container-background: var(--background-secondary, #e6e6fa);
  --tab-divider-color: var(--background-modifier-border-hover, none);
  --tab-font-weight: 600;
  --tab-outline-color: var(--color-base-30, #6a5884);
  --tab-switcher-background: var(--background-secondary, #e6e6fa);
  --tab-text-color-focused-active-current: var(--text-normal, #f9f8fe);
  --table-add-button-border-color: var(--background-modifier-border, #9181aa);
  --table-border-color: var(--color-base-50, #9181aa);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(240, 67%, 84%));
  --table-drag-handle-color: var(--text-faint, rgba(249, 248, 249, 0.65));
  --table-drag-handle-color-active: var(--text-on-accent, #313147);
  --table-header-border-color: var(--table-border-color, #9181aa);
  --table-header-color: var(--secondary-ink, #e6e6fa);
  --table-selection-border-color: var(--interactive-accent, hsl(240, 67%, 84%));
  --tag-background: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
  --tag-background-hover: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
  --tag-color: var(--color-base-00, #3b3149);
  --tag-color-hover: var(--color-base-10, #4d4161);
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(235, 70.35%, 108.36%)));
  --text-accent: var(--color-accent-1, hsl(237, 68.34%, 96.6%));
  --text-accent-hover: var(--color-accent-2, hsl(235, 70.35%, 108.36%));
  --text-error: var(--color-red, #8a2e2e);
  --text-faint: var(--main-ink-fainted, rgba(249, 248, 249, 0.65));
  --text-fainted: var(--main-ink-fainted, rgba(249, 248, 249, 0.65));
  --text-highlight-bg: rgba(var(--color-yellow-rgb),0.4);
  --text-muted: var(--main-ink-muted, rgba(249, 248, 249, 0.85));
  --text-normal: var(--main-ink, #f9f8fe);
  --text-on-accent: var(--light-ink-alt, #313147);
  --text-on-accent-inverted: var(--light-ink-alt, #313147);
  --text-selection: rgba(var(--color-base-50-rgb),0.5);
  --text-success: var(--color-green, #5a7a4d);
  --text-warning: var(--color-orange, #b3682a);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --titleFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --titlebar-background: var(--background-secondary, #e6e6fa);
  --titlebar-background-focused: var(--leather-color, #e6e6fa);
  --titlebar-border-color: var(--background-modifier-border, #9181aa);
  --titlebar-text-color: var(--text-muted, rgba(249, 248, 249, 0.85));
  --titlebar-text-color-focused: var(--text-normal, #f9f8fe);
  --vault-profile-color: var(--text-normal, #f9f8fe);
  --vault-profile-color-hover: var(--vault-profile-color, #f9f8fe);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #e6e6fa);
  --icon-color: var(--light-ink-alt, #313147);
  --icon-color-active: var(--light-ink-alt, #313147);
  --icon-color-focused: var(--light-ink-alt, #313147);
  --icon-color-hover: var(--light-ink-alt, #313147);
  --nav-heading-color: var(--light-ink-alt, #313147);
  --nav-heading-color-collapsed: var(--light-ink-alt, #313147);
  --nav-heading-color-collapsed-hover: var(--light-ink-alt, #313147);
  --nav-tag-background: var(--leather-color-alt, #bcbcf2);
  --nav-tag-color: var(--light-ink-alt, #313147);
  --nav-tag-color-active: var(--light-ink-alt, #313147);
  --nav-tag-color-hover: var(--light-ink-alt, #313147);
  --tab-text-color-focused-active-current: var(--light-ink-alt, #313147);
  --text-faint: var(--light-ink-fainted, rgba(0, 0, 0, 0.65));
  --text-muted: var(--light-ink-muted, rgba(0, 0, 0, 0.85));
  --vault-profile-color: var(--light-ink-alt, #313147);
  --vault-profile-color-hover: var(--light-ink-alt, #313147);
  background-color: var(--tab-container-background, rgb(230, 230, 250));
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(59, 49, 73));
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(230, 230, 250));
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(145, 129, 170);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #e6e6fa);
  --icon-color: var(--light-ink-alt, #313147);
  --icon-color-active: var(--light-ink-alt, #313147);
  --icon-color-focused: var(--light-ink-alt, #313147);
  --icon-color-hover: var(--light-ink-alt, #313147);
  --nav-heading-color: var(--light-ink-alt, #313147);
  --nav-heading-color-collapsed: var(--light-ink-alt, #313147);
  --nav-heading-color-collapsed-hover: var(--light-ink-alt, #313147);
  --nav-tag-background: var(--leather-color-alt, #bcbcf2);
  --nav-tag-color: var(--light-ink-alt, #313147);
  --nav-tag-color-active: var(--light-ink-alt, #313147);
  --nav-tag-color-hover: var(--light-ink-alt, #313147);
  --tab-text-color-focused-active-current: var(--light-ink-alt, #313147);
  --text-faint: var(--light-ink-fainted, rgba(0, 0, 0, 0.65));
  --text-muted: var(--light-ink-muted, rgba(0, 0, 0, 0.85));
  --vault-profile-color: var(--light-ink-alt, #313147);
  --vault-profile-color-hover: var(--light-ink-alt, #313147);
  background-color: var(--tab-container-background, rgb(230, 230, 250));
  border-left-color: rgb(145, 129, 170);
  border-left-width: 0px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body html {
  --fainted: 0.65;
  --muted: 0.85;
  --plexmono: 'IBM Plex Mono', monospace;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(163, 178, 140));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 178, 140) none 0px;
  text-decoration-color: rgb(163, 178, 140);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(230, 230, 250));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 250) none 0px;
  text-decoration-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(230, 230, 250));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 250) none 0px;
  text-decoration-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(230, 230, 250));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 250) none 0px;
  text-decoration-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(163, 178, 140));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 178, 140) none 0px;
  text-decoration-color: rgb(163, 178, 140);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(194, 153, 56, 0.4));
  color: var(--text-normal, rgb(249, 248, 254));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 248, 254) none 0px;
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body del {
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 248, 254) none 0px;
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(230, 230, 250));
  border-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgba(0, 0, 0, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(0, 0, 0, 0.85) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.85);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(230, 230, 250));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 250) none 0px;
  text-decoration-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(230, 230, 250));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 250) none 0px;
  text-decoration-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgba(230, 230, 250, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(230, 230, 250, 0.85) none 0px;
  text-decoration: underline rgb(230, 230, 250);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(230, 230, 250));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(249, 248, 254);
  margin-bottom: 0px;
  margin-left: 28.8001px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(249, 248, 254);
  margin-bottom: 0px;
  margin-left: 28.8001px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgba(249, 248, 249, 0.65));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(145, 129, 170, 0.2));
  color: var(--blockquote-color, rgb(249, 248, 254));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(145, 129, 170);
  border-bottom-width: 0px;
  border-left-color: rgb(145, 129, 170);
  border-left-width: 0px;
  border-right-color: rgb(145, 129, 170);
  border-right-width: 0px;
  border-top-color: rgb(145, 129, 170);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(249, 248, 254));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(145, 129, 170);
  border-bottom-width: 0px;
  border-left-color: rgb(145, 129, 170);
  border-left-width: 0px;
  border-right-color: rgb(145, 129, 170);
  border-right-width: 0px;
  border-top-color: rgb(145, 129, 170);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(230, 230, 250));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(145, 129, 170, 0.2));
  border-bottom-color: rgb(145, 129, 170);
  border-bottom-width: 0px;
  border-left-color: rgb(145, 129, 170);
  border-left-width: 0px;
  border-right-color: rgb(145, 129, 170);
  border-right-width: 0px;
  border-top-color: rgb(145, 129, 170);
  border-top-width: 0px;
  color: var(--code-normal, rgb(249, 248, 254));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(145, 129, 170, 0.2));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgba(145, 129, 170, 0.2));
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(230, 230, 250);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 230, 250);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 250);
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 250);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(77, 65, 97));
  border-bottom-color: rgba(249, 248, 249, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 248, 249, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 248, 249, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 248, 249, 0.85);
  border-top-width: 0px;
  color: var(--text-muted, rgba(249, 248, 249, 0.85));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, rgba(145, 129, 170, 0.15));
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, rgba(145, 129, 170, 0.15));
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: rgb(249, 248, 254);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(230, 230, 250, 0.65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(230, 230, 250, 0.65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(77, 65, 97);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(77, 65, 97);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(179, 104, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(145, 129, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 153, 56);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(67, 143, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 69, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 46, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 46, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 46, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 46, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 69, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 153, 56);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 153, 56);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(95, 74, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 46, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(90, 122, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(90, 122, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(90, 122, 77);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-summary, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-bug, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-error, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-example, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-fail, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-info, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-default, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-question, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-quote, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-success, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-tip, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-todo, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-warning, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  background: rgba(145, 129, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(230, 230, 250, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(249, 248, 254);
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
  background-color: rgb(96, 81, 120);
  border-bottom-color: rgb(145, 129, 170);
  border-bottom-width: 0px;
  border-left-color: rgb(145, 129, 170);
  border-left-width: 0px;
  border-right-color: rgb(145, 129, 170);
  border-right-width: 0px;
  border-top-color: rgb(145, 129, 170);
  border-top-width: 0px;
  color: var(--text-normal, rgb(249, 248, 254));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  --background-modifier-form-field-hover: var(--leather-color-alt, #bcbcf2);
  --background-primary: var(--leather-color, #e6e6fa);
  --search-clear-button-color: var(--light-ink-alt, #313147);
  --text-muted: var(--light-ink-muted, rgba(0, 0, 0, 0.85));
  --text-normal: var(--light-ink, #000);
  background-color: var(--prompt-background, rgb(59, 49, 73));
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: var(--light-ink-alt, rgb(49, 49, 71));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(49, 49, 71) none 0px;
  text-decoration-color: rgb(49, 49, 71);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(188, 188, 242));
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  --background-modifier-form-field-hover: var(--leather-color-alt, #bcbcf2);
  --background-primary: var(--leather-color, #e6e6fa);
  --search-clear-button-color: var(--light-ink-alt, #313147);
  --text-muted: var(--light-ink-muted, rgba(0, 0, 0, 0.85));
  --text-normal: var(--light-ink, #000);
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 230, 250);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(188, 188, 242));
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(188, 188, 242));
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(230, 230, 250, 0.85));
  --pill-background-hover: var(--tag-background-hover, rgba(230, 230, 250, 0.85));
  --pill-border-color: var(--tag-border-color, hsla(240, 67%, 84%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(240, 67%, 84%, 0.15));
  --pill-color: var(--tag-color, #3b3149);
  --pill-color-hover: var(--tag-color-hover, #4d4161);
  --pill-color-remove: var(--tag-color, #3b3149);
  --pill-color-remove-hover: var(--tag-color-hover, #4d4161);
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.12em);
  background-color: var(--pill-background, rgba(230, 230, 250, 0.85));
  border-bottom-color: rgba(187, 187, 242, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(187, 187, 242, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(187, 187, 242, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(187, 187, 242, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(59, 49, 73));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(59, 49, 73);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(230, 230, 250);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 230, 250);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 250);
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 250);
  border-top-width: 0px;
  color: var(--h1-color, rgb(230, 230, 250));
  font-family: var(--h1-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 35.2px);
  letter-spacing: var(--h1-letter-spacing, -0.528px);
  line-height: var(--h1-line-height, 52.8px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(230, 230, 250));
  font-size: var(--inline-title-size, 35.2px);
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: rgb(230, 230, 250);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 230, 250);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 250);
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 250);
  border-top-width: 0px;
  color: var(--h2-color, rgb(230, 230, 250));
  font-family: var(--h2-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 32px);
  letter-spacing: var(--h2-letter-spacing, -0.352px);
  line-height: var(--h2-line-height, 48px);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(230, 230, 250);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 230, 250);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 250);
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 250);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(230, 230, 250));
  font-family: var(--inline-title-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 35.2px);
  letter-spacing: -0.528px;
  line-height: var(--inline-title-line-height, 52.8px);
  margin-bottom: 17.6px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: rgb(230, 230, 250);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 230, 250);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 250);
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 250);
  border-top-width: 0px;
  color: var(--h3-color, rgb(230, 230, 250));
  font-family: var(--h3-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 28.8px);
  letter-spacing: var(--h3-letter-spacing, -0.2304px);
  line-height: var(--h3-line-height, 43.2px);
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(230, 230, 250);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 230, 250);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 250);
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 250);
  border-top-width: 0px;
  color: var(--h4-color, rgb(230, 230, 250));
  font-family: var(--h4-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 25.6px);
  letter-spacing: var(--h4-letter-spacing, -0.128px);
  line-height: var(--h4-line-height, 38.4px);
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(230, 230, 250);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 230, 250);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 250);
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 250);
  border-top-width: 0px;
  color: var(--h5-color, rgb(230, 230, 250));
  font-family: var(--h5-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 22.4px);
  letter-spacing: var(--h5-letter-spacing, -0.0448px);
  line-height: var(--h5-line-height, 33.6px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(230, 230, 250);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 230, 250);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 250);
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 250);
  border-top-width: 0px;
  color: var(--h6-color, rgb(230, 230, 250));
  font-family: var(--h6-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  line-height: var(--h6-line-height, 28.8px);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(145, 129, 170);
  border-bottom-width: 0px;
  border-left-color: rgb(145, 129, 170);
  border-left-width: 0px;
  border-right-color: rgb(145, 129, 170);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-bug: var(--color-base-50-rgb, 145, 129, 170);
  --callout-color: var(--callout-default, 145, 129, 170);
  --callout-default: var(--color-base-50-rgb, 145, 129, 170);
  --callout-error: var(--color-base-50-rgb, 145, 129, 170);
  --callout-example: var(--color-base-50-rgb, 145, 129, 170);
  --callout-fail: var(--color-base-50-rgb, 145, 129, 170);
  --callout-important: var(--color-base-50-rgb, 145, 129, 170);
  --callout-info: var(--color-base-50-rgb, 145, 129, 170);
  --callout-question: var(--color-base-50-rgb, 145, 129, 170);
  --callout-quote: var(--color-base-50-rgb, 145, 129, 170);
  --callout-success: var(--color-base-50-rgb, 145, 129, 170);
  --callout-summary: var(--color-base-50-rgb, 145, 129, 170);
  --callout-tip: var(--color-base-50-rgb, 145, 129, 170);
  --callout-todo: var(--color-base-50-rgb, 145, 129, 170);
  --callout-warning: var(--color-base-50-rgb, 145, 129, 170);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0.65);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(0, 0, 0));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(0, 0, 0));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(249, 248, 254);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: var(--icon-color, rgb(249, 248, 254));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(87, 73, 108));
  border-bottom-color: rgb(145, 129, 170);
  border-bottom-width: 0px;
  border-left-color: rgb(145, 129, 170);
  border-left-width: 0px;
  border-right-color: rgb(145, 129, 170);
  border-right-width: 0px;
  border-top-color: rgb(145, 129, 170);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgba(249, 248, 249, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  --background-modifier-hover: var(--color-base-30, #6a5884);
  color: rgba(249, 248, 249, 0.85);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(0, 0, 0));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(0, 0, 0));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(49, 49, 71);
  border-bottom-width: 0px;
  border-left-color: rgb(49, 49, 71);
  border-left-width: 0px;
  border-right-color: rgb(49, 49, 71);
  border-right-width: 0px;
  border-top-color: rgb(49, 49, 71);
  border-top-width: 0px;
  color: var(--icon-color, rgb(49, 49, 71));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(49, 49, 71);
  stroke: rgb(49, 49, 71);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(249, 248, 249, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 248, 249, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 248, 249, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 248, 249, 0.85);
  border-top-width: 0px;
  color: rgba(249, 248, 249, 0.85);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(249, 248, 249, 0.65));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(249, 248, 254));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .canvas-sidebar {
  --color-accent: var(--light-ink-alt, #313147);
  background-color: var(--background-secondary, rgb(230, 230, 250));
  border-color: rgb(249, 248, 254);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(145, 129, 170);
  color: var(--table-header-color, rgb(230, 230, 250));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--metadata-background, rgb(77, 65, 97));
  border-bottom-color: rgb(145, 129, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(145, 129, 170);
  border-left-width: 1px;
  border-right-color: rgb(145, 129, 170);
  border-right-width: 1px;
  border-top-color: rgb(145, 129, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-muted, rgba(249, 248, 249, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgba(249, 248, 249, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 248, 249, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 248, 249, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 248, 249, 0.85);
  border-top-width: 0px;
  color: rgba(249, 248, 249, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(249, 248, 249, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 248, 249, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 248, 249, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 248, 249, 0.85);
  border-top-width: 0px;
  color: rgba(249, 248, 249, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgba(249, 248, 249, 0.85);
  font-family: var(--metadata-label-font, "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgba(249, 248, 249, 0.85);
  font-family: var(--metadata-input-font, "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--metadata-background, rgb(77, 65, 97));
  border-color: rgb(145, 129, 170);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(249, 248, 249, 0.85);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(249, 248, 249, 0.85);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(230, 230, 250, 0.85));
  --pill-background-hover: var(--tag-background-hover, rgba(230, 230, 250, 0.85));
  --pill-border-color: var(--tag-border-color, hsla(240, 67%, 84%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(240, 67%, 84%, 0.15));
  --pill-color: var(--tag-color, #3b3149);
  --pill-color-hover: var(--tag-color-hover, #4d4161);
  --pill-color-remove: var(--tag-color, #3b3149);
  --pill-color-remove-hover: var(--tag-color-hover, #4d4161);
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.12em);
  background-color: var(--pill-background, rgba(230, 230, 250, 0.85));
  color: var(--pill-color, rgb(59, 49, 73));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(249, 248, 249, 0.85);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(59, 49, 73));
  color: var(--text-normal, rgb(249, 248, 254));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(230, 230, 250));
  border-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(230, 230, 250));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(249, 248, 254);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(87, 73, 108));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
  color: var(--text-normal, rgb(249, 248, 254));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(249, 248, 249, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 248, 249, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 248, 249, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 248, 249, 0.85);
  border-top-width: 0px;
  color: var(--text-normal, rgba(249, 248, 249, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  --code-background: var(--leather-color-alt, #bcbcf2);
  --code-normal: var(--light-ink-alt, #313147);
  background-color: var(--code-background, rgb(188, 188, 242));
  border-bottom-color: rgb(49, 49, 71);
  border-bottom-width: 0px;
  border-left-color: rgb(49, 49, 71);
  border-left-width: 0px;
  border-right-color: rgb(49, 49, 71);
  border-right-width: 0px;
  border-top-color: rgb(49, 49, 71);
  border-top-width: 0px;
  color: var(--code-normal, rgb(49, 49, 71));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(249, 248, 254);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 254);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 254);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 254);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body summary {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body sup {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(230, 230, 250, 0.85));
  border-bottom-color: rgba(187, 187, 242, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(187, 187, 242, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(187, 187, 242, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(187, 187, 242, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(59, 49, 73));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 45.5;
  --accent-l: 54.9%;
  --accent-s: 28.7%;
  --background-modifier-border: var(--color-base-50, #ad9d6b);
  --background-modifier-border-focus: var(--color-base-40, #bbad85);
  --background-modifier-border-hover: var(--color-base-60, #9b8a56);
  --background-modifier-error: var(--leather-color, #3f345e);
  --background-modifier-error-hover: var(--leather-color-alt, #4a3d6e);
  --background-modifier-error-rgb: var(--color-red-rgb, 180, 60, 60);
  --background-modifier-form-field: var(--color-base-20, #d7cfb7);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #d7cfb7);
  --background-modifier-hover: var(--leather-color-alt, #4a3d6e);
  --background-modifier-message: var(--color-base-40, #bbad85);
  --background-modifier-success: var(--color-base-40, #bbad85);
  --background-modifier-success-rgb: var(--color-green-rgb, 113, 148, 97);
  --background-primary: var(--color-base-00, #faf9f6);
  --background-primary-alt: var(--color-base-10, #e5e0d0);
  --background-secondary: var(--leather-color, #3f345e);
  --background-secondary-alt: var(--leather-color-alt, #ece8dd);
  --bases-cards-background: var(--background-primary, #faf9f6);
  --bases-cards-cover-background: var(--background-primary-alt, #e5e0d0);
  --bases-embed-border-color: var(--background-modifier-border, #ad9d6b);
  --bases-group-heading-property-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --bases-table-border-color: var(--table-border-color, #ad9d6b);
  --bases-table-cell-background-active: var(--background-primary, #faf9f6);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #e5e0d0);
  --bases-table-cell-background-selected: var(--table-selection, hsla(45.5, 28.7%, 54.9%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #e5e0d0);
  --bases-table-header-background: var(--background-primary, #faf9f6);
  --bases-table-header-background-hover: var(--color-base-20, #d7cfb7);
  --bases-table-header-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --bases-table-summary-background: var(--background-primary, #faf9f6);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #4a3d6e);
  --blockquote-background-color: rgba(var(--color-base-50-rgb), 0.2);
  --blockquote-border-color: var(--secondary-ink, #1e3d6d);
  --bodyFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --bold-accent-ink: #1e3d6d;
  --bold-color: var(--bold-accent-ink, #1e3d6d);
  --button-radius: var(--input-radius, 50px);
  --callout-border-width: 2px;
  --callout-bug: var(--color-red-rgb, 180, 60, 60);
  --callout-default: var(--color-blue-rgb, 34, 89, 115);
  --callout-error: var(--color-red-rgb, 180, 60, 60);
  --callout-example: var(--color-purple-rgb, 119, 92, 176);
  --callout-fail: var(--color-red-rgb, 180, 60, 60);
  --callout-important: var(--color-cyan-rgb, 83, 179, 184);
  --callout-info: var(--color-blue-rgb, 34, 89, 115);
  --callout-question: var(--color-orange-rgb, 219, 129, 52);
  --callout-quote: var(--callout-quote, 173,157,107);
  --callout-success: var(--color-green-rgb, 113, 148, 97);
  --callout-summary: var(--color-cyan-rgb, 83, 179, 184);
  --callout-tip: var(--color-cyan-rgb, 83, 179, 184);
  --callout-todo: var(--color-blue-rgb, 34, 89, 115);
  --callout-warning: var(--color-orange-rgb, 219, 129, 52);
  --canvas-background: var(--background-primary, #faf9f6);
  --canvas-card-label-color: var(--text-faint, rgba(3, 6, 10, 0.65));
  --canvas-color-1: var(--color-red-rgb, 180, 60, 60);
  --canvas-color-2: var(--color-orange-rgb, 219, 129, 52);
  --canvas-color-3: var(--color-yellow-rgb, 242, 186, 68);
  --canvas-color-4: var(--color-green-rgb, 113, 148, 97);
  --canvas-color-5: var(--color-cyan-rgb, 83, 179, 184);
  --canvas-color-6: var(--color-purple-rgb, 119, 92, 176);
  --canvas-dot-pattern: rgba(var(--secondary-ink-rgb), 0.4);
  --caret-color: var(--color-base-70, #827348);
  --checkbox-border-color: var(--main-ink, #03060a);
  --checkbox-border-color-hover: var(--main-ink-fainted, rgba(3, 6, 10, 0.65));
  --checkbox-color: var(--secondary-ink, #1e3d6d);
  --checkbox-color-hover: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
  --checkbox-marker-color: var(--light-ink-alt, #d7cfb7);
  --checklist-done-color: var(--secondary-ink-fainted, rgba(30, 61, 109, 0.65));
  --code-background: rgba(var(--color-base-50-rgb), 0.2);
  --code-border-color: var(--background-modifier-border, #ad9d6b);
  --code-bracket-background: var(--background-modifier-hover, #4a3d6e);
  --code-comment: var(--text-faint, rgba(3, 6, 10, 0.65));
  --code-function: var(--color-yellow, #f2ba44);
  --code-important: var(--color-orange, #db8134);
  --code-keyword: var(--color-pink, #dc84a3);
  --code-normal: var(--text-normal, #03060a);
  --code-operator: var(--color-red, #b43c3c);
  --code-property: var(--color-cyan, #53b3b8);
  --code-punctuation: var(--text-muted, rgba(3, 6, 10, 0.85));
  --code-string: var(--color-green, #719461);
  --code-tag: var(--color-red, #b43c3c);
  --code-value: var(--color-purple, #775cb0);
  --collapse-icon-color: var(--text-faint, rgba(3, 6, 10, 0.65));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(45.5, 28.7%, 54.9%));
  --color-base-00: #faf9f6;
  --color-base-00-rgb: 250,249,246;
  --color-base-05: #ece8dd;
  --color-base-10: #e5e0d0;
  --color-base-100: #36301e;
  --color-base-20: #d7cfb7;
  --color-base-25: #d0c7aa;
  --color-base-30: #c9be9e;
  --color-base-35: #c2b691;
  --color-base-40: #bbad85;
  --color-base-50: #ad9d6b;
  --color-base-50-rgb: 173,157,107;
  --color-base-60: #9b8a56;
  --color-base-70: #827348;
  --color-blue: #225973;
  --color-blue-rgb: 34, 89, 115;
  --color-cyan: #53b3b8;
  --color-cyan-rgb: 83, 179, 184;
  --color-green: #719461;
  --color-green-rgb: 113, 148, 97;
  --color-orange: #db8134;
  --color-orange-rgb: 219, 129, 52;
  --color-pink: #dc84a3;
  --color-pink-rgb: 220, 132, 163;
  --color-purple: #775cb0;
  --color-purple-rgb: 119, 92, 176;
  --color-red: #b43c3c;
  --color-red-rgb: 180, 60, 60;
  --color-yellow: #f2ba44;
  --color-yellow-rgb: 242, 186, 68;
  --dark: var(--text-normal, var(--main-ink, #03060a));
  --darkgray: var(--text-normal, var(--main-ink, #03060a));
  --divider-color: var(--background-modifier-border, #ad9d6b);
  --divider-color-hover: var(--interactive-accent, #4a3d6e);
  --dropdown-background: var(--interactive-normal, #c9be9e);
  --dropdown-background-hover: var(--interactive-hover, #d7cfb7);
  --embed-background: rgba(var(--color-base-50-rgb), 0.15);
  --fainted: 0.65;
  --file-header-background: var(--background-primary, #faf9f6);
  --file-header-background-focused: var(--background-primary, #faf9f6);
  --file-header-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #c9be9e);
  --flair-color: var(--text-normal, #03060a);
  --font-interface-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-mermaid: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-text-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --footnote-divider-color: var(--metadata-divider-color, #ad9d6b);
  --footnote-id-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(3, 6, 10, 0.65));
  --footnote-input-background-active: var(--metadata-input-background-active, #ece8dd);
  --graph-node: var(--text-muted, rgba(3, 6, 10, 0.85));
  --graph-node-attachment: var(--color-yellow, #f2ba44);
  --graph-node-focused: var(--secondary-ink, #1e3d6d);
  --graph-node-tag: var(--bold-accent-ink, #1e3d6d);
  --graph-node-unresolved: var(--text-faint, rgba(3, 6, 10, 0.65));
  --graph-text: var(--text-normal, #03060a);
  --gray: var(--text-muted, var(--main-ink-muted, rgba(3, 6, 10, 0.85)));
  --h1-color: var(--secondary-ink, #1e3d6d);
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: var(--secondary-ink, #1e3d6d);
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: var(--secondary-ink, #1e3d6d);
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: var(--secondary-ink, #1e3d6d);
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: var(--secondary-ink, #1e3d6d);
  --h5-line-height: var(--line-height-normal, 1.5em);
  --h5-size: 1.4em;
  --h6-color: var(--secondary-ink, #1e3d6d);
  --h6-line-height: var(--line-height-normal, 1.5em);
  --h6-size: 1.2em;
  --headerFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --heading-formatting: var(--text-faint, rgba(3, 6, 10, 0.65));
  --highlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --hr-color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
  --icon-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --icon-color-active: var(--text-accent, hsl(45.5, 28.7%, 54.9%));
  --icon-color-focused: var(--text-normal, #03060a);
  --icon-color-hover: var(--text-muted, rgba(3, 6, 10, 0.85));
  --indentation-guide-color: var(--secondary-ink-fainted, rgba(30, 61, 109, 0.65));
  --indentation-guide-color-active: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
  --inline-title-color: var(--h1-color, #1e3d6d);
  --inline-title-line-height: var(--h1-line-height, 1.5em);
  --inline-title-size: var(--h1-size, 2.2em);
  --input-date-separator: var(--text-faint, rgba(3, 6, 10, 0.65));
  --input-placeholder-color: var(--text-faint, rgba(3, 6, 10, 0.65));
  --interactive-accent: var(--leather-color-alt, #4a3d6e);
  --interactive-accent-hover: var(--leather-color, #3f345e);
  --interactive-accent-hsl: var(--color-accent-hsl, 45.5, 28.7%, 54.9%);
  --interactive-hover: var(--color-base-20, #d7cfb7);
  --interactive-normal: var(--color-base-30, #c9be9e);
  --italic-accent-ink: #3a4f3a;
  --italic-color: var(--italic-accent-ink, #3a4f3a);
  --leather-color: #3f345e;
  --leather-color-alt: #4a3d6e;
  --leather-color-rgb: 99, 35, 53;
  --light: var(--background-primary, var(--color-base-00, #faf9f6));
  --light-ink: var(--color-base-00, #faf9f6);
  --light-ink-alt: var(--color-base-20, #d7cfb7);
  --light-ink-fainted: rgba(var(--color-base-00-rgb),var(--fainted));
  --light-ink-muted: rgba(var(--color-base-00-rgb),var(--muted));
  --lightgray: var(--background-secondary, var(--leather-color, #3f345e));
  --link-color: var(--secondary-ink, #1e3d6d);
  --link-color-hover: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
  --link-external-color: var(--secondary-ink, #1e3d6d);
  --link-external-color-hover: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
  --link-unresolved-color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
  --link-unresolved-color-hover: var(--secondary-ink, #1e3d6d);
  --link-unresolved-decoration-color: var(--secondary-ink, #1e3d6d);
  --list-marker-color: var(--secondary-ink-fainted, rgba(30, 61, 109, 0.65));
  --list-marker-color-collapsed: var(--secondary-ink, #1e3d6d);
  --list-marker-color-hover: var(--secondary-ink-fainted, rgba(30, 61, 109, 0.65));
  --main-ink: #03060a;
  --main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
  --main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
  --main-ink-rgb: 3, 6, 10;
  --menu-background: var(--background-secondary, #3f345e);
  --menu-border-color: var(--background-modifier-border-hover, #9b8a56);
  --metadata-background: var(--color-base-10, #e5e0d0);
  --metadata-border-color: var(--color-base-50, #ad9d6b);
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: var(--background-modifier-border, #ad9d6b);
  --metadata-gap: 4px;
  --metadata-input-background-active: var(--color-base-05, #ece8dd);
  --metadata-input-background-hover: var(--color-base-10, #e5e0d0);
  --metadata-input-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #03060a);
  --metadata-label-background-active: var(--color-base-10, #e5e0d0);
  --metadata-label-background-hover: var(--color-base-10, #e5e0d0);
  --metadata-label-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --metadata-label-text-color-hover: var(--text-muted, rgba(3, 6, 10, 0.85));
  --metadata-padding: var(--size-4-2, 16px) 0;
  --metadata-property-background-active: var(--color-base-20, #d7cfb7);
  --metadata-property-background-hover: var(--color-base-20, #d7cfb7);
  --modal-background: var(--color-base-10, #e5e0d0);
  --modal-border-width: var(--border-width, 2px);
  --muted: 0.85;
  --nav-collapse-icon-color: var(--color-base-50, #ad9d6b);
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(3, 6, 10, 0.65));
  --nav-heading-color: var(--text-normal, #03060a);
  --nav-heading-color-collapsed: var(--text-faint, rgba(3, 6, 10, 0.65));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(3, 6, 10, 0.85));
  --nav-heading-color-hover: var(--text-normal, #03060a);
  --nav-indentation-guide-color: rgba(var(--color-base-50-rgb), var(--fainted));
  --nav-item-background-active: var(--background-modifier-hover, #4a3d6e);
  --nav-item-background-hover: var(--background-modifier-hover, #4a3d6e);
  --nav-item-color: var(--light-ink, #faf9f6);
  --nav-item-color-active: var(--light-ink-alt, #d7cfb7);
  --nav-item-color-highlighted: var(--text-accent, hsl(45.5, 28.7%, 54.9%));
  --nav-item-color-hover: var(--light-ink-alt, #d7cfb7);
  --nav-item-color-selected: var(--light-ink-alt, #d7cfb7);
  --nav-tag-color: var(--text-faint, rgba(3, 6, 10, 0.65));
  --nav-tag-color-active: var(--text-muted, rgba(3, 6, 10, 0.85));
  --nav-tag-color-hover: var(--text-muted, rgba(3, 6, 10, 0.85));
  --pdf-background: var(--background-primary, #faf9f6);
  --pdf-page-background: var(--background-primary, #faf9f6);
  --pdf-sidebar-background: var(--background-primary, #faf9f6);
  --pill-background: var(--color-base-20, #d7cfb7);
  --pill-background-hover: var(--color-base-30, #c9be9e);
  --pill-border-color: var(--color-base-50, #ad9d6b);
  --pill-border-color-hover: var(--background-modifier-border-hover, #9b8a56);
  --pill-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --pill-color-hover: var(--text-normal, #03060a);
  --pill-color-remove: var(--text-faint, rgba(3, 6, 10, 0.65));
  --pill-color-remove-hover: var(--text-accent, hsl(45.5, 28.7%, 54.9%));
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: var(--background-primary, #faf9f6);
  --prompt-border-color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
  --prompt-border-width: var(--border-width, 2px);
  --raised-background: var(--blur-background, color-mix(in srgb, #faf9f6 65%, transparent) linear-gradient(#faf9f6, color-mix(in srgb, #faf9f6 65%, transparent)));
  --ribbon-background: var(--background-secondary, #3f345e);
  --ribbon-background-collapsed: var(--leather-color-alt, #4a3d6e);
  --search-clear-button-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --search-icon-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --search-result-background: var(--color-base-00, #faf9f6);
  --secondary: var(--text-accent, var(--color-accent, hsl(45.5, 28.7%, 54.9%)));
  --secondary-ink: #1e3d6d;
  --secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
  --secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
  --secondary-ink-rgb: 30, 61, 109;
  --setting-group-heading-color: var(--text-normal, #03060a);
  --setting-items-background: var(--background-primary-alt, #e5e0d0);
  --setting-items-border-color: var(--background-modifier-border, #ad9d6b);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(3, 6, 10, 0.85));
  --shiki-code-background: var(--code-background, rgba(173, 157, 107, 0.2));
  --shiki-code-comment: var(--text-faint, rgba(3, 6, 10, 0.65));
  --shiki-code-function: var(--color-green, #719461);
  --shiki-code-important: var(--color-orange, #db8134);
  --shiki-code-keyword: var(--color-pink, #dc84a3);
  --shiki-code-normal: var(--text-muted, rgba(3, 6, 10, 0.85));
  --shiki-code-property: var(--color-cyan, #53b3b8);
  --shiki-code-punctuation: var(--text-muted, rgba(3, 6, 10, 0.85));
  --shiki-code-string: var(--color-yellow, #f2ba44);
  --shiki-code-value: var(--color-purple, #775cb0);
  --shiki-gutter-border-color: var(--background-modifier-border, #ad9d6b);
  --shiki-gutter-text-color: var(--text-faint, rgba(3, 6, 10, 0.65));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(3, 6, 10, 0.85));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(3, 6, 10, 0.85));
  --shiki-terminal-dots-color: var(--text-faint, rgba(3, 6, 10, 0.65));
  --shiki-tooltip-background: var(--background-modifier-message, #bbad85);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #9b8a56);
  --slider-track-background: var(--background-modifier-border, #ad9d6b);
  --status-bar-background: var(--color-base-20, #d7cfb7);
  --status-bar-border-color: var(--divider-color, #ad9d6b);
  --status-bar-text-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --suggestion-background: var(--background-primary, #faf9f6);
  --sync-avatar-color-1: var(--color-red, #b43c3c);
  --sync-avatar-color-2: var(--color-orange, #db8134);
  --sync-avatar-color-3: var(--color-yellow, #f2ba44);
  --sync-avatar-color-4: var(--color-green, #719461);
  --sync-avatar-color-5: var(--color-cyan, #53b3b8);
  --sync-avatar-color-6: var(--color-blue, #225973);
  --sync-avatar-color-7: var(--color-purple, #775cb0);
  --sync-avatar-color-8: var(--color-pink, #dc84a3);
  --tab-background-active: var(--color-base-10, #e5e0d0);
  --tab-container-background: var(--background-secondary, #3f345e);
  --tab-divider-color: var(--background-modifier-border-hover, none);
  --tab-font-weight: 600;
  --tab-outline-color: var(--color-base-30, #c9be9e);
  --tab-switcher-background: var(--background-secondary, #3f345e);
  --tab-text-color-focused-active-current: var(--text-normal, #03060a);
  --table-add-button-border-color: var(--background-modifier-border, #ad9d6b);
  --table-border-color: var(--color-base-50, #ad9d6b);
  --table-drag-handle-background-active: var(--table-selection-border-color, #4a3d6e);
  --table-drag-handle-color: var(--text-faint, rgba(3, 6, 10, 0.65));
  --table-drag-handle-color-active: var(--text-on-accent, #d7cfb7);
  --table-header-border-color: var(--table-border-color, #ad9d6b);
  --table-header-color: var(--secondary-ink, #1e3d6d);
  --table-selection-border-color: var(--interactive-accent, #4a3d6e);
  --tag-background: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
  --tag-background-hover: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
  --tag-color: var(--color-base-10, #e5e0d0);
  --tag-color-hover: var(--color-base-10, #e5e0d0);
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(42.5, 29.274%, 63.135%)));
  --text-accent: var(--color-accent, hsl(45.5, 28.7%, 54.9%));
  --text-accent-hover: var(--color-accent-2, hsl(42.5, 29.274%, 63.135%));
  --text-error: var(--color-red, #b43c3c);
  --text-faint: var(--main-ink-fainted, rgba(3, 6, 10, 0.65));
  --text-fainted: var(--main-ink-fainted, rgba(3, 6, 10, 0.65));
  --text-highlight-bg: rgba(var(--color-yellow-rgb),0.4);
  --text-muted: var(--main-ink-muted, rgba(3, 6, 10, 0.85));
  --text-normal: var(--main-ink, #03060a);
  --text-on-accent: var(--light-ink-alt, #d7cfb7);
  --text-on-accent-inverted: var(--light-ink-alt, #d7cfb7);
  --text-selection: rgba(var(--color-base-50-rgb),0.5);
  --text-success: var(--color-green, #719461);
  --text-warning: var(--color-orange, #db8134);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --titleFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --titlebar-background: var(--background-secondary, #3f345e);
  --titlebar-background-focused: var(--leather-color, #3f345e);
  --titlebar-border-color: var(--background-modifier-border, #ad9d6b);
  --titlebar-text-color: var(--text-muted, rgba(3, 6, 10, 0.85));
  --titlebar-text-color-focused: var(--text-normal, #03060a);
  --vault-profile-color: var(--text-normal, #03060a);
  --vault-profile-color-hover: var(--vault-profile-color, #03060a);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #3f345e);
  --icon-color: var(--light-ink-alt, #d7cfb7);
  --icon-color-active: var(--light-ink-alt, #d7cfb7);
  --icon-color-focused: var(--light-ink-alt, #d7cfb7);
  --icon-color-hover: var(--light-ink-alt, #d7cfb7);
  --nav-heading-color: var(--light-ink-alt, #d7cfb7);
  --nav-heading-color-collapsed: var(--light-ink-alt, #d7cfb7);
  --nav-heading-color-collapsed-hover: var(--light-ink-alt, #d7cfb7);
  --nav-tag-background: var(--leather-color-alt, #4a3d6e);
  --nav-tag-color: var(--light-ink-alt, #d7cfb7);
  --nav-tag-color-active: var(--light-ink-alt, #d7cfb7);
  --nav-tag-color-hover: var(--light-ink-alt, #d7cfb7);
  --tab-text-color-focused-active-current: var(--light-ink-alt, #d7cfb7);
  --text-faint: var(--light-ink-fainted, rgba(250, 249, 246, 0.65));
  --text-muted: var(--light-ink-muted, rgba(250, 249, 246, 0.85));
  --vault-profile-color: var(--light-ink-alt, #d7cfb7);
  --vault-profile-color-hover: var(--light-ink-alt, #d7cfb7);
  background-color: var(--tab-container-background, rgb(63, 52, 94));
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(250, 249, 246));
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(63, 52, 94));
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(173, 157, 107);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #3f345e);
  --icon-color: var(--light-ink-alt, #d7cfb7);
  --icon-color-active: var(--light-ink-alt, #d7cfb7);
  --icon-color-focused: var(--light-ink-alt, #d7cfb7);
  --icon-color-hover: var(--light-ink-alt, #d7cfb7);
  --nav-heading-color: var(--light-ink-alt, #d7cfb7);
  --nav-heading-color-collapsed: var(--light-ink-alt, #d7cfb7);
  --nav-heading-color-collapsed-hover: var(--light-ink-alt, #d7cfb7);
  --nav-tag-background: var(--leather-color-alt, #4a3d6e);
  --nav-tag-color: var(--light-ink-alt, #d7cfb7);
  --nav-tag-color-active: var(--light-ink-alt, #d7cfb7);
  --nav-tag-color-hover: var(--light-ink-alt, #d7cfb7);
  --tab-text-color-focused-active-current: var(--light-ink-alt, #d7cfb7);
  --text-faint: var(--light-ink-fainted, rgba(250, 249, 246, 0.65));
  --text-muted: var(--light-ink-muted, rgba(250, 249, 246, 0.85));
  --vault-profile-color: var(--light-ink-alt, #d7cfb7);
  --vault-profile-color-hover: var(--light-ink-alt, #d7cfb7);
  background-color: var(--tab-container-background, rgb(63, 52, 94));
  border-left-color: rgb(173, 157, 107);
  border-left-width: 0px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body html {
  --fainted: 0.65;
  --muted: 0.85;
  --plexmono: 'IBM Plex Mono', monospace;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(30, 61, 109));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(58, 79, 58));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 79, 58) none 0px;
  text-decoration-color: rgb(58, 79, 58);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(58, 79, 58));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 79, 58) none 0px;
  text-decoration-color: rgb(58, 79, 58);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(58, 79, 58));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 79, 58) none 0px;
  text-decoration-color: rgb(58, 79, 58);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(30, 61, 109));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(242, 186, 68, 0.4));
  color: var(--text-normal, rgb(3, 6, 10));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(3, 6, 10) none 0px;
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body del {
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(3, 6, 10) none 0px;
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(30, 61, 109));
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgba(250, 249, 246, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(250, 249, 246, 0.85) none 0px;
  text-decoration-color: rgba(250, 249, 246, 0.85);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(30, 61, 109));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(30, 61, 109));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgba(30, 61, 109, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(30, 61, 109, 0.85) none 0px;
  text-decoration: underline rgb(30, 61, 109);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(30, 61, 109));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(3, 6, 10);
  margin-bottom: 0px;
  margin-left: 28.8001px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(3, 6, 10);
  margin-bottom: 0px;
  margin-left: 28.8001px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgba(3, 6, 10, 0.65));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(173, 157, 107, 0.2));
  color: var(--blockquote-color, rgb(3, 6, 10));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(173, 157, 107);
  border-bottom-width: 0px;
  border-left-color: rgb(173, 157, 107);
  border-left-width: 0px;
  border-right-color: rgb(173, 157, 107);
  border-right-width: 0px;
  border-top-color: rgb(173, 157, 107);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(3, 6, 10));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(173, 157, 107);
  border-bottom-width: 0px;
  border-left-color: rgb(173, 157, 107);
  border-left-width: 0px;
  border-right-color: rgb(173, 157, 107);
  border-right-width: 0px;
  border-top-color: rgb(173, 157, 107);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(30, 61, 109));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(173, 157, 107, 0.2));
  border-bottom-color: rgb(173, 157, 107);
  border-bottom-width: 0px;
  border-left-color: rgb(173, 157, 107);
  border-left-width: 0px;
  border-right-color: rgb(173, 157, 107);
  border-right-width: 0px;
  border-top-color: rgb(173, 157, 107);
  border-top-width: 0px;
  color: var(--code-normal, rgb(3, 6, 10));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(173, 157, 107, 0.2));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgba(173, 157, 107, 0.2));
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(229, 224, 208));
  border-bottom-color: rgba(3, 6, 10, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(3, 6, 10, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(3, 6, 10, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(3, 6, 10, 0.85);
  border-top-width: 0px;
  color: var(--text-muted, rgba(3, 6, 10, 0.85));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, rgba(173, 157, 107, 0.15));
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(74, 61, 110);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, rgba(173, 157, 107, 0.15));
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: rgb(3, 6, 10);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(30, 61, 109, 0.65);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(30, 61, 109, 0.65);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 207, 183);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 207, 183);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 129, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 157, 107);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 186, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 179, 184);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 89, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 60, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 60, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 60, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 60, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 89, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 186, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 186, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 92, 176);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 60, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(113, 148, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(113, 148, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(113, 148, 97);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-summary, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-bug, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-error, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-example, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-fail, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-info, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-default, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-question, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-quote, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-success, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-tip, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-todo, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-warning, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  background: rgba(173, 157, 107, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(3, 6, 10);
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
  background-color: rgb(215, 207, 183);
  border-bottom-color: rgb(173, 157, 107);
  border-bottom-width: 0px;
  border-left-color: rgb(173, 157, 107);
  border-left-width: 0px;
  border-right-color: rgb(173, 157, 107);
  border-right-width: 0px;
  border-top-color: rgb(173, 157, 107);
  border-top-width: 0px;
  color: var(--text-normal, rgb(3, 6, 10));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  --background-modifier-form-field-hover: var(--leather-color-alt, #4a3d6e);
  --background-primary: var(--leather-color, #3f345e);
  --search-clear-button-color: var(--light-ink-alt, #d7cfb7);
  --text-muted: var(--light-ink-muted, rgba(250, 249, 246, 0.85));
  --text-normal: var(--light-ink, #faf9f6);
  background-color: var(--prompt-background, rgb(250, 249, 246));
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: var(--light-ink-alt, rgb(215, 207, 183));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 207, 183) none 0px;
  text-decoration-color: rgb(215, 207, 183);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(74, 61, 110));
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  --background-modifier-form-field-hover: var(--leather-color-alt, #4a3d6e);
  --background-primary: var(--leather-color, #3f345e);
  --search-clear-button-color: var(--light-ink-alt, #d7cfb7);
  --text-muted: var(--light-ink-muted, rgba(250, 249, 246, 0.85));
  --text-normal: var(--light-ink, #faf9f6);
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(63, 52, 94);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 249, 246);
  border-left-width: 0px;
  border-right-color: rgb(250, 249, 246);
  border-right-width: 0px;
  border-top-color: rgb(250, 249, 246);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(74, 61, 110));
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(74, 61, 110));
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(30, 61, 109, 0.85));
  --pill-background-hover: var(--tag-background-hover, rgba(30, 61, 109, 0.85));
  --pill-border-color: var(--tag-border-color, hsla(45.5, 28.7%, 54.9%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(45.5, 28.7%, 54.9%, 0.15));
  --pill-color: var(--tag-color, #e5e0d0);
  --pill-color-hover: var(--tag-color-hover, #e5e0d0);
  --pill-color-remove: var(--tag-color, #e5e0d0);
  --pill-color-remove-hover: var(--tag-color-hover, #e5e0d0);
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.12em);
  background-color: var(--pill-background, rgba(30, 61, 109, 0.85));
  border-bottom-color: rgba(173, 157, 107, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(173, 157, 107, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(173, 157, 107, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(173, 157, 107, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(229, 224, 208));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(229, 224, 208);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: var(--h1-color, rgb(30, 61, 109));
  font-family: var(--h1-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 35.2px);
  letter-spacing: var(--h1-letter-spacing, -0.528px);
  line-height: var(--h1-line-height, 52.8px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(30, 61, 109));
  font-size: var(--inline-title-size, 35.2px);
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: var(--h2-color, rgb(30, 61, 109));
  font-family: var(--h2-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 32px);
  letter-spacing: var(--h2-letter-spacing, -0.352px);
  line-height: var(--h2-line-height, 48px);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(30, 61, 109));
  font-family: var(--inline-title-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 35.2px);
  letter-spacing: -0.528px;
  line-height: var(--inline-title-line-height, 52.8px);
  margin-bottom: 17.6px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: var(--h3-color, rgb(30, 61, 109));
  font-family: var(--h3-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 28.8px);
  letter-spacing: var(--h3-letter-spacing, -0.2304px);
  line-height: var(--h3-line-height, 43.2px);
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: var(--h4-color, rgb(30, 61, 109));
  font-family: var(--h4-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 25.6px);
  letter-spacing: var(--h4-letter-spacing, -0.128px);
  line-height: var(--h4-line-height, 38.4px);
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: var(--h5-color, rgb(30, 61, 109));
  font-family: var(--h5-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 22.4px);
  letter-spacing: var(--h5-letter-spacing, -0.0448px);
  line-height: var(--h5-line-height, 33.6px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: var(--h6-color, rgb(30, 61, 109));
  font-family: var(--h6-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  line-height: var(--h6-line-height, 28.8px);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(173, 157, 107);
  border-bottom-width: 0px;
  border-left-color: rgb(173, 157, 107);
  border-left-width: 0px;
  border-right-color: rgb(173, 157, 107);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-bug: var(--color-base-50-rgb, 173,157,107);
  --callout-color: var(--callout-default, 173,157,107);
  --callout-default: var(--color-base-50-rgb, 173,157,107);
  --callout-error: var(--color-base-50-rgb, 173,157,107);
  --callout-example: var(--color-base-50-rgb, 173,157,107);
  --callout-fail: var(--color-base-50-rgb, 173,157,107);
  --callout-important: var(--color-base-50-rgb, 173,157,107);
  --callout-info: var(--color-base-50-rgb, 173,157,107);
  --callout-question: var(--color-base-50-rgb, 173,157,107);
  --callout-quote: var(--color-base-50-rgb, 173,157,107);
  --callout-success: var(--color-base-50-rgb, 173,157,107);
  --callout-summary: var(--color-base-50-rgb, 173,157,107);
  --callout-tip: var(--color-base-50-rgb, 173,157,107);
  --callout-todo: var(--color-base-50-rgb, 173,157,107);
  --callout-warning: var(--color-base-50-rgb, 173,157,107);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(173, 157, 107, 0.65);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(250, 249, 246));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(250, 249, 246));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="light"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(3, 6, 10);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: var(--icon-color, rgb(3, 6, 10));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(215, 207, 183));
  border-bottom-color: rgb(173, 157, 107);
  border-bottom-width: 0px;
  border-left-color: rgb(173, 157, 107);
  border-left-width: 0px;
  border-right-color: rgb(173, 157, 107);
  border-right-width: 0px;
  border-top-color: rgb(173, 157, 107);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgba(3, 6, 10, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  --background-modifier-hover: var(--color-base-30, #c9be9e);
  color: rgba(3, 6, 10, 0.85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(250, 249, 246));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(250, 249, 246);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(250, 249, 246);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(250, 249, 246));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(215, 207, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(215, 207, 183);
  border-left-width: 0px;
  border-right-color: rgb(215, 207, 183);
  border-right-width: 0px;
  border-top-color: rgb(215, 207, 183);
  border-top-width: 0px;
  color: var(--icon-color, rgb(215, 207, 183));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(215, 207, 183);
  stroke: rgb(215, 207, 183);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(3, 6, 10, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(3, 6, 10, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(3, 6, 10, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(3, 6, 10, 0.85);
  border-top-width: 0px;
  color: rgba(3, 6, 10, 0.85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(3, 6, 10, 0.65));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(3, 6, 10));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(250, 249, 246));
  border-color: rgb(3, 6, 10);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(173, 157, 107);
  color: var(--table-header-color, rgb(30, 61, 109));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--metadata-background, rgb(229, 224, 208));
  border-bottom-color: rgb(173, 157, 107);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(173, 157, 107);
  border-left-width: 1px;
  border-right-color: rgb(173, 157, 107);
  border-right-width: 1px;
  border-top-color: rgb(173, 157, 107);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-muted, rgba(3, 6, 10, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgba(3, 6, 10, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(3, 6, 10, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(3, 6, 10, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(3, 6, 10, 0.85);
  border-top-width: 0px;
  color: rgba(3, 6, 10, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(3, 6, 10, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(3, 6, 10, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(3, 6, 10, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(3, 6, 10, 0.85);
  border-top-width: 0px;
  color: rgba(3, 6, 10, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgba(3, 6, 10, 0.85);
  font-family: var(--metadata-label-font, "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgba(3, 6, 10, 0.85);
  font-family: var(--metadata-input-font, "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--metadata-background, rgb(229, 224, 208));
  border-color: rgb(173, 157, 107);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(3, 6, 10, 0.85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(3, 6, 10, 0.85);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(30, 61, 109, 0.85));
  --pill-background-hover: var(--tag-background-hover, rgba(30, 61, 109, 0.85));
  --pill-border-color: var(--tag-border-color, hsla(45.5, 28.7%, 54.9%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(45.5, 28.7%, 54.9%, 0.15));
  --pill-color: var(--tag-color, #e5e0d0);
  --pill-color-hover: var(--tag-color-hover, #e5e0d0);
  --pill-color-remove: var(--tag-color, #e5e0d0);
  --pill-color-remove-hover: var(--tag-color-hover, #e5e0d0);
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.12em);
  background-color: var(--pill-background, rgba(30, 61, 109, 0.85));
  color: var(--pill-color, rgb(229, 224, 208));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(3, 6, 10, 0.85);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(250, 249, 246));
  color: var(--text-normal, rgb(3, 6, 10));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(63, 52, 94));
  border-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(63, 52, 94));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(3, 6, 10);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(215, 207, 183));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
  color: var(--text-normal, rgb(3, 6, 10));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(3, 6, 10, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(3, 6, 10, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(3, 6, 10, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(3, 6, 10, 0.85);
  border-top-width: 0px;
  color: var(--text-normal, rgba(3, 6, 10, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  --code-background: var(--leather-color-alt, #4a3d6e);
  --code-normal: var(--light-ink-alt, #d7cfb7);
  background-color: var(--code-background, rgb(74, 61, 110));
  border-bottom-color: rgb(215, 207, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(215, 207, 183);
  border-left-width: 0px;
  border-right-color: rgb(215, 207, 183);
  border-right-width: 0px;
  border-top-color: rgb(215, 207, 183);
  border-top-width: 0px;
  color: var(--code-normal, rgb(215, 207, 183));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(3, 6, 10);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 6, 10);
  border-left-width: 0px;
  border-right-color: rgb(3, 6, 10);
  border-right-width: 0px;
  border-top-color: rgb(3, 6, 10);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body summary {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body sup {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(30, 61, 109, 0.85));
  border-bottom-color: rgba(173, 157, 107, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(173, 157, 107, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(173, 157, 107, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(173, 157, 107, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(229, 224, 208));
}`,
  },
};
