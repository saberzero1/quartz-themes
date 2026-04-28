import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retronotes.blueprint",
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
  --accent-h: 244;
  --accent-l: 38%;
  --accent-s: 76%;
  --background-modifier-active-hover: hsla(244, 76%, 38%, 0.1);
  --background-modifier-border: #4f91e8;
  --background-modifier-border-focus: #2d7be3;
  --background-modifier-border-hover: #72a7ec;
  --background-modifier-error: #140e66;
  --background-modifier-error-hover: #2117a9;
  --background-modifier-error-rgb: 138, 46, 46;
  --background-modifier-form-field: #195fbc;
  --background-modifier-form-field-hover: #195fbc;
  --background-modifier-hover: #2117a9;
  --background-modifier-message: #2d7be3;
  --background-modifier-success: #2d7be3;
  --background-modifier-success-rgb: 90, 122, 77;
  --background-primary: #0d3365;
  --background-primary-alt: #124588;
  --background-secondary: #140e66;
  --background-secondary-alt: #1b68cd;
  --bases-cards-background: #0d3365;
  --bases-cards-cover-background: #124588;
  --bases-cards-shadow: 0 0 0 1px #4f91e8;
  --bases-cards-shadow-hover: 0 0 0 1px #72a7ec;
  --bases-embed-border-color: #4f91e8;
  --bases-group-heading-property-color: rgba(245, 246, 248, 0.85);
  --bases-table-border-color: #4f91e8;
  --bases-table-cell-background-active: #0d3365;
  --bases-table-cell-background-disabled: #124588;
  --bases-table-cell-background-selected: hsla(244, 76%, 38%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #2d7be3;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(244, 76%, 38%);
  --bases-table-group-background: #124588;
  --bases-table-header-background: #0d3365;
  --bases-table-header-background-hover: #1757ab;
  --bases-table-header-color: rgba(245, 246, 248, 0.85);
  --bases-table-summary-background: #0d3365;
  --bases-table-summary-background-hover: #2117a9;
  --blockquote-background-color: rgba(79, 145, 232, 0.2);
  --blockquote-border-color: #e38421;
  --blur-background: color-mix(in srgb, #1b68cd 65%, transparent) linear-gradient(#1b68cd, color-mix(in srgb, #1b68cd 65%, transparent));
  --bodyFont: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-accent-ink: #e38421;
  --bold-color: #e38421;
  --button-radius: 50px;
  --callout-border-width: 2px;
  --callout-bug: 138, 46, 46;
  --callout-default: 26, 69, 89;
  --callout-error: 138, 46, 46;
  --callout-example: 95, 74, 140;
  --callout-fail: 138, 46, 46;
  --callout-important: 67, 143, 147;
  --callout-info: 26, 69, 89;
  --callout-question: 179, 104, 42;
  --callout-success: 90, 122, 77;
  --callout-summary: 67, 143, 147;
  --callout-tip: 67, 143, 147;
  --callout-todo: 26, 69, 89;
  --callout-warning: 179, 104, 42;
  --canvas-background: #0d3365;
  --canvas-card-label-color: rgba(245, 246, 248, 0.65);
  --canvas-color-1: 138, 46, 46;
  --canvas-color-2: 179, 104, 42;
  --canvas-color-3: 194, 153, 56;
  --canvas-color-4: 90, 122, 77;
  --canvas-color-5: 67, 143, 147;
  --canvas-color-6: 95, 74, 140;
  --canvas-dot-pattern: rgba(227, 132, 33, 0.4);
  --caret-color: #94bcf1;
  --checkbox-border-color: #f5f6f8;
  --checkbox-border-color-hover: rgba(245, 246, 248, 0.65);
  --checkbox-color: #e38421;
  --checkbox-color-hover: rgba(227, 132, 33, 0.85);
  --checkbox-marker-color: #124588;
  --checklist-done-color: rgba(227, 132, 33, 0.65);
  --code-background: rgba(79, 145, 232, 0.2);
  --code-border-color: #4f91e8;
  --code-bracket-background: #2117a9;
  --code-comment: rgba(245, 246, 248, 0.65);
  --code-function: #c29938;
  --code-important: #b3682a;
  --code-keyword: #b16982;
  --code-normal: #f5f6f8;
  --code-operator: #8a2e2e;
  --code-property: #438f93;
  --code-punctuation: rgba(245, 246, 248, 0.85);
  --code-string: #5a7a4d;
  --code-tag: #8a2e2e;
  --code-value: #5f4a8c;
  --codeFont: var(--font-monospace, IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --collapse-icon-color: rgba(245, 246, 248, 0.65);
  --collapse-icon-color-collapsed: hsl(241, 77.52%, 43.7%);
  --color-accent: hsl(244, 76%, 38%);
  --color-accent-1: hsl(241, 77.52%, 43.7%);
  --color-accent-2: hsl(239, 79.8%, 49.02%);
  --color-accent-hsl: 244, 76%, 38%;
  --color-base-00: #0d3365;
  --color-base-00-rgb: 13,51,101;
  --color-base-05: #103c77;
  --color-base-10: #124588;
  --color-base-100: #ebf3fc;
  --color-base-20: #1757ab;
  --color-base-25: #195fbc;
  --color-base-30: #1b68cd;
  --color-base-35: #1d71df;
  --color-base-40: #2d7be3;
  --color-base-50: #4f91e8;
  --color-base-50-rgb: 79,145,232;
  --color-base-60: #72a7ec;
  --color-base-70: #94bcf1;
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
  --dark: var(--text-normal, #f5f6f8);
  --darkgray: var(--text-normal, #f5f6f8);
  --divider-color: #4f91e8;
  --divider-color-hover: hsl(244, 76%, 38%);
  --dropdown-background: #1b68cd;
  --dropdown-background-hover: #1d71df;
  --embed-background: rgba(79, 145, 232, 0.15);
  --embed-block-shadow-hover: 0 0 0 1px #4f91e8, inset 0 0 0 1px #4f91e8;
  --embed-border-start: 2px solid rgba(227, 132, 33, 0.85);
  --fainted: 0.65;
  --file-header-background: #0d3365;
  --file-header-background-focused: #0d3365;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #1b68cd;
  --flair-color: #f5f6f8;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Mono', monospace;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'IBM Plex Mono', monospace;
  --font-print: IBM Plex Mono, monospace, Arial';
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Mono', monospace;
  --footnote-divider-color: #4f91e8;
  --footnote-id-color: rgba(245, 246, 248, 0.85);
  --footnote-id-color-no-occurrences: rgba(245, 246, 248, 0.65);
  --footnote-input-background-active: #103c77;
  --graph-line: #1d71df;
  --graph-node: rgba(245, 246, 248, 0.85);
  --graph-node-attachment: #c29938;
  --graph-node-focused: #e38421;
  --graph-node-tag: #e38421;
  --graph-node-unresolved: rgba(245, 246, 248, 0.65);
  --graph-text: #f5f6f8;
  --gray: var(--text-muted, rgba(245, 246, 248, 0.85));
  --h1-color: #e38421;
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: #e38421;
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: #e38421;
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: #e38421;
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: #e38421;
  --h5-line-height: 1.5em;
  --h5-size: 1.4em;
  --h6-color: #e38421;
  --h6-line-height: 1.5em;
  --h6-size: 1.2em;
  --headerFont: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: rgba(245, 246, 248, 0.65);
  --highlight: var(--text-highlight-bg, rgba(194, 153, 56, 0.4));
  --hr-color: rgba(227, 132, 33, 0.85);
  --icon-color: rgba(245, 246, 248, 0.85);
  --icon-color-active: hsl(241, 77.52%, 43.7%);
  --icon-color-focused: #f5f6f8;
  --icon-color-hover: rgba(245, 246, 248, 0.85);
  --indentation-guide-color: rgba(227, 132, 33, 0.65);
  --indentation-guide-color-active: rgba(227, 132, 33, 0.85);
  --inline-title-color: #e38421;
  --inline-title-line-height: 1.5em;
  --inline-title-size: 2.2em;
  --input-date-separator: rgba(245, 246, 248, 0.65);
  --input-placeholder-color: rgba(245, 246, 248, 0.65);
  --interactive-accent: hsl(244, 76%, 38%);
  --interactive-accent-hover: hsl(241, 77.52%, 43.7%);
  --interactive-accent-hsl: 244, 76%, 38%;
  --interactive-hover: #1d71df;
  --interactive-normal: #1b68cd;
  --italic-accent-ink: #efbb1a;
  --italic-color: #efbb1a;
  --leather-color: #140e66;
  --leather-color-alt: #2117a9;
  --leather-color-rgb: 20, 14, 102;
  --light: var(--background-primary, #0d3365);
  --light-ink: #f5f6f8;
  --light-ink-alt: #fafafd;
  --light-ink-fainted: rgba(245, 246, 248, 0.65);
  --light-ink-muted: rgba(245, 246, 248, 0.85);
  --lightgray: var(--background-secondary, #140e66);
  --link-color: #e38421;
  --link-color-hover: rgba(227, 132, 33, 0.85);
  --link-external-color: #e38421;
  --link-external-color-hover: rgba(227, 132, 33, 0.85);
  --link-unresolved-color: rgba(227, 132, 33, 0.85);
  --link-unresolved-color-hover: #e38421;
  --link-unresolved-decoration-color: #e38421;
  --list-marker-color: rgba(227, 132, 33, 0.65);
  --list-marker-color-collapsed: #e38421;
  --list-marker-color-hover: rgba(227, 132, 33, 0.65);
  --main-ink: #f5f6f8;
  --main-ink-fainted: rgba(245, 246, 248, 0.65);
  --main-ink-muted: rgba(245, 246, 248, 0.85);
  --main-ink-rgb: 245,246,248;
  --menu-background: #140e66;
  --menu-border-color: #72a7ec;
  --metadata-background: #124588;
  --metadata-border-color: #4f91e8;
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: #4f91e8;
  --metadata-gap: 4px;
  --metadata-input-background-active: #103c77;
  --metadata-input-background-hover: #124588;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #f5f6f8;
  --metadata-label-background-active: #124588;
  --metadata-label-background-hover: #124588;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgba(245, 246, 248, 0.85);
  --metadata-label-text-color-hover: rgba(245, 246, 248, 0.85);
  --metadata-padding: 16px;
  --metadata-property-background-active: #1757ab;
  --metadata-property-background-hover: #1757ab;
  --metadata-property-box-shadow-focus: 0 0 0 2px #2d7be3;
  --metadata-property-box-shadow-hover: 0 0 0 1px #72a7ec;
  --modal-background: #124588;
  --modal-border-color: #2d7be3;
  --modal-border-width: 2px;
  --muted: 0.85;
  --nav-collapse-icon-color: #4f91e8;
  --nav-collapse-icon-color-collapsed: rgba(245, 246, 248, 0.65);
  --nav-heading-color: #f5f6f8;
  --nav-heading-color-collapsed: rgba(245, 246, 248, 0.65);
  --nav-heading-color-collapsed-hover: rgba(245, 246, 248, 0.85);
  --nav-heading-color-hover: #f5f6f8;
  --nav-indentation-guide-color: rgba(245, 246, 248, 0.65);
  --nav-item-background-active: #2117a9;
  --nav-item-background-hover: #2117a9;
  --nav-item-background-selected: hsla(244, 76%, 38%, 0.15);
  --nav-item-color: #f5f6f8;
  --nav-item-color-active: #fafafd;
  --nav-item-color-highlighted: hsl(241, 77.52%, 43.7%);
  --nav-item-color-hover: #fafafd;
  --nav-item-color-selected: #fafafd;
  --nav-tag-color: rgba(245, 246, 248, 0.65);
  --nav-tag-color-active: rgba(245, 246, 248, 0.85);
  --nav-tag-color-hover: rgba(245, 246, 248, 0.85);
  --pdf-background: #0d3365;
  --pdf-page-background: #0d3365;
  --pdf-shadow: 0 0 0 1px #4f91e8;
  --pdf-sidebar-background: #0d3365;
  --pdf-thumbnail-shadow: 0 0 0 1px #4f91e8;
  --pill-background: #1757ab;
  --pill-background-hover: #1b68cd;
  --pill-border-color: #4f91e8;
  --pill-border-color-hover: #72a7ec;
  --pill-color: rgba(245, 246, 248, 0.85);
  --pill-color-hover: #f5f6f8;
  --pill-color-remove: rgba(245, 246, 248, 0.65);
  --pill-color-remove-hover: hsl(241, 77.52%, 43.7%);
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: #0d3365;
  --prompt-border-color: rgba(227, 132, 33, 0.85);
  --prompt-border-width: 2px;
  --raised-background: color-mix(in srgb, #1b68cd 65%, transparent) linear-gradient(#1b68cd, color-mix(in srgb, #1b68cd 65%, transparent));
  --ribbon-background: #140e66;
  --ribbon-background-collapsed: #2117a9;
  --search-clear-button-color: rgba(245, 246, 248, 0.85);
  --search-icon-color: rgba(245, 246, 248, 0.85);
  --search-result-background: #0d3365;
  --secondary: var(--text-accent, hsl(241, 77.52%, 43.7%));
  --secondary-ink: #e38421;
  --secondary-ink-fainted: rgba(227, 132, 33, 0.65);
  --secondary-ink-muted: rgba(227, 132, 33, 0.85);
  --secondary-ink-rgb: 227, 132, 33;
  --setting-group-heading-color: #f5f6f8;
  --setting-items-background: #124588;
  --setting-items-border-color: #4f91e8;
  --shiki-active-tab-border-color: rgba(245, 246, 248, 0.85);
  --shiki-code-background: rgba(79, 145, 232, 0.2);
  --shiki-code-comment: rgba(245, 246, 248, 0.65);
  --shiki-code-function: #5a7a4d;
  --shiki-code-important: #b3682a;
  --shiki-code-keyword: #b16982;
  --shiki-code-normal: rgba(245, 246, 248, 0.85);
  --shiki-code-property: #438f93;
  --shiki-code-punctuation: rgba(245, 246, 248, 0.85);
  --shiki-code-string: #c29938;
  --shiki-code-value: #5f4a8c;
  --shiki-gutter-border-color: #4f91e8;
  --shiki-gutter-text-color: rgba(245, 246, 248, 0.65);
  --shiki-gutter-text-color-highlight: rgba(245, 246, 248, 0.85);
  --shiki-highlight-green: rgba(90, 122, 77, 0.5);
  --shiki-highlight-green-background: rgba(90, 122, 77, 0.1);
  --shiki-highlight-neutral: rgba(245, 246, 248, 0.85);
  --shiki-highlight-red: rgba(138, 46, 46, 0.5);
  --shiki-highlight-red-background: rgba(138, 46, 46, 0.1);
  --shiki-terminal-dots-color: rgba(245, 246, 248, 0.65);
  --shiki-tooltip-background: #2d7be3;
  --slider-thumb-border-color: #72a7ec;
  --slider-track-background: #4f91e8;
  --status-bar-background: #1757ab;
  --status-bar-border-color: #4f91e8;
  --status-bar-text-color: rgba(245, 246, 248, 0.85);
  --suggestion-background: #0d3365;
  --sync-avatar-color-1: #8a2e2e;
  --sync-avatar-color-2: #b3682a;
  --sync-avatar-color-3: #c29938;
  --sync-avatar-color-4: #5a7a4d;
  --sync-avatar-color-5: #438f93;
  --sync-avatar-color-6: #1a4559;
  --sync-avatar-color-7: #5f4a8c;
  --sync-avatar-color-8: #b16982;
  --tab-background-active: #124588;
  --tab-container-background: #140e66;
  --tab-divider-color: none;
  --tab-font-weight: 600;
  --tab-outline-color: #1b68cd;
  --tab-switcher-background: #140e66;
  --tab-switcher-menubar-background: linear-gradient(to top, #140e66, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(244, 76%, 38%);
  --tab-text-color-focused-active-current: #f5f6f8;
  --table-add-button-border-color: #4f91e8;
  --table-border-color: #4f91e8;
  --table-drag-handle-background-active: hsl(244, 76%, 38%);
  --table-drag-handle-color: rgba(245, 246, 248, 0.65);
  --table-drag-handle-color-active: #fafafd;
  --table-header-border-color: #4f91e8;
  --table-header-color: #e38421;
  --table-selection: hsla(244, 76%, 38%, 0.1);
  --table-selection-border-color: hsl(244, 76%, 38%);
  --tag-background: rgba(227, 132, 33, 0.85);
  --tag-background-hover: rgba(227, 132, 33, 0.85);
  --tag-border-color: hsla(244, 76%, 38%, 0.15);
  --tag-border-color-hover: hsla(244, 76%, 38%, 0.15);
  --tag-color: #0d3365;
  --tag-color-hover: #124588;
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover, hsl(239, 79.8%, 49.02%));
  --text-accent: hsl(241, 77.52%, 43.7%);
  --text-accent-hover: hsl(239, 79.8%, 49.02%);
  --text-error: #8a2e2e;
  --text-faint: rgba(245, 246, 248, 0.65);
  --text-fainted: rgba(245, 246, 248, 0.65);
  --text-highlight-bg: rgba(194, 153, 56, 0.4);
  --text-muted: rgba(245, 246, 248, 0.85);
  --text-normal: #f5f6f8;
  --text-on-accent: #fafafd;
  --text-on-accent-inverted: #fafafd;
  --text-selection: rgba(79, 145, 232, 0.5);
  --text-success: #5a7a4d;
  --text-warning: #b3682a;
  --textHighlight: var(--text-highlight-bg, rgba(194, 153, 56, 0.4));
  --titleFont: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: #140e66;
  --titlebar-background-focused: #140e66;
  --titlebar-border-color: #4f91e8;
  --titlebar-text-color: rgba(245, 246, 248, 0.85);
  --titlebar-text-color-focused: #f5f6f8;
  --vault-profile-color: #f5f6f8;
  --vault-profile-color-hover: #f5f6f8;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 14, 102);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(13, 51, 101);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 14, 102);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(79, 145, 232);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 14, 102);
  border-left-color: rgb(79, 145, 232);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body html {
  --fainted: 0.65;
  --muted: 0.85;
  --plexmono: 'IBM Plex Mono', monospace;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(227, 132, 33) none 0px;
  text-decoration-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(239, 187, 26);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 187, 26) none 0px;
  text-decoration-color: rgb(239, 187, 26);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(239, 187, 26);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 187, 26) none 0px;
  text-decoration-color: rgb(239, 187, 26);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(227, 132, 33) none 0px;
  text-decoration-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(194, 153, 56, 0.4);
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 246, 248) none 0px;
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 246, 248) none 0px;
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(227, 132, 33);
  border-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body p {
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(245, 246, 248, 0.85) none 0px;
  text-decoration-color: rgba(245, 246, 248, 0.85);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(227, 132, 33) none 0px;
  text-decoration-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(227, 132, 33) none 0px;
  text-decoration-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgba(227, 132, 33, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(227, 132, 33, 0.85) none 0px;
  text-decoration: underline rgb(227, 132, 33);
  text-decoration-color: rgb(227, 132, 33);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body dt {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(245, 246, 248, 0.65);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(79, 145, 232, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgb(227, 132, 33);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgba(79, 145, 232, 0.2);
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(79, 145, 232, 0.2);
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
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(227, 132, 33);
  border-left-color: rgb(227, 132, 33);
  border-right-color: rgb(227, 132, 33);
  border-top-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(18, 69, 136);
  border-bottom-color: rgba(245, 246, 248, 0.85);
  border-left-color: rgba(245, 246, 248, 0.85);
  border-right-color: rgba(245, 246, 248, 0.85);
  border-top-color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(79, 145, 232, 0.15);
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(79, 145, 232, 0.15);
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(227, 132, 33, 0.65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(227, 132, 33, 0.65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 69, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 69, 136);
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
  background-color: rgb(79, 145, 232);
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
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 79,145,232;
  background: rgba(79, 145, 232, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(245, 246, 248);
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
  background-color: rgb(25, 95, 188);
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(13, 51, 101);
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(227, 132, 33, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(227, 132, 33, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(227, 132, 33, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 250, 253);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(250, 250, 253) none 0px;
  text-decoration-color: rgb(250, 250, 253);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(33, 23, 169);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(227, 132, 33, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(227, 132, 33, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(227, 132, 33, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 14, 102);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(33, 23, 169);
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(33, 23, 169);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(227, 132, 33, 0.85);
  border-bottom-color: rgba(33, 23, 171, 0.15);
  border-left-color: rgba(33, 23, 171, 0.15);
  border-right-color: rgba(33, 23, 171, 0.15);
  border-top-color: rgba(33, 23, 171, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(13, 51, 101);
}

html[saved-theme="dark"] body h1 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(227, 132, 33);
  font-size: 35.2px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(245, 246, 248, 0.65);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(245, 246, 248);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(23, 87, 171);
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(245, 246, 248, 0.85);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(250, 250, 253);
  border-left-color: rgb(250, 250, 253);
  border-right-color: rgb(250, 250, 253);
  border-top-color: rgb(250, 250, 253);
  color: rgb(250, 250, 253);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(250, 250, 253);
  stroke: rgb(250, 250, 253);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(245, 246, 248, 0.85);
  border-left-color: rgba(245, 246, 248, 0.85);
  border-right-color: rgba(245, 246, 248, 0.85);
  border-top-color: rgba(245, 246, 248, 0.85);
  color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(245, 246, 248, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(20, 14, 102);
  border-color: rgb(245, 246, 248);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(79, 145, 232);
  color: rgb(227, 132, 33);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: rgb(18, 69, 136);
  border-bottom-color: rgb(79, 145, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(79, 145, 232);
  border-left-width: 1px;
  border-right-color: rgb(79, 145, 232);
  border-right-width: 1px;
  border-top-color: rgb(79, 145, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(245, 246, 248, 0.85);
  border-left-color: rgba(245, 246, 248, 0.85);
  border-right-color: rgba(245, 246, 248, 0.85);
  border-top-color: rgba(245, 246, 248, 0.85);
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(18, 69, 136);
  border-color: rgb(79, 145, 232);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(227, 132, 33, 0.85);
  color: rgb(13, 51, 101);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(13, 51, 101);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(20, 14, 102);
  border-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(20, 14, 102);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(245, 246, 248);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(23, 87, 171);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(245, 246, 248, 0.85);
  border-left-color: rgba(245, 246, 248, 0.85);
  border-right-color: rgba(245, 246, 248, 0.85);
  border-top-color: rgba(245, 246, 248, 0.85);
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(33, 23, 169);
  border-bottom-color: rgb(250, 250, 253);
  border-left-color: rgb(250, 250, 253);
  border-right-color: rgb(250, 250, 253);
  border-top-color: rgb(250, 250, 253);
  color: rgb(250, 250, 253);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body sub {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body summary {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body sup {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(227, 132, 33, 0.85);
  border-bottom-color: rgba(33, 23, 171, 0.15);
  border-left-color: rgba(33, 23, 171, 0.15);
  border-right-color: rgba(33, 23, 171, 0.15);
  border-top-color: rgba(33, 23, 171, 0.15);
  color: rgb(13, 51, 101);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 240;
  --accent-l: 68%;
  --accent-s: 77%;
  --background-modifier-active-hover: hsla(240, 77%, 68%, 0.1);
  --background-modifier-border: #6e6eec;
  --background-modifier-border-focus: #8080ee;
  --background-modifier-border-hover: #4747ff;
  --background-modifier-error: #172847;
  --background-modifier-error-hover: #1d335a;
  --background-modifier-error-rgb: 180, 60, 60;
  --background-modifier-form-field: #bdbdff;
  --background-modifier-form-field-hover: #bdbdff;
  --background-modifier-hover: #1d335a;
  --background-modifier-message: #8080ee;
  --background-modifier-success: #8080ee;
  --background-modifier-success-rgb: 113, 148, 97;
  --background-primary: #f8f8ff;
  --background-primary-alt: #d1d1ff;
  --background-secondary: #172847;
  --background-secondary-alt: #e4e4ff;
  --bases-cards-background: #f8f8ff;
  --bases-cards-cover-background: #d1d1ff;
  --bases-cards-shadow: 0 0 0 1px #6e6eec;
  --bases-cards-shadow-hover: 0 0 0 1px #4747ff;
  --bases-embed-border-color: #6e6eec;
  --bases-group-heading-property-color: rgba(3, 5, 9, 0.85);
  --bases-table-border-color: #6e6eec;
  --bases-table-cell-background-active: #f8f8ff;
  --bases-table-cell-background-disabled: #d1d1ff;
  --bases-table-cell-background-selected: hsla(240, 77%, 68%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #8080ee;
  --bases-table-cell-shadow-focus: 0 0 0 2px #1d335a;
  --bases-table-group-background: #d1d1ff;
  --bases-table-header-background: #f8f8ff;
  --bases-table-header-background-hover: #bdbdff;
  --bases-table-header-color: rgba(3, 5, 9, 0.85);
  --bases-table-summary-background: #f8f8ff;
  --bases-table-summary-background-hover: #1d335a;
  --blockquote-background-color: rgba(110, 110, 236, 0.2);
  --blockquote-border-color: #111d34;
  --blur-background: color-mix(in srgb, #f8f8ff 65%, transparent) linear-gradient(#f8f8ff, color-mix(in srgb, #f8f8ff 65%, transparent));
  --bodyFont: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-accent-ink: #ae400f;
  --bold-color: #ae400f;
  --button-radius: 50px;
  --callout-border-width: 2px;
  --callout-bug: 180, 60, 60;
  --callout-default: 34, 89, 115;
  --callout-error: 180, 60, 60;
  --callout-example: 119, 92, 176;
  --callout-fail: 180, 60, 60;
  --callout-important: 83, 179, 184;
  --callout-info: 34, 89, 115;
  --callout-question: 219, 129, 52;
  --callout-success: 113, 148, 97;
  --callout-summary: 83, 179, 184;
  --callout-tip: 83, 179, 184;
  --callout-todo: 34, 89, 115;
  --callout-warning: 219, 129, 52;
  --canvas-background: #f8f8ff;
  --canvas-card-label-color: rgba(3, 5, 9, 0.65);
  --canvas-color-1: 180, 60, 60;
  --canvas-color-2: 219, 129, 52;
  --canvas-color-3: 242, 186, 68;
  --canvas-color-4: 113, 148, 97;
  --canvas-color-5: 83, 179, 184;
  --canvas-color-6: 119, 92, 176;
  --canvas-dot-pattern: rgba(17, 29, 52, 0.4);
  --caret-color: #3434ff;
  --checkbox-border-color: #030509;
  --checkbox-border-color-hover: rgba(3, 5, 9, 0.65);
  --checkbox-color: #111d34;
  --checkbox-color-hover: rgba(17, 29, 52, 0.85);
  --checkbox-marker-color: #e4e4ff;
  --checklist-done-color: rgba(17, 29, 52, 0.65);
  --code-background: rgba(110, 110, 236, 0.2);
  --code-border-color: #6e6eec;
  --code-bracket-background: #1d335a;
  --code-comment: rgba(3, 5, 9, 0.65);
  --code-function: #f2ba44;
  --code-important: #db8134;
  --code-keyword: #dc84a3;
  --code-normal: #030509;
  --code-operator: #b43c3c;
  --code-property: #53b3b8;
  --code-punctuation: rgba(3, 5, 9, 0.85);
  --code-string: #719461;
  --code-tag: #b43c3c;
  --code-value: #775cb0;
  --codeFont: var(--font-monospace, IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --collapse-icon-color: rgba(3, 5, 9, 0.65);
  --collapse-icon-color-collapsed: hsl(240, 77%, 68%);
  --color-accent: hsl(240, 77%, 68%);
  --color-accent-1: hsl(239, 77.77%, 73.1%);
  --color-accent-2: hsl(237, 78.54%, 78.2%);
  --color-accent-hsl: 240, 77%, 68%;
  --color-base-00: #f8f8ff;
  --color-base-00-rgb: 248,248,255;
  --color-base-05: #e4e4ff;
  --color-base-10: #d1d1ff;
  --color-base-100: #0000aa;
  --color-base-20: #bdbdff;
  --color-base-25: #aaaaff;
  --color-base-30: #9696ff;
  --color-base-35: #8282ff;
  --color-base-40: #8080ee;
  --color-base-50: #6e6eec;
  --color-base-50-rgb: 110,110,236;
  --color-base-60: #4747ff;
  --color-base-70: #3434ff;
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
  --dark: var(--text-normal, #030509);
  --darkgray: var(--text-normal, #030509);
  --divider-color: #6e6eec;
  --divider-color-hover: #1d335a;
  --dropdown-background: #9696ff;
  --dropdown-background-hover: #bdbdff;
  --embed-background: rgba(110, 110, 236, 0.15);
  --embed-block-shadow-hover: 0 0 0 1px #6e6eec, inset 0 0 0 1px #6e6eec;
  --embed-border-start: 2px solid #1d335a;
  --fainted: 0.65;
  --file-header-background: #f8f8ff;
  --file-header-background-focused: #f8f8ff;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #9696ff;
  --flair-color: #030509;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Mono', monospace;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'IBM Plex Mono', monospace;
  --font-print: IBM Plex Mono, monospace, Arial';
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Mono', monospace;
  --footnote-divider-color: #6e6eec;
  --footnote-id-color: rgba(3, 5, 9, 0.85);
  --footnote-id-color-no-occurrences: rgba(3, 5, 9, 0.65);
  --footnote-input-background-active: #e4e4ff;
  --graph-line: #8282ff;
  --graph-node: rgba(3, 5, 9, 0.85);
  --graph-node-attachment: #f2ba44;
  --graph-node-focused: #111d34;
  --graph-node-tag: #ae400f;
  --graph-node-unresolved: rgba(3, 5, 9, 0.65);
  --graph-text: #030509;
  --gray: var(--text-muted, rgba(3, 5, 9, 0.85));
  --h1-color: #111d34;
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: #111d34;
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: #111d34;
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: #111d34;
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: #111d34;
  --h5-line-height: 1.5em;
  --h5-size: 1.4em;
  --h6-color: #111d34;
  --h6-line-height: 1.5em;
  --h6-size: 1.2em;
  --headerFont: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: rgba(3, 5, 9, 0.65);
  --highlight: var(--text-highlight-bg, rgba(242, 186, 68, 0.4));
  --hr-color: rgba(17, 29, 52, 0.85);
  --icon-color: rgba(3, 5, 9, 0.85);
  --icon-color-active: hsl(240, 77%, 68%);
  --icon-color-focused: #030509;
  --icon-color-hover: rgba(3, 5, 9, 0.85);
  --indentation-guide-color: rgba(17, 29, 52, 0.65);
  --indentation-guide-color-active: rgba(17, 29, 52, 0.85);
  --inline-title-color: #111d34;
  --inline-title-line-height: 1.5em;
  --inline-title-size: 2.2em;
  --input-date-separator: rgba(3, 5, 9, 0.65);
  --input-placeholder-color: rgba(3, 5, 9, 0.65);
  --interactive-accent: #1d335a;
  --interactive-accent-hover: #172847;
  --interactive-accent-hsl: 240, 77%, 68%;
  --interactive-hover: #bdbdff;
  --interactive-normal: #9696ff;
  --italic-accent-ink: #ae0f2d;
  --italic-color: #ae0f2d;
  --leather-color: #172847;
  --leather-color-alt: #1d335a;
  --leather-color-rgb: 23, 40, 71;
  --light: var(--background-primary, #f8f8ff);
  --light-ink: #f8f8ff;
  --light-ink-alt: #e4e4ff;
  --light-ink-fainted: rgba(248, 248, 255, 0.65);
  --light-ink-muted: rgba(248, 248, 255, 0.85);
  --lightgray: var(--background-secondary, #172847);
  --link-color: #111d34;
  --link-color-hover: rgba(17, 29, 52, 0.85);
  --link-external-color: #111d34;
  --link-external-color-hover: rgba(17, 29, 52, 0.85);
  --link-unresolved-color: rgba(17, 29, 52, 0.85);
  --link-unresolved-color-hover: #111d34;
  --link-unresolved-decoration-color: #111d34;
  --list-marker-color: rgba(17, 29, 52, 0.65);
  --list-marker-color-collapsed: #111d34;
  --list-marker-color-hover: rgba(17, 29, 52, 0.65);
  --main-ink: #030509;
  --main-ink-fainted: rgba(3, 5, 9, 0.65);
  --main-ink-muted: rgba(3, 5, 9, 0.85);
  --main-ink-rgb: 3, 5, 9;
  --menu-background: #172847;
  --menu-border-color: #4747ff;
  --metadata-background: #d1d1ff;
  --metadata-border-color: #6e6eec;
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: #6e6eec;
  --metadata-gap: 4px;
  --metadata-input-background-active: #e4e4ff;
  --metadata-input-background-hover: #d1d1ff;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #030509;
  --metadata-label-background-active: #d1d1ff;
  --metadata-label-background-hover: #d1d1ff;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgba(3, 5, 9, 0.85);
  --metadata-label-text-color-hover: rgba(3, 5, 9, 0.85);
  --metadata-padding: 16px;
  --metadata-property-background-active: #bdbdff;
  --metadata-property-background-hover: #bdbdff;
  --metadata-property-box-shadow-focus: 0 0 0 2px #8080ee;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4747ff;
  --modal-background: #d1d1ff;
  --modal-border-color: #8080ee;
  --modal-border-width: 2px;
  --muted: 0.85;
  --nav-collapse-icon-color: #6e6eec;
  --nav-collapse-icon-color-collapsed: rgba(3, 5, 9, 0.65);
  --nav-heading-color: #030509;
  --nav-heading-color-collapsed: rgba(3, 5, 9, 0.65);
  --nav-heading-color-collapsed-hover: rgba(3, 5, 9, 0.85);
  --nav-heading-color-hover: #030509;
  --nav-indentation-guide-color: rgba(110, 110, 236, 0.65);
  --nav-item-background-active: #1d335a;
  --nav-item-background-hover: #1d335a;
  --nav-item-background-selected: hsla(240, 77%, 68%, 0.15);
  --nav-item-color: #f8f8ff;
  --nav-item-color-active: #e4e4ff;
  --nav-item-color-highlighted: hsl(240, 77%, 68%);
  --nav-item-color-hover: #e4e4ff;
  --nav-item-color-selected: #e4e4ff;
  --nav-tag-color: rgba(3, 5, 9, 0.65);
  --nav-tag-color-active: rgba(3, 5, 9, 0.85);
  --nav-tag-color-hover: rgba(3, 5, 9, 0.85);
  --pdf-background: #f8f8ff;
  --pdf-page-background: #f8f8ff;
  --pdf-sidebar-background: #f8f8ff;
  --pill-background: #bdbdff;
  --pill-background-hover: #9696ff;
  --pill-border-color: #6e6eec;
  --pill-border-color-hover: #4747ff;
  --pill-color: rgba(3, 5, 9, 0.85);
  --pill-color-hover: #030509;
  --pill-color-remove: rgba(3, 5, 9, 0.65);
  --pill-color-remove-hover: hsl(240, 77%, 68%);
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: #f8f8ff;
  --prompt-border-color: rgba(17, 29, 52, 0.85);
  --prompt-border-width: 2px;
  --raised-background: color-mix(in srgb, #f8f8ff 65%, transparent) linear-gradient(#f8f8ff, color-mix(in srgb, #f8f8ff 65%, transparent));
  --ribbon-background: #172847;
  --ribbon-background-collapsed: #1d335a;
  --search-clear-button-color: rgba(3, 5, 9, 0.85);
  --search-icon-color: rgba(3, 5, 9, 0.85);
  --search-result-background: #f8f8ff;
  --secondary: var(--text-accent, hsl(240, 77%, 68%));
  --secondary-ink: #111d34;
  --secondary-ink-fainted: rgba(17, 29, 52, 0.65);
  --secondary-ink-muted: rgba(17, 29, 52, 0.85);
  --secondary-ink-rgb: 17, 29, 52;
  --setting-group-heading-color: #030509;
  --setting-items-background: #d1d1ff;
  --setting-items-border-color: #6e6eec;
  --shiki-active-tab-border-color: rgba(3, 5, 9, 0.85);
  --shiki-code-background: rgba(110, 110, 236, 0.2);
  --shiki-code-comment: rgba(3, 5, 9, 0.65);
  --shiki-code-function: #719461;
  --shiki-code-important: #db8134;
  --shiki-code-keyword: #dc84a3;
  --shiki-code-normal: rgba(3, 5, 9, 0.85);
  --shiki-code-property: #53b3b8;
  --shiki-code-punctuation: rgba(3, 5, 9, 0.85);
  --shiki-code-string: #f2ba44;
  --shiki-code-value: #775cb0;
  --shiki-gutter-border-color: #6e6eec;
  --shiki-gutter-text-color: rgba(3, 5, 9, 0.65);
  --shiki-gutter-text-color-highlight: rgba(3, 5, 9, 0.85);
  --shiki-highlight-green: rgba(113, 148, 97, 0.5);
  --shiki-highlight-green-background: rgba(113, 148, 97, 0.1);
  --shiki-highlight-neutral: rgba(3, 5, 9, 0.85);
  --shiki-highlight-red: rgba(180, 60, 60, 0.5);
  --shiki-highlight-red-background: rgba(180, 60, 60, 0.1);
  --shiki-terminal-dots-color: rgba(3, 5, 9, 0.65);
  --shiki-tooltip-background: #8080ee;
  --slider-thumb-border-color: #4747ff;
  --slider-track-background: #6e6eec;
  --status-bar-background: #bdbdff;
  --status-bar-border-color: #6e6eec;
  --status-bar-text-color: rgba(3, 5, 9, 0.85);
  --suggestion-background: #f8f8ff;
  --sync-avatar-color-1: #b43c3c;
  --sync-avatar-color-2: #db8134;
  --sync-avatar-color-3: #f2ba44;
  --sync-avatar-color-4: #719461;
  --sync-avatar-color-5: #53b3b8;
  --sync-avatar-color-6: #225973;
  --sync-avatar-color-7: #775cb0;
  --sync-avatar-color-8: #dc84a3;
  --tab-background-active: #d1d1ff;
  --tab-container-background: #172847;
  --tab-divider-color: none;
  --tab-font-weight: 600;
  --tab-outline-color: #9696ff;
  --tab-switcher-background: #172847;
  --tab-switcher-menubar-background: linear-gradient(to top, #172847, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(240, 77%, 68%);
  --tab-text-color-focused-active-current: #030509;
  --table-add-button-border-color: #6e6eec;
  --table-border-color: #6e6eec;
  --table-drag-handle-background-active: #1d335a;
  --table-drag-handle-color: rgba(3, 5, 9, 0.65);
  --table-drag-handle-color-active: #e4e4ff;
  --table-header-border-color: #6e6eec;
  --table-header-color: #111d34;
  --table-selection: hsla(240, 77%, 68%, 0.1);
  --table-selection-border-color: #1d335a;
  --tag-background: rgba(17, 29, 52, 0.85);
  --tag-background-hover: rgba(17, 29, 52, 0.85);
  --tag-border-color: hsla(240, 77%, 68%, 0.15);
  --tag-border-color-hover: hsla(240, 77%, 68%, 0.15);
  --tag-color: #d1d1ff;
  --tag-color-hover: #d1d1ff;
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover, hsl(237, 78.54%, 78.2%));
  --text-accent: hsl(240, 77%, 68%);
  --text-accent-hover: hsl(237, 78.54%, 78.2%);
  --text-error: #b43c3c;
  --text-faint: rgba(3, 5, 9, 0.65);
  --text-fainted: rgba(3, 5, 9, 0.65);
  --text-highlight-bg: rgba(242, 186, 68, 0.4);
  --text-muted: rgba(3, 5, 9, 0.85);
  --text-normal: #030509;
  --text-on-accent: #e4e4ff;
  --text-on-accent-inverted: #e4e4ff;
  --text-selection: rgba(110, 110, 236, 0.5);
  --text-success: #719461;
  --text-warning: #db8134;
  --textHighlight: var(--text-highlight-bg, rgba(242, 186, 68, 0.4));
  --titleFont: var(--font-text, IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: #172847;
  --titlebar-background-focused: #172847;
  --titlebar-border-color: #6e6eec;
  --titlebar-text-color: rgba(3, 5, 9, 0.85);
  --titlebar-text-color-focused: #030509;
  --vault-profile-color: #030509;
  --vault-profile-color-hover: #030509;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 40, 71);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(248, 248, 255);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 40, 71);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(110, 110, 236);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 40, 71);
  border-left-color: rgb(110, 110, 236);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body html {
  --fainted: 0.65;
  --muted: 0.85;
  --plexmono: 'IBM Plex Mono', monospace;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(174, 64, 15);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(174, 64, 15) none 0px;
  text-decoration-color: rgb(174, 64, 15);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(174, 15, 45);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(174, 15, 45) none 0px;
  text-decoration-color: rgb(174, 15, 45);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(174, 15, 45);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(174, 15, 45) none 0px;
  text-decoration-color: rgb(174, 15, 45);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(174, 64, 15);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(174, 64, 15) none 0px;
  text-decoration-color: rgb(174, 64, 15);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(242, 186, 68, 0.4);
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(3, 5, 9) none 0px;
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body del {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(3, 5, 9) none 0px;
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(17, 29, 52);
  border-color: rgb(17, 29, 52);
}

html[saved-theme="light"] body p {
  color: rgba(248, 248, 255, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 255, 0.85) none 0px;
  text-decoration-color: rgba(248, 248, 255, 0.85);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 29, 52) none 0px;
  text-decoration-color: rgb(17, 29, 52);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 29, 52) none 0px;
  text-decoration-color: rgb(17, 29, 52);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgba(17, 29, 52, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(17, 29, 52, 0.85) none 0px;
  text-decoration: underline rgb(17, 29, 52);
  text-decoration-color: rgb(17, 29, 52);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body dt {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ol > li {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ul > li {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(3, 5, 9, 0.65);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(110, 110, 236, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body table {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgb(17, 29, 52);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgba(110, 110, 236, 0.2);
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(110, 110, 236, 0.2);
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
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body figcaption {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(17, 29, 52);
  border-left-color: rgb(17, 29, 52);
  border-right-color: rgb(17, 29, 52);
  border-top-color: rgb(17, 29, 52);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(209, 209, 255);
  border-bottom-color: rgba(3, 5, 9, 0.85);
  border-left-color: rgba(3, 5, 9, 0.85);
  border-right-color: rgba(3, 5, 9, 0.85);
  border-top-color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(110, 110, 236, 0.15);
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(29, 51, 90);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(110, 110, 236, 0.15);
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(17, 29, 52, 0.65);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(17, 29, 52, 0.65);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 228, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 228, 255);
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
  background-color: rgb(110, 110, 236);
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
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 110,110,236;
  background: rgba(110, 110, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(3, 5, 9);
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
  background-color: rgb(189, 189, 255);
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(248, 248, 255);
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(17, 29, 52, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(17, 29, 52, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(17, 29, 52, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(228, 228, 255);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(228, 228, 255) none 0px;
  text-decoration-color: rgb(228, 228, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(29, 51, 90);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(17, 29, 52, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(17, 29, 52, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(17, 29, 52, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(23, 40, 71);
  border-left-color: rgb(248, 248, 255);
  border-right-color: rgb(248, 248, 255);
  border-top-color: rgb(248, 248, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(29, 51, 90);
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(29, 51, 90);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(17, 29, 52, 0.85);
  border-bottom-color: rgba(111, 111, 236, 0.15);
  border-left-color: rgba(111, 111, 236, 0.15);
  border-right-color: rgba(111, 111, 236, 0.15);
  border-top-color: rgba(111, 111, 236, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(209, 209, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(17, 29, 52);
  font-size: 35.2px;
}

html[saved-theme="light"] body h2 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(110, 110, 236, 0.65);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(248, 248, 255);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(248, 248, 255);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(3, 5, 9);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(189, 189, 255);
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgba(3, 5, 9, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(3, 5, 9, 0.85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(248, 248, 255);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(248, 248, 255);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(248, 248, 255);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(248, 248, 255);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(228, 228, 255);
  border-left-color: rgb(228, 228, 255);
  border-right-color: rgb(228, 228, 255);
  border-top-color: rgb(228, 228, 255);
  color: rgb(228, 228, 255);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(228, 228, 255);
  stroke: rgb(228, 228, 255);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(3, 5, 9, 0.85);
  border-left-color: rgba(3, 5, 9, 0.85);
  border-right-color: rgba(3, 5, 9, 0.85);
  border-top-color: rgba(3, 5, 9, 0.85);
  color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(3, 5, 9, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(248, 248, 255);
  border-color: rgb(3, 5, 9);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(110, 110, 236);
  color: rgb(17, 29, 52);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: rgb(209, 209, 255);
  border-bottom-color: rgb(110, 110, 236);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(110, 110, 236);
  border-left-width: 1px;
  border-right-color: rgb(110, 110, 236);
  border-right-width: 1px;
  border-top-color: rgb(110, 110, 236);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(3, 5, 9, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(3, 5, 9, 0.85);
  border-left-color: rgba(3, 5, 9, 0.85);
  border-right-color: rgba(3, 5, 9, 0.85);
  border-top-color: rgba(3, 5, 9, 0.85);
  color: rgba(3, 5, 9, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(209, 209, 255);
  border-color: rgb(110, 110, 236);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(17, 29, 52, 0.85);
  color: rgb(209, 209, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 248, 255);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(23, 40, 71);
  border-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(23, 40, 71);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(3, 5, 9);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(189, 189, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(3, 5, 9, 0.85);
  border-left-color: rgba(3, 5, 9, 0.85);
  border-right-color: rgba(3, 5, 9, 0.85);
  border-top-color: rgba(3, 5, 9, 0.85);
  color: rgba(3, 5, 9, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(29, 51, 90);
  border-bottom-color: rgb(228, 228, 255);
  border-left-color: rgb(228, 228, 255);
  border-right-color: rgb(228, 228, 255);
  border-top-color: rgb(228, 228, 255);
  color: rgb(228, 228, 255);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body sub {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body summary {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body sup {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(17, 29, 52, 0.85);
  border-bottom-color: rgba(111, 111, 236, 0.15);
  border-left-color: rgba(111, 111, 236, 0.15);
  border-right-color: rgba(111, 111, 236, 0.15);
  border-top-color: rgba(111, 111, 236, 0.15);
  color: rgb(209, 209, 255);
}`,
  },
};
