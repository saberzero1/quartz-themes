import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retronotes",
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
    styleSettingsId: "retronotes-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0;
  --accent-l: 13%;
  --accent-s: 100%;
  --background-modifier-border: var(--color-base-50, #6e6e6e);
  --background-modifier-border-focus: var(--color-base-40, #5a5a5a);
  --background-modifier-border-hover: var(--color-base-60, #828282);
  --background-modifier-error: var(--leather-color, #2a0000);
  --background-modifier-error-hover: var(--leather-color-alt, #440000);
  --background-modifier-error-rgb: var(--color-red-rgb, 138, 46, 46);
  --background-modifier-form-field: var(--color-base-20, #3d3d3d);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #3d3d3d);
  --background-modifier-hover: var(--leather-color-alt, #440000);
  --background-modifier-message: var(--color-base-40, #5a5a5a);
  --background-modifier-success: var(--color-base-40, #5a5a5a);
  --background-modifier-success-rgb: var(--color-green-rgb, 90, 122, 77);
  --background-primary: var(--color-base-00, #0c0c0c);
  --background-primary-alt: var(--color-base-10, #202020);
  --background-secondary: var(--leather-color, #2a0000);
  --background-secondary-alt: var(--leather-color-alt, #474747);
  --bases-cards-background: var(--background-primary, #0c0c0c);
  --bases-cards-cover-background: var(--background-primary-alt, #202020);
  --bases-embed-border-color: var(--background-modifier-border, #6e6e6e);
  --bases-group-heading-property-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --bases-table-border-color: var(--table-border-color, #6e6e6e);
  --bases-table-cell-background-active: var(--background-primary, #0c0c0c);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #202020);
  --bases-table-cell-background-selected: var(--table-selection, hsla(0, 100%, 13%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #202020);
  --bases-table-header-background: var(--background-primary, #0c0c0c);
  --bases-table-header-background-hover: var(--color-base-20, #333333);
  --bases-table-header-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --bases-table-summary-background: var(--background-primary, #0c0c0c);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #440000);
  --blockquote-background-color: rgba(var(--color-base-50-rgb), 0.2);
  --blockquote-border-color: var(--secondary-ink, #e2752c);
  --bodyFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --bold-accent-ink: #64ad4b;
  --bold-color: var(--bold-accent-ink, #64ad4b);
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
  --callout-quote: var(--callout-quote, 110, 110, 110);
  --callout-success: var(--color-green-rgb, 90, 122, 77);
  --callout-summary: var(--color-cyan-rgb, 67, 143, 147);
  --callout-tip: var(--color-cyan-rgb, 67, 143, 147);
  --callout-todo: var(--color-blue-rgb, 26, 69, 89);
  --callout-warning: var(--color-orange-rgb, 179, 104, 42);
  --canvas-background: var(--background-primary, #0c0c0c);
  --canvas-card-label-color: var(--text-faint, rgba(249, 246, 238, 0.65));
  --canvas-color-1: var(--color-red-rgb, 138, 46, 46);
  --canvas-color-2: var(--color-orange-rgb, 179, 104, 42);
  --canvas-color-3: var(--color-yellow-rgb, 194, 153, 56);
  --canvas-color-4: var(--color-green-rgb, 90, 122, 77);
  --canvas-color-5: var(--color-cyan-rgb, 67, 143, 147);
  --canvas-color-6: var(--color-purple-rgb, 95, 74, 140);
  --canvas-dot-pattern: rgba(var(--secondary-ink-rgb), 0.4);
  --caret-color: var(--color-base-70, #959595);
  --checkbox-border-color: var(--main-ink, #f9f6ee);
  --checkbox-border-color-hover: var(--main-ink-fainted, rgba(249, 246, 238, 0.65));
  --checkbox-color: var(--secondary-ink, #e2752c);
  --checkbox-color-hover: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
  --checkbox-marker-color: var(--color-base-10, #202020);
  --checklist-done-color: var(--secondary-ink-fainted, rgba(226, 117, 44, 0.65));
  --code-background: rgba(var(--color-base-50-rgb), 0.2);
  --code-border-color: var(--background-modifier-border, #6e6e6e);
  --code-bracket-background: var(--background-modifier-hover, #440000);
  --code-comment: var(--text-faint, rgba(249, 246, 238, 0.65));
  --code-function: var(--color-yellow, #c29938);
  --code-important: var(--color-orange, #b3682a);
  --code-keyword: var(--color-pink, #b16982);
  --code-normal: var(--text-normal, #f9f6ee);
  --code-operator: var(--color-red, #8a2e2e);
  --code-property: var(--color-cyan, #438f93);
  --code-punctuation: var(--text-muted, rgba(249, 246, 238, 0.85));
  --code-string: var(--color-green, #5a7a4d);
  --code-tag: var(--color-red, #8a2e2e);
  --code-value: var(--color-purple, #5f4a8c);
  --collapse-icon-color: var(--text-faint, rgba(249, 246, 238, 0.65));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(-3, 102%, 14.95%));
  --color-base-00: #0c0c0c;
  --color-base-00-rgb: 12, 12, 12;
  --color-base-05: #161616;
  --color-base-10: #202020;
  --color-base-100: #d0d0d0;
  --color-base-20: #333333;
  --color-base-25: #3d3d3d;
  --color-base-30: #474747;
  --color-base-35: #515151;
  --color-base-40: #5a5a5a;
  --color-base-50: #6e6e6e;
  --color-base-50-rgb: 110, 110, 110;
  --color-base-60: #828282;
  --color-base-70: #959595;
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
  --dark: var(--text-normal, var(--main-ink, #f9f6ee));
  --darkgray: var(--text-normal, var(--main-ink, #f9f6ee));
  --divider-color: var(--background-modifier-border, #6e6e6e);
  --divider-color-hover: var(--interactive-accent, hsl(0, 100%, 13%));
  --dropdown-background: var(--interactive-normal, #474747);
  --dropdown-background-hover: var(--interactive-hover, #515151);
  --embed-background: rgba(var(--color-base-50-rgb), 0.15);
  --embed-border-start: 2px solid var(--secondary-ink-muted);
  --fainted: 0.65;
  --file-header-background: var(--background-primary, #0c0c0c);
  --file-header-background-focused: var(--background-primary, #0c0c0c);
  --file-header-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #474747);
  --flair-color: var(--text-normal, #f9f6ee);
  --font-interface-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-mermaid: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-text-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --footnote-divider-color: var(--metadata-divider-color, #6e6e6e);
  --footnote-id-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(249, 246, 238, 0.65));
  --footnote-input-background-active: var(--metadata-input-background-active, #161616);
  --graph-node: var(--text-muted, rgba(249, 246, 238, 0.85));
  --graph-node-attachment: var(--color-yellow, #c29938);
  --graph-node-focused: var(--secondary-ink, #e2752c);
  --graph-node-tag: var(--bold-accent-ink, #64ad4b);
  --graph-node-unresolved: var(--text-faint, rgba(249, 246, 238, 0.65));
  --graph-text: var(--text-normal, #f9f6ee);
  --gray: var(--text-muted, var(--main-ink-muted, rgba(249, 246, 238, 0.85)));
  --h1-color: var(--secondary-ink, #e2752c);
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: var(--secondary-ink, #e2752c);
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: var(--secondary-ink, #e2752c);
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: var(--secondary-ink, #e2752c);
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: var(--secondary-ink, #e2752c);
  --h5-line-height: var(--line-height-normal, 1.5em);
  --h5-size: 1.4em;
  --h6-color: var(--secondary-ink, #e2752c);
  --h6-line-height: var(--line-height-normal, 1.5em);
  --h6-size: 1.2em;
  --headerFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --heading-formatting: var(--text-faint, rgba(249, 246, 238, 0.65));
  --highlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --hr-color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
  --icon-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --icon-color-active: var(--text-accent, hsl(-3, 102%, 14.95%));
  --icon-color-focused: var(--text-normal, #f9f6ee);
  --icon-color-hover: var(--text-muted, rgba(249, 246, 238, 0.85));
  --indentation-guide-color: var(--secondary-ink-fainted, rgba(226, 117, 44, 0.65));
  --indentation-guide-color-active: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
  --inline-title-color: var(--h1-color, #e2752c);
  --inline-title-line-height: var(--h1-line-height, 1.5em);
  --inline-title-size: var(--h1-size, 2.2em);
  --input-date-separator: var(--text-faint, rgba(249, 246, 238, 0.65));
  --input-placeholder-color: var(--text-faint, rgba(249, 246, 238, 0.65));
  --interactive-accent: var(--leather-color-alt, hsl(0, 100%, 13%));
  --interactive-accent-hover: var(--leather-color, hsl(-3, 102%, 14.95%));
  --interactive-accent-hsl: var(--color-accent-hsl, 0, 100%, 13%);
  --interactive-hover: var(--color-base-20, #515151);
  --interactive-normal: var(--color-base-30, #474747);
  --italic-accent-ink: #4caddd;
  --italic-color: var(--italic-accent-ink, #4caddd);
  --leather-color: #2a0000;
  --leather-color-alt: #440000;
  --leather-color-rgb: 75, 0, 0;
  --light: var(--background-primary, var(--color-base-00, #0c0c0c));
  --light-ink: var(--main-ink, #f9f6ee);
  --light-ink-alt: #e2d6d6;
  --light-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
  --light-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
  --lightgray: var(--background-secondary, var(--leather-color, #2a0000));
  --link-color: var(--secondary-ink, #e2752c);
  --link-color-hover: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
  --link-external-color: var(--secondary-ink, #e2752c);
  --link-external-color-hover: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
  --link-unresolved-color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
  --link-unresolved-color-hover: var(--secondary-ink, #e2752c);
  --link-unresolved-decoration-color: var(--secondary-ink, #e2752c);
  --list-marker-color: var(--secondary-ink-fainted, rgba(226, 117, 44, 0.65));
  --list-marker-color-collapsed: var(--secondary-ink, #e2752c);
  --list-marker-color-hover: var(--secondary-ink-fainted, rgba(226, 117, 44, 0.65));
  --main-ink: #f9f6ee;
  --main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
  --main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
  --main-ink-rgb: 249,246,238;
  --menu-background: var(--background-secondary, #2a0000);
  --menu-border-color: var(--background-modifier-border-hover, #828282);
  --metadata-background: var(--color-base-10, #202020);
  --metadata-border-color: var(--color-base-50, #6e6e6e);
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: var(--background-modifier-border, #6e6e6e);
  --metadata-gap: 4px;
  --metadata-input-background-active: var(--color-base-05, #161616);
  --metadata-input-background-hover: var(--color-base-10, #202020);
  --metadata-input-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #f9f6ee);
  --metadata-label-background-active: var(--color-base-10, #202020);
  --metadata-label-background-hover: var(--color-base-10, #202020);
  --metadata-label-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --metadata-label-text-color-hover: var(--text-muted, rgba(249, 246, 238, 0.85));
  --metadata-padding: var(--size-4-2, 16px) 0;
  --metadata-property-background-active: var(--color-base-20, #333333);
  --metadata-property-background-hover: var(--color-base-20, #333333);
  --modal-background: var(--color-base-10, #202020);
  --modal-border-width: var(--border-width, 2px);
  --muted: 0.85;
  --nav-collapse-icon-color: var(--color-base-50, #6e6e6e);
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(249, 246, 238, 0.65));
  --nav-heading-color: var(--text-normal, #f9f6ee);
  --nav-heading-color-collapsed: var(--text-faint, rgba(249, 246, 238, 0.65));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(249, 246, 238, 0.85));
  --nav-heading-color-hover: var(--text-normal, #f9f6ee);
  --nav-indentation-guide-color: var(--light-ink-fainted, rgba(249, 246, 238, 0.65));
  --nav-item-background-active: var(--background-modifier-hover, #440000);
  --nav-item-background-hover: var(--background-modifier-hover, #440000);
  --nav-item-color: var(--light-ink, #f9f6ee);
  --nav-item-color-active: var(--light-ink-alt, #e2d6d6);
  --nav-item-color-highlighted: var(--text-accent, hsl(-3, 102%, 14.95%));
  --nav-item-color-hover: var(--light-ink-alt, #e2d6d6);
  --nav-item-color-selected: var(--light-ink-alt, #e2d6d6);
  --nav-tag-color: var(--text-faint, rgba(249, 246, 238, 0.65));
  --nav-tag-color-active: var(--text-muted, rgba(249, 246, 238, 0.85));
  --nav-tag-color-hover: var(--text-muted, rgba(249, 246, 238, 0.85));
  --pdf-background: var(--background-primary, #0c0c0c);
  --pdf-page-background: var(--background-primary, #0c0c0c);
  --pdf-sidebar-background: var(--background-primary, #0c0c0c);
  --pill-background: var(--color-base-20, #333333);
  --pill-background-hover: var(--color-base-30, #474747);
  --pill-border-color: var(--color-base-50, #6e6e6e);
  --pill-border-color-hover: var(--background-modifier-border-hover, #828282);
  --pill-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --pill-color-hover: var(--text-normal, #f9f6ee);
  --pill-color-remove: var(--text-faint, rgba(249, 246, 238, 0.65));
  --pill-color-remove-hover: var(--text-accent, hsl(-3, 102%, 14.95%));
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: var(--background-primary, #0c0c0c);
  --prompt-border-color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
  --prompt-border-width: var(--border-width, 2px);
  --raised-background: var(--blur-background, color-mix(in srgb, #474747 65%, transparent) linear-gradient(#474747, color-mix(in srgb, #474747 65%, transparent)));
  --ribbon-background: var(--background-secondary, #2a0000);
  --ribbon-background-collapsed: var(--leather-color-alt, #440000);
  --search-clear-button-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --search-icon-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --search-result-background: var(--color-base-00, #0c0c0c);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(-3, 102%, 14.95%)));
  --secondary-ink: #e2752c;
  --secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
  --secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
  --secondary-ink-rgb: 226, 117, 44;
  --setting-group-heading-color: var(--text-normal, #f9f6ee);
  --setting-items-background: var(--background-primary-alt, #202020);
  --setting-items-border-color: var(--background-modifier-border, #6e6e6e);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(249, 246, 238, 0.85));
  --shiki-code-background: var(--code-background, rgba(110, 110, 110, 0.2));
  --shiki-code-comment: var(--text-faint, rgba(249, 246, 238, 0.65));
  --shiki-code-function: var(--color-green, #5a7a4d);
  --shiki-code-important: var(--color-orange, #b3682a);
  --shiki-code-keyword: var(--color-pink, #b16982);
  --shiki-code-normal: var(--text-muted, rgba(249, 246, 238, 0.85));
  --shiki-code-property: var(--color-cyan, #438f93);
  --shiki-code-punctuation: var(--text-muted, rgba(249, 246, 238, 0.85));
  --shiki-code-string: var(--color-yellow, #c29938);
  --shiki-code-value: var(--color-purple, #5f4a8c);
  --shiki-gutter-border-color: var(--background-modifier-border, #6e6e6e);
  --shiki-gutter-text-color: var(--text-faint, rgba(249, 246, 238, 0.65));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(249, 246, 238, 0.85));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(249, 246, 238, 0.85));
  --shiki-terminal-dots-color: var(--text-faint, rgba(249, 246, 238, 0.65));
  --shiki-tooltip-background: var(--background-modifier-message, #5a5a5a);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #828282);
  --slider-track-background: var(--background-modifier-border, #6e6e6e);
  --status-bar-background: var(--color-base-20, #333333);
  --status-bar-border-color: var(--divider-color, #6e6e6e);
  --status-bar-text-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --suggestion-background: var(--background-primary, #0c0c0c);
  --sync-avatar-color-1: var(--color-red, #8a2e2e);
  --sync-avatar-color-2: var(--color-orange, #b3682a);
  --sync-avatar-color-3: var(--color-yellow, #c29938);
  --sync-avatar-color-4: var(--color-green, #5a7a4d);
  --sync-avatar-color-5: var(--color-cyan, #438f93);
  --sync-avatar-color-6: var(--color-blue, #1a4559);
  --sync-avatar-color-7: var(--color-purple, #5f4a8c);
  --sync-avatar-color-8: var(--color-pink, #b16982);
  --tab-background-active: var(--color-base-10, #202020);
  --tab-container-background: var(--background-secondary, #2a0000);
  --tab-divider-color: var(--background-modifier-border-hover, none);
  --tab-font-weight: 600;
  --tab-outline-color: var(--color-base-30, #474747);
  --tab-switcher-background: var(--background-secondary, #2a0000);
  --tab-text-color-focused-active-current: var(--text-normal, #f9f6ee);
  --table-add-button-border-color: var(--background-modifier-border, #6e6e6e);
  --table-border-color: var(--color-base-50, #6e6e6e);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(0, 100%, 13%));
  --table-drag-handle-color: var(--text-faint, rgba(249, 246, 238, 0.65));
  --table-drag-handle-color-active: var(--text-on-accent, #e2d6d6);
  --table-header-border-color: var(--table-border-color, #6e6e6e);
  --table-header-color: var(--secondary-ink, #e2752c);
  --table-selection-border-color: var(--interactive-accent, hsl(0, 100%, 13%));
  --tag-background: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
  --tag-background-hover: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
  --tag-color: var(--color-base-00, #0c0c0c);
  --tag-color-hover: var(--color-base-10, #202020);
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(-5, 105%, 16.77%)));
  --text-accent: var(--color-accent-1, hsl(-3, 102%, 14.95%));
  --text-accent-hover: var(--color-accent-2, hsl(-5, 105%, 16.77%));
  --text-error: var(--color-red, #8a2e2e);
  --text-faint: var(--main-ink-fainted, rgba(249, 246, 238, 0.65));
  --text-fainted: var(--main-ink-fainted, rgba(249, 246, 238, 0.65));
  --text-highlight-bg: rgba(var(--color-yellow-rgb),0.4);
  --text-muted: var(--main-ink-muted, rgba(249, 246, 238, 0.85));
  --text-normal: var(--main-ink, #f9f6ee);
  --text-on-accent: var(--light-ink-alt, #e2d6d6);
  --text-on-accent-inverted: var(--light-ink-alt, #e2d6d6);
  --text-selection: rgba(var(--color-base-50-rgb),0.5);
  --text-success: var(--color-green, #5a7a4d);
  --text-warning: var(--color-orange, #b3682a);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --titleFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --titlebar-background: var(--background-secondary, #2a0000);
  --titlebar-background-focused: var(--leather-color, #2a0000);
  --titlebar-border-color: var(--background-modifier-border, #6e6e6e);
  --titlebar-text-color: var(--text-muted, rgba(249, 246, 238, 0.85));
  --titlebar-text-color-focused: var(--text-normal, #f9f6ee);
  --vault-profile-color: var(--text-normal, #f9f6ee);
  --vault-profile-color-hover: var(--vault-profile-color, #f9f6ee);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #2a0000);
  --icon-color: var(--light-ink-alt, #e2d6d6);
  --icon-color-active: var(--light-ink-alt, #e2d6d6);
  --icon-color-focused: var(--light-ink-alt, #e2d6d6);
  --icon-color-hover: var(--light-ink-alt, #e2d6d6);
  --nav-heading-color: var(--light-ink-alt, #e2d6d6);
  --nav-heading-color-collapsed: var(--light-ink-alt, #e2d6d6);
  --nav-heading-color-collapsed-hover: var(--light-ink-alt, #e2d6d6);
  --nav-tag-background: var(--leather-color-alt, #440000);
  --nav-tag-color: var(--light-ink-alt, #e2d6d6);
  --nav-tag-color-active: var(--light-ink-alt, #e2d6d6);
  --nav-tag-color-hover: var(--light-ink-alt, #e2d6d6);
  --tab-text-color-focused-active-current: var(--light-ink-alt, #e2d6d6);
  --text-faint: var(--light-ink-fainted, rgba(249, 246, 238, 0.65));
  --text-muted: var(--light-ink-muted, rgba(249, 246, 238, 0.85));
  --vault-profile-color: var(--light-ink-alt, #e2d6d6);
  --vault-profile-color-hover: var(--light-ink-alt, #e2d6d6);
  background-color: var(--tab-container-background, rgb(42, 0, 0));
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(12, 12, 12));
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(42, 0, 0));
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(110, 110, 110);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #2a0000);
  --icon-color: var(--light-ink-alt, #e2d6d6);
  --icon-color-active: var(--light-ink-alt, #e2d6d6);
  --icon-color-focused: var(--light-ink-alt, #e2d6d6);
  --icon-color-hover: var(--light-ink-alt, #e2d6d6);
  --nav-heading-color: var(--light-ink-alt, #e2d6d6);
  --nav-heading-color-collapsed: var(--light-ink-alt, #e2d6d6);
  --nav-heading-color-collapsed-hover: var(--light-ink-alt, #e2d6d6);
  --nav-tag-background: var(--leather-color-alt, #440000);
  --nav-tag-color: var(--light-ink-alt, #e2d6d6);
  --nav-tag-color-active: var(--light-ink-alt, #e2d6d6);
  --nav-tag-color-hover: var(--light-ink-alt, #e2d6d6);
  --tab-text-color-focused-active-current: var(--light-ink-alt, #e2d6d6);
  --text-faint: var(--light-ink-fainted, rgba(249, 246, 238, 0.65));
  --text-muted: var(--light-ink-muted, rgba(249, 246, 238, 0.85));
  --vault-profile-color: var(--light-ink-alt, #e2d6d6);
  --vault-profile-color-hover: var(--light-ink-alt, #e2d6d6);
  background-color: var(--tab-container-background, rgb(42, 0, 0));
  border-left-color: rgb(110, 110, 110);
  border-left-width: 0px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body html {
  --fainted: 0.65;
  --muted: 0.85;
  --plexmono: 'IBM Plex Mono', monospace;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(100, 173, 75));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 173, 75) none 0px;
  text-decoration-color: rgb(100, 173, 75);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(76, 173, 221));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 173, 221) none 0px;
  text-decoration-color: rgb(76, 173, 221);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(76, 173, 221));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 173, 221) none 0px;
  text-decoration-color: rgb(76, 173, 221);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(76, 173, 221));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 173, 221) none 0px;
  text-decoration-color: rgb(76, 173, 221);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(100, 173, 75));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 173, 75) none 0px;
  text-decoration-color: rgb(100, 173, 75);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(194, 153, 56, 0.4));
  color: var(--text-normal, rgb(249, 246, 238));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 246, 238) none 0px;
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 246, 238) none 0px;
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(226, 117, 44));
  border-color: rgb(226, 117, 44);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgba(249, 246, 238, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(249, 246, 238, 0.85) none 0px;
  text-decoration-color: rgba(249, 246, 238, 0.85);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(226, 117, 44));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 117, 44) none 0px;
  text-decoration-color: rgb(226, 117, 44);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(226, 117, 44));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 117, 44) none 0px;
  text-decoration-color: rgb(226, 117, 44);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgba(226, 117, 44, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(226, 117, 44, 0.85) none 0px;
  text-decoration: underline rgb(226, 117, 44);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(226, 117, 44));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(249, 246, 238);
  margin-bottom: 0px;
  margin-left: 28.8001px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(249, 246, 238);
  margin-bottom: 0px;
  margin-left: 28.8001px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgba(249, 246, 238, 0.65));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(110, 110, 110, 0.2));
  color: var(--blockquote-color, rgb(249, 246, 238));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(110, 110, 110);
  border-bottom-width: 0px;
  border-left-color: rgb(110, 110, 110);
  border-left-width: 0px;
  border-right-color: rgb(110, 110, 110);
  border-right-width: 0px;
  border-top-color: rgb(110, 110, 110);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(249, 246, 238));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(110, 110, 110);
  border-bottom-width: 0px;
  border-left-color: rgb(110, 110, 110);
  border-left-width: 0px;
  border-right-color: rgb(110, 110, 110);
  border-right-width: 0px;
  border-top-color: rgb(110, 110, 110);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(226, 117, 44));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(110, 110, 110, 0.2));
  border-bottom-color: rgb(110, 110, 110);
  border-bottom-width: 0px;
  border-left-color: rgb(110, 110, 110);
  border-left-width: 0px;
  border-right-color: rgb(110, 110, 110);
  border-right-width: 0px;
  border-top-color: rgb(110, 110, 110);
  border-top-width: 0px;
  color: var(--code-normal, rgb(249, 246, 238));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(110, 110, 110, 0.2));
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
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgba(110, 110, 110, 0.2));
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(226, 117, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 117, 44);
  border-left-width: 0px;
  border-right-color: rgb(226, 117, 44);
  border-right-width: 0px;
  border-top-color: rgb(226, 117, 44);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(32, 32, 32));
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 246, 238, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 246, 238, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 246, 238, 0.85);
  border-top-width: 0px;
  color: var(--text-muted, rgba(249, 246, 238, 0.85));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, rgba(110, 110, 110, 0.15));
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, rgba(110, 110, 110, 0.15));
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: rgb(249, 246, 238);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(226, 117, 44, 0.65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(226, 117, 44, 0.65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
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
  background-color: rgb(110, 110, 110);
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
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-summary, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-bug, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-error, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-example, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-fail, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-info, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-default, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-question, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-quote, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-success, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-tip, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-todo, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-warning, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(226, 117, 44, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(249, 246, 238);
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
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(110, 110, 110);
  border-bottom-width: 0px;
  border-left-color: rgb(110, 110, 110);
  border-left-width: 0px;
  border-right-color: rgb(110, 110, 110);
  border-right-width: 0px;
  border-top-color: rgb(110, 110, 110);
  border-top-width: 0px;
  color: var(--text-normal, rgb(249, 246, 238));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  --background-modifier-form-field-hover: var(--leather-color-alt, #440000);
  --background-primary: var(--leather-color, #2a0000);
  --search-clear-button-color: var(--light-ink-alt, #e2d6d6);
  --text-muted: var(--light-ink-muted, rgba(249, 246, 238, 0.85));
  --text-normal: var(--light-ink, #f9f6ee);
  background-color: var(--prompt-background, rgb(12, 12, 12));
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: var(--light-ink-alt, rgb(226, 214, 214));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 214, 214) none 0px;
  text-decoration-color: rgb(226, 214, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(68, 0, 0));
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  --background-modifier-form-field-hover: var(--leather-color-alt, #440000);
  --background-primary: var(--leather-color, #2a0000);
  --search-clear-button-color: var(--light-ink-alt, #e2d6d6);
  --text-muted: var(--light-ink-muted, rgba(249, 246, 238, 0.85));
  --text-normal: var(--light-ink, #f9f6ee);
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(42, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(68, 0, 0));
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(68, 0, 0));
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(226, 117, 44, 0.85));
  --pill-background-hover: var(--tag-background-hover, rgba(226, 117, 44, 0.85));
  --pill-border-color: var(--tag-border-color, hsla(0, 100%, 13%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 100%, 13%, 0.15));
  --pill-color: var(--tag-color, #0c0c0c);
  --pill-color-hover: var(--tag-color-hover, #202020);
  --pill-color-remove: var(--tag-color, #0c0c0c);
  --pill-color-remove-hover: var(--tag-color-hover, #202020);
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.12em);
  background-color: var(--pill-background, rgba(226, 117, 44, 0.85));
  border-bottom-color: rgba(66, 0, 0, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(66, 0, 0, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(66, 0, 0, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(66, 0, 0, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(12, 12, 12));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(226, 117, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 117, 44);
  border-left-width: 0px;
  border-right-color: rgb(226, 117, 44);
  border-right-width: 0px;
  border-top-color: rgb(226, 117, 44);
  border-top-width: 0px;
  color: var(--h1-color, rgb(226, 117, 44));
  font-family: var(--h1-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 35.2px);
  letter-spacing: var(--h1-letter-spacing, -0.528px);
  line-height: var(--h1-line-height, 52.8px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(226, 117, 44));
  font-size: var(--inline-title-size, 35.2px);
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: rgb(226, 117, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 117, 44);
  border-left-width: 0px;
  border-right-color: rgb(226, 117, 44);
  border-right-width: 0px;
  border-top-color: rgb(226, 117, 44);
  border-top-width: 0px;
  color: var(--h2-color, rgb(226, 117, 44));
  font-family: var(--h2-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 32px);
  letter-spacing: var(--h2-letter-spacing, -0.352px);
  line-height: var(--h2-line-height, 48px);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(226, 117, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 117, 44);
  border-left-width: 0px;
  border-right-color: rgb(226, 117, 44);
  border-right-width: 0px;
  border-top-color: rgb(226, 117, 44);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(226, 117, 44));
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
  border-bottom-color: rgb(226, 117, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 117, 44);
  border-left-width: 0px;
  border-right-color: rgb(226, 117, 44);
  border-right-width: 0px;
  border-top-color: rgb(226, 117, 44);
  border-top-width: 0px;
  color: var(--h3-color, rgb(226, 117, 44));
  font-family: var(--h3-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 28.8px);
  letter-spacing: var(--h3-letter-spacing, -0.2304px);
  line-height: var(--h3-line-height, 43.2px);
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(226, 117, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 117, 44);
  border-left-width: 0px;
  border-right-color: rgb(226, 117, 44);
  border-right-width: 0px;
  border-top-color: rgb(226, 117, 44);
  border-top-width: 0px;
  color: var(--h4-color, rgb(226, 117, 44));
  font-family: var(--h4-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 25.6px);
  letter-spacing: var(--h4-letter-spacing, -0.128px);
  line-height: var(--h4-line-height, 38.4px);
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(226, 117, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 117, 44);
  border-left-width: 0px;
  border-right-color: rgb(226, 117, 44);
  border-right-width: 0px;
  border-top-color: rgb(226, 117, 44);
  border-top-width: 0px;
  color: var(--h5-color, rgb(226, 117, 44));
  font-family: var(--h5-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 22.4px);
  letter-spacing: var(--h5-letter-spacing, -0.0448px);
  line-height: var(--h5-line-height, 33.6px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(226, 117, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 117, 44);
  border-left-width: 0px;
  border-right-color: rgb(226, 117, 44);
  border-right-width: 0px;
  border-top-color: rgb(226, 117, 44);
  border-top-width: 0px;
  color: var(--h6-color, rgb(226, 117, 44));
  font-family: var(--h6-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  line-height: var(--h6-line-height, 28.8px);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(110, 110, 110);
  border-bottom-width: 0px;
  border-left-color: rgb(110, 110, 110);
  border-left-width: 0px;
  border-right-color: rgb(110, 110, 110);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-bug: var(--color-base-50-rgb, 110, 110, 110);
  --callout-color: var(--callout-default, 110, 110, 110);
  --callout-default: var(--color-base-50-rgb, 110, 110, 110);
  --callout-error: var(--color-base-50-rgb, 110, 110, 110);
  --callout-example: var(--color-base-50-rgb, 110, 110, 110);
  --callout-fail: var(--color-base-50-rgb, 110, 110, 110);
  --callout-important: var(--color-base-50-rgb, 110, 110, 110);
  --callout-info: var(--color-base-50-rgb, 110, 110, 110);
  --callout-question: var(--color-base-50-rgb, 110, 110, 110);
  --callout-quote: var(--color-base-50-rgb, 110, 110, 110);
  --callout-success: var(--color-base-50-rgb, 110, 110, 110);
  --callout-summary: var(--color-base-50-rgb, 110, 110, 110);
  --callout-tip: var(--color-base-50-rgb, 110, 110, 110);
  --callout-todo: var(--color-base-50-rgb, 110, 110, 110);
  --callout-warning: var(--color-base-50-rgb, 110, 110, 110);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(249, 246, 238, 0.65);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(249, 246, 238));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(249, 246, 238));
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
  color: rgb(249, 246, 238);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: var(--icon-color, rgb(249, 246, 238));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(51, 51, 51));
  border-bottom-color: rgb(110, 110, 110);
  border-bottom-width: 0px;
  border-left-color: rgb(110, 110, 110);
  border-left-width: 0px;
  border-right-color: rgb(110, 110, 110);
  border-right-width: 0px;
  border-top-color: rgb(110, 110, 110);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgba(249, 246, 238, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  --background-modifier-hover: var(--color-base-30, #474747);
  color: rgba(249, 246, 238, 0.85);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(249, 246, 238));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(249, 246, 238));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(226, 214, 214);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 214, 214);
  border-left-width: 0px;
  border-right-color: rgb(226, 214, 214);
  border-right-width: 0px;
  border-top-color: rgb(226, 214, 214);
  border-top-width: 0px;
  color: var(--icon-color, rgb(226, 214, 214));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(226, 214, 214);
  stroke: rgb(226, 214, 214);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 246, 238, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 246, 238, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 246, 238, 0.85);
  border-top-width: 0px;
  color: rgba(249, 246, 238, 0.85);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(249, 246, 238, 0.65));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(249, 246, 238));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .canvas-sidebar {
  --color-accent: var(--light-ink-alt, #e2d6d6);
  background-color: var(--background-secondary, rgb(42, 0, 0));
  border-color: rgb(249, 246, 238);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(110, 110, 110);
  color: var(--table-header-color, rgb(226, 117, 44));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--metadata-background, rgb(32, 32, 32));
  border-bottom-color: rgb(110, 110, 110);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(110, 110, 110);
  border-left-width: 1px;
  border-right-color: rgb(110, 110, 110);
  border-right-width: 1px;
  border-top-color: rgb(110, 110, 110);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-muted, rgba(249, 246, 238, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 246, 238, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 246, 238, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 246, 238, 0.85);
  border-top-width: 0px;
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 246, 238, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 246, 238, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 246, 238, 0.85);
  border-top-width: 0px;
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgba(249, 246, 238, 0.85);
  font-family: var(--metadata-label-font, "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgba(249, 246, 238, 0.85);
  font-family: var(--metadata-input-font, "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--metadata-background, rgb(32, 32, 32));
  border-color: rgb(110, 110, 110);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(249, 246, 238, 0.85);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(249, 246, 238, 0.85);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(226, 117, 44, 0.85));
  --pill-background-hover: var(--tag-background-hover, rgba(226, 117, 44, 0.85));
  --pill-border-color: var(--tag-border-color, hsla(0, 100%, 13%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 100%, 13%, 0.15));
  --pill-color: var(--tag-color, #0c0c0c);
  --pill-color-hover: var(--tag-color-hover, #202020);
  --pill-color-remove: var(--tag-color, #0c0c0c);
  --pill-color-remove-hover: var(--tag-color-hover, #202020);
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.12em);
  background-color: var(--pill-background, rgba(226, 117, 44, 0.85));
  color: var(--pill-color, rgb(12, 12, 12));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(249, 246, 238, 0.85);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(12, 12, 12));
  color: var(--text-normal, rgb(249, 246, 238));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(42, 0, 0));
  border-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(42, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(249, 246, 238);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(51, 51, 51));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
  color: var(--text-normal, rgb(249, 246, 238));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(249, 246, 238, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(249, 246, 238, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(249, 246, 238, 0.85);
  border-top-width: 0px;
  color: var(--text-normal, rgba(249, 246, 238, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  --code-background: var(--leather-color-alt, #440000);
  --code-normal: var(--light-ink-alt, #e2d6d6);
  background-color: var(--code-background, rgb(68, 0, 0));
  border-bottom-color: rgb(226, 214, 214);
  border-bottom-width: 0px;
  border-left-color: rgb(226, 214, 214);
  border-left-width: 0px;
  border-right-color: rgb(226, 214, 214);
  border-right-width: 0px;
  border-top-color: rgb(226, 214, 214);
  border-top-width: 0px;
  color: var(--code-normal, rgb(226, 214, 214));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(249, 246, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body summary {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body sup {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(226, 117, 44, 0.85));
  border-bottom-color: rgba(66, 0, 0, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(66, 0, 0, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(66, 0, 0, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(66, 0, 0, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(12, 12, 12));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 43.5;
  --accent-l: 49.4%;
  --accent-s: 47.6%;
  --background-modifier-border: var(--color-base-50, #ba9942);
  --background-modifier-border-focus: var(--color-base-40, #c6a95d);
  --background-modifier-border-hover: var(--color-base-60, #9d8137);
  --background-modifier-error: var(--leather-color, #632335);
  --background-modifier-error-hover: var(--leather-color-alt, #762a3f);
  --background-modifier-error-rgb: var(--color-red-rgb, 180, 60, 60);
  --background-modifier-form-field: var(--color-base-20, #e5d7b4);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #e5d7b4);
  --background-modifier-hover: var(--leather-color-alt, #762a3f);
  --background-modifier-message: var(--color-base-40, #c6a95d);
  --background-modifier-success: var(--color-base-40, #c6a95d);
  --background-modifier-success-rgb: var(--color-green-rgb, 113, 148, 97);
  --background-primary: var(--color-base-00, #f9f6ee);
  --background-primary-alt: var(--color-base-10, #efe7d1);
  --background-secondary: var(--leather-color, #632335);
  --background-secondary-alt: var(--leather-color-alt, #f4eee0);
  --bases-cards-background: var(--background-primary, #f9f6ee);
  --bases-cards-cover-background: var(--background-primary-alt, #efe7d1);
  --bases-embed-border-color: var(--background-modifier-border, #ba9942);
  --bases-group-heading-property-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --bases-table-border-color: var(--table-border-color, #ba9942);
  --bases-table-cell-background-active: var(--background-primary, #f9f6ee);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #efe7d1);
  --bases-table-cell-background-selected: var(--table-selection, hsla(43.5, 47.6%, 49.4%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #efe7d1);
  --bases-table-header-background: var(--background-primary, #f9f6ee);
  --bases-table-header-background-hover: var(--color-base-20, #e5d7b4);
  --bases-table-header-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --bases-table-summary-background: var(--background-primary, #f9f6ee);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #762a3f);
  --blockquote-background-color: rgba(var(--color-base-50-rgb), 0.2);
  --blockquote-border-color: var(--secondary-ink, #9c2d32);
  --bodyFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --bold-accent-ink: #4f6c4f;
  --bold-color: var(--bold-accent-ink, #4f6c4f);
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
  --callout-quote: var(--callout-quote, 186,153,66);
  --callout-success: var(--color-green-rgb, 113, 148, 97);
  --callout-summary: var(--color-cyan-rgb, 83, 179, 184);
  --callout-tip: var(--color-cyan-rgb, 83, 179, 184);
  --callout-todo: var(--color-blue-rgb, 34, 89, 115);
  --callout-warning: var(--color-orange-rgb, 219, 129, 52);
  --canvas-background: var(--background-primary, #f9f6ee);
  --canvas-card-label-color: var(--text-faint, rgba(30, 61, 109, 0.65));
  --canvas-color-1: var(--color-red-rgb, 180, 60, 60);
  --canvas-color-2: var(--color-orange-rgb, 219, 129, 52);
  --canvas-color-3: var(--color-yellow-rgb, 242, 186, 68);
  --canvas-color-4: var(--color-green-rgb, 113, 148, 97);
  --canvas-color-5: var(--color-cyan-rgb, 83, 179, 184);
  --canvas-color-6: var(--color-purple-rgb, 119, 92, 176);
  --canvas-dot-pattern: rgba(var(--secondary-ink-rgb), 0.4);
  --caret-color: var(--color-base-70, #80692d);
  --checkbox-border-color: var(--main-ink, #1e3d6d);
  --checkbox-border-color-hover: var(--main-ink-fainted, rgba(30, 61, 109, 0.65));
  --checkbox-color: var(--secondary-ink, #9c2d32);
  --checkbox-color-hover: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
  --checkbox-marker-color: var(--light-ink-alt, #e5d7b4);
  --checklist-done-color: var(--secondary-ink-fainted, rgba(156, 45, 50, 0.65));
  --code-background: rgba(var(--color-base-50-rgb), 0.2);
  --code-border-color: var(--background-modifier-border, #ba9942);
  --code-bracket-background: var(--background-modifier-hover, #762a3f);
  --code-comment: var(--text-faint, rgba(30, 61, 109, 0.65));
  --code-function: var(--color-yellow, #f2ba44);
  --code-important: var(--color-orange, #db8134);
  --code-keyword: var(--color-pink, #dc84a3);
  --code-normal: var(--text-normal, #1e3d6d);
  --code-operator: var(--color-red, #b43c3c);
  --code-property: var(--color-cyan, #53b3b8);
  --code-punctuation: var(--text-muted, rgba(30, 61, 109, 0.85));
  --code-string: var(--color-green, #719461);
  --code-tag: var(--color-red, #b43c3c);
  --code-value: var(--color-purple, #775cb0);
  --collapse-icon-color: var(--text-faint, rgba(30, 61, 109, 0.65));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(43.5, 47.6%, 49.4%));
  --color-base-00: #f9f6ee;
  --color-base-00-rgb: 249,246,238;
  --color-base-05: #f4eee0;
  --color-base-10: #efe7d1;
  --color-base-100: #29220e;
  --color-base-20: #e5d7b4;
  --color-base-25: #dfd0a6;
  --color-base-30: #dac897;
  --color-base-35: #d5c089;
  --color-base-40: #c6a95d;
  --color-base-50: #ba9942;
  --color-base-50-rgb: 186,153,66;
  --color-base-60: #9d8137;
  --color-base-70: #80692d;
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
  --dark: var(--text-normal, var(--main-ink, #1e3d6d));
  --darkgray: var(--text-normal, var(--main-ink, #1e3d6d));
  --divider-color: var(--background-modifier-border, #ba9942);
  --divider-color-hover: var(--interactive-accent, #762a3f);
  --dropdown-background: var(--interactive-normal, #dac897);
  --dropdown-background-hover: var(--interactive-hover, #e5d7b4);
  --embed-background: rgba(var(--color-base-50-rgb), 0.15);
  --fainted: 0.65;
  --file-header-background: var(--background-primary, #f9f6ee);
  --file-header-background-focused: var(--background-primary, #f9f6ee);
  --file-header-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #dac897);
  --flair-color: var(--text-normal, #1e3d6d);
  --font-interface-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-mermaid: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-text-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --footnote-divider-color: var(--metadata-divider-color, #ba9942);
  --footnote-id-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(30, 61, 109, 0.65));
  --footnote-input-background-active: var(--metadata-input-background-active, #f4eee0);
  --graph-node: var(--text-muted, rgba(30, 61, 109, 0.85));
  --graph-node-attachment: var(--color-yellow, #f2ba44);
  --graph-node-focused: var(--secondary-ink, #9c2d32);
  --graph-node-tag: var(--bold-accent-ink, #4f6c4f);
  --graph-node-unresolved: var(--text-faint, rgba(30, 61, 109, 0.65));
  --graph-text: var(--text-normal, #1e3d6d);
  --gray: var(--text-muted, var(--main-ink-muted, rgba(30, 61, 109, 0.85)));
  --h1-color: var(--secondary-ink, #9c2d32);
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: var(--secondary-ink, #9c2d32);
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: var(--secondary-ink, #9c2d32);
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: var(--secondary-ink, #9c2d32);
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: var(--secondary-ink, #9c2d32);
  --h5-line-height: var(--line-height-normal, 1.5em);
  --h5-size: 1.4em;
  --h6-color: var(--secondary-ink, #9c2d32);
  --h6-line-height: var(--line-height-normal, 1.5em);
  --h6-size: 1.2em;
  --headerFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --heading-formatting: var(--text-faint, rgba(30, 61, 109, 0.65));
  --highlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --hr-color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
  --icon-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --icon-color-active: var(--text-accent, hsl(43.5, 47.6%, 49.4%));
  --icon-color-focused: var(--text-normal, #1e3d6d);
  --icon-color-hover: var(--text-muted, rgba(30, 61, 109, 0.85));
  --indentation-guide-color: var(--secondary-ink-fainted, rgba(156, 45, 50, 0.65));
  --indentation-guide-color-active: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
  --inline-title-color: var(--h1-color, #9c2d32);
  --inline-title-line-height: var(--h1-line-height, 1.5em);
  --inline-title-size: var(--h1-size, 2.2em);
  --input-date-separator: var(--text-faint, rgba(30, 61, 109, 0.65));
  --input-placeholder-color: var(--text-faint, rgba(30, 61, 109, 0.65));
  --interactive-accent: var(--leather-color-alt, #762a3f);
  --interactive-accent-hover: var(--leather-color, #632335);
  --interactive-accent-hsl: var(--color-accent-hsl, 43.5, 47.6%, 49.4%);
  --interactive-hover: var(--color-base-20, #e5d7b4);
  --interactive-normal: var(--color-base-30, #dac897);
  --italic-accent-ink: #9c2d32;
  --italic-color: var(--italic-accent-ink, #9c2d32);
  --leather-color: #632335;
  --leather-color-alt: #762a3f;
  --leather-color-rgb: 99, 35, 53;
  --light: var(--background-primary, var(--color-base-00, #f9f6ee));
  --light-ink: var(--color-base-00, #f9f6ee);
  --light-ink-alt: var(--color-base-20, #e5d7b4);
  --light-ink-fainted: rgba(var(--color-base-00-rgb),var(--fainted));
  --light-ink-muted: rgba(var(--color-base-00-rgb),var(--muted));
  --lightgray: var(--background-secondary, var(--leather-color, #632335));
  --link-color: var(--secondary-ink, #9c2d32);
  --link-color-hover: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
  --link-external-color: var(--secondary-ink, #9c2d32);
  --link-external-color-hover: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
  --link-unresolved-color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
  --link-unresolved-color-hover: var(--secondary-ink, #9c2d32);
  --link-unresolved-decoration-color: var(--secondary-ink, #9c2d32);
  --list-marker-color: var(--secondary-ink-fainted, rgba(156, 45, 50, 0.65));
  --list-marker-color-collapsed: var(--secondary-ink, #9c2d32);
  --list-marker-color-hover: var(--secondary-ink-fainted, rgba(156, 45, 50, 0.65));
  --main-ink: #1e3d6d;
  --main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
  --main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
  --main-ink-rgb: 30, 61, 109;
  --menu-background: var(--background-secondary, #632335);
  --menu-border-color: var(--background-modifier-border-hover, #9d8137);
  --metadata-background: var(--color-base-10, #efe7d1);
  --metadata-border-color: var(--color-base-50, #ba9942);
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: var(--background-modifier-border, #ba9942);
  --metadata-gap: 4px;
  --metadata-input-background-active: var(--color-base-05, #f4eee0);
  --metadata-input-background-hover: var(--color-base-10, #efe7d1);
  --metadata-input-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #1e3d6d);
  --metadata-label-background-active: var(--color-base-10, #efe7d1);
  --metadata-label-background-hover: var(--color-base-10, #efe7d1);
  --metadata-label-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --metadata-label-text-color-hover: var(--text-muted, rgba(30, 61, 109, 0.85));
  --metadata-padding: var(--size-4-2, 16px) 0;
  --metadata-property-background-active: var(--color-base-20, #e5d7b4);
  --metadata-property-background-hover: var(--color-base-20, #e5d7b4);
  --modal-background: var(--color-base-10, #efe7d1);
  --modal-border-width: var(--border-width, 2px);
  --muted: 0.85;
  --nav-collapse-icon-color: var(--color-base-50, #ba9942);
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(30, 61, 109, 0.65));
  --nav-heading-color: var(--text-normal, #1e3d6d);
  --nav-heading-color-collapsed: var(--text-faint, rgba(30, 61, 109, 0.65));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(30, 61, 109, 0.85));
  --nav-heading-color-hover: var(--text-normal, #1e3d6d);
  --nav-indentation-guide-color: rgba(var(--color-base-50-rgb), var(--fainted));
  --nav-item-background-active: var(--background-modifier-hover, #762a3f);
  --nav-item-background-hover: var(--background-modifier-hover, #762a3f);
  --nav-item-color: var(--light-ink, #f9f6ee);
  --nav-item-color-active: var(--light-ink-alt, #e5d7b4);
  --nav-item-color-highlighted: var(--text-accent, hsl(43.5, 47.6%, 49.4%));
  --nav-item-color-hover: var(--light-ink-alt, #e5d7b4);
  --nav-item-color-selected: var(--light-ink-alt, #e5d7b4);
  --nav-tag-color: var(--text-faint, rgba(30, 61, 109, 0.65));
  --nav-tag-color-active: var(--text-muted, rgba(30, 61, 109, 0.85));
  --nav-tag-color-hover: var(--text-muted, rgba(30, 61, 109, 0.85));
  --pdf-background: var(--background-primary, #f9f6ee);
  --pdf-page-background: var(--background-primary, #f9f6ee);
  --pdf-sidebar-background: var(--background-primary, #f9f6ee);
  --pill-background: var(--color-base-20, #e5d7b4);
  --pill-background-hover: var(--color-base-30, #dac897);
  --pill-border-color: var(--color-base-50, #ba9942);
  --pill-border-color-hover: var(--background-modifier-border-hover, #9d8137);
  --pill-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --pill-color-hover: var(--text-normal, #1e3d6d);
  --pill-color-remove: var(--text-faint, rgba(30, 61, 109, 0.65));
  --pill-color-remove-hover: var(--text-accent, hsl(43.5, 47.6%, 49.4%));
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: var(--background-primary, #f9f6ee);
  --prompt-border-color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
  --prompt-border-width: var(--border-width, 2px);
  --raised-background: var(--blur-background, color-mix(in srgb, #f9f6ee 65%, transparent) linear-gradient(#f9f6ee, color-mix(in srgb, #f9f6ee 65%, transparent)));
  --ribbon-background: var(--background-secondary, #632335);
  --ribbon-background-collapsed: var(--leather-color-alt, #762a3f);
  --search-clear-button-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --search-icon-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --search-result-background: var(--color-base-00, #f9f6ee);
  --secondary: var(--text-accent, var(--color-accent, hsl(43.5, 47.6%, 49.4%)));
  --secondary-ink: #9c2d32;
  --secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
  --secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
  --secondary-ink-rgb: 156, 45, 50;
  --setting-group-heading-color: var(--text-normal, #1e3d6d);
  --setting-items-background: var(--background-primary-alt, #efe7d1);
  --setting-items-border-color: var(--background-modifier-border, #ba9942);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(30, 61, 109, 0.85));
  --shiki-code-background: var(--code-background, rgba(186, 153, 66, 0.2));
  --shiki-code-comment: var(--text-faint, rgba(30, 61, 109, 0.65));
  --shiki-code-function: var(--color-green, #719461);
  --shiki-code-important: var(--color-orange, #db8134);
  --shiki-code-keyword: var(--color-pink, #dc84a3);
  --shiki-code-normal: var(--text-muted, rgba(30, 61, 109, 0.85));
  --shiki-code-property: var(--color-cyan, #53b3b8);
  --shiki-code-punctuation: var(--text-muted, rgba(30, 61, 109, 0.85));
  --shiki-code-string: var(--color-yellow, #f2ba44);
  --shiki-code-value: var(--color-purple, #775cb0);
  --shiki-gutter-border-color: var(--background-modifier-border, #ba9942);
  --shiki-gutter-text-color: var(--text-faint, rgba(30, 61, 109, 0.65));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(30, 61, 109, 0.85));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(30, 61, 109, 0.85));
  --shiki-terminal-dots-color: var(--text-faint, rgba(30, 61, 109, 0.65));
  --shiki-tooltip-background: var(--background-modifier-message, #c6a95d);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #9d8137);
  --slider-track-background: var(--background-modifier-border, #ba9942);
  --status-bar-background: var(--color-base-20, #e5d7b4);
  --status-bar-border-color: var(--divider-color, #ba9942);
  --status-bar-text-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --suggestion-background: var(--background-primary, #f9f6ee);
  --sync-avatar-color-1: var(--color-red, #b43c3c);
  --sync-avatar-color-2: var(--color-orange, #db8134);
  --sync-avatar-color-3: var(--color-yellow, #f2ba44);
  --sync-avatar-color-4: var(--color-green, #719461);
  --sync-avatar-color-5: var(--color-cyan, #53b3b8);
  --sync-avatar-color-6: var(--color-blue, #225973);
  --sync-avatar-color-7: var(--color-purple, #775cb0);
  --sync-avatar-color-8: var(--color-pink, #dc84a3);
  --tab-background-active: var(--color-base-10, #efe7d1);
  --tab-container-background: var(--background-secondary, #632335);
  --tab-divider-color: var(--background-modifier-border-hover, none);
  --tab-font-weight: 600;
  --tab-outline-color: var(--color-base-30, #dac897);
  --tab-switcher-background: var(--background-secondary, #632335);
  --tab-text-color-focused-active-current: var(--text-normal, #1e3d6d);
  --table-add-button-border-color: var(--background-modifier-border, #ba9942);
  --table-border-color: var(--color-base-50, #ba9942);
  --table-drag-handle-background-active: var(--table-selection-border-color, #762a3f);
  --table-drag-handle-color: var(--text-faint, rgba(30, 61, 109, 0.65));
  --table-drag-handle-color-active: var(--text-on-accent, #e5d7b4);
  --table-header-border-color: var(--table-border-color, #ba9942);
  --table-header-color: var(--secondary-ink, #9c2d32);
  --table-selection-border-color: var(--interactive-accent, #762a3f);
  --tag-background: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
  --tag-background-hover: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
  --tag-color: var(--color-base-10, #efe7d1);
  --tag-color-hover: var(--color-base-10, #efe7d1);
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(40.5, 48.552%, 56.81%)));
  --text-accent: var(--color-accent, hsl(43.5, 47.6%, 49.4%));
  --text-accent-hover: var(--color-accent-2, hsl(40.5, 48.552%, 56.81%));
  --text-error: var(--color-red, #b43c3c);
  --text-faint: var(--main-ink-fainted, rgba(30, 61, 109, 0.65));
  --text-fainted: var(--main-ink-fainted, rgba(30, 61, 109, 0.65));
  --text-highlight-bg: rgba(var(--color-yellow-rgb),0.4);
  --text-muted: var(--main-ink-muted, rgba(30, 61, 109, 0.85));
  --text-normal: var(--main-ink, #1e3d6d);
  --text-on-accent: var(--light-ink-alt, #e5d7b4);
  --text-on-accent-inverted: var(--light-ink-alt, #e5d7b4);
  --text-selection: rgba(var(--color-base-50-rgb),0.5);
  --text-success: var(--color-green, #719461);
  --text-warning: var(--color-orange, #db8134);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --titleFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --titlebar-background: var(--background-secondary, #632335);
  --titlebar-background-focused: var(--leather-color, #632335);
  --titlebar-border-color: var(--background-modifier-border, #ba9942);
  --titlebar-text-color: var(--text-muted, rgba(30, 61, 109, 0.85));
  --titlebar-text-color-focused: var(--text-normal, #1e3d6d);
  --vault-profile-color: var(--text-normal, #1e3d6d);
  --vault-profile-color-hover: var(--vault-profile-color, #1e3d6d);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #632335);
  --icon-color: var(--light-ink-alt, #e5d7b4);
  --icon-color-active: var(--light-ink-alt, #e5d7b4);
  --icon-color-focused: var(--light-ink-alt, #e5d7b4);
  --icon-color-hover: var(--light-ink-alt, #e5d7b4);
  --nav-heading-color: var(--light-ink-alt, #e5d7b4);
  --nav-heading-color-collapsed: var(--light-ink-alt, #e5d7b4);
  --nav-heading-color-collapsed-hover: var(--light-ink-alt, #e5d7b4);
  --nav-tag-background: var(--leather-color-alt, #762a3f);
  --nav-tag-color: var(--light-ink-alt, #e5d7b4);
  --nav-tag-color-active: var(--light-ink-alt, #e5d7b4);
  --nav-tag-color-hover: var(--light-ink-alt, #e5d7b4);
  --tab-text-color-focused-active-current: var(--light-ink-alt, #e5d7b4);
  --text-faint: var(--light-ink-fainted, rgba(249, 246, 238, 0.65));
  --text-muted: var(--light-ink-muted, rgba(249, 246, 238, 0.85));
  --vault-profile-color: var(--light-ink-alt, #e5d7b4);
  --vault-profile-color-hover: var(--light-ink-alt, #e5d7b4);
  background-color: var(--tab-container-background, rgb(99, 35, 53));
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(249, 246, 238));
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(99, 35, 53));
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(186, 153, 66);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #632335);
  --icon-color: var(--light-ink-alt, #e5d7b4);
  --icon-color-active: var(--light-ink-alt, #e5d7b4);
  --icon-color-focused: var(--light-ink-alt, #e5d7b4);
  --icon-color-hover: var(--light-ink-alt, #e5d7b4);
  --nav-heading-color: var(--light-ink-alt, #e5d7b4);
  --nav-heading-color-collapsed: var(--light-ink-alt, #e5d7b4);
  --nav-heading-color-collapsed-hover: var(--light-ink-alt, #e5d7b4);
  --nav-tag-background: var(--leather-color-alt, #762a3f);
  --nav-tag-color: var(--light-ink-alt, #e5d7b4);
  --nav-tag-color-active: var(--light-ink-alt, #e5d7b4);
  --nav-tag-color-hover: var(--light-ink-alt, #e5d7b4);
  --tab-text-color-focused-active-current: var(--light-ink-alt, #e5d7b4);
  --text-faint: var(--light-ink-fainted, rgba(249, 246, 238, 0.65));
  --text-muted: var(--light-ink-muted, rgba(249, 246, 238, 0.85));
  --vault-profile-color: var(--light-ink-alt, #e5d7b4);
  --vault-profile-color-hover: var(--light-ink-alt, #e5d7b4);
  background-color: var(--tab-container-background, rgb(99, 35, 53));
  border-left-color: rgb(186, 153, 66);
  border-left-width: 0px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body html {
  --fainted: 0.65;
  --muted: 0.85;
  --plexmono: 'IBM Plex Mono', monospace;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(79, 108, 79));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(79, 108, 79) none 0px;
  text-decoration-color: rgb(79, 108, 79);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(156, 45, 50));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(156, 45, 50));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(156, 45, 50));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(79, 108, 79));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(79, 108, 79) none 0px;
  text-decoration-color: rgb(79, 108, 79);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(242, 186, 68, 0.4));
  color: var(--text-normal, rgb(30, 61, 109));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body del {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(156, 45, 50));
  border-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgba(249, 246, 238, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(249, 246, 238, 0.85) none 0px;
  text-decoration-color: rgba(249, 246, 238, 0.85);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(156, 45, 50));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(156, 45, 50));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgba(156, 45, 50, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(156, 45, 50, 0.85) none 0px;
  text-decoration: underline rgb(156, 45, 50);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(156, 45, 50));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(30, 61, 109);
  margin-bottom: 0px;
  margin-left: 28.8001px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(30, 61, 109);
  margin-bottom: 0px;
  margin-left: 28.8001px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgba(30, 61, 109, 0.65));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(186, 153, 66, 0.2));
  color: var(--blockquote-color, rgb(30, 61, 109));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(186, 153, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 153, 66);
  border-left-width: 0px;
  border-right-color: rgb(186, 153, 66);
  border-right-width: 0px;
  border-top-color: rgb(186, 153, 66);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(30, 61, 109));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(186, 153, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 153, 66);
  border-left-width: 0px;
  border-right-color: rgb(186, 153, 66);
  border-right-width: 0px;
  border-top-color: rgb(186, 153, 66);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(156, 45, 50));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(186, 153, 66, 0.2));
  border-bottom-color: rgb(186, 153, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 153, 66);
  border-left-width: 0px;
  border-right-color: rgb(186, 153, 66);
  border-right-width: 0px;
  border-top-color: rgb(186, 153, 66);
  border-top-width: 0px;
  color: var(--code-normal, rgb(30, 61, 109));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(186, 153, 66, 0.2));
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
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgba(186, 153, 66, 0.2));
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(156, 45, 50);
  border-bottom-width: 0px;
  border-left-color: rgb(156, 45, 50);
  border-left-width: 0px;
  border-right-color: rgb(156, 45, 50);
  border-right-width: 0px;
  border-top-color: rgb(156, 45, 50);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(239, 231, 209));
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--text-muted, rgba(30, 61, 109, 0.85));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, rgba(186, 153, 66, 0.15));
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(118, 42, 63);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, rgba(186, 153, 66, 0.15));
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: rgb(30, 61, 109);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(156, 45, 50, 0.65);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(156, 45, 50, 0.65);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 215, 180);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 215, 180);
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
  background-color: rgb(186, 153, 66);
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
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-summary, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-bug, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-error, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-example, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-fail, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-info, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-default, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-question, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-quote, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-success, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-tip, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-todo, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-warning, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  background: rgba(186, 153, 66, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 0px;
  color: var(--secondary-ink-muted, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(156, 45, 50, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(30, 61, 109);
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
  background-color: rgb(229, 215, 180);
  border-bottom-color: rgb(186, 153, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 153, 66);
  border-left-width: 0px;
  border-right-color: rgb(186, 153, 66);
  border-right-width: 0px;
  border-top-color: rgb(186, 153, 66);
  border-top-width: 0px;
  color: var(--text-normal, rgb(30, 61, 109));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  --background-modifier-form-field-hover: var(--leather-color-alt, #762a3f);
  --background-primary: var(--leather-color, #632335);
  --search-clear-button-color: var(--light-ink-alt, #e5d7b4);
  --text-muted: var(--light-ink-muted, rgba(249, 246, 238, 0.85));
  --text-normal: var(--light-ink, #f9f6ee);
  background-color: var(--prompt-background, rgb(249, 246, 238));
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: var(--light-ink-alt, rgb(229, 215, 180));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 215, 180) none 0px;
  text-decoration-color: rgb(229, 215, 180);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(118, 42, 63));
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  --background-modifier-form-field-hover: var(--leather-color-alt, #762a3f);
  --background-primary: var(--leather-color, #632335);
  --search-clear-button-color: var(--light-ink-alt, #e5d7b4);
  --text-muted: var(--light-ink-muted, rgba(249, 246, 238, 0.85));
  --text-normal: var(--light-ink, #f9f6ee);
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(99, 35, 53);
  border-bottom-width: 0px;
  border-left-color: rgb(249, 246, 238);
  border-left-width: 0px;
  border-right-color: rgb(249, 246, 238);
  border-right-width: 0px;
  border-top-color: rgb(249, 246, 238);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(118, 42, 63));
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(118, 42, 63));
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(156, 45, 50, 0.85));
  --pill-background-hover: var(--tag-background-hover, rgba(156, 45, 50, 0.85));
  --pill-border-color: var(--tag-border-color, hsla(43.5, 47.6%, 49.4%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(43.5, 47.6%, 49.4%, 0.15));
  --pill-color: var(--tag-color, #efe7d1);
  --pill-color-hover: var(--tag-color-hover, #efe7d1);
  --pill-color-remove: var(--tag-color, #efe7d1);
  --pill-color-remove-hover: var(--tag-color-hover, #efe7d1);
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.12em);
  background-color: var(--pill-background, rgba(156, 45, 50, 0.85));
  border-bottom-color: rgba(186, 153, 66, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(186, 153, 66, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(186, 153, 66, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(186, 153, 66, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(239, 231, 209));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(239, 231, 209);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(156, 45, 50);
  border-bottom-width: 0px;
  border-left-color: rgb(156, 45, 50);
  border-left-width: 0px;
  border-right-color: rgb(156, 45, 50);
  border-right-width: 0px;
  border-top-color: rgb(156, 45, 50);
  border-top-width: 0px;
  color: var(--h1-color, rgb(156, 45, 50));
  font-family: var(--h1-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 35.2px);
  letter-spacing: var(--h1-letter-spacing, -0.528px);
  line-height: var(--h1-line-height, 52.8px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(156, 45, 50));
  font-size: var(--inline-title-size, 35.2px);
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(156, 45, 50);
  border-bottom-width: 0px;
  border-left-color: rgb(156, 45, 50);
  border-left-width: 0px;
  border-right-color: rgb(156, 45, 50);
  border-right-width: 0px;
  border-top-color: rgb(156, 45, 50);
  border-top-width: 0px;
  color: var(--h2-color, rgb(156, 45, 50));
  font-family: var(--h2-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 32px);
  letter-spacing: var(--h2-letter-spacing, -0.352px);
  line-height: var(--h2-line-height, 48px);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(156, 45, 50);
  border-bottom-width: 0px;
  border-left-color: rgb(156, 45, 50);
  border-left-width: 0px;
  border-right-color: rgb(156, 45, 50);
  border-right-width: 0px;
  border-top-color: rgb(156, 45, 50);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(156, 45, 50));
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
  border-bottom-color: rgb(156, 45, 50);
  border-bottom-width: 0px;
  border-left-color: rgb(156, 45, 50);
  border-left-width: 0px;
  border-right-color: rgb(156, 45, 50);
  border-right-width: 0px;
  border-top-color: rgb(156, 45, 50);
  border-top-width: 0px;
  color: var(--h3-color, rgb(156, 45, 50));
  font-family: var(--h3-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 28.8px);
  letter-spacing: var(--h3-letter-spacing, -0.2304px);
  line-height: var(--h3-line-height, 43.2px);
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(156, 45, 50);
  border-bottom-width: 0px;
  border-left-color: rgb(156, 45, 50);
  border-left-width: 0px;
  border-right-color: rgb(156, 45, 50);
  border-right-width: 0px;
  border-top-color: rgb(156, 45, 50);
  border-top-width: 0px;
  color: var(--h4-color, rgb(156, 45, 50));
  font-family: var(--h4-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 25.6px);
  letter-spacing: var(--h4-letter-spacing, -0.128px);
  line-height: var(--h4-line-height, 38.4px);
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(156, 45, 50);
  border-bottom-width: 0px;
  border-left-color: rgb(156, 45, 50);
  border-left-width: 0px;
  border-right-color: rgb(156, 45, 50);
  border-right-width: 0px;
  border-top-color: rgb(156, 45, 50);
  border-top-width: 0px;
  color: var(--h5-color, rgb(156, 45, 50));
  font-family: var(--h5-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 22.4px);
  letter-spacing: var(--h5-letter-spacing, -0.0448px);
  line-height: var(--h5-line-height, 33.6px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(156, 45, 50);
  border-bottom-width: 0px;
  border-left-color: rgb(156, 45, 50);
  border-left-width: 0px;
  border-right-color: rgb(156, 45, 50);
  border-right-width: 0px;
  border-top-color: rgb(156, 45, 50);
  border-top-width: 0px;
  color: var(--h6-color, rgb(156, 45, 50));
  font-family: var(--h6-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  line-height: var(--h6-line-height, 28.8px);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(186, 153, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 153, 66);
  border-left-width: 0px;
  border-right-color: rgb(186, 153, 66);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-bug: var(--color-base-50-rgb, 186,153,66);
  --callout-color: var(--callout-default, 186,153,66);
  --callout-default: var(--color-base-50-rgb, 186,153,66);
  --callout-error: var(--color-base-50-rgb, 186,153,66);
  --callout-example: var(--color-base-50-rgb, 186,153,66);
  --callout-fail: var(--color-base-50-rgb, 186,153,66);
  --callout-important: var(--color-base-50-rgb, 186,153,66);
  --callout-info: var(--color-base-50-rgb, 186,153,66);
  --callout-question: var(--color-base-50-rgb, 186,153,66);
  --callout-quote: var(--color-base-50-rgb, 186,153,66);
  --callout-success: var(--color-base-50-rgb, 186,153,66);
  --callout-summary: var(--color-base-50-rgb, 186,153,66);
  --callout-tip: var(--color-base-50-rgb, 186,153,66);
  --callout-todo: var(--color-base-50-rgb, 186,153,66);
  --callout-warning: var(--color-base-50-rgb, 186,153,66);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(186, 153, 66, 0.65);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(249, 246, 238));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(249, 246, 238));
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
  color: rgb(30, 61, 109);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: var(--icon-color, rgb(30, 61, 109));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(229, 215, 180));
  border-bottom-color: rgb(186, 153, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 153, 66);
  border-left-width: 0px;
  border-right-color: rgb(186, 153, 66);
  border-right-width: 0px;
  border-top-color: rgb(186, 153, 66);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgba(30, 61, 109, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  --background-modifier-hover: var(--color-base-30, #dac897);
  color: rgba(30, 61, 109, 0.85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(249, 246, 238));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(249, 246, 238));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(229, 215, 180);
  border-bottom-width: 0px;
  border-left-color: rgb(229, 215, 180);
  border-left-width: 0px;
  border-right-color: rgb(229, 215, 180);
  border-right-width: 0px;
  border-top-color: rgb(229, 215, 180);
  border-top-width: 0px;
  color: var(--icon-color, rgb(229, 215, 180));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(229, 215, 180);
  stroke: rgb(229, 215, 180);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(30, 61, 109, 0.65));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(30, 61, 109));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(249, 246, 238));
  border-color: rgb(30, 61, 109);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(186, 153, 66);
  color: var(--table-header-color, rgb(156, 45, 50));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--metadata-background, rgb(239, 231, 209));
  border-bottom-color: rgb(186, 153, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 153, 66);
  border-left-width: 1px;
  border-right-color: rgb(186, 153, 66);
  border-right-width: 1px;
  border-top-color: rgb(186, 153, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-muted, rgba(30, 61, 109, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgba(30, 61, 109, 0.85);
  font-family: var(--metadata-label-font, "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgba(30, 61, 109, 0.85);
  font-family: var(--metadata-input-font, "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--metadata-background, rgb(239, 231, 209));
  border-color: rgb(186, 153, 66);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(156, 45, 50, 0.85));
  --pill-background-hover: var(--tag-background-hover, rgba(156, 45, 50, 0.85));
  --pill-border-color: var(--tag-border-color, hsla(43.5, 47.6%, 49.4%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(43.5, 47.6%, 49.4%, 0.15));
  --pill-color: var(--tag-color, #efe7d1);
  --pill-color-hover: var(--tag-color-hover, #efe7d1);
  --pill-color-remove: var(--tag-color, #efe7d1);
  --pill-color-remove-hover: var(--tag-color-hover, #efe7d1);
  --pill-padding-x: var(--tag-padding-x, 0.75em);
  --pill-padding-y: var(--tag-padding-y, 0.12em);
  background-color: var(--pill-background, rgba(156, 45, 50, 0.85));
  color: var(--pill-color, rgb(239, 231, 209));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(249, 246, 238));
  color: var(--text-normal, rgb(30, 61, 109));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(99, 35, 53));
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(99, 35, 53));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(30, 61, 109);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(229, 215, 180));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
  color: var(--text-normal, rgb(30, 61, 109));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 0px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 0px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 0px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 0px;
  color: var(--text-normal, rgba(30, 61, 109, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  --code-background: var(--leather-color-alt, #762a3f);
  --code-normal: var(--light-ink-alt, #e5d7b4);
  background-color: var(--code-background, rgb(118, 42, 63));
  border-bottom-color: rgb(229, 215, 180);
  border-bottom-width: 0px;
  border-left-color: rgb(229, 215, 180);
  border-left-width: 0px;
  border-right-color: rgb(229, 215, 180);
  border-right-width: 0px;
  border-top-color: rgb(229, 215, 180);
  border-top-width: 0px;
  color: var(--code-normal, rgb(229, 215, 180));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(30, 61, 109);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 61, 109);
  border-left-width: 0px;
  border-right-color: rgb(30, 61, 109);
  border-right-width: 0px;
  border-top-color: rgb(30, 61, 109);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body summary {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body sup {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(156, 45, 50, 0.85));
  border-bottom-color: rgba(186, 153, 66, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(186, 153, 66, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(186, 153, 66, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(186, 153, 66, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(239, 231, 209));
}`,
  },
  classSettings: {
    "retro-lm-parchments": {
      light: `.retro-lm-parchments {
--color-base-00: #f9f6ee;
--color-base-00-rgb: 249,246,238;
--color-base-05: #f4eee0;
--color-base-10: #efe7d1;
--color-base-20: #e5d7b4;
--color-base-25: #dfd0a6;
--color-base-30: #dac897;
--color-base-35: #d5c089;
--color-base-40: #c6a95d;
--color-base-50: #ba9942;
--color-base-50-rgb: 186,153,66;
--color-base-60: #9d8137;
--color-base-70: #80692d;
--color-base-100: #29220e;
--color-red: #b43c3c;
--color-red-rgb: 180, 60, 60;
--color-orange: #db8134;
--color-orange-rgb: 219, 129, 52;
--color-yellow: #f2ba44;
--color-yellow-rgb: 242, 186, 68;
--color-green: #719461;
--color-green-rgb: 113, 148, 97;
--color-cyan: #53b3b8;
--color-cyan-rgb: 83, 179, 184;
--color-blue: #225973;
--color-blue-rgb: 34, 89, 115;
--color-purple: #775cb0;
--color-purple-rgb: 119, 92, 176;
--color-pink: #dc84a3;
--color-pink-rgb: 220, 132, 163;
/* Accent color = --color-base-50 */
--accent-h: 43.5 !important;
--accent-s: 47.6% !important;
--accent-l: 49.4% !important;
--main-ink: #1e3d6d;
--main-ink-rgb: 30, 61, 109;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #9c2d32;
--secondary-ink-rgb: 156, 45, 50;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #4f6c4f;
--italic-accent-ink: #9c2d32;
--light-ink: var(--color-base-00);
--light-ink-muted: rgba(var(--color-base-00-rgb),var(--muted));
--light-ink-fainted: rgba(var(--color-base-00-rgb),var(--fainted));
--light-ink-alt: var(--color-base-20);
--leather-color: #632335;
--leather-color-alt: #762a3f;
--leather-color-rgb: 99, 35, 53;
}`,
    },
    "retro-lm-ivory-pages": {
      light: `.retro-lm-ivory-pages {
--color-base-00: #faf9f6;
--color-base-00-rgb: 250,249,246;
--color-base-05: #ece8dd;
--color-base-10: #e5e0d0;
--color-base-20: #d7cfb7;
--color-base-25: #d0c7aa;
--color-base-30: #c9be9e;
--color-base-35: #c2b691;
--color-base-40: #bbad85;
--color-base-50: #ad9d6b;
--color-base-50-rgb: 173,157,107;
--color-base-60: #9b8a56;
--color-base-70: #827348;
--color-base-100: #36301e;
/* Accent color = --color-base-50 */
--accent-h: 45.5 !important;
--accent-s: 28.7% !important;
--accent-l: 54.9% !important;
--main-ink: #03060a;
--main-ink-rgb: 3, 6, 10;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #1e3d6d;
--secondary-ink-rgb: 30, 61, 109;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #1e3d6d;
--italic-accent-ink: #3a4f3a;
--light-ink: var(--color-base-00);
--light-ink-muted: rgba(var(--color-base-00-rgb),var(--muted));
--light-ink-fainted: rgba(var(--color-base-00-rgb),var(--fainted));
--light-ink-alt: var(--color-base-20);
--leather-color: #3f345e;
--leather-color-alt: #4a3d6e;
--leather-color-rgb: 99, 35, 53;
}`,
    },
    "retro-lm-sunny-memos": {
      light: `.retro-lm-sunny-memos {
--color-base-00: #ffeed9;
--color-base-00-rgb: 255,238,217;
--color-base-05: #ffe6c5;
--color-base-10: #ffddb1;
--color-base-20: #ffcc8a;
--color-base-25: #ffc476;
--color-base-30: #ffbb63;
--color-base-35: #ffb34f;
--color-base-40: #ffaa3c;
--color-base-50: #b45e19;
--color-base-50-rgb: 180,94,25;
--color-base-60: #ec8600;
--color-base-70: #c57000;
--color-base-100: #4f2d00;
/* Accent color = --color-base-50 */
--accent-h: 27 !important;
--accent-s: 76% !important;
--accent-l: 40% !important;
--main-ink: #923713;
--main-ink-rgb: 146, 55, 19;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #6f2a0f;
--secondary-ink-rgb: 111, 42, 15;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #184e09;
--italic-accent-ink: #1e3d6d;
--light-ink: var(--color-base-00);
--light-ink-muted: rgba(var(--color-base-00-rgb),var(--muted));
--light-ink-fainted: rgba(var(--color-base-00-rgb),var(--fainted));
--light-ink-alt: var(--color-base-20);
--leather-color: #4c291c;
--leather-color-alt: #5f3323;
--leather-color-rgb: 76, 41, 28;
}`,
    },
    "retro-lm-vintage-papers": {
      light: `.retro-lm-vintage-papers {
--color-base-00: #f8f8ff;
--color-base-00-rgb: 248,248,255;
--color-base-05: #e4e4ff;
--color-base-10: #d1d1ff;
--color-base-20: #bdbdff;
--color-base-25: #aaaaff;
--color-base-30: #9696ff;
--color-base-35: #8282ff;
--color-base-40: #8080ee;
--color-base-50: #6e6eec;
--color-base-50-rgb: 110,110,236;
--color-base-60: #4747ff;
--color-base-70: #3434ff;
--color-base-100: #0000aa;
/* Accent color = --color-base-50 */
--accent-h: 240 !important;
--accent-s: 77% !important;
--accent-l: 68% !important;
--main-ink: #030509;
--main-ink-rgb: 3, 5, 9;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #111d34;
--secondary-ink-rgb: 17, 29, 52;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #ae400f;
--italic-accent-ink: #ae0f2d;
--light-ink: var(--color-base-00);
--light-ink-muted: rgba(var(--color-base-00-rgb),var(--muted));
--light-ink-fainted: rgba(var(--color-base-00-rgb),var(--fainted));
--light-ink-alt: var(--color-base-05);
--leather-color: #172847;
--leather-color-alt: #1d335a;
--leather-color-rgb: 23, 40, 71;
}`,
    },
    "retro-lm-mint-leafs": {
      light: `.retro-lm-mint-leafs {
--color-base-00: #f1f9ee;
--color-base-00-rgb: 241,249,238;
--color-base-05: #e5f4e0;
--color-base-10: #d9efd1;
--color-base-20: #c1e5b4;
--color-base-25: #b5dfa6;
--color-base-30: #a9da97;
--color-base-35: #9dd589;
--color-base-40: #91d07a;
--color-base-50: #82b56e;
--color-base-50-rgb: 130,181,110;
--color-base-60: #62ba42;
--color-base-70: #539d37;
--color-base-100: #254619;
/* Accent color = --color-base-50 */
--accent-h: 103 !important;
--accent-s: 33% !important;
--accent-l: 57% !important;
--main-ink: #080a02;
--main-ink-rgb: 8, 10, 2;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #154608;
--secondary-ink-rgb: 21, 70, 8;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #154608;
--italic-accent-ink: #900d26;
--light-ink: var(--color-base-00);
--light-ink-muted: rgba(var(--color-base-00-rgb),var(--muted));
--light-ink-fainted: rgba(var(--color-base-00-rgb),var(--fainted));
--light-ink-alt: var(--color-base-10);
--leather-color: #162a0e;
--leather-color-alt: #203d14;
--leather-color-rgb: 22, 42, 14;
}`,
    },
    "retro-dm-midnight-journal": {
      dark: `.retro-dm-midnight-journal {
--color-base-00: #0c0c0c;
--color-base-00-rgb: 12, 12, 12;
--color-base-05: #161616;
--color-base-10: #202020;
--color-base-20: #333333;
--color-base-25: #3d3d3d;
--color-base-30: #474747;
--color-base-35: #515151;
--color-base-40: #5a5a5a;
--color-base-50: #6e6e6e;
--color-base-50-rgb: 110, 110, 110;
--color-base-60: #828282;
--color-base-70: #959595;
--color-base-100: #d0d0d0;
--color-red: #8a2e2e;
--color-red-rgb: 138, 46, 46;
--color-orange: #b3682a;
--color-orange-rgb: 179, 104, 42;
--color-yellow: #c29938;
--color-yellow-rgb: 194, 153, 56;
--color-green: #5a7a4d;
--color-green-rgb: 90, 122, 77;
--color-cyan: #438f93;
--color-cyan-rgb: 67, 143, 147;
--color-blue: #1a4559;
--color-blue-rgb: 26, 69, 89;
--color-purple: #5f4a8c;
--color-purple-rgb: 95, 74, 140;
--color-pink: #b16982;
--color-pink-rgb: 177, 105, 130;
/* Accent color = --leather-color-alt */
--accent-h: 0 !important;
--accent-s: 100% !important;
--accent-l: 13% !important;
/* Midnight Journal Variables */
--main-ink: #f9f6ee;
--main-ink-rgb: 249,246,238;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #e2752c;
--secondary-ink-rgb: 226, 117, 44;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #64ad4b;
--italic-accent-ink: #4caddd;
--light-ink: var(--main-ink);
--light-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--light-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--light-ink-alt: #e2d6d6;
--leather-color: #2a0000;
--leather-color-alt: #440000;
--leather-color-rgb: 75, 0, 0;
}`,
    },
    "retro-dm-carbon-ink": {
      dark: `.retro-dm-carbon-ink {
--color-base-00: #1a1c21;
--color-base-00-rgb: 26, 28, 33;
--color-base-05: #23252c;
--color-base-10: #2b2f37;
--color-base-20: #3d414d;
--color-base-25: #454b58;
--color-base-30: #4e5463;
--color-base-35: #575d6e;
--color-base-40: #5f6679;
--color-base-50: #70798f;
--color-base-50-rgb: 112, 121, 143;
--color-base-60: #868ea0;
--color-base-70: #9ca2b1;
--color-base-100: #dee0e5;
/* Accent color = --leather-color-alt */
--accent-h: 103 !important;
--accent-s: 12% !important;
--accent-l: 23% !important;
--main-ink: #f8f8f8;
--main-ink-rgb: 248,248,248;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #639553;
--secondary-ink-rgb: 99, 149, 83;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #e2752c;
--italic-accent-ink: #4caddd;
--light-ink: var(--main-ink);
--light-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--light-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--light-ink-alt: #d4d6d4;
--leather-color: #2c3429;
--leather-color-alt: #384234;
--leather-color-rgb: 44, 52, 41;
}`,
    },
    "retro-dm-forest-green": {
      dark: `.retro-dm-forest-green {
--color-base-00: #1b231b;
--color-base-00-rgb: 27, 35, 27
  --color-base-05: #242e24;
--color-base-10: #2c392c;
--color-base-20: #3d4f3d;
--color-base-25: #465a46;
--color-base-30: #4e654e;
--color-base-35: #577157;
--color-base-40: #5f7c5f;
--color-base-50: #719171;
--color-base-50-rgb: 113, 145, 113;
--color-base-60: #87a287;
--color-base-70: #9db39d;
--color-base-100: #e0e7e0;
/* Accent color = --leather-color-alt */
--accent-h: 120 !important;
--accent-s: 13% !important;
--accent-l: 20% !important;
--main-ink: #f8f8f8;
--main-ink-rgb: 248,248,248;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #f49d18;
--secondary-ink-rgb: 244, 157, 24;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #5d9ed8;
--italic-accent-ink: #f49d18;
--light-ink: var(--main-ink);
--light-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--light-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--light-ink-alt: #d1d3d1;
--leather-color: #141414;
--leather-color-alt: #2c392c;
--leather-color-rgb: 249, 246, 238;
}`,
    },
    "retro-dm-blueprint": {
      dark: `.retro-dm-blueprint {
--color-base-00: #0d3365;
--color-base-00-rgb: 13,51,101;
--color-base-05: #103c77;
--color-base-10: #124588;
--color-base-20: #1757ab;
--color-base-25: #195fbc;
--color-base-30: #1b68cd;
--color-base-35: #1d71df;
--color-base-40: #2d7be3;
--color-base-50: #4f91e8;
--color-base-50-rgb: 79,145,232;
--color-base-60: #72a7ec;
--color-base-70: #94bcf1;
--color-base-100: #ebf3fc;
/* Accent color = --leather-color-alt */
--accent-h: 244 !important;
--accent-s: 76% !important;
--accent-l: 38% !important;
--main-ink: #f5f6f8;
--main-ink-rgb: 245,246,248;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #e38421;
--secondary-ink-rgb: 227, 132, 33;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #e38421;
--italic-accent-ink: #efbb1a;
--light-ink: var(--main-ink);
--light-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--light-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--light-ink-alt: #fafafd;
--leather-color: #140e66;
--leather-color-alt: #2117a9;
--leather-color-rgb: 20, 14, 102;
}`,
    },
    "retro-dm-pinot-noir": {
      dark: `.retro-dm-pinot-noir {
--color-base-00: #3c191d;
--color-base-00-rgb: 60,25,29;
--color-base-05: #4a1f24;
--color-base-10: #58252a;
--color-base-20: #733038;
--color-base-25: #81363e;
--color-base-30: #8f3c45;
--color-base-35: #9d414c;
--color-base-40: #ab4753;
--color-base-50: #bc5d68;
--color-base-50-rgb: 188,93,104;
--color-base-60: #c77982;
--color-base-70: #d3959c;
--color-base-100: #f5e8e9;
/* Accent color = --leather-color-alt */
--accent-h: 354 !important;
--accent-s: 41% !important;
--accent-l: 27% !important;
--main-ink: #f7f5f5;
--main-ink-rgb: 247,245,245;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #ca9f83;
--secondary-ink-rgb: 202, 159, 131;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #d6bd75;
--italic-accent-ink: #e4d3a3;
--light-ink: var(--main-ink);
--light-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--light-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--light-ink-alt: #dfd4d5;
--leather-color: #3c191d;
--leather-color-alt: #60282e;
--leather-color-rgb: 60, 25, 29;
}`,
    },
    "retro-dm-misty-mirage": {
      general: `.retro-dm-misty-mirage .modal.mod-settings .vertical-tab-header .vertical-tab-nav-item {
color: var(--main-ink);
}

.retro-dm-misty-mirage .modal.mod-settings .vertical-tab-header .vertical-tab-nav-item:hover .vertical-tab-nav-item-icon, .retro-dm-misty-mirage .modal.mod-settings .vertical-tab-header .vertical-tab-nav-item:hover {
color: var(--color-base-20);
}

.retro-dm-misty-mirage .modal.mod-settings .vertical-tab-header .vertical-tab-nav-item.is-active .vertical-tab-nav-item-icon, .retro-dm-misty-mirage .modal.mod-settings .vertical-tab-header .vertical-tab-nav-item.is-active {
color: var(--color-base-20);
font-weight: 600;
}`,
      dark: `.retro-dm-misty-mirage {
--color-base-00: #3b3149;
--color-base-00-rgb: 59, 49, 73;
--color-base-05: #443955;
--color-base-10: #4d4161;
--color-base-20: #57496c;
--color-base-25: #605178;
--color-base-30: #6a5884;
--color-base-35: #736090;
--color-base-40: #7d699b;
--color-base-50: #9181aa;
--color-base-50-rgb: 145, 129, 170;
--color-base-60: #a598ba;
--color-base-70: #bab0ca;
--color-base-100: #e3dfe9;
/* Accent color = --leather-color-alt */
--accent-h: 240 !important;
--accent-s: 67% !important;
--accent-l: 84% !important;
--main-ink: #f9f8fe;
--main-ink-rgb: 249,248,249;
--main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
--main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
--secondary-ink: #e6e6fa;
--secondary-ink-rgb: 230, 230, 250;
--secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
--secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
--bold-accent-ink: #a3b28c;
--italic-accent-ink: #e6e6fa;
--light-ink: #000;
--light-ink-muted: rgba(0,0,0,var(--muted));
--light-ink-fainted: rgba(0,0,0,var(--fainted));
--light-ink-alt: #313147;
--leather-color: #e6e6fa;
--leather-color-alt: #bcbcf2;
--leather-color-rgb: 44, 52, 41;
}`,
    },
  },
};
