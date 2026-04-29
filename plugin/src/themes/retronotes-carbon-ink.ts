import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retronotes.carbon-ink",
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
  --accent-h: 103;
  --accent-l: 23%;
  --accent-s: 12%;
  --background-modifier-border: var(--color-base-50, #70798f);
  --background-modifier-border-focus: var(--color-base-40, #5f6679);
  --background-modifier-border-hover: var(--color-base-60, #868ea0);
  --background-modifier-error: var(--leather-color, #2c3429);
  --background-modifier-error-hover: var(--leather-color-alt, #384234);
  --background-modifier-error-rgb: var(--color-red-rgb, 138, 46, 46);
  --background-modifier-form-field: var(--color-base-20, #454b58);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #454b58);
  --background-modifier-hover: var(--leather-color-alt, #384234);
  --background-modifier-message: var(--color-base-40, #5f6679);
  --background-modifier-success: var(--color-base-40, #5f6679);
  --background-modifier-success-rgb: var(--color-green-rgb, 90, 122, 77);
  --background-primary: var(--color-base-00, #1a1c21);
  --background-primary-alt: var(--color-base-10, #2b2f37);
  --background-secondary: var(--leather-color, #2c3429);
  --background-secondary-alt: var(--leather-color-alt, #4e5463);
  --bases-cards-background: var(--background-primary, #1a1c21);
  --bases-cards-cover-background: var(--background-primary-alt, #2b2f37);
  --bases-embed-border-color: var(--background-modifier-border, #70798f);
  --bases-group-heading-property-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --bases-table-border-color: var(--table-border-color, #70798f);
  --bases-table-cell-background-active: var(--background-primary, #1a1c21);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #2b2f37);
  --bases-table-cell-background-selected: var(--table-selection, hsla(103, 12%, 23%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #2b2f37);
  --bases-table-header-background: var(--background-primary, #1a1c21);
  --bases-table-header-background-hover: var(--color-base-20, #3d414d);
  --bases-table-header-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --bases-table-summary-background: var(--background-primary, #1a1c21);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #384234);
  --blockquote-background-color: rgba(var(--color-base-50-rgb), 0.2);
  --blockquote-border-color: var(--secondary-ink, #639553);
  --bodyFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --bold-accent-ink: #e2752c;
  --bold-color: var(--bold-accent-ink, #e2752c);
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
  --callout-success: var(--color-green-rgb, 90, 122, 77);
  --callout-summary: var(--color-cyan-rgb, 67, 143, 147);
  --callout-tip: var(--color-cyan-rgb, 67, 143, 147);
  --callout-todo: var(--color-blue-rgb, 26, 69, 89);
  --callout-warning: var(--color-orange-rgb, 179, 104, 42);
  --canvas-background: var(--background-primary, #1a1c21);
  --canvas-card-label-color: var(--text-faint, rgba(248, 248, 248, 0.65));
  --canvas-color-1: var(--color-red-rgb, 138, 46, 46);
  --canvas-color-2: var(--color-orange-rgb, 179, 104, 42);
  --canvas-color-3: var(--color-yellow-rgb, 194, 153, 56);
  --canvas-color-4: var(--color-green-rgb, 90, 122, 77);
  --canvas-color-5: var(--color-cyan-rgb, 67, 143, 147);
  --canvas-color-6: var(--color-purple-rgb, 95, 74, 140);
  --canvas-dot-pattern: rgba(var(--secondary-ink-rgb), 0.4);
  --caret-color: var(--color-base-70, #9ca2b1);
  --checkbox-border-color: var(--main-ink, #f8f8f8);
  --checkbox-border-color-hover: var(--main-ink-fainted, rgba(248, 248, 248, 0.65));
  --checkbox-color: var(--secondary-ink, #639553);
  --checkbox-color-hover: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
  --checkbox-marker-color: var(--color-base-10, #2b2f37);
  --checklist-done-color: var(--secondary-ink-fainted, rgba(99, 149, 83, 0.65));
  --code-background: rgba(var(--color-base-50-rgb), 0.2);
  --code-border-color: var(--background-modifier-border, #70798f);
  --code-bracket-background: var(--background-modifier-hover, #384234);
  --code-comment: var(--text-faint, rgba(248, 248, 248, 0.65));
  --code-function: var(--color-yellow, #c29938);
  --code-important: var(--color-orange, #b3682a);
  --code-keyword: var(--color-pink, #b16982);
  --code-normal: var(--text-normal, #f8f8f8);
  --code-operator: var(--color-red, #8a2e2e);
  --code-property: var(--color-cyan, #438f93);
  --code-punctuation: var(--text-muted, rgba(248, 248, 248, 0.85));
  --code-string: var(--color-green, #5a7a4d);
  --code-tag: var(--color-red, #8a2e2e);
  --code-value: var(--color-purple, #5f4a8c);
  --collapse-icon-color: var(--text-faint, rgba(248, 248, 248, 0.65));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(100, 12.24%, 26.45%));
  --color-base-00: #1a1c21;
  --color-base-00-rgb: 26, 28, 33;
  --color-base-05: #23252c;
  --color-base-10: #2b2f37;
  --color-base-100: #dee0e5;
  --color-base-20: #3d414d;
  --color-base-25: #454b58;
  --color-base-30: #4e5463;
  --color-base-35: #575d6e;
  --color-base-40: #5f6679;
  --color-base-50: #70798f;
  --color-base-50-rgb: 112, 121, 143;
  --color-base-60: #868ea0;
  --color-base-70: #9ca2b1;
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
  --dark: var(--text-normal, var(--main-ink, #f8f8f8));
  --darkgray: var(--text-normal, var(--main-ink, #f8f8f8));
  --divider-color: var(--background-modifier-border, #70798f);
  --divider-color-hover: var(--interactive-accent, hsl(103, 12%, 23%));
  --dropdown-background: var(--interactive-normal, #4e5463);
  --dropdown-background-hover: var(--interactive-hover, #575d6e);
  --embed-background: rgba(var(--color-base-50-rgb), 0.15);
  --embed-border-start: 2px solid var(--secondary-ink-muted);
  --fainted: 0.65;
  --file-header-background: var(--background-primary, #1a1c21);
  --file-header-background-focused: var(--background-primary, #1a1c21);
  --file-header-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #4e5463);
  --flair-color: var(--text-normal, #f8f8f8);
  --font-interface-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-mermaid: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-text-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --footnote-divider-color: var(--metadata-divider-color, #70798f);
  --footnote-id-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(248, 248, 248, 0.65));
  --footnote-input-background-active: var(--metadata-input-background-active, #23252c);
  --graph-node: var(--text-muted, rgba(248, 248, 248, 0.85));
  --graph-node-attachment: var(--color-yellow, #c29938);
  --graph-node-focused: var(--secondary-ink, #639553);
  --graph-node-tag: var(--bold-accent-ink, #e2752c);
  --graph-node-unresolved: var(--text-faint, rgba(248, 248, 248, 0.65));
  --graph-text: var(--text-normal, #f8f8f8);
  --gray: var(--text-muted, var(--main-ink-muted, rgba(248, 248, 248, 0.85)));
  --h1-color: var(--secondary-ink, #639553);
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: var(--secondary-ink, #639553);
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: var(--secondary-ink, #639553);
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: var(--secondary-ink, #639553);
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: var(--secondary-ink, #639553);
  --h5-line-height: var(--line-height-normal, 1.5em);
  --h5-size: 1.4em;
  --h6-color: var(--secondary-ink, #639553);
  --h6-line-height: var(--line-height-normal, 1.5em);
  --h6-size: 1.2em;
  --headerFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --heading-formatting: var(--text-faint, rgba(248, 248, 248, 0.65));
  --highlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --hr-color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
  --icon-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --icon-color-active: var(--text-accent, hsl(100, 12.24%, 26.45%));
  --icon-color-focused: var(--text-normal, #f8f8f8);
  --icon-color-hover: var(--text-muted, rgba(248, 248, 248, 0.85));
  --indentation-guide-color: var(--secondary-ink-fainted, rgba(99, 149, 83, 0.65));
  --indentation-guide-color-active: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
  --inline-title-color: var(--h1-color, #639553);
  --inline-title-line-height: var(--h1-line-height, 1.5em);
  --inline-title-size: var(--h1-size, 2.2em);
  --input-date-separator: var(--text-faint, rgba(248, 248, 248, 0.65));
  --input-placeholder-color: var(--text-faint, rgba(248, 248, 248, 0.65));
  --interactive-accent: var(--leather-color-alt, hsl(103, 12%, 23%));
  --interactive-accent-hover: var(--leather-color, hsl(100, 12.24%, 26.45%));
  --interactive-accent-hsl: var(--color-accent-hsl, 103, 12%, 23%);
  --interactive-hover: var(--color-base-20, #575d6e);
  --interactive-normal: var(--color-base-30, #4e5463);
  --italic-accent-ink: #4caddd;
  --italic-color: var(--italic-accent-ink, #4caddd);
  --leather-color: #2c3429;
  --leather-color-alt: #384234;
  --leather-color-rgb: 44, 52, 41;
  --light: var(--background-primary, var(--color-base-00, #1a1c21));
  --light-ink: var(--main-ink, #f8f8f8);
  --light-ink-alt: #d4d6d4;
  --light-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
  --light-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
  --lightgray: var(--background-secondary, var(--leather-color, #2c3429));
  --link-color: var(--secondary-ink, #639553);
  --link-color-hover: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
  --link-external-color: var(--secondary-ink, #639553);
  --link-external-color-hover: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
  --link-unresolved-color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
  --link-unresolved-color-hover: var(--secondary-ink, #639553);
  --link-unresolved-decoration-color: var(--secondary-ink, #639553);
  --list-marker-color: var(--secondary-ink-fainted, rgba(99, 149, 83, 0.65));
  --list-marker-color-collapsed: var(--secondary-ink, #639553);
  --list-marker-color-hover: var(--secondary-ink-fainted, rgba(99, 149, 83, 0.65));
  --main-ink: #f8f8f8;
  --main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
  --main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
  --main-ink-rgb: 248,248,248;
  --menu-background: var(--background-secondary, #2c3429);
  --menu-border-color: var(--background-modifier-border-hover, #868ea0);
  --metadata-background: var(--color-base-10, #2b2f37);
  --metadata-border-color: var(--color-base-50, #70798f);
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: var(--background-modifier-border, #70798f);
  --metadata-gap: 4px;
  --metadata-input-background-active: var(--color-base-05, #23252c);
  --metadata-input-background-hover: var(--color-base-10, #2b2f37);
  --metadata-input-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #f8f8f8);
  --metadata-label-background-active: var(--color-base-10, #2b2f37);
  --metadata-label-background-hover: var(--color-base-10, #2b2f37);
  --metadata-label-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --metadata-label-text-color-hover: var(--text-muted, rgba(248, 248, 248, 0.85));
  --metadata-padding: var(--size-4-2, 16px) 0;
  --metadata-property-background-active: var(--color-base-20, #3d414d);
  --metadata-property-background-hover: var(--color-base-20, #3d414d);
  --modal-background: var(--color-base-10, #2b2f37);
  --modal-border-width: var(--border-width, 2px);
  --muted: 0.85;
  --nav-collapse-icon-color: var(--color-base-50, #70798f);
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(248, 248, 248, 0.65));
  --nav-heading-color: var(--text-normal, #f8f8f8);
  --nav-heading-color-collapsed: var(--text-faint, rgba(248, 248, 248, 0.65));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(248, 248, 248, 0.85));
  --nav-heading-color-hover: var(--text-normal, #f8f8f8);
  --nav-indentation-guide-color: var(--light-ink-fainted, rgba(248, 248, 248, 0.65));
  --nav-item-background-active: var(--background-modifier-hover, #384234);
  --nav-item-background-hover: var(--background-modifier-hover, #384234);
  --nav-item-color: var(--light-ink, #f8f8f8);
  --nav-item-color-active: var(--light-ink-alt, #d4d6d4);
  --nav-item-color-highlighted: var(--text-accent, hsl(100, 12.24%, 26.45%));
  --nav-item-color-hover: var(--light-ink-alt, #d4d6d4);
  --nav-item-color-selected: var(--light-ink-alt, #d4d6d4);
  --nav-tag-color: var(--text-faint, rgba(248, 248, 248, 0.65));
  --nav-tag-color-active: var(--text-muted, rgba(248, 248, 248, 0.85));
  --nav-tag-color-hover: var(--text-muted, rgba(248, 248, 248, 0.85));
  --pdf-background: var(--background-primary, #1a1c21);
  --pdf-page-background: var(--background-primary, #1a1c21);
  --pdf-sidebar-background: var(--background-primary, #1a1c21);
  --pill-background: var(--color-base-20, #3d414d);
  --pill-background-hover: var(--color-base-30, #4e5463);
  --pill-border-color: var(--color-base-50, #70798f);
  --pill-border-color-hover: var(--background-modifier-border-hover, #868ea0);
  --pill-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --pill-color-hover: var(--text-normal, #f8f8f8);
  --pill-color-remove: var(--text-faint, rgba(248, 248, 248, 0.65));
  --pill-color-remove-hover: var(--text-accent, hsl(100, 12.24%, 26.45%));
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: var(--background-primary, #1a1c21);
  --prompt-border-color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
  --prompt-border-width: var(--border-width, 2px);
  --raised-background: var(--blur-background, color-mix(in srgb, #4e5463 65%, transparent) linear-gradient(#4e5463, color-mix(in srgb, #4e5463 65%, transparent)));
  --ribbon-background: var(--background-secondary, #2c3429);
  --ribbon-background-collapsed: var(--leather-color-alt, #384234);
  --search-clear-button-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --search-icon-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --search-result-background: var(--color-base-00, #1a1c21);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(100, 12.24%, 26.45%)));
  --secondary-ink: #639553;
  --secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
  --secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
  --secondary-ink-rgb: 99, 149, 83;
  --setting-group-heading-color: var(--text-normal, #f8f8f8);
  --setting-items-background: var(--background-primary-alt, #2b2f37);
  --setting-items-border-color: var(--background-modifier-border, #70798f);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(248, 248, 248, 0.85));
  --shiki-code-background: var(--code-background, rgba(112, 121, 143, 0.2));
  --shiki-code-comment: var(--text-faint, rgba(248, 248, 248, 0.65));
  --shiki-code-function: var(--color-green, #5a7a4d);
  --shiki-code-important: var(--color-orange, #b3682a);
  --shiki-code-keyword: var(--color-pink, #b16982);
  --shiki-code-normal: var(--text-muted, rgba(248, 248, 248, 0.85));
  --shiki-code-property: var(--color-cyan, #438f93);
  --shiki-code-punctuation: var(--text-muted, rgba(248, 248, 248, 0.85));
  --shiki-code-string: var(--color-yellow, #c29938);
  --shiki-code-value: var(--color-purple, #5f4a8c);
  --shiki-gutter-border-color: var(--background-modifier-border, #70798f);
  --shiki-gutter-text-color: var(--text-faint, rgba(248, 248, 248, 0.65));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(248, 248, 248, 0.85));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(248, 248, 248, 0.85));
  --shiki-terminal-dots-color: var(--text-faint, rgba(248, 248, 248, 0.65));
  --shiki-tooltip-background: var(--background-modifier-message, #5f6679);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #868ea0);
  --slider-track-background: var(--background-modifier-border, #70798f);
  --status-bar-background: var(--color-base-20, #3d414d);
  --status-bar-border-color: var(--divider-color, #70798f);
  --status-bar-text-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --suggestion-background: var(--background-primary, #1a1c21);
  --sync-avatar-color-1: var(--color-red, #8a2e2e);
  --sync-avatar-color-2: var(--color-orange, #b3682a);
  --sync-avatar-color-3: var(--color-yellow, #c29938);
  --sync-avatar-color-4: var(--color-green, #5a7a4d);
  --sync-avatar-color-5: var(--color-cyan, #438f93);
  --sync-avatar-color-6: var(--color-blue, #1a4559);
  --sync-avatar-color-7: var(--color-purple, #5f4a8c);
  --sync-avatar-color-8: var(--color-pink, #b16982);
  --tab-background-active: var(--color-base-10, #2b2f37);
  --tab-container-background: var(--background-secondary, #2c3429);
  --tab-divider-color: var(--background-modifier-border-hover, none);
  --tab-font-weight: 600;
  --tab-outline-color: var(--color-base-30, #4e5463);
  --tab-switcher-background: var(--background-secondary, #2c3429);
  --tab-text-color-focused-active-current: var(--text-normal, #f8f8f8);
  --table-add-button-border-color: var(--background-modifier-border, #70798f);
  --table-border-color: var(--color-base-50, #70798f);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(103, 12%, 23%));
  --table-drag-handle-color: var(--text-faint, rgba(248, 248, 248, 0.65));
  --table-drag-handle-color-active: var(--text-on-accent, #d4d6d4);
  --table-header-border-color: var(--table-border-color, #70798f);
  --table-header-color: var(--secondary-ink, #639553);
  --table-selection-border-color: var(--interactive-accent, hsl(103, 12%, 23%));
  --tag-background: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
  --tag-background-hover: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
  --tag-color: var(--color-base-00, #1a1c21);
  --tag-color-hover: var(--color-base-10, #2b2f37);
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(98, 12.6%, 29.67%)));
  --text-accent: var(--color-accent-1, hsl(100, 12.24%, 26.45%));
  --text-accent-hover: var(--color-accent-2, hsl(98, 12.6%, 29.67%));
  --text-error: var(--color-red, #8a2e2e);
  --text-faint: var(--main-ink-fainted, rgba(248, 248, 248, 0.65));
  --text-fainted: var(--main-ink-fainted, rgba(248, 248, 248, 0.65));
  --text-highlight-bg: rgba(var(--color-yellow-rgb),0.4);
  --text-muted: var(--main-ink-muted, rgba(248, 248, 248, 0.85));
  --text-normal: var(--main-ink, #f8f8f8);
  --text-on-accent: var(--light-ink-alt, #d4d6d4);
  --text-on-accent-inverted: var(--light-ink-alt, #d4d6d4);
  --text-selection: rgba(var(--color-base-50-rgb),0.5);
  --text-success: var(--color-green, #5a7a4d);
  --text-warning: var(--color-orange, #b3682a);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --titleFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --titlebar-background: var(--background-secondary, #2c3429);
  --titlebar-background-focused: var(--leather-color, #2c3429);
  --titlebar-border-color: var(--background-modifier-border, #70798f);
  --titlebar-text-color: var(--text-muted, rgba(248, 248, 248, 0.85));
  --titlebar-text-color-focused: var(--text-normal, #f8f8f8);
  --vault-profile-color: var(--text-normal, #f8f8f8);
  --vault-profile-color-hover: var(--vault-profile-color, #f8f8f8);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(44, 52, 41));
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(26, 28, 33));
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(44, 52, 41));
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(112, 121, 143);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(44, 52, 41));
  border-left-color: rgb(112, 121, 143);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body html {
  --fainted: 0.65;
  --muted: 0.85;
  --plexmono: 'IBM Plex Mono', monospace;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(226, 117, 44));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 117, 44) none 0px;
  text-decoration-color: rgb(226, 117, 44);
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

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(226, 117, 44));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 117, 44) none 0px;
  text-decoration-color: rgb(226, 117, 44);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(194, 153, 56, 0.4));
  color: var(--text-normal, rgb(248, 248, 248));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 248) none 0px;
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body del {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 248) none 0px;
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(248, 248, 248));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(99, 149, 83));
  border-color: rgb(99, 149, 83);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgba(248, 248, 248, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 248, 0.85) none 0px;
  text-decoration-color: rgba(248, 248, 248, 0.85);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(99, 149, 83));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(99, 149, 83) none 0px;
  text-decoration-color: rgb(99, 149, 83);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(99, 149, 83));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(99, 149, 83) none 0px;
  text-decoration-color: rgb(99, 149, 83);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgba(99, 149, 83, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(99, 149, 83, 0.85) none 0px;
  text-decoration: underline rgb(99, 149, 83);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(99, 149, 83));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body dt {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgba(248, 248, 248, 0.65));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(112, 121, 143, 0.2));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body table {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(112, 121, 143);
  border-left-color: rgb(112, 121, 143);
  border-right-color: rgb(112, 121, 143);
  border-top-color: rgb(112, 121, 143);
  color: var(--table-text-color, rgb(248, 248, 248));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(112, 121, 143);
  border-left-color: rgb(112, 121, 143);
  border-right-color: rgb(112, 121, 143);
  border-top-color: rgb(112, 121, 143);
  color: var(--table-header-color, rgb(99, 149, 83));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(112, 121, 143, 0.2));
  border-bottom-color: rgb(112, 121, 143);
  border-left-color: rgb(112, 121, 143);
  border-right-color: rgb(112, 121, 143);
  border-top-color: rgb(112, 121, 143);
  color: var(--code-normal, rgb(248, 248, 248));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(112, 121, 143, 0.2));
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
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(99, 149, 83);
  border-left-color: rgb(99, 149, 83);
  border-right-color: rgb(99, 149, 83);
  border-top-color: rgb(99, 149, 83);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(43, 47, 55));
  border-bottom-color: rgba(248, 248, 248, 0.85);
  border-left-color: rgba(248, 248, 248, 0.85);
  border-right-color: rgba(248, 248, 248, 0.85);
  border-top-color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, rgba(112, 121, 143, 0.15));
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, rgba(112, 121, 143, 0.15));
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(99, 149, 83, 0.65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(99, 149, 83, 0.65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(43, 47, 55);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(43, 47, 55);
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
  background-color: rgb(112, 121, 143);
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
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 112, 121, 143);
  background: rgba(112, 121, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 112, 121, 143;
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-left-color: rgba(99, 149, 83, 0.85);
  border-right-color: rgba(99, 149, 83, 0.85);
  border-top-color: rgba(99, 149, 83, 0.85);
  color: var(--secondary-ink-muted, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(99, 149, 83, 0.85));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(248, 248, 248);
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
  background-color: rgb(69, 75, 88);
  border-bottom-color: rgb(112, 121, 143);
  border-left-color: rgb(112, 121, 143);
  border-right-color: rgb(112, 121, 143);
  border-top-color: rgb(112, 121, 143);
  color: var(--text-normal, rgb(248, 248, 248));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(26, 28, 33));
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(99, 149, 83, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(99, 149, 83, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(99, 149, 83, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: var(--light-ink-alt, rgb(212, 214, 212));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 214, 212) none 0px;
  text-decoration-color: rgb(212, 214, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(56, 66, 52));
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(99, 149, 83, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(99, 149, 83, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(99, 149, 83, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(99, 149, 83, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(44, 52, 41);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(56, 66, 52));
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(56, 66, 52));
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(99, 149, 83, 0.85));
  border-bottom-color: rgba(56, 66, 52, 0.15);
  border-left-color: rgba(56, 66, 52, 0.15);
  border-right-color: rgba(56, 66, 52, 0.15);
  border-top-color: rgba(56, 66, 52, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(26, 28, 33);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(99, 149, 83));
  font-family: var(--h1-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(99, 149, 83));
  font-size: var(--inline-title-size, 35.2px);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(99, 149, 83));
  font-family: var(--h2-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(99, 149, 83));
  font-family: var(--inline-title-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(99, 149, 83));
  font-family: var(--h3-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(99, 149, 83));
  font-family: var(--h4-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(99, 149, 83));
  font-family: var(--h5-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(99, 149, 83));
  font-family: var(--h6-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(112, 121, 143);
  border-left-color: rgb(112, 121, 143);
  border-right-color: rgb(112, 121, 143);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 112, 121, 143);
  border-bottom-color: rgba(112, 121, 143, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(112, 121, 143, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(112, 121, 143, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(112, 121, 143, 0.25);
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(248, 248, 248, 0.65);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(248, 248, 248));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(248, 248, 248));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(248, 248, 248);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
  color: var(--icon-color, rgb(248, 248, 248));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(61, 65, 77));
  border-bottom-color: rgb(112, 121, 143);
  border-left-color: rgb(112, 121, 143);
  border-right-color: rgb(112, 121, 143);
  border-top-color: rgb(112, 121, 143);
  color: var(--status-bar-text-color, rgba(248, 248, 248, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(248, 248, 248, 0.85);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(248, 248, 248));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(248, 248, 248));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(212, 214, 212);
  border-left-color: rgb(212, 214, 212);
  border-right-color: rgb(212, 214, 212);
  border-top-color: rgb(212, 214, 212);
  color: var(--icon-color, rgb(212, 214, 212));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(212, 214, 212);
  stroke: rgb(212, 214, 212);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(248, 248, 248, 0.85);
  border-left-color: rgba(248, 248, 248, 0.85);
  border-right-color: rgba(248, 248, 248, 0.85);
  border-top-color: rgba(248, 248, 248, 0.85);
  color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(248, 248, 248, 0.65));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(248, 248, 248));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(44, 52, 41));
  border-color: rgb(248, 248, 248);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(112, 121, 143);
  color: var(--table-header-color, rgb(99, 149, 83));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--metadata-background, rgb(43, 47, 55));
  border-bottom-color: rgb(112, 121, 143);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(112, 121, 143);
  border-left-width: 1px;
  border-right-color: rgb(112, 121, 143);
  border-right-width: 1px;
  border-top-color: rgb(112, 121, 143);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-muted, rgba(248, 248, 248, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(248, 248, 248, 0.85);
  border-left-color: rgba(248, 248, 248, 0.85);
  border-right-color: rgba(248, 248, 248, 0.85);
  border-top-color: rgba(248, 248, 248, 0.85);
  color: rgba(248, 248, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--metadata-background, rgb(43, 47, 55));
  border-color: rgb(112, 121, 143);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(99, 149, 83, 0.85));
  color: var(--pill-color, rgb(26, 28, 33));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(26, 28, 33));
  color: var(--text-normal, rgb(248, 248, 248));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(44, 52, 41));
  border-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(44, 52, 41));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(248, 248, 248);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(61, 65, 77));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(248, 248, 248));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(248, 248, 248, 0.85);
  border-left-color: rgba(248, 248, 248, 0.85);
  border-right-color: rgba(248, 248, 248, 0.85);
  border-top-color: rgba(248, 248, 248, 0.85);
  color: var(--text-normal, rgba(248, 248, 248, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(56, 66, 52));
  border-bottom-color: rgb(212, 214, 212);
  border-left-color: rgb(212, 214, 212);
  border-right-color: rgb(212, 214, 212);
  border-top-color: rgb(212, 214, 212);
  color: var(--code-normal, rgb(212, 214, 212));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body sub {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body summary {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body sup {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(99, 149, 83, 0.85));
  border-bottom-color: rgba(56, 66, 52, 0.15);
  border-left-color: rgba(56, 66, 52, 0.15);
  border-right-color: rgba(56, 66, 52, 0.15);
  border-top-color: rgba(56, 66, 52, 0.15);
  color: var(--tag-color, rgb(26, 28, 33));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 103;
  --accent-l: 57%;
  --accent-s: 33%;
  --background-modifier-border: var(--color-base-50, #82b56e);
  --background-modifier-border-focus: var(--color-base-40, #91d07a);
  --background-modifier-border-hover: var(--color-base-60, #62ba42);
  --background-modifier-error: var(--leather-color, #162a0e);
  --background-modifier-error-hover: var(--leather-color-alt, #203d14);
  --background-modifier-error-rgb: var(--color-red-rgb, 180, 60, 60);
  --background-modifier-form-field: var(--color-base-20, #c1e5b4);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #c1e5b4);
  --background-modifier-hover: var(--leather-color-alt, #203d14);
  --background-modifier-message: var(--color-base-40, #91d07a);
  --background-modifier-success: var(--color-base-40, #91d07a);
  --background-modifier-success-rgb: var(--color-green-rgb, 113, 148, 97);
  --background-primary: var(--color-base-00, #f1f9ee);
  --background-primary-alt: var(--color-base-10, #d9efd1);
  --background-secondary: var(--leather-color, #162a0e);
  --background-secondary-alt: var(--leather-color-alt, #e5f4e0);
  --bases-cards-background: var(--background-primary, #f1f9ee);
  --bases-cards-cover-background: var(--background-primary-alt, #d9efd1);
  --bases-embed-border-color: var(--background-modifier-border, #82b56e);
  --bases-group-heading-property-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --bases-table-border-color: var(--table-border-color, #82b56e);
  --bases-table-cell-background-active: var(--background-primary, #f1f9ee);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #d9efd1);
  --bases-table-cell-background-selected: var(--table-selection, hsla(103, 33%, 57%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #d9efd1);
  --bases-table-header-background: var(--background-primary, #f1f9ee);
  --bases-table-header-background-hover: var(--color-base-20, #c1e5b4);
  --bases-table-header-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --bases-table-summary-background: var(--background-primary, #f1f9ee);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #203d14);
  --blockquote-background-color: rgba(var(--color-base-50-rgb), 0.2);
  --blockquote-border-color: var(--secondary-ink, #154608);
  --bodyFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --bold-accent-ink: #154608;
  --bold-color: var(--bold-accent-ink, #154608);
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
  --callout-success: var(--color-green-rgb, 113, 148, 97);
  --callout-summary: var(--color-cyan-rgb, 83, 179, 184);
  --callout-tip: var(--color-cyan-rgb, 83, 179, 184);
  --callout-todo: var(--color-blue-rgb, 34, 89, 115);
  --callout-warning: var(--color-orange-rgb, 219, 129, 52);
  --canvas-background: var(--background-primary, #f1f9ee);
  --canvas-card-label-color: var(--text-faint, rgba(8, 10, 2, 0.65));
  --canvas-color-1: var(--color-red-rgb, 180, 60, 60);
  --canvas-color-2: var(--color-orange-rgb, 219, 129, 52);
  --canvas-color-3: var(--color-yellow-rgb, 242, 186, 68);
  --canvas-color-4: var(--color-green-rgb, 113, 148, 97);
  --canvas-color-5: var(--color-cyan-rgb, 83, 179, 184);
  --canvas-color-6: var(--color-purple-rgb, 119, 92, 176);
  --canvas-dot-pattern: rgba(var(--secondary-ink-rgb), 0.4);
  --caret-color: var(--color-base-70, #539d37);
  --checkbox-border-color: var(--main-ink, #080a02);
  --checkbox-border-color-hover: var(--main-ink-fainted, rgba(8, 10, 2, 0.65));
  --checkbox-color: var(--secondary-ink, #154608);
  --checkbox-color-hover: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
  --checkbox-marker-color: var(--light-ink-alt, #d9efd1);
  --checklist-done-color: var(--secondary-ink-fainted, rgba(21, 70, 8, 0.65));
  --code-background: rgba(var(--color-base-50-rgb), 0.2);
  --code-border-color: var(--background-modifier-border, #82b56e);
  --code-bracket-background: var(--background-modifier-hover, #203d14);
  --code-comment: var(--text-faint, rgba(8, 10, 2, 0.65));
  --code-function: var(--color-yellow, #f2ba44);
  --code-important: var(--color-orange, #db8134);
  --code-keyword: var(--color-pink, #dc84a3);
  --code-normal: var(--text-normal, #080a02);
  --code-operator: var(--color-red, #b43c3c);
  --code-property: var(--color-cyan, #53b3b8);
  --code-punctuation: var(--text-muted, rgba(8, 10, 2, 0.85));
  --code-string: var(--color-green, #719461);
  --code-tag: var(--color-red, #b43c3c);
  --code-value: var(--color-purple, #775cb0);
  --collapse-icon-color: var(--text-faint, rgba(8, 10, 2, 0.65));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(103, 33%, 57%));
  --color-base-00: #f1f9ee;
  --color-base-00-rgb: 241,249,238;
  --color-base-05: #e5f4e0;
  --color-base-10: #d9efd1;
  --color-base-100: #254619;
  --color-base-20: #c1e5b4;
  --color-base-25: #b5dfa6;
  --color-base-30: #a9da97;
  --color-base-35: #9dd589;
  --color-base-40: #91d07a;
  --color-base-50: #82b56e;
  --color-base-50-rgb: 130,181,110;
  --color-base-60: #62ba42;
  --color-base-70: #539d37;
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
  --dark: var(--text-normal, var(--main-ink, #080a02));
  --darkgray: var(--text-normal, var(--main-ink, #080a02));
  --divider-color: var(--background-modifier-border, #82b56e);
  --divider-color-hover: var(--interactive-accent, #203d14);
  --dropdown-background: var(--interactive-normal, #a9da97);
  --dropdown-background-hover: var(--interactive-hover, #c1e5b4);
  --embed-background: rgba(var(--color-base-50-rgb), 0.15);
  --fainted: 0.65;
  --file-header-background: var(--background-primary, #f1f9ee);
  --file-header-background-focused: var(--background-primary, #f1f9ee);
  --file-header-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #a9da97);
  --flair-color: var(--text-normal, #080a02);
  --font-interface-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-mermaid: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --font-text-theme: var(--plexmono, 'IBM Plex Mono', monospace);
  --footnote-divider-color: var(--metadata-divider-color, #82b56e);
  --footnote-id-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(8, 10, 2, 0.65));
  --footnote-input-background-active: var(--metadata-input-background-active, #e5f4e0);
  --graph-node: var(--text-muted, rgba(8, 10, 2, 0.85));
  --graph-node-attachment: var(--color-yellow, #f2ba44);
  --graph-node-focused: var(--secondary-ink, #154608);
  --graph-node-tag: var(--bold-accent-ink, #154608);
  --graph-node-unresolved: var(--text-faint, rgba(8, 10, 2, 0.65));
  --graph-text: var(--text-normal, #080a02);
  --gray: var(--text-muted, var(--main-ink-muted, rgba(8, 10, 2, 0.85)));
  --h1-color: var(--secondary-ink, #154608);
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: var(--secondary-ink, #154608);
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: var(--secondary-ink, #154608);
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: var(--secondary-ink, #154608);
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: var(--secondary-ink, #154608);
  --h5-line-height: var(--line-height-normal, 1.5em);
  --h5-size: 1.4em;
  --h6-color: var(--secondary-ink, #154608);
  --h6-line-height: var(--line-height-normal, 1.5em);
  --h6-size: 1.2em;
  --headerFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --heading-formatting: var(--text-faint, rgba(8, 10, 2, 0.65));
  --highlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --hr-color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
  --icon-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --icon-color-active: var(--text-accent, hsl(103, 33%, 57%));
  --icon-color-focused: var(--text-normal, #080a02);
  --icon-color-hover: var(--text-muted, rgba(8, 10, 2, 0.85));
  --indentation-guide-color: var(--secondary-ink-fainted, rgba(21, 70, 8, 0.65));
  --indentation-guide-color-active: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
  --inline-title-color: var(--h1-color, #154608);
  --inline-title-line-height: var(--h1-line-height, 1.5em);
  --inline-title-size: var(--h1-size, 2.2em);
  --input-date-separator: var(--text-faint, rgba(8, 10, 2, 0.65));
  --input-placeholder-color: var(--text-faint, rgba(8, 10, 2, 0.65));
  --interactive-accent: var(--leather-color-alt, #203d14);
  --interactive-accent-hover: var(--leather-color, #162a0e);
  --interactive-accent-hsl: var(--color-accent-hsl, 103, 33%, 57%);
  --interactive-hover: var(--color-base-20, #c1e5b4);
  --interactive-normal: var(--color-base-30, #a9da97);
  --italic-accent-ink: #900d26;
  --italic-color: var(--italic-accent-ink, #900d26);
  --leather-color: #162a0e;
  --leather-color-alt: #203d14;
  --leather-color-rgb: 22, 42, 14;
  --light: var(--background-primary, var(--color-base-00, #f1f9ee));
  --light-ink: var(--color-base-00, #f1f9ee);
  --light-ink-alt: var(--color-base-10, #d9efd1);
  --light-ink-fainted: rgba(var(--color-base-00-rgb),var(--fainted));
  --light-ink-muted: rgba(var(--color-base-00-rgb),var(--muted));
  --lightgray: var(--background-secondary, var(--leather-color, #162a0e));
  --link-color: var(--secondary-ink, #154608);
  --link-color-hover: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
  --link-external-color: var(--secondary-ink, #154608);
  --link-external-color-hover: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
  --link-unresolved-color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
  --link-unresolved-color-hover: var(--secondary-ink, #154608);
  --link-unresolved-decoration-color: var(--secondary-ink, #154608);
  --list-marker-color: var(--secondary-ink-fainted, rgba(21, 70, 8, 0.65));
  --list-marker-color-collapsed: var(--secondary-ink, #154608);
  --list-marker-color-hover: var(--secondary-ink-fainted, rgba(21, 70, 8, 0.65));
  --main-ink: #080a02;
  --main-ink-fainted: rgba(var(--main-ink-rgb),var(--fainted));
  --main-ink-muted: rgba(var(--main-ink-rgb),var(--muted));
  --main-ink-rgb: 8, 10, 2;
  --menu-background: var(--background-secondary, #162a0e);
  --menu-border-color: var(--background-modifier-border-hover, #62ba42);
  --metadata-background: var(--color-base-10, #d9efd1);
  --metadata-border-color: var(--color-base-50, #82b56e);
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: var(--background-modifier-border, #82b56e);
  --metadata-gap: 4px;
  --metadata-input-background-active: var(--color-base-05, #e5f4e0);
  --metadata-input-background-hover: var(--color-base-10, #d9efd1);
  --metadata-input-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #080a02);
  --metadata-label-background-active: var(--color-base-10, #d9efd1);
  --metadata-label-background-hover: var(--color-base-10, #d9efd1);
  --metadata-label-font: var(--font-interface, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --metadata-label-text-color-hover: var(--text-muted, rgba(8, 10, 2, 0.85));
  --metadata-padding: var(--size-4-2, 16px) 0;
  --metadata-property-background-active: var(--color-base-20, #c1e5b4);
  --metadata-property-background-hover: var(--color-base-20, #c1e5b4);
  --modal-background: var(--color-base-10, #d9efd1);
  --modal-border-width: var(--border-width, 2px);
  --muted: 0.85;
  --nav-collapse-icon-color: var(--color-base-50, #82b56e);
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(8, 10, 2, 0.65));
  --nav-heading-color: var(--text-normal, #080a02);
  --nav-heading-color-collapsed: var(--text-faint, rgba(8, 10, 2, 0.65));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(8, 10, 2, 0.85));
  --nav-heading-color-hover: var(--text-normal, #080a02);
  --nav-indentation-guide-color: rgba(var(--color-base-50-rgb), var(--fainted));
  --nav-item-background-active: var(--background-modifier-hover, #203d14);
  --nav-item-background-hover: var(--background-modifier-hover, #203d14);
  --nav-item-color: var(--light-ink, #f1f9ee);
  --nav-item-color-active: var(--light-ink-alt, #d9efd1);
  --nav-item-color-highlighted: var(--text-accent, hsl(103, 33%, 57%));
  --nav-item-color-hover: var(--light-ink-alt, #d9efd1);
  --nav-item-color-selected: var(--light-ink-alt, #d9efd1);
  --nav-tag-color: var(--text-faint, rgba(8, 10, 2, 0.65));
  --nav-tag-color-active: var(--text-muted, rgba(8, 10, 2, 0.85));
  --nav-tag-color-hover: var(--text-muted, rgba(8, 10, 2, 0.85));
  --pdf-background: var(--background-primary, #f1f9ee);
  --pdf-page-background: var(--background-primary, #f1f9ee);
  --pdf-sidebar-background: var(--background-primary, #f1f9ee);
  --pill-background: var(--color-base-20, #c1e5b4);
  --pill-background-hover: var(--color-base-30, #a9da97);
  --pill-border-color: var(--color-base-50, #82b56e);
  --pill-border-color-hover: var(--background-modifier-border-hover, #62ba42);
  --pill-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --pill-color-hover: var(--text-normal, #080a02);
  --pill-color-remove: var(--text-faint, rgba(8, 10, 2, 0.65));
  --pill-color-remove-hover: var(--text-accent, hsl(103, 33%, 57%));
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: var(--background-primary, #f1f9ee);
  --prompt-border-color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
  --prompt-border-width: var(--border-width, 2px);
  --raised-background: var(--blur-background, color-mix(in srgb, #f1f9ee 65%, transparent) linear-gradient(#f1f9ee, color-mix(in srgb, #f1f9ee 65%, transparent)));
  --ribbon-background: var(--background-secondary, #162a0e);
  --ribbon-background-collapsed: var(--leather-color-alt, #203d14);
  --search-clear-button-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --search-icon-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --search-result-background: var(--color-base-00, #f1f9ee);
  --secondary: var(--text-accent, var(--color-accent, hsl(103, 33%, 57%)));
  --secondary-ink: #154608;
  --secondary-ink-fainted: rgba(var(--secondary-ink-rgb),var(--fainted));
  --secondary-ink-muted: rgba(var(--secondary-ink-rgb), var(--muted));
  --secondary-ink-rgb: 21, 70, 8;
  --setting-group-heading-color: var(--text-normal, #080a02);
  --setting-items-background: var(--background-primary-alt, #d9efd1);
  --setting-items-border-color: var(--background-modifier-border, #82b56e);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(8, 10, 2, 0.85));
  --shiki-code-background: var(--code-background, rgba(130, 181, 110, 0.2));
  --shiki-code-comment: var(--text-faint, rgba(8, 10, 2, 0.65));
  --shiki-code-function: var(--color-green, #719461);
  --shiki-code-important: var(--color-orange, #db8134);
  --shiki-code-keyword: var(--color-pink, #dc84a3);
  --shiki-code-normal: var(--text-muted, rgba(8, 10, 2, 0.85));
  --shiki-code-property: var(--color-cyan, #53b3b8);
  --shiki-code-punctuation: var(--text-muted, rgba(8, 10, 2, 0.85));
  --shiki-code-string: var(--color-yellow, #f2ba44);
  --shiki-code-value: var(--color-purple, #775cb0);
  --shiki-gutter-border-color: var(--background-modifier-border, #82b56e);
  --shiki-gutter-text-color: var(--text-faint, rgba(8, 10, 2, 0.65));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(8, 10, 2, 0.85));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(8, 10, 2, 0.85));
  --shiki-terminal-dots-color: var(--text-faint, rgba(8, 10, 2, 0.65));
  --shiki-tooltip-background: var(--background-modifier-message, #91d07a);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #62ba42);
  --slider-track-background: var(--background-modifier-border, #82b56e);
  --status-bar-background: var(--color-base-20, #c1e5b4);
  --status-bar-border-color: var(--divider-color, #82b56e);
  --status-bar-text-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --suggestion-background: var(--background-primary, #f1f9ee);
  --sync-avatar-color-1: var(--color-red, #b43c3c);
  --sync-avatar-color-2: var(--color-orange, #db8134);
  --sync-avatar-color-3: var(--color-yellow, #f2ba44);
  --sync-avatar-color-4: var(--color-green, #719461);
  --sync-avatar-color-5: var(--color-cyan, #53b3b8);
  --sync-avatar-color-6: var(--color-blue, #225973);
  --sync-avatar-color-7: var(--color-purple, #775cb0);
  --sync-avatar-color-8: var(--color-pink, #dc84a3);
  --tab-background-active: var(--color-base-10, #d9efd1);
  --tab-container-background: var(--background-secondary, #162a0e);
  --tab-divider-color: var(--background-modifier-border-hover, none);
  --tab-font-weight: 600;
  --tab-outline-color: var(--color-base-30, #a9da97);
  --tab-switcher-background: var(--background-secondary, #162a0e);
  --tab-text-color-focused-active-current: var(--text-normal, #080a02);
  --table-add-button-border-color: var(--background-modifier-border, #82b56e);
  --table-border-color: var(--color-base-50, #82b56e);
  --table-drag-handle-background-active: var(--table-selection-border-color, #203d14);
  --table-drag-handle-color: var(--text-faint, rgba(8, 10, 2, 0.65));
  --table-drag-handle-color-active: var(--text-on-accent, #d9efd1);
  --table-header-border-color: var(--table-border-color, #82b56e);
  --table-header-color: var(--secondary-ink, #154608);
  --table-selection-border-color: var(--interactive-accent, #203d14);
  --tag-background: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
  --tag-background-hover: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
  --tag-color: var(--color-base-10, #d9efd1);
  --tag-color-hover: var(--color-base-10, #d9efd1);
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(100, 33.66%, 65.55%)));
  --text-accent: var(--color-accent, hsl(103, 33%, 57%));
  --text-accent-hover: var(--color-accent-2, hsl(100, 33.66%, 65.55%));
  --text-error: var(--color-red, #b43c3c);
  --text-faint: var(--main-ink-fainted, rgba(8, 10, 2, 0.65));
  --text-fainted: var(--main-ink-fainted, rgba(8, 10, 2, 0.65));
  --text-highlight-bg: rgba(var(--color-yellow-rgb),0.4);
  --text-muted: var(--main-ink-muted, rgba(8, 10, 2, 0.85));
  --text-normal: var(--main-ink, #080a02);
  --text-on-accent: var(--light-ink-alt, #d9efd1);
  --text-on-accent-inverted: var(--light-ink-alt, #d9efd1);
  --text-selection: rgba(var(--color-base-50-rgb),0.5);
  --text-success: var(--color-green, #719461);
  --text-warning: var(--color-orange, #db8134);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-yellow-rgb),0.4));
  --titleFont: var(--font-text-theme, var(--plexmono, 'IBM Plex Mono', monospace));
  --titlebar-background: var(--background-secondary, #162a0e);
  --titlebar-background-focused: var(--leather-color, #162a0e);
  --titlebar-border-color: var(--background-modifier-border, #82b56e);
  --titlebar-text-color: var(--text-muted, rgba(8, 10, 2, 0.85));
  --titlebar-text-color-focused: var(--text-normal, #080a02);
  --vault-profile-color: var(--text-normal, #080a02);
  --vault-profile-color-hover: var(--vault-profile-color, #080a02);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(22, 42, 14));
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(241, 249, 238));
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(22, 42, 14));
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(130, 181, 110);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(22, 42, 14));
  border-left-color: rgb(130, 181, 110);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body html {
  --fainted: 0.65;
  --muted: 0.85;
  --plexmono: 'IBM Plex Mono', monospace;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(21, 70, 8));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(21, 70, 8) none 0px;
  text-decoration-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(144, 13, 38));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 13, 38) none 0px;
  text-decoration-color: rgb(144, 13, 38);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(144, 13, 38));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 13, 38) none 0px;
  text-decoration-color: rgb(144, 13, 38);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(21, 70, 8));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(21, 70, 8) none 0px;
  text-decoration-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(242, 186, 68, 0.4));
  color: var(--text-normal, rgb(8, 10, 2));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(8, 10, 2) none 0px;
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body del {
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(8, 10, 2) none 0px;
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(8, 10, 2));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(21, 70, 8));
  border-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgba(241, 249, 238, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(241, 249, 238, 0.85) none 0px;
  text-decoration-color: rgba(241, 249, 238, 0.85);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(21, 70, 8));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(21, 70, 8) none 0px;
  text-decoration-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(21, 70, 8));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(21, 70, 8) none 0px;
  text-decoration-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgba(21, 70, 8, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(21, 70, 8, 0.85) none 0px;
  text-decoration: underline rgb(21, 70, 8);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(21, 70, 8));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body dt {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ol > li {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ul > li {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgba(8, 10, 2, 0.65));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(130, 181, 110, 0.2));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body table {
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: var(--table-text-color, rgb(8, 10, 2));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: var(--table-header-color, rgb(21, 70, 8));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(130, 181, 110, 0.2));
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: var(--code-normal, rgb(8, 10, 2));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(130, 181, 110, 0.2));
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
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body figcaption {
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(21, 70, 8);
  border-left-color: rgb(21, 70, 8);
  border-right-color: rgb(21, 70, 8);
  border-top-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(217, 239, 209));
  border-bottom-color: rgba(8, 10, 2, 0.85);
  border-left-color: rgba(8, 10, 2, 0.85);
  border-right-color: rgba(8, 10, 2, 0.85);
  border-top-color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, rgba(130, 181, 110, 0.15));
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(32, 61, 20);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, rgba(130, 181, 110, 0.15));
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(21, 70, 8, 0.65);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(21, 70, 8, 0.65);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(217, 239, 209);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(217, 239, 209);
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
  background-color: rgb(130, 181, 110);
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
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 130,181,110);
  background: rgba(130, 181, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: var(--secondary-ink-muted, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(21, 70, 8, 0.85));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(8, 10, 2);
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
  background-color: rgb(193, 229, 180);
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: var(--text-normal, rgb(8, 10, 2));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(241, 249, 238));
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(21, 70, 8, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(21, 70, 8, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(21, 70, 8, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: var(--light-ink-alt, rgb(217, 239, 209));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(217, 239, 209) none 0px;
  text-decoration-color: rgb(217, 239, 209);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(32, 61, 20));
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(21, 70, 8, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(21, 70, 8, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(21, 70, 8, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 42, 14);
  border-left-color: rgb(241, 249, 238);
  border-right-color: rgb(241, 249, 238);
  border-top-color: rgb(241, 249, 238);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(32, 61, 20));
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(32, 61, 20));
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(21, 70, 8, 0.85));
  border-bottom-color: rgba(130, 182, 109, 0.15);
  border-left-color: rgba(130, 182, 109, 0.15);
  border-right-color: rgba(130, 182, 109, 0.15);
  border-top-color: rgba(130, 182, 109, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(217, 239, 209);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(21, 70, 8));
  font-family: var(--h1-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(21, 70, 8));
  font-size: var(--inline-title-size, 35.2px);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(21, 70, 8));
  font-family: var(--h2-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(21, 70, 8));
  font-family: var(--inline-title-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(21, 70, 8));
  font-family: var(--h3-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(21, 70, 8));
  font-family: var(--h4-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(21, 70, 8));
  font-family: var(--h5-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(21, 70, 8));
  font-family: var(--h6-font, "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 130,181,110);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(130, 181, 110, 0.65);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(241, 249, 238));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(241, 249, 238));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(8, 10, 2);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
  color: var(--icon-color, rgb(8, 10, 2));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(193, 229, 180));
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: var(--status-bar-text-color, rgba(8, 10, 2, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(8, 10, 2, 0.85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(241, 249, 238));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(241, 249, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(241, 249, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(241, 249, 238));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(217, 239, 209);
  border-left-color: rgb(217, 239, 209);
  border-right-color: rgb(217, 239, 209);
  border-top-color: rgb(217, 239, 209);
  color: var(--icon-color, rgb(217, 239, 209));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(217, 239, 209);
  stroke: rgb(217, 239, 209);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(8, 10, 2, 0.85);
  border-left-color: rgba(8, 10, 2, 0.85);
  border-right-color: rgba(8, 10, 2, 0.85);
  border-top-color: rgba(8, 10, 2, 0.85);
  color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(8, 10, 2, 0.65));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(8, 10, 2));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(241, 249, 238));
  border-color: rgb(8, 10, 2);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(130, 181, 110);
  color: var(--table-header-color, rgb(21, 70, 8));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--metadata-background, rgb(217, 239, 209));
  border-bottom-color: rgb(130, 181, 110);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(130, 181, 110);
  border-left-width: 1px;
  border-right-color: rgb(130, 181, 110);
  border-right-width: 1px;
  border-top-color: rgb(130, 181, 110);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-muted, rgba(8, 10, 2, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(8, 10, 2, 0.85);
  border-left-color: rgba(8, 10, 2, 0.85);
  border-right-color: rgba(8, 10, 2, 0.85);
  border-top-color: rgba(8, 10, 2, 0.85);
  color: rgba(8, 10, 2, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--metadata-background, rgb(217, 239, 209));
  border-color: rgb(130, 181, 110);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(21, 70, 8, 0.85));
  color: var(--pill-color, rgb(217, 239, 209));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(241, 249, 238));
  color: var(--text-normal, rgb(8, 10, 2));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(22, 42, 14));
  border-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(22, 42, 14));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(8, 10, 2);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(193, 229, 180));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(8, 10, 2));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(8, 10, 2, 0.85);
  border-left-color: rgba(8, 10, 2, 0.85);
  border-right-color: rgba(8, 10, 2, 0.85);
  border-top-color: rgba(8, 10, 2, 0.85);
  color: var(--text-normal, rgba(8, 10, 2, 0.85));
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(32, 61, 20));
  border-bottom-color: rgb(217, 239, 209);
  border-left-color: rgb(217, 239, 209);
  border-right-color: rgb(217, 239, 209);
  border-top-color: rgb(217, 239, 209);
  color: var(--code-normal, rgb(217, 239, 209));
  font-family: var(--font-monospace, "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body sub {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body summary {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body sup {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(21, 70, 8, 0.85));
  border-bottom-color: rgba(130, 182, 109, 0.15);
  border-left-color: rgba(130, 182, 109, 0.15);
  border-right-color: rgba(130, 182, 109, 0.15);
  border-top-color: rgba(130, 182, 109, 0.15);
  color: var(--tag-color, rgb(217, 239, 209));
}`,
  },
};
